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
                    return [4 /*yield*/, page.locator('#create-password').fill('a]HmC.;MAcQJ[+Y@&r!-3h')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#create-password-confirm').fill('a]HmC.;MAcQJ[+Y@&r!-3h')];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 11:
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
//Multisig creation (up to payment step)
(0, test_1.test)('Create new multisig', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: 
                //multisig page view
                return [4 /*yield*/, page.getByRole('button', { name: 'Account 1 UQBA…OP8V W5 UQDH…' }).click()];
                case 1:
                    //multisig page view
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Multisig Wallets' })).toBeVisible()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'Multisig Wallets' }).click()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Multisig WalletsNew Multisig')).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Multisig UQBL…v_')).toBeVisible()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('👩‍💼Multisig UQBL…v_kAUQBL…').click()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('👩‍💼Multisig UQBL…v_kAUQBL…')).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.locator('.sc-kLKjoy > .sc-bXDltw').first().click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('👩‍💼Multisig UQBL…v_kAMultisig')];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Tokens$/ }).nth(1)).toBeVisible()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TON')).toBeVisible()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Requests' })).toBeVisible()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('SendReceiveBuy')).toBeVisible()];
                case 13:
                    _b.sent();
                    //Requests tab
                    return [4 /*yield*/, page.getByRole('link', { name: 'Requests' }).click()];
                case 14:
                    //Requests tab
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Requests$/ }).nth(1)).toBeVisible()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Created')).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Status')).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Signatures')).toBeVisible()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('span').filter({ hasText: 'Send' })).toBeVisible()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Account 1 UQBA…OP8V W5 UQDH…' }).click()];
                case 20:
                    _b.sent();
                    //change name/emoji to existing multisig
                    return [4 /*yield*/, page.getByRole('link', { name: 'Multisig Wallets' }).click()];
                case 21:
                    //change name/emoji to existing multisig
                    _b.sent();
                    return [4 /*yield*/, page.locator('.sc-kLKjoy > button').first().click()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Wallet name').click()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Wallet name').fill('Random multisig name')];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('❄️').click()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('❄️Random multisig name')).toBeVisible()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, page.locator('.sc-kLKjoy > button:nth-child(2)').first().click()];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: '🍍 Account 1 UQBA…OP8V W5' })).toBeVisible()];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'New Multisig Wallet' }).click()];
                case 30:
                    _b.sent();
                    //can create new multisig with Pro subscription only
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Tonkeeper Pro', { exact: true })).toBeVisible()];
                case 31:
                    //can create new multisig with Pro subscription only
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Buy Pro' }).first()).toBeVisible()];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Buy Pro' }).first().click()];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Select Wallet for')).toBeVisible()];
                case 34:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div:nth-child(2) > .sc-gGmKOd > .sc-jgHCeW > .sc-eJMOVy > .sc-fbkieD > .overflow-hidden > div > .sc-dwfTHb > .sc-jUElsq > .sc-Gqece > .sc-laRQQM').click()];
                case 35:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').first().click()];
                case 36:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
(0, test_1.test)('Send request', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: 
                //multisig request creation by clicking Send button
                return [4 /*yield*/, page.getByRole('button', { name: 'Account 1 UQBA…OP8V W5 UQDH…' }).click()];
                case 1:
                    //multisig request creation by clicking Send button
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Multisig Wallets' })).toBeVisible()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'Multisig Wallets' }).click()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('👩‍💼Multisig UQBL…v_kAUQBL…').click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.locator('.sc-kLKjoy > .sc-bXDltw').first().click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Send', exact: true }).click()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').first().click()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Send', exact: true }).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'New Multi Signature Request' })).toBeVisible()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Select time for quorum to')).toBeVisible()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Time to sign a transaction12 hours$/ }).nth(3)).toBeVisible()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.locator('form').getByRole('img').click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^30 minutes$/ }).click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().click()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').first().fill('UQD2NmD_lH5f5u1Kj3KfGyTvhZSX0Eg6qp2a5IQUKXxOGzCi')];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('test comment for multisig autotest!')];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^AmountTo: UQD2…GzCi$/ }).nth(2)).toBeVisible()];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^TON$/ }).nth(3)).toBeVisible()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, page.getByTestId('amount-input').click()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('TON').nth(2).click()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, page.getByTestId('amount-input').fill('0.01')];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 25:
                    _b.sent();
                    //Modal window for transaction confirmation
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Confirm sending')).toBeVisible()];
                case 26:
                    //Modal window for transaction confirmation
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('RecipientUQD2…GzCi')).toBeVisible()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Amount0.01 TON≈ $')).toBeVisible()];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Fee')).toBeVisible()];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Commenttest comment')).toBeVisible()];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('StatusIn Progress')).toBeVisible()];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Signers0 of 2 signers')).toBeVisible()];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Time Left30:00')).toBeVisible()];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Pending SignaturesYou: UQD2…')).toBeVisible()];
                case 34:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^UQDN…1rIt$/ })).toBeVisible()];
                case 35:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^UQDH…TkZ5$/ })).toBeVisible()];
                case 36:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Sign' })).toBeVisible()];
                case 37:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').first().click()];
                case 38:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'Requests' }).click()];
                case 39:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Account 1 UQBA…OP8V W5 UQDH…' }).click()];
                case 40:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
