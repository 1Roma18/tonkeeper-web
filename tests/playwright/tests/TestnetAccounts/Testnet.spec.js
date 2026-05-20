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
//Add one testnet account 
test_1.test.setTimeout(4 * 60 * 1000);
(0, test_1.test)('Add 1 testnet', function (_a) {
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
                    return [4 /*yield*/, page.getByRole('button', { name: 'Testnet Account Import wallet' }).click()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Enter your recovery phrase' })).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('h2')).toContainText('Enter your recovery phrase')];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('To restore access to your')).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('To restore access to your wallet, enter the 24 secret recovery words given to you when you created your wallet.')];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).fill(process.env.TON_MNEMONIC_ANANAS)];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QBW…lsqP · 0 TON')).toBeVisible()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div:nth-child(5) > .sc-jNMdxs')).toBeVisible()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QD-…agbX')).toBeVisible()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('0QD-…agbX')];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password', { exact: true }).fill('1234567')];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Re-enter password').click()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Re-enter password').fill('1234567')];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Wallet name').fill('Ananas')];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Testnet' })).toBeVisible()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Testnet')];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Ananas').first()).toBeVisible()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QD-…agbX').first()).toBeVisible()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QD-…agbX')];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('W5')];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('W5').first()).toBeVisible()];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Ananas0QD-…agbXW5$/ }).locator('path')).toBeVisible()];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('🍍')).toBeVisible()];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Dashboard$/ })).toBeVisible()];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Discover$/ })).toBeVisible()];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Ananas Testnet 0QD-…agbX W5' })).toBeVisible()];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QD-…agbX')];
                case 34:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('W5')];
                case 35:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QAT…ddQF')];
                case 36:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('W5 beta')];
                case 37:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QD2…G4so')];
                case 38:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('v4R2')];
                case 39:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QDj…pFAl')];
                case 40:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('v3R2')];
                case 41:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'Settings' }).click()];
                case 42:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('Delete Account').click()];
                case 43:
                    _b.sent();
                    return [4 /*yield*/, page
                            .locator('div')
                            .filter({ hasText: /^I have a backup copy of recovery phrase$/ })
                            .locator('div')
                            .click()];
                case 44:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Delete wallet data' }).click()];
                case 45:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Add two testnet accounts to the list
(0, test_1.test)('Add 2 testnets', function (_a) {
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
                    return [4 /*yield*/, page.getByRole('button', { name: 'Testnet Account Import wallet' }).click()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).fill(process.env.TON_MNEMONIC_ANANAS)];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QBW…lsqP · 0 TON')).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QD-…agbX')).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password', { exact: true }).fill('1234567')];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Re-enter password').click()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Re-enter password').fill('1234567')];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Wallet name').fill('Ananas')];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Testnet' })).toBeVisible()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Testnet')];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Ananas').first()).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QD-…agbX').first()).toBeVisible()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QD-…agbX')];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('W5')];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('W5').first()).toBeVisible()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Ananas0QD-…agbXW5$/ }).locator('path')).toBeVisible()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('🍍')).toBeVisible()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Dashboard$/ })).toBeVisible()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Discover$/ })).toBeVisible()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Ananas Testnet 0QD-…agbX W5' })).toBeVisible()];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QD-…agbX')];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('W5')];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QAT…ddQF')];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('W5 beta')];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QD2…G4so')];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('v4R2')];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QDj…pFAl')];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('v3R2')];
                case 34:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').first().click()];
                case 35:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('Add Wallet').click()];
                case 36:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Testnet Account Import wallet' }).click()];
                case 37:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).click()];
                case 38:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).fill(process.env.TON_MNEMONIC_24)];
                case 39:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 40:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QDC…QPPc · 0 TON')).toBeVisible()];
                case 41:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('0QDC…QPPc · 0 TON')];
                case 42:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QDm…Unvx · 0 TON')).toBeVisible()];
                case 43:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QAG…g5mE · 0 TON')).toBeVisible()];
                case 44:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QC0…65WC · 0 TON')).toBeVisible()];
                case 45:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QCk…ycj6 · 0 TON')).toBeVisible()];
                case 46:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 47:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password').fill('1234567')];
                case 48:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div:nth-child(2) > .sc-gGmKOd > .sc-jgHCeW > .sc-eJMOVy > .sc-fbkieD > .overflow-hidden > div > .sc-fWSCoS').click()];
                case 49:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm' }).click()];
                case 50:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Testnet' })).toBeVisible()];
                case 51:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: '👳‍♂️ Account 2 Testnet' })).toBeVisible()];
                case 52:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Testnet')];
                case 53:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Account 2')];
                case 54:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QDC…QPPc')).toBeVisible()];
                case 55:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: '👳‍♂️ Account 2 Testnet' }).getByRole('button').click()];
                case 56:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Add' }).nth(2).click()];
                case 57:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Add' }).nth(1).click()];
                case 58:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('v3R20QC0…65WC · 0 TON')).toBeVisible()];
                case 59:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('v4R20QAG…g5mE · 0 TON')).toBeVisible()];
                case 60:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('W50QDC…QPPc · 0 TON')).toBeVisible()];
                case 61:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Hide' }).first().click()];
                case 62:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Open' }).first().click()];
                case 63:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Account 20QAG…g5mEv4R2👳‍♂️')).toBeVisible()];
                case 64:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Account 20QAG…g5mEv4R2👳‍♂️')];
                case 65:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Preferences$/ }).click()];
                case 66:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Sign Out of all Accounts$/ }).first().click()];
                case 67:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^I have a backup copy of recovery phrase$/ }).locator('div').click()];
                case 68:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Delete wallet data' }).click()];
                case 69:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Get started' })).toBeVisible()];
                case 70:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
(0, test_1.test)('Mainnet + testnet', function (_a) {
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
                    return [4 /*yield*/, page.getByLabel('Password', { exact: true }).fill('123456??')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Re-enter password').click()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Re-enter password').fill('123456??')];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Account 1UQBA…OP8VW5🍍')).toBeVisible()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Account 1 UQBA…OP8V W5 UQDH…' })).toBeVisible()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('UQBA…OP8V')];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('UQDH…TkZ5')];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('UQD2…GzCi')];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('UQDj…pOuv')];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('UQBW…lnEF')];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Add Wallet$/ }).click()];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Testnet Account Import wallet' }).click()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).click()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).fill(process.env.TON_MNEMONIC_ANANAS)];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('v3R20QDj…pFAl')];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('v4R20QD2…G4so')];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('0QAT…ddQF')];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('W50QD-…agbX')];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password').fill('123456??')];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm' }).click()];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Congratulations! You’ve set' })).toBeVisible()];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Account 10QD-…agbXW5🍍')).toBeVisible()];
                case 34:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QD-…agbX')];
                case 35:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QAT…ddQF')];
                case 36:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QD2…G4so')];
                case 37:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('0QDj…pFAl')];
                case 38:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: '🍍 Account 1 Testnet 0QD-…' })).toBeVisible()];
                case 39:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Testnet' })).toBeVisible()];
                case 40:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
