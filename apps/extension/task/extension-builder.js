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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ExtensionBuilder = exports.BUILD_BASE_PATH = exports.notify = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var vite_1 = require("vite");
var child_process_1 = __importDefault(require("child_process"));
var notify = function (value) { return console.log("----------".concat(value, "----------")); };
exports.notify = notify;
exports.BUILD_BASE_PATH = 'dist';
var ExtensionBuilder = /** @class */ (function () {
    function ExtensionBuilder(directory) {
        this.directory = directory;
        this.isDevMode = process.env.NODE_ENV === 'development';
        this.configs = [
            'vite.config.background.ts',
            'vite.config.content.ts',
            'vite.config.provider.ts',
            'vite.config.main.ts'
        ];
        this.buildPath = "".concat(exports.BUILD_BASE_PATH, "/").concat(directory);
        var packageJson = JSON.parse(fs_extra_1["default"].readFileSync('package.json', 'utf8'));
        if (!('version' in packageJson) || typeof packageJson.version !== 'string') {
            throw new Error('Invalid package.json');
        }
        this.version = packageJson.version;
        var _a = process.env, PATH = _a.PATH, baseEnv = __rest(_a, ["PATH"]);
        this.env = __assign(__assign({}, baseEnv), { REACT_APP_DEV_MODE: this.isDevMode.toString() });
    }
    ExtensionBuilder.prototype.build = function (extraEnv) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, config, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fs_extra_1["default"].rmSync(this.buildPath, { recursive: true, force: true });
                        fs_extra_1["default"].mkdirSync(this.buildPath, { recursive: true });
                        process.env.VITE_BUILD_DIR = this.buildPath;
                        _i = 0, _a = this.configs;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        config = _a[_i];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, (0, vite_1.build)({
                                mode: this.isDevMode ? 'development' : 'production',
                                configFile: config,
                                define: {
                                    'process.env': __assign(__assign({}, this.env), extraEnv)
                                }
                            })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        console.error("Vite build for ".concat(this.directory, " (").concat(config, ") failed:"), error_1);
                        process.exit(1);
                        return [3 /*break*/, 5];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        this.verifyBuild();
                        this.copyLocales();
                        this.updateManifestVersion();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExtensionBuilder.prototype.verifyBuild = function () {
        var files = fs_extra_1["default"].readdirSync(this.buildPath);
        console.log("".concat(this.directory, " Build Output:"), files);
        if (!fs_extra_1["default"].existsSync("".concat(this.buildPath, "/background.js"))) {
            console.error("Error: ".concat(this.buildPath, "/background.js is missing"));
            process.exit(1);
        }
        var staticJsFiles = fs_extra_1["default"].readdirSync("".concat(this.buildPath, "/static/js"));
        console.log("".concat(this.directory, " static/js Output:"), staticJsFiles);
        var mainJsFile = staticJsFiles.find(function (file) { return file.startsWith('main.') && file.endsWith('.js'); });
        if (!mainJsFile) {
            console.error("Error: ".concat(this.buildPath, "/static/js/main.[hash].js is missing"));
            process.exit(1);
        }
    };
    ExtensionBuilder.prototype.copyLocales = function () {
        var srcDir = "../../packages/locales/dist/extension";
        fs_extra_1["default"].copySync(srcDir, "".concat(this.buildPath, "/_locales"), { overwrite: true });
    };
    ExtensionBuilder.prototype.updateManifestVersion = function () {
        var manifestData = this.readManifest();
        manifestData.version = this.version;
        this.writeManifest(manifestData);
    };
    ExtensionBuilder.prototype.archive = function () {
        child_process_1["default"].execSync("zip ../tonkeeper_".concat(this.directory, "_v").concat(this.version, ".zip -r ").concat(this.buildPath, "/ *"), {
            cwd: "".concat(this.buildPath, "/")
        });
    };
    ExtensionBuilder.prototype.readManifest = function () {
        return JSON.parse(fs_extra_1["default"].readFileSync("".concat(this.buildPath, "/manifest.json"), 'utf8'));
    };
    ExtensionBuilder.prototype.writeManifest = function (data) {
        fs_extra_1["default"].writeFileSync("".concat(this.buildPath, "/manifest.json"), JSON.stringify(data));
    };
    return ExtensionBuilder;
}());
exports.ExtensionBuilder = ExtensionBuilder;
