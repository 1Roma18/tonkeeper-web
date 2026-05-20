"use strict";
exports.__esModule = true;
exports.getWindow = void 0;
function getWindow() {
    if (typeof window !== 'undefined') {
        return window;
    }
    return undefined;
}
exports.getWindow = getWindow;
