"use strict";
exports.__esModule = true;
exports.sharedConfig = void 0;
var path_1 = require("path");
var vite_plugin_node_polyfills_1 = require("vite-plugin-node-polyfills");
var isDev = process.env.NODE_ENV === 'development';
exports.sharedConfig = {
    envPrefix: 'REACT_APP_',
    plugins: [(0, vite_plugin_node_polyfills_1.nodePolyfills)()],
    resolve: {
        alias: {
            react: (0, path_1.resolve)(__dirname, './node_modules/react'),
            '@ton/core': (0, path_1.resolve)(__dirname, '../../packages/core/node_modules/@ton/core'),
            '@ton/crypto': (0, path_1.resolve)(__dirname, '../../packages/core/node_modules/@ton/crypto'),
            '@ton/ton': (0, path_1.resolve)(__dirname, '../../packages/core/node_modules/@ton/ton'),
            'react-dom': (0, path_1.resolve)(__dirname, './node_modules/react-dom'),
            'react-router-dom': (0, path_1.resolve)(__dirname, './node_modules/react-router-dom'),
            'styled-components': (0, path_1.resolve)(__dirname, './node_modules/styled-components'),
            'react-i18next': (0, path_1.resolve)(__dirname, './node_modules/react-i18next'),
            '@tanstack/react-query': (0, path_1.resolve)(__dirname, './node_modules/@tanstack/react-query'),
            '@ton/crypto/dist/mnemonic/mnemonic': (0, path_1.resolve)(__dirname, '../../packages/core/node_modules/@ton/crypto/dist/mnemonic/mnemonic')
        }
    },
    build: {
        outDir: process.env.VITE_BUILD_DIR || 'build',
        sourcemap: isDev,
        minify: isDev ? false : 'esbuild',
        emptyOutDir: false,
        rollupOptions: {
            output: {
                assetFileNames: 'static/[name].[hash][extname]'
            }
        },
        target: 'esnext'
    }
};
