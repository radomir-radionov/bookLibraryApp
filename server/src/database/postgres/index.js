import dotenv from 'dotenv'
import sequelize from './instance.js'
import book from '../models/book.js'
import category from '../models/category.js'
import delivery from '../models/delivery.js'
import booking from '../models/booking.js'
import history from '../models/history.js'

dotenv.config()

const Book = book(sequelize)
const Category = category(sequelize)
const Delivery = delivery(sequelize)
const Booking = booking(sequelize)
const History = history(sequelize)
// const User = sequelize.define('User', user)

// const ExtendedBooks = sequelize.define('ExtendedBooks', extendedBook)
// const Comment = sequelize.define('Comments', comment)

Book.hasOne(Delivery, {foreignKey: 'bookId', as: 'delivery'})
Book.hasOne(Booking, {foreignKey: 'bookId', as: 'booking'})
Book.hasMany(History, {foreignKey: 'bookId', as: 'history'})

Booking.belongsTo(Book, {foreignKey: 'bookId', as: 'book'})
Delivery.belongsTo(Book, {foreignKey: 'bookId', as: 'book'})
History.belongsTo(Book, {foreignKey: 'bookId', as: 'book'})

const db = {
  sequelize,
  // User,
  Book,
  Category,
  Delivery,
  Booking,
  History,
  // ExtendedBooks,
  // Comment,
}

export default db
