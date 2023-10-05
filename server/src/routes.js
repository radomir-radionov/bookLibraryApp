import userRoutes from './api/user/index.js'
import bookRoutes from './api/book/index.js'
import categoryRoutes from './api/category/index.js'
import bookingRoutes from './api/booking/index.js'
import deliveryRoutes from './api/delivery/index.js'

const AppRoutes = [...userRoutes, ...categoryRoutes, ...bookRoutes, ...bookingRoutes, ...deliveryRoutes]

export default AppRoutes
