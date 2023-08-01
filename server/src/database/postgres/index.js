import { user } from '../../models/index.js'
import sequelize from './instance.js'

// const Book = sequelize.define('Book', book)
// const Delivery = sequelize.define('Delivery', DeliveryModel)
// const Histories = sequelize.define('Histories', HistoriesModel)

const User = sequelize.define('User', user)
const db = {
  sequelize,
  User,
  // Book,
  // Delivery,
  // Histories,
}

export default db
