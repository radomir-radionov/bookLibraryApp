import {DataTypes} from 'sequelize'

export default {
  userId: DataTypes.INTEGER,
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}
