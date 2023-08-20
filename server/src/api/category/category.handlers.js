import db from '../../database/postgres/instance/index.js'

const {Category} = db

const getCateories = async (ctx, next) => {
  try {
    ctx.state.categories = await Category.findAll()
    ctx.body = ctx.state.categories
  } catch (error) {
    ctx.assert(ctx.state.categories, 404, 'Books not found')
  }

  await next()
}

const cateoryHandlers = {
  getCateories,
}

export default cateoryHandlers
