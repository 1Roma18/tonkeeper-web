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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
exports.__esModule = true;
var maker_deb_1 = require("@electron-forge/maker-deb");
var maker_dmg_1 = require("@electron-forge/maker-dmg");
var maker_rpm_1 = require("@electron-forge/maker-rpm");
var maker_squirrel_1 = require("@electron-forge/maker-squirrel");
var maker_zip_1 = require("@electron-forge/maker-zip");
var electron_forge_maker_appimage_1 = __importDefault(require("@pengx17/electron-forge-maker-appimage"));
var plugin_auto_unpack_natives_1 = require("@electron-forge/plugin-auto-unpack-natives");
var plugin_webpack_1 = require("@electron-forge/plugin-webpack");
var publisher_github_1 = require("@electron-forge/publisher-github");
var path_1 = __importDefault(require("path"));
var child_process_1 = require("child_process");
var fs_1 = require("fs");
var webpack_main_config_1 = require("./webpack.main.config");
var webpack_renderer_config_1 = require("./webpack.renderer.config");
var constants_1 = require("./src/constants");
var isDev = process.env.NODE_ENV === 'development';
var isPrerelease = (_b = (_a = process.env.GITHUB_REF_NAME) === null || _a === void 0 ? void 0 : _a.includes('-')) !== null && _b !== void 0 ? _b : false;
var githubToken = process.env.GITHUB_TOKEN;
// Bundle libsecret + transitive deps into the AppImage so it runs on systems
// where libsecret is not preinstalled. See github.com/tonkeeper/tonkeeper-web/issues/374
function bundleLibsecretIntoAppImage(appImagePath) {
    var workDir = path_1["default"].dirname(appImagePath);
    var linuxdeploy = process.env.LINUXDEPLOY_PATH || 'linuxdeploy';
    var libsecret = process.env.LIBSECRET_PATH || '/usr/lib/x86_64-linux-gnu/libsecret-1.so.0';
    var isRequired = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';
    var skipOrThrow = function (message) {
        if (isRequired)
            throw new Error(message);
        console.warn("[libsecret bundling] ".concat(message, ", skipping ").concat(appImagePath));
    };
    if ((0, child_process_1.spawnSync)(linuxdeploy, ['--appimage-extract-and-run', '--version'], { stdio: 'ignore' })
        .status !== 0) {
        skipOrThrow('linuxdeploy not available');
        return;
    }
    if (!(0, fs_1.existsSync)(libsecret)) {
        skipOrThrow("".concat(libsecret, " not found"));
        return;
    }
    var appDir = path_1["default"].join(workDir, 'squashfs-root');
    if ((0, fs_1.existsSync)(appDir))
        (0, fs_1.rmSync)(appDir, { recursive: true, force: true });
    var beforeFiles = new Set((0, fs_1.readdirSync)(workDir));
    var extract = (0, child_process_1.spawnSync)(appImagePath, ['--appimage-extract'], {
        cwd: workDir,
        stdio: 'inherit'
    });
    if (extract.status !== 0)
        throw new Error('AppImage --appimage-extract failed');
    var deploy = (0, child_process_1.spawnSync)(linuxdeploy, [
        '--appimage-extract-and-run',
        '--appdir',
        appDir,
        '--library',
        libsecret,
        '--output',
        'appimage'
    ], { cwd: workDir, stdio: 'inherit' });
    if (deploy.status !== 0)
        throw new Error('linuxdeploy --output appimage failed');
    var newAppImage = (0, fs_1.readdirSync)(workDir).find(function (f) { return f.endsWith('.AppImage') && !beforeFiles.has(f); });
    if (!newAppImage)
        throw new Error('linuxdeploy did not produce a new AppImage');
    (0, fs_1.unlinkSync)(appImagePath);
    (0, fs_1.renameSync)(path_1["default"].join(workDir, newAppImage), appImagePath);
    (0, fs_1.rmSync)(appDir, { recursive: true, force: true });
    console.log("[libsecret bundling] repacked ".concat(appImagePath));
}
var schemes = ['tc', 'tonkeeper', 'tonkeeper-tc'];
var squirrelRemoteReleases = githubToken
    ? {
        // SyncReleases uses the GitHub API for repo URLs, so keep PR/local builds offline.
        remoteReleases: 'https://github.com/tonkeeper/tonkeeper-web',
        remoteToken: githubToken
    }
    : {};
