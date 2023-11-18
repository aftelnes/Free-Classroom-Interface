"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _core = require("@mantine/core");
var _OutPutDateModule = _interopRequireDefault(require("../styles/OutputDate/OutPutDate.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import MenuInfo from "../Menu";

var OutputDate = function OutputDate() {
  var elements = [{
    id: 1,
    class: "308н",
    faculty: "ФМиКН",
    placesNum: 90
  }, {
    id: 2,
    class: "318",
    faculty: "ФМиКН",
    placesNum: 20
  }, {
    id: 3,
    class: "404",
    faculty: "ФУП",
    placesNum: 90
  }];
  var rows = elements.map(function (element) {
    return /*#__PURE__*/React.createElement(_core.Table.Tr, {
      key: element.id
    }, /*#__PURE__*/React.createElement(_core.Table.Td, {
      className: _OutPutDateModule.default.class
    }, element.class), /*#__PURE__*/React.createElement(_core.Table.Td, {
      className: _OutPutDateModule.default.faculty
    }, element.faculty), /*#__PURE__*/React.createElement(_core.Table.Td, {
      className: _OutPutDateModule.default.placesNum
    }, element.placesNum));
  });
  return /*#__PURE__*/React.createElement(_core.Table, {
    className: _OutPutDateModule.default.outputDate
  }, /*#__PURE__*/React.createElement(_core.Table.Thead, null, /*#__PURE__*/React.createElement(_core.Table.Tr, null, /*#__PURE__*/React.createElement(_core.Table.Th, null, "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F"), /*#__PURE__*/React.createElement(_core.Table.Th, null, "\u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442"), /*#__PURE__*/React.createElement(_core.Table.Th, null, "\u041A\u043E\u043B-\u0432\u043E \u043C\u0435\u0441\u0442"))), /*#__PURE__*/React.createElement(_core.Table.Tbody, null, rows));
};
var _default = OutputDate;
exports.default = _default;