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
test_1.test.setTimeout(4 * 60 * 1000);
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
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).fill(process.env.TON_MNEMONIC_24)];
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
                            .fill('#$%^&^*^%*(&(')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('#$%^&^*^%*(&(')];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Wallet name').fill('Account ')];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Wallet name').click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Wallet name').fill('Тестовый кошелёк')];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Wallet name').click()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div:nth-child(1664)').click()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('❣️').click()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('TON')];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('USD₮')];
                case 20:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Send TON flow - TON is preselected + Filter USDT in drop-down list of modal window to send
(0, test_1.test)('Filter usdt', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Send', exact: true }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Recipient' })).toBeVisible()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').first()).toBeVisible()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('textbox').first()).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-ksPlvC > svg')).toBeVisible()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('textbox').nth(1)).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().click()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().fill('UQDj5NvQK1Hh6cct5PAX8Xcb6IKo1Hmjoc2LM1Nag_1fpOuv')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('UQDj5NvQK1Hh6cct5PAX8Xcb6IKo1Hmjoc2LM1Nag_1fpOuv').click()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('Тестовый комментарий')];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Continue' })).toBeVisible()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().click()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Amount' })).toBeVisible()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-iJuWdM')).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').first()).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^TON$/ }).nth(3)).toBeVisible()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByTestId('amount-input')).toBeVisible()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TON', { exact: true }).nth(3)).toBeVisible()];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('MAX')).toBeVisible()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Continue$/ }).nth(1)).toBeVisible()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^TON$/ }).nth(3).click()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, page.locator('label').click()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, page.locator('label span').nth(1).click()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, page.locator('label').click()];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^AmountTo: UQDj…pOuv$/ }).nth(2)).toBeVisible()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('USD₮USD₮0.00 USD')).toBeVisible()];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^USD₮$/ }).nth(3).click()];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').first().click()];
                case 30:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Send TON flow - check modal windows elements + ensure password is required +cancel transaction when you enter password
(0, test_1.test)('Send Ton but cancel', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Send', exact: true }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Recipient' })).toBeVisible()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').first()).toBeVisible()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('textbox').first()).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-ksPlvC > svg')).toBeVisible()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('textbox').nth(1)).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().click()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().fill('UQDj5NvQK1Hh6cct5PAX8Xcb6IKo1Hmjoc2LM1Nag_1fpOuv')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('UQDj5NvQK1Hh6cct5PAX8Xcb6IKo1Hmjoc2LM1Nag_1fpOuv').click()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('Тестовый комментарий')];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Continue' })).toBeVisible()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TONTON0.00 USD')).toBeVisible()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.getByTestId('amount-input').fill('0.01')];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-iJuWdM')).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').first()).toBeVisible()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container img')).toBeVisible()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Confirm sending')).toBeVisible()];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('RecipientUQDj…pOuv')).toBeVisible()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Amount0.01 TON≈ $')).toBeVisible()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Amount')).toBeVisible()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Fee')).toBeVisible()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('CommentТестовый комментарий')).toBeVisible()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Confirm and Send' })).toBeVisible()];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm and Send' }).click()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Enter password')).toBeVisible()];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByLabel('Password')).toBeVisible()];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Cancel' })).toBeVisible()];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByLabel('Password')).toBeVisible()];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password').click()];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password').fill('123')];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Cancel' }).click()];
                case 34:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Failed to send transaction')).toBeVisible()];
                case 35:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').click()];
                case 36:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Тестовый кошелёкUQAG…gyIOv4R2❣️')).toBeVisible()];
                case 37:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Input incorrect password to confirm sending TON
(0, test_1.test)('Wrong password when sending TON', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Send', exact: true }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().fill('UQDj5NvQK1Hh6cct5PAX8Xcb6IKo1Hmjoc2LM1Nag_1fpOuv')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('UQDj5NvQK1Hh6cct5PAX8Xcb6IKo1Hmjoc2LM1Nag_1fpOuv').click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('Тестовый комментарий')];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TONTON0.00 USD')).toBeVisible()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.getByTestId('amount-input').fill('0.01')];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm and Send' }).click()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password').click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password').fill('123465')];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm' }).click()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div:nth-child(2) > .sc-gGmKOd > .sc-jgHCeW > .sc-eJMOVy').click()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Cancel' }).click()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Failed to send transaction')).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').click()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Тестовый кошелёкUQAG…gyIOv4R2❣️')).toBeVisible()];
                case 19:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Input dns as a recipient address
