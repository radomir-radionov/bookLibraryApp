import {DataTypes} from 'sequelize'

export default {
  userId: DataTypes.INTEGER,
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  customerId: DataTypes.INTEGER,
  order: DataTypes.BOOLEAN,
  dateOrder: DataTypes.DATE,
  customerFirstName: DataTypes.STRING,
  customerLastName: DataTypes.STRING,
}
