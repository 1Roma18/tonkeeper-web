"use strict";
/**
 * The background service worker - a script with run inside browser
 * The service is responsible to manage input and output events or requests from DApps and PopUp
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
var backgroundDAppService_1 = require("./libs/service/backgroundDAppService");
var backgroundPopUpService_1 = require("./libs/service/backgroundPopUpService");
var backgroundProxyService_1 = require("./libs/service/backgroundProxyService");
var custom_popup_manager_1 = require("./libs/background/custom-popup-manager");
function getShouldOpenSystemPopup() {
    return __awaiter(this, void 0, void 0, function () {
        var tab, win, os, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, webextension_polyfill_1["default"].tabs.query({ active: true, currentWindow: true })];
                case 1:
                    tab = (_b.sent())[0];
                    win = void 0;
                    if (!(tab && tab.windowId !== undefined)) return [3 /*break*/, 3];
                    return [4 /*yield*/, webextension_polyfill_1["default"].windows.get(tab.windowId)];
                case 2:
                    win = _b.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, webextension_polyfill_1["default"].windows.getLastFocused()];
                case 4:
                    win = _b.sent();
                    _b.label = 5;
                case 5: return [4 /*yield*/, webextension_polyfill_1["default"].runtime.getPlatformInfo()];
                case 6:
                    os = (_b.sent()).os;
                    // macOS and linux browsers provide ugly behavior of custom popup when browser is opened in fullscreen mode.
                    // for these cases we open default popup
                    return [2 /*return*/, (win === null || win === void 0 ? void 0 : win.state) === 'fullscreen' && os !== 'win'];
                case 7:
                    _a = _b.sent();
                    return [2 /*return*/, false];
                case 8: return [2 /*return*/];
            }
        });
    });
}
webextension_polyfill_1["default"].runtime.onMessage.addListener(function (msg) { return __awaiter(void 0, void 0, void 0, function () {
    var openCustomPopup;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((msg === null || msg === void 0 ? void 0 : msg.type) === 'DECIDE_MODE')) return [3 /*break*/, 4];
                return [4 /*yield*/, getShouldOpenSystemPopup()];
            case 1:
                openCustomPopup = !(_a.sent());
                if (!openCustomPopup) return [3 /*break*/, 2];
                custom_popup_manager_1.customPopupManager.openPopup('icon-click');
                // default popup will receive this and execute window.close inside to close itself
                return [2 /*return*/, { willOpenCustomPopup: true }];
            case 2: 
            // default popup is already opened, we just need to close custom popup instances if any
            return [4 /*yield*/, custom_popup_manager_1.customPopupManager.closePopupOpenedByOpener('icon-click')];
            case 3:
                // default popup is already opened, we just need to close custom popup instances if any
                _a.sent();
                // default popup will receive this and proceed to render app inside
                return [2 /*return*/, { willOpenCustomPopup: false }];
            case 4: return [2 /*return*/];
        }
    });
}); });
webextension_polyfill_1["default"].runtime.onConnect.addListener(function (port) {
    if (port.name === 'TonkeeperUI') {
        /**
         * Subscribing to events from PopUp UI
         * The background script is a kind of backend with responsible
         * to processing requests and store secure data in memory store.
         */
        (0, backgroundPopUpService_1.handlePopUpConnection)(port);
    }
    if (port.name === 'TonkeeperContentScript') {
        /**
         * Subscribing to events from dApps
         * The background is responsible to be as a service or middleware,
         * it could completely handle request or open notification modal to user confirmations.
         */
        (0, backgroundDAppService_1.handleDAppConnection)(port);
    }
});
/**
 * Subscribing to update events and send it to dApps
 */
(0, backgroundDAppService_1.subscriptionDAppNotifications)();
/**
 * Set-up browser proxy and subscription to change events;
 */
(0, backgroundProxyService_1.subscriptionProxyNotifications)();
