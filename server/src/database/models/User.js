import {DataTypes} from 'sequelize'

export default {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  blocked: DataTypes.BOOLEAN,
  confirmed: DataTypes.BOOLEAN,
  provider: DataTypes.STRING,
  username: DataTypes.STRING,
}
