"use strict";
exports.__esModule = true;
exports.TonLinksInterceptor = void 0;
var TonLinksInterceptor = /** @class */ (function () {
    function TonLinksInterceptor(provider) {
        var _this = this;
        this.provider = provider;
        this.shouldInterceptLink = function (href) {
            return Boolean((href === null || href === void 0 ? void 0 : href.startsWith('https://app.tonkeeper.com/transfer/')) || (href === null || href === void 0 ? void 0 : href.startsWith('ton://')));
        };
        this.clickCallback = function (event) {
            var target = event.target;
            var anchor = target.closest('a[href]');
            if (!anchor)
                return;
            var href = anchor.href;
            if (_this.shouldInterceptLink(href)) {
                event.preventDefault();
                event.stopPropagation();
                _this.processInterception(href);
            }
        };
        this.windowOpenOverride = function (url) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var href = typeof url === 'string' ? url : url === null || url === void 0 ? void 0 : url.toString();
            if (_this.shouldInterceptLink(href)) {
                _this.processInterception(href);
                return null;
            }
            var target = args[0], features = args[1];
            return _this.originalWindowOpen.call(window, url, target, features);
        };
    }
    TonLinksInterceptor.prototype.processInterception = function (href) {
        this.provider.send('tonLink_intercept', href);
    };
    TonLinksInterceptor.prototype.startInterceptLinks = function () {
        document.addEventListener('click', this.clickCallback, { capture: true });
        if (!this.originalWindowOpen) {
            this.originalWindowOpen = window.open;
            window.open = this.windowOpenOverride;
        }
    };
    TonLinksInterceptor.prototype.stopInterceptLinks = function () {
        document.removeEventListener('click', this.clickCallback, { capture: true });
        if (this.originalWindowOpen) {
            window.open = this.originalWindowOpen;
            this.originalWindowOpen = undefined;
        }
    };
    return TonLinksInterceptor;
}());
exports.TonLinksInterceptor = TonLinksInterceptor;
