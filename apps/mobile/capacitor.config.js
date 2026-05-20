"use strict";
exports.__esModule = true;
var capacitor_live_reload_config_1 = require("./capacitor.live-reload-config");
var keyboard_1 = require("@capacitor/keyboard");
var config = {
    appId: 'com.tonapps.tonkeeperpro',
    appName: 'Tonkeeper Pro',
    webDir: 'dist',
    plugins: {
        SplashScreen: {
            launchAutoHide: false
        },
        CapacitorHttp: {
            enabled: true
        },
        CapacitorCookies: {
            enabled: true
        },
        BluetoothPlugin: {},
        Keyboard: {
            resize: keyboard_1.KeyboardResize.None
        }
    },
    server: capacitor_live_reload_config_1.server
};
exports["default"] = config;
