"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _mobxReactLite = require("mobx-react-lite");
var _UIModule = _interopRequireDefault(require("../../styles/UI/UI.module.css"));
var _inputData = _interopRequireDefault(require("../../store/inputData"));
var _OutputData = _interopRequireDefault(require("../OutputData/OutputData"));
var _ResultHeader = _interopRequireDefault(require("../ResultHeader/ResultHeader"));
var _outputData = _interopRequireDefault(require("../../store/outputData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var showEmptyDiv = function showEmptyDiv() {
  return /*#__PURE__*/React.createElement("div", {
    className: _UIModule.default.emptyDiv
  }, /*#__PURE__*/React.createElement("h4", null, "\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u0435\u043D\u044C\u043A\u043E"));
};
var OutputDataArea = (0, _mobxReactLite.observer)(function () {
  var test = function test() {
    return /*#__PURE__*/React.createElement(_OutputData.default, null);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _UIModule.default.outputDataArea
  }, /*#__PURE__*/React.createElement(_ResultHeader.default, null), _outputData.default.showEmptyBlock == true && showEmptyDiv(), _inputData.default.findBtnClicked && test());
});
var _default = OutputDataArea;
exports.default = _default;