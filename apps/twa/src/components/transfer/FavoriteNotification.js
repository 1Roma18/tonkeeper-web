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
exports.useFavoriteNotification = exports.FavoriteView = void 0;
var sdk_react_1 = require("@tma.js/sdk-react");
var Input_1 = require("@tonkeeper/uikit/dist/components/fields/Input");
var SuggestionAddress_1 = require("@tonkeeper/uikit/dist/components/transfer/SuggestionAddress");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var input_1 = require("@tonkeeper/uikit/dist/hooks/input");
var translation_1 = require("@tonkeeper/uikit/dist/hooks/translation");
var suggestions_1 = require("@tonkeeper/uikit/dist/state/suggestions");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var SendNotificationButtons_1 = require("./SendNotificationButtons");
var SendNotificationHeader_1 = require("./SendNotificationHeader");
var Block = styled_components_1["default"].form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n\n    justify-content: center;\n    gap: 1rem;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding-top: 16px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n\n    justify-content: center;\n    gap: 1rem;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding-top: 16px;\n"])));
var EditFavoriteContent = function (_a) {
    var favorite = _a.favorite, onClose = _a.onClose;
    var t = (0, translation_1.useTranslation)().t;
    var mainButton = (0, sdk_react_1.useMainButton)();
    (0, SendNotificationHeader_1.useNativeBack)(onClose);
    var _b = (0, suggestions_1.useEditFavorite)(), editAsync = _b.mutateAsync, reset = _b.reset, isEditLoading = _b.isLoading, isError = _b.isError, error = _b.error;
    var ref = (0, input_1.useInputRefAutoFocus)(300);
    var _c = (0, react_1.useState)(favorite.name), name = _c[0], setName = _c[1];
    var onName = function (value) {
        reset();
        setName(value.slice(0, 24));
    };
    (0, SendNotificationButtons_1.useMainButtonLoading)(isEditLoading);
    (0, react_1.useEffect)(function () {
        var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, editAsync({ favorite: favorite, name: name })];
                    case 1:
                        _a.sent();
                        onClose();
                        return [2 /*return*/];
                }
            });
        }); };
        mainButton.setText(t('add_edit_favorite_save'));
        mainButton.on('click', handleSubmit);
        return function () {
            mainButton.off('click', handleSubmit);
        };
    }, [mainButton, name, editAsync, onClose]);
    return (<Block>
            <Input_1.Input id="favorite-name" ref={ref} value={name} onChange={onName} label={t('add_edit_favorite_name_placeholder')} isValid={!isError} disabled={isEditLoading} helpText={error === null || error === void 0 ? void 0 : error.message}/>
            <SuggestionAddress_1.SuggestionAddress item={favorite}/>
        </Block>);
};
var AddFavoriteContent = function (_a) {
    var latest = _a.latest, onClose = _a.onClose;
    var t = (0, translation_1.useTranslation)().t;
    var mainButton = (0, sdk_react_1.useMainButton)();
    (0, SendNotificationHeader_1.useNativeBack)(onClose);
    var _b = (0, suggestions_1.useAddFavorite)(), mutateAsync = _b.mutateAsync, reset = _b.reset, isLoading = _b.isLoading, isError = _b.isError, error = _b.error;
    var ref = (0, input_1.useInputRefAutoFocus)(300);
    var _c = (0, react_1.useState)(''), name = _c[0], setName = _c[1];
    var onName = function (value) {
        reset();
        setName(value.slice(0, 24));
    };
    (0, react_1.useEffect)(function () {
        var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mutateAsync({ latest: latest, name: name })];
                    case 1:
                        _a.sent();
                        onClose();
                        return [2 /*return*/];
                }
            });
        }); };
        mainButton.setText(t('add_edit_favorite_save'));
        mainButton.on('click', handleSubmit);
        return function () {
            mainButton.off('click', handleSubmit);
        };
    }, [mainButton, name, mutateAsync, onClose]);
    return (<Block>
            <Input_1.Input id="favorite-name" ref={ref} value={name} onChange={onName} label={t('add_edit_favorite_name_placeholder')} isValid={!isError} disabled={isLoading} helpText={error === null || error === void 0 ? void 0 : error.message}/>
            <SuggestionAddress_1.SuggestionAddress item={latest}/>
        </Block>);
};
var FavoriteView = function (_a) {
    var state = _a.state, onClose = _a.onClose;
    if (state === null || state === void 0 ? void 0 : state.favorite) {
        return <EditFavoriteContent favorite={state.favorite} onClose={onClose}/>;
    }
    else if (state === null || state === void 0 ? void 0 : state.latest) {
        return <AddFavoriteContent latest={state.latest} onClose={onClose}/>;
    }
    else {
        return <></>;
    }
};
exports.FavoriteView = FavoriteView;
var useFavoriteNotification = function (setFavoriteView) {
    var sdk = (0, appSdk_1.useAppSdk)();
    var _a = (0, react_1.useState)(undefined), favoriteState = _a[0], setFavorite = _a[1];
    (0, react_1.useEffect)(function () {
        var edit = function (options) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                setFavorite({ favorite: options.params });
                setFavoriteView();
                return [2 /*return*/];
            });
        }); };
        var add = function (options) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                setFavorite({ latest: options.params });
                setFavoriteView();
                return [2 /*return*/];
            });
        }); };
        sdk.uiEvents.on('addSuggestion', add);
        sdk.uiEvents.on('editSuggestion', edit);
        return function () {
            sdk.uiEvents.off('addSuggestion', add);
            sdk.uiEvents.off('editSuggestion', edit);
        };
    }, [sdk, setFavoriteView]);
    return favoriteState;
};
exports.useFavoriteNotification = useFavoriteNotification;
var templateObject_1;
