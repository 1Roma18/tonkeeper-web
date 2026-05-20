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
var vitest_1 = require("vitest");
vitest_1.vi.mock('electron', function () { return ({
    app: { getVersion: vitest_1.vi.fn(function () { return '4.6.1'; }) },
    BrowserWindow: { getAllWindows: vitest_1.vi.fn(function () { return []; }) }
}); });
vitest_1.vi.mock('electron-log/main', function () { return ({
    "default": { warn: vitest_1.vi.fn(), info: vitest_1.vi.fn() }
}); });
var electron_1 = require("electron");
var main_1 = __importDefault(require("electron-log/main"));
var updateCheck_1 = require("../updateCheck");
(0, vitest_1.describe)('isNewer', function () {
    (0, vitest_1.it)('returns true when the latest version is strictly greater', function () {
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4.7.0', '4.6.1')).toBe(true);
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('5.0.0', '4.99.99')).toBe(true);
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4.6.2', '4.6.1')).toBe(true);
    });
    (0, vitest_1.it)('returns false when versions are equal', function () {
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4.6.1', '4.6.1')).toBe(false);
    });
    (0, vitest_1.it)('returns false when the latest is older', function () {
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4.5.9', '4.6.0')).toBe(false);
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('3.99.99', '4.0.0')).toBe(false);
    });
    (0, vitest_1.it)('compares minor and patch correctly when major is equal', function () {
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4.6.1', '4.5.99')).toBe(true);
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4.5.99', '4.6.0')).toBe(false);
    });
    (0, vitest_1.it)('strips pre-release suffixes before comparing', function () {
        // Pre-release suffix on the right of the dash is ignored, so these
        // compare as equal numerics and are not "newer".
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4.7.0-beta.1', '4.7.0')).toBe(false);
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4.7.0', '4.7.0-beta.1')).toBe(false);
    });
    (0, vitest_1.it)('treats missing components as zero', function () {
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4.7', '4.6.1')).toBe(true);
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4', '3.99.99')).toBe(true);
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4.6.1.1', '4.6.1')).toBe(true);
    });
    (0, vitest_1.it)('tolerates non-numeric junk by parsing as 0', function () {
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('abc', '4.6.1')).toBe(false);
        (0, vitest_1.expect)((0, updateCheck_1.isNewer)('4.6.1', 'abc')).toBe(true);
    });
});
(0, vitest_1.describe)('evaluateRelease', function () {
    var baseRelease = {
        tag_name: 'v4.7.0',
        html_url: 'https://github.com/tonkeeper/tonkeeper-web/releases/tag/v4.7.0',
        draft: false,
        prerelease: false
    };
    (0, vitest_1.it)('returns UpdateInfo for a newer stable release', function () {
        (0, vitest_1.expect)((0, updateCheck_1.evaluateRelease)(baseRelease, '4.6.1', undefined)).toEqual({
            version: '4.7.0',
            url: baseRelease.html_url
        });
    });
    (0, vitest_1.it)('strips the leading v from the tag', function () {
        var result = (0, updateCheck_1.evaluateRelease)(__assign(__assign({}, baseRelease), { tag_name: 'v10.0.0' }), '9.0.0', undefined);
        (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.version).toBe('10.0.0');
    });
    (0, vitest_1.it)('accepts tag names without a v prefix', function () {
        var result = (0, updateCheck_1.evaluateRelease)(__assign(__assign({}, baseRelease), { tag_name: '4.7.0' }), '4.6.1', undefined);
        (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.version).toBe('4.7.0');
    });
    (0, vitest_1.it)('returns undefined for draft releases', function () {
        (0, vitest_1.expect)((0, updateCheck_1.evaluateRelease)(__assign(__assign({}, baseRelease), { draft: true }), '4.6.1', undefined)).toBeUndefined();
    });
    (0, vitest_1.it)('returns undefined for pre-releases', function () {
        (0, vitest_1.expect)((0, updateCheck_1.evaluateRelease)(__assign(__assign({}, baseRelease), { prerelease: true }), '4.6.1', undefined)).toBeUndefined();
    });
    (0, vitest_1.it)('returns undefined when no tag_name is present', function () {
        (0, vitest_1.expect)((0, updateCheck_1.evaluateRelease)(__assign(__assign({}, baseRelease), { tag_name: undefined }), '4.6.1', undefined)).toBeUndefined();
    });
    (0, vitest_1.it)('returns undefined when the response is null or undefined', function () {
        (0, vitest_1.expect)((0, updateCheck_1.evaluateRelease)(null, '4.6.1', undefined)).toBeUndefined();
        (0, vitest_1.expect)((0, updateCheck_1.evaluateRelease)(undefined, '4.6.1', undefined)).toBeUndefined();
    });
    (0, vitest_1.it)('returns undefined when the release is older than the current version', function () {
        (0, vitest_1.expect)((0, updateCheck_1.evaluateRelease)(baseRelease, '4.7.0', undefined)).toBeUndefined();
        (0, vitest_1.expect)((0, updateCheck_1.evaluateRelease)(baseRelease, '4.8.0', undefined)).toBeUndefined();
    });
    (0, vitest_1.it)('returns undefined when the version was previously notified', function () {
        (0, vitest_1.expect)((0, updateCheck_1.evaluateRelease)(baseRelease, '4.6.1', '4.7.0')).toBeUndefined();
    });
    (0, vitest_1.it)('still returns UpdateInfo when a different older version was notified', function () {
        (0, vitest_1.expect)((0, updateCheck_1.evaluateRelease)(baseRelease, '4.6.1', '4.6.5')).toEqual({
            version: '4.7.0',
            url: baseRelease.html_url
        });
    });
    (0, vitest_1.it)('falls back to the releases-latest URL when html_url is missing', function () {
        var result = (0, updateCheck_1.evaluateRelease)(__assign(__assign({}, baseRelease), { html_url: undefined }), '4.6.1', undefined);
        (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.url).toBe('https://github.com/tonkeeper/tonkeeper-web/releases/latest');
    });
});
(0, vitest_1.describe)('checkOnce', function () {
    var mockedFetch = vitest_1.vi.fn();
    (0, vitest_1.beforeEach)(function () {
        (0, updateCheck_1._resetForTesting)();
        vitest_1.vi.stubGlobal('fetch', mockedFetch);
        vitest_1.vi.mocked(electron_1.app.getVersion).mockReturnValue('4.6.1');
        vitest_1.vi.mocked(electron_1.BrowserWindow.getAllWindows).mockReturnValue([]);
    });
    (0, vitest_1.afterEach)(function () {
        vitest_1.vi.unstubAllGlobals();
        vitest_1.vi.clearAllMocks();
    });
    function mockJsonResponse(body, ok, status) {
        var _this = this;
        if (ok === void 0) { ok = true; }
        if (status === void 0) { status = 200; }
        mockedFetch.mockResolvedValueOnce({
            ok: ok,
            status: status,
            json: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, body];
            }); }); }
        });
    }
    function makeWindow() {
        return { webContents: { send: vitest_1.vi.fn() } };
    }
    (0, vitest_1.it)('broadcasts update-available to every open window when a newer release exists', function () { return __awaiter(void 0, void 0, void 0, function () {
        var win1, win2, expectedPayload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    win1 = makeWindow();
                    win2 = makeWindow();
                    vitest_1.vi.mocked(electron_1.BrowserWindow.getAllWindows).mockReturnValue([win1, win2]);
                    mockJsonResponse({
                        tag_name: 'v4.7.0',
                        html_url: 'https://example.com/v4.7.0',
                        draft: false,
                        prerelease: false
                    });
                    return [4 /*yield*/, (0, updateCheck_1.checkOnce)()];
                case 1:
                    _a.sent();
                    expectedPayload = { version: '4.7.0', url: 'https://example.com/v4.7.0' };
                    (0, vitest_1.expect)(win1.webContents.send).toHaveBeenCalledWith('update-available', expectedPayload);
                    (0, vitest_1.expect)(win2.webContents.send).toHaveBeenCalledWith('update-available', expectedPayload);
                    (0, vitest_1.expect)(main_1["default"].info).toHaveBeenCalledWith('update available: 4.7.0');
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('does not broadcast the same version twice in a row', function () { return __awaiter(void 0, void 0, void 0, function () {
        var win;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    win = makeWindow();
                    vitest_1.vi.mocked(electron_1.BrowserWindow.getAllWindows).mockReturnValue([win]);
                    mockJsonResponse({
                        tag_name: 'v4.7.0',
                        html_url: 'https://example.com/v4.7.0',
                        draft: false,
                        prerelease: false
                    });
                    mockJsonResponse({
                        tag_name: 'v4.7.0',
                        html_url: 'https://example.com/v4.7.0',
                        draft: false,
                        prerelease: false
                    });
                    return [4 /*yield*/, (0, updateCheck_1.checkOnce)()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, updateCheck_1.checkOnce)()];
                case 2:
                    _a.sent();
                    (0, vitest_1.expect)(win.webContents.send).toHaveBeenCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('broadcasts again when a later version appears after one was already notified', function () { return __awaiter(void 0, void 0, void 0, function () {
        var win;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    win = makeWindow();
                    vitest_1.vi.mocked(electron_1.BrowserWindow.getAllWindows).mockReturnValue([win]);
                    mockJsonResponse({
                        tag_name: 'v4.7.0',
                        html_url: 'https://example.com/v4.7.0',
                        draft: false,
                        prerelease: false
                    });
                    mockJsonResponse({
                        tag_name: 'v4.8.0',
                        html_url: 'https://example.com/v4.8.0',
                        draft: false,
                        prerelease: false
                    });
                    return [4 /*yield*/, (0, updateCheck_1.checkOnce)()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, updateCheck_1.checkOnce)()];
                case 2:
                    _a.sent();
                    (0, vitest_1.expect)(win.webContents.send).toHaveBeenCalledTimes(2);
                    (0, vitest_1.expect)(win.webContents.send).toHaveBeenLastCalledWith('update-available', {
                        version: '4.8.0',
                        url: 'https://example.com/v4.8.0'
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('does not broadcast drafts or pre-releases', function () { return __awaiter(void 0, void 0, void 0, function () {
        var win;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    win = makeWindow();
                    vitest_1.vi.mocked(electron_1.BrowserWindow.getAllWindows).mockReturnValue([win]);
                    mockJsonResponse({ tag_name: 'v4.7.0', draft: true });
                    mockJsonResponse({ tag_name: 'v4.7.0', prerelease: true });
                    return [4 /*yield*/, (0, updateCheck_1.checkOnce)()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, updateCheck_1.checkOnce)()];
                case 2:
                    _a.sent();
                    (0, vitest_1.expect)(win.webContents.send).not.toHaveBeenCalled();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('logs and returns quietly on non-2xx HTTP responses', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockJsonResponse({}, false, 502);
                    return [4 /*yield*/, (0, vitest_1.expect)((0, updateCheck_1.checkOnce)()).resolves.toBeUndefined()];
                case 1:
                    _a.sent();
                    (0, vitest_1.expect)(main_1["default"].warn).toHaveBeenCalledWith('update check: HTTP 502');
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('logs and returns quietly on network errors without throwing', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockedFetch.mockRejectedValueOnce(new Error('ECONNRESET'));
                    return [4 /*yield*/, (0, vitest_1.expect)((0, updateCheck_1.checkOnce)()).resolves.toBeUndefined()];
                case 1:
                    _a.sent();
                    (0, vitest_1.expect)(main_1["default"].warn).toHaveBeenCalledWith('update check failed', vitest_1.expect.any(Error));
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('uses the GitHub Releases /latest endpoint with a Tonkeeper user-agent', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockJsonResponse({ tag_name: 'v4.6.1', draft: false, prerelease: false });
                    return [4 /*yield*/, (0, updateCheck_1.checkOnce)()];
                case 1:
                    _a.sent();
                    (0, vitest_1.expect)(mockedFetch).toHaveBeenCalledWith('https://api.github.com/repos/tonkeeper/tonkeeper-web/releases/latest', vitest_1.expect.objectContaining({
                        headers: vitest_1.expect.objectContaining({
                            'User-Agent': 'Tonkeeper/4.6.1',
                            Accept: 'application/vnd.github+json'
                        })
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, vitest_1.describe)('startUpdateCheck', function () {
    var origPlatform = process.platform;
    function setPlatform(value) {
        Object.defineProperty(process, 'platform', { value: value, configurable: true });
    }
    (0, vitest_1.beforeEach)(function () {
        (0, updateCheck_1._resetForTesting)();
        vitest_1.vi.useFakeTimers();
    });
    (0, vitest_1.afterEach)(function () {
        vitest_1.vi.useRealTimers();
        setPlatform(origPlatform);
    });
    (0, vitest_1.it)('schedules timers on Linux', function () {
        setPlatform('linux');
        (0, updateCheck_1.startUpdateCheck)();
        (0, vitest_1.expect)(vitest_1.vi.getTimerCount()).toBeGreaterThan(0);
    });
    (0, vitest_1.it)('does not schedule timers on macOS', function () {
        setPlatform('darwin');
        (0, updateCheck_1.startUpdateCheck)();
        (0, vitest_1.expect)(vitest_1.vi.getTimerCount()).toBe(0);
    });
    (0, vitest_1.it)('does not schedule timers on Windows', function () {
        setPlatform('win32');
        (0, updateCheck_1.startUpdateCheck)();
        (0, vitest_1.expect)(vitest_1.vi.getTimerCount()).toBe(0);
    });
    (0, vitest_1.it)('is idempotent — repeated calls on Linux do not duplicate timers', function () {
        setPlatform('linux');
        (0, updateCheck_1.startUpdateCheck)();
        var after1 = vitest_1.vi.getTimerCount();
        (0, updateCheck_1.startUpdateCheck)();
        (0, updateCheck_1.startUpdateCheck)();
        (0, vitest_1.expect)(vitest_1.vi.getTimerCount()).toBe(after1);
    });
});
