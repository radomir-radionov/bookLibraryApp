import dotenv from 'dotenv'
import { user, book, booking, delivery, histories } from '../index.js'
import sequelize from './instance.js'

dotenv.config()

const User = sequelize.define('User', user)
const Book = sequelize.define('Book', book)
const Booking = sequelize.define('Booking', booking)
const Delivery = sequelize.define('Delivery', delivery)
const Histories = sequelize.define('Histories', histories)

User.hasMany(Book)
Book.belongsTo(User)

Book.hasMany(Histories)
Book.hasOne(Booking)
Book.hasOne(Delivery)

const db = {
  sequelize,
  User,
  Book,
  Booking,
  Delivery,
  Histories,
}

export default db
