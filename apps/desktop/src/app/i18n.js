"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var resources_json_1 = __importDefault(require("@tonkeeper/locales/dist/i18n/resources.json"));
var i18next_1 = __importDefault(require("i18next"));
var react_i18next_1 = require("react-i18next");
i18next_1["default"].use(react_i18next_1.initReactI18next) // passes i18n down to react-i18next
    .init({
    resources: resources_json_1["default"],
    debug: false,
    lng: 'en',
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false // react already safes from xss
    }
});
exports["default"] = i18next_1["default"];
