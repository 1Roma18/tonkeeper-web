"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.KeychainCapacitor = void 0;
var plugins_1 = require("./plugins");
var PromptMobileProPin_1 = require("@tonkeeper/uikit/dist/components/modals/PromptMobileProPin");
var i18n_1 = __importDefault(require("../app/i18n"));
var base_keychain_service_1 = require("@tonkeeper/core/dist/base-keychain-service");
var aplication_id_1 = require("./aplication-id");
var PromptDesktopPassword_1 = require("@tonkeeper/uikit/dist/components/modals/PromptDesktopPassword");
var types_1 = require("@tonkeeper/core/dist/utils/types");
var KeychainError_1 = require("@tonkeeper/core/dist/errors/KeychainError");
var KeychainCapacitor = /** @class */ (function (_super) {
    __extends(KeychainCapacitor, _super);
    function KeychainCapacitor(biometryService, storage) {
        var _this = _super.call(this, storage) || this;
        _this.biometryService = biometryService;
        _this.setData = function (key, value) { return __awaiter(_this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, plugins_1.SecureStorage.storeData({
                                id: "Wallet-".concat(key),
                                data: value
                            })];
                    case 1:
                        _a.sent();
                        console.log("[KEYCHAIN] (success) SET key \"Wallet-".concat(key, "\""));
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log("[KEYCHAIN] (ERROR) SET key \"Wallet-".concat(key, "\""), e_1);
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.getData = function (key) { return __awaiter(_this, void 0, void 0, function () {
            var data, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.securityCheck()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, plugins_1.SecureStorage.getData({
                                id: "Wallet-".concat(key)
                            })];
                    case 3:
                        data = (_a.sent()).data;
                        console.log("[KEYCHAIN] (success) GET key \"Wallet-".concat(key, "\""));
                        return [2 /*return*/, data];
                    case 4:
                        e_2 = _a.sent();
                        console.log("[KEYCHAIN] (ERROR) GET key \"Wallet-".concat(key, "\""), e_2);
                        throw new KeychainError_1.KeychainGetError();
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.removeData = function (key) { return __awaiter(_this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, plugins_1.SecureStorage.removeData({
                                id: "Wallet-".concat(key)
                            })];
                    case 1:
                        _a.sent();
                        console.log("[KEYCHAIN] (success) DELETE key \"Wallet-".concat(key, "\""));
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        console.log("[KEYCHAIN] (ERROR) DELETE key \"Wallet-".concat(key, "\""), e_3);
                        throw e_3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.clearStorage = function () { return __awaiter(_this, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, plugins_1.SecureStorage.clearStorage()];
                    case 1:
                        _a.sent();
                        console.log('[KEYCHAIN] (success) CLEAR all data');
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        console.log('[KEYCHAIN] (ERROR) CLEAR all data');
                        throw e_4;
                    case 3: return [4 /*yield*/, this.resetSecuritySettings()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    KeychainCapacitor.prototype.promptPassword = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (aplication_id_1.CAPACITOR_APPLICATION_ID === 'mobile') {
                    return [2 /*return*/, PromptMobileProPin_1.promptMobileProPinController.open({
                            afterClose: callback
                        })];
                }
                if (aplication_id_1.CAPACITOR_APPLICATION_ID === 'tablet') {
                    return [2 /*return*/, PromptDesktopPassword_1.promptDesktopPasswordController.open({
                            afterClose: callback
                        })];
                }
                (0, types_1.assertUnreachable)(aplication_id_1.CAPACITOR_APPLICATION_ID);
                return [2 /*return*/];
            });
        });
    };
    KeychainCapacitor.prototype.securityCheckTouchId = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, (_a = this.biometryService) === null || _a === void 0 ? void 0 : _a.prompt(function (lng) { return i18n_1["default"].t('touch_id_unlock_wallet', { lng: lng }); })];
            });
        });
    };
    return KeychainCapacitor;
}(base_keychain_service_1.BaseKeychainService));
exports.KeychainCapacitor = KeychainCapacitor;
