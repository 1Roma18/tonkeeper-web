"use strict";
exports.__esModule = true;
exports.NftIndexView = void 0;
var sdk_react_1 = require("@tma.js/sdk-react");
var NftView_1 = require("@tonkeeper/uikit/dist/components/nft/NftView");
var react_1 = require("react");
var NftIndexView = function (_a) {
    var nftItem = _a.nftItem, handleClose = _a.handleClose;
    var backButton = (0, sdk_react_1.useBackButton)();
    (0, react_1.useEffect)(function () {
        backButton.show();
        backButton.on('click', handleClose);
        return function () {
            backButton.off('click', handleClose);
        };
    }, [handleClose, backButton]);
    return <NftView_1.NftPreview nftItem={nftItem}/>;
};
exports.NftIndexView = NftIndexView;
