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
var backgroudService_1 = require("../../libs/backgroudService");
var queryKey_1 = require("@tonkeeper/uikit/dist/libs/queryKey");
var react_query_1 = require("@tanstack/react-query");
var connectHook_1 = require("@tonkeeper/uikit/dist/components/connect/connectHook");
var connectionService_1 = require("@tonkeeper/core/dist/service/tonConnect/connectionService");
var TonConnectSubscription = function () {
    var _a = (0, react_1.useState)(undefined), request = _a[0], setRequest = _a[1];
    var disconnect = (0, tonConnect_1.useDisconnectTonConnectConnection)({ skipEmit: true });
    var queryClient = (0, react_query_1.useQueryClient)();
    var onTransaction = (0, react_1.useCallback)(function (request) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, queryClient.invalidateQueries([queryKey_1.QueryKey.account])];
                case 1:
                    _a.sent();
                    setRequest(request);
                    return [2 /*return*/];
            }
        });
    }); }, [setRequest]);
    (0, react_1.useEffect)(function () {
        window.backgroundApi.onTonConnectRequest(onTransaction);
    }, [onTransaction]);
    (0, react_1.useEffect)(function () {
        window.backgroundApi.onTonConnectDisconnect(disconnect);
    }, [disconnect]);
    (0, react_1.useEffect)(function () {
        return tonConnect_1.tonConnectAppManuallyDisconnected$.subscribe(function (value) {
            var connections = Array.isArray(value) ? value : [value];
            var httpConnections = connections.filter(connectionService_1.isAccountConnectionHttp);
            if (httpConnections.length > 0) {
                (0, backgroudService_1.sendBackground)({
                    king: 'ton-connect-send-disconnect',
                    connection: httpConnections
                });
            }
        });
    }, []);
    var responseAsync = (0, connectHook_1.useTonConnectHttpResponseMutation)().mutateAsync;
    var handleClose = (0, react_1.useCallback)(function (response) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if ((request === null || request === void 0 ? void 0 : request.connection.type) !== 'http') {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, responseAsync({ connection: request.connection, response: response })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    setRequest(undefined);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [responseAsync, request === null || request === void 0 ? void 0 : request.connection]);
    return <TonConnectRequestNotification_1.TonConnectRequestNotification request={request} handleClose={handleClose}/>;
};
exports.TonConnectSubscription = TonConnectSubscription;
