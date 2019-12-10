var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var FirebaseConfig = /** @class */ (function (_super) {
    __extends(FirebaseConfig, _super);
    function FirebaseConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseConfig.prototype.fetch = function (expirationDuration) { return cordova(this, "fetch", { "sync": true }, arguments); };
    FirebaseConfig.prototype.activate = function () { return cordova(this, "activate", { "sync": true }, arguments); };
    FirebaseConfig.prototype.fetchAndActivate = function () { return cordova(this, "fetchAndActivate", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getBoolean = function (key) { return cordova(this, "getBoolean", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getString = function (key) { return cordova(this, "getString", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getNumber = function (key) { return cordova(this, "getNumber", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getBytes = function (key) { return cordova(this, "getBytes", { "sync": true }, arguments); };
    FirebaseConfig.pluginName = "FirebaseConfig";
    FirebaseConfig.plugin = "cordova-plugin-firebase-config";
    FirebaseConfig.pluginRef = "cordova.plugins.firebase.config";
    FirebaseConfig.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-config";
    FirebaseConfig.platforms = ["Android", "iOS"];
    FirebaseConfig = __decorate([
        Injectable()
    ], FirebaseConfig);
    return FirebaseConfig;
}(IonicNativePlugin));
export { FirebaseConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWNvbmZpZy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQ3BDLGtDQUFpQjs7OztJQVFuRCw4QkFBSyxhQUFDLGtCQUEyQjtJQVVqQyxpQ0FBUTtJQVVSLHlDQUFnQjtJQVdoQixtQ0FBVSxhQUFDLEdBQVc7SUFXdEIsa0NBQVMsYUFBQyxHQUFXO0lBV3JCLGtDQUFTLGFBQUMsR0FBVztJQVdyQixpQ0FBUSxhQUFDLEdBQVc7Ozs7OztJQXhFVCxjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWM7eUJBakMzQjtFQWlDb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgRmlyZWJhc2UgQ29uZmlnXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIGZvciBGaXJlYmFzZSBDb25maWdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpcmViYXNlQ29uZmlnIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maXJlYmFzZS1jb25maWcvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZUNvbmZpZzogRmlyZWJhc2VDb25maWcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZpcmViYXNlQ29uZmlnLmdldEJvb2xlYW4oJ215X2tleScpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VDb25maWcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1jb25maWcnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZmlyZWJhc2UuY29uZmlnJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGVtZXJpc3VrL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWNvbmZpZycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUNvbmZpZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFN0YXJ0cyBmZXRjaGluZyBjb25maWdzLCBhZGhlcmluZyB0byB0aGUgc3BlY2lmaWVkIG1pbmltdW0gZmV0Y2ggaW50ZXJ2YWwuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBleHBpcmF0aW9uRHVyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8bnVsbD59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZmV0Y2goZXhwaXJhdGlvbkR1cmF0aW9uPzogbnVtYmVyKTogUHJvbWlzZTxudWxsPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzeW5jaHJvbm91c2x5IGFjdGl2YXRlcyB0aGUgbW9zdCByZWNlbnRseSBmZXRjaGVkIGNvbmZpZ3MsIHNvIHRoYXQgdGhlIGZldGNoZWQga2V5IHZhbHVlIHBhaXJzIHRha2UgZWZmZWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudWxsPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhY3RpdmF0ZSgpOiBQcm9taXNlPG51bGw+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXN5bmNocm9ub3VzbHkgZmV0Y2hlcyBhbmQgdGhlbiBhY3RpdmF0ZXMgdGhlIGZldGNoZWQgY29uZmlncy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVsbD59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZmV0Y2hBbmRBY3RpdmF0ZSgpOiBQcm9taXNlPG51bGw+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2hlcyBhIGJvb2xlYW4gY29uZmlndXJhdGlvbiB2YWx1ZSBmcm9tIFJlbW90ZUNvbmZpZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEJvb2xlYW4oa2V5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2hlcyBhIHN0cmluZyBjb25maWd1cmF0aW9uIHZhbHVlIGZyb20gUmVtb3RlQ29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3RyaW5nKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2hlcyBhIG51bWVyaWMgY29uZmlndXJhdGlvbiB2YWx1ZSBmcm9tIFJlbW90ZUNvbmZpZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldE51bWJlcihrZXk6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYW4gYXJyYXkgb2YgYnl0ZXMgY29uZmlndXJhdGlvbiB2YWx1ZSBmcm9tIFJlbW90ZUNvbmZpZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEJ5dGVzKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19