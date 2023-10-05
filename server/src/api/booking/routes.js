import paths from '../../constants/paths.js'
import bookingHandlers from './handlers.js'

const {
  bookingPaths: {bookings, bookingId, bookingExpiredId},
} = paths

const routes = [
  {
    path: bookings,
    method: 'post',
    action: bookingHandlers.createBooking,
  },
  {
    path: bookingId,
    method: 'put',
    action: bookingHandlers.updateBooking,
  },
  {
    path: bookingId,
    method: 'delete',
    action: bookingHandlers.deleteBooking,
  },
  {
    path: bookingExpiredId,
    method: 'delete',
    action: bookingHandlers.deleteExpiredBooking,
  },
]

export default routes
