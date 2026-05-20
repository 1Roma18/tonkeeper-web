"use strict";
exports.__esModule = true;
exports.InitDataLogger = void 0;
var sdk_react_1 = require("@tma.js/sdk-react");
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var InitDataLogger = function () {
    var _a, _b;
    var launchParams = (0, sdk_react_1.useLaunchParams)();
    var _c = (0, react_i18next_1.useTranslation)(), t = _c.t, i18n = _c.i18n;
    var button = (0, sdk_react_1.useMainButton)();
    var backButton = (0, sdk_react_1.useBackButton)();
    (0, react_1.useEffect)(function () {
        button.hide();
        backButton.hide();
    }, []);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if ((_b = (_a = launchParams.initData) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.languageCode) {
            i18n.languages.forEach(function (lang) {
                var _a, _b;
                if (((_b = (_a = launchParams.initData) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.languageCode) === lang) {
                    i18n.reloadResources([lang]).then(function () { return i18n.changeLanguage(lang); });
                }
            });
        }
    }, [(_b = (_a = launchParams.initData) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.languageCode]);
    // useEffect(() => {
    //     if (launchParams.initData?.user?.username)
    //         sdk.uiEvents.emit('copy', {
    //             method: 'copy',
    //             params: `Welcome ${launchParams.initData?.user.username}`
    //         });
    // }, [launchParams]);
    return <></>;
};
exports.InitDataLogger = InitDataLogger;
