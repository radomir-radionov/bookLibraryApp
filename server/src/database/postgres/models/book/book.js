import {DataTypes} from 'sequelize'
import modelNames from '../../../../constants/modelNames.js'
import foreignKeys from '../../../../constants/foreignKeys.js'
import modelAliases from '../../../../constants/modelAliases.js'

const {bookId} = foreignKeys
const {bookAlias, extendedBookAlias, deliveryAlias, bookingAlias, historyAlias} = modelAliases

export default (sequelize) => {
  const Book = sequelize.define(modelNames.book, {
    issueYear: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    title: DataTypes.STRING,
    authors: DataTypes.ARRAY(DataTypes.STRING),
    image: DataTypes.STRING,
    categories: DataTypes.ARRAY(DataTypes.STRING),
  })

  // TODO: circular dependency

  // Book.associate = ({ExtendedBook, Delivery, Booking, History}) => {
  //   Book.hasOne(ExtendedBook, {foreignKey: bookId, as: extendedBookAlias})
  //   Book.hasOne(Delivery, {foreignKey: bookId, as: deliveryAlias})
  //   Book.hasOne(Booking, {foreignKey: bookId, as: bookingAlias})
  //   Book.hasMany(History, {foreignKey: bookId, as: historyAlias})
  // }

  return Book
}
