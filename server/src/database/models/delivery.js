import {Model, DataTypes} from 'sequelize'

export default {
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  handed: DataTypes.BOOLEAN,
  dateHandedFrom: DataTypes.DATE,
  dateHandedTo: DataTypes.DATE,
  recipientFirstName: DataTypes.STRING,
  recipientLastName: DataTypes.STRING,
}
