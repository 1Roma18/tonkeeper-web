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
//Dashboard for a single wallet + its elements` visibility
(0, test_1.test)('Dashboard + elements', function (_a) {
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
                    return [4 /*yield*/, page.locator('#create-password').fill('123456')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#create-password-confirm').fill('123456')];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue' }).click()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('textbox').fill('Ananas')];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Dashboard')).toBeVisible()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Dashboard')];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Ananas UQBA…OP8V W5 UQDH…TkZ5' })).toBeVisible()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('Dashboard').click()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Name')).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('cell', { name: 'Ananas 🍍 v3R1' }).locator('span')).toBeVisible()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('tbody')).toContainText('Ananas')];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('tbody')).toContainText('v3R1')];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('cell', { name: 'Ananas 🍍 v3R2' }).locator('span')).toBeVisible()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('tbody')).toContainText('v3R2')];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('cell', { name: 'Ananas 🍍 v4R2' }).locator('span')).toBeVisible()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('tbody')).toContainText('Ananas')];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('tbody')).toContainText('v4R2')];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('cell', { name: 'Ananas 🍍 W5 beta' }).locator('span')).toBeVisible()];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('tbody')).toContainText('W5 beta')];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('cell', { name: 'Ananas 🍍 W5', exact: true }).locator('span')).toBeVisible()];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('tbody')).toContainText('W5')];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('Preferences').click()];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('Sign Out').click()];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, page
                            .locator('div')
                            .filter({ hasText: /^I have a backup copy of recovery phrase$/ })
                            .locator('div')
                            .click()];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Delete wallet data' }).click()];
                case 33:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
