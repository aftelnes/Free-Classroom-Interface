"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _core = require("@mantine/core");
var _mobxReactLite = require("mobx-react-lite");
var _react = require("react");
var _InputDateModule = _interopRequireDefault(require("./InputDate.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var InputMinimalPlaceSize = (0, _mobxReactLite.observer)(function () {
  return /*#__PURE__*/React.createElement(_core.NumberInput, {
    withAsterisk: true,
    className: _InputDateModule.default.inputDate,
    label: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u043C\u0435\u0441\u0442",
    min: 0,
    clampBehavior: "strict",
    allowNegative: false
  });
});
var _default = InputMinimalPlaceSize;
exports.default = _default;