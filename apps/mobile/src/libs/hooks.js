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
exports.useLayout = exports.useAnalytics = exports.useAppWidth = exports.useAppHeight = void 0;
var react_query_1 = require("@tanstack/react-query");
var common_1 = require("@tonkeeper/core/dist/utils/common");
var analytics_1 = require("@tonkeeper/uikit/dist/hooks/analytics");
var queryKey_1 = require("@tonkeeper/uikit/dist/libs/queryKey");
var react_1 = require("react");
var wallet_1 = require("@tonkeeper/uikit/dist/state/wallet");
var appSdk_1 = require("./appSdk");
var aplication_id_1 = require("./aplication-id");
var routes_1 = require("@tonkeeper/uikit/dist/libs/routes");
var useNavigate_1 = require("@tonkeeper/uikit/src/hooks/router/useNavigate");
var appSdk_2 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var useAppHeight = function () {
    (0, react_1.useEffect)(function () {
        var appHeight = (0, common_1.throttle)(function () {
            var doc = document.documentElement;
            doc.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
        }, 50);
        window.addEventListener('resize', appHeight);
        appHeight();
        return function () {
            window.removeEventListener('resize', appHeight);
        };
    }, []);
};
exports.useAppHeight = useAppHeight;
var useAppWidth = function () {
    (0, react_1.useEffect)(function () {
        var appWidth = (0, common_1.throttle)(function () {
            var doc = document.documentElement;
            var app = document.getElementById('root').childNodes.item(0);
            doc.style.setProperty('--app-width', "".concat(app.clientWidth, "px"));
        }, 50);
        window.addEventListener('resize', appWidth);
        appWidth();
        return function () {
            window.removeEventListener('resize', appWidth);
        };
    }, []);
};
exports.useAppWidth = useAppWidth;
var useAnalytics = function (version, config, activeAccount, accounts) {
    var network = (0, wallet_1.useActiveTonNetwork)();
    var sdk = (0, appSdk_2.useAppSdk)();
    return (0, react_query_1.useQuery)([queryKey_1.QueryKey.analytics, config === null || config === void 0 ? void 0 : config.aptabaseEndpoint, config === null || config === void 0 ? void 0 : config.aptabaseKey], function () { return __awaiter(void 0, void 0, void 0, function () {
        var tracker, _a, _b, _c, _d;
        var _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (!(config === null || config === void 0 ? void 0 : config.aptabaseEndpoint) || !(config === null || config === void 0 ? void 0 : config.aptabaseKey)) {
                        return [2 /*return*/];
                    }
                    tracker = new analytics_1.Aptabase({
                        host: config.aptabaseEndpoint,
                        key: config.aptabaseKey,
                        appVersion: version,
                        userIdentity: sdk.userIdentity
                    });
                    _b = (_a = tracker).init;
                    _e = {
                        application: aplication_id_1.CAPACITOR_APPLICATION_ID === 'mobile' ? 'pro-mobile' : 'pro-tablet',
                        walletType: (0, analytics_1.toWalletType)(activeAccount === null || activeAccount === void 0 ? void 0 : activeAccount.activeTonWallet),
                        activeAccount: activeAccount,
                        accounts: accounts,
                        network: network
                    };
                    _d = (_c = "".concat(aplication_id_1.CAPACITOR_APPLICATION_ID, "-")).concat;
                    return [4 /*yield*/, (0, appSdk_1.getCapacitorDeviceOS)()];
                case 1:
                    _b.apply(_a, [(_e.platform = _d.apply(_c, [_f.sent()]),
                            _e)]);
                    return [2 /*return*/, tracker];
            }
        });
    }); }, { enabled: accounts != null && activeAccount !== undefined });
};
exports.useAnalytics = useAnalytics;
var useLayout = function () {
    var navigate = (0, useNavigate_1.useNavigate)();
    var _a = (0, react_1.useState)(localStorage.getItem('layout') === 'true'), isMobile = _a[0], setMobile = _a[1];
    (0, react_1.useEffect)(function () {
        var appWidth = (0, common_1.throttle)(function () {
            if (window.innerWidth >= 1024) {
                setMobile(function (old) {
                    if (old !== false) {
                        navigate(routes_1.AppRoute.home);
                        localStorage.setItem('layout', 'false');
                    }
                    return false;
                });
            }
            else {
                setMobile(function (old) {
                    if (old !== true) {
                        navigate(routes_1.AppRoute.home);
                        localStorage.setItem('layout', 'true');
                    }
                    return true;
                });
            }
        }, 50);
        window.addEventListener('resize', appWidth);
        appWidth();
        return function () {
            window.removeEventListener('resize', appWidth);
        };
    }, [navigate, setMobile]);
    return isMobile;
};
exports.useLayout = useLayout;
