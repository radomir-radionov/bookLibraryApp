import db from '../../database/postgres/instance/index.js'
import errorText from '../../constants/errorText.js'

const {User} = db
const {INVALID_USER} = errorText

const createUser = async (ctx, next) => {
  const user = await User.create({...ctx.request.body})

  ctx.assert(user, 500, 'Failed to create user')
  ctx.body = {jwt: '1', user}

  await next()
}

const getUsers = async (ctx, next) => {
  const users = await User.findAll()
  ctx.body = users

  await next()
}

const getUserById = async (ctx, next) => {
  const id = ctx.params.id

  const user = await User.findOne({where: {id}})
  ctx.assert(user, 404, INVALID_USER)
  ctx.body = user

  await next()
}

const userHandlers = {
  createUser,
  getUsers,
  getUserById,
}

export default userHandlers
