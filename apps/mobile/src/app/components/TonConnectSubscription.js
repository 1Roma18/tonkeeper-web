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
exports.TonConnectSubscription = void 0;
var TonConnectRequestNotification_1 = require("@tonkeeper/uikit/dist/components/connect/TonConnectRequestNotification");
var react_1 = require("react");
var tonConnect_1 = require("@tonkeeper/uikit/dist/state/tonConnect");
var capacitor_http_connector_1 = require("../../libs/ton-connect/capacitor-http-connector");
var wallet_1 = require("@tonkeeper/uikit/dist/state/wallet");
var react_query_1 = require("@tanstack/react-query");
var queryKey_1 = require("@tonkeeper/uikit/dist/libs/queryKey");
var connectHook_1 = require("@tonkeeper/uikit/dist/components/connect/connectHook");
var capacitor_injected_connector_1 = require("../../libs/ton-connect/capacitor-injected-connector");
var connectionService_1 = require("@tonkeeper/core/dist/service/tonConnect/connectionService");
var dapp_browser_plugin_1 = require("../../libs/plugins/dapp-browser-plugin");
var common_1 = require("@tonkeeper/uikit/dist/libs/common");
var useInjectedBridgeRequestsSubscription = function (setRequest) {
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        capacitor_injected_connector_1.capacitorTonConnectInjectedConnector.setRequestsHandler(function (request) {
            return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (ref.current) {
                                ref.current.reject('Request Cancelled');
                            }
                            ref.current = { resolve: resolve, reject: reject };
                            return [4 /*yield*/, dapp_browser_plugin_1.CapacitorDappBrowser.setIsMainViewInFocus('tc-action', true)];
                        case 1:
                            _a.sent();
                            setRequest(request);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    }, []);
    return ref;
};
var useInjectedBridgeDisconnectSubscription = function (onDisconnect) {
    (0, react_1.useEffect)(function () {
        return capacitor_injected_connector_1.capacitorTonConnectInjectedConnector.setDisconnectHandler(function (origin) {
            return onDisconnect({ origin: origin });
        });
    }, [onDisconnect]);
};
var TonConnectSubscription = function () {
    var _a = (0, react_1.useState)(undefined), request = _a[0], setRequest = _a[1];
    var requestRef = (0, common_1.useValueRef)(request);
    var disconnectHttp = (0, tonConnect_1.useDisconnectTonConnectAppFromActiveWallet)({
        skipEmit: true
    }).mutate;
    var disconnectInjected = (0, tonConnect_1.useDisconnectInjectedTonConnectAppFromAllWallets)({
        skipEmit: true
    }).mutate;
    var appConnections = (0, tonConnect_1.useAppTonConnectConnections)().data;
    var wallet = (0, wallet_1.useActiveWallet)();
    var activeWalletConnections = (0, react_1.useMemo)(function () { var _a; return (_a = appConnections === null || appConnections === void 0 ? void 0 : appConnections.find(function (c) { return c.wallet.id === wallet.id; })) === null || _a === void 0 ? void 0 : _a.connections; }, [appConnections, wallet.id]);
    var queryClient = (0, react_query_1.useQueryClient)();
    var onTransaction = (0, react_1.useCallback)(function (r) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (requestRef.current) {
                        throw new Error('Request already in progress');
                    }
                    return [4 /*yield*/, queryClient.invalidateQueries([queryKey_1.QueryKey.account])];
                case 1:
                    _a.sent();
                    setRequest(r);
                    return [2 /*return*/];
            }
        });
    }); }, []);
    var injectedBridgeResponseRef = useInjectedBridgeRequestsSubscription(onTransaction);
    useInjectedBridgeDisconnectSubscription(disconnectInjected);
    (0, react_1.useEffect)(function () { return (0, capacitor_http_connector_1.subscribeToHttpTonConnectRequest)(onTransaction); }, [onTransaction]);
    (0, react_1.useEffect)(function () { return (0, capacitor_http_connector_1.subscribeToHttpTonConnectDisconnect)(function (c) { return disconnectHttp({ connectionId: c.id }); }); }, [disconnectHttp]);
    (0, react_1.useEffect)(function () {
        return tonConnect_1.tonConnectAppManuallyDisconnected$.subscribe(function (value) {
            var connections = Array.isArray(value) ? value : [value];
            var httpConnections = connections.filter(connectionService_1.isAccountConnectionHttp);
            var injectedConnections = connections.filter(connectionService_1.isAccountConnectionInjected);
            if (httpConnections.length > 0) {
                capacitor_http_connector_1.tonConnectSSE.sendDisconnect(httpConnections);
            }
            if (injectedConnections.length > 0) {
                capacitor_injected_connector_1.capacitorTonConnectInjectedConnector.sendDisconnect(injectedConnections);
            }
        });
    }, []);
    (0, react_1.useEffect)(function () {
        if (activeWalletConnections &&
            JSON.stringify(activeWalletConnections) !==
                JSON.stringify(capacitor_http_connector_1.tonConnectSSE.currentConnections)) {
            capacitor_http_connector_1.tonConnectSSE.reconnect();
        }
    }, [activeWalletConnections]);
    var responseAsync = (0, connectHook_1.useTonConnectHttpResponseMutation)().mutateAsync;
    var handleClose = (0, react_1.useCallback)(function (response) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!request) {
                        return [2 /*return*/];
                    }
                    if (!(request.connection.type === 'injected')) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 2, 4]);
                    if (!injectedBridgeResponseRef.current) {
                        throw new Error('injectedBridgeResponseRef.current is null');
                    }
                    injectedBridgeResponseRef.current.resolve(response);
                    injectedBridgeResponseRef.current = null;
                    return [2 /*return*/];
                case 2:
                    setRequest(undefined);
                    return [4 /*yield*/, dapp_browser_plugin_1.CapacitorDappBrowser.setIsMainViewInFocus('tc-action', false)];
                case 3:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 4: return [3 /*break*/, 8];
                case 5:
                    _a.trys.push([5, , 7, 8]);
                    return [4 /*yield*/, responseAsync({ connection: request.connection, response: response })];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    setRequest(undefined);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); }, [responseAsync, request === null || request === void 0 ? void 0 : request.connection]);
    return <TonConnectRequestNotification_1.TonConnectRequestNotification request={request} handleClose={handleClose}/>;
};
exports.TonConnectSubscription = TonConnectSubscription;
