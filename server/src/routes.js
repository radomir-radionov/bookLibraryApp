import userRoutes from './api/user/index.js'
import bookRoutes from './api/book/index.js'

const AppRoutes = [...userRoutes, ...bookRoutes]

export default AppRoutes
