import {DataTypes} from 'sequelize'

export default {
  issueYear: DataTypes.STRING,
  rating: DataTypes.FLOAT,
  title: DataTypes.STRING,
  authors: DataTypes.ARRAY(DataTypes.STRING),
  image: DataTypes.STRING,
  categories: DataTypes.ARRAY(DataTypes.STRING),
}
