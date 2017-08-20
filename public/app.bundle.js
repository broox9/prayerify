webpackJsonp([0],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  height: 100%;\n  width: 100%:\n'], ['\n  background-color: ', ';\n  height: 100%;\n  width: 100%:\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReactDevtools = __webpack_require__(194);

var _mobxReactDevtools2 = _interopRequireDefault(_mobxReactDevtools);

var _styledComponents = __webpack_require__(14);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _firebase = __webpack_require__(85);

var _mobx = __webpack_require__(43);

var _mobxReact = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(29);

var _PrivateRoute = __webpack_require__(140);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _globalStyles = __webpack_require__(141);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _history = __webpack_require__(86);

var _history2 = _interopRequireDefault(_history);

var _Login = __webpack_require__(146);

var _Login2 = _interopRequireDefault(_Login);

var _Home = __webpack_require__(145);

var _Home2 = _interopRequireDefault(_Home);

var _NewPrayer = __webpack_require__(147);

var _NewPrayer2 = _interopRequireDefault(_NewPrayer);

var _PrayerDetails = __webpack_require__(536);

var _PrayerDetails2 = _interopRequireDefault(_PrayerDetails);

var _User = __webpack_require__(148);

var _User2 = _interopRequireDefault(_User);

var _Header = __webpack_require__(138);

var _Header2 = _interopRequireDefault(_Header);

var _NavItems = __webpack_require__(139);

var _NavItems2 = _interopRequireDefault(_NavItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//pages


//components


var StyledApp = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.bgColor || '#fff';
});

var App = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(_ref) {
    var appStore = _ref.appStore;

    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _firebase.auth.onAuthStateChanged(function (user) {
      appStore.setUser(user);
    });
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var appStore = this.props.appStore;

      var UserPage = _react2.default.createElement(_User2.default, { user: appStore.user });
      var user = appStore.user;


      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        { history: _history2.default },
        _react2.default.createElement(
          _styledComponents.ThemeProvider,
          { theme: _globalStyles2.default },
          _react2.default.createElement(
            StyledApp,
            { id: 'content' },
            _react2.default.createElement(_Header2.default, { user: user }),
            _react2.default.createElement(_NavItems2.default, { user: user }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_PrivateRoute2.default, { exact: true, path: '/user', user: user, component: _User2.default }),
              _react2.default.createElement(_PrivateRoute2.default, { path: '/prayer/new', user: user, component: _NewPrayer2.default }),
              _react2.default.createElement(_PrivateRoute2.default, { path: '/prayer/details/:fbId', user: user, component: _PrayerDetails2.default })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component)) || _class) || _class);
exports.default = App;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(43);

var _firebase = __webpack_require__(85);

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var AppStore = (_class = function () {
  function AppStore() {
    var _this = this;

    _classCallCheck(this, AppStore);

    _initDefineProp(this, 'user', _descriptor, this);

    _initDefineProp(this, 'prayers', _descriptor2, this);

    this.prayerRef = _firebase.db.ref('/prayers');

    this.prayerRef.on('value', function (snapShot) {
      _this.prayers = snapShot.val();
    });
  }

  _createClass(AppStore, [{
    key: 'signIn',
    value: function signIn(_ref) {
      var _this2 = this;

      var pwd = _ref.pwd,
          uid = _ref.uid;

      _firebase.auth.signInWithEmailAndPassword(uid, pwd).then(function (user) {
        _this2.user = user;
        // this.getPrayers()
        console.log('Signed In', user);
      }).catch(function (error) {
        return console.log('SIGN IN ERR', error);
      });
    }
  }, {
    key: 'signOut',
    value: function signOut() {
      _firebase.auth.signOut().then(function (rtn) {
        return console.log("Signed Out", rtn);
      });
      this.prayers = {};
    }
  }, {
    key: 'setUser',
    value: function setUser(user) {
      this.user = user;
    }

    // prayers

  }, {
    key: 'getPrayers',
    value: function getPrayers() {
      return this.prayers;
    }
  }, {
    key: 'getPrayer',
    value: function getPrayer(id) {
      return this.prayers[id] || null;
    }
  }, {
    key: 'submitPrayer',
    value: function submitPrayer(prayer) {
      console.log('prayer', prayer);
      var newPrayerRef = this.prayerRef.push();
      newPrayerRef.set(prayer);
    }
  }]);

  return AppStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'user', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return _firebase.auth.currentUser;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'prayers', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _applyDecoratedDescriptor(_class.prototype, 'signIn', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'signIn'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'signOut', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'signOut'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setUser', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setUser'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getPrayers', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getPrayers'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getPrayer', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getPrayer'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'submitPrayer', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'submitPrayer'), _class.prototype)), _class);

