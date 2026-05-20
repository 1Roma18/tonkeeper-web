"use strict";
exports.__esModule = true;
exports.cookieJar = exports.store = void 0;
var tough_cookie_1 = require("tough-cookie");
var cookieStorage_1 = require("./cookieStorage");
exports.store = new cookieStorage_1.CookieStore();
exports.cookieJar = new tough_cookie_1.CookieJar(exports.store);
