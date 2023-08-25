import db from '../../database/postgres/instance/index.js'
import modelAliases from '../../constants/modelAliases.js'
import errorText from '../../constants/errorText.js'

const {Book} = db
const {extendedBookAlias, deliveryAlias, bookingAlias, historyAlias, commentAlias} = modelAliases
const {INVALID_BOOK} = errorText

const getBooks = async (ctx, next) => {
  const books = await Book.findAll()
  ctx.body = books

  await next()
}

const getBookById = async (ctx, next) => {
  const id = ctx.params.id

  const book = await Book.findOne({
    where: {id},
    include: [extendedBookAlias, deliveryAlias, bookingAlias, historyAlias, commentAlias],
  })

  ctx.assert(book, 404, INVALID_BOOK)

  const bookHistory = book.histories.length === 0 ? null : book.histories

  ctx.body = {
    ...book.dataValues,
    histories: bookHistory,
  }

  await next()
}

const bookHandlers = {
  getBooks,
  getBookById,
}

export default bookHandlers
