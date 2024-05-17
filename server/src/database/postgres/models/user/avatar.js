import { DataTypes } from 'sequelize';
import modelNames from '../../../../constants/modelNames.js';

export default (sequelize) => {
  const Avatar = sequelize.define(modelNames.avatar, {
    userId: DataTypes.INTEGER,
    contentType: DataTypes.STRING,
    fileName: DataTypes.STRING,
    data: DataTypes.TEXT,
  });

  return Avatar;
};
