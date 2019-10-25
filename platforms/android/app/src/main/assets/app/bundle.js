require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nActionBar[data-v-45ba5ed4] {\n    background-color: #53ba82;\n    color: #ffffff;\n}\n.message[data-v-45ba5ed4] {\n    vertical-align: center;\n    text-align: center;\n    font-size: 20;\n    color: #333333;\n}\n.fa[data-v-45ba5ed4] {\n    Font-family: 'Font Awesome 5 Free';\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/App.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/ts-loader/index.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=ts&":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var nativescript_vue_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"));
var vue_property_decorator_1 = __webpack_require__("../node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var fusionAuthClientInstance_1 = tslib_1.__importDefault(__webpack_require__("./lib/fusionAuthClientInstance.ts"));
var Home_vue_1 = tslib_1.__importDefault(__webpack_require__("./components/Home.vue"));
var nativescript_fontawesome_1 = __webpack_require__("../node_modules/nativescript-fontawesome/fontawesome.js");
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        var _this = this;
        nativescript_fontawesome_1.Fontawesome.init();
        return _this;
    }
    App.prototype.goTo = function (roleInFusionAuth) {
        if (roleInFusionAuth == "view-security-message" || roleInFusionAuth == "admin") {
            this.$navigateTo(Home_vue_1.default, {
                props: {
                    role: this.post,
                }
            });
        }
        else {
            alert({
                title: "TRETA",
                message: "Usuário ou senha incorretos",
                okButtonText: "try Again"
            }).then(function () {
                console.log("Alert dialog closed");
            });
        }
        ;
    };
    ;
    App.prototype.requestProvider = function () {
        this.request = {
            "loginId": this.email,
            "password": this.password,
            "applicationId": "fca4814f-645c-4c3f-a9b0-2b2ca7a2e835"
        };
        return this.request;
    };
    ;
    App.prototype.testFusionAuthMethods = function () {
        return fusionAuthClientInstance_1.default.searchUsers("901904d8-5eeb-441f-a80e-8c8c595825b5")
            .then(function (response) {
            console.log(response);
        });
    };
    ;
    App.prototype.clientLogin = function () {
        var _this = this;
        // this.$navigateTo(secure);
        return fusionAuthClientInstance_1.default.login(this.requestProvider())
            .then(this.handleResponse, this.handleErrorResponse)
            .then(function (response) {
            _this.result = response;
            _this.user = _this.result;
            _this.roles = _this.user.response.user.registrations;
            _this.post = _this.roles[0].roles[0];
            console.log(_this.roles[0].roles[0]);
            // this.user = this.result.response;
            // this.roles = this.user.user.registrations;
            // this.post = this.roles[0].roles[0];
        })
            .then(function (responsibility) {
            console.log(_this.post);
            _this.goTo(_this.roles[0].roles[0]);
        });
    };
    ;
    App.prototype.handleResponse = function (clientResponse) {
        return clientResponse;
    };
    ;
    App.prototype.handleErrorResponse = function (clientResponse) {
        return clientResponse;
    };
    ;
    App = tslib_1.__decorate([
        vue_property_decorator_1.Component,
        tslib_1.__metadata("design:paramtypes", [])
    ], App);
    return App;
}(nativescript_vue_1.default));
exports.default = App;


/***/ }),

/***/ "../node_modules/ts-loader/index.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=ts&":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var nativescript_vue_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"));
var vue_property_decorator_1 = __webpack_require__("../node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var geolocation = tslib_1.__importStar(__webpack_require__("../node_modules/nativescript-geolocation/geolocation.js"));
var enums_1 = __webpack_require__("../node_modules/tns-core-modules/ui/enums/enums.js");
var Secure_vue_1 = tslib_1.__importDefault(__webpack_require__("./components/Secure.vue"));
var utils = tslib_1.__importStar(__webpack_require__("../node_modules/tns-core-modules/utils/utils.js"));
var Home = /** @class */ (function (_super) {
    tslib_1.__extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lat = "";
        _this.lon = "";
        _this.speed = "";
        _this.addr = "";
        return _this;
    }
    Home.prototype.goToSecure = function () {
        if (this.role == "admin") {
            this.$navigateTo(Secure_vue_1.default);
        }
        else {
            alert({
                title: "User Not is admin",
                message: "volte osado",
                okButtonText: "exit"
            }).then(function () {
                console.log("Alert dialog closed");
            });
        }
        ;
    };
    Home.prototype.getLocation = function () {
        var _this = this;
        geolocation.enableLocationRequest();
        geolocation.getCurrentLocation({ desiredAccuracy: enums_1.Accuracy.high, maximumAge: 5000, timeout: 20000 })
            .then(function (res) {
            _this.lat = res.latitude;
            _this.lon = res.longitude;
            utils.openUrl("https://www.google.com/maps/place/" + _this.lat + ',' + _this.lon);
        });
    };
    ;
    Home.prototype.goToTest = function (roleInFusionAuth) {
        if (roleInFusionAuth == "view-security-message") {
            this.$navigateTo(Secure_vue_1.default);
        }
        else {
            alert({
                title: "TRETA",
                message: "Usuário sem Permissão",
                okButtonText: "OK"
            }).then(function () {
                console.log("Alert dialog closed");
            });
        }
        ;
    };
    tslib_1.__decorate([
        vue_property_decorator_1.Prop(),
        tslib_1.__metadata("design:type", String)
    ], Home.prototype, "role", void 0);
    Home = tslib_1.__decorate([
        vue_property_decorator_1.Component
    ], Home);
    return Home;
}(nativescript_vue_1.default));
exports.default = Home;


/***/ }),

