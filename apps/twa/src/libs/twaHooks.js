"use strict";
exports.__esModule = true;
exports.useHandleBackButton = void 0;
var sdk_react_1 = require("@tma.js/sdk-react");
var react_1 = require("react");
var useHandleBackButton = function (handleClose) {
    var backButton = (0, sdk_react_1.useBackButton)();
    (0, react_1.useEffect)(function () {
        backButton.show();
        backButton.on('click', handleClose);
        return function () {
            backButton.off('click', handleClose);
            backButton.hide();
        };
    }, [handleClose, backButton]);
};
exports.useHandleBackButton = useHandleBackButton;
