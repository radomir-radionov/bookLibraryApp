import dotenv from 'dotenv';
import sequelize from './instance.js';
import {
  user,
  token,
  avatar,
  book,
  history,
  booking,
  delivery,
  category,
  extendedBook,
  comment,
} from '../index.js';
import foreignKeys from '../../../constants/foreignKeys.js';
import modelAliases from '../../../constants/modelAliases.js';

dotenv.config();

const User = user(sequelize);
const Token = token(sequelize);
const Avatar = avatar(sequelize);
const Category = category(sequelize);
const Book = book(sequelize);
const Delivery = delivery(sequelize);
const Booking = booking(sequelize);
const History = history(sequelize);
const ExtendedBook = extendedBook(sequelize);
const Comment = comment(sequelize);

const { userId, bookId } = foreignKeys;
const {
  userAlias,
  tokenAlias,
  avatarAlias,
  bookAlias,
  extendedBookAlias,
  deliveryAlias,
  bookingAlias,
  historyAlias,
  commentAlias,
} = modelAliases;

// Token
User.hasOne(Token, { foreignKey: userId, as: tokenAlias });
Token.belongsTo(User, { foreignKey: userId, as: userAlias });

// Comment
User.hasMany(Comment, { foreignKey: userId, as: commentAlias });
Book.hasMany(Comment, { foreignKey: bookId, as: commentAlias });
Comment.belongsTo(User, { foreignKey: userId, as: userAlias });
Comment.belongsTo(Book, { foreignKey: bookId, as: bookAlias });

// Booking
User.hasOne(Booking, { foreignKey: userId, as: bookingAlias });
Book.hasOne(Booking, { foreignKey: bookId, as: bookingAlias });
Booking.belongsTo(User, { foreignKey: userId, as: userAlias });
Booking.belongsTo(Book, { foreignKey: bookId, as: bookAlias });

// Delivery
User.hasOne(Delivery, { foreignKey: userId, as: deliveryAlias });
Book.hasOne(Delivery, { foreignKey: bookId, as: deliveryAlias });
Delivery.belongsTo(User, { foreignKey: userId, as: userAlias });
Delivery.belongsTo(Book, { foreignKey: bookId, as: bookAlias });

// History
User.hasMany(History, { foreignKey: userId, as: historyAlias });
Book.hasMany(History, { foreignKey: bookId, as: historyAlias });
History.belongsTo(User, { foreignKey: userId, as: userAlias });
History.belongsTo(Book, { foreignKey: bookId, as: bookAlias });

// Extended Book
Book.hasOne(ExtendedBook, { foreignKey: bookId, as: extendedBookAlias });
ExtendedBook.belongsTo(Book, { foreignKey: bookId, as: bookAlias });

// Avatar
User.hasOne(Avatar, { foreignKey: userId, as: avatarAlias });
Avatar.belongsTo(User, { foreignKey: userId, as: avatarAlias });

const db = {
  sequelize,
  User,
  Token,
  Avatar,
  Category,
  Book,
  Delivery,
  Booking,
  History,
  ExtendedBook,
  Comment,
};

export default db;
