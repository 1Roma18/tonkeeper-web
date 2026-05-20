"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.customPopupManager = exports.PopupManager = void 0;
var webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
var utils_1 = require("../utils");
var common_1 = require("@tonkeeper/core/dist/utils/common");
var storage_1 = require("../storage");
var extensionPopupStorage_1 = require("@tonkeeper/core/dist/service/extensionPopupStorage");
var PopupManager = /** @class */ (function () {
    function PopupManager() {
        var _this = this;
        this.storage = new storage_1.ExtensionStorage();
        webextension_polyfill_1["default"].windows.onRemoved.addListener(function (windowId) { return __awaiter(_this, void 0, void 0, function () {
            var openedPopup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOpenedPopup()];
                    case 1:
                        openedPopup = _a.sent();
                        if (!((openedPopup === null || openedPopup === void 0 ? void 0 : openedPopup.id) === windowId)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setOpenedPopup(null)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.syncPopup();
    }
    PopupManager.createOpenerId = function () {
        return Date.now();
    };
    PopupManager.prototype.setOpenedPopup = function (popup) {
        return (0, extensionPopupStorage_1.setOpenedPopup)(this.storage, popup);
    };
    PopupManager.prototype.getOpenedPopup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, extensionPopupStorage_1.getOpenedPopup)(this.storage)];
            });
        });
    };
    PopupManager.prototype.openPopup = function (source) {
        if (source === void 0) { source = 'programmatically'; }
        return __awaiter(this, void 0, void 0, function () {
            var opener, openedPopup, id;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.syncPopup()];
                    case 1:
                        _a.sent();
                        opener = source === 'icon-click'
                            ? 'icon-click'
                            : "programmatically-".concat(PopupManager.createOpenerId());
                        return [4 /*yield*/, this.getOpenedPopup()];
                    case 2:
                        openedPopup = _a.sent();
                        if (!(openedPopup === undefined)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.createPopup()];
                    case 3:
                        id = (_a.sent()).id;
                        return [4 /*yield*/, this.setOpenedPopup({ id: id, opener: opener })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        if (!(openedPopup.opener !== 'icon-click')) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.setOpenedPopup(__assign(__assign({}, openedPopup), { opener: opener }))];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [4 /*yield*/, this.focusPopup()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [4 /*yield*/, this.ensurePopupReady()];
                    case 10:
                        _a.sent();
                        return [2 /*return*/, function () { return _this.closePopupOpenedByOpener(opener); }];
                }
            });
        });
    };
    PopupManager.prototype.closePopupOpenedByOpener = function (opener) {
        return __awaiter(this, void 0, void 0, function () {
            var openedPopup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOpenedPopup()];
                    case 1:
                        openedPopup = _a.sent();
                        if ((openedPopup === null || openedPopup === void 0 ? void 0 : openedPopup.opener) === opener) {
                            return [2 /*return*/, this.closePopup()];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PopupManager.prototype.closePopup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var openedPopup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOpenedPopup()];
                    case 1:
                        openedPopup = _a.sent();
                        if (openedPopup === undefined) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, webextension_polyfill_1["default"].windows.remove(openedPopup.id)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.setOpenedPopup(null)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PopupManager.prototype.createPopup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var windowInfo, left, top, newWindow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, webextension_polyfill_1["default"].windows.getLastFocused()];
                    case 1:
                        windowInfo = _a.sent();
                        left = windowInfo.left + windowInfo.width - PopupManager.NOTIFICATION_WIDTH - 10;
                        top = windowInfo.top + 40;
                        return [4 /*yield*/, webextension_polyfill_1["default"].windows.create({
                                url: 'index.html',
                                type: 'popup',
                                width: PopupManager.NOTIFICATION_WIDTH,
                                height: PopupManager.NOTIFICATION_HEIGHT,
                                left: left,
                                top: top
                            })];
                    case 2:
                        newWindow = _a.sent();
                        this.rejectIfError();
                        return [2 /*return*/, newWindow];
                }
            });
        });
    };
    PopupManager.prototype.ensurePopupReady = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, common_1.delay)(200)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PopupManager.prototype.focusPopup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var openedPopup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOpenedPopup()];
                    case 1:
                        openedPopup = _a.sent();
                        if (!openedPopup) {
                            throw new Error('Popup is not opened');
                        }
                        return [4 /*yield*/, webextension_polyfill_1["default"].windows.update(openedPopup.id, { focused: true })];
                    case 2:
                        _a.sent();
                        this.rejectIfError();
                        return [2 /*return*/];
                }
            });
        });
    };
    PopupManager.prototype.syncPopup = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var popupId, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getOpenedPopup()];
                    case 1:
                        popupId = (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.id;
                        if (!(popupId !== undefined)) return [3 /*break*/, 6];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 6]);
                        return [4 /*yield*/, webextension_polyfill_1["default"].windows.get(popupId)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        e_1 = _b.sent();
                        return [4 /*yield*/, this.setOpenedPopup(null)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PopupManager.prototype.rejectIfError = function () {
        var error = (0, utils_1.checkForError)();
        if (error) {
            throw error;
        }
    };
    PopupManager.NOTIFICATION_HEIGHT = 650;
    PopupManager.NOTIFICATION_WIDTH = 430;
    return PopupManager;
}());
exports.PopupManager = PopupManager;
exports.customPopupManager = new PopupManager();
