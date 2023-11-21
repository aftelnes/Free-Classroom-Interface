"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _core = require("@mantine/core");
var _mobxReactLite = require("mobx-react-lite");
var _UIModule = _interopRequireDefault(require("../../styles/UI/UI.module.css"));
var _InputMinimalSize = _interopRequireDefault(require("../InputData/InputMinimalSize"));
var _InputFaculties = _interopRequireDefault(require("../../components/InputData/InputFaculties"));
var _InputEquipment = _interopRequireDefault(require("../../components/InputData/InputEquipment"));
var _InputDate = _interopRequireDefault(require("../InputData/InputDate"));
var _inputData = _interopRequireDefault(require("../../store/inputData"));
var _InputLessonNumber = _interopRequireDefault(require("../InputData/InputLessonNumber"));
var _FreePlacesResult = _interopRequireDefault(require("../FreePlacesResult/FreePlacesResult"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var renderLessonNum = function renderLessonNum() {
  return /*#__PURE__*/React.createElement(_InputLessonNumber.default, null);
};
var Inputs = (0, _mobxReactLite.observer)(function () {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    clicked = _useState2[0],
    setClicked = _useState2[1];
  function showResult() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_FreePlacesResult.default, null), /*#__PURE__*/React.createElement(_FreePlacesResult.default, null), /*#__PURE__*/React.createElement(_FreePlacesResult.default, null));
  }
  function showNotOptionalInputsAndFindButton() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_InputMinimalSize.default, null), /*#__PURE__*/React.createElement(_InputFaculties.default, null), /*#__PURE__*/React.createElement(_InputEquipment.default, null), /*#__PURE__*/React.createElement(_core.Button, {
      variant: "filled",
      className: _UIModule.default.findbtn,
      onClick: function onClick() {
        return setClicked(true);
      }
    }, "\u041D\u0430\u0439\u0442\u0438"));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_InputDate.default, null), _inputData.default.dateState && renderLessonNum(), _inputData.default.dateState && _inputData.default.lessonNumState && showNotOptionalInputsAndFindButton());
});
var _default = Inputs;
exports.default = _default;