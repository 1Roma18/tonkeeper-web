"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.AptabaseExtension = void 0;
var event_1 = require("../event");
var AptabaseExtension = /** @class */ (function () {
    function AptabaseExtension(aptabaseEndpoint, aptabaseKey) {
        var _this = this;
        this.aptabaseEndpoint = aptabaseEndpoint;
        this.aptabaseKey = aptabaseKey;
        this.init = function (params) {
            event_1.sendBackground.message('userProperties', {
                application: params.application,
                walletType: params.walletType,
                accounts: params.accounts,
                activeAccount: params.activeAccount,
                network: params.network,
                aptabaseKey: _this.aptabaseKey,
                aptabaseEndpoint: _this.aptabaseEndpoint
            });
        };
        this.track = this.track.bind(this);
    }
    AptabaseExtension.prototype.track = function (arg1, arg2) {
        if (typeof arg1 === 'string') {
            event_1.sendBackground.message('trackEvent', { name: arg1, params: arg2 !== null && arg2 !== void 0 ? arg2 : {} });
        }
        else {
            var eventName = arg1.eventName, params = __rest(arg1, ["eventName"]);
            event_1.sendBackground.message('trackEvent', {
                name: eventName,
                params: params
            });
        }
        return Promise.resolve();
    };
    return AptabaseExtension;
}());
exports.AptabaseExtension = AptabaseExtension;
