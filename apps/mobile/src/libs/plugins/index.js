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
exports.__esModule = true;
exports.DeviceStorage = exports.DeepLink = exports.Bluetooth = exports.Biometric = exports.SecureStorage = void 0;
var bluetooth_plugin_1 = require("./bluetooth-plugin");
var secure_storage_plugin_1 = require("./secure-storage-plugin");
__createBinding(exports, secure_storage_plugin_1, "SecureStorage");
var biometry_plugin_1 = require("./biometry-plugin");
__createBinding(exports, biometry_plugin_1, "Biometric");
var bluetooth_plugin_2 = require("./bluetooth-plugin");
__createBinding(exports, bluetooth_plugin_2, "Bluetooth");
var deep_link_plugin_1 = require("./deep-link-plugin");
__createBinding(exports, deep_link_plugin_1, "DeepLink");
var device_storage_plugin_1 = require("./device-storage-plugin");
__createBinding(exports, device_storage_plugin_1, "DeviceStorage");
Object.defineProperty(navigator, 'bluetooth', {
    value: bluetooth_plugin_1.BluetoothPolyfill,
    writable: false
});
