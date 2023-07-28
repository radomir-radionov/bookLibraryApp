"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = require("../../models/index.js");
var _instance = _interopRequireDefault(require("./instance.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var User = _instance["default"].define('User', _index.user);
var Book = _instance["default"].define('Book', _index.book);
// const Delivery = sequelize.define('Delivery', DeliveryModel)
// const Histories = sequelize.define('Histories', HistoriesModel)

var db = {
  sequelize: _instance["default"],
  User: User,
  Book: Book
  // Delivery,
  // Histories,
};
var _default = db;
exports["default"] = _default;