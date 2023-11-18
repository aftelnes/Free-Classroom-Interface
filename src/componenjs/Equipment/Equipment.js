"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _core = require("@mantine/core");
var _hooks = require("@mantine/hooks");
var _iconsReact = require("@tabler/icons-react");
var _FreePlacesResultModule = _interopRequireDefault(require("../FreePlacesResult/FreePlacesResult.module.css"));
var _EquipmentValue = _interopRequireDefault(require("./EquipmentValue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Equipment = function Equipment() {
  var _useDisclosure = (0, _hooks.useDisclosure)(false),
    _useDisclosure2 = _slicedToArray(_useDisclosure, 2),
    opened = _useDisclosure2[0],
    _useDisclosure2$ = _useDisclosure2[1],
    close = _useDisclosure2$.close,
    open = _useDisclosure2$.open;
  return /*#__PURE__*/React.createElement(_core.Popover, {
    width: 200,
    position: "bottom",
    withArrow: true,
    shadow: "md",
    opened: opened
  }, /*#__PURE__*/React.createElement(_core.Popover.Target, null, /*#__PURE__*/React.createElement(_core.Button, {
    className: _FreePlacesResultModule.default.button,
    leftSection: /*#__PURE__*/React.createElement(_iconsReact.IconDotsVertical, {
      size: 20
    }),
    variant: "default",
    onMouseEnter: open,
    onMouseLeave: close
  })), /*#__PURE__*/React.createElement(_core.Popover.Dropdown, {
    style: {
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(_core.Text, {
    size: "sm"
  }, "This popover is shown when user hovers the target element", /*#__PURE__*/React.createElement(_EquipmentValue.default, null))));
};
var _default = Equipment;
exports.default = _default;