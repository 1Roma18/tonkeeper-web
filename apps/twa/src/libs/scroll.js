"use strict";
exports.__esModule = true;
exports.getScrollbarWidth = exports.enableScroll = exports.disableScroll = void 0;
var disableScroll = function () {
    document.documentElement.classList.add('is-locked');
    window.document.body.style.paddingRight = "".concat((0, exports.getScrollbarWidth)(), "px");
};
exports.disableScroll = disableScroll;
var enableScroll = function () {
    document.documentElement.classList.remove('is-locked');
    window.document.body.style.paddingRight = '0px';
};
exports.enableScroll = enableScroll;
var getScrollbarWidth = function () {
    // Creating invisible container
    var outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
    // Creating inner element and placing it in the container
    var inner = document.createElement('div');
    outer.appendChild(inner);
    // Calculating difference between container's full width and the child width
    var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);
    return scrollbarWidth;
};
exports.getScrollbarWidth = getScrollbarWidth;
