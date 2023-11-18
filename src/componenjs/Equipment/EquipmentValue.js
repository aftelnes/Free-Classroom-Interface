"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _EquipmentValueModule = _interopRequireDefault(require("./EquipmentValue.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var EquipmentValue = function EquipmentValue() {
  return /*#__PURE__*/React.createElement("div", {
    className: _EquipmentValueModule.default.equipmentValue
  }, /*#__PURE__*/React.createElement("h5", {
    className: _EquipmentValueModule.default.Header
  }, "\u041E\u0441\u043D\u0430\u0449\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("div", {
    className: _EquipmentValueModule.default.equipment
  }, "\u041A\u043E\u043F\u043C\u044C\u044E\u0442\u0435\u0440\u044B: 12"), /*#__PURE__*/React.createElement("div", null, "\u041F\u0440\u043E\u0435\u043A\u0442\u043E\u0440: 1"));
};
var _default = EquipmentValue;
exports.default = _default;