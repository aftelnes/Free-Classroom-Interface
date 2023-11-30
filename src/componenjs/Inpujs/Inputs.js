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
var _getFreePlaces = _interopRequireDefault(require("../../helpers/requests/getFreePlaces"));
var _InputsModule = _interopRequireDefault(require("../Inputs/Inputs.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var renderLessonNum = function renderLessonNum() {
  return /*#__PURE__*/React.createElement(_InputLessonNumber.default, null);
};
var Inputs = (0, _mobxReactLite.observer)(function () {
  var testFunc = function testFunc() {
    (0, _getFreePlaces.default)();
    _inputData.default.setFindBtnClicked();
  };
  function showNotOptionalInputsAndFindButton() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_InputMinimalSize.default, null), /*#__PURE__*/React.createElement(_InputFaculties.default, null), /*#__PURE__*/React.createElement(_InputEquipment.default, null), /*#__PURE__*/React.createElement(_core.Button, {
      variant: "filled",
      className: _UIModule.default.findbtn,
      onClick: function onClick() {
        return testFunc();
      }
    }, "\u041D\u0430\u0439\u0442\u0438"));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_InputDate.default, null), _inputData.default.dateState && renderLessonNum(), _inputData.default.dateState && _inputData.default.lessonNumState && showNotOptionalInputsAndFindButton());
});
var _default = Inputs;
exports.default = _default;