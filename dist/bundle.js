/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Main_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(Main_1.Main, null), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Header_1 = __webpack_require__(4);
	var TopImg_1 = __webpack_require__(5);
	var Content1_1 = __webpack_require__(6);
	var Content2_1 = __webpack_require__(7);
	var Main = (function (_super) {
	    __extends(Main, _super);
	    function Main() {
	        _super.apply(this, arguments);
	    }
	    Main.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement(Header_1.Header, null), React.createElement(TopImg_1.TopImg, null), React.createElement(Content1_1.Content1, null), React.createElement(Content2_1.Content2, null)));
	    };
	    return Main;
	}(React.Component));
	exports.Main = Main;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Header = (function (_super) {
	    __extends(Header, _super);
	    function Header() {
	        _super.apply(this, arguments);
	    }
	    Header.prototype.render = function () {
	        return (React.createElement("header", {id: "header"}, React.createElement("img", {id: "mocchan5", src: "img/mocchan5.png"})));
	    };
	    return Header;
	}(React.Component));
	exports.Header = Header;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var TopImg = (function (_super) {
	    __extends(TopImg, _super);
	    function TopImg() {
	        _super.apply(this, arguments);
	    }
	    TopImg.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("img", {id: "top-img", src: "img/flower.jpg"}), React.createElement("div", null, React.createElement("p", {id: "title"}, "Irodori"), React.createElement("img", {id: "applestore", src: "img/applestore.png"}), React.createElement("img", {id: "smartphone", src: "img/smartphone.png"}))));
	    };
	    return TopImg;
	}(React.Component));
	exports.TopImg = TopImg;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Content1 = (function (_super) {
	    __extends(Content1, _super);
	    function Content1() {
	        _super.apply(this, arguments);
	    }
	    Content1.prototype.render = function () {
	        return (React.createElement("div", {id: "content1"}, React.createElement("img", {id: "formovie1", src: "img/heart.png"}), React.createElement("section", null), React.createElement("section", null)));
	    };
	    return Content1;
	}(React.Component));
	exports.Content1 = Content1;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Content2 = (function (_super) {
	    __extends(Content2, _super);
	    function Content2() {
	        _super.apply(this, arguments);
	    }
	    Content2.prototype.render = function () {
	        return (React.createElement("div", {id: "content2"}));
	    };
	    return Content2;
	}(React.Component));
	exports.Content2 = Content2;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map