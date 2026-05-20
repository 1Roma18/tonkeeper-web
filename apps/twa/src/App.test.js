"use strict";
exports.__esModule = true;
var react_1 = require("@testing-library/react");
var App_1 = require("./App");
test('renders learn react link', function () {
    (0, react_1.render)(<App_1.App />);
    var linkElement = react_1.screen.getByText(/Wallet/i);
    expect(linkElement).toBeInTheDocument();
});
