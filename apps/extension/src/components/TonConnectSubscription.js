"use strict";
exports.__esModule = true;
exports.TonConnectSubscription = void 0;
var react_1 = require("react");
var tonConnect_1 = require("@tonkeeper/uikit/dist/state/tonConnect");
var event_1 = require("../event");
var connectionService_1 = require("@tonkeeper/core/dist/service/tonConnect/connectionService");
var TonConnectSubscription = function () {
    (0, react_1.useEffect)(function () {
        return tonConnect_1.tonConnectAppManuallyDisconnected$.subscribe(function (value) {
            var connections = Array.isArray(value) ? value : [value];
            var injected = connections.filter(connectionService_1.isAccountConnectionInjected);
            if (injected.length > 0) {
                event_1.sendBackground.message('tonConnectDisconnect', injected.map(function (c) { return c.webViewOrigin; }));
            }
        });
    }, []);
    return null;
};
exports.TonConnectSubscription = TonConnectSubscription;
