import { user, book, booking, delivery, histories } from '../../models/index.js'
import sequelize from './instance.js'

const User = sequelize.define('User', user)
const Book = sequelize.define('Book', book)
const Booking = sequelize.define('Booking', booking)
const Delivery = sequelize.define('Delivery', delivery)
const Histories = sequelize.define('Histories', histories)

Book.hasMany(Histories, { as: 'histories', foreignKey: 'bookId' })
Book.hasOne(Booking, { as: 'booking', foreignKey: 'bookId' })
Book.hasOne(Delivery, { as: 'delivery', foreignKey: 'bookId' })

const db = {
  sequelize,
  User,
  Book,
  // Delivery,
  // Histories,
}

export default db
