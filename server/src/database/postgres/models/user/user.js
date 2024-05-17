import { DataTypes } from 'sequelize';
import modelNames from '../../../../constants/modelNames.js';
import foreignKeys from '../../../../constants/foreignKeys.js';
import modelAliases from '../../../../constants/modelAliases.js';

const { bookId } = foreignKeys;
const { userAlias, deliveryAlias, bookingAlias, historyAlias } = modelAliases;

export default (sequelize) => {
  const User = sequelize.define(modelNames.user, {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    blocked: DataTypes.BOOLEAN,
    confirmed: DataTypes.BOOLEAN,
    provider: DataTypes.STRING,
    username: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    code: DataTypes.STRING,
  });

  // TODO: circular dependency

  User.associate = ({ Booking, Delivery, History }) => {
    // User.hasOne(Booking, {foreignKey: bookId, as: bookingAlias})
    // User.hasOne(Delivery, {foreignKey: bookId, as: deliveryAlias})
    // User.hasMany(History, {foreignKey: bookId, as: historyAlias})
  };

  return User;
};
