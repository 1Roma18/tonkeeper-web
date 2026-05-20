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
exports.TwaNotification = void 0;
var sdk_1 = require("@tma.js/sdk");
var wallet_1 = require("@tonkeeper/core/dist/entries/wallet");
var connectService_1 = require("@tonkeeper/core/dist/service/tonConnect/connectService");
var contractService_1 = require("@tonkeeper/core/dist/service/wallet/contractService");
var twaApi_1 = require("../twaApi");
var utils_1 = require("@tonkeeper/core/dist/service/ton-blockchain/utils");
var seeIfProduction = function () {
    return window.location.hostname.includes('twa.tonkeeper.com');
};
var apiConfig = new twaApi_1.Configuration({ basePath: 'https://twa-api.tonkeeper.com' });
var twaApi = new twaApi_1.DefaultApi(apiConfig);
var TwaNotification = /** @class */ (function () {
    function TwaNotification(miniApp, launchParams) {
        var _this = this;
        this.miniApp = miniApp;
        this.launchParams = launchParams;
        this.getTonConnectProof = function (api, wallet, signTonConnect) { return __awaiter(_this, void 0, void 0, function () {
            var domain, payload, timestamp, proofPayload, stateInit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = 'https://twa.tonkeeper.com/';
                        return [4 /*yield*/, twaApi.getTonConnectPayload()];
                    case 1:
                        payload = (_a.sent()).payload;
                        return [4 /*yield*/, (0, utils_1.getServerTime)(api)];
                    case 2:
                        timestamp = _a.sent();
                        proofPayload = (0, connectService_1.tonConnectProofPayload)(timestamp, domain, wallet.rawAddress, payload);
                        stateInit = (0, contractService_1.walletStateInitFromState)(wallet);
                        return [4 /*yield*/, (0, connectService_1.toTonProofItem)(signTonConnect, proofPayload, true, stateInit)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.subscribe = function (api, wallet, signTonConnect) { return __awaiter(_this, void 0, void 0, function () {
            var e_1, proof;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        if (!!((_b = (_a = this.launchParams.initData) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.allowsWriteToPm)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.miniApp.requestWriteAccess()];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        // TODO add subscribe to an account without tonproof in backend
                        if (!(0, wallet_1.isStandardTonWallet)(wallet)) {
                            throw new Error("Can't subscribe to non standard wallet");
                        }
                        return [4 /*yield*/, this.getTonConnectProof(api, wallet, signTonConnect)];
                    case 5:
                        proof = _c.sent();
                        return [4 /*yield*/, twaApi.subscribeToAccountEvents({
                                subscribeToAccountEventsRequest: {
                                    twaInitData: this.twaInitData,
                                    address: wallet.rawAddress,
                                    proof: proof
                                }
                            })];
                    case 6:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.unsubscribe = function (address) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, twaApi.unsubscribeFromAccountEvents({
                            unsubscribeFromAccountEventsRequest: {
                                twaInitData: this.twaInitData
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.subscribeTonConnect = function (clientId, origin) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, twaApi.subscribeToBridgeEvents({
                            subscribeToBridgeEventsRequest: {
                                twaInitData: this.twaInitData,
                                clientId: clientId,
                                origin: origin
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.unsubscribeTonConnect = function (clientId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, twaApi.unsubscribeFromBridgeEvents({
                            unsubscribeFromBridgeEventsRequest: {
                                twaInitData: this.twaInitData,
                                clientId: clientId
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.subscribed = function (address) { return __awaiter(_this, void 0, void 0, function () {
            var subscribed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!seeIfProduction())
                            return [2 /*return*/, false];
                        return [4 /*yield*/, twaApi.accountEventsSubscriptionStatus({
                                accountEventsSubscriptionStatusRequest: {
                                    twaInitData: this.twaInitData,
                                    address: address
                                }
                            })];
                    case 1:
                        subscribed = (_a.sent()).subscribed;
                        return [2 /*return*/, subscribed];
                }
            });
        }); };
    }
    Object.defineProperty(TwaNotification.prototype, "twaInitData", {
        get: function () {
            var initDataRaw = (0, sdk_1.retrieveLaunchParams)().initDataRaw;
            if (!initDataRaw) {
                throw new Error('missing twa init data');
            }
            return Buffer.from(initDataRaw, 'utf8').toString('base64');
        },
        enumerable: false,
        configurable: true
    });
    return TwaNotification;
}());
exports.TwaNotification = TwaNotification;
