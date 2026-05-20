"use strict";
exports.__esModule = true;
var client_1 = require("react-dom/client");
var App_1 = require("./app/App");
require("./app/i18n");
var telegramOauth_1 = require("@tonkeeper/core/dist/service/telegramOauth");
try {
    var tgAuthResult = (0, telegramOauth_1.getTgAuthResult)();
    if (tgAuthResult) {
        (0, telegramOauth_1.sendTgAuthResultToOpener)(tgAuthResult);
    }
}
catch (e) {
    console.error(e);
}
var root = (0, client_1.createRoot)(document.getElementById('root'));
root.render(<App_1.App />);
