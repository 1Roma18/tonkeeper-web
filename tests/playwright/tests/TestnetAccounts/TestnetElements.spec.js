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
//Add testnet account, check elements visibility
(0, test_1.test)('Testnet elements', function (_a) {
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
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).fill(process.env.TON_MNEMONIC_ANANAS)];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QDj…pFAl')).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QD2…G4so')).toBeVisible()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QAT…ddQF')).toBeVisible()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('0QD-…agbX')).toBeVisible()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password', { exact: true }).fill('123456')];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Re-enter password').click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Re-enter password').fill('123456')];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Send', exact: true })).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Send')];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Multi Send' })).toBeVisible()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Multi Send')];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Receive' })).toBeVisible()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Receive')];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Tokens').nth(1)).toBeVisible()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Tokens' })).toBeVisible()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'History' })).toBeVisible()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Collectibles' })).toBeVisible()];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Domains' })).toBeVisible()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TokensHistoryCollectiblesDomainsSettings')).toBeVisible()];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'Settings' }).click()];
                case 29:
                    _b.sent();
                    //hide/add versions via Settings
                    return [4 /*yield*/, page.getByRole('link', { name: 'Active address W5' }).click()];
                case 30:
                    //hide/add versions via Settings
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Hide' }).first().click()];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Hide' }).first().click()];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Add' }).nth(2).click()];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Open' }).first().click()];
                case 34:
                    _b.sent();
                    // check Settings elements visibility 
                    return [4 /*yield*/, page.getByRole('link', { name: 'Settings' }).click()];
                case 35:
                    // check Settings elements visibility 
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Settings$/ }).nth(1)).toBeVisible()];
                case 36:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('🍍Account 1Customize')).toBeVisible()];
                case 37:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Backup$/ })).toBeVisible()];
                case 38:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Active address v4R2' })).toBeVisible()];
                case 39:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Tokens' }).nth(1)).toBeVisible()];
                case 40:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Collectibles' }).nth(1)).toBeVisible()];
                case 41:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Connected Apps' })).toBeVisible()];
                case 42:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Delete Account$/ }).nth(1)).toBeVisible()];
                case 43:
                    _b.sent();
                    // check backup presence 
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Backup$/ }).click()];
                case 44:
                    // check backup presence 
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password').fill('123456')];
                case 45:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm' }).click()];
                case 46:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('1. blanket')).toBeVisible()];
                case 47:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('9. breeze')).toBeVisible()];
                case 48:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Your recovery phrase' })).toBeVisible()];
                case 49:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Write down these 24 words in')).toBeVisible()];
                case 50:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Write down these 24 words in the order given below and store them in a secret, safe place.')];
                case 51:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button')).toBeVisible()];
                case 52:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').click()];
                case 53:
                    _b.sent();
                    //ensure that testnet accounts aren`t visible on the dashboard
                    return [4 /*yield*/, page.getByText('Dashboard').click()];
                case 54:
                    //ensure that testnet accounts aren`t visible on the dashboard
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('NameAddressTotal BalanceTotal TONGet more with Tonkeeper ProAccess advanced')).toBeVisible()];
                case 55:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('$ 0Export .CSVManage')).toBeVisible()];
                case 56:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('Preferences').click()];
                case 57:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('Sign Out').click()];
                case 58:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^I have a backup copy of recovery phrase$/ }).locator('div').click()];
                case 59:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Delete wallet data' }).click()];
                case 60:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
