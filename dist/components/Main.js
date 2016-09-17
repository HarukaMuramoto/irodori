"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Header_1 = require("./Header");
var TopImg_1 = require("./TopImg");
var Content1_1 = require("./Content1");
var Content2_1 = require("./Content2");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
    }
    Main.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement(Header_1.Header, null), 
            React.createElement(TopImg_1.TopImg, null), 
            React.createElement(Content1_1.Content1, null), 
            React.createElement(Content2_1.Content2, null)));
    };
    return Main;
}(React.Component));
exports.Main = Main;
//# sourceMappingURL=Main.js.map