import userRoutes from './api/user/index.js';
import authRoutes from './api/auth/index.js';
import bookRoutes from './api/book/index.js';
import categoryRoutes from './api/category/index.js';
import bookingRoutes from './api/booking/index.js';
import deliveryRoutes from './api/delivery/index.js';
import historyRoutes from './api/history/index.js';

const AppRoutes = [
  ...userRoutes,
  ...authRoutes,
  ...categoryRoutes,
  ...bookRoutes,
  ...bookingRoutes,
  ...deliveryRoutes,
  ...historyRoutes,
];

export default AppRoutes;
