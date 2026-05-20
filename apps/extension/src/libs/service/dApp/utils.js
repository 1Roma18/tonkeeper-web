"use strict";
/**
 * Utils methods to support services process dApp requests
 */
exports.__esModule = true;
exports.awaitPopupResponse = void 0;
var exception_1 = require("@tonkeeper/core/dist/entries/exception");
var tonConnect_1 = require("@tonkeeper/core/dist/entries/tonConnect");
var event_1 = require("../../event");
var awaitPopupResponse = function (id) {
    return new Promise(function (resolve, reject) {
        var approve = function (options) {
            if (options.params.id === id) {
                event_1.backgroundEventsEmitter.off('approveRequest', approve);
                event_1.backgroundEventsEmitter.off('rejectRequest', cancel);
                event_1.backgroundEventsEmitter.off('closedPopUp', close);
                resolve(options.params.payload);
            }
        };
        var close = function () {
            event_1.backgroundEventsEmitter.off('approveRequest', approve);
            event_1.backgroundEventsEmitter.off('rejectRequest', cancel);
            event_1.backgroundEventsEmitter.off('closedPopUp', close);
            reject(new exception_1.TonConnectError('Pop-up closed', tonConnect_1.CONNECT_EVENT_ERROR_CODES.USER_REJECTS_ERROR));
        };
        var cancel = function (options) {
            if (options.params === id) {
                event_1.backgroundEventsEmitter.off('approveRequest', approve);
                event_1.backgroundEventsEmitter.off('rejectRequest', cancel);
                event_1.backgroundEventsEmitter.off('closedPopUp', close);
                reject(new exception_1.TonConnectError('Reject request', tonConnect_1.CONNECT_EVENT_ERROR_CODES.USER_REJECTS_ERROR));
            }
        };
        event_1.backgroundEventsEmitter.on('approveRequest', approve);
        event_1.backgroundEventsEmitter.on('rejectRequest', cancel);
        event_1.backgroundEventsEmitter.on('closedPopUp', close);
    });
};
exports.awaitPopupResponse = awaitPopupResponse;
