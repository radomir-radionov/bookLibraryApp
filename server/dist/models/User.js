"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _default = {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  provider: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  confirmed: {
    type: _sequelize.DataTypes.BOOLEAN,
    defaultValue: false
  },
  blocked: {
    type: _sequelize.DataTypes.BOOLEAN,
    defaultValue: false
  },
  createdAt: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false
  },
  firstName: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
};
exports["default"] = _default;