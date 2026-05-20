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
var test_1 = require("@playwright/test");
//Welcome screen elements visibility
(0, test_1.test)('Welcome screen', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.goto('/')];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Welcome to Tonkeeper' })).toBeVisible()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading')).toContainText('Welcome to Tonkeeper')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('World-class speed')).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('World-class speed')];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('End-to-end security')).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('End-to-end security')];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Tonkeeper stores your')).toBeVisible()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Tonkeeper stores your cryptographic keys on your device. All trades are executed via decentralized protocols so that your crypto never ends up in the hands of centralized exchanges.')];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Get started' })).toBeVisible()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button')).toContainText('Get started')];
                case 11:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//"Add wallet" screen elements visibility
(0, test_1.test)('"Add wallet" screen', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.goto('/')];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Get started' }).click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Add Wallet' })).toBeVisible()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('h2')).toContainText('Add Wallet')];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Create a new wallet or add an')).toBeVisible()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Create a new wallet or add an existing one.')];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'New Wallet Create new wallet' })).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('New Wallet')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Create new wallet')];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Existing Wallet Import wallet' })).toBeVisible()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Existing Wallet')];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Import wallet with a 24 or 12 secret recovery words')];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Testnet Account Import wallet' })).toBeVisible()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Testnet Account')];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Import wallet with a 24 secret recovery words to Testnet')];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'New Multi-Wallet Account Beta' })).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('New Multi-Wallet AccountBeta')];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Manage multiple wallets with a single secret recovery phrase')];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Watch Account For monitor' })).toBeVisible()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Watch Account')];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('For monitor wallet activity without recovery phrase')];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Hardware Wallets')).toBeVisible()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Hardware Wallets')];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Pair with Signer Completely' })).toBeVisible()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Pair with Signer')];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Completely offline, air-gapped, all TON features')];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Pair with Ledger Hardware' })).toBeVisible()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Pair with Ledger')];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Hardware module, Bluetooth or USB-C, limited TON features')];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Pair with Keystone A higher' })).toBeVisible()];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Pair with Keystone')];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('A higher level of security with AIR-GAP hardware wallet')];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-laRQQM')).toBeVisible()];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, page.locator('.sc-laRQQM').click()];
                case 34:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Get started' })).toBeVisible()];
                case 35:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
