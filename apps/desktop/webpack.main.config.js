"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.mainConfig = void 0;
var webpack_rules_1 = require("./webpack.rules");
var path_1 = __importDefault(require("path"));
exports.mainConfig = {
    /**
     * This is the main entry point for your application, it's the first file
     * that runs in the main process.
     */
    entry: './src/index.ts',
    // Put your normal webpack config below here
    module: {
        rules: webpack_rules_1.rules
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
        alias: {
            '@ton/crypto/dist/mnemonic/mnemonic': path_1["default"].resolve(__dirname, '../../packages/core/node_modules/@ton/crypto/dist/mnemonic/mnemonic')
        }
    }
};
