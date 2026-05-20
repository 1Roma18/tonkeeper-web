"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var client_1 = __importDefault(require("react-dom/client"));
var App_1 = require("./App");
require("./i18n");
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(<App_1.App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1["default"])();