var devAndRpmOptions = {
    name: 'Tonkeeper',
    productName: 'Tonkeeper',
    genericName: 'Tonkeeper',
    license: 'Apache-2.0',
    maintainer: 'Ton Apps Group',
    bin: 'Tonkeeper',
    description: 'Your desktop wallet on The Open Network',
    homepage: 'https://tonkeeper.com',
    icon: path_1["default"].join(__dirname, 'public', 'icon.png'),
    mimeType: schemes.map(function (schema) { return "x-scheme-handler/".concat(schema); })
};
var config = {
    packagerConfig: {
        asar: true,
        icon: path_1["default"].join(__dirname, 'public', 'icon'),
        name: 'Tonkeeper',
        executableName: 'Tonkeeper',
        protocols: [
            {
                name: 'Tonkeeper Protocol',
                schemes: schemes
            }
        ],
        appBundleId: 'com.tonapps.tonkeeperpro',
        osxSign: {
            optionsForFile: function (optionsForFile) {
                return {
                    entitlements: 'entitlements.plist'
                };
            }
        },
        osxNotarize: {
            appleApiKey: process.env.APPLE_API_KEY,
            appleApiKeyId: process.env.APPLE_API_KEY_ID,
            appleApiIssuer: process.env.APPLE_API_ISSUER
        },
        extraResource: ['./public']
    },
    rebuildConfig: {},
    makers: __spreadArray([
        new maker_squirrel_1.MakerSquirrel(__assign({ name: 'Tonkeeper', authors: 'Ton Apps Group', description: 'Your desktop wallet on The Open Network', iconUrl: 'https://tonkeeper.com/assets/icon.ico', setupIcon: path_1["default"].join(process.cwd(), 'public', 'icon.ico'), loadingGif: path_1["default"].join(process.cwd(), 'public', 'install.gif') }, squirrelRemoteReleases), ['win32']),
        new maker_zip_1.MakerZIP({}, ['darwin', 'linux', 'win32']),
        new maker_dmg_1.MakerDMG(function (arch) { return ({
            background: path_1["default"].join(process.cwd(), 'public', 'dmg-bg.png'),
            icon: path_1["default"].join(process.cwd(), 'public', 'icon.icns'),
            format: 'ULFO',
            additionalDMGOptions: { window: { size: { width: 600, height: 372 } } },
            contents: [
                {
                    x: 200,
                    y: 170,
                    type: 'file',
                    path: "".concat(process.cwd(), "/out/Tonkeeper-darwin-").concat(arch, "/Tonkeeper.app")
                },
                { x: 400, y: 170, type: 'link', path: '/Applications' }
            ]
        }); }, ['darwin']),
        new maker_rpm_1.MakerRpm({
            options: __assign(__assign({}, devAndRpmOptions), { requires: ['libsecret'] })
        }, ['linux']),
        new maker_deb_1.MakerDeb({
            options: __assign(__assign({}, devAndRpmOptions), { compression: 'xz', depends: ['libsecret-1-0'] })
        }, ['linux'])
    ], (['x64', 'arm64'].includes(process.argv[3])
        ? [
            new electron_forge_maker_appimage_1["default"]({
                options: devAndRpmOptions
            }, ['linux'])
        ]
        : []), true),
    plugins: [
        new plugin_auto_unpack_natives_1.AutoUnpackNativesPlugin({}),
        new plugin_webpack_1.WebpackPlugin({
            mainConfig: webpack_main_config_1.mainConfig,
            devContentSecurityPolicy: "script-src 'self' * 'unsafe-eval'",
            renderer: {
                config: webpack_renderer_config_1.rendererConfig,
                entryPoints: [
                    {
                        html: isDev ? './src/dev.html' : './src/index.html',
                        js: './src/renderer.ts',
                        name: constants_1.mainWindowName,
                        preload: {
                            js: './src/preload.ts'
                        }
                    }
                ]
            }
        })
    ],
    publishers: [
        new publisher_github_1.PublisherGithub({
            repository: {
                owner: 'tonkeeper',
                name: 'tonkeeper-web'
            },
            draft: true,
            prerelease: isPrerelease
        })
    ],
    hooks: {
        postMake: function (_config, makeResults) { return __awaiter(void 0, void 0, void 0, function () {
            var _i, makeResults_1, result, _a, _b, artifact;
            return __generator(this, function (_c) {
                for (_i = 0, makeResults_1 = makeResults; _i < makeResults_1.length; _i++) {
                    result = makeResults_1[_i];
                    if (result.platform !== 'linux' || result.arch !== 'x64')
                        continue;
                    for (_a = 0, _b = result.artifacts; _a < _b.length; _a++) {
                        artifact = _b[_a];
                        if (artifact.endsWith('.AppImage')) {
                            bundleLibsecretIntoAppImage(artifact);
                        }
                    }
                }
                return [2 /*return*/, makeResults];
            });
        }); }
    }
};
exports["default"] = config;
