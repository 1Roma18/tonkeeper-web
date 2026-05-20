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
test_1.test.beforeEach(function (_a) {
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
                    return [4 /*yield*/, page.getByRole('button', { name: 'Existing Wallet Import wallet' }).click()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).fill(process.env.TON_MNEMONIC_ANANAS)];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page
                            .locator('div')
                            .filter({ hasText: /^Password$/ })
                            .getByRole('textbox')
                            .fill('1%23456!')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('1%23456!')];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('textbox').fill('Ananas')];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Congratulations! You’ve set' })).toBeVisible()];
                case 14:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
test_1.test.afterEach(function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('link', { name: 'Settings' }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('Delete Account').click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page
                            .locator('div')
                            .filter({ hasText: /^I have a backup copy of recovery phrase$/ })
                            .locator('div')
                            .click()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Delete wallet data' }).click()];
                case 4:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Inspect elements in History sidebar tab
(0, test_1.test)('History tab', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        var page1Promise, page1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('link', { name: 'History' }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('History').nth(1)).toBeVisible()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('History')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^HistoryAll Tokens$/ }).getByRole('button').first()).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'All Tokens' })).toBeVisible()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('All Tokens')];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^HistoryAll Tokens$/ }).getByRole('button').nth(2)).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^HistoryAll Tokens$/ }).getByRole('button').nth(2).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Initiator$/ })).toBeVisible()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Hide SpamFilter is not reset on restart$/ }).first()).toBeVisible()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Initiator')];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Hide Spam')];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Filter is not reset on restart')];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Initiator$/ }).click()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Hide SpamFilter is not reset on restart$/ }).first().click()];
                case 15:
                    _b.sent();
                    page1Promise = page.waitForEvent('popup');
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^HistoryAll TokensInitiatorHide SpamFilter is not reset on restart$/ }).getByRole('button').first().click()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, page1Promise];
                case 17:
                    page1 = _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page1.locator('.ldpypfq')).toBeVisible()];
                case 18:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Inspect elements in Collectibles and domains sidebar tab
(0, test_1.test)('Collectibles and domains', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('link', { name: 'Collectibles' }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Collectibles').nth(1)).toBeVisible()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Collectibles')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-licbtr > .sc-laRQQM')).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'Domains' }).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Domains', { exact: true }).nth(1)).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Domains')];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-licbtr > .sc-laRQQM')).toBeVisible()];
                case 8:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Inspect elements in Swap tab
(0, test_1.test)('Swap', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('link', { name: 'Swap' }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Swap').nth(1)).toBeVisible()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Swap')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-cDYBfd > button').first()).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-cDYBfd > button:nth-child(2)')).toBeVisible()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('span').filter({ hasText: 'Send' })).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'TON' })).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Balance:').first()).toBeVisible()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'MAX' })).toBeVisible()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByTestId('change-swap')).toBeVisible()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('span').filter({ hasText: /^Receive$/ })).toBeVisible()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Balance:').nth(1)).toBeVisible()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'USD₮' })).toBeVisible()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Transaction Information')).toBeVisible()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Transaction Information$/ }).getByRole('button')).toBeVisible()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Continue' })).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Provider')).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Provider')];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('STON.fi')).toBeVisible()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('DeDust')).toBeVisible()];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Transaction Information$/ }).getByRole('button').click()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Transaction Information')).toBeVisible()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Price Impact')).toBeVisible()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Minimum received')).toBeVisible()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Slippage')).toBeVisible()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Blockchain fee')).toBeVisible()];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Route')).toBeVisible()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Transaction Information$/ }).getByRole('button').click()];
                case 28:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Inspect elements in Multisig sidebar tab
(0, test_1.test)('Multisig', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('link', { name: 'Multisig Wallets' }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'New Multisig Wallet' })).toBeVisible()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('New Multisig Wallet')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-kLKjoy > button').first()).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-kLKjoy > button:nth-child(2)').first()).toBeVisible()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-kLKjoy > .sc-bXDltw').first()).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Open')];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'New Multisig Wallet' }).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Buy Pro' }).first()).toBeVisible()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').first().click()];
                case 10:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Inspect elements in Settings sidebar tab
(0, test_1.test)('Settings', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('link', { name: 'Settings' }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Settings').nth(1)).toBeVisible()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Ananas').nth(2)).toBeVisible()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Customize')).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Backup')).toBeVisible()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Backup$/ }).getByRole('img')).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Active address W5' })).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Active address')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('W5')];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Tokens' }).nth(1)).toBeVisible()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Tokens')];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Collectibles' }).nth(1)).toBeVisible()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Collectibles')];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Connected Apps' })).toBeVisible()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Connected Apps')];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Delete Account$/ }).first()).toBeVisible()];
                case 16:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
