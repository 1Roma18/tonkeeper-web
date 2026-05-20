"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
var utils_1 = require("../utils");
var ExtensionPlatform = /** @class */ (function () {
    function ExtensionPlatform() {
    }
    ExtensionPlatform.getVersion = function () {
        var _a = webextension_polyfill_1["default"].runtime.getManifest(), version = _a.version, versionName = _a.version_name;
        var versionParts = version.split('.');
        if (versionName) {
            if (versionParts.length < 4) {
                throw new Error("Version missing build number: '".concat(version, "'"));
            }
            // On Chrome, a more descriptive representation of the version is stored in the
            // `version_name` field for display purposes. We use this field instead of the `version`
            // field on Chrome for non-main builds (i.e. Flask, Beta) because we want to show the
            // version in the SemVer-compliant format "v[major].[minor].[patch]-[build-type].[build-number]",
            // yet Chrome does not allow letters in the `version` field.
            return versionName;
            // A fourth version part is sometimes present for "rollback" Chrome builds
        }
        else if (![3, 4].includes(versionParts.length)) {
            throw new Error("Invalid version: ".concat(version));
        }
        else if (versionParts[2].match(/[^\d]/u)) {
            // On Firefox, the build type and build version are in the third part of the version.
            var major = versionParts[0], minor = versionParts[1], patchAndPrerelease = versionParts[2];
            var matches = patchAndPrerelease.match(/^(\d+)([A-Za-z]+)(\d)+$/u);
            if (matches === null) {
                throw new Error("Version contains invalid prerelease: ".concat(version));
            }
            var patch = matches[1], buildType = matches[2], buildVersion = matches[3];
            return "".concat(major, ".").concat(minor, ".").concat(patch, "-").concat(buildType, ".").concat(buildVersion);
        }
        // If there is no `version_name` and there are only 3 or 4 version parts, then this is not a
        // prerelease and the version requires no modification.
        return version;
    };
    ExtensionPlatform.getActiveTabLogo = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var tab;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ExtensionPlatform.getActiveTabs()];
                    case 1:
                        tab = (_b.sent())[0];
                        return [2 /*return*/, (_a = (tab && tab.favIconUrl)) !== null && _a !== void 0 ? _a : ''];
                }
            });
        });
    };
    ExtensionPlatform.getActiveTabs = function () {
        return new Promise(function (resolve, reject) {
            webextension_polyfill_1["default"].tabs.query({ active: true }).then(function (tabs) {
                var error = (0, utils_1.checkForError)();
                if (error) {
                    return reject(error);
                }
                return resolve(tabs);
            });
        });
    };
    return ExtensionPlatform;
}());
exports["default"] = ExtensionPlatform;