// db.ref('/prayers').on('value', (snapShot) => {
//   console.log('REFS', snapShot.val() instanceof Array);
//   appStore.prayers = snapShot.val();
// })

var appStore = new AppStore();
exports.default = appStore;

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  min-height: 5vh;\n  vertical-align: middle;\n  padding: 1rem;\n  box-sizing: border-box;\n  background-color: ', ';\n  //border-top: 0.5rem solid ', ';\n  text-align: center;\n'], ['\n  position: relative;\n  min-height: 5vh;\n  vertical-align: middle;\n  padding: 1rem;\n  box-sizing: border-box;\n  background-color: ', ';\n  //border-top: 0.5rem solid ', ';\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n  color: ', ';\n'], ['\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  height: 100%;\n  padding: 0 6px;\n  color:', ';\n'], ['\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  height: 100%;\n  padding: 0 6px;\n  color:', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(14);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mobxReact = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(29);

var _reactFeather = __webpack_require__(498);

var _WidthWrapper = __webpack_require__(52);

var _WidthWrapper2 = _interopRequireDefault(_WidthWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderContainer = _styledComponents2.default.header(_templateObject, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.darkPrimary;
});

var Title = _styledComponents2.default.h1(_templateObject2, function (props) {
  return props.theme.lightPrimary;
});
var ActionItem = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.lightPrimary;
});

var Header = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          appStore = _props.appStore;

      var loginLogout = user ? _react2.default.createElement(
        'a',
        { onClick: appStore.signOut },
        _react2.default.createElement(_reactFeather.LogOut, null)
      ) : _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/login' },
        _react2.default.createElement(_reactFeather.LogIn, null)
      );
      return _react2.default.createElement(
        HeaderContainer,
        null,
        _react2.default.createElement(
          _WidthWrapper2.default,
          null,
          _react2.default.createElement(
            Title,
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              'Prayerify'
            )
          ),
          _react2.default.createElement(
            ActionItem,
            null,
            loginLogout
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component)) || _class);
exports.default = Header;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n\n  .container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    padding: 10px;\n  }\n\n  a {\n    display: block;\n    text-decoration: none;\n    margin: 0 1rem;\n\n    &:hover, &:active {\n      color:', ';\n    }\n  }\n'], ['\n  background-color: ', ';\n\n  .container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    padding: 10px;\n  }\n\n  a {\n    display: block;\n    text-decoration: none;\n    margin: 0 1rem;\n\n    &:hover, &:active {\n      color:', ';\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(29);

var _styledComponents = __webpack_require__(14);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mobxReact = __webpack_require__(19);

var _WidthWrapper = __webpack_require__(52);

var _WidthWrapper2 = _interopRequireDefault(_WidthWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavSection = _styledComponents2.default.nav(_templateObject, function (props) {
  return props.theme.lightPrimary;
}, function (props) {
  return props.theme.accent;
});

var NavItems = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(NavItems, _React$Component);

  function NavItems() {
    _classCallCheck(this, NavItems);

    return _possibleConstructorReturn(this, (NavItems.__proto__ || Object.getPrototypeOf(NavItems)).apply(this, arguments));
  }

  _createClass(NavItems, [{
    key: 'render',
    value: function render() {
      var user = this.props.user;

      return _react2.default.createElement(
        NavSection,
        null,
        _react2.default.createElement(
          _WidthWrapper2.default,
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'Home'
          ),
          user ? null : _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/login' },
            'Login'
          ),
          user ? _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/user' },
            'User'
          ) : null,
          user ? _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/prayer/new' },
            'New'
          ) : null
        )
      );
    }
  }]);

  return NavItems;
}(_react2.default.Component)) || _class;

