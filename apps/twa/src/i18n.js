"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var default_json_1 = __importDefault(require("@tonkeeper/locales/dist/i18n/default.json"));
var i18next_1 = __importDefault(require("i18next"));
var i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
var i18next_http_backend_1 = __importDefault(require("i18next-http-backend"));
var react_i18next_1 = require("react-i18next");
i18next_1["default"]
    .use(i18next_http_backend_1["default"])
    .use(i18next_browser_languagedetector_1["default"])
    .use(react_i18next_1.initReactI18next) // passes i18n down to react-i18next
    .init({
    resources: default_json_1["default"],
    debug: false,
    lng: 'en',
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});
exports["default"] = i18next_1["default"];
