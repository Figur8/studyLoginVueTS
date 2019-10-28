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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzM2N2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWN1cmUudnVlPzY1YmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBZ0JBLHdIQUFtQztBQUNuQywySEFBdUQ7QUFDdkQsdUhBQXdEO0FBQ3hELHdGQUFxRDtBQUNyRCwyRkFBNkM7QUFDN0MseUdBQXNEO0FBR3REO0lBQWtDLGdDQUFHO0lBQXJDO1FBQUEscUVBbURDO1FBbERXLFNBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixXQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUksR0FBVyxFQUFFLENBQUM7O0lBK0M5QixDQUFDO0lBNUNHLHlCQUFVLEdBQVY7UUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQU0sQ0FBQyxDQUFDO1NBQzVCO2FBQUk7WUFDRCxLQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFlBQVksRUFBRSxNQUFNO2FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFBQSxpQkFRQztRQVBHLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMvRixJQUFJLENBQUMsYUFBRztZQUNMLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN4QixLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQ0FBb0MsR0FBRSxLQUFJLENBQUMsR0FBRyxHQUFFLEdBQUcsR0FBRSxLQUFJLENBQUMsR0FBRyxDQUFFO1FBQ2pGLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUFBLENBQUM7SUFFRix1QkFBUSxHQUFSLFVBQVMsZ0JBQXdCO1FBQzdCLElBQUcsZ0JBQWdCLElBQUksdUJBQXVCLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBTSxDQUFDLENBQUM7U0FDNUI7YUFBSTtZQUNELEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztJQUNOLENBQUM7SUF0Q087UUFBUCw2QkFBSSxFQUFFOztzQ0FBcUI7SUFMWCxJQUFJO1FBRHhCLGtDQUFTO09BQ1csSUFBSSxDQW1EeEI7SUFBRCxXQUFDO0NBQUEsQ0FuRGlDLDBCQUFHLEdBbURwQztrQkFuRG9CLElBQUk7Ozs7Ozs7Ozs7OztBQ2Z6Qix3SEFBbUM7QUFDbkMsMkhBQWlEO0FBQ2pELHdJQUFzRTtBQUN0RSwwR0FBaUQ7QUFHakQ7SUFBb0Msa0NBQUc7SUFHbkM7UUFBQSxpQkFJQztRQUZHLHFEQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDOztJQUV2QyxDQUFDO0lBQ0QscUJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFHaEMsQ0FBQztJQUVELGtDQUFpQixHQUFqQixVQUFrQixJQUFZO1FBRTFCLHFEQUFrQixDQUFDLFFBQVEsQ0FDdkIsQ0FBQztnQkFDRyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ25CLElBQUksRUFBRSxFQUFFO2dCQUNSLFlBQVksRUFBRSxLQUFLO2dCQUNuQix5QkFBeUIsRUFBRSxJQUFJO2dCQUMvQixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLE9BQU8sRUFBRSxhQUFhO2FBQ3pCLENBQUMsQ0FBQztRQUNQLHFEQUFrQixDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUN2QyxVQUFTLE9BQU87WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FDSjtJQUNMLENBQUM7SUFFRCx3QkFBTyxHQUFQO1FBQUEsaUJBT0M7UUFORSxPQUFPLGtDQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxjQUFjO1lBQ25DLEtBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBMUNnQixNQUFNO1FBRDFCLGtDQUFTOztPQUNXLE1BQU0sQ0EyQzFCO0lBQUQsYUFBQztDQUFBLENBM0NtQywwQkFBRyxHQTJDdEM7a0JBM0NvQixNQUFNIiwiZmlsZSI6ImJ1bmRsZS4xYjBjYWFiNzVkYWFkMDExN2U0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIFByb3B9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCBTZWN1cmUgZnJvbSBcIkAvY29tcG9uZW50cy9TZWN1cmUudnVlXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuXG5AQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgVnVlIHtcbiAgICBwcml2YXRlIGxhdDogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGxvbjogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHNwZWVkOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgYWRkcjogc3RyaW5nID0gXCJcIjtcbiAgICBAUHJvcCgpIHB1YmxpYyByb2xlOiBzdHJpbmc7XG5cbiAgICBnb1RvU2VjdXJlKCl7XG4gICAgICAgIGlmKHRoaXMucm9sZSA9PSBcImFkbWluXCIpIHtcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oU2VjdXJlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBOb3QgaXMgYWRtaW5cIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInZvbHRlIG9zYWRvXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcImV4aXRcIlxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGVydCBkaWFsb2cgY2xvc2VkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb24oKSB7XG4gICAgICAgIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xuICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oeyBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIG1heGltdW1BZ2U6IDUwMDAsIHRpbWVvdXQ6IDIwMDAwIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGF0ID0gcmVzLmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9uID0gcmVzLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICB1dGlscy5vcGVuVXJsKFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL1wiICt0aGlzLmxhdCArJywnKyB0aGlzLmxvbiApXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZ29Ub1Rlc3Qocm9sZUluRnVzaW9uQXV0aDogc3RyaW5nKXtcbiAgICAgICAgaWYocm9sZUluRnVzaW9uQXV0aCA9PSBcInZpZXctc2VjdXJpdHktbWVzc2FnZVwiKSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFNlY3VyZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRSRVRBXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVc3XDoXJpbyBzZW0gUGVybWlzc8Ojb1wiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsZXJ0IGRpYWxvZyBjbG9zZWRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvcHM6e1xuICAgICAgICBub21lOiBzdHJpbmcsXG4gICAgfTtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFNlY3VyZSxcbiAgICB9O1xuXG59XG4iLCJcblxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQge1RlbGVwaG9ueX0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVwaG9ueSc7XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3VyZSBleHRlbmRzIFZ1ZSB7XG4gICAgcHJpdmF0ZSBzaW1EYXRhOiBKU09OO1xuICAgIHByaXZhdGUgaW1laTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5oYXNQZXJtaXNzaW9uKCk7XG5cbiAgICB9XG4gICAgdGVzdCgpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldEltZWkoKSk7XG5cblxuICAgIH1cblxuICAgIGxvY2FsTm90aWZpY2F0aW9uKGltZWk6IHN0cmluZyl7XG5cbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFxuICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0VzdGUgw6kgc2V1IGltZWknLFxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiB0aGlzLmltZWksXG4gICAgICAgICAgICAgICAgYm9keTogJycsXG4gICAgICAgICAgICAgICAgYmlnVGV4dFN0eWxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb3JjZVNob3dXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGljb246IFwicmVzOi8vbG9nb1wiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcInJlczovL2ljb25cIixcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBcInZ1ZS1jaGFubmVsXCIsXG4gICAgICAgICAgICB9XSlcbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uKGdyYW50ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gZ3JhbnRlZD8gXCIgKyBncmFudGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldEltZWkoKXtcbiAgICAgICByZXR1cm4gVGVsZXBob255KCkudGhlbigocmVzcG9uc2VEZXZpY2UpID0+IHtcbiAgICAgICAgICAgdGhpcy5zaW1EYXRhID0gcmVzcG9uc2VEZXZpY2U7XG4gICAgICAgICAgIHRoaXMuaW1laSA9IHRoaXMuc2ltRGF0YS5kZXZpY2VJZDtcbiAgICAgICAgICAgdGhpcy5sb2NhbE5vdGlmaWNhdGlvbih0aGlzLmltZWkpO1xuICAgICAgIH0pXG5cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9