import {DataTypes} from 'sequelize'

export default {
  userId: DataTypes.INTEGER,
  rating: DataTypes.INTEGER,
  text: DataTypes.STRING,
  createdAt: DataTypes.DATE,
}
