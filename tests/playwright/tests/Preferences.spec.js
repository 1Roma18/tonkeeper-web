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
//Add regular wallet, go to Preference tab
test_1.test.setTimeout(4 * 60 * 1000);
(0, test_1.test)('Preferences', function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        var page1Promise, page1;
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
                    return [4 /*yield*/, page.getByLabel('Wallet name').fill('test wallet')];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Wallet name').click()];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('👩‍💻').click()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Save' }).click()];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Congratulations! You’ve set' })).toBeVisible()];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Preferences$/ }).first()).toBeVisible()];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Preferences$/ }).click()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Manage Wallets' })).toBeVisible()];
                case 19:
                    _b.sent();
                    //Check links in header
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: 'FAQSupportTonkeeper news' }).nth(3)).toBeVisible()];
                case 20:
                    //Check links in header
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'FAQ' })).toBeVisible()];
                case 21:
                    _b.sent();
                    page1Promise = page.waitForEvent('popup');
                    return [4 /*yield*/, page.getByRole('button', { name: 'FAQ' }).click()];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, page1Promise];
                case 23:
                    page1 = _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page1.getByRole('link', { name: 'Tonkeeper Questions and' })).toBeVisible()];
                case 24:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Support' })).toBeVisible()];
                case 25:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Support')];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Support' }).click()];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, page1.locator('div').filter({ hasText: 'Tonkeeper @tonkeeper' }).nth(1).click()];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, page1.locator('div').filter({ hasText: 'Download' }).nth(2).click()];
                case 29:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page1.locator('div').filter({ hasText: /^Tonkeeper$/ })).toBeVisible()];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Tonkeeper news' })).toBeVisible()];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Tonkeeper news')];
                case 32:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Tonkeeper news' }).click()];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page1.locator('div').filter({ hasText: 'Tonkeeper News' }).nth(3)).toBeVisible()];
                case 34:
                    _b.sent();
                    //check Manage wallets elements
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Manage Wallets' })).toBeVisible()];
                case 35:
                    //check Manage wallets elements
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Manage Wallets')];
                case 36:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Manage WalletsNew Folder$/ }).locator('span')).toBeVisible()];
                case 37:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('👩‍💻test wallet')).toBeVisible()];
                case 38:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('👩‍💻test wallet')];
                case 39:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('UQAG…gyIOv4R2').nth(1)).toBeVisible()];
                case 40:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('UQCk…yXNwv3R1').nth(1)).toBeVisible()];
                case 41:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'New Folder' })).toBeVisible()];
                case 42:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('New Folder')];
                case 43:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Add wallet' })).toBeVisible()];
                case 44:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#root')).toContainText('Add wallet')];
                case 45:
                    _b.sent();
                    //check Preferences sidebar elements
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Security' })).toBeVisible()];
                case 46:
                    //check Preferences sidebar elements
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Tonkeeper Pro' })).toBeVisible()];
                case 47:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Language English' })).toBeVisible()];
                case 48:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Currency USD' })).toBeVisible()];
                case 49:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Country Auto' })).toBeVisible()];
                case 50:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Contact us$/ })).toBeVisible()];
                case 51:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Legal' })).toBeVisible()];
                case 52:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Dev Menu' })).toBeVisible()];
                case 53:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Sign Out$/ }).nth(1)).toBeVisible()];
                case 54:
                    _b.sent();
                    //check links in sidebar
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Contact us$/ }).click()];
                case 55:
                    //check links in sidebar
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'Legal' }).click()];
                case 56:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Legal' })).toBeVisible()];
                case 57:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-jNMdxs').first()).toBeVisible()];
                case 58:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('.sc-jNMdxs').first()).toBeVisible()];
                case 59:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('Terms of service').click()];
                case 60:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page1.getByRole('heading', { name: 'Terms of use' })).toBeVisible()];
                case 61:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page1.getByText('Terms of useLast updated on')).toBeVisible()];
                case 62:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Privacy policy')).toBeVisible()];
                case 63:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Privacy policy$/ }).nth(1).click()];
                case 64:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page1.getByRole('heading', { name: 'Privacy policy', exact: true })).toBeVisible()];
                case 65:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page1.getByText('Privacy policyEffective as of')).toBeVisible()];
                case 66:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Licenses' })).toBeVisible()];
                case 67:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Montserrat font$/ }).nth(2)).toBeVisible()];
                case 68:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Montserrat font$/ }).nth(2).click()];
                case 69:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page1.getByText('Privacy policyEffective as of')).toBeVisible()];
                case 70:
                    _b.sent();
                    //check Security tab + change password
                    return [4 /*yield*/, page.getByRole('link', { name: 'Security' }).click()];
                case 71:
                    //check Security tab + change password
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Security$/ }).nth(1)).toBeVisible()];
                case 72:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Lock screen$/ }).nth(2)).toBeVisible()];
                case 73:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Change password')).toBeVisible()];
                case 74:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Change password$/ }).nth(2).click()];
                case 75:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('#react-portal-modal-container').getByText('Change password')).toBeVisible()];
                case 76:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Current password$/ }).nth(2).click()];
                case 77:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Current password').fill('123456')];
                case 78:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Password$/ }).click()];
                case 79:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Password', { exact: true }).fill('87654321')];
                case 80:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^Re-enter password$/ }).nth(1).click()];
                case 81:
                    _b.sent();
                    return [4 /*yield*/, page.getByLabel('Re-enter password').fill('87654321')];
                case 82:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Must be at least 6 characters.')).toBeVisible()];
                case 83:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Change' })).toBeVisible()];
                case 84:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Change' }).click()];
                case 85:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByText('Password Changed')).toBeVisible()];
                case 86:
                    _b.sent();
                    //check Language tab 
                    return [4 /*yield*/, page.getByRole('link', { name: 'Language English' }).click()];
                case 87:
                    //check Language tab 
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Language$/ })).toBeVisible()];
                case 88:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^EnglishEnglish$/ }).nth(1)).toBeVisible()];
                case 89:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^繁體中文Traditional Chinese$/ }).nth(1)).toBeVisible()];
                case 90:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^简体中文Simplified Chinese$/ }).nth(1)).toBeVisible()];
                case 91:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^IndonesiaIndonesian$/ }).nth(1)).toBeVisible()];
                case 92:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^РусскийRussian$/ }).nth(1)).toBeVisible()];
                case 93:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^ItalianoItalian$/ }).nth(1)).toBeVisible()];
                case 94:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^EspañolSpanish$/ }).nth(1)).toBeVisible()];
                case 95:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^УкраїнськаUkrainian$/ }).nth(1)).toBeVisible()];
                case 96:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^TürkçeTurkish$/ }).nth(1)).toBeVisible()];
                case 97:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^БългарскиBulgarian$/ }).nth(1)).toBeVisible()];
                case 98:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^O‘zbekUzbek$/ }).nth(1)).toBeVisible()];
                case 99:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^বাংলাBangla$/ }).nth(1)).toBeVisible()];
                case 100:
                    _b.sent();
                    //check Currency tab - all currencies are visible, currence change is applied successfully
                    return [4 /*yield*/, page.getByRole('link', { name: 'Currency USD' }).click()];
                case 101:
                    //check Currency tab - all currencies are visible, currence change is applied successfully
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Currency$/ })).toBeVisible()];
                case 102:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^USDUS Dollar$/ }).nth(1)).toBeVisible()];
                case 103:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^EUREuro$/ }).nth(1)).toBeVisible()];
                case 104:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^RUBRussian Ruble$/ }).nth(1)).toBeVisible()];
                case 105:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^AEDUnited Arab Emirates Dirham$/ }).nth(1)).toBeVisible()];
                case 106:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^KZTKazakhstani Tenge$/ }).nth(1)).toBeVisible()];
                case 107:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^UAHUkrainian Hryvnia$/ }).nth(1)).toBeVisible()];
                case 108:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^GBPBritish Pound$/ }).nth(1)).toBeVisible()];
                case 109:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^GBPBritish Pound$/ }).nth(1)).toBeVisible()];
                case 110:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^CHFSwiss Franc$/ }).nth(1)).toBeVisible()];
                case 111:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^CNYChinese Yuan$/ }).nth(1)).toBeVisible()];
                case 112:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^KRWSouth Korean Won$/ }).nth(1)).toBeVisible()];
                case 113:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^IDRIndonesian Rupiah$/ }).nth(1)).toBeVisible()];
                case 114:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^INRIndian Rupee$/ }).nth(1)).toBeVisible()];
                case 115:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^JPYJapanese Yen$/ }).nth(1)).toBeVisible()];
                case 116:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^TONToncoin$/ }).nth(1)).toBeVisible()];
                case 117:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^GBPBritish Pound$/ }).nth(1).click()];
                case 118:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Currency GBP' })).toBeVisible()];
                case 119:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^AEDUnited Arab Emirates Dirham$/ }).nth(1).click()];
                case 120:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Currency AED' })).toBeVisible()];
                case 121:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^CNYChinese Yuan$/ }).nth(1).click()];
                case 122:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'Currency CNY' }).click()];
                case 123:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^USDUS Dollar$/ }).nth(1).click()];
                case 124:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('link', { name: 'Currency USD' })).toBeVisible()];
                case 125:
                    _b.sent();
                    //check Country tab 
                    return [4 /*yield*/, page.getByRole('link', { name: 'Country Auto' }).click()];
                case 126:
                    //check Country tab 
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Country' })).toBeVisible()];
                case 127:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByLabel('Search')).toBeVisible()];
                case 128:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Auto$/ }).nth(2)).toBeVisible()];
                case 129:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Bangladesh$/ }).nth(1)).toBeVisible()];
                case 130:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.locator('div').filter({ hasText: /^Belgium$/ }).nth(1)).toBeVisible()];
                case 131:
                    _b.sent();
                    return [4 /*yield*/, page.getByText('Sign Out').click()];
                case 132:
                    _b.sent();
                    return [4 /*yield*/, page.locator('div').filter({ hasText: /^I have a backup copy of recovery phrase$/ }).locator('div').click()];
                case 133:
                    _b.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: 'Delete wallet data' }).click()];
                case 134:
                    _b.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page.getByRole('heading', { name: 'Welcome to Tonkeeper' })).toBeVisible()];
                case 135:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
