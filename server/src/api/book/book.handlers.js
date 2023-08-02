import db from '../../database/postgres/index.js'

const { Book } = db

const createBook = async (ctx) => {
  try {
    const book = await Book.create(ctx.request.body)
    ctx.body = { message: 'Book created successfully', data: book }
  } catch (error) {
    ctx.status = 500 // Internal Server Error
    ctx.body = { error: 'Failed to create user' }
  }
}

const bookHandlers = {
  createBook,
}

export default bookHandlers