exports.default = NavItems;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PrivatRoute;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function PrivatRoute(props) {
  var path = props.path,
      _props$exact = props.exact,
      exact = _props$exact === undefined ? false : _props$exact,
      Component = props.component,
      user = props.user,
      otherProps = _objectWithoutProperties(props, ['path', 'exact', 'component', 'user']);

  return _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: path, render: function render(scopeProps) {
      return user ? _react2.default.createElement(Component, { user: user, routeProps: scopeProps }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/login', state: { from: scopeProps.location } } });
    } });
}

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-size: 18px;\n    color: ', ';\n    font-family: San Francisco, Roboto, sans-serif;\n  }\n\n  @media(max-width: 414px) {\n    html, body {\n      font-size: 16px;\n    }\n  }\n\n  body {\n    background-color: ', ';\n    min-height: 100vh;\n  }\n\n  main {\n    height: 100%;\n    width: 100%;\n  }\n\n  html {\n    background-color: ', ';\n  }\n\n  .container {\n    position: relative;\n    width: 100%;\n    max-width: 1280px;\n    box-sizing: border-box;\n    margin: 0 auto;\n  }\n\n  a {\n    cursor: pointer;\n  }\n'], ['\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-size: 18px;\n    color: ', ';\n    font-family: San Francisco, Roboto, sans-serif;\n  }\n\n  @media(max-width: 414px) {\n    html, body {\n      font-size: 16px;\n    }\n  }\n\n  body {\n    background-color: ', ';\n    min-height: 100vh;\n  }\n\n  main {\n    height: 100%;\n    width: 100%;\n  }\n\n  html {\n    background-color: ', ';\n  }\n\n  .container {\n    position: relative;\n    width: 100%;\n    max-width: 1280px;\n    box-sizing: border-box;\n    margin: 0 auto;\n  }\n\n  a {\n    cursor: pointer;\n  }\n']);

var _styledComponents = __webpack_require__(14);

var _reset = __webpack_require__(142);

var _reset2 = _interopRequireDefault(_reset);

var _theme = __webpack_require__(143);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* SACRILIGE!! */


(0, _styledComponents.injectGlobal)(_templateObject, _theme2.default.primaryText, _theme2.default.bgColor, _theme2.default.htmlColor);

exports.default = _theme2.default;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\n'], ['\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\n']);

var _styledComponents = __webpack_require__(14);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//reset
(0, _styledComponents.injectGlobal)(_templateObject);

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var baseTheme = {
  darkPrimary: '#616161',
  primary: '#9E9E9E',
  lightPrimary: '#f5f5f5',
  primaryText: '#212121',
  secondaryText: '#757575',
  dividerColor: '#BDBDBD',
  accent: '#8BC34A',
  bgColor: '#fff',
  htmlColor: '#eee'
};

exports.default = baseTheme;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(81);

var _mobxReact = __webpack_require__(19);

var _App = __webpack_require__(136);

var _App2 = _interopRequireDefault(_App);

var _appStore = __webpack_require__(137);

var _appStore2 = _interopRequireDefault(_appStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppWithStore = _react2.default.createElement(
  _mobxReact.Provider,
  { appStore: _appStore2.default },
  _react2.default.createElement(_App2.default, null)
);

(0, _reactDom.render)(AppWithStore, document.querySelector('main'));

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react2.default.createElement(
    'h1',
    null,
    'Home'
  );
}

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 1rem;\n  margin: 1rem auto;\n  max-width: 250px;\n  border: 1px solid #ccc;\n\n  label {\n    display: block;\n    font-size: 0.75rem;\n    margin-bottom: 6px;\n  }\n\n  > p, h3 {\n    margin-bottom: 0.5rem;\n  }\n'], ['\n  padding: 1rem;\n  margin: 1rem auto;\n  max-width: 250px;\n  border: 1px solid #ccc;\n\n  label {\n    display: block;\n    font-size: 0.75rem;\n    margin-bottom: 6px;\n  }\n\n  > p, h3 {\n    margin-bottom: 0.5rem;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(29);

var _styledComponents = __webpack_require__(14);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = __webpack_require__(82);

var _Button2 = _interopRequireDefault(_Button);

var _Input = __webpack_require__(83);

var _Input2 = _interopRequireDefault(_Input);

var _Label = __webpack_require__(84);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.state = {
      uid: '',
      pwd: ''
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'submitForm',
    value: function submitForm(e) {
      e.preventDefault();
      this.props.appStore.signIn(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.appStore.user) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }

      return _react2.default.createElement(
        LoginForm,
        { onSubmit: function onSubmit(e) {
            _this2.submitForm(e);
          } },
        _react2.default.createElement(
          'h3',
          null,
          'Login'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            _Label2.default,
            { name: 'uid' },
            'email'
          ),
          _react2.default.createElement(_Input2.default, { type: 'text', name: 'uid', onInput: function onInput(e) {
              return _this2.setState({ uid: e.target.value });
            } })
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'uid' },
            'password'
          ),
          _react2.default.createElement(_Input2.default, { type: 'password', name: 'pwd', onInput: function onInput(e) {
              return _this2.setState({ pwd: e.target.value });
            } })
        ),
        _react2.default.createElement(
          _Button2.default,
          { type: 'submit' },
          'Login'
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component)) || _class);
exports.default = Login;


