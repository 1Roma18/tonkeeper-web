"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.rendererConfig = void 0;
var path_1 = __importDefault(require("path"));
var node_polyfill_webpack_plugin_1 = __importDefault(require("node-polyfill-webpack-plugin"));
var webpack_rules_1 = require("./webpack.rules");
webpack_rules_1.rules.push({
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
});
// webpack 5 strict-ESM mode requires fully-specified paths for .mjs imports;
// node-stdlib-browser polyfills (used by node-polyfill-webpack-plugin) resolve
// to directory paths that break this. Disable fullySpecified for all JS/MJS.
webpack_rules_1.rules.push({
    test: /\.m?js$/,
    resolve: {
        fullySpecified: false
    }
});
exports.rendererConfig = {
    module: {
        rules: webpack_rules_1.rules
    },
    plugins: [new node_polyfill_webpack_plugin_1["default"]({ excludeAliases: ['vm'] })],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
        alias: {
            react: path_1["default"].resolve(__dirname, './node_modules/react'),
            'react-dom': path_1["default"].resolve(__dirname, './node_modules/react-dom'),
            'react-router-dom': path_1["default"].resolve(__dirname, './node_modules/react-router-dom'),
            'styled-components': path_1["default"].resolve(__dirname, './node_modules/styled-components'),
            'react-i18next': path_1["default"].resolve(__dirname, './node_modules/react-i18next'),
            '@tanstack/react-query': path_1["default"].resolve(__dirname, './node_modules/@tanstack/react-query'),
            '@ton/core': path_1["default"].resolve(__dirname, '../../packages/core/node_modules/@ton/core'),
            '@ton/crypto': path_1["default"].resolve(__dirname, '../../packages/core/node_modules/@ton/crypto'),
            '@ton/crypto/dist/mnemonic/mnemonic': path_1["default"].resolve(__dirname, '../../packages/core/node_modules/@ton/crypto/dist/mnemonic/mnemonic'),
            '@ton/ton': path_1["default"].resolve(__dirname, '../../packages/core/node_modules/@ton/ton')
        },
        fallback: {
            vm: false
        }
    }
};
