"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ImageTop = (function (_super) {
    __extends(ImageTop, _super);
    function ImageTop() {
        _super.apply(this, arguments);
    }
    ImageTop.prototype.render = function () {
        return React.createElement("img", {src: "img/img-top.jpg"});
    };
    return ImageTop;
}(React.Component));
exports.ImageTop = ImageTop;
//# sourceMappingURL=ImageTop.js.map