var LoginForm = _styledComponents2.default.form(_templateObject);

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 1rem;\n  max-width: 414px;\n  box-sizing: border-box;\n  margin: 0 auto;\n  p {\n    padding: 0 0 1rem;\n  }\n'], ['\n  padding: 1rem;\n  max-width: 414px;\n  box-sizing: border-box;\n  margin: 0 auto;\n  p {\n    padding: 0 0 1rem;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  border: 1px solid #aaa;\n  padding: 0.25rem;\n  outline: none;\n  width: 100%;\n  height: 100px;\n  box-sizing: border-box;\n'], ['\n  display: block;\n  border: 1px solid #aaa;\n  padding: 0.25rem;\n  outline: none;\n  width: 100%;\n  height: 100px;\n  box-sizing: border-box;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(19);

var _styledComponents = __webpack_require__(14);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _history = __webpack_require__(86);

var _history2 = _interopRequireDefault(_history);

var _Button = __webpack_require__(82);

var _Button2 = _interopRequireDefault(_Button);

var _Input = __webpack_require__(83);

var _Input2 = _interopRequireDefault(_Input);

var _Label = __webpack_require__(84);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPrayer = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = function (_React$Component) {
  _inherits(NewPrayer, _React$Component);

  function NewPrayer() {
    _classCallCheck(this, NewPrayer);

    var _this = _possibleConstructorReturn(this, (NewPrayer.__proto__ || Object.getPrototypeOf(NewPrayer)).call(this));

    _this.state = {
      title: '',
      description: '',
      pinned: false,
      public: false
    };
    return _this;
  }

  _createClass(NewPrayer, [{
    key: 'submitForm',
    value: function submitForm(e) {
      e.preventDefault();
      this.props.appStore.submitPrayer(this.state);
      _history2.default.push('/');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        StyledForm,
        { onSubmit: function onSubmit(e) {
            return _this2.submitForm(e);
          } },
        _react2.default.createElement(
          'h3',
          null,
          'New Prayer'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(_Label2.default, { name: 'title', text: 'Title' }),
          _react2.default.createElement(_Input2.default, { type: 'text', name: 'title', onInput: function onInput(e) {
              return _this2.setState({ title: e.target.value });
            } })
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(_Label2.default, { name: 'description', text: 'Description' }),
          _react2.default.createElement(StyledTextarea, { name: 'description', onInput: function onInput(e) {
              return _this2.setState({ description: e.target.value });
            } })
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('input', { type: 'checkbox', name: 'pinned', onChange: function onChange(e) {
              _this2.setState({ pinned: e.target.value === 'on' });
            } }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'pinned' },
            'Pinned?'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('input', { type: 'checkbox', name: 'public', onChange: function onChange(e) {
              _this2.setState({ public: e.target.value === 'on' });
            } }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'public' },
            'Make Public?'
          )
        ),
        _react2.default.createElement(
          _Button2.default,
          { type: 'submit' },
          'Submit'
        )
      );
    }
  }]);

  return NewPrayer;
}(_react2.default.Component)) || _class);
exports.default = NewPrayer;


var StyledForm = _styledComponents2.default.form(_templateObject);

var StyledTextarea = _styledComponents2.default.textarea(_templateObject2);

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 1rem;\n'], ['\n  padding: 1rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0;\n  padding-bottom: 1rem;\n'], ['\n  margin: 0;\n  padding-bottom: 1rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 1rem;\n  border-bottom: 1px solid ', ';\n\n  &:last-child {\n    border: none;\n  }\n'], ['\n  padding: 1rem;\n  border-bottom: 1px solid ', ';\n\n  &:last-child {\n    border: none;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(19);

var _styledComponents = __webpack_require__(14);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(29);

var _WidthWrapper = __webpack_require__(52);

var _WidthWrapper2 = _interopRequireDefault(_WidthWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UserContainer = _styledComponents2.default.section(_templateObject);

var List = _styledComponents2.default.ul(_templateObject2);

var Item = _styledComponents2.default.li(_templateObject3, function (props) {
  return props.theme.dividerColor;
});

var User = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = function (_React$Component) {
  _inherits(User, _React$Component);

  function User(props) {
    _classCallCheck(this, User);

    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this));

    _this.state = {
      prayers: props.appStore.getPrayers()
    };
    return _this;
  }

  _createClass(User, [{
    key: 'render',
    value: function render() {
      var prayers = [];

      for (var prayer in this.state.prayers) {
        prayers.push(_extends({
          fbId: prayer
        }, this.state.prayers[prayer]));
      }

      return _react2.default.createElement(
        UserContainer,
        null,
        _react2.default.createElement(
          _WidthWrapper2.default,
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Prayers'
          ),
          _react2.default.createElement(PrayerList, { prayers: prayers })
        )
      );
    }
  }]);

  return User;
}(_react2.default.Component)) || _class);
exports.default = User;


