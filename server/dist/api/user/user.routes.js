"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _userHandlers = _interopRequireDefault(require("./user.handlers.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routes = [{
  path: '/test',
  method: 'get',
  action: _userHandlers["default"].test
}];
var _default = routes;
exports["default"] = _default;