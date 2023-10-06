import db from '../../database/postgres/instance/index.js'
import modelAliases from '../../constants/modelAliases.js'
import responseText from '../../constants/responseText.js'
import errorText from '../../constants/errorText.js'

const {User, Book, Delivery} = db
const {userAlias, extendedBookAlias, deliveryAlias, bookingAlias, historyAlias, commentAlias} = modelAliases
const {DELIVERY_CREATED_SUCCESS, DELIVERY_DELETED_SUCCESS} = responseText
const {USER_LIMIT_DELIVERY, BOOK_ALREADY_DELIVERED, CREATE_DELIVERY_ERROR, DELIVERY_DELETE_ERROR} = errorText

const getHistories = async (ctx, next) => {
  await next()
}

const createHistory = async (ctx, next) => {
  await next()
}

const historyHandlers = {
  getHistories,
  createHistory,
}

export default historyHandlers
