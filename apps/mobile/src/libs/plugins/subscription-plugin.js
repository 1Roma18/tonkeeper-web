"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.IosSubscriptionStrategy = void 0;
var core_1 = require("@capacitor/core");
var pro_1 = require("@tonkeeper/core/dist/entries/pro");
var pro_2 = require("@tonkeeper/core/dist/pro");
var proService_1 = require("@tonkeeper/core/dist/service/proService");
var BaseSubscriptionStrategy_1 = require("@tonkeeper/core/dist/BaseSubscriptionStrategy");
var SubscriptionPlugin = (0, core_1.registerPlugin)('Subscription', {
    web: function () { return ({
        subscribe: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve) {
                            setTimeout(function () {
                                var now = new Date();
                                var purchaseDate = now.toISOString();
                                var oneMonthLater = new Date(now);
                                oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
                                var oneYearLater = new Date(now);
                                oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
                                var expirationDate = (options.productId === pro_1.ProductIds.MONTHLY ? oneMonthLater : oneYearLater).toISOString();
                                resolve({
                                    status: pro_1.PurchaseStatuses.SUCCESS,
                                    originalTransactionId: 2000000953417084,
                                    environment: pro_1.IosEnvironmentTypes.SANDBOX,
                                    productId: options.productId,
                                    purchaseDate: purchaseDate,
                                    expirationDate: expirationDate,
                                    revocationDate: null,
                                    isUpgraded: false
                                });
                            }, 1000);
                        })];
                });
            });
        },
        getAllProductsInfo: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve) {
                            return setTimeout(function () {
                                return resolve({
                                    products: [
                                        {
                                            id: pro_1.ProductIds.MONTHLY,
                                            displayName: 'Tonkeeper Pro Monthly',
                                            description: 'Access to premium features for one month',
                                            displayPrice: '$1.23',
                                            subscriptionGroup: 'emHJGjKGJKGGJim',
                                            subscriptionPeriod: 'month',
                                            environment: pro_1.IosEnvironmentTypes.SANDBOX
                                        }
                                    ]
                                });
                            }, 1000);
                        })];
                });
            });
        },
        getOriginalTransactionId: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, Promise.resolve({
                            originalTransactionId: 2000000953417084,
                            productId: pro_1.ProductIds.MONTHLY,
                            purchaseDate: new Date().toISOString(),
                            environment: pro_1.IosEnvironmentTypes.SANDBOX
                        })];
                });
            });
        },
        manageSubscriptions: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, 2000); })];
                });
            });
        }
    }); }
});
var IosSubscriptionStrategy = /** @class */ (function (_super) {
    __extends(IosSubscriptionStrategy, _super);
    function IosSubscriptionStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.source = pro_2.SubscriptionSource.IOS;
        return _this;
    }
    IosSubscriptionStrategy.prototype.subscribe = function (formData) {
        return __awaiter(this, void 0, void 0, function () {
            var productId, subscription, originalTransactionId, savingResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productId = formData.selectedPlan.id;
                        if (!(0, pro_1.isProductId)(productId)) {
                            throw new Error('Missing product id for this product');
                        }
                        return [4 /*yield*/, SubscriptionPlugin.subscribe({
                                productId: productId
                            })];
                    case 1:
                        subscription = _a.sent();
                        if (subscription.status === pro_1.PurchaseStatuses.CANCELED) {
                            return [2 /*return*/, pro_1.PurchaseStatuses.CANCELED];
                        }
                        originalTransactionId = subscription === null || subscription === void 0 ? void 0 : subscription.originalTransactionId;
                        if (!originalTransactionId) {
                            throw new Error('Failed to subscribe');
                        }
                        return [4 /*yield*/, (0, proService_1.saveIapPurchase)(formData.tempToken, String(originalTransactionId))];
                    case 2:
                        savingResult = _a.sent();
                        if (!savingResult.ok) {
                            throw new Error('Failed to subscribe');
                        }
                        return [2 /*return*/, pro_1.PurchaseStatuses.SUCCESS];
                }
            });
        });
    };
    IosSubscriptionStrategy.prototype.manageSubscriptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, SubscriptionPlugin.manageSubscriptions()];
            });
        });
    };
    IosSubscriptionStrategy.prototype.getCurrentSubscriptionInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SubscriptionPlugin.getCurrentSubscriptionInfo()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.subscriptions];
                }
            });
        });
    };
    IosSubscriptionStrategy.prototype.getOriginalTransactionId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, SubscriptionPlugin.getOriginalTransactionId()];
            });
        });
    };
    IosSubscriptionStrategy.prototype.getAllProductsInfoCore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var productIds, products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productIds = Object.values(pro_1.ProductIds);
                        return [4 /*yield*/, SubscriptionPlugin.getAllProductsInfo({ productIds: productIds })];
                    case 1:
                        products = (_a.sent()).products;
                        return [2 /*return*/, products.map(function (plan) { return ({
                                id: plan.id,
                                displayName: plan.displayName,
                                price: {
                                    type: pro_1.ProPriceTypes.FORMATTED,
                                    value: plan.displayPrice
                                },
                                subscriptionPeriod: (plan === null || plan === void 0 ? void 0 : plan.subscriptionPeriod) || 'month'
                            }); })];
                }
            });
        });
    };
    return IosSubscriptionStrategy;
}(BaseSubscriptionStrategy_1.BaseSubscriptionStrategy));
exports.IosSubscriptionStrategy = IosSubscriptionStrategy;
