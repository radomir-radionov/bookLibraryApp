"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
// import Histories from './Histories.mjs'
// import Delivery from './Delivery.mjs'
// import Booking from './Booking.mjs'
var _default = {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  issueYear: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: false
  },
  title: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  authors: {
    type: _sequelize.DataTypes.ARRAY(_sequelize.DataTypes.STRING),
    allowNull: false
  },
  image: {
    type: _sequelize.DataTypes.JSONB,
    allowNull: false
  },
  categories: {
    type: _sequelize.DataTypes.ARRAY(_sequelize.DataTypes.STRING),
    allowNull: false
  }
}; // Book.hasMany(Histories, { as: 'histories', foreignKey: 'bookId' })
// Book.hasOne(Booking, { as: 'booking', foreignKey: 'bookId' })
// Book.hasOne(Delivery, { as: 'delivery', foreignKey: 'bookId' })
// export default Book
exports["default"] = _default;