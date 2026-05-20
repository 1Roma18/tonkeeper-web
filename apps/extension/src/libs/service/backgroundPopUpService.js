"use strict";
/**
 * Service methods and subscription to handle PopUp events
 * Origin: https://github.com/OpenProduct/openmask-extension/blob/main/src/libs/service/backgroundPopUpService.ts
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.showNotificationInPopup = exports.postMessageToPopup = exports.handlePopUpConnection = void 0;
var webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
var event_1 = require("../event");
var user_identity_1 = require("@tonkeeper/core/dist/user-identity");
var storage_1 = require("../storage");
var aptabase_background_1 = require("../aptabase-background");
var popUpPort;
var portMessagesQueue = [];
var handlePopUpConnection = function (port) {
    popUpPort = port;
    port.onMessage.addListener(function (message) {
        if (message.type === 'PopupConnected') {
            popUpPort = port;
            portMessagesQueue.forEach(function (msg) { return popUpPort.postMessage(msg); });
        }
        else {
            event_1.popUpEventEmitter.emit(message.method, message);
        }
    });
    port.onDisconnect.addListener(function () {
        popUpPort = null;
    });
};
exports.handlePopUpConnection = handlePopUpConnection;
function postMessageToPopup(data) {
    if (popUpPort) {
        popUpPort.postMessage(data);
    }
    else {
        portMessagesQueue.push(data);
    }
}
exports.postMessageToPopup = postMessageToPopup;
function showNotificationInPopup(data) {
    postMessageToPopup({ type: 'showNotification', data: data });
}
exports.showNotificationInPopup = showNotificationInPopup;
// Just Proxy messages to background service
event_1.popUpEventEmitter.on('approveRequest', function (message) {
    event_1.backgroundEventsEmitter.emit('approveRequest', message);
});
event_1.popUpEventEmitter.on('rejectRequest', function (message) {
    event_1.backgroundEventsEmitter.emit('rejectRequest', message);
});
event_1.popUpEventEmitter.on('tonConnectDisconnect', function (message) {
    event_1.backgroundEventsEmitter.emit('tonConnectDisconnect', message);
});
event_1.popUpEventEmitter.on('proxyChanged', function (message) {
    event_1.backgroundEventsEmitter.emit('proxyChanged', message);
});
// End of proxy messages
var aptabase;
var userIdentity = new user_identity_1.UserIdentityService(new storage_1.ExtensionStorage());
event_1.popUpEventEmitter.on('userProperties', function (message) {
    var _a = message.params, aptabaseEndpoint = _a.aptabaseEndpoint, aptabaseKey = _a.aptabaseKey, restParams = __rest(_a, ["aptabaseEndpoint", "aptabaseKey"]);
    aptabase = new aptabase_background_1.AptabaseBackground({
        host: aptabaseEndpoint,
        key: aptabaseKey,
        appVersion: webextension_polyfill_1["default"].runtime.getManifest().version,
        userIdentity: userIdentity
    });
    aptabase.init(restParams);
});
event_1.popUpEventEmitter.on('trackEvent', function (message) {
    aptabase === null || aptabase === void 0 ? void 0 : aptabase.track(message.params.name, message.params.params)["catch"](function (e) { return console.warn('Failed to send Aptabase event', e); });
});
