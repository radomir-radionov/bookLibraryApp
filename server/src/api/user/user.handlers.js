import db from '../../database/postgres/index.js'

const { User } = db

const createUser = async (ctx) => {
  try {
    const { booking, ...params } = ctx.request.body
    const user = await User.create(params)
    ctx.body = { message: 'User created successfully', user }
  } catch (error) {
    ctx.body = {
      data: null,
      error: {
        status: 500,
        message: 'Failed to create user',
        details: {},
      },
    }
  }
}

const userHandlers = {
  createUser,
}

export default userHandlers
