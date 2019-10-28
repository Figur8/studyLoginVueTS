webpackHotUpdate("bundle",{

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
        _this.getImei();
        _this.localNotification(_this.imei);
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
                at: new Date(new Date().getTime() + (10 * 1000))
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
        });
    };
    Secure = tslib_1.__decorate([
        vue_property_decorator_1.Component,
        tslib_1.__metadata("design:paramtypes", [])
    ], Secure);
    return Secure;
}(nativescript_vue_1.default));
exports.default = Secure;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzM2N2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWN1cmUudnVlPzY1YmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBZ0JBLHdIQUFtQztBQUNuQywySEFBdUQ7QUFDdkQsdUhBQXdEO0FBQ3hELHdGQUFxRDtBQUNyRCwyRkFBNkM7QUFDN0MseUdBQXNEO0FBR3REO0lBQWtDLGdDQUFHO0lBQXJDO1FBQUEscUVBbURDO1FBbERXLFNBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixXQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUksR0FBVyxFQUFFLENBQUM7O0lBK0M5QixDQUFDO0lBNUNHLHlCQUFVLEdBQVY7UUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQU0sQ0FBQyxDQUFDO1NBQzVCO2FBQUk7WUFDRCxLQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFlBQVksRUFBRSxNQUFNO2FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFBQSxpQkFRQztRQVBHLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMvRixJQUFJLENBQUMsYUFBRztZQUNMLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN4QixLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQ0FBb0MsR0FBRSxLQUFJLENBQUMsR0FBRyxHQUFFLEdBQUcsR0FBRSxLQUFJLENBQUMsR0FBRyxDQUFFO1FBQ2pGLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUFBLENBQUM7SUFFRix1QkFBUSxHQUFSLFVBQVMsZ0JBQXdCO1FBQzdCLElBQUcsZ0JBQWdCLElBQUksdUJBQXVCLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBTSxDQUFDLENBQUM7U0FDNUI7YUFBSTtZQUNELEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztJQUNOLENBQUM7SUF0Q087UUFBUCw2QkFBSSxFQUFFOztzQ0FBcUI7SUFMWCxJQUFJO1FBRHhCLGtDQUFTO09BQ1csSUFBSSxDQW1EeEI7SUFBRCxXQUFDO0NBQUEsQ0FuRGlDLDBCQUFHLEdBbURwQztrQkFuRG9CLElBQUk7Ozs7Ozs7Ozs7OztBQ2Z6Qix3SEFBbUM7QUFDbkMsMkhBQWlEO0FBQ2pELHdJQUFzRTtBQUN0RSwwR0FBaUQ7QUFHakQ7SUFBb0Msa0NBQUc7SUFHbkM7UUFBQSxpQkFLQztRQUpHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMscURBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7O0lBRXZDLENBQUM7SUFDRCxxQkFBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUdoQyxDQUFDO0lBRUQsa0NBQWlCLEdBQWpCLFVBQWtCLElBQVk7UUFFMUIscURBQWtCLENBQUMsUUFBUSxDQUN2QixDQUFDO2dCQUNHLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSwwQkFBMEI7Z0JBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDbkIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLHlCQUF5QixFQUFFLElBQUk7Z0JBQy9CLElBQUksRUFBRSxZQUFZO2dCQUNsQixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ25ELENBQUMsQ0FBQztRQUNQLHFEQUFrQixDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUN2QyxVQUFTLE9BQU87WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FDSjtJQUNMLENBQUM7SUFFRCx3QkFBTyxHQUFQO1FBQUEsaUJBT0M7UUFORSxPQUFPLGtDQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxjQUFjO1lBQ25DLEtBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFdEMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQTVDZ0IsTUFBTTtRQUQxQixrQ0FBUzs7T0FDVyxNQUFNLENBNkMxQjtJQUFELGFBQUM7Q0FBQSxDQTdDbUMsMEJBQUcsR0E2Q3RDO2tCQTdDb0IsTUFBTSIsImZpbGUiOiJidW5kbGUuMWE0ZGFmZGMxMjdhY2Q1MmFjZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBQcm9wfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5pbXBvcnQgU2VjdXJlIGZyb20gXCJAL2NvbXBvbmVudHMvU2VjdXJlLnZ1ZVwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFZ1ZSB7XG4gICAgcHJpdmF0ZSBsYXQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBsb246IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBzcGVlZDogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGFkZHI6IHN0cmluZyA9IFwiXCI7XG4gICAgQFByb3AoKSBwdWJsaWMgcm9sZTogc3RyaW5nO1xuXG4gICAgZ29Ub1NlY3VyZSgpe1xuICAgICAgICBpZih0aGlzLnJvbGUgPT0gXCJhZG1pblwiKSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFNlY3VyZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVzZXIgTm90IGlzIGFkbWluXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJ2b2x0ZSBvc2Fkb1wiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJleGl0XCJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgZGlhbG9nIGNsb3NlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldExvY2F0aW9uKCkge1xuICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKTtcbiAgICAgICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHsgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLCBtYXhpbXVtQWdlOiA1MDAwLCB0aW1lb3V0OiAyMDAwMCB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhdCA9IHJlcy5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvbiA9IHJlcy5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgdXRpbHMub3BlblVybChcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9cIiArdGhpcy5sYXQgKycsJysgdGhpcy5sb24gKVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGdvVG9UZXN0KHJvbGVJbkZ1c2lvbkF1dGg6IHN0cmluZyl7XG4gICAgICAgIGlmKHJvbGVJbkZ1c2lvbkF1dGggPT0gXCJ2aWV3LXNlY3VyaXR5LW1lc3NhZ2VcIikge1xuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhTZWN1cmUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUUkVUQVwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXN1w6FyaW8gc2VtIFBlcm1pc3PDo29cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGVydCBkaWFsb2cgY2xvc2VkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3BzOntcbiAgICAgICAgbm9tZTogc3RyaW5nLFxuICAgIH07XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBTZWN1cmUsXG4gICAgfTtcblxufVxuIiwiXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcbmltcG9ydCB7IExvY2FsTm90aWZpY2F0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHtUZWxlcGhvbnl9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcGhvbnknO1xuXG5AQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN1cmUgZXh0ZW5kcyBWdWUge1xuICAgIHByaXZhdGUgc2ltRGF0YTogSlNPTjtcbiAgICBwcml2YXRlIGltZWk6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nZXRJbWVpKCk7XG4gICAgICAgIHRoaXMubG9jYWxOb3RpZmljYXRpb24odGhpcy5pbWVpKTtcbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLmhhc1Blcm1pc3Npb24oKTtcblxuICAgIH1cbiAgICB0ZXN0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0SW1laSgpKTtcblxuXG4gICAgfVxuXG4gICAgbG9jYWxOb3RpZmljYXRpb24oaW1laTogc3RyaW5nKXtcblxuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoXG4gICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm92YSBtZW5zYWdlbSBlbSBuTW9iaWxlJyxcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogdGhpcy5pbWVpLFxuICAgICAgICAgICAgICAgIGJvZHk6IGltZWksXG4gICAgICAgICAgICAgICAgYmlnVGV4dFN0eWxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb3JjZVNob3dXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGljb246IFwicmVzOi8vbG9nb1wiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcInJlczovL2ljb25cIixcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBcInZ1ZS1jaGFubmVsXCIsXG4gICAgICAgICAgICAgICAgYXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDEwICogMTAwMCkpXG4gICAgICAgICAgICB9XSlcbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uKGdyYW50ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gZ3JhbnRlZD8gXCIgKyBncmFudGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldEltZWkoKXtcbiAgICAgICByZXR1cm4gVGVsZXBob255KCkudGhlbigocmVzcG9uc2VEZXZpY2UpID0+IHtcbiAgICAgICAgICAgdGhpcy5zaW1EYXRhID0gcmVzcG9uc2VEZXZpY2U7XG4gICAgICAgICAgIHRoaXMuaW1laSA9IHRoaXMuc2ltRGF0YS5kZXZpY2VJZDtcblxuICAgICAgIH0pXG5cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9