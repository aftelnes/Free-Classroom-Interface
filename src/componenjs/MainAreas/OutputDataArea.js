"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _UIModule = _interopRequireDefault(require("../../styles/UI/UI.module.css"));
var _FreePlacesResult = _interopRequireDefault(require("../FreePlacesResult/FreePlacesResult"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var OutputDataArea = function OutputDataArea() {
  return /*#__PURE__*/React.createElement("div", {
    className: _UIModule.default.outputDataArea
  }, "\u041A\u043E\u0442\u0438\u043A\u0438", /*#__PURE__*/React.createElement(_FreePlacesResult.default, null), /*#__PURE__*/React.createElement(_FreePlacesResult.default, null), /*#__PURE__*/React.createElement(_FreePlacesResult.default, null));
};
var _default = OutputDataArea;
exports.default = _default;