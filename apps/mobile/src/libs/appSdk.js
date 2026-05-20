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
exports.CapacitorUserIdentityService = exports.getCapacitorDeviceOS = exports.CapacitorAppSdk = exports.capacitorStorage = exports.BiometryServiceCapacitor = exports.CookieCapacitor = void 0;
// eslint-disable-next-line max-classes-per-file
var AppSdk_1 = require("@tonkeeper/core/dist/AppSdk");
var package_json_1 = __importDefault(require("../../package.json"));
var clipboard_1 = require("@capacitor/clipboard");
var plugins_1 = require("./plugins");
var core_1 = require("@capacitor/core");
var device_1 = require("@capacitor/device");
var haptics_1 = require("@capacitor/haptics");
var network_1 = require("@capacitor/network");
var atom_1 = require("@tonkeeper/core/dist/entries/atom");
var browser_1 = require("@capacitor/browser");
var app_1 = require("@capacitor/app");
var keychain_1 = require("./keychain");
var dialog_1 = require("@capacitor/dialog");
var keyboard_1 = require("@capacitor/keyboard");
var common_1 = require("@tonkeeper/core/dist/utils/common");
var aplication_id_1 = require("./aplication-id");
var logger_1 = require("./logger");
var dapp_browser_plugin_1 = require("./plugins/dapp-browser-plugin");
var user_identity_1 = require("@tonkeeper/core/dist/user-identity");
var subscription_plugin_1 = require("./plugins/subscription-plugin");
var country_info_plugin_1 = require("./plugins/country-info-plugin");
var storage_1 = require("./storage");
var SubscriptionService_1 = require("@tonkeeper/core/dist/SubscriptionService");
var pro_1 = require("@tonkeeper/core/dist/pro");
function waitAppIsActive() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (r) { return __awaiter(_this, void 0, void 0, function () {
                    var state, unsubscribe_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, app_1.App.getState()];
                            case 1:
                                state = _a.sent();
                                if (state.isActive) {
                                    r();
                                }
                                else {
                                    unsubscribe_1 = app_1.App.addListener('appStateChange', function (_a) {
                                        var isActive = _a.isActive;
                                        if (isActive) {
                                            unsubscribe_1.then(function (v) { return v.remove(); });
                                            setTimeout(r);
                                        }
                                    });
                                }
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
var CookieCapacitor = /** @class */ (function () {
    function CookieCapacitor() {
        var _this = this;
        this.cleanUp = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, core_1.CapacitorCookies.clearAllCookies()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
    }
    return CookieCapacitor;
}());
exports.CookieCapacitor = CookieCapacitor;
var BiometryServiceCapacitor = /** @class */ (function () {
    function BiometryServiceCapacitor(alert) {
        var _this = this;
        this.alert = alert;
        this.canPrompt = function () { return __awaiter(_this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, plugins_1.Biometric.canPrompt()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.isAvailable];
                    case 2:
                        e_1 = _a.sent();
                        console.error('TOUCH ID rejected, cause', e_1);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.prompt = function (reason) { return __awaiter(_this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, plugins_1.Biometric.prompt(reason('en'))];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_2 = _a.sent();
                        if (e_2 && typeof e_2 === 'object' && 'message' in e_2 && typeof e_2.message === 'string') {
                            this.alert(e_2.message);
                        }
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    return BiometryServiceCapacitor;
}());
exports.BiometryServiceCapacitor = BiometryServiceCapacitor;
exports.capacitorStorage = (0, storage_1.getCapacitorStorage)();
var CapacitorAppSdk = /** @class */ (function (_super) {
    __extends(CapacitorAppSdk, _super);
    function CapacitorAppSdk() {
        var _this = this;
        var _a;
        _this = _super.call(this, exports.capacitorStorage) || this;
        _this.cookie = new CookieCapacitor();
        /**
         * initialises in the App component when config is fetched
         */
        _this.notifications = undefined;
        _this.biometry = new BiometryServiceCapacitor(_this.topMessage.bind(_this));
        _this.keychain = new keychain_1.KeychainCapacitor(_this.biometry, _this.storage);
        _this.subscriptionService = new SubscriptionService_1.SubscriptionService(_this.storage, {
            initialStrategyMap: new Map([[pro_1.SubscriptionSource.IOS, new subscription_plugin_1.IosSubscriptionStrategy()]])
        });
        _this.pasteFromClipboard = function () { return __awaiter(_this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, clipboard_1.Clipboard.read()];
                    case 1:
                        value = (_a.sent()).value;
                        if (value || value === '') {
                            return [2 /*return*/, value];
                        }
                        else {
                            throw new Error('Paste from Clipboard failed!');
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.copyToClipboard = function (value, notification) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, clipboard_1.Clipboard.write({ string: value })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.hapticNotification('success')];
                    case 2:
                        _a.sent();
                        this.topMessage(notification);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.openPage = function (url, options) { return __awaiter(_this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(0, common_1.isValidUrlProtocol)(url, this.authorizedOpenUrlProtocols)) {
                            throw new Error('Unacceptable url protocol');
                        }
                        if (!(!url.startsWith('https://') && !url.startsWith('http://'))) return [3 /*break*/, 1];
                        try {
                            /* way to open in deeplinks on ios */
                            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                            window.location = url;
                        }
                        catch (e) {
                            console.error(e);
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(options === null || options === void 0 ? void 0 : options.forceExternalBrowser)) return [3 /*break*/, 2];
                        (0, common_1.safeWindowOpen)(url, this.authorizedOpenUrlProtocols);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, browser_1.Browser.open({ url: url })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.authorizedOpenUrlProtocols = [
            'http:',
            'https:',
            'tg:',
            'tonsign:',
            'tonsign:',
            'tonkeeper:',
            'tonkeeperx:',
            'tonkeeper-mob:',
            'tonkeeper-tc-mob:',
            'mailto:'
        ];
        _this.version = (_a = package_json_1["default"].version) !== null && _a !== void 0 ? _a : 'Unknown';
        _this.targetEnv = aplication_id_1.CAPACITOR_APPLICATION_ID;
        _this.hapticNotification = function (type) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, waitAppIsActive()];
                    case 1:
                        _a.sent();
                        if (type === 'impact_medium') {
                            return [2 /*return*/, haptics_1.Haptics.impact({ style: haptics_1.ImpactStyle.Medium })];
                        }
                        if (type === 'impact_light') {
                            return [2 /*return*/, haptics_1.Haptics.impact({ style: haptics_1.ImpactStyle.Light })];
                        }
                        return [2 /*return*/, haptics_1.Haptics.notification({
                                type: type === 'success' ? haptics_1.NotificationType.Success : haptics_1.NotificationType.Error
                            })];
                }
            });
        }); };
        _this.connectionService = new CapacitorConnectionService();
        _this.signerReturnUrl = 'tonkeeper-pro://';
        _this.keyboard = new CapacitorKeyboardService();
        _this.logger = logger_1.capacitorFileLogger;
        _this.dappBrowser = dapp_browser_plugin_1.CapacitorDappBrowser;
        _this.userIdentity = new CapacitorUserIdentityService(exports.capacitorStorage);
        return _this;
    }
    CapacitorAppSdk.prototype.confirm = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dialog_1.Dialog.confirm(options)];
                    case 1:
                        value = (_a.sent()).value;
                        return [2 /*return*/, value];
                }
            });
        });
    };
    CapacitorAppSdk.prototype.getAppCountryInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, country_info_plugin_1.CountryInfo.getInfo()];
            });
        });
    };
    return CapacitorAppSdk;
}(AppSdk_1.BaseApp));
exports.CapacitorAppSdk = CapacitorAppSdk;
var getCapacitorDeviceOS = function () { return __awaiter(void 0, void 0, void 0, function () {
    var info;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, device_1.Device.getInfo()];
            case 1:
                info = _a.sent();
                return [2 /*return*/, info.platform];
        }
    });
}); };
exports.getCapacitorDeviceOS = getCapacitorDeviceOS;
var CapacitorConnectionService = /** @class */ (function () {
    function CapacitorConnectionService() {
        var _this = this;
        this.isOnline = (0, atom_1.atom)(true);
        network_1.Network.getStatus().then(function (v) { return _this.isOnline.next(v.connected); });
        network_1.Network.addListener('networkStatusChange', function (status) {
            _this.isOnline.next(status.connected);
        });
    }
    CapacitorConnectionService.prototype.retry = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, network_1.Network.getStatus()];
                    case 1:
                        status = _a.sent();
                        this.isOnline.next(status.connected);
                        return [2 /*return*/, status.connected];
                }
            });
        });
    };
    return CapacitorConnectionService;
}());
var CapacitorKeyboardService = /** @class */ (function () {
    function CapacitorKeyboardService() {
        var _this = this;
        this.didShow = new atom_1.Subject();
        this.willShow = new atom_1.Subject();
        this.didHide = new atom_1.Subject();
        this.willHide = new atom_1.Subject();
        keyboard_1.Keyboard.addListener('keyboardWillShow', function (info) { return _this.willShow.next(info); });
        keyboard_1.Keyboard.addListener('keyboardDidShow', function (info) { return _this.didShow.next(info); });
        keyboard_1.Keyboard.addListener('keyboardWillHide', function () { return _this.willHide.next(); });
        keyboard_1.Keyboard.addListener('keyboardDidHide', function () { return _this.didHide.next(); });
    }
    return CapacitorKeyboardService;
}());
var CapacitorUserIdentityService = /** @class */ (function (_super) {
    __extends(CapacitorUserIdentityService, _super);
    function CapacitorUserIdentityService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CapacitorUserIdentityService.prototype.getFirebaseUserId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var device;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, device_1.Device.getId()];
                    case 1:
                        device = _a.sent();
                        return [2 /*return*/, device.identifier];
                }
            });
        });
    };
    return CapacitorUserIdentityService;
}(user_identity_1.UserIdentityService));
exports.CapacitorUserIdentityService = CapacitorUserIdentityService;
