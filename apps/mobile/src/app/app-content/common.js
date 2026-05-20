"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.usePrefetch = exports.BackgroundElements = void 0;
var SendNotifications_1 = __importDefault(require("@tonkeeper/uikit/dist/components/transfer/SendNotifications"));
var ReceiveNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/home/ReceiveNotification"));
var NftNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/nft/NftNotification"));
var SendNftNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/transfer/nft/SendNftNotification"));
var FavoriteNotification_1 = require("@tonkeeper/uikit/dist/components/transfer/FavoriteNotification");
var DeepLink_1 = require("../components/DeepLink");
var PairSignerNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/PairSignerNotification"));
var ConnectLedgerNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/ConnectLedgerNotification"));
var PairKeystoneNotification_1 = __importDefault(require("@tonkeeper/uikit/dist/components/PairKeystoneNotification"));
var useRecommendations_1 = require("@tonkeeper/uikit/dist/hooks/browser/useRecommendations");
var password_1 = require("@tonkeeper/uikit/dist/state/password");
var TonConnectSubscription_1 = require("../components/TonConnectSubscription");
var BackgroundElements = function () {
    return (<>
            <SendNotifications_1["default"] />
            <ReceiveNotification_1["default"] />
            <TonConnectSubscription_1.TonConnectSubscription />
            <NftNotification_1["default"] />
            <SendNftNotification_1["default"] />
            <FavoriteNotification_1.AddFavoriteNotification />
            <FavoriteNotification_1.EditFavoriteNotification />
            <DeepLink_1.DeepLinkSubscription />
            <PairSignerNotification_1["default"] />
            <ConnectLedgerNotification_1["default"] />
            <PairKeystoneNotification_1["default"] />
        </>);
};
exports.BackgroundElements = BackgroundElements;
var usePrefetch = function () {
    (0, useRecommendations_1.useRecommendations)();
    (0, password_1.useCanPromptTouchId)();
};
exports.usePrefetch = usePrefetch;
