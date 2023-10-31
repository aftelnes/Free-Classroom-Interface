"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _core = require("@mantine/core");
var _BurgerBtn = _interopRequireDefault(require("./BurgerBtn"));
var _DropdownMenuModule = _interopRequireDefault(require("../styles/DropdownMenu/DropdownMenu.module.css"));
var _iconsReact = require("@tabler/icons-react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function MenuInfo() {
  return /*#__PURE__*/React.createElement(_core.Menu, {
    shadow: "md",
    width: 200
  }, /*#__PURE__*/React.createElement(_core.Menu.Target, null, /*#__PURE__*/React.createElement(_core.ActionIcon, {
    variant: "default",
    "aria-label": "Settings",
    className: _DropdownMenuModule.default.actionIcon
  }, /*#__PURE__*/React.createElement(_iconsReact.IconMenu2, {
    style: {
      width: "70%",
      height: "70%"
    },
    stroke: 1.5
  }))), /*#__PURE__*/React.createElement(_core.Menu.Dropdown, {
    className: _DropdownMenuModule.default.dropdownMenu
  }, /*#__PURE__*/React.createElement(_core.Menu.Label, {
    className: _DropdownMenuModule.default.label
  }, "\u041E\u0441\u043D\u0430\u0449\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement(_core.Menu.Item, {
    className: _DropdownMenuModule.default.item
  }, "\u041A\u041E\u041C\u041F\u042C\u042E\u0422\u0415\u0420\u042B: "), /*#__PURE__*/React.createElement(_core.Menu.Item, {
    className: _DropdownMenuModule.default.item
  }, "\u041F\u0420\u041E\u0415\u041A\u0422\u041E\u0420: "), /*#__PURE__*/React.createElement(_core.Menu.Item, {
    className: _DropdownMenuModule.default.item
  }, "\u041C\u0410\u0420\u041A\u0415\u0420\u041D\u0410\u042F \u0414\u041E\u0421\u041A\u0410:")));
}
var _default = MenuInfo;
exports.default = _default;