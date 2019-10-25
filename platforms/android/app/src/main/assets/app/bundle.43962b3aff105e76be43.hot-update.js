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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MDVmNCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXdCQSx3SEFBbUM7QUFDbkMsMkhBQXVEO0FBQ3ZELG1IQUFvRDtBQUNwRCx1RkFBeUM7QUFDekMsZ0hBQXVEO0FBU3ZEO0lBQWlDLCtCQUFHO0lBRWhDO1FBQUEsaUJBRUM7UUFERyxzQ0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOztJQUN2QixDQUFDO0lBVUQsa0JBQUksR0FBSixVQUFLLGdCQUFnQjtRQUNqQixJQUFHLGdCQUFnQixJQUFJLHVCQUF1QixJQUFJLGdCQUFnQixJQUFJLE9BQU8sRUFBQztZQUMxRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFJLEVBQUU7Z0JBQ25CLEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDO1NBQ047YUFBSTtZQUNELEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsNkJBQTZCO2dCQUN0QyxZQUFZLEVBQUUsV0FBVzthQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztJQUVOLENBQUM7SUFBQSxDQUFDO0lBRUYsNkJBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUk7WUFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDckIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3pCLGVBQWUsRUFBRSxzQ0FBc0M7U0FDMUQsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQUEsQ0FBQztJQUVGLG1DQUFxQixHQUFyQjtRQUNJLE9BQU8sa0NBQU0sQ0FBQyxXQUFXLENBQUMsc0NBQXNDLENBQUM7YUFDNUQsSUFBSSxDQUFDLGtCQUFRO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFBQSxDQUFDO0lBRUYseUJBQVcsR0FBWDtRQUFBLGlCQWlCQztRQWhCRyw0QkFBNEI7UUFDNUIsT0FBTyxrQ0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQ25ELElBQUksQ0FBQyxrQkFBUTtZQUNWLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQztZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ25ELG9DQUFvQztZQUNwQyw2Q0FBNkM7WUFDN0Msc0NBQXNDO1FBQzFDLENBQUMsQ0FBQztRQUNGLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIseUNBQXlDO1FBQ3pDLE1BQU07SUFDZCxDQUFDO0lBQUEsQ0FBQztJQUlGLDRCQUFjLEdBQWQsVUFBZSxjQUFjO1FBQ3pCLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFBQSxDQUFDO0lBQ0YsaUNBQW1CLEdBQW5CLFVBQW9CLGNBQWM7UUFDOUIsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUFBLENBQUM7SUEzRWUsR0FBRztRQUR2QixrQ0FBUzs7T0FDVyxHQUFHLENBZ0Z2QjtJQUFELFVBQUM7Q0FBQSxDQWhGZ0MsMEJBQUcsR0FnRm5DO2tCQWhGb0IsR0FBRzs7Ozs7Ozs7Ozs7QUNyQ3hCLHNGQUFtQztBQUNuQyw2RUFBbUM7QUFFbkMsU0FBbUQ7QUFDeEI7QUFFM0IsSUFBRyxJQUEwQjtJQUMzQixzR0FBb0I7Q0FDckI7QUFFRCxZQUFvRTtBQUNwRSxtQkFBOEM7QUFHOUMsSUFBSSwwQkFBRyxtQkFBQztJQUNOLEtBQUs7SUFDTCxNQUFNLEVBQUUsV0FBQyxJQUFJLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBTTtBQUN4QiIsImZpbGUiOiJidW5kbGUuNDM5NjJiM2FmZjEwNWU3NmJlNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgUHJvcH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2VcIjtcbmltcG9ydCBIb21lIGZyb20gXCJAL2NvbXBvbmVudHMvSG9tZS52dWVcIjtcbmltcG9ydCB7IEZvbnRhd2Vzb21lIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZvbnRhd2Vzb21lJztcblxuZXhwb3J0IGludGVyZmFjZSByZXN1bHQge1xuICAgIHN0YXR1c0NvZGU6IHN0cmluZyxcbiAgICByZXNwb25zZTogSlNPTixcbiAgICByZWdpc3RyYXRpb246IEFycmF5PHN0cmluZz4sXG59XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFZ1ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgRm9udGF3ZXNvbWUuaW5pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW1haWw6IHN0cmluZyA7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVxdWVzdDogT2JqZWN0O1xuICAgIHByaXZhdGUgcm9sZXM6IEpTT047XG4gICAgcHJpdmF0ZSB1c2VyOiBKU09OO1xuICAgIHB1YmxpYyBwb3N0OiBzdHJpbmc7XG5cblxuICAgIGdvVG8ocm9sZUluRnVzaW9uQXV0aCl7XG4gICAgICAgIGlmKHJvbGVJbkZ1c2lvbkF1dGggPT0gXCJ2aWV3LXNlY3VyaXR5LW1lc3NhZ2VcIiB8fCByb2xlSW5GdXNpb25BdXRoID09IFwiYWRtaW5cIil7XG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHtcbiAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICByb2xlOiB0aGlzLnBvc3QsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRSRVRBXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVc3XDoXJpbyBvdSBzZW5oYSBpbmNvcnJldG9zXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcInRyeSBBZ2FpblwiXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsZXJ0IGRpYWxvZyBjbG9zZWRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgIH07XG5cbiAgICByZXF1ZXN0UHJvdmlkZXIoKXtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gIHtcbiAgICAgICAgICAgIFwibG9naW5JZFwiOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgICAgXCJhcHBsaWNhdGlvbklkXCI6IFwiZmNhNDgxNGYtNjQ1Yy00YzNmLWE5YjAtMmIyY2E3YTJlODM1XCJcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdDtcbiAgICB9O1xuXG4gICAgdGVzdEZ1c2lvbkF1dGhNZXRob2RzKCkge1xuICAgICAgICByZXR1cm4gY2xpZW50LnNlYXJjaFVzZXJzKFwiOTAxOTA0ZDgtNWVlYi00NDFmLWE4MGUtOGM4YzU5NTgyNWI1XCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNsaWVudExvZ2luKCkge1xuICAgICAgICAvLyB0aGlzLiRuYXZpZ2F0ZVRvKHNlY3VyZSk7XG4gICAgICAgIHJldHVybiBjbGllbnQubG9naW4odGhpcy5yZXF1ZXN0UHJvdmlkZXIoKSlcbiAgICAgICAgICAgIC50aGVuKHRoaXMuaGFuZGxlUmVzcG9uc2UsIHRoaXMuaGFuZGxlRXJyb3JSZXNwb25zZSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHRoaXMucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnVzZXIucmVzcG9uc2UudXNlci5yZWdpc3RyYXRpb25zXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLnJlc3BvbnNlLnVzZXIucmVnaXN0cmF0aW9ucyk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy51c2VyID0gdGhpcy5yZXN1bHQucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yb2xlcyA9IHRoaXMudXNlci51c2VyLnJlZ2lzdHJhdGlvbnM7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb3N0ID0gdGhpcy5yb2xlc1swXS5yb2xlc1swXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAudGhlbihyZXNwb25zaWJpbGl0eSA9PntcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnBvc3QpO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuZ29Ubyh0aGlzLnJvbGVzWzBdLnJvbGVzWzBdKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgIH07XG5cblxuXG4gICAgaGFuZGxlUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIGNsaWVudFJlc3BvbnNlO1xuICAgIH07XG4gICAgaGFuZGxlRXJyb3JSZXNwb25zZShjbGllbnRSZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gY2xpZW50UmVzcG9uc2U7XG4gICAgfTtcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSG9tZSxcbiAgICB9O1xufVxuXG4iLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHMnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuaWYoVE5TX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFZ1ZS51c2UoVnVlRGV2dG9vbHMpXG59XG5cbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXG5WdWUuY29uZmlnLnNpbGVudCA9IChUTlNfRU5WID09PSAncHJvZHVjdGlvbicpXG5cblxubmV3IFZ1ZSh7XG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaCgnZnJhbWUnLCBbaChBcHApXSlcbn0pLiRzdGFydCgpXG4iXSwic291cmNlUm9vdCI6IiJ9