/***/ "../node_modules/ts-loader/index.js?!../node_modules/vue-loader/lib/index.js?!./components/Secure.vue?vue&type=script&lang=ts&":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var nativescript_vue_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"));
var vue_property_decorator_1 = __webpack_require__("../node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var nativescript_local_notifications_1 = __webpack_require__("../node_modules/nativescript-local-notifications/local-notifications.js");
var Secure = /** @class */ (function (_super) {
    tslib_1.__extends(Secure, _super);
    function Secure() {
        var _this = this;
        nativescript_local_notifications_1.LocalNotifications.hasPermission();
        _this.test();
        return _this;
    }
    Secure.prototype.test = function () {
        nativescript_local_notifications_1.LocalNotifications.schedule([{
                id: 1,
                title: 'Nova mensagem em nMobile',
                subtitle: 'Mensagem de nTopus',
                body: "message.message",
                bigTextStyle: false,
                forceShowWhenInForeground: true,
                icon: "res://logo",
                image: "res://icon",
                channel: "vue-channel",
                at: new Date(new Date().getTime() + (10 * 1000))
            }]);
        nativescript_local_notifications_1.LocalNotifications.requestPermission().then(function (granted) {
            console.log("Permission granted? " + granted);
        });
    };
    Secure = tslib_1.__decorate([
        vue_property_decorator_1.Component,
        tslib_1.__metadata("design:paramtypes", [])
    ], Secure);
    return Secure;
}(nativescript_vue_1.default));
exports.default = Secure;


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&for=r%20in%20result&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Image", {
                attrs: {
                  src:
                    "https://www.carnegietechnologies.com/sites/ct/assets/image/logo-octopus.png",
                  loadMode: "async",
                  stretch: "aspectFit"
                }
              }),
              _c(
                "StackLayout",
                { staticClass: "input-field" },
                [
                  _c("TextField", {
                    staticClass: "input",
                    attrs: {
                      hint: "email",
                      keyboardType: "email",
                      autocorrect: "false",
                      autocapitalizationType: "none",
                      text: _vm.email
                    },
                    on: {
                      textChange: function($event) {
                        _vm.email = $event.value
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { staticClass: "input-field" },
                [
                  _c("TextField", {
                    staticClass: "input",
                    attrs: {
                      hint: "Password",
                      secure: "true",
                      text: _vm.password
                    },
                    on: {
                      textChange: function($event) {
                        _vm.password = $event.value
                      }
                    }
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary",
                attrs: { text: "Log In" },
                on: { tap: _vm.clientLogin }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { staticClass: "action-bar", attrs: { title: "Home" } }),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            { staticClass: "home-panel" },
            [
              _c("Button", {
                staticClass: "btn btn-primary",
                attrs: { text: "Get My Location" },
                on: { tap: _vm.getLocation }
              }),
              _c("Button", {
                staticClass: "btn btn-primary",
                attrs: { text: "Secure" },
                on: { tap: _vm.goToSecure }
              }),
              _c("Label", {
                staticClass: "lbl",
                attrs: { text: "Latitude: " + _vm.lat }
              }),
              _c("Label", {
                staticClass: "lbl",
                attrs: { text: "Longitude: " + _vm.lon }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Secure.vue?vue&type=template&id=0247a512&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Page", [_vm._v("\n    <>\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss",
	"./lib/DeafaultRestClientNativeBuilder.ts": "./lib/DeafaultRestClientNativeBuilder.ts",
	"./lib/DefaultRESTClientNative.ts": "./lib/DefaultRESTClientNative.ts",
	"./lib/FusionAuthClientNative.ts": "./lib/FusionAuthClientNative.ts",
	"./lib/fusionAuthClientInstance.ts": "./lib/fusionAuthClientInstance.ts",
	"./main.ts": "./main.ts",
	"./store.ts": "./store.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for blue variables\r\n * Includes base variables with blue overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\r\n * Blue variable overrides\r\n **/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #30bcff; }\n\n.text-danger {\n  color: #d50000; }\n\n.text-muted {\n  color: #9e9e9e; }\n\n.bg-primary {\n  background-color: #30bcff;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #d50000;\n  color: #fff; }\n\n.action-bar {\n  background-color: #3d5afe;\n  color: #fff; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #30bcff;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #30bcff;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #63cdff; }\n\n.btn-primary {\n  background-color: #30bcff;\n  border-color: #30bcff;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #00aafc;\n    border-color: #00aafc; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #30bcff;\n  color: #30bcff; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #63cdff; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #30bcff; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #212121; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #757575; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #212121;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #757575;\n    font-size: 14; }\n\n.page {\n  background-color: #fff; }\n\n.progress {\n  color: #30bcff;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #fff;\n  color: #212121;\n  selected-background-color: #30bcff; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #fafafa; }\n\n.sidedrawer-header {\n  background-color: #fafafa;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #737373; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #fff;\n    background-color: #30bcff; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #fff; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #30bcff; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #30bcff;\n  color: #30bcff; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #fff; }\n  .tab-view .tab-view-item {\n    background-color: #fff;\n    tabs-background-color: #fff; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #212121;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #212121;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #212121;\n  margin-top: 10; }\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_45ba5ed4_scoped_true_for_r_20in_20result___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&for=r%20in%20result&");
/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_45ba5ed4_scoped_true_for_r_20in_20result___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_45ba5ed4_scoped_true_for_r_20in_20result___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45ba5ed4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('45ba5ed4')) {
      api.createRecord('45ba5ed4', component.options)
    } else {
      api.reload('45ba5ed4', component.options)
    }
    module.hot.accept("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&for=r%20in%20result&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_45ba5ed4_scoped_true_for_r_20in_20result___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&for=r%20in%20result&");
(function () {
      api.rerender('45ba5ed4', {
        render: _App_vue_vue_type_template_id_45ba5ed4_scoped_true_for_r_20in_20result___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _App_vue_vue_type_template_id_45ba5ed4_scoped_true_for_r_20in_20result___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/App.vue?vue&type=script&lang=ts&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/ts-loader/index.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&for=r%20in%20result&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true_for_r_20in_20result___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&for=r%20in%20result&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true_for_r_20in_20result___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true_for_r_20in_20result___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67410f3a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=ts&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/ts-loader/index.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Secure.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Secure_vue_vue_type_template_id_0247a512_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Secure.vue?vue&type=template&id=0247a512&scoped=true&");
/* harmony import */ var _Secure_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Secure.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Secure_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Secure_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Secure_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Secure_vue_vue_type_template_id_0247a512_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Secure_vue_vue_type_template_id_0247a512_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0247a512",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0247a512')) {
      api.createRecord('0247a512', component.options)
    } else {
      api.reload('0247a512', component.options)
    }
    module.hot.accept("./components/Secure.vue?vue&type=template&id=0247a512&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Secure_vue_vue_type_template_id_0247a512_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Secure.vue?vue&type=template&id=0247a512&scoped=true&");
(function () {
      api.rerender('0247a512', {
        render: _Secure_vue_vue_type_template_id_0247a512_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Secure_vue_vue_type_template_id_0247a512_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/Secure.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Secure.vue?vue&type=script&lang=ts&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Secure_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/ts-loader/index.js?!../node_modules/vue-loader/lib/index.js?!./components/Secure.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Secure_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Secure_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Secure_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Secure_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Secure_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Secure.vue?vue&type=template&id=0247a512&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Secure_vue_vue_type_template_id_0247a512_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Secure.vue?vue&type=template&id=0247a512&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Secure_vue_vue_type_template_id_0247a512_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Secure_vue_vue_type_template_id_0247a512_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./lib/DeafaultRestClientNativeBuilder.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var DefaultRESTClientNative_1 = tslib_1.__importDefault(__webpack_require__("./lib/DefaultRESTClientNative.ts"));
var DefaultRESTClientNativeBuilder = /** @class */ (function () {
    function DefaultRESTClientNativeBuilder() {
    }
    DefaultRESTClientNativeBuilder.prototype.build = function (host) {
        return new DefaultRESTClientNative_1.default(host);
    };
    return DefaultRESTClientNativeBuilder;
}());
exports.default = DefaultRESTClientNativeBuilder;


/***/ }),

/***/ "./lib/DefaultRESTClientNative.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var ClientResponse_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/@fusionauth/typescript-client/build/src/ClientResponse.js"));
var http_1 = __webpack_require__("../node_modules/tns-core-modules/http/http.js");
var DefaultRESTClientNative = /** @class */ (function () {
    function DefaultRESTClientNative(host) {
        this.host = host;
        this.headers = {};
        this.parameters = {};
    }
    /**
     * Sets the authorization header using a key
     *
     * @param {string} key The value of the authorization header.
     * @returns {DefaultRESTClient}
     */
    DefaultRESTClientNative.prototype.withAuthorization = function (key) {
        if (key === null || typeof key === 'undefined') {
            return this;
        }
        this.withHeader('Authorization', key);
        return this;
    };
    /**
     * Adds a segment to the request uri
     */
    DefaultRESTClientNative.prototype.withUriSegment = function (segment) {
        if (segment === null || segment === undefined) {
            return this;
        }
        if (this.uri === null) {
            this.uri = '';
        }
        if (this.uri.charAt(this.uri.length - 1) !== '/') {
            this.uri += '/';
        }
        this.uri = this.uri + segment;
        return this;
    };
    /**
     * Get the full url + parameter list
     */
    DefaultRESTClientNative.prototype.getFullUrl = function () {
        return this.host + this.uri + this.getQueryString();
    };
    /**
     * Adds a header to the request.
     *
     * @param key The name of the header.
     * @param value The value of the header.
     */
    DefaultRESTClientNative.prototype.withHeader = function (key, value) {
        this.headers[key] = value;
        return this;
    };
    /**
     * Sets the body of the client request.
     *
     * @param body The object to be written to the request body as JSON.
     */
    DefaultRESTClientNative.prototype.withJSONBody = function (body) {
        this.body = JSON.stringify(body);
        this.withHeader('Content-Type', 'application/json');
        // Omit the Content-Length, this is set auto-magically by the request library
        return this;
    };
    /**
     * Sets the http method for the request
     */
    DefaultRESTClientNative.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    /**
     * Sets the uri of the request
     */
    DefaultRESTClientNative.prototype.withUri = function (uri) {
        this.uri = uri;
        return this;
    };
    /**
     * Adds parameters to the request.
     *
     * @param name The name of the parameter.
     * @param value The value of the parameter, may be a string, object or number.
     */
    DefaultRESTClientNative.prototype.withParameter = function (name, value) {
        this.parameters[name] = value;
        return this;
    };
    /**
     * Run the request and return a promise. This promise will resolve if the request is successful
     * and reject otherwise.
     */
    DefaultRESTClientNative.prototype.go = function () {
        var _this = this;
        var clientResponse = new ClientResponse_1.default();
        return new Promise(function (resolve, reject) {
            http_1.request({
                url: _this.getFullUrl(),
                method: _this.method,
                headers: _this.headers,
                content: _this.body
            })
                .then(function (response) {
                clientResponse.statusCode = response.statusCode;
                clientResponse.response = response.content.raw;
                try { // Try parsing as json
                    clientResponse.response = response.content.toJSON();
                }
                catch (e) {
                }
                if (!clientResponse.wasSuccessful()) {
                    reject(clientResponse);
                    return;
                }
                resolve(clientResponse);
            }, function (error) {
                clientResponse.exception = error;
                reject(clientResponse);
            });
        });
    };
    DefaultRESTClientNative.prototype.getQueryString = function () {
        var queryString = '';
        for (var key in this.parameters) {
            queryString += (queryString.length === 0) ? '?' : '&';
            queryString += key + '=' + encodeURIComponent(this.parameters[key]);
        }
        return queryString;
    };
    DefaultRESTClientNative.prototype.withCredentials = function (value) {
        this.credentials = value;
        return this;
    };
    return DefaultRESTClientNative;
}());
exports.default = DefaultRESTClientNative;


/***/ }),

/***/ "./lib/FusionAuthClientNative.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/*
* Copyright (c) 2019, FusionAuth, All Rights Reserved
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific
* language governing permissions and limitations under the License.
*/
var DeafaultRestClientNativeBuilder_1 = tslib_1.__importDefault(__webpack_require__("./lib/DeafaultRestClientNativeBuilder.ts"));
var FusionAuthClientNative = /** @class */ (function () {
    function FusionAuthClientNative(apiKey, host, tenantId) {
        this.apiKey = apiKey;
        this.host = host;
        this.tenantId = tenantId;
        this.clientBuilder = new DeafaultRestClientNativeBuilder_1.default();
    }
    /**
     * Sets the tenant id, that will be included in the X-FusionAuth-TenantId header.
     *
     * @param {string | null} tenantId The value of the X-FusionAuth-TenantId header.
     * @returns {FusionAuthClient}
     */
    FusionAuthClientNative.prototype.setTenantId = function (tenantId) {
        this.tenantId = tenantId;
        return this;
    };
    /**
     * Takes an action on a user. The user being actioned is called the "actionee" and the user taking the action is called the
     * "actioner". Both user ids are required. You pass the actionee's user id into the method and the actioner's is put into the
     * request object.
     *
     * @param {string} actioneeUserId The actionee's user id.
     * @param {ActionRequest} request The action request that includes all of the information about the action being taken including
     *    the id of the action, any options and the duration (if applicable).
     * @returns {Promise<ClientResponse<ActionResponse>>}
     */
    FusionAuthClientNative.prototype.actionUser = function (actioneeUserId, request) {
        return this.start()
            .withUri('/api/user/action')
            .withUriSegment(actioneeUserId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Adds a user to an existing family. The family id must be specified.
     *
     * @param {string} familyId The id of the family.
     * @param {FamilyRequest} request The request object that contains all of the information used to determine which user to add to the family.
     * @returns {Promise<ClientResponse<FamilyResponse>>}
     */
    FusionAuthClientNative.prototype.addUserToFamily = function (familyId, request) {
        return this.start()
            .withUri('/api/user/family')
            .withUriSegment(familyId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Cancels the user action.
     *
     * @param {string} actionId The action id of the action to cancel.
     * @param {ActionRequest} request The action request that contains the information about the cancellation.
     * @returns {Promise<ClientResponse<ActionResponse>>}
     */
    FusionAuthClientNative.prototype.cancelAction = function (actionId, request) {
        return this.start()
            .withUri('/api/user/action')
            .withUriSegment(actionId)
            .withJSONBody(request)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Changes a user's password using the change password Id. This usually occurs after an email has been sent to the user
     * and they clicked on a link to reset their password.
     *
     * @param {string} changePasswordId The change password Id used to find the user. This value is generated by FusionAuth once the change password workflow has been initiated.
     * @param {ChangePasswordRequest} request The change password request that contains all of the information used to change the password.
     * @returns {Promise<ClientResponse<ChangePasswordResponse>>}
     */
    FusionAuthClientNative.prototype.changePassword = function (changePasswordId, request) {
        return this.start()
            .withUri('/api/user/change-password')
            .withUriSegment(changePasswordId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Changes a user's password using their identity (login id and password). Using a loginId instead of the changePasswordId
     * bypasses the email verification and allows a password to be changed directly without first calling the #forgotPassword
     * method.
     *
     * @param {ChangePasswordRequest} request The change password request that contains all of the information used to change the password.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.changePasswordByIdentity = function (request) {
        return this.start()
            .withUri('/api/user/change-password')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Adds a comment to the user's account.
     *
     * @param {UserCommentRequest} request The request object that contains all of the information used to create the user comment.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.commentOnUser = function (request) {
        return this.start()
            .withUri('/api/user/comment')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.
     *
     * @param {string} applicationId (Optional) The Id to use for the application. If not provided a secure random UUID will be generated.
     * @param {ApplicationRequest} request The request object that contains all of the information used to create the application.
     * @returns {Promise<ClientResponse<ApplicationResponse>>}
     */
    FusionAuthClientNative.prototype.createApplication = function (applicationId, request) {
        return this.start()
            .withUri('/api/application')
            .withUriSegment(applicationId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a new role for an application. You must specify the id of the application you are creating the role for.
     * You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.
     *
     * @param {string} applicationId The Id of the application to create the role on.
     * @param {string} roleId (Optional) The Id of the role. If not provided a secure random UUID will be generated.
     * @param {ApplicationRequest} request The request object that contains all of the information used to create the application role.
     * @returns {Promise<ClientResponse<ApplicationResponse>>}
     */
    FusionAuthClientNative.prototype.createApplicationRole = function (applicationId, roleId, request) {
        return this.start()
            .withUri('/api/application')
            .withUriSegment(applicationId)
            .withUriSegment("role")
            .withUriSegment(roleId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates an audit log with the message and user name (usually an email). Audit logs should be written anytime you
     * make changes to the FusionAuth database. When using the FusionAuth App web interface, any changes are automatically
     * written to the audit log. However, if you are accessing the API, you must write the audit logs yourself.
     *
     * @param {AuditLogRequest} request The request object that contains all of the information used to create the audit log entry.
     * @returns {Promise<ClientResponse<AuditLogResponse>>}
     */
    FusionAuthClientNative.prototype.createAuditLog = function (request) {
        return this.start()
            .withUri('/api/system/audit-log')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.
     *
     * @param {string} consentId (Optional) The Id for the consent. If not provided a secure random UUID will be generated.
     * @param {ConsentRequest} request The request object that contains all of the information used to create the consent.
     * @returns {Promise<ClientResponse<ConsentResponse>>}
     */
    FusionAuthClientNative.prototype.createConsent = function (consentId, request) {
        return this.start()
            .withUri('/api/consent')
            .withUriSegment(consentId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.
     *
     * @param {string} emailTemplateId (Optional) The Id for the template. If not provided a secure random UUID will be generated.
     * @param {EmailTemplateRequest} request The request object that contains all of the information used to create the email template.
     * @returns {Promise<ClientResponse<EmailTemplateResponse>>}
     */
    FusionAuthClientNative.prototype.createEmailTemplate = function (emailTemplateId, request) {
        return this.start()
            .withUri('/api/email/template')
            .withUriSegment(emailTemplateId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a family with the user id in the request as the owner and sole member of the family. You can optionally specify an id for the
     * family, if not provided one will be generated.
     *
     * @param {string} familyId (Optional) The id for the family. If not provided a secure random UUID will be generated.
     * @param {FamilyRequest} request The request object that contains all of the information used to create the family.
     * @returns {Promise<ClientResponse<FamilyResponse>>}
     */
    FusionAuthClientNative.prototype.createFamily = function (familyId, request) {
        return this.start()
            .withUri('/api/user/family')
            .withUriSegment(familyId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.
     *
     * @param {string} groupId (Optional) The Id for the group. If not provided a secure random UUID will be generated.
     * @param {GroupRequest} request The request object that contains all of the information used to create the group.
     * @returns {Promise<ClientResponse<GroupResponse>>}
     */
    FusionAuthClientNative.prototype.createGroup = function (groupId, request) {
        return this.start()
            .withUri('/api/group')
            .withUriSegment(groupId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a member in a group.
     *
     * @param {MemberRequest} request The request object that contains all of the information used to create the group member(s).
     * @returns {Promise<ClientResponse<MemberResponse>>}
     */
    FusionAuthClientNative.prototype.createGroupMembers = function (request) {
        return this.start()
            .withUri('/api/group/member')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.
     *
     * @param {string} identityProviderId (Optional) The Id of the identity provider. If not provided a secure random UUID will be generated.
     * @param {IdentityProviderRequest} request The request object that contains all of the information used to create the identity provider.
     * @returns {Promise<ClientResponse<IdentityProviderResponse>>}
     */
    FusionAuthClientNative.prototype.createIdentityProvider = function (identityProviderId, request) {
        return this.start()
            .withUri('/api/identity-provider')
            .withUriSegment(identityProviderId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.
     *
     * @param {string} lambdaId (Optional) The Id for the lambda. If not provided a secure random UUID will be generated.
     * @param {LambdaRequest} request The request object that contains all of the information used to create the lambda.
     * @returns {Promise<ClientResponse<LambdaResponse>>}
     */
    FusionAuthClientNative.prototype.createLambda = function (lambdaId, request) {
        return this.start()
            .withUri('/api/lambda')
            .withUriSegment(lambdaId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.
     *
     * @param {string} tenantId (Optional) The Id for the tenant. If not provided a secure random UUID will be generated.
     * @param {TenantRequest} request The request object that contains all of the information used to create the tenant.
     * @returns {Promise<ClientResponse<TenantResponse>>}
     */
    FusionAuthClientNative.prototype.createTenant = function (tenantId, request) {
        return this.start()
            .withUri('/api/tenant')
            .withUriSegment(tenantId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.
     *
     * @param {string} themeId (Optional) The Id for the theme. If not provided a secure random UUID will be generated.
     * @param {ThemeRequest} request The request object that contains all of the information used to create the theme.
     * @returns {Promise<ClientResponse<ThemeResponse>>}
     */
    FusionAuthClientNative.prototype.createTheme = function (themeId, request) {
        return this.start()
            .withUri('/api/theme')
            .withUriSegment(themeId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.
     *
     * @param {string} userId (Optional) The Id for the user. If not provided a secure random UUID will be generated.
     * @param {UserRequest} request The request object that contains all of the information used to create the user.
     * @returns {Promise<ClientResponse<UserResponse>>}
     */
    FusionAuthClientNative.prototype.createUser = function (userId, request) {
        return this.start()
            .withUri('/api/user')
            .withUriSegment(userId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after
     * that the user action can be applied to any user.
     *
     * @param {string} userActionId (Optional) The Id for the user action. If not provided a secure random UUID will be generated.
     * @param {UserActionRequest} request The request object that contains all of the information used to create the user action.
     * @returns {Promise<ClientResponse<UserActionResponse>>}
     */
    FusionAuthClientNative.prototype.createUserAction = function (userActionId, request) {
        return this.start()
            .withUri('/api/user-action')
            .withUriSegment(userActionId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a user reason. This user action reason cannot be used when actioning a user until this call completes
     * successfully. Anytime after that the user action reason can be used.
     *
     * @param {string} userActionReasonId (Optional) The Id for the user action reason. If not provided a secure random UUID will be generated.
     * @param {UserActionReasonRequest} request The request object that contains all of the information used to create the user action reason.
     * @returns {Promise<ClientResponse<UserActionReasonResponse>>}
     */
    FusionAuthClientNative.prototype.createUserActionReason = function (userActionReasonId, request) {
        return this.start()
            .withUri('/api/user-action-reason')
            .withUriSegment(userActionReasonId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a single User consent.
     *
     * @param {string} userConsentId (Optional) The Id for the User consent. If not provided a secure random UUID will be generated.
     * @param {UserConsentRequest} request The request that contains the user consent information.
     * @returns {Promise<ClientResponse<UserConsentResponse>>}
     */
    FusionAuthClientNative.prototype.createUserConsent = function (userConsentId, request) {
        return this.start()
            .withUri('/api/user/consent')
            .withUriSegment(userConsentId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.
     *
     * @param {string} webhookId (Optional) The Id for the webhook. If not provided a secure random UUID will be generated.
     * @param {WebhookRequest} request The request object that contains all of the information used to create the webhook.
     * @returns {Promise<ClientResponse<WebhookResponse>>}
     */
    FusionAuthClientNative.prototype.createWebhook = function (webhookId, request) {
        return this.start()
            .withUri('/api/webhook')
            .withUriSegment(webhookId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Deactivates the application with the given Id.
     *
     * @param {string} applicationId The Id of the application to deactivate.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deactivateApplication = function (applicationId) {
        return this.start()
            .withUri('/api/application')
            .withUriSegment(applicationId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deactivates the user with the given Id.
     *
     * @param {string} userId The Id of the user to deactivate.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deactivateUser = function (userId) {
        return this.start()
            .withUri('/api/user')
            .withUriSegment(userId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deactivates the user action with the given Id.
     *
     * @param {string} userActionId The Id of the user action to deactivate.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deactivateUserAction = function (userActionId) {
        return this.start()
            .withUri('/api/user-action')
            .withUriSegment(userActionId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deactivates the users with the given ids.
     *
     * @param {Array<string>} userIds The ids of the users to deactivate.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deactivateUsers = function (userIds) {
        return this.start()
            .withUri('/api/user/bulk')
            .withParameter('userId', userIds)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Hard deletes an application. This is a dangerous operation and should not be used in most circumstances. This will
     * delete the application, any registrations for that application, metrics and reports for the application, all the
     * roles for the application, and any other data associated with the application. This operation could take a very
     * long time, depending on the amount of data in your database.
     *
     * @param {string} applicationId The Id of the application to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteApplication = function (applicationId) {
        return this.start()
            .withUri('/api/application')
            .withUriSegment(applicationId)
            .withParameter('hardDelete', true)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Hard deletes an application role. This is a dangerous operation and should not be used in most circumstances. This
     * permanently removes the given role from all users that had it.
     *
     * @param {string} applicationId The Id of the application to deactivate.
     * @param {string} roleId The Id of the role to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteApplicationRole = function (applicationId, roleId) {
        return this.start()
            .withUri('/api/application')
            .withUriSegment(applicationId)
            .withUriSegment("role")
            .withUriSegment(roleId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the consent for the given Id.
     *
     * @param {string} consentId The Id of the consent to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteConsent = function (consentId) {
        return this.start()
            .withUri('/api/consent')
            .withUriSegment(consentId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the email template for the given Id.
     *
     * @param {string} emailTemplateId The Id of the email template to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteEmailTemplate = function (emailTemplateId) {
        return this.start()
            .withUri('/api/email/template')
            .withUriSegment(emailTemplateId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the group for the given Id.
     *
     * @param {string} groupId The Id of the group to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteGroup = function (groupId) {
        return this.start()
            .withUri('/api/group')
            .withUriSegment(groupId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Removes users as members of a group.
     *
     * @param {MemberDeleteRequest} request The member request that contains all of the information used to remove members to the group.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteGroupMembers = function (request) {
        return this.start()
            .withUri('/api/group/member')
            .withJSONBody(request)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the identity provider for the given Id.
     *
     * @param {string} identityProviderId The Id of the identity provider to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteIdentityProvider = function (identityProviderId) {
        return this.start()
            .withUri('/api/identity-provider')
            .withUriSegment(identityProviderId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the key for the given Id.
     *
     * @param {string} keyOd The Id of the key to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteKey = function (keyOd) {
        return this.start()
            .withUri('/api/key')
            .withUriSegment(keyOd)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the lambda for the given Id.
     *
     * @param {string} lambdaId The Id of the lambda to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteLambda = function (lambdaId) {
        return this.start()
            .withUri('/api/lambda')
            .withUriSegment(lambdaId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the user registration for the given user and application.
     *
     * @param {string} userId The Id of the user whose registration is being deleted.
     * @param {string} applicationId The Id of the application to remove the registration for.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteRegistration = function (userId, applicationId) {
        return this.start()
            .withUri('/api/user/registration')
            .withUriSegment(userId)
            .withUriSegment(applicationId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the tenant for the given Id.
     *
     * @param {string} tenantId The Id of the tenant to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteTenant = function (tenantId) {
        return this.start()
            .withUri('/api/tenant')
            .withUriSegment(tenantId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the theme for the given Id.
     *
     * @param {string} themeId The Id of the theme to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteTheme = function (themeId) {
        return this.start()
            .withUri('/api/theme')
            .withUriSegment(themeId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the user for the given Id. This permanently deletes all information, metrics, reports and data associated
     * with the user.
     *
     * @param {string} userId The Id of the user to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteUser = function (userId) {
        return this.start()
            .withUri('/api/user')
            .withUriSegment(userId)
            .withParameter('hardDelete', true)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the user action for the given Id. This permanently deletes the user action and also any history and logs of
     * the action being applied to any users.
     *
     * @param {string} userActionId The Id of the user action to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteUserAction = function (userActionId) {
        return this.start()
            .withUri('/api/user-action')
            .withUriSegment(userActionId)
            .withParameter('hardDelete', true)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the user action reason for the given Id.
     *
     * @param {string} userActionReasonId The Id of the user action reason to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteUserActionReason = function (userActionReasonId) {
        return this.start()
            .withUri('/api/user-action-reason')
            .withUriSegment(userActionReasonId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the users with the given ids.
     *
     * @param {UserDeleteRequest} request The ids of the users to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteUsers = function (request) {
        return this.start()
            .withUri('/api/user/bulk')
            .withJSONBody(request)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Deletes the webhook for the given Id.
     *
     * @param {string} webhookId The Id of the webhook to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.deleteWebhook = function (webhookId) {
        return this.start()
            .withUri('/api/webhook')
            .withUriSegment(webhookId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Disable Two Factor authentication for a user.
     *
     * @param {string} userId The Id of the User for which you're disabling Two Factor authentication.
     * @param {string} code The Two Factor code used verify the the caller knows the Two Factor secret.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.disableTwoFactor = function (userId, code) {
        return this.start()
            .withUri('/api/user/two-factor')
            .withParameter('userId', userId)
            .withParameter('code', code)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Enable Two Factor authentication for a user.
     *
     * @param {string} userId The Id of the user to enable Two Factor authentication.
     * @param {TwoFactorRequest} request The two factor enable request information.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.enableTwoFactor = function (userId, request) {
        return this.start()
            .withUri('/api/user/two-factor')
            .withUriSegment(userId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Exchange a refresh token for a new JWT.
     *
     * @param {RefreshRequest} request The refresh request.
     * @returns {Promise<ClientResponse<RefreshResponse>>}
     */
    FusionAuthClientNative.prototype.exchangeRefreshTokenForJWT = function (request) {
        return this.start()
            .withUri('/api/jwt/refresh')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Begins the forgot password sequence, which kicks off an email to the user so that they can reset their password.
     *
     * @param {ForgotPasswordRequest} request The request that contains the information about the user so that they can be emailed.
     * @returns {Promise<ClientResponse<ForgotPasswordResponse>>}
     */
    FusionAuthClientNative.prototype.forgotPassword = function (request) {
        return this.start()
            .withUri('/api/user/forgot-password')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Generate a new Email Verification Id to be used with the Verify Email API. This API will not attempt to send an
     * email to the User. This API may be used to collect the verificationId for use with a third party system.
     *
     * @param {string} email The email address of the user that needs a new verification email.
     * @returns {Promise<ClientResponse<VerifyEmailResponse>>}
     */
    FusionAuthClientNative.prototype.generateEmailVerificationId = function (email) {
        return this.start()
            .withUri('/api/user/verify-email')
            .withParameter('email', email)
            .withParameter('sendVerifyEmail', false)
            .withMethod("PUT")
            .go();
    };
    /**
     * Generate a new RSA or EC key pair or an HMAC secret.
     *
     * @param {string} keyId (Optional) The Id for the key. If not provided a secure random UUID will be generated.
     * @param {KeyRequest} request The request object that contains all of the information used to create the key.
     * @returns {Promise<ClientResponse<KeyResponse>>}
     */
    FusionAuthClientNative.prototype.generateKey = function (keyId, request) {
        return this.start()
            .withUri('/api/key/generate')
            .withUriSegment(keyId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Generate a new Application Registration Verification Id to be used with the Verify Registration API. This API will not attempt to send an
     * email to the User. This API may be used to collect the verificationId for use with a third party system.
     *
     * @param {string} email The email address of the user that needs a new verification email.
     * @param {string} applicationId The Id of the application to be verified.
     * @returns {Promise<ClientResponse<VerifyRegistrationResponse>>}
     */
    FusionAuthClientNative.prototype.generateRegistrationVerificationId = function (email, applicationId) {
        return this.start()
            .withUri('/api/user/verify-registration')
            .withParameter('email', email)
            .withParameter('sendVerifyPasswordEmail', false)
            .withParameter('applicationId', applicationId)
            .withMethod("PUT")
            .go();
    };
    /**
     * Generate a Two Factor secret that can be used to enable Two Factor authentication for a User. The response will contain
     * both the secret and a Base32 encoded form of the secret which can be shown to a User when using a 2 Step Authentication
     * application such as Google Authenticator.
     *
     * @returns {Promise<ClientResponse<SecretResponse>>}
     */
    FusionAuthClientNative.prototype.generateTwoFactorSecret = function () {
        return this.start()
            .withUri('/api/two-factor/secret')
            .withMethod("GET")
            .go();
    };
    /**
     * Generate a Two Factor secret that can be used to enable Two Factor authentication for a User. The response will contain
     * both the secret and a Base32 encoded form of the secret which can be shown to a User when using a 2 Step Authentication
     * application such as Google Authenticator.
     *
     * @param {string} encodedJWT The encoded JWT (access token).
     * @returns {Promise<ClientResponse<SecretResponse>>}
     */
    FusionAuthClientNative.prototype.generateTwoFactorSecretUsingJWT = function (encodedJWT) {
        return this.start()
            .withUri('/api/two-factor/secret')
            .withAuthorization('JWT ' + encodedJWT)
            .withMethod("GET")
            .go();
    };
    /**
     * Handles login via third-parties including Social login, external OAuth and OpenID Connect, and other
     * login systems.
     *
     * @param {IdentityProviderLoginRequest} request The third-party login request that contains information from the third-party login
     *    providers that FusionAuth uses to reconcile the user's account.
     * @returns {Promise<ClientResponse<LoginResponse>>}
     */
    FusionAuthClientNative.prototype.identityProviderLogin = function (request) {
        return this.start()
            .withUri('/api/identity-provider/login')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Import an existing RSA or EC key pair or an HMAC secret.
     *
     * @param {string} keyId (Optional) The Id for the key. If not provided a secure random UUID will be generated.
     * @param {KeyRequest} request The request object that contains all of the information used to create the key.
     * @returns {Promise<ClientResponse<KeyResponse>>}
     */
    FusionAuthClientNative.prototype.importKey = function (keyId, request) {
        return this.start()
            .withUri('/api/key/import')
            .withUriSegment(keyId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Bulk imports multiple users. This does some validation, but then tries to run batch inserts of users. This reduces
     * latency when inserting lots of users. Therefore, the error response might contain some information about failures,
     * but it will likely be pretty generic.
     *
     * @param {ImportRequest} request The request that contains all of the information about all of the users to import.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.importUsers = function (request) {
        return this.start()
            .withUri('/api/user/import')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Issue a new access token (JWT) for the requested Application after ensuring the provided JWT is valid. A valid
     * access token is properly signed and not expired.
     * <p>
     * This API may be used in an SSO configuration to issue new tokens for another application after the user has
     * obtained a valid token from authentication.
     *
     * @param {string} applicationId The Application Id for which you are requesting a new access token be issued.
     * @param {string} encodedJWT The encoded JWT (access token).
     * @returns {Promise<ClientResponse<IssueResponse>>}
     */
    FusionAuthClientNative.prototype.issueJWT = function (applicationId, encodedJWT) {
        return this.start()
            .withUri('/api/jwt/issue')
            .withAuthorization('JWT ' + encodedJWT)
            .withParameter('applicationId', applicationId)
            .withMethod("GET")
            .go();
    };
    /**
     * Authenticates a user to FusionAuth.
     *
     * This API optionally requires an API key. See <code>Application.loginConfiguration.requireAuthentication</code>.
     *
     * @param {LoginRequest} request The login request that contains the user credentials used to log them in.
     * @returns {Promise<ClientResponse<LoginResponse>>}
     */
    FusionAuthClientNative.prototype.login = function (request) {
        return this.start()
            .withUri('/api/login')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using
     * FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an
     * application where they no longer have a session. This helps correctly track login counts, times and helps with
     * reporting.
     *
     * @param {string} userId The Id of the user that was logged in.
     * @param {string} applicationId The Id of the application that they logged into.
     * @param {string} callerIPAddress (Optional) The IP address of the end-user that is logging in. If a null value is provided
     *    the IP address will be that of the client or last proxy that sent the request.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.loginPing = function (userId, applicationId, callerIPAddress) {
        return this.start()
            .withUri('/api/login')
            .withUriSegment(userId)
            .withUriSegment(applicationId)
            .withParameter('ipAddress', callerIPAddress)
            .withMethod("PUT")
            .go();
    };
    /**
     * The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the
     * client and revoke the refresh token stored. This API does nothing if the request does not contain an access
     * token or refresh token cookies.
     *
     * @param {boolean} global When this value is set to true all of the refresh tokens issued to the owner of the
     *    provided token will be revoked.
     * @param {string} refreshToken (Optional) The refresh_token as a request parameter instead of coming in via a cookie.
     *    If provided this takes precedence over the cookie.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.logout = function (global, refreshToken) {
        return this.start()
            .withHeader('Content-Type', 'text/plain')
            .withUri('/api/logout')
            .withParameter('global', global)
            .withParameter('refreshToken', refreshToken)
            .withMethod("POST")
            .go();
    };
    /**
     * Retrieves the identity provider for the given domain. A 200 response code indicates the domain is managed
     * by a registered identity provider. A 404 indicates the domain is not managed.
     *
     * @param {string} domain The domain or email address to lookup.
     * @returns {Promise<ClientResponse<LookupResponse>>}
     */
    FusionAuthClientNative.prototype.lookupIdentityProvider = function (domain) {
        return this.start()
            .withUri('/api/identity-provider/lookup')
            .withParameter('domain', domain)
            .withMethod("GET")
            .go();
    };
    /**
     * Modifies a temporal user action by changing the expiration of the action and optionally adding a comment to the
     * action.
     *
     * @param {string} actionId The Id of the action to modify. This is technically the user action log id.
     * @param {ActionRequest} request The request that contains all of the information about the modification.
     * @returns {Promise<ClientResponse<ActionResponse>>}
     */
    FusionAuthClientNative.prototype.modifyAction = function (actionId, request) {
        return this.start()
            .withUri('/api/user/action')
            .withUriSegment(actionId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Complete a login request using a passwordless code
     *
     * @param {PasswordlessLoginRequest} request The passwordless login request that contains all of the information used to complete login.
     * @returns {Promise<ClientResponse<LoginResponse>>}
     */
    FusionAuthClientNative.prototype.passwordlessLogin = function (request) {
        return this.start()
            .withUri('/api/passwordless/login')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Reactivates the application with the given Id.
     *
     * @param {string} applicationId The Id of the application to reactivate.
     * @returns {Promise<ClientResponse<ApplicationResponse>>}
     */
    FusionAuthClientNative.prototype.reactivateApplication = function (applicationId) {
        return this.start()
            .withUri('/api/application')
            .withUriSegment(applicationId)
            .withParameter('reactivate', true)
            .withMethod("PUT")
            .go();
    };
    /**
     * Reactivates the user with the given Id.
     *
     * @param {string} userId The Id of the user to reactivate.
     * @returns {Promise<ClientResponse<UserResponse>>}
     */
    FusionAuthClientNative.prototype.reactivateUser = function (userId) {
        return this.start()
            .withUri('/api/user')
            .withUriSegment(userId)
            .withParameter('reactivate', true)
            .withMethod("PUT")
            .go();
    };
    /**
     * Reactivates the user action with the given Id.
     *
     * @param {string} userActionId The Id of the user action to reactivate.
     * @returns {Promise<ClientResponse<UserActionResponse>>}
     */
    FusionAuthClientNative.prototype.reactivateUserAction = function (userActionId) {
        return this.start()
            .withUri('/api/user-action')
            .withUriSegment(userActionId)
            .withParameter('reactivate', true)
            .withMethod("PUT")
            .go();
    };
    /**
     * Reconcile a User to FusionAuth using JWT issued from another Identity Provider.
     *
     * @param {IdentityProviderLoginRequest} request The reconcile request that contains the data to reconcile the User.
     * @returns {Promise<ClientResponse<LoginResponse>>}
     */
    FusionAuthClientNative.prototype.reconcileJWT = function (request) {
        return this.start()
            .withUri('/api/jwt/reconcile')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Request a refresh of the User search index. This API is not generally necessary and the search index will become consistent in a
     * reasonable amount of time. There may be scenarios where you may wish to manually request an index refresh. One example may be
     * if you are using the Search API or Delete Tenant API immediately following a User Create etc, you may wish to request a refresh to
     *  ensure the index immediately current before making a query request to the search index.
     *
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.refreshUserSearchIndex = function () {
        return this.start()
            .withUri('/api/user/search')
            .withMethod("PUT")
            .go();
    };
    /**
     * Registers a user for an application. If you provide the User and the UserRegistration object on this request, it
     * will create the user as well as register them for the application. This is called a Full Registration. However, if
     * you only provide the UserRegistration object, then the user must already exist and they will be registered for the
     * application. The user id can also be provided and it will either be used to look up an existing user or it will be
     * used for the newly created User.
     *
     * @param {string} userId (Optional) The Id of the user being registered for the application and optionally created.
     * @param {RegistrationRequest} request The request that optionally contains the User and must contain the UserRegistration.
     * @returns {Promise<ClientResponse<RegistrationResponse>>}
     */
    FusionAuthClientNative.prototype.register = function (userId, request) {
        return this.start()
            .withUri('/api/user/registration')
            .withUriSegment(userId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Removes a user from the family with the given id.
     *
     * @param {string} familyId The id of the family to remove the user from.
     * @param {string} userId The id of the user to remove from the family.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.removeUserFromFamily = function (familyId, userId) {
        return this.start()
            .withUri('/api/user/family')
            .withUriSegment(familyId)
            .withUriSegment(userId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Re-sends the verification email to the user.
     *
     * @param {string} email The email address of the user that needs a new verification email.
     * @returns {Promise<ClientResponse<VerifyEmailResponse>>}
     */
    FusionAuthClientNative.prototype.resendEmailVerification = function (email) {
        return this.start()
            .withUri('/api/user/verify-email')
            .withParameter('email', email)
            .withMethod("PUT")
            .go();
    };
    /**
     * Re-sends the application registration verification email to the user.
     *
     * @param {string} email The email address of the user that needs a new verification email.
     * @param {string} applicationId The Id of the application to be verified.
     * @returns {Promise<ClientResponse<VerifyRegistrationResponse>>}
     */
    FusionAuthClientNative.prototype.resendRegistrationVerification = function (email, applicationId) {
        return this.start()
            .withUri('/api/user/verify-registration')
            .withParameter('email', email)
            .withParameter('applicationId', applicationId)
            .withMethod("PUT")
            .go();
    };
    /**
     * Retrieves a single action log (the log of a user action that was taken on a user previously) for the given Id.
     *
     * @param {string} actionId The Id of the action to retrieve.
     * @returns {Promise<ClientResponse<ActionResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveAction = function (actionId) {
        return this.start()
            .withUri('/api/user/action')
            .withUriSegment(actionId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the actions for the user with the given Id. This will return all time based actions that are active,
     * and inactive as well as non-time based actions.
     *
     * @param {string} userId The Id of the user to fetch the actions for.
     * @returns {Promise<ClientResponse<ActionResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveActions = function (userId) {
        return this.start()
            .withUri('/api/user/action')
            .withParameter('userId', userId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the actions for the user with the given Id that are currently preventing the User from logging in.
     *
     * @param {string} userId The Id of the user to fetch the actions for.
     * @returns {Promise<ClientResponse<ActionResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveActionsPreventingLogin = function (userId) {
        return this.start()
            .withUri('/api/user/action')
            .withParameter('userId', userId)
            .withParameter('preventingLogin', true)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the actions for the user with the given Id that are currently active.
     * An active action means one that is time based and has not been canceled, and has not ended.
     *
     * @param {string} userId The Id of the user to fetch the actions for.
     * @returns {Promise<ClientResponse<ActionResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveActiveActions = function (userId) {
        return this.start()
            .withUri('/api/user/action')
            .withParameter('userId', userId)
            .withParameter('active', true)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the application for the given id or all of the applications if the id is null.
     *
     * @param {string} applicationId (Optional) The application id.
     * @returns {Promise<ClientResponse<ApplicationResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveApplication = function (applicationId) {
        return this.start()
            .withUri('/api/application')
            .withUriSegment(applicationId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the applications.
     *
     * @returns {Promise<ClientResponse<ApplicationResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveApplications = function () {
        return this.start()
            .withUri('/api/application')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves a single audit log for the given Id.
     *
     * @param {number} auditLogId The Id of the audit log to retrieve.
     * @returns {Promise<ClientResponse<AuditLogResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveAuditLog = function (auditLogId) {
        return this.start()
            .withUri('/api/system/audit-log')
            .withUriSegment(auditLogId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the Consent for the given Id.
     *
     * @param {string} consentId The Id of the consent.
     * @returns {Promise<ClientResponse<ConsentResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveConsent = function (consentId) {
        return this.start()
            .withUri('/api/consent')
            .withUriSegment(consentId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the consent.
     *
     * @returns {Promise<ClientResponse<ConsentResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveConsents = function () {
        return this.start()
            .withUri('/api/consent')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the daily active user report between the two instants. If you specify an application id, it will only
     * return the daily active counts for that application.
     *
     * @param {string} applicationId (Optional) The application id.
     * @param {number} start The start instant as UTC milliseconds since Epoch.
     * @param {number} end The end instant as UTC milliseconds since Epoch.
     * @returns {Promise<ClientResponse<DailyActiveUserReportResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveDailyActiveReport = function (applicationId, start, end) {
        return this.start()
            .withUri('/api/report/daily-active-user')
            .withParameter('applicationId', applicationId)
            .withParameter('start', start)
            .withParameter('end', end)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the email template for the given Id. If you don't specify the id, this will return all of the email templates.
     *
     * @param {string} emailTemplateId (Optional) The Id of the email template.
     * @returns {Promise<ClientResponse<EmailTemplateResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveEmailTemplate = function (emailTemplateId) {
        return this.start()
            .withUri('/api/email/template')
            .withUriSegment(emailTemplateId)
            .withMethod("GET")
            .go();
    };
    /**
     * Creates a preview of the email template provided in the request. This allows you to preview an email template that
     * hasn't been saved to the database yet. The entire email template does not need to be provided on the request. This
     * will create the preview based on whatever is given.
     *
     * @param {PreviewRequest} request The request that contains the email template and optionally a locale to render it in.
     * @returns {Promise<ClientResponse<PreviewResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveEmailTemplatePreview = function (request) {
        return this.start()
            .withUri('/api/email/template/preview')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Retrieves all of the email templates.
     *
     * @returns {Promise<ClientResponse<EmailTemplateResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveEmailTemplates = function () {
        return this.start()
            .withUri('/api/email/template')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves a single event log for the given Id.
     *
     * @param {number} eventLogId The Id of the event log to retrieve.
     * @returns {Promise<ClientResponse<EventLogResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveEventLog = function (eventLogId) {
        return this.start()
            .withUri('/api/system/event-log')
            .withUriSegment(eventLogId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the families that a user belongs to.
     *
     * @param {string} userId The User's id
     * @returns {Promise<ClientResponse<FamilyResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveFamilies = function (userId) {
        return this.start()
            .withUri('/api/user/family')
            .withParameter('userId', userId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the members of a family by the unique Family Id.
     *
     * @param {string} familyId The unique Id of the Family.
     * @returns {Promise<ClientResponse<FamilyResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveFamilyMembersByFamilyId = function (familyId) {
        return this.start()
            .withUri('/api/user/family')
            .withUriSegment(familyId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the group for the given Id.
     *
     * @param {string} groupId The Id of the group.
     * @returns {Promise<ClientResponse<GroupResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveGroup = function (groupId) {
        return this.start()
            .withUri('/api/group')
            .withUriSegment(groupId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the groups.
     *
     * @returns {Promise<ClientResponse<GroupResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveGroups = function () {
        return this.start()
            .withUri('/api/group')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the identity provider for the given id or all of the identity providers if the id is null.
     *
     * @param {string} identityProviderId (Optional) The identity provider id.
     * @returns {Promise<ClientResponse<IdentityProviderResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveIdentityProvider = function (identityProviderId) {
        return this.start()
            .withUri('/api/identity-provider')
            .withUriSegment(identityProviderId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the identity providers.
     *
     * @returns {Promise<ClientResponse<IdentityProviderResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveIdentityProviders = function () {
        return this.start()
            .withUri('/api/identity-provider')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the actions for the user with the given Id that are currently inactive.
     * An inactive action means one that is time based and has been canceled or has expired, or is not time based.
     *
     * @param {string} userId The Id of the user to fetch the actions for.
     * @returns {Promise<ClientResponse<ActionResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveInactiveActions = function (userId) {
        return this.start()
            .withUri('/api/user/action')
            .withParameter('userId', userId)
            .withParameter('active', false)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the applications that are currently inactive.
     *
     * @returns {Promise<ClientResponse<ApplicationResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveInactiveApplications = function () {
        return this.start()
            .withUri('/api/application')
            .withParameter('inactive', true)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the user actions that are currently inactive.
     *
     * @returns {Promise<ClientResponse<UserActionResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveInactiveUserActions = function () {
        return this.start()
            .withUri('/api/user-action')
            .withParameter('inactive', true)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the available integrations.
     *
     * @returns {Promise<ClientResponse<IntegrationResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveIntegration = function () {
        return this.start()
            .withUri('/api/integration')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the Public Key configured for verifying JSON Web Tokens (JWT) by the key Id (kid).
     *
     * @param {string} keyId The Id of the public key (kid).
     * @returns {Promise<ClientResponse<PublicKeyResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveJWTPublicKey = function (keyId) {
        return this.start()
            .withUri('/api/jwt/public-key')
            .withParameter('kid', keyId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the Public Key configured for verifying the JSON Web Tokens (JWT) issued by the Login API by the Application Id.
     *
     * @param {string} applicationId The Id of the Application for which this key is used.
     * @returns {Promise<ClientResponse<PublicKeyResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveJWTPublicKeyByApplicationId = function (applicationId) {
        return this.start()
            .withUri('/api/jwt/public-key')
            .withParameter('applicationId', applicationId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all Public Keys configured for verifying JSON Web Tokens (JWT).
     *
     * @returns {Promise<ClientResponse<PublicKeyResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveJWTPublicKeys = function () {
        return this.start()
            .withUri('/api/jwt/public-key')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the key for the given Id.
     *
     * @param {string} keyId The Id of the key.
     * @returns {Promise<ClientResponse<KeyResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveKey = function (keyId) {
        return this.start()
            .withUri('/api/key')
            .withUriSegment(keyId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the keys.
     *
     * @returns {Promise<ClientResponse<KeyResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveKeys = function () {
        return this.start()
            .withUri('/api/key')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the lambda for the given Id.
     *
     * @param {string} lambdaId The Id of the lambda.
     * @returns {Promise<ClientResponse<LambdaResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveLambda = function (lambdaId) {
        return this.start()
            .withUri('/api/lambda')
            .withUriSegment(lambdaId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the lambdas.
     *
     * @returns {Promise<ClientResponse<LambdaResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveLambdas = function () {
        return this.start()
            .withUri('/api/lambda')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the lambdas for the provided type.
     *
     * @param {LambdaType} type The type of the lambda to return.
     * @returns {Promise<ClientResponse<LambdaResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveLambdasByType = function (type) {
        return this.start()
            .withUri('/api/lambda')
            .withParameter('type', type)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the login report between the two instants. If you specify an application id, it will only return the
     * login counts for that application.
     *
     * @param {string} applicationId (Optional) The application id.
     * @param {number} start The start instant as UTC milliseconds since Epoch.
     * @param {number} end The end instant as UTC milliseconds since Epoch.
     * @returns {Promise<ClientResponse<LoginReportResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveLoginReport = function (applicationId, start, end) {
        return this.start()
            .withUri('/api/report/login')
            .withParameter('applicationId', applicationId)
            .withParameter('start', start)
            .withParameter('end', end)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the monthly active user report between the two instants. If you specify an application id, it will only
     * return the monthly active counts for that application.
     *
     * @param {string} applicationId (Optional) The application id.
     * @param {number} start The start instant as UTC milliseconds since Epoch.
     * @param {number} end The end instant as UTC milliseconds since Epoch.
     * @returns {Promise<ClientResponse<MonthlyActiveUserReportResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveMonthlyActiveReport = function (applicationId, start, end) {
        return this.start()
            .withUri('/api/report/monthly-active-user')
            .withParameter('applicationId', applicationId)
            .withParameter('start', start)
            .withParameter('end', end)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the Oauth2 configuration for the application for the given Application Id.
     *
     * @param {string} applicationId The Id of the Application to retrieve OAuth configuration.
     * @returns {Promise<ClientResponse<OAuthConfigurationResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveOauthConfiguration = function (applicationId) {
        return this.start()
            .withUri('/api/application')
            .withUriSegment(applicationId)
            .withUriSegment("oauth-configuration")
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the password validation rules for a specific tenant. This method requires a tenantId to be provided
     * through the use of a Tenant scoped API key or an HTTP header X-FusionAuth-TenantId to specify the Tenant Id.
     *
     * This API does not require an API key.
     *
     * @returns {Promise<ClientResponse<PasswordValidationRulesResponse>>}
     */
    FusionAuthClientNative.prototype.retrievePasswordValidationRules = function () {
        return this.start()
            .withUri('/api/tenant/password-validation-rules')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the password validation rules for a specific tenant.
     *
     * This API does not require an API key.
     *
     * @param {string} tenantId The Id of the tenant.
     * @returns {Promise<ClientResponse<PasswordValidationRulesResponse>>}
     */
    FusionAuthClientNative.prototype.retrievePasswordValidationRulesWithTenantId = function (tenantId) {
        return this.start()
            .withUri('/api/tenant/password-validation-rules')
            .withUriSegment(tenantId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the children for the given parent email address.
     *
     * @param {string} parentEmail The email of the parent.
     * @returns {Promise<ClientResponse<PendingResponse>>}
     */
    FusionAuthClientNative.prototype.retrievePendingChildren = function (parentEmail) {
        return this.start()
            .withUri('/api/user/family/pending')
            .withParameter('parentEmail', parentEmail)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the last number of login records.
     *
     * @param {number} offset The initial record. e.g. 0 is the last login, 100 will be the 100th most recent login.
     * @param {number} limit (Optional, defaults to 10) The number of records to retrieve.
     * @returns {Promise<ClientResponse<RecentLoginResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveRecentLogins = function (offset, limit) {
        return this.start()
            .withUri('/api/user/recent-login')
            .withParameter('offset', offset)
            .withParameter('limit', limit)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the refresh tokens that belong to the user with the given Id.
     *
     * @param {string} userId The Id of the user.
     * @returns {Promise<ClientResponse<RefreshResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveRefreshTokens = function (userId) {
        return this.start()
            .withUri('/api/jwt/refresh')
            .withParameter('userId', userId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the user registration for the user with the given id and the given application id.
     *
     * @param {string} userId The Id of the user.
     * @param {string} applicationId The Id of the application.
     * @returns {Promise<ClientResponse<RegistrationResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveRegistration = function (userId, applicationId) {
        return this.start()
            .withUri('/api/user/registration')
            .withUriSegment(userId)
            .withUriSegment(applicationId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the registration report between the two instants. If you specify an application id, it will only return
     * the registration counts for that application.
     *
     * @param {string} applicationId (Optional) The application id.
     * @param {number} start The start instant as UTC milliseconds since Epoch.
     * @param {number} end The end instant as UTC milliseconds since Epoch.
     * @returns {Promise<ClientResponse<RegistrationReportResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveRegistrationReport = function (applicationId, start, end) {
        return this.start()
            .withUri('/api/report/registration')
            .withParameter('applicationId', applicationId)
            .withParameter('start', start)
            .withParameter('end', end)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the system configuration.
     *
     * @returns {Promise<ClientResponse<SystemConfigurationResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveSystemConfiguration = function () {
        return this.start()
            .withUri('/api/system-configuration')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the tenant for the given Id.
     *
     * @param {string} tenantId The Id of the tenant.
     * @returns {Promise<ClientResponse<TenantResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveTenant = function (tenantId) {
        return this.start()
            .withUri('/api/tenant')
            .withUriSegment(tenantId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the tenants.
     *
     * @returns {Promise<ClientResponse<TenantResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveTenants = function () {
        return this.start()
            .withUri('/api/tenant')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the theme for the given Id.
     *
     * @param {string} themeId The Id of the theme.
     * @returns {Promise<ClientResponse<ThemeResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveTheme = function (themeId) {
        return this.start()
            .withUri('/api/theme')
            .withUriSegment(themeId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the themes.
     *
     * @returns {Promise<ClientResponse<ThemeResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveThemes = function () {
        return this.start()
            .withUri('/api/theme')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the totals report. This contains all of the total counts for each application and the global registration
     * count.
     *
     * @returns {Promise<ClientResponse<TotalsReportResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveTotalReport = function () {
        return this.start()
            .withUri('/api/report/totals')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the user for the given Id.
     *
     * @param {string} userId The Id of the user.
     * @returns {Promise<ClientResponse<UserResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUser = function (userId) {
        return this.start()
            .withUri('/api/user')
            .withUriSegment(userId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the user action for the given Id. If you pass in null for the id, this will return all of the user
     * actions.
     *
     * @param {string} userActionId (Optional) The Id of the user action.
     * @returns {Promise<ClientResponse<UserActionResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserAction = function (userActionId) {
        return this.start()
            .withUri('/api/user-action')
            .withUriSegment(userActionId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all of the user
     * action reasons.
     *
     * @param {string} userActionReasonId (Optional) The Id of the user action reason.
     * @returns {Promise<ClientResponse<UserActionReasonResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserActionReason = function (userActionReasonId) {
        return this.start()
            .withUri('/api/user-action-reason')
            .withUriSegment(userActionReasonId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all the user action reasons.
     *
     * @returns {Promise<ClientResponse<UserActionReasonResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserActionReasons = function () {
        return this.start()
            .withUri('/api/user-action-reason')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the user actions.
     *
     * @returns {Promise<ClientResponse<UserActionResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserActions = function () {
        return this.start()
            .withUri('/api/user-action')
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the user by a change password Id. The intended use of this API is to retrieve a user after the forgot
     * password workflow has been initiated and you may not know the user's email or username.
     *
     * @param {string} changePasswordId The unique change password Id that was sent via email or returned by the Forgot Password API.
     * @returns {Promise<ClientResponse<UserResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserByChangePasswordId = function (changePasswordId) {
        return this.start()
            .withUri('/api/user')
            .withParameter('changePasswordId', changePasswordId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the user for the given email.
     *
     * @param {string} email The email of the user.
     * @returns {Promise<ClientResponse<UserResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserByEmail = function (email) {
        return this.start()
            .withUri('/api/user')
            .withParameter('email', email)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the user for the loginId. The loginId can be either the username or the email.
     *
     * @param {string} loginId The email or username of the user.
     * @returns {Promise<ClientResponse<UserResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserByLoginId = function (loginId) {
        return this.start()
            .withUri('/api/user')
            .withParameter('loginId', loginId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the user for the given username.
     *
     * @param {string} username The username of the user.
     * @returns {Promise<ClientResponse<UserResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserByUsername = function (username) {
        return this.start()
            .withUri('/api/user')
            .withParameter('username', username)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the user by a verificationId. The intended use of this API is to retrieve a user after the forgot
     * password workflow has been initiated and you may not know the user's email or username.
     *
     * @param {string} verificationId The unique verification Id that has been set on the user object.
     * @returns {Promise<ClientResponse<UserResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserByVerificationId = function (verificationId) {
        return this.start()
            .withUri('/api/user')
            .withParameter('verificationId', verificationId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the comments for the user with the given Id.
     *
     * @param {string} userId The Id of the user.
     * @returns {Promise<ClientResponse<UserCommentResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserComments = function (userId) {
        return this.start()
            .withUri('/api/user/comment')
            .withUriSegment(userId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieve a single User consent by Id.
     *
     * @param {string} userConsentId The User consent Id
     * @returns {Promise<ClientResponse<UserConsentResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserConsent = function (userConsentId) {
        return this.start()
            .withUri('/api/user/consent')
            .withUriSegment(userConsentId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all of the consents for a User.
     *
     * @param {string} userId The User's Id
     * @returns {Promise<ClientResponse<UserConsentResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserConsents = function (userId) {
        return this.start()
            .withUri('/api/user/consent')
            .withParameter('userId', userId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the login report between the two instants for a particular user by Id. If you specify an application id, it will only return the
     * login counts for that application.
     *
     * @param {string} applicationId (Optional) The application id.
     * @param {string} userId The userId id.
     * @param {number} start The start instant as UTC milliseconds since Epoch.
     * @param {number} end The end instant as UTC milliseconds since Epoch.
     * @returns {Promise<ClientResponse<LoginReportResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserLoginReport = function (applicationId, userId, start, end) {
        return this.start()
            .withUri('/api/report/login')
            .withParameter('applicationId', applicationId)
            .withParameter('userId', userId)
            .withParameter('start', start)
            .withParameter('end', end)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the login report between the two instants for a particular user by login Id. If you specify an application id, it will only return the
     * login counts for that application.
     *
     * @param {string} applicationId (Optional) The application id.
     * @param {string} loginId The userId id.
     * @param {number} start The start instant as UTC milliseconds since Epoch.
     * @param {number} end The end instant as UTC milliseconds since Epoch.
     * @returns {Promise<ClientResponse<LoginReportResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserLoginReportByLoginId = function (applicationId, loginId, start, end) {
        return this.start()
            .withUri('/api/report/login')
            .withParameter('applicationId', applicationId)
            .withParameter('loginId', loginId)
            .withParameter('start', start)
            .withParameter('end', end)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the last number of login records for a user.
     *
     * @param {string} userId The Id of the user.
     * @param {number} offset The initial record. e.g. 0 is the last login, 100 will be the 100th most recent login.
     * @param {number} limit (Optional, defaults to 10) The number of records to retrieve.
     * @returns {Promise<ClientResponse<RecentLoginResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserRecentLogins = function (userId, offset, limit) {
        return this.start()
            .withUri('/api/user/recent-login')
            .withParameter('userId', userId)
            .withParameter('offset', offset)
            .withParameter('limit', limit)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the user for the given Id. This method does not use an API key, instead it uses a JSON Web Token (JWT) for authentication.
     *
     * @param {string} encodedJWT The encoded JWT (access token).
     * @returns {Promise<ClientResponse<UserResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveUserUsingJWT = function (encodedJWT) {
        return this.start()
            .withUri('/api/user')
            .withAuthorization('JWT ' + encodedJWT)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.
     *
     * @param {string} webhookId (Optional) The Id of the webhook.
     * @returns {Promise<ClientResponse<WebhookResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveWebhook = function (webhookId) {
        return this.start()
            .withUri('/api/webhook')
            .withUriSegment(webhookId)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves all the webhooks.
     *
     * @returns {Promise<ClientResponse<WebhookResponse>>}
     */
    FusionAuthClientNative.prototype.retrieveWebhooks = function () {
        return this.start()
            .withUri('/api/webhook')
            .withMethod("GET")
            .go();
    };
    /**
     * Revokes a single refresh token, all tokens for a user or all tokens for an application. If you provide a user id
     * and an application id, this will delete all the refresh tokens for that user for that application.
     *
     * @param {string} token (Optional) The refresh token to delete.
     * @param {string} userId (Optional) The user id whose tokens to delete.
     * @param {string} applicationId (Optional) The application id of the tokens to delete.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.revokeRefreshToken = function (token, userId, applicationId) {
        return this.start()
            .withUri('/api/jwt/refresh')
            .withParameter('token', token)
            .withParameter('userId', userId)
            .withParameter('applicationId', applicationId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Revokes a single User consent by Id.
     *
     * @param {string} userConsentId The User Consent Id
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.revokeUserConsent = function (userConsentId) {
        return this.start()
            .withUri('/api/user/consent')
            .withUriSegment(userConsentId)
            .withMethod("DELETE")
            .go();
    };
    /**
     * Searches the audit logs with the specified criteria and pagination.
     *
     * @param {AuditLogSearchRequest} request The search criteria and pagination information.
     * @returns {Promise<ClientResponse<AuditLogSearchResponse>>}
     */
    FusionAuthClientNative.prototype.searchAuditLogs = function (request) {
        return this.start()
            .withUri('/api/system/audit-log/search')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Searches the event logs with the specified criteria and pagination.
     *
     * @param {EventLogSearchRequest} request The search criteria and pagination information.
     * @returns {Promise<ClientResponse<EventLogSearchResponse>>}
     */
    FusionAuthClientNative.prototype.searchEventLogs = function (request) {
        return this.start()
            .withUri('/api/system/event-log/search')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Searches the login records with the specified criteria and pagination.
     *
     * @param {LoginRecordSearchRequest} request The search criteria and pagination information.
     * @returns {Promise<ClientResponse<LoginRecordSearchResponse>>}
     */
    FusionAuthClientNative.prototype.searchLoginRecords = function (request) {
        return this.start()
            .withUri('/api/system/login-record/search')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Retrieves the users for the given ids. If any id is invalid, it is ignored.
     *
     * @param {Array<string>} ids The user ids to search for.
     * @returns {Promise<ClientResponse<SearchResponse>>}
     */
    FusionAuthClientNative.prototype.searchUsers = function (ids) {
        return this.start()
            .withUri('/api/user/search')
            .withParameter('ids', ids)
            .withMethod("GET")
            .go();
    };
    /**
     * Retrieves the users for the given search criteria and pagination.
     *
     * @param {SearchRequest} request The search criteria and pagination constraints. Fields used: queryString, numberOfResults, startRow,
     *    and sort fields.
     * @returns {Promise<ClientResponse<SearchResponse>>}
     */
    FusionAuthClientNative.prototype.searchUsersByQueryString = function (request) {
        return this.start()
            .withUri('/api/user/search')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Send an email using an email template id. You can optionally provide <code>requestData</code> to access key value
     * pairs in the email template.
     *
     * @param {string} emailTemplateId The id for the template.
     * @param {SendRequest} request The send email request that contains all of the information used to send the email.
     * @returns {Promise<ClientResponse<SendResponse>>}
     */
    FusionAuthClientNative.prototype.sendEmail = function (emailTemplateId, request) {
        return this.start()
            .withUri('/api/email/send')
            .withUriSegment(emailTemplateId)
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Sends out an email to a parent that they need to register and create a family or need to log in and add a child to their existing family.
     *
     * @param {FamilyEmailRequest} request The request object that contains the parent email.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.sendFamilyRequestEmail = function (request) {
        return this.start()
            .withUri('/api/user/family/request')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Send a passwordless authentication code in an email to complete login.
     *
     * @param {PasswordlessSendRequest} request The passwordless send request that contains all of the information used to send an email containing a code.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.sendPasswordlessCode = function (request) {
        return this.start()
            .withUri('/api/passwordless/send')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Send a Two Factor authentication code to assist in setting up Two Factor authentication or disabling.
     *
     * @param {TwoFactorSendRequest} request The request object that contains all of the information used to send the code.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.sendTwoFactorCode = function (request) {
        return this.start()
            .withUri('/api/two-factor/send')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Send a Two Factor authentication code to allow the completion of Two Factor authentication.
     *
     * @param {string} twoFactorId The Id returned by the Login API necessary to complete Two Factor authentication.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.sendTwoFactorCodeForLogin = function (twoFactorId) {
        return this.start()
            .withHeader('Content-Type', 'text/plain')
            .withUri('/api/two-factor/send')
            .withUriSegment(twoFactorId)
            .withMethod("POST")
            .go();
    };
    /**
     * Complete login using a 2FA challenge
     *
     * @param {TwoFactorLoginRequest} request The login request that contains the user credentials used to log them in.
     * @returns {Promise<ClientResponse<LoginResponse>>}
     */
    FusionAuthClientNative.prototype.twoFactorLogin = function (request) {
        return this.start()
            .withUri('/api/two-factor/login')
            .withJSONBody(request)
            .withMethod("POST")
            .go();
    };
    /**
     * Updates the application with the given Id.
     *
     * @param {string} applicationId The Id of the application to update.
     * @param {ApplicationRequest} request The request that contains all of the new application information.
     * @returns {Promise<ClientResponse<ApplicationResponse>>}
     */
    FusionAuthClientNative.prototype.updateApplication = function (applicationId, request) {
        return this.start()
            .withUri('/api/application')
            .withUriSegment(applicationId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the application role with the given id for the application.
     *
     * @param {string} applicationId The Id of the application that the role belongs to.
     * @param {string} roleId The Id of the role to update.
     * @param {ApplicationRequest} request The request that contains all of the new role information.
     * @returns {Promise<ClientResponse<ApplicationResponse>>}
     */
    FusionAuthClientNative.prototype.updateApplicationRole = function (applicationId, roleId, request) {
        return this.start()
            .withUri('/api/application')
            .withUriSegment(applicationId)
            .withUriSegment("role")
            .withUriSegment(roleId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the consent with the given Id.
     *
     * @param {string} consentId The Id of the consent to update.
     * @param {ConsentRequest} request The request that contains all of the new consent information.
     * @returns {Promise<ClientResponse<ConsentResponse>>}
     */
    FusionAuthClientNative.prototype.updateConsent = function (consentId, request) {
        return this.start()
            .withUri('/api/consent')
            .withUriSegment(consentId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the email template with the given Id.
     *
     * @param {string} emailTemplateId The Id of the email template to update.
     * @param {EmailTemplateRequest} request The request that contains all of the new email template information.
     * @returns {Promise<ClientResponse<EmailTemplateResponse>>}
     */
    FusionAuthClientNative.prototype.updateEmailTemplate = function (emailTemplateId, request) {
        return this.start()
            .withUri('/api/email/template')
            .withUriSegment(emailTemplateId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the group with the given Id.
     *
     * @param {string} groupId The Id of the group to update.
     * @param {GroupRequest} request The request that contains all of the new group information.
     * @returns {Promise<ClientResponse<GroupResponse>>}
     */
    FusionAuthClientNative.prototype.updateGroup = function (groupId, request) {
        return this.start()
            .withUri('/api/group')
            .withUriSegment(groupId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the identity provider with the given Id.
     *
     * @param {string} identityProviderId The Id of the identity provider to update.
     * @param {IdentityProviderRequest} request The request object that contains the updated identity provider.
     * @returns {Promise<ClientResponse<IdentityProviderResponse>>}
     */
    FusionAuthClientNative.prototype.updateIdentityProvider = function (identityProviderId, request) {
        return this.start()
            .withUri('/api/identity-provider')
            .withUriSegment(identityProviderId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the available integrations.
     *
     * @param {IntegrationRequest} request The request that contains all of the new integration information.
     * @returns {Promise<ClientResponse<IntegrationResponse>>}
     */
    FusionAuthClientNative.prototype.updateIntegrations = function (request) {
        return this.start()
            .withUri('/api/integration')
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the key with the given Id.
     *
     * @param {string} keyId The Id of the key to update.
     * @param {KeyRequest} request The request that contains all of the new key information.
     * @returns {Promise<ClientResponse<KeyResponse>>}
     */
    FusionAuthClientNative.prototype.updateKey = function (keyId, request) {
        return this.start()
            .withUri('/api/key')
            .withUriSegment(keyId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the lambda with the given Id.
     *
     * @param {string} lambdaId The Id of the lambda to update.
     * @param {LambdaRequest} request The request that contains all of the new lambda information.
     * @returns {Promise<ClientResponse<LambdaResponse>>}
     */
    FusionAuthClientNative.prototype.updateLambda = function (lambdaId, request) {
        return this.start()
            .withUri('/api/lambda')
            .withUriSegment(lambdaId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the registration for the user with the given id and the application defined in the request.
     *
     * @param {string} userId The Id of the user whose registration is going to be updated.
     * @param {RegistrationRequest} request The request that contains all of the new registration information.
     * @returns {Promise<ClientResponse<RegistrationResponse>>}
     */
    FusionAuthClientNative.prototype.updateRegistration = function (userId, request) {
        return this.start()
            .withUri('/api/user/registration')
            .withUriSegment(userId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the system configuration.
     *
     * @param {SystemConfigurationRequest} request The request that contains all of the new system configuration information.
     * @returns {Promise<ClientResponse<SystemConfigurationResponse>>}
     */
    FusionAuthClientNative.prototype.updateSystemConfiguration = function (request) {
        return this.start()
            .withUri('/api/system-configuration')
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the tenant with the given Id.
     *
     * @param {string} tenantId The Id of the tenant to update.
     * @param {TenantRequest} request The request that contains all of the new tenant information.
     * @returns {Promise<ClientResponse<TenantResponse>>}
     */
    FusionAuthClientNative.prototype.updateTenant = function (tenantId, request) {
        return this.start()
            .withUri('/api/tenant')
            .withUriSegment(tenantId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the theme with the given Id.
     *
     * @param {string} themeId The Id of the theme to update.
     * @param {ThemeRequest} request The request that contains all of the new theme information.
     * @returns {Promise<ClientResponse<ThemeResponse>>}
     */
    FusionAuthClientNative.prototype.updateTheme = function (themeId, request) {
        return this.start()
            .withUri('/api/theme')
            .withUriSegment(themeId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the user with the given Id.
     *
     * @param {string} userId The Id of the user to update.
     * @param {UserRequest} request The request that contains all of the new user information.
     * @returns {Promise<ClientResponse<UserResponse>>}
     */
    FusionAuthClientNative.prototype.updateUser = function (userId, request) {
        return this.start()
            .withUri('/api/user')
            .withUriSegment(userId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the user action with the given Id.
     *
     * @param {string} userActionId The Id of the user action to update.
     * @param {UserActionRequest} request The request that contains all of the new user action information.
     * @returns {Promise<ClientResponse<UserActionResponse>>}
     */
    FusionAuthClientNative.prototype.updateUserAction = function (userActionId, request) {
        return this.start()
            .withUri('/api/user-action')
            .withUriSegment(userActionId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the user action reason with the given Id.
     *
     * @param {string} userActionReasonId The Id of the user action reason to update.
     * @param {UserActionReasonRequest} request The request that contains all of the new user action reason information.
     * @returns {Promise<ClientResponse<UserActionReasonResponse>>}
     */
    FusionAuthClientNative.prototype.updateUserActionReason = function (userActionReasonId, request) {
        return this.start()
            .withUri('/api/user-action-reason')
            .withUriSegment(userActionReasonId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates a single User consent by Id.
     *
     * @param {string} userConsentId The User Consent Id
     * @param {UserConsentRequest} request The request that contains the user consent information.
     * @returns {Promise<ClientResponse<UserConsentResponse>>}
     */
    FusionAuthClientNative.prototype.updateUserConsent = function (userConsentId, request) {
        return this.start()
            .withUri('/api/user/consent')
            .withUriSegment(userConsentId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Updates the webhook with the given Id.
     *
     * @param {string} webhookId The Id of the webhook to update.
     * @param {WebhookRequest} request The request that contains all of the new webhook information.
     * @returns {Promise<ClientResponse<WebhookResponse>>}
     */
    FusionAuthClientNative.prototype.updateWebhook = function (webhookId, request) {
        return this.start()
            .withUri('/api/webhook')
            .withUriSegment(webhookId)
            .withJSONBody(request)
            .withMethod("PUT")
            .go();
    };
    /**
     * Validates the provided JWT (encoded JWT string) to ensure the token is valid. A valid access token is properly
     * signed and not expired.
     * <p>
     * This API may be used to verify the JWT as well as decode the encoded JWT into human readable identity claims.
     *
     * @param {string} encodedJWT The encoded JWT (access token).
     * @returns {Promise<ClientResponse<ValidateResponse>>}
     */
    FusionAuthClientNative.prototype.validateJWT = function (encodedJWT) {
        return this.start()
            .withUri('/api/jwt/validate')
            .withAuthorization('JWT ' + encodedJWT)
            .withMethod("GET")
            .go();
    };
    /**
     * Confirms a email verification. The Id given is usually from an email sent to the user.
     *
     * @param {string} verificationId The email verification id sent to the user.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.verifyEmail = function (verificationId) {
        return this.start()
            .withHeader('Content-Type', 'text/plain')
            .withUri('/api/user/verify-email')
            .withUriSegment(verificationId)
            .withMethod("POST")
            .go();
    };
    /**
     * Confirms an application registration. The Id given is usually from an email sent to the user.
     *
     * @param {string} verificationId The registration verification Id sent to the user.
     * @returns {Promise<ClientResponse<void>>}
     */
    FusionAuthClientNative.prototype.verifyRegistration = function (verificationId) {
        return this.start()
            .withHeader('Content-Type', 'text/plain')
            .withUri('/api/user/verify-registration')
            .withUriSegment(verificationId)
            .withMethod("POST")
            .go();
    };
    /* ===================================================================================================================
     * Private methods
     * ===================================================================================================================*/
    /**
     * creates a rest client
     *
     * @returns {IRestClient} The RESTClient that will be used to call.
     * @private
     */
    FusionAuthClientNative.prototype.start = function () {
        var client = this.clientBuilder.build(this.host).withAuthorization(this.apiKey);
        if (this.tenantId !== null && typeof (this.tenantId) !== 'undefined') {
            client.withHeader('X-FusionAuth-TenantId', this.tenantId);
        }
        if (this.credentials != null) {
            client.withCredentials(this.credentials);
        }
        return client;
    };
    return FusionAuthClientNative;
}());
exports.default = FusionAuthClientNative;
/**
 * Available JSON Web Algorithms (JWA) as described in RFC 7518 available for this JWT implementation.
 *
 * @author Daniel DeGroff
 */
var Algorithm;
(function (Algorithm) {
    Algorithm[Algorithm["ES256"] = 0] = "ES256";
    Algorithm[Algorithm["ES384"] = 1] = "ES384";
    Algorithm[Algorithm["ES512"] = 2] = "ES512";
    Algorithm[Algorithm["HS256"] = 3] = "HS256";
    Algorithm[Algorithm["HS384"] = 4] = "HS384";
    Algorithm[Algorithm["HS512"] = 5] = "HS512";
    Algorithm[Algorithm["RS256"] = 6] = "RS256";
    Algorithm[Algorithm["RS384"] = 7] = "RS384";
    Algorithm[Algorithm["RS512"] = 8] = "RS512";
    Algorithm[Algorithm["none"] = 9] = "none";
})(Algorithm = exports.Algorithm || (exports.Algorithm = {}));
var CanonicalizationMethod;
(function (CanonicalizationMethod) {
    CanonicalizationMethod[CanonicalizationMethod["exclusive"] = 0] = "exclusive";
    CanonicalizationMethod[CanonicalizationMethod["exclusive_with_comments"] = 1] = "exclusive_with_comments";
    CanonicalizationMethod[CanonicalizationMethod["inclusive"] = 2] = "inclusive";
    CanonicalizationMethod[CanonicalizationMethod["inclusive_with_comments"] = 3] = "inclusive_with_comments";
})(CanonicalizationMethod = exports.CanonicalizationMethod || (exports.CanonicalizationMethod = {}));
/**
 * Models a consent.
 *
 * @author Daniel DeGroff
 */
var ConsentStatus;
(function (ConsentStatus) {
    ConsentStatus[ConsentStatus["Active"] = 0] = "Active";
    ConsentStatus[ConsentStatus["Revoked"] = 1] = "Revoked";
})(ConsentStatus = exports.ConsentStatus || (exports.ConsentStatus = {}));
/**
 * Status for content like usernames, profile attributes, etc.
 *
 * @author Brian Pontarelli
 */
var ContentStatus;
(function (ContentStatus) {
    ContentStatus[ContentStatus["ACTIVE"] = 0] = "ACTIVE";
    ContentStatus[ContentStatus["PENDING"] = 1] = "PENDING";
    ContentStatus[ContentStatus["REJECTED"] = 2] = "REJECTED";
})(ContentStatus = exports.ContentStatus || (exports.ContentStatus = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["BROWSER"] = 0] = "BROWSER";
    DeviceType[DeviceType["DESKTOP"] = 1] = "DESKTOP";
    DeviceType[DeviceType["LAPTOP"] = 2] = "LAPTOP";
    DeviceType[DeviceType["MOBILE"] = 3] = "MOBILE";
    DeviceType[DeviceType["OTHER"] = 4] = "OTHER";
    DeviceType[DeviceType["SERVER"] = 5] = "SERVER";
    DeviceType[DeviceType["TABLET"] = 6] = "TABLET";
    DeviceType[DeviceType["TV"] = 7] = "TV";
    DeviceType[DeviceType["UNKNOWN"] = 8] = "UNKNOWN";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var EmailSecurityType;
(function (EmailSecurityType) {
    EmailSecurityType[EmailSecurityType["NONE"] = 0] = "NONE";
    EmailSecurityType[EmailSecurityType["SSL"] = 1] = "SSL";
    EmailSecurityType[EmailSecurityType["TLS"] = 2] = "TLS";
})(EmailSecurityType = exports.EmailSecurityType || (exports.EmailSecurityType = {}));
/**
 * Event Log Type
 *
 * @author Daniel DeGroff
 */
var EventLogType;
(function (EventLogType) {
    EventLogType[EventLogType["Information"] = 0] = "Information";
    EventLogType[EventLogType["Debug"] = 1] = "Debug";
    EventLogType[EventLogType["Error"] = 2] = "Error";
})(EventLogType = exports.EventLogType || (exports.EventLogType = {}));
/**
 * Models the event types that FusionAuth produces.
 *
 * @author Brian Pontarelli
 */
var EventType;
(function (EventType) {
    EventType[EventType["UserDelete"] = 0] = "UserDelete";
    EventType[EventType["UserCreate"] = 1] = "UserCreate";
    EventType[EventType["UserUpdate"] = 2] = "UserUpdate";
    EventType[EventType["UserDeactivate"] = 3] = "UserDeactivate";
    EventType[EventType["UserBulkCreate"] = 4] = "UserBulkCreate";
    EventType[EventType["UserReactivate"] = 5] = "UserReactivate";
    EventType[EventType["UserAction"] = 6] = "UserAction";
    EventType[EventType["JWTRefreshTokenRevoke"] = 7] = "JWTRefreshTokenRevoke";
    EventType[EventType["JWTPublicKeyUpdate"] = 8] = "JWTPublicKeyUpdate";
    EventType[EventType["UserLoginSuccess"] = 9] = "UserLoginSuccess";
    EventType[EventType["UserLoginFailed"] = 10] = "UserLoginFailed";
    EventType[EventType["UserRegistrationCreate"] = 11] = "UserRegistrationCreate";
    EventType[EventType["UserRegistrationUpdate"] = 12] = "UserRegistrationUpdate";
    EventType[EventType["UserRegistrationDelete"] = 13] = "UserRegistrationDelete";
    EventType[EventType["UserRegistrationVerified"] = 14] = "UserRegistrationVerified";
    EventType[EventType["UserEmailVerified"] = 15] = "UserEmailVerified";
    EventType[EventType["Test"] = 16] = "Test";
})(EventType = exports.EventType || (exports.EventType = {}));
/**
 * @author Brian Pontarelli
 */
var ExpiryUnit;
(function (ExpiryUnit) {
    ExpiryUnit[ExpiryUnit["MINUTES"] = 0] = "MINUTES";
    ExpiryUnit[ExpiryUnit["HOURS"] = 1] = "HOURS";
    ExpiryUnit[ExpiryUnit["DAYS"] = 2] = "DAYS";
    ExpiryUnit[ExpiryUnit["WEEKS"] = 3] = "WEEKS";
    ExpiryUnit[ExpiryUnit["MONTHS"] = 4] = "MONTHS";
    ExpiryUnit[ExpiryUnit["YEARS"] = 5] = "YEARS";
})(ExpiryUnit = exports.ExpiryUnit || (exports.ExpiryUnit = {}));
var FamilyRole;
(function (FamilyRole) {
    FamilyRole[FamilyRole["Child"] = 0] = "Child";
    FamilyRole[FamilyRole["Teen"] = 1] = "Teen";
    FamilyRole[FamilyRole["Adult"] = 2] = "Adult";
})(FamilyRole = exports.FamilyRole || (exports.FamilyRole = {}));
/**
 * Authorization Grant types as defined by the <a href="https://tools.ietf.org/html/rfc6749">The OAuth 2.0 Authorization
 * Framework - RFC 6749</a>.
 * <p>
 * Specific names as defined by <a href="https://tools.ietf.org/html/rfc7591#section-4.1">
 * OAuth 2.0 Dynamic Client Registration Protocol - RFC 7591 Section 4.1</a>
 *
 * @author Daniel DeGroff
 */
var GrantType;
(function (GrantType) {
    GrantType[GrantType["authorization_code"] = 0] = "authorization_code";
    GrantType[GrantType["implicit"] = 1] = "implicit";
    GrantType[GrantType["password"] = 2] = "password";
    GrantType[GrantType["client_credentials"] = 3] = "client_credentials";
    GrantType[GrantType["refresh_token"] = 4] = "refresh_token";
    GrantType[GrantType["unknown"] = 5] = "unknown";
})(GrantType = exports.GrantType || (exports.GrantType = {}));
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod[HTTPMethod["GET"] = 0] = "GET";
    HTTPMethod[HTTPMethod["POST"] = 1] = "POST";
    HTTPMethod[HTTPMethod["PUT"] = 2] = "PUT";
    HTTPMethod[HTTPMethod["DELETE"] = 3] = "DELETE";
    HTTPMethod[HTTPMethod["HEAD"] = 4] = "HEAD";
    HTTPMethod[HTTPMethod["OPTIONS"] = 5] = "OPTIONS";
})(HTTPMethod = exports.HTTPMethod || (exports.HTTPMethod = {}));
var IdentityProviderType;
(function (IdentityProviderType) {
    IdentityProviderType[IdentityProviderType["ExternalJWT"] = 0] = "ExternalJWT";
    IdentityProviderType[IdentityProviderType["OpenIDConnect"] = 1] = "OpenIDConnect";
    IdentityProviderType[IdentityProviderType["Facebook"] = 2] = "Facebook";
    IdentityProviderType[IdentityProviderType["Google"] = 3] = "Google";
    IdentityProviderType[IdentityProviderType["Twitter"] = 4] = "Twitter";
    IdentityProviderType[IdentityProviderType["SAMLv2"] = 5] = "SAMLv2";
})(IdentityProviderType = exports.IdentityProviderType || (exports.IdentityProviderType = {}));
var KeyAlgorithm;
(function (KeyAlgorithm) {
    KeyAlgorithm[KeyAlgorithm["ES256"] = 0] = "ES256";
    KeyAlgorithm[KeyAlgorithm["ES384"] = 1] = "ES384";
    KeyAlgorithm[KeyAlgorithm["ES512"] = 2] = "ES512";
    KeyAlgorithm[KeyAlgorithm["HS256"] = 3] = "HS256";
    KeyAlgorithm[KeyAlgorithm["HS384"] = 4] = "HS384";
    KeyAlgorithm[KeyAlgorithm["HS512"] = 5] = "HS512";
    KeyAlgorithm[KeyAlgorithm["RS256"] = 6] = "RS256";
    KeyAlgorithm[KeyAlgorithm["RS384"] = 7] = "RS384";
    KeyAlgorithm[KeyAlgorithm["RS512"] = 8] = "RS512";
})(KeyAlgorithm = exports.KeyAlgorithm || (exports.KeyAlgorithm = {}));
var KeyType;
(function (KeyType) {
    KeyType[KeyType["EC"] = 0] = "EC";
    KeyType[KeyType["RSA"] = 1] = "RSA";
    KeyType[KeyType["HMAC"] = 2] = "HMAC";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
/**
 * The types of lambdas that indicate how they are invoked by FusionAuth.
 *
 * @author Brian Pontarelli
 */
var LambdaType;
(function (LambdaType) {
    LambdaType[LambdaType["JWTPopulate"] = 0] = "JWTPopulate";
    LambdaType[LambdaType["OpenIDReconcile"] = 1] = "OpenIDReconcile";
    LambdaType[LambdaType["SAMLv2Reconcile"] = 2] = "SAMLv2Reconcile";
    LambdaType[LambdaType["SAMLv2Populate"] = 3] = "SAMLv2Populate";
})(LambdaType = exports.LambdaType || (exports.LambdaType = {}));
var LoginIdType;
(function (LoginIdType) {
    LoginIdType[LoginIdType["email"] = 0] = "email";
    LoginIdType[LoginIdType["username"] = 1] = "username";
})(LoginIdType = exports.LoginIdType || (exports.LoginIdType = {}));
var OAuthErrorReason;
(function (OAuthErrorReason) {
    OAuthErrorReason[OAuthErrorReason["auth_code_not_found"] = 0] = "auth_code_not_found";
    OAuthErrorReason[OAuthErrorReason["access_token_malformed"] = 1] = "access_token_malformed";
    OAuthErrorReason[OAuthErrorReason["access_token_expired"] = 2] = "access_token_expired";
    OAuthErrorReason[OAuthErrorReason["access_token_unavailable_for_processing"] = 3] = "access_token_unavailable_for_processing";
    OAuthErrorReason[OAuthErrorReason["access_token_failed_processing"] = 4] = "access_token_failed_processing";
    OAuthErrorReason[OAuthErrorReason["refresh_token_not_found"] = 5] = "refresh_token_not_found";
    OAuthErrorReason[OAuthErrorReason["invalid_client_id"] = 6] = "invalid_client_id";
    OAuthErrorReason[OAuthErrorReason["invalid_user_credentials"] = 7] = "invalid_user_credentials";
    OAuthErrorReason[OAuthErrorReason["invalid_grant_type"] = 8] = "invalid_grant_type";
    OAuthErrorReason[OAuthErrorReason["invalid_origin"] = 9] = "invalid_origin";
    OAuthErrorReason[OAuthErrorReason["invalid_pkce_code_verifier"] = 10] = "invalid_pkce_code_verifier";
    OAuthErrorReason[OAuthErrorReason["invalid_pkce_code_challenge"] = 11] = "invalid_pkce_code_challenge";
    OAuthErrorReason[OAuthErrorReason["invalid_pkce_code_challenge_method"] = 12] = "invalid_pkce_code_challenge_method";
    OAuthErrorReason[OAuthErrorReason["invalid_redirect_uri"] = 13] = "invalid_redirect_uri";
    OAuthErrorReason[OAuthErrorReason["invalid_response_type"] = 14] = "invalid_response_type";
    OAuthErrorReason[OAuthErrorReason["invalid_id_token_hint"] = 15] = "invalid_id_token_hint";
    OAuthErrorReason[OAuthErrorReason["invalid_post_logout_redirect_uri"] = 16] = "invalid_post_logout_redirect_uri";
    OAuthErrorReason[OAuthErrorReason["grant_type_disabled"] = 17] = "grant_type_disabled";
    OAuthErrorReason[OAuthErrorReason["missing_client_id"] = 18] = "missing_client_id";
    OAuthErrorReason[OAuthErrorReason["missing_code"] = 19] = "missing_code";
    OAuthErrorReason[OAuthErrorReason["missing_grant_type"] = 20] = "missing_grant_type";
    OAuthErrorReason[OAuthErrorReason["missing_redirect_uri"] = 21] = "missing_redirect_uri";
    OAuthErrorReason[OAuthErrorReason["missing_refresh_token"] = 22] = "missing_refresh_token";
    OAuthErrorReason[OAuthErrorReason["missing_response_type"] = 23] = "missing_response_type";
    OAuthErrorReason[OAuthErrorReason["missing_token"] = 24] = "missing_token";
    OAuthErrorReason[OAuthErrorReason["login_prevented"] = 25] = "login_prevented";
    OAuthErrorReason[OAuthErrorReason["user_expired"] = 26] = "user_expired";
    OAuthErrorReason[OAuthErrorReason["user_locked"] = 27] = "user_locked";
    OAuthErrorReason[OAuthErrorReason["user_not_found"] = 28] = "user_not_found";
    OAuthErrorReason[OAuthErrorReason["client_authentication_missing"] = 29] = "client_authentication_missing";
    OAuthErrorReason[OAuthErrorReason["invalid_client_authentication_scheme"] = 30] = "invalid_client_authentication_scheme";
    OAuthErrorReason[OAuthErrorReason["invalid_client_authentication"] = 31] = "invalid_client_authentication";
    OAuthErrorReason[OAuthErrorReason["client_id_mismatch"] = 32] = "client_id_mismatch";
    OAuthErrorReason[OAuthErrorReason["unknown"] = 33] = "unknown";
})(OAuthErrorReason = exports.OAuthErrorReason || (exports.OAuthErrorReason = {}));
var OAuthErrorType;
(function (OAuthErrorType) {
    OAuthErrorType[OAuthErrorType["invalid_request"] = 0] = "invalid_request";
    OAuthErrorType[OAuthErrorType["invalid_client"] = 1] = "invalid_client";
    OAuthErrorType[OAuthErrorType["invalid_grant"] = 2] = "invalid_grant";
    OAuthErrorType[OAuthErrorType["invalid_token"] = 3] = "invalid_token";
    OAuthErrorType[OAuthErrorType["unauthorized_client"] = 4] = "unauthorized_client";
    OAuthErrorType[OAuthErrorType["invalid_scope"] = 5] = "invalid_scope";
    OAuthErrorType[OAuthErrorType["server_error"] = 6] = "server_error";
    OAuthErrorType[OAuthErrorType["unsupported_grant_type"] = 7] = "unsupported_grant_type";
    OAuthErrorType[OAuthErrorType["unsupported_response_type"] = 8] = "unsupported_response_type";
    OAuthErrorType[OAuthErrorType["change_password_required"] = 9] = "change_password_required";
    OAuthErrorType[OAuthErrorType["two_factor_required"] = 10] = "two_factor_required";
})(OAuthErrorType = exports.OAuthErrorType || (exports.OAuthErrorType = {}));
/**
 * @author Daniel DeGroff
 */
var SecureGeneratorType;
(function (SecureGeneratorType) {
    SecureGeneratorType[SecureGeneratorType["randomDigits"] = 0] = "randomDigits";
    SecureGeneratorType[SecureGeneratorType["randomBytes"] = 1] = "randomBytes";
})(SecureGeneratorType = exports.SecureGeneratorType || (exports.SecureGeneratorType = {}));
/**
 * @author Daniel DeGroff
 */
var Sort;
(function (Sort) {
    Sort[Sort["asc"] = 0] = "asc";
    Sort[Sort["desc"] = 1] = "desc";
})(Sort = exports.Sort || (exports.Sort = {}));
/**
 * <ul>
 * <li>Bearer Token type as defined by <a href="https://tools.ietf.org/html/rfc6750">RFC 6750</a>.</li>
 * <li>MAC Token type as referenced by <a href="https://tools.ietf.org/html/rfc6749">RFC 6749</a> and
 * <a href="https://tools.ietf.org/html/draft-ietf-oauth-v2-http-mac-05">
 * Draft RFC on OAuth 2.0 Message Authentication Code (MAC) Tokens</a>
 * </li>
 * </ul>
 *
 * @author Daniel DeGroff
 */
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Bearer"] = 0] = "Bearer";
    TokenType[TokenType["MAC"] = 1] = "MAC";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
/**
 * The transaction types for Webhooks and other event systems within FusionAuth.
 *
 * @author Brian Pontarelli
 */
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["None"] = 0] = "None";
    TransactionType[TransactionType["Any"] = 1] = "Any";
    TransactionType[TransactionType["SimpleMajority"] = 2] = "SimpleMajority";
    TransactionType[TransactionType["SuperMajority"] = 3] = "SuperMajority";
    TransactionType[TransactionType["AbsoluteMajority"] = 4] = "AbsoluteMajority";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
/**
 * @author Daniel DeGroff
 */
var TwoFactorDelivery;
(function (TwoFactorDelivery) {
    TwoFactorDelivery[TwoFactorDelivery["None"] = 0] = "None";
    TwoFactorDelivery[TwoFactorDelivery["TextMessage"] = 1] = "TextMessage";
})(TwoFactorDelivery = exports.TwoFactorDelivery || (exports.TwoFactorDelivery = {}));
/**
 * The phases of a time-based user action.
 *
 * @author Brian Pontarelli
 */
var UserActionPhase;
(function (UserActionPhase) {
    UserActionPhase[UserActionPhase["start"] = 0] = "start";
    UserActionPhase[UserActionPhase["modify"] = 1] = "modify";
    UserActionPhase[UserActionPhase["cancel"] = 2] = "cancel";
    UserActionPhase[UserActionPhase["end"] = 3] = "end";
})(UserActionPhase = exports.UserActionPhase || (exports.UserActionPhase = {}));
/**
 * @author Daniel DeGroff
 */
var UserState;
(function (UserState) {
    UserState[UserState["Authenticated"] = 0] = "Authenticated";
    UserState[UserState["AuthenticatedNotRegistered"] = 1] = "AuthenticatedNotRegistered";
})(UserState = exports.UserState || (exports.UserState = {}));


/***/ }),

/***/ "./lib/fusionAuthClientInstance.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var FusionAuthClientNative_1 = tslib_1.__importDefault(__webpack_require__("./lib/FusionAuthClientNative.ts"));
exports.default = new FusionAuthClientNative_1.default("ZfBqkW7YrJrNlhCb5YLflzQnjYRG9afyVrjRssPhHmk", 'http://192.168.217.137:9011');


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var nativescript_vue_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"));
var App_1 = tslib_1.__importDefault(__webpack_require__("./components/App.vue"));
var nativescript_vue_devtools_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-vue-devtools/index.js"));
var store_1 = tslib_1.__importDefault(__webpack_require__("./store.ts"));
if (true) {
    nativescript_vue_1.default.use(nativescript_vue_devtools_1.default);
}
// Prints Vue logs when --env.production is *NOT* set while building
nativescript_vue_1.default.config.silent = ("development" === 'production');
new nativescript_vue_1.default({
    store: store_1.default,
    render: function (h) { return h('frame', [h(App_1.default)]); }
}).$start();

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","markingMode":"none"},"main":"main","name":"study","version":"1.0.0"};

/***/ }),

/***/ "./store.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var vue_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"));
var vuex_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/vuex/dist/vuex.esm.js"));
vue_1.default.use(vuex_1.default);
exports.default = new vuex_1.default.Store({
    state: {},
    mutations: {},
    actions: {}
});


/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/OWNkMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MDVmNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzM2N2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWN1cmUudnVlPzY1YmQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzFlM2YiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT80OTlmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VjdXJlLnZ1ZT81ZWI0Iiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlP2ZjMmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzE4ZTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzg4MDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzQ3ZmIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT8yYzM1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VjdXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3VyZS52dWU/MDYwMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3VyZS52dWU/MTE0NCIsIndlYnBhY2s6Ly8vLi9saWIvRGVhZmF1bHRSZXN0Q2xpZW50TmF0aXZlQnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9saWIvRGVmYXVsdFJFU1RDbGllbnROYXRpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Z1c2lvbkF1dGhDbGllbnROYXRpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxpQ0FBaUMsZ0NBQWdDLHFCQUFxQixHQUFHLDZCQUE2Qiw2QkFBNkIseUJBQXlCLG9CQUFvQixxQkFBcUIsR0FBRyx3QkFBd0IseUNBQXlDLEdBQUc7OztBQUduVCx3QkFBd0IsbUJBQU8sQ0FBQyw2REFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDREQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLDhDQUE4QztBQUM3RSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7Ozs7QUNHQSx3SEFBbUM7QUFDbkMsMkhBQXVEO0FBQ3ZELG1IQUFvRDtBQUNwRCx1RkFBeUM7QUFDekMsZ0hBQXVEO0FBU3ZEO0lBQWlDLCtCQUFHO0lBQ2hDO1FBQUEsaUJBRUM7UUFERyxzQ0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOztJQUN2QixDQUFDO0lBU0Qsa0JBQUksR0FBSixVQUFLLGdCQUFnQjtRQUNqQixJQUFHLGdCQUFnQixJQUFJLHVCQUF1QixJQUFJLGdCQUFnQixJQUFJLE9BQU8sRUFBQztZQUMxRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFJLEVBQUU7Z0JBQ25CLEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDO1NBQ047YUFBSTtZQUNELEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsNkJB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QW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxh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RSw2QkFBNkIsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ0Z4SCxzRkFBbUM7QUFDbkMsNkVBQW1DO0FBRW5DLFNBQW1EO0FBQ3hCO0FBRTNCLElBQUcsSUFBMEI7SUFDM0Isc0dBQW9CO0NBQ3JCO0FBRUQsWUFBb0U7QUFDcEUsbUJBQThDO0FBRzlDLElBQUksMEJBQUcsbUJBQUM7SUFDTixLQUFLO0lBQ0wsTUFBTSxFQUFFLFdBQUMsSUFBSSxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQU07QUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJYLDJHQUFzQjtBQUN0QixtR0FBd0I7QUFFeEIsYUFBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQztBQUVkLGtCQUFlLElBQUksY0FBSSxDQUFDLEtBQUssQ0FBQztJQUM1QixLQUFLLEVBQUUsRUFFTjtJQUNELFNBQVMsRUFBRSxFQUVWO0lBQ0QsT0FBTyxFQUFFLEVBRVI7Q0FDRixDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5BY3Rpb25CYXJbZGF0YS12LTQ1YmE1ZWQ0XSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2JhODI7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ubWVzc2FnZVtkYXRhLXYtNDViYTVlZDRdIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG59XFxuLmZhW2RhdGEtdi00NWJhNWVkNF0ge1xcbiAgICBGb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9BcHAudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBQcm9wfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcbmltcG9ydCBjbGllbnQgZnJvbSBcIkAvbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIkAvY29tcG9uZW50cy9Ib21lLnZ1ZVwiO1xuaW1wb3J0IHsgRm9udGF3ZXNvbWUgfSBmcm9tICduYXRpdmVzY3JpcHQtZm9udGF3ZXNvbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIHJlc3VsdCB7XG4gICAgc3RhdHVzQ29kZTogc3RyaW5nLFxuICAgIHJlc3BvbnNlOiBKU09OLFxuICAgIHJlZ2lzdHJhdGlvbjogQXJyYXk8c3RyaW5nPixcbn1cblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgVnVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgRm9udGF3ZXNvbWUuaW5pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW1haWw6IHN0cmluZyA7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVxdWVzdDogT2JqZWN0O1xuICAgIHByaXZhdGUgcm9sZXM6IEpTT047XG4gICAgcHJpdmF0ZSB1c2VyOiBKU09OO1xuICAgIHB1YmxpYyBwb3N0OiBzdHJpbmc7XG5cbiAgICBnb1RvKHJvbGVJbkZ1c2lvbkF1dGgpe1xuICAgICAgICBpZihyb2xlSW5GdXNpb25BdXRoID09IFwidmlldy1zZWN1cml0eS1tZXNzYWdlXCIgfHwgcm9sZUluRnVzaW9uQXV0aCA9PSBcImFkbWluXCIpe1xuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogdGhpcy5wb3N0LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUUkVUQVwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXN1w6FyaW8gb3Ugc2VuaGEgaW5jb3JyZXRvc1wiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJ0cnkgQWdhaW5cIlxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGVydCBkaWFsb2cgY2xvc2VkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgcmVxdWVzdFByb3ZpZGVyKCl7XG4gICAgICAgIHRoaXMucmVxdWVzdCA9ICB7XG4gICAgICAgICAgICBcImxvZ2luSWRcIjogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIFwiYXBwbGljYXRpb25JZFwiOiBcImZjYTQ4MTRmLTY0NWMtNGMzZi1hOWIwLTJiMmNhN2EyZTgzNVwiXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Q7XG4gICAgfTtcblxuICAgIHRlc3RGdXNpb25BdXRoTWV0aG9kcygpIHtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5zZWFyY2hVc2VycyhcIjkwMTkwNGQ4LTVlZWItNDQxZi1hODBlLThjOGM1OTU4MjViNVwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjbGllbnRMb2dpbigpIHtcbiAgICAgICAgLy8gdGhpcy4kbmF2aWdhdGVUbyhzZWN1cmUpO1xuICAgICAgICByZXR1cm4gY2xpZW50LmxvZ2luKHRoaXMucmVxdWVzdFByb3ZpZGVyKCkpXG4gICAgICAgICAgICAudGhlbih0aGlzLmhhbmRsZVJlc3BvbnNlLCB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy51c2VyLnJlc3BvbnNlLnVzZXIucmVnaXN0cmF0aW9ucztcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSB0aGlzLnJvbGVzWzBdLnJvbGVzWzBdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm9sZXNbMF0ucm9sZXNbMF0pO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudXNlciA9IHRoaXMucmVzdWx0LnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucm9sZXMgPSB0aGlzLnVzZXIudXNlci5yZWdpc3RyYXRpb25zO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucG9zdCA9IHRoaXMucm9sZXNbMF0ucm9sZXNbMF07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2liaWxpdHkgPT57XG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvKHRoaXMucm9sZXNbMF0ucm9sZXNbMF0pO1xuICAgICAgICAgICAgIH0pO1xuICAgIH07XG5cblxuXG4gICAgaGFuZGxlUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIGNsaWVudFJlc3BvbnNlO1xuICAgIH07XG4gICAgaGFuZGxlRXJyb3JSZXNwb25zZShjbGllbnRSZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gY2xpZW50UmVzcG9uc2U7XG4gICAgfTtcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSG9tZSxcbiAgICB9O1xufVxuXG4iLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgUHJvcH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IFNlY3VyZSBmcm9tIFwiQC9jb21wb25lbnRzL1NlY3VyZS52dWVcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBWdWUge1xuICAgIHByaXZhdGUgbGF0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgbG9uOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgc3BlZWQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBhZGRyOiBzdHJpbmcgPSBcIlwiO1xuICAgIEBQcm9wKCkgcHVibGljIHJvbGU6IHN0cmluZztcblxuICAgIGdvVG9TZWN1cmUoKXtcbiAgICAgICAgaWYodGhpcy5yb2xlID09IFwiYWRtaW5cIikge1xuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhTZWN1cmUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVc2VyIE5vdCBpcyBhZG1pblwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwidm9sdGUgb3NhZG9cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiZXhpdFwiXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsZXJ0IGRpYWxvZyBjbG9zZWRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgZ2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCk7XG4gICAgICAgIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7IGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCwgbWF4aW11bUFnZTogNTAwMCwgdGltZW91dDogMjAwMDAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXQgPSByZXMubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5sb24gPSByZXMubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvXCIgK3RoaXMubGF0ICsnLCcrIHRoaXMubG9uIClcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBnb1RvVGVzdChyb2xlSW5GdXNpb25BdXRoOiBzdHJpbmcpe1xuICAgICAgICBpZihyb2xlSW5GdXNpb25BdXRoID09IFwidmlldy1zZWN1cml0eS1tZXNzYWdlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oU2VjdXJlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVFJFVEFcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVzdcOhcmlvIHNlbSBQZXJtaXNzw6NvXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgZGlhbG9nIGNsb3NlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm9wczp7XG4gICAgICAgIG5vbWU6IHN0cmluZyxcbiAgICB9O1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgU2VjdXJlLFxuICAgIH07XG5cbn1cbiIsIlxuXG5cblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcbmltcG9ydCB7IExvY2FsTm90aWZpY2F0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdXJlIGV4dGVuZHMgVnVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLmhhc1Blcm1pc3Npb24oKVxuICAgICAgICB0aGlzLnRlc3QoKTtcbiAgICB9XG4gICAgdGVzdCgpe1xuXG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShcbiAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3ZhIG1lbnNhZ2VtIGVtIG5Nb2JpbGUnLFxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAnTWVuc2FnZW0gZGUgblRvcHVzJyxcbiAgICAgICAgICAgICAgICBib2R5OiBcIm1lc3NhZ2UubWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgIGJpZ1RleHRTdHlsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9yY2VTaG93V2hlbkluRm9yZWdyb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpY29uOiBcInJlczovL2xvZ29cIixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJyZXM6Ly9pY29uXCIsXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogXCJ2dWUtY2hhbm5lbFwiLFxuICAgICAgICAgICAgICAgIGF0OiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICgxMCAqIDEwMDApKVxuICAgICAgICAgICAgfV0pXG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbihncmFudGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJtaXNzaW9uIGdyYW50ZWQ/IFwiICsgZ3JhbnRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5jYXJuZWdpZXRlY2hub2xvZ2llcy5jb20vc2l0ZXMvY3QvYXNzZXRzL2ltYWdlL2xvZ28tb2N0b3B1cy5wbmdcIixcbiAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uZW1haWxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbWFpbCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTG9nIEluXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jbGllbnRMb2dpbiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiwgYXR0cnM6IHsgdGl0bGU6IFwiSG9tZVwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaG9tZS1wYW5lbFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkdldCBNeSBMb2NhdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ2V0TG9jYXRpb24gfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2VjdXJlXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvU2VjdXJlIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxibFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTGF0aXR1ZGU6IFwiICsgX3ZtLmxhdCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmxcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvbmdpdHVkZTogXCIgKyBfdm0ubG9uIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiUGFnZVwiLCBbX3ZtLl92KFwiXFxuICAgIDw+XFxuXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vbGliL0RlYWZhdWx0UmVzdENsaWVudE5hdGl2ZUJ1aWxkZXIudHNcIjogXCIuL2xpYi9EZWFmYXVsdFJlc3RDbGllbnROYXRpdmVCdWlsZGVyLnRzXCIsXG5cdFwiLi9saWIvRGVmYXVsdFJFU1RDbGllbnROYXRpdmUudHNcIjogXCIuL2xpYi9EZWZhdWx0UkVTVENsaWVudE5hdGl2ZS50c1wiLFxuXHRcIi4vbGliL0Z1c2lvbkF1dGhDbGllbnROYXRpdmUudHNcIjogXCIuL2xpYi9GdXNpb25BdXRoQ2xpZW50TmF0aXZlLnRzXCIsXG5cdFwiLi9saWIvZnVzaW9uQXV0aENsaWVudEluc3RhbmNlLnRzXCI6IFwiLi9saWIvZnVzaW9uQXV0aENsaWVudEluc3RhbmNlLnRzXCIsXG5cdFwiLi9tYWluLnRzXCI6IFwiLi9tYWluLnRzXCIsXG5cdFwiLi9zdG9yZS50c1wiOiBcIi4vc3RvcmUudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKilcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGJsdWUgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBibHVlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogQmx1ZSB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogQ29sb3IgY2xhc3Nlc1xcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLmMtZ3JleXtjb2xvcjojZTBlMGUwfS5jLWJnLWdyZXl7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwfVxcclxcbioqL1xcbi5jLXdoaXRlIHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmMtYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJsYWNrIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuLmMtYmctYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxcblxcbi5jLWFxdWEge1xcbiAgY29sb3I6ICMwMGNhYWI7IH1cXG5cXG4uYy1iZy1hcXVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG5cXG4uYy1ibHVlIHtcXG4gIGNvbG9yOiAjM2Q1YWZlOyB9XFxuXFxuLmMtYmctYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlOyB9XFxuXFxuLmMtY2hhcmNvYWwge1xcbiAgY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4uYy1iZy1jaGFyY29hbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYnJvd24ge1xcbiAgY29sb3I6ICM3OTU1NDg7IH1cXG5cXG4uYy1iZy1icm93biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtZm9yZXN0IHtcXG4gIGNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtYmctZm9yZXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG5cXG4uYy1ncmV5IHtcXG4gIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmMtYmctZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmMtZ3JleS1saWdodCB7XFxuICBjb2xvcjogI2JhYmFiYTsgfVxcblxcbi5jLWJnLWdyZXktbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5jLWdyZXktZGFyayB7XFxuICBjb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLWJnLWdyZXktZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2ODdjOyB9XFxuXFxuLmMtcHVycGxlIHtcXG4gIGNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtYmctcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTMwZmY7IH1cXG5cXG4uYy1sZW1vbiB7XFxuICBjb2xvcjogI2ZmZWEwMDsgfVxcblxcbi5jLWJnLWxlbW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1saW1lIHtcXG4gIGNvbG9yOiAjYWVlNDA2OyB9XFxuXFxuLmMtYmctbGltZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2OyB9XFxuXFxuLmMtb3JhbmdlIHtcXG4gIGNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtYmctb3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTdjMDA7IH1cXG5cXG4uYy1ydWJ5IHtcXG4gIGNvbG9yOiAjZmYxNzQ0OyB9XFxuXFxuLmMtYmctcnVieSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuXFxuLmMtc2t5IHtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmMtYmctc2t5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4vKiBXaWR0aC9IZWlnaHQgKi9cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnctMTAwIHtcXG4gIHdpZHRoOiAxMDA7IH1cXG5cXG4uaC1mdWxsIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5oLTEwMCB7XFxuICBoZWlnaHQ6IDEwMDsgfVxcblxcbi8qKlxcclxcbiAqIE1hcmdpbiBhbmQgUGFkZGluZ1xcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLm0tMHttYXJnaW46MH0ubS10LTB7bWFyZ2luLXRvcDowfS5tLXItMHttYXJnaW4tcmlnaHQ6MH0ubS1iLTB7bWFyZ2luLWJvdHRvbTowfS5tLWwtMHttYXJnaW4tbGVmdDowfS5tLXgtMHttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDowfS5tLXktMHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcclxcbiAqIFNhbWUgZm9yIFBhZGRpbmcgKHVzaW5nIHRoZSAncCcgYWJicmV2aWF0aW9uKVxcclxcbiAqIEZyb20gMCwgMiwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwXFxyXFxuKiovXFxuLm0tMCB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4ubS10LTAge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcbi5tLXItMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG5cXG4ubS1iLTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tLWwtMCB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5tLXgtMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5tLXktMCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tLTIge1xcbiAgbWFyZ2luOiAyOyB9XFxuXFxuLm0tdC0yIHtcXG4gIG1hcmdpbi10b3A6IDI7IH1cXG5cXG4ubS1yLTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyOyB9XFxuXFxuLm0tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDI7IH1cXG5cXG4ubS1sLTIge1xcbiAgbWFyZ2luLWxlZnQ6IDI7IH1cXG5cXG4ubS14LTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyO1xcbiAgbWFyZ2luLWxlZnQ6IDI7IH1cXG5cXG4ubS15LTIge1xcbiAgbWFyZ2luLXRvcDogMjtcXG4gIG1hcmdpbi1ib3R0b206IDI7IH1cXG5cXG4ubS00IHtcXG4gIG1hcmdpbjogNDsgfVxcblxcbi5tLXQtNCB7XFxuICBtYXJnaW4tdG9wOiA0OyB9XFxuXFxuLm0tci00IHtcXG4gIG1hcmdpbi1yaWdodDogNDsgfVxcblxcbi5tLWItNCB7XFxuICBtYXJnaW4tYm90dG9tOiA0OyB9XFxuXFxuLm0tbC00IHtcXG4gIG1hcmdpbi1sZWZ0OiA0OyB9XFxuXFxuLm0teC00IHtcXG4gIG1hcmdpbi1yaWdodDogNDtcXG4gIG1hcmdpbi1sZWZ0OiA0OyB9XFxuXFxuLm0teS00IHtcXG4gIG1hcmdpbi10b3A6IDQ7XFxuICBtYXJnaW4tYm90dG9tOiA0OyB9XFxuXFxuLm0tNSB7XFxuICBtYXJnaW46IDU7IH1cXG5cXG4ubS10LTUge1xcbiAgbWFyZ2luLXRvcDogNTsgfVxcblxcbi5tLXItNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDU7IH1cXG5cXG4ubS1iLTUge1xcbiAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5tLWwtNSB7XFxuICBtYXJnaW4tbGVmdDogNTsgfVxcblxcbi5tLXgtNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDU7XFxuICBtYXJnaW4tbGVmdDogNTsgfVxcblxcbi5tLXktNSB7XFxuICBtYXJnaW4tdG9wOiA1O1xcbiAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5tLTgge1xcbiAgbWFyZ2luOiA4OyB9XFxuXFxuLm0tdC04IHtcXG4gIG1hcmdpbi10b3A6IDg7IH1cXG5cXG4ubS1yLTgge1xcbiAgbWFyZ2luLXJpZ2h0OiA4OyB9XFxuXFxuLm0tYi04IHtcXG4gIG1hcmdpbi1ib3R0b206IDg7IH1cXG5cXG4ubS1sLTgge1xcbiAgbWFyZ2luLWxlZnQ6IDg7IH1cXG5cXG4ubS14LTgge1xcbiAgbWFyZ2luLXJpZ2h0OiA4O1xcbiAgbWFyZ2luLWxlZnQ6IDg7IH1cXG5cXG4ubS15LTgge1xcbiAgbWFyZ2luLXRvcDogODtcXG4gIG1hcmdpbi1ib3R0b206IDg7IH1cXG5cXG4ubS0xMCB7XFxuICBtYXJnaW46IDEwOyB9XFxuXFxuLm0tdC0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi5tLXItMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDsgfVxcblxcbi5tLWItMTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS1sLTEwIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDsgfVxcblxcbi5tLXgtMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDsgfVxcblxcbi5tLXktMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7XFxuICBtYXJnaW4tYm90dG9tOiAxMDsgfVxcblxcbi5tLTEyIHtcXG4gIG1hcmdpbjogMTI7IH1cXG5cXG4ubS10LTEyIHtcXG4gIG1hcmdpbi10b3A6IDEyOyB9XFxuXFxuLm0tci0xMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEyOyB9XFxuXFxuLm0tYi0xMiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLWwtMTIge1xcbiAgbWFyZ2luLWxlZnQ6IDEyOyB9XFxuXFxuLm0teC0xMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEyO1xcbiAgbWFyZ2luLWxlZnQ6IDEyOyB9XFxuXFxuLm0teS0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjtcXG4gIG1hcmdpbi1ib3R0b206IDEyOyB9XFxuXFxuLm0tMTUge1xcbiAgbWFyZ2luOiAxNTsgfVxcblxcbi5tLXQtMTUge1xcbiAgbWFyZ2luLXRvcDogMTU7IH1cXG5cXG4ubS1yLTE1IHtcXG4gIG1hcmdpbi1yaWdodDogMTU7IH1cXG5cXG4ubS1iLTE1IHtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tbC0xNSB7XFxuICBtYXJnaW4tbGVmdDogMTU7IH1cXG5cXG4ubS14LTE1IHtcXG4gIG1hcmdpbi1yaWdodDogMTU7XFxuICBtYXJnaW4tbGVmdDogMTU7IH1cXG5cXG4ubS15LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1O1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7IH1cXG5cXG4ubS0xNiB7XFxuICBtYXJnaW46IDE2OyB9XFxuXFxuLm0tdC0xNiB7XFxuICBtYXJnaW4tdG9wOiAxNjsgfVxcblxcbi5tLXItMTYge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjsgfVxcblxcbi5tLWItMTYge1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS1sLTE2IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNjsgfVxcblxcbi5tLXgtMTYge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gIG1hcmdpbi1sZWZ0OiAxNjsgfVxcblxcbi5tLXktMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7XFxuICBtYXJnaW4tYm90dG9tOiAxNjsgfVxcblxcbi5tLTIwIHtcXG4gIG1hcmdpbjogMjA7IH1cXG5cXG4ubS10LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwOyB9XFxuXFxuLm0tci0yMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwOyB9XFxuXFxuLm0tYi0yMCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLWwtMjAge1xcbiAgbWFyZ2luLWxlZnQ6IDIwOyB9XFxuXFxuLm0teC0yMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwO1xcbiAgbWFyZ2luLWxlZnQ6IDIwOyB9XFxuXFxuLm0teS0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwOyB9XFxuXFxuLm0tMjQge1xcbiAgbWFyZ2luOiAyNDsgfVxcblxcbi5tLXQtMjQge1xcbiAgbWFyZ2luLXRvcDogMjQ7IH1cXG5cXG4ubS1yLTI0IHtcXG4gIG1hcmdpbi1yaWdodDogMjQ7IH1cXG5cXG4ubS1iLTI0IHtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tbC0yNCB7XFxuICBtYXJnaW4tbGVmdDogMjQ7IH1cXG5cXG4ubS14LTI0IHtcXG4gIG1hcmdpbi1yaWdodDogMjQ7XFxuICBtYXJnaW4tbGVmdDogMjQ7IH1cXG5cXG4ubS15LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0O1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4ubS0yNSB7XFxuICBtYXJnaW46IDI1OyB9XFxuXFxuLm0tdC0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNTsgfVxcblxcbi5tLXItMjUge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNTsgfVxcblxcbi5tLWItMjUge1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS1sLTI1IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNTsgfVxcblxcbi5tLXgtMjUge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNTtcXG4gIG1hcmdpbi1sZWZ0OiAyNTsgfVxcblxcbi5tLXktMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7XFxuICBtYXJnaW4tYm90dG9tOiAyNTsgfVxcblxcbi5tLTI4IHtcXG4gIG1hcmdpbjogMjg7IH1cXG5cXG4ubS10LTI4IHtcXG4gIG1hcmdpbi10b3A6IDI4OyB9XFxuXFxuLm0tci0yOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI4OyB9XFxuXFxuLm0tYi0yOCB7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLWwtMjgge1xcbiAgbWFyZ2luLWxlZnQ6IDI4OyB9XFxuXFxuLm0teC0yOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI4O1xcbiAgbWFyZ2luLWxlZnQ6IDI4OyB9XFxuXFxuLm0teS0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODtcXG4gIG1hcmdpbi1ib3R0b206IDI4OyB9XFxuXFxuLm0tMzAge1xcbiAgbWFyZ2luOiAzMDsgfVxcblxcbi5tLXQtMzAge1xcbiAgbWFyZ2luLXRvcDogMzA7IH1cXG5cXG4ubS1yLTMwIHtcXG4gIG1hcmdpbi1yaWdodDogMzA7IH1cXG5cXG4ubS1iLTMwIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLm0tbC0zMCB7XFxuICBtYXJnaW4tbGVmdDogMzA7IH1cXG5cXG4ubS14LTMwIHtcXG4gIG1hcmdpbi1yaWdodDogMzA7XFxuICBtYXJnaW4tbGVmdDogMzA7IH1cXG5cXG4ubS15LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzA7IH1cXG5cXG4ucC0wIHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4ucC10LTAge1xcbiAgcGFkZGluZy10b3A6IDA7IH1cXG5cXG4ucC1yLTAge1xcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcblxcbi5wLWItMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLWwtMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC14LTAge1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLXktMCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuLnAtMiB7XFxuICBwYWRkaW5nOiAyOyB9XFxuXFxuLnAtdC0yIHtcXG4gIHBhZGRpbmctdG9wOiAyOyB9XFxuXFxuLnAtci0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI7IH1cXG5cXG4ucC1iLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC1sLTIge1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteC0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI7XFxuICBwYWRkaW5nLWxlZnQ6IDI7IH1cXG5cXG4ucC15LTIge1xcbiAgcGFkZGluZy10b3A6IDI7XFxuICBwYWRkaW5nLWJvdHRvbTogMjsgfVxcblxcbi5wLTQge1xcbiAgcGFkZGluZzogNDsgfVxcblxcbi5wLXQtNCB7XFxuICBwYWRkaW5nLXRvcDogNDsgfVxcblxcbi5wLXItNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0OyB9XFxuXFxuLnAtYi00IHtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtbC00IHtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXgtNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0O1xcbiAgcGFkZGluZy1sZWZ0OiA0OyB9XFxuXFxuLnAteS00IHtcXG4gIHBhZGRpbmctdG9wOiA0O1xcbiAgcGFkZGluZy1ib3R0b206IDQ7IH1cXG5cXG4ucC01IHtcXG4gIHBhZGRpbmc6IDU7IH1cXG5cXG4ucC10LTUge1xcbiAgcGFkZGluZy10b3A6IDU7IH1cXG5cXG4ucC1yLTUge1xcbiAgcGFkZGluZy1yaWdodDogNTsgfVxcblxcbi5wLWItNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLWwtNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC14LTUge1xcbiAgcGFkZGluZy1yaWdodDogNTtcXG4gIHBhZGRpbmctbGVmdDogNTsgfVxcblxcbi5wLXktNSB7XFxuICBwYWRkaW5nLXRvcDogNTtcXG4gIHBhZGRpbmctYm90dG9tOiA1OyB9XFxuXFxuLnAtOCB7XFxuICBwYWRkaW5nOiA4OyB9XFxuXFxuLnAtdC04IHtcXG4gIHBhZGRpbmctdG9wOiA4OyB9XFxuXFxuLnAtci04IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDg7IH1cXG5cXG4ucC1iLTgge1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC1sLTgge1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteC04IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDg7XFxuICBwYWRkaW5nLWxlZnQ6IDg7IH1cXG5cXG4ucC15LTgge1xcbiAgcGFkZGluZy10b3A6IDg7XFxuICBwYWRkaW5nLWJvdHRvbTogODsgfVxcblxcbi5wLTEwIHtcXG4gIHBhZGRpbmc6IDEwOyB9XFxuXFxuLnAtdC0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTA7IH1cXG5cXG4ucC1yLTEwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwOyB9XFxuXFxuLnAtYi0xMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7IH1cXG5cXG4ucC1sLTEwIHtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC14LTEwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDsgfVxcblxcbi5wLXktMTAge1xcbiAgcGFkZGluZy10b3A6IDEwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtMTIge1xcbiAgcGFkZGluZzogMTI7IH1cXG5cXG4ucC10LTEyIHtcXG4gIHBhZGRpbmctdG9wOiAxMjsgfVxcblxcbi5wLXItMTIge1xcbiAgcGFkZGluZy1yaWdodDogMTI7IH1cXG5cXG4ucC1iLTEyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMjsgfVxcblxcbi5wLWwtMTIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXgtMTIge1xcbiAgcGFkZGluZy1yaWdodDogMTI7XFxuICBwYWRkaW5nLWxlZnQ6IDEyOyB9XFxuXFxuLnAteS0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC0xNSB7XFxuICBwYWRkaW5nOiAxNTsgfVxcblxcbi5wLXQtMTUge1xcbiAgcGFkZGluZy10b3A6IDE1OyB9XFxuXFxuLnAtci0xNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNTsgfVxcblxcbi5wLWItMTUge1xcbiAgcGFkZGluZy1ib3R0b206IDE1OyB9XFxuXFxuLnAtbC0xNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteC0xNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNTtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4ucC15LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLTE2IHtcXG4gIHBhZGRpbmc6IDE2OyB9XFxuXFxuLnAtdC0xNiB7XFxuICBwYWRkaW5nLXRvcDogMTY7IH1cXG5cXG4ucC1yLTE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2OyB9XFxuXFxuLnAtYi0xNiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTY7IH1cXG5cXG4ucC1sLTE2IHtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC14LTE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2O1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5wLXktMTYge1xcbiAgcGFkZGluZy10b3A6IDE2O1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtMjAge1xcbiAgcGFkZGluZzogMjA7IH1cXG5cXG4ucC10LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMDsgfVxcblxcbi5wLXItMjAge1xcbiAgcGFkZGluZy1yaWdodDogMjA7IH1cXG5cXG4ucC1iLTIwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDsgfVxcblxcbi5wLWwtMjAge1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXgtMjAge1xcbiAgcGFkZGluZy1yaWdodDogMjA7XFxuICBwYWRkaW5nLWxlZnQ6IDIwOyB9XFxuXFxuLnAteS0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC0yNCB7XFxuICBwYWRkaW5nOiAyNDsgfVxcblxcbi5wLXQtMjQge1xcbiAgcGFkZGluZy10b3A6IDI0OyB9XFxuXFxuLnAtci0yNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNDsgfVxcblxcbi5wLWItMjQge1xcbiAgcGFkZGluZy1ib3R0b206IDI0OyB9XFxuXFxuLnAtbC0yNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteC0yNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNDtcXG4gIHBhZGRpbmctbGVmdDogMjQ7IH1cXG5cXG4ucC15LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLTI1IHtcXG4gIHBhZGRpbmc6IDI1OyB9XFxuXFxuLnAtdC0yNSB7XFxuICBwYWRkaW5nLXRvcDogMjU7IH1cXG5cXG4ucC1yLTI1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1OyB9XFxuXFxuLnAtYi0yNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjU7IH1cXG5cXG4ucC1sLTI1IHtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC14LTI1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1O1xcbiAgcGFkZGluZy1sZWZ0OiAyNTsgfVxcblxcbi5wLXktMjUge1xcbiAgcGFkZGluZy10b3A6IDI1O1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtMjgge1xcbiAgcGFkZGluZzogMjg7IH1cXG5cXG4ucC10LTI4IHtcXG4gIHBhZGRpbmctdG9wOiAyODsgfVxcblxcbi5wLXItMjgge1xcbiAgcGFkZGluZy1yaWdodDogMjg7IH1cXG5cXG4ucC1iLTI4IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyODsgfVxcblxcbi5wLWwtMjgge1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXgtMjgge1xcbiAgcGFkZGluZy1yaWdodDogMjg7XFxuICBwYWRkaW5nLWxlZnQ6IDI4OyB9XFxuXFxuLnAteS0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC0zMCB7XFxuICBwYWRkaW5nOiAzMDsgfVxcblxcbi5wLXQtMzAge1xcbiAgcGFkZGluZy10b3A6IDMwOyB9XFxuXFxuLnAtci0zMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMDsgfVxcblxcbi5wLWItMzAge1xcbiAgcGFkZGluZy1ib3R0b206IDMwOyB9XFxuXFxuLnAtbC0zMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteC0zMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMDtcXG4gIHBhZGRpbmctbGVmdDogMzA7IH1cXG5cXG4ucC15LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi8qIERpdmlkZXJzICovXFxuLmhyLWxpZ2h0IHtcXG4gIGhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5oci1kYXJrIHtcXG4gIGhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi8qIEFsaWdubWVudCAqL1xcbi50ZXh0LWxlZnQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi50ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LWxvd2VyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlOyB9XFxuXFxuLnRleHQtdXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4udGV4dC1jYXBpdGFsaXplIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XFxuXFxuLmZvbnQtd2VpZ2h0LW5vcm1hbCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLmZvbnQtd2VpZ2h0LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uZm9udC1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLyoqXFxyXFxuICogRm9udCBzaXplXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAudC0xMHtmb250LXNpemU6MTB9XFxyXFxuICogRnJvbSAxMCwgMTIsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXFxyXFxuKiovXFxuLnQtMTAge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi50LTEyIHtcXG4gIGZvbnQtc2l6ZTogMTI7IH1cXG5cXG4udC0xNCB7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnQtMTUge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi50LTE2IHtcXG4gIGZvbnQtc2l6ZTogMTY7IH1cXG5cXG4udC0xNyB7XFxuICBmb250LXNpemU6IDE3OyB9XFxuXFxuLnQtMTgge1xcbiAgZm9udC1zaXplOiAxODsgfVxcblxcbi50LTE5IHtcXG4gIGZvbnQtc2l6ZTogMTk7IH1cXG5cXG4udC0yMCB7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXFxuLnQtMjUge1xcbiAgZm9udC1zaXplOiAyNTsgfVxcblxcbi50LTMwIHtcXG4gIGZvbnQtc2l6ZTogMzA7IH1cXG5cXG4uaW1nLXJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogNTsgfVxcblxcbi5pbWctY2lyY2xlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwOyB9XFxuXFxuLmltZy10aHVtYm5haWwge1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcblxcbi5pbnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7IH1cXG5cXG4ucHVsbC1sZWZ0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7IH1cXG5cXG4ucHVsbC1yaWdodCB7XFxuICBob3Jpem9udGFsLWFsaWduOiByaWdodDsgfVxcblxcbi5tLXgtYXV0byB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubS15LWF1dG8ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LXByaW1hcnkge1xcbiAgY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4udGV4dC1kYW5nZXIge1xcbiAgY29sb3I6ICNkNTAwMDA7IH1cXG5cXG4udGV4dC1tdXRlZCB7XFxuICBjb2xvcjogIzllOWU5ZTsgfVxcblxcbi5iZy1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5iZy1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MDAwMDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmFjdGlvbi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICAuYWN0aW9uLWJhciAuYWN0aW9uLWJhci10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE3O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAuYWN0aW9uLWJhciAuYWN0aW9uLWl0ZW0ge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxuICBjb2xvcjogIzMwYmNmZjtcXG4gIHdpZHRoOiAzMDtcXG4gIGhlaWdodDogMzA7IH1cXG5cXG4uYnRuIHtcXG4gIGNvbG9yOiAjMzBiY2ZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtaW4taGVpZ2h0OiAzNjtcXG4gIG1pbi13aWR0aDogNjQ7XFxuICBwYWRkaW5nOiAxMCAxMCAxMCAxMDtcXG4gIGZvbnQtc2l6ZTogMTg7XFxuICBtYXJnaW46IDggMTYgOCAxNjsgfVxcbiAgLmJ0bi5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2M2NkZmY7IH1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjtcXG4gIGJvcmRlci1jb2xvcjogIzMwYmNmZjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFhZmM7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwYWFmYzsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hcXVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2FhYjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1icm93biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZm9yZXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk2ODsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ncmV5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1sZW1vbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVhMDA7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWxpbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2O1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1vcmFuZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXB1cnBsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MTMwZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tcnVieSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tc2t5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi5idG4tb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogIzMwYmNmZjtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuICAuYnRuLW91dGxpbmUuYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2M2NkZmY7IH1cXG5cXG4uYnRuW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgY29sb3I6ICNhNGE0YTQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmZhIHtcXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZSwgZm9udGF3ZXNvbWUtd2ViZm9udDsgfVxcblxcbi5mb3JtIC5pbnB1dCB7XFxuICBwYWRkaW5nOiAxNiA4IDE2IDg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLmZvcm0gLmlucHV0LmlucHV0LWJvcmRlciB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyO1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0LmlucHV0LXJvdW5kZWQge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjg7XFxuICAgIHBhZGRpbmc6IDE2OyB9XFxuICAuZm9ybSAuaW5wdXRbaXNFbmFibGVkPSdmYWxzZSddIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxcblxcbi5mb3JtIC5pbnB1dC1maWVsZCB7XFxuICBtYXJnaW46IDg7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBjb2xvcjogI2JhYmFiYTsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMCAwIDggMDsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1saWdodC5hY3RpdmUsXFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmhyLWRhcmsuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkLmlucHV0LXNpZGVzIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIG1hcmdpbjogMCAwIDggMDsgfVxcblxcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYge1xcbiAgbWFyZ2luLWJvdHRvbTogNDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzIxMjEyMTsgfVxcblxcbi5ib2R5LFxcbi5ib2R5MixcXG4uZm9vdG5vdGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjNzU3NTc1OyB9XFxuXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogMzI7IH1cXG5cXG4uaDIge1xcbiAgZm9udC1zaXplOiAyMjsgfVxcblxcbi5oMyB7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLmg0IHtcXG4gIGZvbnQtc2l6ZTogMTI7IH1cXG5cXG4uaDUge1xcbiAgZm9udC1zaXplOiAxMTsgfVxcblxcbi5oNiB7XFxuICBmb250LXNpemU6IDEwOyB9XFxuXFxuLmJvZHkge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5ib2R5MiB7XFxuICBmb250LXNpemU6IDE3OyB9XFxuXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtc2l6ZTogMTM7IH1cXG5cXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgZm9udC1zaXplOiAxNjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIExhYmVsIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAudGh1bWIge1xcbiAgICBzdHJldGNoOiBmaWxsO1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogNDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTY7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLXRleHQge1xcbiAgICBjb2xvcjogIzc1NzU3NTtcXG4gICAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgY29sb3I6ICMzMGJjZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLnNlZ21lbnRlZC1iYXIge1xcbiAgZm9udC1zaXplOiAxMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIHNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0LCAuc2lkZWRyYXdlci1jZW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgaGVpZ2h0OiAxNDg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDE2IDE2IDAgMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDIwIDE1IDAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNjQ7XFxuICB3aWR0aDogNjQ7XFxuICBib3JkZXItcmFkaXVzOiAzMjtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAzNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA3NDtcXG4gIHdpZHRoOiA3NDtcXG4gIGJvcmRlci1yYWRpdXM6IDM3O1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgY29sb3I6ICM3MzczNzM7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbSB7XFxuICBoZWlnaHQ6IDQ4O1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3JpZW50YXRpb246IGhvcml6b250YWw7IH1cXG4gIC5zaWRlZHJhd2VyLWxpc3QtaXRlbSAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICAgIHdpZHRoOiAyNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBoZWlnaHQ6IDQ4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0uYWN0aXZlIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG4gICAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICAgICAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gIG1hcmdpbjogMCAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gIG1hcmdpbjogMCAwIDAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogMC4xO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcbiAgLnNsaWRlcltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gICAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc3dpdGNoW2NoZWNrZWQ9dHJ1ZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi50YWItdmlldyB7XFxuICAvKmNvbG9yOiAkc2Vjb25kYXJ5OyovXFxuICBzZWxlY3RlZC1jb2xvcjogIzMwYmNmZjtcXG4gIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgLnRhYi12aWV3IC50YWItdmlldy1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgdGFicy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuI2xvZ2luLWJhY2tncm91bmQge1xcbiAgbWFyZ2luLXRvcDogLTIwO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxcblxcbi5sb2dpbi13cmFwIHtcXG4gIHBhZGRpbmc6IDAgNDA7IH1cXG5cXG4ubG9nby13cmFwIHtcXG4gIG1hcmdpbjogNjAgMCAxMCAwO1xcbiAgcGFkZGluZzogMjAgMDsgfVxcbiAgLmxvZ28td3JhcCAubG9naW4tbG9nbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogIzIxMjEyMTtcXG4gICAgb3BhY2l0eTogLjk7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28tc3ViIHtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC44O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAyMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzOyB9XFxuICAubG9naW4td3JhcHBlciBUZXh0RmllbGQge1xcbiAgICBwYWRkaW5nOiAxMCAxMDtcXG4gICAgbWFyZ2luOiAxMCAwIDAgMDsgfVxcblxcbi5nby1iYWNrIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXCIsIFwiXCJdKTtcblxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5zY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmZm9yPXIlMjBpbiUyMHJlc3VsdCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDViYTVlZDRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9pc21hZWxjL0RvY3VtZW50cy9lc3R1ZG9zL25hdGl2ZXNjcmlwdC92dWUvc3R1ZHlMb2dpblZ1ZVRTL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ1YmE1ZWQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ1YmE1ZWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ1YmE1ZWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmZvcj1yJTIwaW4lMjByZXN1bHQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDViYTVlZDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmZm9yPXIlMjBpbiUyMHJlc3VsdCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2Emc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NzQxMGYzYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2lzbWFlbGMvRG9jdW1lbnRzL2VzdHVkb3MvbmF0aXZlc2NyaXB0L3Z1ZS9zdHVkeUxvZ2luVnVlVFMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjc0MTBmM2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3NDEwZjNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VjdXJlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMjQ3YTUxMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZWN1cmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZWN1cmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwMjQ3YTUxMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2lzbWFlbGMvRG9jdW1lbnRzL2VzdHVkb3MvbmF0aXZlc2NyaXB0L3Z1ZS9zdHVkeUxvZ2luVnVlVFMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDI0N2E1MTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDI0N2E1MTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDI0N2E1MTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NlY3VyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDI0N2E1MTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDI0N2E1MTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvU2VjdXJlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VjdXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN1cmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlY3VyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDI0N2E1MTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgSVJFU1RDbGllbnRCdWlsZGVyIGZyb20gXCJAZnVzaW9uYXV0aC90eXBlc2NyaXB0LWNsaWVudC9idWlsZC9zcmMvSVJFU1RDbGllbnRCdWlsZGVyXCI7XG5pbXBvcnQgRGVmYXVsdFJFU1RDbGllbnROYXRpdmUgZnJvbSBcIkAvbGliL0RlZmF1bHRSRVNUQ2xpZW50TmF0aXZlXCI7XG5pbXBvcnQgSVJFU1RDbGllbnQgZnJvbSBcIkBmdXNpb25hdXRoL3R5cGVzY3JpcHQtY2xpZW50L2J1aWxkL3NyYy9JUkVTVENsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0UkVTVENsaWVudE5hdGl2ZUJ1aWxkZXIgaW1wbGVtZW50cyBJUkVTVENsaWVudEJ1aWxkZXJ7XG4gICAgYnVpbGQoaG9zdCk6IElSRVNUQ2xpZW50IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEZWZhdWx0UkVTVENsaWVudE5hdGl2ZShob3N0KTtcbiAgICB9XG59IiwiaW1wb3J0IENsaWVudFJlc3BvbnNlIGZyb20gXCJAZnVzaW9uYXV0aC90eXBlc2NyaXB0LWNsaWVudC9idWlsZC9zcmMvQ2xpZW50UmVzcG9uc2VcIjtcbmltcG9ydCB7SHR0cFJlc3BvbnNlLCByZXF1ZXN0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5pbXBvcnQgSVJFU1RDbGllbnQgZnJvbSBcIkBmdXNpb25hdXRoL3R5cGVzY3JpcHQtY2xpZW50L2J1aWxkL3NyYy9JUkVTVENsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0UkVTVENsaWVudE5hdGl2ZSBpbXBsZW1lbnRzIElSRVNUQ2xpZW50e1xuICAgIHB1YmxpYyBjcmVkZW50aWFsczogUmVxdWVzdENyZWRlbnRpYWxzO1xuICAgIHB1YmxpYyBoZWFkZXJzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9O1xuICAgIHB1YmxpYyBob3N0OiBzdHJpbmc7XG4gICAgcHVibGljIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH07XG4gICAgcHJvdGVjdGVkIHVyaTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBib2R5OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIG1ldGhvZDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IHN0cmluZykge1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0ge307XG5cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYXV0aG9yaXphdGlvbiBoZWFkZXIgdXNpbmcgYSBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHZhbHVlIG9mIHRoZSBhdXRob3JpemF0aW9uIGhlYWRlci5cbiAgICAgKiBAcmV0dXJucyB7RGVmYXVsdFJFU1RDbGllbnR9XG4gICAgICovXG4gICAgd2l0aEF1dGhvcml6YXRpb24oa2V5PzogYW55KTogSVJFU1RDbGllbnR7XG4gICAgICAgIGlmIChrZXkgPT09IG51bGwgfHwgdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2l0aEhlYWRlcignQXV0aG9yaXphdGlvbicsIGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc2VnbWVudCB0byB0aGUgcmVxdWVzdCB1cmlcbiAgICAgKi9cbiAgICB3aXRoVXJpU2VnbWVudChzZWdtZW50PzogYW55KTogSVJFU1RDbGllbnQge1xuICAgICAgICBpZiAoc2VnbWVudCA9PT0gbnVsbCB8fCBzZWdtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnVyaSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51cmkgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy51cmkuY2hhckF0KHRoaXMudXJpLmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICAgICAgICAgIHRoaXMudXJpICs9ICcvJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVyaSA9IHRoaXMudXJpICsgc2VnbWVudDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZnVsbCB1cmwgKyBwYXJhbWV0ZXIgbGlzdFxuICAgICAqL1xuICAgIGdldEZ1bGxVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdCArIHRoaXMudXJpICsgdGhpcy5nZXRRdWVyeVN0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgaGVhZGVyIHRvIHRoZSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSBUaGUgbmFtZSBvZiB0aGUgaGVhZGVyLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGhlYWRlci5cbiAgICAgKi9cbiAgICB3aXRoSGVhZGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSVJFU1RDbGllbnQge1xuICAgICAgICB0aGlzLmhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYm9keSBvZiB0aGUgY2xpZW50IHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgb2JqZWN0IHRvIGJlIHdyaXR0ZW4gdG8gdGhlIHJlcXVlc3QgYm9keSBhcyBKU09OLlxuICAgICAqL1xuICAgIHdpdGhKU09OQm9keShib2R5OiBvYmplY3QpOiBJUkVTVENsaWVudCB7XG4gICAgICAgIHRoaXMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgICB0aGlzLndpdGhIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIC8vIE9taXQgdGhlIENvbnRlbnQtTGVuZ3RoLCB0aGlzIGlzIHNldCBhdXRvLW1hZ2ljYWxseSBieSB0aGUgcmVxdWVzdCBsaWJyYXJ5XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBodHRwIG1ldGhvZCBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKi9cbiAgICB3aXRoTWV0aG9kKG1ldGhvZDogYW55KTogSVJFU1RDbGllbnQge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHVyaSBvZiB0aGUgcmVxdWVzdFxuICAgICAqL1xuICAgIHdpdGhVcmkodXJpOiBhbnkpOiBJUkVTVENsaWVudCB7XG4gICAgICAgIHRoaXMudXJpID0gdXJpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBwYXJhbWV0ZXJzIHRvIHRoZSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlci5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIsIG1heSBiZSBhIHN0cmluZywgb2JqZWN0IG9yIG51bWJlci5cbiAgICAgKi9cbiAgICB3aXRoUGFyYW1ldGVyKG5hbWU6IGFueSwgdmFsdWU6IGFueSk6IElSRVNUQ2xpZW50IHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSdW4gdGhlIHJlcXVlc3QgYW5kIHJldHVybiBhIHByb21pc2UuIFRoaXMgcHJvbWlzZSB3aWxsIHJlc29sdmUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bFxuICAgICAqIGFuZCByZWplY3Qgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGdvPFQ+KCk6IFByb21pc2U8Q2xpZW50UmVzcG9uc2U8VD4+IHtcbiAgICAgICAgbGV0IGNsaWVudFJlc3BvbnNlID0gbmV3IENsaWVudFJlc3BvbnNlPGFueT4oKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIHVybDogdGhpcy5nZXRGdWxsVXJsKCksXG4gICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5ib2R5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgOiBDbGllbnRSZXNwb25zZTxhbnk+ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50UmVzcG9uc2Uuc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFJlc3BvbnNlLnJlc3BvbnNlID0gcmVzcG9uc2UuY29udGVudC5yYXc7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7IC8vIFRyeSBwYXJzaW5nIGFzIGpzb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFJlc3BvbnNlLnJlc3BvbnNlID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xpZW50UmVzcG9uc2Uud2FzU3VjY2Vzc2Z1bCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoY2xpZW50UmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY2xpZW50UmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0sZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRSZXNwb25zZS5leGNlcHRpb24gPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNsaWVudFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRRdWVyeVN0cmluZygpOiBzdHJpbmcge1xuICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSAnJztcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMucGFyYW1ldGVycykge1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gKHF1ZXJ5U3RyaW5nLmxlbmd0aCA9PT0gMCkgPyAnPycgOiAnJic7XG4gICAgICAgICAgICBxdWVyeVN0cmluZyArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5wYXJhbWV0ZXJzW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICB9XG5cbiAgICB3aXRoQ3JlZGVudGlhbHModmFsdWU6IFwib21pdFwiIHwgXCJzYW1lLW9yaWdpblwiIHwgXCJpbmNsdWRlXCIpOiBJUkVTVENsaWVudCB7XG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBGdXNpb25BdXRoLCBBbGwgUmlnaHRzIFJlc2VydmVkXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWNcbiogbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgRGVmYXVsdFJFU1RDbGllbnROYXRpdmVCdWlsZGVyIGZyb20gXCJAL2xpYi9EZWFmYXVsdFJlc3RDbGllbnROYXRpdmVCdWlsZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1c2lvbkF1dGhDbGllbnROYXRpdmUge1xuICAgIHByaXZhdGUgYXBpS2V5OiBhbnk7XG4gICAgcHJpdmF0ZSBob3N0OiBhbnk7XG4gICAgcHJpdmF0ZSB0ZW5hbnRJZDogYW55O1xuICAgIHByaXZhdGUgY2xpZW50QnVpbGRlcjogRGVmYXVsdFJFU1RDbGllbnROYXRpdmVCdWlsZGVyO1xuICAgIGNyZWRlbnRpYWxzOiBSZXF1ZXN0Q3JlZGVudGlhbHM7XG4gICAgY29uc3RydWN0b3IoYXBpS2V5LCBob3N0LCB0ZW5hbnRJZD8pIHtcbiAgICAgICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMudGVuYW50SWQgPSB0ZW5hbnRJZDtcbiAgICAgICAgdGhpcy5jbGllbnRCdWlsZGVyID0gbmV3IERlZmF1bHRSRVNUQ2xpZW50TmF0aXZlQnVpbGRlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0ZW5hbnQgaWQsIHRoYXQgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgWC1GdXNpb25BdXRoLVRlbmFudElkIGhlYWRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gdGVuYW50SWQgVGhlIHZhbHVlIG9mIHRoZSBYLUZ1c2lvbkF1dGgtVGVuYW50SWQgaGVhZGVyLlxuICAgICAqIEByZXR1cm5zIHtGdXNpb25BdXRoQ2xpZW50fVxuICAgICAqL1xuICAgIHNldFRlbmFudElkKHRlbmFudElkKSB7XG4gICAgICAgIHRoaXMudGVuYW50SWQgPSB0ZW5hbnRJZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIGFuIGFjdGlvbiBvbiBhIHVzZXIuIFRoZSB1c2VyIGJlaW5nIGFjdGlvbmVkIGlzIGNhbGxlZCB0aGUgXCJhY3Rpb25lZVwiIGFuZCB0aGUgdXNlciB0YWtpbmcgdGhlIGFjdGlvbiBpcyBjYWxsZWQgdGhlXG4gICAgICogXCJhY3Rpb25lclwiLiBCb3RoIHVzZXIgaWRzIGFyZSByZXF1aXJlZC4gWW91IHBhc3MgdGhlIGFjdGlvbmVlJ3MgdXNlciBpZCBpbnRvIHRoZSBtZXRob2QgYW5kIHRoZSBhY3Rpb25lcidzIGlzIHB1dCBpbnRvIHRoZVxuICAgICAqIHJlcXVlc3Qgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbmVlVXNlcklkIFRoZSBhY3Rpb25lZSdzIHVzZXIgaWQuXG4gICAgICogQHBhcmFtIHtBY3Rpb25SZXF1ZXN0fSByZXF1ZXN0IFRoZSBhY3Rpb24gcmVxdWVzdCB0aGF0IGluY2x1ZGVzIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFjdGlvbiBiZWluZyB0YWtlbiBpbmNsdWRpbmdcbiAgICAgKiAgICB0aGUgaWQgb2YgdGhlIGFjdGlvbiwgYW55IG9wdGlvbnMgYW5kIHRoZSBkdXJhdGlvbiAoaWYgYXBwbGljYWJsZSkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QWN0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBhY3Rpb25Vc2VyKGFjdGlvbmVlVXNlcklkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvYWN0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhY3Rpb25lZVVzZXJJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSB1c2VyIHRvIGFuIGV4aXN0aW5nIGZhbWlseS4gVGhlIGZhbWlseSBpZCBtdXN0IGJlIHNwZWNpZmllZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmYW1pbHlJZCBUaGUgaWQgb2YgdGhlIGZhbWlseS5cbiAgICAgKiBAcGFyYW0ge0ZhbWlseVJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGRldGVybWluZSB3aGljaCB1c2VyIHRvIGFkZCB0byB0aGUgZmFtaWx5LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEZhbWlseVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgYWRkVXNlclRvRmFtaWx5KGZhbWlseUlkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvZmFtaWx5JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChmYW1pbHlJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FuY2VscyB0aGUgdXNlciBhY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uSWQgVGhlIGFjdGlvbiBpZCBvZiB0aGUgYWN0aW9uIHRvIGNhbmNlbC5cbiAgICAgKiBAcGFyYW0ge0FjdGlvblJlcXVlc3R9IHJlcXVlc3QgVGhlIGFjdGlvbiByZXF1ZXN0IHRoYXQgY29udGFpbnMgdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjYW5jZWxsYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QWN0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBjYW5jZWxBY3Rpb24oYWN0aW9uSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9hY3Rpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFjdGlvbklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIGEgdXNlcidzIHBhc3N3b3JkIHVzaW5nIHRoZSBjaGFuZ2UgcGFzc3dvcmQgSWQuIFRoaXMgdXN1YWxseSBvY2N1cnMgYWZ0ZXIgYW4gZW1haWwgaGFzIGJlZW4gc2VudCB0byB0aGUgdXNlclxuICAgICAqIGFuZCB0aGV5IGNsaWNrZWQgb24gYSBsaW5rIHRvIHJlc2V0IHRoZWlyIHBhc3N3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYW5nZVBhc3N3b3JkSWQgVGhlIGNoYW5nZSBwYXNzd29yZCBJZCB1c2VkIHRvIGZpbmQgdGhlIHVzZXIuIFRoaXMgdmFsdWUgaXMgZ2VuZXJhdGVkIGJ5IEZ1c2lvbkF1dGggb25jZSB0aGUgY2hhbmdlIHBhc3N3b3JkIHdvcmtmbG93IGhhcyBiZWVuIGluaXRpYXRlZC5cbiAgICAgKiBAcGFyYW0ge0NoYW5nZVBhc3N3b3JkUmVxdWVzdH0gcmVxdWVzdCBUaGUgY2hhbmdlIHBhc3N3b3JkIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY2hhbmdlIHRoZSBwYXNzd29yZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxDaGFuZ2VQYXNzd29yZFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY2hhbmdlUGFzc3dvcmQoY2hhbmdlUGFzc3dvcmRJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoY2hhbmdlUGFzc3dvcmRJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgYSB1c2VyJ3MgcGFzc3dvcmQgdXNpbmcgdGhlaXIgaWRlbnRpdHkgKGxvZ2luIGlkIGFuZCBwYXNzd29yZCkuIFVzaW5nIGEgbG9naW5JZCBpbnN0ZWFkIG9mIHRoZSBjaGFuZ2VQYXNzd29yZElkXG4gICAgICogYnlwYXNzZXMgdGhlIGVtYWlsIHZlcmlmaWNhdGlvbiBhbmQgYWxsb3dzIGEgcGFzc3dvcmQgdG8gYmUgY2hhbmdlZCBkaXJlY3RseSB3aXRob3V0IGZpcnN0IGNhbGxpbmcgdGhlICNmb3Jnb3RQYXNzd29yZFxuICAgICAqIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q2hhbmdlUGFzc3dvcmRSZXF1ZXN0fSByZXF1ZXN0IFRoZSBjaGFuZ2UgcGFzc3dvcmQgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjaGFuZ2UgdGhlIHBhc3N3b3JkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBjaGFuZ2VQYXNzd29yZEJ5SWRlbnRpdHkocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZCcpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29tbWVudCB0byB0aGUgdXNlcidzIGFjY291bnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1VzZXJDb21tZW50UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSB1c2VyIGNvbW1lbnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGNvbW1lbnRPblVzZXIocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2NvbW1lbnQnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBhcHBsaWNhdGlvbi4gWW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgYW4gSWQgZm9yIHRoZSBhcHBsaWNhdGlvbiwgaWYgbm90IHByb3ZpZGVkIG9uZSB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIChPcHRpb25hbCkgVGhlIElkIHRvIHVzZSBmb3IgdGhlIGFwcGxpY2F0aW9uLiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtBcHBsaWNhdGlvblJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgYXBwbGljYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QXBwbGljYXRpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZUFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJvbGUgZm9yIGFuIGFwcGxpY2F0aW9uLiBZb3UgbXVzdCBzcGVjaWZ5IHRoZSBpZCBvZiB0aGUgYXBwbGljYXRpb24geW91IGFyZSBjcmVhdGluZyB0aGUgcm9sZSBmb3IuXG4gICAgICogWW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgYW4gSWQgZm9yIHRoZSByb2xlIGluc2lkZSB0aGUgQXBwbGljYXRpb25Sb2xlIG9iamVjdCBpdHNlbGYsIGlmIG5vdCBwcm92aWRlZCBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgSWQgb2YgdGhlIGFwcGxpY2F0aW9uIHRvIGNyZWF0ZSB0aGUgcm9sZSBvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcm9sZUlkIChPcHRpb25hbCkgVGhlIElkIG9mIHRoZSByb2xlLiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtBcHBsaWNhdGlvblJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgYXBwbGljYXRpb24gcm9sZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBcHBsaWNhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlQXBwbGljYXRpb25Sb2xlKGFwcGxpY2F0aW9uSWQsIHJvbGVJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9hcHBsaWNhdGlvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoYXBwbGljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChcInJvbGVcIilcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChyb2xlSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGF1ZGl0IGxvZyB3aXRoIHRoZSBtZXNzYWdlIGFuZCB1c2VyIG5hbWUgKHVzdWFsbHkgYW4gZW1haWwpLiBBdWRpdCBsb2dzIHNob3VsZCBiZSB3cml0dGVuIGFueXRpbWUgeW91XG4gICAgICogbWFrZSBjaGFuZ2VzIHRvIHRoZSBGdXNpb25BdXRoIGRhdGFiYXNlLiBXaGVuIHVzaW5nIHRoZSBGdXNpb25BdXRoIEFwcCB3ZWIgaW50ZXJmYWNlLCBhbnkgY2hhbmdlcyBhcmUgYXV0b21hdGljYWxseVxuICAgICAqIHdyaXR0ZW4gdG8gdGhlIGF1ZGl0IGxvZy4gSG93ZXZlciwgaWYgeW91IGFyZSBhY2Nlc3NpbmcgdGhlIEFQSSwgeW91IG11c3Qgd3JpdGUgdGhlIGF1ZGl0IGxvZ3MgeW91cnNlbGYuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0F1ZGl0TG9nUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSBhdWRpdCBsb2cgZW50cnkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QXVkaXRMb2dSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZUF1ZGl0TG9nKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvc3lzdGVtL2F1ZGl0LWxvZycpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdXNlciBjb25zZW50IHR5cGUuIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGFuIElkIGZvciB0aGUgY29uc2VudCB0eXBlLCBpZiBub3QgcHJvdmlkZWQgb25lIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnNlbnRJZCAoT3B0aW9uYWwpIFRoZSBJZCBmb3IgdGhlIGNvbnNlbnQuIElmIG5vdCBwcm92aWRlZCBhIHNlY3VyZSByYW5kb20gVVVJRCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKiBAcGFyYW0ge0NvbnNlbnRSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjcmVhdGUgdGhlIGNvbnNlbnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8Q29uc2VudFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlQ29uc2VudChjb25zZW50SWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvY29uc2VudCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoY29uc2VudElkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbWFpbCB0ZW1wbGF0ZS4gWW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgYW4gSWQgZm9yIHRoZSB0ZW1wbGF0ZSwgaWYgbm90IHByb3ZpZGVkIG9uZSB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbFRlbXBsYXRlSWQgKE9wdGlvbmFsKSBUaGUgSWQgZm9yIHRoZSB0ZW1wbGF0ZS4gSWYgbm90IHByb3ZpZGVkIGEgc2VjdXJlIHJhbmRvbSBVVUlEIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqIEBwYXJhbSB7RW1haWxUZW1wbGF0ZVJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgZW1haWwgdGVtcGxhdGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8RW1haWxUZW1wbGF0ZVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlRW1haWxUZW1wbGF0ZShlbWFpbFRlbXBsYXRlSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvZW1haWwvdGVtcGxhdGUnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGVtYWlsVGVtcGxhdGVJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBmYW1pbHkgd2l0aCB0aGUgdXNlciBpZCBpbiB0aGUgcmVxdWVzdCBhcyB0aGUgb3duZXIgYW5kIHNvbGUgbWVtYmVyIG9mIHRoZSBmYW1pbHkuIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGFuIGlkIGZvciB0aGVcbiAgICAgKiBmYW1pbHksIGlmIG5vdCBwcm92aWRlZCBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmFtaWx5SWQgKE9wdGlvbmFsKSBUaGUgaWQgZm9yIHRoZSBmYW1pbHkuIElmIG5vdCBwcm92aWRlZCBhIHNlY3VyZSByYW5kb20gVVVJRCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKiBAcGFyYW0ge0ZhbWlseVJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgZmFtaWx5LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEZhbWlseVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlRmFtaWx5KGZhbWlseUlkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvZmFtaWx5JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChmYW1pbHlJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBncm91cC4gWW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgYW4gSWQgZm9yIHRoZSBncm91cCwgaWYgbm90IHByb3ZpZGVkIG9uZSB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkIChPcHRpb25hbCkgVGhlIElkIGZvciB0aGUgZ3JvdXAuIElmIG5vdCBwcm92aWRlZCBhIHNlY3VyZSByYW5kb20gVVVJRCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKiBAcGFyYW0ge0dyb3VwUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSBncm91cC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxHcm91cFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlR3JvdXAoZ3JvdXBJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9ncm91cCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoZ3JvdXBJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBtZW1iZXIgaW4gYSBncm91cC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWVtYmVyUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSBncm91cCBtZW1iZXIocykuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TWVtYmVyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBjcmVhdGVHcm91cE1lbWJlcnMocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9ncm91cC9tZW1iZXInKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpZGVudGl0eSBwcm92aWRlci4gWW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgYW4gSWQgZm9yIHRoZSBpZGVudGl0eSBwcm92aWRlciwgaWYgbm90IHByb3ZpZGVkIG9uZSB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZGVudGl0eVByb3ZpZGVySWQgKE9wdGlvbmFsKSBUaGUgSWQgb2YgdGhlIGlkZW50aXR5IHByb3ZpZGVyLiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtJZGVudGl0eVByb3ZpZGVyUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSBpZGVudGl0eSBwcm92aWRlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxJZGVudGl0eVByb3ZpZGVyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBjcmVhdGVJZGVudGl0eVByb3ZpZGVyKGlkZW50aXR5UHJvdmlkZXJJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9pZGVudGl0eS1wcm92aWRlcicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoaWRlbnRpdHlQcm92aWRlcklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIExhbWJkYS4gWW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgYW4gSWQgZm9yIHRoZSBsYW1iZGEsIGlmIG5vdCBwcm92aWRlZCBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFtYmRhSWQgKE9wdGlvbmFsKSBUaGUgSWQgZm9yIHRoZSBsYW1iZGEuIElmIG5vdCBwcm92aWRlZCBhIHNlY3VyZSByYW5kb20gVVVJRCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKiBAcGFyYW0ge0xhbWJkYVJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgbGFtYmRhLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPExhbWJkYVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlTGFtYmRhKGxhbWJkYUlkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2xhbWJkYScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQobGFtYmRhSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdGVuYW50LiBZb3UgY2FuIG9wdGlvbmFsbHkgc3BlY2lmeSBhbiBJZCBmb3IgdGhlIHRlbmFudCwgaWYgbm90IHByb3ZpZGVkIG9uZSB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW5hbnRJZCAoT3B0aW9uYWwpIFRoZSBJZCBmb3IgdGhlIHRlbmFudC4gSWYgbm90IHByb3ZpZGVkIGEgc2VjdXJlIHJhbmRvbSBVVUlEIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqIEBwYXJhbSB7VGVuYW50UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSB0ZW5hbnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VGVuYW50UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBjcmVhdGVUZW5hbnQodGVuYW50SWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdGVuYW50JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh0ZW5hbnRJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBUaGVtZS4gWW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgYW4gSWQgZm9yIHRoZSB0aGVtZSwgaWYgbm90IHByb3ZpZGVkIG9uZSB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aGVtZUlkIChPcHRpb25hbCkgVGhlIElkIGZvciB0aGUgdGhlbWUuIElmIG5vdCBwcm92aWRlZCBhIHNlY3VyZSByYW5kb20gVVVJRCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKiBAcGFyYW0ge1RoZW1lUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSB0aGVtZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxUaGVtZVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlVGhlbWUodGhlbWVJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS90aGVtZScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodGhlbWVJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB1c2VyLiBZb3UgY2FuIG9wdGlvbmFsbHkgc3BlY2lmeSBhbiBJZCBmb3IgdGhlIHVzZXIsIGlmIG5vdCBwcm92aWRlZCBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIChPcHRpb25hbCkgVGhlIElkIGZvciB0aGUgdXNlci4gSWYgbm90IHByb3ZpZGVkIGEgc2VjdXJlIHJhbmRvbSBVVUlEIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqIEBwYXJhbSB7VXNlclJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgdXNlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBjcmVhdGVVc2VyKHVzZXJJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VySWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdXNlciBhY3Rpb24uIFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB0YWtlbiBvbiBhIHVzZXIgdW50aWwgdGhpcyBjYWxsIHN1Y2Nlc3NmdWxseSByZXR1cm5zLiBBbnl0aW1lIGFmdGVyXG4gICAgICogdGhhdCB0aGUgdXNlciBhY3Rpb24gY2FuIGJlIGFwcGxpZWQgdG8gYW55IHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFjdGlvbklkIChPcHRpb25hbCkgVGhlIElkIGZvciB0aGUgdXNlciBhY3Rpb24uIElmIG5vdCBwcm92aWRlZCBhIHNlY3VyZSByYW5kb20gVVVJRCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKiBAcGFyYW0ge1VzZXJBY3Rpb25SZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjcmVhdGUgdGhlIHVzZXIgYWN0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJBY3Rpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZVVzZXJBY3Rpb24odXNlckFjdGlvbklkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXItYWN0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VyQWN0aW9uSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdXNlciByZWFzb24uIFRoaXMgdXNlciBhY3Rpb24gcmVhc29uIGNhbm5vdCBiZSB1c2VkIHdoZW4gYWN0aW9uaW5nIGEgdXNlciB1bnRpbCB0aGlzIGNhbGwgY29tcGxldGVzXG4gICAgICogc3VjY2Vzc2Z1bGx5LiBBbnl0aW1lIGFmdGVyIHRoYXQgdGhlIHVzZXIgYWN0aW9uIHJlYXNvbiBjYW4gYmUgdXNlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWN0aW9uUmVhc29uSWQgKE9wdGlvbmFsKSBUaGUgSWQgZm9yIHRoZSB1c2VyIGFjdGlvbiByZWFzb24uIElmIG5vdCBwcm92aWRlZCBhIHNlY3VyZSByYW5kb20gVVVJRCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKiBAcGFyYW0ge1VzZXJBY3Rpb25SZWFzb25SZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjcmVhdGUgdGhlIHVzZXIgYWN0aW9uIHJlYXNvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyQWN0aW9uUmVhc29uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBjcmVhdGVVc2VyQWN0aW9uUmVhc29uKHVzZXJBY3Rpb25SZWFzb25JZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyLWFjdGlvbi1yZWFzb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJBY3Rpb25SZWFzb25JZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzaW5nbGUgVXNlciBjb25zZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJDb25zZW50SWQgKE9wdGlvbmFsKSBUaGUgSWQgZm9yIHRoZSBVc2VyIGNvbnNlbnQuIElmIG5vdCBwcm92aWRlZCBhIHNlY3VyZSByYW5kb20gVVVJRCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKiBAcGFyYW0ge1VzZXJDb25zZW50UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIHRoZSB1c2VyIGNvbnNlbnQgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlckNvbnNlbnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZVVzZXJDb25zZW50KHVzZXJDb25zZW50SWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9jb25zZW50JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VyQ29uc2VudElkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdlYmhvb2suIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGFuIElkIGZvciB0aGUgd2ViaG9vaywgaWYgbm90IHByb3ZpZGVkIG9uZSB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB3ZWJob29rSWQgKE9wdGlvbmFsKSBUaGUgSWQgZm9yIHRoZSB3ZWJob29rLiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtXZWJob29rUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSB3ZWJob29rLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFdlYmhvb2tSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZVdlYmhvb2sod2ViaG9va0lkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3dlYmhvb2snKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHdlYmhvb2tJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlYWN0aXZhdGVzIHRoZSBhcHBsaWNhdGlvbiB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIFRoZSBJZCBvZiB0aGUgYXBwbGljYXRpb24gdG8gZGVhY3RpdmF0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgZGVhY3RpdmF0ZUFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlYWN0aXZhdGVzIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIHVzZXIgdG8gZGVhY3RpdmF0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgZGVhY3RpdmF0ZVVzZXIodXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXInKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVhY3RpdmF0ZXMgdGhlIHVzZXIgYWN0aW9uIHdpdGggdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJBY3Rpb25JZCBUaGUgSWQgb2YgdGhlIHVzZXIgYWN0aW9uIHRvIGRlYWN0aXZhdGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlYWN0aXZhdGVVc2VyQWN0aW9uKHVzZXJBY3Rpb25JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyLWFjdGlvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlckFjdGlvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlcyB0aGUgdXNlcnMgd2l0aCB0aGUgZ2l2ZW4gaWRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1c2VySWRzIFRoZSBpZHMgb2YgdGhlIHVzZXJzIHRvIGRlYWN0aXZhdGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlYWN0aXZhdGVVc2Vycyh1c2VySWRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvYnVsaycpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigndXNlcklkJywgdXNlcklkcylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFyZCBkZWxldGVzIGFuIGFwcGxpY2F0aW9uLiBUaGlzIGlzIGEgZGFuZ2Vyb3VzIG9wZXJhdGlvbiBhbmQgc2hvdWxkIG5vdCBiZSB1c2VkIGluIG1vc3QgY2lyY3Vtc3RhbmNlcy4gVGhpcyB3aWxsXG4gICAgICogZGVsZXRlIHRoZSBhcHBsaWNhdGlvbiwgYW55IHJlZ2lzdHJhdGlvbnMgZm9yIHRoYXQgYXBwbGljYXRpb24sIG1ldHJpY3MgYW5kIHJlcG9ydHMgZm9yIHRoZSBhcHBsaWNhdGlvbiwgYWxsIHRoZVxuICAgICAqIHJvbGVzIGZvciB0aGUgYXBwbGljYXRpb24sIGFuZCBhbnkgb3RoZXIgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIGFwcGxpY2F0aW9uLiBUaGlzIG9wZXJhdGlvbiBjb3VsZCB0YWtlIGEgdmVyeVxuICAgICAqIGxvbmcgdGltZSwgZGVwZW5kaW5nIG9uIHRoZSBhbW91bnQgb2YgZGF0YSBpbiB5b3VyIGRhdGFiYXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgVGhlIElkIG9mIHRoZSBhcHBsaWNhdGlvbiB0byBkZWxldGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZUFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignaGFyZERlbGV0ZScsIHRydWUpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhcmQgZGVsZXRlcyBhbiBhcHBsaWNhdGlvbiByb2xlLiBUaGlzIGlzIGEgZGFuZ2Vyb3VzIG9wZXJhdGlvbiBhbmQgc2hvdWxkIG5vdCBiZSB1c2VkIGluIG1vc3QgY2lyY3Vtc3RhbmNlcy4gVGhpc1xuICAgICAqIHBlcm1hbmVudGx5IHJlbW92ZXMgdGhlIGdpdmVuIHJvbGUgZnJvbSBhbGwgdXNlcnMgdGhhdCBoYWQgaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgSWQgb2YgdGhlIGFwcGxpY2F0aW9uIHRvIGRlYWN0aXZhdGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJvbGVJZCBUaGUgSWQgb2YgdGhlIHJvbGUgdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVBcHBsaWNhdGlvblJvbGUoYXBwbGljYXRpb25JZCwgcm9sZUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KFwicm9sZVwiKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHJvbGVJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgY29uc2VudCBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnNlbnRJZCBUaGUgSWQgb2YgdGhlIGNvbnNlbnQgdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVDb25zZW50KGNvbnNlbnRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9jb25zZW50JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChjb25zZW50SWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgdGhlIGVtYWlsIHRlbXBsYXRlIGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWxUZW1wbGF0ZUlkIFRoZSBJZCBvZiB0aGUgZW1haWwgdGVtcGxhdGUgdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVFbWFpbFRlbXBsYXRlKGVtYWlsVGVtcGxhdGVJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9lbWFpbC90ZW1wbGF0ZScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoZW1haWxUZW1wbGF0ZUlkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSBncm91cCBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWQgVGhlIElkIG9mIHRoZSBncm91cCB0byBkZWxldGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZUdyb3VwKGdyb3VwSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvZ3JvdXAnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGdyb3VwSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdXNlcnMgYXMgbWVtYmVycyBvZiBhIGdyb3VwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNZW1iZXJEZWxldGVSZXF1ZXN0fSByZXF1ZXN0IFRoZSBtZW1iZXIgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byByZW1vdmUgbWVtYmVycyB0byB0aGUgZ3JvdXAuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZUdyb3VwTWVtYmVycyhyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2dyb3VwL21lbWJlcicpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgdGhlIGlkZW50aXR5IHByb3ZpZGVyIGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWRlbnRpdHlQcm92aWRlcklkIFRoZSBJZCBvZiB0aGUgaWRlbnRpdHkgcHJvdmlkZXIgdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVJZGVudGl0eVByb3ZpZGVyKGlkZW50aXR5UHJvdmlkZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9pZGVudGl0eS1wcm92aWRlcicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoaWRlbnRpdHlQcm92aWRlcklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSBrZXkgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlPZCBUaGUgSWQgb2YgdGhlIGtleSB0byBkZWxldGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZUtleShrZXlPZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9rZXknKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGtleU9kKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSBsYW1iZGEgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW1iZGFJZCBUaGUgSWQgb2YgdGhlIGxhbWJkYSB0byBkZWxldGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZUxhbWJkYShsYW1iZGFJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9sYW1iZGEnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGxhbWJkYUlkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSB1c2VyIHJlZ2lzdHJhdGlvbiBmb3IgdGhlIGdpdmVuIHVzZXIgYW5kIGFwcGxpY2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIHVzZXIgd2hvc2UgcmVnaXN0cmF0aW9uIGlzIGJlaW5nIGRlbGV0ZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgVGhlIElkIG9mIHRoZSBhcHBsaWNhdGlvbiB0byByZW1vdmUgdGhlIHJlZ2lzdHJhdGlvbiBmb3IuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZVJlZ2lzdHJhdGlvbih1c2VySWQsIGFwcGxpY2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9yZWdpc3RyYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSB0ZW5hbnQgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW5hbnRJZCBUaGUgSWQgb2YgdGhlIHRlbmFudCB0byBkZWxldGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZVRlbmFudCh0ZW5hbnRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS90ZW5hbnQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHRlbmFudElkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSB0aGVtZSBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lSWQgVGhlIElkIG9mIHRoZSB0aGVtZSB0byBkZWxldGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZVRoZW1lKHRoZW1lSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdGhlbWUnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHRoZW1lSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgdGhlIHVzZXIgZm9yIHRoZSBnaXZlbiBJZC4gVGhpcyBwZXJtYW5lbnRseSBkZWxldGVzIGFsbCBpbmZvcm1hdGlvbiwgbWV0cmljcywgcmVwb3J0cyBhbmQgZGF0YSBhc3NvY2lhdGVkXG4gICAgICogd2l0aCB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyIHRvIGRlbGV0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgZGVsZXRlVXNlcih1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlcicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlcklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2hhcmREZWxldGUnLCB0cnVlKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSB1c2VyIGFjdGlvbiBmb3IgdGhlIGdpdmVuIElkLiBUaGlzIHBlcm1hbmVudGx5IGRlbGV0ZXMgdGhlIHVzZXIgYWN0aW9uIGFuZCBhbHNvIGFueSBoaXN0b3J5IGFuZCBsb2dzIG9mXG4gICAgICogdGhlIGFjdGlvbiBiZWluZyBhcHBsaWVkIHRvIGFueSB1c2Vycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWN0aW9uSWQgVGhlIElkIG9mIHRoZSB1c2VyIGFjdGlvbiB0byBkZWxldGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZVVzZXJBY3Rpb24odXNlckFjdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXItYWN0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VyQWN0aW9uSWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignaGFyZERlbGV0ZScsIHRydWUpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgdGhlIHVzZXIgYWN0aW9uIHJlYXNvbiBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJBY3Rpb25SZWFzb25JZCBUaGUgSWQgb2YgdGhlIHVzZXIgYWN0aW9uIHJlYXNvbiB0byBkZWxldGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZVVzZXJBY3Rpb25SZWFzb24odXNlckFjdGlvblJlYXNvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXItYWN0aW9uLXJlYXNvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlckFjdGlvblJlYXNvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSB1c2VycyB3aXRoIHRoZSBnaXZlbiBpZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1VzZXJEZWxldGVSZXF1ZXN0fSByZXF1ZXN0IFRoZSBpZHMgb2YgdGhlIHVzZXJzIHRvIGRlbGV0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgZGVsZXRlVXNlcnMocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2J1bGsnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSB3ZWJob29rIGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2ViaG9va0lkIFRoZSBJZCBvZiB0aGUgd2ViaG9vayB0byBkZWxldGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZVdlYmhvb2sod2ViaG9va0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3dlYmhvb2snKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHdlYmhvb2tJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBUd28gRmFjdG9yIGF1dGhlbnRpY2F0aW9uIGZvciBhIHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgVXNlciBmb3Igd2hpY2ggeW91J3JlIGRpc2FibGluZyBUd28gRmFjdG9yIGF1dGhlbnRpY2F0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIFRoZSBUd28gRmFjdG9yIGNvZGUgdXNlZCB2ZXJpZnkgdGhlIHRoZSBjYWxsZXIga25vd3MgdGhlIFR3byBGYWN0b3Igc2VjcmV0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkaXNhYmxlVHdvRmFjdG9yKHVzZXJJZCwgY29kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3R3by1mYWN0b3InKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJJZCcsIHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdjb2RlJywgY29kZSlcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5hYmxlIFR3byBGYWN0b3IgYXV0aGVudGljYXRpb24gZm9yIGEgdXNlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyIHRvIGVuYWJsZSBUd28gRmFjdG9yIGF1dGhlbnRpY2F0aW9uLlxuICAgICAqIEBwYXJhbSB7VHdvRmFjdG9yUmVxdWVzdH0gcmVxdWVzdCBUaGUgdHdvIGZhY3RvciBlbmFibGUgcmVxdWVzdCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgZW5hYmxlVHdvRmFjdG9yKHVzZXJJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3R3by1mYWN0b3InKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4Y2hhbmdlIGEgcmVmcmVzaCB0b2tlbiBmb3IgYSBuZXcgSldULlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWZyZXNoUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVmcmVzaCByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFJlZnJlc2hSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGV4Y2hhbmdlUmVmcmVzaFRva2VuRm9ySldUKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvand0L3JlZnJlc2gnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQmVnaW5zIHRoZSBmb3Jnb3QgcGFzc3dvcmQgc2VxdWVuY2UsIHdoaWNoIGtpY2tzIG9mZiBhbiBlbWFpbCB0byB0aGUgdXNlciBzbyB0aGF0IHRoZXkgY2FuIHJlc2V0IHRoZWlyIHBhc3N3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGb3Jnb3RQYXNzd29yZFJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXIgc28gdGhhdCB0aGV5IGNhbiBiZSBlbWFpbGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEZvcmdvdFBhc3N3b3JkUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBmb3Jnb3RQYXNzd29yZChyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvZm9yZ290LXBhc3N3b3JkJylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgbmV3IEVtYWlsIFZlcmlmaWNhdGlvbiBJZCB0byBiZSB1c2VkIHdpdGggdGhlIFZlcmlmeSBFbWFpbCBBUEkuIFRoaXMgQVBJIHdpbGwgbm90IGF0dGVtcHQgdG8gc2VuZCBhblxuICAgICAqIGVtYWlsIHRvIHRoZSBVc2VyLiBUaGlzIEFQSSBtYXkgYmUgdXNlZCB0byBjb2xsZWN0IHRoZSB2ZXJpZmljYXRpb25JZCBmb3IgdXNlIHdpdGggYSB0aGlyZCBwYXJ0eSBzeXN0ZW0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWwgVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgdGhhdCBuZWVkcyBhIG5ldyB2ZXJpZmljYXRpb24gZW1haWwuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VmVyaWZ5RW1haWxSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGdlbmVyYXRlRW1haWxWZXJpZmljYXRpb25JZChlbWFpbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3ZlcmlmeS1lbWFpbCcpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignZW1haWwnLCBlbWFpbClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdzZW5kVmVyaWZ5RW1haWwnLCBmYWxzZSlcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSBuZXcgUlNBIG9yIEVDIGtleSBwYWlyIG9yIGFuIEhNQUMgc2VjcmV0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleUlkIChPcHRpb25hbCkgVGhlIElkIGZvciB0aGUga2V5LiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtLZXlSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjcmVhdGUgdGhlIGtleS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxLZXlSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGdlbmVyYXRlS2V5KGtleUlkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2tleS9nZW5lcmF0ZScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoa2V5SWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhIG5ldyBBcHBsaWNhdGlvbiBSZWdpc3RyYXRpb24gVmVyaWZpY2F0aW9uIElkIHRvIGJlIHVzZWQgd2l0aCB0aGUgVmVyaWZ5IFJlZ2lzdHJhdGlvbiBBUEkuIFRoaXMgQVBJIHdpbGwgbm90IGF0dGVtcHQgdG8gc2VuZCBhblxuICAgICAqIGVtYWlsIHRvIHRoZSBVc2VyLiBUaGlzIEFQSSBtYXkgYmUgdXNlZCB0byBjb2xsZWN0IHRoZSB2ZXJpZmljYXRpb25JZCBmb3IgdXNlIHdpdGggYSB0aGlyZCBwYXJ0eSBzeXN0ZW0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWwgVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgdGhhdCBuZWVkcyBhIG5ldyB2ZXJpZmljYXRpb24gZW1haWwuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgVGhlIElkIG9mIHRoZSBhcHBsaWNhdGlvbiB0byBiZSB2ZXJpZmllZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxWZXJpZnlSZWdpc3RyYXRpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGdlbmVyYXRlUmVnaXN0cmF0aW9uVmVyaWZpY2F0aW9uSWQoZW1haWwsIGFwcGxpY2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci92ZXJpZnktcmVnaXN0cmF0aW9uJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdlbWFpbCcsIGVtYWlsKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3NlbmRWZXJpZnlQYXNzd29yZEVtYWlsJywgZmFsc2UpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignYXBwbGljYXRpb25JZCcsIGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgVHdvIEZhY3RvciBzZWNyZXQgdGhhdCBjYW4gYmUgdXNlZCB0byBlbmFibGUgVHdvIEZhY3RvciBhdXRoZW50aWNhdGlvbiBmb3IgYSBVc2VyLiBUaGUgcmVzcG9uc2Ugd2lsbCBjb250YWluXG4gICAgICogYm90aCB0aGUgc2VjcmV0IGFuZCBhIEJhc2UzMiBlbmNvZGVkIGZvcm0gb2YgdGhlIHNlY3JldCB3aGljaCBjYW4gYmUgc2hvd24gdG8gYSBVc2VyIHdoZW4gdXNpbmcgYSAyIFN0ZXAgQXV0aGVudGljYXRpb25cbiAgICAgKiBhcHBsaWNhdGlvbiBzdWNoIGFzIEdvb2dsZSBBdXRoZW50aWNhdG9yLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8U2VjcmV0UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVR3b0ZhY3RvclNlY3JldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdHdvLWZhY3Rvci9zZWNyZXQnKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhIFR3byBGYWN0b3Igc2VjcmV0IHRoYXQgY2FuIGJlIHVzZWQgdG8gZW5hYmxlIFR3byBGYWN0b3IgYXV0aGVudGljYXRpb24gZm9yIGEgVXNlci4gVGhlIHJlc3BvbnNlIHdpbGwgY29udGFpblxuICAgICAqIGJvdGggdGhlIHNlY3JldCBhbmQgYSBCYXNlMzIgZW5jb2RlZCBmb3JtIG9mIHRoZSBzZWNyZXQgd2hpY2ggY2FuIGJlIHNob3duIHRvIGEgVXNlciB3aGVuIHVzaW5nIGEgMiBTdGVwIEF1dGhlbnRpY2F0aW9uXG4gICAgICogYXBwbGljYXRpb24gc3VjaCBhcyBHb29nbGUgQXV0aGVudGljYXRvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmNvZGVkSldUIFRoZSBlbmNvZGVkIEpXVCAoYWNjZXNzIHRva2VuKS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxTZWNyZXRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGdlbmVyYXRlVHdvRmFjdG9yU2VjcmV0VXNpbmdKV1QoZW5jb2RlZEpXVCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS90d28tZmFjdG9yL3NlY3JldCcpXG4gICAgICAgICAgICAud2l0aEF1dGhvcml6YXRpb24oJ0pXVCAnICsgZW5jb2RlZEpXVClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBsb2dpbiB2aWEgdGhpcmQtcGFydGllcyBpbmNsdWRpbmcgU29jaWFsIGxvZ2luLCBleHRlcm5hbCBPQXV0aCBhbmQgT3BlbklEIENvbm5lY3QsIGFuZCBvdGhlclxuICAgICAqIGxvZ2luIHN5c3RlbXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5UHJvdmlkZXJMb2dpblJlcXVlc3R9IHJlcXVlc3QgVGhlIHRoaXJkLXBhcnR5IGxvZ2luIHJlcXVlc3QgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBmcm9tIHRoZSB0aGlyZC1wYXJ0eSBsb2dpblxuICAgICAqICAgIHByb3ZpZGVycyB0aGF0IEZ1c2lvbkF1dGggdXNlcyB0byByZWNvbmNpbGUgdGhlIHVzZXIncyBhY2NvdW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPExvZ2luUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBpZGVudGl0eVByb3ZpZGVyTG9naW4ocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9pZGVudGl0eS1wcm92aWRlci9sb2dpbicpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbXBvcnQgYW4gZXhpc3RpbmcgUlNBIG9yIEVDIGtleSBwYWlyIG9yIGFuIEhNQUMgc2VjcmV0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleUlkIChPcHRpb25hbCkgVGhlIElkIGZvciB0aGUga2V5LiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtLZXlSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjcmVhdGUgdGhlIGtleS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxLZXlSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGltcG9ydEtleShrZXlJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9rZXkvaW1wb3J0JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChrZXlJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1bGsgaW1wb3J0cyBtdWx0aXBsZSB1c2Vycy4gVGhpcyBkb2VzIHNvbWUgdmFsaWRhdGlvbiwgYnV0IHRoZW4gdHJpZXMgdG8gcnVuIGJhdGNoIGluc2VydHMgb2YgdXNlcnMuIFRoaXMgcmVkdWNlc1xuICAgICAqIGxhdGVuY3kgd2hlbiBpbnNlcnRpbmcgbG90cyBvZiB1c2Vycy4gVGhlcmVmb3JlLCB0aGUgZXJyb3IgcmVzcG9uc2UgbWlnaHQgY29udGFpbiBzb21lIGluZm9ybWF0aW9uIGFib3V0IGZhaWx1cmVzLFxuICAgICAqIGJ1dCBpdCB3aWxsIGxpa2VseSBiZSBwcmV0dHkgZ2VuZXJpYy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SW1wb3J0UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gYWJvdXQgYWxsIG9mIHRoZSB1c2VycyB0byBpbXBvcnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGltcG9ydFVzZXJzKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9pbXBvcnQnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSXNzdWUgYSBuZXcgYWNjZXNzIHRva2VuIChKV1QpIGZvciB0aGUgcmVxdWVzdGVkIEFwcGxpY2F0aW9uIGFmdGVyIGVuc3VyaW5nIHRoZSBwcm92aWRlZCBKV1QgaXMgdmFsaWQuIEEgdmFsaWRcbiAgICAgKiBhY2Nlc3MgdG9rZW4gaXMgcHJvcGVybHkgc2lnbmVkIGFuZCBub3QgZXhwaXJlZC5cbiAgICAgKiA8cD5cbiAgICAgKiBUaGlzIEFQSSBtYXkgYmUgdXNlZCBpbiBhbiBTU08gY29uZmlndXJhdGlvbiB0byBpc3N1ZSBuZXcgdG9rZW5zIGZvciBhbm90aGVyIGFwcGxpY2F0aW9uIGFmdGVyIHRoZSB1c2VyIGhhc1xuICAgICAqIG9idGFpbmVkIGEgdmFsaWQgdG9rZW4gZnJvbSBhdXRoZW50aWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIFRoZSBBcHBsaWNhdGlvbiBJZCBmb3Igd2hpY2ggeW91IGFyZSByZXF1ZXN0aW5nIGEgbmV3IGFjY2VzcyB0b2tlbiBiZSBpc3N1ZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVuY29kZWRKV1QgVGhlIGVuY29kZWQgSldUIChhY2Nlc3MgdG9rZW4pLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPElzc3VlUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBpc3N1ZUpXVChhcHBsaWNhdGlvbklkLCBlbmNvZGVkSldUKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2p3dC9pc3N1ZScpXG4gICAgICAgICAgICAud2l0aEF1dGhvcml6YXRpb24oJ0pXVCAnICsgZW5jb2RlZEpXVClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdhcHBsaWNhdGlvbklkJywgYXBwbGljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXV0aGVudGljYXRlcyBhIHVzZXIgdG8gRnVzaW9uQXV0aC5cbiAgICAgKlxuICAgICAqIFRoaXMgQVBJIG9wdGlvbmFsbHkgcmVxdWlyZXMgYW4gQVBJIGtleS4gU2VlIDxjb2RlPkFwcGxpY2F0aW9uLmxvZ2luQ29uZmlndXJhdGlvbi5yZXF1aXJlQXV0aGVudGljYXRpb248L2NvZGU+LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtMb2dpblJlcXVlc3R9IHJlcXVlc3QgVGhlIGxvZ2luIHJlcXVlc3QgdGhhdCBjb250YWlucyB0aGUgdXNlciBjcmVkZW50aWFscyB1c2VkIHRvIGxvZyB0aGVtIGluLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPExvZ2luUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBsb2dpbihyZXF1ZXN0KSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvbG9naW4nKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBwaW5nIHRvIEZ1c2lvbkF1dGggaW5kaWNhdGluZyB0aGF0IHRoZSB1c2VyIHdhcyBhdXRvbWF0aWNhbGx5IGxvZ2dlZCBpbnRvIGFuIGFwcGxpY2F0aW9uLiBXaGVuIHVzaW5nXG4gICAgICogRnVzaW9uQXV0aCdzIFNTTyBvciB5b3VyIG93biwgeW91IHNob3VsZCBjYWxsIHRoaXMgaWYgdGhlIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW4gY2VudHJhbGx5LCBidXQgYWNjZXNzZXMgYW5cbiAgICAgKiBhcHBsaWNhdGlvbiB3aGVyZSB0aGV5IG5vIGxvbmdlciBoYXZlIGEgc2Vzc2lvbi4gVGhpcyBoZWxwcyBjb3JyZWN0bHkgdHJhY2sgbG9naW4gY291bnRzLCB0aW1lcyBhbmQgaGVscHMgd2l0aFxuICAgICAqIHJlcG9ydGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyIHRoYXQgd2FzIGxvZ2dlZCBpbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgSWQgb2YgdGhlIGFwcGxpY2F0aW9uIHRoYXQgdGhleSBsb2dnZWQgaW50by5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbGVySVBBZGRyZXNzIChPcHRpb25hbCkgVGhlIElQIGFkZHJlc3Mgb2YgdGhlIGVuZC11c2VyIHRoYXQgaXMgbG9nZ2luZyBpbi4gSWYgYSBudWxsIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAgICogICAgdGhlIElQIGFkZHJlc3Mgd2lsbCBiZSB0aGF0IG9mIHRoZSBjbGllbnQgb3IgbGFzdCBwcm94eSB0aGF0IHNlbnQgdGhlIHJlcXVlc3QuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGxvZ2luUGluZyh1c2VySWQsIGFwcGxpY2F0aW9uSWQsIGNhbGxlcklQQWRkcmVzcykge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9sb2dpbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlcklkKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignaXBBZGRyZXNzJywgY2FsbGVySVBBZGRyZXNzKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgTG9nb3V0IEFQSSBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIHRvIHJlbW92ZSB0aGUgcmVmcmVzaCB0b2tlbiBhbmQgYWNjZXNzIHRva2VuIGNvb2tpZXMgaWYgdGhleSBleGlzdCBvbiB0aGVcbiAgICAgKiBjbGllbnQgYW5kIHJldm9rZSB0aGUgcmVmcmVzaCB0b2tlbiBzdG9yZWQuIFRoaXMgQVBJIGRvZXMgbm90aGluZyBpZiB0aGUgcmVxdWVzdCBkb2VzIG5vdCBjb250YWluIGFuIGFjY2Vzc1xuICAgICAqIHRva2VuIG9yIHJlZnJlc2ggdG9rZW4gY29va2llcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZ2xvYmFsIFdoZW4gdGhpcyB2YWx1ZSBpcyBzZXQgdG8gdHJ1ZSBhbGwgb2YgdGhlIHJlZnJlc2ggdG9rZW5zIGlzc3VlZCB0byB0aGUgb3duZXIgb2YgdGhlXG4gICAgICogICAgcHJvdmlkZWQgdG9rZW4gd2lsbCBiZSByZXZva2VkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWZyZXNoVG9rZW4gKE9wdGlvbmFsKSBUaGUgcmVmcmVzaF90b2tlbiBhcyBhIHJlcXVlc3QgcGFyYW1ldGVyIGluc3RlYWQgb2YgY29taW5nIGluIHZpYSBhIGNvb2tpZS5cbiAgICAgKiAgICBJZiBwcm92aWRlZCB0aGlzIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGUgY29va2llLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBsb2dvdXQoZ2xvYmFsLCByZWZyZXNoVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluJylcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2xvZ291dCcpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignZ2xvYmFsJywgZ2xvYmFsKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3JlZnJlc2hUb2tlbicsIHJlZnJlc2hUb2tlbilcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgaWRlbnRpdHkgcHJvdmlkZXIgZm9yIHRoZSBnaXZlbiBkb21haW4uIEEgMjAwIHJlc3BvbnNlIGNvZGUgaW5kaWNhdGVzIHRoZSBkb21haW4gaXMgbWFuYWdlZFxuICAgICAqIGJ5IGEgcmVnaXN0ZXJlZCBpZGVudGl0eSBwcm92aWRlci4gQSA0MDQgaW5kaWNhdGVzIHRoZSBkb21haW4gaXMgbm90IG1hbmFnZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gb3IgZW1haWwgYWRkcmVzcyB0byBsb29rdXAuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TG9va3VwUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBsb29rdXBJZGVudGl0eVByb3ZpZGVyKGRvbWFpbikge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9pZGVudGl0eS1wcm92aWRlci9sb29rdXAnKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2RvbWFpbicsIGRvbWFpbilcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgYSB0ZW1wb3JhbCB1c2VyIGFjdGlvbiBieSBjaGFuZ2luZyB0aGUgZXhwaXJhdGlvbiBvZiB0aGUgYWN0aW9uIGFuZCBvcHRpb25hbGx5IGFkZGluZyBhIGNvbW1lbnQgdG8gdGhlXG4gICAgICogYWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbklkIFRoZSBJZCBvZiB0aGUgYWN0aW9uIHRvIG1vZGlmeS4gVGhpcyBpcyB0ZWNobmljYWxseSB0aGUgdXNlciBhY3Rpb24gbG9nIGlkLlxuICAgICAqIEBwYXJhbSB7QWN0aW9uUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG1vZGlmaWNhdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBY3Rpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIG1vZGlmeUFjdGlvbihhY3Rpb25JZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2FjdGlvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoYWN0aW9uSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXBsZXRlIGEgbG9naW4gcmVxdWVzdCB1c2luZyBhIHBhc3N3b3JkbGVzcyBjb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Bhc3N3b3JkbGVzc0xvZ2luUmVxdWVzdH0gcmVxdWVzdCBUaGUgcGFzc3dvcmRsZXNzIGxvZ2luIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY29tcGxldGUgbG9naW4uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TG9naW5SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHBhc3N3b3JkbGVzc0xvZ2luKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvcGFzc3dvcmRsZXNzL2xvZ2luJylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWN0aXZhdGVzIHRoZSBhcHBsaWNhdGlvbiB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIFRoZSBJZCBvZiB0aGUgYXBwbGljYXRpb24gdG8gcmVhY3RpdmF0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBcHBsaWNhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmVhY3RpdmF0ZUFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigncmVhY3RpdmF0ZScsIHRydWUpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWN0aXZhdGVzIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIHVzZXIgdG8gcmVhY3RpdmF0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZWFjdGl2YXRlVXNlcih1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlcicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlcklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3JlYWN0aXZhdGUnLCB0cnVlKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFjdGl2YXRlcyB0aGUgdXNlciBhY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFjdGlvbklkIFRoZSBJZCBvZiB0aGUgdXNlciBhY3Rpb24gdG8gcmVhY3RpdmF0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyQWN0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZWFjdGl2YXRlVXNlckFjdGlvbih1c2VyQWN0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci1hY3Rpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJBY3Rpb25JZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdyZWFjdGl2YXRlJywgdHJ1ZSlcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVjb25jaWxlIGEgVXNlciB0byBGdXNpb25BdXRoIHVzaW5nIEpXVCBpc3N1ZWQgZnJvbSBhbm90aGVyIElkZW50aXR5IFByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJZGVudGl0eVByb3ZpZGVyTG9naW5SZXF1ZXN0fSByZXF1ZXN0IFRoZSByZWNvbmNpbGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIHRvIHJlY29uY2lsZSB0aGUgVXNlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxMb2dpblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmVjb25jaWxlSldUKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvand0L3JlY29uY2lsZScpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGEgcmVmcmVzaCBvZiB0aGUgVXNlciBzZWFyY2ggaW5kZXguIFRoaXMgQVBJIGlzIG5vdCBnZW5lcmFsbHkgbmVjZXNzYXJ5IGFuZCB0aGUgc2VhcmNoIGluZGV4IHdpbGwgYmVjb21lIGNvbnNpc3RlbnQgaW4gYVxuICAgICAqIHJlYXNvbmFibGUgYW1vdW50IG9mIHRpbWUuIFRoZXJlIG1heSBiZSBzY2VuYXJpb3Mgd2hlcmUgeW91IG1heSB3aXNoIHRvIG1hbnVhbGx5IHJlcXVlc3QgYW4gaW5kZXggcmVmcmVzaC4gT25lIGV4YW1wbGUgbWF5IGJlXG4gICAgICogaWYgeW91IGFyZSB1c2luZyB0aGUgU2VhcmNoIEFQSSBvciBEZWxldGUgVGVuYW50IEFQSSBpbW1lZGlhdGVseSBmb2xsb3dpbmcgYSBVc2VyIENyZWF0ZSBldGMsIHlvdSBtYXkgd2lzaCB0byByZXF1ZXN0IGEgcmVmcmVzaCB0b1xuICAgICAqICBlbnN1cmUgdGhlIGluZGV4IGltbWVkaWF0ZWx5IGN1cnJlbnQgYmVmb3JlIG1ha2luZyBhIHF1ZXJ5IHJlcXVlc3QgdG8gdGhlIHNlYXJjaCBpbmRleC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICByZWZyZXNoVXNlclNlYXJjaEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3NlYXJjaCcpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIHVzZXIgZm9yIGFuIGFwcGxpY2F0aW9uLiBJZiB5b3UgcHJvdmlkZSB0aGUgVXNlciBhbmQgdGhlIFVzZXJSZWdpc3RyYXRpb24gb2JqZWN0IG9uIHRoaXMgcmVxdWVzdCwgaXRcbiAgICAgKiB3aWxsIGNyZWF0ZSB0aGUgdXNlciBhcyB3ZWxsIGFzIHJlZ2lzdGVyIHRoZW0gZm9yIHRoZSBhcHBsaWNhdGlvbi4gVGhpcyBpcyBjYWxsZWQgYSBGdWxsIFJlZ2lzdHJhdGlvbi4gSG93ZXZlciwgaWZcbiAgICAgKiB5b3Ugb25seSBwcm92aWRlIHRoZSBVc2VyUmVnaXN0cmF0aW9uIG9iamVjdCwgdGhlbiB0aGUgdXNlciBtdXN0IGFscmVhZHkgZXhpc3QgYW5kIHRoZXkgd2lsbCBiZSByZWdpc3RlcmVkIGZvciB0aGVcbiAgICAgKiBhcHBsaWNhdGlvbi4gVGhlIHVzZXIgaWQgY2FuIGFsc28gYmUgcHJvdmlkZWQgYW5kIGl0IHdpbGwgZWl0aGVyIGJlIHVzZWQgdG8gbG9vayB1cCBhbiBleGlzdGluZyB1c2VyIG9yIGl0IHdpbGwgYmVcbiAgICAgKiB1c2VkIGZvciB0aGUgbmV3bHkgY3JlYXRlZCBVc2VyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCAoT3B0aW9uYWwpIFRoZSBJZCBvZiB0aGUgdXNlciBiZWluZyByZWdpc3RlcmVkIGZvciB0aGUgYXBwbGljYXRpb24gYW5kIG9wdGlvbmFsbHkgY3JlYXRlZC5cbiAgICAgKiBAcGFyYW0ge1JlZ2lzdHJhdGlvblJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBvcHRpb25hbGx5IGNvbnRhaW5zIHRoZSBVc2VyIGFuZCBtdXN0IGNvbnRhaW4gdGhlIFVzZXJSZWdpc3RyYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8UmVnaXN0cmF0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZWdpc3Rlcih1c2VySWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9yZWdpc3RyYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSB1c2VyIGZyb20gdGhlIGZhbWlseSB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmYW1pbHlJZCBUaGUgaWQgb2YgdGhlIGZhbWlseSB0byByZW1vdmUgdGhlIHVzZXIgZnJvbS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBpZCBvZiB0aGUgdXNlciB0byByZW1vdmUgZnJvbSB0aGUgZmFtaWx5LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICByZW1vdmVVc2VyRnJvbUZhbWlseShmYW1pbHlJZCwgdXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvZmFtaWx5JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChmYW1pbHlJZClcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VySWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlLXNlbmRzIHRoZSB2ZXJpZmljYXRpb24gZW1haWwgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWwgVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgdGhhdCBuZWVkcyBhIG5ldyB2ZXJpZmljYXRpb24gZW1haWwuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VmVyaWZ5RW1haWxSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJlc2VuZEVtYWlsVmVyaWZpY2F0aW9uKGVtYWlsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvdmVyaWZ5LWVtYWlsJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdlbWFpbCcsIGVtYWlsKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZS1zZW5kcyB0aGUgYXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHZlcmlmaWNhdGlvbiBlbWFpbCB0byB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgdXNlciB0aGF0IG5lZWRzIGEgbmV3IHZlcmlmaWNhdGlvbiBlbWFpbC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgSWQgb2YgdGhlIGFwcGxpY2F0aW9uIHRvIGJlIHZlcmlmaWVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFZlcmlmeVJlZ2lzdHJhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmVzZW5kUmVnaXN0cmF0aW9uVmVyaWZpY2F0aW9uKGVtYWlsLCBhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvdmVyaWZ5LXJlZ2lzdHJhdGlvbicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignZW1haWwnLCBlbWFpbClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdhcHBsaWNhdGlvbklkJywgYXBwbGljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGEgc2luZ2xlIGFjdGlvbiBsb2cgKHRoZSBsb2cgb2YgYSB1c2VyIGFjdGlvbiB0aGF0IHdhcyB0YWtlbiBvbiBhIHVzZXIgcHJldmlvdXNseSkgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25JZCBUaGUgSWQgb2YgdGhlIGFjdGlvbiB0byByZXRyaWV2ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBY3Rpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlQWN0aW9uKGFjdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvYWN0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhY3Rpb25JZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgYWN0aW9ucyBmb3IgdGhlIHVzZXIgd2l0aCB0aGUgZ2l2ZW4gSWQuIFRoaXMgd2lsbCByZXR1cm4gYWxsIHRpbWUgYmFzZWQgYWN0aW9ucyB0aGF0IGFyZSBhY3RpdmUsXG4gICAgICogYW5kIGluYWN0aXZlIGFzIHdlbGwgYXMgbm9uLXRpbWUgYmFzZWQgYWN0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyIHRvIGZldGNoIHRoZSBhY3Rpb25zIGZvci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBY3Rpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlQWN0aW9ucyh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9hY3Rpb24nKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJJZCcsIHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgYWN0aW9ucyBmb3IgdGhlIHVzZXIgd2l0aCB0aGUgZ2l2ZW4gSWQgdGhhdCBhcmUgY3VycmVudGx5IHByZXZlbnRpbmcgdGhlIFVzZXIgZnJvbSBsb2dnaW5nIGluLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIHVzZXIgdG8gZmV0Y2ggdGhlIGFjdGlvbnMgZm9yLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEFjdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVBY3Rpb25zUHJldmVudGluZ0xvZ2luKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2FjdGlvbicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigndXNlcklkJywgdXNlcklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3ByZXZlbnRpbmdMb2dpbicsIHRydWUpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGFjdGlvbnMgZm9yIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIElkIHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gICAgICogQW4gYWN0aXZlIGFjdGlvbiBtZWFucyBvbmUgdGhhdCBpcyB0aW1lIGJhc2VkIGFuZCBoYXMgbm90IGJlZW4gY2FuY2VsZWQsIGFuZCBoYXMgbm90IGVuZGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIHVzZXIgdG8gZmV0Y2ggdGhlIGFjdGlvbnMgZm9yLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEFjdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVBY3RpdmVBY3Rpb25zKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2FjdGlvbicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigndXNlcklkJywgdXNlcklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgYXBwbGljYXRpb24gZm9yIHRoZSBnaXZlbiBpZCBvciBhbGwgb2YgdGhlIGFwcGxpY2F0aW9ucyBpZiB0aGUgaWQgaXMgbnVsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIChPcHRpb25hbCkgVGhlIGFwcGxpY2F0aW9uIGlkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEFwcGxpY2F0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGFwcGxpY2F0aW9ucy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEFwcGxpY2F0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUFwcGxpY2F0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYSBzaW5nbGUgYXVkaXQgbG9nIGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYXVkaXRMb2dJZCBUaGUgSWQgb2YgdGhlIGF1ZGl0IGxvZyB0byByZXRyaWV2ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBdWRpdExvZ1Jlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVBdWRpdExvZyhhdWRpdExvZ0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3N5c3RlbS9hdWRpdC1sb2cnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGF1ZGl0TG9nSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgQ29uc2VudCBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnNlbnRJZCBUaGUgSWQgb2YgdGhlIGNvbnNlbnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8Q29uc2VudFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVDb25zZW50KGNvbnNlbnRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9jb25zZW50JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChjb25zZW50SWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGNvbnNlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxDb25zZW50UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUNvbnNlbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9jb25zZW50JylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBkYWlseSBhY3RpdmUgdXNlciByZXBvcnQgYmV0d2VlbiB0aGUgdHdvIGluc3RhbnRzLiBJZiB5b3Ugc3BlY2lmeSBhbiBhcHBsaWNhdGlvbiBpZCwgaXQgd2lsbCBvbmx5XG4gICAgICogcmV0dXJuIHRoZSBkYWlseSBhY3RpdmUgY291bnRzIGZvciB0aGF0IGFwcGxpY2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgKE9wdGlvbmFsKSBUaGUgYXBwbGljYXRpb24gaWQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBpbnN0YW50IGFzIFVUQyBtaWxsaXNlY29uZHMgc2luY2UgRXBvY2guXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgZW5kIGluc3RhbnQgYXMgVVRDIG1pbGxpc2Vjb25kcyBzaW5jZSBFcG9jaC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxEYWlseUFjdGl2ZVVzZXJSZXBvcnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlRGFpbHlBY3RpdmVSZXBvcnQoYXBwbGljYXRpb25JZCwgc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9yZXBvcnQvZGFpbHktYWN0aXZlLXVzZXInKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2FwcGxpY2F0aW9uSWQnLCBhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3N0YXJ0Jywgc3RhcnQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignZW5kJywgZW5kKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGVtYWlsIHRlbXBsYXRlIGZvciB0aGUgZ2l2ZW4gSWQuIElmIHlvdSBkb24ndCBzcGVjaWZ5IHRoZSBpZCwgdGhpcyB3aWxsIHJldHVybiBhbGwgb2YgdGhlIGVtYWlsIHRlbXBsYXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbFRlbXBsYXRlSWQgKE9wdGlvbmFsKSBUaGUgSWQgb2YgdGhlIGVtYWlsIHRlbXBsYXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEVtYWlsVGVtcGxhdGVSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlRW1haWxUZW1wbGF0ZShlbWFpbFRlbXBsYXRlSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvZW1haWwvdGVtcGxhdGUnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGVtYWlsVGVtcGxhdGVJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHByZXZpZXcgb2YgdGhlIGVtYWlsIHRlbXBsYXRlIHByb3ZpZGVkIGluIHRoZSByZXF1ZXN0LiBUaGlzIGFsbG93cyB5b3UgdG8gcHJldmlldyBhbiBlbWFpbCB0ZW1wbGF0ZSB0aGF0XG4gICAgICogaGFzbid0IGJlZW4gc2F2ZWQgdG8gdGhlIGRhdGFiYXNlIHlldC4gVGhlIGVudGlyZSBlbWFpbCB0ZW1wbGF0ZSBkb2VzIG5vdCBuZWVkIHRvIGJlIHByb3ZpZGVkIG9uIHRoZSByZXF1ZXN0LiBUaGlzXG4gICAgICogd2lsbCBjcmVhdGUgdGhlIHByZXZpZXcgYmFzZWQgb24gd2hhdGV2ZXIgaXMgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ByZXZpZXdSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgdGhlIGVtYWlsIHRlbXBsYXRlIGFuZCBvcHRpb25hbGx5IGEgbG9jYWxlIHRvIHJlbmRlciBpdCBpbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxQcmV2aWV3UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUVtYWlsVGVtcGxhdGVQcmV2aWV3KHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvZW1haWwvdGVtcGxhdGUvcHJldmlldycpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBlbWFpbCB0ZW1wbGF0ZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxFbWFpbFRlbXBsYXRlUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUVtYWlsVGVtcGxhdGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9lbWFpbC90ZW1wbGF0ZScpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIHNpbmdsZSBldmVudCBsb2cgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudExvZ0lkIFRoZSBJZCBvZiB0aGUgZXZlbnQgbG9nIHRvIHJldHJpZXZlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEV2ZW50TG9nUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUV2ZW50TG9nKGV2ZW50TG9nSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvc3lzdGVtL2V2ZW50LWxvZycpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoZXZlbnRMb2dJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgZmFtaWxpZXMgdGhhdCBhIHVzZXIgYmVsb25ncyB0by5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIFVzZXIncyBpZFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEZhbWlseVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVGYW1pbGllcyh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9mYW1pbHknKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJJZCcsIHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgbWVtYmVycyBvZiBhIGZhbWlseSBieSB0aGUgdW5pcXVlIEZhbWlseSBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmYW1pbHlJZCBUaGUgdW5pcXVlIElkIG9mIHRoZSBGYW1pbHkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8RmFtaWx5UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUZhbWlseU1lbWJlcnNCeUZhbWlseUlkKGZhbWlseUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvZmFtaWx5JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChmYW1pbHlJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBncm91cCBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWQgVGhlIElkIG9mIHRoZSBncm91cC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxHcm91cFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVHcm91cChncm91cElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2dyb3VwJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChncm91cElkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBncm91cHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxHcm91cFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVHcm91cHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2dyb3VwJylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBpZGVudGl0eSBwcm92aWRlciBmb3IgdGhlIGdpdmVuIGlkIG9yIGFsbCBvZiB0aGUgaWRlbnRpdHkgcHJvdmlkZXJzIGlmIHRoZSBpZCBpcyBudWxsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkZW50aXR5UHJvdmlkZXJJZCAoT3B0aW9uYWwpIFRoZSBpZGVudGl0eSBwcm92aWRlciBpZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxJZGVudGl0eVByb3ZpZGVyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUlkZW50aXR5UHJvdmlkZXIoaWRlbnRpdHlQcm92aWRlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2lkZW50aXR5LXByb3ZpZGVyJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChpZGVudGl0eVByb3ZpZGVySWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGlkZW50aXR5IHByb3ZpZGVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPElkZW50aXR5UHJvdmlkZXJSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlSWRlbnRpdHlQcm92aWRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2lkZW50aXR5LXByb3ZpZGVyJylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgYWN0aW9ucyBmb3IgdGhlIHVzZXIgd2l0aCB0aGUgZ2l2ZW4gSWQgdGhhdCBhcmUgY3VycmVudGx5IGluYWN0aXZlLlxuICAgICAqIEFuIGluYWN0aXZlIGFjdGlvbiBtZWFucyBvbmUgdGhhdCBpcyB0aW1lIGJhc2VkIGFuZCBoYXMgYmVlbiBjYW5jZWxlZCBvciBoYXMgZXhwaXJlZCwgb3IgaXMgbm90IHRpbWUgYmFzZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgdXNlciB0byBmZXRjaCB0aGUgYWN0aW9ucyBmb3IuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QWN0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUluYWN0aXZlQWN0aW9ucyh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9hY3Rpb24nKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJJZCcsIHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgYXBwbGljYXRpb25zIHRoYXQgYXJlIGN1cnJlbnRseSBpbmFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEFwcGxpY2F0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUluYWN0aXZlQXBwbGljYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9hcHBsaWNhdGlvbicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignaW5hY3RpdmUnLCB0cnVlKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSB1c2VyIGFjdGlvbnMgdGhhdCBhcmUgY3VycmVudGx5IGluYWN0aXZlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlckFjdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVJbmFjdGl2ZVVzZXJBY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyLWFjdGlvbicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignaW5hY3RpdmUnLCB0cnVlKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGF2YWlsYWJsZSBpbnRlZ3JhdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxJbnRlZ3JhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVJbnRlZ3JhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvaW50ZWdyYXRpb24nKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIFB1YmxpYyBLZXkgY29uZmlndXJlZCBmb3IgdmVyaWZ5aW5nIEpTT04gV2ViIFRva2VucyAoSldUKSBieSB0aGUga2V5IElkIChraWQpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleUlkIFRoZSBJZCBvZiB0aGUgcHVibGljIGtleSAoa2lkKS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxQdWJsaWNLZXlSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlSldUUHVibGljS2V5KGtleUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2p3dC9wdWJsaWMta2V5JylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdraWQnLCBrZXlJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBQdWJsaWMgS2V5IGNvbmZpZ3VyZWQgZm9yIHZlcmlmeWluZyB0aGUgSlNPTiBXZWIgVG9rZW5zIChKV1QpIGlzc3VlZCBieSB0aGUgTG9naW4gQVBJIGJ5IHRoZSBBcHBsaWNhdGlvbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIFRoZSBJZCBvZiB0aGUgQXBwbGljYXRpb24gZm9yIHdoaWNoIHRoaXMga2V5IGlzIHVzZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8UHVibGljS2V5UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUpXVFB1YmxpY0tleUJ5QXBwbGljYXRpb25JZChhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2p3dC9wdWJsaWMta2V5JylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdhcHBsaWNhdGlvbklkJywgYXBwbGljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBQdWJsaWMgS2V5cyBjb25maWd1cmVkIGZvciB2ZXJpZnlpbmcgSlNPTiBXZWIgVG9rZW5zIChKV1QpLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8UHVibGljS2V5UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUpXVFB1YmxpY0tleXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2p3dC9wdWJsaWMta2V5JylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBrZXkgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlJZCBUaGUgSWQgb2YgdGhlIGtleS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxLZXlSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlS2V5KGtleUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2tleScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoa2V5SWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGtleXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxLZXlSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlS2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkva2V5JylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBsYW1iZGEgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW1iZGFJZCBUaGUgSWQgb2YgdGhlIGxhbWJkYS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxMYW1iZGFSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlTGFtYmRhKGxhbWJkYUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2xhbWJkYScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQobGFtYmRhSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGxhbWJkYXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxMYW1iZGFSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlTGFtYmRhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvbGFtYmRhJylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgbGFtYmRhcyBmb3IgdGhlIHByb3ZpZGVkIHR5cGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0xhbWJkYVR5cGV9IHR5cGUgVGhlIHR5cGUgb2YgdGhlIGxhbWJkYSB0byByZXR1cm4uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TGFtYmRhUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUxhbWJkYXNCeVR5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9sYW1iZGEnKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3R5cGUnLCB0eXBlKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGxvZ2luIHJlcG9ydCBiZXR3ZWVuIHRoZSB0d28gaW5zdGFudHMuIElmIHlvdSBzcGVjaWZ5IGFuIGFwcGxpY2F0aW9uIGlkLCBpdCB3aWxsIG9ubHkgcmV0dXJuIHRoZVxuICAgICAqIGxvZ2luIGNvdW50cyBmb3IgdGhhdCBhcHBsaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIChPcHRpb25hbCkgVGhlIGFwcGxpY2F0aW9uIGlkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgaW5zdGFudCBhcyBVVEMgbWlsbGlzZWNvbmRzIHNpbmNlIEVwb2NoLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGVuZCBpbnN0YW50IGFzIFVUQyBtaWxsaXNlY29uZHMgc2luY2UgRXBvY2guXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TG9naW5SZXBvcnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlTG9naW5SZXBvcnQoYXBwbGljYXRpb25JZCwgc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9yZXBvcnQvbG9naW4nKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2FwcGxpY2F0aW9uSWQnLCBhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3N0YXJ0Jywgc3RhcnQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignZW5kJywgZW5kKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIG1vbnRobHkgYWN0aXZlIHVzZXIgcmVwb3J0IGJldHdlZW4gdGhlIHR3byBpbnN0YW50cy4gSWYgeW91IHNwZWNpZnkgYW4gYXBwbGljYXRpb24gaWQsIGl0IHdpbGwgb25seVxuICAgICAqIHJldHVybiB0aGUgbW9udGhseSBhY3RpdmUgY291bnRzIGZvciB0aGF0IGFwcGxpY2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgKE9wdGlvbmFsKSBUaGUgYXBwbGljYXRpb24gaWQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBpbnN0YW50IGFzIFVUQyBtaWxsaXNlY29uZHMgc2luY2UgRXBvY2guXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgZW5kIGluc3RhbnQgYXMgVVRDIG1pbGxpc2Vjb25kcyBzaW5jZSBFcG9jaC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxNb250aGx5QWN0aXZlVXNlclJlcG9ydFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVNb250aGx5QWN0aXZlUmVwb3J0KGFwcGxpY2F0aW9uSWQsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvcmVwb3J0L21vbnRobHktYWN0aXZlLXVzZXInKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2FwcGxpY2F0aW9uSWQnLCBhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3N0YXJ0Jywgc3RhcnQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignZW5kJywgZW5kKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIE9hdXRoMiBjb25maWd1cmF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24gZm9yIHRoZSBnaXZlbiBBcHBsaWNhdGlvbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIFRoZSBJZCBvZiB0aGUgQXBwbGljYXRpb24gdG8gcmV0cmlldmUgT0F1dGggY29uZmlndXJhdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxPQXV0aENvbmZpZ3VyYXRpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlT2F1dGhDb25maWd1cmF0aW9uKGFwcGxpY2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoXCJvYXV0aC1jb25maWd1cmF0aW9uXCIpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgcGFzc3dvcmQgdmFsaWRhdGlvbiBydWxlcyBmb3IgYSBzcGVjaWZpYyB0ZW5hbnQuIFRoaXMgbWV0aG9kIHJlcXVpcmVzIGEgdGVuYW50SWQgdG8gYmUgcHJvdmlkZWRcbiAgICAgKiB0aHJvdWdoIHRoZSB1c2Ugb2YgYSBUZW5hbnQgc2NvcGVkIEFQSSBrZXkgb3IgYW4gSFRUUCBoZWFkZXIgWC1GdXNpb25BdXRoLVRlbmFudElkIHRvIHNwZWNpZnkgdGhlIFRlbmFudCBJZC5cbiAgICAgKlxuICAgICAqIFRoaXMgQVBJIGRvZXMgbm90IHJlcXVpcmUgYW4gQVBJIGtleS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS90ZW5hbnQvcGFzc3dvcmQtdmFsaWRhdGlvbi1ydWxlcycpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgcGFzc3dvcmQgdmFsaWRhdGlvbiBydWxlcyBmb3IgYSBzcGVjaWZpYyB0ZW5hbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIEFQSSBkb2VzIG5vdCByZXF1aXJlIGFuIEFQSSBrZXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVuYW50SWQgVGhlIElkIG9mIHRoZSB0ZW5hbnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8UGFzc3dvcmRWYWxpZGF0aW9uUnVsZXNSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlUGFzc3dvcmRWYWxpZGF0aW9uUnVsZXNXaXRoVGVuYW50SWQodGVuYW50SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdGVuYW50L3Bhc3N3b3JkLXZhbGlkYXRpb24tcnVsZXMnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHRlbmFudElkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBjaGlsZHJlbiBmb3IgdGhlIGdpdmVuIHBhcmVudCBlbWFpbCBhZGRyZXNzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudEVtYWlsIFRoZSBlbWFpbCBvZiB0aGUgcGFyZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFBlbmRpbmdSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlUGVuZGluZ0NoaWxkcmVuKHBhcmVudEVtYWlsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvZmFtaWx5L3BlbmRpbmcnKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3BhcmVudEVtYWlsJywgcGFyZW50RW1haWwpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgbGFzdCBudW1iZXIgb2YgbG9naW4gcmVjb3Jkcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgVGhlIGluaXRpYWwgcmVjb3JkLiBlLmcuIDAgaXMgdGhlIGxhc3QgbG9naW4sIDEwMCB3aWxsIGJlIHRoZSAxMDB0aCBtb3N0IHJlY2VudCBsb2dpbi5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGltaXQgKE9wdGlvbmFsLCBkZWZhdWx0cyB0byAxMCkgVGhlIG51bWJlciBvZiByZWNvcmRzIHRvIHJldHJpZXZlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFJlY2VudExvZ2luUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVJlY2VudExvZ2lucyhvZmZzZXQsIGxpbWl0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvcmVjZW50LWxvZ2luJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdvZmZzZXQnLCBvZmZzZXQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignbGltaXQnLCBsaW1pdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSByZWZyZXNoIHRva2VucyB0aGF0IGJlbG9uZyB0byB0aGUgdXNlciB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFJlZnJlc2hSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlUmVmcmVzaFRva2Vucyh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvand0L3JlZnJlc2gnKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJJZCcsIHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB1c2VyIHJlZ2lzdHJhdGlvbiBmb3IgdGhlIHVzZXIgd2l0aCB0aGUgZ2l2ZW4gaWQgYW5kIHRoZSBnaXZlbiBhcHBsaWNhdGlvbiBpZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIFRoZSBJZCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8UmVnaXN0cmF0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVJlZ2lzdHJhdGlvbih1c2VySWQsIGFwcGxpY2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9yZWdpc3RyYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHJlZ2lzdHJhdGlvbiByZXBvcnQgYmV0d2VlbiB0aGUgdHdvIGluc3RhbnRzLiBJZiB5b3Ugc3BlY2lmeSBhbiBhcHBsaWNhdGlvbiBpZCwgaXQgd2lsbCBvbmx5IHJldHVyblxuICAgICAqIHRoZSByZWdpc3RyYXRpb24gY291bnRzIGZvciB0aGF0IGFwcGxpY2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgKE9wdGlvbmFsKSBUaGUgYXBwbGljYXRpb24gaWQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBpbnN0YW50IGFzIFVUQyBtaWxsaXNlY29uZHMgc2luY2UgRXBvY2guXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgZW5kIGluc3RhbnQgYXMgVVRDIG1pbGxpc2Vjb25kcyBzaW5jZSBFcG9jaC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxSZWdpc3RyYXRpb25SZXBvcnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlUmVnaXN0cmF0aW9uUmVwb3J0KGFwcGxpY2F0aW9uSWQsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvcmVwb3J0L3JlZ2lzdHJhdGlvbicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignYXBwbGljYXRpb25JZCcsIGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignc3RhcnQnLCBzdGFydClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdlbmQnLCBlbmQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgc3lzdGVtIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxTeXN0ZW1Db25maWd1cmF0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVN5c3RlbUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3N5c3RlbS1jb25maWd1cmF0aW9uJylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB0ZW5hbnQgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW5hbnRJZCBUaGUgSWQgb2YgdGhlIHRlbmFudC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxUZW5hbnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVGVuYW50KHRlbmFudElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3RlbmFudCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodGVuYW50SWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIHRlbmFudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxUZW5hbnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVGVuYW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdGVuYW50JylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB0aGVtZSBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lSWQgVGhlIElkIG9mIHRoZSB0aGVtZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxUaGVtZVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVUaGVtZSh0aGVtZUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3RoZW1lJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh0aGVtZUlkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSB0aGVtZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxUaGVtZVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVUaGVtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3RoZW1lJylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB0b3RhbHMgcmVwb3J0LiBUaGlzIGNvbnRhaW5zIGFsbCBvZiB0aGUgdG90YWwgY291bnRzIGZvciBlYWNoIGFwcGxpY2F0aW9uIGFuZCB0aGUgZ2xvYmFsIHJlZ2lzdHJhdGlvblxuICAgICAqIGNvdW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VG90YWxzUmVwb3J0UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVRvdGFsUmVwb3J0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9yZXBvcnQvdG90YWxzJylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB1c2VyIGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgdXNlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVVzZXIodXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXInKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB1c2VyIGFjdGlvbiBmb3IgdGhlIGdpdmVuIElkLiBJZiB5b3UgcGFzcyBpbiBudWxsIGZvciB0aGUgaWQsIHRoaXMgd2lsbCByZXR1cm4gYWxsIG9mIHRoZSB1c2VyXG4gICAgICogYWN0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWN0aW9uSWQgKE9wdGlvbmFsKSBUaGUgSWQgb2YgdGhlIHVzZXIgYWN0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJBY3Rpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVXNlckFjdGlvbih1c2VyQWN0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci1hY3Rpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJBY3Rpb25JZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB1c2VyIGFjdGlvbiByZWFzb24gZm9yIHRoZSBnaXZlbiBJZC4gSWYgeW91IHBhc3MgaW4gbnVsbCBmb3IgdGhlIGlkLCB0aGlzIHdpbGwgcmV0dXJuIGFsbCBvZiB0aGUgdXNlclxuICAgICAqIGFjdGlvbiByZWFzb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJBY3Rpb25SZWFzb25JZCAoT3B0aW9uYWwpIFRoZSBJZCBvZiB0aGUgdXNlciBhY3Rpb24gcmVhc29uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJBY3Rpb25SZWFzb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVXNlckFjdGlvblJlYXNvbih1c2VyQWN0aW9uUmVhc29uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci1hY3Rpb24tcmVhc29uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VyQWN0aW9uUmVhc29uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgdGhlIHVzZXIgYWN0aW9uIHJlYXNvbnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyQWN0aW9uUmVhc29uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVVzZXJBY3Rpb25SZWFzb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyLWFjdGlvbi1yZWFzb24nKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSB1c2VyIGFjdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyQWN0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVVzZXJBY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyLWFjdGlvbicpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdXNlciBieSBhIGNoYW5nZSBwYXNzd29yZCBJZC4gVGhlIGludGVuZGVkIHVzZSBvZiB0aGlzIEFQSSBpcyB0byByZXRyaWV2ZSBhIHVzZXIgYWZ0ZXIgdGhlIGZvcmdvdFxuICAgICAqIHBhc3N3b3JkIHdvcmtmbG93IGhhcyBiZWVuIGluaXRpYXRlZCBhbmQgeW91IG1heSBub3Qga25vdyB0aGUgdXNlcidzIGVtYWlsIG9yIHVzZXJuYW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYW5nZVBhc3N3b3JkSWQgVGhlIHVuaXF1ZSBjaGFuZ2UgcGFzc3dvcmQgSWQgdGhhdCB3YXMgc2VudCB2aWEgZW1haWwgb3IgcmV0dXJuZWQgYnkgdGhlIEZvcmdvdCBQYXNzd29yZCBBUEkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyQnlDaGFuZ2VQYXNzd29yZElkKGNoYW5nZVBhc3N3b3JkSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlcicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignY2hhbmdlUGFzc3dvcmRJZCcsIGNoYW5nZVBhc3N3b3JkSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdXNlciBmb3IgdGhlIGdpdmVuIGVtYWlsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIFRoZSBlbWFpbCBvZiB0aGUgdXNlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVVzZXJCeUVtYWlsKGVtYWlsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXInKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2VtYWlsJywgZW1haWwpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdXNlciBmb3IgdGhlIGxvZ2luSWQuIFRoZSBsb2dpbklkIGNhbiBiZSBlaXRoZXIgdGhlIHVzZXJuYW1lIG9yIHRoZSBlbWFpbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2dpbklkIFRoZSBlbWFpbCBvciB1c2VybmFtZSBvZiB0aGUgdXNlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVVzZXJCeUxvZ2luSWQobG9naW5JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdsb2dpbklkJywgbG9naW5JZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB1c2VyIGZvciB0aGUgZ2l2ZW4gdXNlcm5hbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lIG9mIHRoZSB1c2VyLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVXNlckJ5VXNlcm5hbWUodXNlcm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlcicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigndXNlcm5hbWUnLCB1c2VybmFtZSlcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB1c2VyIGJ5IGEgdmVyaWZpY2F0aW9uSWQuIFRoZSBpbnRlbmRlZCB1c2Ugb2YgdGhpcyBBUEkgaXMgdG8gcmV0cmlldmUgYSB1c2VyIGFmdGVyIHRoZSBmb3Jnb3RcbiAgICAgKiBwYXNzd29yZCB3b3JrZmxvdyBoYXMgYmVlbiBpbml0aWF0ZWQgYW5kIHlvdSBtYXkgbm90IGtub3cgdGhlIHVzZXIncyBlbWFpbCBvciB1c2VybmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJpZmljYXRpb25JZCBUaGUgdW5pcXVlIHZlcmlmaWNhdGlvbiBJZCB0aGF0IGhhcyBiZWVuIHNldCBvbiB0aGUgdXNlciBvYmplY3QuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyQnlWZXJpZmljYXRpb25JZCh2ZXJpZmljYXRpb25JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCd2ZXJpZmljYXRpb25JZCcsIHZlcmlmaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBjb21tZW50cyBmb3IgdGhlIHVzZXIgd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgdXNlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyQ29tbWVudFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyQ29tbWVudHModXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvY29tbWVudCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlcklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSBhIHNpbmdsZSBVc2VyIGNvbnNlbnQgYnkgSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckNvbnNlbnRJZCBUaGUgVXNlciBjb25zZW50IElkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlckNvbnNlbnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVXNlckNvbnNlbnQodXNlckNvbnNlbnRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2NvbnNlbnQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJDb25zZW50SWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGNvbnNlbnRzIGZvciBhIFVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBVc2VyJ3MgSWRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyQ29uc2VudFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyQ29uc2VudHModXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvY29uc2VudCcpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigndXNlcklkJywgdXNlcklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGxvZ2luIHJlcG9ydCBiZXR3ZWVuIHRoZSB0d28gaW5zdGFudHMgZm9yIGEgcGFydGljdWxhciB1c2VyIGJ5IElkLiBJZiB5b3Ugc3BlY2lmeSBhbiBhcHBsaWNhdGlvbiBpZCwgaXQgd2lsbCBvbmx5IHJldHVybiB0aGVcbiAgICAgKiBsb2dpbiBjb3VudHMgZm9yIHRoYXQgYXBwbGljYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCAoT3B0aW9uYWwpIFRoZSBhcHBsaWNhdGlvbiBpZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSB1c2VySWQgaWQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBpbnN0YW50IGFzIFVUQyBtaWxsaXNlY29uZHMgc2luY2UgRXBvY2guXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgZW5kIGluc3RhbnQgYXMgVVRDIG1pbGxpc2Vjb25kcyBzaW5jZSBFcG9jaC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxMb2dpblJlcG9ydFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyTG9naW5SZXBvcnQoYXBwbGljYXRpb25JZCwgdXNlcklkLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3JlcG9ydC9sb2dpbicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignYXBwbGljYXRpb25JZCcsIGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigndXNlcklkJywgdXNlcklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3N0YXJ0Jywgc3RhcnQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignZW5kJywgZW5kKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGxvZ2luIHJlcG9ydCBiZXR3ZWVuIHRoZSB0d28gaW5zdGFudHMgZm9yIGEgcGFydGljdWxhciB1c2VyIGJ5IGxvZ2luIElkLiBJZiB5b3Ugc3BlY2lmeSBhbiBhcHBsaWNhdGlvbiBpZCwgaXQgd2lsbCBvbmx5IHJldHVybiB0aGVcbiAgICAgKiBsb2dpbiBjb3VudHMgZm9yIHRoYXQgYXBwbGljYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCAoT3B0aW9uYWwpIFRoZSBhcHBsaWNhdGlvbiBpZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9naW5JZCBUaGUgdXNlcklkIGlkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgaW5zdGFudCBhcyBVVEMgbWlsbGlzZWNvbmRzIHNpbmNlIEVwb2NoLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGVuZCBpbnN0YW50IGFzIFVUQyBtaWxsaXNlY29uZHMgc2luY2UgRXBvY2guXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TG9naW5SZXBvcnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVXNlckxvZ2luUmVwb3J0QnlMb2dpbklkKGFwcGxpY2F0aW9uSWQsIGxvZ2luSWQsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvcmVwb3J0L2xvZ2luJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdhcHBsaWNhdGlvbklkJywgYXBwbGljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdsb2dpbklkJywgbG9naW5JZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdzdGFydCcsIHN0YXJ0KVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2VuZCcsIGVuZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBsYXN0IG51bWJlciBvZiBsb2dpbiByZWNvcmRzIGZvciBhIHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgdXNlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IFRoZSBpbml0aWFsIHJlY29yZC4gZS5nLiAwIGlzIHRoZSBsYXN0IGxvZ2luLCAxMDAgd2lsbCBiZSB0aGUgMTAwdGggbW9zdCByZWNlbnQgbG9naW4uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxpbWl0IChPcHRpb25hbCwgZGVmYXVsdHMgdG8gMTApIFRoZSBudW1iZXIgb2YgcmVjb3JkcyB0byByZXRyaWV2ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxSZWNlbnRMb2dpblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyUmVjZW50TG9naW5zKHVzZXJJZCwgb2Zmc2V0LCBsaW1pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3JlY2VudC1sb2dpbicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigndXNlcklkJywgdXNlcklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ29mZnNldCcsIG9mZnNldClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdsaW1pdCcsIGxpbWl0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHVzZXIgZm9yIHRoZSBnaXZlbiBJZC4gVGhpcyBtZXRob2QgZG9lcyBub3QgdXNlIGFuIEFQSSBrZXksIGluc3RlYWQgaXQgdXNlcyBhIEpTT04gV2ViIFRva2VuIChKV1QpIGZvciBhdXRoZW50aWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmNvZGVkSldUIFRoZSBlbmNvZGVkIEpXVCAoYWNjZXNzIHRva2VuKS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVVzZXJVc2luZ0pXVChlbmNvZGVkSldUKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXInKVxuICAgICAgICAgICAgLndpdGhBdXRob3JpemF0aW9uKCdKV1QgJyArIGVuY29kZWRKV1QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgd2ViaG9vayBmb3IgdGhlIGdpdmVuIElkLiBJZiB5b3UgcGFzcyBpbiBudWxsIGZvciB0aGUgaWQsIHRoaXMgd2lsbCByZXR1cm4gYWxsIHRoZSB3ZWJob29rcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB3ZWJob29rSWQgKE9wdGlvbmFsKSBUaGUgSWQgb2YgdGhlIHdlYmhvb2suXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8V2ViaG9va1Jlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVXZWJob29rKHdlYmhvb2tJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS93ZWJob29rJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh3ZWJob29rSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgdGhlIHdlYmhvb2tzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8V2ViaG9va1Jlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVXZWJob29rcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvd2ViaG9vaycpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldm9rZXMgYSBzaW5nbGUgcmVmcmVzaCB0b2tlbiwgYWxsIHRva2VucyBmb3IgYSB1c2VyIG9yIGFsbCB0b2tlbnMgZm9yIGFuIGFwcGxpY2F0aW9uLiBJZiB5b3UgcHJvdmlkZSBhIHVzZXIgaWRcbiAgICAgKiBhbmQgYW4gYXBwbGljYXRpb24gaWQsIHRoaXMgd2lsbCBkZWxldGUgYWxsIHRoZSByZWZyZXNoIHRva2VucyBmb3IgdGhhdCB1c2VyIGZvciB0aGF0IGFwcGxpY2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIChPcHRpb25hbCkgVGhlIHJlZnJlc2ggdG9rZW4gdG8gZGVsZXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgKE9wdGlvbmFsKSBUaGUgdXNlciBpZCB3aG9zZSB0b2tlbnMgdG8gZGVsZXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIChPcHRpb25hbCkgVGhlIGFwcGxpY2F0aW9uIGlkIG9mIHRoZSB0b2tlbnMgdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICByZXZva2VSZWZyZXNoVG9rZW4odG9rZW4sIHVzZXJJZCwgYXBwbGljYXRpb25JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9qd3QvcmVmcmVzaCcpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigndG9rZW4nLCB0b2tlbilcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCd1c2VySWQnLCB1c2VySWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignYXBwbGljYXRpb25JZCcsIGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldm9rZXMgYSBzaW5nbGUgVXNlciBjb25zZW50IGJ5IElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJDb25zZW50SWQgVGhlIFVzZXIgQ29uc2VudCBJZFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICByZXZva2VVc2VyQ29uc2VudCh1c2VyQ29uc2VudElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvY29uc2VudCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlckNvbnNlbnRJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VhcmNoZXMgdGhlIGF1ZGl0IGxvZ3Mgd2l0aCB0aGUgc3BlY2lmaWVkIGNyaXRlcmlhIGFuZCBwYWdpbmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBdWRpdExvZ1NlYXJjaFJlcXVlc3R9IHJlcXVlc3QgVGhlIHNlYXJjaCBjcml0ZXJpYSBhbmQgcGFnaW5hdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBdWRpdExvZ1NlYXJjaFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgc2VhcmNoQXVkaXRMb2dzKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvc3lzdGVtL2F1ZGl0LWxvZy9zZWFyY2gnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VhcmNoZXMgdGhlIGV2ZW50IGxvZ3Mgd2l0aCB0aGUgc3BlY2lmaWVkIGNyaXRlcmlhIGFuZCBwYWdpbmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudExvZ1NlYXJjaFJlcXVlc3R9IHJlcXVlc3QgVGhlIHNlYXJjaCBjcml0ZXJpYSBhbmQgcGFnaW5hdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxFdmVudExvZ1NlYXJjaFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgc2VhcmNoRXZlbnRMb2dzKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvc3lzdGVtL2V2ZW50LWxvZy9zZWFyY2gnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VhcmNoZXMgdGhlIGxvZ2luIHJlY29yZHMgd2l0aCB0aGUgc3BlY2lmaWVkIGNyaXRlcmlhIGFuZCBwYWdpbmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtMb2dpblJlY29yZFNlYXJjaFJlcXVlc3R9IHJlcXVlc3QgVGhlIHNlYXJjaCBjcml0ZXJpYSBhbmQgcGFnaW5hdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxMb2dpblJlY29yZFNlYXJjaFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgc2VhcmNoTG9naW5SZWNvcmRzKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvc3lzdGVtL2xvZ2luLXJlY29yZC9zZWFyY2gnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB1c2VycyBmb3IgdGhlIGdpdmVuIGlkcy4gSWYgYW55IGlkIGlzIGludmFsaWQsIGl0IGlzIGlnbm9yZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGlkcyBUaGUgdXNlciBpZHMgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxTZWFyY2hSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHNlYXJjaFVzZXJzKGlkcykge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3NlYXJjaCcpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignaWRzJywgaWRzKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHVzZXJzIGZvciB0aGUgZ2l2ZW4gc2VhcmNoIGNyaXRlcmlhIGFuZCBwYWdpbmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTZWFyY2hSZXF1ZXN0fSByZXF1ZXN0IFRoZSBzZWFyY2ggY3JpdGVyaWEgYW5kIHBhZ2luYXRpb24gY29uc3RyYWludHMuIEZpZWxkcyB1c2VkOiBxdWVyeVN0cmluZywgbnVtYmVyT2ZSZXN1bHRzLCBzdGFydFJvdyxcbiAgICAgKiAgICBhbmQgc29ydCBmaWVsZHMuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8U2VhcmNoUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBzZWFyY2hVc2Vyc0J5UXVlcnlTdHJpbmcocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3NlYXJjaCcpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kIGFuIGVtYWlsIHVzaW5nIGFuIGVtYWlsIHRlbXBsYXRlIGlkLiBZb3UgY2FuIG9wdGlvbmFsbHkgcHJvdmlkZSA8Y29kZT5yZXF1ZXN0RGF0YTwvY29kZT4gdG8gYWNjZXNzIGtleSB2YWx1ZVxuICAgICAqIHBhaXJzIGluIHRoZSBlbWFpbCB0ZW1wbGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbFRlbXBsYXRlSWQgVGhlIGlkIGZvciB0aGUgdGVtcGxhdGUuXG4gICAgICogQHBhcmFtIHtTZW5kUmVxdWVzdH0gcmVxdWVzdCBUaGUgc2VuZCBlbWFpbCByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIHNlbmQgdGhlIGVtYWlsLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFNlbmRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHNlbmRFbWFpbChlbWFpbFRlbXBsYXRlSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvZW1haWwvc2VuZCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoZW1haWxUZW1wbGF0ZUlkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgb3V0IGFuIGVtYWlsIHRvIGEgcGFyZW50IHRoYXQgdGhleSBuZWVkIHRvIHJlZ2lzdGVyIGFuZCBjcmVhdGUgYSBmYW1pbHkgb3IgbmVlZCB0byBsb2cgaW4gYW5kIGFkZCBhIGNoaWxkIHRvIHRoZWlyIGV4aXN0aW5nIGZhbWlseS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmFtaWx5RW1haWxSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBwYXJlbnQgZW1haWwuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIHNlbmRGYW1pbHlSZXF1ZXN0RW1haWwocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2ZhbWlseS9yZXF1ZXN0JylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmQgYSBwYXNzd29yZGxlc3MgYXV0aGVudGljYXRpb24gY29kZSBpbiBhbiBlbWFpbCB0byBjb21wbGV0ZSBsb2dpbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFzc3dvcmRsZXNzU2VuZFJlcXVlc3R9IHJlcXVlc3QgVGhlIHBhc3N3b3JkbGVzcyBzZW5kIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gc2VuZCBhbiBlbWFpbCBjb250YWluaW5nIGEgY29kZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgc2VuZFBhc3N3b3JkbGVzc0NvZGUocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9wYXNzd29yZGxlc3Mvc2VuZCcpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kIGEgVHdvIEZhY3RvciBhdXRoZW50aWNhdGlvbiBjb2RlIHRvIGFzc2lzdCBpbiBzZXR0aW5nIHVwIFR3byBGYWN0b3IgYXV0aGVudGljYXRpb24gb3IgZGlzYWJsaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUd29GYWN0b3JTZW5kUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gc2VuZCB0aGUgY29kZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgc2VuZFR3b0ZhY3RvckNvZGUocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS90d28tZmFjdG9yL3NlbmQnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBhIFR3byBGYWN0b3IgYXV0aGVudGljYXRpb24gY29kZSB0byBhbGxvdyB0aGUgY29tcGxldGlvbiBvZiBUd28gRmFjdG9yIGF1dGhlbnRpY2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR3b0ZhY3RvcklkIFRoZSBJZCByZXR1cm5lZCBieSB0aGUgTG9naW4gQVBJIG5lY2Vzc2FyeSB0byBjb21wbGV0ZSBUd28gRmFjdG9yIGF1dGhlbnRpY2F0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBzZW5kVHdvRmFjdG9yQ29kZUZvckxvZ2luKHR3b0ZhY3RvcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoSGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbicpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS90d28tZmFjdG9yL3NlbmQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHR3b0ZhY3RvcklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcGxldGUgbG9naW4gdXNpbmcgYSAyRkEgY2hhbGxlbmdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1R3b0ZhY3RvckxvZ2luUmVxdWVzdH0gcmVxdWVzdCBUaGUgbG9naW4gcmVxdWVzdCB0aGF0IGNvbnRhaW5zIHRoZSB1c2VyIGNyZWRlbnRpYWxzIHVzZWQgdG8gbG9nIHRoZW0gaW4uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TG9naW5SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHR3b0ZhY3RvckxvZ2luKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdHdvLWZhY3Rvci9sb2dpbicpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBhcHBsaWNhdGlvbiB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIFRoZSBJZCBvZiB0aGUgYXBwbGljYXRpb24gdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7QXBwbGljYXRpb25SZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBuZXcgYXBwbGljYXRpb24gaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QXBwbGljYXRpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZUFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGFwcGxpY2F0aW9uIHJvbGUgd2l0aCB0aGUgZ2l2ZW4gaWQgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIFRoZSBJZCBvZiB0aGUgYXBwbGljYXRpb24gdGhhdCB0aGUgcm9sZSBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByb2xlSWQgVGhlIElkIG9mIHRoZSByb2xlIHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0ge0FwcGxpY2F0aW9uUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IHJvbGUgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QXBwbGljYXRpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZUFwcGxpY2F0aW9uUm9sZShhcHBsaWNhdGlvbklkLCByb2xlSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoXCJyb2xlXCIpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQocm9sZUlkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjb25zZW50IHdpdGggdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnNlbnRJZCBUaGUgSWQgb2YgdGhlIGNvbnNlbnQgdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7Q29uc2VudFJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIG5ldyBjb25zZW50IGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPENvbnNlbnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZUNvbnNlbnQoY29uc2VudElkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2NvbnNlbnQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGNvbnNlbnRJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZW1haWwgdGVtcGxhdGUgd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWxUZW1wbGF0ZUlkIFRoZSBJZCBvZiB0aGUgZW1haWwgdGVtcGxhdGUgdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7RW1haWxUZW1wbGF0ZVJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIG5ldyBlbWFpbCB0ZW1wbGF0ZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxFbWFpbFRlbXBsYXRlUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVFbWFpbFRlbXBsYXRlKGVtYWlsVGVtcGxhdGVJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9lbWFpbC90ZW1wbGF0ZScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoZW1haWxUZW1wbGF0ZUlkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBncm91cCB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkIFRoZSBJZCBvZiB0aGUgZ3JvdXAgdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7R3JvdXBSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBuZXcgZ3JvdXAgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8R3JvdXBSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZUdyb3VwKGdyb3VwSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvZ3JvdXAnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGdyb3VwSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGlkZW50aXR5IHByb3ZpZGVyIHdpdGggdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkZW50aXR5UHJvdmlkZXJJZCBUaGUgSWQgb2YgdGhlIGlkZW50aXR5IHByb3ZpZGVyIHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5UHJvdmlkZXJSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSB1cGRhdGVkIGlkZW50aXR5IHByb3ZpZGVyLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPElkZW50aXR5UHJvdmlkZXJSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZUlkZW50aXR5UHJvdmlkZXIoaWRlbnRpdHlQcm92aWRlcklkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2lkZW50aXR5LXByb3ZpZGVyJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChpZGVudGl0eVByb3ZpZGVySWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGF2YWlsYWJsZSBpbnRlZ3JhdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ludGVncmF0aW9uUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IGludGVncmF0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEludGVncmF0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVJbnRlZ3JhdGlvbnMocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9pbnRlZ3JhdGlvbicpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGtleSB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlJZCBUaGUgSWQgb2YgdGhlIGtleSB0byB1cGRhdGUuXG4gICAgICogQHBhcmFtIHtLZXlSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBuZXcga2V5IGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEtleVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgdXBkYXRlS2V5KGtleUlkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2tleScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoa2V5SWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGxhbWJkYSB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW1iZGFJZCBUaGUgSWQgb2YgdGhlIGxhbWJkYSB0byB1cGRhdGUuXG4gICAgICogQHBhcmFtIHtMYW1iZGFSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBuZXcgbGFtYmRhIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPExhbWJkYVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgdXBkYXRlTGFtYmRhKGxhbWJkYUlkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2xhbWJkYScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQobGFtYmRhSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHJlZ2lzdHJhdGlvbiBmb3IgdGhlIHVzZXIgd2l0aCB0aGUgZ2l2ZW4gaWQgYW5kIHRoZSBhcHBsaWNhdGlvbiBkZWZpbmVkIGluIHRoZSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIHVzZXIgd2hvc2UgcmVnaXN0cmF0aW9uIGlzIGdvaW5nIHRvIGJlIHVwZGF0ZWQuXG4gICAgICogQHBhcmFtIHtSZWdpc3RyYXRpb25SZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBuZXcgcmVnaXN0cmF0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFJlZ2lzdHJhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgdXBkYXRlUmVnaXN0cmF0aW9uKHVzZXJJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3JlZ2lzdHJhdGlvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlcklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBzeXN0ZW0gY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3lzdGVtQ29uZmlndXJhdGlvblJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIG5ldyBzeXN0ZW0gY29uZmlndXJhdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxTeXN0ZW1Db25maWd1cmF0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVTeXN0ZW1Db25maWd1cmF0aW9uKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvc3lzdGVtLWNvbmZpZ3VyYXRpb24nKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSB0ZW5hbnQgd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVuYW50SWQgVGhlIElkIG9mIHRoZSB0ZW5hbnQgdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7VGVuYW50UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IHRlbmFudCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxUZW5hbnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZVRlbmFudCh0ZW5hbnRJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS90ZW5hbnQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHRlbmFudElkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSB0aGVtZSB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aGVtZUlkIFRoZSBJZCBvZiB0aGUgdGhlbWUgdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7VGhlbWVSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBuZXcgdGhlbWUgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VGhlbWVSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZVRoZW1lKHRoZW1lSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdGhlbWUnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHRoZW1lSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHVzZXIgd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgdXNlciB0byB1cGRhdGUuXG4gICAgICogQHBhcmFtIHtVc2VyUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IHVzZXIgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgdXBkYXRlVXNlcih1c2VySWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlcicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlcklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSB1c2VyIGFjdGlvbiB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWN0aW9uSWQgVGhlIElkIG9mIHRoZSB1c2VyIGFjdGlvbiB0byB1cGRhdGUuXG4gICAgICogQHBhcmFtIHtVc2VyQWN0aW9uUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IHVzZXIgYWN0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJBY3Rpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZVVzZXJBY3Rpb24odXNlckFjdGlvbklkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXItYWN0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VyQWN0aW9uSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHVzZXIgYWN0aW9uIHJlYXNvbiB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWN0aW9uUmVhc29uSWQgVGhlIElkIG9mIHRoZSB1c2VyIGFjdGlvbiByZWFzb24gdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7VXNlckFjdGlvblJlYXNvblJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIG5ldyB1c2VyIGFjdGlvbiByZWFzb24gaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlckFjdGlvblJlYXNvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgdXBkYXRlVXNlckFjdGlvblJlYXNvbih1c2VyQWN0aW9uUmVhc29uSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci1hY3Rpb24tcmVhc29uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VyQWN0aW9uUmVhc29uSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBzaW5nbGUgVXNlciBjb25zZW50IGJ5IElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJDb25zZW50SWQgVGhlIFVzZXIgQ29uc2VudCBJZFxuICAgICAqIEBwYXJhbSB7VXNlckNvbnNlbnRSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgdGhlIHVzZXIgY29uc2VudCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyQ29uc2VudFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgdXBkYXRlVXNlckNvbnNlbnQodXNlckNvbnNlbnRJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2NvbnNlbnQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJDb25zZW50SWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHdlYmhvb2sgd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2ViaG9va0lkIFRoZSBJZCBvZiB0aGUgd2ViaG9vayB0byB1cGRhdGUuXG4gICAgICogQHBhcmFtIHtXZWJob29rUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IHdlYmhvb2sgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8V2ViaG9va1Jlc3BvbnNlPj59XG4gICAgICovXG4gICAgdXBkYXRlV2ViaG9vayh3ZWJob29rSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvd2ViaG9vaycpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQod2ViaG9va0lkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIHByb3ZpZGVkIEpXVCAoZW5jb2RlZCBKV1Qgc3RyaW5nKSB0byBlbnN1cmUgdGhlIHRva2VuIGlzIHZhbGlkLiBBIHZhbGlkIGFjY2VzcyB0b2tlbiBpcyBwcm9wZXJseVxuICAgICAqIHNpZ25lZCBhbmQgbm90IGV4cGlyZWQuXG4gICAgICogPHA+XG4gICAgICogVGhpcyBBUEkgbWF5IGJlIHVzZWQgdG8gdmVyaWZ5IHRoZSBKV1QgYXMgd2VsbCBhcyBkZWNvZGUgdGhlIGVuY29kZWQgSldUIGludG8gaHVtYW4gcmVhZGFibGUgaWRlbnRpdHkgY2xhaW1zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVuY29kZWRKV1QgVGhlIGVuY29kZWQgSldUIChhY2Nlc3MgdG9rZW4pLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFZhbGlkYXRlUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB2YWxpZGF0ZUpXVChlbmNvZGVkSldUKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2p3dC92YWxpZGF0ZScpXG4gICAgICAgICAgICAud2l0aEF1dGhvcml6YXRpb24oJ0pXVCAnICsgZW5jb2RlZEpXVClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29uZmlybXMgYSBlbWFpbCB2ZXJpZmljYXRpb24uIFRoZSBJZCBnaXZlbiBpcyB1c3VhbGx5IGZyb20gYW4gZW1haWwgc2VudCB0byB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJpZmljYXRpb25JZCBUaGUgZW1haWwgdmVyaWZpY2F0aW9uIGlkIHNlbnQgdG8gdGhlIHVzZXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIHZlcmlmeUVtYWlsKHZlcmlmaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoSGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbicpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3ZlcmlmeS1lbWFpbCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodmVyaWZpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb25maXJtcyBhbiBhcHBsaWNhdGlvbiByZWdpc3RyYXRpb24uIFRoZSBJZCBnaXZlbiBpcyB1c3VhbGx5IGZyb20gYW4gZW1haWwgc2VudCB0byB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJpZmljYXRpb25JZCBUaGUgcmVnaXN0cmF0aW9uIHZlcmlmaWNhdGlvbiBJZCBzZW50IHRvIHRoZSB1c2VyLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICB2ZXJpZnlSZWdpc3RyYXRpb24odmVyaWZpY2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluJylcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvdmVyaWZ5LXJlZ2lzdHJhdGlvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodmVyaWZpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICogUHJpdmF0ZSBtZXRob2RzXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLyoqXG4gICAgICogY3JlYXRlcyBhIHJlc3QgY2xpZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7SVJlc3RDbGllbnR9IFRoZSBSRVNUQ2xpZW50IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNhbGwuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IGNsaWVudCA9IHRoaXMuY2xpZW50QnVpbGRlci5idWlsZCh0aGlzLmhvc3QpLndpdGhBdXRob3JpemF0aW9uKHRoaXMuYXBpS2V5KTtcbiAgICAgICAgaWYgKHRoaXMudGVuYW50SWQgIT09IG51bGwgJiYgdHlwZW9mICh0aGlzLnRlbmFudElkKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNsaWVudC53aXRoSGVhZGVyKCdYLUZ1c2lvbkF1dGgtVGVuYW50SWQnLCB0aGlzLnRlbmFudElkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jcmVkZW50aWFscyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGllbnQud2l0aENyZWRlbnRpYWxzKHRoaXMuY3JlZGVudGlhbHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxufVxuLyoqXG4gKiBBdmFpbGFibGUgSlNPTiBXZWIgQWxnb3JpdGhtcyAoSldBKSBhcyBkZXNjcmliZWQgaW4gUkZDIDc1MTggYXZhaWxhYmxlIGZvciB0aGlzIEpXVCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAYXV0aG9yIERhbmllbCBEZUdyb2ZmXG4gKi9cbnZhciBBbGdvcml0aG07XG4oZnVuY3Rpb24gKEFsZ29yaXRobSkge1xuICAgIEFsZ29yaXRobVtBbGdvcml0aG1bXCJFUzI1NlwiXSA9IDBdID0gXCJFUzI1NlwiO1xuICAgIEFsZ29yaXRobVtBbGdvcml0aG1bXCJFUzM4NFwiXSA9IDFdID0gXCJFUzM4NFwiO1xuICAgIEFsZ29yaXRobVtBbGdvcml0aG1bXCJFUzUxMlwiXSA9IDJdID0gXCJFUzUxMlwiO1xuICAgIEFsZ29yaXRobVtBbGdvcml0aG1bXCJIUzI1NlwiXSA9IDNdID0gXCJIUzI1NlwiO1xuICAgIEFsZ29yaXRobVtBbGdvcml0aG1bXCJIUzM4NFwiXSA9IDRdID0gXCJIUzM4NFwiO1xuICAgIEFsZ29yaXRobVtBbGdvcml0aG1bXCJIUzUxMlwiXSA9IDVdID0gXCJIUzUxMlwiO1xuICAgIEFsZ29yaXRobVtBbGdvcml0aG1bXCJSUzI1NlwiXSA9IDZdID0gXCJSUzI1NlwiO1xuICAgIEFsZ29yaXRobVtBbGdvcml0aG1bXCJSUzM4NFwiXSA9IDddID0gXCJSUzM4NFwiO1xuICAgIEFsZ29yaXRobVtBbGdvcml0aG1bXCJSUzUxMlwiXSA9IDhdID0gXCJSUzUxMlwiO1xuICAgIEFsZ29yaXRobVtBbGdvcml0aG1bXCJub25lXCJdID0gOV0gPSBcIm5vbmVcIjtcbn0pKEFsZ29yaXRobSA9IGV4cG9ydHMuQWxnb3JpdGhtIHx8IChleHBvcnRzLkFsZ29yaXRobSA9IHt9KSk7XG52YXIgQ2Fub25pY2FsaXphdGlvbk1ldGhvZDtcbihmdW5jdGlvbiAoQ2Fub25pY2FsaXphdGlvbk1ldGhvZCkge1xuICAgIENhbm9uaWNhbGl6YXRpb25NZXRob2RbQ2Fub25pY2FsaXphdGlvbk1ldGhvZFtcImV4Y2x1c2l2ZVwiXSA9IDBdID0gXCJleGNsdXNpdmVcIjtcbiAgICBDYW5vbmljYWxpemF0aW9uTWV0aG9kW0Nhbm9uaWNhbGl6YXRpb25NZXRob2RbXCJleGNsdXNpdmVfd2l0aF9jb21tZW50c1wiXSA9IDFdID0gXCJleGNsdXNpdmVfd2l0aF9jb21tZW50c1wiO1xuICAgIENhbm9uaWNhbGl6YXRpb25NZXRob2RbQ2Fub25pY2FsaXphdGlvbk1ldGhvZFtcImluY2x1c2l2ZVwiXSA9IDJdID0gXCJpbmNsdXNpdmVcIjtcbiAgICBDYW5vbmljYWxpemF0aW9uTWV0aG9kW0Nhbm9uaWNhbGl6YXRpb25NZXRob2RbXCJpbmNsdXNpdmVfd2l0aF9jb21tZW50c1wiXSA9IDNdID0gXCJpbmNsdXNpdmVfd2l0aF9jb21tZW50c1wiO1xufSkoQ2Fub25pY2FsaXphdGlvbk1ldGhvZCA9IGV4cG9ydHMuQ2Fub25pY2FsaXphdGlvbk1ldGhvZCB8fCAoZXhwb3J0cy5DYW5vbmljYWxpemF0aW9uTWV0aG9kID0ge30pKTtcbi8qKlxuICogTW9kZWxzIGEgY29uc2VudC5cbiAqXG4gKiBAYXV0aG9yIERhbmllbCBEZUdyb2ZmXG4gKi9cbnZhciBDb25zZW50U3RhdHVzO1xuKGZ1bmN0aW9uIChDb25zZW50U3RhdHVzKSB7XG4gICAgQ29uc2VudFN0YXR1c1tDb25zZW50U3RhdHVzW1wiQWN0aXZlXCJdID0gMF0gPSBcIkFjdGl2ZVwiO1xuICAgIENvbnNlbnRTdGF0dXNbQ29uc2VudFN0YXR1c1tcIlJldm9rZWRcIl0gPSAxXSA9IFwiUmV2b2tlZFwiO1xufSkoQ29uc2VudFN0YXR1cyA9IGV4cG9ydHMuQ29uc2VudFN0YXR1cyB8fCAoZXhwb3J0cy5Db25zZW50U3RhdHVzID0ge30pKTtcbi8qKlxuICogU3RhdHVzIGZvciBjb250ZW50IGxpa2UgdXNlcm5hbWVzLCBwcm9maWxlIGF0dHJpYnV0ZXMsIGV0Yy5cbiAqXG4gKiBAYXV0aG9yIEJyaWFuIFBvbnRhcmVsbGlcbiAqL1xudmFyIENvbnRlbnRTdGF0dXM7XG4oZnVuY3Rpb24gKENvbnRlbnRTdGF0dXMpIHtcbiAgICBDb250ZW50U3RhdHVzW0NvbnRlbnRTdGF0dXNbXCJBQ1RJVkVcIl0gPSAwXSA9IFwiQUNUSVZFXCI7XG4gICAgQ29udGVudFN0YXR1c1tDb250ZW50U3RhdHVzW1wiUEVORElOR1wiXSA9IDFdID0gXCJQRU5ESU5HXCI7XG4gICAgQ29udGVudFN0YXR1c1tDb250ZW50U3RhdHVzW1wiUkVKRUNURURcIl0gPSAyXSA9IFwiUkVKRUNURURcIjtcbn0pKENvbnRlbnRTdGF0dXMgPSBleHBvcnRzLkNvbnRlbnRTdGF0dXMgfHwgKGV4cG9ydHMuQ29udGVudFN0YXR1cyA9IHt9KSk7XG52YXIgRGV2aWNlVHlwZTtcbihmdW5jdGlvbiAoRGV2aWNlVHlwZSkge1xuICAgIERldmljZVR5cGVbRGV2aWNlVHlwZVtcIkJST1dTRVJcIl0gPSAwXSA9IFwiQlJPV1NFUlwiO1xuICAgIERldmljZVR5cGVbRGV2aWNlVHlwZVtcIkRFU0tUT1BcIl0gPSAxXSA9IFwiREVTS1RPUFwiO1xuICAgIERldmljZVR5cGVbRGV2aWNlVHlwZVtcIkxBUFRPUFwiXSA9IDJdID0gXCJMQVBUT1BcIjtcbiAgICBEZXZpY2VUeXBlW0RldmljZVR5cGVbXCJNT0JJTEVcIl0gPSAzXSA9IFwiTU9CSUxFXCI7XG4gICAgRGV2aWNlVHlwZVtEZXZpY2VUeXBlW1wiT1RIRVJcIl0gPSA0XSA9IFwiT1RIRVJcIjtcbiAgICBEZXZpY2VUeXBlW0RldmljZVR5cGVbXCJTRVJWRVJcIl0gPSA1XSA9IFwiU0VSVkVSXCI7XG4gICAgRGV2aWNlVHlwZVtEZXZpY2VUeXBlW1wiVEFCTEVUXCJdID0gNl0gPSBcIlRBQkxFVFwiO1xuICAgIERldmljZVR5cGVbRGV2aWNlVHlwZVtcIlRWXCJdID0gN10gPSBcIlRWXCI7XG4gICAgRGV2aWNlVHlwZVtEZXZpY2VUeXBlW1wiVU5LTk9XTlwiXSA9IDhdID0gXCJVTktOT1dOXCI7XG59KShEZXZpY2VUeXBlID0gZXhwb3J0cy5EZXZpY2VUeXBlIHx8IChleHBvcnRzLkRldmljZVR5cGUgPSB7fSkpO1xudmFyIEVtYWlsU2VjdXJpdHlUeXBlO1xuKGZ1bmN0aW9uIChFbWFpbFNlY3VyaXR5VHlwZSkge1xuICAgIEVtYWlsU2VjdXJpdHlUeXBlW0VtYWlsU2VjdXJpdHlUeXBlW1wiTk9ORVwiXSA9IDBdID0gXCJOT05FXCI7XG4gICAgRW1haWxTZWN1cml0eVR5cGVbRW1haWxTZWN1cml0eVR5cGVbXCJTU0xcIl0gPSAxXSA9IFwiU1NMXCI7XG4gICAgRW1haWxTZWN1cml0eVR5cGVbRW1haWxTZWN1cml0eVR5cGVbXCJUTFNcIl0gPSAyXSA9IFwiVExTXCI7XG59KShFbWFpbFNlY3VyaXR5VHlwZSA9IGV4cG9ydHMuRW1haWxTZWN1cml0eVR5cGUgfHwgKGV4cG9ydHMuRW1haWxTZWN1cml0eVR5cGUgPSB7fSkpO1xuLyoqXG4gKiBFdmVudCBMb2cgVHlwZVxuICpcbiAqIEBhdXRob3IgRGFuaWVsIERlR3JvZmZcbiAqL1xudmFyIEV2ZW50TG9nVHlwZTtcbihmdW5jdGlvbiAoRXZlbnRMb2dUeXBlKSB7XG4gICAgRXZlbnRMb2dUeXBlW0V2ZW50TG9nVHlwZVtcIkluZm9ybWF0aW9uXCJdID0gMF0gPSBcIkluZm9ybWF0aW9uXCI7XG4gICAgRXZlbnRMb2dUeXBlW0V2ZW50TG9nVHlwZVtcIkRlYnVnXCJdID0gMV0gPSBcIkRlYnVnXCI7XG4gICAgRXZlbnRMb2dUeXBlW0V2ZW50TG9nVHlwZVtcIkVycm9yXCJdID0gMl0gPSBcIkVycm9yXCI7XG59KShFdmVudExvZ1R5cGUgPSBleHBvcnRzLkV2ZW50TG9nVHlwZSB8fCAoZXhwb3J0cy5FdmVudExvZ1R5cGUgPSB7fSkpO1xuLyoqXG4gKiBNb2RlbHMgdGhlIGV2ZW50IHR5cGVzIHRoYXQgRnVzaW9uQXV0aCBwcm9kdWNlcy5cbiAqXG4gKiBAYXV0aG9yIEJyaWFuIFBvbnRhcmVsbGlcbiAqL1xudmFyIEV2ZW50VHlwZTtcbihmdW5jdGlvbiAoRXZlbnRUeXBlKSB7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJEZWxldGVcIl0gPSAwXSA9IFwiVXNlckRlbGV0ZVwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJVc2VyQ3JlYXRlXCJdID0gMV0gPSBcIlVzZXJDcmVhdGVcIjtcbiAgICBFdmVudFR5cGVbRXZlbnRUeXBlW1wiVXNlclVwZGF0ZVwiXSA9IDJdID0gXCJVc2VyVXBkYXRlXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJEZWFjdGl2YXRlXCJdID0gM10gPSBcIlVzZXJEZWFjdGl2YXRlXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJCdWxrQ3JlYXRlXCJdID0gNF0gPSBcIlVzZXJCdWxrQ3JlYXRlXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJSZWFjdGl2YXRlXCJdID0gNV0gPSBcIlVzZXJSZWFjdGl2YXRlXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJBY3Rpb25cIl0gPSA2XSA9IFwiVXNlckFjdGlvblwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJKV1RSZWZyZXNoVG9rZW5SZXZva2VcIl0gPSA3XSA9IFwiSldUUmVmcmVzaFRva2VuUmV2b2tlXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIkpXVFB1YmxpY0tleVVwZGF0ZVwiXSA9IDhdID0gXCJKV1RQdWJsaWNLZXlVcGRhdGVcIjtcbiAgICBFdmVudFR5cGVbRXZlbnRUeXBlW1wiVXNlckxvZ2luU3VjY2Vzc1wiXSA9IDldID0gXCJVc2VyTG9naW5TdWNjZXNzXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJMb2dpbkZhaWxlZFwiXSA9IDEwXSA9IFwiVXNlckxvZ2luRmFpbGVkXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJSZWdpc3RyYXRpb25DcmVhdGVcIl0gPSAxMV0gPSBcIlVzZXJSZWdpc3RyYXRpb25DcmVhdGVcIjtcbiAgICBFdmVudFR5cGVbRXZlbnRUeXBlW1wiVXNlclJlZ2lzdHJhdGlvblVwZGF0ZVwiXSA9IDEyXSA9IFwiVXNlclJlZ2lzdHJhdGlvblVwZGF0ZVwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJVc2VyUmVnaXN0cmF0aW9uRGVsZXRlXCJdID0gMTNdID0gXCJVc2VyUmVnaXN0cmF0aW9uRGVsZXRlXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJSZWdpc3RyYXRpb25WZXJpZmllZFwiXSA9IDE0XSA9IFwiVXNlclJlZ2lzdHJhdGlvblZlcmlmaWVkXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJFbWFpbFZlcmlmaWVkXCJdID0gMTVdID0gXCJVc2VyRW1haWxWZXJpZmllZFwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJUZXN0XCJdID0gMTZdID0gXCJUZXN0XCI7XG59KShFdmVudFR5cGUgPSBleHBvcnRzLkV2ZW50VHlwZSB8fCAoZXhwb3J0cy5FdmVudFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBAYXV0aG9yIEJyaWFuIFBvbnRhcmVsbGlcbiAqL1xudmFyIEV4cGlyeVVuaXQ7XG4oZnVuY3Rpb24gKEV4cGlyeVVuaXQpIHtcbiAgICBFeHBpcnlVbml0W0V4cGlyeVVuaXRbXCJNSU5VVEVTXCJdID0gMF0gPSBcIk1JTlVURVNcIjtcbiAgICBFeHBpcnlVbml0W0V4cGlyeVVuaXRbXCJIT1VSU1wiXSA9IDFdID0gXCJIT1VSU1wiO1xuICAgIEV4cGlyeVVuaXRbRXhwaXJ5VW5pdFtcIkRBWVNcIl0gPSAyXSA9IFwiREFZU1wiO1xuICAgIEV4cGlyeVVuaXRbRXhwaXJ5VW5pdFtcIldFRUtTXCJdID0gM10gPSBcIldFRUtTXCI7XG4gICAgRXhwaXJ5VW5pdFtFeHBpcnlVbml0W1wiTU9OVEhTXCJdID0gNF0gPSBcIk1PTlRIU1wiO1xuICAgIEV4cGlyeVVuaXRbRXhwaXJ5VW5pdFtcIllFQVJTXCJdID0gNV0gPSBcIllFQVJTXCI7XG59KShFeHBpcnlVbml0ID0gZXhwb3J0cy5FeHBpcnlVbml0IHx8IChleHBvcnRzLkV4cGlyeVVuaXQgPSB7fSkpO1xudmFyIEZhbWlseVJvbGU7XG4oZnVuY3Rpb24gKEZhbWlseVJvbGUpIHtcbiAgICBGYW1pbHlSb2xlW0ZhbWlseVJvbGVbXCJDaGlsZFwiXSA9IDBdID0gXCJDaGlsZFwiO1xuICAgIEZhbWlseVJvbGVbRmFtaWx5Um9sZVtcIlRlZW5cIl0gPSAxXSA9IFwiVGVlblwiO1xuICAgIEZhbWlseVJvbGVbRmFtaWx5Um9sZVtcIkFkdWx0XCJdID0gMl0gPSBcIkFkdWx0XCI7XG59KShGYW1pbHlSb2xlID0gZXhwb3J0cy5GYW1pbHlSb2xlIHx8IChleHBvcnRzLkZhbWlseVJvbGUgPSB7fSkpO1xuLyoqXG4gKiBBdXRob3JpemF0aW9uIEdyYW50IHR5cGVzIGFzIGRlZmluZWQgYnkgdGhlIDxhIGhyZWY9XCJodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OVwiPlRoZSBPQXV0aCAyLjAgQXV0aG9yaXphdGlvblxuICogRnJhbWV3b3JrIC0gUkZDIDY3NDk8L2E+LlxuICogPHA+XG4gKiBTcGVjaWZpYyBuYW1lcyBhcyBkZWZpbmVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzU5MSNzZWN0aW9uLTQuMVwiPlxuICogT0F1dGggMi4wIER5bmFtaWMgQ2xpZW50IFJlZ2lzdHJhdGlvbiBQcm90b2NvbCAtIFJGQyA3NTkxIFNlY3Rpb24gNC4xPC9hPlxuICpcbiAqIEBhdXRob3IgRGFuaWVsIERlR3JvZmZcbiAqL1xudmFyIEdyYW50VHlwZTtcbihmdW5jdGlvbiAoR3JhbnRUeXBlKSB7XG4gICAgR3JhbnRUeXBlW0dyYW50VHlwZVtcImF1dGhvcml6YXRpb25fY29kZVwiXSA9IDBdID0gXCJhdXRob3JpemF0aW9uX2NvZGVcIjtcbiAgICBHcmFudFR5cGVbR3JhbnRUeXBlW1wiaW1wbGljaXRcIl0gPSAxXSA9IFwiaW1wbGljaXRcIjtcbiAgICBHcmFudFR5cGVbR3JhbnRUeXBlW1wicGFzc3dvcmRcIl0gPSAyXSA9IFwicGFzc3dvcmRcIjtcbiAgICBHcmFudFR5cGVbR3JhbnRUeXBlW1wiY2xpZW50X2NyZWRlbnRpYWxzXCJdID0gM10gPSBcImNsaWVudF9jcmVkZW50aWFsc1wiO1xuICAgIEdyYW50VHlwZVtHcmFudFR5cGVbXCJyZWZyZXNoX3Rva2VuXCJdID0gNF0gPSBcInJlZnJlc2hfdG9rZW5cIjtcbiAgICBHcmFudFR5cGVbR3JhbnRUeXBlW1widW5rbm93blwiXSA9IDVdID0gXCJ1bmtub3duXCI7XG59KShHcmFudFR5cGUgPSBleHBvcnRzLkdyYW50VHlwZSB8fCAoZXhwb3J0cy5HcmFudFR5cGUgPSB7fSkpO1xudmFyIEhUVFBNZXRob2Q7XG4oZnVuY3Rpb24gKEhUVFBNZXRob2QpIHtcbiAgICBIVFRQTWV0aG9kW0hUVFBNZXRob2RbXCJHRVRcIl0gPSAwXSA9IFwiR0VUXCI7XG4gICAgSFRUUE1ldGhvZFtIVFRQTWV0aG9kW1wiUE9TVFwiXSA9IDFdID0gXCJQT1NUXCI7XG4gICAgSFRUUE1ldGhvZFtIVFRQTWV0aG9kW1wiUFVUXCJdID0gMl0gPSBcIlBVVFwiO1xuICAgIEhUVFBNZXRob2RbSFRUUE1ldGhvZFtcIkRFTEVURVwiXSA9IDNdID0gXCJERUxFVEVcIjtcbiAgICBIVFRQTWV0aG9kW0hUVFBNZXRob2RbXCJIRUFEXCJdID0gNF0gPSBcIkhFQURcIjtcbiAgICBIVFRQTWV0aG9kW0hUVFBNZXRob2RbXCJPUFRJT05TXCJdID0gNV0gPSBcIk9QVElPTlNcIjtcbn0pKEhUVFBNZXRob2QgPSBleHBvcnRzLkhUVFBNZXRob2QgfHwgKGV4cG9ydHMuSFRUUE1ldGhvZCA9IHt9KSk7XG52YXIgSWRlbnRpdHlQcm92aWRlclR5cGU7XG4oZnVuY3Rpb24gKElkZW50aXR5UHJvdmlkZXJUeXBlKSB7XG4gICAgSWRlbnRpdHlQcm92aWRlclR5cGVbSWRlbnRpdHlQcm92aWRlclR5cGVbXCJFeHRlcm5hbEpXVFwiXSA9IDBdID0gXCJFeHRlcm5hbEpXVFwiO1xuICAgIElkZW50aXR5UHJvdmlkZXJUeXBlW0lkZW50aXR5UHJvdmlkZXJUeXBlW1wiT3BlbklEQ29ubmVjdFwiXSA9IDFdID0gXCJPcGVuSURDb25uZWN0XCI7XG4gICAgSWRlbnRpdHlQcm92aWRlclR5cGVbSWRlbnRpdHlQcm92aWRlclR5cGVbXCJGYWNlYm9va1wiXSA9IDJdID0gXCJGYWNlYm9va1wiO1xuICAgIElkZW50aXR5UHJvdmlkZXJUeXBlW0lkZW50aXR5UHJvdmlkZXJUeXBlW1wiR29vZ2xlXCJdID0gM10gPSBcIkdvb2dsZVwiO1xuICAgIElkZW50aXR5UHJvdmlkZXJUeXBlW0lkZW50aXR5UHJvdmlkZXJUeXBlW1wiVHdpdHRlclwiXSA9IDRdID0gXCJUd2l0dGVyXCI7XG4gICAgSWRlbnRpdHlQcm92aWRlclR5cGVbSWRlbnRpdHlQcm92aWRlclR5cGVbXCJTQU1MdjJcIl0gPSA1XSA9IFwiU0FNTHYyXCI7XG59KShJZGVudGl0eVByb3ZpZGVyVHlwZSA9IGV4cG9ydHMuSWRlbnRpdHlQcm92aWRlclR5cGUgfHwgKGV4cG9ydHMuSWRlbnRpdHlQcm92aWRlclR5cGUgPSB7fSkpO1xudmFyIEtleUFsZ29yaXRobTtcbihmdW5jdGlvbiAoS2V5QWxnb3JpdGhtKSB7XG4gICAgS2V5QWxnb3JpdGhtW0tleUFsZ29yaXRobVtcIkVTMjU2XCJdID0gMF0gPSBcIkVTMjU2XCI7XG4gICAgS2V5QWxnb3JpdGhtW0tleUFsZ29yaXRobVtcIkVTMzg0XCJdID0gMV0gPSBcIkVTMzg0XCI7XG4gICAgS2V5QWxnb3JpdGhtW0tleUFsZ29yaXRobVtcIkVTNTEyXCJdID0gMl0gPSBcIkVTNTEyXCI7XG4gICAgS2V5QWxnb3JpdGhtW0tleUFsZ29yaXRobVtcIkhTMjU2XCJdID0gM10gPSBcIkhTMjU2XCI7XG4gICAgS2V5QWxnb3JpdGhtW0tleUFsZ29yaXRobVtcIkhTMzg0XCJdID0gNF0gPSBcIkhTMzg0XCI7XG4gICAgS2V5QWxnb3JpdGhtW0tleUFsZ29yaXRobVtcIkhTNTEyXCJdID0gNV0gPSBcIkhTNTEyXCI7XG4gICAgS2V5QWxnb3JpdGhtW0tleUFsZ29yaXRobVtcIlJTMjU2XCJdID0gNl0gPSBcIlJTMjU2XCI7XG4gICAgS2V5QWxnb3JpdGhtW0tleUFsZ29yaXRobVtcIlJTMzg0XCJdID0gN10gPSBcIlJTMzg0XCI7XG4gICAgS2V5QWxnb3JpdGhtW0tleUFsZ29yaXRobVtcIlJTNTEyXCJdID0gOF0gPSBcIlJTNTEyXCI7XG59KShLZXlBbGdvcml0aG0gPSBleHBvcnRzLktleUFsZ29yaXRobSB8fCAoZXhwb3J0cy5LZXlBbGdvcml0aG0gPSB7fSkpO1xudmFyIEtleVR5cGU7XG4oZnVuY3Rpb24gKEtleVR5cGUpIHtcbiAgICBLZXlUeXBlW0tleVR5cGVbXCJFQ1wiXSA9IDBdID0gXCJFQ1wiO1xuICAgIEtleVR5cGVbS2V5VHlwZVtcIlJTQVwiXSA9IDFdID0gXCJSU0FcIjtcbiAgICBLZXlUeXBlW0tleVR5cGVbXCJITUFDXCJdID0gMl0gPSBcIkhNQUNcIjtcbn0pKEtleVR5cGUgPSBleHBvcnRzLktleVR5cGUgfHwgKGV4cG9ydHMuS2V5VHlwZSA9IHt9KSk7XG4vKipcbiAqIFRoZSB0eXBlcyBvZiBsYW1iZGFzIHRoYXQgaW5kaWNhdGUgaG93IHRoZXkgYXJlIGludm9rZWQgYnkgRnVzaW9uQXV0aC5cbiAqXG4gKiBAYXV0aG9yIEJyaWFuIFBvbnRhcmVsbGlcbiAqL1xudmFyIExhbWJkYVR5cGU7XG4oZnVuY3Rpb24gKExhbWJkYVR5cGUpIHtcbiAgICBMYW1iZGFUeXBlW0xhbWJkYVR5cGVbXCJKV1RQb3B1bGF0ZVwiXSA9IDBdID0gXCJKV1RQb3B1bGF0ZVwiO1xuICAgIExhbWJkYVR5cGVbTGFtYmRhVHlwZVtcIk9wZW5JRFJlY29uY2lsZVwiXSA9IDFdID0gXCJPcGVuSURSZWNvbmNpbGVcIjtcbiAgICBMYW1iZGFUeXBlW0xhbWJkYVR5cGVbXCJTQU1MdjJSZWNvbmNpbGVcIl0gPSAyXSA9IFwiU0FNTHYyUmVjb25jaWxlXCI7XG4gICAgTGFtYmRhVHlwZVtMYW1iZGFUeXBlW1wiU0FNTHYyUG9wdWxhdGVcIl0gPSAzXSA9IFwiU0FNTHYyUG9wdWxhdGVcIjtcbn0pKExhbWJkYVR5cGUgPSBleHBvcnRzLkxhbWJkYVR5cGUgfHwgKGV4cG9ydHMuTGFtYmRhVHlwZSA9IHt9KSk7XG52YXIgTG9naW5JZFR5cGU7XG4oZnVuY3Rpb24gKExvZ2luSWRUeXBlKSB7XG4gICAgTG9naW5JZFR5cGVbTG9naW5JZFR5cGVbXCJlbWFpbFwiXSA9IDBdID0gXCJlbWFpbFwiO1xuICAgIExvZ2luSWRUeXBlW0xvZ2luSWRUeXBlW1widXNlcm5hbWVcIl0gPSAxXSA9IFwidXNlcm5hbWVcIjtcbn0pKExvZ2luSWRUeXBlID0gZXhwb3J0cy5Mb2dpbklkVHlwZSB8fCAoZXhwb3J0cy5Mb2dpbklkVHlwZSA9IHt9KSk7XG52YXIgT0F1dGhFcnJvclJlYXNvbjtcbihmdW5jdGlvbiAoT0F1dGhFcnJvclJlYXNvbikge1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImF1dGhfY29kZV9ub3RfZm91bmRcIl0gPSAwXSA9IFwiYXV0aF9jb2RlX25vdF9mb3VuZFwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImFjY2Vzc190b2tlbl9tYWxmb3JtZWRcIl0gPSAxXSA9IFwiYWNjZXNzX3Rva2VuX21hbGZvcm1lZFwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImFjY2Vzc190b2tlbl9leHBpcmVkXCJdID0gMl0gPSBcImFjY2Vzc190b2tlbl9leHBpcmVkXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wiYWNjZXNzX3Rva2VuX3VuYXZhaWxhYmxlX2Zvcl9wcm9jZXNzaW5nXCJdID0gM10gPSBcImFjY2Vzc190b2tlbl91bmF2YWlsYWJsZV9mb3JfcHJvY2Vzc2luZ1wiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImFjY2Vzc190b2tlbl9mYWlsZWRfcHJvY2Vzc2luZ1wiXSA9IDRdID0gXCJhY2Nlc3NfdG9rZW5fZmFpbGVkX3Byb2Nlc3NpbmdcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJyZWZyZXNoX3Rva2VuX25vdF9mb3VuZFwiXSA9IDVdID0gXCJyZWZyZXNoX3Rva2VuX25vdF9mb3VuZFwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImludmFsaWRfY2xpZW50X2lkXCJdID0gNl0gPSBcImludmFsaWRfY2xpZW50X2lkXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wiaW52YWxpZF91c2VyX2NyZWRlbnRpYWxzXCJdID0gN10gPSBcImludmFsaWRfdXNlcl9jcmVkZW50aWFsc1wiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImludmFsaWRfZ3JhbnRfdHlwZVwiXSA9IDhdID0gXCJpbnZhbGlkX2dyYW50X3R5cGVcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJpbnZhbGlkX29yaWdpblwiXSA9IDldID0gXCJpbnZhbGlkX29yaWdpblwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImludmFsaWRfcGtjZV9jb2RlX3ZlcmlmaWVyXCJdID0gMTBdID0gXCJpbnZhbGlkX3BrY2VfY29kZV92ZXJpZmllclwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImludmFsaWRfcGtjZV9jb2RlX2NoYWxsZW5nZVwiXSA9IDExXSA9IFwiaW52YWxpZF9wa2NlX2NvZGVfY2hhbGxlbmdlXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wiaW52YWxpZF9wa2NlX2NvZGVfY2hhbGxlbmdlX21ldGhvZFwiXSA9IDEyXSA9IFwiaW52YWxpZF9wa2NlX2NvZGVfY2hhbGxlbmdlX21ldGhvZFwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImludmFsaWRfcmVkaXJlY3RfdXJpXCJdID0gMTNdID0gXCJpbnZhbGlkX3JlZGlyZWN0X3VyaVwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImludmFsaWRfcmVzcG9uc2VfdHlwZVwiXSA9IDE0XSA9IFwiaW52YWxpZF9yZXNwb25zZV90eXBlXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wiaW52YWxpZF9pZF90b2tlbl9oaW50XCJdID0gMTVdID0gXCJpbnZhbGlkX2lkX3Rva2VuX2hpbnRcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJpbnZhbGlkX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVwiXSA9IDE2XSA9IFwiaW52YWxpZF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmlcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJncmFudF90eXBlX2Rpc2FibGVkXCJdID0gMTddID0gXCJncmFudF90eXBlX2Rpc2FibGVkXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wibWlzc2luZ19jbGllbnRfaWRcIl0gPSAxOF0gPSBcIm1pc3NpbmdfY2xpZW50X2lkXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wibWlzc2luZ19jb2RlXCJdID0gMTldID0gXCJtaXNzaW5nX2NvZGVcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJtaXNzaW5nX2dyYW50X3R5cGVcIl0gPSAyMF0gPSBcIm1pc3NpbmdfZ3JhbnRfdHlwZVwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcIm1pc3NpbmdfcmVkaXJlY3RfdXJpXCJdID0gMjFdID0gXCJtaXNzaW5nX3JlZGlyZWN0X3VyaVwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcIm1pc3NpbmdfcmVmcmVzaF90b2tlblwiXSA9IDIyXSA9IFwibWlzc2luZ19yZWZyZXNoX3Rva2VuXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wibWlzc2luZ19yZXNwb25zZV90eXBlXCJdID0gMjNdID0gXCJtaXNzaW5nX3Jlc3BvbnNlX3R5cGVcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJtaXNzaW5nX3Rva2VuXCJdID0gMjRdID0gXCJtaXNzaW5nX3Rva2VuXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wibG9naW5fcHJldmVudGVkXCJdID0gMjVdID0gXCJsb2dpbl9wcmV2ZW50ZWRcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJ1c2VyX2V4cGlyZWRcIl0gPSAyNl0gPSBcInVzZXJfZXhwaXJlZFwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcInVzZXJfbG9ja2VkXCJdID0gMjddID0gXCJ1c2VyX2xvY2tlZFwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcInVzZXJfbm90X2ZvdW5kXCJdID0gMjhdID0gXCJ1c2VyX25vdF9mb3VuZFwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImNsaWVudF9hdXRoZW50aWNhdGlvbl9taXNzaW5nXCJdID0gMjldID0gXCJjbGllbnRfYXV0aGVudGljYXRpb25fbWlzc2luZ1wiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImludmFsaWRfY2xpZW50X2F1dGhlbnRpY2F0aW9uX3NjaGVtZVwiXSA9IDMwXSA9IFwiaW52YWxpZF9jbGllbnRfYXV0aGVudGljYXRpb25fc2NoZW1lXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wiaW52YWxpZF9jbGllbnRfYXV0aGVudGljYXRpb25cIl0gPSAzMV0gPSBcImludmFsaWRfY2xpZW50X2F1dGhlbnRpY2F0aW9uXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wiY2xpZW50X2lkX21pc21hdGNoXCJdID0gMzJdID0gXCJjbGllbnRfaWRfbWlzbWF0Y2hcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJ1bmtub3duXCJdID0gMzNdID0gXCJ1bmtub3duXCI7XG59KShPQXV0aEVycm9yUmVhc29uID0gZXhwb3J0cy5PQXV0aEVycm9yUmVhc29uIHx8IChleHBvcnRzLk9BdXRoRXJyb3JSZWFzb24gPSB7fSkpO1xudmFyIE9BdXRoRXJyb3JUeXBlO1xuKGZ1bmN0aW9uIChPQXV0aEVycm9yVHlwZSkge1xuICAgIE9BdXRoRXJyb3JUeXBlW09BdXRoRXJyb3JUeXBlW1wiaW52YWxpZF9yZXF1ZXN0XCJdID0gMF0gPSBcImludmFsaWRfcmVxdWVzdFwiO1xuICAgIE9BdXRoRXJyb3JUeXBlW09BdXRoRXJyb3JUeXBlW1wiaW52YWxpZF9jbGllbnRcIl0gPSAxXSA9IFwiaW52YWxpZF9jbGllbnRcIjtcbiAgICBPQXV0aEVycm9yVHlwZVtPQXV0aEVycm9yVHlwZVtcImludmFsaWRfZ3JhbnRcIl0gPSAyXSA9IFwiaW52YWxpZF9ncmFudFwiO1xuICAgIE9BdXRoRXJyb3JUeXBlW09BdXRoRXJyb3JUeXBlW1wiaW52YWxpZF90b2tlblwiXSA9IDNdID0gXCJpbnZhbGlkX3Rva2VuXCI7XG4gICAgT0F1dGhFcnJvclR5cGVbT0F1dGhFcnJvclR5cGVbXCJ1bmF1dGhvcml6ZWRfY2xpZW50XCJdID0gNF0gPSBcInVuYXV0aG9yaXplZF9jbGllbnRcIjtcbiAgICBPQXV0aEVycm9yVHlwZVtPQXV0aEVycm9yVHlwZVtcImludmFsaWRfc2NvcGVcIl0gPSA1XSA9IFwiaW52YWxpZF9zY29wZVwiO1xuICAgIE9BdXRoRXJyb3JUeXBlW09BdXRoRXJyb3JUeXBlW1wic2VydmVyX2Vycm9yXCJdID0gNl0gPSBcInNlcnZlcl9lcnJvclwiO1xuICAgIE9BdXRoRXJyb3JUeXBlW09BdXRoRXJyb3JUeXBlW1widW5zdXBwb3J0ZWRfZ3JhbnRfdHlwZVwiXSA9IDddID0gXCJ1bnN1cHBvcnRlZF9ncmFudF90eXBlXCI7XG4gICAgT0F1dGhFcnJvclR5cGVbT0F1dGhFcnJvclR5cGVbXCJ1bnN1cHBvcnRlZF9yZXNwb25zZV90eXBlXCJdID0gOF0gPSBcInVuc3VwcG9ydGVkX3Jlc3BvbnNlX3R5cGVcIjtcbiAgICBPQXV0aEVycm9yVHlwZVtPQXV0aEVycm9yVHlwZVtcImNoYW5nZV9wYXNzd29yZF9yZXF1aXJlZFwiXSA9IDldID0gXCJjaGFuZ2VfcGFzc3dvcmRfcmVxdWlyZWRcIjtcbiAgICBPQXV0aEVycm9yVHlwZVtPQXV0aEVycm9yVHlwZVtcInR3b19mYWN0b3JfcmVxdWlyZWRcIl0gPSAxMF0gPSBcInR3b19mYWN0b3JfcmVxdWlyZWRcIjtcbn0pKE9BdXRoRXJyb3JUeXBlID0gZXhwb3J0cy5PQXV0aEVycm9yVHlwZSB8fCAoZXhwb3J0cy5PQXV0aEVycm9yVHlwZSA9IHt9KSk7XG4vKipcbiAqIEBhdXRob3IgRGFuaWVsIERlR3JvZmZcbiAqL1xudmFyIFNlY3VyZUdlbmVyYXRvclR5cGU7XG4oZnVuY3Rpb24gKFNlY3VyZUdlbmVyYXRvclR5cGUpIHtcbiAgICBTZWN1cmVHZW5lcmF0b3JUeXBlW1NlY3VyZUdlbmVyYXRvclR5cGVbXCJyYW5kb21EaWdpdHNcIl0gPSAwXSA9IFwicmFuZG9tRGlnaXRzXCI7XG4gICAgU2VjdXJlR2VuZXJhdG9yVHlwZVtTZWN1cmVHZW5lcmF0b3JUeXBlW1wicmFuZG9tQnl0ZXNcIl0gPSAxXSA9IFwicmFuZG9tQnl0ZXNcIjtcbn0pKFNlY3VyZUdlbmVyYXRvclR5cGUgPSBleHBvcnRzLlNlY3VyZUdlbmVyYXRvclR5cGUgfHwgKGV4cG9ydHMuU2VjdXJlR2VuZXJhdG9yVHlwZSA9IHt9KSk7XG4vKipcbiAqIEBhdXRob3IgRGFuaWVsIERlR3JvZmZcbiAqL1xudmFyIFNvcnQ7XG4oZnVuY3Rpb24gKFNvcnQpIHtcbiAgICBTb3J0W1NvcnRbXCJhc2NcIl0gPSAwXSA9IFwiYXNjXCI7XG4gICAgU29ydFtTb3J0W1wiZGVzY1wiXSA9IDFdID0gXCJkZXNjXCI7XG59KShTb3J0ID0gZXhwb3J0cy5Tb3J0IHx8IChleHBvcnRzLlNvcnQgPSB7fSkpO1xuLyoqXG4gKiA8dWw+XG4gKiA8bGk+QmVhcmVyIFRva2VuIHR5cGUgYXMgZGVmaW5lZCBieSA8YSBocmVmPVwiaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NTBcIj5SRkMgNjc1MDwvYT4uPC9saT5cbiAqIDxsaT5NQUMgVG9rZW4gdHlwZSBhcyByZWZlcmVuY2VkIGJ5IDxhIGhyZWY9XCJodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OVwiPlJGQyA2NzQ5PC9hPiBhbmRcbiAqIDxhIGhyZWY9XCJodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1vYXV0aC12Mi1odHRwLW1hYy0wNVwiPlxuICogRHJhZnQgUkZDIG9uIE9BdXRoIDIuMCBNZXNzYWdlIEF1dGhlbnRpY2F0aW9uIENvZGUgKE1BQykgVG9rZW5zPC9hPlxuICogPC9saT5cbiAqIDwvdWw+XG4gKlxuICogQGF1dGhvciBEYW5pZWwgRGVHcm9mZlxuICovXG52YXIgVG9rZW5UeXBlO1xuKGZ1bmN0aW9uIChUb2tlblR5cGUpIHtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiQmVhcmVyXCJdID0gMF0gPSBcIkJlYXJlclwiO1xuICAgIFRva2VuVHlwZVtUb2tlblR5cGVbXCJNQUNcIl0gPSAxXSA9IFwiTUFDXCI7XG59KShUb2tlblR5cGUgPSBleHBvcnRzLlRva2VuVHlwZSB8fCAoZXhwb3J0cy5Ub2tlblR5cGUgPSB7fSkpO1xuLyoqXG4gKiBUaGUgdHJhbnNhY3Rpb24gdHlwZXMgZm9yIFdlYmhvb2tzIGFuZCBvdGhlciBldmVudCBzeXN0ZW1zIHdpdGhpbiBGdXNpb25BdXRoLlxuICpcbiAqIEBhdXRob3IgQnJpYW4gUG9udGFyZWxsaVxuICovXG52YXIgVHJhbnNhY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChUcmFuc2FjdGlvblR5cGUpIHtcbiAgICBUcmFuc2FjdGlvblR5cGVbVHJhbnNhY3Rpb25UeXBlW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gICAgVHJhbnNhY3Rpb25UeXBlW1RyYW5zYWN0aW9uVHlwZVtcIkFueVwiXSA9IDFdID0gXCJBbnlcIjtcbiAgICBUcmFuc2FjdGlvblR5cGVbVHJhbnNhY3Rpb25UeXBlW1wiU2ltcGxlTWFqb3JpdHlcIl0gPSAyXSA9IFwiU2ltcGxlTWFqb3JpdHlcIjtcbiAgICBUcmFuc2FjdGlvblR5cGVbVHJhbnNhY3Rpb25UeXBlW1wiU3VwZXJNYWpvcml0eVwiXSA9IDNdID0gXCJTdXBlck1ham9yaXR5XCI7XG4gICAgVHJhbnNhY3Rpb25UeXBlW1RyYW5zYWN0aW9uVHlwZVtcIkFic29sdXRlTWFqb3JpdHlcIl0gPSA0XSA9IFwiQWJzb2x1dGVNYWpvcml0eVwiO1xufSkoVHJhbnNhY3Rpb25UeXBlID0gZXhwb3J0cy5UcmFuc2FjdGlvblR5cGUgfHwgKGV4cG9ydHMuVHJhbnNhY3Rpb25UeXBlID0ge30pKTtcbi8qKlxuICogQGF1dGhvciBEYW5pZWwgRGVHcm9mZlxuICovXG52YXIgVHdvRmFjdG9yRGVsaXZlcnk7XG4oZnVuY3Rpb24gKFR3b0ZhY3RvckRlbGl2ZXJ5KSB7XG4gICAgVHdvRmFjdG9yRGVsaXZlcnlbVHdvRmFjdG9yRGVsaXZlcnlbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICBUd29GYWN0b3JEZWxpdmVyeVtUd29GYWN0b3JEZWxpdmVyeVtcIlRleHRNZXNzYWdlXCJdID0gMV0gPSBcIlRleHRNZXNzYWdlXCI7XG59KShUd29GYWN0b3JEZWxpdmVyeSA9IGV4cG9ydHMuVHdvRmFjdG9yRGVsaXZlcnkgfHwgKGV4cG9ydHMuVHdvRmFjdG9yRGVsaXZlcnkgPSB7fSkpO1xuLyoqXG4gKiBUaGUgcGhhc2VzIG9mIGEgdGltZS1iYXNlZCB1c2VyIGFjdGlvbi5cbiAqXG4gKiBAYXV0aG9yIEJyaWFuIFBvbnRhcmVsbGlcbiAqL1xudmFyIFVzZXJBY3Rpb25QaGFzZTtcbihmdW5jdGlvbiAoVXNlckFjdGlvblBoYXNlKSB7XG4gICAgVXNlckFjdGlvblBoYXNlW1VzZXJBY3Rpb25QaGFzZVtcInN0YXJ0XCJdID0gMF0gPSBcInN0YXJ0XCI7XG4gICAgVXNlckFjdGlvblBoYXNlW1VzZXJBY3Rpb25QaGFzZVtcIm1vZGlmeVwiXSA9IDFdID0gXCJtb2RpZnlcIjtcbiAgICBVc2VyQWN0aW9uUGhhc2VbVXNlckFjdGlvblBoYXNlW1wiY2FuY2VsXCJdID0gMl0gPSBcImNhbmNlbFwiO1xuICAgIFVzZXJBY3Rpb25QaGFzZVtVc2VyQWN0aW9uUGhhc2VbXCJlbmRcIl0gPSAzXSA9IFwiZW5kXCI7XG59KShVc2VyQWN0aW9uUGhhc2UgPSBleHBvcnRzLlVzZXJBY3Rpb25QaGFzZSB8fCAoZXhwb3J0cy5Vc2VyQWN0aW9uUGhhc2UgPSB7fSkpO1xuLyoqXG4gKiBAYXV0aG9yIERhbmllbCBEZUdyb2ZmXG4gKi9cbnZhciBVc2VyU3RhdGU7XG4oZnVuY3Rpb24gKFVzZXJTdGF0ZSkge1xuICAgIFVzZXJTdGF0ZVtVc2VyU3RhdGVbXCJBdXRoZW50aWNhdGVkXCJdID0gMF0gPSBcIkF1dGhlbnRpY2F0ZWRcIjtcbiAgICBVc2VyU3RhdGVbVXNlclN0YXRlW1wiQXV0aGVudGljYXRlZE5vdFJlZ2lzdGVyZWRcIl0gPSAxXSA9IFwiQXV0aGVudGljYXRlZE5vdFJlZ2lzdGVyZWRcIjtcbn0pKFVzZXJTdGF0ZSA9IGV4cG9ydHMuVXNlclN0YXRlIHx8IChleHBvcnRzLlVzZXJTdGF0ZSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GdXNpb25BdXRoQ2xpZW50TmF0aXZlLmpzLm1hcCIsImltcG9ydCBGdXNpb25BdXRoQ2xpZW50TmF0aXZlIGZyb20gXCJAL2xpYi9GdXNpb25BdXRoQ2xpZW50TmF0aXZlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGdXNpb25BdXRoQ2xpZW50TmF0aXZlKFwiWmZCcWtXN1lySnJObGhDYjVZTGZselFuallSRzlhZnlWcmpSc3NQaEhta1wiLCAnaHR0cDovLzE5Mi4xNjguMjE3LjEzNzo5MDExJyk7IiwiaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbmltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmlmKFROU19FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBWdWUudXNlKFZ1ZURldnRvb2xzKVxufVxuXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSAoVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKVxuXG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ2ZyYW1lJywgW2goQXBwKV0pXG59KS4kc3RhcnQoKVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgc3RhdGU6IHtcblxuICB9LFxuICBtdXRhdGlvbnM6IHtcblxuICB9LFxuICBhY3Rpb25zOiB7XG5cbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9