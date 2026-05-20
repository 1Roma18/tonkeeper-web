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
exports.WideContent = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Body_1 = require("@tonkeeper/uikit/dist/components/Body");
var hooks_1 = require("../../libs/hooks");
var analytics_1 = require("@tonkeeper/uikit/dist/hooks/analytics");
var useDebuggingTools_1 = require("@tonkeeper/uikit/dist/hooks/useDebuggingTools");
var Unlock_1 = require("@tonkeeper/uikit/dist/pages/home/Unlock");
var routes_1 = require("@tonkeeper/uikit/dist/libs/routes");
var Initialize_1 = __importStar(require("@tonkeeper/uikit/dist/pages/import/Initialize"));
var AsideMenu_1 = require("@tonkeeper/uikit/dist/components/desktop/aside/AsideMenu");
var browser_1 = __importDefault(require("@tonkeeper/uikit/dist/desktop-pages/browser"));
var multi_send_1 = require("@tonkeeper/uikit/dist/desktop-pages/multi-send");
var DesktopAccountSettingsPage_1 = __importDefault(require("@tonkeeper/uikit/dist/desktop-pages/settings/DesktopAccountSettingsPage"));
var DesktopWalletHeader_1 = require("@tonkeeper/uikit/dist/components/desktop/header/DesktopWalletHeader");
var WalletAsideMenu_1 = require("@tonkeeper/uikit/dist/components/desktop/aside/WalletAsideMenu");
var DesktopHistoryPage_1 = require("@tonkeeper/uikit/dist/desktop-pages/history/DesktopHistoryPage");
var DesktopCollectables_1 = require("@tonkeeper/uikit/dist/desktop-pages/nft/DesktopCollectables");
var DesktopDns_1 = require("@tonkeeper/uikit/dist/desktop-pages/nft/DesktopDns");
var DesktopCoinPage_1 = require("@tonkeeper/uikit/dist/desktop-pages/coin/DesktopCoinPage");
var DesktopManageMultisigs_1 = require("@tonkeeper/uikit/dist/desktop-pages/manage-multisig-wallets/DesktopManageMultisigs");
var DesktopMultisigOrders_1 = require("@tonkeeper/uikit/dist/desktop-pages/multisig-orders/DesktopMultisigOrders");
var DesktopWalletSettingsRouting_1 = require("@tonkeeper/uikit/dist/desktop-pages/settings/DesktopWalletSettingsRouting");
var swap_1 = require("@tonkeeper/uikit/dist/desktop-pages/swap");
var DesktopTokens_1 = require("@tonkeeper/uikit/dist/desktop-pages/tokens/DesktopTokens");
var DesktopPreferencesHeader_1 = require("@tonkeeper/uikit/dist/components/desktop/header/DesktopPreferencesHeader");
var PreferencesAsideMenu_1 = require("@tonkeeper/uikit/dist/components/desktop/aside/PreferencesAsideMenu");
var DesktopPreferencesRouting_1 = require("@tonkeeper/uikit/dist/desktop-pages/preferences/DesktopPreferencesRouting");
var MemoryScroll_1 = __importDefault(require("@tonkeeper/uikit/dist/components/MemoryScroll"));
var styled_components_1 = __importDefault(require("styled-components"));
var uikit_1 = require("@tonkeeper/uikit");
var DesktopHeaderElements_1 = require("@tonkeeper/uikit/dist/components/desktop/header/DesktopHeaderElements");
var common_1 = require("./common");
var PullToRefresh_1 = require("../components/PullToRefresh");
var react_query_1 = require("@tanstack/react-query");
var splash_screen_1 = require("@capacitor/splash-screen");
var realtime_1 = require("@tonkeeper/uikit/dist/hooks/realtime");
var dashboard_1 = __importDefault(require("@tonkeeper/uikit/dist/desktop-pages/dashboard"));
var SecureWalletNotification_1 = require("@tonkeeper/uikit/dist/components/desktop/SecureWalletNotification");
var DesktopCancelLegacySubscriptionBanner_1 = require("@tonkeeper/uikit/dist/components/legacy-plugins/DesktopCancelLegacySubscriptionBanner");
var FullSizeWrapper = (0, styled_components_1["default"])(uikit_1.Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    max-width: 800px;\n"], ["\n    max-width: 800px;\n"])));
var Wrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    box-sizing: border-box;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: ", ";\n    white-space: pre-wrap;\n"], ["\n    box-sizing: border-box;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: ", ";\n    white-space: pre-wrap;\n"])), function (props) { return props.theme.backgroundPage; });
var WideLayout = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n"], ["\n    width: 100%;\n    height: 100%;\n    display: flex;\n"])));
var WideContentStyled = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    flex: 1;\n    min-width: 0;\n    min-height: 0;\n"], ["\n    flex: 1;\n    min-width: 0;\n    min-height: 0;\n"])));
var WalletLayout = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n"])));
var WalletLayoutBody = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    flex: 1;\n    display: flex;\n    max-height: calc(100% - ", ");\n"], ["\n    flex: 1;\n    display: flex;\n    max-height: calc(100% - ", ");\n"])), DesktopHeaderElements_1.desktopHeaderContainerHeight);
var WalletRoutingWrapper = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    flex: 1;\n    overflow: auto;\n    position: relative;\n"], ["\n    flex: 1;\n    overflow: auto;\n    position: relative;\n"])));
var PreferencesLayout = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    height: calc(100% - ", ");\n    display: flex;\n    overflow: auto;\n"], ["\n    height: calc(100% - ", ");\n    display: flex;\n    overflow: auto;\n"])), DesktopHeaderElements_1.desktopHeaderContainerHeight);
var PreferencesRoutingWrapper = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    flex: 1;\n    overflow: auto;\n    position: relative;\n"], ["\n    flex: 1;\n    overflow: auto;\n    position: relative;\n"])));
var FullSizeWrapperBounded = (0, styled_components_1["default"])(FullSizeWrapper)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    max-height: 100%;\n    overflow: auto;\n    justify-content: center;\n"], ["\n    max-height: 100%;\n    overflow: auto;\n    justify-content: center;\n"])));
var WideContent = function (_a) {
    var activeAccount = _a.activeAccount, lock = _a.lock;
    var location = (0, react_router_dom_1.useLocation)();
    (0, Body_1.useWindowsScroll)();
    (0, hooks_1.useAppWidth)();
    (0, analytics_1.useTrackLocation)();
    (0, common_1.usePrefetch)();
    (0, useDebuggingTools_1.useDebuggingTools)();
    (0, realtime_1.useRealtimeUpdatesInvalidation)();
    (0, react_1.useEffect)(function () {
        splash_screen_1.SplashScreen.hide();
    }, []);
    var queryClient = (0, react_query_1.useQueryClient)();
    var onRefresh = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var promise1, promise2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promise1 = queryClient.invalidateQueries();
                    promise2 = new Promise(function (r) { return setTimeout(r, 1000); });
                    return [4 /*yield*/, Promise.all([promise1, promise2])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [queryClient]);
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
            <WideContentStyled>
                <react_router_dom_1.Switch>
                    <react_router_dom_1.Route path={routes_1.AppProRoute.dashboard} component={dashboard_1["default"]}/>
                    <react_router_dom_1.Route path={routes_1.AppRoute.browser} component={browser_1["default"]}/>
                    <react_router_dom_1.Route path={routes_1.AppRoute.settings} component={PreferencesContent}/>
                    <react_router_dom_1.Route path={routes_1.AppProRoute.multiSend} component={multi_send_1.DesktopMultiSendPage}/>
                    <react_router_dom_1.Route path={routes_1.AppRoute.accountSettings} component={DesktopAccountSettingsPage_1["default"]}/>
                    <react_router_dom_1.Route path="*" component={WalletContent}/>
                </react_router_dom_1.Switch>
            </WideContentStyled>
            <common_1.BackgroundElements />
            <SecureWalletNotification_1.SecureWalletNotification />
            <PullToRefresh_1.PullToRefresh onRefresh={onRefresh}/>
        </WideLayout>);
};
exports.WideContent = WideContent;
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
