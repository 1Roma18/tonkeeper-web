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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
exports.__esModule = true;
exports.createAppMenu = void 0;
var osLocale = __importStar(require("os-locale"));
var resources_json_1 = __importDefault(require("@tonkeeper/locales/dist/i18n/resources.json"));
var locale = osLocale.osLocaleSync();
var fixed = locale.slice(0, 2);
var all = resources_json_1["default"];
var dist = (_b = (_a = all[locale]) !== null && _a !== void 0 ? _a : all[fixed]) !== null && _b !== void 0 ? _b : resources_json_1["default"]['en'];
var EditMenu = {
    label: dist.translation.Edit,
    submenu: [
        {
            label: dist.translation.Undo,
            accelerator: 'CmdOrCtrl+Z',
            role: 'undo'
        },
        {
            label: dist.translation.Redo,
            accelerator: 'Shift+CmdOrCtrl+Z',
            role: 'redo'
        },
        {
            type: 'separator'
        },
        {
            label: dist.translation.Cut,
            accelerator: 'CmdOrCtrl+X',
            role: 'cut'
        },
        {
            label: dist.translation.Copy,
            accelerator: 'CmdOrCtrl+C',
            role: 'copy'
        },
        {
            label: dist.translation.paste,
            accelerator: 'CmdOrCtrl+V',
            role: 'paste'
        },
        {
            label: dist.translation.select_all,
            accelerator: 'CmdOrCtrl+A',
            role: 'selectAll'
        }
    ]
};
var WindowMenu = {
    label: dist.translation.Window,
    role: 'window',
    submenu: [
        {
            label: dist.translation.Minimize,
            accelerator: 'CmdOrCtrl+M',
            role: 'minimize'
        },
        {
            label: dist.translation.close,
            accelerator: 'CmdOrCtrl+W',
            role: 'close'
        },
        {
            type: 'separator'
        },
        {
            label: dist.translation.bring_all_to_front,
            role: 'front'
        }
    ]
};
var getDarwinMenu = function (update) {
    return {
        label: 'Tonkeeper',
        submenu: [
            {
                label: dist.translation.about_tonkeeper_pro,
                role: 'about'
            },
            {
                type: 'separator'
            },
            // {
            //     label: dist.translaction.check_for_updates,
            //     click: function () {
            //         update.check();
            //     }
            // },
            // {
            //     type: 'separator'
            // },
            {
                label: dist.translation.hide_tonkeeper_pro,
                accelerator: 'Command+H',
                role: 'hide'
            },
            {
                label: dist.translation.hide_others,
                accelerator: 'Command+Shift+H',
                role: 'hideOthers'
            },
            {
                label: dist.translation.show_all,
                role: 'unhide'
            },
            {
                type: 'separator'
            },
            {
                label: dist.translation.quit_tonkeeper_pro,
                accelerator: 'Command+Q',
                role: 'quit'
            }
        ]
    };
};
var getWinMenu = function (update) {
    return {
        label: 'Tonkeeper',
        submenu: [
            {
                label: dist.translation.about_tonkeeper_pro,
                role: 'about'
            },
            // {
            //     type: 'separator'
            // },
            // {
            //     label: dist.translaction.check_for_updates,
            //     click: function () {
            //         update.check();
            //     }
            // },
            {
                type: 'separator'
            },
            {
                label: dist.translation.quit_tonkeeper_pro,
                accelerator: 'Command+Q',
                role: 'quit'
            }
        ]
    };
};
var ViewMenu = {
    label: dist.translation.View,
    submenu: [
        {
            label: dist.translation.Reload,
            accelerator: 'CmdOrCtrl+R',
            role: 'reload'
        },
        {
            label: dist.translation.force_reload,
            accelerator: 'Shift+CmdOrCtrl+R',
            role: 'forceReload'
        },
        {
            label: dist.translation.toggle_full_screen,
            accelerator: (function () {
                if (process.platform === 'darwin')
                    return 'Ctrl+Command+F';
                else
                    return 'F11';
            })(),
            click: function (item, focusedWindow) {
                if (focusedWindow) {
                    focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
                }
            }
        },
        {
            type: 'separator'
        },
        {
            label: dist.translation.toggle_developer_tools,
            accelerator: (function () {
                if (process.platform === 'darwin')
                    return 'Alt+Command+I';
                else
                    return 'Ctrl+Shift+I';
            })(),
            role: 'toggleDevTools'
        }
    ]
};
var createAppMenu = function (update) {
    return [
        process.platform === 'darwin' ? getDarwinMenu(update) : getWinMenu(update),
        EditMenu,
        ViewMenu,
        WindowMenu
    ];
};
exports.createAppMenu = createAppMenu;
