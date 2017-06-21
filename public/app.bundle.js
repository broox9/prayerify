webpackJsonp([0],{

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _mobxReactDevtools = __webpack_require__(107);

var _mobxReactDevtools2 = _interopRequireDefault(_mobxReactDevtools);

__webpack_require__(89);

var _Header = __webpack_require__(87);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var appStore = _ref.appStore;

  return _react2.default.createElement(
    'div',
    { id: 'content' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'section',
      null,
      appStore.msg
    ),
    _react2.default.createElement(_mobxReactDevtools2.default, null)
  );
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(34);

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AppStore = (_class = function AppStore() {
  _classCallCheck(this, AppStore);

  _initDefineProp(this, 'msg', _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'msg', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 'brookes wuz here';
  }
})), _class);
exports.default = new AppStore();

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 5vh;\n  vertical-align: middle;\n  padding: 1rem;\n  box-sizing: border-box;\n  background-color: papayawhip;\n  text-align: center;\n'], ['\n  min-height: 5vh;\n  vertical-align: middle;\n  padding: 1rem;\n  box-sizing: border-box;\n  background-color: papayawhip;\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n  color: palevioletred;\n'], ['\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n  color: palevioletred;\n']);

exports.default = Header;

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(51);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderContainer = _styledComponents2.default.header(_templateObject);

var Title = _styledComponents2.default.h1(_templateObject2);

function Header() {
  return _react2.default.createElement(
    HeaderContainer,
    null,
    _react2.default.createElement(
      Title,
      null,
      'App Here'
    )
  );
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  white: '#fff',
  lightGrey: '#efefef'
};

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-size: 18px;\n    font-family: San Francisco, Roboto, sans-serif;\n  }\n\n  body {\n    background-color: ', ';\n  }\n\n  html {\n    background-color: ', ';\n  }\n'], ['\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-size: 18px;\n    font-family: San Francisco, Roboto, sans-serif;\n  }\n\n  body {\n    background-color: ', ';\n  }\n\n  html {\n    background-color: ', ';\n  }\n']);

var _styledComponents = __webpack_require__(51);

var _reset = __webpack_require__(90);

var _reset2 = _interopRequireDefault(_reset);

var _colors = __webpack_require__(88);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* SACRILIGE!! */


(0, _styledComponents.injectGlobal)(_templateObject, _colors2.default.white, _colors2.default.lightGrey);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\n'], ['\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\n']);

var _styledComponents = __webpack_require__(51);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//reset
(0, _styledComponents.injectGlobal)(_templateObject);

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(52);

var _App = __webpack_require__(85);

var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__(86);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_App2.default, { appStore: _store2.default }), document.querySelector('main'));

/***/ })

},[91]);