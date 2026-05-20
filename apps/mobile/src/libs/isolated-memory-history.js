"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.createIsolatedMemoryHistory = void 0;
function createIsolatedMemoryHistory(initialEntries, initialIndex) {
    if (initialEntries === void 0) { initialEntries = [{ pathname: '/', search: '', hash: '', state: null }]; }
    if (initialIndex === void 0) { initialIndex = 0; }
    var listeners = [];
    var entries = __spreadArray([], initialEntries, true);
    var index = initialIndex;
    var action = 'POP';
    var blockPrompt = null;
    var notifyListeners = function (location) {
        if (blockPrompt) {
            var result = blockPrompt(location);
            if (typeof result === 'string') {
                if (!window.confirm(result))
                    return;
            }
            else if (!result) {
                return;
            }
        }
        listeners.forEach(function (listener) { return listener(location); });
    };
    var history = {
        get location() {
            return entries[index];
        },
        get index() {
            return index;
        },
        get length() {
            return entries.length;
        },
        get entries() {
            return __spreadArray([], entries, true);
        },
        get action() {
            return action;
        },
        push: function (path, state) {
            if (state === void 0) { state = null; }
            var _a = path.split(/[?#]/), pathname = _a[0], _b = _a[1], search = _b === void 0 ? '' : _b, _c = _a[2], hash = _c === void 0 ? '' : _c;
            entries = __spreadArray(__spreadArray([], entries.slice(0, index + 1), true), [{ pathname: pathname, search: search, hash: hash, state: state }], false);
            index++;
            action = 'PUSH';
            notifyListeners(history.location);
        },
        replace: function (path, state) {
            if (state === void 0) { state = null; }
            var _a = path.split(/[?#]/), pathname = _a[0], _b = _a[1], search = _b === void 0 ? '' : _b, _c = _a[2], hash = _c === void 0 ? '' : _c;
            entries[index] = { pathname: pathname, search: search, hash: hash, state: state };
            action = 'REPLACE';
            notifyListeners(history.location);
        },
        go: function (n) {
            var newIndex = Math.max(0, Math.min(index + n, entries.length - 1));
            if (newIndex !== index) {
                index = newIndex;
                action = 'POP';
                notifyListeners(history.location);
            }
        },
        goBack: function () {
            history.go(-1);
        },
        back: function () {
            history.go(-1);
        },
        goForward: function () {
            history.go(1);
        },
        canGo: function (n) {
            var newIndex = index + n;
            return newIndex >= 0 && newIndex < entries.length;
        },
        listen: function (listener) {
            listeners.push(listener);
            return function () {
                listeners = listeners.filter(function (l) { return l !== listener; });
            };
        },
        block: function (prompt) {
            blockPrompt = typeof prompt === 'function' ? prompt : function () { return prompt; };
            return function () {
                blockPrompt = null;
            };
        },
        createHref: function (location) {
            return (location.pathname +
                (location.search ? "?".concat(location.search) : '') +
                (location.hash ? "#".concat(location.hash) : ''));
        }
    };
    return history;
}
exports.createIsolatedMemoryHistory = createIsolatedMemoryHistory;
