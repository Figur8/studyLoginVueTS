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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzM2N2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWN1cmUudnVlPzY1YmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBZ0JBLHdIQUFtQztBQUNuQywySEFBdUQ7QUFDdkQsdUhBQXdEO0FBQ3hELHdGQUFxRDtBQUNyRCwyRkFBNkM7QUFDN0MseUdBQXNEO0FBR3REO0lBQWtDLGdDQUFHO0lBQXJDO1FBQUEscUVBbURDO1FBbERXLFNBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixXQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUksR0FBVyxFQUFFLENBQUM7O0lBK0M5QixDQUFDO0lBNUNHLHlCQUFVLEdBQVY7UUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQU0sQ0FBQyxDQUFDO1NBQzVCO2FBQUk7WUFDRCxLQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFlBQVksRUFBRSxNQUFNO2FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFBQSxpQkFRQztRQVBHLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMvRixJQUFJLENBQUMsYUFBRztZQUNMLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN4QixLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQ0FBb0MsR0FBRSxLQUFJLENBQUMsR0FBRyxHQUFFLEdBQUcsR0FBRSxLQUFJLENBQUMsR0FBRyxDQUFFO1FBQ2pGLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUFBLENBQUM7SUFFRix1QkFBUSxHQUFSLFVBQVMsZ0JBQXdCO1FBQzdCLElBQUcsZ0JBQWdCLElBQUksdUJBQXVCLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBTSxDQUFDLENBQUM7U0FDNUI7YUFBSTtZQUNELEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztJQUNOLENBQUM7SUF0Q087UUFBUCw2QkFBSSxFQUFFOztzQ0FBcUI7SUFMWCxJQUFJO1FBRHhCLGtDQUFTO09BQ1csSUFBSSxDQW1EeEI7SUFBRCxXQUFDO0NBQUEsQ0FuRGlDLDBCQUFHLEdBbURwQztrQkFuRG9CLElBQUk7Ozs7Ozs7Ozs7OztBQ2Z6Qix3SEFBbUM7QUFDbkMsMkhBQWlEO0FBQ2pELHdJQUFzRTtBQUN0RSwwR0FBaUQ7QUFHakQ7SUFBb0Msa0NBQUc7SUFHbkM7UUFBQSxpQkFJQztRQUZHLHFEQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDOztJQUV2QyxDQUFDO0lBQ0QscUJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFHaEMsQ0FBQztJQUVELGtDQUFpQixHQUFqQixVQUFrQixJQUFZO1FBRTFCLHFEQUFrQixDQUFDLFFBQVEsQ0FDdkIsQ0FBQztnQkFDRyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsMEJBQTBCO2dCQUNqQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ25CLElBQUksRUFBRSxJQUFJO2dCQUNWLFlBQVksRUFBRSxLQUFLO2dCQUNuQix5QkFBeUIsRUFBRSxJQUFJO2dCQUMvQixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixFQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNuRCxDQUFDLENBQUM7UUFDUCxxREFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FDdkMsVUFBUyxPQUFPO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQ0o7SUFDTCxDQUFDO0lBRUQsd0JBQU8sR0FBUDtRQUFBLGlCQU9DO1FBTkUsT0FBTyxrQ0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsY0FBYztZQUNuQyxLQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUM5QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQTNDZ0IsTUFBTTtRQUQxQixrQ0FBUzs7T0FDVyxNQUFNLENBNEMxQjtJQUFELGFBQUM7Q0FBQSxDQTVDbUMsMEJBQUcsR0E0Q3RDO2tCQTVDb0IsTUFBTSIsImZpbGUiOiJidW5kbGUuZmIwM2M2ZjFiZmFjYTA1M2RjNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBQcm9wfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5pbXBvcnQgU2VjdXJlIGZyb20gXCJAL2NvbXBvbmVudHMvU2VjdXJlLnZ1ZVwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFZ1ZSB7XG4gICAgcHJpdmF0ZSBsYXQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBsb246IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBzcGVlZDogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGFkZHI6IHN0cmluZyA9IFwiXCI7XG4gICAgQFByb3AoKSBwdWJsaWMgcm9sZTogc3RyaW5nO1xuXG4gICAgZ29Ub1NlY3VyZSgpe1xuICAgICAgICBpZih0aGlzLnJvbGUgPT0gXCJhZG1pblwiKSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFNlY3VyZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVzZXIgTm90IGlzIGFkbWluXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJ2b2x0ZSBvc2Fkb1wiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJleGl0XCJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgZGlhbG9nIGNsb3NlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldExvY2F0aW9uKCkge1xuICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKTtcbiAgICAgICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHsgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLCBtYXhpbXVtQWdlOiA1MDAwLCB0aW1lb3V0OiAyMDAwMCB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhdCA9IHJlcy5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvbiA9IHJlcy5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgdXRpbHMub3BlblVybChcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9cIiArdGhpcy5sYXQgKycsJysgdGhpcy5sb24gKVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGdvVG9UZXN0KHJvbGVJbkZ1c2lvbkF1dGg6IHN0cmluZyl7XG4gICAgICAgIGlmKHJvbGVJbkZ1c2lvbkF1dGggPT0gXCJ2aWV3LXNlY3VyaXR5LW1lc3NhZ2VcIikge1xuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhTZWN1cmUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUUkVUQVwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXN1w6FyaW8gc2VtIFBlcm1pc3PDo29cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGVydCBkaWFsb2cgY2xvc2VkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3BzOntcbiAgICAgICAgbm9tZTogc3RyaW5nLFxuICAgIH07XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBTZWN1cmUsXG4gICAgfTtcblxufVxuIiwiXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcbmltcG9ydCB7IExvY2FsTm90aWZpY2F0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHtUZWxlcGhvbnl9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcGhvbnknO1xuXG5AQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN1cmUgZXh0ZW5kcyBWdWUge1xuICAgIHByaXZhdGUgc2ltRGF0YTogSlNPTjtcbiAgICBwcml2YXRlIGltZWk6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuaGFzUGVybWlzc2lvbigpO1xuXG4gICAgfVxuICAgIHRlc3QoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRJbWVpKCkpO1xuXG5cbiAgICB9XG5cbiAgICBsb2NhbE5vdGlmaWNhdGlvbihpbWVpOiBzdHJpbmcpe1xuXG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShcbiAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3ZhIG1lbnNhZ2VtIGVtIG5Nb2JpbGUnLFxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiB0aGlzLmltZWksXG4gICAgICAgICAgICAgICAgYm9keTogaW1laSxcbiAgICAgICAgICAgICAgICBiaWdUZXh0U3R5bGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvcmNlU2hvd1doZW5JbkZvcmVncm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJyZXM6Ly9sb2dvXCIsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwicmVzOi8vaWNvblwiLFxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IFwidnVlLWNoYW5uZWxcIixcbiAgICAgICAgICAgICAgICBhdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoMTAgKiAxMDAwKSlcbiAgICAgICAgICAgIH1dKVxuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKFxuICAgICAgICAgICAgZnVuY3Rpb24oZ3JhbnRlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVybWlzc2lvbiBncmFudGVkPyBcIiArIGdyYW50ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0SW1laSgpe1xuICAgICAgIHJldHVybiBUZWxlcGhvbnkoKS50aGVuKChyZXNwb25zZURldmljZSkgPT4ge1xuICAgICAgICAgICB0aGlzLnNpbURhdGEgPSByZXNwb25zZURldmljZTtcbiAgICAgICAgICAgdGhpcy5pbWVpID0gdGhpcy5zaW1EYXRhLmRldmljZUlkO1xuICAgICAgICAgICB0aGlzLmxvY2FsTm90aWZpY2F0aW9uKHRoaXMuaW1laSk7XG4gICAgICAgfSlcblxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=