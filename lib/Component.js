'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Component(_ref) {
  var name = _ref.name;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      null,
      'hello ',
      name
    )
  );
}

Component.propTypes = {
  name: _react2.default.PropTypes.string
};

Component.defaultProps = {
  name: 'stranger?'
};

exports.default = Component;