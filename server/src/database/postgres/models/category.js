import {DataTypes} from 'sequelize'
import modelNames from '../../../constants/modelNames.js'

export default (sequelize) => {
  const Category = sequelize.define(modelNames.category, {
    name: DataTypes.STRING,
    path: DataTypes.STRING,
  })

  return Category
}
