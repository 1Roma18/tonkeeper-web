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
//Buy Pro (full flow) BUT don`t do the last step (paying itself)
(0, test_1.test)('Buy PRO', function (_a) {
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
                    return [4 /*yield*/, page.getByRole('button', { name: '12 words' }).click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).fill(process.env.TON_MNEMONIC_12_2)];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#create-password').fill('123456')];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#create-password-confirm').fill('123456')];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page
                            .locator('#react-portal-modal-container')
                            .getByRole('textbox')
                            .fill('trust wallet - 12 words mnemonic')];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('🤖').click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Get Pro' })).toBeVisible()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Get Pro' }).click()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('img').nth(2)).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Tonkeeper Pro', { exact: true })).toBeVisible()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('A Tonkeeper Pro subscription')).toBeVisible()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('A Tonkeeper Pro subscription includes advanced wallet functionality, offering a suite of tools for managing your cryptocurrency.')];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Try Pro for Free' }).first()).toBeVisible()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Buy Pro' }).first()).toBeVisible()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container svg').nth(1)).toBeVisible()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Inside Tonkeeper Pro –')).toBeVisible()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Inside Tonkeeper Pro – Dashboard')];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('In the Dashboard you will have access to wallet analysis. This feature will benefit professional users who use Tonkeeper in their daily business.')];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('img').nth(3)).toBeVisible()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container svg').nth(2)).toBeVisible()];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Multi-Send', { exact: true })).toBeVisible()];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('With multi-send feature you')).toBeVisible()];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('With multi-send feature you can send funds up to 255 addresses at once. Tonkeeper Pro saves time and simplifies the process of mass transactions.')];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('img').nth(4)).toBeVisible()];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('And other cool features are on the way.')];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Try Pro for Free' }).nth(1)).toBeVisible()];
                case 34:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Try Pro for FreeBuy Pro').nth(1)).toBeVisible()];
                case 35:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').first()).toBeVisible()];
                case 36:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Buy Pro' }).first().click()];
                case 37:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Tonkeeper ProTonkeeper Pro\'s')).toBeVisible()];
                case 38:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Tonkeeper ProTonkeeper Pro\'s subscription comes with an extended wallet feature, offering a toolset for crypto management.')];
                case 39:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Select Wallet for')).toBeVisible()];
                case 40:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Select Wallet for authorization')];
                case 41:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^trust wallet - 12 words mnemonic🤖UQBC…_BrRW5$/ }).nth(1)).toBeVisible()];
                case 42:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^trust wallet - 12 words mnemonic🤖UQDe…xygmv4R2$/ }).nth(1)).toBeVisible()];
                case 43:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByText('UQBC…_BrRW5').click()];
                case 44:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Enter password')).toBeVisible()];
                case 45:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Cancel' })).toBeVisible()];
                case 46:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password').click()];
                case 47:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password').fill('123456')];
                case 48:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('PasswordCancelConfirm').click()];
                case 49:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm' }).click()];
                case 50:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Tonkeeper Pro' })).toBeVisible()];
                case 51:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Tonkeeper Pro\'s subscription')).toBeVisible()];
                case 52:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Tonkeeper Pro\'s subscription comes with an extended wallet feature, offering a toolset for crypto management.')];
                case 53:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^trust wallet - 12 words mnemonic🤖UQBC…_BrRW5$/ }).nth(2)).toBeVisible()];
                case 54:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Yearly Pro Package')).toBeVisible()];
                case 55:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('8.00 TON')).toBeVisible()];
                case 56:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Yearly Pro Package8\.00 TON$/ }).nth(2)).toBeVisible()];
                case 57:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByLabel('Promo Code')).toBeVisible()];
                case 58:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button', { name: 'Buy', exact: true })).toBeVisible()];
                case 59:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button', { name: 'Buy', exact: true }).click()];
                case 60:
                    _b.sent();
                    return [4 /*yield*/, page.locator('form').getByRole('button').first().click()];
                case 61:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button', { name: 'Buy', exact: true }).click()];
                case 62:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Insufficient balance')).toBeVisible()];
                case 63:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Confirm sending')).toBeVisible()];
                case 64:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('RecipientUQCx…d3Zw')).toBeVisible()];
                case 65:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Amount')).toBeVisible()];
                case 66:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Fee')).toBeVisible()];
                case 67:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Comment')).toBeVisible()];
                case 68:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
