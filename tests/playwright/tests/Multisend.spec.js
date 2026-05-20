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
(0, test_1.test)('test', function (_a) {
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
                    return [4 /*yield*/, page.getByRole('button', { name: 'Multi Send' }).click()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^New Multi Send$/ })).toBeVisible()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^New List$/ })).toBeVisible()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Import CSV$/ })).toBeVisible()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^New List$/ }).click()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^List 1$/ })).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TONExport .CSVImport .CSV')).toBeVisible()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('input[name="rows\\.0\\.receiver"]')).toBeVisible()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('TONUSD').first()).toBeVisible()];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('input[name="rows\\.0\\.comment"]')).toBeVisible()];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('input[name="rows\\.1\\.receiver"]')).toBeVisible()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('form').getByRole('button').first()).toBeVisible()];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Add More' })).toBeVisible()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Add More' }).click()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('input[name="rows\\.2\\.receiver"]')).toBeVisible()];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Save List' })).toBeVisible()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save List' }).click()];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Save this List?')).toBeVisible()];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Save the list with addresses')).toBeVisible()];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('Save the list with addresses, amounts, and comments for future use.')];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByPlaceholder('List name')).toBeVisible()];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Close' })).toBeVisible()];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Close' }).click()];
                case 34:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.0\\.receiver"]').click()];
                case 35:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.0\\.receiver"]').click()];
                case 36:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.0\\.receiver"]').fill('UQBvVIh4DhKs66NL7WLEUqY52Uw95agOP7AkQO3IFOgQbcZ6')];
                case 37:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.1\\.receiver"]').click()];
                case 38:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.1\\.receiver"]').fill('UQDJ3uzSvsW4TGnWfcmBOKpQBqRpMEbwsJJ66ci4bdOISXO9')];
                case 39:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.2\\.receiver"]').click()];
                case 40:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.2\\.receiver"]').fill('UQBvVIh4DhKs66NL7WLEUqY52Uw95agOP7AkQO3IFOgQbcZ6')];
                case 41:
                    _b.sent();
                    return [4 /*yield*/, page.locator('[id="\\:r0\\:"]').click()];
                case 42:
                    _b.sent();
                    return [4 /*yield*/, page.locator('[id="\\:r0\\:"]').fill('0.01')];
                case 43:
                    _b.sent();
                    return [4 /*yield*/, page.locator('[id="\\:r2\\:"]').click()];
                case 44:
                    _b.sent();
                    return [4 /*yield*/, page.locator('[id="\\:r2\\:"]').fill('0.02')];
                case 45:
                    _b.sent();
                    return [4 /*yield*/, page.locator('[id="\\:r4\\:"]').click()];
                case 46:
                    _b.sent();
                    return [4 /*yield*/, page.locator('[id="\\:r4\\:"]').fill('0.03')];
                case 47:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.0\\.comment"]').click()];
                case 48:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.0\\.comment"]').fill('one')];
                case 49:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.1\\.comment"]').click()];
                case 50:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.1\\.comment"]').fill('two')];
                case 51:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.2\\.comment"]').click()];
                case 52:
                    _b.sent();
                    return [4 /*yield*/, page.locator('input[name="rows\\.2\\.comment"]').fill('three')];
                case 53:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save List' }).click()];
                case 54:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('wallets · 0.06 TON')).toBeVisible()];
                case 55:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save', exact: true }).click()];
                case 56:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Continue with Pro' }).click()];
                case 57:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Tonkeeper Pro', { exact: true })).toBeVisible()];
                case 58:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Buy Pro' }).first()).toBeVisible()];
                case 59:
                    _b.sent();
                    return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('button').first().click()];
                case 60:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^List 1$/ }).getByRole('button').click()];
                case 61:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-eggLLm > div:nth-child(3)')).toBeVisible()];
                case 62:
                    _b.sent();
                    return [4 /*yield*/, page.locator('.sc-eggLLm > div:nth-child(3)').click()];
                case 63:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Delete List' }).click()];
                case 64:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Delete\'List 1\'?')).toBeVisible()];
                case 65:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('This action is irreversible,')).toBeVisible()];
                case 66:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container')).toContainText('This action is irreversible, and all data will be lost.')];
                case 67:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Cancel' })).toBeVisible()];
                case 68:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Delete', exact: true }).click()];
                case 69:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^New Multi Send$/ }).getByRole('button').click()];
                case 70:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('Preferences').click()];
                case 71:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Sign Out$/ }).nth(1).click()];
                case 72:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^I have a backup copy of recovery phrase$/ }).locator('div').click()];
                case 73:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Delete wallet data' }).click()];
                case 74:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
