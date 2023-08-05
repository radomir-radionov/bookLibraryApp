import db from '../../database/postgres/index.js'

const { Book, User } = db

const createBook = async (ctx) => {
  try {
    const { customer, ...params } = ctx.request.body
    const user = await User.findOne({ where: { id: customer } })
    const book = await Book.create(params)
    // @ts-ignore, sequalize is adding special method addBook added to instances
    await user.addBook(book)
    ctx.body = { data: book }
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
  createBook,
}

export default bookHandlers
