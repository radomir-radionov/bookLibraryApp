import bookHandlers from './book.handlers.js'

const routes = [
  {
    path: '/book',
    method: 'get',
    action: bookHandlers.getBooks,
  },
  {
    path: '/book/:id',
    method: 'get',
    action: bookHandlers.getBookById,
  },
  {
    path: '/book',
    method: 'post',
    action: bookHandlers.createBook,
  },
]

export default routes
