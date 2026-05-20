"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.TwaNftNotification = void 0;
var sdk_react_1 = require("@tma.js/sdk-react");
var crypto_1 = require("@tonkeeper/core/dist/entries/crypto");
var deeplinkingService_1 = require("@tonkeeper/core/dist/service/deeplinkingService");
var ConfirmView_1 = require("@tonkeeper/uikit/dist/components/transfer/ConfirmView");
var RecipientView_1 = require("@tonkeeper/uikit/dist/components/transfer/RecipientView");
var common_1 = require("@tonkeeper/uikit/dist/components/transfer/common");
var ConfirmNftView_1 = require("@tonkeeper/uikit/dist/components/transfer/nft/ConfirmNftView");
var appSdk_1 = require("@tonkeeper/uikit/dist/hooks/appSdk");
var ios_1 = require("@tonkeeper/uikit/dist/hooks/ios");
var translation_1 = require("@tonkeeper/uikit/dist/hooks/translation");
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var styled_components_1 = __importDefault(require("styled-components"));
var FavoriteNotification_1 = require("../transfer/FavoriteNotification");
var SendNotificationButtons_1 = require("../transfer/SendNotificationButtons");
var SendNotificationHeader_1 = require("../transfer/SendNotificationHeader");
var NftIndexView_1 = require("./NftIndexView");
var Body = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 0 16px 16px;\n    box-sizing: border-box;\n    height: 100vh;\n    overflow: auto;\n"], ["\n    padding: 0 16px 16px;\n    box-sizing: border-box;\n    height: 100vh;\n    overflow: auto;\n"])));
var Content = function (_a) {
    var nftItem = _a.nftItem, handleClose = _a.handleClose;
    var sdk = (0, appSdk_1.useAppSdk)();
    var t = (0, translation_1.useTranslation)().t;
    var _b = (0, react_1.useState)(true), right = _b[0], setRight = _b[1];
    var _c = (0, react_1.useState)('index'), view = _c[0], setView = _c[1];
    var _d = (0, react_1.useState)(), recipient = _d[0], setRecipient = _d[1];
    var mainButton = (0, sdk_react_1.useMainButton)();
    var getAccountAsync = (0, RecipientView_1.useGetToAccount)().mutateAsync;
    var indexRef = (0, react_1.useRef)(null);
    var recipientRef = (0, react_1.useRef)(null);
    var confirmRef = (0, react_1.useRef)(null);
    var favoriteRef = (0, react_1.useRef)(null);
    var backToIndex = (0, react_1.useCallback)(function () {
        setRight(false);
        setView('index');
        mainButton.hide();
    }, [mainButton]);
    var onFavorite = (0, react_1.useCallback)(function () {
        (0, ios_1.openIosKeyboard)('text');
        setRight(true);
        setView('favorite');
    }, [setRight, setView]);
    var favoriteState = (0, FavoriteNotification_1.useFavoriteNotification)(onFavorite);
    var onRecipient = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setRight(true);
            setRecipient(data);
            setView('confirm');
            return [2 /*return*/];
        });
    }); };
    var backToRecipient = (0, react_1.useCallback)(function () {
        setRight(false);
        setView('recipient');
        setRecipient(function (value) { return (value ? __assign(__assign({}, value), { done: false }) : undefined); });
    }, [setRecipient]);
    (0, react_1.useEffect)(function () {
        var handler = function () {
            setView('recipient');
            setRight(true);
        };
        sdk.uiEvents.on('transferNft', handler);
        return function () {
            sdk.uiEvents.off('transferNft', handler);
        };
    }, []);
    var processRecipient = (0, react_1.useCallback)(function (_a) {
        var address = _a.address;
        return __awaiter(void 0, void 0, void 0, function () {
            var item, toAccount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        item = { address: address };
                        return [4 /*yield*/, getAccountAsync(item)];
                    case 1:
                        toAccount = _b.sent();
                        setRecipient({
                            address: __assign(__assign({}, item), { blockchain: crypto_1.BLOCKCHAIN_NAME.TON }),
                            toAccount: toAccount,
                            comment: '',
                            done: true
                        });
                        return [2 /*return*/];
                }
            });
        });
    }, [setRecipient, getAccountAsync]);
    var onScan = function (signature) { return __awaiter(void 0, void 0, void 0, function () {
        var param;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    param = (0, deeplinkingService_1.parseTonTransferWithAddress)({ url: signature });
                    if (!(param === null)) return [3 /*break*/, 1];
                    return [2 /*return*/, sdk.uiEvents.emit('copy', {
                            method: 'copy',
                            params: t('Unexpected_QR_Code')
                        })];
                case 1: return [4 /*yield*/, processRecipient(param)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var nodeRef = {
        index: indexRef,
        recipient: recipientRef,
        favorite: favoriteRef,
        confirm: confirmRef
    }[view];
    return (<common_1.Wrapper standalone={false} extension={true}>
            <SendNotificationButtons_1.HideTwaMainButton />
            <SendNotificationHeader_1.HideTwaBackButton />
            <react_transition_group_1.TransitionGroup childFactory={(0, common_1.childFactoryCreator)(right)}>
                <react_transition_group_1.CSSTransition key={view} nodeRef={nodeRef} classNames="right-to-left" addEndListener={function (done) {
            setTimeout(done, common_1.duration);
        }}>
                    <div ref={nodeRef}>
                        {view === 'index' && (<NftIndexView_1.NftIndexView nftItem={nftItem} handleClose={handleClose}/>)}
                        {view === 'recipient' && (<RecipientView_1.RecipientView data={recipient} setRecipient={onRecipient} onScan={onScan} acceptBlockchains={[crypto_1.BLOCKCHAIN_NAME.TON]} MainButton={SendNotificationButtons_1.RecipientTwaMainButton} HeaderBlock={function () { return (<SendNotificationHeader_1.RecipientTwaHeaderBlock onClose={backToIndex}/>); }}/>)}
                        {view === 'favorite' && (<FavoriteNotification_1.FavoriteView state={favoriteState} onClose={backToRecipient}/>)}
                        {view === 'confirm' && (<ConfirmNftView_1.ConfirmNftView onClose={handleClose} recipient={recipient} nftItem={nftItem} mainButton={<ConfirmView_1.ConfirmViewButtons MainButton={SendNotificationButtons_1.ConfirmTwaMainButton}/>} headerBlock={<SendNotificationHeader_1.RecipientTwaHeaderBlock onClose={backToRecipient}/>} isAnimationProcess={false}/>)}
                    </div>
                </react_transition_group_1.CSSTransition>
            </react_transition_group_1.TransitionGroup>
        </common_1.Wrapper>);
};
var TwaNftNotification = function (_a) {
    var children = _a.children;
    var sdk = (0, appSdk_1.useAppSdk)();
    var _b = (0, react_1.useState)(undefined), nftItem = _b[0], setNft = _b[1];
    var handleClose = (0, react_1.useCallback)(function () {
        setNft(undefined);
    }, [setNft]);
    (0, react_1.useEffect)(function () {
        var handler = function (options) {
            setNft(options.params);
        };
        sdk.uiEvents.on('nft', handler);
        return function () {
            sdk.uiEvents.off('nft', handler);
        };
    }, [sdk, setNft]);
    if (nftItem) {
        return (<Body>
                <Content nftItem={nftItem} handleClose={handleClose}/>
            </Body>);
    }
    else {
        return <>{children}</>;
    }
};
exports.TwaNftNotification = TwaNftNotification;
var templateObject_1;
