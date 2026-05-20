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
exports.DeepLinkSubscription = exports.useMobileProPairSignerSubscription = void 0;
var TonConnectNotification_1 = require("@tonkeeper/uikit/dist/components/connect/TonConnectNotification");
var connectHook_1 = require("@tonkeeper/uikit/dist/components/connect/connectHook");
var react_1 = require("react");
var capacitor_http_connector_1 = require("../../libs/ton-connect/capacitor-http-connector");
var wallet_1 = require("@tonkeeper/uikit/dist/state/wallet");
var RenameNotificationControlled_1 = require("@tonkeeper/uikit/dist/components/modals/RenameNotificationControlled");
var Notification_1 = require("@tonkeeper/uikit/dist/components/Notification");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var RedirectToTonkeeperMobile_1 = require("./RedirectToTonkeeperMobile");
var TonTransactionNotificationControlled_1 = require("@tonkeeper/uikit/dist/components/modals/TonTransactionNotificationControlled");
var types_1 = require("@tonkeeper/core/dist/utils/types");
var useNotification_1 = require("@tonkeeper/uikit/dist/hooks/useNotification");
var connectService_1 = require("@tonkeeper/core/dist/service/tonConnect/connectService");
var capacitor_injected_connector_1 = require("../../libs/ton-connect/capacitor-injected-connector");
var dapp_browser_plugin_1 = require("../../libs/plugins/dapp-browser-plugin");
var common_1 = require("@tonkeeper/uikit/dist/libs/common");
var useDeeplinkHandlers_1 = require("@tonkeeper/uikit/dist/hooks/deeplinks/useDeeplinkHandlers");
var useMobileProPairSignerSubscription = function () {
    var mutateAsync = (0, wallet_1.useParseAndAddSigner)().mutateAsync;
    var onOpen = (0, RenameNotificationControlled_1.useRenameNotification)().onOpen;
    (0, react_1.useEffect)(function () {
        return (0, capacitor_http_connector_1.subscribeToSignerUrlOpened)(function (link) {
            mutateAsync({ link: link, source: 'deeplink' }).then(function (acc) {
                (0, Notification_1.closeNotification)('add-wallet-signer');
                onOpen({ accountId: acc.id });
            });
        });
    }, []);
};
exports.useMobileProPairSignerSubscription = useMobileProPairSignerSubscription;
var useInjectedBridgeConnectionSubscription = function (setParams) {
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        capacitor_injected_connector_1.capacitorTonConnectInjectedConnector.setConnectHandler(function (request, webViewOrigin) {
            return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (ref.current) {
                                ref.current.reject('Request Cancelled');
                            }
                            ref.current = { resolve: resolve, reject: reject };
                            return [4 /*yield*/, dapp_browser_plugin_1.CapacitorDappBrowser.setIsMainViewInFocus('tc-connect', true)];
                        case 1:
                            _a.sent();
                            setParams({
                                type: 'injected',
                                protocolVersion: 2,
                                request: request,
                                appName: connectService_1.tonConnectTonkeeperProAppName,
                                webViewOrigin: webViewOrigin
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    }, []);
    return ref;
};
var DeepLinkSubscription = function () {
    (0, exports.useMobileProPairSignerSubscription)();
    var sdk = (0, appSdk_1.useAppSdk)();
    (0, react_1.useEffect)(function () {
        return (0, capacitor_http_connector_1.subscribeToSignerResponse)(function (val) {
            sdk.uiEvents.emit('signerTxResponse', { method: 'signerTxResponse', params: val });
        });
    }, []);
    var _a = (0, react_1.useState)(null), params = _a[0], setParams = _a[1];
    var paramsRef = (0, common_1.useValueRef)(params);
    var onNewParamsReceived = (0, react_1.useCallback)(function (p) {
        if (p && paramsRef.current) {
            throw new Error('New params received while old params not processed');
        }
        setParams(p);
    }, []);
    var injectedBridgeConnectionRef = useInjectedBridgeConnectionSubscription(onNewParamsReceived);
    var _b = (0, react_1.useState)(null), tkMobileUrl = _b[0], setTkMobileUrl = _b[1];
    var _c = (0, useDeeplinkHandlers_1.useDeeplinkHandlers)({
        hideLoadingToast: true,
        hideErrorToast: true,
        withBattery: true
    }), mutateAsync = _c.mutateAsync, reset = _c.reset;
    var closeTonTransaction = (0, TonTransactionNotificationControlled_1.useTonTransactionNotification)().onClose;
    var _d = (0, connectHook_1.useCompleteHttpConnection)(), responseHttpConnectionAsync = _d.mutateAsync, responseReset = _d.reset;
    var _e = (0, connectHook_1.useCompleteInjectedConnection)(), responseInjectedConnectionAsync = _e.mutateAsync, injectedResponseReset = _e.reset;
    var handlerClose = function (result) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setTkMobileUrl(null);
                    if (!params)
                        return [2 /*return*/];
                    responseReset();
                    injectedResponseReset();
                    if (!(params.type === 'injected')) return [3 /*break*/, 6];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 3, 5]);
                    if (!((_a = injectedBridgeConnectionRef.current) === null || _a === void 0 ? void 0 : _a.resolve)) {
                        throw new Error('Injected bridge not found');
                    }
                    return [4 /*yield*/, responseInjectedConnectionAsync({
                            params: params,
                            result: result,
                            sendBridgeResponse: injectedBridgeConnectionRef.current.resolve
                        })];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 3:
                    setParams(null);
                    return [4 /*yield*/, dapp_browser_plugin_1.CapacitorDappBrowser.setIsMainViewInFocus('tc-connect', false)];
                case 4:
                    _b.sent();
                    return [7 /*endfinally*/];
                case 5: return [3 /*break*/, 10];
                case 6:
                    _b.trys.push([6, , 8, 10]);
                    return [4 /*yield*/, responseHttpConnectionAsync({ params: params, result: result })];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 8:
                    setParams(null);
                    return [4 /*yield*/, capacitor_http_connector_1.tonConnectSSE.reconnect()];
                case 9:
                    _b.sent();
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    }); };
    var notifyError = (0, useNotification_1.useToast)();
    (0, react_1.useEffect)(function () {
        return (0, capacitor_http_connector_1.subscribeToTonOrTonConnectUrlOpened)(function (url) { return __awaiter(void 0, void 0, void 0, function () {
            var unsupportedLinkError, _a, e_1, modifiedUrl;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        reset();
                        unsupportedLinkError = undefined;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = onNewParamsReceived;
                        return [4 /*yield*/, mutateAsync(url)];
                    case 2:
                        _a.apply(void 0, [_b.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        unsupportedLinkError = (0, types_1.errorMessage)(e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        modifiedUrl = modifyLinkScheme(url);
                        if (modifiedUrl) {
                            setTkMobileUrl({ url: modifiedUrl, unsupportedLinkError: unsupportedLinkError });
                            setTimeout(function () { return setTkMobileUrl(null); }, 5000);
                        }
                        else if (unsupportedLinkError) {
                            notifyError(unsupportedLinkError);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    }, []);
    return (<>
            <TonConnectNotification_1.TonConnectNotification origin={(params === null || params === void 0 ? void 0 : params.type) === 'injected' ? params.webViewOrigin : undefined} params={params !== null && params !== void 0 ? params : null} handleClose={handlerClose}/>
            <RedirectToTonkeeperMobile_1.RedirectToTonkeeperMobile isOpen={!!tkMobileUrl} unsupportedLinkError={tkMobileUrl === null || tkMobileUrl === void 0 ? void 0 : tkMobileUrl.unsupportedLinkError} onClick={function (confirmed) {
            setTkMobileUrl(null);
            if (tkMobileUrl && confirmed) {
                setParams(null);
                closeTonTransaction();
                sdk.openPage(tkMobileUrl.url);
            }
        }}/>
        </>);
};
exports.DeepLinkSubscription = DeepLinkSubscription;
var modifyLinkScheme = function (link) {
    try {
        var _a = link.split('://'), protocol = _a[0], body = _a[1];
        switch (protocol) {
            case 'tonkeeper':
            case 'ton':
                if (body.startsWith('swap')) {
                    return null;
                }
                return "".concat(RedirectToTonkeeperMobile_1.tonkeeperMobileTonDeeplinkScheme, "://").concat(body);
            case 'tonkeeper-tc':
            case 'tc':
                return "".concat(RedirectToTonkeeperMobile_1.tonkeeperMobileTonConnectDeeplinkScheme, "://").concat(body);
            case 'https':
            case 'http': {
                var u = new URL(link);
                if (u.pathname.startsWith('/ton-connect')) {
                    return "".concat(RedirectToTonkeeperMobile_1.tonkeeperMobileTonConnectDeeplinkScheme, "://").concat(link.split('ton-connect')[1]);
                }
                else if (isSwapPath(u.pathname)) {
                    return null;
                }
                else {
                    return "".concat(RedirectToTonkeeperMobile_1.tonkeeperMobileTonDeeplinkScheme, "://").concat(u.pathname.slice(1)).concat(u.search);
                }
                return '';
            }
            default:
                return null;
        }
    }
    catch (e) {
        console.error(e);
        return null;
    }
};
var isSwapPath = function (pathname) {
    var paths = pathname.split('/').slice(1);
    if (paths[0] === 'pro') {
        paths = paths.slice(1);
    }
    return paths.length === 1 && paths[0] === 'swap';
};
