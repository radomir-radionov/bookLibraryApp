import {Model, DataTypes} from 'sequelize'

export default (sequelize) => {
  class Book extends Model {
    //TODO: fix circular dependency
    // static associate({Delivery}) {
    //   Book.hasOne(Delivery, {
    //     foreignKey: 'bookId',
    //   })
    // }
  }
  Book.init(
    {
      issueYear: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      title: DataTypes.STRING,
      authors: DataTypes.ARRAY(DataTypes.STRING),
      image: DataTypes.STRING,
      categories: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: 'Book',
      timestamps: true,
    }
  )
  return Book
}
