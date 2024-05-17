import fs from 'fs';
import pkg from 'lodash';

import db from '../../database/postgres/instance/index.js';
import modelAliases from '../../constants/modelAliases.js';
import errorText from '../../constants/errorText.js';
import createHash from '../../utils/createHash.js';
import prepareUpdateCommentRes from './helpers/prepareUpdateCommentRes.js';
import generateCode from './helpers/generateCode.js';
import sendMail from './services/mail.js';

const { omit } = pkg;
const { User, Avatar, Book, Comment, Booking, Delivery } = db;
const {
  CREATE_COMMENT_ERROR,
  USER_NOT_FOUND,
  USER_AVATAR_NOT_FOUND,
  COMMENT_NOT_FOUND,
  CREATE_AVATAR_ERROR,
  UPLOAD_AVATAR_SUCCESS,
  NO_FILE,
} = errorText;
const { bookAlias, deliveryAlias, bookingAlias, historyAlias, commentAlias } = modelAliases;

const getUsers = async (ctx, next) => {
  const users = await User.findAll();
  ctx.body = users;

  await next();
};

const getUserById = async (ctx, next) => {
  const id = ctx.params.id;

  const foundedUser = await User.findOne({
    where: { id },
    include: [
      {
        model: Delivery,
        as: deliveryAlias,
        include: [
          {
            model: Book,
            as: bookAlias,
            attributes: {
              exclude: ['categories', 'createdAt', 'updatedAt'],
            },
          },
        ],
      },
      {
        model: Booking,
        as: bookingAlias,
        include: [
          {
            model: Book,
            as: bookAlias,
            attributes: {
              exclude: ['categories', 'createdAt', 'updatedAt'],
            },
          },
        ],
      },
      historyAlias,
      commentAlias,
    ],
  });

  ctx.assert(foundedUser, 404, USER_NOT_FOUND);

  const user = omit(foundedUser.dataValues, [
    'id',
    'firstName',
    'lastName',
    'email',
    'phone',
    'passwordHash',
    'blocked',
    'confirmed',
    'provider',
    'username',
    'createdAt',
    'updatedAt',
  ]);

  ctx.body = user;

  await next();
};

const updateUser = async (ctx, next) => {
  const id = ctx.params.id;
  const body = ctx.request.body;

  await User.update({ ...body }, { where: { id } });

  const foundedUser = await User.findOne({ where: { id } });

  ctx.assert(foundedUser, 404, USER_NOT_FOUND);

  const user = omit(foundedUser.dataValues, ['passwordHash', 'createdAt', 'updatedAt']);

  ctx.body = user;

  await next();
};

const getUserAvatar = async (ctx, next) => {
  const id = ctx.params.id;

  const user = await User.findOne({ where: { id } });
  ctx.assert(user, 404, USER_NOT_FOUND);

  const avatar = await Avatar.findOne({ where: { userId: id } });
  ctx.assert(avatar, 404, USER_AVATAR_NOT_FOUND);

  ctx.body = avatar;

  await next();
};

const updateUserAvatarById = async (ctx, next) => {
  const id = ctx.params.id;
  const { files } = ctx.request;

  if (!files || !files.avatar) {
    ctx.throw(400, NO_FILE);
    return;
  }

  const newAvatarData = await fs.promises.readFile(files.avatar.filepath);
  const user = await User.findByPk(id);
  ctx.assert(user, 404, USER_NOT_FOUND);

  await Avatar.destroy({ where: { userId: id } });

  const avatarBufferData = Buffer.from(newAvatarData);
  const avatarBase64 = avatarBufferData.toString('base64');

  const avatar = {
    userId: id,
    contentType: files.avatar.mimetype,
    fileName: files.avatar.originalFilename,
    data: avatarBase64,
  };

  const createdAvatar = await Avatar.create(avatar);
  ctx.assert(createdAvatar, 404, CREATE_AVATAR_ERROR);

  ctx.body = { data: createdAvatar, message: UPLOAD_AVATAR_SUCCESS };
  await next();
};

const createComment = async (ctx, next) => {
  const commentData = ctx.request.body;
  console.log(commentData);
  const createdComment = await Comment.create(commentData);
  ctx.assert(createdComment, 404, CREATE_COMMENT_ERROR);

  ctx.body = createdComment.dataValues;
  await next();
};

const updateComment = async (ctx, next) => {
  const id = ctx.params.id;
  const body = ctx.request.body;
  const { rating, text } = body;

  await Comment.update({ rating, text }, { where: { id } });
  const foundedComment = await Comment.findOne({ where: { id } });

  ctx.assert(foundedComment, 404, COMMENT_NOT_FOUND);
  ctx.body = prepareUpdateCommentRes(foundedComment.dataValues);

  await next();
};

const forgotPassword = async (ctx, next) => {
  const { email } = ctx.request.body;

  const foundedUser = await User.findOne({ where: { email } });
  ctx.assert(foundedUser, 404, USER_NOT_FOUND);

  const code = generateCode();
  await User.update({ code }, { where: { email } });

  await sendMail(email, code);

  ctx.body = code;

  await next();
};

const resetPassword = async (ctx, next) => {
  const { passwordConfirmation, code } = ctx.request.body;
  const foundedUser = await User.findOne({ where: { code } });
  ctx.assert(foundedUser, 404, USER_NOT_FOUND);

  const passwordHash = await createHash(passwordConfirmation);
  foundedUser.passwordHash = passwordHash;
  await foundedUser.save();

  ctx.body = true;

  await next();
};

const userHandlers = {
  getUsers,
  getUserById,
  updateUser,
  getUserAvatar,
  updateUserAvatarById,
  createComment,
  updateComment,
  forgotPassword,
  resetPassword,
};

export default userHandlers;
