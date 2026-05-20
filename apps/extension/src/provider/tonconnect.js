"use strict";
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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _ExtensionTonConnectInjectedBridge_callbacks;
exports.__esModule = true;
exports.ExtensionTonConnectInjectedBridge = void 0;
var exception_1 = require("@tonkeeper/core/dist/entries/exception");
var tonConnect_1 = require("@tonkeeper/core/dist/entries/tonConnect");
var connectService_1 = require("@tonkeeper/core/dist/service/tonConnect/connectService");
var package_json_1 = __importDefault(require("../../package.json"));
var constants_1 = require("../constants");
var formatConnectEventError = function (error) {
    return {
        event: 'connect_error',
        id: Date.now(),
        payload: {
            code: error.code,
            message: error.message
        }
    };
};
var ExtensionTonConnectInjectedBridge = /** @class */ (function () {
    function ExtensionTonConnectInjectedBridge(provider) {
        var _this = this;
        this.provider = provider;
        _ExtensionTonConnectInjectedBridge_callbacks.set(this, []);
        this.walletInfo = connectService_1.tonConnectTonkeeperWalletInfo;
        this.deviceInfo = (0, connectService_1.getDeviceInfo)((0, connectService_1.getTonConnectPlatform)('extension'), package_json_1["default"].version, 255, connectService_1.tonConnectTonkeeperAppName);
        this.protocolVersion = constants_1.tonConnectProtocolVersion;
        this.isWalletBrowser = false;
        this.connect = function (_protocolVersion, _message) { return __awaiter(_this, void 0, void 0, function () {
            var protocolVersion, message, payload, e_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protocolVersion = tonConnect_1.protocolVersionSchema.safeParse(_protocolVersion).data;
                        if (protocolVersion === undefined || protocolVersion > this.protocolVersion) {
                            return [2 /*return*/, this.notify(formatConnectEventError(new exception_1.TonConnectError('Unsupported protocol version', 1)))];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        message = tonConnect_1.connectRequestSchema.parse(_message);
                        return [4 /*yield*/, this.provider.send('tonConnect_connect', message)];
                    case 2:
                        payload = _b.sent();
                        return [2 /*return*/, this.notify({
                                event: 'connect',
                                id: Date.now(),
                                payload: payload
                            })];
                    case 3:
                        e_1 = _b.sent();
                        if (e_1 instanceof exception_1.TonConnectError) {
                            return [2 /*return*/, this.notify(formatConnectEventError(e_1))];
                        }
                        else {
                            return [2 /*return*/, this.notify(formatConnectEventError(new exception_1.TonConnectError((_a = e_1.message) !== null && _a !== void 0 ? _a : 'Unknown error')))];
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.disconnect = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.provider.send('tonConnect_disconnect')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.notify({
                                event: 'disconnect',
                                id: Date.now(),
                                payload: {}
                            })];
                }
            });
        }); };
        this.restoreConnection = function () { return __awaiter(_this, void 0, void 0, function () {
            var payload, e_2;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.provider.send('tonConnect_reconnect', [{ name: 'ton_addr' }])];
                    case 1:
                        payload = _b.sent();
                        return [2 /*return*/, this.notify({
                                event: 'connect',
                                id: Date.now(),
                                payload: payload
                            })];
                    case 2:
                        e_2 = _b.sent();
                        if (e_2 instanceof exception_1.TonConnectError) {
                            return [2 /*return*/, this.notify(formatConnectEventError(e_2))];
                        }
                        else {
                            return [2 /*return*/, this.notify(formatConnectEventError(new exception_1.TonConnectError((_a = e_2.message) !== null && _a !== void 0 ? _a : 'Unknown error')))];
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.listen = function (callback) {
            __classPrivateFieldGet(_this, _ExtensionTonConnectInjectedBridge_callbacks, "f").push(callback);
            var callbacks = __classPrivateFieldGet(_this, _ExtensionTonConnectInjectedBridge_callbacks, "f");
            return function () {
                var index = callbacks.indexOf(callback);
                if (index > -1) {
                    callbacks.splice(index, 1);
                }
            };
        };
        this.notify = function (event) {
            __classPrivateFieldGet(_this, _ExtensionTonConnectInjectedBridge_callbacks, "f").forEach(function (item) { return item(event); });
            return event;
        };
    }
    ExtensionTonConnectInjectedBridge.prototype.send = function (message) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, method, paramsRaw, id, params, result, e_3, fallbackId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = tonConnect_1.appRequestSchema.parse(message), method = _b.method, paramsRaw = _b.params, id = _b.id;
                        params = tonConnect_1.sendRequestPayloadSchema.parse(JSON.parse(paramsRaw[0]));
                        return [4 /*yield*/, this.provider.send("tonConnect_".concat(method), params)];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, {
                                result: result,
                                id: String(id)
                            }];
                    case 2:
                        e_3 = _c.sent();
                        fallbackId = typeof message === 'object' && message && 'id' in message ? message.id : Date.now();
                        if (e_3 instanceof exception_1.TonConnectError) {
                            return [2 /*return*/, {
                                    error: e_3,
                                    id: String(fallbackId)
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    error: new exception_1.TonConnectError((_a = e_3.message) !== null && _a !== void 0 ? _a : 'Unknown error'),
                                    id: String(fallbackId)
                                }];
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ExtensionTonConnectInjectedBridge;
}());
exports.ExtensionTonConnectInjectedBridge = ExtensionTonConnectInjectedBridge;
_ExtensionTonConnectInjectedBridge_callbacks = new WeakMap();
