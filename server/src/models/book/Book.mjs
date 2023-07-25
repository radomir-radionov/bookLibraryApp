import { Model, DataTypes } from 'sequelize'
// import Histories from './Histories.mjs'
// import Delivery from './Delivery.mjs'
// import Booking from './Booking.mjs'

export default {
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

// Book.hasMany(Histories, { as: 'histories', foreignKey: 'bookId' })
// Book.hasOne(Booking, { as: 'booking', foreignKey: 'bookId' })
// Book.hasOne(Delivery, { as: 'delivery', foreignKey: 'bookId' })

// export default Book
