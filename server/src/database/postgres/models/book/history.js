import {DataTypes} from 'sequelize'
import modelNames from '../../../../constants/modelNames.js'
import foreignKeys from '../../../../constants/foreignKeys.js'
import modelAliases from '../../../../constants/modelAliases.js'

const {userId, bookId} = foreignKeys
const {historyAlias, userAlias, bookAlias} = modelAliases

export default (sequelize) => {
  const History = sequelize.define(modelNames.history, {
    userId: DataTypes.INTEGER,
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })

  // TODO: circular dependency

  // History.associate = ({User, Book}) => {
  //   History.belongsTo(User, {foreignKey: userId, as: userAlias})
  //   History.belongsTo(Book, {foreignKey: bookId, as: bookAlias})
  // }

  return History
}
