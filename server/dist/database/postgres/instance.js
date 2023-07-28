"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var sequelize = new _sequelize.Sequelize({
  dialect: 'postgres',
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT
});
var _default = sequelize;
exports["default"] = _default;