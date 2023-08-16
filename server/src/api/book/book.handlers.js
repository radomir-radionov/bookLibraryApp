import db from '../../database/postgres/index.js'

const {Book} = db

const getBook = async (ctx) => {
  try {
    const {id} = ctx.request.body
    console.log(id)
    const book = await Book.findOne({
      where: {id},
      include: ['delivery', 'booking', 'history'],
    })

    if (!book) {
      throw new Error('Book not found')
    }

    // @ts-ignore
    const bookHistory = book.history.length === 0 ? null : book.history

    ctx.body = {
      data: {
        ...book.dataValues,
        history: bookHistory,
      },
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
  getBook,
  createBook,
}

export default bookHandlers
