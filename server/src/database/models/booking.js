import {Model} from 'sequelize'

export default (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User, {
        foreignKey: 'customerId',
        as: 'customer',
      })
      Booking.belongsTo(models.Book, {
        foreignKey: 'bookId',
        as: 'book',
      })
    }
  }
  Booking.init(
    {
      order: DataTypes.BOOLEAN,
      dateOrder: DataTypes.DATE,
      customerFirstName: DataTypes.STRING,
      customerLastName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Booking',
    }
  )
  return Booking
}
