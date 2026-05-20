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
exports.CapacitorDappBrowser = void 0;
var core_1 = require("@capacitor/core");
var atom_1 = require("@tonkeeper/core/dist/entries/atom");
var url_1 = require("@tonkeeper/core/dist/utils/url");
var DappBrowserPlugin = (0, core_1.registerPlugin)('DappBrowser', {
    web: function () {
        return {
            open: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, Promise.resolve({
                                title: 'Example tab 1',
                                iconUrl: 'https://capacitorjs.com/docs/img/meta/favicon.png'
                            })];
                    });
                });
            },
            hide: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, Promise.resolve()];
                    });
                });
            },
            show: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, Promise.resolve()];
                    });
                });
            },
            close: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, Promise.resolve()];
                    });
                });
            }
        };
    }
});
var DappBrowser = /** @class */ (function () {
    function DappBrowser() {
        var _this = this;
        this.requestsHandlers = new Map();
        this.tabChange = (0, atom_1.subject)();
        this.liveTabs = [];
        this.mainWindowFocusController = new MainWindowFocusController(function (focus) {
            return DappBrowserPlugin.setIsMainViewInFocus({ focus: focus });
        });
        DappBrowserPlugin.addListener('browserMessageReceived', function (data) { return __awaiter(_this, void 0, void 0, function () {
            var parsed, handler, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parsed = JSON.parse(data.payload);
                        handler = this.requestsHandlers.get(parsed.method);
                        if (!handler) {
                            console.error('No handler for method', parsed.method);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, handler(parsed.params, {
                                webViewId: data.webViewId,
                                webViewOrigin: data.webViewOrigin
                            })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, DappBrowserPlugin.sendToBrowser({
                                webViewId: data.webViewId,
                                queryId: data.queryId,
                                payload: JSON.stringify(result)
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        DappBrowserPlugin.addListener('browserUrlChanged', function (data) { return __awaiter(_this, void 0, void 0, function () {
            var updatedTab, tabToChange;
            return __generator(this, function (_a) {
                updatedTab = {
                    id: data.webViewId,
                    url: data.url,
                    title: data.title,
                    iconUrl: data.iconUrl,
                    canGoBack: data.canGoBack,
                    isLive: true
                };
                this.tabChange.next(updatedTab);
                tabToChange = this.liveTabs.findIndex(function (t) { return t.id === data.webViewId; });
                if (tabToChange !== -1) {
                    this.liveTabs[tabToChange] = updatedTab;
                }
                return [2 /*return*/];
            });
        }); });
        DappBrowserPlugin.addListener('browserTabOpened', function (data) { return __awaiter(_this, void 0, void 0, function () {
            var updatedTab, tabToChange;
            return __generator(this, function (_a) {
                updatedTab = {
                    id: data.webViewId,
                    url: data.url,
                    title: data.title,
                    iconUrl: data.iconUrl,
                    isLive: true,
                    canGoBack: false
                };
                this.tabChange.next(updatedTab);
                tabToChange = this.liveTabs.findIndex(function (t) { return t.id === data.webViewId; });
                if (tabToChange !== -1) {
                    this.liveTabs[tabToChange] = updatedTab;
                }
                else {
                    this.liveTabs.push(updatedTab);
                }
                return [2 /*return*/];
            });
        }); });
        DappBrowserPlugin.setOffset({ top: 36, bottom: 98 });
    }
    DappBrowser.prototype.close = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = Array.isArray(id) ? id : [id];
                        return [4 /*yield*/, DappBrowserPlugin.close({ ids: ids })];
                    case 1:
                        _a.sent();
                        this.liveTabs = this.liveTabs.filter(function (t) { return !ids.includes(t.id); });
                        return [2 /*return*/];
                }
            });
        });
    };
    DappBrowser.prototype.hide = function (id) {
        return DappBrowserPlugin.hide({ id: id });
    };
    DappBrowser.prototype.open = function (url, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var id, metadata, openedTab;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = (_a = options.id) !== null && _a !== void 0 ? _a : Date.now().toString();
                        return [4 /*yield*/, DappBrowserPlugin.open({
                                url: url,
                                id: id
                            })];
                    case 1:
                        metadata = _b.sent();
                        openedTab = {
                            id: id,
                            title: metadata.title,
                            iconUrl: metadata.iconUrl,
                            url: url,
                            isLive: true,
                            canGoBack: false
                        };
                        this.liveTabs.push(openedTab);
                        return [2 /*return*/, openedTab];
                }
            });
        });
    };
    DappBrowser.prototype.emitEvent = function (webViewId, payload) {
        return DappBrowserPlugin.sendToBrowser({
            webViewId: webViewId,
            payload: payload
        });
    };
    DappBrowser.prototype.setRequestsHandler = function (method, handler) {
        this.requestsHandlers.set(method, handler);
    };
    DappBrowser.prototype.setIsMainViewInFocus = function (element, focus) {
        if (focus) {
            return this.mainWindowFocusController.focusMainWindowForElement(element);
        }
        else {
            return this.mainWindowFocusController.unfocusMainWindowForElement(element);
        }
    };
    DappBrowser.prototype.reload = function (selector) {
        var ids;
        if ('id' in selector) {
            ids = [selector.id];
        }
        else if ('ids' in selector) {
            ids = selector.ids;
        }
        else {
            ids = this.liveTabs
                .filter(function (t) { return (0, url_1.eqOrigins)(selector.origin, (0, url_1.originFromUrl)(t.url)); })
                .map(function (t) { return t.id; });
        }
        if (!ids.length) {
            return Promise.resolve();
        }
        return DappBrowserPlugin.reload({ ids: ids });
    };
    DappBrowser.prototype.goBack = function (id) {
        return DappBrowserPlugin.goBack({ id: id });
    };
    DappBrowser.prototype.openedOriginIds = function (origin) {
        return this.liveTabs.filter(function (t) { return (0, url_1.eqOrigins)(origin, (0, url_1.originFromUrl)(t.url)); }).map(function (t) { return t.id; });
    };
    return DappBrowser;
}());
var focusableElements = [
    'wallet-nav',
    'aside-nav',
    'tab-header-dd',
    'tc-connect',
    'tc-action'
];
var MainWindowFocusController = /** @class */ (function () {
    function MainWindowFocusController(setMainWindowFocus) {
        this.setMainWindowFocus = setMainWindowFocus;
        this.focusedElements = new Set();
    }
    MainWindowFocusController.prototype.focusMainWindowForElement = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.focusedElements.add(element);
                return [2 /*return*/, this.setMainWindowFocus(this.focusedElements.size > 0)];
            });
        });
    };
    MainWindowFocusController.prototype.unfocusMainWindowForElement = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.focusedElements["delete"](element);
                return [2 /*return*/, this.setMainWindowFocus(this.focusedElements.size > 0)];
            });
        });
    };
    return MainWindowFocusController;
}());
exports.CapacitorDappBrowser = new DappBrowser();
