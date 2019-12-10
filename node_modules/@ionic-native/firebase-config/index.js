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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var FirebaseConfigOriginal = /** @class */ (function (_super) {
    __extends(FirebaseConfigOriginal, _super);
    function FirebaseConfigOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseConfigOriginal.prototype.fetch = function (expirationDuration) { return cordova(this, "fetch", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.activate = function () { return cordova(this, "activate", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.fetchAndActivate = function () { return cordova(this, "fetchAndActivate", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getBoolean = function (key) { return cordova(this, "getBoolean", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getString = function (key) { return cordova(this, "getString", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getNumber = function (key) { return cordova(this, "getNumber", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getBytes = function (key) { return cordova(this, "getBytes", { "sync": true }, arguments); };
    FirebaseConfigOriginal.pluginName = "FirebaseConfig";
    FirebaseConfigOriginal.plugin = "cordova-plugin-firebase-config";
    FirebaseConfigOriginal.pluginRef = "cordova.plugins.firebase.config";
    FirebaseConfigOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-config";
    FirebaseConfigOriginal.platforms = ["Android", "iOS"];
    return FirebaseConfigOriginal;
}(IonicNativePlugin));
var FirebaseConfig = new FirebaseConfigOriginal();
export { FirebaseConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWNvbmZpZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQ3BDLGtDQUFpQjs7OztJQVFuRCw4QkFBSyxhQUFDLGtCQUEyQjtJQVVqQyxpQ0FBUTtJQVVSLHlDQUFnQjtJQVdoQixtQ0FBVSxhQUFDLEdBQVc7SUFXdEIsa0NBQVMsYUFBQyxHQUFXO0lBV3JCLGtDQUFTLGFBQUMsR0FBVztJQVdyQixpQ0FBUSxhQUFDLEdBQVc7Ozs7Ozt5QkF6R3RCO0VBaUNvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBGaXJlYmFzZSBDb25maWdcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gZm9yIEZpcmViYXNlIENvbmZpZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlyZWJhc2VDb25maWcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpcmViYXNlLWNvbmZpZy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlQ29uZmlnOiBGaXJlYmFzZUNvbmZpZykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuZmlyZWJhc2VDb25maWcuZ2V0Qm9vbGVhbignbXlfa2V5JylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaXJlYmFzZUNvbmZpZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWNvbmZpZycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5maXJlYmFzZS5jb25maWcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NoZW1lcmlzdWsvY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtY29uZmlnJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlQ29uZmlnIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3RhcnRzIGZldGNoaW5nIGNvbmZpZ3MsIGFkaGVyaW5nIHRvIHRoZSBzcGVjaWZpZWQgbWluaW11bSBmZXRjaCBpbnRlcnZhbC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGV4cGlyYXRpb25EdXJhdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudWxsPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBmZXRjaChleHBpcmF0aW9uRHVyYXRpb24/OiBudW1iZXIpOiBQcm9taXNlPG51bGw+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXN5bmNocm9ub3VzbHkgYWN0aXZhdGVzIHRoZSBtb3N0IHJlY2VudGx5IGZldGNoZWQgY29uZmlncywgc28gdGhhdCB0aGUgZmV0Y2hlZCBrZXkgdmFsdWUgcGFpcnMgdGFrZSBlZmZlY3QuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bGw+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFjdGl2YXRlKCk6IFByb21pc2U8bnVsbD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3luY2hyb25vdXNseSBmZXRjaGVzIGFuZCB0aGVuIGFjdGl2YXRlcyB0aGUgZmV0Y2hlZCBjb25maWdzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudWxsPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBmZXRjaEFuZEFjdGl2YXRlKCk6IFByb21pc2U8bnVsbD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgYm9vbGVhbiBjb25maWd1cmF0aW9uIHZhbHVlIGZyb20gUmVtb3RlQ29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Qm9vbGVhbihrZXk6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgc3RyaW5nIGNvbmZpZ3VyYXRpb24gdmFsdWUgZnJvbSBSZW1vdGVDb25maWdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJpbmcoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgbnVtZXJpYyBjb25maWd1cmF0aW9uIHZhbHVlIGZyb20gUmVtb3RlQ29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0TnVtYmVyKGtleTogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2hlcyBhbiBhcnJheSBvZiBieXRlcyBjb25maWd1cmF0aW9uIHZhbHVlIGZyb20gUmVtb3RlQ29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Qnl0ZXMoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=