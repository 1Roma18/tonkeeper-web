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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Content = exports.Loader = exports.App = exports.Providers = void 0;
var react_query_1 = require("@tanstack/react-query");
var language_1 = require("@tonkeeper/core/dist/entries/language");
var network_1 = require("@tonkeeper/core/dist/entries/network");
var wallet_1 = require("@tonkeeper/core/dist/entries/wallet");
var Body_1 = require("@tonkeeper/uikit/dist/components/Body");
var ConnectLedgerNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/ConnectLedgerNotification"));
var CopyNotification_1 = require("@tonkeeper/uikit/dist/components/CopyNotification");
var Footer_1 = require("@tonkeeper/uikit/dist/components/Footer");
var Header_1 = require("@tonkeeper/uikit/dist/components/Header");
var Icon_1 = require("@tonkeeper/uikit/dist/components/Icon");
var List_1 = require("@tonkeeper/uikit/dist/components/List");
var Loading_1 = require("@tonkeeper/uikit/dist/components/Loading");
var MemoryScroll_1 = __importDefault(require("@tonkeeper/uikit/dist/components/MemoryScroll"));
var ModalsRoot_1 = require("@tonkeeper/uikit/dist/components/ModalsRoot");
var PairKeystoneNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/PairKeystoneNotification"));
var PairSignerNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/PairSignerNotification"));
var QrScanner_1 = __importDefault(require("@tonkeeper/uikit/dist/components/QrScanner"));
var SubHeader_1 = require("@tonkeeper/uikit/dist/components/SubHeader");
var AsideMenu_1 = require("@tonkeeper/uikit/dist/components/desktop/aside/AsideMenu");
var PreferencesAsideMenu_1 = require("@tonkeeper/uikit/dist/components/desktop/aside/PreferencesAsideMenu");
var WalletAsideMenu_1 = require("@tonkeeper/uikit/dist/components/desktop/aside/WalletAsideMenu");
var DesktopHeaderElements_1 = require("@tonkeeper/uikit/dist/components/desktop/header/DesktopHeaderElements");
var DesktopPreferencesHeader_1 = require("@tonkeeper/uikit/dist/components/desktop/header/DesktopPreferencesHeader");
var DesktopWalletHeader_1 = require("@tonkeeper/uikit/dist/components/desktop/header/DesktopWalletHeader");
var ReceiveNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/home/ReceiveNotification"));
var NftNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/nft/NftNotification"));
var FavoriteNotification_1 = require("@tonkeeper/uikit/dist/components/transfer/FavoriteNotification");
var SendNotifications_1 = __importDefault(require("@tonkeeper/uikit/dist/components/transfer/SendNotifications"));
var SendNftNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/transfer/nft/SendNftNotification"));
var browser_1 = __importDefault(require("@tonkeeper/uikit/dist/desktop-pages/browser"));
var DesktopCoinPage_1 = require("@tonkeeper/uikit/dist/desktop-pages/coin/DesktopCoinPage");
var dashboard_1 = __importDefault(require("@tonkeeper/uikit/dist/desktop-pages/dashboard"));
var DesktopHistoryPage_1 = require("@tonkeeper/uikit/dist/desktop-pages/history/DesktopHistoryPage");
var multi_send_1 = require("@tonkeeper/uikit/dist/desktop-pages/multi-send");
var DesktopCollectables_1 = require("@tonkeeper/uikit/dist/desktop-pages/nft/DesktopCollectables");
var DesktopDns_1 = require("@tonkeeper/uikit/dist/desktop-pages/nft/DesktopDns");
var DesktopPreferencesRouting_1 = require("@tonkeeper/uikit/dist/desktop-pages/preferences/DesktopPreferencesRouting");
var DesktopWalletSettingsRouting_1 = require("@tonkeeper/uikit/dist/desktop-pages/settings/DesktopWalletSettingsRouting");
var DesktopAccountSettingsPage_1 = __importDefault(require("@tonkeeper/uikit/dist/desktop-pages/settings/DesktopAccountSettingsPage"));
var swap_1 = require("@tonkeeper/uikit/dist/desktop-pages/swap");
var staking_1 = require("@tonkeeper/uikit/dist/desktop-pages/staking");
var DesktopTokens_1 = require("@tonkeeper/uikit/dist/desktop-pages/tokens/DesktopTokens");
var analytics_1 = require("@tonkeeper/uikit/dist/hooks/analytics");
var appContext_1 = require("@tonkeeper/uikit/dist/hooks/appContext");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var useRecommendations_1 = require("@tonkeeper/uikit/dist/hooks/browser/useRecommendations");
var lock_1 = require("@tonkeeper/uikit/dist/hooks/lock");
var storage_1 = require("@tonkeeper/uikit/dist/hooks/storage");
var translation_1 = require("@tonkeeper/uikit/dist/hooks/translation");
var useDebuggingTools_1 = require("@tonkeeper/uikit/dist/hooks/useDebuggingTools");
var routes_1 = require("@tonkeeper/uikit/dist/libs/routes");
var Unlock_1 = require("@tonkeeper/uikit/dist/pages/home/Unlock");
var UnlockNotification_1 = require("@tonkeeper/uikit/dist/pages/home/UnlockNotification");
var Initialize_1 = __importStar(require("@tonkeeper/uikit/dist/pages/import/Initialize"));
var UserThemeProvider_1 = require("@tonkeeper/uikit/dist/providers/UserThemeProvider");
var dev_1 = require("@tonkeeper/uikit/dist/state/dev");
var fiat_1 = require("@tonkeeper/uikit/dist/state/fiat");
var language_2 = require("@tonkeeper/uikit/dist/state/language");
var password_1 = require("@tonkeeper/uikit/dist/state/password");
var pro_1 = require("@tonkeeper/uikit/dist/state/pro");
var tonendpoint_1 = require("@tonkeeper/uikit/dist/state/tonendpoint");
var wallet_2 = require("@tonkeeper/uikit/dist/state/wallet");
var globalStyle_1 = require("@tonkeeper/uikit/dist/styles/globalStyle");
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = __importStar(require("styled-components"));
var appSdk_2 = require("../libs/appSdk");
var hooks_1 = require("../libs/hooks");
var DeepLink_1 = require("./components/DeepLink");
var TonConnectSubscription_1 = require("./components/TonConnectSubscription");
var UpdateBanner_1 = require("./components/UpdateBanner");
var global_preferences_1 = require("@tonkeeper/uikit/dist/state/global-preferences");
var DesktopManageMultisigs_1 = require("@tonkeeper/uikit/dist/desktop-pages/manage-multisig-wallets/DesktopManageMultisigs");
var globalSetup_1 = require("@tonkeeper/uikit/dist/state/globalSetup");
var DesktopMultisigOrders_1 = require("@tonkeeper/uikit/dist/desktop-pages/multisig-orders/DesktopMultisigOrders");
var realtime_1 = require("@tonkeeper/uikit/dist/hooks/realtime");
var CryptoStrategyInstaller_1 = require("@tonkeeper/uikit/dist/components/pro/CryptoStrategyInstaller");
var localesList_1 = require("@tonkeeper/locales/localesList");
var country_1 = require("@tonkeeper/uikit/dist/state/country");
var SecureWalletNotification_1 = require("@tonkeeper/uikit/dist/components/desktop/SecureWalletNotification");
var DesktopCancelLegacySubscriptionBanner_1 = require("@tonkeeper/uikit/dist/components/legacy-plugins/DesktopCancelLegacySubscriptionBanner");
var queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30000,
            refetchOnWindowFocus: false
        }
    }
});
var GlobalStyle = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    \n    body {\n        font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;\n    }\n    \n    html, body, #root {\n        height: 100%;\n        overflow: hidden;\n    }\n\n    html.is-locked {\n        height: var(--app-height);\n    }\n\n    button, input[type=\"submit\"], input[type=\"reset\"] {\n      background: none;\n      color: inherit;\n      border: none;\n      padding: 0;\n      font: inherit;\n      cursor: pointer;\n      outline: inherit;\n    }\n"], ["\n    ", ";\n    \n    body {\n        font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;\n    }\n    \n    html, body, #root {\n        height: 100%;\n        overflow: hidden;\n    }\n\n    html.is-locked {\n        height: var(--app-height);\n    }\n\n    button, input[type=\"submit\"], input[type=\"reset\"] {\n      background: none;\n      color: inherit;\n      border: none;\n      padding: 0;\n      font: inherit;\n      cursor: pointer;\n      outline: inherit;\n    }\n"])), globalStyle_1.GlobalStyleCss);
var sdk = new appSdk_2.DesktopAppSdk();
var Providers = function () {
    var _a = (0, react_i18next_1.useTranslation)(), tSimple = _a.t, i18n = _a.i18n;
    var t = (0, translation_1.useTWithReplaces)(tSimple);
    var translation = (0, react_1.useMemo)(function () {
        var client = {
            t: t,
            i18n: {
                enable: true,
                reloadResources: i18n.reloadResources,
                changeLanguage: i18n.changeLanguage,
                language: i18n.language,
                languages: localesList_1.localesList
            }
        };
        return client;
    }, [t, i18n]);
    (0, react_1.useEffect)(function () {
        document.body.classList.add(window.backgroundApi.platform());
    }, []);
    return (<react_query_1.QueryClientProvider client={queryClient}>
            <react_1.Suspense fallback={<div></div>}>
                <appSdk_1.AppSdkContext.Provider value={sdk}>
                    <translation_1.TranslationContext.Provider value={translation}>
                        <storage_1.StorageContext.Provider value={sdk.storage}>
                            <ThemeAndContent />
                        </storage_1.StorageContext.Provider>
                    </translation_1.TranslationContext.Provider>
                </appSdk_1.AppSdkContext.Provider>
            </react_1.Suspense>
        </react_query_1.QueryClientProvider>);
};
exports.Providers = Providers;
var App = function () {
    return (<react_router_dom_1.MemoryRouter>
            <exports.Providers />
        </react_router_dom_1.MemoryRouter>);
};
exports.App = App;
var ThemeAndContent = function () {
    var data = (0, pro_1.useProBackupState)().data;
    return (<UserThemeProvider_1.UserThemeProvider displayType="full-width" isPro={Boolean(data === null || data === void 0 ? void 0 : data.valid)} isProSupported proDisplayType="desktop">
            <Icon_1.DarkThemeContext.Provider value={!(data === null || data === void 0 ? void 0 : data.valid)}>
                <GlobalStyle />
                <Header_1.HeaderGlobalStyle />
                <Footer_1.FooterGlobalStyle />
                <SubHeader_1.SybHeaderGlobalStyle />
                <List_1.GlobalListStyle />
                <exports.Loader />
                <UnlockNotification_1.UnlockNotification sdk={sdk}/>
            </Icon_1.DarkThemeContext.Provider>
        </UserThemeProvider_1.UserThemeProvider>);
};
var FullSizeWrapper = (0, styled_components_1["default"])(globalStyle_1.Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    max-width: 800px;\n"], ["\n    max-width: 800px;\n"])));
var Wrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    box-sizing: border-box;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: ", ";\n    white-space: pre-wrap;\n"], ["\n    box-sizing: border-box;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: ", ";\n    white-space: pre-wrap;\n"])), function (props) { return props.theme.backgroundPage; });
var WideLayout = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n"], ["\n    width: 100%;\n    height: 100%;\n    display: flex;\n"])));
var WideContent = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    flex: 1;\n    min-width: 0;\n    min-height: 0;\n"], ["\n    flex: 1;\n    min-width: 0;\n    min-height: 0;\n"])));
var WalletLayout = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n"])));
var WalletLayoutBody = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    position: relative;\n    flex: 1;\n    display: flex;\n    max-height: calc(100% - ", ");\n"], ["\n    position: relative;\n    flex: 1;\n    display: flex;\n    max-height: calc(100% - ", ");\n"])), DesktopHeaderElements_1.desktopHeaderContainerHeight);
var WalletRoutingWrapper = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    flex: 1;\n    overflow: auto;\n    position: relative;\n"], ["\n    flex: 1;\n    overflow: auto;\n    position: relative;\n"])));
var PreferencesLayout = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    height: calc(100% - ", ");\n    display: flex;\n    overflow: auto;\n"], ["\n    height: calc(100% - ", ");\n    display: flex;\n    overflow: auto;\n"])), DesktopHeaderElements_1.desktopHeaderContainerHeight);
var PreferencesRoutingWrapper = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    flex: 1;\n    overflow: auto;\n    position: relative;\n"], ["\n    flex: 1;\n    overflow: auto;\n    position: relative;\n"])));
var FullSizeWrapperBounded = (0, styled_components_1["default"])(FullSizeWrapper)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    max-height: 100%;\n    overflow: auto;\n    justify-content: center;\n"], ["\n    max-height: 100%;\n    overflow: auto;\n    justify-content: center;\n"])));
var Loader = function () {
    var _a = (0, wallet_2.useActiveAccountQuery)(), activeAccount = _a.data, activeWalletLoading = _a.isLoading;
    var _b = (0, wallet_2.useAccountsStateQuery)(), accounts = _b.data, isWalletsLoading = _b.isLoading;
    var _c = (0, language_2.useUserLanguage)(), lang = _c.data, isLangLoading = _c.isLoading;
    var devSettings = (0, dev_1.useDevSettings)().data;
    var globalPreferencesLoading = (0, global_preferences_1.useGlobalPreferencesQuery)().isLoading;
    var globalSetupLoading = (0, globalSetup_1.useGlobalSetup)().isLoading;
    var countryInfo = (0, country_1.useAppCountryInfo)().data;
    var lock = (0, lock_1.useLock)(sdk);
    var i18n = (0, react_i18next_1.useTranslation)().i18n;
    var fiat = (0, fiat_1.useUserFiatQuery)().data;
    var tonendpoint = (0, tonendpoint_1.useTonendpoint)({
        build: sdk.version,
        lang: lang,
        platform: 'desktop',
        deviceCountryCode: countryInfo === null || countryInfo === void 0 ? void 0 : countryInfo.deviceCountryCode,
        storeCountryCode: countryInfo === null || countryInfo === void 0 ? void 0 : countryInfo.storeCountryCode
    });
    var serverConfig = (0, tonendpoint_1.useTonenpointConfig)(tonendpoint).data;
    var proApiUrl = (0, pro_1.useProApiUrl)(serverConfig === null || serverConfig === void 0 ? void 0 : serverConfig.mainnetConfig).data;
    (0, hooks_1.useAppHeight)();
    var tracker = (0, hooks_1.useAnalytics)(sdk.version, serverConfig === null || serverConfig === void 0 ? void 0 : serverConfig.mainnetConfig, activeAccount, accounts).data;
    (0, react_1.useEffect)(function () {
        if (lang && i18n.language !== (0, language_1.localizationText)(lang)) {
            i18n.reloadResources([(0, language_1.localizationText)(lang)]).then(function () {
                return i18n.changeLanguage((0, language_1.localizationText)(lang));
            });
        }
    }, [lang, i18n]);
    (0, react_1.useEffect)(function () {
        window.backgroundApi.onRefresh(function () { return queryClient.invalidateQueries(); });
    }, []);
    if (activeWalletLoading ||
        isLangLoading ||
        isWalletsLoading ||
        serverConfig === undefined ||
        lock === undefined ||
        fiat === undefined ||
        proApiUrl === undefined ||
        !devSettings ||
        globalPreferencesLoading ||
        globalSetupLoading) {
        return <Loading_1.Loading />;
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
        standalone: true,
        extension: false,
        proFeatures: true,
        experimental: true,
        ios: false,
        defaultWalletVersion: wallet_1.WalletVersion.V5R1,
        tracker: tracker === null || tracker === void 0 ? void 0 : tracker.track
    };
    return (<appContext_1.AppContext.Provider value={context}>
            <CryptoStrategyInstaller_1.CryptoStrategyInstaller>
                <exports.Content activeAccount={activeAccount} lock={lock}/>
                <CopyNotification_1.CopyNotification hideSimpleCopyNotifications/>
                <QrScanner_1["default"] />
                <ModalsRoot_1.ModalsRoot />
                <UpdateBanner_1.UpdateBanner />
            </CryptoStrategyInstaller_1.CryptoStrategyInstaller>
        </appContext_1.AppContext.Provider>);
};
exports.Loader = Loader;
var usePrefetch = function () {
    (0, useRecommendations_1.useRecommendations)();
    (0, password_1.useCanPromptTouchId)();
};
var Content = function (_a) {
    var activeAccount = _a.activeAccount, lock = _a.lock;
    var location = (0, react_router_dom_1.useLocation)();
    (0, Body_1.useWindowsScroll)();
    (0, hooks_1.useAppWidth)();
    (0, analytics_1.useTrackLocation)();
    usePrefetch();
    (0, useDebuggingTools_1.useDebuggingTools)();
    (0, realtime_1.useRealtimeUpdatesInvalidation)();
    if (lock) {
        return <Unlock_1.Unlock />;
    }
    if (!activeAccount || location.pathname.startsWith(routes_1.AppRoute["import"])) {
        return (<FullSizeWrapperBounded className="full-size-wrapper">
                <Initialize_1.InitializeContainer fullHeight={false}>
                    <Initialize_1["default"] />
                </Initialize_1.InitializeContainer>
            </FullSizeWrapperBounded>);
    }
    return (<WideLayout>
            <AsideMenu_1.AsideMenu />
            <WideContent>
                <react_router_dom_1.Switch>
                    <react_router_dom_1.Route path={routes_1.AppProRoute.dashboard} component={dashboard_1["default"]}/>
                    <react_router_dom_1.Route path={routes_1.AppRoute.browser} component={browser_1["default"]}/>
                    <react_router_dom_1.Route path={routes_1.AppRoute.settings} component={PreferencesContent}/>
                    <react_router_dom_1.Route path={routes_1.AppProRoute.multiSend} component={multi_send_1.DesktopMultiSendPage}/>
                    <react_router_dom_1.Route path={routes_1.AppRoute.accountSettings} component={DesktopAccountSettingsPage_1["default"]}/>
                    <react_router_dom_1.Route path="*" component={WalletContent}/>
                </react_router_dom_1.Switch>
            </WideContent>
            <BackgroundElements />
        </WideLayout>);
};
exports.Content = Content;
var WalletContent = function () {
    return (<WalletLayout>
            <DesktopWalletHeader_1.DesktopWalletHeader />

            <WalletLayoutBody>
                <WalletAsideMenu_1.WalletAsideMenu />
                <WalletRoutingWrapper className="hide-scrollbar">
                    <Wrapper>
                        <react_router_dom_1.Switch>
                            <react_router_dom_1.Route path={routes_1.AppRoute.activity} component={DesktopHistoryPage_1.DesktopHistoryPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.purchases} component={DesktopCollectables_1.DesktopCollectables}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.dns} component={DesktopDns_1.DesktopDns}/>
                            <react_router_dom_1.Route path={"".concat(routes_1.AppRoute.coins, "/:name")} component={DesktopCoinPage_1.DesktopCoinPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.multisigWallets} component={DesktopManageMultisigs_1.DesktopManageMultisigsPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.multisigOrders} component={DesktopMultisigOrders_1.DesktopMultisigOrdersPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings} component={DesktopWalletSettingsRouting_1.DesktopWalletSettingsRouting}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.swap} component={swap_1.DesktopSwapPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.staking} component={staking_1.DesktopStakingPage}/>
                            <react_router_dom_1.Route path="*" component={DesktopTokens_1.DesktopTokens}/>
                        </react_router_dom_1.Switch>
                        <MemoryScroll_1["default"] />
                    </Wrapper>
                </WalletRoutingWrapper>
                <DesktopCancelLegacySubscriptionBanner_1.DesktopCancelLegacySubscriptionBanner />
            </WalletLayoutBody>
        </WalletLayout>);
};
var PreferencesContent = function () {
    return (<>
            <DesktopPreferencesHeader_1.DesktopPreferencesHeader />
            <PreferencesLayout>
                <PreferencesAsideMenu_1.PreferencesAsideMenu />
                <PreferencesRoutingWrapper className="hide-scrollbar">
                    <DesktopPreferencesRouting_1.DesktopPreferencesRouting />
                </PreferencesRoutingWrapper>
            </PreferencesLayout>
        </>);
};
var BackgroundElements = function () {
    return (<>
            <SendNotifications_1["default"] />
            <ReceiveNotification_1["default"] />
            <TonConnectSubscription_1.TonConnectSubscription />
            <NftNotification_1["default"] />
            <SendNftNotification_1["default"] />
            <FavoriteNotification_1.AddFavoriteNotification />
            <FavoriteNotification_1.EditFavoriteNotification />
            <DeepLink_1.DeepLinkSubscription />
            <PairSignerNotification_1["default"] />
            <ConnectLedgerNotification_1["default"] />
            <PairKeystoneNotification_1["default"] />
            <SecureWalletNotification_1.SecureWalletNotification />
        </>);
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
