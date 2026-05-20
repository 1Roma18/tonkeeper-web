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
//Labels for versions are visible and have DESC order
test_1.test.setTimeout(4 * 60 * 1000);
(0, test_1.test)('Labels visibility', function (_a) {
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
                            .fill('123456')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).click()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('textbox').nth(1).fill('123456')];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Account 1 UQBA…OP8V W5 UQDH…' })).toBeVisible()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('W5')];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('UQDH…TkZ5')];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('W5 beta')];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('UQD2…GzCi')];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('v4R2')];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('UQDj…pOuv')];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('v3R2')];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('UQBW…lnEF')];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('v3R1')];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'Settings' }).click()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Delete Account$/ }).nth(1).click()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^I have a backup copy of recovery phrase$/ }).locator('div').click()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Delete wallet data' }).click()];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Get started' })).toBeVisible()];
                case 27:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
