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
exports.MobileDappBrowserController = void 0;
var react_1 = require("react");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var dapp_browser_1 = require("@tonkeeper/uikit/dist/state/dapp-browser");
var framer_motion_1 = require("framer-motion");
var styled_components_1 = __importDefault(require("styled-components"));
var MobileDappBrowserTab_1 = require("./MobileDappBrowserTab");
var MobileDappBrowserNewTab_1 = require("./MobileDappBrowserNewTab");
var ionic_1 = require("@tonkeeper/uikit/dist/hooks/ionic");
var dapp_browser_plugin_1 = require("../../../libs/plugins/dapp-browser-plugin");
var native_bridge_methods_1 = require("../../../inject-scripts/native-bridge-methods");
var zod_1 = require("zod");
var Wrapper = (0, styled_components_1["default"])(framer_motion_1.motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    padding-bottom: calc(var(--footer-full-height) + 1px);\n    inset: 0;\n\n    &.dapp-browser-wrapper-exit {\n        background: ", ";\n    }\n\n    &::after {\n        position: absolute;\n        background: ", ";\n        bottom: 0;\n        height: calc(var(--footer-full-height) + 1px);\n        left: 0;\n        right: 0;\n        content: '';\n    }\n"], ["\n    position: fixed;\n    padding-bottom: calc(var(--footer-full-height) + 1px);\n    inset: 0;\n\n    &.dapp-browser-wrapper-exit {\n        background: ", ";\n    }\n\n    &::after {\n        position: absolute;\n        background: ", ";\n        bottom: 0;\n        height: calc(var(--footer-full-height) + 1px);\n        left: 0;\n        right: 0;\n        content: '';\n    }\n"])), function (p) { return p.theme.backgroundPage; }, function (p) { return p.theme.backgroundPage; });
/**
 * bridge plugin tab state change events to app state
 */
var useRegisterTabChangeListener = function () {
    var mutate = (0, dapp_browser_1.useChangeBrowserTab)().mutate;
    var sdk = (0, appSdk_1.useAppSdk)();
    (0, react_1.useEffect)(function () {
        var _a;
        return (_a = sdk.dappBrowser) === null || _a === void 0 ? void 0 : _a.tabChange.subscribe(mutate);
    }, [sdk.dappBrowser]);
};
/**
 * focus app on sidebar menu open
 */
var useRegisterViewFocusListener = function () {
    var isAsideOpen = (0, ionic_1.useMenuController)('aside-nav').isOpen;
    var isWalletMenuOpen = (0, ionic_1.useMenuController)('wallet-nav').isOpen;
    (0, react_1.useEffect)(function () {
        dapp_browser_plugin_1.CapacitorDappBrowser.setIsMainViewInFocus('wallet-nav', isWalletMenuOpen);
    }, [isWalletMenuOpen]);
    (0, react_1.useEffect)(function () {
        dapp_browser_plugin_1.CapacitorDappBrowser.setIsMainViewInFocus('aside-nav', isAsideOpen);
    }, [isAsideOpen]);
};
var tgResponseSchema = zod_1.z.object({
    base64Result: zod_1.z.string()
});
var useProvideWindowApi = function () {
    var openTab = (0, dapp_browser_1.useOpenBrowserTab)().mutate;
    var closeTab = (0, dapp_browser_1.useCloseActiveBrowserTab)().mutate;
    var allowedHosts = ['oauth.telegram.org'];
    var allowedResponseOrigins = ['https://wallet.tonkeeper.com'];
    (0, react_1.useEffect)(function () {
        window.openDappBrowser = function (url) {
            var u = new URL(url);
            if (!allowedHosts.includes(u.host)) {
                throw new Error('Unsafe host');
            }
            openTab({ url: url });
        };
        dapp_browser_plugin_1.CapacitorDappBrowser.setRequestsHandler(native_bridge_methods_1.NATIVE_BRIDGE_METHODS.TG_AUTH.SEND_RESULT, function (rpcParams, _a) {
            var webViewOrigin = _a.webViewOrigin;
            return __awaiter(void 0, void 0, void 0, function () {
                var base64Result, detail, customEvent;
                return __generator(this, function (_b) {
                    if (!allowedResponseOrigins.includes(webViewOrigin)) {
                        throw new Error('Unsafe origin');
                    }
                    base64Result = tgResponseSchema.parse(rpcParams).base64Result;
                    detail = JSON.parse(Buffer.from(base64Result, 'base64').toString('utf8'));
                    customEvent = new CustomEvent('telegram-auth-success', {
                        detail: detail
                    });
                    window.dispatchEvent(customEvent);
                    closeTab();
                    return [2 /*return*/];
                });
            });
        });
    }, []);
};
var MobileDappBrowserController = function () {
    useRegisterTabChangeListener();
    useRegisterViewFocusListener();
    useProvideWindowApi();
    var tab = (0, dapp_browser_1.useActiveBrowserTab)();
    var shouldDisplayBrowser = !!tab;
    var _a = (0, react_1.useState)(false), backgroundIsReady = _a[0], setBackgroundIsReady = _a[1];
    (0, react_1.useEffect)(function () {
        var timeout = null;
        if (shouldDisplayBrowser) {
            timeout = setTimeout(function () {
                document.body.classList.add('dapp-browser-open');
                setBackgroundIsReady(true);
            }, 170);
        }
        return function () {
            if (timeout) {
                clearTimeout(timeout);
            }
            document.body.classList.remove('dapp-browser-open');
            setBackgroundIsReady(false);
        };
    }, [shouldDisplayBrowser]);
    var id = (0, react_1.useId)();
    var exitY = 200;
    return (<framer_motion_1.AnimatePresence mode="wait">
            {shouldDisplayBrowser && (<Wrapper id={id} key="dapp-browser" initial={{ y: exitY, opacity: 0, pointerEvents: 'none' }} animate={{ y: 0, opacity: 1, pointerEvents: 'unset' }} exit={{ y: exitY, opacity: 0, pointerEvents: 'none' }} transition={{ duration: 0.15, ease: 'easeOut' }} onAnimationStart={function (definition) {
                var _a, _b;
                if (definition.y === exitY) {
                    (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.classList.add('dapp-browser-wrapper-exit');
                }
                else {
                    (_b = document
                        .getElementById(id)) === null || _b === void 0 ? void 0 : _b.classList.remove('dapp-browser-wrapper-exit');
                }
            }}>
                    {tab === 'blanc' ? (<MobileDappBrowserNewTab_1.MobileDappBrowserNewTab />) : (<MobileDappBrowserTab_1.MobileDappBrowserTab tab={tab} isAnimating={!backgroundIsReady}/>)}
                </Wrapper>)}
        </framer_motion_1.AnimatePresence>);
};
exports.MobileDappBrowserController = MobileDappBrowserController;
var templateObject_1;
