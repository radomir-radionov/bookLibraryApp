import paths from '../../constants/paths.js'
import categoryHandlers from './category.handlers.js'

const {
  categoryPaths: {category},
} = paths

const routes = [
  {
    path: category,
    method: 'get',
    action: categoryHandlers.getCateories,
  },
]

export default routes
