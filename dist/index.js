'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButcherShop = exports.InFrontOfYou = exports.OlderCoaster = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BUTCHER_PRODUCTS = ['Tenderloin', 'Short ribs', 'Beef shin', 'Ribeye'];

// Define these exported classes

var OlderCoaster = exports.OlderCoaster = function (_React$Component) {
  _inherits(OlderCoaster, _React$Component);

  function OlderCoaster() {
    _classCallCheck(this, OlderCoaster);

    return _possibleConstructorReturn(this, (OlderCoaster.__proto__ || Object.getPrototypeOf(OlderCoaster)).apply(this, arguments));
  }

  _createClass(OlderCoaster, [{
    key: 'render',

    // your code here
    value: function () {
      function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'oldercoaster' },
          _react2['default'].createElement(
            'p',
            null,
            'Two grannies having the time of their life!'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Passengers:'
          ),
          _react2['default'].createElement(
            'ul',
            null,
            _react2['default'].createElement(
              'li',
              null,
              'Agnes'
            ),
            _react2['default'].createElement(
              'li',
              null,
              'Muriel'
            )
          )
        );
      }

      return render;
    }()
  }]);

  return OlderCoaster;
}(_react2['default'].Component);

var InFrontOfYou = exports.InFrontOfYou = function (_React$Component2) {
  _inherits(InFrontOfYou, _React$Component2);

  function InFrontOfYou() {
    _classCallCheck(this, InFrontOfYou);

    return _possibleConstructorReturn(this, (InFrontOfYou.__proto__ || Object.getPrototypeOf(InFrontOfYou)).apply(this, arguments));
  }

  _createClass(InFrontOfYou, [{
    key: 'render',

    // your code here
    value: function () {
      function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'p',
            null,
            'You shouldn\'t look too far.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Sometimes, the solution is right in front of you.'
          )
        );
      }

      return render;
    }()
  }]);

  return InFrontOfYou;
}(_react2['default'].Component);

var ButcherShop = exports.ButcherShop = function (_React$Component3) {
  _inherits(ButcherShop, _React$Component3);

  function ButcherShop() {
    _classCallCheck(this, ButcherShop);

    return _possibleConstructorReturn(this, (ButcherShop.__proto__ || Object.getPrototypeOf(ButcherShop)).apply(this, arguments));
  }

  _createClass(ButcherShop, [{
    key: 'render',

    // your code here
    value: function () {
      function render() {
        var products = [_react2['default'].createElement(
          'li',
          { key: '0' },
          BUTCHER_PRODUCTS[0]
        ), _react2['default'].createElement(
          'li',
          { key: '1' },
          BUTCHER_PRODUCTS[1]
        ), _react2['default'].createElement(
          'li',
          { key: '2' },
          BUTCHER_PRODUCTS[2]
        ), _react2['default'].createElement(
          'li',
          { key: '3' },
          BUTCHER_PRODUCTS[3]
        )];
        return _react2['default'].createElement(
          'div',
          { className: 'butcher-shop' },
          _react2['default'].createElement(
            'p',
            null,
            'Hello! We have the following products for sale today:'
          ),
          _react2['default'].createElement(
            'ul',
            null,
            products
          )
        );
      }

      return render;
    }()
  }]);

  return ButcherShop;
}(_react2['default'].Component);

_reactDom2['default'].render(_react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(OlderCoaster, null),
  _react2['default'].createElement(InFrontOfYou, null),
  _react2['default'].createElement(ButcherShop, null)
), document.getElementById('root'));

