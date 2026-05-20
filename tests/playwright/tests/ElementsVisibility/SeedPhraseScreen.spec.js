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
//Elements visibility at seed phrase screen
(0, test_1.test)('Seed phrase screen', function (_a) {
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
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').nth(1)).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByRole('button').first()).toBeVisible()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Enter your recovery phrase' })).toBeVisible()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('h2')).toContainText('Enter your recovery phrase')];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('To restore access to your')).toBeVisible()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('To restore access to your wallet, enter the 24 secret recovery words given to you when you created your wallet.')];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: '24 words' })).toBeVisible()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('24 words')];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: '12 words' })).toBeVisible()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('12 words')];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: /^1:$/ })).toBeVisible()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: /^2:$/ })).toBeVisible()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: /^3:$/ })).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: /^4:$/ })).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: /^5:$/ })).toBeVisible()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: /^6:$/ })).toBeVisible()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: /^7:$/ })).toBeVisible()];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: /^8:$/ })).toBeVisible()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: /^9:$/ })).toBeVisible()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '10:' })).toBeVisible()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '11:' })).toBeVisible()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '12:' })).toBeVisible()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '13:' })).toBeVisible()];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '14:' })).toBeVisible()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '15:' })).toBeVisible()];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '16:' })).toBeVisible()];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '17:' })).toBeVisible()];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '18:' })).toBeVisible()];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '19:' })).toBeVisible()];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '20:' })).toBeVisible()];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '21:' })).toBeVisible()];
                case 34:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '22:' })).toBeVisible()];
                case 35:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '23:' })).toBeVisible()];
                case 36:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('label').filter({ hasText: '24:' })).toBeVisible()];
                case 37:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Continue' })).toBeVisible()];
                case 38:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Continue')];
                case 39:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').first().click()];
                case 40:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Add Wallet' })).toBeVisible()];
                case 41:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('h2')).toContainText('Add Wallet')];
                case 42:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Create a new wallet or add an')).toBeVisible()];
                case 43:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Create a new wallet or add an existing one.')];
                case 44:
                    _b.sent();
                    return [4 /*yield*/, page.locator('.sc-laRQQM').click()];
                case 45:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
