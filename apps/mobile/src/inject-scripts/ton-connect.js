"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.MobileInjectedBridge = void 0;
var connectService_1 = require("@tonkeeper/core/dist/service/tonConnect/connectService");
var package_json_1 = __importDefault(require("../../package.json"));
var native_bridge_1 = require("./native-bridge");
var native_bridge_methods_1 = require("./native-bridge-methods");
function currentDeviceInfo(options) {
    var _a;
    return (0, connectService_1.getDeviceInfo)((0, connectService_1.getTonConnectPlatform)('mobile'), package_json_1["default"].version, (_a = options === null || options === void 0 ? void 0 : options.maxMessages) !== null && _a !== void 0 ? _a : 255, connectService_1.tonConnectTonkeeperProAppName);
}
var MobileInjectedBridge = /** @class */ (function () {
    function MobileInjectedBridge() {
        this.protocolVersion = 2;
        this.walletInfo = connectService_1.tonConnectTonkeeperProWalletInfo;
        this.deviceInfo = currentDeviceInfo();
        this.isWalletBrowser = true;
    }
    MobileInjectedBridge.prototype.connect = function (protocolVersion, message) {
        return (0, native_bridge_1.postBridgeMessage)({
            method: native_bridge_methods_1.NATIVE_BRIDGE_METHODS.TON_CONNECT.CONNECT,
            params: {
                protocolVersion: protocolVersion,
                message: message
            }
        });
    };
    MobileInjectedBridge.prototype.restoreConnection = function () {
        return (0, native_bridge_1.postBridgeMessage)({
            method: native_bridge_methods_1.NATIVE_BRIDGE_METHODS.TON_CONNECT.RESTORE_CONNECTION
        });
    };
    MobileInjectedBridge.prototype.send = function (message) {
        return (0, native_bridge_1.postBridgeMessage)({
            method: native_bridge_methods_1.NATIVE_BRIDGE_METHODS.TON_CONNECT.SEND,
            params: {
                message: message
            }
        });
    };
    MobileInjectedBridge.prototype.listen = function (callback) {
        return native_bridge_1.bridgeEvents$.subscribe(function (event) { return callback(event); });
    };
    return MobileInjectedBridge;
}());
exports.MobileInjectedBridge = MobileInjectedBridge;
