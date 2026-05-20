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
exports.Notifications = void 0;
var TonConnectNotification_1 = require("@tonkeeper/uikit/dist/components/connect/TonConnectNotification");
var TonTransactionNotification_1 = require("@tonkeeper/uikit/dist/components/connect/TonTransactionNotification");
var SignDataNotification_1 = require("@tonkeeper/uikit/dist/components/connect/SignDataNotification");
var react_1 = require("react");
var event_1 = require("../event");
var connectService_1 = require("@tonkeeper/core/dist/service/tonConnect/connectService");
var connectHook_1 = require("@tonkeeper/uikit/dist/components/connect/connectHook");
var constants_1 = require("../constants");
var events_hooks_1 = require("@tonkeeper/uikit/dist/hooks/analytics/events-hooks");
var InterceptTonLinkNotification_1 = require("./InterceptTonLinkNotification");
var global_preferences_1 = require("@tonkeeper/uikit/dist/state/global-preferences");
var useAtom_1 = require("@tonkeeper/uikit/dist/libs/useAtom");
var useDeeplinkHandlers_1 = require("@tonkeeper/uikit/dist/hooks/deeplinks/useDeeplinkHandlers");
var bridgeConnectTransport = function (id) { return function (e) {
    if (e.event === 'connect') {
        event_1.sendBackground.message('approveRequest', {
            id: id,
            payload: e.payload
        });
    }
    else {
        event_1.sendBackground.message('rejectRequest', id);
    }
}; };
var Notifications = function () {
    var _a;
    var _b = (0, react_1.useState)(undefined), data = _b[0], setData = _b[1];
    (0, events_hooks_1.useTrackTonConnectActionRequest)(data === null || data === void 0 ? void 0 : data.origin);
    var trackSendSuccess = (0, events_hooks_1.useTrackerTonConnectSendSuccess)();
    var processOpenedLink = (0, useDeeplinkHandlers_1.useDeeplinkHandlers)().mutateAsync;
    var interceptTonLinks = (0, global_preferences_1.useGlobalPreferences)().interceptTonLinks;
    var backgroundEvent = (0, useAtom_1.useSubjectValue)(event_1.extensionBackgroundEvents$);
    (0, react_1.useEffect)(function () {
        if ((backgroundEvent === null || backgroundEvent === void 0 ? void 0 : backgroundEvent.type) === 'showNotification') {
            if (data) {
                event_1.sendBackground.message('rejectRequest', data.id);
            }
            var newData = backgroundEvent.data;
            if (newData.kind === 'tonLinkIntercept' && interceptTonLinks === 'always') {
                if (newData.data.url) {
                    event_1.sendBackground.message('approveRequest', {
                        id: newData.id,
                        payload: void 0
                    });
                    processOpenedLink(newData.data.url);
                }
            }
            else {
                setData(newData);
            }
        }
    }, [backgroundEvent]);
    var completeInjectedConnection = (0, connectHook_1.useCompleteInjectedConnection)().mutateAsync;
    return (<>
            <TonConnectNotification_1.TonConnectNotification origin={data === null || data === void 0 ? void 0 : data.origin} params={(data === null || data === void 0 ? void 0 : data.kind) === 'tonConnectRequest'
            ? { request: data.data, appName: connectService_1.tonConnectTonkeeperAppName }
            : null} handleClose={function (result) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, completeInjectedConnection({
                            params: {
                                type: 'injected',
                                protocolVersion: constants_1.tonConnectProtocolVersion,
                                request: data.data,
                                appName: connectService_1.tonConnectTonkeeperAppName,
                                webViewOrigin: data.origin
                            },
                            result: result,
                            sendBridgeResponse: bridgeConnectTransport(data.id)
                        })];
                    case 1:
                        _a.sent();
                        setData(undefined);
                        return [2 /*return*/];
                }
            });
        }); }}/>
            <TonTransactionNotification_1.TonTransactionNotification params={(data === null || data === void 0 ? void 0 : data.kind) === 'tonConnectSend' ? data.data : null} handleClose={function (payload) {
            if (!data)
                return;
            if (payload) {
                event_1.sendBackground.message('approveRequest', {
                    id: data.id,
                    payload: payload.boc
                });
                trackSendSuccess({ dappUrl: data.origin, sender: payload.senderChoice });
            }
            else {
                event_1.sendBackground.message('rejectRequest', data.id);
            }
            setData(undefined);
        }}/>
            <SignDataNotification_1.SignDataNotification origin={(data === null || data === void 0 ? void 0 : data.kind) === 'tonConnectSign' ? data.origin : undefined} params={(data === null || data === void 0 ? void 0 : data.kind) === 'tonConnectSign' ? data.data : null} handleClose={function (payload) {
            if (!data)
                return;
            if (payload) {
                event_1.sendBackground.message('approveRequest', { id: data.id, payload: payload });
            }
            else {
                event_1.sendBackground.message('rejectRequest', data.id);
            }
            setData(undefined);
        }}/>
            <InterceptTonLinkNotification_1.InterceptTonLinkNotification url={(data === null || data === void 0 ? void 0 : data.kind) === 'tonLinkIntercept' ? (_a = data.data) === null || _a === void 0 ? void 0 : _a.url : null} handleClose={function (processInExtension) {
            if (!data)
                return;
            if (processInExtension) {
                event_1.sendBackground.message('approveRequest', { id: data.id, payload: void 0 });
            }
            else {
                event_1.sendBackground.message('rejectRequest', data.id);
            }
            setData(undefined);
        }}/>
        </>);
};
exports.Notifications = Notifications;
