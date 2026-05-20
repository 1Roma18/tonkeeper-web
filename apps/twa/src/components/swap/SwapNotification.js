"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SwapScreen = void 0;
var sdk_react_1 = require("@tma.js/sdk-react");
var Body_1 = require("@tonkeeper/uikit/dist/components/Body");
var SwapMainForm_1 = require("@tonkeeper/uikit/dist/components/swap/SwapMainForm");
var SwapSettingsNotification_1 = require("@tonkeeper/uikit/dist/components/swap/SwapSettingsNotification");
var useSwapMobileNotification_1 = require("@tonkeeper/uikit/dist/state/swap/useSwapMobileNotification");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var useNavigate_1 = require("@tonkeeper/uikit/dist/hooks/router/useNavigate");
var Wrapper = (0, styled_components_1["default"])(Body_1.InnerBody)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 0 16px;\n"], ["\n    padding: 0 16px;\n"])));
var SwapScreen = function () {
    var navigate = (0, useNavigate_1.useNavigate)();
    var backButton = (0, sdk_react_1.useBackButton)();
    var settingsButton = (0, sdk_react_1.useSettingsButton)();
    var _a = (0, react_1.useState)(false), isOpenSettings = _a[0], setIsOpenSettings = _a[1];
    var _b = (0, useSwapMobileNotification_1.useSwapMobileNotification)(), _ = _b[0], setOpenSwap = _b[1];
    (0, react_1.useEffect)(function () {
        var handler = function () {
            setOpenSwap(false);
            navigate(-1);
        };
        backButton.show();
        backButton.on('click', handler);
        var openSettings = function () {
            setIsOpenSettings(true);
        };
        settingsButton.show();
        settingsButton.on('click', openSettings);
        return function () {
            backButton.off('click', handler);
            backButton.hide();
            settingsButton.hide();
            settingsButton.off('click', openSettings);
        };
    }, []);
    return (<Wrapper>
            <SwapMainForm_1.SwapMainForm />
            <SwapSettingsNotification_1.SwapSettingsNotification isOpen={isOpenSettings} onClose={function () { return setIsOpenSettings(false); }}/>
        </Wrapper>);
};
exports.SwapScreen = SwapScreen;
var templateObject_1;
