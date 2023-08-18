import dotenv from 'dotenv'
import sequelize from './instance.js'
import {user, history, booking, delivery, category, book} from '../index.js'

dotenv.config()

const User = sequelize.define('User', user)
const Category = sequelize.define('Category', category)
const Book = sequelize.define('Book', book)
const Delivery = sequelize.define('Delivery', delivery)
const Booking = sequelize.define('Booking', booking)
const History = sequelize.define('History', history)

// const ExtendedBooks = sequelize.define('ExtendedBooks', extendedBook)
// const Comment = sequelize.define('Comments', comment)

User.hasOne(Booking, {foreignKey: 'userId'})
User.hasOne(Delivery, {foreignKey: 'userId'})
User.hasMany(History, {foreignKey: 'userId'})

Delivery.belongsTo(Book, {foreignKey: 'userId', as: 'user'})
Booking.belongsTo(Book, {foreignKey: 'userId', as: 'user'})
History.belongsTo(User, {foreignKey: 'userId', as: 'user'})

Book.hasOne(Delivery, {foreignKey: 'bookId', as: 'delivery'})
Book.hasOne(Booking, {foreignKey: 'bookId', as: 'booking'})
Book.hasMany(History, {foreignKey: 'bookId', as: 'history'})

Delivery.belongsTo(Book, {foreignKey: 'bookId', as: 'book'})
Booking.belongsTo(Book, {foreignKey: 'bookId', as: 'book'})
History.belongsTo(Book, {foreignKey: 'bookId', as: 'book'})

const db = {
  sequelize,
  User,
  Book,
  Category,
  Delivery,
  Booking,
  History,
  // ExtendedBooks,
  // Comment,
}

export default db
