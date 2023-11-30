"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _core = require("@mantine/core");
var _main_image = _interopRequireDefault(require("../../images/main_image.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MainImage = function MainImage() {
  return /*#__PURE__*/React.createElement(_core.Image, {
    src: _main_image.default
    // width={250}
    ,
    style: {
      marginLeft: "5vw",
      width: 250
    }
  });
};
var _default = MainImage;
exports.default = _default;