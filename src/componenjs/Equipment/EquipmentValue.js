"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _EquipmentValueModule = _interopRequireDefault(require("./EquipmentValue.module.css"));
var _types = require("../../types/types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var EquipmentValue = function EquipmentValue(_ref) {
  var equipments = _ref.equipments;
  return /*#__PURE__*/React.createElement("div", {
    className: _EquipmentValueModule.default.equipmentValue
  }, /*#__PURE__*/React.createElement("h5", {
    className: _EquipmentValueModule.default.Header
  }, "\u041E\u0441\u043D\u0430\u0449\u0435\u043D\u0438\u0435"), equipments.map(function (item) {
    return /*#__PURE__*/React.createElement("div", null, item.equipment.name, " :", item.amount);
  }));
};
var _default = EquipmentValue;
exports.default = _default;