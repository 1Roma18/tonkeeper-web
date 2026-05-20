"use strict";
exports.__esModule = true;
exports.defaultTonProxyConfiguration = exports.PublicTonProxy = void 0;
/**
 * Source: https://ton.org/docs/#/web3/sites-and-proxy?id=running-entry-proxy
 */
exports.PublicTonProxy = [
    { host: 'in1.ton.org', port: '8080' },
    { host: 'in2.ton.org', port: '8080' },
    { host: 'in3.ton.org', port: '8080' }
];
exports.defaultTonProxyConfiguration = {
    enabled: true,
    domains: {
        ton: exports.PublicTonProxy[1]
    }
};
