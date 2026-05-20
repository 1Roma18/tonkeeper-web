"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var styled_components_1 = require("styled-components");
var translation_1 = require("@tonkeeper/uikit/dist/hooks/translation");
var react_1 = __importStar(require("react"));
var ledger_1 = require("@tonkeeper/uikit/dist/state/ledger");
var Notification_1 = require("@tonkeeper/uikit/dist/components/Notification");
var LedgerConnectionSteps_1 = require("@tonkeeper/uikit/dist/components/ledger/LedgerConnectionSteps");
var uikit_1 = require("@tonkeeper/uikit");
var react_router_dom_1 = require("react-router-dom");
var extensionPopupStorage_1 = require("@tonkeeper/core/dist/service/extensionPopupStorage");
var webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var routes_1 = require("@tonkeeper/uikit/dist/libs/routes");
var Wrapper = styled_components_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    flex: 1;\n    height: 100%;\n    padding: 20px;\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    flex: 1;\n    height: 100%;\n    padding: 20px;\n"])));
var H2Styled = (0, styled_components_1.styled)(uikit_1.H2)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin-bottom: 1rem;\n"], ["\n    margin-bottom: 1rem;\n"])));
var ButtonsBlock = styled_components_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin-top: 1rem;\n    display: flex;\n    gap: 8px;\n    width: 100%;\n\n    > * {\n        flex: 1;\n    }\n"], ["\n    margin-top: 1rem;\n    display: flex;\n    gap: 8px;\n    width: 100%;\n\n    > * {\n        flex: 1;\n    }\n"])));
var ConnectLedgerPage = function () {
    var t = (0, translation_1.useTranslation)().t;
    var _a = (0, react_1.useState)(false), tried = _a[0], setTried = _a[1];
    var sdk = (0, appSdk_1.useAppSdk)();
    var _b = (0, ledger_1.useConnectLedgerMutation)(), isDeviceConnected = _b.isDeviceConnected, connectLedger = _b.mutate, resetConnection = _b.reset, tonTransport = _b.data, isConnectionError = _b.isError;
    var onAfterCompleted = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var popup, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, (0, extensionPopupStorage_1.getOpenedPopup)(sdk.storage)];
                case 1:
                    popup = _a.sent();
                    if (!((popup === null || popup === void 0 ? void 0 : popup.id) !== undefined)) return [3 /*break*/, 3];
                    return [4 /*yield*/, webextension_polyfill_1["default"].windows.update(popup.id, { focused: true })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 5];
                case 5:
                    window.close();
                    return [2 /*return*/];
            }
        });
    }); }, []);
    var location = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(function () {
        if (location.pathname !== routes_1.AppRoute.connectLedger) {
            onAfterCompleted();
        }
    }, [location.pathname, onAfterCompleted]);
    (0, react_1.useEffect)(function () {
        if (isDeviceConnected) {
            onAfterCompleted();
        }
    }, [onAfterCompleted, isDeviceConnected]);
    var onStartConnection = (0, react_1.useCallback)(function () {
        resetConnection();
        connectLedger();
        setTried(true);
    }, []);
    var currentStep = 'connect';
    if (isDeviceConnected) {
        currentStep = 'open-ton';
    }
    if (tonTransport) {
        currentStep = 'all-completed';
    }
    return (<Wrapper>
            <H2Styled>{t('ledger_connect_header')}</H2Styled>
            <LedgerConnectionSteps_1.LedgerConnectionSteps currentStep={currentStep} isErrored={isConnectionError} pristine={!tried}/>
            <Notification_1.NotificationFooterPortal>
                <Notification_1.NotificationFooter>
                    <ButtonsBlock>
                        <uikit_1.ButtonResponsiveSize secondary onClick={onAfterCompleted}>
                            {t('cancel')}
                        </uikit_1.ButtonResponsiveSize>
                        <uikit_1.ButtonResponsiveSize primary onClick={onStartConnection}>
                            {t(tried ? 'try_again' : 'continue')}
                        </uikit_1.ButtonResponsiveSize>
                    </ButtonsBlock>
                </Notification_1.NotificationFooter>
            </Notification_1.NotificationFooterPortal>
        </Wrapper>);
};
exports["default"] = ConnectLedgerPage;
var templateObject_1, templateObject_2, templateObject_3;