(0, test_1.test)('Recipient by dns', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Send', exact: true }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().fill('oleganza.ton')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('oleganza.ton').click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('Тестовый комментарий')];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('UQBb…z6Pz')).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TONTON0.00 USD')).toBeVisible()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByTestId('amount-input').fill('0.01')];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').first()).toBeVisible()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm and Send' }).click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Enter password')).toBeVisible()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Cancel' }).click()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Failed to send transaction')).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').click()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Тестовый кошелёкUQAG…gyIOv4R2❣️')).toBeVisible()];
                case 18:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Input t.me username as a recipient address
(0, test_1.test)('Recipient by username', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Send', exact: true }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().fill('maincrypt0.t.me')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('maincrypt0.t.me', { exact: true }).click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^maincrypt0\.t\.meRecipient addressUQD2…GzCi$/ }).locator('span')).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('Enter any comment here!')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByTestId('amount-input').fill('0.01')];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').first()).toBeVisible()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm and Send' }).click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Enter password')).toBeVisible()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Cancel' }).click()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Failed to send transaction')).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').click()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Тестовый кошелёкUQAG…gyIOv4R2❣️')).toBeVisible()];
                case 18:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Input up to 9 decimals as amount
(0, test_1.test)('9 decimals amount', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Send', exact: true }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().fill('oleganza.ton')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('oleganza.ton').click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('Тестовый комментарий')];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('UQBb…z6Pz')).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TONTON0.00 USD')).toBeVisible()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByTestId('amount-input').fill('0.000000011')];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').first()).toBeVisible()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm and Send' }).click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Enter password')).toBeVisible()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Cancel' }).click()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Failed to send transaction')).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').click()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Тестовый кошелёкUQAG…gyIOv4R2❣️')).toBeVisible()];
                case 18:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Input MAX amount
(0, test_1.test)('Max amount', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Send', exact: true }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().fill('oleganza.ton')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('oleganza.ton').click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('Тестовый комментарий')];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('UQBb…z6Pz')).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TONTON0.00 USD')).toBeVisible()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('MAX').click()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByTestId('amount-input')).toBeVisible()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TON', { exact: true }).nth(3)).toBeVisible()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').first()).toBeVisible()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm and Send' }).click()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Enter password')).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Cancel' }).click()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Failed to send transaction')).toBeVisible()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').click()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Тестовый кошелёкUQAG…gyIOv4R2❣️')).toBeVisible()];
                case 20:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//Input fiat amount
(0, test_1.test)('Fiat amount', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Send', exact: true }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().fill('oleganza.ton')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('oleganza.ton').click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('Тестовый комментарий')];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('UQBb…z6Pz')).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TONTON0.00 USD')).toBeVisible()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('0.00 USD').click()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TONUSD0 TON')).toBeVisible()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.getByTestId('amount-input').click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByTestId('amount-input').fill('0.12')];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Recipientoleganza.ton')).toBeVisible()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Recipient addressUQBb…z6Pz')).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('CommentТестовый комментарий')).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').first()).toBeVisible()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Confirm and Send' }).click()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Enter password')).toBeVisible()];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Cancel' }).click()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Failed to send transaction')).toBeVisible()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').click()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Тестовый кошелёкUQAG…gyIOv4R2❣️')).toBeVisible()];
                case 24:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
(0, test_1.test)('Insufficient balance', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Send', exact: true }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().fill('oleganza.ton')];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('oleganza.ton').click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('Тестовый комментарий')];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('UQBb…z6Pz')).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TONTON0.00 USD')).toBeVisible()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByTestId('amount-input').fill('5')];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Insufficient balance')).toBeVisible()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').first().click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Тестовый кошелёкUQAG…gyIOv4R2❣️')).toBeVisible()];
                case 13:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
