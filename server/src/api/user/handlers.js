import pkg from 'lodash'
import {compare} from 'bcrypt'

import db from '../../database/postgres/instance/index.js'
import modelAliases from '../../constants/modelAliases.js'
import errorText from '../../constants/errorText.js'
import {createJwtToken} from '../../services/jwt.js'
import createHash from '../../utils/createHash.js'
import prepareUpdateCommentRes from '../../helpers/user/prepareUpdateCommentRes.js'

const {omit} = pkg
const {User, Comment} = db
const {INVALID_USER, EXSITED_USER, AUTH_WRONG_DATA, CREATE_USER_ERROR, CREATE_COMMENT_ERROR, UPDATE_COMMENT_ERROR, USER_NOT_FOUND, COMMENT_NOT_FOUND} = errorText
const {deliveryAlias, bookingAlias, historyAlias, commentAlias} = modelAliases

const createUser = async (ctx, next) => {
  const registerData = ctx.request.body
  const {email, password} = registerData

  const foundUser = await User.findOne({where: {email}})
  ctx.assert(!foundUser, 404, EXSITED_USER)

  const passwordHash = await createHash(password)
  const createdUser = await User.create({...registerData, passwordHash})
  const user = omit(createdUser.dataValues, ['passwordHash'])
  ctx.assert(createdUser, 500, CREATE_USER_ERROR)

  const token = createJwtToken({sub: user.id, iat: Date.now() / 1000})

  ctx.body = {jwt: token, user}
  await next()
}

const authenticateUser = async (ctx, next) => {
  const authData = ctx.request.body
  const {email, password} = authData

  const foundUser = await User.findOne({where: {email}})
  ctx.assert(foundUser, 404, USER_NOT_FOUND)

  const isPasswordEquals = await compare(password, foundUser.passwordHash)
  ctx.assert(isPasswordEquals, 401, AUTH_WRONG_DATA)

  const user = omit(foundUser.dataValues, ['passwordHash'])
  const token = createJwtToken({sub: user.id, iat: Date.now() / 1000})

  ctx.body = {jwt: token, user}

  await next()
}

const getUsers = async (ctx, next) => {
  const users = await User.findAll()
  ctx.body = users

  await next()
}

const getUserById = async (ctx, next) => {
  const id = ctx.params.id

  const foundUser = await User.findOne({
    where: {id},
    include: [deliveryAlias, bookingAlias, historyAlias, commentAlias],
  })

  const user = omit(foundUser.dataValues, ['id', 'firstName', 'lastName', 'email', 'phone', 'passwordHash', 'blocked', 'confirmed', 'provider', 'username', 'createdAt', 'updatedAt'])
  ctx.assert(foundUser, 404, INVALID_USER)
  ctx.body = user

  await next()
}

const updateUser = async (ctx, next) => {
  const id = ctx.params.id
  const body = ctx.request.body
  console.log(id)
  const a = await User.update({...body}, {where: {id}})
  console.log('aaaa', a)
  // ctx.body = 1

  await next()
}

const createComment = async (ctx, next) => {
  const commentData = ctx.request.body
  const createdComment = await Comment.create(commentData)

  ctx.assert(createdComment, 404, CREATE_COMMENT_ERROR)
  ctx.body = createdComment.dataValues
  await next()
}

const updateComment = async (ctx, next) => {
  const id = ctx.params.id
  const body = ctx.request.body
  const {rating, text} = body

  await Comment.update({rating, text}, {where: {id}})
  const foundedComment = await Comment.findOne({where: {id}})

  ctx.assert(foundedComment, 404, COMMENT_NOT_FOUND)
  ctx.body = prepareUpdateCommentRes(foundedComment.dataValues)

  await next()
}

const userHandlers = {
  createUser,
  authenticateUser,
  getUsers,
  getUserById,
  updateUser,
  createComment,
  updateComment,
}

export default userHandlers
