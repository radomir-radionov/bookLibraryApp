import {DataTypes} from 'sequelize'
import modelNames from '../../../../constants/modelNames.js'
import foreignKeys from '../../../../constants/foreignKeys.js'
import modelAliases from '../../../../constants/modelAliases.js'

const {userId, bookId} = foreignKeys
const {bookingAlias, userAlias, bookAlias} = modelAliases

export default (sequelize) => {
  const Booking = sequelize.define(modelNames.booking, {
    userId: DataTypes.INTEGER,
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order: DataTypes.BOOLEAN,
    dateOrder: DataTypes.DATE,
    customerFirstName: DataTypes.STRING,
    customerLastName: DataTypes.STRING,
  })

  // TODO: circular dependency

  // Booking.associate = ({User, Book}) => {
  //   Booking.belongsTo(User, {foreignKey: userId, as: userAlias})
  //   Booking.belongsTo(Book, {foreignKey: bookId, as: bookAlias})
  // }

  return Booking
}
