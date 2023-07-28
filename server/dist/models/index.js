"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "book", {
  enumerable: true,
  get: function get() {
    return _Book["default"];
  }
});
Object.defineProperty(exports, "user", {
  enumerable: true,
  get: function get() {
    return _User["default"];
  }
});
var _User = _interopRequireDefault(require("./User.js"));
var _Book = _interopRequireDefault(require("./book/Book.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }