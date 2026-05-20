"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.handleBackgroundMessage = void 0;
var electron_1 = require("electron");
var keytar_1 = __importDefault(require("keytar"));
var storageService_1 = require("./storageService");
var cookie_1 = require("./cookie");
var sseEvetns_1 = require("./sseEvetns");
var common_1 = require("@tonkeeper/core/dist/utils/common");
var electron = __importStar(require("electron"));
var service = 'tonkeeper.com';
var authorizedOpenUrlProtocols = ['http:', 'https:', 'tg:', 'mailto:'];
// eslint-disable-next-line complexity
var handleBackgroundMessage = function (window, message) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, result, credentials, failures, _i, credentials_1, account, deleted, error_1, locale;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = message.king;
                switch (_a) {
                    case 'storage-set': return [3 /*break*/, 1];
                    case 'storage-get': return [3 /*break*/, 2];
                    case 'storage-set-batch': return [3 /*break*/, 3];
                    case 'storage-delete': return [3 /*break*/, 4];
                    case 'storage-clear': return [3 /*break*/, 5];
                    case 'open-page': return [3 /*break*/, 6];
                    case 'set-keychain': return [3 /*break*/, 7];
                    case 'get-keychain': return [3 /*break*/, 9];
                    case 'remove-keychain': return [3 /*break*/, 11];
                    case 'clear-keychain': return [3 /*break*/, 13];
                    case 'reconnect': return [3 /*break*/, 21];
                    case 'ton-connect-send-disconnect': return [3 /*break*/, 23];
                    case 'can-prompt-touch-id': return [3 /*break*/, 25];
                    case 'prompt-touch-id': return [3 /*break*/, 26];
                    case 'get-preferred-system-languages': return [3 /*break*/, 27];
                    case 'clean-cookie': return [3 /*break*/, 28];
                    case 'get-device-country': return [3 /*break*/, 29];
                    case 'show-confirm-dialog': return [3 /*break*/, 30];
                }
                return [3 /*break*/, 31];
            case 1: return [2 /*return*/, storageService_1.mainStorage.set(message.key, message.value)];
            case 2: return [2 /*return*/, storageService_1.mainStorage.get(message.key)];
            case 3: return [2 /*return*/, storageService_1.mainStorage.setBatch(message.value)];
            case 4: return [2 /*return*/, storageService_1.mainStorage["delete"](message.key)];
            case 5: return [2 /*return*/, storageService_1.mainStorage.clear()];
            case 6:
                if (!(0, common_1.isValidUrlProtocol)(message.url, authorizedOpenUrlProtocols)) {
                    console.error('Unacceptable url protocol', message.url);
                    return [2 /*return*/];
                }
                return [2 /*return*/, electron_1.shell.openExternal(message.url)];
            case 7:
                if (message.mnemonic.startsWith('../') || message.mnemonic.startsWith('./')) {
                    console.error('Unacceptable value to store in keychain');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, keytar_1["default"].setPassword(service, "Wallet-".concat(message.publicKey), message.mnemonic)];
            case 8: return [2 /*return*/, _c.sent()];
            case 9: return [4 /*yield*/, keytar_1["default"].getPassword(service, "Wallet-".concat(message.publicKey))];
            case 10: return [2 /*return*/, _c.sent()];
            case 11: return [4 /*yield*/, keytar_1["default"].deletePassword(service, "Wallet-".concat(message.publicKey))];
            case 12:
                result = _c.sent();
                console.info("Deleted password for account \"".concat(message.publicKey, "\": Success"));
                return [2 /*return*/, result];
            case 13: return [4 /*yield*/, keytar_1["default"].findCredentials(service)];
            case 14:
                credentials = _c.sent();
                if (credentials.length === 0) {
                    return [2 /*return*/];
                }
                failures = 0;
                _i = 0, credentials_1 = credentials;
                _c.label = 15;
            case 15:
                if (!(_i < credentials_1.length)) return [3 /*break*/, 20];
                account = credentials_1[_i].account;
                _c.label = 16;
            case 16:
                _c.trys.push([16, 18, , 19]);
                return [4 /*yield*/, keytar_1["default"].deletePassword(service, account)];
            case 17:
                deleted = _c.sent();
                if (deleted) {
                    console.info("Deleted password for account \"".concat(account, "\": Success"));
                }
                else {
                    failures = failures + 1;
                    console.info("Failed to delete password for account \"".concat(account, "\": Password not found"));
                }
                return [3 /*break*/, 19];
            case 18:
                error_1 = _c.sent();
                failures = failures + 1;
                console.error("Failed to delete password for account \"".concat(account, "\": ").concat(error_1.message));
                return [3 /*break*/, 19];
            case 19:
                _i++;
                return [3 /*break*/, 15];
            case 20:
                if (failures > 0) {
                    throw new Error('Some passwords could not be deleted. Check logs for details.');
                }
                return [2 /*return*/];
            case 21: return [4 /*yield*/, sseEvetns_1.tonConnectSSE.reconnect()];
            case 22: return [2 /*return*/, _c.sent()];
            case 23: return [4 /*yield*/, sseEvetns_1.tonConnectSSE.sendDisconnect(message.connection)];
            case 24: return [2 /*return*/, _c.sent()];
            case 25:
                try {
                    return [2 /*return*/, !!((_b = electron_1.systemPreferences === null || electron_1.systemPreferences === void 0 ? void 0 : electron_1.systemPreferences.canPromptTouchID) === null || _b === void 0 ? void 0 : _b.call(electron_1.systemPreferences))];
                }
                catch (e) {
                    console.error(e);
                    return [2 /*return*/, false];
                }
                _c.label = 26;
            case 26: return [2 /*return*/, electron_1.systemPreferences.promptTouchID(message.reason)];
            case 27: return [2 /*return*/, electron_1.app.getPreferredSystemLanguages()];
            case 28:
                {
                    return [2 /*return*/, cookie_1.cookieJar.removeAllCookies()];
                }
                _c.label = 29;
            case 29:
                {
                    locale = electron_1.app.getLocale();
                    return [2 /*return*/, locale.replaceAll('_', '-').split('-')[0] || null];
                }
                _c.label = 30;
            case 30:
                {
                    return [2 /*return*/, electron.dialog.showMessageBoxSync(window, message.options)];
                }
                _c.label = 31;
            case 31: throw new Error("Unknown message: ".concat(JSON.stringify(message)));
        }
    });
}); };
exports.handleBackgroundMessage = handleBackgroundMessage;
