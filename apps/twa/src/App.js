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
exports.Loader = exports.App = void 0;
var react_query_1 = require("@tanstack/react-query");
var network_1 = require("@tonkeeper/core/dist/entries/network");
var wallet_1 = require("@tonkeeper/core/dist/entries/wallet");
var Body_1 = require("@tonkeeper/uikit/dist/components/Body");
var CopyNotification_1 = require("@tonkeeper/uikit/dist/components/CopyNotification");
var Footer_1 = require("@tonkeeper/uikit/dist/components/Footer");
var Header_1 = require("@tonkeeper/uikit/dist/components/Header");
var Icon_1 = require("@tonkeeper/uikit/dist/components/Icon");
var List_1 = require("@tonkeeper/uikit/dist/components/List");
var Loading_1 = require("@tonkeeper/uikit/dist/components/Loading");
var MemoryScroll_1 = __importDefault(require("@tonkeeper/uikit/dist/components/MemoryScroll"));
var Skeleton_1 = require("@tonkeeper/uikit/dist/components/Skeleton");
var SubHeader_1 = require("@tonkeeper/uikit/dist/components/SubHeader");
var appContext_1 = require("@tonkeeper/uikit/dist/hooks/appContext");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var storage_1 = require("@tonkeeper/uikit/dist/hooks/storage");
var translation_1 = require("@tonkeeper/uikit/dist/hooks/translation");
var routes_1 = require("@tonkeeper/uikit/dist/libs/routes");
var Unlock_1 = require("@tonkeeper/uikit/dist/pages/home/Unlock");
var sdk_1 = require("@tma.js/sdk");
var sdk_react_1 = require("@tma.js/sdk-react");
var ModalsRoot_1 = require("@tonkeeper/uikit/dist/components/ModalsRoot");
var analytics_1 = require("@tonkeeper/uikit/dist/hooks/analytics");
var lock_1 = require("@tonkeeper/uikit/dist/hooks/lock");
var useDebuggingTools_1 = require("@tonkeeper/uikit/dist/hooks/useDebuggingTools");
var UnlockNotification_1 = require("@tonkeeper/uikit/dist/pages/home/UnlockNotification");
var dev_1 = require("@tonkeeper/uikit/dist/state/dev");
var fiat_1 = require("@tonkeeper/uikit/dist/state/fiat");
var language_1 = require("@tonkeeper/uikit/dist/state/language");
var useSwapMobileNotification_1 = require("@tonkeeper/uikit/dist/state/swap/useSwapMobileNotification");
var tonendpoint_1 = require("@tonkeeper/uikit/dist/state/tonendpoint");
var wallet_2 = require("@tonkeeper/uikit/dist/state/wallet");
var defaultTheme_1 = require("@tonkeeper/uikit/dist/styles/defaultTheme");
var globalStyle_1 = require("@tonkeeper/uikit/dist/styles/globalStyle");
var lightTheme_1 = require("@tonkeeper/uikit/dist/styles/lightTheme");
var react_1 = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = __importStar(require("styled-components"));
var ErrorBoundary_1 = __importDefault(require("./components/ErrorBoundary"));
var InitData_1 = require("./components/InitData");
var ReceiveNotifications_1 = require("./components/ReceiveNotifications");
var TwaQrScanner_1 = require("./components/TwaQrScanner");
var NftNotification_1 = require("./components/nft/NftNotification");
var SwapNotification_1 = require("./components/swap/SwapNotification");
var SendNotifications_1 = require("./components/transfer/SendNotifications");
var appSdk_2 = require("./libs/appSdk");
var hooks_1 = require("./libs/hooks");
var global_preferences_1 = require("@tonkeeper/uikit/dist/state/global-preferences");
var globalSetup_1 = require("@tonkeeper/uikit/dist/state/globalSetup");
var useNavigate_1 = require("@tonkeeper/uikit/dist/hooks/router/useNavigate");
var realtime_1 = require("@tonkeeper/uikit/dist/hooks/realtime");
var RedirectFromDesktopSettings_1 = require("@tonkeeper/uikit/dist/pages/settings/RedirectFromDesktopSettings");
var Initialize = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/import/Initialize')); }); });
var ImportRouter = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/import')); }); });
var Browser = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/browser')); }); });
var Settings = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/settings')); }); });
var Activity = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/activity/Activity')); }); });
var Home = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/home/Home')); }); });
var Coin = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/pages/coin/Coin')); }); });
var WebTonConnectSubscription = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/components/connect/WebTonConnectSubscription')); }); });
var PairSignerNotification = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/components/PairSignerNotification')); }); });
var PairKeystoneNotification = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(require('@tonkeeper/uikit/dist/components/PairKeystoneNotification')); }); });
var queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30000,
            refetchOnWindowFocus: false
        }
    }
});
var TARGET_ENV = 'twa';
var App = function () {
    return (<ErrorBoundary_1["default"]>
            <sdk_react_1.SDKProvider>
                <react_query_1.QueryClientProvider client={queryClient}>
                    <TwaLoader />
                </react_query_1.QueryClientProvider>
            </sdk_react_1.SDKProvider>
        </ErrorBoundary_1["default"]>);
};
exports.App = App;
var TwaLoader = function () {
    var _a = (0, react_query_1.useQuery)(['sdk'], function () { return __awaiter(void 0, void 0, void 0, function () {
        var willViewport, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    willViewport = (0, sdk_1.initViewport)()[0];
                    _a = appSdk_2.TwaAppSdk.bind;
                    return [4 /*yield*/, willViewport];
                case 1: return [2 /*return*/, new (_a.apply(appSdk_2.TwaAppSdk, [void 0, _b.sent()]))()];
            }
        });
    }); }), sdk = _a.data, error = _a.error;
    (0, react_1.useEffect)(function () {
        if (!sdk)
            return undefined;
        var theme = sdk.miniApp.isDark ? defaultTheme_1.defaultTheme : lightTheme_1.lightTheme;
        if (sdk.miniApp.supports('setBackgroundColor')) {
            sdk.miniApp.setBgColor(theme.backgroundPage);
        }
        if (sdk.miniApp.supports('setHeaderColor')) {
            sdk.miniApp.setHeaderColor(theme.backgroundPage);
        }
        sdk.mainButton.setBgColor(theme.buttonPrimaryBackground);
        sdk.mainButton.setTextColor(theme.buttonPrimaryForeground);
        document.body.style.backgroundColor = theme.backgroundPage;
    }, [sdk]);
    if (error instanceof Error) {
        return <div>{error.message}</div>;
    }
    if (!sdk || sdk == null) {
        return <div></div>;
    }
    return (<appSdk_1.AppSdkContext.Provider value={sdk}>
            <styled_components_1.ThemeProvider theme={sdk.miniApp.isDark ? defaultTheme_1.defaultTheme : lightTheme_1.lightTheme}>
                <Icon_1.DarkThemeContext.Provider value={sdk.miniApp.isDark}>
                    <globalStyle_1.GlobalStyle />
                    <TwaApp sdk={sdk}/>
                </Icon_1.DarkThemeContext.Provider>
            </styled_components_1.ThemeProvider>
        </appSdk_1.AppSdkContext.Provider>);
};
var getUsePadding = function (platform) {
    switch (platform) {
        case 'ios':
            return true;
        case 'android':
        case 'android_x':
            return false;
        default:
            return false;
    }
};
var TwaApp = function (_a) {
    var sdk = _a.sdk;
    var _b = (0, react_i18next_1.useTranslation)(), tSimple = _b.t, i18n = _b.i18n;
    var t = (0, translation_1.useTWithReplaces)(tSimple);
    var translation = (0, react_1.useMemo)(function () {
        var client = {
            t: t,
            i18n: {
                enable: false,
                reloadResources: i18n.reloadResources,
                changeLanguage: i18n.changeLanguage,
                language: i18n.language,
                languages: []
            }
        };
        return client;
    }, [t, i18n]);
    return (<react_router_dom_1.BrowserRouter>
            <translation_1.TranslationContext.Provider value={translation}>
                <storage_1.StorageContext.Provider value={sdk.storage}>
                    <Header_1.HeaderGlobalStyle />
                    <Footer_1.FooterGlobalStyle />
                    <SubHeader_1.SybHeaderGlobalStyle />
                    <List_1.GlobalListStyle />

                    <exports.Loader sdk={sdk}/>
                    <InitData_1.InitDataLogger />
                    <UnlockNotification_1.UnlockNotification sdk={sdk} usePadding={getUsePadding(sdk.launchParams.platform)}/>
                </storage_1.StorageContext.Provider>
            </translation_1.TranslationContext.Provider>
        </react_router_dom_1.BrowserRouter>);
};
var FullSizeWrapper = (0, styled_components_1["default"])(globalStyle_1.Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var Wrapper = (0, styled_components_1["default"])(FullSizeWrapper)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: var(--app-height);\n    transition: height 0.4s ease;\n\n    box-sizing: border-box;\n    padding-top: 64px;\n    padding-bottom: ", "px;\n"], ["\n    height: var(--app-height);\n    transition: height 0.4s ease;\n\n    box-sizing: border-box;\n    padding-top: 64px;\n    padding-bottom: ", "px;\n"])), function (props) { return (props.standalone ? '96' : '80'); });
var seeIfShowQrScanner = function (platform) {
    switch (platform) {
        case 'ios':
        case 'android':
        case 'android_x':
            return true;
        default:
            return false;
    }
};
var Loader = function (_a) {
    var sdk = _a.sdk;
    var _b = (0, wallet_2.useActiveAccountQuery)(), activeAccount = _b.data, activeWalletLoading = _b.isLoading;
    var _c = (0, wallet_2.useAccountsStateQuery)(), accounts = _c.data, isWalletsLoading = _c.isLoading;
    var _d = (0, language_1.useUserLanguage)(), lang = _d.data, isLangLoading = _d.isLoading;
    var fiat = (0, fiat_1.useUserFiatQuery)().data;
    var devSettings = (0, dev_1.useDevSettings)().data;
    var globalPreferencesLoading = (0, global_preferences_1.useGlobalPreferencesQuery)().isLoading;
    var globalSetupLoading = (0, globalSetup_1.useGlobalSetup)().isLoading;
    var lock = (0, lock_1.useLock)(sdk);
    var network = (0, wallet_2.useActiveTonNetwork)();
    var tonendpoint = (0, tonendpoint_1.useTonendpoint)({
        build: sdk.version,
        network: network,
        lang: lang,
        platform: 'twa'
    });
    var serverConfig = (0, tonendpoint_1.useTonenpointConfig)(tonendpoint).data;
    var tracker = (0, hooks_1.useAnalytics)(activeAccount || undefined, accounts, network, sdk.version).data;
    if (isWalletsLoading ||
        activeWalletLoading ||
        isLangLoading ||
        serverConfig === undefined ||
        lock === undefined ||
        fiat === undefined ||
        !devSettings ||
        globalPreferencesLoading ||
        globalSetupLoading) {
        return <Loading_1.Loading />;
    }
    var showQrScan = seeIfShowQrScanner(sdk.launchParams.platform);
    var context = {
        mainnetApi: (0, network_1.getApiConfig)(serverConfig.mainnetConfig),
        testnetApi: (0, network_1.getApiConfig)(serverConfig.testnetConfig),
        fiat: fiat,
        mainnetConfig: serverConfig.mainnetConfig,
        testnetConfig: serverConfig.testnetConfig,
        tonendpoint: tonendpoint,
        standalone: true,
        extension: false,
        ios: true,
        proFeatures: false,
        hideLedger: true,
        hideSigner: !showQrScan,
        hideKeystone: !showQrScan,
        hideQrScanner: !showQrScan,
        hideMam: true,
        hideMultisig: true,
        hideFireblocks: true,
        defaultWalletVersion: wallet_1.WalletVersion.V5R1,
        browserLength: 4,
        tracker: tracker === null || tracker === void 0 ? void 0 : tracker.track
    };
    return (<appContext_1.AppContext.Provider value={context}>
            <Content activeAccount={activeAccount} lock={lock} showQrScan={showQrScan} sdk={sdk}/>
            <CopyNotification_1.CopyNotification />
            <ModalsRoot_1.ModalsRoot />
            {showQrScan && <TwaQrScanner_1.TwaQrScanner />}
        </appContext_1.AppContext.Provider>);
};
exports.Loader = Loader;
var InitWrapper = (0, styled_components_1["default"])(globalStyle_1.Container)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    height: var(--app-height);\n    min-height: auto;\n\n    transition: height 0.4s ease;\n\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    padding: 16px;\n    box-sizing: border-box;\n    position: relative;\n"], ["\n    height: var(--app-height);\n    min-height: auto;\n\n    transition: height 0.4s ease;\n\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    padding: 16px;\n    box-sizing: border-box;\n    position: relative;\n"])));
var InitPages = function (_a) {
    var sdk = _a.sdk;
    (0, hooks_1.useTwaAppViewport)(true, sdk);
    return (<InitWrapper>
            <react_1.Suspense fallback={<Loading_1.Loading />}>
                <Initialize />
            </react_1.Suspense>
        </InitWrapper>);
};
var Content = function (_a) {
    var activeAccount = _a.activeAccount, lock = _a.lock, showQrScan = _a.showQrScan, sdk = _a.sdk;
    var location = (0, react_router_dom_1.useLocation)();
    (0, Body_1.useWindowsScroll)();
    (0, analytics_1.useTrackLocation)();
    (0, useDebuggingTools_1.useDebuggingTools)();
    (0, realtime_1.useRealtimeUpdatesInvalidation)();
    if (lock) {
        return (<FullSizeWrapper>
                <Unlock_1.Unlock />
            </FullSizeWrapper>);
    }
    if (!activeAccount || location.pathname.startsWith(routes_1.AppRoute["import"])) {
        return <InitPages sdk={sdk}/>;
    }
    return (<>
            <react_router_dom_1.Switch>
                <react_router_dom_1.Route path={routes_1.AppRoute.swap} component={SwapNotification_1.SwapScreen}/>
                <react_router_dom_1.Route path="*">
                    <MainPages showQrScan={showQrScan} sdk={sdk}/>
                </react_router_dom_1.Route>
            </react_router_dom_1.Switch>
            <react_1.Suspense>
                <PairSignerNotification />
                <PairKeystoneNotification />
            </react_1.Suspense>
        </>);
};
var TwaNotification = function (_a) {
    var children = _a.children;
    return (<NftNotification_1.TwaNftNotification>
            <ReceiveNotifications_1.TwaReceiveNotification>
                <SendNotifications_1.TwaSendNotification>{children}</SendNotifications_1.TwaSendNotification>
            </ReceiveNotifications_1.TwaReceiveNotification>
        </NftNotification_1.TwaNftNotification>);
};
var MainPages = function (_a) {
    var showQrScan = _a.showQrScan, sdk = _a.sdk;
    (0, hooks_1.useTwaAppViewport)(false, sdk);
    var isOpen = (0, useSwapMobileNotification_1.useSwapMobileNotification)()[0];
    var navigate = (0, useNavigate_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        if (isOpen) {
            navigate(routes_1.AppRoute.swap);
        }
    }, [isOpen]);
    return (<TwaNotification>
            <Wrapper standalone={getUsePadding(sdk.launchParams.platform)}>
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
                    <react_router_dom_1.Route path="*">
                        <>
                            <Header_1.Header showQrScan={showQrScan}/>
                            <Body_1.InnerBody>
                                <react_1.Suspense fallback={<Skeleton_1.HomeSkeleton />}>
                                    <Home />
                                </react_1.Suspense>
                            </Body_1.InnerBody>
                        </>
                    </react_router_dom_1.Route>
                </react_router_dom_1.Switch>
                <Footer_1.Footer standalone={getUsePadding(sdk.launchParams.platform)}/>
                <MemoryScroll_1["default"] />
                <react_1.Suspense>
                    <WebTonConnectSubscription />
                </react_1.Suspense>
            </Wrapper>
        </TwaNotification>);
};
var templateObject_1, templateObject_2, templateObject_3;
