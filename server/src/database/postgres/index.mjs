import sequelize from './instance.mjs'
import user from '../../models/User.mjs'
import book from '../../models/book/Book.mjs'
// import DeliveryModel from './models/book/Delivery.mjs'
// import HistoriesModel from './models/book/Histories.mjs'

const User = sequelize.define('User', user)
const Book = sequelize.define('Book', book)
// const Delivery = sequelize.define('Delivery', DeliveryModel)
// const Histories = sequelize.define('Histories', HistoriesModel)

const db = {
  sequelize,
  User,
  Book,
  // Delivery,
  // Histories,
}

export default db
