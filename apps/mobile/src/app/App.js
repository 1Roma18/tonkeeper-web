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
exports.Loader = exports.App = exports.Providers = void 0;
var react_query_1 = require("@tanstack/react-query");
var language_1 = require("@tonkeeper/core/dist/entries/language");
var network_1 = require("@tonkeeper/core/dist/entries/network");
var wallet_1 = require("@tonkeeper/core/dist/entries/wallet");
var CopyNotification_1 = require("@tonkeeper/uikit/dist/components/CopyNotification");
var Footer_1 = require("@tonkeeper/uikit/dist/components/Footer");
var Header_1 = require("@tonkeeper/uikit/dist/components/Header");
var Icon_1 = require("@tonkeeper/uikit/dist/components/Icon");
var List_1 = require("@tonkeeper/uikit/dist/components/List");
var ModalsRoot_1 = require("@tonkeeper/uikit/dist/components/ModalsRoot");
var QrScanner_1 = __importDefault(require("@tonkeeper/uikit/dist/components/QrScanner"));
var SubHeader_1 = require("@tonkeeper/uikit/dist/components/SubHeader");
var appContext_1 = require("@tonkeeper/uikit/dist/hooks/appContext");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var lock_1 = require("@tonkeeper/uikit/dist/hooks/lock");
var storage_1 = require("@tonkeeper/uikit/dist/hooks/storage");
var translation_1 = require("@tonkeeper/uikit/dist/hooks/translation");
var UnlockNotification_1 = require("@tonkeeper/uikit/dist/pages/home/UnlockNotification");
var UserThemeProvider_1 = require("@tonkeeper/uikit/dist/providers/UserThemeProvider");
var dev_1 = require("@tonkeeper/uikit/dist/state/dev");
var fiat_1 = require("@tonkeeper/uikit/dist/state/fiat");
var language_2 = require("@tonkeeper/uikit/dist/state/language");
var pro_1 = require("@tonkeeper/uikit/dist/state/pro");
var tonendpoint_1 = require("@tonkeeper/uikit/dist/state/tonendpoint");
var wallet_2 = require("@tonkeeper/uikit/dist/state/wallet");
var globalStyle_1 = require("@tonkeeper/uikit/dist/styles/globalStyle");
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var styled_components_1 = require("styled-components");
var appSdk_2 = require("../libs/appSdk");
var aplication_id_1 = require("../libs/aplication-id");
var hooks_1 = require("../libs/hooks");
var global_preferences_1 = require("@tonkeeper/uikit/dist/state/global-preferences");
var globalSetup_1 = require("@tonkeeper/uikit/dist/state/globalSetup");
var capacitorNotifications_1 = require("../libs/capacitorNotifications");
var NarrowContent_1 = require("./app-content/NarrowContent");
var react_2 = require("@ionic/react");
var react_router_1 = require("@ionic/react-router");
var WideContent_1 = require("./app-content/WideContent");
var PublishNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/pages/signer/PublishNotification"));
var query_client_1 = require("../libs/query-client");
var localesList_1 = require("@tonkeeper/locales/localesList");
var country_1 = require("@tonkeeper/uikit/dist/state/country");
var CryptoStrategyInstaller_1 = require("@tonkeeper/uikit/dist/components/pro/CryptoStrategyInstaller");
(0, react_2.setupIonicReact)({
    swipeBackEnabled: true,
    mode: 'ios',
    navAnimation: react_2.iosTransitionAnimation
});
var GlobalStyle = (0, styled_components_1.createGlobalStyle)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", ";\n\n    body {\n        background: ", ";\n        font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;\n    }\n    \n    html, body, #root {\n        height: 100%;\n        overflow: hidden;\n    }\n\n    html.is-locked {\n        height: var(--app-height);\n    }\n\n    button, input[type=\"submit\"], input[type=\"reset\"] {\n      background: none;\n      color: inherit;\n      border: none;\n      padding: 0;\n      font: inherit;\n      cursor: pointer;\n      outline: inherit;\n    }\n    \n    * {\n      -webkit-touch-callout: none !important;\n      user-select: none;\n\n        ", "\n    }\n\n    a {\n        -webkit-user-drag: none;\n    }\n"], ["\n    ", ";\n\n    body {\n        background: ", ";\n        font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;\n    }\n    \n    html, body, #root {\n        height: 100%;\n        overflow: hidden;\n    }\n\n    html.is-locked {\n        height: var(--app-height);\n    }\n\n    button, input[type=\"submit\"], input[type=\"reset\"] {\n      background: none;\n      color: inherit;\n      border: none;\n      padding: 0;\n      font: inherit;\n      cursor: pointer;\n      outline: inherit;\n    }\n    \n    * {\n      -webkit-touch-callout: none !important;\n      user-select: none;\n\n        ", "\n    }\n\n    a {\n        -webkit-user-drag: none;\n    }\n"])), globalStyle_1.GlobalStyleCss, function (p) { return p.theme.backgroundPage; }, function () {
    return aplication_id_1.CAPACITOR_APPLICATION_ID === 'tablet' && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                overscroll-behavior: none;\n            "], ["\n                overscroll-behavior: none;\n            "])));
});
var sdk = new appSdk_2.CapacitorAppSdk();
var Providers = function () {
    var _a = (0, react_i18next_1.useTranslation)(), tSimple = _a.t, i18n = _a.i18n;
    var t = (0, translation_1.useTWithReplaces)(tSimple);
    var translation = (0, react_1.useMemo)(function () {
        var client = {
            t: t,
            i18n: {
                enable: true,
                reloadResources: i18n.reloadResources,
                changeLanguage: function (lang) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, i18n.changeLanguage(lang)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                language: i18n.language,
                languages: localesList_1.localesList
            }
        };
        return client;
    }, [t, i18n]);
    (0, react_1.useEffect)(function () {
        document.body.classList.add(aplication_id_1.CAPACITOR_APPLICATION_ID);
    }, []);
    return (<react_query_1.QueryClientProvider client={query_client_1.queryClient}>
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
var App = function () { return (<react_2.IonApp>
        <react_router_1.IonReactRouter>
            <exports.Providers />
        </react_router_1.IonReactRouter>
    </react_2.IonApp>); };
exports.App = App;
var ThemeAndContent = function () {
    var data = (0, pro_1.useProBackupState)().data;
    return (<UserThemeProvider_1.UserThemeProvider displayType="full-width" isPro isProSupported proDisplayType={aplication_id_1.CAPACITOR_APPLICATION_ID === 'mobile' ? 'mobile' : 'desktop'}>
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
var Loader = function () {
    var network = (0, wallet_2.useActiveTonNetwork)();
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
        network: network,
        lang: lang,
        platform: aplication_id_1.CAPACITOR_APPLICATION_ID === 'tablet' ? 'tablet' : 'pro_mobile_ios',
        deviceCountryCode: countryInfo === null || countryInfo === void 0 ? void 0 : countryInfo.deviceCountryCode,
        storeCountryCode: countryInfo === null || countryInfo === void 0 ? void 0 : countryInfo.storeCountryCode
    });
    var config = (0, tonendpoint_1.useTonenpointConfig)(tonendpoint).data;
    var proApiUrl = (0, pro_1.useProApiUrl)(config === null || config === void 0 ? void 0 : config.mainnetConfig).data;
    (0, hooks_1.useAppHeight)();
    var tracker = (0, hooks_1.useAnalytics)(sdk.version, config === null || config === void 0 ? void 0 : config.mainnetConfig, activeAccount, accounts).data;
    (0, react_1.useEffect)(function () {
        if (lang && i18n.language !== (0, language_1.localizationText)(lang)) {
            i18n.reloadResources([(0, language_1.localizationText)(lang)]).then(function () {
                return i18n.changeLanguage((0, language_1.localizationText)(lang));
            });
        }
    }, [lang, i18n]);
    (0, react_1.useEffect)(function () {
        if (config && config.mainnetConfig.tonapiIOEndpoint) {
            sdk.notifications = new capacitorNotifications_1.CapacitorNotifications(config.mainnetConfig, sdk.storage);
        }
    }, [config]);
    if (activeWalletLoading ||
        isLangLoading ||
        isWalletsLoading ||
        config === undefined ||
        lock === undefined ||
        fiat === undefined ||
        proApiUrl === undefined ||
        !devSettings ||
        globalPreferencesLoading ||
        globalSetupLoading) {
        return null;
    }
    // set api url synchronously
    (0, network_1.setProApiUrl)(proApiUrl);
    var context = {
        mainnetApi: (0, network_1.getApiConfig)(config.mainnetConfig),
        testnetApi: (0, network_1.getApiConfig)(config.testnetConfig),
        fiat: fiat,
        mainnetConfig: config.mainnetConfig,
        testnetConfig: config.testnetConfig,
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
                <Content activeAccount={activeAccount} lock={lock}/>
                <CopyNotification_1.CopyNotification />
                <QrScanner_1["default"] />
                <ModalsRoot_1.ModalsRoot />
                <PublishNotification_1["default"] />
            </CryptoStrategyInstaller_1.CryptoStrategyInstaller>
        </appContext_1.AppContext.Provider>);
};
exports.Loader = Loader;
var Content = function (props) {
    if (aplication_id_1.CAPACITOR_APPLICATION_ID === 'mobile') {
        return <NarrowContent_1.NarrowContent {...props}/>;
    }
    return <WideContent_1.WideContent {...props}/>;
};
var templateObject_1, templateObject_2;
