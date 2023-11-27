"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iconsReact = require("@tabler/icons-react");
var _react = require("react");
var _FreePlacesResultModule = _interopRequireDefault(require("./FreePlacesResult.module.css"));
var _Equipment = _interopRequireDefault(require("../Equipment/Equipment"));
var _types = require("../../types/types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var FreePlacesResult = function FreePlacesResult(_ref) {
  var name = _ref.name,
    facultyName = _ref.facultyName,
    size = _ref.size,
    equipments = _ref.equipments;
  return /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.freePlacesResult
  }, /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.classNum
  }, name), /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.image
  }, /*#__PURE__*/React.createElement(_iconsReact.IconBuildingBank, {
    style: {
      width: "80%",
      height: "80%"
    },
    stroke: 1.5
  })), /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.facultyName
  }, facultyName), /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.image
  }, /*#__PURE__*/React.createElement(_iconsReact.IconUser, {
    style: {
      width: "80%",
      height: "80%"
    },
    stroke: 1.5
  })), /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.places
  }, size), /*#__PURE__*/React.createElement("div", {
    className: _FreePlacesResultModule.default.menu
  }, /*#__PURE__*/React.createElement(_Equipment.default, {
    equipments: equipments
  })));
};
var _default = FreePlacesResult;
exports.default = _default;