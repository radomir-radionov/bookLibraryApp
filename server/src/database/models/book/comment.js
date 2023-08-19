import {DataTypes} from 'sequelize'
import modelNames from '../../../constants/modelNames.js'
import foreignKeys from '../../../constants/foreignKeys.js'
import modelAliases from '../../../constants/modelAliases.js'

const {bookId} = foreignKeys
const {commentAlias, bookAlias} = modelAliases

export default (sequelize) => {
  const comment = sequelize.define(modelNames.comment, {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    text: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  })

  // TODO: circular dependency

  // comment.associate = ({Book}) => {
  //   comment.belongsTo(Book, {foreignKey: bookId, as: bookAlias})
  // }

  return comment
}
