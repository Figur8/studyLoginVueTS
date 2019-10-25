webpackHotUpdate("bundle",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MDVmNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MWUzZiIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXVCQSx3SEFBbUM7QUFDbkMsMkhBQXVEO0FBQ3ZELG1IQUFvRDtBQUNwRCx1RkFBeUM7QUFDekMsZ0hBQXVEO0FBU3ZEO0lBQWlDLCtCQUFHO0lBQ2hDO1FBQUEsaUJBRUM7UUFERyxzQ0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOztJQUN2QixDQUFDO0lBU0Qsa0JBQUksR0FBSixVQUFLLGdCQUFnQjtRQUNqQixJQUFHLGdCQUFnQixJQUFJLHVCQUF1QixJQUFJLGdCQUFnQixJQUFJLE9BQU8sRUFBQztZQUMxRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFJLEVBQUU7Z0JBQ25CLEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDO1NBQ047YUFBSTtZQUNELEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsNkJBQTZCO2dCQUN0QyxZQUFZLEVBQUUsV0FBVzthQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztJQUVOLENBQUM7SUFBQSxDQUFDO0lBRUYsNkJBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUk7WUFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDckIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3pCLGVBQWUsRUFBRSxzQ0FBc0M7U0FDMUQsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQUEsQ0FBQztJQUVG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QUNyQjtBQUVELFlBQW9FO0FBQ3BFLG1CQUE4QztBQUc5QyxJQUFJLDBCQUFHLG1CQUFDO0lBQ04sS0FBSztJQUNMLE1BQU0sRUFBRSxXQUFDLElBQUksUUFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFNO0FBQ3hCIiwiZmlsZSI6ImJ1bmRsZS41OWQ4NWE4Y2E0OGJiYzM1ZTQzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgUHJvcH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2VcIjtcbmltcG9ydCBIb21lIGZyb20gXCJAL2NvbXBvbmVudHMvSG9tZS52dWVcIjtcbmltcG9ydCB7IEZvbnRhd2Vzb21lIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZvbnRhd2Vzb21lJztcblxuZXhwb3J0IGludGVyZmFjZSByZXN1bHQge1xuICAgIHN0YXR1c0NvZGU6IHN0cmluZyxcbiAgICByZXNwb25zZTogSlNPTixcbiAgICByZWdpc3RyYXRpb246IEFycmF5PHN0cmluZz4sXG59XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFZ1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIEZvbnRhd2Vzb21lLmluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVtYWlsOiBzdHJpbmcgO1xuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBwcml2YXRlIHJlcXVlc3Q6IE9iamVjdDtcbiAgICBwcml2YXRlIHJvbGVzOiBKU09OO1xuICAgIHByaXZhdGUgdXNlcjogSlNPTjtcbiAgICBwdWJsaWMgcG9zdDogc3RyaW5nO1xuXG4gICAgZ29Ubyhyb2xlSW5GdXNpb25BdXRoKXtcbiAgICAgICAgaWYocm9sZUluRnVzaW9uQXV0aCA9PSBcInZpZXctc2VjdXJpdHktbWVzc2FnZVwiIHx8IHJvbGVJbkZ1c2lvbkF1dGggPT0gXCJhZG1pblwiKXtcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IHRoaXMucG9zdCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVFJFVEFcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVzdcOhcmlvIG91IHNlbmhhIGluY29ycmV0b3NcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwidHJ5IEFnYWluXCJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgZGlhbG9nIGNsb3NlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgfTtcblxuICAgIHJlcXVlc3RQcm92aWRlcigpe1xuICAgICAgICB0aGlzLnJlcXVlc3QgPSAge1xuICAgICAgICAgICAgXCJsb2dpbklkXCI6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBcImFwcGxpY2F0aW9uSWRcIjogXCJmY2E0ODE0Zi02NDVjLTRjM2YtYTliMC0yYjJjYTdhMmU4MzVcIlxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0O1xuICAgIH07XG5cbiAgICB0ZXN0RnVzaW9uQXV0aE1ldGhvZHMoKSB7XG4gICAgICAgIHJldHVybiBjbGllbnQuc2VhcmNoVXNlcnMoXCI5MDE5MDRkOC01ZWViLTQ0MWYtYTgwZS04YzhjNTk1ODI1YjVcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2xpZW50TG9naW4oKSB7XG4gICAgICAgIC8vIHRoaXMuJG5hdmlnYXRlVG8oc2VjdXJlKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5sb2dpbih0aGlzLnJlcXVlc3RQcm92aWRlcigpKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5oYW5kbGVSZXNwb25zZSwgdGhpcy5oYW5kbGVFcnJvclJlc3BvbnNlKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMudXNlci5yZXNwb25zZS51c2VyLnJlZ2lzdHJhdGlvbnM7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gdGhpcy5yb2xlc1swXS5yb2xlc1swXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvbGVzWzBdLnJvbGVzWzBdKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVzZXIgPSB0aGlzLnJlc3VsdC5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJvbGVzID0gdGhpcy51c2VyLnVzZXIucmVnaXN0cmF0aW9ucztcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBvc3QgPSB0aGlzLnJvbGVzWzBdLnJvbGVzWzBdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNpYmlsaXR5ID0+e1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Ubyh0aGlzLnJvbGVzWzBdLnJvbGVzWzBdKTtcbiAgICAgICAgICAgICB9KTtcbiAgICB9O1xuXG5cblxuICAgIGhhbmRsZVJlc3BvbnNlKGNsaWVudFJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBjbGllbnRSZXNwb25zZTtcbiAgICB9O1xuICAgIGhhbmRsZUVycm9yUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIGNsaWVudFJlc3BvbnNlO1xuICAgIH07XG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhvbWUsXG4gICAgfTtcbn1cblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuY2FybmVnaWV0ZWNobm9sb2dpZXMuY29tL3NpdGVzL2N0L2Fzc2V0cy9pbWFnZS9sb2dvLW9jdG9wdXMucG5nXCIsXG4gICAgICAgICAgICAgICAgICBsb2FkTW9kZTogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1haWwgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvZyBJblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uY2xpZW50TG9naW4gfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5pbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29scydcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG5pZihUTlNfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVnVlLnVzZShWdWVEZXZ0b29scylcbn1cblxuLy8gUHJpbnRzIFZ1ZSBsb2dzIHdoZW4gLS1lbnYucHJvZHVjdGlvbiBpcyAqTk9UKiBzZXQgd2hpbGUgYnVpbGRpbmdcblZ1ZS5jb25maWcuc2lsZW50ID0gKFROU19FTlYgPT09ICdwcm9kdWN0aW9uJylcblxuXG5uZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJlbmRlcjogaCA9PiBoKCdmcmFtZScsIFtoKEFwcCldKVxufSkuJHN0YXJ0KClcbiJdLCJzb3VyY2VSb290IjoiIn0=