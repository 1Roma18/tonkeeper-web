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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StandardErrorBoundary = /** @class */ (function (_super) {
    __extends(StandardErrorBoundary, _super);
    function StandardErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        // to keep track of when an error occurs
        // and the error itself
        _this.state = {
            hasError: false,
            error: undefined
        };
        return _this;
    }
    // update the component state when an error occurs
    StandardErrorBoundary.getDerivedStateFromError = function (error) {
        // specify that the error boundary has caught an error
        return {
            hasError: true,
            error: error
        };
    };
    // defines what to do when an error gets caught
    StandardErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        // log the error
        console.log('Error caught!');
        console.error(error);
        console.error(errorInfo);
        // record the error in an APM tool...
    };
    StandardErrorBoundary.prototype.render = function () {
        var _a, _b;
        // if an error occurred
        if (this.state.hasError) {
            return (<div className={'error-page'}>
                    <div className={'oops'}>Oops!</div>
                    <div className={'message'}>
                        {(_b = (_a = this.state.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Something went wrong...'}
                    </div>
                </div>);
        }
        else {
            // default behavior
            return this.props.children;
        }
    };
    return StandardErrorBoundary;
}(react_1["default"].Component));
exports["default"] = StandardErrorBoundary;
