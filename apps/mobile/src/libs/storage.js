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
exports.__esModule = true;
exports.StorageMigrationService = exports.migrateCapacitorStorage = exports.getCapacitorStorage = exports.DeviceStorage = void 0;
var device_storage_plugin_1 = require("./plugins/device-storage-plugin");
var preferences_storage_1 = require("./preferences-storage");
var DeviceStorage = /** @class */ (function () {
    function DeviceStorage() {
        var _this = this;
        this.get = function (key) { return __awaiter(_this, void 0, void 0, function () {
            var value, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, device_storage_plugin_1.DeviceStorage.get({ key: key })];
                    case 1:
                        value = (_a.sent()).value;
                        if (value === null) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, JSON.parse(value)];
                    case 2:
                        error_1 = _a.sent();
                        console.error('DeviceStorage get error:', error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.set = function (key, value) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, device_storage_plugin_1.DeviceStorage.set({ key: key, value: JSON.stringify(value) })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, value];
                    case 2:
                        error_2 = _a.sent();
                        console.error('DeviceStorage set error:', error_2);
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.setBatch = function (values) { return __awaiter(_this, void 0, void 0, function () {
            var stringValues, _i, _a, _b, key, value, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        stringValues = {};
                        for (_i = 0, _a = Object.entries(values); _i < _a.length; _i++) {
                            _b = _a[_i], key = _b[0], value = _b[1];
                            stringValues[key] = JSON.stringify(value);
                        }
                        return [4 /*yield*/, device_storage_plugin_1.DeviceStorage.setBatch({ values: stringValues })];
                    case 1:
                        _c.sent();
                        return [2 /*return*/, values];
                    case 2:
                        error_3 = _c.sent();
                        console.error('DeviceStorage setBatch error:', error_3);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this["delete"] = function (key) { return __awaiter(_this, void 0, void 0, function () {
            var payload, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.get(key)];
                    case 1:
                        payload = _a.sent();
                        if (!(payload !== null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, device_storage_plugin_1.DeviceStorage["delete"]({ key: key })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, payload];
                    case 4:
                        error_4 = _a.sent();
                        console.error('DeviceStorage delete error:', error_4);
                        throw error_4;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.clear = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, device_storage_plugin_1.DeviceStorage.clear()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.error('DeviceStorage clear error:', error_5);
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    return DeviceStorage;
}());
exports.DeviceStorage = DeviceStorage;
var deviceStorage = new DeviceStorage();
var preferencesStorage = new preferences_storage_1.PreferencesStorage();
var capacitorStorage = preferencesStorage;
function getCapacitorStorage() {
    return capacitorStorage;
}
exports.getCapacitorStorage = getCapacitorStorage;
function migrateCapacitorStorage() {
    return __awaiter(this, void 0, void 0, function () {
        var storageMigrationService, isMigrationCompleted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    storageMigrationService = new StorageMigrationService();
                    return [4 /*yield*/, storageMigrationService.migrate()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, storageMigrationService.isMigrationCompleted()];
                case 2:
                    isMigrationCompleted = _a.sent();
                    if (isMigrationCompleted) {
                        capacitorStorage = deviceStorage;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.migrateCapacitorStorage = migrateCapacitorStorage;
var StorageMigrationService = /** @class */ (function () {
    function StorageMigrationService() {
        this.oldStorage = new preferences_storage_1.PreferencesStorage();
        this.newStorage = new DeviceStorage();
    }
    StorageMigrationService.prototype.isMigrationCompleted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var remainingKeys, realKeysCount, _i, remainingKeys_1, key, value, error_6, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, this.oldStorage.keys()];
                    case 1:
                        remainingKeys = _a.sent();
                        if (remainingKeys.length === 0) {
                            return [2 /*return*/, true];
                        }
                        realKeysCount = 0;
                        _i = 0, remainingKeys_1 = remainingKeys;
                        _a.label = 2;
                    case 2:
                        if (!(_i < remainingKeys_1.length)) return [3 /*break*/, 7];
                        key = remainingKeys_1[_i];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.oldStorage.get(key)];
                    case 4:
                        value = _a.sent();
                        if (value !== null) {
                            realKeysCount++;
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_6 = _a.sent();
                        console.log("Error checking key ".concat(key, ":"), error_6);
                        return [3 /*break*/, 6];
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/, realKeysCount === 0];
                    case 8:
                        error_7 = _a.sent();
                        console.error('Error checking migration status:', error_7);
                        return [2 /*return*/, false];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    StorageMigrationService.prototype.migrateKey = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var value, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.oldStorage.get(key)];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, this.newStorage.set(key, value)];
                    case 2:
                        _a.sent();
                        console.log("Migrated key: ".concat(key));
                        return [2 /*return*/, true];
                    case 3:
                        error_8 = _a.sent();
                        console.error("Error migrating key ".concat(key, ":"), error_8);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StorageMigrationService.prototype.cleanupOldStorage = function (migratedKeys) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, migratedKeys_1, key, error_9, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        console.log("Cleaning up ".concat(migratedKeys.length, " keys from old storage"));
                        _i = 0, migratedKeys_1 = migratedKeys;
                        _a.label = 1;
                    case 1:
                        if (!(_i < migratedKeys_1.length)) return [3 /*break*/, 6];
                        key = migratedKeys_1[_i];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.oldStorage["delete"](key)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_9 = _a.sent();
                        console.error("Error removing key ".concat(key, " from old storage:"), error_9);
                        return [3 /*break*/, 5];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        console.log('Old storage cleanup completed');
                        return [3 /*break*/, 8];
                    case 7:
                        error_10 = _a.sent();
                        console.error('Error during old storage cleanup:', error_10);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    StorageMigrationService.prototype.migrate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errors, migratedCount, keysToMigrate, migratedKeys, _i, keysToMigrate_1, key, success, error_11, errorMsg, error_12, errorMsg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isMigrationCompleted()];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/];
                        }
                        console.log('Starting storage migration from Preferences to Keychain...');
                        errors = [];
                        migratedCount = 0;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 13, , 14]);
                        return [4 /*yield*/, this.oldStorage.keys()];
                    case 3:
                        keysToMigrate = _a.sent();
                        if (keysToMigrate.length === 0) {
                            console.log('No keys found in old storage, migration completed');
                            return [2 /*return*/];
                        }
                        console.log("Found ".concat(keysToMigrate.length, " keys in old storage"));
                        migratedKeys = [];
                        _i = 0, keysToMigrate_1 = keysToMigrate;
                        _a.label = 4;
                    case 4:
                        if (!(_i < keysToMigrate_1.length)) return [3 /*break*/, 9];
                        key = keysToMigrate_1[_i];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.migrateKey(key)];
                    case 6:
                        success = _a.sent();
                        if (success) {
                            migratedCount++;
                            migratedKeys.push(key);
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        error_11 = _a.sent();
                        errorMsg = "Failed to migrate key ".concat(key, ": ").concat(error_11);
                        console.error(errorMsg);
                        errors.push(errorMsg);
                        return [3 /*break*/, 8];
                    case 8:
                        _i++;
                        return [3 /*break*/, 4];
                    case 9:
                        if (!(errors.length === 0)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.cleanupOldStorage(migratedKeys)];
                    case 10:
                        _a.sent();
                        console.log('Migration completed successfully');
                        return [3 /*break*/, 12];
                    case 11:
                        console.log('Migration completed with errors, skipping cleanup');
                        _a.label = 12;
                    case 12:
                        console.log("Migration completed: ".concat(migratedCount, "/").concat(keysToMigrate.length, " keys migrated"));
                        return [3 /*break*/, 14];
                    case 13:
                        error_12 = _a.sent();
                        errorMsg = "Migration failed: ".concat(error_12);
                        console.error(errorMsg);
                        return [3 /*break*/, 14];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    return StorageMigrationService;
}());
exports.StorageMigrationService = StorageMigrationService;
