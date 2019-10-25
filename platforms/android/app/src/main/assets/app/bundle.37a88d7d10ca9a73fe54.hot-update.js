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
        console.log(_this.getIMEI());
        nativescript_fontawesome_1.Fontawesome.init();
        return _this;
    }
    App.prototype.getIMEI = function () {
        return Android.getIMEI();
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MDVmNCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXVCQSx3SEFBbUM7QUFDbkMsMkhBQXVEO0FBQ3ZELG1IQUFvRDtBQUNwRCx1RkFBeUM7QUFDekMsZ0hBQXVEO0FBU3ZEO0lBQWlDLCtCQUFHO0lBQ2hDO1FBQUEsaUJBR0M7UUFGRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLHNDQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7O0lBQ3ZCLENBQUM7SUFTRCxxQkFBTyxHQUFQO1FBQ0ksT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGtCQUFJLEdBQUosVUFBSyxnQkFBZ0I7UUFDakIsSUFBRyxnQkFBZ0IsSUFBSSx1QkFBdUIsSUFBSSxnQkFBZ0IsSUFBSSxPQUFPLEVBQUM7WUFDMUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBSSxFQUFFO2dCQUNuQixLQUFLLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2lCQUNsQjthQUNKLENBQUMsQ0FBQztTQUNOO2FBQUk7WUFDRCxLQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLDZCQUE2QjtnQkFDdEMsWUFBWSxFQUFFLFdBQVc7YUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUFBLENBQUM7SUFFTixDQUFDO0lBQUEsQ0FBQztJQUVGLDZCQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFJO1lBQ1osU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3JCLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN6QixlQUFlLEVBQUUsc0NBQXNDO1NBQzFELENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUFBLENBQUM7SUFFRixtQ0FBcUIsR0FBckI7UUFDSSxPQUFPLGtDQUFNLENBQUMsV0FBVyxDQUFDLHNDQUFzQyxDQUFDO2FBQzVELElBQUksQ0FBQyxrQkFBUTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQUEsQ0FBQztJQUVGLHlCQUFXLEdBQVg7UUFBQSxpQkFrQkM7UUFqQkcsNEJBQTRCO1FBQzVCLE9BQU8sa0NBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzthQUNuRCxJQUFJLENBQUMsa0JBQVE7WUFDVixLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUN2QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUM7WUFDeEIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ25ELEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLG9DQUFvQztZQUNwQyw2Q0FBNkM7WUFDN0Msc0NBQXNDO1FBQzFDLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyx3QkFBYztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7SUFBQSxDQUFDO0lBSUYsNEJBQWMsR0FBZCxVQUFlLGNBQWM7UUFDekIsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUFBLENBQUM7SUFDRixpQ0FBbUIsR0FBbkIsVUFBb0IsY0FBYztRQUM5QixPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBQUEsQ0FBQztJQS9FZSxHQUFHO1FBRHZCLGtDQUFTOztPQUNXLEdBQUcsQ0FvRnZCO0lBQUQsVUFBQztDQUFBLENBcEZnQywwQkFBRyxHQW9GbkM7a0JBcEZvQixHQUFHOzs7Ozs7Ozs7OztBQ3BDeEIsc0ZBQW1DO0FBQ25DLDZFQUFtQztBQUVuQyxTQUFtRDtBQUN4QjtBQUUzQixJQUFHLElBQTBCO0lBQzNCLHNHQUFvQjtDQUNyQjtBQUVELFlBQW9FO0FBQ3BFLG1CQUE4QztBQUc5QyxJQUFJLDBCQUFHLG1CQUFDO0lBQ04sS0FBSztJQUNMLE1BQU0sRUFBRSxXQUFDLElBQUksUUFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFNO0FBQ3hCIiwiZmlsZSI6ImJ1bmRsZS4zN2E4OGQ3ZDEwY2E5YTczZmU1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgUHJvcH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2VcIjtcbmltcG9ydCBIb21lIGZyb20gXCJAL2NvbXBvbmVudHMvSG9tZS52dWVcIjtcbmltcG9ydCB7IEZvbnRhd2Vzb21lIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZvbnRhd2Vzb21lJztcblxuZXhwb3J0IGludGVyZmFjZSByZXN1bHQge1xuICAgIHN0YXR1c0NvZGU6IHN0cmluZyxcbiAgICByZXNwb25zZTogSlNPTixcbiAgICByZWdpc3RyYXRpb246IEFycmF5PHN0cmluZz4sXG59XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFZ1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0SU1FSSgpKTtcbiAgICAgICAgRm9udGF3ZXNvbWUuaW5pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW1haWw6IHN0cmluZyA7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVxdWVzdDogT2JqZWN0O1xuICAgIHByaXZhdGUgcm9sZXM6IEpTT047XG4gICAgcHJpdmF0ZSB1c2VyOiBKU09OO1xuICAgIHB1YmxpYyBwb3N0OiBzdHJpbmc7XG5cbiAgICBnZXRJTUVJKCkge1xuICAgICAgICByZXR1cm4gQW5kcm9pZC5nZXRJTUVJKCk7XG4gICAgfVxuXG4gICAgZ29Ubyhyb2xlSW5GdXNpb25BdXRoKXtcbiAgICAgICAgaWYocm9sZUluRnVzaW9uQXV0aCA9PSBcInZpZXctc2VjdXJpdHktbWVzc2FnZVwiIHx8IHJvbGVJbkZ1c2lvbkF1dGggPT0gXCJhZG1pblwiKXtcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IHRoaXMucG9zdCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVFJFVEFcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVzdcOhcmlvIG91IHNlbmhhIGluY29ycmV0b3NcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwidHJ5IEFnYWluXCJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgZGlhbG9nIGNsb3NlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgfTtcblxuICAgIHJlcXVlc3RQcm92aWRlcigpe1xuICAgICAgICB0aGlzLnJlcXVlc3QgPSAge1xuICAgICAgICAgICAgXCJsb2dpbklkXCI6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBcImFwcGxpY2F0aW9uSWRcIjogXCJmY2E0ODE0Zi02NDVjLTRjM2YtYTliMC0yYjJjYTdhMmU4MzVcIlxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0O1xuICAgIH07XG5cbiAgICB0ZXN0RnVzaW9uQXV0aE1ldGhvZHMoKSB7XG4gICAgICAgIHJldHVybiBjbGllbnQuc2VhcmNoVXNlcnMoXCI5MDE5MDRkOC01ZWViLTQ0MWYtYTgwZS04YzhjNTk1ODI1YjVcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2xpZW50TG9naW4oKSB7XG4gICAgICAgIC8vIHRoaXMuJG5hdmlnYXRlVG8oc2VjdXJlKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5sb2dpbih0aGlzLnJlcXVlc3RQcm92aWRlcigpKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5oYW5kbGVSZXNwb25zZSwgdGhpcy5oYW5kbGVFcnJvclJlc3BvbnNlKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMudXNlci5yZXNwb25zZS51c2VyLnJlZ2lzdHJhdGlvbnM7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gdGhpcy5yb2xlc1swXS5yb2xlc1swXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvbGVzWzBdLnJvbGVzWzBdKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVzZXIgPSB0aGlzLnJlc3VsdC5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJvbGVzID0gdGhpcy51c2VyLnVzZXIucmVnaXN0cmF0aW9ucztcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBvc3QgPSB0aGlzLnJvbGVzWzBdLnJvbGVzWzBdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNpYmlsaXR5ID0+e1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Ubyh0aGlzLnJvbGVzWzBdLnJvbGVzWzBdKTtcbiAgICAgICAgICAgICB9KTtcbiAgICB9O1xuXG5cblxuICAgIGhhbmRsZVJlc3BvbnNlKGNsaWVudFJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBjbGllbnRSZXNwb25zZTtcbiAgICB9O1xuICAgIGhhbmRsZUVycm9yUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIGNsaWVudFJlc3BvbnNlO1xuICAgIH07XG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhvbWUsXG4gICAgfTtcbn1cblxuIiwiaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbmltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmlmKFROU19FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBWdWUudXNlKFZ1ZURldnRvb2xzKVxufVxuXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSAoVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKVxuXG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ2ZyYW1lJywgW2goQXBwKV0pXG59KS4kc3RhcnQoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==