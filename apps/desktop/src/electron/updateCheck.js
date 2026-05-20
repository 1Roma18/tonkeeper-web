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
exports._resetForTesting = exports.startUpdateCheck = exports.checkOnce = exports.evaluateRelease = exports.isNewer = void 0;
var electron_1 = require("electron");
var main_1 = __importDefault(require("electron-log/main"));
var RELEASES_URL = 'https://api.github.com/repos/tonkeeper/tonkeeper-web/releases/latest';
var INITIAL_DELAY_MS = 15000;
var CHECK_INTERVAL_MS = 6 * 60 * 60 * 1000;
var lastNotified;
var timer;
function isNewer(latest, current) {
    var _a, _b;
    var parse = function (v) {
        return v
            .split('-')[0]
            .split('.')
            .map(function (n) { return parseInt(n) || 0; });
    };
    var a = parse(latest);
    var b = parse(current);
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        var x = (_a = a[i]) !== null && _a !== void 0 ? _a : 0;
        var y = (_b = b[i]) !== null && _b !== void 0 ? _b : 0;
        if (x !== y)
            return x > y;
    }
    return false;
}
exports.isNewer = isNewer;
function evaluateRelease(release, currentVersion, previouslyNotified) {
    var _a;
    if (!release || !release.tag_name || release.draft || release.prerelease)
        return undefined;
    var latest = release.tag_name.replace(/^v/, '');
    if (!isNewer(latest, currentVersion))
        return undefined;
    if (previouslyNotified === latest)
        return undefined;
    return {
        version: latest,
        url: (_a = release.html_url) !== null && _a !== void 0 ? _a : 'https://github.com/tonkeeper/tonkeeper-web/releases/latest'
    };
}
exports.evaluateRelease = evaluateRelease;
function checkOnce() {
    return __awaiter(this, void 0, void 0, function () {
        var res, release, update, _i, _a, win, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(RELEASES_URL, {
                            headers: {
                                'User-Agent': "Tonkeeper/".concat(electron_1.app.getVersion()),
                                Accept: 'application/vnd.github+json'
                            }
                        })];
                case 1:
                    res = _b.sent();
                    if (!res.ok) {
                        main_1["default"].warn("update check: HTTP ".concat(res.status));
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, res.json()];
                case 2:
                    release = (_b.sent());
                    update = evaluateRelease(release, electron_1.app.getVersion(), lastNotified);
                    if (!update)
                        return [2 /*return*/];
                    lastNotified = update.version;
                    for (_i = 0, _a = electron_1.BrowserWindow.getAllWindows(); _i < _a.length; _i++) {
                        win = _a[_i];
                        win.webContents.send('update-available', update);
                    }
                    main_1["default"].info("update available: ".concat(update.version));
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _b.sent();
                    main_1["default"].warn('update check failed', e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.checkOnce = checkOnce;
function startUpdateCheck() {
    if (timer)
        return;
    // Auto-update notifications elsewhere: macOS via Squirrel.Mac (update-electron-app),
    // Windows via Squirrel.Windows. Linux has no built-in updater, so the banner is its
    // only update signal.
    if (process.platform !== 'linux')
        return;
    setTimeout(checkOnce, INITIAL_DELAY_MS);
    timer = setInterval(checkOnce, CHECK_INTERVAL_MS);
}
exports.startUpdateCheck = startUpdateCheck;
function _resetForTesting() {
    lastNotified = undefined;
    if (timer) {
        clearInterval(timer);
        timer = undefined;
    }
}
exports._resetForTesting = _resetForTesting;
