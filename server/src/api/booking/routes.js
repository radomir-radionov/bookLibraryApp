import paths from '../../constants/paths.js'
import bookingHandlers from './handlers.js'

const {
  bookingPaths: {bookings, bookingId},
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
]

export default routes
