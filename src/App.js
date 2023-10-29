"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _UIModule = _interopRequireDefault(require("./styles/UI/UI.module.css"));
var _InputDate = _interopRequireDefault(require("./components/InputDate"));
var _InputLessonNumber = _interopRequireDefault(require("./components/InputLessonNumber"));
var _InputMinimalCapacity = _interopRequireDefault(require("./components/InputMinimalCapacity"));
var _core = require("@mantine/core");
require("@mantine/core/styles.css");
require("@mantine/dates/styles.css");
var _InputFaculties = _interopRequireDefault(require("./components/InputFaculties"));
var _OutputDate = _interopRequireDefault(require("./components/OutputDate"));
var _BurgerBtn = _interopRequireDefault(require("./components/BurgerBtn"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function App() {
  return /*#__PURE__*/_react.default.createElement(_core.MantineProvider, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _UIModule.default.ui
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _UIModule.default.areas
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: _UIModule.default.h3
  }, "\u041F\u043E\u0438\u0441\u043A \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438"), /*#__PURE__*/_react.default.createElement(_InputDate.default, null), /*#__PURE__*/_react.default.createElement(_InputLessonNumber.default, null), /*#__PURE__*/_react.default.createElement(_InputMinimalCapacity.default, null), /*#__PURE__*/_react.default.createElement(_InputFaculties.default, null), /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: "filled",
    className: _UIModule.default.findbtn
  }, "\u041D\u0430\u0439\u0442\u0438")), /*#__PURE__*/_react.default.createElement("div", {
    className: _UIModule.default.areas
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: _UIModule.default.h3
  }, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"), /*#__PURE__*/_react.default.createElement(_OutputDate.default, null), /*#__PURE__*/_react.default.createElement(_core.Burger, null))));
}
var _default = App;
exports.default = _default;