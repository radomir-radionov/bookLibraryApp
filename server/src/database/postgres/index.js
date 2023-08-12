import dotenv from 'dotenv'
import {user, book, category, booking, delivery, history, extendedBook, comment} from '../index.js'
import sequelize from './instance.js'

dotenv.config()

const User = sequelize.define('User', user)
const Book = sequelize.define('Book', book)
const Category = sequelize.define('Category', category)
const Booking = sequelize.define('Booking', booking)
const Delivery = sequelize.define('Delivery', delivery)
const History = sequelize.define('Histories', history)
const ExtendedBooks = sequelize.define('ExtendedBooks', extendedBook)
const Comment = sequelize.define('Comments', comment)

const db = {
  sequelize,
  User,
  Book,
  Category,
  Booking,
  Delivery,
  History,
  ExtendedBooks,
  Comment,
}

export default db
