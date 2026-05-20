"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.checkForError = void 0;
var webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
/**
 * Returns an Error if extension.runtime.lastError is present
 * this is a workaround for the non-standard error object that's used
 *
 * @returns {Error|undefined}
 */
function checkForError() {
    var lastError = webextension_polyfill_1["default"].runtime.lastError;
    if (!lastError)
        return undefined;
    return lastError instanceof Error
        ? lastError
        : new Error(lastError.message || 'Unknown runtime error');
}
exports.checkForError = checkForError;
