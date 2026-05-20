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
exports.RedirectToTonkeeperMobile = exports.tonkeeperMobileTonConnectDeeplinkScheme = exports.tonkeeperMobileTonDeeplinkScheme = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var uikit_1 = require("@tonkeeper/uikit");
var Icon_1 = require("@tonkeeper/uikit/dist/components/Icon");
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var react_i18next_1 = require("react-i18next");
var react_query_1 = require("@tanstack/react-query");
var plugins_1 = require("../../libs/plugins");
var ReactPortal_1 = __importDefault(require("@tonkeeper/uikit/dist/components/ReactPortal"));
var HideOnReview_1 = require("@tonkeeper/uikit/dist/components/ios/HideOnReview");
var useNotification_1 = require("@tonkeeper/uikit/dist/hooks/useNotification");
var Wrapper = (0, styled_components_1["default"])(framer_motion_1.motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    z-index: 100;\n    width: calc(100% - 32px);\n    left: 16px;\n    top: calc(env(safe-area-inset-top) + 8px);\n    transform: translate(0);\n    border-radius: ", ";\n    background: ", ";\n    padding: 18px 16px 18px 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"], ["\n    position: fixed;\n    z-index: 100;\n    width: calc(100% - 32px);\n    left: 16px;\n    top: calc(env(safe-area-inset-top) + 8px);\n    transform: translate(0);\n    border-radius: ", ";\n    background: ", ";\n    padding: 18px 16px 18px 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"])), function (p) { return p.theme.corner2xSmall; }, function (p) { return p.theme.buttonTertiaryBackground; });
exports.tonkeeperMobileTonDeeplinkScheme = 'tonkeeper-mob';
exports.tonkeeperMobileTonConnectDeeplinkScheme = 'tonkeeper-tc-mob';
var useIsTonkeeperMobileInstalled = function () {
    return (0, react_query_1.useQuery)(['isTonkeeperMobileInstalled'], function () { return __awaiter(void 0, void 0, void 0, function () {
        var canOpen;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, plugins_1.DeepLink.canOpen({
                        url: "".concat(exports.tonkeeperMobileTonDeeplinkScheme, "://")
                    })];
                case 1:
                    canOpen = _a.sent();
                    return [2 /*return*/, canOpen.value];
            }
        });
    }); }, {
        keepPreviousData: true
    });
};
var RedirectToTonkeeperMobile = function (_a) {
    var isOpen = _a.isOpen, onClick = _a.onClick, unsupportedLinkError = _a.unsupportedLinkError;
    var t = (0, react_i18next_1.useTranslation)().t;
    var isTonkeeperMobileInstalled = useIsTonkeeperMobileInstalled().data;
    var notifyError = (0, useNotification_1.useToast)();
    (0, react_1.useEffect)(function () {
        if (isOpen && !isTonkeeperMobileInstalled && unsupportedLinkError) {
            notifyError(unsupportedLinkError);
        }
    }, [isOpen, isTonkeeperMobileInstalled, unsupportedLinkError]);
    return (<HideOnReview_1.HideOnReview>
            <ReactPortal_1["default"] position="first" wrapperId="body">
                <framer_motion_1.AnimatePresence>
                    {isOpen && isTonkeeperMobileInstalled && (<Wrapper onClick={function () { return onClick(true); }} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.2, ease: 'easeOut' }} drag="y" dragConstraints={{ top: 0, bottom: 0 }} dragElastic={0.7} onDragEnd={function (_, info) {
                if (info.offset.y < -50) {
                    onClick(false);
                }
            }}>
                            <uikit_1.Label2>
                                {t(unsupportedLinkError
                ? 'pro_unsupported_continue_in_tonkeeper_mobile'
                : 'pro_continue_in_tonkeeper_mobile')}
                            </uikit_1.Label2>
                            <Icon_1.ChevronRightIcon />
                        </Wrapper>)}
                </framer_motion_1.AnimatePresence>
            </ReactPortal_1["default"]>
        </HideOnReview_1.HideOnReview>);
};
exports.RedirectToTonkeeperMobile = RedirectToTonkeeperMobile;
var templateObject_1;
