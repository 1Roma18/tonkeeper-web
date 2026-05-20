"use strict";
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
exports.__esModule = true;
var electron_1 = require("electron");
var atom_1 = require("@tonkeeper/core/dist/entries/atom");
var tcRequests$ = (0, atom_1.atom)(undefined);
var tonConnectRequests$ = (0, atom_1.replaySubject)('all');
var tonConnectDisconnects$ = (0, atom_1.replaySubject)('all');
var refreshes$ = (0, atom_1.replaySubject)('all');
var updateAvailable$ = (0, atom_1.atom)(undefined);
electron_1.ipcRenderer.on('tc', function (_event, value) { return tcRequests$.next(value); });
electron_1.ipcRenderer.on('tonConnectRequest', function (_event, value) {
    return tonConnectRequests$.next(value);
});
electron_1.ipcRenderer.on('disconnect', function (_event, value) {
    return tonConnectDisconnects$.next(value);
});
electron_1.ipcRenderer.on('refresh', function () { return refreshes$.next(); });
electron_1.ipcRenderer.on('update-available', function (_event, value) { return updateAvailable$.next(value); });
electron_1.contextBridge.exposeInMainWorld('backgroundApi', {
    platform: function () { return process.platform; },
    arch: function () { return process.arch; },
    node: function () { return process.versions.node; },
    chrome: function () { return process.versions.chrome; },
    electron: function () { return process.versions.electron; },
    message: function (message) { return electron_1.ipcRenderer.invoke('message', message); },
    onTonConnect: function (callback) {
        tcRequests$.subscribe(callback);
        if (tcRequests$.value !== undefined) {
            callback(tcRequests$.value);
        }
    },
    onTonConnectRequest: function (callback) {
        tonConnectRequests$.subscribe(callback);
    },
    onTonConnectDisconnect: function (callback) {
        tonConnectDisconnects$.subscribe(callback);
    },
    onRefresh: function (callback) {
        refreshes$.subscribe(callback);
    },
    onUpdateAvailable: function (callback) {
        var unsubscribe = updateAvailable$.subscribe(callback);
        if (updateAvailable$.value !== undefined) {
            callback(updateAvailable$.value);
        }
        return unsubscribe;
    }
});
