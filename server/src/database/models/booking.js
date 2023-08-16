import {DataTypes} from 'sequelize'

//TODO: add field customerId when  created user model

export default {
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
