import db from '../../database/postgres/index.js'

const { User } = db

const createUser = async (ctx) => {
  try {
    const { booking, ...params } = ctx.request.body
    console.log(booking)
    console.log(params)
    const user = await User.create(ctx.request.body)
    ctx.body = { message: 'User created successfully', data: user }
  } catch (error) {
    ctx.status = 500 // Internal Server Error
    ctx.body = { error: 'Failed to create user' }
  }
}

const userHandlers = {
  createUser,
}

export default userHandlers
