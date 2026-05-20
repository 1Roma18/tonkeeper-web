"use strict";
var _a;
exports.__esModule = true;
var index_1 = require("./provider/index");
var tonapi_1 = require("./provider/tonapi");
var tonconnect_1 = require("./provider/tonconnect");
var links_interceptor_1 = require("./provider/links-interceptor");
var havePrevInstance = !!window.tonkeeper;
var provider = new index_1.TonProvider((_a = window === null || window === void 0 ? void 0 : window.tonkeeper) === null || _a === void 0 ? void 0 : _a.provider);
var tonconnect = new tonconnect_1.ExtensionTonConnectInjectedBridge(provider);
var tonapi = new tonapi_1.TonApi(provider);
var linksInterceptor = new links_interceptor_1.TonLinksInterceptor(provider);
linksInterceptor.startInterceptLinks();
window.tonkeeper = {
    provider: provider,
    tonconnect: tonconnect
};
window.tonapi = tonapi;
if (!havePrevInstance) {
    window.dispatchEvent(new Event('tonready'));
}
