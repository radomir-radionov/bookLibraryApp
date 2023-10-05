import db from '../../database/postgres/instance/index.js'
import modelAliases from '../../constants/modelAliases.js'
import responseText from '../../constants/responseText.js'
import errorText from '../../constants/errorText.js'

const {User, Book, Delivery} = db
const {userAlias, extendedBookAlias, deliveryAlias, bookingAlias, historyAlias, commentAlias} = modelAliases
const {DELIVERY_CREATED_SUCCESS, DELIVERY_DELETED_SUCCESS} = responseText
const {USER_LIMIT_DELIVERY, BOOK_ALREADY_DELIVERED, CREATE_DELIVERY_ERROR, DELIVERY_DELETE_ERROR} = errorText

const createDelivery = async (ctx, next) => {
  const deliveryData = ctx.request.body
  const deliverByUserId = await Delivery.findAll({where: {userId: deliveryData.userId}})
  const deliversByBookId = await Delivery.findAll({where: {bookId: deliveryData.bookId}})

  if (deliverByUserId.some(({userId}) => userId === deliveryData.userId)) {
    ctx.throw(404, USER_LIMIT_DELIVERY)
  }

  if (deliversByBookId.some(({bookId}) => bookId === deliveryData.bookId)) {
    ctx.throw(404, BOOK_ALREADY_DELIVERED)
  }

  const createdDelivery = await Delivery.create(deliveryData)
  ctx.assert(createdDelivery, 404, CREATE_DELIVERY_ERROR)

  ctx.body = {message: DELIVERY_CREATED_SUCCESS}

  await next()
}

const deleteDelivery = async (ctx, next) => {
  const id = ctx.params.id

  const isDeliveryDeleted = await Delivery.destroy({where: {bookId: id}})
  ctx.assert(isDeliveryDeleted, 404, DELIVERY_DELETE_ERROR)

  ctx.body = {message: DELIVERY_DELETED_SUCCESS}
  await next()
}

const bookHandlers = {
  createDelivery,
  deleteDelivery,
}

export default bookHandlers
