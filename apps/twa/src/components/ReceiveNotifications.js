"use strict";
exports.__esModule = true;
exports.TwaReceiveNotification = void 0;
var AccountView_1 = require("@tonkeeper/uikit/dist/components/home/AccountView");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var react_1 = require("react");
var twaHooks_1 = require("../libs/twaHooks");
var Content = function (_a) {
    var chain = _a.chain, jetton = _a.jetton, handleClose = _a.handleClose;
    (0, twaHooks_1.useHandleBackButton)(handleClose);
    return <AccountView_1.ReceiveContent chain={chain} jetton={jetton}/>;
};
var TwaReceiveNotification = function (_a) {
    var children = _a.children;
    var sdk = (0, appSdk_1.useAppSdk)();
    var _b = (0, react_1.useState)(undefined), params = _b[0], setParams = _b[1];
    var handleClose = function () {
        setParams(undefined);
    };
    (0, react_1.useEffect)(function () {
        var handler = function (options) {
            setParams(options.params);
        };
        sdk.uiEvents.on('receive', handler);
        return function () {
            sdk.uiEvents.off('receive', handler);
        };
    }, []);
    if (params) {
        return <Content chain={params.chain} jetton={params.jetton} handleClose={handleClose}/>;
    }
    else {
        return <>{children}</>;
    }
};
exports.TwaReceiveNotification = TwaReceiveNotification;
