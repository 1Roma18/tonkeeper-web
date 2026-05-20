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
exports.PullToRefresh = exports.IconWrapper = exports.RefreshContainer = exports.usePullToRefresh = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = require("react");
var Icon_1 = require("@tonkeeper/uikit/dist/components/Icon");
var THRESHOLD = 300;
var INITIAL_SHIFT = 4;
var SHIFT_LIMIT = 16;
var PULL_RESISTANCE_KOEF = 0.2;
function usePullToRefresh(onRefresh) {
    var _this = this;
    var _a = (0, react_1.useState)(0), startY = _a[0], setStartY = _a[1];
    var _b = (0, react_1.useState)(0), pullProgress = _b[0], setPullProgress = _b[1];
    var _c = (0, react_1.useState)(false), isRefreshing = _c[0], setIsRefreshing = _c[1];
    var handleTouchStart = (0, react_1.useCallback)(function (e) {
        if (window.scrollY === 0) {
            setStartY(e.touches[0].clientY);
        }
    }, []);
    var handleTouchMove = (0, react_1.useCallback)(function (e) {
        if (startY === 0 || isRefreshing)
            return;
        var y = e.touches[0].clientY;
        var pull = Math.max(0, y - startY);
        if (pull < THRESHOLD) {
            pull = 0;
        }
        else {
            pull = Math.min(INITIAL_SHIFT + pull * PULL_RESISTANCE_KOEF, SHIFT_LIMIT);
        }
        // Prevent default scrolling while pulling
        if (pull > 0) {
            e.preventDefault();
        }
        setPullProgress(pull);
    }, [startY, isRefreshing]);
    var handleTouchEnd = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(pullProgress >= 1 && !isRefreshing)) return [3 /*break*/, 4];
                    setIsRefreshing(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, onRefresh()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    setIsRefreshing(false);
                    return [7 /*endfinally*/];
                case 4:
                    setStartY(0);
                    setPullProgress(0);
                    return [2 /*return*/];
            }
        });
    }); }, [pullProgress, isRefreshing, onRefresh]);
    (0, react_1.useEffect)(function () {
        document.addEventListener('touchstart', handleTouchStart, { passive: false });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
        return function () {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleTouchStart, handleTouchMove, handleTouchEnd]);
    return {
        pullProgress: pullProgress,
        isRefreshing: isRefreshing
    };
}
exports.usePullToRefresh = usePullToRefresh;
exports.RefreshContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%)\n        translateY(\n            ", "\n        );\n    height: 36px;\n    width: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 0.2s;\n    z-index: 50;\n    background: ", ";\n    border-radius: 50%;\n    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 4%);\n"], ["\n    position: fixed;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%)\n        translateY(\n            ", "\n        );\n    height: 36px;\n    width: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 0.2s;\n    z-index: 50;\n    background: ", ";\n    border-radius: 50%;\n    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 4%);\n"])), function (props) {
    return props.$pullProgress > 0
        ? "calc(".concat(props.$pullProgress, "px + env(safe-area-inset-top))")
        : '-100%';
}, function (p) { return p.theme.buttonTertiaryBackground; });
exports.IconWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    transform: rotate(", "deg);\n    transition: transform 0.2s;\n    animation: ", ";\n\n    @keyframes spin {\n        from {\n            transform: rotate(0deg);\n        }\n\n        to {\n            transform: rotate(360deg);\n        }\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    transform: rotate(", "deg);\n    transition: transform 0.2s;\n    animation: ", ";\n\n    @keyframes spin {\n        from {\n            transform: rotate(0deg);\n        }\n\n        to {\n            transform: rotate(360deg);\n        }\n    }\n"])), function (props) { return props.$rotation; }, function (props) { return (props.$isRefreshing ? 'spin 1s linear infinite' : 'none'); });
var PullToRefresh = function (_a) {
    var onRefresh = _a.onRefresh;
    var _b = usePullToRefresh(onRefresh), pullProgress = _b.pullProgress, isRefreshing = _b.isRefreshing;
    var rotation = Math.min(pullProgress * 360, 360);
    return (<exports.RefreshContainer $pullProgress={pullProgress}>
            <exports.IconWrapper $rotation={rotation} $isRefreshing={isRefreshing}>
                <Icon_1.RefreshIcon />
            </exports.IconWrapper>
        </exports.RefreshContainer>);
};
exports.PullToRefresh = PullToRefresh;
var templateObject_1, templateObject_2;
