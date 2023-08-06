import { DataTypes } from 'sequelize'

const booking = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  dateOrder: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  customerFirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerLastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}

export default booking
