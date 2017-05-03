webpackJsonp([2],{507:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _css = __webpack_require__(513);\n\nvar _button = __webpack_require__(512);\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _TabBar = __webpack_require__(180);\n\nvar _NavBar = __webpack_require__(109);\n\nvar _fetch = __webpack_require__(57);\n\nvar _fetch2 = _interopRequireDefault(_fetch);\n\nvar _Loading = __webpack_require__(110);\n\nvar _Loading2 = _interopRequireDefault(_Loading);\n\n__webpack_require__(569);\n\nvar _reactRedux = __webpack_require__(42);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MyTab = function (_React$Component) {\n    _inherits(MyTab, _React$Component);\n\n    function MyTab() {\n        _classCallCheck(this, MyTab);\n\n        return _possibleConstructorReturn(this, (MyTab.__proto__ || Object.getPrototypeOf(MyTab)).apply(this, arguments));\n    }\n\n    _createClass(MyTab, [{\n        key: 'shouldComponentUpdate',\n        value: function shouldComponentUpdate(nextProps, nextState) {\n            return JSON.stringify(this.props.loginObj) != JSON.stringify(nextProps.loginObj);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _props = this.props,\n                loginObj = _props.loginObj,\n                logOut = _props.logOut,\n                history = _props.history;\n\n            if (!loginObj.isLogin) {\n                console.log('My页面未登录状态渲染了一次');\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_NavBar.MyNavBarRedux, { history: history, page: 'myTab', titleName: '\\u6211\\u7684' }),\n                    _react2.default.createElement(\n                        _button2.default,\n                        { className: 'toLoginPage', onClick: function onClick() {\n                                return history.push('/Login');\n                            } },\n                        '\\u53BB\\u767B\\u5F55'\n                    ),\n                    _react2.default.createElement(_TabBar.MyTabBarRedux, { history: history, page: 'myTab' })\n                );\n            } else if (loginObj.isLogining || !loginObj.successObj) {\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_NavBar.MyNavBarRedux, { history: history, page: 'myTab', titleName: '\\u6211\\u7684' }),\n                    _react2.default.createElement(_Loading2.default, null),\n                    _react2.default.createElement(_TabBar.MyTabBarRedux, { history: history, page: 'myTab' })\n                );\n            } else {\n                console.log('My页面登录状态渲染了一次');\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_NavBar.MyNavBarRedux, { history: history, page: 'myTab', titleName: '\\u6211\\u7684' }),\n                    _react2.default.createElement('img', { className: 'myAvatar', src: loginObj.successObj.avatar_url }),\n                    _react2.default.createElement(\n                        _button2.default,\n                        { id: 'logOutBtn', onClick: function onClick() {\n                                return logOut();\n                            }, className: 'toLoginPage' },\n                        '\\u9000\\u51FA'\n                    ),\n                    _react2.default.createElement(_TabBar.MyTabBarRedux, { history: history, page: 'myTab' })\n                );\n            }\n        }\n    }]);\n\n    return MyTab;\n}(_react2.default.Component);\n\nvar MyTabRedux = (0, _reactRedux.connect)(function (state) {\n    return {\n        loginObj: state.loginObj\n    };\n}, function (dispatch) {\n    return {\n        logOut: function logOut() {\n            {\n                dispatch((0, _fetch2.default)('accesstoken', 'post', { accesstoken: '' }, '_LOGOUT'));\n            }\n        }\n    };\n})(MyTab);\n\nexports.default = MyTabRedux;\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/.6.4.1@babel-loader/lib!./src/components/MyPage/MyTab.js\n// module id = 507\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/components/MyPage/MyTab.js?./~/.6.4.1@babel-loader/lib")},511:function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(504)();\nexports.push([module.i, ".am-button,.am-button-small{-webkit-background-clip:padding-box}.hairline-remove-right-bottom{border-bottom:0}.hairline-remove-left-top:before,.hairline-remove-right-bottom-bak:after,.hairline-remove-right-bottom:after{display:none}.am-button{display:block;outline:0;-webkit-appearance:none;-webkit-box-sizing:border-box;padding:0;text-align:center;font-size:.36rem;height:.84rem;line-height:.84rem;color:#000;background-color:#fff;border:1PX solid #ddd;border-radius:.1rem}.am-button.am-button-active{background-color:#ddd}.am-button-primary{color:#fff;background-color:#108ee9;border:1PX solid #108ee9}.am-button-primary.am-button-active{background-color:#1284d6}.am-button-ghost{color:#108ee9;background-color:transparent;border:1PX solid #108ee9}.am-button-ghost.am-button-active{color:#fff;background-color:#1284d6;border:1PX solid #108ee9}.am-button-inline{display:inline-block;padding:0 .3rem}.am-button-small{font-size:.26rem;height:.6rem;line-height:.6rem;padding:0 .3rem;border-radius:.1rem}.am-button-warning{color:#f86e21;background-color:#fff}.am-button-ghost.am-button-across,.am-button-primary.am-button-across,.am-button-warning.am-button-across,.am-button.am-button-across{-webkit-background-clip:padding-box;border-left:0;border-right:0;border-radius:0}.am-button-ghost.am-button-disabled,.am-button-primary.am-button-disabled,.am-button-warning.am-button-disabled,.am-button.am-button-disabled{color:#bbb;background-color:#ddd;border:0}.am-button-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.am-button>.am-icon{margin-right:.5em}", ""]);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/.0.14.5@css-loader!./~/.0.11.1@postcss-loader!./~/.1.0.7@antd-mobile/lib/button/style/index.css\n// module id = 511\n// module chunks = 0 1 2 3\n\n//# sourceURL=webpack:///./~/.1.0.7@antd-mobile/lib/button/style/index.css?./~/.0.14.5@css-loader!./~/.0.11.1@postcss-loader')},512:function(module,exports,__webpack_require__){"use strict";eval('Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(13);var _extends3=_interopRequireDefault(_extends2);var _defineProperty2=__webpack_require__(12);var _defineProperty3=_interopRequireDefault(_defineProperty2);var _classCallCheck2=__webpack_require__(7);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(10);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(9);var _inherits3=_interopRequireDefault(_inherits2);\n\n\n\n\n\n\n\n\nvar _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);\nvar _classnames=__webpack_require__(8);var _classnames2=_interopRequireDefault(_classnames);\nvar _index=__webpack_require__(55);var _index2=_interopRequireDefault(_index);\nvar _rcTouchable=__webpack_require__(108);var _rcTouchable2=_interopRequireDefault(_rcTouchable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var __rest=undefined&&undefined.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0)t[p[i]]=s[p[i]];}return t;};\nvar rxTwoCNChar=/^[\\u4e00-\\u9fa5]{2}$/;\nvar isTwoCNChar=rxTwoCNChar.test.bind(rxTwoCNChar);\nfunction isString(str){\nreturn typeof str===\'string\';\n}\n\nfunction insertSpace(child){\nif(isString(child.type)&&isTwoCNChar(child.props.children)){\nreturn _react2["default"].cloneElement(child,{},child.props.children.split(\'\').join(\' \'));\n}\nif(isString(child)){\nif(isTwoCNChar(child)){\nchild=child.split(\'\').join(\' \');\n}\nreturn _react2["default"].createElement(\'span\',null,child);\n}\nreturn child;\n}var\nButton=function(_React$Component){(0,_inherits3["default"])(Button,_React$Component);function Button(){(0,_classCallCheck3["default"])(this,Button);return(0,_possibleConstructorReturn3["default"])(this,_React$Component.apply(this,arguments));}Button.prototype.\nrender=function render(){var _wrapCls;\nvar _a=this.props,children=_a.children,className=_a.className,prefixCls=_a.prefixCls,type=_a.type,size=_a.size,inline=_a.inline,across=_a.across,disabled=_a.disabled,icon=_a.icon,loading=_a.loading,activeStyle=_a.activeStyle,onClick=_a.onClick,restProps=__rest(_a,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle","onClick"]);\nvar wrapCls=(_wrapCls={},(0,_defineProperty3["default"])(_wrapCls,\nclassName,className),(0,_defineProperty3["default"])(_wrapCls,\nprefixCls,true),(0,_defineProperty3["default"])(_wrapCls,\nprefixCls+\'-primary\',type===\'primary\'),(0,_defineProperty3["default"])(_wrapCls,\nprefixCls+\'-ghost\',type===\'ghost\'),(0,_defineProperty3["default"])(_wrapCls,\nprefixCls+\'-warning\',type===\'warning\'),(0,_defineProperty3["default"])(_wrapCls,\nprefixCls+\'-small\',size===\'small\'),(0,_defineProperty3["default"])(_wrapCls,\nprefixCls+\'-inline\',inline),(0,_defineProperty3["default"])(_wrapCls,\nprefixCls+\'-across\',across),(0,_defineProperty3["default"])(_wrapCls,\nprefixCls+\'-disabled\',disabled),(0,_defineProperty3["default"])(_wrapCls,\nprefixCls+\'-loading\',loading),_wrapCls);\n\nvar iconType=loading?\'loading\':icon;\nvar kids=_react2["default"].Children.map(children,insertSpace);\nif(iconType){\nwrapCls[prefixCls+\'-icon\']=true;\n}\n\nreturn _react2["default"].createElement(_rcTouchable2["default"],{activeClassName:activeStyle?prefixCls+\'-active\':undefined,disabled:disabled,activeStyle:activeStyle},\n_react2["default"].createElement(\'a\',(0,_extends3["default"])({role:\'button\',className:(0,_classnames2["default"])(wrapCls)},restProps,{onClick:disabled?undefined:onClick}),\niconType?_react2["default"].createElement(_index2["default"],{type:iconType}):null,\nkids));\n\n\n};return Button;}(_react2["default"].Component);\n\nButton.defaultProps={\nprefixCls:\'am-button\',\nsize:\'large\',\ninline:false,\nacross:false,\ndisabled:false,\nloading:false,\nactiveStyle:{}};exports["default"]=\n\nButton;module.exports=exports[\'default\'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/.1.0.7@antd-mobile/lib/button/index.web.js\n// module id = 512\n// module chunks = 0 1 2 3\n\n//# sourceURL=webpack:///./~/.1.0.7@antd-mobile/lib/button/index.web.js?')},513:function(module,exports,__webpack_require__){"use strict";eval("__webpack_require__(22);\n__webpack_require__(56);\n__webpack_require__(514);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/.1.0.7@antd-mobile/lib/button/style/css.web.js\n// module id = 513\n// module chunks = 0 1 2 3\n\n//# sourceURL=webpack:///./~/.1.0.7@antd-mobile/lib/button/style/css.web.js?")},514:function(module,exports,__webpack_require__){eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(511);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(503)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../.0.14.5@css-loader/index.js!../../../../.0.11.1@postcss-loader/index.js!./index.css\", function() {\n\t\t\tvar newContent = require(\"!!../../../../.0.14.5@css-loader/index.js!../../../../.0.11.1@postcss-loader/index.js!./index.css\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/.1.0.7@antd-mobile/lib/button/style/index.css\n// module id = 514\n// module chunks = 0 1 2 3\n\n//# sourceURL=webpack:///./~/.1.0.7@antd-mobile/lib/button/style/index.css?")},520:function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(504)();\nexports.push([module.i, ".myAvatar{width:2rem;height:2rem;border-radius:50%;margin:20% auto;display:block;border:.1rem solid #fff;box-shadow:0 0 1rem #000}#logOutBtn{background:#a80011;color:#fff;margin:20% auto}", ""]);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/.0.14.5@css-loader!./~/.0.11.1@postcss-loader!./~/.1.0.4@sass-loader!./src/components/MyPage/MyTab.scss\n// module id = 520\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/components/MyPage/MyTab.scss?./~/.0.14.5@css-loader!./~/.0.11.1@postcss-loader!./~/.1.0.4@sass-loader')},569:function(module,exports,__webpack_require__){eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(520);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(503)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../node_modules/.0.14.5@css-loader/index.js!../../../node_modules/.0.11.1@postcss-loader/index.js!../../../node_modules/.1.0.4@sass-loader/index.js!./MyTab.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../node_modules/.0.14.5@css-loader/index.js!../../../node_modules/.0.11.1@postcss-loader/index.js!../../../node_modules/.1.0.4@sass-loader/index.js!./MyTab.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/MyPage/MyTab.scss\n// module id = 569\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/components/MyPage/MyTab.scss?")}});