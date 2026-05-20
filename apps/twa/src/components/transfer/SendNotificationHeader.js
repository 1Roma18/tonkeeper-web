"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AmountTwaHeaderBlock = exports.useNativeBack = exports.RecipientTwaHeaderBlock = exports.HideTwaBackButton = void 0;
var sdk_react_1 = require("@tma.js/sdk-react");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var HideTwaBackButton = function () {
    var button = (0, sdk_react_1.useBackButton)();
    var sdk = (0, appSdk_1.useAppSdk)();
    (0, react_1.useEffect)(function () {
        var handler = function () {
            sdk.uiEvents.emit('navigate', { method: 'navigate', params: undefined });
        };
        button.on('click', handler);
        return function () {
            button.off('click', handler);
            button.hide();
        };
    }, []);
    return <></>;
};
exports.HideTwaBackButton = HideTwaBackButton;
var Padding = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding-top: 12px;\n    margin-bottom: -4px;\n"], ["\n    padding-top: 12px;\n    margin-bottom: -4px;\n"])));
var RecipientTwaHeaderBlock = function (_a) {
    var onClose = _a.onClose;
    var backButton = (0, sdk_react_1.useBackButton)();
    (0, react_1.useEffect)(function () {
        backButton.show();
    }, []);
    (0, exports.useNativeBack)(onClose);
    return <Padding />;
};
exports.RecipientTwaHeaderBlock = RecipientTwaHeaderBlock;
var useNativeBack = function (onClose) {
    var backButton = (0, sdk_react_1.useBackButton)();
    (0, react_1.useEffect)(function () {
        backButton.on('click', onClose);
        return function () {
            backButton.off('click', onClose);
        };
    }, [onClose, backButton]);
};
exports.useNativeBack = useNativeBack;
var AmountTwaHeaderBlock = function (_a) {
    var children = _a.children, onBack = _a.onBack;
    var backButton = (0, sdk_react_1.useBackButton)();
    (0, react_1.useEffect)(function () {
        backButton.show();
    }, []);
    (0, exports.useNativeBack)(onBack);
    return <Padding>{children}</Padding>;
};
exports.AmountTwaHeaderBlock = AmountTwaHeaderBlock;
var templateObject_1;
