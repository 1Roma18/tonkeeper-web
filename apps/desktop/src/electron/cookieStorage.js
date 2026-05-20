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
exports.__esModule = true;
exports.CookieStore = void 0;
var tough_cookie_1 = require("tough-cookie");
var storageService_1 = require("./storageService");
var CookieStore = /** @class */ (function (_super) {
    __extends(CookieStore, _super);
    function CookieStore() {
        var _this = _super.call(this) || this;
        _this.idx = {};
        _this.key = 'cookie';
        _this.save = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, storageService_1.mainStorage.set(this.key, this.idx)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.restore = function () { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, storageService_1.mainStorage.get(this.key)];
                    case 1:
                        result = _a.sent();
                        if (!result)
                            return [2 /*return*/];
                        Object.keys(result).forEach(function (domain) {
                            Object.keys(result[domain]).forEach(function (path) {
                                Object.keys(result[domain][path]).forEach(function (name) {
                                    result[domain][path][name] = tough_cookie_1.Cookie.fromJSON(result[domain][path][name]);
                                });
                            });
                        });
                        if (result) {
                            this.idx = result;
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.findCookie = function (domain, path, key, cb) {
            if (!_this.idx[domain]) {
                return cb(null, undefined);
            }
            if (!_this.idx[domain][path]) {
                return cb(null, undefined);
            }
            return cb(null, _this.idx[domain][path][key] || null);
        };
        _this.findCookies = function (domain, path, allowSpecialUseDomain, cb) {
            var results = [];
            if (typeof allowSpecialUseDomain === 'function') {
                cb = allowSpecialUseDomain;
                allowSpecialUseDomain = true;
            }
            if (!domain) {
                return cb(null, []);
            }
            var pathMatcher;
            if (!path) {
                // null means "all paths"
                pathMatcher = function matchAll(domainIndex) {
                    for (var curPath in domainIndex) {
                        var pathIndex = domainIndex[curPath];
                        for (var key in pathIndex) {
                            results.push(pathIndex[key]);
                        }
                    }
                };
            }
            else {
                pathMatcher = function matchRFC(domainIndex) {
                    //NOTE: we should use path-match algorithm from S5.1.4 here
                    //(see : https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/canonical_cookie.cc#L299)
                    Object.keys(domainIndex).forEach(function (cookiePath) {
                        if ((0, tough_cookie_1.pathMatch)(path, cookiePath)) {
                            var pathIndex = domainIndex[cookiePath];
                            for (var key in pathIndex) {
                                results.push(pathIndex[key]);
                            }
                        }
                    });
                };
            }
            var domains = (0, tough_cookie_1.permuteDomain)(domain, allowSpecialUseDomain) || [domain];
            var idx = _this.idx;
            domains.forEach(function (curDomain) {
                var domainIndex = idx[curDomain];
                if (!domainIndex) {
                    return;
                }
                pathMatcher(domainIndex);
            });
            cb(null, results);
        };
        _this.putCookie = function (cookie, cb) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.idx[cookie.domain]) {
                            this.idx[cookie.domain] = Object.create(null);
                        }
                        if (!this.idx[cookie.domain][cookie.path]) {
                            this.idx[cookie.domain][cookie.path] = Object.create(null);
                        }
                        this.idx[cookie.domain][cookie.path][cookie.key] = cookie;
                        return [4 /*yield*/, this.save()];
                    case 1:
                        _a.sent();
                        cb(null);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.updateCookie = function (oldCookie, newCookie, cb) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.putCookie(newCookie, cb)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.removeCookie = function (domain, path, key, cb) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.idx[domain] && this.idx[domain][path] && this.idx[domain][path][key]) {
                            delete this.idx[domain][path][key];
                        }
                        return [4 /*yield*/, this.save()];
                    case 1:
                        _a.sent();
                        cb(null);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.removeCookies = function (domain, path, cb) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.idx[domain]) {
                            if (path) {
                                delete this.idx[domain][path];
                            }
                            else {
                                delete this.idx[domain];
                            }
                        }
                        return [4 /*yield*/, this.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, cb(null)];
                }
            });
        }); };
        _this.getAllCookies = function (cb) {
            var cookies = [];
            var idx = _this.idx;
            var domains = Object.keys(idx);
            domains.forEach(function (domain) {
                var paths = Object.keys(idx[domain]);
                paths.forEach(function (path) {
                    var keys = Object.keys(idx[domain][path]);
                    keys.forEach(function (key) {
                        if (key !== null) {
                            cookies.push(idx[domain][path][key]);
                        }
                    });
                });
            });
            // Sort by creationIndex so deserializing retains the creation order.
            // When implementing your own store, this SHOULD retain the order too
            cookies.sort(function (a, b) {
                return (a.creationIndex || 0) - (b.creationIndex || 0);
            });
            cb(null, cookies);
        };
        _this.synchronous = false;
        _this.restore();
        return _this;
    }
    return CookieStore;
}(tough_cookie_1.Store));
exports.CookieStore = CookieStore;
