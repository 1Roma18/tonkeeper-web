"use strict";
/**
 * Service methods and subscription to handle DApp events
 * Origin: https://github.com/OpenProduct/openmask-extension/blob/main/src/libs/service/backgroundDAppService.ts
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.subscriptionDAppNotifications = exports.handleDAppConnection = void 0;
var exception_1 = require("@tonkeeper/core/dist/entries/exception");
var tonConnect_1 = require("@tonkeeper/core/dist/entries/tonConnect");
var event_1 = require("../event");
var tonConnectService_1 = require("./dApp/tonConnectService");
var backgroundTonapiService_1 = require("./backgroundTonapiService");
var backgroundTonLinkService_1 = require("./backgroundTonLinkService");
var contentScriptPorts = new Set();
var providerResponse = function (id, method, result, error) {
    return {
        type: 'TonkeeperAPI',
        message: {
            jsonrpc: '2.0',
            id: id,
            method: method,
            result: result,
            error: error
                ? {
                    message: error.message,
                    code: error.code
                }
                : undefined
        }
    };
};
var providerTonConnectEvent = function (id, event) {
    return {
        type: 'TonkeeperAPI',
        message: {
            jsonrpc: '2.0',
            id: id,
            event: event,
            payload: {}
        }
    };
};
var handleDAppConnection = function (port) {
    contentScriptPorts.add(port);
    port.onMessage.addListener(function (msg, contentPort) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, result, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (msg.type !== 'TonkeeperProvider' || !msg.message) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, handleDAppMessage(msg.message)
                            .then(function (r) { return [r, undefined]; })["catch"](function (e) { return [undefined, e]; })];
                case 1:
                    _a = _b.sent(), result = _a[0], error = _a[1];
                    if (contentPort) {
                        contentPort.postMessage(providerResponse(msg.message.id, msg.message.method, result, error));
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    port.onDisconnect.addListener(function (p) { return __awaiter(void 0, void 0, void 0, function () {
        var dappIsConnected;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!((_a = p.sender) === null || _a === void 0 ? void 0 : _a.url)) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, tonConnectService_1.isDappConnectedToExtension)(new URL(p.sender.url).origin)];
                case 1:
                    dappIsConnected = _b.sent();
                    if (dappIsConnected) {
                        return [2 /*return*/];
                    }
                    _b.label = 2;
                case 2:
                    contentScriptPorts["delete"](p);
                    return [2 /*return*/];
            }
        });
    }); });
};
exports.handleDAppConnection = handleDAppConnection;
var handleDAppMessage = function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var origin;
    return __generator(this, function (_a) {
        origin = decodeURIComponent(message.origin);
        switch (message.method) {
            case 'ping': {
                return [2 /*return*/, 'pong'];
            }
            case 'tonConnect_connect': {
                return [2 /*return*/, (0, tonConnectService_1.tonConnectRequest)(message.id, origin, message.params[0])];
            }
            case 'tonConnect_reconnect': {
                return [2 /*return*/, (0, tonConnectService_1.tonConnectReConnect)(origin)];
            }
            case 'tonConnect_disconnect': {
                return [2 /*return*/, (0, tonConnectService_1.tonConnectDisconnect)(message.id, origin)];
            }
            case 'tonConnect_sendTransaction': {
                return [2 /*return*/, (0, tonConnectService_1.tonConnectTransaction)(message.id, origin, message.params[0], message.params[1])];
            }
            case 'tonConnect_signData': {
                return [2 /*return*/, (0, tonConnectService_1.tonConnectSignData)(message.id, origin, message.params[0])];
            }
            case 'tonapi_request': {
                return [2 /*return*/, (0, backgroundTonapiService_1.createTonapiRequest)(message.params[0], message.params[1])];
            }
            case 'tonLink_intercept': {
                return [2 /*return*/, (0, backgroundTonLinkService_1.processInterceptTonLink)(origin, message.params[0])];
            }
            default:
                throw new exception_1.TonConnectError("Method \"".concat(message.method, "\" not implemented"), tonConnect_1.CONNECT_EVENT_ERROR_CODES.METHOD_NOT_SUPPORTED);
        }
        return [2 /*return*/];
    });
}); };
var subscriptionDAppNotifications = function () {
    event_1.backgroundEventsEmitter.on('tonConnectDisconnect', function (message) { return __awaiter(void 0, void 0, void 0, function () {
        var dappHosts, ports;
        return __generator(this, function (_a) {
            dappHosts = message.params.map(function (parap) { return new URL(parap).host; });
            ports = __spreadArray([], contentScriptPorts.values(), true).filter(function (p) { var _a; return ((_a = p.sender) === null || _a === void 0 ? void 0 : _a.url) && dappHosts.includes(new URL(p.sender.url).host); });
            if (ports.length) {
                ports.forEach(function (port) {
                    try {
                        port.postMessage(providerTonConnectEvent(Date.now(), 'disconnect'));
                    }
                    catch (e) {
                        console.error(e);
                    }
                    contentScriptPorts["delete"](port);
                });
            }
            return [2 /*return*/];
        });
    }); });
};
exports.subscriptionDAppNotifications = subscriptionDAppNotifications;
