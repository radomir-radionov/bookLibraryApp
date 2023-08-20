import db from '../../database/postgres/instance/index.js'
import modelAliases from '../../constants/modelAliases.js'

const {Book} = db
const {extendedBookAlias, deliveryAlias, bookingAlias, historyAlias, commentAlias} = modelAliases

//TODO: create book feature will be soon

const createBook = async (ctx, next) => {
  console.log('feature will be soon')
  // try {
  //   const params = ctx.request.body
  //   const book = await Book.update({...params})
  //   // await user.addBook(book)
  //   ctx.body = {data: book}
  // } catch (error) {
  //   ctx.assert(ctx.state.book, 500, 'Book was not created')
  // }
  // await next()
}

const getBooks = async (ctx, next) => {
  try {
    ctx.state.books = await Book.findAll()
    ctx.body = ctx.state.books
  } catch (error) {
    ctx.assert(ctx.state.books, 500, 'Books not found')
  }

  await next()
}

const getBookById = async (ctx, next) => {
  try {
    const id = ctx.params.id

    ctx.state.book = await Book.findOne({
      where: {id},
      include: [extendedBookAlias, deliveryAlias, bookingAlias, historyAlias, commentAlias],
    })
    const book = ctx.state.book
    const bookHistory = book.histories.length === 0 ? null : book.histories

    ctx.body = {
      ...book.dataValues,
      histories: bookHistory,
    }
  } catch (error) {
    ctx.assert(ctx.state.book, 404, 'Book not found')
  }

  await next()
}

const bookHandlers = {
  createBook,
  getBooks,
  getBookById,
}

export default bookHandlers
