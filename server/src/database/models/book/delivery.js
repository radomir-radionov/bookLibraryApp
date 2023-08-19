import {DataTypes} from 'sequelize'
import modelNames from '../../../constants/modelNames.js'
import foreignKeys from '../../../constants/foreignKeys.js'
import modelAliases from '../../../constants/modelAliases.js'

const {userId, bookId} = foreignKeys
const {deliveryAlias, userAlias, bookAlias} = modelAliases

export default (sequelize) => {
  const Delivery = sequelize.define(modelNames.delivery, {
    userId: DataTypes.INTEGER,
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    handed: DataTypes.BOOLEAN,
    dateHandedFrom: DataTypes.DATE,
    dateHandedTo: DataTypes.DATE,
    recipientFirstName: DataTypes.STRING,
    recipientLastName: DataTypes.STRING,
  })

  // TODO: circular dependency

  // Delivery.associate = ({Book}) => {
  //   Delivery.belongsTo(Book, {foreignKey: userId, as: userAlias})
  //   Delivery.belongsTo(Book, {foreignKey: bookId, as: bookAlias})
  // }

  return Delivery
}
