import {Model} from 'sequelize'
import initBookModel from './book.js'

export default (sequelize, DataTypes) => {
  class ExtendedBook extends initBookModel() {
    static associate(models) {
      // define association here
    }
  }
  ExtendedBook.init(
    {
      description: DataTypes.TEXT,
      publish: DataTypes.STRING,
      pages: DataTypes.STRING,
      cover: DataTypes.STRING,
      weight: DataTypes.STRING,
      format: DataTypes.STRING,
      ISBN: DataTypes.STRING,
      producer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ExtendedBook',
    }
  )
  return ExtendedBook
}