function PrayerItem(props) {
  return _react2.default.createElement(
    Item,
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: 'prayer/details/' + props.fbId },
      props.title
    )
  );
}

function PrayerList(_ref) {
  var prayers = _ref.prayers;

  return _react2.default.createElement(
    List,
    null,
    prayers.map(function (prayer, index) {
      return _react2.default.createElement(PrayerItem, _extends({ key: index }, prayer));
    })
  );
}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WidthWrapper;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WidthWrapper(props) {
  return _react2.default.createElement(
    "div",
    { className: "container" },
    props.children
  );
}

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(19);

var _styledComponents = __webpack_require__(14);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrayerDetails = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = function (_React$Component) {
  _inherits(PrayerDetails, _React$Component);

  function PrayerDetails() {
    _classCallCheck(this, PrayerDetails);

    return _possibleConstructorReturn(this, (PrayerDetails.__proto__ || Object.getPrototypeOf(PrayerDetails)).apply(this, arguments));
  }

  _createClass(PrayerDetails, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          appStore = _props.appStore,
          fbId = _props.routeProps.match.params.fbId;

      var _appStore$getPrayer = appStore.getPrayer(fbId),
          closed = _appStore$getPrayer.closed,
          createdDate = _appStore$getPrayer.createdDate,
          description = _appStore$getPrayer.description,
          pinned = _appStore$getPrayer.pinned,
          title = _appStore$getPrayer.title,
          uid = _appStore$getPrayer.uid;

      console.log('PRAYER DEETS', closed, createdDate, description, pinned, title, uid);
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/user' },
          '< Back'
        ),
        _react2.default.createElement(
          'h3',
          null,
          title
        ),
        _react2.default.createElement(
          'p',
          null,
          description
        ),
        _react2.default.createElement(
          'em',
          null,
          new Date(createdDate).toLocaleString()
        )
      );
    }
  }]);

  return PrayerDetails;
}(_react2.default.Component)) || _class);
exports.default = PrayerDetails;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  background-color: ', ';\n  border: none;\n  color: white;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  text-align: center;\n  font-size: 1.1rem;\n\n  &:active {\n    background-color: pink;\n  }\n'], ['\n  width: 100%;\n  background-color: ', ';\n  border: none;\n  color: white;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  text-align: center;\n  font-size: 1.1rem;\n\n  &:active {\n    background-color: pink;\n  }\n']);

exports.default = Button;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(14);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Button(props) {
  return _react2.default.createElement(
    StyledButton,
    null,
    props.children
  );
}

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.theme.accent;
});

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  border-radius: 0px;\n  border: 1px solid #aaa;\n  padding: 0.25rem;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n'], ['\n  display: block;\n  border-radius: 0px;\n  border: 1px solid #aaa;\n  padding: 0.25rem;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(14);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents2.default.input(_templateObject);

exports.default = Input;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  font-size: 0.75rem;\n  margin-bottom: 6px;\n'], ['\n  display: block;\n  font-size: 0.75rem;\n  margin-bottom: 6px;\n']);

exports.default = Label;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(14);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Label(_ref) {
  var text = _ref.text,
      name = _ref.name,
      children = _ref.children;

  return _react2.default.createElement(
    StyledLabel,
    { htmlFor: name },
    text || children
  );
}

Label.propTypes = {
  text: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired
};

var StyledLabel = _styledComponents2.default.label(_templateObject);

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports.auth = undefined;

var _firebase = __webpack_require__(168);

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  apiKey: "AIzaSyDoGO6j6Cg6PuEfjaayHyXQzNKsp-iYpkg",
  authDomain: "prayerfire-15ea2.firebaseapp.com",
  databaseURL: "https://prayerfire-15ea2.firebaseio.com",
  projectId: "prayerfire-15ea2",
  storageBucket: "prayerfire-15ea2.appspot.com",
  messagingSenderId: "522915402714"
};

var io = _firebase2.default.initializeApp(config);

exports.default = io;
var auth = exports.auth = io.auth();

var db = exports.db = io.database();

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = __webpack_require__(192);

exports.default = (0, _history.createBrowserHistory)();

/***/ })

},[144]);
//# sourceMappingURL=app.bundle.js.map