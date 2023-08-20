import {DataTypes} from 'sequelize'
import modelNames from '../../../../constants/modelNames.js'
import foreignKeys from '../../../../constants/foreignKeys.js'
import modelAliases from '../../../../constants/modelAliases.js'

const {bookId} = foreignKeys
const {extendedBookAlias, bookAlias} = modelAliases

export default (sequelize) => {
  const ExtendedBook = sequelize.define(modelNames.extendedBook, {
    bookId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    publish: DataTypes.STRING,
    pages: DataTypes.STRING,
    cover: DataTypes.STRING,
    weight: DataTypes.STRING,
    format: DataTypes.STRING,
    ISBN: DataTypes.STRING,
    producer: DataTypes.STRING,
  })

  // TODO: circular dependency

  // ExtendedBook.associate = ({Book}) => {
  //   ExtendedBook.belongsTo(Book, {foreignKey: bookId, as: bookAlias})
  // }

  return ExtendedBook
}
