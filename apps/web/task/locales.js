"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var fs = __importStar(require("fs-extra"));
var path = __importStar(require("path"));
console.log('Copy Locales');
var srcDir = "../../packages/locales/dist/locales";
var buildDestDir = "dist/locales";
var devDestDir = "public/locales";
console.log(path.resolve(srcDir));
fs.readdirSync(srcDir).forEach(function (file) { return console.log(file); });
if (!fs.existsSync('build')) {
    fs.mkdirSync('build');
}
if (!fs.existsSync(buildDestDir)) {
    fs.mkdirSync(buildDestDir, { recursive: true });
}
fs.rmSync(devDestDir, { recursive: true, force: true });
if (!fs.existsSync(devDestDir)) {
    fs.mkdirSync(devDestDir, { recursive: true });
}
fs.copySync(srcDir, buildDestDir, { overwrite: true });
fs.copySync(srcDir, devDestDir, { overwrite: true });
