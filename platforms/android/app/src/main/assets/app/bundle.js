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
var nativescript_telephony_1 = __webpack_require__("../node_modules/nativescript-telephony/telephony.js");
var Secure = /** @class */ (function (_super) {
    tslib_1.__extends(Secure, _super);
    function Secure() {
        var _this = this;
        nativescript_local_notifications_1.LocalNotifications.hasPermission();
        return _this;
    }
    Secure.prototype.test = function () {
        console.log(this.getImei());
    };
    Secure.prototype.localNotification = function (imei) {
        nativescript_local_notifications_1.LocalNotifications.schedule([{
                id: 1,
                title: 'Nova mensagem em nMobile',
                subtitle: this.imei,
                body: imei,
                bigTextStyle: false,
                forceShowWhenInForeground: true,
                icon: "res://logo",
                image: "res://icon",
                channel: "vue-channel",
            }]);
        nativescript_local_notifications_1.LocalNotifications.requestPermission().then(function (granted) {
            console.log("Permission granted? " + granted);
        });
    };
    Secure.prototype.getImei = function () {
        var _this = this;
        return nativescript_telephony_1.Telephony().then(function (responseDevice) {
            _this.simData = responseDevice;
            _this.imei = _this.simData.deviceId;
            _this.localNotification(_this.imei);
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
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        { staticClass: "input-field" },
        [
          _c("Button", {
            staticClass: "btn btn-primary",
            attrs: { text: "Log In" },
            on: { tap: _vm.test }
          })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/OWNkMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MDVmNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzM2N2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWN1cmUudnVlPzY1YmQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzFlM2YiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT80OTlmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VjdXJlLnZ1ZT81ZWI0Iiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlP2ZjMmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzE4ZTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzg4MDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzQ3ZmIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT8yYzM1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VjdXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3VyZS52dWU/MDYwMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3VyZS52dWU/MTE0NCIsIndlYnBhY2s6Ly8vLi9saWIvRGVhZmF1bHRSZXN0Q2xpZW50TmF0aXZlQnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9saWIvRGVmYXVsdFJFU1RDbGllbnROYXRpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Z1c2lvbkF1dGhDbGllbnROYXRpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxpQ0FBaUMsZ0NBQWdDLHFCQUFxQixHQUFHLDZCQUE2Qiw2QkFBNkIseUJBQXlCLG9CQUFvQixxQkFBcUIsR0FBRyx3QkFBd0IseUNBQXlDLEdBQUc7OztBQUduVCx3QkFBd0IsbUJBQU8sQ0FBQyw2REFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDREQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLDhDQUE4QztBQUM3RSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7Ozs7QUNHQSx3SEFBbUM7QUFDbkMsMkhBQXVEO0FBQ3ZELG1IQUFvRDtBQUNwRCx1RkFBeUM7QUFDekMsZ0hBQXVEO0FBVXZEO0lBQWlDLCtCQUFHO0lBQ2hDO1FBQUEsaUJBR0M7UUFERyxzQ0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOztJQUN2QixDQUFDO0lBVUQsa0JBQUksR0FBSixVQUFLLGdCQUFnQjtRQUNqQixJQUFHLGdCQUFnQixJQUFJLHVCQUF1QixJQUFJLGdCQUFnQixJQUFJLE9BQU8sRUFBQztZQUMxRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFJLEVBQUU7Z0JBQ25CLEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDO1NBQ047YUFBSTtZQUNELEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsNkJB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QkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFB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UyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDNUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDNUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDNUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDNUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDNUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDNUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDNUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDNUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUQsSUFBSSxzQkFBc0IsQ0FBQztBQUMzQixDQUFDLFVBQVUsc0JBQXNCO0lBQzdCLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztJQUM5RSxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLHlCQUF5QixDQUFDO0lBQzFHLHNCQUFzQixDQUFDLHNCQUFzQixDQUFD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QUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2xELFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2xELFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2xELFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2xELFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2xELFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2xELFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2xELFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLElBQUksT0FBTyxDQUFDO0FBQ1osQ0FBQyxVQUFVLE9BQU87SUFDZCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNsQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNwQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFD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ZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQWN0aW9uQmFyW2RhdGEtdi00NWJhNWVkNF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNiYTgyO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLm1lc3NhZ2VbZGF0YS12LTQ1YmE1ZWQ0XSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi5mYVtkYXRhLXYtNDViYTVlZDRdIHtcXG4gICAgRm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG59XFxuXCIsIFwiXCJdKTtcblxuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQXBwLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgUHJvcH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2VcIjtcbmltcG9ydCBIb21lIGZyb20gXCJAL2NvbXBvbmVudHMvSG9tZS52dWVcIjtcbmltcG9ydCB7IEZvbnRhd2Vzb21lIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZvbnRhd2Vzb21lJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIHJlc3VsdCB7XG4gICAgc3RhdHVzQ29kZTogc3RyaW5nLFxuICAgIHJlc3BvbnNlOiBKU09OLFxuICAgIHJlZ2lzdHJhdGlvbjogQXJyYXk8c3RyaW5nPixcbn1cblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgVnVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBGb250YXdlc29tZS5pbml0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbWFpbDogc3RyaW5nIDtcbiAgICBwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZXF1ZXN0OiBPYmplY3Q7XG4gICAgcHJpdmF0ZSByb2xlczogSlNPTjtcbiAgICBwcml2YXRlIHVzZXI6IEpTT047XG4gICAgcHVibGljIHBvc3Q6IHN0cmluZztcblxuXG4gICAgZ29Ubyhyb2xlSW5GdXNpb25BdXRoKXtcbiAgICAgICAgaWYocm9sZUluRnVzaW9uQXV0aCA9PSBcInZpZXctc2VjdXJpdHktbWVzc2FnZVwiIHx8IHJvbGVJbkZ1c2lvbkF1dGggPT0gXCJhZG1pblwiKXtcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IHRoaXMucG9zdCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVFJFVEFcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVzdcOhcmlvIG91IHNlbmhhIGluY29ycmV0b3NcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwidHJ5IEFnYWluXCJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgZGlhbG9nIGNsb3NlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgfTtcblxuICAgIHJlcXVlc3RQcm92aWRlcigpe1xuICAgICAgICB0aGlzLnJlcXVlc3QgPSAge1xuICAgICAgICAgICAgXCJsb2dpbklkXCI6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBcImFwcGxpY2F0aW9uSWRcIjogXCJmY2E0ODE0Zi02NDVjLTRjM2YtYTliMC0yYjJjYTdhMmU4MzVcIlxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0O1xuICAgIH07XG5cbiAgICB0ZXN0RnVzaW9uQXV0aE1ldGhvZHMoKSB7XG4gICAgICAgIHJldHVybiBjbGllbnQuc2VhcmNoVXNlcnMoXCI5MDE5MDRkOC01ZWViLTQ0MWYtYTgwZS04YzhjNTk1ODI1YjVcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2xpZW50TG9naW4oKSB7XG4gICAgICAgIC8vIHRoaXMuJG5hdmlnYXRlVG8oc2VjdXJlKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5sb2dpbih0aGlzLnJlcXVlc3RQcm92aWRlcigpKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5oYW5kbGVSZXNwb25zZSwgdGhpcy5oYW5kbGVFcnJvclJlc3BvbnNlKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMudXNlci5yZXNwb25zZS51c2VyLnJlZ2lzdHJhdGlvbnM7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gdGhpcy5yb2xlc1swXS5yb2xlc1swXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvbGVzWzBdLnJvbGVzWzBdKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVzZXIgPSB0aGlzLnJlc3VsdC5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJvbGVzID0gdGhpcy51c2VyLnVzZXIucmVnaXN0cmF0aW9ucztcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBvc3QgPSB0aGlzLnJvbGVzWzBdLnJvbGVzWzBdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNpYmlsaXR5ID0+e1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Ubyh0aGlzLnJvbGVzWzBdLnJvbGVzWzBdKTtcbiAgICAgICAgICAgICB9KTtcbiAgICB9O1xuXG5cblxuICAgIGhhbmRsZVJlc3BvbnNlKGNsaWVudFJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBjbGllbnRSZXNwb25zZTtcbiAgICB9O1xuICAgIGhhbmRsZUVycm9yUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIGNsaWVudFJlc3BvbnNlO1xuICAgIH07XG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhvbWUsXG4gICAgfTtcbn1cblxuIiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIFByb3B9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCBTZWN1cmUgZnJvbSBcIkAvY29tcG9uZW50cy9TZWN1cmUudnVlXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuXG5AQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgVnVlIHtcbiAgICBwcml2YXRlIGxhdDogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGxvbjogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHNwZWVkOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgYWRkcjogc3RyaW5nID0gXCJcIjtcbiAgICBAUHJvcCgpIHB1YmxpYyByb2xlOiBzdHJpbmc7XG5cbiAgICBnb1RvU2VjdXJlKCl7XG4gICAgICAgIGlmKHRoaXMucm9sZSA9PSBcImFkbWluXCIpIHtcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oU2VjdXJlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBOb3QgaXMgYWRtaW5cIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInZvbHRlIG9zYWRvXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcImV4aXRcIlxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGVydCBkaWFsb2cgY2xvc2VkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb24oKSB7XG4gICAgICAgIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xuICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oeyBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIG1heGltdW1BZ2U6IDUwMDAsIHRpbWVvdXQ6IDIwMDAwIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGF0ID0gcmVzLmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9uID0gcmVzLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICB1dGlscy5vcGVuVXJsKFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL1wiICt0aGlzLmxhdCArJywnKyB0aGlzLmxvbiApXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZ29Ub1Rlc3Qocm9sZUluRnVzaW9uQXV0aDogc3RyaW5nKXtcbiAgICAgICAgaWYocm9sZUluRnVzaW9uQXV0aCA9PSBcInZpZXctc2VjdXJpdHktbWVzc2FnZVwiKSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFNlY3VyZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRSRVRBXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVc3XDoXJpbyBzZW0gUGVybWlzc8Ojb1wiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsZXJ0IGRpYWxvZyBjbG9zZWRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvcHM6e1xuICAgICAgICBub21lOiBzdHJpbmcsXG4gICAgfTtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFNlY3VyZSxcbiAgICB9O1xuXG59XG4iLCJcblxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQge1RlbGVwaG9ueX0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVwaG9ueSc7XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3VyZSBleHRlbmRzIFZ1ZSB7XG4gICAgcHJpdmF0ZSBzaW1EYXRhOiBKU09OO1xuICAgIHByaXZhdGUgaW1laTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5oYXNQZXJtaXNzaW9uKCk7XG5cbiAgICB9XG4gICAgdGVzdCgpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldEltZWkoKSk7XG5cblxuICAgIH1cblxuICAgIGxvY2FsTm90aWZpY2F0aW9uKGltZWk6IHN0cmluZyl7XG5cbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFxuICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdmEgbWVuc2FnZW0gZW0gbk1vYmlsZScsXG4gICAgICAgICAgICAgICAgc3VidGl0bGU6IHRoaXMuaW1laSxcbiAgICAgICAgICAgICAgICBib2R5OiBpbWVpLFxuICAgICAgICAgICAgICAgIGJpZ1RleHRTdHlsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9yY2VTaG93V2hlbkluRm9yZWdyb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpY29uOiBcInJlczovL2xvZ29cIixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJyZXM6Ly9pY29uXCIsXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogXCJ2dWUtY2hhbm5lbFwiLFxuICAgICAgICAgICAgfV0pXG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbihncmFudGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJtaXNzaW9uIGdyYW50ZWQ/IFwiICsgZ3JhbnRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBnZXRJbWVpKCl7XG4gICAgICAgcmV0dXJuIFRlbGVwaG9ueSgpLnRoZW4oKHJlc3BvbnNlRGV2aWNlKSA9PiB7XG4gICAgICAgICAgIHRoaXMuc2ltRGF0YSA9IHJlc3BvbnNlRGV2aWNlO1xuICAgICAgICAgICB0aGlzLmltZWkgPSB0aGlzLnNpbURhdGEuZGV2aWNlSWQ7XG4gICAgICAgICAgIHRoaXMubG9jYWxOb3RpZmljYXRpb24odGhpcy5pbWVpKTtcbiAgICAgICB9KVxuXG4gICAgfVxufVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuY2FybmVnaWV0ZWNobm9sb2dpZXMuY29tL3NpdGVzL2N0L2Fzc2V0cy9pbWFnZS9sb2dvLW9jdG9wdXMucG5nXCIsXG4gICAgICAgICAgICAgICAgICBsb2FkTW9kZTogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1haWwgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvZyBJblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uY2xpZW50TG9naW4gfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyXCIsIGF0dHJzOiB7IHRpdGxlOiBcIkhvbWVcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhvbWUtcGFuZWxcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJHZXQgTXkgTG9jYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdldExvY2F0aW9uIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNlY3VyZVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1NlY3VyZSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmxcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxhdGl0dWRlOiBcIiArIF92bS5sYXQgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMb25naXR1ZGU6IFwiICsgX3ZtLmxvbiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMb2cgSW5cIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udGVzdCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL2xpYi9EZWFmYXVsdFJlc3RDbGllbnROYXRpdmVCdWlsZGVyLnRzXCI6IFwiLi9saWIvRGVhZmF1bHRSZXN0Q2xpZW50TmF0aXZlQnVpbGRlci50c1wiLFxuXHRcIi4vbGliL0RlZmF1bHRSRVNUQ2xpZW50TmF0aXZlLnRzXCI6IFwiLi9saWIvRGVmYXVsdFJFU1RDbGllbnROYXRpdmUudHNcIixcblx0XCIuL2xpYi9GdXNpb25BdXRoQ2xpZW50TmF0aXZlLnRzXCI6IFwiLi9saWIvRnVzaW9uQXV0aENsaWVudE5hdGl2ZS50c1wiLFxuXHRcIi4vbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZS50c1wiOiBcIi4vbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZS50c1wiLFxuXHRcIi4vbWFpbi50c1wiOiBcIi4vbWFpbi50c1wiLFxuXHRcIi4vc3RvcmUudHNcIjogXCIuL3N0b3JlLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBibHVlIHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggYmx1ZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIEJsdWUgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIENvbG9yIGNsYXNzZXNcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5jLWdyZXl7Y29sb3I6I2UwZTBlMH0uYy1iZy1ncmV5e2JhY2tncm91bmQtY29sb3I6I2UwZTBlMH1cXHJcXG4qKi9cXG4uYy13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1ibGFjayB7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbi5jLWJnLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1hcXVhIHtcXG4gIGNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmctYXF1YSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmx1ZSB7XFxuICBjb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWJnLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWNoYXJjb2FsIHtcXG4gIGNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYmctY2hhcmNvYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtYmctYnJvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWZvcmVzdCB7XFxuICBjb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWJnLWZvcmVzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtZ3JleSB7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWJnLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWdyZXktbGlnaHQge1xcbiAgY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1iZy1ncmV5LWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1ncmV5LWRhcmsge1xcbiAgY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1iZy1ncmV5LWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLXB1cnBsZSB7XFxuICBjb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWJnLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtbGVtb24ge1xcbiAgY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1iZy1sZW1vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtbGltZSB7XFxuICBjb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLWJnLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLW9yYW5nZSB7XFxuICBjb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLWJnLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtcnVieSB7XFxuICBjb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLWJnLXJ1Ynkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLXNreSB7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi5jLWJnLXNreSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLyogV2lkdGgvSGVpZ2h0ICovXFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwOyB9XFxuXFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uaC0xMDAge1xcbiAgaGVpZ2h0OiAxMDA7IH1cXG5cXG4vKipcXHJcXG4gKiBNYXJnaW4gYW5kIFBhZGRpbmdcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5tLTB7bWFyZ2luOjB9Lm0tdC0we21hcmdpbi10b3A6MH0ubS1yLTB7bWFyZ2luLXJpZ2h0OjB9Lm0tYi0we21hcmdpbi1ib3R0b206MH0ubS1sLTB7bWFyZ2luLWxlZnQ6MH0ubS14LTB7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MH0ubS15LTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXHJcXG4gKiBTYW1lIGZvciBQYWRkaW5nICh1c2luZyB0aGUgJ3AnIGFiYnJldmlhdGlvbilcXHJcXG4gKiBGcm9tIDAsIDIsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMFxcclxcbioqL1xcbi5tLTAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLm0tdC0wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ubS1yLTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLm0tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS1sLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS15LTAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMjsgfVxcblxcbi5tLXQtMiB7XFxuICBtYXJnaW4tdG9wOiAyOyB9XFxuXFxuLm0tci0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjsgfVxcblxcbi5tLWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tbC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teC0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teS0yIHtcXG4gIG1hcmdpbi10b3A6IDI7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tNCB7XFxuICBtYXJnaW46IDQ7IH1cXG5cXG4ubS10LTQge1xcbiAgbWFyZ2luLXRvcDogNDsgfVxcblxcbi5tLXItNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7IH1cXG5cXG4ubS1iLTQge1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLWwtNCB7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXgtNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXktNCB7XFxuICBtYXJnaW4tdG9wOiA0O1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLTUge1xcbiAgbWFyZ2luOiA1OyB9XFxuXFxuLm0tdC01IHtcXG4gIG1hcmdpbi10b3A6IDU7IH1cXG5cXG4ubS1yLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1OyB9XFxuXFxuLm0tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS1sLTUge1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS14LTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1O1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS15LTUge1xcbiAgbWFyZ2luLXRvcDogNTtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS04IHtcXG4gIG1hcmdpbjogODsgfVxcblxcbi5tLXQtOCB7XFxuICBtYXJnaW4tdG9wOiA4OyB9XFxuXFxuLm0tci04IHtcXG4gIG1hcmdpbi1yaWdodDogODsgfVxcblxcbi5tLWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tbC04IHtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teC04IHtcXG4gIG1hcmdpbi1yaWdodDogODtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teS04IHtcXG4gIG1hcmdpbi10b3A6IDg7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tMTAge1xcbiAgbWFyZ2luOiAxMDsgfVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7IH1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tbC0xMCB7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS14LTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS15LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS0xMiB7XFxuICBtYXJnaW46IDEyOyB9XFxuXFxuLm0tdC0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjsgfVxcblxcbi5tLXItMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjsgfVxcblxcbi5tLWItMTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS1sLTEyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXgtMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXktMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLTE1IHtcXG4gIG1hcmdpbjogMTU7IH1cXG5cXG4ubS10LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1OyB9XFxuXFxuLm0tci0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1OyB9XFxuXFxuLm0tYi0xNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLWwtMTUge1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teC0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teS0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tMTYge1xcbiAgbWFyZ2luOiAxNjsgfVxcblxcbi5tLXQtMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7IH1cXG5cXG4ubS1yLTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7IH1cXG5cXG4ubS1iLTE2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tbC0xNiB7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS14LTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS15LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS0yMCB7XFxuICBtYXJnaW46IDIwOyB9XFxuXFxuLm0tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDsgfVxcblxcbi5tLXItMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDsgfVxcblxcbi5tLWItMjAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS1sLTIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXgtMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXktMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLTI0IHtcXG4gIG1hcmdpbjogMjQ7IH1cXG5cXG4ubS10LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0OyB9XFxuXFxuLm0tci0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0OyB9XFxuXFxuLm0tYi0yNCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLWwtMjQge1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teC0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0O1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teS0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tMjUge1xcbiAgbWFyZ2luOiAyNTsgfVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7IH1cXG5cXG4ubS1yLTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7IH1cXG5cXG4ubS1iLTI1IHtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tbC0yNSB7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS14LTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS15LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1O1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS0yOCB7XFxuICBtYXJnaW46IDI4OyB9XFxuXFxuLm0tdC0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODsgfVxcblxcbi5tLXItMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODsgfVxcblxcbi5tLWItMjgge1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS1sLTI4IHtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXgtMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXktMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLTMwIHtcXG4gIG1hcmdpbjogMzA7IH1cXG5cXG4ubS10LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwOyB9XFxuXFxuLm0tci0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwOyB9XFxuXFxuLm0tYi0zMCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5tLWwtMzAge1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teC0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teS0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnAtdC0wIHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLnAtci0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4ucC1iLTAge1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC1sLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteC0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC15LTAge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMjsgfVxcblxcbi5wLXQtMiB7XFxuICBwYWRkaW5nLXRvcDogMjsgfVxcblxcbi5wLXItMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyOyB9XFxuXFxuLnAtYi0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteS0yIHtcXG4gIHBhZGRpbmctdG9wOiAyO1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDQ7IH1cXG5cXG4ucC10LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7IH1cXG5cXG4ucC1yLTQge1xcbiAgcGFkZGluZy1yaWdodDogNDsgfVxcblxcbi5wLWItNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLWwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC14LTQge1xcbiAgcGFkZGluZy1yaWdodDogNDtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXktNCB7XFxuICBwYWRkaW5nLXRvcDogNDtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiA1OyB9XFxuXFxuLnAtdC01IHtcXG4gIHBhZGRpbmctdG9wOiA1OyB9XFxuXFxuLnAtci01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7IH1cXG5cXG4ucC1iLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC1sLTUge1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteC01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLTgge1xcbiAgcGFkZGluZzogODsgfVxcblxcbi5wLXQtOCB7XFxuICBwYWRkaW5nLXRvcDogODsgfVxcblxcbi5wLXItOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4OyB9XFxuXFxuLnAtYi04IHtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtbC04IHtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXgtOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4O1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteS04IHtcXG4gIHBhZGRpbmctdG9wOiA4O1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMDsgfVxcblxcbi5wLXQtMTAge1xcbiAgcGFkZGluZy10b3A6IDEwOyB9XFxuXFxuLnAtci0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDsgfVxcblxcbi5wLWItMTAge1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtbC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLTEyIHtcXG4gIHBhZGRpbmc6IDEyOyB9XFxuXFxuLnAtdC0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7IH1cXG5cXG4ucC1yLTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyOyB9XFxuXFxuLnAtYi0xMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC1sLTEyIHtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC14LTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXktMTIge1xcbiAgcGFkZGluZy10b3A6IDEyO1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtMTUge1xcbiAgcGFkZGluZzogMTU7IH1cXG5cXG4ucC10LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTsgfVxcblxcbi5wLXItMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7IH1cXG5cXG4ucC1iLTE1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLWwtMTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXgtMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteS0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC0xNiB7XFxuICBwYWRkaW5nOiAxNjsgfVxcblxcbi5wLXQtMTYge1xcbiAgcGFkZGluZy10b3A6IDE2OyB9XFxuXFxuLnAtci0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjsgfVxcblxcbi5wLWItMTYge1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtbC0xNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteC0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC15LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLTIwIHtcXG4gIHBhZGRpbmc6IDIwOyB9XFxuXFxuLnAtdC0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7IH1cXG5cXG4ucC1yLTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwOyB9XFxuXFxuLnAtYi0yMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC1sLTIwIHtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC14LTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXktMjAge1xcbiAgcGFkZGluZy10b3A6IDIwO1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjQ7IH1cXG5cXG4ucC10LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDsgfVxcblxcbi5wLXItMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7IH1cXG5cXG4ucC1iLTI0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLWwtMjQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXgtMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteS0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC0yNSB7XFxuICBwYWRkaW5nOiAyNTsgfVxcblxcbi5wLXQtMjUge1xcbiAgcGFkZGluZy10b3A6IDI1OyB9XFxuXFxuLnAtci0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTsgfVxcblxcbi5wLWItMjUge1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtbC0yNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteC0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC15LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLTI4IHtcXG4gIHBhZGRpbmc6IDI4OyB9XFxuXFxuLnAtdC0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7IH1cXG5cXG4ucC1yLTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4OyB9XFxuXFxuLnAtYi0yOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC1sLTI4IHtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC14LTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4O1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXktMjgge1xcbiAgcGFkZGluZy10b3A6IDI4O1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtMzAge1xcbiAgcGFkZGluZzogMzA7IH1cXG5cXG4ucC10LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDsgfVxcblxcbi5wLXItMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7IH1cXG5cXG4ucC1iLTMwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi5wLWwtMzAge1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXgtMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteS0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4vKiBEaXZpZGVycyAqL1xcbi5oci1saWdodCB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uaHItZGFyayB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4vKiBBbGlnbm1lbnQgKi9cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTsgfVxcblxcbi50ZXh0LXVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLnRleHQtY2FwaXRhbGl6ZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcblxcbi5mb250LXdlaWdodC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5mb250LXdlaWdodC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmZvbnQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi8qKlxcclxcbiAqIEZvbnQgc2l6ZVxcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLnQtMTB7Zm9udC1zaXplOjEwfVxcclxcbiAqIEZyb20gMTAsIDEyLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMFxcclxcbioqL1xcbi50LTEwIHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4udC0xMiB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLnQtMTQge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi50LTE1IHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4udC0xNiB7XFxuICBmb250LXNpemU6IDE2OyB9XFxuXFxuLnQtMTcge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi50LTE4IHtcXG4gIGZvbnQtc2l6ZTogMTg7IH1cXG5cXG4udC0xOSB7XFxuICBmb250LXNpemU6IDE5OyB9XFxuXFxuLnQtMjAge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi50LTI1IHtcXG4gIGZvbnQtc2l6ZTogMjU7IH1cXG5cXG4udC0zMCB7XFxuICBmb250LXNpemU6IDMwOyB9XFxuXFxuLmltZy1yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDU7IH1cXG5cXG4uaW1nLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiAyMDsgfVxcblxcbi5pbWctdGh1bWJuYWlsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlOyB9XFxuXFxuLnB1bGwtbGVmdCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0OyB9XFxuXFxuLnB1bGwtcmlnaHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ubS14LWF1dG8ge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm0teS1hdXRvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjZDUwMDAwOyB9XFxuXFxuLnRleHQtbXV0ZWQge1xcbiAgY29sb3I6ICM5ZTllOWU7IH1cXG5cXG4uYmctcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTAwMDA7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24tYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNztcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcbiAgY29sb3I6ICMzMGJjZmY7XFxuICB3aWR0aDogMzA7XFxuICBoZWlnaHQ6IDMwOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogIzMwYmNmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWluLWhlaWdodDogMzY7XFxuICBtaW4td2lkdGg6IDY0O1xcbiAgcGFkZGluZzogMTAgMTAgMTAgMTA7XFxuICBmb250LXNpemU6IDE4O1xcbiAgbWFyZ2luOiA4IDE2IDggMTY7IH1cXG4gIC5idG4uYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNjZGZmOyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7XFxuICBib3JkZXItY29sb3I6ICMzMGJjZmY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWZjO1xcbiAgICBib3JkZXItY29sb3I6ICMwMGFhZmM7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYXF1YSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYnJvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWZvcmVzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZ3JleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGVtb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwO1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1saW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1wdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXJ1Ynkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXNreSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6ICMzMGJjZmY7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcbiAgLmJ0bi1vdXRsaW5lLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNjZGZmOyB9XFxuXFxuLmJ0bltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGNvbG9yOiAjYTRhNGE0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWUsIGZvbnRhd2Vzb21lLXdlYmZvbnQ7IH1cXG5cXG4uZm9ybSAuaW5wdXQge1xcbiAgcGFkZGluZzogMTYgOCAxNiA4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1ib3JkZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI4O1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0W2lzRW5hYmxlZD0nZmFsc2UnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cXG5cXG4uZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luOiA4OyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6ICNiYWJhYmE7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItbGlnaHQuYWN0aXZlLFxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1kYXJrLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZC5pbnB1dC1zaWRlcyAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG5cXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMyMTIxMjE7IH1cXG5cXG4uYm9keSxcXG4uYm9keTIsXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzc1NzU3NTsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDMyOyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjI7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5oNCB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLmg1IHtcXG4gIGZvbnQtc2l6ZTogMTE7IH1cXG5cXG4uaDYge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi5mb290bm90ZSB7XFxuICBmb250LXNpemU6IDEzOyB9XFxuXFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSBMYWJlbCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgc3RyZXRjaDogZmlsbDtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6ICM3NTc1NzU7XFxuICAgIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4ucGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLnByb2dyZXNzIHtcXG4gIGNvbG9yOiAjMzBiY2ZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIGZvbnQtc2l6ZTogMTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCwgLnNpZGVkcmF3ZXItY2VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGhlaWdodDogMTQ4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxNiAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAyMCAxNSAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDY0O1xcbiAgd2lkdGg6IDY0O1xcbiAgYm9yZGVyLXJhZGl1czogMzI7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMzY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNzQ7XFxuICB3aWR0aDogNzQ7XFxuICBib3JkZXItcmFkaXVzOiAzNztcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGNvbG9yOiAjNzM3MzczOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0ODtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9yaWVudGF0aW9uOiBob3Jpem9udGFsOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICB3aWR0aDogMjQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgaGVpZ2h0OiA0ODtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuICAgIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMCAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDAuMTtcXG4gIHdpZHRoOiA4MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG4gIC5zbGlkZXJbaXNFbmFibGVkPWZhbHNlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXVtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4udGFiLXZpZXcge1xcbiAgLypjb2xvcjogJHNlY29uZGFyeTsqL1xcbiAgc2VsZWN0ZWQtY29sb3I6ICMzMGJjZmY7XFxuICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIC50YWItdmlldyAudGFiLXZpZXctaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbiNsb2dpbi1iYWNrZ3JvdW5kIHtcXG4gIG1hcmdpbi10b3A6IC0yMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcCB7XFxuICBwYWRkaW5nOiAwIDQwOyB9XFxuXFxuLmxvZ28td3JhcCB7XFxuICBtYXJnaW46IDYwIDAgMTAgMDtcXG4gIHBhZGRpbmc6IDIwIDA7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvLXN1YiB7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMzsgfVxcbiAgLmxvZ2luLXdyYXBwZXIgVGV4dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTAgMTA7XFxuICAgIG1hcmdpbjogMTAgMCAwIDA7IH1cXG5cXG4uZ28tYmFjayB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuc2NzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmZvcj1yJTIwaW4lMjByZXN1bHQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQ1YmE1ZWQ0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvaXNtYWVsYy9Eb2N1bWVudHMvZXN0dWRvcy9uYXRpdmVzY3JpcHQvdnVlL3N0dWR5TG9naW5WdWVUUy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NWJhNWVkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZmb3I9ciUyMGluJTIwcmVzdWx0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ1YmE1ZWQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmZvcj1yJTIwaW4lMjByZXN1bHQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjc0MTBmM2FcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9pc21hZWxjL0RvY3VtZW50cy9lc3R1ZG9zL25hdGl2ZXNjcmlwdC92dWUvc3R1ZHlMb2dpblZ1ZVRTL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3NDEwZjNhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzQxMGYzYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2Emc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NlY3VyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDI0N2E1MTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VjdXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VjdXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDI0N2E1MTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9pc21hZWxjL0RvY3VtZW50cy9lc3R1ZG9zL25hdGl2ZXNjcmlwdC92dWUvc3R1ZHlMb2dpblZ1ZVRTL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAyNDdhNTEyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAyNDdhNTEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAyNDdhNTEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZWN1cmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyNDdhNTEyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAyNDdhNTEyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1NlY3VyZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlY3VyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VjdXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN1cmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyNDdhNTEyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IElSRVNUQ2xpZW50QnVpbGRlciBmcm9tIFwiQGZ1c2lvbmF1dGgvdHlwZXNjcmlwdC1jbGllbnQvYnVpbGQvc3JjL0lSRVNUQ2xpZW50QnVpbGRlclwiO1xuaW1wb3J0IERlZmF1bHRSRVNUQ2xpZW50TmF0aXZlIGZyb20gXCJAL2xpYi9EZWZhdWx0UkVTVENsaWVudE5hdGl2ZVwiO1xuaW1wb3J0IElSRVNUQ2xpZW50IGZyb20gXCJAZnVzaW9uYXV0aC90eXBlc2NyaXB0LWNsaWVudC9idWlsZC9zcmMvSVJFU1RDbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFJFU1RDbGllbnROYXRpdmVCdWlsZGVyIGltcGxlbWVudHMgSVJFU1RDbGllbnRCdWlsZGVye1xuICAgIGJ1aWxkKGhvc3QpOiBJUkVTVENsaWVudCB7XG4gICAgICAgIHJldHVybiBuZXcgRGVmYXVsdFJFU1RDbGllbnROYXRpdmUoaG9zdCk7XG4gICAgfVxufSIsImltcG9ydCBDbGllbnRSZXNwb25zZSBmcm9tIFwiQGZ1c2lvbmF1dGgvdHlwZXNjcmlwdC1jbGllbnQvYnVpbGQvc3JjL0NsaWVudFJlc3BvbnNlXCI7XG5pbXBvcnQge0h0dHBSZXNwb25zZSwgcmVxdWVzdH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuaW1wb3J0IElSRVNUQ2xpZW50IGZyb20gXCJAZnVzaW9uYXV0aC90eXBlc2NyaXB0LWNsaWVudC9idWlsZC9zcmMvSVJFU1RDbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFJFU1RDbGllbnROYXRpdmUgaW1wbGVtZW50cyBJUkVTVENsaWVudHtcbiAgICBwdWJsaWMgY3JlZGVudGlhbHM6IFJlcXVlc3RDcmVkZW50aWFscztcbiAgICBwdWJsaWMgaGVhZGVyczoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICBwdWJsaWMgaG9zdDogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJhbWV0ZXJzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9O1xuICAgIHByb3RlY3RlZCB1cmk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgYm9keTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBtZXRob2Q6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihob3N0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0ge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHt9O1xuXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGF1dGhvcml6YXRpb24gaGVhZGVyIHVzaW5nIGEga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSB2YWx1ZSBvZiB0aGUgYXV0aG9yaXphdGlvbiBoZWFkZXIuXG4gICAgICogQHJldHVybnMge0RlZmF1bHRSRVNUQ2xpZW50fVxuICAgICAqL1xuICAgIHdpdGhBdXRob3JpemF0aW9uKGtleT86IGFueSk6IElSRVNUQ2xpZW50e1xuICAgICAgICBpZiAoa2V5ID09PSBudWxsIHx8IHR5cGVvZiBrZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndpdGhIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHNlZ21lbnQgdG8gdGhlIHJlcXVlc3QgdXJpXG4gICAgICovXG4gICAgd2l0aFVyaVNlZ21lbnQoc2VnbWVudD86IGFueSk6IElSRVNUQ2xpZW50IHtcbiAgICAgICAgaWYgKHNlZ21lbnQgPT09IG51bGwgfHwgc2VnbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy51cmkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXJpID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudXJpLmNoYXJBdCh0aGlzLnVyaS5sZW5ndGggLSAxKSAhPT0gJy8nKSB7XG4gICAgICAgICAgICB0aGlzLnVyaSArPSAnLyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cmkgPSB0aGlzLnVyaSArIHNlZ21lbnQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZ1bGwgdXJsICsgcGFyYW1ldGVyIGxpc3RcbiAgICAgKi9cbiAgICBnZXRGdWxsVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvc3QgKyB0aGlzLnVyaSArIHRoaXMuZ2V0UXVlcnlTdHJpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGhlYWRlciB0byB0aGUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgVGhlIG5hbWUgb2YgdGhlIGhlYWRlci5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBoZWFkZXIuXG4gICAgICovXG4gICAgd2l0aEhlYWRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IElSRVNUQ2xpZW50IHtcbiAgICAgICAgdGhpcy5oZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJvZHkgb2YgdGhlIGNsaWVudCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIG9iamVjdCB0byBiZSB3cml0dGVuIHRvIHRoZSByZXF1ZXN0IGJvZHkgYXMgSlNPTi5cbiAgICAgKi9cbiAgICB3aXRoSlNPTkJvZHkoYm9keTogb2JqZWN0KTogSVJFU1RDbGllbnQge1xuICAgICAgICB0aGlzLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICAgICAgdGhpcy53aXRoSGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAvLyBPbWl0IHRoZSBDb250ZW50LUxlbmd0aCwgdGhpcyBpcyBzZXQgYXV0by1tYWdpY2FsbHkgYnkgdGhlIHJlcXVlc3QgbGlicmFyeVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaHR0cCBtZXRob2QgZm9yIHRoZSByZXF1ZXN0XG4gICAgICovXG4gICAgd2l0aE1ldGhvZChtZXRob2Q6IGFueSk6IElSRVNUQ2xpZW50IHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB1cmkgb2YgdGhlIHJlcXVlc3RcbiAgICAgKi9cbiAgICB3aXRoVXJpKHVyaTogYW55KTogSVJFU1RDbGllbnQge1xuICAgICAgICB0aGlzLnVyaSA9IHVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgcGFyYW1ldGVycyB0byB0aGUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgcGFyYW1ldGVyLCBtYXkgYmUgYSBzdHJpbmcsIG9iamVjdCBvciBudW1iZXIuXG4gICAgICovXG4gICAgd2l0aFBhcmFtZXRlcihuYW1lOiBhbnksIHZhbHVlOiBhbnkpOiBJUkVTVENsaWVudCB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUnVuIHRoZSByZXF1ZXN0IGFuZCByZXR1cm4gYSBwcm9taXNlLiBUaGlzIHByb21pc2Ugd2lsbCByZXNvbHZlIGlmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWxcbiAgICAgKiBhbmQgcmVqZWN0IG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBnbzxUPigpOiBQcm9taXNlPENsaWVudFJlc3BvbnNlPFQ+PiB7XG4gICAgICAgIGxldCBjbGllbnRSZXNwb25zZSA9IG5ldyBDbGllbnRSZXNwb25zZTxhbnk+KCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuZ2V0RnVsbFVybCgpLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5tZXRob2QsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuYm9keVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpIDogQ2xpZW50UmVzcG9uc2U8YW55PiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFJlc3BvbnNlLnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRSZXNwb25zZS5yZXNwb25zZSA9IHJlc3BvbnNlLmNvbnRlbnQucmF3O1xuICAgICAgICAgICAgICAgICAgICB0cnkgeyAvLyBUcnkgcGFyc2luZyBhcyBqc29uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRSZXNwb25zZS5yZXNwb25zZSA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsaWVudFJlc3BvbnNlLndhc1N1Y2Nlc3NmdWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNsaWVudFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNsaWVudFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9LGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50UmVzcG9uc2UuZXhjZXB0aW9uID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChjbGllbnRSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UXVlcnlTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gJyc7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IChxdWVyeVN0cmluZy5sZW5ndGggPT09IDApID8gJz8nIDogJyYnO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucGFyYW1ldGVyc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG4gICAgfVxuXG4gICAgd2l0aENyZWRlbnRpYWxzKHZhbHVlOiBcIm9taXRcIiB8IFwic2FtZS1vcmlnaW5cIiB8IFwiaW5jbHVkZVwiKTogSVJFU1RDbGllbnQge1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgRnVzaW9uQXV0aCwgQWxsIFJpZ2h0cyBSZXNlcnZlZFxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4qIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4qIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljXG4qIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IERlZmF1bHRSRVNUQ2xpZW50TmF0aXZlQnVpbGRlciBmcm9tIFwiQC9saWIvRGVhZmF1bHRSZXN0Q2xpZW50TmF0aXZlQnVpbGRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdXNpb25BdXRoQ2xpZW50TmF0aXZlIHtcbiAgICBwcml2YXRlIGFwaUtleTogYW55O1xuICAgIHByaXZhdGUgaG9zdDogYW55O1xuICAgIHByaXZhdGUgdGVuYW50SWQ6IGFueTtcbiAgICBwcml2YXRlIGNsaWVudEJ1aWxkZXI6IERlZmF1bHRSRVNUQ2xpZW50TmF0aXZlQnVpbGRlcjtcbiAgICBjcmVkZW50aWFsczogUmVxdWVzdENyZWRlbnRpYWxzO1xuICAgIGNvbnN0cnVjdG9yKGFwaUtleSwgaG9zdCwgdGVuYW50SWQ/KSB7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLnRlbmFudElkID0gdGVuYW50SWQ7XG4gICAgICAgIHRoaXMuY2xpZW50QnVpbGRlciA9IG5ldyBEZWZhdWx0UkVTVENsaWVudE5hdGl2ZUJ1aWxkZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGVuYW50IGlkLCB0aGF0IHdpbGwgYmUgaW5jbHVkZWQgaW4gdGhlIFgtRnVzaW9uQXV0aC1UZW5hbnRJZCBoZWFkZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IHRlbmFudElkIFRoZSB2YWx1ZSBvZiB0aGUgWC1GdXNpb25BdXRoLVRlbmFudElkIGhlYWRlci5cbiAgICAgKiBAcmV0dXJucyB7RnVzaW9uQXV0aENsaWVudH1cbiAgICAgKi9cbiAgICBzZXRUZW5hbnRJZCh0ZW5hbnRJZCkge1xuICAgICAgICB0aGlzLnRlbmFudElkID0gdGVuYW50SWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhbiBhY3Rpb24gb24gYSB1c2VyLiBUaGUgdXNlciBiZWluZyBhY3Rpb25lZCBpcyBjYWxsZWQgdGhlIFwiYWN0aW9uZWVcIiBhbmQgdGhlIHVzZXIgdGFraW5nIHRoZSBhY3Rpb24gaXMgY2FsbGVkIHRoZVxuICAgICAqIFwiYWN0aW9uZXJcIi4gQm90aCB1c2VyIGlkcyBhcmUgcmVxdWlyZWQuIFlvdSBwYXNzIHRoZSBhY3Rpb25lZSdzIHVzZXIgaWQgaW50byB0aGUgbWV0aG9kIGFuZCB0aGUgYWN0aW9uZXIncyBpcyBwdXQgaW50byB0aGVcbiAgICAgKiByZXF1ZXN0IG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25lZVVzZXJJZCBUaGUgYWN0aW9uZWUncyB1c2VyIGlkLlxuICAgICAqIEBwYXJhbSB7QWN0aW9uUmVxdWVzdH0gcmVxdWVzdCBUaGUgYWN0aW9uIHJlcXVlc3QgdGhhdCBpbmNsdWRlcyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhY3Rpb24gYmVpbmcgdGFrZW4gaW5jbHVkaW5nXG4gICAgICogICAgdGhlIGlkIG9mIHRoZSBhY3Rpb24sIGFueSBvcHRpb25zIGFuZCB0aGUgZHVyYXRpb24gKGlmIGFwcGxpY2FibGUpLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEFjdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgYWN0aW9uVXNlcihhY3Rpb25lZVVzZXJJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2FjdGlvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoYWN0aW9uZWVVc2VySWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdXNlciB0byBhbiBleGlzdGluZyBmYW1pbHkuIFRoZSBmYW1pbHkgaWQgbXVzdCBiZSBzcGVjaWZpZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmFtaWx5SWQgVGhlIGlkIG9mIHRoZSBmYW1pbHkuXG4gICAgICogQHBhcmFtIHtGYW1pbHlSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBkZXRlcm1pbmUgd2hpY2ggdXNlciB0byBhZGQgdG8gdGhlIGZhbWlseS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxGYW1pbHlSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGFkZFVzZXJUb0ZhbWlseShmYW1pbHlJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2ZhbWlseScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoZmFtaWx5SWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbmNlbHMgdGhlIHVzZXIgYWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbklkIFRoZSBhY3Rpb24gaWQgb2YgdGhlIGFjdGlvbiB0byBjYW5jZWwuXG4gICAgICogQHBhcmFtIHtBY3Rpb25SZXF1ZXN0fSByZXF1ZXN0IFRoZSBhY3Rpb24gcmVxdWVzdCB0aGF0IGNvbnRhaW5zIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2FuY2VsbGF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEFjdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY2FuY2VsQWN0aW9uKGFjdGlvbklkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvYWN0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhY3Rpb25JZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyBhIHVzZXIncyBwYXNzd29yZCB1c2luZyB0aGUgY2hhbmdlIHBhc3N3b3JkIElkLiBUaGlzIHVzdWFsbHkgb2NjdXJzIGFmdGVyIGFuIGVtYWlsIGhhcyBiZWVuIHNlbnQgdG8gdGhlIHVzZXJcbiAgICAgKiBhbmQgdGhleSBjbGlja2VkIG9uIGEgbGluayB0byByZXNldCB0aGVpciBwYXNzd29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFuZ2VQYXNzd29yZElkIFRoZSBjaGFuZ2UgcGFzc3dvcmQgSWQgdXNlZCB0byBmaW5kIHRoZSB1c2VyLiBUaGlzIHZhbHVlIGlzIGdlbmVyYXRlZCBieSBGdXNpb25BdXRoIG9uY2UgdGhlIGNoYW5nZSBwYXNzd29yZCB3b3JrZmxvdyBoYXMgYmVlbiBpbml0aWF0ZWQuXG4gICAgICogQHBhcmFtIHtDaGFuZ2VQYXNzd29yZFJlcXVlc3R9IHJlcXVlc3QgVGhlIGNoYW5nZSBwYXNzd29yZCByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNoYW5nZSB0aGUgcGFzc3dvcmQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8Q2hhbmdlUGFzc3dvcmRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNoYW5nZVBhc3N3b3JkKGNoYW5nZVBhc3N3b3JkSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGNoYW5nZVBhc3N3b3JkSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIGEgdXNlcidzIHBhc3N3b3JkIHVzaW5nIHRoZWlyIGlkZW50aXR5IChsb2dpbiBpZCBhbmQgcGFzc3dvcmQpLiBVc2luZyBhIGxvZ2luSWQgaW5zdGVhZCBvZiB0aGUgY2hhbmdlUGFzc3dvcmRJZFxuICAgICAqIGJ5cGFzc2VzIHRoZSBlbWFpbCB2ZXJpZmljYXRpb24gYW5kIGFsbG93cyBhIHBhc3N3b3JkIHRvIGJlIGNoYW5nZWQgZGlyZWN0bHkgd2l0aG91dCBmaXJzdCBjYWxsaW5nIHRoZSAjZm9yZ290UGFzc3dvcmRcbiAgICAgKiBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0NoYW5nZVBhc3N3b3JkUmVxdWVzdH0gcmVxdWVzdCBUaGUgY2hhbmdlIHBhc3N3b3JkIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY2hhbmdlIHRoZSBwYXNzd29yZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgY2hhbmdlUGFzc3dvcmRCeUlkZW50aXR5KHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbW1lbnQgdG8gdGhlIHVzZXIncyBhY2NvdW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtVc2VyQ29tbWVudFJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgdXNlciBjb21tZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBjb21tZW50T25Vc2VyKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9jb21tZW50JylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gYXBwbGljYXRpb24uIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGFuIElkIGZvciB0aGUgYXBwbGljYXRpb24sIGlmIG5vdCBwcm92aWRlZCBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCAoT3B0aW9uYWwpIFRoZSBJZCB0byB1c2UgZm9yIHRoZSBhcHBsaWNhdGlvbi4gSWYgbm90IHByb3ZpZGVkIGEgc2VjdXJlIHJhbmRvbSBVVUlEIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqIEBwYXJhbSB7QXBwbGljYXRpb25SZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjcmVhdGUgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEFwcGxpY2F0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBjcmVhdGVBcHBsaWNhdGlvbihhcHBsaWNhdGlvbklkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByb2xlIGZvciBhbiBhcHBsaWNhdGlvbi4gWW91IG11c3Qgc3BlY2lmeSB0aGUgaWQgb2YgdGhlIGFwcGxpY2F0aW9uIHlvdSBhcmUgY3JlYXRpbmcgdGhlIHJvbGUgZm9yLlxuICAgICAqIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGFuIElkIGZvciB0aGUgcm9sZSBpbnNpZGUgdGhlIEFwcGxpY2F0aW9uUm9sZSBvYmplY3QgaXRzZWxmLCBpZiBub3QgcHJvdmlkZWQgb25lIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgVGhlIElkIG9mIHRoZSBhcHBsaWNhdGlvbiB0byBjcmVhdGUgdGhlIHJvbGUgb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJvbGVJZCAoT3B0aW9uYWwpIFRoZSBJZCBvZiB0aGUgcm9sZS4gSWYgbm90IHByb3ZpZGVkIGEgc2VjdXJlIHJhbmRvbSBVVUlEIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqIEBwYXJhbSB7QXBwbGljYXRpb25SZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjcmVhdGUgdGhlIGFwcGxpY2F0aW9uIHJvbGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QXBwbGljYXRpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZUFwcGxpY2F0aW9uUm9sZShhcHBsaWNhdGlvbklkLCByb2xlSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoXCJyb2xlXCIpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQocm9sZUlkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBhdWRpdCBsb2cgd2l0aCB0aGUgbWVzc2FnZSBhbmQgdXNlciBuYW1lICh1c3VhbGx5IGFuIGVtYWlsKS4gQXVkaXQgbG9ncyBzaG91bGQgYmUgd3JpdHRlbiBhbnl0aW1lIHlvdVxuICAgICAqIG1ha2UgY2hhbmdlcyB0byB0aGUgRnVzaW9uQXV0aCBkYXRhYmFzZS4gV2hlbiB1c2luZyB0aGUgRnVzaW9uQXV0aCBBcHAgd2ViIGludGVyZmFjZSwgYW55IGNoYW5nZXMgYXJlIGF1dG9tYXRpY2FsbHlcbiAgICAgKiB3cml0dGVuIHRvIHRoZSBhdWRpdCBsb2cuIEhvd2V2ZXIsIGlmIHlvdSBhcmUgYWNjZXNzaW5nIHRoZSBBUEksIHlvdSBtdXN0IHdyaXRlIHRoZSBhdWRpdCBsb2dzIHlvdXJzZWxmLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBdWRpdExvZ1JlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgYXVkaXQgbG9nIGVudHJ5LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEF1ZGl0TG9nUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBjcmVhdGVBdWRpdExvZyhyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3N5c3RlbS9hdWRpdC1sb2cnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHVzZXIgY29uc2VudCB0eXBlLiBZb3UgY2FuIG9wdGlvbmFsbHkgc3BlY2lmeSBhbiBJZCBmb3IgdGhlIGNvbnNlbnQgdHlwZSwgaWYgbm90IHByb3ZpZGVkIG9uZSB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25zZW50SWQgKE9wdGlvbmFsKSBUaGUgSWQgZm9yIHRoZSBjb25zZW50LiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtDb25zZW50UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSBjb25zZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPENvbnNlbnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZUNvbnNlbnQoY29uc2VudElkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2NvbnNlbnQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGNvbnNlbnRJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gZW1haWwgdGVtcGxhdGUuIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGFuIElkIGZvciB0aGUgdGVtcGxhdGUsIGlmIG5vdCBwcm92aWRlZCBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWxUZW1wbGF0ZUlkIChPcHRpb25hbCkgVGhlIElkIGZvciB0aGUgdGVtcGxhdGUuIElmIG5vdCBwcm92aWRlZCBhIHNlY3VyZSByYW5kb20gVVVJRCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKiBAcGFyYW0ge0VtYWlsVGVtcGxhdGVSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjcmVhdGUgdGhlIGVtYWlsIHRlbXBsYXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEVtYWlsVGVtcGxhdGVSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZUVtYWlsVGVtcGxhdGUoZW1haWxUZW1wbGF0ZUlkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2VtYWlsL3RlbXBsYXRlJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChlbWFpbFRlbXBsYXRlSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZmFtaWx5IHdpdGggdGhlIHVzZXIgaWQgaW4gdGhlIHJlcXVlc3QgYXMgdGhlIG93bmVyIGFuZCBzb2xlIG1lbWJlciBvZiB0aGUgZmFtaWx5LiBZb3UgY2FuIG9wdGlvbmFsbHkgc3BlY2lmeSBhbiBpZCBmb3IgdGhlXG4gICAgICogZmFtaWx5LCBpZiBub3QgcHJvdmlkZWQgb25lIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZhbWlseUlkIChPcHRpb25hbCkgVGhlIGlkIGZvciB0aGUgZmFtaWx5LiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtGYW1pbHlSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjcmVhdGUgdGhlIGZhbWlseS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxGYW1pbHlSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZUZhbWlseShmYW1pbHlJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2ZhbWlseScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoZmFtaWx5SWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZ3JvdXAuIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGFuIElkIGZvciB0aGUgZ3JvdXAsIGlmIG5vdCBwcm92aWRlZCBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZCAoT3B0aW9uYWwpIFRoZSBJZCBmb3IgdGhlIGdyb3VwLiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtHcm91cFJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgZ3JvdXAuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8R3JvdXBSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZUdyb3VwKGdyb3VwSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvZ3JvdXAnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGdyb3VwSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbWVtYmVyIGluIGEgZ3JvdXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01lbWJlclJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgZ3JvdXAgbWVtYmVyKHMpLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPE1lbWJlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlR3JvdXBNZW1iZXJzKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvZ3JvdXAvbWVtYmVyJylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaWRlbnRpdHkgcHJvdmlkZXIuIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGFuIElkIGZvciB0aGUgaWRlbnRpdHkgcHJvdmlkZXIsIGlmIG5vdCBwcm92aWRlZCBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWRlbnRpdHlQcm92aWRlcklkIChPcHRpb25hbCkgVGhlIElkIG9mIHRoZSBpZGVudGl0eSBwcm92aWRlci4gSWYgbm90IHByb3ZpZGVkIGEgc2VjdXJlIHJhbmRvbSBVVUlEIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHlQcm92aWRlclJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgaWRlbnRpdHkgcHJvdmlkZXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8SWRlbnRpdHlQcm92aWRlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlSWRlbnRpdHlQcm92aWRlcihpZGVudGl0eVByb3ZpZGVySWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvaWRlbnRpdHktcHJvdmlkZXInKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGlkZW50aXR5UHJvdmlkZXJJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBMYW1iZGEuIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGFuIElkIGZvciB0aGUgbGFtYmRhLCBpZiBub3QgcHJvdmlkZWQgb25lIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbWJkYUlkIChPcHRpb25hbCkgVGhlIElkIGZvciB0aGUgbGFtYmRhLiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtMYW1iZGFSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjcmVhdGUgdGhlIGxhbWJkYS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxMYW1iZGFSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZUxhbWJkYShsYW1iZGFJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9sYW1iZGEnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGxhbWJkYUlkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRlbmFudC4gWW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgYW4gSWQgZm9yIHRoZSB0ZW5hbnQsIGlmIG5vdCBwcm92aWRlZCBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVuYW50SWQgKE9wdGlvbmFsKSBUaGUgSWQgZm9yIHRoZSB0ZW5hbnQuIElmIG5vdCBwcm92aWRlZCBhIHNlY3VyZSByYW5kb20gVVVJRCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKiBAcGFyYW0ge1RlbmFudFJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgdGVuYW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFRlbmFudFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlVGVuYW50KHRlbmFudElkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3RlbmFudCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodGVuYW50SWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgVGhlbWUuIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGFuIElkIGZvciB0aGUgdGhlbWUsIGlmIG5vdCBwcm92aWRlZCBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGhlbWVJZCAoT3B0aW9uYWwpIFRoZSBJZCBmb3IgdGhlIHRoZW1lLiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtUaGVtZVJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgdGhlbWUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VGhlbWVSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIGNyZWF0ZVRoZW1lKHRoZW1lSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdGhlbWUnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHRoZW1lSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdXNlci4gWW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgYW4gSWQgZm9yIHRoZSB1c2VyLCBpZiBub3QgcHJvdmlkZWQgb25lIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCAoT3B0aW9uYWwpIFRoZSBJZCBmb3IgdGhlIHVzZXIuIElmIG5vdCBwcm92aWRlZCBhIHNlY3VyZSByYW5kb20gVVVJRCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICAgKiBAcGFyYW0ge1VzZXJSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBjcmVhdGUgdGhlIHVzZXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlVXNlcih1c2VySWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlcicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlcklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHVzZXIgYWN0aW9uLiBUaGlzIGFjdGlvbiBjYW5ub3QgYmUgdGFrZW4gb24gYSB1c2VyIHVudGlsIHRoaXMgY2FsbCBzdWNjZXNzZnVsbHkgcmV0dXJucy4gQW55dGltZSBhZnRlclxuICAgICAqIHRoYXQgdGhlIHVzZXIgYWN0aW9uIGNhbiBiZSBhcHBsaWVkIHRvIGFueSB1c2VyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJBY3Rpb25JZCAoT3B0aW9uYWwpIFRoZSBJZCBmb3IgdGhlIHVzZXIgYWN0aW9uLiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtVc2VyQWN0aW9uUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSB1c2VyIGFjdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyQWN0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBjcmVhdGVVc2VyQWN0aW9uKHVzZXJBY3Rpb25JZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyLWFjdGlvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlckFjdGlvbklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHVzZXIgcmVhc29uLiBUaGlzIHVzZXIgYWN0aW9uIHJlYXNvbiBjYW5ub3QgYmUgdXNlZCB3aGVuIGFjdGlvbmluZyBhIHVzZXIgdW50aWwgdGhpcyBjYWxsIGNvbXBsZXRlc1xuICAgICAqIHN1Y2Nlc3NmdWxseS4gQW55dGltZSBhZnRlciB0aGF0IHRoZSB1c2VyIGFjdGlvbiByZWFzb24gY2FuIGJlIHVzZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFjdGlvblJlYXNvbklkIChPcHRpb25hbCkgVGhlIElkIGZvciB0aGUgdXNlciBhY3Rpb24gcmVhc29uLiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtVc2VyQWN0aW9uUmVhc29uUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSB1c2VyIGFjdGlvbiByZWFzb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlckFjdGlvblJlYXNvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgY3JlYXRlVXNlckFjdGlvblJlYXNvbih1c2VyQWN0aW9uUmVhc29uSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci1hY3Rpb24tcmVhc29uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VyQWN0aW9uUmVhc29uSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2luZ2xlIFVzZXIgY29uc2VudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQ29uc2VudElkIChPcHRpb25hbCkgVGhlIElkIGZvciB0aGUgVXNlciBjb25zZW50LiBJZiBub3QgcHJvdmlkZWQgYSBzZWN1cmUgcmFuZG9tIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHtVc2VyQ29uc2VudFJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyB0aGUgdXNlciBjb25zZW50IGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJDb25zZW50UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBjcmVhdGVVc2VyQ29uc2VudCh1c2VyQ29uc2VudElkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvY29uc2VudCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlckNvbnNlbnRJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB3ZWJob29rLiBZb3UgY2FuIG9wdGlvbmFsbHkgc3BlY2lmeSBhbiBJZCBmb3IgdGhlIHdlYmhvb2ssIGlmIG5vdCBwcm92aWRlZCBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2ViaG9va0lkIChPcHRpb25hbCkgVGhlIElkIGZvciB0aGUgd2ViaG9vay4gSWYgbm90IHByb3ZpZGVkIGEgc2VjdXJlIHJhbmRvbSBVVUlEIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqIEBwYXJhbSB7V2ViaG9va1JlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNyZWF0ZSB0aGUgd2ViaG9vay5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxXZWJob29rUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBjcmVhdGVXZWJob29rKHdlYmhvb2tJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS93ZWJob29rJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh3ZWJob29rSWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlcyB0aGUgYXBwbGljYXRpb24gd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgSWQgb2YgdGhlIGFwcGxpY2F0aW9uIHRvIGRlYWN0aXZhdGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlYWN0aXZhdGVBcHBsaWNhdGlvbihhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlcyB0aGUgdXNlciB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyIHRvIGRlYWN0aXZhdGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlYWN0aXZhdGVVc2VyKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VySWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlYWN0aXZhdGVzIHRoZSB1c2VyIGFjdGlvbiB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWN0aW9uSWQgVGhlIElkIG9mIHRoZSB1c2VyIGFjdGlvbiB0byBkZWFjdGl2YXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWFjdGl2YXRlVXNlckFjdGlvbih1c2VyQWN0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci1hY3Rpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJBY3Rpb25JZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVhY3RpdmF0ZXMgdGhlIHVzZXJzIHdpdGggdGhlIGdpdmVuIGlkcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXNlcklkcyBUaGUgaWRzIG9mIHRoZSB1c2VycyB0byBkZWFjdGl2YXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWFjdGl2YXRlVXNlcnModXNlcklkcykge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2J1bGsnKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJJZCcsIHVzZXJJZHMpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhcmQgZGVsZXRlcyBhbiBhcHBsaWNhdGlvbi4gVGhpcyBpcyBhIGRhbmdlcm91cyBvcGVyYXRpb24gYW5kIHNob3VsZCBub3QgYmUgdXNlZCBpbiBtb3N0IGNpcmN1bXN0YW5jZXMuIFRoaXMgd2lsbFxuICAgICAqIGRlbGV0ZSB0aGUgYXBwbGljYXRpb24sIGFueSByZWdpc3RyYXRpb25zIGZvciB0aGF0IGFwcGxpY2F0aW9uLCBtZXRyaWNzIGFuZCByZXBvcnRzIGZvciB0aGUgYXBwbGljYXRpb24sIGFsbCB0aGVcbiAgICAgKiByb2xlcyBmb3IgdGhlIGFwcGxpY2F0aW9uLCBhbmQgYW55IG90aGVyIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBhcHBsaWNhdGlvbi4gVGhpcyBvcGVyYXRpb24gY291bGQgdGFrZSBhIHZlcnlcbiAgICAgKiBsb25nIHRpbWUsIGRlcGVuZGluZyBvbiB0aGUgYW1vdW50IG9mIGRhdGEgaW4geW91ciBkYXRhYmFzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIFRoZSBJZCBvZiB0aGUgYXBwbGljYXRpb24gdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVBcHBsaWNhdGlvbihhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2hhcmREZWxldGUnLCB0cnVlKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYXJkIGRlbGV0ZXMgYW4gYXBwbGljYXRpb24gcm9sZS4gVGhpcyBpcyBhIGRhbmdlcm91cyBvcGVyYXRpb24gYW5kIHNob3VsZCBub3QgYmUgdXNlZCBpbiBtb3N0IGNpcmN1bXN0YW5jZXMuIFRoaXNcbiAgICAgKiBwZXJtYW5lbnRseSByZW1vdmVzIHRoZSBnaXZlbiByb2xlIGZyb20gYWxsIHVzZXJzIHRoYXQgaGFkIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgVGhlIElkIG9mIHRoZSBhcHBsaWNhdGlvbiB0byBkZWFjdGl2YXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByb2xlSWQgVGhlIElkIG9mIHRoZSByb2xlIHRvIGRlbGV0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgZGVsZXRlQXBwbGljYXRpb25Sb2xlKGFwcGxpY2F0aW9uSWQsIHJvbGVJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9hcHBsaWNhdGlvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoYXBwbGljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChcInJvbGVcIilcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChyb2xlSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgdGhlIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25zZW50SWQgVGhlIElkIG9mIHRoZSBjb25zZW50IHRvIGRlbGV0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgZGVsZXRlQ29uc2VudChjb25zZW50SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvY29uc2VudCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoY29uc2VudElkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSBlbWFpbCB0ZW1wbGF0ZSBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsVGVtcGxhdGVJZCBUaGUgSWQgb2YgdGhlIGVtYWlsIHRlbXBsYXRlIHRvIGRlbGV0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgZGVsZXRlRW1haWxUZW1wbGF0ZShlbWFpbFRlbXBsYXRlSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvZW1haWwvdGVtcGxhdGUnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGVtYWlsVGVtcGxhdGVJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgZ3JvdXAgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkIFRoZSBJZCBvZiB0aGUgZ3JvdXAgdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVHcm91cChncm91cElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2dyb3VwJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChncm91cElkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHVzZXJzIGFzIG1lbWJlcnMgb2YgYSBncm91cC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWVtYmVyRGVsZXRlUmVxdWVzdH0gcmVxdWVzdCBUaGUgbWVtYmVyIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gcmVtb3ZlIG1lbWJlcnMgdG8gdGhlIGdyb3VwLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVHcm91cE1lbWJlcnMocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9ncm91cC9tZW1iZXInKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSBpZGVudGl0eSBwcm92aWRlciBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkZW50aXR5UHJvdmlkZXJJZCBUaGUgSWQgb2YgdGhlIGlkZW50aXR5IHByb3ZpZGVyIHRvIGRlbGV0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgZGVsZXRlSWRlbnRpdHlQcm92aWRlcihpZGVudGl0eVByb3ZpZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvaWRlbnRpdHktcHJvdmlkZXInKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGlkZW50aXR5UHJvdmlkZXJJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUga2V5IGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5T2QgVGhlIElkIG9mIHRoZSBrZXkgdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVLZXkoa2V5T2QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkva2V5JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChrZXlPZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgbGFtYmRhIGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFtYmRhSWQgVGhlIElkIG9mIHRoZSBsYW1iZGEgdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVMYW1iZGEobGFtYmRhSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvbGFtYmRhJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChsYW1iZGFJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgdXNlciByZWdpc3RyYXRpb24gZm9yIHRoZSBnaXZlbiB1c2VyIGFuZCBhcHBsaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyIHdob3NlIHJlZ2lzdHJhdGlvbiBpcyBiZWluZyBkZWxldGVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIFRoZSBJZCBvZiB0aGUgYXBwbGljYXRpb24gdG8gcmVtb3ZlIHRoZSByZWdpc3RyYXRpb24gZm9yLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVSZWdpc3RyYXRpb24odXNlcklkLCBhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvcmVnaXN0cmF0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VySWQpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoYXBwbGljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgdGVuYW50IGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVuYW50SWQgVGhlIElkIG9mIHRoZSB0ZW5hbnQgdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVUZW5hbnQodGVuYW50SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdGVuYW50JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh0ZW5hbnRJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgdGhlbWUgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aGVtZUlkIFRoZSBJZCBvZiB0aGUgdGhlbWUgdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVUaGVtZSh0aGVtZUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3RoZW1lJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh0aGVtZUlkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSB1c2VyIGZvciB0aGUgZ2l2ZW4gSWQuIFRoaXMgcGVybWFuZW50bHkgZGVsZXRlcyBhbGwgaW5mb3JtYXRpb24sIG1ldHJpY3MsIHJlcG9ydHMgYW5kIGRhdGEgYXNzb2NpYXRlZFxuICAgICAqIHdpdGggdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgdXNlciB0byBkZWxldGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZVVzZXIodXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXInKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdoYXJkRGVsZXRlJywgdHJ1ZSlcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgdXNlciBhY3Rpb24gZm9yIHRoZSBnaXZlbiBJZC4gVGhpcyBwZXJtYW5lbnRseSBkZWxldGVzIHRoZSB1c2VyIGFjdGlvbiBhbmQgYWxzbyBhbnkgaGlzdG9yeSBhbmQgbG9ncyBvZlxuICAgICAqIHRoZSBhY3Rpb24gYmVpbmcgYXBwbGllZCB0byBhbnkgdXNlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFjdGlvbklkIFRoZSBJZCBvZiB0aGUgdXNlciBhY3Rpb24gdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVVc2VyQWN0aW9uKHVzZXJBY3Rpb25JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyLWFjdGlvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlckFjdGlvbklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2hhcmREZWxldGUnLCB0cnVlKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSB1c2VyIGFjdGlvbiByZWFzb24gZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWN0aW9uUmVhc29uSWQgVGhlIElkIG9mIHRoZSB1c2VyIGFjdGlvbiByZWFzb24gdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVVc2VyQWN0aW9uUmVhc29uKHVzZXJBY3Rpb25SZWFzb25JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyLWFjdGlvbi1yZWFzb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJBY3Rpb25SZWFzb25JZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgdXNlcnMgd2l0aCB0aGUgZ2l2ZW4gaWRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtVc2VyRGVsZXRlUmVxdWVzdH0gcmVxdWVzdCBUaGUgaWRzIG9mIHRoZSB1c2VycyB0byBkZWxldGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGRlbGV0ZVVzZXJzKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9idWxrJylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiREVMRVRFXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgd2ViaG9vayBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHdlYmhvb2tJZCBUaGUgSWQgb2YgdGhlIHdlYmhvb2sgdG8gZGVsZXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBkZWxldGVXZWJob29rKHdlYmhvb2tJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS93ZWJob29rJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh3ZWJob29rSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc2FibGUgVHdvIEZhY3RvciBhdXRoZW50aWNhdGlvbiBmb3IgYSB1c2VyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIFVzZXIgZm9yIHdoaWNoIHlvdSdyZSBkaXNhYmxpbmcgVHdvIEZhY3RvciBhdXRoZW50aWNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSBUaGUgVHdvIEZhY3RvciBjb2RlIHVzZWQgdmVyaWZ5IHRoZSB0aGUgY2FsbGVyIGtub3dzIHRoZSBUd28gRmFjdG9yIHNlY3JldC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgZGlzYWJsZVR3b0ZhY3Rvcih1c2VySWQsIGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci90d28tZmFjdG9yJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCd1c2VySWQnLCB1c2VySWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignY29kZScsIGNvZGUpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuYWJsZSBUd28gRmFjdG9yIGF1dGhlbnRpY2F0aW9uIGZvciBhIHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgdXNlciB0byBlbmFibGUgVHdvIEZhY3RvciBhdXRoZW50aWNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge1R3b0ZhY3RvclJlcXVlc3R9IHJlcXVlc3QgVGhlIHR3byBmYWN0b3IgZW5hYmxlIHJlcXVlc3QgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIGVuYWJsZVR3b0ZhY3Rvcih1c2VySWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci90d28tZmFjdG9yJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VySWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeGNoYW5nZSBhIHJlZnJlc2ggdG9rZW4gZm9yIGEgbmV3IEpXVC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVmcmVzaFJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlZnJlc2ggcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxSZWZyZXNoUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBleGNoYW5nZVJlZnJlc2hUb2tlbkZvckpXVChyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2p3dC9yZWZyZXNoJylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJlZ2lucyB0aGUgZm9yZ290IHBhc3N3b3JkIHNlcXVlbmNlLCB3aGljaCBraWNrcyBvZmYgYW4gZW1haWwgdG8gdGhlIHVzZXIgc28gdGhhdCB0aGV5IGNhbiByZXNldCB0aGVpciBwYXNzd29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Rm9yZ290UGFzc3dvcmRSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyIHNvIHRoYXQgdGhleSBjYW4gYmUgZW1haWxlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxGb3Jnb3RQYXNzd29yZFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgZm9yZ290UGFzc3dvcmQocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2ZvcmdvdC1wYXNzd29yZCcpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhIG5ldyBFbWFpbCBWZXJpZmljYXRpb24gSWQgdG8gYmUgdXNlZCB3aXRoIHRoZSBWZXJpZnkgRW1haWwgQVBJLiBUaGlzIEFQSSB3aWxsIG5vdCBhdHRlbXB0IHRvIHNlbmQgYW5cbiAgICAgKiBlbWFpbCB0byB0aGUgVXNlci4gVGhpcyBBUEkgbWF5IGJlIHVzZWQgdG8gY29sbGVjdCB0aGUgdmVyaWZpY2F0aW9uSWQgZm9yIHVzZSB3aXRoIGEgdGhpcmQgcGFydHkgc3lzdGVtLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSB1c2VyIHRoYXQgbmVlZHMgYSBuZXcgdmVyaWZpY2F0aW9uIGVtYWlsLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFZlcmlmeUVtYWlsUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUVtYWlsVmVyaWZpY2F0aW9uSWQoZW1haWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci92ZXJpZnktZW1haWwnKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2VtYWlsJywgZW1haWwpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignc2VuZFZlcmlmeUVtYWlsJywgZmFsc2UpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgbmV3IFJTQSBvciBFQyBrZXkgcGFpciBvciBhbiBITUFDIHNlY3JldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlJZCAoT3B0aW9uYWwpIFRoZSBJZCBmb3IgdGhlIGtleS4gSWYgbm90IHByb3ZpZGVkIGEgc2VjdXJlIHJhbmRvbSBVVUlEIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqIEBwYXJhbSB7S2V5UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSBrZXkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8S2V5UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUtleShrZXlJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9rZXkvZ2VuZXJhdGUnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGtleUlkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSBuZXcgQXBwbGljYXRpb24gUmVnaXN0cmF0aW9uIFZlcmlmaWNhdGlvbiBJZCB0byBiZSB1c2VkIHdpdGggdGhlIFZlcmlmeSBSZWdpc3RyYXRpb24gQVBJLiBUaGlzIEFQSSB3aWxsIG5vdCBhdHRlbXB0IHRvIHNlbmQgYW5cbiAgICAgKiBlbWFpbCB0byB0aGUgVXNlci4gVGhpcyBBUEkgbWF5IGJlIHVzZWQgdG8gY29sbGVjdCB0aGUgdmVyaWZpY2F0aW9uSWQgZm9yIHVzZSB3aXRoIGEgdGhpcmQgcGFydHkgc3lzdGVtLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSB1c2VyIHRoYXQgbmVlZHMgYSBuZXcgdmVyaWZpY2F0aW9uIGVtYWlsLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIFRoZSBJZCBvZiB0aGUgYXBwbGljYXRpb24gdG8gYmUgdmVyaWZpZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VmVyaWZ5UmVnaXN0cmF0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVJlZ2lzdHJhdGlvblZlcmlmaWNhdGlvbklkKGVtYWlsLCBhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvdmVyaWZ5LXJlZ2lzdHJhdGlvbicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignZW1haWwnLCBlbWFpbClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdzZW5kVmVyaWZ5UGFzc3dvcmRFbWFpbCcsIGZhbHNlKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2FwcGxpY2F0aW9uSWQnLCBhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhIFR3byBGYWN0b3Igc2VjcmV0IHRoYXQgY2FuIGJlIHVzZWQgdG8gZW5hYmxlIFR3byBGYWN0b3IgYXV0aGVudGljYXRpb24gZm9yIGEgVXNlci4gVGhlIHJlc3BvbnNlIHdpbGwgY29udGFpblxuICAgICAqIGJvdGggdGhlIHNlY3JldCBhbmQgYSBCYXNlMzIgZW5jb2RlZCBmb3JtIG9mIHRoZSBzZWNyZXQgd2hpY2ggY2FuIGJlIHNob3duIHRvIGEgVXNlciB3aGVuIHVzaW5nIGEgMiBTdGVwIEF1dGhlbnRpY2F0aW9uXG4gICAgICogYXBwbGljYXRpb24gc3VjaCBhcyBHb29nbGUgQXV0aGVudGljYXRvci5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFNlY3JldFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgZ2VuZXJhdGVUd29GYWN0b3JTZWNyZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3R3by1mYWN0b3Ivc2VjcmV0JylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSBUd28gRmFjdG9yIHNlY3JldCB0aGF0IGNhbiBiZSB1c2VkIHRvIGVuYWJsZSBUd28gRmFjdG9yIGF1dGhlbnRpY2F0aW9uIGZvciBhIFVzZXIuIFRoZSByZXNwb25zZSB3aWxsIGNvbnRhaW5cbiAgICAgKiBib3RoIHRoZSBzZWNyZXQgYW5kIGEgQmFzZTMyIGVuY29kZWQgZm9ybSBvZiB0aGUgc2VjcmV0IHdoaWNoIGNhbiBiZSBzaG93biB0byBhIFVzZXIgd2hlbiB1c2luZyBhIDIgU3RlcCBBdXRoZW50aWNhdGlvblxuICAgICAqIGFwcGxpY2F0aW9uIHN1Y2ggYXMgR29vZ2xlIEF1dGhlbnRpY2F0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW5jb2RlZEpXVCBUaGUgZW5jb2RlZCBKV1QgKGFjY2VzcyB0b2tlbikuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8U2VjcmV0UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVR3b0ZhY3RvclNlY3JldFVzaW5nSldUKGVuY29kZWRKV1QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdHdvLWZhY3Rvci9zZWNyZXQnKVxuICAgICAgICAgICAgLndpdGhBdXRob3JpemF0aW9uKCdKV1QgJyArIGVuY29kZWRKV1QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgbG9naW4gdmlhIHRoaXJkLXBhcnRpZXMgaW5jbHVkaW5nIFNvY2lhbCBsb2dpbiwgZXh0ZXJuYWwgT0F1dGggYW5kIE9wZW5JRCBDb25uZWN0LCBhbmQgb3RoZXJcbiAgICAgKiBsb2dpbiBzeXN0ZW1zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJZGVudGl0eVByb3ZpZGVyTG9naW5SZXF1ZXN0fSByZXF1ZXN0IFRoZSB0aGlyZC1wYXJ0eSBsb2dpbiByZXF1ZXN0IHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gZnJvbSB0aGUgdGhpcmQtcGFydHkgbG9naW5cbiAgICAgKiAgICBwcm92aWRlcnMgdGhhdCBGdXNpb25BdXRoIHVzZXMgdG8gcmVjb25jaWxlIHRoZSB1c2VyJ3MgYWNjb3VudC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxMb2dpblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgaWRlbnRpdHlQcm92aWRlckxvZ2luKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvaWRlbnRpdHktcHJvdmlkZXIvbG9naW4nKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW1wb3J0IGFuIGV4aXN0aW5nIFJTQSBvciBFQyBrZXkgcGFpciBvciBhbiBITUFDIHNlY3JldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlJZCAoT3B0aW9uYWwpIFRoZSBJZCBmb3IgdGhlIGtleS4gSWYgbm90IHByb3ZpZGVkIGEgc2VjdXJlIHJhbmRvbSBVVUlEIHdpbGwgYmUgZ2VuZXJhdGVkLlxuICAgICAqIEBwYXJhbSB7S2V5UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIHVzZWQgdG8gY3JlYXRlIHRoZSBrZXkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8S2V5UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBpbXBvcnRLZXkoa2V5SWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkva2V5L2ltcG9ydCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoa2V5SWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWxrIGltcG9ydHMgbXVsdGlwbGUgdXNlcnMuIFRoaXMgZG9lcyBzb21lIHZhbGlkYXRpb24sIGJ1dCB0aGVuIHRyaWVzIHRvIHJ1biBiYXRjaCBpbnNlcnRzIG9mIHVzZXJzLiBUaGlzIHJlZHVjZXNcbiAgICAgKiBsYXRlbmN5IHdoZW4gaW5zZXJ0aW5nIGxvdHMgb2YgdXNlcnMuIFRoZXJlZm9yZSwgdGhlIGVycm9yIHJlc3BvbnNlIG1pZ2h0IGNvbnRhaW4gc29tZSBpbmZvcm1hdGlvbiBhYm91dCBmYWlsdXJlcyxcbiAgICAgKiBidXQgaXQgd2lsbCBsaWtlbHkgYmUgcHJldHR5IGdlbmVyaWMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ltcG9ydFJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIGFib3V0IGFsbCBvZiB0aGUgdXNlcnMgdG8gaW1wb3J0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBpbXBvcnRVc2VycyhyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvaW1wb3J0JylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElzc3VlIGEgbmV3IGFjY2VzcyB0b2tlbiAoSldUKSBmb3IgdGhlIHJlcXVlc3RlZCBBcHBsaWNhdGlvbiBhZnRlciBlbnN1cmluZyB0aGUgcHJvdmlkZWQgSldUIGlzIHZhbGlkLiBBIHZhbGlkXG4gICAgICogYWNjZXNzIHRva2VuIGlzIHByb3Blcmx5IHNpZ25lZCBhbmQgbm90IGV4cGlyZWQuXG4gICAgICogPHA+XG4gICAgICogVGhpcyBBUEkgbWF5IGJlIHVzZWQgaW4gYW4gU1NPIGNvbmZpZ3VyYXRpb24gdG8gaXNzdWUgbmV3IHRva2VucyBmb3IgYW5vdGhlciBhcHBsaWNhdGlvbiBhZnRlciB0aGUgdXNlciBoYXNcbiAgICAgKiBvYnRhaW5lZCBhIHZhbGlkIHRva2VuIGZyb20gYXV0aGVudGljYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgQXBwbGljYXRpb24gSWQgZm9yIHdoaWNoIHlvdSBhcmUgcmVxdWVzdGluZyBhIG5ldyBhY2Nlc3MgdG9rZW4gYmUgaXNzdWVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmNvZGVkSldUIFRoZSBlbmNvZGVkIEpXVCAoYWNjZXNzIHRva2VuKS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxJc3N1ZVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgaXNzdWVKV1QoYXBwbGljYXRpb25JZCwgZW5jb2RlZEpXVCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9qd3QvaXNzdWUnKVxuICAgICAgICAgICAgLndpdGhBdXRob3JpemF0aW9uKCdKV1QgJyArIGVuY29kZWRKV1QpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignYXBwbGljYXRpb25JZCcsIGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF1dGhlbnRpY2F0ZXMgYSB1c2VyIHRvIEZ1c2lvbkF1dGguXG4gICAgICpcbiAgICAgKiBUaGlzIEFQSSBvcHRpb25hbGx5IHJlcXVpcmVzIGFuIEFQSSBrZXkuIFNlZSA8Y29kZT5BcHBsaWNhdGlvbi5sb2dpbkNvbmZpZ3VyYXRpb24ucmVxdWlyZUF1dGhlbnRpY2F0aW9uPC9jb2RlPi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TG9naW5SZXF1ZXN0fSByZXF1ZXN0IFRoZSBsb2dpbiByZXF1ZXN0IHRoYXQgY29udGFpbnMgdGhlIHVzZXIgY3JlZGVudGlhbHMgdXNlZCB0byBsb2cgdGhlbSBpbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxMb2dpblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgbG9naW4ocmVxdWVzdCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2xvZ2luJylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcGluZyB0byBGdXNpb25BdXRoIGluZGljYXRpbmcgdGhhdCB0aGUgdXNlciB3YXMgYXV0b21hdGljYWxseSBsb2dnZWQgaW50byBhbiBhcHBsaWNhdGlvbi4gV2hlbiB1c2luZ1xuICAgICAqIEZ1c2lvbkF1dGgncyBTU08gb3IgeW91ciBvd24sIHlvdSBzaG91bGQgY2FsbCB0aGlzIGlmIHRoZSB1c2VyIGlzIGFscmVhZHkgbG9nZ2VkIGluIGNlbnRyYWxseSwgYnV0IGFjY2Vzc2VzIGFuXG4gICAgICogYXBwbGljYXRpb24gd2hlcmUgdGhleSBubyBsb25nZXIgaGF2ZSBhIHNlc3Npb24uIFRoaXMgaGVscHMgY29ycmVjdGx5IHRyYWNrIGxvZ2luIGNvdW50cywgdGltZXMgYW5kIGhlbHBzIHdpdGhcbiAgICAgKiByZXBvcnRpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgdXNlciB0aGF0IHdhcyBsb2dnZWQgaW4uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgVGhlIElkIG9mIHRoZSBhcHBsaWNhdGlvbiB0aGF0IHRoZXkgbG9nZ2VkIGludG8uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhbGxlcklQQWRkcmVzcyAoT3B0aW9uYWwpIFRoZSBJUCBhZGRyZXNzIG9mIHRoZSBlbmQtdXNlciB0aGF0IGlzIGxvZ2dpbmcgaW4uIElmIGEgbnVsbCB2YWx1ZSBpcyBwcm92aWRlZFxuICAgICAqICAgIHRoZSBJUCBhZGRyZXNzIHdpbGwgYmUgdGhhdCBvZiB0aGUgY2xpZW50IG9yIGxhc3QgcHJveHkgdGhhdCBzZW50IHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBsb2dpblBpbmcodXNlcklkLCBhcHBsaWNhdGlvbklkLCBjYWxsZXJJUEFkZHJlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvbG9naW4nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2lwQWRkcmVzcycsIGNhbGxlcklQQWRkcmVzcylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIExvZ291dCBBUEkgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCB0byByZW1vdmUgdGhlIHJlZnJlc2ggdG9rZW4gYW5kIGFjY2VzcyB0b2tlbiBjb29raWVzIGlmIHRoZXkgZXhpc3Qgb24gdGhlXG4gICAgICogY2xpZW50IGFuZCByZXZva2UgdGhlIHJlZnJlc2ggdG9rZW4gc3RvcmVkLiBUaGlzIEFQSSBkb2VzIG5vdGhpbmcgaWYgdGhlIHJlcXVlc3QgZG9lcyBub3QgY29udGFpbiBhbiBhY2Nlc3NcbiAgICAgKiB0b2tlbiBvciByZWZyZXNoIHRva2VuIGNvb2tpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdsb2JhbCBXaGVuIHRoaXMgdmFsdWUgaXMgc2V0IHRvIHRydWUgYWxsIG9mIHRoZSByZWZyZXNoIHRva2VucyBpc3N1ZWQgdG8gdGhlIG93bmVyIG9mIHRoZVxuICAgICAqICAgIHByb3ZpZGVkIHRva2VuIHdpbGwgYmUgcmV2b2tlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmcmVzaFRva2VuIChPcHRpb25hbCkgVGhlIHJlZnJlc2hfdG9rZW4gYXMgYSByZXF1ZXN0IHBhcmFtZXRlciBpbnN0ZWFkIG9mIGNvbWluZyBpbiB2aWEgYSBjb29raWUuXG4gICAgICogICAgSWYgcHJvdmlkZWQgdGhpcyB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIGNvb2tpZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgbG9nb3V0KGdsb2JhbCwgcmVmcmVzaFRva2VuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoSGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbicpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9sb2dvdXQnKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2dsb2JhbCcsIGdsb2JhbClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdyZWZyZXNoVG9rZW4nLCByZWZyZXNoVG9rZW4pXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGlkZW50aXR5IHByb3ZpZGVyIGZvciB0aGUgZ2l2ZW4gZG9tYWluLiBBIDIwMCByZXNwb25zZSBjb2RlIGluZGljYXRlcyB0aGUgZG9tYWluIGlzIG1hbmFnZWRcbiAgICAgKiBieSBhIHJlZ2lzdGVyZWQgaWRlbnRpdHkgcHJvdmlkZXIuIEEgNDA0IGluZGljYXRlcyB0aGUgZG9tYWluIGlzIG5vdCBtYW5hZ2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG9yIGVtYWlsIGFkZHJlc3MgdG8gbG9va3VwLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPExvb2t1cFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgbG9va3VwSWRlbnRpdHlQcm92aWRlcihkb21haW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvaWRlbnRpdHktcHJvdmlkZXIvbG9va3VwJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdkb21haW4nLCBkb21haW4pXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1vZGlmaWVzIGEgdGVtcG9yYWwgdXNlciBhY3Rpb24gYnkgY2hhbmdpbmcgdGhlIGV4cGlyYXRpb24gb2YgdGhlIGFjdGlvbiBhbmQgb3B0aW9uYWxseSBhZGRpbmcgYSBjb21tZW50IHRvIHRoZVxuICAgICAqIGFjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25JZCBUaGUgSWQgb2YgdGhlIGFjdGlvbiB0byBtb2RpZnkuIFRoaXMgaXMgdGVjaG5pY2FsbHkgdGhlIHVzZXIgYWN0aW9uIGxvZyBpZC5cbiAgICAgKiBAcGFyYW0ge0FjdGlvblJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBtb2RpZmljYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QWN0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBtb2RpZnlBY3Rpb24oYWN0aW9uSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9hY3Rpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGFjdGlvbklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wbGV0ZSBhIGxvZ2luIHJlcXVlc3QgdXNpbmcgYSBwYXNzd29yZGxlc3MgY29kZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXNzd29yZGxlc3NMb2dpblJlcXVlc3R9IHJlcXVlc3QgVGhlIHBhc3N3b3JkbGVzcyBsb2dpbiByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIGNvbXBsZXRlIGxvZ2luLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPExvZ2luUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBwYXNzd29yZGxlc3NMb2dpbihyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3Bhc3N3b3JkbGVzcy9sb2dpbicpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFjdGl2YXRlcyB0aGUgYXBwbGljYXRpb24gd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgSWQgb2YgdGhlIGFwcGxpY2F0aW9uIHRvIHJlYWN0aXZhdGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QXBwbGljYXRpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJlYWN0aXZhdGVBcHBsaWNhdGlvbihhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3JlYWN0aXZhdGUnLCB0cnVlKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFjdGl2YXRlcyB0aGUgdXNlciB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyIHRvIHJlYWN0aXZhdGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmVhY3RpdmF0ZVVzZXIodXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXInKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdyZWFjdGl2YXRlJywgdHJ1ZSlcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVhY3RpdmF0ZXMgdGhlIHVzZXIgYWN0aW9uIHdpdGggdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJBY3Rpb25JZCBUaGUgSWQgb2YgdGhlIHVzZXIgYWN0aW9uIHRvIHJlYWN0aXZhdGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlckFjdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmVhY3RpdmF0ZVVzZXJBY3Rpb24odXNlckFjdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXItYWN0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VyQWN0aW9uSWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigncmVhY3RpdmF0ZScsIHRydWUpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlY29uY2lsZSBhIFVzZXIgdG8gRnVzaW9uQXV0aCB1c2luZyBKV1QgaXNzdWVkIGZyb20gYW5vdGhlciBJZGVudGl0eSBQcm92aWRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHlQcm92aWRlckxvZ2luUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVjb25jaWxlIHJlcXVlc3QgdGhhdCBjb250YWlucyB0aGUgZGF0YSB0byByZWNvbmNpbGUgdGhlIFVzZXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TG9naW5SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJlY29uY2lsZUpXVChyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2p3dC9yZWNvbmNpbGUnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIHJlZnJlc2ggb2YgdGhlIFVzZXIgc2VhcmNoIGluZGV4LiBUaGlzIEFQSSBpcyBub3QgZ2VuZXJhbGx5IG5lY2Vzc2FyeSBhbmQgdGhlIHNlYXJjaCBpbmRleCB3aWxsIGJlY29tZSBjb25zaXN0ZW50IGluIGFcbiAgICAgKiByZWFzb25hYmxlIGFtb3VudCBvZiB0aW1lLiBUaGVyZSBtYXkgYmUgc2NlbmFyaW9zIHdoZXJlIHlvdSBtYXkgd2lzaCB0byBtYW51YWxseSByZXF1ZXN0IGFuIGluZGV4IHJlZnJlc2guIE9uZSBleGFtcGxlIG1heSBiZVxuICAgICAqIGlmIHlvdSBhcmUgdXNpbmcgdGhlIFNlYXJjaCBBUEkgb3IgRGVsZXRlIFRlbmFudCBBUEkgaW1tZWRpYXRlbHkgZm9sbG93aW5nIGEgVXNlciBDcmVhdGUgZXRjLCB5b3UgbWF5IHdpc2ggdG8gcmVxdWVzdCBhIHJlZnJlc2ggdG9cbiAgICAgKiAgZW5zdXJlIHRoZSBpbmRleCBpbW1lZGlhdGVseSBjdXJyZW50IGJlZm9yZSBtYWtpbmcgYSBxdWVyeSByZXF1ZXN0IHRvIHRoZSBzZWFyY2ggaW5kZXguXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgcmVmcmVzaFVzZXJTZWFyY2hJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9zZWFyY2gnKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSB1c2VyIGZvciBhbiBhcHBsaWNhdGlvbi4gSWYgeW91IHByb3ZpZGUgdGhlIFVzZXIgYW5kIHRoZSBVc2VyUmVnaXN0cmF0aW9uIG9iamVjdCBvbiB0aGlzIHJlcXVlc3QsIGl0XG4gICAgICogd2lsbCBjcmVhdGUgdGhlIHVzZXIgYXMgd2VsbCBhcyByZWdpc3RlciB0aGVtIGZvciB0aGUgYXBwbGljYXRpb24uIFRoaXMgaXMgY2FsbGVkIGEgRnVsbCBSZWdpc3RyYXRpb24uIEhvd2V2ZXIsIGlmXG4gICAgICogeW91IG9ubHkgcHJvdmlkZSB0aGUgVXNlclJlZ2lzdHJhdGlvbiBvYmplY3QsIHRoZW4gdGhlIHVzZXIgbXVzdCBhbHJlYWR5IGV4aXN0IGFuZCB0aGV5IHdpbGwgYmUgcmVnaXN0ZXJlZCBmb3IgdGhlXG4gICAgICogYXBwbGljYXRpb24uIFRoZSB1c2VyIGlkIGNhbiBhbHNvIGJlIHByb3ZpZGVkIGFuZCBpdCB3aWxsIGVpdGhlciBiZSB1c2VkIHRvIGxvb2sgdXAgYW4gZXhpc3RpbmcgdXNlciBvciBpdCB3aWxsIGJlXG4gICAgICogdXNlZCBmb3IgdGhlIG5ld2x5IGNyZWF0ZWQgVXNlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgKE9wdGlvbmFsKSBUaGUgSWQgb2YgdGhlIHVzZXIgYmVpbmcgcmVnaXN0ZXJlZCBmb3IgdGhlIGFwcGxpY2F0aW9uIGFuZCBvcHRpb25hbGx5IGNyZWF0ZWQuXG4gICAgICogQHBhcmFtIHtSZWdpc3RyYXRpb25SZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgb3B0aW9uYWxseSBjb250YWlucyB0aGUgVXNlciBhbmQgbXVzdCBjb250YWluIHRoZSBVc2VyUmVnaXN0cmF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFJlZ2lzdHJhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmVnaXN0ZXIodXNlcklkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvcmVnaXN0cmF0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VySWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgdXNlciBmcm9tIHRoZSBmYW1pbHkgd2l0aCB0aGUgZ2l2ZW4gaWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmFtaWx5SWQgVGhlIGlkIG9mIHRoZSBmYW1pbHkgdG8gcmVtb3ZlIHRoZSB1c2VyIGZyb20uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgaWQgb2YgdGhlIHVzZXIgdG8gcmVtb3ZlIGZyb20gdGhlIGZhbWlseS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgcmVtb3ZlVXNlckZyb21GYW1pbHkoZmFtaWx5SWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2ZhbWlseScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoZmFtaWx5SWQpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlcklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZS1zZW5kcyB0aGUgdmVyaWZpY2F0aW9uIGVtYWlsIHRvIHRoZSB1c2VyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSB1c2VyIHRoYXQgbmVlZHMgYSBuZXcgdmVyaWZpY2F0aW9uIGVtYWlsLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFZlcmlmeUVtYWlsUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXNlbmRFbWFpbFZlcmlmaWNhdGlvbihlbWFpbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3ZlcmlmeS1lbWFpbCcpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignZW1haWwnLCBlbWFpbClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmUtc2VuZHMgdGhlIGFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiB2ZXJpZmljYXRpb24gZW1haWwgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWwgVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgdGhhdCBuZWVkcyBhIG5ldyB2ZXJpZmljYXRpb24gZW1haWwuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgVGhlIElkIG9mIHRoZSBhcHBsaWNhdGlvbiB0byBiZSB2ZXJpZmllZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxWZXJpZnlSZWdpc3RyYXRpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJlc2VuZFJlZ2lzdHJhdGlvblZlcmlmaWNhdGlvbihlbWFpbCwgYXBwbGljYXRpb25JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3ZlcmlmeS1yZWdpc3RyYXRpb24nKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2VtYWlsJywgZW1haWwpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignYXBwbGljYXRpb25JZCcsIGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIHNpbmdsZSBhY3Rpb24gbG9nICh0aGUgbG9nIG9mIGEgdXNlciBhY3Rpb24gdGhhdCB3YXMgdGFrZW4gb24gYSB1c2VyIHByZXZpb3VzbHkpIGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uSWQgVGhlIElkIG9mIHRoZSBhY3Rpb24gdG8gcmV0cmlldmUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QWN0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUFjdGlvbihhY3Rpb25JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2FjdGlvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoYWN0aW9uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGFjdGlvbnMgZm9yIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIElkLiBUaGlzIHdpbGwgcmV0dXJuIGFsbCB0aW1lIGJhc2VkIGFjdGlvbnMgdGhhdCBhcmUgYWN0aXZlLFxuICAgICAqIGFuZCBpbmFjdGl2ZSBhcyB3ZWxsIGFzIG5vbi10aW1lIGJhc2VkIGFjdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgdXNlciB0byBmZXRjaCB0aGUgYWN0aW9ucyBmb3IuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QWN0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUFjdGlvbnModXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvYWN0aW9uJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCd1c2VySWQnLCB1c2VySWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGFjdGlvbnMgZm9yIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIElkIHRoYXQgYXJlIGN1cnJlbnRseSBwcmV2ZW50aW5nIHRoZSBVc2VyIGZyb20gbG9nZ2luZyBpbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyIHRvIGZldGNoIHRoZSBhY3Rpb25zIGZvci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBY3Rpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlQWN0aW9uc1ByZXZlbnRpbmdMb2dpbih1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9hY3Rpb24nKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJJZCcsIHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdwcmV2ZW50aW5nTG9naW4nLCB0cnVlKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBhY3Rpb25zIGZvciB0aGUgdXNlciB3aXRoIHRoZSBnaXZlbiBJZCB0aGF0IGFyZSBjdXJyZW50bHkgYWN0aXZlLlxuICAgICAqIEFuIGFjdGl2ZSBhY3Rpb24gbWVhbnMgb25lIHRoYXQgaXMgdGltZSBiYXNlZCBhbmQgaGFzIG5vdCBiZWVuIGNhbmNlbGVkLCBhbmQgaGFzIG5vdCBlbmRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyIHRvIGZldGNoIHRoZSBhY3Rpb25zIGZvci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBY3Rpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlQWN0aXZlQWN0aW9ucyh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9hY3Rpb24nKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJJZCcsIHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdhY3RpdmUnLCB0cnVlKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGFwcGxpY2F0aW9uIGZvciB0aGUgZ2l2ZW4gaWQgb3IgYWxsIG9mIHRoZSBhcHBsaWNhdGlvbnMgaWYgdGhlIGlkIGlzIG51bGwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCAoT3B0aW9uYWwpIFRoZSBhcHBsaWNhdGlvbiBpZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBcHBsaWNhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVBcHBsaWNhdGlvbihhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBhcHBsaWNhdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBcHBsaWNhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVBcHBsaWNhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGEgc2luZ2xlIGF1ZGl0IGxvZyBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGF1ZGl0TG9nSWQgVGhlIElkIG9mIHRoZSBhdWRpdCBsb2cgdG8gcmV0cmlldmUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QXVkaXRMb2dSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlQXVkaXRMb2coYXVkaXRMb2dJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9zeXN0ZW0vYXVkaXQtbG9nJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhdWRpdExvZ0lkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIENvbnNlbnQgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25zZW50SWQgVGhlIElkIG9mIHRoZSBjb25zZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPENvbnNlbnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlQ29uc2VudChjb25zZW50SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvY29uc2VudCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoY29uc2VudElkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBjb25zZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8Q29uc2VudFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVDb25zZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvY29uc2VudCcpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgZGFpbHkgYWN0aXZlIHVzZXIgcmVwb3J0IGJldHdlZW4gdGhlIHR3byBpbnN0YW50cy4gSWYgeW91IHNwZWNpZnkgYW4gYXBwbGljYXRpb24gaWQsIGl0IHdpbGwgb25seVxuICAgICAqIHJldHVybiB0aGUgZGFpbHkgYWN0aXZlIGNvdW50cyBmb3IgdGhhdCBhcHBsaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIChPcHRpb25hbCkgVGhlIGFwcGxpY2F0aW9uIGlkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgaW5zdGFudCBhcyBVVEMgbWlsbGlzZWNvbmRzIHNpbmNlIEVwb2NoLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGVuZCBpbnN0YW50IGFzIFVUQyBtaWxsaXNlY29uZHMgc2luY2UgRXBvY2guXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8RGFpbHlBY3RpdmVVc2VyUmVwb3J0UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZURhaWx5QWN0aXZlUmVwb3J0KGFwcGxpY2F0aW9uSWQsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvcmVwb3J0L2RhaWx5LWFjdGl2ZS11c2VyJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdhcHBsaWNhdGlvbklkJywgYXBwbGljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdzdGFydCcsIHN0YXJ0KVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2VuZCcsIGVuZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBlbWFpbCB0ZW1wbGF0ZSBmb3IgdGhlIGdpdmVuIElkLiBJZiB5b3UgZG9uJ3Qgc3BlY2lmeSB0aGUgaWQsIHRoaXMgd2lsbCByZXR1cm4gYWxsIG9mIHRoZSBlbWFpbCB0ZW1wbGF0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWxUZW1wbGF0ZUlkIChPcHRpb25hbCkgVGhlIElkIG9mIHRoZSBlbWFpbCB0ZW1wbGF0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxFbWFpbFRlbXBsYXRlUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUVtYWlsVGVtcGxhdGUoZW1haWxUZW1wbGF0ZUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2VtYWlsL3RlbXBsYXRlJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChlbWFpbFRlbXBsYXRlSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcmV2aWV3IG9mIHRoZSBlbWFpbCB0ZW1wbGF0ZSBwcm92aWRlZCBpbiB0aGUgcmVxdWVzdC4gVGhpcyBhbGxvd3MgeW91IHRvIHByZXZpZXcgYW4gZW1haWwgdGVtcGxhdGUgdGhhdFxuICAgICAqIGhhc24ndCBiZWVuIHNhdmVkIHRvIHRoZSBkYXRhYmFzZSB5ZXQuIFRoZSBlbnRpcmUgZW1haWwgdGVtcGxhdGUgZG9lcyBub3QgbmVlZCB0byBiZSBwcm92aWRlZCBvbiB0aGUgcmVxdWVzdC4gVGhpc1xuICAgICAqIHdpbGwgY3JlYXRlIHRoZSBwcmV2aWV3IGJhc2VkIG9uIHdoYXRldmVyIGlzIGdpdmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQcmV2aWV3UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIHRoZSBlbWFpbCB0ZW1wbGF0ZSBhbmQgb3B0aW9uYWxseSBhIGxvY2FsZSB0byByZW5kZXIgaXQgaW4uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8UHJldmlld1Jlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVFbWFpbFRlbXBsYXRlUHJldmlldyhyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2VtYWlsL3RlbXBsYXRlL3ByZXZpZXcnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgZW1haWwgdGVtcGxhdGVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8RW1haWxUZW1wbGF0ZVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVFbWFpbFRlbXBsYXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvZW1haWwvdGVtcGxhdGUnKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYSBzaW5nbGUgZXZlbnQgbG9nIGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnRMb2dJZCBUaGUgSWQgb2YgdGhlIGV2ZW50IGxvZyB0byByZXRyaWV2ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxFdmVudExvZ1Jlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVFdmVudExvZyhldmVudExvZ0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3N5c3RlbS9ldmVudC1sb2cnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGV2ZW50TG9nSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGZhbWlsaWVzIHRoYXQgYSB1c2VyIGJlbG9uZ3MgdG8uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBVc2VyJ3MgaWRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxGYW1pbHlSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlRmFtaWxpZXModXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvZmFtaWx5JylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCd1c2VySWQnLCB1c2VySWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIG1lbWJlcnMgb2YgYSBmYW1pbHkgYnkgdGhlIHVuaXF1ZSBGYW1pbHkgSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmFtaWx5SWQgVGhlIHVuaXF1ZSBJZCBvZiB0aGUgRmFtaWx5LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEZhbWlseVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVGYW1pbHlNZW1iZXJzQnlGYW1pbHlJZChmYW1pbHlJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2ZhbWlseScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoZmFtaWx5SWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgZ3JvdXAgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkIFRoZSBJZCBvZiB0aGUgZ3JvdXAuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8R3JvdXBSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlR3JvdXAoZ3JvdXBJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9ncm91cCcpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoZ3JvdXBJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgZ3JvdXBzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8R3JvdXBSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlR3JvdXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9ncm91cCcpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgaWRlbnRpdHkgcHJvdmlkZXIgZm9yIHRoZSBnaXZlbiBpZCBvciBhbGwgb2YgdGhlIGlkZW50aXR5IHByb3ZpZGVycyBpZiB0aGUgaWQgaXMgbnVsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZGVudGl0eVByb3ZpZGVySWQgKE9wdGlvbmFsKSBUaGUgaWRlbnRpdHkgcHJvdmlkZXIgaWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8SWRlbnRpdHlQcm92aWRlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVJZGVudGl0eVByb3ZpZGVyKGlkZW50aXR5UHJvdmlkZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9pZGVudGl0eS1wcm92aWRlcicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoaWRlbnRpdHlQcm92aWRlcklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBpZGVudGl0eSBwcm92aWRlcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxJZGVudGl0eVByb3ZpZGVyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUlkZW50aXR5UHJvdmlkZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9pZGVudGl0eS1wcm92aWRlcicpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGFjdGlvbnMgZm9yIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIElkIHRoYXQgYXJlIGN1cnJlbnRseSBpbmFjdGl2ZS5cbiAgICAgKiBBbiBpbmFjdGl2ZSBhY3Rpb24gbWVhbnMgb25lIHRoYXQgaXMgdGltZSBiYXNlZCBhbmQgaGFzIGJlZW4gY2FuY2VsZWQgb3IgaGFzIGV4cGlyZWQsIG9yIGlzIG5vdCB0aW1lIGJhc2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIHVzZXIgdG8gZmV0Y2ggdGhlIGFjdGlvbnMgZm9yLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEFjdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVJbmFjdGl2ZUFjdGlvbnModXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvYWN0aW9uJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCd1c2VySWQnLCB1c2VySWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignYWN0aXZlJywgZmFsc2UpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGFwcGxpY2F0aW9ucyB0aGF0IGFyZSBjdXJyZW50bHkgaW5hY3RpdmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxBcHBsaWNhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVJbmFjdGl2ZUFwcGxpY2F0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2luYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgdXNlciBhY3Rpb25zIHRoYXQgYXJlIGN1cnJlbnRseSBpbmFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJBY3Rpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlSW5hY3RpdmVVc2VyQWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci1hY3Rpb24nKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2luYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBhdmFpbGFibGUgaW50ZWdyYXRpb25zLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8SW50ZWdyYXRpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlSW50ZWdyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2ludGVncmF0aW9uJylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBQdWJsaWMgS2V5IGNvbmZpZ3VyZWQgZm9yIHZlcmlmeWluZyBKU09OIFdlYiBUb2tlbnMgKEpXVCkgYnkgdGhlIGtleSBJZCAoa2lkKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlJZCBUaGUgSWQgb2YgdGhlIHB1YmxpYyBrZXkgKGtpZCkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8UHVibGljS2V5UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUpXVFB1YmxpY0tleShrZXlJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9qd3QvcHVibGljLWtleScpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigna2lkJywga2V5SWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgUHVibGljIEtleSBjb25maWd1cmVkIGZvciB2ZXJpZnlpbmcgdGhlIEpTT04gV2ViIFRva2VucyAoSldUKSBpc3N1ZWQgYnkgdGhlIExvZ2luIEFQSSBieSB0aGUgQXBwbGljYXRpb24gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgSWQgb2YgdGhlIEFwcGxpY2F0aW9uIGZvciB3aGljaCB0aGlzIGtleSBpcyB1c2VkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFB1YmxpY0tleVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVKV1RQdWJsaWNLZXlCeUFwcGxpY2F0aW9uSWQoYXBwbGljYXRpb25JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9qd3QvcHVibGljLWtleScpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignYXBwbGljYXRpb25JZCcsIGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgUHVibGljIEtleXMgY29uZmlndXJlZCBmb3IgdmVyaWZ5aW5nIEpTT04gV2ViIFRva2VucyAoSldUKS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFB1YmxpY0tleVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVKV1RQdWJsaWNLZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9qd3QvcHVibGljLWtleScpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUga2V5IGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5SWQgVGhlIElkIG9mIHRoZSBrZXkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8S2V5UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUtleShrZXlJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9rZXknKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGtleUlkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBrZXlzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8S2V5UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUtleXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2tleScpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgbGFtYmRhIGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFtYmRhSWQgVGhlIElkIG9mIHRoZSBsYW1iZGEuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TGFtYmRhUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUxhbWJkYShsYW1iZGFJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9sYW1iZGEnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGxhbWJkYUlkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBsYW1iZGFzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TGFtYmRhUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUxhbWJkYXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2xhbWJkYScpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGxhbWJkYXMgZm9yIHRoZSBwcm92aWRlZCB0eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtMYW1iZGFUeXBlfSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBsYW1iZGEgdG8gcmV0dXJuLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPExhbWJkYVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVMYW1iZGFzQnlUeXBlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvbGFtYmRhJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCd0eXBlJywgdHlwZSlcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBsb2dpbiByZXBvcnQgYmV0d2VlbiB0aGUgdHdvIGluc3RhbnRzLiBJZiB5b3Ugc3BlY2lmeSBhbiBhcHBsaWNhdGlvbiBpZCwgaXQgd2lsbCBvbmx5IHJldHVybiB0aGVcbiAgICAgKiBsb2dpbiBjb3VudHMgZm9yIHRoYXQgYXBwbGljYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCAoT3B0aW9uYWwpIFRoZSBhcHBsaWNhdGlvbiBpZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IGluc3RhbnQgYXMgVVRDIG1pbGxpc2Vjb25kcyBzaW5jZSBFcG9jaC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBlbmQgaW5zdGFudCBhcyBVVEMgbWlsbGlzZWNvbmRzIHNpbmNlIEVwb2NoLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPExvZ2luUmVwb3J0UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZUxvZ2luUmVwb3J0KGFwcGxpY2F0aW9uSWQsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvcmVwb3J0L2xvZ2luJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdhcHBsaWNhdGlvbklkJywgYXBwbGljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdzdGFydCcsIHN0YXJ0KVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2VuZCcsIGVuZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBtb250aGx5IGFjdGl2ZSB1c2VyIHJlcG9ydCBiZXR3ZWVuIHRoZSB0d28gaW5zdGFudHMuIElmIHlvdSBzcGVjaWZ5IGFuIGFwcGxpY2F0aW9uIGlkLCBpdCB3aWxsIG9ubHlcbiAgICAgKiByZXR1cm4gdGhlIG1vbnRobHkgYWN0aXZlIGNvdW50cyBmb3IgdGhhdCBhcHBsaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIChPcHRpb25hbCkgVGhlIGFwcGxpY2F0aW9uIGlkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgaW5zdGFudCBhcyBVVEMgbWlsbGlzZWNvbmRzIHNpbmNlIEVwb2NoLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGVuZCBpbnN0YW50IGFzIFVUQyBtaWxsaXNlY29uZHMgc2luY2UgRXBvY2guXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TW9udGhseUFjdGl2ZVVzZXJSZXBvcnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlTW9udGhseUFjdGl2ZVJlcG9ydChhcHBsaWNhdGlvbklkLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3JlcG9ydC9tb250aGx5LWFjdGl2ZS11c2VyJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdhcHBsaWNhdGlvbklkJywgYXBwbGljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdzdGFydCcsIHN0YXJ0KVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2VuZCcsIGVuZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBPYXV0aDIgY29uZmlndXJhdGlvbiBmb3IgdGhlIGFwcGxpY2F0aW9uIGZvciB0aGUgZ2l2ZW4gQXBwbGljYXRpb24gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgSWQgb2YgdGhlIEFwcGxpY2F0aW9uIHRvIHJldHJpZXZlIE9BdXRoIGNvbmZpZ3VyYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8T0F1dGhDb25maWd1cmF0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZU9hdXRoQ29uZmlndXJhdGlvbihhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KFwib2F1dGgtY29uZmlndXJhdGlvblwiKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHBhc3N3b3JkIHZhbGlkYXRpb24gcnVsZXMgZm9yIGEgc3BlY2lmaWMgdGVuYW50LiBUaGlzIG1ldGhvZCByZXF1aXJlcyBhIHRlbmFudElkIHRvIGJlIHByb3ZpZGVkXG4gICAgICogdGhyb3VnaCB0aGUgdXNlIG9mIGEgVGVuYW50IHNjb3BlZCBBUEkga2V5IG9yIGFuIEhUVFAgaGVhZGVyIFgtRnVzaW9uQXV0aC1UZW5hbnRJZCB0byBzcGVjaWZ5IHRoZSBUZW5hbnQgSWQuXG4gICAgICpcbiAgICAgKiBUaGlzIEFQSSBkb2VzIG5vdCByZXF1aXJlIGFuIEFQSSBrZXkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxQYXNzd29yZFZhbGlkYXRpb25SdWxlc1Jlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVQYXNzd29yZFZhbGlkYXRpb25SdWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdGVuYW50L3Bhc3N3b3JkLXZhbGlkYXRpb24tcnVsZXMnKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHBhc3N3b3JkIHZhbGlkYXRpb24gcnVsZXMgZm9yIGEgc3BlY2lmaWMgdGVuYW50LlxuICAgICAqXG4gICAgICogVGhpcyBBUEkgZG9lcyBub3QgcmVxdWlyZSBhbiBBUEkga2V5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlbmFudElkIFRoZSBJZCBvZiB0aGUgdGVuYW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzV2l0aFRlbmFudElkKHRlbmFudElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3RlbmFudC9wYXNzd29yZC12YWxpZGF0aW9uLXJ1bGVzJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh0ZW5hbnRJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgY2hpbGRyZW4gZm9yIHRoZSBnaXZlbiBwYXJlbnQgZW1haWwgYWRkcmVzcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRFbWFpbCBUaGUgZW1haWwgb2YgdGhlIHBhcmVudC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxQZW5kaW5nUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVBlbmRpbmdDaGlsZHJlbihwYXJlbnRFbWFpbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2ZhbWlseS9wZW5kaW5nJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdwYXJlbnRFbWFpbCcsIHBhcmVudEVtYWlsKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGxhc3QgbnVtYmVyIG9mIGxvZ2luIHJlY29yZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IFRoZSBpbml0aWFsIHJlY29yZC4gZS5nLiAwIGlzIHRoZSBsYXN0IGxvZ2luLCAxMDAgd2lsbCBiZSB0aGUgMTAwdGggbW9zdCByZWNlbnQgbG9naW4uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxpbWl0IChPcHRpb25hbCwgZGVmYXVsdHMgdG8gMTApIFRoZSBudW1iZXIgb2YgcmVjb3JkcyB0byByZXRyaWV2ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxSZWNlbnRMb2dpblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVSZWNlbnRMb2dpbnMob2Zmc2V0LCBsaW1pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3JlY2VudC1sb2dpbicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignb2Zmc2V0Jywgb2Zmc2V0KVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2xpbWl0JywgbGltaXQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgcmVmcmVzaCB0b2tlbnMgdGhhdCBiZWxvbmcgdG8gdGhlIHVzZXIgd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgdXNlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxSZWZyZXNoUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVJlZnJlc2hUb2tlbnModXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2p3dC9yZWZyZXNoJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCd1c2VySWQnLCB1c2VySWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdXNlciByZWdpc3RyYXRpb24gZm9yIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIGlkIGFuZCB0aGUgZ2l2ZW4gYXBwbGljYXRpb24gaWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBJZCBvZiB0aGUgdXNlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgSWQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFJlZ2lzdHJhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVSZWdpc3RyYXRpb24odXNlcklkLCBhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXIvcmVnaXN0cmF0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VySWQpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoYXBwbGljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSByZWdpc3RyYXRpb24gcmVwb3J0IGJldHdlZW4gdGhlIHR3byBpbnN0YW50cy4gSWYgeW91IHNwZWNpZnkgYW4gYXBwbGljYXRpb24gaWQsIGl0IHdpbGwgb25seSByZXR1cm5cbiAgICAgKiB0aGUgcmVnaXN0cmF0aW9uIGNvdW50cyBmb3IgdGhhdCBhcHBsaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbklkIChPcHRpb25hbCkgVGhlIGFwcGxpY2F0aW9uIGlkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgaW5zdGFudCBhcyBVVEMgbWlsbGlzZWNvbmRzIHNpbmNlIEVwb2NoLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGVuZCBpbnN0YW50IGFzIFVUQyBtaWxsaXNlY29uZHMgc2luY2UgRXBvY2guXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8UmVnaXN0cmF0aW9uUmVwb3J0UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVJlZ2lzdHJhdGlvblJlcG9ydChhcHBsaWNhdGlvbklkLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3JlcG9ydC9yZWdpc3RyYXRpb24nKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2FwcGxpY2F0aW9uSWQnLCBhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3N0YXJ0Jywgc3RhcnQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignZW5kJywgZW5kKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHN5c3RlbSBjb25maWd1cmF0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8U3lzdGVtQ29uZmlndXJhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVTeXN0ZW1Db25maWd1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9zeXN0ZW0tY29uZmlndXJhdGlvbicpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdGVuYW50IGZvciB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVuYW50SWQgVGhlIElkIG9mIHRoZSB0ZW5hbnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VGVuYW50UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVRlbmFudCh0ZW5hbnRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS90ZW5hbnQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHRlbmFudElkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSB0ZW5hbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VGVuYW50UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVRlbmFudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3RlbmFudCcpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdGhlbWUgZm9yIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aGVtZUlkIFRoZSBJZCBvZiB0aGUgdGhlbWUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VGhlbWVSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVGhlbWUodGhlbWVJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS90aGVtZScpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodGhlbWVJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgdGhlbWVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VGhlbWVSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVGhlbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS90aGVtZScpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdG90YWxzIHJlcG9ydC4gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHRvdGFsIGNvdW50cyBmb3IgZWFjaCBhcHBsaWNhdGlvbiBhbmQgdGhlIGdsb2JhbCByZWdpc3RyYXRpb25cbiAgICAgKiBjb3VudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFRvdGFsc1JlcG9ydFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVUb3RhbFJlcG9ydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvcmVwb3J0L3RvdGFscycpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdXNlciBmb3IgdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIHVzZXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VySWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdXNlciBhY3Rpb24gZm9yIHRoZSBnaXZlbiBJZC4gSWYgeW91IHBhc3MgaW4gbnVsbCBmb3IgdGhlIGlkLCB0aGlzIHdpbGwgcmV0dXJuIGFsbCBvZiB0aGUgdXNlclxuICAgICAqIGFjdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFjdGlvbklkIChPcHRpb25hbCkgVGhlIElkIG9mIHRoZSB1c2VyIGFjdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyQWN0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVVzZXJBY3Rpb24odXNlckFjdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXItYWN0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VyQWN0aW9uSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdXNlciBhY3Rpb24gcmVhc29uIGZvciB0aGUgZ2l2ZW4gSWQuIElmIHlvdSBwYXNzIGluIG51bGwgZm9yIHRoZSBpZCwgdGhpcyB3aWxsIHJldHVybiBhbGwgb2YgdGhlIHVzZXJcbiAgICAgKiBhY3Rpb24gcmVhc29ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWN0aW9uUmVhc29uSWQgKE9wdGlvbmFsKSBUaGUgSWQgb2YgdGhlIHVzZXIgYWN0aW9uIHJlYXNvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyQWN0aW9uUmVhc29uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVVzZXJBY3Rpb25SZWFzb24odXNlckFjdGlvblJlYXNvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXItYWN0aW9uLXJlYXNvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlckFjdGlvblJlYXNvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIHRoZSB1c2VyIGFjdGlvbiByZWFzb25zLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlckFjdGlvblJlYXNvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyQWN0aW9uUmVhc29ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci1hY3Rpb24tcmVhc29uJylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgdXNlciBhY3Rpb25zLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlckFjdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyQWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci1hY3Rpb24nKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHVzZXIgYnkgYSBjaGFuZ2UgcGFzc3dvcmQgSWQuIFRoZSBpbnRlbmRlZCB1c2Ugb2YgdGhpcyBBUEkgaXMgdG8gcmV0cmlldmUgYSB1c2VyIGFmdGVyIHRoZSBmb3Jnb3RcbiAgICAgKiBwYXNzd29yZCB3b3JrZmxvdyBoYXMgYmVlbiBpbml0aWF0ZWQgYW5kIHlvdSBtYXkgbm90IGtub3cgdGhlIHVzZXIncyBlbWFpbCBvciB1c2VybmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFuZ2VQYXNzd29yZElkIFRoZSB1bmlxdWUgY2hhbmdlIHBhc3N3b3JkIElkIHRoYXQgd2FzIHNlbnQgdmlhIGVtYWlsIG9yIHJldHVybmVkIGJ5IHRoZSBGb3Jnb3QgUGFzc3dvcmQgQVBJLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVXNlckJ5Q2hhbmdlUGFzc3dvcmRJZChjaGFuZ2VQYXNzd29yZElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXInKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2NoYW5nZVBhc3N3b3JkSWQnLCBjaGFuZ2VQYXNzd29yZElkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHVzZXIgZm9yIHRoZSBnaXZlbiBlbWFpbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbCBUaGUgZW1haWwgb2YgdGhlIHVzZXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyQnlFbWFpbChlbWFpbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyJylcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdlbWFpbCcsIGVtYWlsKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHVzZXIgZm9yIHRoZSBsb2dpbklkLiBUaGUgbG9naW5JZCBjYW4gYmUgZWl0aGVyIHRoZSB1c2VybmFtZSBvciB0aGUgZW1haWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9naW5JZCBUaGUgZW1haWwgb3IgdXNlcm5hbWUgb2YgdGhlIHVzZXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyQnlMb2dpbklkKGxvZ2luSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlcicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignbG9naW5JZCcsIGxvZ2luSWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdXNlciBmb3IgdGhlIGdpdmVuIHVzZXJuYW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVVzZXJCeVVzZXJuYW1lKHVzZXJuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXInKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJuYW1lJywgdXNlcm5hbWUpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdXNlciBieSBhIHZlcmlmaWNhdGlvbklkLiBUaGUgaW50ZW5kZWQgdXNlIG9mIHRoaXMgQVBJIGlzIHRvIHJldHJpZXZlIGEgdXNlciBhZnRlciB0aGUgZm9yZ290XG4gICAgICogcGFzc3dvcmQgd29ya2Zsb3cgaGFzIGJlZW4gaW5pdGlhdGVkIGFuZCB5b3UgbWF5IG5vdCBrbm93IHRoZSB1c2VyJ3MgZW1haWwgb3IgdXNlcm5hbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyaWZpY2F0aW9uSWQgVGhlIHVuaXF1ZSB2ZXJpZmljYXRpb24gSWQgdGhhdCBoYXMgYmVlbiBzZXQgb24gdGhlIHVzZXIgb2JqZWN0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVXNlckJ5VmVyaWZpY2F0aW9uSWQodmVyaWZpY2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlcicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigndmVyaWZpY2F0aW9uSWQnLCB2ZXJpZmljYXRpb25JZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgY29tbWVudHMgZm9yIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIHVzZXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlckNvbW1lbnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVXNlckNvbW1lbnRzKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2NvbW1lbnQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgYSBzaW5nbGUgVXNlciBjb25zZW50IGJ5IElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJDb25zZW50SWQgVGhlIFVzZXIgY29uc2VudCBJZFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJDb25zZW50UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVVzZXJDb25zZW50KHVzZXJDb25zZW50SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9jb25zZW50JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VyQ29uc2VudElkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBjb25zZW50cyBmb3IgYSBVc2VyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgVXNlcidzIElkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlckNvbnNlbnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVXNlckNvbnNlbnRzKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2NvbnNlbnQnKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJJZCcsIHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBsb2dpbiByZXBvcnQgYmV0d2VlbiB0aGUgdHdvIGluc3RhbnRzIGZvciBhIHBhcnRpY3VsYXIgdXNlciBieSBJZC4gSWYgeW91IHNwZWNpZnkgYW4gYXBwbGljYXRpb24gaWQsIGl0IHdpbGwgb25seSByZXR1cm4gdGhlXG4gICAgICogbG9naW4gY291bnRzIGZvciB0aGF0IGFwcGxpY2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgKE9wdGlvbmFsKSBUaGUgYXBwbGljYXRpb24gaWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgdXNlcklkIGlkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgaW5zdGFudCBhcyBVVEMgbWlsbGlzZWNvbmRzIHNpbmNlIEVwb2NoLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGVuZCBpbnN0YW50IGFzIFVUQyBtaWxsaXNlY29uZHMgc2luY2UgRXBvY2guXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TG9naW5SZXBvcnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVXNlckxvZ2luUmVwb3J0KGFwcGxpY2F0aW9uSWQsIHVzZXJJZCwgc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9yZXBvcnQvbG9naW4nKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2FwcGxpY2F0aW9uSWQnLCBhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJJZCcsIHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdzdGFydCcsIHN0YXJ0KVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2VuZCcsIGVuZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBsb2dpbiByZXBvcnQgYmV0d2VlbiB0aGUgdHdvIGluc3RhbnRzIGZvciBhIHBhcnRpY3VsYXIgdXNlciBieSBsb2dpbiBJZC4gSWYgeW91IHNwZWNpZnkgYW4gYXBwbGljYXRpb24gaWQsIGl0IHdpbGwgb25seSByZXR1cm4gdGhlXG4gICAgICogbG9naW4gY291bnRzIGZvciB0aGF0IGFwcGxpY2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uSWQgKE9wdGlvbmFsKSBUaGUgYXBwbGljYXRpb24gaWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxvZ2luSWQgVGhlIHVzZXJJZCBpZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IGluc3RhbnQgYXMgVVRDIG1pbGxpc2Vjb25kcyBzaW5jZSBFcG9jaC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBlbmQgaW5zdGFudCBhcyBVVEMgbWlsbGlzZWNvbmRzIHNpbmNlIEVwb2NoLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPExvZ2luUmVwb3J0UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVVzZXJMb2dpblJlcG9ydEJ5TG9naW5JZChhcHBsaWNhdGlvbklkLCBsb2dpbklkLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3JlcG9ydC9sb2dpbicpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignYXBwbGljYXRpb25JZCcsIGFwcGxpY2F0aW9uSWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignbG9naW5JZCcsIGxvZ2luSWQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignc3RhcnQnLCBzdGFydClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdlbmQnLCBlbmQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgbGFzdCBudW1iZXIgb2YgbG9naW4gcmVjb3JkcyBmb3IgYSB1c2VyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIHVzZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBUaGUgaW5pdGlhbCByZWNvcmQuIGUuZy4gMCBpcyB0aGUgbGFzdCBsb2dpbiwgMTAwIHdpbGwgYmUgdGhlIDEwMHRoIG1vc3QgcmVjZW50IGxvZ2luLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAoT3B0aW9uYWwsIGRlZmF1bHRzIHRvIDEwKSBUaGUgbnVtYmVyIG9mIHJlY29yZHMgdG8gcmV0cmlldmUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8UmVjZW50TG9naW5SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlVXNlclJlY2VudExvZ2lucyh1c2VySWQsIG9mZnNldCwgbGltaXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9yZWNlbnQtbG9naW4nKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3VzZXJJZCcsIHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoUGFyYW1ldGVyKCdvZmZzZXQnLCBvZmZzZXQpXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcignbGltaXQnLCBsaW1pdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB1c2VyIGZvciB0aGUgZ2l2ZW4gSWQuIFRoaXMgbWV0aG9kIGRvZXMgbm90IHVzZSBhbiBBUEkga2V5LCBpbnN0ZWFkIGl0IHVzZXMgYSBKU09OIFdlYiBUb2tlbiAoSldUKSBmb3IgYXV0aGVudGljYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW5jb2RlZEpXVCBUaGUgZW5jb2RlZCBKV1QgKGFjY2VzcyB0b2tlbikuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlclJlc3BvbnNlPj59XG4gICAgICovXG4gICAgcmV0cmlldmVVc2VyVXNpbmdKV1QoZW5jb2RlZEpXVCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyJylcbiAgICAgICAgICAgIC53aXRoQXV0aG9yaXphdGlvbignSldUICcgKyBlbmNvZGVkSldUKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHdlYmhvb2sgZm9yIHRoZSBnaXZlbiBJZC4gSWYgeW91IHBhc3MgaW4gbnVsbCBmb3IgdGhlIGlkLCB0aGlzIHdpbGwgcmV0dXJuIGFsbCB0aGUgd2ViaG9va3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2ViaG9va0lkIChPcHRpb25hbCkgVGhlIElkIG9mIHRoZSB3ZWJob29rLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFdlYmhvb2tSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlV2ViaG9vayh3ZWJob29rSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvd2ViaG9vaycpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQod2ViaG9va0lkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIHRoZSB3ZWJob29rcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFdlYmhvb2tSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHJldHJpZXZlV2ViaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3dlYmhvb2snKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJHRVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXZva2VzIGEgc2luZ2xlIHJlZnJlc2ggdG9rZW4sIGFsbCB0b2tlbnMgZm9yIGEgdXNlciBvciBhbGwgdG9rZW5zIGZvciBhbiBhcHBsaWNhdGlvbi4gSWYgeW91IHByb3ZpZGUgYSB1c2VyIGlkXG4gICAgICogYW5kIGFuIGFwcGxpY2F0aW9uIGlkLCB0aGlzIHdpbGwgZGVsZXRlIGFsbCB0aGUgcmVmcmVzaCB0b2tlbnMgZm9yIHRoYXQgdXNlciBmb3IgdGhhdCBhcHBsaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlbiAoT3B0aW9uYWwpIFRoZSByZWZyZXNoIHRva2VuIHRvIGRlbGV0ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIChPcHRpb25hbCkgVGhlIHVzZXIgaWQgd2hvc2UgdG9rZW5zIHRvIGRlbGV0ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCAoT3B0aW9uYWwpIFRoZSBhcHBsaWNhdGlvbiBpZCBvZiB0aGUgdG9rZW5zIHRvIGRlbGV0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgcmV2b2tlUmVmcmVzaFRva2VuKHRva2VuLCB1c2VySWQsIGFwcGxpY2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvand0L3JlZnJlc2gnKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ3Rva2VuJywgdG9rZW4pXG4gICAgICAgICAgICAud2l0aFBhcmFtZXRlcigndXNlcklkJywgdXNlcklkKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2FwcGxpY2F0aW9uSWQnLCBhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJERUxFVEVcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXZva2VzIGEgc2luZ2xlIFVzZXIgY29uc2VudCBieSBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQ29uc2VudElkIFRoZSBVc2VyIENvbnNlbnQgSWRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgcmV2b2tlVXNlckNvbnNlbnQodXNlckNvbnNlbnRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL2NvbnNlbnQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJDb25zZW50SWQpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkRFTEVURVwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIHRoZSBhdWRpdCBsb2dzIHdpdGggdGhlIHNwZWNpZmllZCBjcml0ZXJpYSBhbmQgcGFnaW5hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXVkaXRMb2dTZWFyY2hSZXF1ZXN0fSByZXF1ZXN0IFRoZSBzZWFyY2ggY3JpdGVyaWEgYW5kIHBhZ2luYXRpb24gaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8QXVkaXRMb2dTZWFyY2hSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHNlYXJjaEF1ZGl0TG9ncyhyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3N5c3RlbS9hdWRpdC1sb2cvc2VhcmNoJylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIHRoZSBldmVudCBsb2dzIHdpdGggdGhlIHNwZWNpZmllZCBjcml0ZXJpYSBhbmQgcGFnaW5hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnRMb2dTZWFyY2hSZXF1ZXN0fSByZXF1ZXN0IFRoZSBzZWFyY2ggY3JpdGVyaWEgYW5kIHBhZ2luYXRpb24gaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8RXZlbnRMb2dTZWFyY2hSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHNlYXJjaEV2ZW50TG9ncyhyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3N5c3RlbS9ldmVudC1sb2cvc2VhcmNoJylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIHRoZSBsb2dpbiByZWNvcmRzIHdpdGggdGhlIHNwZWNpZmllZCBjcml0ZXJpYSBhbmQgcGFnaW5hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TG9naW5SZWNvcmRTZWFyY2hSZXF1ZXN0fSByZXF1ZXN0IFRoZSBzZWFyY2ggY3JpdGVyaWEgYW5kIHBhZ2luYXRpb24gaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8TG9naW5SZWNvcmRTZWFyY2hSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHNlYXJjaExvZ2luUmVjb3JkcyhyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3N5c3RlbS9sb2dpbi1yZWNvcmQvc2VhcmNoJylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdXNlcnMgZm9yIHRoZSBnaXZlbiBpZHMuIElmIGFueSBpZCBpcyBpbnZhbGlkLCBpdCBpcyBpZ25vcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBpZHMgVGhlIHVzZXIgaWRzIHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8U2VhcmNoUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBzZWFyY2hVc2VycyhpZHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9zZWFyY2gnKVxuICAgICAgICAgICAgLndpdGhQYXJhbWV0ZXIoJ2lkcycsIGlkcylcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiR0VUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB1c2VycyBmb3IgdGhlIGdpdmVuIHNlYXJjaCBjcml0ZXJpYSBhbmQgcGFnaW5hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2VhcmNoUmVxdWVzdH0gcmVxdWVzdCBUaGUgc2VhcmNoIGNyaXRlcmlhIGFuZCBwYWdpbmF0aW9uIGNvbnN0cmFpbnRzLiBGaWVsZHMgdXNlZDogcXVlcnlTdHJpbmcsIG51bWJlck9mUmVzdWx0cywgc3RhcnRSb3csXG4gICAgICogICAgYW5kIHNvcnQgZmllbGRzLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFNlYXJjaFJlc3BvbnNlPj59XG4gICAgICovXG4gICAgc2VhcmNoVXNlcnNCeVF1ZXJ5U3RyaW5nKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9zZWFyY2gnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBhbiBlbWFpbCB1c2luZyBhbiBlbWFpbCB0ZW1wbGF0ZSBpZC4gWW91IGNhbiBvcHRpb25hbGx5IHByb3ZpZGUgPGNvZGU+cmVxdWVzdERhdGE8L2NvZGU+IHRvIGFjY2VzcyBrZXkgdmFsdWVcbiAgICAgKiBwYWlycyBpbiB0aGUgZW1haWwgdGVtcGxhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWxUZW1wbGF0ZUlkIFRoZSBpZCBmb3IgdGhlIHRlbXBsYXRlLlxuICAgICAqIEBwYXJhbSB7U2VuZFJlcXVlc3R9IHJlcXVlc3QgVGhlIHNlbmQgZW1haWwgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gdXNlZCB0byBzZW5kIHRoZSBlbWFpbC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxTZW5kUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICBzZW5kRW1haWwoZW1haWxUZW1wbGF0ZUlkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2VtYWlsL3NlbmQnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGVtYWlsVGVtcGxhdGVJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIG91dCBhbiBlbWFpbCB0byBhIHBhcmVudCB0aGF0IHRoZXkgbmVlZCB0byByZWdpc3RlciBhbmQgY3JlYXRlIGEgZmFtaWx5IG9yIG5lZWQgdG8gbG9nIGluIGFuZCBhZGQgYSBjaGlsZCB0byB0aGVpciBleGlzdGluZyBmYW1pbHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZhbWlseUVtYWlsUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgcGFyZW50IGVtYWlsLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICBzZW5kRmFtaWx5UmVxdWVzdEVtYWlsKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9mYW1pbHkvcmVxdWVzdCcpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBPU1RcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kIGEgcGFzc3dvcmRsZXNzIGF1dGhlbnRpY2F0aW9uIGNvZGUgaW4gYW4gZW1haWwgdG8gY29tcGxldGUgbG9naW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Bhc3N3b3JkbGVzc1NlbmRSZXF1ZXN0fSByZXF1ZXN0IFRoZSBwYXNzd29yZGxlc3Mgc2VuZCByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIHNlbmQgYW4gZW1haWwgY29udGFpbmluZyBhIGNvZGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIHNlbmRQYXNzd29yZGxlc3NDb2RlKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvcGFzc3dvcmRsZXNzL3NlbmQnKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBhIFR3byBGYWN0b3IgYXV0aGVudGljYXRpb24gY29kZSB0byBhc3Npc3QgaW4gc2V0dGluZyB1cCBUd28gRmFjdG9yIGF1dGhlbnRpY2F0aW9uIG9yIGRpc2FibGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VHdvRmFjdG9yU2VuZFJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiB1c2VkIHRvIHNlbmQgdGhlIGNvZGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8dm9pZD4+fVxuICAgICAqL1xuICAgIHNlbmRUd29GYWN0b3JDb2RlKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdHdvLWZhY3Rvci9zZW5kJylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmQgYSBUd28gRmFjdG9yIGF1dGhlbnRpY2F0aW9uIGNvZGUgdG8gYWxsb3cgdGhlIGNvbXBsZXRpb24gb2YgVHdvIEZhY3RvciBhdXRoZW50aWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0d29GYWN0b3JJZCBUaGUgSWQgcmV0dXJuZWQgYnkgdGhlIExvZ2luIEFQSSBuZWNlc3NhcnkgdG8gY29tcGxldGUgVHdvIEZhY3RvciBhdXRoZW50aWNhdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgc2VuZFR3b0ZhY3RvckNvZGVGb3JMb2dpbih0d29GYWN0b3JJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW4nKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdHdvLWZhY3Rvci9zZW5kJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh0d29GYWN0b3JJZClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUE9TVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXBsZXRlIGxvZ2luIHVzaW5nIGEgMkZBIGNoYWxsZW5nZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtUd29GYWN0b3JMb2dpblJlcXVlc3R9IHJlcXVlc3QgVGhlIGxvZ2luIHJlcXVlc3QgdGhhdCBjb250YWlucyB0aGUgdXNlciBjcmVkZW50aWFscyB1c2VkIHRvIGxvZyB0aGVtIGluLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPExvZ2luUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB0d29GYWN0b3JMb2dpbihyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3R3by1mYWN0b3IvbG9naW4nKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgYXBwbGljYXRpb24gd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgSWQgb2YgdGhlIGFwcGxpY2F0aW9uIHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0ge0FwcGxpY2F0aW9uUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IGFwcGxpY2F0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEFwcGxpY2F0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVBcHBsaWNhdGlvbihhcHBsaWNhdGlvbklkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBhcHBsaWNhdGlvbiByb2xlIHdpdGggdGhlIGdpdmVuIGlkIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb25JZCBUaGUgSWQgb2YgdGhlIGFwcGxpY2F0aW9uIHRoYXQgdGhlIHJvbGUgYmVsb25ncyB0by5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcm9sZUlkIFRoZSBJZCBvZiB0aGUgcm9sZSB0byB1cGRhdGUuXG4gICAgICogQHBhcmFtIHtBcHBsaWNhdGlvblJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIG5ldyByb2xlIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEFwcGxpY2F0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVBcHBsaWNhdGlvblJvbGUoYXBwbGljYXRpb25JZCwgcm9sZUlkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChhcHBsaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KFwicm9sZVwiKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHJvbGVJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY29uc2VudCB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25zZW50SWQgVGhlIElkIG9mIHRoZSBjb25zZW50IHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0ge0NvbnNlbnRSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBuZXcgY29uc2VudCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxDb25zZW50UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVDb25zZW50KGNvbnNlbnRJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9jb25zZW50JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChjb25zZW50SWQpXG4gICAgICAgICAgICAud2l0aEpTT05Cb2R5KHJlcXVlc3QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIlBVVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVtYWlsIHRlbXBsYXRlIHdpdGggdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsVGVtcGxhdGVJZCBUaGUgSWQgb2YgdGhlIGVtYWlsIHRlbXBsYXRlIHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0ge0VtYWlsVGVtcGxhdGVSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBuZXcgZW1haWwgdGVtcGxhdGUgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8RW1haWxUZW1wbGF0ZVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgdXBkYXRlRW1haWxUZW1wbGF0ZShlbWFpbFRlbXBsYXRlSWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvZW1haWwvdGVtcGxhdGUnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGVtYWlsVGVtcGxhdGVJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZ3JvdXAgd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZCBUaGUgSWQgb2YgdGhlIGdyb3VwIHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0ge0dyb3VwUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IGdyb3VwIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPEdyb3VwUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVHcm91cChncm91cElkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL2dyb3VwJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudChncm91cElkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBpZGVudGl0eSBwcm92aWRlciB3aXRoIHRoZSBnaXZlbiBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZGVudGl0eVByb3ZpZGVySWQgVGhlIElkIG9mIHRoZSBpZGVudGl0eSBwcm92aWRlciB0byB1cGRhdGUuXG4gICAgICogQHBhcmFtIHtJZGVudGl0eVByb3ZpZGVyUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgdXBkYXRlZCBpZGVudGl0eSBwcm92aWRlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxJZGVudGl0eVByb3ZpZGVyUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVJZGVudGl0eVByb3ZpZGVyKGlkZW50aXR5UHJvdmlkZXJJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9pZGVudGl0eS1wcm92aWRlcicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQoaWRlbnRpdHlQcm92aWRlcklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBhdmFpbGFibGUgaW50ZWdyYXRpb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJbnRlZ3JhdGlvblJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIG5ldyBpbnRlZ3JhdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxJbnRlZ3JhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgdXBkYXRlSW50ZWdyYXRpb25zKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvaW50ZWdyYXRpb24nKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBrZXkgd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5SWQgVGhlIElkIG9mIHRoZSBrZXkgdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7S2V5UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IGtleSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxLZXlSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZUtleShrZXlJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9rZXknKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGtleUlkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBsYW1iZGEgd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFtYmRhSWQgVGhlIElkIG9mIHRoZSBsYW1iZGEgdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7TGFtYmRhUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IGxhbWJkYSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxMYW1iZGFSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZUxhbWJkYShsYW1iZGFJZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9sYW1iZGEnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KGxhbWJkYUlkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSByZWdpc3RyYXRpb24gZm9yIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIGlkIGFuZCB0aGUgYXBwbGljYXRpb24gZGVmaW5lZCBpbiB0aGUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIElkIG9mIHRoZSB1c2VyIHdob3NlIHJlZ2lzdHJhdGlvbiBpcyBnb2luZyB0byBiZSB1cGRhdGVkLlxuICAgICAqIEBwYXJhbSB7UmVnaXN0cmF0aW9uUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IHJlZ2lzdHJhdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxSZWdpc3RyYXRpb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZVJlZ2lzdHJhdGlvbih1c2VySWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9yZWdpc3RyYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgc3lzdGVtIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N5c3RlbUNvbmZpZ3VyYXRpb25SZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBuZXcgc3lzdGVtIGNvbmZpZ3VyYXRpb24gaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8U3lzdGVtQ29uZmlndXJhdGlvblJlc3BvbnNlPj59XG4gICAgICovXG4gICAgdXBkYXRlU3lzdGVtQ29uZmlndXJhdGlvbihyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3N5c3RlbS1jb25maWd1cmF0aW9uJylcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgdGVuYW50IHdpdGggdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlbmFudElkIFRoZSBJZCBvZiB0aGUgdGVuYW50IHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0ge1RlbmFudFJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIG5ldyB0ZW5hbnQgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VGVuYW50UmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVUZW5hbnQodGVuYW50SWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdGVuYW50JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh0ZW5hbnRJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgdGhlbWUgd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGhlbWVJZCBUaGUgSWQgb2YgdGhlIHRoZW1lIHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0ge1RoZW1lUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgbmV3IHRoZW1lIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFRoZW1lUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVUaGVtZSh0aGVtZUlkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3RoZW1lJylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh0aGVtZUlkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgSWQgb2YgdGhlIHVzZXIgdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7VXNlclJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIG5ldyB1c2VyIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZVVzZXIodXNlcklkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXInKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHVzZXJJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgdXNlciBhY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFjdGlvbklkIFRoZSBJZCBvZiB0aGUgdXNlciBhY3Rpb24gdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7VXNlckFjdGlvblJlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIG5ldyB1c2VyIGFjdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxVc2VyQWN0aW9uUmVzcG9uc2U+Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVVc2VyQWN0aW9uKHVzZXJBY3Rpb25JZCwgcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyLWFjdGlvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlckFjdGlvbklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSB1c2VyIGFjdGlvbiByZWFzb24gd2l0aCB0aGUgZ2l2ZW4gSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFjdGlvblJlYXNvbklkIFRoZSBJZCBvZiB0aGUgdXNlciBhY3Rpb24gcmVhc29uIHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0ge1VzZXJBY3Rpb25SZWFzb25SZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBuZXcgdXNlciBhY3Rpb24gcmVhc29uIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFVzZXJBY3Rpb25SZWFzb25SZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZVVzZXJBY3Rpb25SZWFzb24odXNlckFjdGlvblJlYXNvbklkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3VzZXItYWN0aW9uLXJlYXNvbicpXG4gICAgICAgICAgICAud2l0aFVyaVNlZ21lbnQodXNlckFjdGlvblJlYXNvbklkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgc2luZ2xlIFVzZXIgY29uc2VudCBieSBJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQ29uc2VudElkIFRoZSBVc2VyIENvbnNlbnQgSWRcbiAgICAgKiBAcGFyYW0ge1VzZXJDb25zZW50UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0aGF0IGNvbnRhaW5zIHRoZSB1c2VyIGNvbnNlbnQgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2xpZW50UmVzcG9uc2U8VXNlckNvbnNlbnRSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZVVzZXJDb25zZW50KHVzZXJDb25zZW50SWQsIHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci9jb25zZW50JylcbiAgICAgICAgICAgIC53aXRoVXJpU2VnbWVudCh1c2VyQ29uc2VudElkKVxuICAgICAgICAgICAgLndpdGhKU09OQm9keShyZXF1ZXN0KVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQVVRcIilcbiAgICAgICAgICAgIC5nbygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSB3ZWJob29rIHdpdGggdGhlIGdpdmVuIElkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHdlYmhvb2tJZCBUaGUgSWQgb2YgdGhlIHdlYmhvb2sgdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7V2ViaG9va1JlcXVlc3R9IHJlcXVlc3QgVGhlIHJlcXVlc3QgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIG5ldyB3ZWJob29rIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPFdlYmhvb2tSZXNwb25zZT4+fVxuICAgICAqL1xuICAgIHVwZGF0ZVdlYmhvb2sod2ViaG9va0lkLCByZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoVXJpKCcvYXBpL3dlYmhvb2snKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHdlYmhvb2tJZClcbiAgICAgICAgICAgIC53aXRoSlNPTkJvZHkocmVxdWVzdClcbiAgICAgICAgICAgIC53aXRoTWV0aG9kKFwiUFVUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIHRoZSBwcm92aWRlZCBKV1QgKGVuY29kZWQgSldUIHN0cmluZykgdG8gZW5zdXJlIHRoZSB0b2tlbiBpcyB2YWxpZC4gQSB2YWxpZCBhY2Nlc3MgdG9rZW4gaXMgcHJvcGVybHlcbiAgICAgKiBzaWduZWQgYW5kIG5vdCBleHBpcmVkLlxuICAgICAqIDxwPlxuICAgICAqIFRoaXMgQVBJIG1heSBiZSB1c2VkIHRvIHZlcmlmeSB0aGUgSldUIGFzIHdlbGwgYXMgZGVjb2RlIHRoZSBlbmNvZGVkIEpXVCBpbnRvIGh1bWFuIHJlYWRhYmxlIGlkZW50aXR5IGNsYWltcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmNvZGVkSldUIFRoZSBlbmNvZGVkIEpXVCAoYWNjZXNzIHRva2VuKS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTxWYWxpZGF0ZVJlc3BvbnNlPj59XG4gICAgICovXG4gICAgdmFsaWRhdGVKV1QoZW5jb2RlZEpXVCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS9qd3QvdmFsaWRhdGUnKVxuICAgICAgICAgICAgLndpdGhBdXRob3JpemF0aW9uKCdKV1QgJyArIGVuY29kZWRKV1QpXG4gICAgICAgICAgICAud2l0aE1ldGhvZChcIkdFVFwiKVxuICAgICAgICAgICAgLmdvKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbmZpcm1zIGEgZW1haWwgdmVyaWZpY2F0aW9uLiBUaGUgSWQgZ2l2ZW4gaXMgdXN1YWxseSBmcm9tIGFuIGVtYWlsIHNlbnQgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyaWZpY2F0aW9uSWQgVGhlIGVtYWlsIHZlcmlmaWNhdGlvbiBpZCBzZW50IHRvIHRoZSB1c2VyLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENsaWVudFJlc3BvbnNlPHZvaWQ+Pn1cbiAgICAgKi9cbiAgICB2ZXJpZnlFbWFpbCh2ZXJpZmljYXRpb25JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgICAgICAud2l0aEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW4nKVxuICAgICAgICAgICAgLndpdGhVcmkoJy9hcGkvdXNlci92ZXJpZnktZW1haWwnKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHZlcmlmaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29uZmlybXMgYW4gYXBwbGljYXRpb24gcmVnaXN0cmF0aW9uLiBUaGUgSWQgZ2l2ZW4gaXMgdXN1YWxseSBmcm9tIGFuIGVtYWlsIHNlbnQgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyaWZpY2F0aW9uSWQgVGhlIHJlZ2lzdHJhdGlvbiB2ZXJpZmljYXRpb24gSWQgc2VudCB0byB0aGUgdXNlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDbGllbnRSZXNwb25zZTx2b2lkPj59XG4gICAgICovXG4gICAgdmVyaWZ5UmVnaXN0cmF0aW9uKHZlcmlmaWNhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgICAgIC53aXRoSGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbicpXG4gICAgICAgICAgICAud2l0aFVyaSgnL2FwaS91c2VyL3ZlcmlmeS1yZWdpc3RyYXRpb24nKVxuICAgICAgICAgICAgLndpdGhVcmlTZWdtZW50KHZlcmlmaWNhdGlvbklkKVxuICAgICAgICAgICAgLndpdGhNZXRob2QoXCJQT1NUXCIpXG4gICAgICAgICAgICAuZ28oKTtcbiAgICB9XG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqIFByaXZhdGUgbWV0aG9kc1xuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIC8qKlxuICAgICAqIGNyZWF0ZXMgYSByZXN0IGNsaWVudFxuICAgICAqXG4gICAgICogQHJldHVybnMge0lSZXN0Q2xpZW50fSBUaGUgUkVTVENsaWVudCB0aGF0IHdpbGwgYmUgdXNlZCB0byBjYWxsLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCBjbGllbnQgPSB0aGlzLmNsaWVudEJ1aWxkZXIuYnVpbGQodGhpcy5ob3N0KS53aXRoQXV0aG9yaXphdGlvbih0aGlzLmFwaUtleSk7XG4gICAgICAgIGlmICh0aGlzLnRlbmFudElkICE9PSBudWxsICYmIHR5cGVvZiAodGhpcy50ZW5hbnRJZCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjbGllbnQud2l0aEhlYWRlcignWC1GdXNpb25BdXRoLVRlbmFudElkJywgdGhpcy50ZW5hbnRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3JlZGVudGlhbHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xpZW50LndpdGhDcmVkZW50aWFscyh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cbn1cbi8qKlxuICogQXZhaWxhYmxlIEpTT04gV2ViIEFsZ29yaXRobXMgKEpXQSkgYXMgZGVzY3JpYmVkIGluIFJGQyA3NTE4IGF2YWlsYWJsZSBmb3IgdGhpcyBKV1QgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQGF1dGhvciBEYW5pZWwgRGVHcm9mZlxuICovXG52YXIgQWxnb3JpdGhtO1xuKGZ1bmN0aW9uIChBbGdvcml0aG0pIHtcbiAgICBBbGdvcml0aG1bQWxnb3JpdGhtW1wiRVMyNTZcIl0gPSAwXSA9IFwiRVMyNTZcIjtcbiAgICBBbGdvcml0aG1bQWxnb3JpdGhtW1wiRVMzODRcIl0gPSAxXSA9IFwiRVMzODRcIjtcbiAgICBBbGdvcml0aG1bQWxnb3JpdGhtW1wiRVM1MTJcIl0gPSAyXSA9IFwiRVM1MTJcIjtcbiAgICBBbGdvcml0aG1bQWxnb3JpdGhtW1wiSFMyNTZcIl0gPSAzXSA9IFwiSFMyNTZcIjtcbiAgICBBbGdvcml0aG1bQWxnb3JpdGhtW1wiSFMzODRcIl0gPSA0XSA9IFwiSFMzODRcIjtcbiAgICBBbGdvcml0aG1bQWxnb3JpdGhtW1wiSFM1MTJcIl0gPSA1XSA9IFwiSFM1MTJcIjtcbiAgICBBbGdvcml0aG1bQWxnb3JpdGhtW1wiUlMyNTZcIl0gPSA2XSA9IFwiUlMyNTZcIjtcbiAgICBBbGdvcml0aG1bQWxnb3JpdGhtW1wiUlMzODRcIl0gPSA3XSA9IFwiUlMzODRcIjtcbiAgICBBbGdvcml0aG1bQWxnb3JpdGhtW1wiUlM1MTJcIl0gPSA4XSA9IFwiUlM1MTJcIjtcbiAgICBBbGdvcml0aG1bQWxnb3JpdGhtW1wibm9uZVwiXSA9IDldID0gXCJub25lXCI7XG59KShBbGdvcml0aG0gPSBleHBvcnRzLkFsZ29yaXRobSB8fCAoZXhwb3J0cy5BbGdvcml0aG0gPSB7fSkpO1xudmFyIENhbm9uaWNhbGl6YXRpb25NZXRob2Q7XG4oZnVuY3Rpb24gKENhbm9uaWNhbGl6YXRpb25NZXRob2QpIHtcbiAgICBDYW5vbmljYWxpemF0aW9uTWV0aG9kW0Nhbm9uaWNhbGl6YXRpb25NZXRob2RbXCJleGNsdXNpdmVcIl0gPSAwXSA9IFwiZXhjbHVzaXZlXCI7XG4gICAgQ2Fub25pY2FsaXphdGlvbk1ldGhvZFtDYW5vbmljYWxpemF0aW9uTWV0aG9kW1wiZXhjbHVzaXZlX3dpdGhfY29tbWVudHNcIl0gPSAxXSA9IFwiZXhjbHVzaXZlX3dpdGhfY29tbWVudHNcIjtcbiAgICBDYW5vbmljYWxpemF0aW9uTWV0aG9kW0Nhbm9uaWNhbGl6YXRpb25NZXRob2RbXCJpbmNsdXNpdmVcIl0gPSAyXSA9IFwiaW5jbHVzaXZlXCI7XG4gICAgQ2Fub25pY2FsaXphdGlvbk1ldGhvZFtDYW5vbmljYWxpemF0aW9uTWV0aG9kW1wiaW5jbHVzaXZlX3dpdGhfY29tbWVudHNcIl0gPSAzXSA9IFwiaW5jbHVzaXZlX3dpdGhfY29tbWVudHNcIjtcbn0pKENhbm9uaWNhbGl6YXRpb25NZXRob2QgPSBleHBvcnRzLkNhbm9uaWNhbGl6YXRpb25NZXRob2QgfHwgKGV4cG9ydHMuQ2Fub25pY2FsaXphdGlvbk1ldGhvZCA9IHt9KSk7XG4vKipcbiAqIE1vZGVscyBhIGNvbnNlbnQuXG4gKlxuICogQGF1dGhvciBEYW5pZWwgRGVHcm9mZlxuICovXG52YXIgQ29uc2VudFN0YXR1cztcbihmdW5jdGlvbiAoQ29uc2VudFN0YXR1cykge1xuICAgIENvbnNlbnRTdGF0dXNbQ29uc2VudFN0YXR1c1tcIkFjdGl2ZVwiXSA9IDBdID0gXCJBY3RpdmVcIjtcbiAgICBDb25zZW50U3RhdHVzW0NvbnNlbnRTdGF0dXNbXCJSZXZva2VkXCJdID0gMV0gPSBcIlJldm9rZWRcIjtcbn0pKENvbnNlbnRTdGF0dXMgPSBleHBvcnRzLkNvbnNlbnRTdGF0dXMgfHwgKGV4cG9ydHMuQ29uc2VudFN0YXR1cyA9IHt9KSk7XG4vKipcbiAqIFN0YXR1cyBmb3IgY29udGVudCBsaWtlIHVzZXJuYW1lcywgcHJvZmlsZSBhdHRyaWJ1dGVzLCBldGMuXG4gKlxuICogQGF1dGhvciBCcmlhbiBQb250YXJlbGxpXG4gKi9cbnZhciBDb250ZW50U3RhdHVzO1xuKGZ1bmN0aW9uIChDb250ZW50U3RhdHVzKSB7XG4gICAgQ29udGVudFN0YXR1c1tDb250ZW50U3RhdHVzW1wiQUNUSVZFXCJdID0gMF0gPSBcIkFDVElWRVwiO1xuICAgIENvbnRlbnRTdGF0dXNbQ29udGVudFN0YXR1c1tcIlBFTkRJTkdcIl0gPSAxXSA9IFwiUEVORElOR1wiO1xuICAgIENvbnRlbnRTdGF0dXNbQ29udGVudFN0YXR1c1tcIlJFSkVDVEVEXCJdID0gMl0gPSBcIlJFSkVDVEVEXCI7XG59KShDb250ZW50U3RhdHVzID0gZXhwb3J0cy5Db250ZW50U3RhdHVzIHx8IChleHBvcnRzLkNvbnRlbnRTdGF0dXMgPSB7fSkpO1xudmFyIERldmljZVR5cGU7XG4oZnVuY3Rpb24gKERldmljZVR5cGUpIHtcbiAgICBEZXZpY2VUeXBlW0RldmljZVR5cGVbXCJCUk9XU0VSXCJdID0gMF0gPSBcIkJST1dTRVJcIjtcbiAgICBEZXZpY2VUeXBlW0RldmljZVR5cGVbXCJERVNLVE9QXCJdID0gMV0gPSBcIkRFU0tUT1BcIjtcbiAgICBEZXZpY2VUeXBlW0RldmljZVR5cGVbXCJMQVBUT1BcIl0gPSAyXSA9IFwiTEFQVE9QXCI7XG4gICAgRGV2aWNlVHlwZVtEZXZpY2VUeXBlW1wiTU9CSUxFXCJdID0gM10gPSBcIk1PQklMRVwiO1xuICAgIERldmljZVR5cGVbRGV2aWNlVHlwZVtcIk9USEVSXCJdID0gNF0gPSBcIk9USEVSXCI7XG4gICAgRGV2aWNlVHlwZVtEZXZpY2VUeXBlW1wiU0VSVkVSXCJdID0gNV0gPSBcIlNFUlZFUlwiO1xuICAgIERldmljZVR5cGVbRGV2aWNlVHlwZVtcIlRBQkxFVFwiXSA9IDZdID0gXCJUQUJMRVRcIjtcbiAgICBEZXZpY2VUeXBlW0RldmljZVR5cGVbXCJUVlwiXSA9IDddID0gXCJUVlwiO1xuICAgIERldmljZVR5cGVbRGV2aWNlVHlwZVtcIlVOS05PV05cIl0gPSA4XSA9IFwiVU5LTk9XTlwiO1xufSkoRGV2aWNlVHlwZSA9IGV4cG9ydHMuRGV2aWNlVHlwZSB8fCAoZXhwb3J0cy5EZXZpY2VUeXBlID0ge30pKTtcbnZhciBFbWFpbFNlY3VyaXR5VHlwZTtcbihmdW5jdGlvbiAoRW1haWxTZWN1cml0eVR5cGUpIHtcbiAgICBFbWFpbFNlY3VyaXR5VHlwZVtFbWFpbFNlY3VyaXR5VHlwZVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xuICAgIEVtYWlsU2VjdXJpdHlUeXBlW0VtYWlsU2VjdXJpdHlUeXBlW1wiU1NMXCJdID0gMV0gPSBcIlNTTFwiO1xuICAgIEVtYWlsU2VjdXJpdHlUeXBlW0VtYWlsU2VjdXJpdHlUeXBlW1wiVExTXCJdID0gMl0gPSBcIlRMU1wiO1xufSkoRW1haWxTZWN1cml0eVR5cGUgPSBleHBvcnRzLkVtYWlsU2VjdXJpdHlUeXBlIHx8IChleHBvcnRzLkVtYWlsU2VjdXJpdHlUeXBlID0ge30pKTtcbi8qKlxuICogRXZlbnQgTG9nIFR5cGVcbiAqXG4gKiBAYXV0aG9yIERhbmllbCBEZUdyb2ZmXG4gKi9cbnZhciBFdmVudExvZ1R5cGU7XG4oZnVuY3Rpb24gKEV2ZW50TG9nVHlwZSkge1xuICAgIEV2ZW50TG9nVHlwZVtFdmVudExvZ1R5cGVbXCJJbmZvcm1hdGlvblwiXSA9IDBdID0gXCJJbmZvcm1hdGlvblwiO1xuICAgIEV2ZW50TG9nVHlwZVtFdmVudExvZ1R5cGVbXCJEZWJ1Z1wiXSA9IDFdID0gXCJEZWJ1Z1wiO1xuICAgIEV2ZW50TG9nVHlwZVtFdmVudExvZ1R5cGVbXCJFcnJvclwiXSA9IDJdID0gXCJFcnJvclwiO1xufSkoRXZlbnRMb2dUeXBlID0gZXhwb3J0cy5FdmVudExvZ1R5cGUgfHwgKGV4cG9ydHMuRXZlbnRMb2dUeXBlID0ge30pKTtcbi8qKlxuICogTW9kZWxzIHRoZSBldmVudCB0eXBlcyB0aGF0IEZ1c2lvbkF1dGggcHJvZHVjZXMuXG4gKlxuICogQGF1dGhvciBCcmlhbiBQb250YXJlbGxpXG4gKi9cbnZhciBFdmVudFR5cGU7XG4oZnVuY3Rpb24gKEV2ZW50VHlwZSkge1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJVc2VyRGVsZXRlXCJdID0gMF0gPSBcIlVzZXJEZWxldGVcIjtcbiAgICBFdmVudFR5cGVbRXZlbnRUeXBlW1wiVXNlckNyZWF0ZVwiXSA9IDFdID0gXCJVc2VyQ3JlYXRlXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJVcGRhdGVcIl0gPSAyXSA9IFwiVXNlclVwZGF0ZVwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJVc2VyRGVhY3RpdmF0ZVwiXSA9IDNdID0gXCJVc2VyRGVhY3RpdmF0ZVwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJVc2VyQnVsa0NyZWF0ZVwiXSA9IDRdID0gXCJVc2VyQnVsa0NyZWF0ZVwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJVc2VyUmVhY3RpdmF0ZVwiXSA9IDVdID0gXCJVc2VyUmVhY3RpdmF0ZVwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJVc2VyQWN0aW9uXCJdID0gNl0gPSBcIlVzZXJBY3Rpb25cIjtcbiAgICBFdmVudFR5cGVbRXZlbnRUeXBlW1wiSldUUmVmcmVzaFRva2VuUmV2b2tlXCJdID0gN10gPSBcIkpXVFJlZnJlc2hUb2tlblJldm9rZVwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJKV1RQdWJsaWNLZXlVcGRhdGVcIl0gPSA4XSA9IFwiSldUUHVibGljS2V5VXBkYXRlXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJMb2dpblN1Y2Nlc3NcIl0gPSA5XSA9IFwiVXNlckxvZ2luU3VjY2Vzc1wiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJVc2VyTG9naW5GYWlsZWRcIl0gPSAxMF0gPSBcIlVzZXJMb2dpbkZhaWxlZFwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJVc2VyUmVnaXN0cmF0aW9uQ3JlYXRlXCJdID0gMTFdID0gXCJVc2VyUmVnaXN0cmF0aW9uQ3JlYXRlXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlVzZXJSZWdpc3RyYXRpb25VcGRhdGVcIl0gPSAxMl0gPSBcIlVzZXJSZWdpc3RyYXRpb25VcGRhdGVcIjtcbiAgICBFdmVudFR5cGVbRXZlbnRUeXBlW1wiVXNlclJlZ2lzdHJhdGlvbkRlbGV0ZVwiXSA9IDEzXSA9IFwiVXNlclJlZ2lzdHJhdGlvbkRlbGV0ZVwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJVc2VyUmVnaXN0cmF0aW9uVmVyaWZpZWRcIl0gPSAxNF0gPSBcIlVzZXJSZWdpc3RyYXRpb25WZXJpZmllZFwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJVc2VyRW1haWxWZXJpZmllZFwiXSA9IDE1XSA9IFwiVXNlckVtYWlsVmVyaWZpZWRcIjtcbiAgICBFdmVudFR5cGVbRXZlbnRUeXBlW1wiVGVzdFwiXSA9IDE2XSA9IFwiVGVzdFwiO1xufSkoRXZlbnRUeXBlID0gZXhwb3J0cy5FdmVudFR5cGUgfHwgKGV4cG9ydHMuRXZlbnRUeXBlID0ge30pKTtcbi8qKlxuICogQGF1dGhvciBCcmlhbiBQb250YXJlbGxpXG4gKi9cbnZhciBFeHBpcnlVbml0O1xuKGZ1bmN0aW9uIChFeHBpcnlVbml0KSB7XG4gICAgRXhwaXJ5VW5pdFtFeHBpcnlVbml0W1wiTUlOVVRFU1wiXSA9IDBdID0gXCJNSU5VVEVTXCI7XG4gICAgRXhwaXJ5VW5pdFtFeHBpcnlVbml0W1wiSE9VUlNcIl0gPSAxXSA9IFwiSE9VUlNcIjtcbiAgICBFeHBpcnlVbml0W0V4cGlyeVVuaXRbXCJEQVlTXCJdID0gMl0gPSBcIkRBWVNcIjtcbiAgICBFeHBpcnlVbml0W0V4cGlyeVVuaXRbXCJXRUVLU1wiXSA9IDNdID0gXCJXRUVLU1wiO1xuICAgIEV4cGlyeVVuaXRbRXhwaXJ5VW5pdFtcIk1PTlRIU1wiXSA9IDRdID0gXCJNT05USFNcIjtcbiAgICBFeHBpcnlVbml0W0V4cGlyeVVuaXRbXCJZRUFSU1wiXSA9IDVdID0gXCJZRUFSU1wiO1xufSkoRXhwaXJ5VW5pdCA9IGV4cG9ydHMuRXhwaXJ5VW5pdCB8fCAoZXhwb3J0cy5FeHBpcnlVbml0ID0ge30pKTtcbnZhciBGYW1pbHlSb2xlO1xuKGZ1bmN0aW9uIChGYW1pbHlSb2xlKSB7XG4gICAgRmFtaWx5Um9sZVtGYW1pbHlSb2xlW1wiQ2hpbGRcIl0gPSAwXSA9IFwiQ2hpbGRcIjtcbiAgICBGYW1pbHlSb2xlW0ZhbWlseVJvbGVbXCJUZWVuXCJdID0gMV0gPSBcIlRlZW5cIjtcbiAgICBGYW1pbHlSb2xlW0ZhbWlseVJvbGVbXCJBZHVsdFwiXSA9IDJdID0gXCJBZHVsdFwiO1xufSkoRmFtaWx5Um9sZSA9IGV4cG9ydHMuRmFtaWx5Um9sZSB8fCAoZXhwb3J0cy5GYW1pbHlSb2xlID0ge30pKTtcbi8qKlxuICogQXV0aG9yaXphdGlvbiBHcmFudCB0eXBlcyBhcyBkZWZpbmVkIGJ5IHRoZSA8YSBocmVmPVwiaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NDlcIj5UaGUgT0F1dGggMi4wIEF1dGhvcml6YXRpb25cbiAqIEZyYW1ld29yayAtIFJGQyA2NzQ5PC9hPi5cbiAqIDxwPlxuICogU3BlY2lmaWMgbmFtZXMgYXMgZGVmaW5lZCBieSA8YSBocmVmPVwiaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc1OTEjc2VjdGlvbi00LjFcIj5cbiAqIE9BdXRoIDIuMCBEeW5hbWljIENsaWVudCBSZWdpc3RyYXRpb24gUHJvdG9jb2wgLSBSRkMgNzU5MSBTZWN0aW9uIDQuMTwvYT5cbiAqXG4gKiBAYXV0aG9yIERhbmllbCBEZUdyb2ZmXG4gKi9cbnZhciBHcmFudFR5cGU7XG4oZnVuY3Rpb24gKEdyYW50VHlwZSkge1xuICAgIEdyYW50VHlwZVtHcmFudFR5cGVbXCJhdXRob3JpemF0aW9uX2NvZGVcIl0gPSAwXSA9IFwiYXV0aG9yaXphdGlvbl9jb2RlXCI7XG4gICAgR3JhbnRUeXBlW0dyYW50VHlwZVtcImltcGxpY2l0XCJdID0gMV0gPSBcImltcGxpY2l0XCI7XG4gICAgR3JhbnRUeXBlW0dyYW50VHlwZVtcInBhc3N3b3JkXCJdID0gMl0gPSBcInBhc3N3b3JkXCI7XG4gICAgR3JhbnRUeXBlW0dyYW50VHlwZVtcImNsaWVudF9jcmVkZW50aWFsc1wiXSA9IDNdID0gXCJjbGllbnRfY3JlZGVudGlhbHNcIjtcbiAgICBHcmFudFR5cGVbR3JhbnRUeXBlW1wicmVmcmVzaF90b2tlblwiXSA9IDRdID0gXCJyZWZyZXNoX3Rva2VuXCI7XG4gICAgR3JhbnRUeXBlW0dyYW50VHlwZVtcInVua25vd25cIl0gPSA1XSA9IFwidW5rbm93blwiO1xufSkoR3JhbnRUeXBlID0gZXhwb3J0cy5HcmFudFR5cGUgfHwgKGV4cG9ydHMuR3JhbnRUeXBlID0ge30pKTtcbnZhciBIVFRQTWV0aG9kO1xuKGZ1bmN0aW9uIChIVFRQTWV0aG9kKSB7XG4gICAgSFRUUE1ldGhvZFtIVFRQTWV0aG9kW1wiR0VUXCJdID0gMF0gPSBcIkdFVFwiO1xuICAgIEhUVFBNZXRob2RbSFRUUE1ldGhvZFtcIlBPU1RcIl0gPSAxXSA9IFwiUE9TVFwiO1xuICAgIEhUVFBNZXRob2RbSFRUUE1ldGhvZFtcIlBVVFwiXSA9IDJdID0gXCJQVVRcIjtcbiAgICBIVFRQTWV0aG9kW0hUVFBNZXRob2RbXCJERUxFVEVcIl0gPSAzXSA9IFwiREVMRVRFXCI7XG4gICAgSFRUUE1ldGhvZFtIVFRQTWV0aG9kW1wiSEVBRFwiXSA9IDRdID0gXCJIRUFEXCI7XG4gICAgSFRUUE1ldGhvZFtIVFRQTWV0aG9kW1wiT1BUSU9OU1wiXSA9IDVdID0gXCJPUFRJT05TXCI7XG59KShIVFRQTWV0aG9kID0gZXhwb3J0cy5IVFRQTWV0aG9kIHx8IChleHBvcnRzLkhUVFBNZXRob2QgPSB7fSkpO1xudmFyIElkZW50aXR5UHJvdmlkZXJUeXBlO1xuKGZ1bmN0aW9uIChJZGVudGl0eVByb3ZpZGVyVHlwZSkge1xuICAgIElkZW50aXR5UHJvdmlkZXJUeXBlW0lkZW50aXR5UHJvdmlkZXJUeXBlW1wiRXh0ZXJuYWxKV1RcIl0gPSAwXSA9IFwiRXh0ZXJuYWxKV1RcIjtcbiAgICBJZGVudGl0eVByb3ZpZGVyVHlwZVtJZGVudGl0eVByb3ZpZGVyVHlwZVtcIk9wZW5JRENvbm5lY3RcIl0gPSAxXSA9IFwiT3BlbklEQ29ubmVjdFwiO1xuICAgIElkZW50aXR5UHJvdmlkZXJUeXBlW0lkZW50aXR5UHJvdmlkZXJUeXBlW1wiRmFjZWJvb2tcIl0gPSAyXSA9IFwiRmFjZWJvb2tcIjtcbiAgICBJZGVudGl0eVByb3ZpZGVyVHlwZVtJZGVudGl0eVByb3ZpZGVyVHlwZVtcIkdvb2dsZVwiXSA9IDNdID0gXCJHb29nbGVcIjtcbiAgICBJZGVudGl0eVByb3ZpZGVyVHlwZVtJZGVudGl0eVByb3ZpZGVyVHlwZVtcIlR3aXR0ZXJcIl0gPSA0XSA9IFwiVHdpdHRlclwiO1xuICAgIElkZW50aXR5UHJvdmlkZXJUeXBlW0lkZW50aXR5UHJvdmlkZXJUeXBlW1wiU0FNTHYyXCJdID0gNV0gPSBcIlNBTUx2MlwiO1xufSkoSWRlbnRpdHlQcm92aWRlclR5cGUgPSBleHBvcnRzLklkZW50aXR5UHJvdmlkZXJUeXBlIHx8IChleHBvcnRzLklkZW50aXR5UHJvdmlkZXJUeXBlID0ge30pKTtcbnZhciBLZXlBbGdvcml0aG07XG4oZnVuY3Rpb24gKEtleUFsZ29yaXRobSkge1xuICAgIEtleUFsZ29yaXRobVtLZXlBbGdvcml0aG1bXCJFUzI1NlwiXSA9IDBdID0gXCJFUzI1NlwiO1xuICAgIEtleUFsZ29yaXRobVtLZXlBbGdvcml0aG1bXCJFUzM4NFwiXSA9IDFdID0gXCJFUzM4NFwiO1xuICAgIEtleUFsZ29yaXRobVtLZXlBbGdvcml0aG1bXCJFUzUxMlwiXSA9IDJdID0gXCJFUzUxMlwiO1xuICAgIEtleUFsZ29yaXRobVtLZXlBbGdvcml0aG1bXCJIUzI1NlwiXSA9IDNdID0gXCJIUzI1NlwiO1xuICAgIEtleUFsZ29yaXRobVtLZXlBbGdvcml0aG1bXCJIUzM4NFwiXSA9IDRdID0gXCJIUzM4NFwiO1xuICAgIEtleUFsZ29yaXRobVtLZXlBbGdvcml0aG1bXCJIUzUxMlwiXSA9IDVdID0gXCJIUzUxMlwiO1xuICAgIEtleUFsZ29yaXRobVtLZXlBbGdvcml0aG1bXCJSUzI1NlwiXSA9IDZdID0gXCJSUzI1NlwiO1xuICAgIEtleUFsZ29yaXRobVtLZXlBbGdvcml0aG1bXCJSUzM4NFwiXSA9IDddID0gXCJSUzM4NFwiO1xuICAgIEtleUFsZ29yaXRobVtLZXlBbGdvcml0aG1bXCJSUzUxMlwiXSA9IDhdID0gXCJSUzUxMlwiO1xufSkoS2V5QWxnb3JpdGhtID0gZXhwb3J0cy5LZXlBbGdvcml0aG0gfHwgKGV4cG9ydHMuS2V5QWxnb3JpdGhtID0ge30pKTtcbnZhciBLZXlUeXBlO1xuKGZ1bmN0aW9uIChLZXlUeXBlKSB7XG4gICAgS2V5VHlwZVtLZXlUeXBlW1wiRUNcIl0gPSAwXSA9IFwiRUNcIjtcbiAgICBLZXlUeXBlW0tleVR5cGVbXCJSU0FcIl0gPSAxXSA9IFwiUlNBXCI7XG4gICAgS2V5VHlwZVtLZXlUeXBlW1wiSE1BQ1wiXSA9IDJdID0gXCJITUFDXCI7XG59KShLZXlUeXBlID0gZXhwb3J0cy5LZXlUeXBlIHx8IChleHBvcnRzLktleVR5cGUgPSB7fSkpO1xuLyoqXG4gKiBUaGUgdHlwZXMgb2YgbGFtYmRhcyB0aGF0IGluZGljYXRlIGhvdyB0aGV5IGFyZSBpbnZva2VkIGJ5IEZ1c2lvbkF1dGguXG4gKlxuICogQGF1dGhvciBCcmlhbiBQb250YXJlbGxpXG4gKi9cbnZhciBMYW1iZGFUeXBlO1xuKGZ1bmN0aW9uIChMYW1iZGFUeXBlKSB7XG4gICAgTGFtYmRhVHlwZVtMYW1iZGFUeXBlW1wiSldUUG9wdWxhdGVcIl0gPSAwXSA9IFwiSldUUG9wdWxhdGVcIjtcbiAgICBMYW1iZGFUeXBlW0xhbWJkYVR5cGVbXCJPcGVuSURSZWNvbmNpbGVcIl0gPSAxXSA9IFwiT3BlbklEUmVjb25jaWxlXCI7XG4gICAgTGFtYmRhVHlwZVtMYW1iZGFUeXBlW1wiU0FNTHYyUmVjb25jaWxlXCJdID0gMl0gPSBcIlNBTUx2MlJlY29uY2lsZVwiO1xuICAgIExhbWJkYVR5cGVbTGFtYmRhVHlwZVtcIlNBTUx2MlBvcHVsYXRlXCJdID0gM10gPSBcIlNBTUx2MlBvcHVsYXRlXCI7XG59KShMYW1iZGFUeXBlID0gZXhwb3J0cy5MYW1iZGFUeXBlIHx8IChleHBvcnRzLkxhbWJkYVR5cGUgPSB7fSkpO1xudmFyIExvZ2luSWRUeXBlO1xuKGZ1bmN0aW9uIChMb2dpbklkVHlwZSkge1xuICAgIExvZ2luSWRUeXBlW0xvZ2luSWRUeXBlW1wiZW1haWxcIl0gPSAwXSA9IFwiZW1haWxcIjtcbiAgICBMb2dpbklkVHlwZVtMb2dpbklkVHlwZVtcInVzZXJuYW1lXCJdID0gMV0gPSBcInVzZXJuYW1lXCI7XG59KShMb2dpbklkVHlwZSA9IGV4cG9ydHMuTG9naW5JZFR5cGUgfHwgKGV4cG9ydHMuTG9naW5JZFR5cGUgPSB7fSkpO1xudmFyIE9BdXRoRXJyb3JSZWFzb247XG4oZnVuY3Rpb24gKE9BdXRoRXJyb3JSZWFzb24pIHtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJhdXRoX2NvZGVfbm90X2ZvdW5kXCJdID0gMF0gPSBcImF1dGhfY29kZV9ub3RfZm91bmRcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJhY2Nlc3NfdG9rZW5fbWFsZm9ybWVkXCJdID0gMV0gPSBcImFjY2Vzc190b2tlbl9tYWxmb3JtZWRcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJhY2Nlc3NfdG9rZW5fZXhwaXJlZFwiXSA9IDJdID0gXCJhY2Nlc3NfdG9rZW5fZXhwaXJlZFwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImFjY2Vzc190b2tlbl91bmF2YWlsYWJsZV9mb3JfcHJvY2Vzc2luZ1wiXSA9IDNdID0gXCJhY2Nlc3NfdG9rZW5fdW5hdmFpbGFibGVfZm9yX3Byb2Nlc3NpbmdcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJhY2Nlc3NfdG9rZW5fZmFpbGVkX3Byb2Nlc3NpbmdcIl0gPSA0XSA9IFwiYWNjZXNzX3Rva2VuX2ZhaWxlZF9wcm9jZXNzaW5nXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wicmVmcmVzaF90b2tlbl9ub3RfZm91bmRcIl0gPSA1XSA9IFwicmVmcmVzaF90b2tlbl9ub3RfZm91bmRcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJpbnZhbGlkX2NsaWVudF9pZFwiXSA9IDZdID0gXCJpbnZhbGlkX2NsaWVudF9pZFwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImludmFsaWRfdXNlcl9jcmVkZW50aWFsc1wiXSA9IDddID0gXCJpbnZhbGlkX3VzZXJfY3JlZGVudGlhbHNcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJpbnZhbGlkX2dyYW50X3R5cGVcIl0gPSA4XSA9IFwiaW52YWxpZF9ncmFudF90eXBlXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wiaW52YWxpZF9vcmlnaW5cIl0gPSA5XSA9IFwiaW52YWxpZF9vcmlnaW5cIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJpbnZhbGlkX3BrY2VfY29kZV92ZXJpZmllclwiXSA9IDEwXSA9IFwiaW52YWxpZF9wa2NlX2NvZGVfdmVyaWZpZXJcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJpbnZhbGlkX3BrY2VfY29kZV9jaGFsbGVuZ2VcIl0gPSAxMV0gPSBcImludmFsaWRfcGtjZV9jb2RlX2NoYWxsZW5nZVwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImludmFsaWRfcGtjZV9jb2RlX2NoYWxsZW5nZV9tZXRob2RcIl0gPSAxMl0gPSBcImludmFsaWRfcGtjZV9jb2RlX2NoYWxsZW5nZV9tZXRob2RcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJpbnZhbGlkX3JlZGlyZWN0X3VyaVwiXSA9IDEzXSA9IFwiaW52YWxpZF9yZWRpcmVjdF91cmlcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJpbnZhbGlkX3Jlc3BvbnNlX3R5cGVcIl0gPSAxNF0gPSBcImludmFsaWRfcmVzcG9uc2VfdHlwZVwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImludmFsaWRfaWRfdG9rZW5faGludFwiXSA9IDE1XSA9IFwiaW52YWxpZF9pZF90b2tlbl9oaW50XCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wiaW52YWxpZF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmlcIl0gPSAxNl0gPSBcImludmFsaWRfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wiZ3JhbnRfdHlwZV9kaXNhYmxlZFwiXSA9IDE3XSA9IFwiZ3JhbnRfdHlwZV9kaXNhYmxlZFwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcIm1pc3NpbmdfY2xpZW50X2lkXCJdID0gMThdID0gXCJtaXNzaW5nX2NsaWVudF9pZFwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcIm1pc3NpbmdfY29kZVwiXSA9IDE5XSA9IFwibWlzc2luZ19jb2RlXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wibWlzc2luZ19ncmFudF90eXBlXCJdID0gMjBdID0gXCJtaXNzaW5nX2dyYW50X3R5cGVcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJtaXNzaW5nX3JlZGlyZWN0X3VyaVwiXSA9IDIxXSA9IFwibWlzc2luZ19yZWRpcmVjdF91cmlcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJtaXNzaW5nX3JlZnJlc2hfdG9rZW5cIl0gPSAyMl0gPSBcIm1pc3NpbmdfcmVmcmVzaF90b2tlblwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcIm1pc3NpbmdfcmVzcG9uc2VfdHlwZVwiXSA9IDIzXSA9IFwibWlzc2luZ19yZXNwb25zZV90eXBlXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1wibWlzc2luZ190b2tlblwiXSA9IDI0XSA9IFwibWlzc2luZ190b2tlblwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImxvZ2luX3ByZXZlbnRlZFwiXSA9IDI1XSA9IFwibG9naW5fcHJldmVudGVkXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1widXNlcl9leHBpcmVkXCJdID0gMjZdID0gXCJ1c2VyX2V4cGlyZWRcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJ1c2VyX2xvY2tlZFwiXSA9IDI3XSA9IFwidXNlcl9sb2NrZWRcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJ1c2VyX25vdF9mb3VuZFwiXSA9IDI4XSA9IFwidXNlcl9ub3RfZm91bmRcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJjbGllbnRfYXV0aGVudGljYXRpb25fbWlzc2luZ1wiXSA9IDI5XSA9IFwiY2xpZW50X2F1dGhlbnRpY2F0aW9uX21pc3NpbmdcIjtcbiAgICBPQXV0aEVycm9yUmVhc29uW09BdXRoRXJyb3JSZWFzb25bXCJpbnZhbGlkX2NsaWVudF9hdXRoZW50aWNhdGlvbl9zY2hlbWVcIl0gPSAzMF0gPSBcImludmFsaWRfY2xpZW50X2F1dGhlbnRpY2F0aW9uX3NjaGVtZVwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImludmFsaWRfY2xpZW50X2F1dGhlbnRpY2F0aW9uXCJdID0gMzFdID0gXCJpbnZhbGlkX2NsaWVudF9hdXRoZW50aWNhdGlvblwiO1xuICAgIE9BdXRoRXJyb3JSZWFzb25bT0F1dGhFcnJvclJlYXNvbltcImNsaWVudF9pZF9taXNtYXRjaFwiXSA9IDMyXSA9IFwiY2xpZW50X2lkX21pc21hdGNoXCI7XG4gICAgT0F1dGhFcnJvclJlYXNvbltPQXV0aEVycm9yUmVhc29uW1widW5rbm93blwiXSA9IDMzXSA9IFwidW5rbm93blwiO1xufSkoT0F1dGhFcnJvclJlYXNvbiA9IGV4cG9ydHMuT0F1dGhFcnJvclJlYXNvbiB8fCAoZXhwb3J0cy5PQXV0aEVycm9yUmVhc29uID0ge30pKTtcbnZhciBPQXV0aEVycm9yVHlwZTtcbihmdW5jdGlvbiAoT0F1dGhFcnJvclR5cGUpIHtcbiAgICBPQXV0aEVycm9yVHlwZVtPQXV0aEVycm9yVHlwZVtcImludmFsaWRfcmVxdWVzdFwiXSA9IDBdID0gXCJpbnZhbGlkX3JlcXVlc3RcIjtcbiAgICBPQXV0aEVycm9yVHlwZVtPQXV0aEVycm9yVHlwZVtcImludmFsaWRfY2xpZW50XCJdID0gMV0gPSBcImludmFsaWRfY2xpZW50XCI7XG4gICAgT0F1dGhFcnJvclR5cGVbT0F1dGhFcnJvclR5cGVbXCJpbnZhbGlkX2dyYW50XCJdID0gMl0gPSBcImludmFsaWRfZ3JhbnRcIjtcbiAgICBPQXV0aEVycm9yVHlwZVtPQXV0aEVycm9yVHlwZVtcImludmFsaWRfdG9rZW5cIl0gPSAzXSA9IFwiaW52YWxpZF90b2tlblwiO1xuICAgIE9BdXRoRXJyb3JUeXBlW09BdXRoRXJyb3JUeXBlW1widW5hdXRob3JpemVkX2NsaWVudFwiXSA9IDRdID0gXCJ1bmF1dGhvcml6ZWRfY2xpZW50XCI7XG4gICAgT0F1dGhFcnJvclR5cGVbT0F1dGhFcnJvclR5cGVbXCJpbnZhbGlkX3Njb3BlXCJdID0gNV0gPSBcImludmFsaWRfc2NvcGVcIjtcbiAgICBPQXV0aEVycm9yVHlwZVtPQXV0aEVycm9yVHlwZVtcInNlcnZlcl9lcnJvclwiXSA9IDZdID0gXCJzZXJ2ZXJfZXJyb3JcIjtcbiAgICBPQXV0aEVycm9yVHlwZVtPQXV0aEVycm9yVHlwZVtcInVuc3VwcG9ydGVkX2dyYW50X3R5cGVcIl0gPSA3XSA9IFwidW5zdXBwb3J0ZWRfZ3JhbnRfdHlwZVwiO1xuICAgIE9BdXRoRXJyb3JUeXBlW09BdXRoRXJyb3JUeXBlW1widW5zdXBwb3J0ZWRfcmVzcG9uc2VfdHlwZVwiXSA9IDhdID0gXCJ1bnN1cHBvcnRlZF9yZXNwb25zZV90eXBlXCI7XG4gICAgT0F1dGhFcnJvclR5cGVbT0F1dGhFcnJvclR5cGVbXCJjaGFuZ2VfcGFzc3dvcmRfcmVxdWlyZWRcIl0gPSA5XSA9IFwiY2hhbmdlX3Bhc3N3b3JkX3JlcXVpcmVkXCI7XG4gICAgT0F1dGhFcnJvclR5cGVbT0F1dGhFcnJvclR5cGVbXCJ0d29fZmFjdG9yX3JlcXVpcmVkXCJdID0gMTBdID0gXCJ0d29fZmFjdG9yX3JlcXVpcmVkXCI7XG59KShPQXV0aEVycm9yVHlwZSA9IGV4cG9ydHMuT0F1dGhFcnJvclR5cGUgfHwgKGV4cG9ydHMuT0F1dGhFcnJvclR5cGUgPSB7fSkpO1xuLyoqXG4gKiBAYXV0aG9yIERhbmllbCBEZUdyb2ZmXG4gKi9cbnZhciBTZWN1cmVHZW5lcmF0b3JUeXBlO1xuKGZ1bmN0aW9uIChTZWN1cmVHZW5lcmF0b3JUeXBlKSB7XG4gICAgU2VjdXJlR2VuZXJhdG9yVHlwZVtTZWN1cmVHZW5lcmF0b3JUeXBlW1wicmFuZG9tRGlnaXRzXCJdID0gMF0gPSBcInJhbmRvbURpZ2l0c1wiO1xuICAgIFNlY3VyZUdlbmVyYXRvclR5cGVbU2VjdXJlR2VuZXJhdG9yVHlwZVtcInJhbmRvbUJ5dGVzXCJdID0gMV0gPSBcInJhbmRvbUJ5dGVzXCI7XG59KShTZWN1cmVHZW5lcmF0b3JUeXBlID0gZXhwb3J0cy5TZWN1cmVHZW5lcmF0b3JUeXBlIHx8IChleHBvcnRzLlNlY3VyZUdlbmVyYXRvclR5cGUgPSB7fSkpO1xuLyoqXG4gKiBAYXV0aG9yIERhbmllbCBEZUdyb2ZmXG4gKi9cbnZhciBTb3J0O1xuKGZ1bmN0aW9uIChTb3J0KSB7XG4gICAgU29ydFtTb3J0W1wiYXNjXCJdID0gMF0gPSBcImFzY1wiO1xuICAgIFNvcnRbU29ydFtcImRlc2NcIl0gPSAxXSA9IFwiZGVzY1wiO1xufSkoU29ydCA9IGV4cG9ydHMuU29ydCB8fCAoZXhwb3J0cy5Tb3J0ID0ge30pKTtcbi8qKlxuICogPHVsPlxuICogPGxpPkJlYXJlciBUb2tlbiB0eXBlIGFzIGRlZmluZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzUwXCI+UkZDIDY3NTA8L2E+LjwvbGk+XG4gKiA8bGk+TUFDIFRva2VuIHR5cGUgYXMgcmVmZXJlbmNlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NDlcIj5SRkMgNjc0OTwvYT4gYW5kXG4gKiA8YSBocmVmPVwiaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LWlldGYtb2F1dGgtdjItaHR0cC1tYWMtMDVcIj5cbiAqIERyYWZ0IFJGQyBvbiBPQXV0aCAyLjAgTWVzc2FnZSBBdXRoZW50aWNhdGlvbiBDb2RlIChNQUMpIFRva2VuczwvYT5cbiAqIDwvbGk+XG4gKiA8L3VsPlxuICpcbiAqIEBhdXRob3IgRGFuaWVsIERlR3JvZmZcbiAqL1xudmFyIFRva2VuVHlwZTtcbihmdW5jdGlvbiAoVG9rZW5UeXBlKSB7XG4gICAgVG9rZW5UeXBlW1Rva2VuVHlwZVtcIkJlYXJlclwiXSA9IDBdID0gXCJCZWFyZXJcIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiTUFDXCJdID0gMV0gPSBcIk1BQ1wiO1xufSkoVG9rZW5UeXBlID0gZXhwb3J0cy5Ub2tlblR5cGUgfHwgKGV4cG9ydHMuVG9rZW5UeXBlID0ge30pKTtcbi8qKlxuICogVGhlIHRyYW5zYWN0aW9uIHR5cGVzIGZvciBXZWJob29rcyBhbmQgb3RoZXIgZXZlbnQgc3lzdGVtcyB3aXRoaW4gRnVzaW9uQXV0aC5cbiAqXG4gKiBAYXV0aG9yIEJyaWFuIFBvbnRhcmVsbGlcbiAqL1xudmFyIFRyYW5zYWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoVHJhbnNhY3Rpb25UeXBlKSB7XG4gICAgVHJhbnNhY3Rpb25UeXBlW1RyYW5zYWN0aW9uVHlwZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIFRyYW5zYWN0aW9uVHlwZVtUcmFuc2FjdGlvblR5cGVbXCJBbnlcIl0gPSAxXSA9IFwiQW55XCI7XG4gICAgVHJhbnNhY3Rpb25UeXBlW1RyYW5zYWN0aW9uVHlwZVtcIlNpbXBsZU1ham9yaXR5XCJdID0gMl0gPSBcIlNpbXBsZU1ham9yaXR5XCI7XG4gICAgVHJhbnNhY3Rpb25UeXBlW1RyYW5zYWN0aW9uVHlwZVtcIlN1cGVyTWFqb3JpdHlcIl0gPSAzXSA9IFwiU3VwZXJNYWpvcml0eVwiO1xuICAgIFRyYW5zYWN0aW9uVHlwZVtUcmFuc2FjdGlvblR5cGVbXCJBYnNvbHV0ZU1ham9yaXR5XCJdID0gNF0gPSBcIkFic29sdXRlTWFqb3JpdHlcIjtcbn0pKFRyYW5zYWN0aW9uVHlwZSA9IGV4cG9ydHMuVHJhbnNhY3Rpb25UeXBlIHx8IChleHBvcnRzLlRyYW5zYWN0aW9uVHlwZSA9IHt9KSk7XG4vKipcbiAqIEBhdXRob3IgRGFuaWVsIERlR3JvZmZcbiAqL1xudmFyIFR3b0ZhY3RvckRlbGl2ZXJ5O1xuKGZ1bmN0aW9uIChUd29GYWN0b3JEZWxpdmVyeSkge1xuICAgIFR3b0ZhY3RvckRlbGl2ZXJ5W1R3b0ZhY3RvckRlbGl2ZXJ5W1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gICAgVHdvRmFjdG9yRGVsaXZlcnlbVHdvRmFjdG9yRGVsaXZlcnlbXCJUZXh0TWVzc2FnZVwiXSA9IDFdID0gXCJUZXh0TWVzc2FnZVwiO1xufSkoVHdvRmFjdG9yRGVsaXZlcnkgPSBleHBvcnRzLlR3b0ZhY3RvckRlbGl2ZXJ5IHx8IChleHBvcnRzLlR3b0ZhY3RvckRlbGl2ZXJ5ID0ge30pKTtcbi8qKlxuICogVGhlIHBoYXNlcyBvZiBhIHRpbWUtYmFzZWQgdXNlciBhY3Rpb24uXG4gKlxuICogQGF1dGhvciBCcmlhbiBQb250YXJlbGxpXG4gKi9cbnZhciBVc2VyQWN0aW9uUGhhc2U7XG4oZnVuY3Rpb24gKFVzZXJBY3Rpb25QaGFzZSkge1xuICAgIFVzZXJBY3Rpb25QaGFzZVtVc2VyQWN0aW9uUGhhc2VbXCJzdGFydFwiXSA9IDBdID0gXCJzdGFydFwiO1xuICAgIFVzZXJBY3Rpb25QaGFzZVtVc2VyQWN0aW9uUGhhc2VbXCJtb2RpZnlcIl0gPSAxXSA9IFwibW9kaWZ5XCI7XG4gICAgVXNlckFjdGlvblBoYXNlW1VzZXJBY3Rpb25QaGFzZVtcImNhbmNlbFwiXSA9IDJdID0gXCJjYW5jZWxcIjtcbiAgICBVc2VyQWN0aW9uUGhhc2VbVXNlckFjdGlvblBoYXNlW1wiZW5kXCJdID0gM10gPSBcImVuZFwiO1xufSkoVXNlckFjdGlvblBoYXNlID0gZXhwb3J0cy5Vc2VyQWN0aW9uUGhhc2UgfHwgKGV4cG9ydHMuVXNlckFjdGlvblBoYXNlID0ge30pKTtcbi8qKlxuICogQGF1dGhvciBEYW5pZWwgRGVHcm9mZlxuICovXG52YXIgVXNlclN0YXRlO1xuKGZ1bmN0aW9uIChVc2VyU3RhdGUpIHtcbiAgICBVc2VyU3RhdGVbVXNlclN0YXRlW1wiQXV0aGVudGljYXRlZFwiXSA9IDBdID0gXCJBdXRoZW50aWNhdGVkXCI7XG4gICAgVXNlclN0YXRlW1VzZXJTdGF0ZVtcIkF1dGhlbnRpY2F0ZWROb3RSZWdpc3RlcmVkXCJdID0gMV0gPSBcIkF1dGhlbnRpY2F0ZWROb3RSZWdpc3RlcmVkXCI7XG59KShVc2VyU3RhdGUgPSBleHBvcnRzLlVzZXJTdGF0ZSB8fCAoZXhwb3J0cy5Vc2VyU3RhdGUgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RnVzaW9uQXV0aENsaWVudE5hdGl2ZS5qcy5tYXAiLCJpbXBvcnQgRnVzaW9uQXV0aENsaWVudE5hdGl2ZSBmcm9tIFwiQC9saWIvRnVzaW9uQXV0aENsaWVudE5hdGl2ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRnVzaW9uQXV0aENsaWVudE5hdGl2ZShcIlpmQnFrVzdZckpyTmxoQ2I1WUxmbHpRbmpZUkc5YWZ5VnJqUnNzUGhIbWtcIiwgJ2h0dHA6Ly8xOTIuMTY4LjIxNy4xMzc6OTAxMScpOyIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5pbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29scydcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG5pZihUTlNfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVnVlLnVzZShWdWVEZXZ0b29scylcbn1cblxuLy8gUHJpbnRzIFZ1ZSBsb2dzIHdoZW4gLS1lbnYucHJvZHVjdGlvbiBpcyAqTk9UKiBzZXQgd2hpbGUgYnVpbGRpbmdcblZ1ZS5jb25maWcuc2lsZW50ID0gKFROU19FTlYgPT09ICdwcm9kdWN0aW9uJylcblxuXG5uZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJlbmRlcjogaCA9PiBoKCdmcmFtZScsIFtoKEFwcCldKVxufSkuJHN0YXJ0KClcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuXG5WdWUudXNlKFZ1ZXgpO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIHN0YXRlOiB7XG5cbiAgfSxcbiAgbXV0YXRpb25zOiB7XG5cbiAgfSxcbiAgYWN0aW9uczoge1xuXG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==