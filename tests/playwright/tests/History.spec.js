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
//has link to Tonviewer
(0, test_1.test)('History', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        var page1Promise, page1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Account 1 UQAG…gyIO v4R2 UQCk' }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'History' }).click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('History').nth(1)).toBeVisible()];
                case 3:
                    _b.sent();
                    page1Promise = page.waitForEvent('popup');
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^HistoryAll Tokens$/ }).getByRole('button').first().click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page1Promise];
                case 5:
                    page1 = _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page1.locator('.ldpypfq')).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page1.getByPlaceholder('Search')).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'All Tokens' })).toBeVisible()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^HistoryAll Tokens$/ }).getByRole('button').nth(2)).toBeVisible()];
                case 9:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//can filter by token / initiator
(0, test_1.test)('History filterS', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Account 1 UQAG…gyIO v4R2 UQCk' }).click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'History' }).click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'All Tokens' }).click()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^TON$/ }).click()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'TON' }).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^USD₮$/ }).click()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('HistoryUSD₮')).toBeVisible()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^HistoryUSD₮$/ }).getByRole('button').nth(2).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Hide SpamFilter is not reset on restart$/ }).first().click()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('HistoryUSD₮InitiatorHide')).toBeVisible()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'USD₮' }).click()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^HistoryUSD₮All TokensTONUSD₮JBCTDUSTMARGAAMBRBOLTMEMGRBSMCWTONDRIFTGGR$/ }).getByRole('button').nth(2).click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Hide SpamFilter is not reset on restart$/ }).first().click()];
                case 13:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
