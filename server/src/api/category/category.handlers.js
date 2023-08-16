import db from '../../database/postgres/index.js'

const {Category} = db

const getCateories = async (ctx) => {
  try {
    const categories = await Category.findAll()
    ctx.body = categories
  } catch (error) {
    ctx.body = {
      data: null,
      error: {
        status: 500,
        message: 'Failed to get categories',
        details: {},
      },
    }
  }
}

const userHandlers = {
  getCateories,
}

export default userHandlers
