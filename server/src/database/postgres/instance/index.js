import dotenv from 'dotenv'
import sequelize from './instance.js'
import {user, book, history, booking, delivery, category, extendedBook, comment} from '../index.js'
import foreignKeys from '../../../constants/foreignKeys.js'
import modelAliases from '../../../constants/modelAliases.js'

dotenv.config()

const User = user(sequelize)
const Category = category(sequelize)
const Book = book(sequelize)
const Delivery = delivery(sequelize)
const Booking = booking(sequelize)
const History = history(sequelize)
const ExtendedBook = extendedBook(sequelize)
const Comment = comment(sequelize)

const {userId, bookId} = foreignKeys
const {userAlias, bookAlias, extendedBookAlias, deliveryAlias, bookingAlias, historyAlias, commentAlias} = modelAliases

Book.hasOne(ExtendedBook, {foreignKey: bookId, as: extendedBookAlias})
Book.hasOne(Delivery, {foreignKey: bookId, as: deliveryAlias})
Book.hasOne(Booking, {foreignKey: bookId, as: bookingAlias})
Book.hasMany(History, {foreignKey: bookId, as: historyAlias})
Book.hasMany(Comment, {foreignKey: bookId, as: commentAlias})

User.hasOne(Booking, {foreignKey: bookId, as: bookingAlias})
User.hasOne(Delivery, {foreignKey: bookId, as: deliveryAlias})
User.hasMany(History, {foreignKey: bookId, as: historyAlias})
User.hasMany(Comment, {foreignKey: bookId, as: commentAlias})

Delivery.belongsTo(User, {foreignKey: userId, as: userAlias})
Booking.belongsTo(User, {foreignKey: userId, as: userAlias})
History.belongsTo(User, {foreignKey: userId, as: userAlias})
Comment.belongsTo(User, {foreignKey: userId, as: userAlias})

ExtendedBook.belongsTo(Book, {foreignKey: bookId, as: bookAlias})
Delivery.belongsTo(Book, {foreignKey: bookId, as: bookAlias})
Booking.belongsTo(Book, {foreignKey: bookId, as: bookAlias})
History.belongsTo(Book, {foreignKey: bookId, as: bookAlias})
Comment.belongsTo(Book, {foreignKey: bookId, as: bookAlias})

const db = {
  sequelize,
  User,
  Book,
  Category,
  Delivery,
  Booking,
  History,
  ExtendedBook,
  Comment,
}

export default db
