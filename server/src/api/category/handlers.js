import db from '../../database/postgres/instance/index.js'

const {Category} = db

const getCateories = async (ctx, next) => {
  const categories = await Category.findAll()
  ctx.body = categories

  await next()
}

const cateoryHandlers = {
  getCateories,
}

export default cateoryHandlers
