import dotenv from 'dotenv'
import sequelize from './instance.js'
import book from '../models/book.js'
import category from '../models/category.js'
import delivery from '../models/delivery.js'
import booking from '../models/booking.js'
import history from '../models/history.js'

dotenv.config()

const Book = sequelize.define('Book', book)
const Category = sequelize.define('Category', category)
const Delivery = sequelize.define('Delivery', delivery)
const Booking = sequelize.define('Booking', booking)
const History = sequelize.define('History', history)
// const User = sequelize.define('User', user)

// const ExtendedBooks = sequelize.define('ExtendedBooks', extendedBook)
// const Comment = sequelize.define('Comments', comment)

Book.hasOne(Delivery, {foreignKey: 'bookId', as: 'delivery'})
Book.hasOne(Booking, {foreignKey: 'bookId', as: 'booking'})
Book.hasMany(History, {foreignKey: 'bookId', as: 'history'})

Delivery.belongsTo(Book, {foreignKey: 'bookId', as: 'book'})
Booking.belongsTo(Book, {foreignKey: 'bookId', as: 'book'})
History.belongsTo(Book, {foreignKey: 'bookId', as: 'book'})

Booking.hasOne(Book, {foreignKey: 'bookId', as: 'book'})

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
