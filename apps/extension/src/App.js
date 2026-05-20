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
exports.Content = exports.Loader = exports.App = void 0;
var react_query_1 = require("@tanstack/react-query");
var language_1 = require("@tonkeeper/core/dist/entries/language");
var network_1 = require("@tonkeeper/core/dist/entries/network");
var wallet_1 = require("@tonkeeper/core/dist/entries/wallet");
var Body_1 = require("@tonkeeper/uikit/dist/components/Body");
var CopyNotification_1 = require("@tonkeeper/uikit/dist/components/CopyNotification");
var Footer_1 = require("@tonkeeper/uikit/dist/components/Footer");
var Header_1 = require("@tonkeeper/uikit/dist/components/Header");
var List_1 = require("@tonkeeper/uikit/dist/components/List");
var Loading_1 = require("@tonkeeper/uikit/dist/components/Loading");
var MemoryScroll_1 = __importDefault(require("@tonkeeper/uikit/dist/components/MemoryScroll"));
var Skeleton_1 = require("@tonkeeper/uikit/dist/components/Skeleton");
var SubHeader_1 = require("@tonkeeper/uikit/dist/components/SubHeader");
var FavoriteNotification_1 = require("@tonkeeper/uikit/dist/components/transfer/FavoriteNotification");
var analytics_1 = require("@tonkeeper/uikit/dist/hooks/analytics");
var appContext_1 = require("@tonkeeper/uikit/dist/hooks/appContext");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var lock_1 = require("@tonkeeper/uikit/dist/hooks/lock");
var storage_1 = require("@tonkeeper/uikit/dist/hooks/storage");
var translation_1 = require("@tonkeeper/uikit/dist/hooks/translation");
var routes_1 = require("@tonkeeper/uikit/dist/libs/routes");
var Unlock_1 = require("@tonkeeper/uikit/dist/pages/home/Unlock");
var UnlockNotification_1 = require("@tonkeeper/uikit/dist/pages/home/UnlockNotification");
var Initialize_1 = __importStar(require("@tonkeeper/uikit/dist/pages/import/Initialize"));
var UserThemeProvider_1 = require("@tonkeeper/uikit/dist/providers/UserThemeProvider");
var fiat_1 = require("@tonkeeper/uikit/dist/state/fiat");
var tonendpoint_1 = require("@tonkeeper/uikit/dist/state/tonendpoint");
var wallet_2 = require("@tonkeeper/uikit/dist/state/wallet");
var globalStyle_1 = require("@tonkeeper/uikit/dist/styles/globalStyle");
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = __importStar(require("styled-components"));
var webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
var TonConnectSubscription_1 = require("./components/TonConnectSubscription");
var event_1 = require("./event");
var appSdk_2 = require("./libs/appSdk");
var hooks_1 = require("./libs/hooks");
var language_2 = require("@tonkeeper/uikit/dist/state/language");
var dev_1 = require("@tonkeeper/uikit/dist/state/dev");
var ModalsRoot_1 = require("@tonkeeper/uikit/dist/components/ModalsRoot");
var useDebuggingTools_1 = require("@tonkeeper/uikit/dist/hooks/useDebuggingTools");
var global_preferences_1 = require("@tonkeeper/uikit/dist/state/global-preferences");
var globalSetup_1 = require("@tonkeeper/uikit/dist/state/globalSetup");
var useNavigate_1 = require("@tonkeeper/uikit/dist/hooks/router/useNavigate");
var realtime_1 = require("@tonkeeper/uikit/dist/hooks/realtime");
var RedirectFromDesktopSettings_1 = require("@tonkeeper/uikit/dist/pages/settings/RedirectFromDesktopSettings");
var Notifications_1 = require("./components/Notifications");
var pro_1 = require("@tonkeeper/uikit/dist/state/pro");
var CustomConfirmControlled_1 = require("@tonkeeper/uikit/dist/components/modals/CustomConfirmControlled");
var Settings = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/settings')); }); });
var Browser = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/browser')); }); });
var Activity = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/activity/Activity')); }); });
var Home = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/home/Home')); }); });
var Coin = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/coin/Coin')); }); });
var SwapPage = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/swap')); }); });
var StakingPage = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/staking')); }); });
var QrScanner = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/components/QrScanner')); }); });
var SendActionNotification = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/components/transfer/SendNotifications')); }); });
var ReceiveNotification = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/components/home/ReceiveNotification')); }); });
var NftNotification = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/components/nft/NftNotification')); }); });
var SendNftNotification = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/components/transfer/nft/SendNftNotification')); }); });
var ConnectLedgerNotification = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/components/ConnectLedgerNotification')); }); });
var SwapMobileNotification = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/swap/SwapMobileNotification')); }); });
var PairKeystoneNotification = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/components/PairKeystoneNotification')); }); });
var ConnectLedgerPage = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('./components/ConnectLedgerPage')); }); });
var queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30000,
            refetchOnWindowFocus: false
        }
    }
});
var sdk = new appSdk_2.ExtensionAppSdk();
(0, event_1.connectToBackground)();
var ExtensionGlobalStyle = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  \n  body {\n      overflow-y: auto;\n  }\n"], ["\n  ", "\n  \n  body {\n      overflow-y: auto;\n  }\n"])), globalStyle_1.GlobalStyleCss);
var App = function (_a) {
    var isInCustomPopup = _a.isInCustomPopup;
    var browserT = (0, react_1.useCallback)(function (key) { return webextension_polyfill_1["default"].i18n.getMessage(key); }, []);
    var t = (0, translation_1.useTWithReplaces)(browserT);
    sdk.addWalletPage.isInCustomPopup = isInCustomPopup;
    var translation = (0, react_1.useMemo)(function () {
        var client = {
            t: t,
            i18n: {
                enable: false,
                reloadResources: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/];
                }); }); },
                changeLanguage: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/];
                }); }); },
                language: webextension_polyfill_1["default"].i18n.getUILanguage(),
                languages: []
            }
        };
        return client;
    }, [t]);
    return (<react_query_1.QueryClientProvider client={queryClient}>
            <react_router_dom_1.MemoryRouter>
                <InitialRedirect>
                    <appSdk_1.AppSdkContext.Provider value={sdk}>
                        <storage_1.StorageContext.Provider value={sdk.storage}>
                            <translation_1.TranslationContext.Provider value={translation}>
                                <UserThemeProvider_1.UserThemeProvider>
                                    <ExtensionGlobalStyle />
                                    <Header_1.HeaderGlobalStyle />
                                    <Footer_1.FooterGlobalStyle />
                                    <SubHeader_1.SybHeaderGlobalStyle />
                                    <List_1.GlobalListStyle />
                                    <react_1.Suspense fallback={<FullSizeWrapper standalone={false}>
                                                <Loading_1.Loading />
                                            </FullSizeWrapper>}>
                                        <exports.Loader />
                                    </react_1.Suspense>
                                    <UnlockNotification_1.UnlockNotification sdk={sdk}/>
                                </UserThemeProvider_1.UserThemeProvider>
                            </translation_1.TranslationContext.Provider>
                        </storage_1.StorageContext.Provider>
                    </appSdk_1.AppSdkContext.Provider>
                </InitialRedirect>
            </react_router_dom_1.MemoryRouter>
        </react_query_1.QueryClientProvider>);
};
exports.App = App;
var PageWrapper = (0, styled_components_1["default"])(globalStyle_1.Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    min-width: 385px;\n\n    > * {\n        overflow: auto;\n        width: var(--app-width);\n        max-width: 548px;\n        box-sizing: border-box;\n    }\n"], ["\n    min-width: 385px;\n\n    > * {\n        overflow: auto;\n        width: var(--app-width);\n        max-width: 548px;\n        box-sizing: border-box;\n    }\n"])));
var FullSizeWrapper = (0, styled_components_1["default"])(globalStyle_1.Container)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    min-width: 385px;\n    height: 600px;\n    width: var(--app-width);\n\n    > * {\n        ", "\n    }\n"], ["\n    min-width: 385px;\n    height: 600px;\n    width: var(--app-width);\n\n    > * {\n        ", "\n    }\n"])), function (props) {
    return props.standalone && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                overflow: auto;\n                width: var(--app-width);\n                max-width: 548px;\n                box-sizing: border-box;\n            "], ["\n                overflow: auto;\n                width: var(--app-width);\n                max-width: 548px;\n                box-sizing: border-box;\n            "])));
});
var Wrapper = (0, styled_components_1["default"])(FullSizeWrapper)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    box-sizing: border-box;\n    padding-top: ", "px;\n    padding-bottom: 80px;\n"], ["\n    box-sizing: border-box;\n    padding-top: ", "px;\n    padding-bottom: 80px;\n"])), function (props) { return (props.recovery ? 0 : 64); });
exports.Loader = react_1["default"].memo(function () {
    var _a = (0, wallet_2.useActiveAccountQuery)(), activeAccount = _a.data, activeWalletLoading = _a.isLoading;
    var _b = (0, wallet_2.useAccountsStateQuery)(), accounts = _b.data, isWalletsLoading = _b.isLoading;
    var fiat = (0, fiat_1.useUserFiatQuery)().data;
    var setLang = (0, language_2.useMutateUserLanguage)().mutate;
    var devSettings = (0, dev_1.useDevSettings)().data;
    var globalPreferencesLoading = (0, global_preferences_1.useGlobalPreferencesQuery)().isLoading;
    var globalSetupLoading = (0, globalSetup_1.useGlobalSetup)().isLoading;
    (0, react_1.useEffect)(function () {
        setLang((0, language_1.localizationFrom)(webextension_polyfill_1["default"].i18n.getUILanguage()));
    }, [setLang]);
    var lock = (0, lock_1.useLock)(sdk);
    var tonendpoint = (0, tonendpoint_1.useTonendpoint)({
        build: sdk.version,
        lang: (0, language_1.localizationFrom)(webextension_polyfill_1["default"].i18n.getUILanguage()),
        platform: 'extension'
    });
    var serverConfig = (0, tonendpoint_1.useTonenpointConfig)(tonendpoint).data;
    var proApiUrl = (0, pro_1.useProApiUrl)(serverConfig === null || serverConfig === void 0 ? void 0 : serverConfig.mainnetConfig).data;
    var tracker = (0, hooks_1.useAnalytics)(serverConfig === null || serverConfig === void 0 ? void 0 : serverConfig.mainnetConfig, activeAccount || undefined, accounts).data;
    if (activeWalletLoading ||
        isWalletsLoading ||
        !serverConfig ||
        lock === undefined ||
        fiat === undefined ||
        proApiUrl === undefined ||
        !devSettings ||
        globalPreferencesLoading ||
        globalSetupLoading) {
        return (<FullSizeWrapper standalone={false}>
                <Loading_1.Loading />
            </FullSizeWrapper>);
    }
    // set api url synchronously
    (0, network_1.setProApiUrl)(proApiUrl);
    var context = {
        mainnetApi: (0, network_1.getApiConfig)(serverConfig.mainnetConfig),
        testnetApi: (0, network_1.getApiConfig)(serverConfig.testnetConfig),
        fiat: fiat,
        mainnetConfig: serverConfig.mainnetConfig,
        testnetConfig: serverConfig.testnetConfig,
        tonendpoint: tonendpoint,
        ios: false,
        standalone: true,
        extension: true,
        proFeatures: false,
        hideQrScanner: true,
        hideSigner: true,
        hideMam: true,
        hideMultisig: true,
        hideFireblocks: true,
        defaultWalletVersion: wallet_1.WalletVersion.V5R1,
        tracker: tracker === null || tracker === void 0 ? void 0 : tracker.track
    };
    return (<appContext_1.AppContext.Provider value={context}>
            <exports.Content activeAccount={activeAccount} lock={lock}/>
            <CopyNotification_1.CopyNotification />
            <react_1.Suspense fallback={<></>}>
                <QrScanner />
            </react_1.Suspense>
            <ModalsRoot_1.ModalsRoot />
            <CustomConfirmControlled_1.CustomConfirmNotificationControlled />
        </appContext_1.AppContext.Provider>);
});
var InitialRedirect = function (_a) {
    var children = _a.children;
    var navigate = (0, useNavigate_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        if (window.location.hash) {
            navigate(window.location.hash.substring(1));
        }
    }, []);
    return <>{children}</>;
};
var Content = function (_a) {
    var activeAccount = _a.activeAccount, lock = _a.lock;
    var location = (0, react_router_dom_1.useLocation)();
    var pageView = !activeAccount || location.pathname.startsWith(routes_1.AppRoute["import"]);
    (0, Body_1.useWindowsScroll)(!pageView);
    (0, hooks_1.useAppWidth)();
    (0, analytics_1.useTrackLocation)();
    (0, useDebuggingTools_1.useDebuggingTools)();
    (0, realtime_1.useRealtimeUpdatesInvalidation)();
    if (location.pathname === routes_1.AppRoute.connectLedger) {
        return (<PageWrapper>
                <react_1.Suspense fallback={<Loading_1.Loading />}>
                    <ConnectLedgerPage />
                </react_1.Suspense>
            </PageWrapper>);
    }
    if (lock) {
        return <Unlock_1.Unlock />;
    }
    if (pageView) {
        return (<PageWrapper>
                <react_1.Suspense fallback={<Loading_1.Loading />}>
                    <Initialize_1.InitializeContainer>
                        <Initialize_1["default"] />
                    </Initialize_1.InitializeContainer>
                </react_1.Suspense>
            </PageWrapper>);
    }
    return (<Wrapper standalone recovery={location.pathname.includes(routes_1.SettingsRoute.recovery)}>
            <react_router_dom_1.Switch>
                <react_router_dom_1.Route path={routes_1.AppRoute.activity}>
                    <react_1.Suspense fallback={<Skeleton_1.ActivitySkeletonPage />}>
                        <Activity />
                    </react_1.Suspense>
                </react_router_dom_1.Route>
                <react_router_dom_1.Route path={routes_1.AppRoute.browser}>
                    <react_1.Suspense fallback={<Skeleton_1.BrowserSkeletonPage />}>
                        <Browser />
                    </react_1.Suspense>
                </react_router_dom_1.Route>
                <react_router_dom_1.Route path={routes_1.AppRoute.settings}>
                    <react_1.Suspense fallback={<Skeleton_1.SettingsSkeletonPage />}>
                        <Settings />
                    </react_1.Suspense>
                </react_router_dom_1.Route>
                <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings}>
                    <RedirectFromDesktopSettings_1.RedirectFromDesktopSettings />
                </react_router_dom_1.Route>
                <react_router_dom_1.Route path={"".concat(routes_1.AppRoute.coins, "/:name")}>
                    <react_1.Suspense fallback={<Skeleton_1.CoinSkeletonPage />}>
                        <Coin />
                    </react_1.Suspense>
                </react_router_dom_1.Route>
                <react_router_dom_1.Route path={routes_1.AppRoute.swap}>
                    <react_1.Suspense fallback={null}>
                        <SwapPage />
                    </react_1.Suspense>
                </react_router_dom_1.Route>
                <react_router_dom_1.Route path={routes_1.AppRoute.staking}>
                    <react_1.Suspense fallback={null}>
                        <StakingPage />
                    </react_1.Suspense>
                </react_router_dom_1.Route>
                <react_router_dom_1.Route path="*" component={IndexPage}/>
            </react_router_dom_1.Switch>
            <Footer_1.Footer />
            <MemoryScroll_1["default"] />
            <Notifications_1.Notifications />
            <TonConnectSubscription_1.TonConnectSubscription />
            <react_1.Suspense>
                <SendActionNotification />
                <ReceiveNotification />
                <NftNotification />
                <SendNftNotification />
                <FavoriteNotification_1.AddFavoriteNotification />
                <FavoriteNotification_1.EditFavoriteNotification />
                <ConnectLedgerNotification />
                <SwapMobileNotification />
                <PairKeystoneNotification />
            </react_1.Suspense>
        </Wrapper>);
};
exports.Content = Content;
var IndexPage = function () {
    return (<>
            <Header_1.Header showQrScan={false}/>
            <Body_1.InnerBody>
                <react_1.Suspense fallback={<Skeleton_1.HomeSkeleton />}>
                    <Home />
                </react_1.Suspense>
            </Body_1.InnerBody>
        </>);
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
