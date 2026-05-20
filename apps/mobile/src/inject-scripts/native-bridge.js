"use strict";
exports.__esModule = true;
exports.bridgeEvents$ = exports.postBridgeMessage = void 0;
var atom_1 = require("@tonkeeper/core/dist/entries/atom");
var queryIdCounter = 0;
function postBridgeMessage(payload) {
    return new Promise(function (resolve) {
        var _a, _b, _c;
        queryIdCounter = queryIdCounter + 1;
        var queryId = queryIdCounter.toString();
        messages$.subscribe(function (m) {
            if (m.queryId === queryId) {
                resolve(m.payload);
            }
        });
        (_c = (_b = (_a = window.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.browserMessages) === null || _c === void 0 ? void 0 : _c.postMessage({
            type: 'bridge-message',
            queryId: queryId,
            payload: JSON.stringify(payload)
        });
    });
}
exports.postBridgeMessage = postBridgeMessage;
var messages$ = (0, atom_1.subject)();
var events$ = (0, atom_1.subject)();
exports.bridgeEvents$ = events$;
window.addEventListener('mainMessageReceived', function (event) {
    var _a = event.detail, queryId = _a.queryId, rawPayload = _a.payload;
    var payload = JSON.parse(rawPayload);
    if (queryId) {
        messages$.next({
            queryId: queryId,
            payload: payload
        });
    }
    else {
        events$.next(payload);
    }
});
