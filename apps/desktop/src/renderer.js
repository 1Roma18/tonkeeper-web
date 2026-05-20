"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var buffer_1 = require("buffer");
var process_1 = __importDefault(require("process"));
globalThis.Buffer = buffer_1.Buffer;
globalThis.process = process_1["default"];
var renderer_1 = __importDefault(require("electron-log/renderer"));
renderer_1["default"].info('UI Start-up');
Object.assign(console, renderer_1["default"].functions);
require("./telegram-widget");
require("./react");
