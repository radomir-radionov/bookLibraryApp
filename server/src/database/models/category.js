import {Model, DataTypes} from 'sequelize'

export default (sequelize) => {
  class Category extends Model {
    static associate(models) {}
  }
  Category.init(
    {
      name: DataTypes.STRING,
      path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Category',
    }
  )
  return Category
}
