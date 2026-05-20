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
//Add New Multi-Wallet Account (except seed phrase)
(0, test_1.test)('New multi wallet', function (_a) {
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
                    return [4 /*yield*/, page.getByRole('button', { name: 'New Multi-Wallet Account Beta' }).click()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Your wallet has just been' })).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Back$/ }).nth(1).click()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button').nth(2).click()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Get started' }).click()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'New Multi-Wallet Account Beta' }).click()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Grab a pen and a piece of' })).toBeVisible()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 10:
                    _b.sent();
                    //go step back
                    return [4 /*yield*/, page.getByRole('button').nth(1).click()];
                case 11:
                    //go step back
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Your recovery phrase' })).toBeVisible()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Write down these 24 words in')).toBeVisible()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Write down these 24 words in the order given below and store them in a secret, safe place.')];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('1.', { exact: true })).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('13.')).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('24.')).toBeVisible()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'So, let’s check' })).toBeVisible()];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('To check whether you’ve')).toBeVisible()];
                case 21:
                    _b.sent();
                    //go step back
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button').nth(1)).toBeVisible()];
                case 22:
                    //go step back
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button').nth(1).click()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Your recovery phrase' })).toBeVisible()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button').nth(2).click()];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Are you sure you want to')).toBeVisible()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Are you sure you want to leave?')];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('You have unsaved changes. If')).toBeVisible()];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('You have unsaved changes. If you close this window, your progress will be lost. Do you want to continue?')];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Continue Editing' })).toBeVisible()];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Discard Changes' })).toBeVisible()];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue Editing' }).click()];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('To check whether you’ve')).toBeVisible()];
                case 34:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button').nth(2).click()];
                case 35:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Discard Changes' }).click()];
                case 36:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Welcome to TonkeeperWorld-')).toBeVisible()];
                case 37:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
