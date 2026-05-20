"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.connectToBackground = exports.sendBackground = exports.extensionBackgroundEvents$ = void 0;
var webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
var atom_1 = require("@tonkeeper/core/dist/entries/atom");
var port;
exports.extensionBackgroundEvents$ = (0, atom_1.replaySubject)();
exports.sendBackground = {
    message: function (method, params) {
        port.postMessage({ method: method, params: params });
    }
};
var connectToBackground = function () {
    port = webextension_polyfill_1["default"].runtime.connect({ name: 'TonkeeperUI' });
    port.onMessage.addListener(function (data) {
        exports.extensionBackgroundEvents$.next(data);
    });
    port.onDisconnect.addListener(function () {
        (0, exports.connectToBackground)();
    });
    port.postMessage({ type: 'PopupConnected' });
};
exports.connectToBackground = connectToBackground;
