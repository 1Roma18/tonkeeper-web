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
exports.__esModule = true;
exports.MobileDappBrowserNewTab = void 0;
var react_1 = require("react");
var translation_1 = require("@tonkeeper/uikit/dist/hooks/translation");
var useRecommendations_1 = require("@tonkeeper/uikit/dist/hooks/browser/useRecommendations");
var HideOnReview_1 = require("@tonkeeper/uikit/dist/components/ios/HideOnReview");
var styled_components_1 = __importStar(require("styled-components"));
var PromotionsCarousel_1 = require("@tonkeeper/uikit/dist/components/browser/PromotionsCarousel");
var MobileProCategoryBlock_1 = require("@tonkeeper/uikit/dist/desktop-pages/browser/MobileProCategoryBlock");
var Input_1 = require("@tonkeeper/uikit/dist/components/fields/Input");
var uikit_1 = require("@tonkeeper/uikit");
var IconButton_1 = require("@tonkeeper/uikit/dist/components/fields/IconButton");
var Icon_1 = require("@tonkeeper/uikit/dist/components/Icon");
var dapp_browser_1 = require("@tonkeeper/uikit/dist/state/dapp-browser");
var List_1 = require("@tonkeeper/uikit/dist/components/List");
var Layout_1 = require("@tonkeeper/uikit/dist/components/Layout");
var useKeyboardHeight_1 = require("@tonkeeper/uikit/dist/hooks/keyboard/useKeyboardHeight");
var form_1 = require("@tonkeeper/uikit/dist/libs/form");
var css_1 = require("@tonkeeper/uikit/dist/libs/css");
var framer_motion_1 = require("framer-motion");
var events_hooks_1 = require("@tonkeeper/uikit/dist/hooks/analytics/events-hooks");
var common_1 = require("@tonkeeper/core/dist/utils/common");
var tonendpoint_1 = require("@tonkeeper/uikit/dist/state/tonendpoint");
var IfFeatureEnabled_1 = require("@tonkeeper/uikit/dist/components/shared/IfFeatureEnabled");
var InputWrapper = styled_components_1["default"].form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 16px 16px 8px;\n    background: ", ";\n    flex-shrink: 0;\n    z-index: 2;\n"], ["\n    padding: 16px 16px 8px;\n    background: ", ";\n    flex-shrink: 0;\n    z-index: 2;\n"])), function (p) { return p.theme.backgroundPage; });
var Header = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: 52px;\n    flex-shrink: 0;\n    padding: 0 0 0 16px;\n    justify-content: space-between;\n    display: flex;\n    align-items: center;\n    background: ", ";\n    z-index: 10;\n"], ["\n    height: 52px;\n    flex-shrink: 0;\n    padding: 0 0 0 16px;\n    justify-content: space-between;\n    display: flex;\n    align-items: center;\n    background: ", ";\n    z-index: 10;\n"])), function (p) { return p.theme.backgroundPage; });
var CloseButton = (0, styled_components_1["default"])(IconButton_1.IconButtonTransparentBackground)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    padding: 0 18px;\n    height: 100%;\n    display: flex;\n    align-items: center;\n"], ["\n    padding: 0 18px;\n    height: 100%;\n    display: flex;\n    align-items: center;\n"])));
var CancelButton = (0, styled_components_1["default"])(uikit_1.Button)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin-right: 16px;\n    height: 32px;\n"], ["\n    margin-right: 16px;\n    height: 32px;\n"])));
var PageWrapper = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    padding-top: env(safe-area-inset-top);\n    box-sizing: border-box;\n    background: ", ";\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: env(safe-area-inset-top);\n        background: ", ";\n        z-index: 10;\n    }\n\n    ", "\n\n    transition: padding-bottom ", ";\n    will-change: padding-bottom;\n"], ["\n    padding-top: env(safe-area-inset-top);\n    box-sizing: border-box;\n    background: ", ";\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: env(safe-area-inset-top);\n        background: ", ";\n        z-index: 10;\n    }\n\n    ", "\n\n    transition: padding-bottom ", ";\n    will-change: padding-bottom;\n"])), function (p) { return p.theme.backgroundPage; }, function (p) { return p.theme.backgroundPage; }, function (p) {
    return p.$keyboardShift && (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            padding-bottom: calc(", "px - var(--footer-full-height) - 1px);\n        "], ["\n            padding-bottom: calc(", "px - var(--footer-full-height) - 1px);\n        "])), p.$keyboardShift);
}, css_1.iosKeyboardTransition);
var PageBody = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    overflow: hidden;\n    flex: 1;\n    position: relative;\n"], ["\n    overflow: hidden;\n    flex: 1;\n    position: relative;\n"])));
var HiddenSubmitButton = styled_components_1["default"].button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    display: none;\n"], ["\n    display: none;\n"])));
var MotionDiv = (0, styled_components_1["default"])(framer_motion_1.motion.div)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    padding: inherit;\n"], ["\n    padding: inherit;\n"])));
var blurInput = function () {
    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }
};
var useRelevantApps = function (recommendations, inputValue) {
    return (0, react_1.useMemo)(function () {
        return recommendations === null || recommendations === void 0 ? void 0 : recommendations.categories.flatMap(function (c) { return c.apps; }).filter(function (a) {
            if (inputValue.length < 2) {
                return false;
            }
            var normalizedInputValue = inputValue.toLowerCase().trim();
            var relevantName = a.name.toLowerCase().includes(normalizedInputValue);
            var relevantDescription = a.description
                .toLowerCase()
                .includes(normalizedInputValue);
            var relevantUrl = a.url.toLowerCase().includes(normalizedInputValue);
            return relevantName || relevantUrl || relevantDescription;
        }).slice(0, 3);
    }, [recommendations, inputValue]);
};
var MobileDappBrowserNewTab = function () {
    (0, events_hooks_1.useTrackDappBrowserOpened)();
    var trackDappOpened = (0, events_hooks_1.useCountryContextTracker)();
    var t = (0, translation_1.useTranslation)().t;
    var data = (0, useRecommendations_1.useRecommendations)().data;
    var _a = (0, react_1.useState)(false), isInputFocused = _a[0], _setIsInputFocused = _a[1];
    var setIsInputFocused = (0, react_1.useCallback)(function (value) {
        setTimeout(function () { return _setIsInputFocused(value); });
    }, []);
    var _b = (0, react_1.useState)(''), inputValue = _b[0], setInputValue = _b[1];
    var isSearching = isInputFocused || inputValue.length > 0;
    var hideBrowser = (0, dapp_browser_1.useHideActiveBrowserTab)().mutate;
    var id = (0, react_1.useId)();
    var keyboardShift = (0, useKeyboardHeight_1.useKeyboardHeight)();
    var openTab = (0, dapp_browser_1.useOpenBrowserTab)().mutate;
    var relevantApps = useRelevantApps(data, inputValue);
    var search = (0, dapp_browser_1.useSearchEngine)();
    var onSelectApp = (0, react_1.useCallback)(function (app, from) {
        if (from === void 0) { from = 'browser'; }
        trackDappOpened(function (country) { return ({
            eventName: 'dapp_click',
            location: country,
            url: app.url,
            from: from
        }); });
        openTab({
            url: app.url,
            title: app.name,
            iconUrl: app.icon
        });
    }, [openTab]);
    var onSubmit = function () {
        if (relevantApps === null || relevantApps === void 0 ? void 0 : relevantApps.length) {
            var relevantApp_1 = relevantApps[0];
            trackDappOpened(function (country) { return ({
                eventName: 'dapp_click',
                location: country,
                url: relevantApp_1.url,
                from: 'browser_search'
            }); });
            return onSelectApp(relevantApp_1);
        }
        if ((0, common_1.isValidUrlProtocol)(inputValue, ['https:', 'http:'])) {
            openTab({
                url: inputValue
            });
        }
        else {
            openTab({
                url: search(inputValue)
            });
        }
    };
    var onSelectSearchRecommendations = function (query) {
        openTab({
            url: search(query)
        });
    };
    if (!data || !relevantApps) {
        return null;
    }
    return (<HideOnReview_1.HideOnReview>
            <PageWrapper $keyboardShift={keyboardShift}>
                <Header>
                    <uikit_1.Label2>{t('browser_title')}</uikit_1.Label2>
                    {isSearching ? (<CancelButton secondary size="small" onClick={function () {
                setInputValue('');
                blurInput();
            }}>
                            {t('cancel')}
                        </CancelButton>) : (<CloseButton onClick={function () { return hideBrowser(); }}>
                            <Icon_1.CloseIcon />
                        </CloseButton>)}
                </Header>
                <PageBody>
                    <IfFeatureEnabled_1.IfFeatureEnabled feature={tonendpoint_1.FLAGGED_FEATURE.DAPPS_LIST}>
                        <InactiveSearchContent recommendations={data} onClickApp={onSelectApp}/>

                        <framer_motion_1.AnimatePresence>
                            {isSearching && (<MotionDiv key="new-tab-content-active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <ActiveSearchContent relevantApps={relevantApps} onClickApp={onSelectApp} topLevelPromotedApps={data.apps} query={inputValue} onSelectSearchRecommendations={onSelectSearchRecommendations}/>
                                </MotionDiv>)}
                        </framer_motion_1.AnimatePresence>
                    </IfFeatureEnabled_1.IfFeatureEnabled>
                </PageBody>
                <InputWrapper onSubmit={(0, form_1.handleSubmit)(onSubmit)} $keyboardShift={keyboardShift}>
                    <Input_1.Input value={inputValue} id={id} size="small" label="Search or enter address" onFocusChange={setIsInputFocused} onChange={setInputValue} enterKeyHint="go" autoCorrect="off" spellCheck="false" autoCapitalize="off"/>
                    <HiddenSubmitButton type="submit" aria-hidden/>
                </InputWrapper>
            </PageWrapper>
        </HideOnReview_1.HideOnReview>);
};
exports.MobileDappBrowserNewTab = MobileDappBrowserNewTab;
var InactiveSearchContent = function (_a) {
    var recommendations = _a.recommendations, onClickApp = _a.onClickApp;
    return (<InactiveSearchContentWrapper>
            <PromotionsCarouselStyled apps={recommendations.apps} slidesToShow={1} onClickApp={function (a) { return onClickApp(a, 'banner'); }}/>
            {recommendations.categories.map(function (category) { return (<MobileProCategoryBlock_1.MobileProCategoryBlock key={category.id} category={category} onClickApp={function (a) { return onClickApp(a, 'browser'); }}/>); })}
        </InactiveSearchContentWrapper>);
};
var InactiveSearchContentWrapper = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    height: 100%;\n    overflow: auto;\n"], ["\n    height: 100%;\n    overflow: auto;\n"])));
var PromotionsCarouselStyled = (0, styled_components_1["default"])(PromotionsCarousel_1.PromotionsCarousel)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    margin-top: 1rem;\n    margin-bottom: 0.5rem;\n    flex-shrink: 0;\n"], ["\n    margin-top: 1rem;\n    margin-bottom: 0.5rem;\n    flex-shrink: 0;\n"])));
var ActiveSearchContent = function (_a) {
    var topLevelPromotedApps = _a.topLevelPromotedApps, relevantApps = _a.relevantApps, onClickApp = _a.onClickApp, query = _a.query, onSelectSearchRecommendations = _a.onSelectSearchRecommendations;
    var searchRecommendations = (0, dapp_browser_1.useSearchEngineRecommendations)(query).data;
    var searchEngineName = (0, dapp_browser_1.useSearchEngineName)();
    var t = (0, translation_1.useTranslation)().t;
    return (<ActiveSearchContentWrapper>
            <MobileProCategoryBlock_1.MobileProAppsBlock apps={topLevelPromotedApps.slice(0, 4)} onClickApp={onClickApp}/>
            {relevantApps.length > 0 && (<ListBlockStyled>
                    {relevantApps.map(function (app) { return (<ListItemStyled key={app.url} onClick={function () { return onClickApp(app); }}>
                            <ListItemElementStyled>
                                <RelevantDappImage src={app.icon}/>
                                <Layout_1.ColumnText text={app.name} secondary={app.url} noWrap/>
                            </ListItemElementStyled>
                        </ListItemStyled>); })}
                </ListBlockStyled>)}
            {!!(searchRecommendations === null || searchRecommendations === void 0 ? void 0 : searchRecommendations.length) && (<SearchBlock>
                    <SearchHeading>
                        {searchEngineName}&nbsp;{t('browser_search')}
                    </SearchHeading>
                    {searchRecommendations.map(function (item) { return (<SearchItem key={item} onClick={function () { return onSelectSearchRecommendations(item); }}>
                            <Icon_1.MagnifyingGlassIcon />
                            <uikit_1.Body2>{item}</uikit_1.Body2>
                        </SearchItem>); })}
                </SearchBlock>)}
        </ActiveSearchContentWrapper>);
};
var ActiveSearchContentWrapper = styled_components_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    position: absolute;\n    padding: inherit;\n    inset: 0;\n    z-index: 1;\n    flex: 1;\n    background: ", ";\n    overflow: auto;\n"], ["\n    position: absolute;\n    padding: inherit;\n    inset: 0;\n    z-index: 1;\n    flex: 1;\n    background: ", ";\n    overflow: auto;\n"])), function (p) { return p.theme.backgroundPage; });
var SearchBlock = styled_components_1["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    padding: 8px 0;\n"], ["\n    padding: 8px 0;\n"])));
var SearchHeading = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    padding: 8px 16px;\n"], ["\n    padding: 8px 16px;\n"])));
var SearchItem = styled_components_1["default"].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    height: 36px;\n    display: flex;\n    padding-left: 16px;\n    gap: 12px;\n    align-items: center;\n    overflow: hidden;\n\n    > *:first-child {\n        flex-shrink: 0;\n        color: ", ";\n    }\n\n    ", " {\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n"], ["\n    height: 36px;\n    display: flex;\n    padding-left: 16px;\n    gap: 12px;\n    align-items: center;\n    overflow: hidden;\n\n    > *:first-child {\n        flex-shrink: 0;\n        color: ", ";\n    }\n\n    ", " {\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n"])), function (p) { return p.theme.iconSecondary; }, uikit_1.Body2);
var ListBlockStyled = (0, styled_components_1["default"])(List_1.ListBlock)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    margin: 16px 8px 8px;\n    overflow: hidden;\n"], ["\n    margin: 16px 8px 8px;\n    overflow: hidden;\n"])));
var ListItemStyled = (0, styled_components_1["default"])(List_1.ListItem)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    padding: 0;\n"], ["\n    padding: 0;\n"])));
var ListItemElementStyled = (0, styled_components_1["default"])(List_1.ListItemElement)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    padding: 7px 16px 8px !important;\n    width: 100%;\n    gap: 12px;\n"], ["\n    padding: 7px 16px 8px !important;\n    width: 100%;\n    gap: 12px;\n"])));
var RelevantDappImage = styled_components_1["default"].img(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    width: 40px;\n    height: 40px;\n    border-radius: 10px;\n"], ["\n    width: 40px;\n    height: 40px;\n    border-radius: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
