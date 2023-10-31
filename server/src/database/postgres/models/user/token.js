import { DataTypes } from 'sequelize';
import modelNames from '../../../../constants/modelNames.js';

export default (sequelize) => {
  const Token = sequelize.define(modelNames.token, {
    userId: DataTypes.INTEGER,
    refreshToken: DataTypes.TEXT,
  });

  return Token;
};
