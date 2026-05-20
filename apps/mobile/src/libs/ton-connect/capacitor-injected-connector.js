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
exports.capacitorTonConnectInjectedConnector = void 0;
var dapp_browser_plugin_1 = require("../plugins/dapp-browser-plugin");
var native_bridge_methods_1 = require("../../inject-scripts/native-bridge-methods");
var tonConnect_1 = require("@tonkeeper/core/dist/entries/tonConnect");
var accountsStorage_1 = require("@tonkeeper/core/dist/service/accountsStorage");
var connectionService_1 = require("@tonkeeper/core/dist/service/tonConnect/connectionService");
var account_1 = require("@tonkeeper/core/dist/entries/account");
var appSdk_1 = require("../appSdk");
var connectService_1 = require("@tonkeeper/core/dist/service/tonConnect/connectService");
var url_1 = require("@tonkeeper/core/dist/utils/url");
var package_json_1 = __importDefault(require("../../../package.json"));
var exception_1 = require("@tonkeeper/core/dist/entries/exception");
var zod_1 = require("zod");
var queryKey_1 = require("@tonkeeper/uikit/dist/libs/queryKey");
var query_client_1 = require("../query-client");
function parseBridgeMethodPayload(schema, payload) {
    var parsed = zod_1.z
        .object({
        message: schema
    })
        .safeParse(payload);
    if (!parsed.success) {
        console.error('Invalid bridge request payload', parsed.error);
        throw new Error('Invalid bridge request');
    }
    return parsed.data.message;
}
var CapacitorTonConnectInjectedConnector = /** @class */ (function () {
    function CapacitorTonConnectInjectedConnector(storage, queryClient) {
        var _this = this;
        this.storage = storage;
        this.queryClient = queryClient;
        this.connectHandler = function () {
            throw new Error('Connect handler is not set');
        };
        this.requestsHandler = function () {
            throw new Error('Requests handler is not set');
        };
        this.disconnectHandler = function () {
            throw new Error('Disconnect handler is not set');
        };
        this.handleMessage = function (params, wallet) { return __awaiter(_this, void 0, void 0, function () {
            var _a, payload, error, value, payload, error, value;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.request.method;
                        switch (_a) {
                            case 'disconnect': return [3 /*break*/, 1];
                            case 'sendTransaction': return [3 /*break*/, 2];
                            case 'signData': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 8];
                    case 1:
                        {
                            return [2 /*return*/, this.onDisconnect(params, wallet.id)];
                        }
                        _b.label = 2;
                    case 2:
                        payload = tonConnect_1.transactionRequestPayloadSchema.parse(JSON.parse(params.request.params[0]));
                        return [4 /*yield*/, this.checkFromAndNetwork(wallet, {
                                from: payload.from,
                                network: payload.network,
                                requestId: params.request.id
                            })];
                    case 3:
                        error = _b.sent();
                        if (error) {
                            return [2 /*return*/, error];
                        }
                        value = {
                            connection: params.connection,
                            id: params.request.id,
                            kind: 'sendTransaction',
                            payload: payload
                        };
                        return [4 /*yield*/, this.selectWallet(wallet.id)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, this.requestsHandler(value)];
                    case 5:
                        payload = tonConnect_1.signDataRequestPayloadSchema.parse(JSON.parse(params.request.params[0]));
                        return [4 /*yield*/, this.checkFromAndNetwork(wallet, {
                                from: payload.from,
                                network: payload.network,
                                requestId: params.request.id
                            })];
                    case 6:
                        error = _b.sent();
                        if (error) {
                            return [2 /*return*/, error];
                        }
                        value = {
                            connection: params.connection,
                            id: params.request.id,
                            kind: 'signData',
                            payload: payload
                        };
                        return [4 /*yield*/, this.selectWallet(wallet.id)];
                    case 7:
                        _b.sent();
                        return [2 /*return*/, this.requestsHandler(value)];
                    case 8:
                        {
                            return [2 /*return*/, {
                                    error: {
                                        code: tonConnect_1.SEND_TRANSACTION_ERROR_CODES.METHOD_NOT_SUPPORTED,
                                        message: "Method ".concat(params.request.method, " is not supported. Supported methods: sendTransaction, signData, disconnect")
                                    },
                                    id: params.request.id
                                }];
                        }
                        _b.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        }); };
        this.onDisconnect = function (params, walletId) { return __awaiter(_this, void 0, void 0, function () {
            var accounts, wallet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, accountsStorage_1.accountsStorage)(this.storage).getAccounts()];
                    case 1:
                        accounts = _a.sent();
                        wallet = (0, account_1.getWalletById)(accounts, walletId);
                        if (!wallet) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.disconnectHandler(params.connection.webViewOrigin)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, (0, connectService_1.disconnectResponse)(params.request.id)];
                }
            });
        }); };
        this.selectWallet = function (walletId) { return __awaiter(_this, void 0, void 0, function () {
            var activeAccount, activeWallet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, accountsStorage_1.accountsStorage)(this.storage).getActiveAccount()];
                    case 1:
                        activeAccount = _a.sent();
                        if (!activeAccount) {
                            throw new Error('Account not found');
                        }
                        activeWallet = activeAccount.activeTonWallet;
                        if (!(activeWallet.id !== walletId)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, accountsStorage_1.accountsStorage)(this.storage).setActiveAccountAndWalletByWalletId(walletId)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        dapp_browser_plugin_1.CapacitorDappBrowser.setRequestsHandler(native_bridge_methods_1.NATIVE_BRIDGE_METHODS.TON_CONNECT.SEND, function (rpcParams, _a) {
            var webViewOrigin = _a.webViewOrigin;
            return __awaiter(_this, void 0, void 0, function () {
                var request, result, e_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            request = parseBridgeMethodPayload(tonConnect_1.appRequestSchema, rpcParams);
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, (0, connectService_1.getInjectedDappConnection)(storage, webViewOrigin)];
                        case 2:
                            result = _b.sent();
                            if (!result) {
                                return [2 /*return*/, {
                                        error: {
                                            code: tonConnect_1.SEND_TRANSACTION_ERROR_CODES.UNKNOWN_APP_ERROR,
                                            message: 'App is not connected'
                                        },
                                        id: request.id
                                    }];
                            }
                            return [4 /*yield*/, this.handleMessage({
                                    connection: result.connection,
                                    request: request
                                }, result.wallet)];
                        case 3: return [2 /*return*/, _b.sent()];
                        case 4:
                            e_1 = _b.sent();
                            return [2 /*return*/, this.handleRequestExceptions(request.id, e_1)];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        });
        dapp_browser_plugin_1.CapacitorDappBrowser.setRequestsHandler(native_bridge_methods_1.NATIVE_BRIDGE_METHODS.TON_CONNECT.CONNECT, function (rpcParams, _a) {
            var webViewOrigin = _a.webViewOrigin, webViewId = _a.webViewId;
            return __awaiter(_this, void 0, void 0, function () {
                var request, result, sameOriginTabs, e_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 3, , 4]);
                            request = parseBridgeMethodPayload(tonConnect_1.connectRequestSchema, rpcParams);
                            return [4 /*yield*/, this.connectHandler(request, webViewOrigin)];
                        case 1:
                            result = _b.sent();
                            sameOriginTabs = dapp_browser_plugin_1.CapacitorDappBrowser.openedOriginIds(webViewOrigin);
                            return [4 /*yield*/, dapp_browser_plugin_1.CapacitorDappBrowser.reload({
                                    ids: sameOriginTabs.filter(function (id) { return id !== webViewId; })
                                })];
                        case 2:
                            _b.sent();
                            return [2 /*return*/, result];
                        case 3:
                            e_2 = _b.sent();
                            return [2 /*return*/, this.handleConnectExceptions(e_2)];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        });
        dapp_browser_plugin_1.CapacitorDappBrowser.setRequestsHandler(native_bridge_methods_1.NATIVE_BRIDGE_METHODS.TON_CONNECT.RESTORE_CONNECTION, function (_, _a) {
            var webViewOrigin = _a.webViewOrigin;
            return __awaiter(_this, void 0, void 0, function () {
                var _b, maxMessages, items, e_3;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, (0, connectService_1.tonInjectedReConnectRequest)(this.storage, webViewOrigin)];
                        case 1:
                            _b = _c.sent(), maxMessages = _b.maxMessages, items = _b.items;
                            return [2 /*return*/, {
                                    event: 'connect',
                                    id: Date.now(),
                                    payload: {
                                        items: items,
                                        device: (0, connectService_1.getDeviceInfo)((0, connectService_1.getTonConnectPlatform)('mobile'), package_json_1["default"].version, maxMessages, connectService_1.tonConnectTonkeeperProAppName)
                                    }
                                }];
                        case 2:
                            e_3 = _c.sent();
                            return [2 /*return*/, this.handleConnectExceptions(e_3)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        });
    }
    CapacitorTonConnectInjectedConnector.prototype.setConnectHandler = function (handler) {
        this.connectHandler = handler;
    };
    CapacitorTonConnectInjectedConnector.prototype.setRequestsHandler = function (handler) {
        this.requestsHandler = handler;
    };
    CapacitorTonConnectInjectedConnector.prototype.setDisconnectHandler = function (handler) {
        this.disconnectHandler = handler;
    };
    CapacitorTonConnectInjectedConnector.prototype.handleConnectExceptions = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (e instanceof exception_1.TonConnectError) {
                    return [2 /*return*/, {
                            event: 'connect_error',
                            id: Date.now(),
                            payload: {
                                code: e.code,
                                message: e.message
                            }
                        }];
                }
                else {
                    console.error('Unknown connection error', e);
                    return [2 /*return*/, {
                            event: 'connect_error',
                            id: Date.now(),
                            payload: {
                                code: tonConnect_1.CONNECT_EVENT_ERROR_CODES.UNKNOWN_ERROR,
                                message: 'Unknown error'
                            }
                        }];
                }
                return [2 /*return*/];
            });
        });
    };
    CapacitorTonConnectInjectedConnector.prototype.handleRequestExceptions = function (requestId, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (e instanceof exception_1.TonConnectError) {
                    return [2 /*return*/, {
                            error: {
                                code: e.code,
                                message: e.message
                            },
                            id: requestId
                        }];
                }
                else {
                    console.error('Unknown ton connect method error', e);
                    return [2 /*return*/, {
                            error: {
                                code: tonConnect_1.SEND_TRANSACTION_ERROR_CODES.UNKNOWN_ERROR,
                                message: 'Unknown error'
                            },
                            id: requestId
                        }];
                }
                return [2 /*return*/];
            });
        });
    };
    CapacitorTonConnectInjectedConnector.prototype.checkFromAndNetwork = function (wallet, params) {
        return __awaiter(this, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, connectService_1.checkTonConnectFromAndNetwork)(this.storage, wallet, params)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        if (e_4 instanceof exception_1.TonConnectError) {
                            return [2 /*return*/, {
                                    error: e_4,
                                    id: params.requestId
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    error: {
                                        code: tonConnect_1.SEND_TRANSACTION_ERROR_CODES.UNKNOWN_ERROR,
                                        message: 'Unknown error'
                                    },
                                    id: params.requestId
                                }];
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 1. Ignore dapps that require ton_proof. Works only for dapps without ton_proof
     * 2. Save new connection with active wallet locally
     * 3. Reload all pages with dapp origin
     *    After reloading dapp will call re-connect method that will restore connection with new active wallet (in case dapp doesn't require ton_proof)
     */
    CapacitorTonConnectInjectedConnector.prototype.changeConnectedWalletToActive = function (tab) {
        return __awaiter(this, void 0, void 0, function () {
            var dappOrigin, existing, existingConnection, activeAccount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dappOrigin = (0, url_1.originFromUrl)(tab.url);
                        if (!dappOrigin) {
                            throw new Error('Dapp origin not found');
                        }
                        return [4 /*yield*/, (0, connectService_1.getInjectedDappConnection)(this.storage, dappOrigin)];
                    case 1:
                        existing = _a.sent();
                        if (!existing) {
                            throw new Error('Connection not found');
                        }
                        existingConnection = existing.connection;
                        if (existingConnection.type !== 'injected') {
                            throw new Error('Connection type not supported');
                        }
                        return [4 /*yield*/, (0, accountsStorage_1.accountsStorage)(this.storage).getActiveAccount()];
                    case 2:
                        activeAccount = _a.sent();
                        if (!activeAccount) {
                            throw new Error('Active account not found');
                        }
                        if (existingConnection.connectItems.some(function (i) { return i.name === 'ton_proof'; })) {
                            throw new Error('Ton proof reconnection is not supported');
                        }
                        /**
                         * even in case of connection with wallet exists this will make it actual by changing creation timestamp
                         */
                        return [4 /*yield*/, (0, connectionService_1.saveAccountConnection)({
                                storage: this.storage,
                                wallet: activeAccount.activeTonWallet,
                                manifest: existingConnection.manifest,
                                params: {
                                    type: 'injected',
                                    webViewOrigin: existingConnection.webViewOrigin,
                                    request: {
                                        items: existingConnection.connectItems
                                    }
                                }
                            })];
                    case 3:
                        /**
                         * even in case of connection with wallet exists this will make it actual by changing creation timestamp
                         */
                        _a.sent();
                        return [4 /*yield*/, this.queryClient.invalidateQueries([queryKey_1.QueryKey.tonConnectConnection])];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, dapp_browser_plugin_1.CapacitorDappBrowser.reload({ origin: dappOrigin })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CapacitorTonConnectInjectedConnector.prototype.sendDisconnect = function (connection) {
        var connectionsArray = Array.isArray(connection) ? connection : [connection];
        connectionsArray.forEach(function (c) {
            var ids = dapp_browser_plugin_1.CapacitorDappBrowser.openedOriginIds(c.webViewOrigin);
            ids.forEach(function (id) {
                dapp_browser_plugin_1.CapacitorDappBrowser.emitEvent(id, JSON.stringify((0, connectService_1.disconnectResponse)(Date.now().toString())));
            });
        });
    };
    return CapacitorTonConnectInjectedConnector;
}());
exports.capacitorTonConnectInjectedConnector = new CapacitorTonConnectInjectedConnector(appSdk_1.capacitorStorage, query_client_1.queryClient);
