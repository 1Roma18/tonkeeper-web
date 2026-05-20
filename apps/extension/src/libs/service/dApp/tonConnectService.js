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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.tonConnectSignData = exports.tonConnectTransaction = exports.isDappConnectedToExtension = exports.tonConnectRequest = exports.tonConnectDisconnect = exports.tonConnectReConnect = exports.getExtensionDeviceInfo = void 0;
var tonConnect_1 = require("@tonkeeper/core/dist/entries/tonConnect");
var connectService_1 = require("@tonkeeper/core/dist/service/tonConnect/connectService");
var common_1 = require("@tonkeeper/core/dist/utils/common");
var storage_1 = require("../../storage");
var utils_1 = require("./utils");
var exception_1 = require("@tonkeeper/core/dist/entries/exception");
var accountsStorage_1 = require("@tonkeeper/core/dist/service/accountsStorage");
var webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
var custom_popup_manager_1 = require("../../background/custom-popup-manager");
var extension_1 = __importDefault(require("../extension"));
var backgroundPopUpService_1 = require("../backgroundPopUpService");
var storage = new storage_1.ExtensionStorage();
var tonReConnectResponse = function (origin) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, items, maxMessages;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, connectService_1.tonInjectedReConnectRequest)(storage, origin)];
            case 1:
                _a = _b.sent(), items = _a.items, maxMessages = _a.maxMessages;
                return [2 /*return*/, {
                        items: items,
                        device: getExtensionDeviceInfo({ maxMessages: maxMessages })
                    }];
        }
    });
}); };
function getExtensionDeviceInfo(options) {
    var _a;
    var version = webextension_polyfill_1["default"].runtime.getManifest().version;
    return (0, connectService_1.getDeviceInfo)((0, connectService_1.getTonConnectPlatform)('extension'), version, (_a = options === null || options === void 0 ? void 0 : options.maxMessages) !== null && _a !== void 0 ? _a : 255, connectService_1.tonConnectTonkeeperAppName);
}
exports.getExtensionDeviceInfo = getExtensionDeviceInfo;
var tonConnectReConnect = function (origin) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, tonReConnectResponse(origin)];
    });
}); };
exports.tonConnectReConnect = tonConnectReConnect;
var tonConnectDisconnect = function (_, webViewUrl) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, connectService_1.tonInjectedDisconnectRequest)({ storage: storage, webViewUrl: webViewUrl })];
}); }); };
exports.tonConnectDisconnect = tonConnectDisconnect;
var connectWithNotification = function (id, origin, data, logo) { return __awaiter(void 0, void 0, void 0, function () {
    var closedPopupHandle;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, custom_popup_manager_1.customPopupManager.openPopup()];
            case 1:
                closedPopupHandle = _a.sent();
                (0, backgroundPopUpService_1.showNotificationInPopup)({
                    kind: 'tonConnectRequest',
                    id: id,
                    logo: logo,
                    origin: origin,
                    data: data
                });
                _a.label = 2;
            case 2:
                _a.trys.push([2, , 4, 6]);
                return [4 /*yield*/, (0, utils_1.awaitPopupResponse)(id)];
            case 3: return [2 /*return*/, _a.sent()];
            case 4: return [4 /*yield*/, closedPopupHandle()];
            case 5:
                _a.sent();
                return [7 /*endfinally*/];
            case 6: return [2 /*return*/];
        }
    });
}); };
var tonConnectRequest = function (id, origin, data) { return __awaiter(void 0, void 0, void 0, function () {
    var logo, isTonProof, reconnect;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, extension_1["default"].getActiveTabLogo()];
            case 1:
                logo = _a.sent();
                isTonProof = data.items.some(function (item) { return item.name === 'ton_proof'; });
                if (isTonProof) {
                    return [2 /*return*/, connectWithNotification(id, origin, data, logo)];
                }
                return [4 /*yield*/, tonReConnectResponse(origin)["catch"](function () { return null; })];
            case 2:
                reconnect = _a.sent();
                if (reconnect) {
                    return [2 /*return*/, reconnect];
                }
                else {
                    return [2 /*return*/, connectWithNotification(id, origin, data, logo)];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.tonConnectRequest = tonConnectRequest;
var isDappConnectedToExtension = function (origin) { return __awaiter(void 0, void 0, void 0, function () {
    var connection;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, connectService_1.getInjectedDappConnection)(storage, origin)];
            case 1:
                connection = _a.sent();
                return [2 /*return*/, !!connection];
        }
    });
}); };
exports.isDappConnectedToExtension = isDappConnectedToExtension;
var tonConnectTransaction = function (id, origin, data, account) { return __awaiter(void 0, void 0, void 0, function () {
    var connection, e_1, closedPopupHandle, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, connectService_1.getInjectedDappConnection)(storage, origin)];
            case 1:
                connection = _c.sent();
                if (!connection) {
                    throw new exception_1.TonConnectError("dApp don't have an access to wallet", tonConnect_1.CONNECT_EVENT_ERROR_CODES.BAD_REQUEST_ERROR);
                }
                if (!account) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, connectService_1.checkTonConnectFromAndNetwork)(storage, connection.wallet, {
                        from: account.address,
                        network: account.network
                    })];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                _c.trys.push([3, 5, , 6]);
                return [4 /*yield*/, (0, accountsStorage_1.accountsStorage)(storage).setActiveAccountAndWalletByWalletId(connection.wallet.id)];
            case 4:
                _c.sent();
                return [3 /*break*/, 6];
            case 5:
                e_1 = _c.sent();
                console.error(e_1);
                throw new exception_1.TonConnectError('Requested wallet not found', tonConnect_1.CONNECT_EVENT_ERROR_CODES.BAD_REQUEST_ERROR);
            case 6: return [4 /*yield*/, (0, common_1.delay)(200)];
            case 7:
                _c.sent();
                return [4 /*yield*/, custom_popup_manager_1.customPopupManager.openPopup()];
            case 8:
                closedPopupHandle = _c.sent();
                _a = backgroundPopUpService_1.showNotificationInPopup;
                _b = {
                    kind: 'tonConnectSend',
                    id: id
                };
                return [4 /*yield*/, extension_1["default"].getActiveTabLogo()];
            case 9:
                _a.apply(void 0, [(_b.logo = _c.sent(),
                        _b.origin = origin,
                        _b.data = data,
                        _b.manifest = connection.connection.manifest,
                        _b)]);
                _c.label = 10;
            case 10:
                _c.trys.push([10, , 12, 14]);
                return [4 /*yield*/, (0, utils_1.awaitPopupResponse)(id)];
            case 11: return [2 /*return*/, _c.sent()];
            case 12: return [4 /*yield*/, closedPopupHandle()];
            case 13:
                _c.sent();
                return [7 /*endfinally*/];
            case 14: return [2 /*return*/];
        }
    });
}); };
exports.tonConnectTransaction = tonConnectTransaction;
var tonConnectSignData = function (id, origin, data) { return __awaiter(void 0, void 0, void 0, function () {
    var connection, accounts, accToActivate, closedPopupHandle, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, connectService_1.getInjectedDappConnection)(storage, origin)];
            case 1:
                connection = _c.sent();
                if (!connection) {
                    throw new exception_1.TonConnectError("dApp don't have an access to wallet", tonConnect_1.SIGN_DATA_ERROR_CODES.BAD_REQUEST_ERROR);
                }
                return [4 /*yield*/, (0, accountsStorage_1.accountsStorage)(storage).getAccounts()];
            case 2:
                accounts = _c.sent();
                accToActivate = accounts.find(function (a) {
                    return a.allTonWallets.some(function (w) { return w.id === connection.wallet.rawAddress; });
                });
                if (!accToActivate) return [3 /*break*/, 5];
                accToActivate.setActiveTonWallet(connection.wallet.rawAddress);
                return [4 /*yield*/, (0, accountsStorage_1.accountsStorage)(storage).updateAccountInState(accToActivate)];
            case 3:
                _c.sent();
                return [4 /*yield*/, (0, accountsStorage_1.accountsStorage)(storage).setActiveAccountId(accToActivate.id)];
            case 4:
                _c.sent();
                _c.label = 5;
            case 5: return [4 /*yield*/, (0, common_1.delay)(200)];
            case 6:
                _c.sent();
                return [4 /*yield*/, custom_popup_manager_1.customPopupManager.openPopup()];
            case 7:
                closedPopupHandle = _c.sent();
                _a = backgroundPopUpService_1.showNotificationInPopup;
                _b = {
                    kind: 'tonConnectSign',
                    id: id
                };
                return [4 /*yield*/, extension_1["default"].getActiveTabLogo()];
            case 8:
                _a.apply(void 0, [(_b.logo = _c.sent(),
                        _b.origin = origin,
                        _b.data = data,
                        _b.manifest = connection.connection.manifest,
                        _b)]);
                _c.label = 9;
            case 9:
                _c.trys.push([9, , 11, 13]);
                return [4 /*yield*/, (0, utils_1.awaitPopupResponse)(id)];
            case 10: return [2 /*return*/, _c.sent()];
            case 11: return [4 /*yield*/, closedPopupHandle()];
            case 12:
                _c.sent();
                return [7 /*endfinally*/];
            case 13: return [2 /*return*/];
        }
    });
}); };
exports.tonConnectSignData = tonConnectSignData;
