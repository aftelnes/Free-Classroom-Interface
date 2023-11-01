"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ResultDivModule = _interopRequireDefault(require("../styles/ResultDiv/ResultDiv.module.css"));
var _Menu = _interopRequireDefault(require("./Menu"));
var _core = require("@mantine/core");
var _faculteImage = _interopRequireDefault(require(".././images/faculteImage.svg"));
var _placesImage = _interopRequireDefault(require(".././images/placesImage.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ResultDiv = function ResultDiv() {
  return /*#__PURE__*/React.createElement("div", {
    className: _ResultDivModule.default.resultDiv
  }, /*#__PURE__*/React.createElement("div", {
    className: _ResultDivModule.default.classNum
  }, "304\u041D"), /*#__PURE__*/React.createElement("div", {
    className: _ResultDivModule.default.image
  }, /*#__PURE__*/React.createElement(_core.Image, {
    src: _faculteImage.default,
    w: 17
  })), /*#__PURE__*/React.createElement("div", {
    className: _ResultDivModule.default.facultyName
  }, "\u0424\u041C\u0438\u041A\u041D"), /*#__PURE__*/React.createElement("div", {
    className: _ResultDivModule.default.image
  }, /*#__PURE__*/React.createElement(_core.Image, {
    src: _placesImage.default,
    w: 17
  })), /*#__PURE__*/React.createElement("div", {
    className: _ResultDivModule.default.places
  }, "90"), /*#__PURE__*/React.createElement("div", {
    className: _ResultDivModule.default.menu
  }, /*#__PURE__*/React.createElement(_Menu.default, null)));
};
var _default = ResultDiv;
exports.default = _default;