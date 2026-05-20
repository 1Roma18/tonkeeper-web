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
exports.setProtocolHandlerOSX = exports.setProtocolHandlerWindowsLinux = exports.setDefaultProtocolClient = void 0;
var common_1 = require("@tonkeeper/core/dist/utils/common");
var electron_1 = require("electron");
var main_1 = __importDefault(require("electron-log/main"));
var mainWindow_1 = require("./mainWindow");
var setDefaultProtocolClient = function () {
    var protocols = [
        'ton',
        'tc',
        'tonkeeper',
        'tonkeeper-tc',
        'tonkeeper-pro',
        'tonkeeper-pro-tc'
    ];
    var isDefaultProtocolClient = protocols.every(function (protocol) {
        return electron_1.app.isDefaultProtocolClient(protocol);
    });
    if (!isDefaultProtocolClient) {
        protocols.forEach(function (protocol) { return electron_1.app.setAsDefaultProtocolClient(protocol); });
    }
};
exports.setDefaultProtocolClient = setDefaultProtocolClient;
/**
 * @description Create logic (WIN32 and Linux) for open url from protocol
 */
var setProtocolHandlerWindowsLinux = function () {
    // Force Single Instance Application
    var gotTheLock = electron_1.app.requestSingleInstanceLock();
    electron_1.app.on('second-instance', function (e, argv) { return __awaiter(void 0, void 0, void 0, function () {
        var window, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mainWindow_1.MainWindow.bringToFront()];
                case 1:
                    window = _a.sent();
                    url = argv.pop();
                    if (url.startsWith('--'))
                        return [2 /*return*/];
                    main_1["default"].info({ secondInsUrl: url });
                    electron_1.app.whenReady().then(function () {
                        window.webContents.send('tc', url);
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    if (gotTheLock) {
        electron_1.app.whenReady().then(function () {
            // Open main windows
            initMainWindow();
        });
    }
    else {
        electron_1.app.quit();
    }
};
exports.setProtocolHandlerWindowsLinux = setProtocolHandlerWindowsLinux;
/**
 * @description Create logic (OSX) for open url from protocol
 */
var setProtocolHandlerOSX = function () {
    electron_1.app.whenReady().then(function () {
        initMainWindow();
    });
    electron_1.app.on('open-url', function (event, url) {
        event.preventDefault();
        main_1["default"].info({ openUrl: url });
        electron_1.app.whenReady().then(function () { return __awaiter(void 0, void 0, void 0, function () {
            var window;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mainWindow_1.MainWindow.openMainWindow()];
                    case 1:
                        window = _a.sent();
                        window.show();
                        window.webContents.send('tc', url);
                        return [2 /*return*/];
                }
            });
        }); });
    });
};
exports.setProtocolHandlerOSX = setProtocolHandlerOSX;
var initMainWindow = function () { return __awaiter(void 0, void 0, void 0, function () {
    var window, url, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Open main windows
                main_1["default"].info({ initArgs: process.argv });
                return [4 /*yield*/, mainWindow_1.MainWindow.openMainWindow()];
            case 1:
                window = _a.sent();
                if (process.argv.length === 1)
                    return [2 /*return*/];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, (0, common_1.delay)(500)];
            case 3:
                _a.sent();
                url = process.argv.pop();
                if (url.startsWith('--') || url.startsWith('.'))
                    return [2 /*return*/];
                main_1["default"].info({ initUrl: url });
                if (url != null) {
                    window.webContents.send('tc', url);
                }
                return [3 /*break*/, 5];
            case 4:
                e_1 = _a.sent();
                main_1["default"].error(e_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
