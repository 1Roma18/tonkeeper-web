"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.__esModule = true;
exports.MobileDappBrowserTab = void 0;
var react_1 = require("react");
var dapp_browser_1 = require("@tonkeeper/uikit/dist/state/dapp-browser");
var styled_components_1 = __importStar(require("styled-components"));
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var uikit_1 = require("@tonkeeper/uikit");
var dappBrowserService_1 = require("@tonkeeper/core/dist/service/dappBrowserService");
var IconButton_1 = require("@tonkeeper/uikit/dist/components/fields/IconButton");
var Icon_1 = require("@tonkeeper/uikit/dist/components/Icon");
var wallet_1 = require("@tonkeeper/uikit/dist/state/wallet");
var capacitor_injected_connector_1 = require("../../../libs/ton-connect/capacitor-injected-connector");
var Dot_1 = require("@tonkeeper/uikit/dist/components/Dot");
var Select_1 = require("@tonkeeper/uikit/dist/components/fields/Select");
var DropDown_1 = require("@tonkeeper/uikit/dist/components/DropDown");
var dapp_browser_plugin_1 = require("../../../libs/plugins/dapp-browser-plugin");
var react_i18next_1 = require("react-i18next");
var url_1 = require("@tonkeeper/core/dist/utils/url");
var share_1 = require("@capacitor/share");
var tonConnect_1 = require("@tonkeeper/uikit/dist/state/tonConnect");
var WalletEmoji_1 = require("@tonkeeper/uikit/dist/components/shared/emoji/WalletEmoji");
var account_1 = require("@tonkeeper/core/dist/entries/account");
var useAtom_1 = require("@tonkeeper/uikit/dist/libs/useAtom");
var AccountAndWalletInfo_1 = require("@tonkeeper/uikit/dist/components/account/AccountAndWalletInfo");
var framer_motion_1 = require("framer-motion");
var events_hooks_1 = require("@tonkeeper/uikit/dist/hooks/analytics/events-hooks");
var analytics_1 = require("@tonkeeper/uikit/dist/hooks/analytics");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n\n    > *:nth-child(2) {\n        flex: 1;\n    }\n"], ["\n    box-sizing: border-box;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n\n    > *:nth-child(2) {\n        flex: 1;\n    }\n"])));
var BackgroundStyled = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background: ", ";\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    height: 100%;\n    ", ";\n    transition: opacity 0.1s ease-in-out, background-color 0.1s ease-in-out;\n\n    img {\n        width: 60px;\n        height: 60px;\n        border-radius: ", ";\n    }\n\n    ", " {\n        color: ", ";\n    }\n"], ["\n    background: ", ";\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    height: 100%;\n    ", ";\n    transition: opacity 0.1s ease-in-out, background-color 0.1s ease-in-out;\n\n    img {\n        width: 60px;\n        height: 60px;\n        border-radius: ", ";\n    }\n\n    ", " {\n        color: ", ";\n    }\n"])), function (p) { return p.theme.backgroundPage; }, function (p) {
    return p.$isTransparent && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            background-color: transparent;\n            opacity: 0;\n        "], ["\n            background-color: transparent;\n            opacity: 0;\n        "])));
}, function (p) { return p.theme.corner2xSmall; }, uikit_1.Body2, function (p) { return p.theme.textSecondary; });
var MobileDappBrowserTab = function (_a) {
    var tab = _a.tab, isAnimating = _a.isAnimating;
    var title = tab.title, iconUrl = tab.iconUrl;
    var isLive = (0, dappBrowserService_1.isBrowserTabLive)(tab);
    var tabIsReady = !('type' in tab && tab.type === 'loading');
    var activeWallet = (0, wallet_1.useActiveWallet)();
    var asideLastSelectedWalletId = (0, useAtom_1.useSubjectValue)(wallet_1.asideWalletSelected$);
    (0, react_1.useEffect)(function () {
        if (activeWallet.id === asideLastSelectedWalletId) {
            capacitor_injected_connector_1.capacitorTonConnectInjectedConnector.changeConnectedWalletToActive(tab);
        }
    }, [activeWallet.id]);
    var activeConnection = (0, tonConnect_1.useInjectedDappConnectionByOrigin)((0, url_1.originFromUrl)(tab.url)).data;
    var _b = (0, react_1.useState)(undefined), bannerData = _b[0], setBannerData = _b[1];
    var _c = (0, react_1.useState)(0), runEffect = _c[0], setRunEffect = _c[1];
    (0, react_1.useEffect)(function () {
        if (!activeConnection) {
            setBannerData(undefined);
        }
        else {
            setBannerData(activeConnection.wallet.id);
            var timeout_1 = setTimeout(function () {
                setBannerData(undefined);
            }, 4000);
            return function () {
                clearTimeout(timeout_1);
            };
        }
    }, [activeConnection, runEffect]);
    return (<Wrapper>
            <TabHeader tab={tab} activeConnection={activeConnection} onClickWallet={function () { return setRunEffect(function (c) { return c + 1; }); }}/>
            <BackgroundStyled $isTransparent={tabIsReady && !isAnimating}>
                {!isLive && (<>
                        {iconUrl && <img src={iconUrl}/>}
                        {title && <uikit_1.Body2>{title}</uikit_1.Body2>}
                    </>)}
            </BackgroundStyled>
            <ConnectedWalletTooltip walletId={bannerData}/>
        </Wrapper>);
};
exports.MobileDappBrowserTab = MobileDappBrowserTab;
var TabHeaderWrapper = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    box-sizing: content-box;\n    height: 32px;\n    padding: env(safe-area-inset-top) 0 4px;\n    background-color: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    position: relative;\n\n    & .dd-select-container {\n        max-height: unset;\n        width: fit-content;\n    }\n"], ["\n    box-sizing: content-box;\n    height: 32px;\n    padding: env(safe-area-inset-top) 0 4px;\n    background-color: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    position: relative;\n\n    & .dd-select-container {\n        max-height: unset;\n        width: fit-content;\n    }\n"])), function (p) { return p.theme.backgroundPage; });
var BackButton = (0, styled_components_1["default"])(IconButton_1.IconButtonTransparentBackground)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: 44px;\n    box-sizing: border-box;\n    padding: 8px 16px 8px 12px;\n    flex-shrink: 0;\n\n    ", "\n"], ["\n    width: 44px;\n    box-sizing: border-box;\n    padding: 8px 16px 8px 12px;\n    flex-shrink: 0;\n\n    ", "\n"])), function (p) { return p.$isHidden && 'visibility: hidden;'; });
var Title = (0, styled_components_1["default"])(uikit_1.Body3)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n"], ["\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n"])), function (p) { return p.theme.textSecondary; });
var RightButtonsGroup = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    width: 96px;\n    flex-shrink: 0;\n"], ["\n    display: flex;\n    width: 96px;\n    flex-shrink: 0;\n"])));
var HideTabButton = (0, styled_components_1["default"])(IconButton_1.IconButtonTransparentBackground)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    padding: 8px 20px 8px 16px;\n"], ["\n    padding: 8px 20px 8px 16px;\n"])));
var OptionsTabButton = (0, styled_components_1["default"])(IconButton_1.IconButtonTransparentBackground)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    padding: 8px 8px 8px 20px;\n"], ["\n    padding: 8px 8px 8px 20px;\n"])));
var DropDownItemStyled = (0, styled_components_1["default"])(DropDown_1.DropDownItem)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    gap: 36px;\n    white-space: nowrap;\n"], ["\n    gap: 36px;\n    white-space: nowrap;\n"])));
var TabHeader = function (_a) {
    var tab = _a.tab, activeConnection = _a.activeConnection, onClickWallet = _a.onClickWallet;
    var hideTab = (0, dapp_browser_1.useHideActiveBrowserTab)().mutate;
    var closeTab = (0, dapp_browser_1.useCloseActiveBrowserTab)().mutate;
    var onDrowDownStatusChange = (0, react_1.useCallback)(function (isOpen) {
        dapp_browser_plugin_1.CapacitorDappBrowser.setIsMainViewInFocus('tab-header-dd', isOpen);
    }, []);
    var t = (0, react_i18next_1.useTranslation)().t;
    var sdk = (0, appSdk_1.useAppSdk)();
    var disconnect = (0, tonConnect_1.useDisconnectInjectedTonConnectAppFromAllWallets)().mutate;
    var changeTab = (0, dapp_browser_1.useChangeBrowserTab)().mutate;
    var openNewTab = (0, dapp_browser_1.useOpenBrowserTab)().mutate;
    var countryContextTrack = (0, events_hooks_1.useCountryContextTracker)();
    var track = (0, analytics_1.useAnalyticsTrack)();
    return (<TabHeaderWrapper>
            <BackButton $isHidden={!(0, dappBrowserService_1.isBrowserTabLive)(tab) || !tab.canGoBack} onClick={function () { return dapp_browser_plugin_1.CapacitorDappBrowser.goBack(tab.id); }}>
                <Icon_1.ArrowLeftIcon />
            </BackButton>
            <HeaderTabInfo tab={tab} connectedWallet={activeConnection === null || activeConnection === void 0 ? void 0 : activeConnection.wallet} onClickWallet={onClickWallet}/>
            <RightButtonsGroup>
                <Select_1.SelectDropDown top="calc(100% + 12px)" right="calc(-52px + 8px)" onStatusChange={onDrowDownStatusChange} payload={function (closeDropDown) { return (<DropDown_1.DropDownContent>
                            <DropDownItemStyled onClick={function () {
                closeDropDown();
                openNewTab('blanc');
            }}>
                                <uikit_1.Label2> {t('browser_new_tab')}</uikit_1.Label2>
                                <DropDown_1.DropDownRightIcon>
                                    <Icon_1.PlusIcon />
                                </DropDown_1.DropDownRightIcon>
                            </DropDownItemStyled>
                            <DropDown_1.DropDownItemsDivider />
                            <DropDownItemStyled onClick={function () {
                closeDropDown();
                closeTab();
            }}>
                                <uikit_1.Label2>{t('close')}</uikit_1.Label2>
                                <DropDown_1.DropDownRightIcon>
                                    <Icon_1.CloseIcon />
                                </DropDown_1.DropDownRightIcon>
                            </DropDownItemStyled>
                            <DropDown_1.DropDownItemsDivider />
                            <DropDownItemStyled onClick={function () {
                closeDropDown();
                sdk.hapticNotification('success');
                dapp_browser_plugin_1.CapacitorDappBrowser.reload({
                    id: tab.id
                });
            }}>
                                <uikit_1.Label2>{t('browser_actions_refresh')}</uikit_1.Label2>
                                <DropDown_1.DropDownRightIcon>
                                    <Icon_1.RefreshIcon />
                                </DropDown_1.DropDownRightIcon>
                            </DropDownItemStyled>
                            <DropDown_1.DropDownItemsDivider />
                            {'isPinned' in tab && (<>
                                    <DropDownItemStyled onClick={function () {
                    var isPinned = tab.isPinned;
                    closeDropDown();
                    changeTab(__assign(__assign({}, tab), { isPinned: !tab.isPinned }));
                    sdk.topMessage(t(isPinned
                        ? 'tab_action_toast_unpinned'
                        : 'tab_action_toast_pinned'));
                    countryContextTrack(function (country) {
                        return isPinned
                            ? {
                                eventName: 'dapp_unpin',
                                url: tab.url,
                                location: country
                            }
                            : {
                                eventName: 'dapp_pin',
                                url: tab.url,
                                location: country
                            };
                    });
                }}>
                                        <uikit_1.Label2>
                                            {t(tab.isPinned
                    ? 'browser_actions_unpin'
                    : 'browser_actions_pin')}
                                        </uikit_1.Label2>
                                        <DropDown_1.DropDownRightIcon>
                                            {tab.isPinned ? (<Icon_1.UnpinIconOutline />) : (<Icon_1.PinIconOutline />)}
                                        </DropDown_1.DropDownRightIcon>
                                    </DropDownItemStyled>
                                    <DropDown_1.DropDownItemsDivider />
                                </>)}
                            <DropDownItemStyled onClick={function () {
                closeDropDown();
                track({
                    eventName: 'dapp_sharing_copy',
                    url: tab.url,
                    from: 'Share'
                });
                sdk.hapticNotification('success');
                share_1.Share.share({
                    url: tab.url
                });
            }}>
                                <uikit_1.Label2>{t('browser_actions_share')}</uikit_1.Label2>
                                <DropDown_1.DropDownRightIcon>
                                    <Icon_1.ShareIcon />
                                </DropDown_1.DropDownRightIcon>
                            </DropDownItemStyled>
                            <DropDown_1.DropDownItemsDivider />
                            <DropDownItemStyled onClick={function () {
                closeDropDown();
                sdk.copyToClipboard(tab.url);
                track({
                    eventName: 'dapp_sharing_copy',
                    url: tab.url,
                    from: 'Copy link'
                });
            }}>
                                <uikit_1.Label2>{t('browser_actions_copy_link')}</uikit_1.Label2>
                                <DropDown_1.DropDownRightIcon>
                                    <Icon_1.CopyIcon />
                                </DropDown_1.DropDownRightIcon>
                            </DropDownItemStyled>
                            {!!activeConnection && (<>
                                    <DropDown_1.DropDownItemsDivider />
                                    <DropDownItemStyled onClick={function () {
                    closeDropDown();
                    disconnect({ origin: (0, url_1.originFromUrl)(tab.url) });
                }}>
                                        <uikit_1.Label2> {t('disconnect')}</uikit_1.Label2>
                                        <DropDown_1.DropDownRightIcon>
                                            <Icon_1.DisconnectIcon />
                                        </DropDown_1.DropDownRightIcon>
                                    </DropDownItemStyled>
                                </>)}
                        </DropDown_1.DropDownContent>); }}>
                    <OptionsTabButton>
                        <Icon_1.EllipsisIcon />
                    </OptionsTabButton>
                </Select_1.SelectDropDown>
                <HideTabButton onClick={function () { return hideTab(); }}>
                    <Icon_1.ChevronDownIcon />
                </HideTabButton>
            </RightButtonsGroup>
        </TabHeaderWrapper>);
};
var HeaderTabInfo = function (_a) {
    var tab = _a.tab, connectedWallet = _a.connectedWallet, onClickWallet = _a.onClickWallet;
    var hostname = hostnameFromUrl(tab.url);
    var websiteTitle = 'title' in tab ? tab.title : '';
    var showTitle = Boolean(websiteTitle || hostname);
    var t = (0, react_i18next_1.useTranslation)().t;
    var accounts = (0, wallet_1.useAccountsState)();
    var connectedAccount = connectedWallet
        ? (0, account_1.getAccountByWalletById)(accounts, connectedWallet.id)
        : undefined;
    if (!showTitle) {
        return null;
    }
    var walletInfo = connectedAccount
        ? (0, wallet_1.getAccountWalletNameAndEmoji)(connectedAccount, connectedWallet.id)
        : undefined;
    return (<Title>
            <Spacer />
            {hostname}
            {walletInfo ? (<WalletClickZone onClick={onClickWallet}>
                    &nbsp;
                    {t('browser_using_wallet')}
                    <WalletEmoji_1.WalletEmoji emojiSize="14px" emoji={walletInfo.emoji}/>
                    <WalletName>{walletInfo.name}</WalletName>
                </WalletClickZone>) : (!!websiteTitle && (<>
                        <Dot_1.Dot />
                        {websiteTitle}
                    </>))}
        </Title>);
};
var WalletClickZone = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    display: contents;\n"], ["\n    display: contents;\n"])));
var Spacer = styled_components_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    flex-shrink: 1;\n    width: 52px;\n    min-width: 0;\n"], ["\n    flex-shrink: 1;\n    width: 52px;\n    min-width: 0;\n"])));
var WalletName = (0, styled_components_1["default"])(uikit_1.Label3)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: ", ";\n"], ["\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: ", ";\n"])), function (p) { return p.theme.textPrimary; });
var hostnameFromUrl = function (url) {
    try {
        var data = new URL(url);
        return data.hostname;
    }
    catch (e) {
        return url;
    }
};
var ConnectedWalletTooltipWrapper = (0, styled_components_1["default"])(framer_motion_1.motion.div)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    position: absolute;\n    bottom: 8px;\n    left: 0;\n    right: 0;\n    padding: 0 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 10;\n"], ["\n    position: absolute;\n    bottom: 8px;\n    left: 0;\n    right: 0;\n    padding: 0 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 10;\n"])));
var ConnectedWalletTooltipBlock = styled_components_1["default"].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    background: ", ";\n    padding: 8px 12px;\n    border-radius: ", ";\n    display: grid;\n    overflow: hidden;\n"], ["\n    background: ", ";\n    padding: 8px 12px;\n    border-radius: ", ";\n    display: grid;\n    overflow: hidden;\n"])), function (p) { return p.theme.backgroundContentTint; }, function (p) { return p.theme.corner2xSmall; });
var ConnectedWalletTooltip = function (_a) {
    var walletId = _a.walletId;
    var t = (0, react_i18next_1.useTranslation)().t;
    var accounts = (0, wallet_1.useAccountsState)();
    var account = walletId === undefined ? undefined : (0, account_1.getAccountByWalletById)(accounts, walletId);
    return (<framer_motion_1.AnimatePresence>
            {!!account && (<ConnectedWalletTooltipWrapper initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: 50 }} transition={{ duration: 0.15, ease: 'linear' }}>
                    <ConnectedWalletTooltipBlock>
                        <uikit_1.Label2>{t('dapp_bowser_wallet_connected_toast')}</uikit_1.Label2>
                        <AccountAndWalletInfo_1.AccountAndWalletInfo account={account} walletId={walletId}/>
                    </ConnectedWalletTooltipBlock>
                </ConnectedWalletTooltipWrapper>)}
        </framer_motion_1.AnimatePresence>);
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
