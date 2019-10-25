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
            console.log(_this.user.response.user.registrations);
            // this.user = this.result.response;
            // this.roles = this.user.user.registrations;
            // this.post = this.roles[0].roles[0];
        });
        // .then(responsibility =>{
        //     console.log(this.post);
        //     this.goTo(this.roles[0].roles[0]);
        // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MDVmNCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXdCQSx3SEFBbUM7QUFDbkMsMkhBQXVEO0FBQ3ZELG1IQUFvRDtBQUNwRCx1RkFBeUM7QUFDekMsZ0hBQXVEO0FBU3ZEO0lBQWlDLCtCQUFHO0lBRWhDO1FBQUEsaUJBRUM7UUFERyxzQ0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOztJQUN2QixDQUFDO0lBVUQsa0JBQUksR0FBSixVQUFLLGdCQUFnQjtRQUNqQixJQUFHLGdCQUFnQixJQUFJLHVCQUF1QixJQUFJLGdCQUFnQixJQUFJLE9BQU8sRUFBQztZQUMxRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFJLEVBQUU7Z0JBQ25CLEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDO1NBQ047YUFBSTtZQUNELEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsNkJBQTZCO2dCQUN0QyxZQUFZLEVBQUUsV0FBVzthQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztJQUVOLENBQUM7SUFBQSxDQUFDO0lBRUYsNkJBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUk7WUFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDckIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3pCLGVBQWUsRUFBRSxzQ0FBc0M7U0FDMUQsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQUEsQ0FBQztJQUVGLG1DQUFxQixHQUFyQjtRQUNJLE9BQU8sa0NBQU0sQ0FBQyxXQUFXLENBQUMsc0NBQXNDLENBQUM7YUFDNUQsSUFBSSxDQUFDLGtCQUFRO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFBQSxDQUFDO0lBRUYseUJBQVcsR0FBWDtRQUFBLGlCQWlCQztRQWhCRyw0QkFBNEI7UUFDNUIsT0FBTyxrQ0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQ25ELElBQUksQ0FBQyxrQkFBUTtZQUNWLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQztZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbkQsb0NBQW9DO1lBQ3BDLDZDQUE2QztZQUM3QyxzQ0FBc0M7UUFDMUMsQ0FBQyxDQUFDO1FBQ0YsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5Qix5Q0FBeUM7UUFDekMsTUFBTTtJQUNkLENBQUM7SUFBQSxDQUFDO0lBSUYsNEJBQWMsR0FBZCxVQUFlLGNBQWM7UUFDekIsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUFBLENBQUM7SUFDRixpQ0FBbUIsR0FBbkIsVUFBb0IsY0FBYztRQUM5QixPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBQUEsQ0FBQztJQTNFZSxHQUFHO1FBRHZCLGtDQUFTOztPQUNXLEdBQUcsQ0FnRnZCO0lBQUQsVUFBQztDQUFBLENBaEZnQywwQkFBRyxHQWdGbkM7a0JBaEZvQixHQUFHOzs7Ozs7Ozs7OztBQ3JDeEIsc0ZBQW1DO0FBQ25DLDZFQUFtQztBQUVuQyxTQUFtRDtBQUN4QjtBQUUzQixJQUFHLElBQTBCO0lBQzNCLHNHQUFvQjtDQUNyQjtBQUVELFlBQW9FO0FBQ3BFLG1CQUE4QztBQUc5QyxJQUFJLDBCQUFHLG1CQUFDO0lBQ04sS0FBSztJQUNMLE1BQU0sRUFBRSxXQUFDLElBQUksUUFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFNO0FBQ3hCIiwiZmlsZSI6ImJ1bmRsZS4xMWYwYWM3MGY1YTU0ZGE4N2Y0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBQcm9wfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcbmltcG9ydCBjbGllbnQgZnJvbSBcIkAvbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIkAvY29tcG9uZW50cy9Ib21lLnZ1ZVwiO1xuaW1wb3J0IHsgRm9udGF3ZXNvbWUgfSBmcm9tICduYXRpdmVzY3JpcHQtZm9udGF3ZXNvbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIHJlc3VsdCB7XG4gICAgc3RhdHVzQ29kZTogc3RyaW5nLFxuICAgIHJlc3BvbnNlOiBKU09OLFxuICAgIHJlZ2lzdHJhdGlvbjogQXJyYXk8c3RyaW5nPixcbn1cblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgVnVlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBGb250YXdlc29tZS5pbml0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbWFpbDogc3RyaW5nIDtcbiAgICBwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZXF1ZXN0OiBPYmplY3Q7XG4gICAgcHJpdmF0ZSByb2xlczogSlNPTjtcbiAgICBwcml2YXRlIHVzZXI6IEpTT047XG4gICAgcHVibGljIHBvc3Q6IHN0cmluZztcblxuXG4gICAgZ29Ubyhyb2xlSW5GdXNpb25BdXRoKXtcbiAgICAgICAgaWYocm9sZUluRnVzaW9uQXV0aCA9PSBcInZpZXctc2VjdXJpdHktbWVzc2FnZVwiIHx8IHJvbGVJbkZ1c2lvbkF1dGggPT0gXCJhZG1pblwiKXtcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IHRoaXMucG9zdCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVFJFVEFcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVzdcOhcmlvIG91IHNlbmhhIGluY29ycmV0b3NcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwidHJ5IEFnYWluXCJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgZGlhbG9nIGNsb3NlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgfTtcblxuICAgIHJlcXVlc3RQcm92aWRlcigpe1xuICAgICAgICB0aGlzLnJlcXVlc3QgPSAge1xuICAgICAgICAgICAgXCJsb2dpbklkXCI6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBcImFwcGxpY2F0aW9uSWRcIjogXCJmY2E0ODE0Zi02NDVjLTRjM2YtYTliMC0yYjJjYTdhMmU4MzVcIlxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0O1xuICAgIH07XG5cbiAgICB0ZXN0RnVzaW9uQXV0aE1ldGhvZHMoKSB7XG4gICAgICAgIHJldHVybiBjbGllbnQuc2VhcmNoVXNlcnMoXCI5MDE5MDRkOC01ZWViLTQ0MWYtYTgwZS04YzhjNTk1ODI1YjVcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2xpZW50TG9naW4oKSB7XG4gICAgICAgIC8vIHRoaXMuJG5hdmlnYXRlVG8oc2VjdXJlKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5sb2dpbih0aGlzLnJlcXVlc3RQcm92aWRlcigpKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5oYW5kbGVSZXNwb25zZSwgdGhpcy5oYW5kbGVFcnJvclJlc3BvbnNlKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMudXNlci5yZXNwb25zZS51c2VyLnJlZ2lzdHJhdGlvbnM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLnJlc3BvbnNlLnVzZXIucmVnaXN0cmF0aW9ucyk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy51c2VyID0gdGhpcy5yZXN1bHQucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yb2xlcyA9IHRoaXMudXNlci51c2VyLnJlZ2lzdHJhdGlvbnM7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb3N0ID0gdGhpcy5yb2xlc1swXS5yb2xlc1swXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAudGhlbihyZXNwb25zaWJpbGl0eSA9PntcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnBvc3QpO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuZ29Ubyh0aGlzLnJvbGVzWzBdLnJvbGVzWzBdKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgIH07XG5cblxuXG4gICAgaGFuZGxlUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIGNsaWVudFJlc3BvbnNlO1xuICAgIH07XG4gICAgaGFuZGxlRXJyb3JSZXNwb25zZShjbGllbnRSZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gY2xpZW50UmVzcG9uc2U7XG4gICAgfTtcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSG9tZSxcbiAgICB9O1xufVxuXG4iLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHMnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuaWYoVE5TX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFZ1ZS51c2UoVnVlRGV2dG9vbHMpXG59XG5cbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXG5WdWUuY29uZmlnLnNpbGVudCA9IChUTlNfRU5WID09PSAncHJvZHVjdGlvbicpXG5cblxubmV3IFZ1ZSh7XG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaCgnZnJhbWUnLCBbaChBcHApXSlcbn0pLiRzdGFydCgpXG4iXSwic291cmNlUm9vdCI6IiJ9