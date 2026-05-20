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
exports.MainWindow = void 0;
var common_1 = require("@tonkeeper/core/dist/utils/common");
var electron_1 = require("electron");
var electron_is_dev_1 = __importDefault(require("electron-is-dev"));
var path_1 = __importDefault(require("path"));
var tough_cookie_1 = require("tough-cookie");
var background_1 = require("../electron/background");
var menu_1 = require("./menu");
var cookie_1 = require("./cookie");
var autoUpdate_1 = __importDefault(require("./autoUpdate"));
var MainWindow = /** @class */ (function () {
    function MainWindow() {
    }
    MainWindow.openMainWindow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var icon, menu;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.mainWindow !== undefined && this.mainWindow !== null)
                            return [2 /*return*/, this.mainWindow];
                        icon = (function () {
                            switch (process.platform) {
                                case 'darwin':
                                    return path_1["default"].join(process.cwd(), 'public', 'icon.icns');
                                case 'linux':
                                    return path_1["default"].join(__dirname, '../../../', 'public', 'icon.png');
                                case 'win32':
                                    return path_1["default"].join(process.cwd(), 'public', 'icon.ico');
                                default:
                                    return '';
                            }
                        })();
                        // Create the browser window.
                        this.mainWindow = new electron_1.BrowserWindow({
                            icon: icon,
                            width: 1150,
                            minWidth: 1100,
                            height: 850,
                            minHeight: 760,
                            webPreferences: {
                                preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
                                nodeIntegration: false,
                                contextIsolation: true,
                                sandbox: true
                            },
                            resizable: true
                        });
                        menu = electron_1.Menu.buildFromTemplate((0, menu_1.createAppMenu)(new autoUpdate_1["default"]()));
                        electron_1.Menu.setApplicationMenu(menu);
                        // and load the index.html of the app.
                        this.mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
                        if (electron_is_dev_1["default"]) {
                            // Open the DevTools.
                            this.mainWindow.webContents.openDevTools();
                        }
                        this.mainWindow.on('closed', function () {
                            electron_1.ipcMain.removeHandler('message');
                            _this.mainWindow = undefined;
                        });
                        electron_1.ipcMain.handle('message', function (event, message) { return __awaiter(_this, void 0, void 0, function () {
                            var e_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, (0, background_1.handleBackgroundMessage)(this.mainWindow, message)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                    case 2:
                                        e_1 = _a.sent();
                                        return [2 /*return*/, e_1];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        this.mainWindow.webContents.session.webRequest.onBeforeSendHeaders({ urls: [] }, function (details, callback) {
                            cookie_1.cookieJar.getCookies(details.url).then(function (cookies) {
                                var result = cookies
                                    .map(function (cookie) { return "".concat(cookie.key, "=").concat(cookie.value); })
                                    .join('; ');
                                /* patch tg auth headers  */
                                if (details.url === 'https://oauth.telegram.org/auth/get') {
                                    details.requestHeaders.origin = 'https://wallet.tonkeeper.com';
                                    details.requestHeaders.Origin = 'https://wallet.tonkeeper.com';
                                    details.requestHeaders.referer = 'https://wallet.tonkeeper.com';
                                    details.requestHeaders.Referer = 'https://wallet.tonkeeper.com';
                                }
                                callback(__assign(__assign({}, details), { requestHeaders: __assign(__assign({}, details.requestHeaders), { cookie: result }) }));
                            });
                        });
                        this.mainWindow.webContents.session.webRequest.onHeadersReceived(function (details, callback) {
                            var _a;
                            var setCookie = (_a = details.responseHeaders['set-cookie']) !== null && _a !== void 0 ? _a : [];
                            var patchMercuryCors = details.url.startsWith('https://api.mercuryo.io');
                            var patchTonkeeperCors = /https:\/\/(\w+\.){0,2}tonkeeper.com([?/].*)?/.test(details.url);
                            var patchTgCors = details.url === 'https://oauth.telegram.org/auth/get';
                            /* patch cors  */
                            if (patchMercuryCors || patchTonkeeperCors || patchTgCors) {
                                var corsHeader = Object.keys(details.responseHeaders).find(function (k) { return k.toLowerCase() === 'access-control-allow-origin'; }) || 'access-control-allow-origin';
                                details.responseHeaders[corsHeader] = ['*'];
                            }
                            Promise.all(setCookie.map(function (cookieRaw) {
                                return cookie_1.cookieJar.setCookie(tough_cookie_1.Cookie.parse(cookieRaw), details.url);
                            }))["finally"](function () {
                                callback(details);
                            });
                        });
                        this.mainWindow.webContents.session.on('select-hid-device', function (event, details, callback) {
                            event.preventDefault();
                            if (details.deviceList.length > 0) {
                                callback(details.deviceList[0].deviceId);
                            }
                            else {
                                callback(undefined);
                            }
                        });
                        this.mainWindow.webContents.session.setDevicePermissionHandler(function (details) {
                            var allowedConnections = ['usb', 'hid'];
                            var allowedOrigins = ['file://', 'http://localhost:3000'];
                            if (allowedConnections.includes(details.deviceType) &&
                                allowedOrigins.includes(details.origin)) {
                                return true;
                            }
                        });
                        return [4 /*yield*/, (0, common_1.delay)(500)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.mainWindow];
                }
            });
        });
    };
    MainWindow.bringToFront = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(process.platform === 'win32')) return [3 /*break*/, 4];
                        if (!this.mainWindow) return [3 /*break*/, 1];
                        if (this.mainWindow.isMinimized())
                            this.mainWindow.restore();
                        return [3 /*break*/, 3];
                    case 1: 
                    // Open main windows
                    return [4 /*yield*/, this.openMainWindow()];
                    case 2:
                        // Open main windows
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.mainWindow.setAlwaysOnTop(true);
                        this.mainWindow.focus();
                        this.mainWindow.setAlwaysOnTop(false);
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.openMainWindow()];
                    case 5:
                        _a.sent();
                        this.mainWindow.show();
                        _a.label = 6;
                    case 6: return [2 /*return*/, this.mainWindow];
                }
            });
        });
    };
    MainWindow.mainWindow = undefined;
    return MainWindow;
}());
exports.MainWindow = MainWindow;
