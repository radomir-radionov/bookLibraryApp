import db from '../../database/postgres/instance/index.js';
import modelAliases from '../../constants/modelAliases.js';
import errorText from '../../constants/errorText.js';

const { User, Avatar, Book, ExtendedBook, Comment } = db;
const {
  userAlias,
  avatarAlias,
  extendedBookAlias,
  deliveryAlias,
  bookingAlias,
  historyAlias,
  commentAlias,
} = modelAliases;
const { INVALID_BOOK } = errorText;
const getBooks = async (ctx, next) => {
  const books = await Book.findAll({
    include: [deliveryAlias, bookingAlias, historyAlias],
  });
  ctx.body = books;

  await next();
};

const getBookById = async (ctx, next) => {
  const id = ctx.params.id;
  const book = await Book.findOne({
    where: { id },
    include: [
      {
        model: ExtendedBook,
        as: extendedBookAlias,
        attributes: { exclude: ['id', 'bookId', 'createdAt', 'updatedAt'] },
      },
      deliveryAlias,
      bookingAlias,
      historyAlias,
      {
        model: Comment,
        as: commentAlias,
        include: [
          {
            model: User,
            as: userAlias,
            attributes: ['id', 'firstName', 'lastName'],
            include: [
              {
                model: Avatar,
                as: avatarAlias,
              },
            ],
          },
        ],
        attributes: { exclude: ['userId', 'updatedAt'] },
      },
    ],
  });
  ctx.assert(book, 404, INVALID_BOOK);

  const bookHistory = book.histories.length === 0 ? null : book.histories;
  const { extendedBook, ...restBook } = book.dataValues;
  const { _, bookId, createdAt, updatedAt, ...restExtendedBook } =
    extendedBook.dataValues;

  ctx.body = {
    ...restBook,
    ...restExtendedBook,
    bookHistory,
  };

  await next();
};

const bookHandlers = {
  getBooks,
  getBookById,
};

export default bookHandlers;
