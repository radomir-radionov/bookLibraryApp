import bookHandlers from './book.handlers.js'

const routes = [
  {
    path: '/book',
    method: 'post',
    action: bookHandlers.createBook,
  },
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
]

export default routes
