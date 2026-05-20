"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var AppUpdate = /** @class */ (function () {
    function AppUpdate() {
        electron_1.autoUpdater.addListener('update-available', function () {
            console.log('update available');
        });
        electron_1.autoUpdater.addListener('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateURL) {
            notify('A new update is ready to install', "Version ".concat(releaseName, " is downloaded and will be automatically installed on Quit"));
        });
        var appVersion = electron_1.app.getVersion(); // Get the app version dynamically
        var platform = process.platform; // Get the platform dynamically (e.g., 'darwin', 'win32')
        var arch = process.arch; // Get the architecture dynamically (e.g., 'arm64', 'x64')
        electron_1.autoUpdater.addListener('error', function (error) {
            console.log(error);
        });
        electron_1.autoUpdater.addListener('checking-for-update', function () {
            console.log('checking-for-update');
        });
        // autoUpdater.addListener('update-not-available', function (event: any) {
        //     notify('Tonkeeper Pro is up to date', `Version ${releaseName}`);
        // });
        // // Build the feed URL
        // const feedURL = `https://update.electronjs.org/tonkeeper/tonkeeper-web/${platform}-${arch}/${appVersion}`;
        // autoUpdater.setFeedURL({ url: feedURL });
    }
    AppUpdate.prototype.check = function () {
        electron_1.autoUpdater.checkForUpdates();
    };
    return AppUpdate;
}());
exports["default"] = AppUpdate;
function notify(title, message) {
    var windows = electron_1.BrowserWindow.getAllWindows();
    if (windows.length === 0) {
        return;
    }
    //  window[0].webContents.send('notify', title, message);
}
