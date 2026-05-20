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
exports.subscribeToSignerUrlOpened = exports.subscribeToTonOrTonConnectUrlOpened = exports.subscribeToSignerResponse = exports.subscribeToHttpTonConnectRequest = exports.subscribeToHttpTonConnectDisconnect = exports.tonConnectSSE = void 0;
var ton_connect_sse_1 = require("@tonkeeper/core/dist/service/tonConnect/ton-connect-sse");
var app_1 = require("@capacitor/app");
var signer_1 = require("@tonkeeper/uikit/dist/state/signer");
var atom_1 = require("@tonkeeper/core/dist/entries/atom");
var appSdk_1 = require("../appSdk");
var package_json_1 = __importDefault(require("../../../package.json"));
var tonConnectDisconnect$ = (0, atom_1.replaySubject)('all');
var tonConnectRequest$ = (0, atom_1.replaySubject)('all');
var signerResponse$ = (0, atom_1.replaySubject)('all');
exports.tonConnectSSE = new ton_connect_sse_1.TonConnectSSE({
    storage: appSdk_1.capacitorStorage,
    listeners: {
        onDisconnect: function (connection) { return tonConnectDisconnect$.next(connection); },
        onRequest: function (params) { return tonConnectRequest$.next(params); }
    },
    bridgeEndpointFetcher: (0, ton_connect_sse_1.createBridgeEndpointFetcher)({
        platform: 'pro_mobile_ios',
        build: package_json_1["default"].version,
        onError: function (e) { return console.error(e); }
    })
});
var subscribeToHttpTonConnectDisconnect = function (listener) {
    return tonConnectDisconnect$.subscribe(listener);
};
exports.subscribeToHttpTonConnectDisconnect = subscribeToHttpTonConnectDisconnect;
var subscribeToHttpTonConnectRequest = function (listener) {
    return tonConnectRequest$.subscribe(listener);
};
exports.subscribeToHttpTonConnectRequest = subscribeToHttpTonConnectRequest;
var subscribeToSignerResponse = function (listener) {
    return signerResponse$.subscribe(listener);
};
exports.subscribeToSignerResponse = subscribeToSignerResponse;
var tonLink$ = (0, atom_1.atom)(undefined);
var signerLink$ = (0, atom_1.atom)(undefined);
var filterNotEmpty = function (callback) { return function (val) {
    return val !== undefined && callback(val);
}; };
var subscribeToTonOrTonConnectUrlOpened = function (listener) {
    if (tonLink$.value !== undefined) {
        listener(tonLink$.value);
    }
    return tonLink$.subscribe(filterNotEmpty(listener));
};
exports.subscribeToTonOrTonConnectUrlOpened = subscribeToTonOrTonConnectUrlOpened;
var subscribeToSignerUrlOpened = function (listener) {
    if (signerLink$.value !== undefined) {
        listener(signerLink$.value);
    }
    return signerLink$.subscribe(filterNotEmpty(listener));
};
exports.subscribeToSignerUrlOpened = subscribeToSignerUrlOpened;
app_1.App.addListener('appUrlOpen', function (_a) {
    var url = _a.url;
    if (url) {
        console.info('Received URL:', url);
        var signerSignResponse = undefined;
        try {
            var u = new URL(url);
            signerSignResponse = u.searchParams.get('sign');
        }
        catch (_b) {
            /* */
        }
        if ((0, signer_1.isSignerLink)(url)) {
            signerLink$.next(url);
        }
        else if (signerSignResponse) {
            signerResponse$.next({ signatureHex: signerSignResponse });
        }
        else {
            tonLink$.next(url);
        }
    }
});
app_1.App.addListener('appStateChange', function (_a) {
    var isActive = _a.isActive;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            if (isActive) {
                exports.tonConnectSSE.reconnect();
            }
            else {
                exports.tonConnectSSE.destroy();
            }
            return [2 /*return*/];
        });
    });
});
