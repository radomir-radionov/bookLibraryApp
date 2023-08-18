import userRoutes from './api/user/index.js'
import bookRoutes from './api/book/index.js'
import categoryRoutes from './api/category/index.js'

const AppRoutes = [...userRoutes, ...categoryRoutes, ...bookRoutes]

export default AppRoutes
