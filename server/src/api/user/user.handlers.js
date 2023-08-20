import db from '../../database/postgres/instance/index.js'

const {User} = db

//TODO: create user feature will be soon

const createUser = async (ctx, next) => {
  console.log('feature will be soon')
  // try {
  //   const {booking, ...params} = ctx.request.body
  //   const user = await User.create(params)
  //   ctx.body = {message: 'User created successfully', user}
  // } catch (error) {
  //   ctx.assert(ctx.state.user, 500, 'Failed to create user')
  // }
  // await next()
}

const getUsers = async (ctx, next) => {
  try {
    ctx.state.users = await User.findAll()
    ctx.body = ctx.state.users
  } catch (error) {
    ctx.assert(ctx.state.users, 500, 'Users not found')
  }

  await next()
}

const getUserById = async (ctx, next) => {
  try {
    const id = ctx.params.id

    ctx.state.user = await User.findOne({where: {id}})

    if (!ctx.state.user) {
      ctx.assert(ctx.state.user, 404, 'User not found')
    }

    ctx.body = ctx.state.user

    console.log(ctx.state.user)
  } catch (error) {
    ctx.assert(ctx.state.user, 500, 'Internal Server Error')
    throw error
  }

  await next()
}

const userHandlers = {
  createUser,
  getUsers,
  getUserById,
}

export default userHandlers
