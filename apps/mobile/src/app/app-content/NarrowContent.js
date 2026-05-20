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
exports.NarrowEnvGlobalStyles = exports.NarrowContent = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Body_1 = require("@tonkeeper/uikit/dist/components/Body");
var hooks_1 = require("../../libs/hooks");
var analytics_1 = require("@tonkeeper/uikit/dist/hooks/analytics");
var useDebuggingTools_1 = require("@tonkeeper/uikit/dist/hooks/useDebuggingTools");
var routes_1 = require("@tonkeeper/uikit/dist/libs/routes");
var multi_send_1 = require("@tonkeeper/uikit/dist/desktop-pages/multi-send");
var DesktopAccountSettingsPage_1 = __importDefault(require("@tonkeeper/uikit/dist/desktop-pages/settings/DesktopAccountSettingsPage"));
var DesktopCollectables_1 = require("@tonkeeper/uikit/dist/desktop-pages/nft/DesktopCollectables");
var DesktopDns_1 = require("@tonkeeper/uikit/dist/desktop-pages/nft/DesktopDns");
var DesktopCoinPage_1 = require("@tonkeeper/uikit/dist/desktop-pages/coin/DesktopCoinPage");
var DesktopManageMultisigs_1 = require("@tonkeeper/uikit/dist/desktop-pages/manage-multisig-wallets/DesktopManageMultisigs");
var DesktopMultisigOrders_1 = require("@tonkeeper/uikit/dist/desktop-pages/multisig-orders/DesktopMultisigOrders");
var swap_1 = require("@tonkeeper/uikit/dist/desktop-pages/swap");
var styled_components_1 = __importStar(require("styled-components"));
var common_1 = require("./common");
require("./ionic-styles");
var react_2 = require("@ionic/react");
var DesktopHistoryPage_1 = require("@tonkeeper/uikit/dist/desktop-pages/history/DesktopHistoryPage");
var DesktopConnectedAppsSettings_1 = require("@tonkeeper/uikit/dist/desktop-pages/settings/DesktopConnectedAppsSettings");
var DesktopNftSettings_1 = require("@tonkeeper/uikit/dist/desktop-pages/settings/DesktopNftSettings");
var MamIndexes_1 = require("@tonkeeper/uikit/dist/pages/settings/MamIndexes");
var Battery_1 = require("@tonkeeper/uikit/dist/pages/settings/Battery");
var Version_1 = require("@tonkeeper/uikit/dist/pages/settings/Version");
var LedgerIndexes_1 = require("@tonkeeper/uikit/dist/pages/settings/LedgerIndexes");
var TwoFA_1 = require("@tonkeeper/uikit/dist/pages/settings/TwoFA");
var Notification_1 = require("@tonkeeper/uikit/dist/pages/settings/Notification");
var DesktopWalletSettingsPage_1 = require("@tonkeeper/uikit/dist/desktop-pages/settings/DesktopWalletSettingsPage");
var Recovery_1 = require("@tonkeeper/uikit/dist/pages/settings/Recovery");
var Jettons_1 = require("@tonkeeper/uikit/dist/pages/settings/Jettons");
var AsideMenu_1 = require("@tonkeeper/uikit/dist/components/desktop/aside/AsideMenu");
var MobileProHomePage_1 = require("@tonkeeper/uikit/dist/mobile-pro-pages/MobileProHomePage");
var DesktopTokens_1 = require("@tonkeeper/uikit/dist/desktop-pages/tokens/DesktopTokens");
var MobileProFooter_1 = require("@tonkeeper/uikit/dist/components/mobile-pro/footer/MobileProFooter");
var MobileProWalletMenu_1 = require("@tonkeeper/uikit/dist/components/mobile-pro/MobileProWalletMenu");
var ionic_override_1 = require("./ionic-override");
var Navigate_1 = require("@tonkeeper/uikit/dist/components/shared/Navigate");
var MobileProPreferencesPage_1 = require("@tonkeeper/uikit/dist/mobile-pro-pages/MobileProPreferencesPage");
var DesktopManageWalletsSettings_1 = require("@tonkeeper/uikit/dist/desktop-pages/settings/DesktopManageWalletsSettings");
var Localization_1 = require("@tonkeeper/uikit/dist/pages/settings/Localization");
var Legal_1 = require("@tonkeeper/uikit/dist/pages/settings/Legal");
var Theme_1 = require("@tonkeeper/uikit/dist/pages/settings/Theme");
var Dev_1 = require("@tonkeeper/uikit/dist/pages/settings/Dev");
var FiatCurrency_1 = require("@tonkeeper/uikit/dist/pages/settings/FiatCurrency");
var Security_1 = require("@tonkeeper/uikit/dist/pages/settings/Security");
var react_router_1 = require("@ionic/react-router");
var isolated_memory_history_1 = require("../../libs/isolated-memory-history");
var splash_screen_1 = require("@capacitor/splash-screen");
var home_1 = require("@tonkeeper/uikit/dist/state/home");
var MobileProWelcomePage_1 = require("@tonkeeper/uikit/dist/mobile-pro-pages/MobileProWelcomePage");
var MobileProCreatePasswordPage_1 = require("@tonkeeper/uikit/dist/mobile-pro-pages/MobileProCreatePasswordPage");
var password_1 = require("@tonkeeper/uikit/dist/state/password");
var wallet_1 = require("@tonkeeper/uikit/dist/state/wallet");
var useAtom_1 = require("@tonkeeper/uikit/dist/libs/useAtom");
var useNavigate_1 = require("@tonkeeper/uikit/dist/hooks/router/useNavigate");
var framer_motion_1 = require("framer-motion");
var MobileProPin_1 = require("@tonkeeper/uikit/dist/components/mobile-pro/pin/MobileProPin");
var react_i18next_1 = require("react-i18next");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var realtime_1 = require("@tonkeeper/uikit/dist/hooks/realtime");
var uikit_1 = require("@tonkeeper/uikit");
var MobileDappBrowserController_1 = require("../components/dapp-browser/MobileDappBrowserController");
var ProSubscriptionSettings_1 = require("@tonkeeper/uikit/dist/components/settings/ProSubscriptionSettings");
var useLocation_1 = require("@tonkeeper/uikit/dist/hooks/router/useLocation");
var staking_1 = require("@tonkeeper/uikit/dist/desktop-pages/staking");
var WideLayout = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n"], ["\n    width: 100%;\n    height: 100%;\n    display: flex;\n"])));
var WideContent = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    flex: 1;\n    min-width: 0;\n    min-height: 0;\n"], ["\n    flex: 1;\n    min-width: 0;\n    min-height: 0;\n"])));
var WalletLayout = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    position: relative;\n"], ["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    position: relative;\n"])));
var WalletLayoutBody = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    position: relative;\n    flex: 1;\n    display: flex;\n"], ["\n    position: relative;\n    flex: 1;\n    display: flex;\n"])));
var NarrowContent = function (_a) {
    var activeAccount = _a.activeAccount, lock = _a.lock;
    return (<>
            <exports.NarrowEnvGlobalStyles />
            <NarrowContentBody activeAccount={activeAccount} lock={lock}/>
        </>);
};
exports.NarrowContent = NarrowContent;
var NarrowContentBody = function (_a) {
    var activeAccount = _a.activeAccount, lock = _a.lock;
    (0, Body_1.useWindowsScroll)();
    (0, hooks_1.useAppWidth)();
    (0, analytics_1.useTrackLocation)();
    (0, common_1.usePrefetch)();
    (0, useDebuggingTools_1.useDebuggingTools)();
    (0, realtime_1.useRealtimeUpdatesInvalidation)();
    var password = (0, password_1.useKeychainSecuritySettings)().password;
    var accountQuery = (0, wallet_1.useActiveAccountQuery)();
    if (lock) {
        return <NarrowContentInitialPagesLock />;
    }
    if (!activeAccount || !password || !accountQuery.data) {
        return <NarrowContentInitialPages accountIsCreated={!!activeAccount}/>;
    }
    return <NarrowContentAppRouting />;
};
var UnlockPageStyled = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: relative;\n    padding-bottom: env(safe-area-inset-bottom);\n    height: 100%;\n    box-sizing: border-box;\n\n    > button {\n        z-index: 2;\n        position: absolute;\n        top: calc(1rem + env(safe-area-inset-top));\n        right: 1rem;\n    }\n"], ["\n    position: relative;\n    padding-bottom: env(safe-area-inset-bottom);\n    height: 100%;\n    box-sizing: border-box;\n\n    > button {\n        z-index: 2;\n        position: absolute;\n        top: calc(1rem + env(safe-area-inset-top));\n        right: 1rem;\n    }\n"])));
var NarrowContentInitialPagesLock = function () {
    var t = (0, react_i18next_1.useTranslation)().t;
    var biometry = (0, password_1.useKeychainSecuritySettings)().biometry;
    var sdk = (0, appSdk_1.useAppSdk)();
    var _a = (0, react_1.useState)(), faceIdValidation = _a[0], setFaceIdValidation = _a[1];
    (0, react_1.useEffect)(function () {
        splash_screen_1.SplashScreen.hide();
    }, []);
    (0, react_1.useEffect)(function () {
        var _a;
        if (biometry) {
            (_a = sdk.keychain) === null || _a === void 0 ? void 0 : _a.securityCheck('biometry').then(function () {
                setFaceIdValidation('success');
                setTimeout(function () { return sdk.uiEvents.emit('unlock'); }, 200);
            })["catch"](function () {
                setFaceIdValidation('error');
                setTimeout(function () { return setFaceIdValidation(undefined); }, 200);
            });
        }
    }, [biometry]);
    var mutateLogOut = (0, wallet_1.useMutateDeleteAll)().mutateAsync;
    var accounts = (0, wallet_1.useAccountsState)();
    var hasSeveralAccounts = accounts.length > 1;
    var onLogOut = function () { return __awaiter(void 0, void 0, void 0, function () {
        var confirmed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.confirm({
                        title: "\uD83D\uDEA7\uD83D\uDEA8\uD83D\uDEA8\uD83D\uDEA8\uD83D\uDEA7\n".concat(t(hasSeveralAccounts ? 'settings_reset_alert_title_all' : 'settings_reset_alert_title')),
                        message: t(hasSeveralAccounts ? 'logout_on_unlock_many' : 'logout_on_unlock_one'),
                        cancelButtonTitle: t('cancel'),
                        okButtonTitle: t('settings_reset')
                    })];
                case 1:
                    confirmed = _a.sent();
                    if (!confirmed) return [3 /*break*/, 3];
                    return [4 /*yield*/, mutateLogOut()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (<UnlockPageStyled>
            <uikit_1.Button secondary onClick={onLogOut}>
                {t('settings_reset')}
            </uikit_1.Button>
            <MobileProPin_1.MobileProPin title={t('enter_password')} validated={faceIdValidation} onSubmit={function (v) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sdk.keychain.checkPassword(v)];
                    case 1:
                        if (_a.sent()) {
                            setTimeout(function () {
                                sdk.uiEvents.emit('unlock');
                            }, 200);
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        }); }}/>
        </UnlockPageStyled>);
};
var NarrowContentInitialPages = function (_a) {
    var accountIsCreated = _a.accountIsCreated;
    (0, react_1.useEffect)(function () {
        splash_screen_1.SplashScreen.hide();
    }, []);
    if (!accountIsCreated) {
        return <MobileProWelcomePage_1.MobileProWelcomePage />;
    }
    return <MobileProCreatePasswordPage_1.MobileProCreatePasswordPage />;
};
var NarrowContentAppRouting = function () {
    var location = (0, react_router_dom_1.useLocation)();
    (0, home_1.useAllChainsAssetsWithPrice)();
    var isSplashHidden = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        if (!isSplashHidden.current) {
            isSplashHidden.current = true;
            splash_screen_1.SplashScreen.hide();
        }
    }, []);
    var animated = (0, useAtom_1.useAtom)(useNavigate_1.ionRouterAnimation$)[0];
    return (<WideLayout>
            <WideContent id="main-id--">
                <WalletLayout $gradient={location.pathname === routes_1.AppRoute.home}>
                    <WalletLayoutBody>
                        <react_2.IonMenu menuId="aside-nav" contentId="main-content" type="overlay">
                            <AsideMenu_1.AsideMenu />
                        </react_2.IonMenu>
                        <MobileProWalletMenu_1.MobileProWalletMenu />
                        {/* Ionic doesn't support nested routing well */}
                        <react_2.IonRouterOutlet id="main-content" animated={animated}>
                            <react_router_dom_1.Route path={routes_1.AppProRoute.dashboard}>
                                <Navigate_1.Navigate replace to={routes_1.AppRoute.home}/>
                            </react_router_dom_1.Route>
                            <react_router_dom_1.Route path={routes_1.AppProRoute.multiSend} component={multi_send_1.DesktopMultiSendPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.accountSettings} component={DesktopAccountSettingsPage_1["default"]}/>

                            <react_router_dom_1.Route path={routes_1.AppRoute.activity} component={DesktopHistoryPage_1.DesktopHistoryPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.purchases} component={DesktopCollectables_1.DesktopCollectables}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.dns} component={DesktopDns_1.DesktopDns}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.multisigWallets} component={DesktopManageMultisigs_1.DesktopManageMultisigsPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.multisigOrders} component={DesktopMultisigOrders_1.DesktopMultisigOrdersPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.swap} component={swap_1.DesktopSwapPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.home} exact component={MobileProHomePage_1.MobileProHomePage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.coins} exact component={DesktopTokens_1.DesktopTokens}/>
                            <react_router_dom_1.Route path={"".concat(routes_1.AppRoute.staking).concat(routes_1.StakingRoute.pool, "/:address")} component={staking_1.DesktopStakingPoolDetailIonRoute}/>
                            <react_router_dom_1.Route path={"".concat(routes_1.AppRoute.staking).concat(routes_1.StakingRoute.stake, "/:address?")} component={staking_1.DesktopStakingFormIonRoute}/>
                            <react_router_dom_1.Route path={"".concat(routes_1.AppRoute.staking).concat(routes_1.StakingRoute.unstake, "/:address")} component={staking_1.DesktopStakingUnstakeIonRoute}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.staking} exact component={staking_1.DesktopStakingDefaultIonRoute}/>
                            <react_router_dom_1.Route path={"".concat(routes_1.AppRoute.coins, "/:name")} component={DesktopCoinPage_1.DesktopCoinPage}/>

                            {/* Wallet settings */}
                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings} exact component={DesktopWalletSettingsPage_1.DesktopWalletSettingsPage}/>
                            <react_router_dom_1.Route path={"".concat(routes_1.AppRoute.walletSettings + routes_1.WalletSettingsRoute.recovery, "/:accountId")} component={Recovery_1.Recovery}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings + routes_1.WalletSettingsRoute.recovery} component={Recovery_1.ActiveRecovery} exact/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings + routes_1.WalletSettingsRoute.jettons} component={Jettons_1.JettonsSettings}/>

                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings + routes_1.WalletSettingsRoute.connectedApps} component={DesktopConnectedAppsSettings_1.DesktopConnectedAppsSettings}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings + routes_1.WalletSettingsRoute.nft} component={DesktopNftSettings_1.DesktopNftSettings}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings + routes_1.WalletSettingsRoute.derivations} component={MamIndexes_1.MAMIndexesPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings + routes_1.WalletSettingsRoute.battery} component={Battery_1.BatteryPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings + routes_1.WalletSettingsRoute.version} component={Version_1.WalletVersionPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings + routes_1.WalletSettingsRoute.ledgerIndexes} component={LedgerIndexes_1.LedgerIndexesPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings + routes_1.WalletSettingsRoute.twoFa} component={TwoFA_1.TwoFAPage}/>
                            <react_router_dom_1.Route path={routes_1.AppRoute.walletSettings + routes_1.WalletSettingsRoute.notification} component={Notification_1.Notifications}/>
                            {/* Wallet settings */}
                        </react_2.IonRouterOutlet>
                    </WalletLayoutBody>
                    <framer_motion_1.AnimatePresence mode="wait">
                        <framer_motion_1.motion.div key={shouldDisplayFooter(location.pathname).toString()} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} transition={{ duration: 0.1, ease: 'easeOut' }}>
                            {shouldDisplayFooter(location.pathname) && <MobileProFooter_1.MobileProFooter />}
                        </framer_motion_1.motion.div>
                    </framer_motion_1.AnimatePresence>
                </WalletLayout>
                <PreferencesModal />
            </WideContent>
            <common_1.BackgroundElements />
            <MobileDappBrowserController_1.MobileDappBrowserController />
        </WideLayout>);
};
var shouldDisplayFooter = function (loc) {
    return loc !== routes_1.AppProRoute.dashboard;
};
var NavigateToRecovery = function () {
    var location = (0, react_router_dom_1.useLocation)();
    var newPath = location.pathname.replace(routes_1.AppRoute.settings, routes_1.AppRoute.walletSettings);
    return <Navigate_1.Navigate to={{ pathname: newPath, search: location.search }} replace={true}/>;
};
var IonModalStyled = (0, styled_components_1["default"])(react_2.IonModal)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    &::part(container) {\n        background-color: ", ";\n    }\n"], ["\n    &::part(container) {\n        background-color: ", ";\n    }\n"])), function (p) { return p.theme.backgroundContent; });
var routesToRedirectToWalletsSettings = [
    routes_1.AppRoute.settings + routes_1.WalletSettingsRoute.version,
    routes_1.AppRoute.settings + routes_1.WalletSettingsRoute.twoFa,
    routes_1.AppRoute.settings + routes_1.WalletSettingsRoute.jettons
];
var PreferencesModal = function () {
    var _a = (0, react_1.useState)(null), presentingElement = _a[0], setPresentingElement = _a[1];
    var settingsHistory = (0, react_1.useRef)((0, isolated_memory_history_1.createIsolatedMemoryHistory)([
        { pathname: routes_1.AppRoute.settings, search: '', hash: '', state: null }
    ]));
    (0, react_1.useLayoutEffect)(function () {
        setPresentingElement(document.getElementById('main-content'));
    }, []);
    var history = (0, react_router_dom_1.useHistory)();
    var navigate = (0, useNavigate_1.useNavigate)();
    var _b = (0, react_1.useState)(false), isSettingsOpen = _b[0], setSettingsOpen = _b[1];
    (0, react_1.useEffect)(function () {
        var unblock = history.block(function (location) {
            var _a;
            var matchingRedirectionRoute = routesToRedirectToWalletsSettings.find(function (r) { var _a; return (_a = location.pathname) === null || _a === void 0 ? void 0 : _a.startsWith(r); });
            if (matchingRedirectionRoute) {
                var newPath = location.pathname.replace(routes_1.AppRoute.settings, routes_1.AppRoute.walletSettings);
                navigate(newPath, { disableMobileAnimation: true });
                return false;
            }
            if ((_a = location.pathname) === null || _a === void 0 ? void 0 : _a.startsWith(routes_1.AppRoute.settings)) {
                setSettingsOpen(true);
                if (location.pathname !== routes_1.AppRoute.settings) {
                    settingsHistory.current.push(location.pathname);
                }
                return false;
            }
            return undefined;
        });
        return function () { return unblock(); };
    }, [history, navigate]);
    (0, react_1.useEffect)(function () {
        settingsHistory.current.listen(function (location) {
            if (!location.pathname.startsWith(routes_1.AppRoute.settings)) {
                onClose();
                history.push(location.pathname);
            }
        });
    }, [history]);
    var onClose = function () {
        setSettingsOpen(false);
        settingsHistory.current.push(routes_1.AppRoute.settings);
    };
    var browserLocation = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(function () {
        if (!isSettingsOpen) {
            useLocation_1.routerLocation$.next(browserLocation);
        }
        else {
            useLocation_1.routerLocation$.next(settingsHistory.current.location);
            return settingsHistory.current.listen(function (loc) { return useLocation_1.routerLocation$.next(loc); });
        }
    }, [browserLocation, isSettingsOpen]);
    return (<IonModalStyled presentingElement={presentingElement} isOpen={isSettingsOpen} onDidDismiss={onClose}>
            <react_2.IonContent>
                <react_router_1.IonReactMemoryRouter history={settingsHistory.current}>
                    <react_2.IonRouterOutlet>
                        <react_router_dom_1.Route path={routes_1.AppRoute.settings} exact>
                            <MobileProPreferencesPage_1.MobileProPreferencesPage onClose={onClose}/>
                        </react_router_dom_1.Route>
                        <react_router_dom_1.Route path={routes_1.AppRoute.settings + routes_1.SettingsRoute.account} component={DesktopManageWalletsSettings_1.DesktopManageAccountsPage}/>
                        <react_router_dom_1.Route path={routes_1.AppRoute.settings + routes_1.SettingsRoute.localization} component={Localization_1.Localization}/>
                        <react_router_dom_1.Route path={routes_1.AppRoute.settings + routes_1.SettingsRoute.legal} component={Legal_1.Legal}/>
                        <react_router_dom_1.Route path={routes_1.AppRoute.settings + routes_1.SettingsRoute.theme} component={Theme_1.UserTheme}/>
                        <react_router_dom_1.Route path={routes_1.AppRoute.settings + routes_1.SettingsRoute.dev} component={Dev_1.DevSettings} exact/>
                        <react_router_dom_1.Route path={routes_1.AppRoute.settings + routes_1.SettingsRoute.dev + routes_1.DevSettingsRoute.logs} component={Dev_1.DevSettingsLogs}/>
                        <react_router_dom_1.Route path={routes_1.AppRoute.settings + routes_1.SettingsRoute.fiat} component={FiatCurrency_1.FiatCurrency}/>
                        <react_router_dom_1.Route path={routes_1.AppRoute.settings + routes_1.SettingsRoute.security} component={Security_1.SecuritySettings}/>
                        <react_router_dom_1.Route path={routes_1.AppRoute.settings + routes_1.SettingsRoute.pro} component={ProSubscriptionSettings_1.ProSubscriptionSettings}/>
                        <react_router_dom_1.Route path={routes_1.AppRoute.settings + routes_1.SettingsRoute.recovery} component={NavigateToRecovery}/>
                    </react_2.IonRouterOutlet>
                </react_router_1.IonReactMemoryRouter>
            </react_2.IonContent>
        </IonModalStyled>);
};
exports.NarrowEnvGlobalStyles = (0, styled_components_1.createGlobalStyle)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    ", ";\n    \n    body {\n        &.dapp-browser-open {\n            background: transparent !important;\n\n            #main-content, ion-modal:not(.on-top-of-browser) {\n                z-index: 0 !important;\n                opacity: 0;\n                background: transparent;\n            }\n        }\n    }\n"], ["\n    ", ";\n    \n    body {\n        &.dapp-browser-open {\n            background: transparent !important;\n\n            #main-content, ion-modal:not(.on-top-of-browser) {\n                z-index: 0 !important;\n                opacity: 0;\n                background: transparent;\n            }\n        }\n    }\n"])), ionic_override_1.IonicOverride);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
