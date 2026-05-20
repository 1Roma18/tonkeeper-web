"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.TwaSendNotification = void 0;
var crypto_1 = require("@tonkeeper/core/dist/entries/crypto");
var asset_amount_1 = require("@tonkeeper/core/dist/entries/crypto/asset/asset-amount");
var ton_asset_1 = require("@tonkeeper/core/dist/entries/crypto/asset/ton-asset");
var deeplinkingService_1 = require("@tonkeeper/core/dist/service/deeplinkingService");
var balance_1 = require("@tonkeeper/core/dist/utils/balance");
var ConfirmTransferView_1 = require("@tonkeeper/uikit/dist/components/transfer/ConfirmTransferView");
var ConfirmView_1 = require("@tonkeeper/uikit/dist/components/transfer/ConfirmView");
var RecipientView_1 = require("@tonkeeper/uikit/dist/components/transfer/RecipientView");
var AmountView_1 = require("@tonkeeper/uikit/dist/components/transfer/amountView/AmountView");
var common_1 = require("@tonkeeper/uikit/dist/components/transfer/common");
var appContext_1 = require("@tonkeeper/uikit/dist/hooks/appContext");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var ios_1 = require("@tonkeeper/uikit/dist/hooks/ios");
var translation_1 = require("@tonkeeper/uikit/dist/hooks/translation");
var jetton_1 = require("@tonkeeper/uikit/dist/state/jetton");
var tron_1 = require("@tonkeeper/uikit/dist/state/tron/tron");
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var styled_components_1 = __importDefault(require("styled-components"));
var FavoriteNotification_1 = require("./FavoriteNotification");
var SendNotificationButtons_1 = require("./SendNotificationButtons");
var SendNotificationHeader_1 = require("./SendNotificationHeader");
var analytics_1 = require("@tonkeeper/uikit/dist/hooks/analytics");
var constants_1 = require("@tonkeeper/core/dist/entries/crypto/asset/constants");
var common_2 = require("@tonkeeper/core/dist/utils/common");
var wallet_1 = require("@tonkeeper/uikit/dist/state/wallet");
var Body = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 0 16px 16px;\n    box-sizing: border-box;\n    height: 100vh;\n    overflow: auto;\n"], ["\n    padding: 0 16px 16px;\n    box-sizing: border-box;\n    height: 100vh;\n    overflow: auto;\n"])));
var SendContent = function (_a) {
    var onClose = _a.onClose, chain = _a.chain, initRecipient = _a.initRecipient, initAmountState = _a.initAmountState;
    var sdk = (0, appSdk_1.useAppSdk)();
    var ios = (0, appContext_1.useAppContext)().ios;
    var t = (0, translation_1.useTranslation)().t;
    var filter = (0, jetton_1.useJettonList)().data;
    var track = (0, analytics_1.useAnalyticsTrack)();
    var recipientRef = (0, react_1.useRef)(null);
    var amountRef = (0, react_1.useRef)(null);
    var favoriteRef = (0, react_1.useRef)(null);
    var confirmRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)('recipient'), view = _b[0], setView = _b[1];
    var _c = (0, react_1.useState)(true), right = _c[0], setRight = _c[1];
    var _d = (0, react_1.useState)(initRecipient), recipient = _d[0], _setRecipient = _d[1];
    var _e = (0, react_1.useState)(initAmountState), amountViewState = _e[0], setAmountViewState = _e[1];
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (initRecipient) {
            track('send_click', {
                from: 'send_amount',
                token: (_b = (_a = amountViewState === null || amountViewState === void 0 ? void 0 : amountViewState.token) === null || _a === void 0 ? void 0 : _a.symbol) !== null && _b !== void 0 ? _b : 'ton'
            });
        }
    }, []);
    var _f = (0, RecipientView_1.useGetToAccount)(), getAccountAsync = _f.mutateAsync, isAccountLoading = _f.isLoading;
    var activeTronWallet = (0, tron_1.useActiveTronWallet)();
    var setRecipient = function (value) {
        var _a, _b;
        if (((_a = amountViewState === null || amountViewState === void 0 ? void 0 : amountViewState.token) === null || _a === void 0 ? void 0 : _a.blockchain) &&
            ((_b = amountViewState === null || amountViewState === void 0 ? void 0 : amountViewState.token) === null || _b === void 0 ? void 0 : _b.blockchain) !== value.address.blockchain) {
            setAmountViewState(undefined);
        }
        _setRecipient(value);
        if (activeTronWallet && value.address.blockchain === crypto_1.BLOCKCHAIN_NAME.TRON) {
            setAmountViewState({ token: constants_1.TRON_USDT_ASSET });
        }
    };
    var onFavorite = (0, react_1.useCallback)(function () {
        (0, ios_1.openIosKeyboard)('text');
        setRight(true);
        setView('favorite');
    }, [setRight, setView]);
    var favoriteState = (0, FavoriteNotification_1.useFavoriteNotification)(onFavorite);
    var onRecipient = function (data) {
        var _a, _b;
        setRight(true);
        setRecipient(data);
        setView('amount');
        track('send_click', {
            from: 'send_recipient',
            token: (_b = (_a = amountViewState === null || amountViewState === void 0 ? void 0 : amountViewState.token) === null || _a === void 0 ? void 0 : _a.symbol) !== null && _b !== void 0 ? _b : 'ton'
        });
    };
    var onConfirmAmount = function (data) {
        var _a, _b;
        setRight(true);
        setAmountViewState(data);
        setView('confirm');
        track('send_confirm', {
            from: 'send_amount',
            token: (_b = (_a = amountViewState === null || amountViewState === void 0 ? void 0 : amountViewState.token) === null || _a === void 0 ? void 0 : _a.symbol) !== null && _b !== void 0 ? _b : 'ton'
        });
    };
    var backToRecipient = function (data) {
        setRight(false);
        setAmountViewState(data);
        setView('recipient');
    };
    var backToAmount = function () {
        if (ios)
            (0, ios_1.openIosKeyboard)('decimal');
        setRight(false);
        setView('amount');
    };
    var processTron = function (address) {
        if (!activeTronWallet) {
            return;
        }
        var item = { address: address, blockchain: crypto_1.BLOCKCHAIN_NAME.TRON };
        setRecipient({
            address: item,
            done: true
        });
        setView('amount');
    };
    var processRecipient = function (_a) {
        var address = _a.address, text = _a.text;
        return __awaiter(void 0, void 0, void 0, function () {
            var item, toAccount, done;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        item = { address: address, blockchain: crypto_1.BLOCKCHAIN_NAME.TON };
                        return [4 /*yield*/, getAccountAsync(item)];
                    case 1:
                        toAccount = _b.sent();
                        done = !toAccount.memoRequired ? true : toAccount.memoRequired && text ? true : false;
                        setRecipient({
                            address: item,
                            toAccount: toAccount,
                            comment: text !== null && text !== void 0 ? text : '',
                            done: done
                        });
                        if (done) {
                            setView('amount');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    var processJetton = (0, react_1.useCallback)(function (_a) {
        var a = _a.amount, jetton = _a.jetton;
        return __awaiter(void 0, void 0, void 0, function () {
            var actualAsset, assetAmount_1;
            return __generator(this, function (_b) {
                if (jetton && filter) {
                    actualAsset = void 0;
                    try {
                        actualAsset = (0, ton_asset_1.jettonToTonAsset)(jetton, filter);
                    }
                    catch (e) {
                        sdk.uiEvents.emit('copy', {
                            method: 'copy',
                            params: t('Unexpected_QR_Code')
                        });
                        return [2 /*return*/, false];
                    }
                    assetAmount_1 = new asset_amount_1.AssetAmount({
                        asset: actualAsset,
                        weiAmount: a || '0'
                    });
                    setAmountViewState({
                        coinValue: assetAmount_1.relativeAmount,
                        token: actualAsset,
                        inFiat: false,
                        isMax: false
                    });
                }
                else {
                    setAmountViewState({
                        coinValue: a ? (0, balance_1.shiftedDecimals)(a) : new bignumber_js_1["default"]('0'),
                        token: initAmountState === null || initAmountState === void 0 ? void 0 : initAmountState.token,
                        inFiat: false,
                        isMax: false
                    });
                }
                return [2 /*return*/, true];
            });
        });
    }, [sdk, filter, initAmountState === null || initAmountState === void 0 ? void 0 : initAmountState.token]);
    var onScan = function (signature) { return __awaiter(void 0, void 0, void 0, function () {
        var param, ok;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    param = (0, deeplinkingService_1.parseTonTransferWithAddress)({ url: signature });
                    if (!param) return [3 /*break*/, 4];
                    return [4 /*yield*/, processJetton(param)];
                case 1:
                    ok = _a.sent();
                    if (!ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, processRecipient(param)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
                case 4:
                    if ((0, common_2.seeIfValidTronAddress)(signature)) {
                        return [2 /*return*/, processTron(signature)];
                    }
                    return [2 /*return*/, sdk.uiEvents.emit('copy', {
                            method: 'copy',
                            params: t('Unexpected_QR_Code')
                        })];
            }
        });
    }); };
    var nodeRef = {
        recipient: recipientRef,
        amount: amountRef,
        favorite: favoriteRef,
        confirm: confirmRef
    }[view];
    var assetAmount = (0, react_1.useMemo)(function () {
        if (!(amountViewState === null || amountViewState === void 0 ? void 0 : amountViewState.token) || !(amountViewState === null || amountViewState === void 0 ? void 0 : amountViewState.coinValue)) {
            return null;
        }
        return asset_amount_1.AssetAmount.fromRelativeAmount({
            asset: amountViewState.token,
            amount: amountViewState.coinValue
        });
    }, [amountViewState === null || amountViewState === void 0 ? void 0 : amountViewState.token, amountViewState === null || amountViewState === void 0 ? void 0 : amountViewState.coinValue]);
    var acceptBlockchains = [];
    if (chain) {
        if (chain === crypto_1.BLOCKCHAIN_NAME.TRON && !activeTronWallet) {
            acceptBlockchains = [crypto_1.BLOCKCHAIN_NAME.TON];
        }
        else {
            acceptBlockchains = [chain];
        }
    }
    else {
        acceptBlockchains = activeTronWallet
            ? [crypto_1.BLOCKCHAIN_NAME.TON, crypto_1.BLOCKCHAIN_NAME.TRON]
            : [crypto_1.BLOCKCHAIN_NAME.TON];
    }
    return (<common_1.Wrapper standalone={false} extension={true}>
            <SendNotificationButtons_1.HideTwaMainButton />
            <SendNotificationHeader_1.HideTwaBackButton />
            <react_transition_group_1.TransitionGroup childFactory={(0, common_1.childFactoryCreator)(right)}>
                <react_transition_group_1.CSSTransition key={view} nodeRef={nodeRef} classNames="right-to-left" addEndListener={function (done) {
            setTimeout(done, common_1.duration);
        }}>
                    <div ref={nodeRef}>
                        {view === 'recipient' && (<RecipientView_1.RecipientView data={recipient} setRecipient={onRecipient} onScan={onScan} keyboard="decimal" isExternalLoading={isAccountLoading} acceptBlockchains={acceptBlockchains} MainButton={SendNotificationButtons_1.RecipientTwaMainButton} HeaderBlock={function () { return <SendNotificationHeader_1.RecipientTwaHeaderBlock onClose={onClose}/>; }} fitContent isAnimationProcess={false}/>)}
                        {view === 'favorite' && (<FavoriteNotification_1.FavoriteView state={favoriteState} onClose={backToRecipient}/>)}
                        {view === 'amount' && (<AmountView_1.AmountView defaults={amountViewState} onClose={onClose} onBack={backToRecipient} recipient={recipient} onConfirm={onConfirmAmount} MainButton={SendNotificationButtons_1.AmountTwaMainButton} HeaderBlock={SendNotificationHeader_1.AmountTwaHeaderBlock} isAnimationProcess={false}/>)}
                        {view === 'confirm' && (<ConfirmTransferView_1.ConfirmTransferView onClose={onClose} onBack={backToAmount} recipient={recipient} fitContent assetAmount={assetAmount} isMax={amountViewState.isMax}>
                                <ConfirmView_1.ConfirmViewTitleSlot>
                                    <SendNotificationHeader_1.RecipientTwaHeaderBlock onClose={backToAmount}/>
                                </ConfirmView_1.ConfirmViewTitleSlot>
                                <ConfirmView_1.ConfirmViewButtonsSlot>
                                    <ConfirmView_1.ConfirmViewButtons MainButton={SendNotificationButtons_1.ConfirmTwaMainButton}/>
                                </ConfirmView_1.ConfirmViewButtonsSlot>
                            </ConfirmTransferView_1.ConfirmTransferView>)}
                    </div>
                </react_transition_group_1.CSSTransition>
            </react_transition_group_1.TransitionGroup>
        </common_1.Wrapper>);
};
var TwaSendNotification = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(undefined), chain = _c[0], setChain = _c[1];
    var _d = (0, react_1.useState)(undefined), transferParams = _d[0], setTransferParams = _d[1];
    var jettons = (0, jetton_1.useJettonList)().data;
    var _e = (0, RecipientView_1.useGetToAccount)(), getAccountAsync = _e.mutateAsync, reset = _e.reset;
    var wallet = (0, wallet_1.useActiveWallet)();
    var sdk = (0, appSdk_1.useAppSdk)();
    var track = (0, analytics_1.useAnalyticsTrack)();
    (0, react_1.useEffect)(function () {
        var handler = function (options) {
            if (sdk.twaExpand) {
                sdk.twaExpand();
            }
            reset();
            var transfer = options.params;
            setChain(chain);
            if (transfer.chain === crypto_1.BLOCKCHAIN_NAME.TRON) {
                setTransferParams((0, common_1.makeTronTransferInitData)(transfer));
                setOpen(true);
                track('send_open', { from: transfer.from });
                return;
            }
            getAccountAsync({ address: wallet.rawAddress }).then(function (fromAccount) {
                if (transfer.address && (0, common_2.seeIfValidTonAddress)(transfer.address)) {
                    getAccountAsync({ address: transfer.address }).then(function (toAccount) {
                        setTransferParams((0, common_1.makeTonTransferInitData)(transfer, fromAccount, toAccount, jettons));
                        setOpen(true);
                    });
                }
                else {
                    setTransferParams({
                        initAmountState: (0, common_1.makeTransferInitAmountState)(transfer, fromAccount, jettons)
                    });
                    setOpen(true);
                }
            });
            track('send_open', { from: transfer.from });
        };
        sdk.uiEvents.on('transfer', handler);
        return function () {
            sdk.uiEvents.off('transfer', handler);
        };
    }, []);
    var onClose = (0, react_1.useCallback)(function () {
        setTransferParams(undefined);
        setOpen(false);
    }, []);
    if (open) {
        return (<Body>
                <SendContent onClose={onClose} chain={chain} initAmountState={transferParams === null || transferParams === void 0 ? void 0 : transferParams.initAmountState} initRecipient={transferParams === null || transferParams === void 0 ? void 0 : transferParams.initRecipient}/>
            </Body>);
    }
    else {
        return <>{children}</>;
    }
};
exports.TwaSendNotification = TwaSendNotification;
var templateObject_1;
