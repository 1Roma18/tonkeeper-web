"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var vite_1 = require("vite");
var vite_plugin_node_polyfills_1 = require("vite-plugin-node-polyfills");
var plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
var path_1 = __importDefault(require("path"));
var csp_1 = require("@tonkeeper/core/dist/utils/csp");
exports["default"] = (0, vite_1.defineConfig)({
    build: {
        outDir: './dist',
        minify: false,
        emptyOutDir: true
    },
    plugins: [
        (0, vite_plugin_node_polyfills_1.nodePolyfills)({
            globals: {
                Buffer: true,
                global: true,
                process: true
            },
            include: ['stream', 'buffer', 'crypto']
        }),
        (0, plugin_react_1["default"])(),
        (0, csp_1.injectCSP)(csp_1.metaTagCspConfig)
    ],
    resolve: {
        alias: {
            react: path_1["default"].resolve(__dirname, './node_modules/react'),
            'react-dom': path_1["default"].resolve(__dirname, './node_modules/react-dom'),
            '@ton/core': path_1["default"].resolve(__dirname, '../../packages/core/node_modules/@ton/core'),
            '@ton/crypto': path_1["default"].resolve(__dirname, '../../packages/core/node_modules/@ton/crypto'),
            '@ton/ton': path_1["default"].resolve(__dirname, '../../packages/core/node_modules/@ton/ton'),
            'react-router-dom': path_1["default"].resolve(__dirname, './node_modules/react-router-dom'),
            'styled-components': path_1["default"].resolve(__dirname, './node_modules/styled-components'),
            'react-i18next': path_1["default"].resolve(__dirname, './node_modules/react-i18next'),
            '@tanstack/react-query': path_1["default"].resolve(__dirname, './node_modules/@tanstack/react-query'),
            '@ionic/react': path_1["default"].resolve(__dirname, './node_modules/@ionic/react'),
            '@ionic/react-router': path_1["default"].resolve(__dirname, './node_modules/@ionic/react-router'),
            zod: path_1["default"].resolve(__dirname, '../../packages/core/node_modules/zod')
        }
    }
});
