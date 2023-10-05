import db from '../../database/postgres/instance/index.js'
import modelAliases from '../../constants/modelAliases.js'
import responseText from '../../constants/responseText.js'
import errorText from '../../constants/errorText.js'
import checkExpiredDate from './helpers/checkExpiredDate.js'

const {Book, Booking} = db
const {bookingAlias} = modelAliases
const {CREATE_BOOKING_ERROR, BOOK_ALREADY_BOOKED, USER_LIMIT_BOOKING, BOOKING_DELETE_ERROR, EXPIRED_BOOKING_DELETE_ERROR} = errorText
const {BOOKING_DELETED_SUCCESS, EXPIRED_BOOKING_DELETED_SUCCESS} = responseText

const createBooking = async (ctx, next) => {
  const bookingData = ctx.request.body
  const bookingByUserId = await Booking.findAll({where: {userId: bookingData.userId}})
  const bookingsByBookId = await Booking.findAll({where: {bookId: bookingData.bookId}})

  if (bookingByUserId.some(({userId}) => userId === bookingData.userId)) {
    ctx.throw(404, USER_LIMIT_BOOKING)
  }

  if (bookingsByBookId.some(({bookId}) => bookId === bookingData.bookId)) {
    ctx.throw(404, BOOK_ALREADY_BOOKED)
  }

  const createdBooking = await Booking.create(bookingData)

  const book = await Book.findOne({
    where: {id: bookingData.bookId},
    attributes: {exclude: ['issueYear', 'categories', 'createdAt', 'updatedAt']},
  })

  ctx.assert(createdBooking, 404, CREATE_BOOKING_ERROR)

  ctx.body = {...createdBooking.dataValues, book}
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

  const isBookingDeleted = await Booking.destroy({where: {bookId: id}})
  ctx.assert(isBookingDeleted, 404, BOOKING_DELETE_ERROR)

  ctx.body = {message: BOOKING_DELETED_SUCCESS}
  await next()
}

const deleteExpiredBooking = async (ctx, next) => {
  const id = ctx.params.id

  const isExpired = await checkExpiredDate(id)

  if (isExpired) {
    const isExpiredBookingDeleted = await Booking.destroy({where: {id}})
    ctx.assert(isExpiredBookingDeleted, 404, EXPIRED_BOOKING_DELETE_ERROR)
  }

  ctx.body = {message: EXPIRED_BOOKING_DELETED_SUCCESS}
  await next()
}

const bookingHandlers = {
  createBooking,
  updateBooking,
  deleteBooking,
  deleteExpiredBooking,
}

export default bookingHandlers
