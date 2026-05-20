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
exports.TwaStorage = void 0;
var sdk_1 = require("@tma.js/sdk");
var TwaStorage = /** @class */ (function () {
    function TwaStorage() {
        var _this = this;
        this.timeout = 500;
        this.innerGet = function (key) { return __awaiter(_this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 6]);
                        return [4 /*yield*/, this.cloudStorage.get(key, { timeout: this.timeout })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        if (!(e_1 instanceof Error && e_1.message.startsWith('Timeout'))) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.cloudStorage.get(this.stringToHash(key), {
                                timeout: this.timeout
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: throw e_1;
                    case 5: return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.innerGetWithKey = function (key) { return __awaiter(_this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 6]);
                        return [4 /*yield*/, this.cloudStorage.get(key, { timeout: this.timeout })];
                    case 1: return [2 /*return*/, [_a.sent(), key]];
                    case 2:
                        e_2 = _a.sent();
                        if (!(e_2 instanceof Error && e_2.message.startsWith('Timeout'))) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.cloudStorage.get(this.stringToHash(key), { timeout: this.timeout })];
                    case 3: return [2 /*return*/, [
                            _a.sent(),
                            this.stringToHash(key)
                        ]];
                    case 4: throw e_2;
                    case 5: return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.innerSet = function (key, payload) { return __awaiter(_this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 6]);
                        return [4 /*yield*/, this.cloudStorage.set(key, payload, { timeout: this.timeout })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        e_3 = _a.sent();
                        if (!(e_3 instanceof Error && e_3.message.startsWith('Timeout'))) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.cloudStorage.set(this.stringToHash(key), payload, {
                                timeout: this.timeout
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: throw e_3;
                    case 5: return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.get = function (key) { return __awaiter(_this, void 0, void 0, function () {
            var value, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.innerGet(key)];
                    case 1:
                        value = _a.sent();
                        if (!value)
                            return [2 /*return*/, null];
                        payload = JSON.parse(value).payload;
                        return [2 /*return*/, payload];
                }
            });
        }); };
        this.set = function (key, payload) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.innerSet(key, JSON.stringify({ payload: payload }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, payload];
                }
            });
        }); };
        this.setBatch = function (values) { return __awaiter(_this, void 0, void 0, function () {
            var _i, _a, _b, key, payload;
            return __generator(this, function (_c) {
                for (_i = 0, _a = Object.entries(values); _i < _a.length; _i++) {
                    _b = _a[_i], key = _b[0], payload = _b[1];
                    this.set(key, payload);
                }
                return [2 /*return*/, values];
            });
        }); };
        this["delete"] = function (key) { return __awaiter(_this, void 0, void 0, function () {
            var _a, value, innerKey, payload;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.innerGetWithKey(key)];
                    case 1:
                        _a = _b.sent(), value = _a[0], innerKey = _a[1];
                        if (!value)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.cloudStorage["delete"]([innerKey])];
                    case 2:
                        _b.sent();
                        payload = JSON.parse(value).payload;
                        return [2 /*return*/, payload];
                }
            });
        }); };
        this.clear = function () { return __awaiter(_this, void 0, void 0, function () {
            var keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cloudStorage.getKeys()];
                    case 1:
                        keys = _a.sent();
                        return [4 /*yield*/, this.cloudStorage["delete"](keys)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.cloudStorage = (0, sdk_1.initCloudStorage)();
    }
    TwaStorage.prototype.stringToHash = function (string) {
        var hash = 0;
        if (string.length === 0) {
            throw new Error('Unexpected string');
        }
        for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
            var char = string_1[_i];
            hash ^= char.charCodeAt(0); // Bitwise XOR operation
        }
        return String(hash);
    };
    return TwaStorage;
}());
exports.TwaStorage = TwaStorage;
