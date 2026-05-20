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
                    return [4 /*yield*/, page.getByLabel('1:', { exact: true }).fill(process.env.TON_MNEMONIC_24)];
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
var connectUrl = function (page, clipboardContent) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(process.env.BASE_APP_URL === 'https://wallet.tonkeeper.com')) return [3 /*break*/, 3];
                return [4 /*yield*/, page.goto(clipboardContent)];
            case 1:
                _a.sent();
                return [4 /*yield*/, page.getByRole('link', { name: 'Sign in with Tonkeeper Web' }).click()];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, page.goto("/ton-connect".concat(new URL(clipboardContent).search))];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };
//TON Connect + go to the settings => Connected Apps + check asserts and elements
test_1.test.describe('ton connect', function () {
    (0, test_1.test)('elements', function (_a) {
        var page = _a.page, context = _a.context;
        return __awaiter(void 0, void 0, void 0, function () {
            var page1Promise, page1, handle, clipboardContent, modal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, context.grantPermissions(['clipboard-read', 'clipboard-write'])];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, page.getByText('Discover').click()];
                    case 2:
                        _b.sent();
                        page1Promise = page.waitForEvent('popup');
                        return [4 /*yield*/, page.getByText('STON.fi').nth(2).click()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, page1Promise];
                    case 4:
                        page1 = _b.sent();
                        return [4 /*yield*/, page1.getByRole('button', { name: 'Connect wallet' }).click()];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, page1.getByRole('button', { name: 'Tonkeeper Popular' }).click()];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, page1.locator('.go1369062826').first().click()];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, page1.evaluateHandle(function () { return navigator.clipboard.readText(); })];
                    case 8:
                        handle = _b.sent();
                        return [4 /*yield*/, handle.jsonValue()];
                    case 9:
                        clipboardContent = _b.sent();
                        // navigate back to wallet
                        return [4 /*yield*/, connectUrl(page, clipboardContent)];
                    case 10:
                        // navigate back to wallet
                        _b.sent();
                        modal = page.locator('#react-portal-modal-container').getByText('UQAG…gyIO');
                        return [4 /*yield*/, (0, test_1.expect)(modal).toBeVisible()];
                    case 11:
                        _b.sent();
                        return [4 /*yield*/, (0, test_1.expect)(page.locator('form')).toContainText('UQAG…gyIO')];
                    case 12:
                        _b.sent();
                        return [4 /*yield*/, page.getByRole('button', { name: 'Connect wallet' }).click()];
                    case 13:
                        _b.sent();
                        return [4 /*yield*/, page.getByRole('link', { name: 'Settings' }).click()];
                    case 14:
                        _b.sent();
                        return [4 /*yield*/, page.getByRole('link', { name: 'Connected Apps' }).click()];
                    case 15:
                        _b.sent();
                        return [4 /*yield*/, (0, test_1.expect)(page.getByText('app.ston.fi')).toBeVisible()];
                    case 16:
                        _b.sent();
                        return [4 /*yield*/, (0, test_1.expect)(page.getByRole('listitem')).toContainText('app.ston.fi')];
                    case 17:
                        _b.sent();
                        return [4 /*yield*/, (0, test_1.expect)(page.getByRole('listitem')).toContainText('Disconnect')];
                    case 18:
                        _b.sent();
                        return [4 /*yield*/, page
                                .locator('div')
                                .filter({ hasText: /^Connected Apps$/ })
                                .getByRole('button')
                                .click()];
                    case 19:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    (0, test_1.test)('STON fi', function (_a) {
        var page = _a.page, context = _a.context;
        return __awaiter(void 0, void 0, void 0, function () {
            var page1Promise, page1, handle, clipboardContent, modal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, context.grantPermissions(['clipboard-read', 'clipboard-write'])];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, page.getByText('Discover').click()];
                    case 2:
                        _b.sent();
                        page1Promise = page.waitForEvent('popup');
                        return [4 /*yield*/, page.getByText('STON.fi').nth(2).click()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, page1Promise];
                    case 4:
                        page1 = _b.sent();
                        return [4 /*yield*/, page1.getByRole('button', { name: 'Connect wallet' }).click()];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, page1.getByRole('button', { name: 'Tonkeeper Popular' }).click()];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, page1.locator('.go1369062826').first().click()];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, page1.evaluateHandle(function () { return navigator.clipboard.readText(); })];
                    case 8:
                        handle = _b.sent();
                        return [4 /*yield*/, handle.jsonValue()];
                    case 9:
                        clipboardContent = _b.sent();
                        // navigate back to wallet
                        return [4 /*yield*/, connectUrl(page, clipboardContent)];
                    case 10:
                        // navigate back to wallet
                        _b.sent();
                        modal = page.locator('#react-portal-modal-container').getByText('UQAG…gyIO');
                        return [4 /*yield*/, (0, test_1.expect)(modal).toBeAttached()];
                    case 11:
                        _b.sent();
                        return [4 /*yield*/, page.getByRole('button', { name: 'Connect wallet' }).click()];
                    case 12:
                        _b.sent();
                        return [4 /*yield*/, (0, test_1.expect)(modal).not.toBeAttached()];
                    case 13:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    (0, test_1.test)('Getgems', function (_a) {
        var page = _a.page, context = _a.context;
        return __awaiter(void 0, void 0, void 0, function () {
            var page1Promise, link, page1, buttonOnGetGems, handle, clipboardContent, modal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, context.grantPermissions(['clipboard-read', 'clipboard-write'])];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, page.getByText('Discover').click()];
                    case 2:
                        _b.sent();
                        page1Promise = page.waitForEvent('popup');
                        link = page.getByText('Getgems').nth(1);
                        return [4 /*yield*/, link.scrollIntoViewIfNeeded()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, link.click()];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, page1Promise];
                    case 5:
                        page1 = _b.sent();
                        return [4 /*yield*/, page1.getByRole('button', { name: 'Connect wallet' }).click()];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, page1.getByRole('button', { name: 'Tonkeeper Popular' }).click()];
                    case 7:
                        _b.sent();
                        buttonOnGetGems = page1.locator('.go1369062826').first();
                        return [4 /*yield*/, buttonOnGetGems.click()];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, page1.evaluateHandle(function () { return navigator.clipboard.readText(); })];
                    case 9:
                        handle = _b.sent();
                        return [4 /*yield*/, handle.jsonValue()];
                    case 10:
                        clipboardContent = _b.sent();
                        // navigate back to wallet
                        return [4 /*yield*/, connectUrl(page, clipboardContent)];
                    case 11:
                        // navigate back to wallet
                        _b.sent();
                        modal = page.locator('#react-portal-modal-container').getByText('UQAG…gyIO');
                        return [4 /*yield*/, (0, test_1.expect)(modal).toBeAttached()];
                    case 12:
                        _b.sent();
                        return [4 /*yield*/, page.getByRole('button', { name: 'Connect wallet' }).click()];
                    case 13:
                        _b.sent();
                        return [4 /*yield*/, page.locator('#react-portal-modal-container').getByRole('textbox').fill('123456')];
                    case 14:
                        _b.sent();
                        return [4 /*yield*/, page.getByRole('button', { name: 'Confirm' }).click()];
                    case 15:
                        _b.sent();
                        return [4 /*yield*/, (0, test_1.expect)(modal).not.toBeAttached()];
                    case 16:
                        _b.sent();
                        return [4 /*yield*/, page.getByRole('link', { name: 'Settings' }).click()];
                    case 17:
                        _b.sent();
                        return [4 /*yield*/, page.getByRole('link', { name: 'Connected Apps' }).click()];
                    case 18:
                        _b.sent();
                        return [4 /*yield*/, (0, test_1.expect)(page.getByText('getgems.io')).toBeVisible()];
                    case 19:
                        _b.sent();
                        // Expect that ton connect dialog auto closed, when it get event from http bridge
                        return [4 /*yield*/, (0, test_1.expect)(buttonOnGetGems).not.toBeAttached()];
                    case 20:
                        // Expect that ton connect dialog auto closed, when it get event from http bridge
                        _b.sent();
                        return [4 /*yield*/, (0, test_1.expect)(page.getByRole('button', { name: 'Disconnect' })).toBeVisible()];
                    case 21:
                        _b.sent();
                        return [4 /*yield*/, (0, test_1.expect)(page.getByRole('listitem')).toContainText('Disconnect')];
                    case 22:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
});
