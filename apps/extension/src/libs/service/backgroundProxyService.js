"use strict";
/**
 * The background service to manage proxy configuration
 * The service is responsible to manage enable and disable proxy configuration base users local configuration
 * Origin: https://github.com/OpenProduct/openmask-extension/blob/main/src/libs/service/backgroundProxyService.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.subscriptionProxyNotifications = void 0;
var webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
var event_1 = require("../event");
var subscriptionProxyNotifications = function () {
    event_1.backgroundEventsEmitter.on('proxyChanged', function (configuration) {
        updateProxySetting(configuration.params);
    });
};
exports.subscriptionProxyNotifications = subscriptionProxyNotifications;
/**
 * Sample PROXY_PAC_SCRIPT example
 * function FindProxyForURL(url, host) {
 *      return host.endsWith('.ton')
 *        ? 'PROXY in2.ton.org:8080'
 *        : 'DIRECT';
 *    }
 */
var updateProxySetting = function (configuration) {
    if (!configuration.enabled) {
        webextension_polyfill_1["default"].proxy.settings.set({
            scope: 'regular',
            value: {
                mode: 'direct'
            }
        });
    }
    else {
        var proxies = Object.entries(configuration.domains).map(function (_a) {
            var end = _a[0], proxy = _a[1];
            return "case '".concat(end, "': return 'PROXY ").concat(proxy.host, ":").concat(proxy.port, "';");
        });
        var PROXY_PAC_SCRIPT = "function FindProxyForURL(url, host) {\n              const paths = host.split(\".\");\n              const end = paths && paths.length ? paths[paths.length - 1] : undefined;\n  \n              switch (end) {\n                  ".concat(proxies.join('\n'), "\n                  default: return 'DIRECT';\n              }\n          }");
        webextension_polyfill_1["default"].proxy.settings.set({
            scope: 'regular',
            value: {
                mode: 'pac_script',
                pacScript: {
                    data: PROXY_PAC_SCRIPT
                }
            }
        });
    }
};
