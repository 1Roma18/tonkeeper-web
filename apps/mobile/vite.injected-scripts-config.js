"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var vite_1 = require("vite");
var path_1 = __importDefault(require("path"));
exports["default"] = (0, vite_1.defineConfig)({
    build: {
        outDir: './ios/App/App',
        emptyOutDir: false,
        minify: false,
        lib: {
            entry: path_1["default"].resolve(__dirname, 'src/inject-scripts/index.ts'),
            name: 'InjectedScript',
            fileName: function () { return 'injected.js'; },
            formats: ['iife']
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true
            },
            treeshake: {
                moduleSideEffects: false
            }
        }
    }
});
