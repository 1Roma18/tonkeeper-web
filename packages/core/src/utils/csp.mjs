"use strict";
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
exports.__esModule = true;
exports.injectCSP = exports.cspConfigContentToArray = exports.cspConfigContentToString = exports.metaTagCspConfig = exports.httpCspConfig = exports.baseCspConfig = void 0;
exports.baseCspConfig = {
    'default-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'none'"],
    'form-action': ["'none'"],
    'frame-src': ["'none'"],
    'worker-src': ["'none'"],
    'media-src': ["'none'"],
    /* Allow loading self scripts */
    'script-src': ["'self'"],
    /* Allow using inline styles for Styled Components; allow loading Montserrat font from Google Fonts */
    'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com/'],
    /* Allow loading dApps images for ton connect */
    'img-src': ["'self'", 'data:', 'https:'],
    /* Allow loading Montserrat font from Google Fonts */
    'font-src': ["'self'", 'https://fonts.gstatic.com'],
    /* Allowed fetch destinations */
    'connect-src': [
        "'self'",
        'https://tonkeeper.com',
        'https://*.tonkeeper.com',
        'https://tonapi.io',
        'https://*.tonapi.io',
        'https://tonconsole.com',
        'https://*.tonconsole.com',
        'https://api.trongrid.io/',
        'https://duckduckgo.com',
        'https://oauth.telegram.org'
    ],
    /* Allow loading pwa manifest */
    'manifest-src': ["'self'"],
    'upgrade-insecure-requests': true
};
exports.httpCspConfig = __assign(__assign({}, exports.baseCspConfig), { 'frame-ancestors': ["'none'"] });
exports.metaTagCspConfig = __assign({}, exports.baseCspConfig);
function cspConfigContentToString(cspConfig) {
    return cspConfigContentToArray(cspConfig).join('; ') + ';';
}
exports.cspConfigContentToString = cspConfigContentToString;
function cspConfigContentToArray(cspConfig) {
    return Object.entries(cspConfig)
        .map(function (_a) {
        var key = _a[0], values = _a[1];
        if (typeof values === 'boolean') {
            return values ? "".concat(key) : '';
        }
        else {
            return "".concat(key, " ").concat(values.join(' '));
        }
    })
        .filter(function (v) { return v !== ''; });
}
exports.cspConfigContentToArray = cspConfigContentToArray;
function injectCSP(config) {
    return {
        name: 'inject-meta-tag',
        transformIndexHtml: function (html) {
            return html.replace('</head>', "<meta http-equiv=\"Content-Security-Policy\" content=\"".concat(cspConfigContentToString(config), "\"></head>"));
        }
    };
}
exports.injectCSP = injectCSP;
