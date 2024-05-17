import jwtAuthenticater from '../../middlewares/jwtAuthenticater.js';
import paths from '../../constants/paths.js';
import bookingHandlers from './handlers.js';

const {
  bookingPaths: { bookings, bookingId, bookingExpiredId },
} = paths;

const routes = [
  {
    path: bookings,
    method: 'post',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await bookingHandlers.createBooking(ctx, next);
      });
    },
  },
  {
    path: bookingId,
    method: 'put',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await bookingHandlers.updateBooking(ctx, next);
      });
    },
  },
  {
    path: bookingId,
    method: 'delete',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await bookingHandlers.deleteBooking(ctx, next);
      });
    },
  },
  {
    path: bookingExpiredId,
    method: 'delete',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await bookingHandlers.deleteExpiredBooking(ctx, next);
      });
    },
  },
];

export default routes;
