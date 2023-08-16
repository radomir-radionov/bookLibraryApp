import {Model, DataTypes} from 'sequelize'
import tableNames from '../../constants/tableNames.cjs'

//TODO: add field customerId when  created user model

export default (sequelize) => {
  class Booking extends Model {
    static associate(models) {
      //TODO: fix circular dependency
      // Booking.belongsTo(models.User, {
      //   foreignKey: 'customerId',
      //   as: 'customer',
      // })
      // Booking.belongsTo(models.Book, {
      //   foreignKey: 'bookId',
      //   as: 'book',
      // })
    }
  }
  Booking.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      customerId: DataTypes.INTEGER,
      order: DataTypes.BOOLEAN,
      dateOrder: DataTypes.DATE,
      customerFirstName: DataTypes.STRING,
      customerLastName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: tableNames.booking,
    }
  )
  return Booking
}
