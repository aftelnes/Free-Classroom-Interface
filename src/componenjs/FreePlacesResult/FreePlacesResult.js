"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iconsReact = require("@tabler/icons-react");
var _FreePlacesResultModule = _interopRequireDefault(require("./FreePlacesResult.module.css"));
var _Equipment = _interopRequireDefault(require("../Equipment/Equipment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var FreePlacesResult = function FreePlacesResult() {
  return /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.freePlacesResult
  }, /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.classNum
  }, "304\u041D"), /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.image
  }, /*#__PURE__*/React.createElement(_iconsReact.IconBuildingBank, {
    style: {
      width: "80%",
      height: "80%"
    },
    stroke: 1.5
  })), /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.facultyName
  }, "\u0424\u041C\u0438\u041A\u041D"), /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.image
  }, /*#__PURE__*/React.createElement(_iconsReact.IconUser, {
    style: {
      width: "80%",
      height: "80%"
    },
    stroke: 1.5
  })), /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.places
  }, "90"), /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.menu
  }, /*#__PURE__*/React.createElement(_Equipment.default, null)));
};
var _default = FreePlacesResult;
exports.default = _default;