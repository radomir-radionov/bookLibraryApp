import db from '../../database/postgres/instance/index.js'
import errorText from '../../constants/errorText.js'

const {Booking} = db
const {CREATE_BOOKING_ERROR, BOOK_ALREADY_BOOKED, USER_LIMIT_BOOKING, BOOKING_DELETE_ERROR} = errorText

const createBooking = async (ctx, next) => {
  const bookingData = ctx.request.body

  const bookingByUserId = await Booking.findAll({where: {userId: bookingData.userId}})
  const bookingsByBookId = await Booking.findAll({where: {bookId: bookingData.bookId}})

  if (bookingByUserId.some((booking) => booking.userId === bookingData.userId)) {
    ctx.throw(404, USER_LIMIT_BOOKING)
  }

  if (bookingsByBookId.some((booking) => booking.bookId === bookingData.bookId)) {
    ctx.throw(404, BOOK_ALREADY_BOOKED)
  }

  const createdBooking = await Booking.create(bookingData)

  ctx.assert(createdBooking, 404, CREATE_BOOKING_ERROR)

  ctx.body = createdBooking.dataValues
  await next()
}

const updateBooking = async (ctx, next) => {
  const id = ctx.params.id
  const bookingData = ctx.request.body

  await Booking.update({...bookingData}, {where: {id}})

  ctx.body = true
  await next()
}

const deleteBooking = async (ctx, next) => {
  const id = ctx.params.id

  const isBookingDeleted = await Booking.destroy({where: {id}})

  ctx.assert(isBookingDeleted, 404, BOOKING_DELETE_ERROR)

  ctx.body = true
  await next()
}

const bookingHandlers = {
  createBooking,
  updateBooking,
  deleteBooking,
}

export default bookingHandlers
