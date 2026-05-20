"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
exports.InterceptTonLinkNotification = void 0;
var Notification_1 = require("@tonkeeper/uikit/dist/components/Notification");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var uikit_1 = require("@tonkeeper/uikit");
var translation_1 = require("@tonkeeper/uikit/dist/hooks/translation");
var Checkbox_1 = require("@tonkeeper/uikit/dist/components/fields/Checkbox");
var global_preferences_1 = require("@tonkeeper/uikit/dist/state/global-preferences");
var useDeeplinkHandlers_1 = require("@tonkeeper/uikit/dist/hooks/deeplinks/useDeeplinkHandlers");
var ContentWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    text-wrap: balance;\n\n    > svg {\n        margin-bottom: 12px;\n        color: ", ";\n    }\n\n    > ", " {\n        margin-bottom: 4px;\n        display: block;\n        padding: 0 16px;\n    }\n\n    > ", " {\n        color: ", ";\n        margin-bottom: 16px;\n        display: block;\n        padding: 0 32px;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    text-wrap: balance;\n\n    > svg {\n        margin-bottom: 12px;\n        color: ", ";\n    }\n\n    > ", " {\n        margin-bottom: 4px;\n        display: block;\n        padding: 0 16px;\n    }\n\n    > ", " {\n        color: ", ";\n        margin-bottom: 16px;\n        display: block;\n        padding: 0 32px;\n    }\n"])), function (p) { return p.theme.accentBlue; }, uikit_1.H2, uikit_1.Body1, function (p) { return p.theme.textSecondary; });
var CheckboxStyled = (0, styled_components_1["default"])(Checkbox_1.Checkbox)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin-top: 26px;\n"], ["\n    margin-top: 26px;\n"])));
var LinkIcon = function () {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
            <path d="M23.7827 30.5102C24.9601 29.4463 26.7785 29.4822 27.9135 30.6167C29.0851 31.7882 29.0851 33.6883 27.9135 34.8598L20.9682 41.8051C15.1072 47.6662 15.1074 57.1695 20.9682 63.0307C26.8293 68.8916 36.3317 68.8915 42.1928 63.0307L49.1391 56.0844C50.3105 54.9133 52.2098 54.9136 53.3813 56.0844C54.5529 57.256 54.5529 59.156 53.3813 60.3276L46.436 67.2729C38.2317 75.4772 24.9294 75.4772 16.7251 67.2729C8.52145 59.0686 8.52122 45.7671 16.7251 37.563L23.6714 30.6167L23.7827 30.5102ZM46.4565 33.0854C47.628 31.9141 49.5272 31.9141 50.6987 33.0854C51.8703 34.257 51.8703 36.157 50.6987 37.3286L37.2563 50.771C36.0847 51.9425 34.1847 51.9425 33.0131 50.771C31.8419 49.5995 31.8421 47.7003 33.0131 46.5288L46.4565 33.0854ZM37.563 16.7251C45.7671 8.52122 59.0686 8.52144 67.2729 16.7251C75.4772 24.9294 75.4772 38.2317 67.2729 46.436L64.3432 49.3657L64.2309 49.4721C63.0533 50.5363 61.2351 50.5007 60.1001 49.3657C58.9292 48.1941 58.9288 46.2949 60.1001 45.1235L63.0307 42.1928C68.8915 36.3317 68.8916 26.8293 63.0307 20.9682C57.1695 15.1074 47.6662 15.1072 41.8051 20.9682L38.8842 23.8891C37.7127 25.0607 35.8126 25.0607 34.6411 23.8891C33.4702 22.7176 33.4701 20.8183 34.6411 19.6469L37.563 16.7251Z" fill="currentColor"/>
        </svg>);
};
var InterceptTonLinkNotification = function (_a) {
    var url = _a.url, handleClose = _a.handleClose;
    var saveGlobalPreferences = (0, global_preferences_1.useMutateGlobalPreferences)().mutateAsync;
    var processOpenedLink = (0, useDeeplinkHandlers_1.useDeeplinkHandlers)().mutateAsync;
    var onSubmit = function (_a) {
        var rememberChoice = _a.rememberChoice, processInExtension = _a.processInExtension;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!url)
                            return [2 /*return*/];
                        if (!rememberChoice) return [3 /*break*/, 2];
                        return [4 /*yield*/, saveGlobalPreferences({
                                interceptTonLinks: processInExtension ? 'always' : 'never'
                            })];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        handleClose(processInExtension);
                        if (!processInExtension) return [3 /*break*/, 4];
                        return [4 /*yield*/, processOpenedLink(url)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return (<Notification_1.Notification isOpen={!!url} handleClose={handleClose}>
            {function () { return <Content onSubmit={onSubmit}/>; }}
        </Notification_1.Notification>);
};
exports.InterceptTonLinkNotification = InterceptTonLinkNotification;
var Content = function (_a) {
    var onSubmit = _a.onSubmit;
    var t = (0, translation_1.useTranslation)().t;
    var _b = (0, react_1.useState)(false), rememberChoice = _b[0], setRememberChoice = _b[1];
    return (<ContentWrapper>
            <LinkIcon />
            <uikit_1.H2>{t('links_interceptor_modal_title')}</uikit_1.H2>
            <uikit_1.Body1>{t('links_interceptor_modal_description')}</uikit_1.Body1>
            <uikit_1.Button primary size="large" fullWidth onClick={function () { return onSubmit({ rememberChoice: rememberChoice, processInExtension: true }); }}>
                {t('links_interceptor_modal_continue_button')}
            </uikit_1.Button>
            <uikit_1.Button secondary size="large" fullWidth marginTop onClick={function () { return onSubmit({ rememberChoice: rememberChoice, processInExtension: false }); }}>
                {t('links_interceptor_modal_browser_button')}
            </uikit_1.Button>
            <CheckboxStyled checked={rememberChoice} onChange={setRememberChoice}>
                {t('links_interceptor_modal_checkbox_label')}
            </CheckboxStyled>
        </ContentWrapper>);
};
var templateObject_1, templateObject_2;
