"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.UpdateBanner = void 0;
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var Text_1 = require("@tonkeeper/uikit/dist/components/Text");
var Button_1 = require("@tonkeeper/uikit/dist/components/fields/Button");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var DISMISS_KEY = 'update-banner-dismissed-version';
var Banner = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    top: 16px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 1000;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: ", ";\n    padding: 12px 16px;\n    box-shadow: 0 8px 24px rgb(0 0 0 / 18%);\n"], ["\n    position: fixed;\n    top: 16px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 1000;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: ", ";\n    padding: 12px 16px;\n    box-shadow: 0 8px 24px rgb(0 0 0 / 18%);\n"])), function (p) { return p.theme.backgroundContent; }, function (p) { return p.theme.separatorCommon; }, function (p) { return p.theme.cornerSmall; });
var TextColumn = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n\n    ", " {\n        color: ", ";\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n\n    ", " {\n        color: ", ";\n    }\n"])), Text_1.Body3, function (p) { return p.theme.textSecondary; });
var Actions = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    gap: 8px;\n"], ["\n    display: flex;\n    gap: 8px;\n"])));
var UpdateBanner = function () {
    var sdk = (0, appSdk_1.useAppSdk)();
    var _a = (0, react_1.useState)(), info = _a[0], setInfo = _a[1];
    (0, react_1.useEffect)(function () {
        return window.backgroundApi.onUpdateAvailable(function (value) { return setInfo(value); });
    }, []);
    if (!info)
        return null;
    if (localStorage.getItem(DISMISS_KEY) === info.version)
        return null;
    return (<Banner>
            <TextColumn>
                <Text_1.Label2>New version available</Text_1.Label2>
                <Text_1.Body3>Tonkeeper {info.version} is ready to download.</Text_1.Body3>
            </TextColumn>
            <Actions>
                <Button_1.Button onClick={function () {
            localStorage.setItem(DISMISS_KEY, info.version);
            setInfo(undefined);
        }}>
                    Later
                </Button_1.Button>
                <Button_1.Button primary onClick={function () { return sdk.openPage(info.url); }}>
                    Download
                </Button_1.Button>
            </Actions>
        </Banner>);
};
exports.UpdateBanner = UpdateBanner;
var templateObject_1, templateObject_2, templateObject_3;
