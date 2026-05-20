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
exports.DesktopAppSdk = exports.BiometryServiceDesktop = exports.CookieDesktop = void 0;
// eslint-disable-next-line max-classes-per-file
var AppSdk_1 = require("@tonkeeper/core/dist/AppSdk");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var package_json_1 = __importDefault(require("../../package.json"));
var backgroudService_1 = require("./backgroudService");
var storage_1 = require("./storage");
var keychain_1 = require("./keychain");
var common_1 = require("@tonkeeper/core/dist/utils/common");
var CookieDesktop = /** @class */ (function () {
    function CookieDesktop() {
        var _this = this;
        this.cleanUp = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, backgroudService_1.sendBackground)({ king: 'clean-cookie' })];
            });
        }); };
    }
    return CookieDesktop;
}());
exports.CookieDesktop = CookieDesktop;
var BiometryServiceDesktop = /** @class */ (function () {
    function BiometryServiceDesktop() {
        var _this = this;
        this.canPrompt = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, backgroudService_1.sendBackground)({ king: 'can-prompt-touch-id' })];
            });
        }); };
        this.prompt = function (reason) { return __awaiter(_this, void 0, void 0, function () {
            var lagns, lang;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, backgroudService_1.sendBackground)({
                            king: 'get-preferred-system-languages'
                        })];
                    case 1:
                        lagns = _a.sent();
                        lang = (lagns[0] || 'en').split('-')[0];
                        return [4 /*yield*/, (0, backgroudService_1.sendBackground)({
                                king: 'prompt-touch-id',
                                reason: reason(lang)
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
    }
    return BiometryServiceDesktop;
}());
exports.BiometryServiceDesktop = BiometryServiceDesktop;
var DesktopAppSdk = /** @class */ (function (_super) {
    __extends(DesktopAppSdk, _super);
    function DesktopAppSdk() {
        var _this = this;
        var _a;
        _this = _super.call(this, new storage_1.DesktopStorage()) || this;
        _this.cookie = new CookieDesktop();
        _this.biometry = new BiometryServiceDesktop();
        _this.keychain = new keychain_1.KeychainDesktop(_this.biometry, _this.storage);
        _this.copyToClipboard = function (value, notification) {
            (0, copy_to_clipboard_1["default"])(value);
            _this.topMessage(notification);
        };
        _this.openPage = function (url) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!(0, common_1.isValidUrlProtocol)(url, this.authorizedOpenUrlProtocols)) {
                    console.error('Unacceptable url protocol', url);
                    return [2 /*return*/];
                }
                return [2 /*return*/, (0, backgroudService_1.sendBackground)({ king: 'open-page', url: url })];
            });
        }); };
        _this.authorizedOpenUrlProtocols = ['http:', 'https:', 'tg:', 'mailto:'];
        _this.version = (_a = package_json_1["default"].version) !== null && _a !== void 0 ? _a : 'Unknown';
        _this.targetEnv = 'desktop';
        _this.reloadApp = function () {
            // eslint-disable-next-line no-self-assign
            window.location.href = window.location.href;
        };
        return _this;
    }
    DesktopAppSdk.prototype.confirm = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var cancelButton, okButton, clickedIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cancelButton = options.cancelButtonTitle || 'Cancel';
                        okButton = options.okButtonTitle || 'OK';
                        return [4 /*yield*/, (0, backgroudService_1.sendBackground)({
                                king: 'show-confirm-dialog',
                                options: {
                                    message: options.message,
                                    type: options.type,
                                    buttons: [cancelButton, okButton],
                                    defaultId: options.defaultButton === 'cancel' ? 0 : 1,
                                    title: options.title,
                                    cancelId: 0
                                }
                            })];
                    case 1:
                        clickedIndex = _a.sent();
                        return [2 /*return*/, clickedIndex === 1];
                }
            });
        });
    };
    DesktopAppSdk.prototype.getAppCountryInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deviceCountryCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, backgroudService_1.sendBackground)({ king: 'get-device-country' })];
                    case 1:
                        deviceCountryCode = _a.sent();
                        return [2 /*return*/, {
                                deviceCountryCode: deviceCountryCode,
                                storeCountryCode: null
                            }];
                }
            });
        });
    };
    return DesktopAppSdk;
}(AppSdk_1.BaseApp));
exports.DesktopAppSdk = DesktopAppSdk;
