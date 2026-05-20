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
exports.ConfirmTwaMainButton = exports.AmountTwaMainButton = exports.RecipientTwaMainButton = exports.useMainButtonLoading = exports.HideTwaMainButton = void 0;
var sdk_react_1 = require("@tma.js/sdk-react");
var translation_1 = require("@tonkeeper/uikit/dist/hooks/translation");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var HideTwaMainButton = function () {
    var button = (0, sdk_react_1.useMainButton)();
    (0, react_1.useEffect)(function () {
        return function () {
            button.hide();
        };
    }, []);
    return <></>;
};
exports.HideTwaMainButton = HideTwaMainButton;
var useMainButtonLoading = function (isLoading) {
    var button = (0, sdk_react_1.useMainButton)();
    (0, react_1.useEffect)(function () {
        if (isLoading) {
            button.showLoader();
        }
        else {
            button.hideLoader();
        }
    }, [button, isLoading]);
};
exports.useMainButtonLoading = useMainButtonLoading;
var RecipientTwaMainButton = function (_a) {
    var isLoading = _a.isLoading, onClick = _a.onClick;
    var button = (0, sdk_react_1.useMainButton)();
    var t = (0, translation_1.useTranslation)().t;
    var theme = (0, styled_components_1.useTheme)();
    (0, react_1.useEffect)(function () {
        button.setText(t('continue'));
        button.setBgColor(theme.buttonPrimaryBackground);
        button.setTextColor(theme.buttonPrimaryForeground);
        button.show();
        button.enable();
    }, []);
    (0, react_1.useEffect)(function () {
        button.on('click', onClick);
        return function () {
            button.off('click', onClick);
        };
    }, [onClick, button]);
    (0, exports.useMainButtonLoading)(isLoading);
    return <></>;
};
exports.RecipientTwaMainButton = RecipientTwaMainButton;
var AmountTwaMainButton = function (_a) {
    var isLoading = _a.isLoading, isDisabled = _a.isDisabled, onClick = _a.onClick;
    var button = (0, sdk_react_1.useMainButton)();
    var t = (0, translation_1.useTranslation)().t;
    (0, react_1.useEffect)(function () {
        button.setText(t('continue'));
    }, []);
    (0, react_1.useEffect)(function () {
        button.on('click', onClick);
        return function () {
            button.off('click', onClick);
        };
    }, [onClick, button]);
    (0, exports.useMainButtonLoading)(isLoading);
    return <></>;
};
exports.AmountTwaMainButton = AmountTwaMainButton;
var ConfirmTwaMainButton = function (_a) {
    var isLoading = _a.isLoading, isDisabled = _a.isDisabled, onClick = _a.onClick;
    var button = (0, sdk_react_1.useMainButton)();
    var t = (0, translation_1.useTranslation)().t;
    (0, react_1.useEffect)(function () {
        button.setText(t('confirm_sending_submit'));
    }, []);
    (0, react_1.useEffect)(function () {
        var handler = function () { return __awaiter(void 0, void 0, void 0, function () {
            var ok, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        button.hide();
                        return [4 /*yield*/, onClick()];
                    case 1:
                        ok = _a.sent();
                        if (!ok) {
                            button.show();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        button.show();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        button.on('click', handler);
        return function () {
            button.off('click', handler);
        };
    }, [onClick, button]);
    (0, react_1.useEffect)(function () {
        if (isDisabled) {
            button.disable();
        }
        else {
            button.enable();
        }
    }, [isDisabled]);
    (0, exports.useMainButtonLoading)(isLoading);
    return <></>;
};
exports.ConfirmTwaMainButton = ConfirmTwaMainButton;
