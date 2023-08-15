import bookHandlers from './book.handlers.js'

const routes = [
  {
    path: '/book',
    method: 'get',
    action: bookHandlers.getBook,
  },
  {
    path: '/book',
    method: 'post',
    action: bookHandlers.createBook,
  },
]

export default routes
