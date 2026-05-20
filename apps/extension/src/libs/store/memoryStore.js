"use strict";
exports.__esModule = true;
var memoryStore = function () {
    var tonapiToken = undefined;
    return {
        getTonapiToken: function () { return tonapiToken; },
        setTonapiToken: function (token) { return (tonapiToken = token); }
    };
};
var instance = memoryStore();
exports["default"] = instance;
