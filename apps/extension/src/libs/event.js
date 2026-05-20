"use strict";
exports.__esModule = true;
exports.backgroundEventsEmitter = exports.popUpEventEmitter = exports.RESPONSE = void 0;
var eventEmitter_1 = require("@tonkeeper/core/dist/entries/eventEmitter");
exports.RESPONSE = 'Response';
exports.popUpEventEmitter = new eventEmitter_1.EventEmitter();
exports.backgroundEventsEmitter = new eventEmitter_1.EventEmitter();
