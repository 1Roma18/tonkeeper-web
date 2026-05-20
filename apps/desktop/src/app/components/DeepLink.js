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
exports.DeepLinkSubscription = void 0;
var TonConnectNotification_1 = require("@tonkeeper/uikit/dist/components/connect/TonConnectNotification");
var connectHook_1 = require("@tonkeeper/uikit/dist/components/connect/connectHook");
var react_1 = require("react");
var backgroudService_1 = require("../../libs/backgroudService");
var useDeeplinkHandlers_1 = require("@tonkeeper/uikit/dist/hooks/deeplinks/useDeeplinkHandlers");
var DeepLinkSubscription = function () {
    var _a = (0, react_1.useState)(null), params = _a[0], setParams = _a[1];
    var _b = (0, useDeeplinkHandlers_1.useDeeplinkHandlers)({ withBattery: true }), mutateAsync = _b.mutateAsync, reset = _b.reset;
    var _c = (0, connectHook_1.useCompleteHttpConnection)(), responseConnectionAsync = _c.mutateAsync, responseReset = _c.reset;
    var handlerClose = function (result) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!params)
                        return [2 /*return*/];
                    responseReset();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, responseConnectionAsync({ params: params, result: result })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    setParams(null);
                    (0, backgroudService_1.sendBackground)({ king: 'reconnect' });
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        window.backgroundApi.onTonConnect(function (url) { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        reset();
                        _a = setParams;
                        return [4 /*yield*/, mutateAsync(url)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        }); });
    }, [mutateAsync, reset]);
    return (<TonConnectNotification_1.TonConnectNotification origin={undefined} params={params !== null && params !== void 0 ? params : null} handleClose={handlerClose}/>);
};
exports.DeepLinkSubscription = DeepLinkSubscription;
