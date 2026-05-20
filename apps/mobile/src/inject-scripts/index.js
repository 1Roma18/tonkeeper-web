"use strict";
exports.__esModule = true;
require("./global");
var ton_connect_1 = require("./ton-connect");
var history_notifier_1 = require("./history-notifier");
var tg_auth_bridge_1 = require("./tg-auth-bridge");
window.tonkeeper = {
    tonconnect: new ton_connect_1.MobileInjectedBridge(),
    tgAuth: new tg_auth_bridge_1.TgAuthBridge()
};
(0, history_notifier_1.setupHistoryNotifier)();
console.log('Tonkeeper Pro inject script loaded');
