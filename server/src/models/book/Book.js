import { DataTypes } from 'sequelize'
import Histories from './Histories.js'
import Delivery from './Delivery.js'
import Booking from './Booking.js'

const book = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  issueYear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  authors: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  image: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  categories: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
}

export default book
