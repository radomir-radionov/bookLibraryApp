import db from '../../database/postgres/index.js'
import modelAliases from '../../constants/modelAliases.js'

const {Book} = db
const {extendedBookAlias, deliveryAlias, bookingAlias, historyAlias, commentAlias} = modelAliases

const getBooks = async (ctx) => {
  try {
    const {id} = ctx.request.body
    console.log(id)
    const book = await Book.findOne({
      where: {id},
      include: [deliveryAlias, bookingAlias, historyAlias],
    })

    if (!book) {
      throw new Error('Book not found')
    }

    const bookHistory = book.histories.length === 0 ? null : book.histories

    ctx.body = {
      data: {
        ...book.dataValues,
        histories: bookHistory,
      },
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      data: null,
      error: {
        status: 500,
        message: 'Failed to get books data',
        details: {},
      },
    }
  }
}

const getBookById = async (ctx) => {
  try {
    const id = ctx.params.id
    console.log(id)
    const book = await Book.findOne({
      where: {id},
      include: [extendedBookAlias, deliveryAlias, bookingAlias, historyAlias, commentAlias],
    })

    if (!book) {
      throw new Error('Book not found')
    }

    const bookHistory = book.histories.length === 0 ? null : book.histories

    ctx.body = {
      ...book.dataValues,
      histories: bookHistory,
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      data: null,
      error: {
        status: 500,
        message: 'Failed to get book data',
        details: {},
      },
    }
  }
}

const createBook = async (ctx) => {
  try {
    const {customer, ...params} = ctx.request.body
    // const user = await User.findOne({where: {id: customer}})
    const book = await Book.create(params)
    // @ts-ignore, sequalize is adding special method addBook added to instances
    // await user.addBook(book)
    ctx.body = {data: book}
  } catch (error) {
    ctx.body = {
      data: null,
      error: {
        status: 500,
        message: 'Failed to create book',
        details: {},
      },
    }
  }
}

const bookHandlers = {
  getBooks,
  getBookById,
  createBook,
}

export default bookHandlers
