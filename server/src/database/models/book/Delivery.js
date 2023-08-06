import { Model, DataTypes } from 'sequelize'

const delivery = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  handed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  dateHandedFrom: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateHandedTo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  recipientFirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recipientLastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}

export default delivery
