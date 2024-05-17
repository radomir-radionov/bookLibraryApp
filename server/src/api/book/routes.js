import paths from '../../constants/paths.js';
import bookHandlers from './handlers.js';

const {
  bookPaths: { book, bookId },
} = paths;

const routes = [
  {
    path: book,
    method: 'get',
    action: bookHandlers.getBooks,
  },
  {
    path: bookId,
    method: 'get',
    action: bookHandlers.getBookById,
  },
];

export default routes;
