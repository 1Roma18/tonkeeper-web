"use strict";
exports.__esModule = true;
exports.TgAuthBridge = void 0;
var native_bridge_1 = require("./native-bridge");
var native_bridge_methods_1 = require("./native-bridge-methods");
var TgAuthBridge = /** @class */ (function () {
    function TgAuthBridge() {
    }
    TgAuthBridge.prototype.sendResult = function (base64Result) {
        return (0, native_bridge_1.postBridgeMessage)({
            method: native_bridge_methods_1.NATIVE_BRIDGE_METHODS.TG_AUTH.SEND_RESULT,
            params: {
                base64Result: base64Result
            }
        });
    };
    return TgAuthBridge;
}());
exports.TgAuthBridge = TgAuthBridge;
