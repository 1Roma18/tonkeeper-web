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
exports.ExtensionAppSdk = exports.extensionType = void 0;
var AppSdk_1 = require("@tonkeeper/core/dist/AppSdk");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
var package_json_1 = __importDefault(require("../../package.json"));
var storage_1 = require("./storage");
var utils_1 = require("./utils");
var common_1 = require("@tonkeeper/core/dist/utils/common");
var atom_1 = require("@tonkeeper/core/dist/entries/atom");
var routes_1 = require("@tonkeeper/uikit/dist/libs/routes");
var wallet_1 = require("@tonkeeper/core/dist/entries/wallet");
var CustomConfirmControlled_1 = require("@tonkeeper/uikit/dist/components/modals/CustomConfirmControlled");
exports.extensionType = process.env.REACT_APP_EXTENSION_TYPE;
var ExtensionAppSdk = /** @class */ (function (_super) {
    __extends(ExtensionAppSdk, _super);
    function ExtensionAppSdk() {
        var _this = this;
        var _a;
        _this = _super.call(this, new storage_1.ExtensionStorage()) || this;
        _this.copyToClipboard = function (value, notification) {
            (0, copy_to_clipboard_1["default"])(value);
            _this.topMessage(notification);
        };
        _this.openPage = function (url) {
            return new Promise(function (resolve, reject) {
                if (!(0, common_1.isValidUrlProtocol)(url, _this.authorizedOpenUrlProtocols)) {
                    reject('Invalid url');
                }
                webextension_polyfill_1["default"].tabs.create({ url: url }).then(function (_) {
                    var error = (0, utils_1.checkForError)();
                    if (error) {
                        return reject(error);
                    }
                    return resolve();
                });
            });
        };
        _this.authorizedOpenUrlProtocols = ['http:', 'https:', 'tg:', 'mailto:'];
        _this.disableScroll = function () { return null; };
        _this.enableScroll = function () { return null; };
        _this.getScrollbarWidth = function () { return 0; };
        _this.getKeyboardHeight = function () { return 0; };
        _this.isIOs = function () { return false; };
        _this.isStandalone = function () { return false; };
        _this.requestExtensionPermission = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(exports.extensionType === 'FireFox')) return [3 /*break*/, 2];
                        return [4 /*yield*/, webextension_polyfill_1["default"].permissions.request({ origins: ['<all_urls>'] })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.version = (_a = package_json_1["default"].version) !== null && _a !== void 0 ? _a : 'Unknown';
        _this.targetEnv = 'extension';
        _this.storeUrl = process.env.REACT_APP_STORE_URL;
        _this.linksInterceptorAvailable = true;
        _this.ledgerConnectionPage = LedgerConnectionPageManage.create();
        _this.addWalletPage = new AddWalletPageManage();
        _this.confirm = CustomConfirmControlled_1.customConfirm;
        return _this;
    }
    return ExtensionAppSdk;
}(AppSdk_1.BaseApp));
exports.ExtensionAppSdk = ExtensionAppSdk;
var AddWalletPageManage = /** @class */ (function () {
    function AddWalletPageManage() {
        this.addWalletQuery = 'add_wallet';
    }
    Object.defineProperty(AddWalletPageManage.prototype, "selectedMethod", {
        get: function () {
            var hash = window.location.hash;
            var urlParams = new URLSearchParams(hash.substring(1));
            var query = urlParams.get(this.addWalletQuery);
            if (query && wallet_1.addWalletMethod.includes(query)) {
                return query;
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddWalletPageManage.prototype, "isOpenedAsSeparateTab", {
        get: function () {
            return !!this.selectedMethod;
        },
        enumerable: false,
        configurable: true
    });
    AddWalletPageManage.prototype.getAutoMountMethod = function () {
        return this.selectedMethod;
    };
    AddWalletPageManage.prototype.open = function (selectedMethod) {
        return __awaiter(this, void 0, void 0, function () {
            var tab, tabWindow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isInCustomPopup || this.isOpenedAsSeparateTab) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, webextension_polyfill_1["default"].tabs.create({
                                url: "index.html#?".concat(this.addWalletQuery, "=").concat(selectedMethod),
                                active: true
                            })];
                    case 1:
                        tab = _a.sent();
                        return [4 /*yield*/, webextension_polyfill_1["default"].windows.get(tab.windowId)];
                    case 2:
                        tabWindow = _a.sent();
                        return [4 /*yield*/, webextension_polyfill_1["default"].windows.update(tabWindow.id, { focused: true })];
                    case 3:
                        _a.sent();
                        window.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddWalletPageManage.prototype.close = function () {
        if (this.isOpenedAsSeparateTab) {
            window.close();
        }
    };
    return AddWalletPageManage;
}());
var LedgerConnectionPageManage = /** @class */ (function () {
    function LedgerConnectionPageManage() {
        var _this = this;
        this.tabId = (0, atom_1.atom)(undefined);
        this.isOpened = (0, atom_1.mapAtom)(this.tabId, function (windowId) { return !!windowId; });
        this.handleTabClose = function (closedTabId) { return __awaiter(_this, void 0, void 0, function () {
            var popup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(closedTabId === this.tabId.value)) return [3 /*break*/, 3];
                        this.tabId.next(undefined);
                        return [4 /*yield*/, webextension_polyfill_1["default"].windows.getCurrent()];
                    case 1:
                        popup = _a.sent();
                        return [4 /*yield*/, webextension_polyfill_1["default"].windows.update(popup.id, { focused: true })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        webextension_polyfill_1["default"].tabs.onRemoved.addListener(this.handleTabClose);
    }
    LedgerConnectionPageManage.create = function () {
        var hash = window.location.hash.slice(1).split('?')[0];
        if (hash !== routes_1.AppRoute.connectLedger) {
            return new LedgerConnectionPageManage();
        }
        return undefined;
    };
    LedgerConnectionPageManage.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tab, tabWindow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.close()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, webextension_polyfill_1["default"].tabs.create({
                                url: "index.html#".concat(routes_1.AppRoute.connectLedger),
                                active: true
                            })];
                    case 2:
                        tab = _a.sent();
                        this.tabId.next(tab.id);
                        return [4 /*yield*/, webextension_polyfill_1["default"].windows.get(tab.windowId)];
                    case 3:
                        tabWindow = _a.sent();
                        return [4 /*yield*/, webextension_polyfill_1["default"].windows.update(tabWindow.id, { focused: true })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LedgerConnectionPageManage.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(this.tabId.value !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, webextension_polyfill_1["default"].tabs.remove(this.tabId.value)];
                    case 1:
                        _a.sent();
                        this.tabId.next(undefined);
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return LedgerConnectionPageManage;
}());
