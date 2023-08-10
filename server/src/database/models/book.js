import {Model} from 'sequelize'

export default (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      issueYear: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      title: DataTypes.STRING,
      authors: DataTypes.ARRAY(DataTypes.STRING),
      image: DataTypes.JSONB,
      categories: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: 'Book',
    }
  )
  return Book
}
