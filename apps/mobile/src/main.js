"use strict";
exports.__esModule = true;
var client_1 = require("react-dom/client");
var App_1 = require("./app/App");
require("./app/i18n");
require("./telegram-widget");
var root = (0, client_1.createRoot)(document.getElementById('root'));
root.render(<App_1.App />);
