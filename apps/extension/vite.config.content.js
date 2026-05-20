"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var vite_1 = require("vite");
var path_1 = require("path");
var vite_config_shared_1 = require("./vite.config.shared");
exports["default"] = (0, vite_1.defineConfig)(__assign(__assign({}, vite_config_shared_1.sharedConfig), { build: __assign(__assign({}, vite_config_shared_1.sharedConfig.build), { rollupOptions: __assign(__assign({}, vite_config_shared_1.sharedConfig.build.rollupOptions), { input: {
                content: (0, path_1.resolve)(__dirname, 'src/content.ts')
            }, output: __assign(__assign({}, vite_config_shared_1.sharedConfig.build.rollupOptions.output), { entryFileNames: 'content.js', chunkFileNames: function () {
                    throw new Error('Chunks are not allowed for content.js');
                } }) }) }) }));
