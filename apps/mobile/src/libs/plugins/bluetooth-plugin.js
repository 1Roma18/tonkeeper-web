"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.BluetoothPolyfill = exports.Bluetooth = void 0;
var core_1 = require("@capacitor/core");
exports.Bluetooth = (0, core_1.registerPlugin)('Bluetooth');
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.listeners = {};
    }
    EventEmitter.prototype.addEventListener = function (type, listener) {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(listener);
    };
    EventEmitter.prototype.removeEventListener = function (type, callback) {
        if (this.listeners[type]) {
            this.listeners[type] = this.listeners[type].filter(function (cb) { return cb !== callback; });
        }
    };
    EventEmitter.prototype.dispatchEvent = function (event) {
        var eventName = event.type;
        if (this.listeners[eventName]) {
            Object.defineProperty(event, 'target', { value: this, writable: false });
            this.listeners[eventName].forEach(function (callback) { return callback(event); });
        }
    };
    return EventEmitter;
}());
var PolyfillCharacteristic = /** @class */ (function (_super) {
    __extends(PolyfillCharacteristic, _super);
    function PolyfillCharacteristic(uuid, deviceId, serviceUuid) {
        var _this = _super.call(this) || this;
        _this.uuid = uuid;
        _this.deviceId = deviceId;
        _this.serviceUuid = serviceUuid;
        _this._value = null;
        _this.pluginListenerHandle = null;
        return _this;
    }
    PolyfillCharacteristic.prototype.subscribeGlobal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.pluginListenerHandle) {
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, exports.Bluetooth.addListener('characteristicValueChanged', function (data) {
                                if (data.deviceId === _this.deviceId &&
                                    data.serviceUuid === _this.serviceUuid &&
                                    data.characteristicUuid === _this.uuid) {
                                    var value = Buffer.from(data.value, 'base64');
                                    var arrayBuffer = value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
                                    _this._value = new DataView(arrayBuffer);
                                    var event_1 = new Event('characteristicvaluechanged');
                                    event_1.value = arrayBuffer;
                                    _this.dispatchEvent(event_1);
                                }
                            })];
                    case 1:
                        _a.pluginListenerHandle = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PolyfillCharacteristic.prototype.addEventListener = function (type, listener) {
        if (type !== 'characteristicvaluechanged') {
            return;
        }
        _super.prototype.addEventListener.call(this, type, listener);
        this.subscribeGlobal();
    };
    PolyfillCharacteristic.prototype.removeEventListener = function (type, callback) {
        var _a;
        if (type !== 'characteristicvaluechanged') {
            return;
        }
        _super.prototype.removeEventListener.call(this, type, callback);
        if (!((_a = this.listeners[type]) === null || _a === void 0 ? void 0 : _a.length) && this.pluginListenerHandle) {
            this.pluginListenerHandle.remove();
            this.pluginListenerHandle = null;
        }
    };
    Object.defineProperty(PolyfillCharacteristic.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    PolyfillCharacteristic.prototype.writeValue = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var base64Value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base64Value = Buffer.from(value).toString('base64');
                        return [4 /*yield*/, exports.Bluetooth.writeValue({
                                deviceId: this.deviceId,
                                serviceUuid: this.serviceUuid,
                                characteristicUuid: this.uuid,
                                value: base64Value
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PolyfillCharacteristic.prototype.startNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.Bluetooth.startNotifications({
                            deviceId: this.deviceId,
                            serviceUuid: this.serviceUuid,
                            characteristicUuid: this.uuid
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PolyfillCharacteristic.prototype.stopNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.Bluetooth.stopNotifications({
                            deviceId: this.deviceId,
                            serviceUuid: this.serviceUuid,
                            characteristicUuid: this.uuid
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PolyfillCharacteristic;
}(EventEmitter));
var PolyfillService = /** @class */ (function () {
    function PolyfillService(uuid, deviceId) {
        this.uuid = uuid;
        this.deviceId = deviceId;
    }
    PolyfillService.prototype.getCharacteristics = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.Bluetooth.getCharacteristics({
                            deviceId: this.deviceId,
                            serviceUuid: this.uuid
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.characteristics.map(function (char) {
                                return new PolyfillCharacteristic(char.uuid, _this.deviceId, _this.uuid);
                            })];
                }
            });
        });
    };
    PolyfillService.prototype.getCharacteristic = function (characteristicUUID) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.Bluetooth.getCharacteristic({
                            deviceId: this.deviceId,
                            serviceUuid: this.uuid,
                            characteristicUuid: characteristicUUID
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new PolyfillCharacteristic(result.uuid, this.deviceId, this.uuid)];
                }
            });
        });
    };
    return PolyfillService;
}());
var PolyfillGATTServer = /** @class */ (function () {
    function PolyfillGATTServer(device) {
        this.device = device;
        this.connected = false;
    }
    PolyfillGATTServer.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.Bluetooth.connect({ deviceId: this.device.id })];
                    case 1:
                        _a.sent();
                        this.connected = true;
                        return [2 /*return*/, this];
                }
            });
        });
    };
    PolyfillGATTServer.prototype.disconnect = function () {
        exports.Bluetooth.disconnect({ deviceId: this.device.id });
        this.connected = false;
        var event = new Event('gattserverdisconnected');
        this.device.dispatchEvent(event);
    };
    PolyfillGATTServer.prototype.getPrimaryServices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.Bluetooth.getPrimaryServices({ deviceId: this.device.id })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.services.map(function (service) { return new PolyfillService(service.uuid, _this.device.id); })];
                }
            });
        });
    };
    return PolyfillGATTServer;
}());
var PolyfillDevice = /** @class */ (function (_super) {
    __extends(PolyfillDevice, _super);
    function PolyfillDevice(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.pluginListenerHandle = null;
        _this.gatt = new PolyfillGATTServer(_this);
        return _this;
    }
    PolyfillDevice.prototype.subscribeGlobal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.pluginListenerHandle) {
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, exports.Bluetooth.addListener('gattserverdisconnected', function (data) {
                                if (data.deviceId === _this.id) {
                                    _this.gatt.connected = false;
                                    var event_2 = new Event('gattserverdisconnected');
                                    _this.dispatchEvent(event_2);
                                }
                            })];
                    case 1:
                        _a.pluginListenerHandle = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PolyfillDevice.prototype.addEventListener = function (type, listener) {
        if (type !== 'gattserverdisconnected') {
            return;
        }
        _super.prototype.addEventListener.call(this, type, listener);
        this.subscribeGlobal();
    };
    PolyfillDevice.prototype.removeEventListener = function (type, callback) {
        var _a;
        if (type !== 'gattserverdisconnected') {
            return;
        }
        _super.prototype.removeEventListener.call(this, type, callback);
        if (!((_a = this.listeners[type]) === null || _a === void 0 ? void 0 : _a.length) && this.pluginListenerHandle) {
            this.pluginListenerHandle.remove();
            this.pluginListenerHandle = null;
        }
    };
    return PolyfillDevice;
}(EventEmitter));
exports.BluetoothPolyfill = {
    getAvailability: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.Bluetooth.getAvailability()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.available];
                }
            });
        });
    },
    requestDevice: function (options) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var services, result, device;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, exports.Bluetooth.reset()];
                    case 1:
                        _b.sent();
                        services = (_a = options.filters) === null || _a === void 0 ? void 0 : _a.flatMap(function (f) { return f.services; });
                        return [4 /*yield*/, exports.Bluetooth.requestDevice({ services: services })];
                    case 2:
                        result = _b.sent();
                        device = result.device;
                        return [2 /*return*/, new PolyfillDevice(device.id, device.name)];
                }
            });
        });
    },
    listenerHandles: new Map(),
    addEventListener: function (event, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var handle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event === 'availabilitychanged')) return [3 /*break*/, 2];
                        return [4 /*yield*/, exports.Bluetooth.addListener('availabilitychanged', function (data) {
                                var e = new Event('availabilitychanged');
                                e.value = data.value;
                                callback(e);
                            })];
                    case 1:
                        handle = _a.sent();
                        this.listenerHandles.set(callback, handle);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    },
    removeEventListener: function (event, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var handle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event === 'availabilitychanged')) return [3 /*break*/, 2];
                        handle = this.listenerHandles.get(callback);
                        if (!handle) return [3 /*break*/, 2];
                        return [4 /*yield*/, handle.remove()];
                    case 1:
                        _a.sent();
                        this.listenerHandles["delete"](callback);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
};
