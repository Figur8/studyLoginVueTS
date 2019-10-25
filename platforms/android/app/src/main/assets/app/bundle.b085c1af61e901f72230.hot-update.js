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
                title: 'Este é seu imei',
                subtitle: this.imei,
                body: '',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzM2N2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWN1cmUudnVlPzY1YmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBZ0JBLHdIQUFtQztBQUNuQywySEFBdUQ7QUFDdkQsdUhBQXdEO0FBQ3hELHdGQUFxRDtBQUNyRCwyRkFBNkM7QUFDN0MseUdBQXNEO0FBR3REO0lBQWtDLGdDQUFHO0lBQXJDO1FBQUEscUVBbURDO1FBbERXLFNBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixXQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUksR0FBVyxFQUFFLENBQUM7O0lBK0M5QixDQUFDO0lBNUNHLHlCQUFVLEdBQVY7UUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQU0sQ0FBQyxDQUFDO1NBQzVCO2FBQUk7WUFDRCxLQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFlBQVksRUFBRSxNQUFNO2FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFBQSxpQkFRQztRQVBHLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMvRixJQUFJLENBQUMsYUFBRztZQUNMLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN4QixLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQ0FBb0MsR0FBRSxLQUFJLENBQUMsR0FBRyxHQUFFLEdBQUcsR0FBRSxLQUFJLENBQUMsR0FBRyxDQUFFO1FBQ2pGLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUFBLENBQUM7SUFFRix1QkFBUSxHQUFSLFVBQVMsZ0JBQXdCO1FBQzdCLElBQUcsZ0JBQWdCLElBQUksdUJBQXVCLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBTSxDQUFDLENBQUM7U0FDNUI7YUFBSTtZQUNELEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztJQUNOLENBQUM7SUF0Q087UUFBUCw2QkFBSSxFQUFFOztzQ0FBcUI7SUFMWCxJQUFJO1FBRHhCLGtDQUFTO09BQ1csSUFBSSxDQW1EeEI7SUFBRCxXQUFDO0NBQUEsQ0FuRGlDLDBCQUFHLEdBbURwQztrQkFuRG9CLElBQUk7Ozs7Ozs7Ozs7OztBQ2Z6Qix3SEFBbUM7QUFDbkMsMkhBQWlEO0FBQ2pELHdJQUFzRTtBQUN0RSwwR0FBaUQ7QUFHakQ7SUFBb0Msa0NBQUc7SUFHbkM7UUFBQSxpQkFJQztRQUhHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMscURBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7O0lBQ3ZDLENBQUM7SUFDRCxxQkFBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUdoQyxDQUFDO0lBRUQsa0NBQWlCLEdBQWpCLFVBQWtCLElBQVk7UUFFMUIscURBQWtCLENBQUMsUUFBUSxDQUN2QixDQUFDO2dCQUNHLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDbkIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLHlCQUF5QixFQUFFLElBQUk7Z0JBQy9CLElBQUksRUFBRSxZQUFZO2dCQUNsQixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsT0FBTyxFQUFFLGFBQWE7YUFDekIsQ0FBQyxDQUFDO1FBQ1AscURBQWtCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQ3ZDLFVBQVMsT0FBTztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUNKO0lBQ0wsQ0FBQztJQUVELHdCQUFPLEdBQVA7UUFBQSxpQkFPQztRQU5FLE9BQU8sa0NBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLGNBQWM7WUFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7WUFDOUIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUV0QyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBMUNnQixNQUFNO1FBRDFCLGtDQUFTOztPQUNXLE1BQU0sQ0EyQzFCO0lBQUQsYUFBQztDQUFBLENBM0NtQywwQkFBRyxHQTJDdEM7a0JBM0NvQixNQUFNIiwiZmlsZSI6ImJ1bmRsZS5iMDg1YzFhZjYxZTkwMWY3MjIzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIFByb3B9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCBTZWN1cmUgZnJvbSBcIkAvY29tcG9uZW50cy9TZWN1cmUudnVlXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuXG5AQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgVnVlIHtcbiAgICBwcml2YXRlIGxhdDogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGxvbjogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHNwZWVkOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgYWRkcjogc3RyaW5nID0gXCJcIjtcbiAgICBAUHJvcCgpIHB1YmxpYyByb2xlOiBzdHJpbmc7XG5cbiAgICBnb1RvU2VjdXJlKCl7XG4gICAgICAgIGlmKHRoaXMucm9sZSA9PSBcImFkbWluXCIpIHtcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oU2VjdXJlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBOb3QgaXMgYWRtaW5cIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInZvbHRlIG9zYWRvXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcImV4aXRcIlxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGVydCBkaWFsb2cgY2xvc2VkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb24oKSB7XG4gICAgICAgIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xuICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oeyBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIG1heGltdW1BZ2U6IDUwMDAsIHRpbWVvdXQ6IDIwMDAwIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGF0ID0gcmVzLmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9uID0gcmVzLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICB1dGlscy5vcGVuVXJsKFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL1wiICt0aGlzLmxhdCArJywnKyB0aGlzLmxvbiApXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZ29Ub1Rlc3Qocm9sZUluRnVzaW9uQXV0aDogc3RyaW5nKXtcbiAgICAgICAgaWYocm9sZUluRnVzaW9uQXV0aCA9PSBcInZpZXctc2VjdXJpdHktbWVzc2FnZVwiKSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFNlY3VyZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRSRVRBXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVc3XDoXJpbyBzZW0gUGVybWlzc8Ojb1wiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsZXJ0IGRpYWxvZyBjbG9zZWRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvcHM6e1xuICAgICAgICBub21lOiBzdHJpbmcsXG4gICAgfTtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFNlY3VyZSxcbiAgICB9O1xuXG59XG4iLCJcblxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQge1RlbGVwaG9ueX0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVwaG9ueSc7XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3VyZSBleHRlbmRzIFZ1ZSB7XG4gICAgcHJpdmF0ZSBzaW1EYXRhOiBKU09OO1xuICAgIHByaXZhdGUgaW1laTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdldEltZWkoKTtcbiAgICAgICAgdGhpcy5sb2NhbE5vdGlmaWNhdGlvbih0aGlzLmltZWkpO1xuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuaGFzUGVybWlzc2lvbigpO1xuICAgIH1cbiAgICB0ZXN0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0SW1laSgpKTtcblxuXG4gICAgfVxuXG4gICAgbG9jYWxOb3RpZmljYXRpb24oaW1laTogc3RyaW5nKXtcblxuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoXG4gICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXN0ZSDDqSBzZXUgaW1laScsXG4gICAgICAgICAgICAgICAgc3VidGl0bGU6IHRoaXMuaW1laSxcbiAgICAgICAgICAgICAgICBib2R5OiAnJyxcbiAgICAgICAgICAgICAgICBiaWdUZXh0U3R5bGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvcmNlU2hvd1doZW5JbkZvcmVncm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJyZXM6Ly9sb2dvXCIsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwicmVzOi8vaWNvblwiLFxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IFwidnVlLWNoYW5uZWxcIixcbiAgICAgICAgICAgIH1dKVxuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKFxuICAgICAgICAgICAgZnVuY3Rpb24oZ3JhbnRlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVybWlzc2lvbiBncmFudGVkPyBcIiArIGdyYW50ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0SW1laSgpe1xuICAgICAgIHJldHVybiBUZWxlcGhvbnkoKS50aGVuKChyZXNwb25zZURldmljZSkgPT4ge1xuICAgICAgICAgICB0aGlzLnNpbURhdGEgPSByZXNwb25zZURldmljZTtcbiAgICAgICAgICAgdGhpcy5pbWVpID0gdGhpcy5zaW1EYXRhLmRldmljZUlkO1xuXG4gICAgICAgfSlcblxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=