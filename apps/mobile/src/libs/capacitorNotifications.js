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
exports.__esModule = true;
exports.CapacitorNotifications = void 0;
var push_notifications_1 = require("@capacitor/push-notifications");
var device_1 = require("@capacitor/device");
var Keys_1 = require("@tonkeeper/core/dist/Keys");
var url_1 = require("@tonkeeper/core/dist/utils/url");
var requestPushPermission = function () { return __awaiter(void 0, void 0, void 0, function () {
    var permission, p;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, push_notifications_1.PushNotifications.requestPermissions()];
            case 1:
                permission = _a.sent();
                if (permission.receive !== 'granted') {
                    throw new Error('Push notifications permission not granted');
                }
                p = new Promise(function (res, rej) {
                    push_notifications_1.PushNotifications.addListener('registration', function (token) {
                        if (!token.value) {
                            rej(new Error('Push notifications permission not granted'));
                            return;
                        }
                        res(token.value);
                        push_notifications_1.PushNotifications.removeAllListeners();
                    });
                    push_notifications_1.PushNotifications.addListener('registrationError', function (error) {
                        rej(error);
                        push_notifications_1.PushNotifications.removeAllListeners();
                    });
                    setTimeout(function () {
                        rej(new Error('Push notifications permission timeout'));
                        push_notifications_1.PushNotifications.removeAllListeners();
                    }, 10000);
                });
                return [4 /*yield*/, push_notifications_1.PushNotifications.register()];
            case 2:
                _a.sent();
                return [2 /*return*/, p];
        }
    });
}); };
var CapacitorNotifications = /** @class */ (function () {
    function CapacitorNotifications(config, storage) {
        this.storage = storage;
        this.baseUrl = (0, url_1.removeLastSlash)(config.tonapiIOEndpoint);
    }
    CapacitorNotifications.prototype.subscribe = function (_, wallet, __) {
        return __awaiter(this, void 0, void 0, function () {
            var token, endpoint, deviceId, result, _a, _b, _c, _d, records;
            var _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, requestPushPermission()];
                    case 1:
                        token = _g.sent();
                        endpoint = "".concat(this.baseUrl, "/v1/internal/pushes/plain/subscribe");
                        return [4 /*yield*/, device_1.Device.getId()];
                    case 2:
                        deviceId = _g.sent();
                        _a = fetch;
                        _b = [endpoint];
                        _e = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        };
                        _d = (_c = JSON).stringify;
                        _f = {};
                        return [4 /*yield*/, device_1.Device.getLanguageCode()];
                    case 3: return [4 /*yield*/, _a.apply(void 0, _b.concat([(_e.body = _d.apply(_c, [(_f.locale = (_g.sent()).value,
                                    _f.device = deviceId.identifier,
                                    _f.accounts = [{ address: wallet.rawAddress }],
                                    _f.token = token,
                                    _f)]),
                                _e)]))];
                    case 4: return [4 /*yield*/, (_g.sent()).json()];
                    case 5:
                        result = _g.sent();
                        if (!result.ok) {
                            throw new Error('Subscribe failed due to API error');
                        }
                        return [4 /*yield*/, this.getRecords()];
                    case 6:
                        records = _g.sent();
                        records[wallet.rawAddress] = true;
                        return [4 /*yield*/, this.storage.set(Keys_1.AppKey.NOTIFICATIONS, records)];
                    case 7:
                        _g.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CapacitorNotifications.prototype.unsubscribe = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var deviceId, endpoint, result, records;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, device_1.Device.getId()];
                    case 1:
                        deviceId = _a.sent();
                        endpoint = "".concat(this.baseUrl, "/v1/internal/pushes/plain/unsubscribe");
                        return [4 /*yield*/, fetch(endpoint, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    device: deviceId.identifier,
                                    accounts: address ? [{ address: address }] : undefined
                                })
                            })];
                    case 2: return [4 /*yield*/, (_a.sent()).json()];
                    case 3:
                        result = _a.sent();
                        if (!result.ok) {
                            throw new Error('Unsubscribe failed due to API error');
                        }
                        return [4 /*yield*/, this.getRecords()];
                    case 4:
                        records = _a.sent();
                        if (address) {
                            records[address] = false;
                        }
                        else {
                            records = {};
                        }
                        return [4 /*yield*/, push_notifications_1.PushNotifications.unregister()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set(Keys_1.AppKey.NOTIFICATIONS, records)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CapacitorNotifications.prototype.subscribeTonConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CapacitorNotifications.prototype.unsubscribeTonConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CapacitorNotifications.prototype.subscribed = function (address) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var records;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getRecords()];
                    case 1:
                        records = _b.sent();
                        return [2 /*return*/, (_a = records[address]) !== null && _a !== void 0 ? _a : false];
                }
            });
        });
    };
    CapacitorNotifications.prototype.getRecords = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.storage.get(Keys_1.AppKey.NOTIFICATIONS)];
                    case 1: return [2 /*return*/, (_a = (_b.sent())) !== null && _a !== void 0 ? _a : {}];
                }
            });
        });
    };
    return CapacitorNotifications;
}());
exports.CapacitorNotifications = CapacitorNotifications;
