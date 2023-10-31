import pkg from 'lodash';
import { compare } from 'bcrypt';

import db from '../../../database/postgres/instance/index.js';
import modelAliases from '../../../constants/modelAliases.js';
import errorText from '../../../constants/errorText.js';
import createHash from '../../../utils/createHash.js';
import tokenService from '.././services/tokenService.js';

const { omit } = pkg;
const { User } = db;
const {
  EXSITED_USER,
  USER_NOT_FOUND,
  LOGIN_WRONG_DATA,
  CREATE_USER_ERROR,
  UNAUTHORIZED_USER,
} = errorText;

const registration = async (ctx, registerData) => {
  const { email, password } = registerData;

  const foundedUser = await User.findOne({ where: { email } });
  ctx.assert(!foundedUser, 404, EXSITED_USER);

  const passwordHash = await createHash(password);
  const createdUser = await User.create({ ...registerData, passwordHash });
  const user = omit(createdUser.dataValues, ['passwordHash']);
  ctx.assert(createdUser, 500, CREATE_USER_ERROR);

  const tokens = tokenService.generateTokens(user);
  tokenService.saveToken(createdUser.id, tokens.refreshToken);

  return { ...tokens, user };
};

const login = async (ctx, loginData) => {
  const { email, password } = loginData;

  const user = await User.findOne({ where: { email } });
  ctx.assert(user, 404, USER_NOT_FOUND);

  const isPasswordEquals = await compare(
    password,
    user.dataValues.passwordHash
  );
  ctx.assert(isPasswordEquals, 401, LOGIN_WRONG_DATA);

  const editedUser = omit(user.dataValues, ['passwordHash']);
  const tokens = tokenService.generateTokens(user.dataValues);

  tokenService.saveToken(editedUser.id, tokens.refreshToken);

  return { ...tokens, user: editedUser };
};

const logout = async (refreshToken) =>
  await tokenService.removeToken(refreshToken);

const refresh = async (ctx, refreshToken) => {
  ctx.assert(refreshToken, 401, UNAUTHORIZED_USER);

  const userData = tokenService.validateRefreshToken(refreshToken);

  const tokenFromDb = await tokenService.findToken(refreshToken);
  ctx.assert(userData || tokenFromDb, 401, UNAUTHORIZED_USER);

  const user = await User.findOne({ where: { id: userData.id } });
  ctx.assert(user, 404, USER_NOT_FOUND);

  const editedUser = omit(user.dataValues, ['passwordHash']);
  const tokens = tokenService.generateTokens(user.dataValues);

  await tokenService.saveToken(editedUser.id, tokens.refreshToken);
  return { ...tokens, user: editedUser };
};

const authService = { registration, login, logout, refresh };

export default authService;
