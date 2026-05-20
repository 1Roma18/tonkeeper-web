"use strict";
exports.__esModule = true;
exports.isMainWindowUrl = exports.mainWindowName = void 0;
exports.mainWindowName = 'main_window';
function isMainWindowUrl(url) {
    try {
        var path = new URL(url).pathname;
        if (path.startsWith('/')) {
            path = path.slice(1);
        }
        if (path.endsWith('/')) {
            path = path.slice(0, -1);
        }
        return path === exports.mainWindowName;
    }
    catch (e) {
        console.error(e);
        return false;
    }
}
exports.isMainWindowUrl = isMainWindowUrl;
