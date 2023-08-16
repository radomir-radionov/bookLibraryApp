import categoryHandlers from './category.handlers.js'

const routes = [
  {
    path: '/category',
    method: 'get',
    action: categoryHandlers.getCateories,
  },
]

export default routes
