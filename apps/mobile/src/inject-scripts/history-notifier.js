"use strict";
exports.__esModule = true;
exports.setupHistoryNotifier = void 0;
function setupHistoryNotifier() {
    var originalPushState = history.pushState;
    var originalReplaceState = history.replaceState;
    function notifyUrlChange() {
        var _a, _b, _c;
        (_c = (_b = (_a = window.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.browserMessages) === null || _c === void 0 ? void 0 : _c.postMessage({
            type: 'url-changed'
        });
    }
    history.pushState = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        originalPushState.apply(this, args);
        notifyUrlChange();
    };
    history.replaceState = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        originalReplaceState.apply(this, args);
        notifyUrlChange();
    };
    window.addEventListener('popstate', notifyUrlChange);
    window.addEventListener('hashchange', notifyUrlChange);
}
exports.setupHistoryNotifier = setupHistoryNotifier;
