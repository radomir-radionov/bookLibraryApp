import db from '../../database/postgres/index.js'

const {User} = db

const getUser = async (ctx) => {
  try {
    const {id} = ctx.request.body
    const user = await User.findOne({
      where: {id},
    })

    if (!user) {
      throw new Error('Book not found')
    }

    ctx.body = {
      user,
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      data: null,
      error: {
        status: 500,
        message: 'Failed to get user data',
        details: {},
      },
    }
  }
}

const createUser = async (ctx) => {
  try {
    const {booking, ...params} = ctx.request.body
    const user = await User.create(params)
    ctx.body = {message: 'User created successfully', user}
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
  getUser,
  createUser,
}

export default userHandlers
