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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MDVmNCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXVCQSx3SEFBbUM7QUFDbkMsMkhBQXVEO0FBQ3ZELG1IQUFvRDtBQUNwRCx1RkFBeUM7QUFDekMsZ0hBQXVEO0FBU3ZEO0lBQWlDLCtCQUFHO0lBQ2hDO1FBQUEsaUJBRUM7UUFERyxzQ0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOztJQUN2QixDQUFDO0lBVUQsa0JBQUksR0FBSixVQUFLLGdCQUFnQjtRQUNqQixJQUFHLGdCQUFnQixJQUFJLHVCQUF1QixJQUFJLGdCQUFnQixJQUFJLE9BQU8sRUFBQztZQUMxRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFJLEVBQUU7Z0JBQ25CLEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDO1NBQ047YUFBSTtZQUNELEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsNkJBQTZCO2dCQUN0QyxZQUFZLEVBQUUsV0FBVzthQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztJQUVOLENBQUM7SUFBQSxDQUFDO0lBRUYsNkJBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUk7WUFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDckIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3pCLGVBQWUsRUFBRSxzQ0FBc0M7U0FDMUQsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQUEsQ0FBQztJQUVGLG1DQUFxQixHQUFyQjtRQUNJLE9BQU8sa0NBQU0sQ0FBQyxXQUFXLENBQUMsc0NBQXNDLENBQUM7YUFDNUQsSUFBSSxDQUFDLGtCQUFRO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFBQSxDQUFDO0lBRUYseUJBQVcsR0FBWDtRQUFBLGlCQWtCQztRQWpCRyw0QkFBNEI7UUFDNUIsT0FBTyxrQ0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQ25ELElBQUksQ0FBQyxrQkFBUTtZQUNWLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQztZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDbkQsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsb0NBQW9DO1lBQ3BDLDZDQUE2QztZQUM3QyxzQ0FBc0M7UUFDMUMsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLHdCQUFjO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUFBLENBQUM7SUFJRiw0QkFBYyxHQUFkLFVBQWUsY0FBYztRQUN6QixPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBQUEsQ0FBQztJQUNGLGlDQUFtQixHQUFuQixVQUFvQixjQUFjO1FBQzlCLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFBQSxDQUFDO0lBM0VlLEdBQUc7UUFEdkIsa0NBQVM7O09BQ1csR0FBRyxDQWdGdkI7SUFBRCxVQUFDO0NBQUEsQ0FoRmdDLDBCQUFHLEdBZ0ZuQztrQkFoRm9CLEdBQUc7Ozs7Ozs7Ozs7O0FDcEN4QixzRkFBbUM7QUFDbkMsNkVBQW1DO0FBRW5DLFNBQW1EO0FBQ3hCO0FBRTNCLElBQUcsSUFBMEI7SUFDM0Isc0dBQW9CO0NBQ3JCO0FBRUQsWUFBb0U7QUFDcEUsbUJBQThDO0FBRzlDLElBQUksMEJBQUcsbUJBQUM7SUFDTixLQUFLO0lBQ0wsTUFBTSxFQUFFLFdBQUMsSUFBSSxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQU07QUFDeEIiLCJmaWxlIjoiYnVuZGxlLjc4NjMwZjRiZmU4MjM5Y2UwZTQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBQcm9wfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcbmltcG9ydCBjbGllbnQgZnJvbSBcIkAvbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIkAvY29tcG9uZW50cy9Ib21lLnZ1ZVwiO1xuaW1wb3J0IHsgRm9udGF3ZXNvbWUgfSBmcm9tICduYXRpdmVzY3JpcHQtZm9udGF3ZXNvbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIHJlc3VsdCB7XG4gICAgc3RhdHVzQ29kZTogc3RyaW5nLFxuICAgIHJlc3BvbnNlOiBKU09OLFxuICAgIHJlZ2lzdHJhdGlvbjogQXJyYXk8c3RyaW5nPixcbn1cblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgVnVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgRm9udGF3ZXNvbWUuaW5pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW1haWw6IHN0cmluZyA7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVxdWVzdDogT2JqZWN0O1xuICAgIHByaXZhdGUgcm9sZXM6IEpTT047XG4gICAgcHJpdmF0ZSB1c2VyOiBKU09OO1xuICAgIHB1YmxpYyBwb3N0OiBzdHJpbmc7XG5cbiAgICBcbiAgICBnb1RvKHJvbGVJbkZ1c2lvbkF1dGgpe1xuICAgICAgICBpZihyb2xlSW5GdXNpb25BdXRoID09IFwidmlldy1zZWN1cml0eS1tZXNzYWdlXCIgfHwgcm9sZUluRnVzaW9uQXV0aCA9PSBcImFkbWluXCIpe1xuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogdGhpcy5wb3N0LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUUkVUQVwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXN1w6FyaW8gb3Ugc2VuaGEgaW5jb3JyZXRvc1wiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJ0cnkgQWdhaW5cIlxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGVydCBkaWFsb2cgY2xvc2VkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgcmVxdWVzdFByb3ZpZGVyKCl7XG4gICAgICAgIHRoaXMucmVxdWVzdCA9ICB7XG4gICAgICAgICAgICBcImxvZ2luSWRcIjogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIFwiYXBwbGljYXRpb25JZFwiOiBcImZjYTQ4MTRmLTY0NWMtNGMzZi1hOWIwLTJiMmNhN2EyZTgzNVwiXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Q7XG4gICAgfTtcblxuICAgIHRlc3RGdXNpb25BdXRoTWV0aG9kcygpIHtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5zZWFyY2hVc2VycyhcIjkwMTkwNGQ4LTVlZWItNDQxZi1hODBlLThjOGM1OTU4MjViNVwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjbGllbnRMb2dpbigpIHtcbiAgICAgICAgLy8gdGhpcy4kbmF2aWdhdGVUbyhzZWN1cmUpO1xuICAgICAgICByZXR1cm4gY2xpZW50LmxvZ2luKHRoaXMucmVxdWVzdFByb3ZpZGVyKCkpXG4gICAgICAgICAgICAudGhlbih0aGlzLmhhbmRsZVJlc3BvbnNlLCB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy51c2VyLnJlc3BvbnNlLnVzZXIucmVnaXN0cmF0aW9ucztcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSB0aGlzLnJvbGVzWzBdLnJvbGVzWzBdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm9sZXNbMF0ucm9sZXNbMF0pO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudXNlciA9IHRoaXMucmVzdWx0LnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucm9sZXMgPSB0aGlzLnVzZXIudXNlci5yZWdpc3RyYXRpb25zO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucG9zdCA9IHRoaXMucm9sZXNbMF0ucm9sZXNbMF07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2liaWxpdHkgPT57XG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvKHRoaXMucm9sZXNbMF0ucm9sZXNbMF0pO1xuICAgICAgICAgICAgIH0pO1xuICAgIH07XG5cblxuXG4gICAgaGFuZGxlUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIGNsaWVudFJlc3BvbnNlO1xuICAgIH07XG4gICAgaGFuZGxlRXJyb3JSZXNwb25zZShjbGllbnRSZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gY2xpZW50UmVzcG9uc2U7XG4gICAgfTtcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSG9tZSxcbiAgICB9O1xufVxuXG4iLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHMnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuaWYoVE5TX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFZ1ZS51c2UoVnVlRGV2dG9vbHMpXG59XG5cbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXG5WdWUuY29uZmlnLnNpbGVudCA9IChUTlNfRU5WID09PSAncHJvZHVjdGlvbicpXG5cblxubmV3IFZ1ZSh7XG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaCgnZnJhbWUnLCBbaChBcHApXSlcbn0pLiRzdGFydCgpXG4iXSwic291cmNlUm9vdCI6IiJ9