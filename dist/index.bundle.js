"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/logo.ttf */ "./src/assets/fonts/logo.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/hand.ttf */ "./src/assets/fonts/hand.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/sideBar.ttf */ "./src/assets/fonts/sideBar.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Nunito-VariableFont_wght.ttf */ "./src/assets/fonts/Nunito-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: logoFont;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: handFont;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
  font-family: sideBarFont;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
  font-family: bodyFont;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

:root {
  --blue: #184f77;
  --light-blue: #178bad;
  --dark-blue: #0e2d44;
  --background: #178bad;
  --white: #ffffff;
  --transparent-white: rgba(255, 255, 255, 0.5);
  --warning-low: #7eb356;
  --warning-moderate: #f9c74f;
  --warning-high: #ed8607;
  --warning-veryhigh: #f94144;
}
html,
body {
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--blue);
  background: var(--blue);
  background: -webkit-linear-gradient(top, var(--light-blue), var(--blue));
  background: -moz-linear-gradient(top, var(--light-blue), var(--blue));
  background: linear-gradient(to bottom, var(--light-blue), var(--blue));
  font-size: 16px;
  height: 105vh;
  box-sizing: border-box;
  font-family: bodyFont;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.nav-bar {
  padding: 1.7rem 3.5rem 1.7rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  align-items: center;
  font-family: bodyFont;
}

.logo > a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--white);
  font-size: 1.1rem;
  font-weight: bold;
}

.logo svg {
  width: 3rem;
  fill: var(--white);
  display: flex;
  vertical-align: middle;
}

.logo-txt {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: bodyFont;
}

.search-bar {
  margin-left: 2.8rem;
  height: 2.5rem;
  width: 22rem;
  border: none;
  border-radius: 20px;
  font-size: 1.3rem;
  padding: 0.5rem 3.32rem 0.5rem 1rem;
  background-color: var(--dark-blue);
  color: var(--white);
}

.search-bar:active,
.search-bar:focus {
  outline: none;
  border: 2px solid white;
  border-color: var(--white);
}

.search-btn {
  position: relative;
  right: 3.3rem;
  top: 0.5rem;
  border-radius: 0px 20px 20px 0px;
  padding-right: 0.5rem;
  height: 2.3rem;
  width: 3rem;
  outline: none;
  background-color: transparent;
  border: none;
}

.search-btn > svg {
  height: auto;
  width: 1.9rem;
  fill: var(--white);
}

.temp-toggle {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.celsius,
.fahrenheit {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--white);
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--dark-blue);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--transparent-white);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--transparent-white);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.current-data {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--white);
  user-select: none;
}

.location-hero {
  display: flex;
  flex-direction: column;
}

.location {
  font-size: 2.5rem;
  font-weight: 700;
}

.date {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--transparent-white);
}

.weather-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
.weather-info-left {
  display: flex;
  flex-direction: column;
}

.temp-info {
  display: flex;
  align-items: center;
}

.temp-info img {
  width: 6rem;
  pointer-events: none;
}

.temperature {
  font-size: 4rem;
  font-weight: 800;
}

.more-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sky-info {
  font-size: 1.7rem;
  font-weight: 700;
}

.feels-like,
.update-time {
  font-size: 1.3rem;
  color: var(--transparent-white);
  font-weight: 700;
}

.weather-info-right {
  display: flex;
  gap: 3rem;
}

.info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.info-header {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--transparent-white);
}

.info {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.info > img {
  width: 2rem;
}

.uv > .info,
.uv-forecast-data {
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 5rem;
}

.rain-chance img {
  width: 1.5rem;
}

.sunset img,
.sunrise img {
  width: 2.5rem;
}

.forecast-data {
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  align-items: center;
}

.forecast-header {
  padding-top: 2rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--white);
}

table {
  border-collapse: collapse;
  letter-spacing: 1px;
  font-size: 1.3rem;
  font-weight: 600;
  min-width: 30rem;
  color: var(--white);
}

tr {
  border-bottom: 2px solid var(--white);
}

tr:nth-last-child(1) {
  border-bottom: none;
}

td {
  text-align: center;
  padding: 1.5rem;
}

.forecast-info img {
  width: 3rem;
}

td img {
  width: 1.2rem;
  vertical-align: middle;
}

.forecast-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.forecast-day {
  font-size: 1.6rem;
}

.low {
  background-color: var(--warning-low);
}

.moderate {
  background-color: var(--warning-moderate);
}

.high {
  background-color: var(--warning-high);
}

.very-high {
  background-color: var(--warning-veryhigh);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: logoFont;\n  src: url(\"./assets/fonts/logo.ttf\");\n}\n\n@font-face {\n  font-family: handFont;\n  src: url(\"./assets/fonts/hand.ttf\");\n}\n\n@font-face {\n  font-family: sideBarFont;\n  src: url(\"./assets/fonts/sideBar.ttf\");\n}\n\n@font-face {\n  font-family: bodyFont;\n  src: url(\"./assets/fonts/Nunito-VariableFont_wght.ttf\");\n}\n\n:root {\n  --blue: #184f77;\n  --light-blue: #178bad;\n  --dark-blue: #0e2d44;\n  --background: #178bad;\n  --white: #ffffff;\n  --transparent-white: rgba(255, 255, 255, 0.5);\n  --warning-low: #7eb356;\n  --warning-moderate: #f9c74f;\n  --warning-high: #ed8607;\n  --warning-veryhigh: #f94144;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--blue);\n  background: var(--blue);\n  background: -webkit-linear-gradient(top, var(--light-blue), var(--blue));\n  background: -moz-linear-gradient(top, var(--light-blue), var(--blue));\n  background: linear-gradient(to bottom, var(--light-blue), var(--blue));\n  font-size: 16px;\n  height: 105vh;\n  box-sizing: border-box;\n  font-family: bodyFont;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.nav-bar {\n  padding: 1.7rem 3.5rem 1.7rem 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.logo {\n  align-items: center;\n  font-family: bodyFont;\n}\n\n.logo > a {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: var(--white);\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n.logo svg {\n  width: 3rem;\n  fill: var(--white);\n  display: flex;\n  vertical-align: middle;\n}\n\n.logo-txt {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: bodyFont;\n}\n\n.search-bar {\n  margin-left: 2.8rem;\n  height: 2.5rem;\n  width: 22rem;\n  border: none;\n  border-radius: 20px;\n  font-size: 1.3rem;\n  padding: 0.5rem 3.32rem 0.5rem 1rem;\n  background-color: var(--dark-blue);\n  color: var(--white);\n}\n\n.search-bar:active,\n.search-bar:focus {\n  outline: none;\n  border: 2px solid white;\n  border-color: var(--white);\n}\n\n.search-btn {\n  position: relative;\n  right: 3.3rem;\n  top: 0.5rem;\n  border-radius: 0px 20px 20px 0px;\n  padding-right: 0.5rem;\n  height: 2.3rem;\n  width: 3rem;\n  outline: none;\n  background-color: transparent;\n  border: none;\n}\n\n.search-btn > svg {\n  height: auto;\n  width: 1.9rem;\n  fill: var(--white);\n}\n\n.temp-toggle {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.celsius,\n.fahrenheit {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--white);\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--dark-blue);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: var(--transparent-white);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px var(--transparent-white);\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.current-data {\n  display: flex;\n  gap: 1.5rem;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  color: var(--white);\n  user-select: none;\n}\n\n.location-hero {\n  display: flex;\n  flex-direction: column;\n}\n\n.location {\n  font-size: 2.5rem;\n  font-weight: 700;\n}\n\n.date {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--transparent-white);\n}\n\n.weather-info {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n}\n.weather-info-left {\n  display: flex;\n  flex-direction: column;\n}\n\n.temp-info {\n  display: flex;\n  align-items: center;\n}\n\n.temp-info img {\n  width: 6rem;\n  pointer-events: none;\n}\n\n.temperature {\n  font-size: 4rem;\n  font-weight: 800;\n}\n\n.more-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.sky-info {\n  font-size: 1.7rem;\n  font-weight: 700;\n}\n\n.feels-like,\n.update-time {\n  font-size: 1.3rem;\n  color: var(--transparent-white);\n  font-weight: 700;\n}\n\n.weather-info-right {\n  display: flex;\n  gap: 3rem;\n}\n\n.info-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2.5rem;\n}\n\n.info-header {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--transparent-white);\n}\n\n.info {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.info > img {\n  width: 2rem;\n}\n\n.uv > .info,\n.uv-forecast-data {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-radius: 5rem;\n}\n\n.rain-chance img {\n  width: 1.5rem;\n}\n\n.sunset img,\n.sunrise img {\n  width: 2.5rem;\n}\n\n.forecast-data {\n  display: flex;\n  gap: 1.2rem;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast-header {\n  padding-top: 2rem;\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: var(--white);\n}\n\ntable {\n  border-collapse: collapse;\n  letter-spacing: 1px;\n  font-size: 1.3rem;\n  font-weight: 600;\n  min-width: 30rem;\n  color: var(--white);\n}\n\ntr {\n  border-bottom: 2px solid var(--white);\n}\n\ntr:nth-last-child(1) {\n  border-bottom: none;\n}\n\ntd {\n  text-align: center;\n  padding: 1.5rem;\n}\n\n.forecast-info img {\n  width: 3rem;\n}\n\ntd img {\n  width: 1.2rem;\n  vertical-align: middle;\n}\n\n.forecast-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.forecast-day {\n  font-size: 1.6rem;\n}\n\n.low {\n  background-color: var(--warning-low);\n}\n\n.moderate {\n  background-color: var(--warning-moderate);\n}\n\n.high {\n  background-color: var(--warning-high);\n}\n\n.very-high {\n  background-color: var(--warning-veryhigh);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ domHandler)
/* harmony export */ });
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ "./src/weatherData.js");


// Default place on load
let place = "Kathmandu";

// DOM Elements
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const tempToggle = document.querySelector(".temp-checkbox");
const toggleSec = document.querySelector(".temp-toggle");
const locationInfo = document.querySelector(".location");
const date = document.querySelector(".date");
const weatherIcon = document.querySelector(".weather-icon");
const tempInfo = document.querySelector(".temperature");
const skyInfo = document.querySelector(".sky-info");
const feelsLikeInfo = document.querySelector(".feels-like-data");
const updateTime = document.querySelector(".update-time-data");
const windInfo = document.querySelector(".wind-data");
const visibilityInfo = document.querySelector(".visibility-data");
const sunriseInfo = document.querySelector(".sunrise-data");
const humidityInfo = document.querySelector(".humidity-data");
const cloudInfo = document.querySelector(".cloud-data");
const sunsetInfo = document.querySelector(".sunset-data");
const uvInfo = document.querySelector(".uv-data");
const rainInfo = document.querySelector(".rain-data");
const moonInfo = document.querySelector(".moon-data");
const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");
const forecastIcons = document.querySelectorAll(".forecast-icon");
const forecastTemps = document.querySelectorAll(".forecast-temp");
const rainForecasts = document.querySelectorAll(".rain-forecast-data");
const uvForecasts = document.querySelectorAll(".uv-forecast-data");

function returnDay(dayValue) {
  let day;
  switch (dayValue) {
    case 0:
    case 7:
      day = "Sunday";
      break;
    case 1:
    case 8:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = undefined;
      break;
  }
  return day;
}

function extractTime(fullTime) {
  const parts = fullTime.split(" ");
  const timePart = parts[1].split(":");
  let hour = parseInt(timePart[0], 10);

  const amPm = hour >= 12 ? "PM" : "AM";

  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }

  return `${hour.toString().padStart(2, "0")}:${timePart[1]} ${amPm}`;
}

function handleUvData(elementNode, data) {
  let uvCondition;
  const uvIndex = elementNode;
  elementNode.classList.remove("low", "moderate", "high", "very-high");
  if (data <= 2) {
    uvCondition = "Low";
  } else if (data > 2 && data <= 5) {
    uvCondition = "Moderate";
  } else if (data > 5 && data <= 7) {
    uvCondition = "High";
  } else {
    uvCondition = "Very High";
  }

  uvIndex.textContent = uvCondition;

  switch (uvCondition) {
    case "Low":
      elementNode.classList.add("low");
      break;
    case "Moderate":
      elementNode.classList.add("moderate");
      break;
    case "High":
      elementNode.classList.add("high");
      break;
    case "Very High":
      elementNode.classList.add("very-high");
      break;
    default:
      elementNode.classList.add("");
  }
}

function handleTemperature(weatherData) {
  if (tempToggle.checked) {
    tempInfo.textContent = `${Math.round(weatherData.current.temp_f)} °F`;
    feelsLikeInfo.textContent = `${Math.round(
      weatherData.current.feelslike_f,
    )} °F`;
    for (let i = 0; i < 3; i += 1) {
      forecastTemps[i].textContent = `${Math.round(
        weatherData.forecast.forecastday[i].day.avgtemp_f,
      )} °F`;
    }
  } else {
    tempInfo.textContent = `${Math.round(weatherData.current.temp_c)} °C`;
    feelsLikeInfo.textContent = `${Math.round(
      weatherData.current.feelslike_c,
    )} °C`;
    for (let i = 0; i < 3; i += 1) {
      forecastTemps[i].textContent = `${Math.round(
        weatherData.forecast.forecastday[i].day.avgtemp_c,
      )} °C`;
    }
  }
}

function updateDom(weatherData) {
  const today = new Date(weatherData.location.localtime);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  locationInfo.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;

  date.textContent = `${returnDay(today.getDay())} ${today.getDate()} ${
    month[today.getMonth()]
  } ${today.getFullYear()} | ${extractTime(weatherData.location.localtime)}`;

  weatherIcon.src = weatherData.current.condition.icon;
  skyInfo.textContent = weatherData.current.condition.text;
  updateTime.textContent = extractTime(weatherData.current.last_updated);
  windInfo.textContent = `${weatherData.current.wind_kph} kph`;
  visibilityInfo.textContent = `${weatherData.current.vis_km} km`;
  sunriseInfo.textContent = weatherData.forecast.forecastday[0].astro.sunrise;
  humidityInfo.textContent = `${weatherData.current.humidity}%`;
  cloudInfo.textContent = `${weatherData.current.cloud}%`;
  rainInfo.textContent = `${
    weatherData.forecast.forecastday[0].hour[today.getHours()].chance_of_rain
  }%`;
  sunsetInfo.textContent = weatherData.forecast.forecastday[0].astro.sunset;
  handleUvData(uvInfo, weatherData.current.uv);
  moonInfo.textContent = weatherData.forecast.forecastday[0].astro.moon_phase;
  day2.textContent = `${returnDay(today.getDay() + 1)}`;
  day3.textContent = `${returnDay(today.getDay() + 2)}`;

  for (let i = 0; i < 3; i += 1) {
    forecastIcons[i].src =
      weatherData.forecast.forecastday[i].day.condition.icon;
    rainForecasts[
      i
    ].textContent = `${weatherData.forecast.forecastday[i].day.daily_chance_of_rain}%`;
    handleUvData(uvForecasts[i], weatherData.forecast.forecastday[i].day.uv);
  }
  handleTemperature(weatherData);
}

async function handleWeatherData() {
  try {
    const weatherData = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__["default"])(place);
    updateDom(weatherData);
  } catch (error) {
    console.error("Error:", error);
  }
}

function handleSearch() {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    place = searchBar.value;
    handleWeatherData();
  });
}

function handleTempToggle() {
  tempToggle.addEventListener("change", (e) => {
    if (tempToggle.checked) {
      handleWeatherData();
    } else {
      handleWeatherData();
    }
  });
}

function domHandler() {
  handleWeatherData();
  handleSearch();
  handleTempToggle();
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



(0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/weatherData.js":
/*!****************************!*\
  !*** ./src/weatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requestCurrentData)
/* harmony export */ });
// async function for requesting data to the api
async function requestCurrentData(location) {
  const API_KEY = "6af34468f7a04780b5c60908232408";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const weatherData = await response.json();
    return weatherData; // Return the data
  } catch (error) {
    console.log(error);
    throw error;
  }
}


/***/ }),

/***/ "./src/assets/fonts/Nunito-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Nunito-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/Nunito-VariableFont_wght.ttf";

/***/ }),

/***/ "./src/assets/fonts/hand.ttf":
/*!***********************************!*\
  !*** ./src/assets/fonts/hand.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/hand.ttf";

/***/ }),

/***/ "./src/assets/fonts/logo.ttf":
/*!***********************************!*\
  !*** ./src/assets/fonts/logo.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/logo.ttf";

/***/ }),

/***/ "./src/assets/fonts/sideBar.ttf":
/*!**************************************!*\
  !*** ./src/assets/fonts/sideBar.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/sideBar.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDRDQUE0QyxtS0FBOEQ7QUFDMUcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsMEJBQTBCLElBQUksNkJBQTZCOztBQUUzRix3QkFBd0IsMkJBQTJCLEVBQUUsaUJBQWlCO0FBQ3RFO0FBQ0EsSUFBSSxFQUFFLHFCQUFxQixJQUFJLDRDQUE0Qzs7QUFFM0U7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRCxrQ0FBa0MsNEJBQTRCO0FBQzlEO0FBQ0EsZ0NBQWdDLDZCQUE2QjtBQUM3RCw2QkFBNkIsMEJBQTBCO0FBQ3ZEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhCQUE4QjtBQUN0RCx3QkFBd0IsOEJBQThCOztBQUV0RCxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2REFBNkQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qix3REFBa0I7QUFDaEQ7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9OcUI7QUFDVTs7QUFFL0IsZ0RBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ0hWO0FBQ2U7QUFDZjtBQUNBLGdFQUFnRSxRQUFRLEtBQUssU0FBUzs7QUFFdEY7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvbG9nby50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9oYW5kLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL3NpZGVCYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvTnVuaXRvLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBsb2dvRm9udDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogaGFuZEZvbnQ7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHNpZGVCYXJGb250O1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbjpyb290IHtcbiAgLS1ibHVlOiAjMTg0Zjc3O1xuICAtLWxpZ2h0LWJsdWU6ICMxNzhiYWQ7XG4gIC0tZGFyay1ibHVlOiAjMGUyZDQ0O1xuICAtLWJhY2tncm91bmQ6ICMxNzhiYWQ7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG4gIC0tdHJhbnNwYXJlbnQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgLS13YXJuaW5nLWxvdzogIzdlYjM1NjtcbiAgLS13YXJuaW5nLW1vZGVyYXRlOiAjZjljNzRmO1xuICAtLXdhcm5pbmctaGlnaDogI2VkODYwNztcbiAgLS13YXJuaW5nLXZlcnloaWdoOiAjZjk0MTQ0O1xufVxuaHRtbCxcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLWJsdWUpKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tYmx1ZSkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tYmx1ZSkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMTA1dmg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xufVxuXG4ubmF2LWJhciB7XG4gIHBhZGRpbmc6IDEuN3JlbSAzLjVyZW0gMS43cmVtIDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxvZ28ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogYm9keUZvbnQ7XG59XG5cbi5sb2dvID4gYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nbyBzdmcge1xuICB3aWR0aDogM3JlbTtcbiAgZmlsbDogdmFyKC0td2hpdGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9nby10eHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogYm9keUZvbnQ7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDIuOHJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHdpZHRoOiAyMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgcGFkZGluZzogMC41cmVtIDMuMzJyZW0gMC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5zZWFyY2gtYmFyOmFjdGl2ZSxcbi5zZWFyY2gtYmFyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uc2VhcmNoLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDMuM3JlbTtcbiAgdG9wOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIGhlaWdodDogMi4zcmVtO1xuICB3aWR0aDogM3JlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNlYXJjaC1idG4gPiBzdmcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxLjlyZW07XG4gIGZpbGw6IHZhcigtLXdoaXRlKTtcbn1cblxuLnRlbXAtdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uY2Vsc2l1cyxcbi5mYWhyZW5oZWl0IHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmN1cnJlbnQtZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubG9jYXRpb24taGVybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUpO1xufVxuXG4ud2VhdGhlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbn1cbi53ZWF0aGVyLWluZm8tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50ZW1wLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGVtcC1pbmZvIGltZyB7XG4gIHdpZHRoOiA2cmVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnRlbXBlcmF0dXJlIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNreS1pbmZvIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mZWVscy1saWtlLFxuLnVwZGF0ZS10aW1lIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi53ZWF0aGVyLWluZm8tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNyZW07XG59XG5cbi5pbmZvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMi41cmVtO1xufVxuXG4uaW5mby1oZWFkZXIge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcbn1cblxuLmluZm8ge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uaW5mbyA+IGltZyB7XG4gIHdpZHRoOiAycmVtO1xufVxuXG4udXYgPiAuaW5mbyxcbi51di1mb3JlY2FzdC1kYXRhIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xufVxuXG4ucmFpbi1jaGFuY2UgaW1nIHtcbiAgd2lkdGg6IDEuNXJlbTtcbn1cblxuLnN1bnNldCBpbWcsXG4uc3VucmlzZSBpbWcge1xuICB3aWR0aDogMi41cmVtO1xufVxuXG4uZm9yZWNhc3QtZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS4ycmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9yZWNhc3QtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4td2lkdGg6IDMwcmVtO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG50ciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG59XG5cbnRyOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxudGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLmZvcmVjYXN0LWluZm8gaW1nIHtcbiAgd2lkdGg6IDNyZW07XG59XG5cbnRkIGltZyB7XG4gIHdpZHRoOiAxLjJyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5mb3JlY2FzdC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5mb3JlY2FzdC1kYXkge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctbG93KTtcbn1cblxuLm1vZGVyYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZy1tb2RlcmF0ZSk7XG59XG5cbi5oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZy1oaWdoKTtcbn1cblxuLnZlcnktaGlnaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctdmVyeWhpZ2gpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBbUM7QUFDckM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUF1RDtBQUN6RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLHdFQUF3RTtFQUN4RSxxRUFBcUU7RUFDckUs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QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbG9nb0ZvbnQ7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvbG9nby50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogaGFuZEZvbnQ7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvaGFuZC50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc2lkZUJhckZvbnQ7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvc2lkZUJhci50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYm9keUZvbnQ7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvTnVuaXRvLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJsdWU6ICMxODRmNzc7XFxuICAtLWxpZ2h0LWJsdWU6ICMxNzhiYWQ7XFxuICAtLWRhcmstYmx1ZTogIzBlMmQ0NDtcXG4gIC0tYmFja2dyb3VuZDogIzE3OGJhZDtcXG4gIC0td2hpdGU6ICNmZmZmZmY7XFxuICAtLXRyYW5zcGFyZW50LXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAtLXdhcm5pbmctbG93OiAjN2ViMzU2O1xcbiAgLS13YXJuaW5nLW1vZGVyYXRlOiAjZjljNzRmO1xcbiAgLS13YXJuaW5nLWhpZ2g6ICNlZDg2MDc7XFxuICAtLXdhcm5pbmctdmVyeWhpZ2g6ICNmOTQxNDQ7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1ibHVlKSk7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1ibHVlKSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tYmx1ZSkpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgaGVpZ2h0OiAxMDV2aDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogYm9keUZvbnQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgcGFkZGluZzogMS43cmVtIDMuNXJlbSAxLjdyZW0gM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IGJvZHlGb250O1xcbn1cXG5cXG4ubG9nbyA+IGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxvZ28gc3ZnIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZmlsbDogdmFyKC0td2hpdGUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5sb2dvLXR4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogYm9keUZvbnQ7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIG1hcmdpbi1sZWZ0OiAyLjhyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiAyMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAzLjMycmVtIDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5zZWFyY2gtYmFyOmFjdGl2ZSxcXG4uc2VhcmNoLWJhcjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnNlYXJjaC1idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcmlnaHQ6IDMuM3JlbTtcXG4gIHRvcDogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBoZWlnaHQ6IDIuM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biA+IHN2ZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMS45cmVtO1xcbiAgZmlsbDogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4udGVtcC10b2dnbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5jZWxzaXVzLFxcbi5mYWhyZW5oZWl0IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmN1cnJlbnQtZGF0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmxvY2F0aW9uLWhlcm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XFxufVxcblxcbi53ZWF0aGVyLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuLndlYXRoZXItaW5mby1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGVtcC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGVtcC1pbmZvIGltZyB7XFxuICB3aWR0aDogNnJlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLm1vcmUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5za3ktaW5mbyB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5mZWVscy1saWtlLFxcbi51cGRhdGUtdGltZSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLmluZm8taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XFxufVxcblxcbi5pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5pbmZvID4gaW1nIHtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4udXYgPiAuaW5mbyxcXG4udXYtZm9yZWNhc3QtZGF0YSB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLnJhaW4tY2hhbmNlIGltZyB7XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4uc3Vuc2V0IGltZyxcXG4uc3VucmlzZSBpbWcge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWRhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS4ycmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdC1oZWFkZXIge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1pbi13aWR0aDogMzByZW07XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG50ciB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbn1cXG5cXG50cjpudGgtbGFzdC1jaGlsZCgxKSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG50ZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5mb3JlY2FzdC1pbmZvIGltZyB7XFxuICB3aWR0aDogM3JlbTtcXG59XFxuXFxudGQgaW1nIHtcXG4gIHdpZHRoOiAxLjJyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZm9yZWNhc3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4ubG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctbG93KTtcXG59XFxuXFxuLm1vZGVyYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctbW9kZXJhdGUpO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nLWhpZ2gpO1xcbn1cXG5cXG4udmVyeS1oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctdmVyeWhpZ2gpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCByZXF1ZXN0Q3VycmVudERhdGEgZnJvbSBcIi4vd2VhdGhlckRhdGFcIjtcblxuLy8gRGVmYXVsdCBwbGFjZSBvbiBsb2FkXG5sZXQgcGxhY2UgPSBcIkthdGhtYW5kdVwiO1xuXG4vLyBET00gRWxlbWVudHNcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJhclwiKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJ0blwiKTtcbmNvbnN0IHRlbXBUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtY2hlY2tib3hcIik7XG5jb25zdCB0b2dnbGVTZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtdG9nZ2xlXCIpO1xuY29uc3QgbG9jYXRpb25JbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG5jb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1pY29uXCIpO1xuY29uc3QgdGVtcEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpO1xuY29uc3Qgc2t5SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2t5LWluZm9cIik7XG5jb25zdCBmZWVsc0xpa2VJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVscy1saWtlLWRhdGFcIik7XG5jb25zdCB1cGRhdGVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGRhdGUtdGltZS1kYXRhXCIpO1xuY29uc3Qgd2luZEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtZGF0YVwiKTtcbmNvbnN0IHZpc2liaWxpdHlJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNpYmlsaXR5LWRhdGFcIik7XG5jb25zdCBzdW5yaXNlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VucmlzZS1kYXRhXCIpO1xuY29uc3QgaHVtaWRpdHlJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eS1kYXRhXCIpO1xuY29uc3QgY2xvdWRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG91ZC1kYXRhXCIpO1xuY29uc3Qgc3Vuc2V0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Vuc2V0LWRhdGFcIik7XG5jb25zdCB1dkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnV2LWRhdGFcIik7XG5jb25zdCByYWluSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFpbi1kYXRhXCIpO1xuY29uc3QgbW9vbkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vb24tZGF0YVwiKTtcbmNvbnN0IGRheTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheTFcIik7XG5jb25zdCBkYXkyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXkyXCIpO1xuY29uc3QgZGF5MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5M1wiKTtcbmNvbnN0IGZvcmVjYXN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0LWljb25cIik7XG5jb25zdCBmb3JlY2FzdFRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdC10ZW1wXCIpO1xuY29uc3QgcmFpbkZvcmVjYXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFpbi1mb3JlY2FzdC1kYXRhXCIpO1xuY29uc3QgdXZGb3JlY2FzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnV2LWZvcmVjYXN0LWRhdGFcIik7XG5cbmZ1bmN0aW9uIHJldHVybkRheShkYXlWYWx1ZSkge1xuICBsZXQgZGF5O1xuICBzd2l0Y2ggKGRheVZhbHVlKSB7XG4gICAgY2FzZSAwOlxuICAgIGNhc2UgNzpcbiAgICAgIGRheSA9IFwiU3VuZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgY2FzZSA4OlxuICAgICAgZGF5ID0gXCJNb25kYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIGRheSA9IFwiVHVlc2RheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgZGF5ID0gXCJXZWRuZXNkYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIGRheSA9IFwiVGh1cnNkYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIGRheSA9IFwiRnJpZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDY6XG4gICAgICBkYXkgPSBcIlNhdHVyZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZGF5ID0gdW5kZWZpbmVkO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGRheTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdFRpbWUoZnVsbFRpbWUpIHtcbiAgY29uc3QgcGFydHMgPSBmdWxsVGltZS5zcGxpdChcIiBcIik7XG4gIGNvbnN0IHRpbWVQYXJ0ID0gcGFydHNbMV0uc3BsaXQoXCI6XCIpO1xuICBsZXQgaG91ciA9IHBhcnNlSW50KHRpbWVQYXJ0WzBdLCAxMCk7XG5cbiAgY29uc3QgYW1QbSA9IGhvdXIgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG5cbiAgaWYgKGhvdXIgPiAxMikge1xuICAgIGhvdXIgLT0gMTI7XG4gIH0gZWxzZSBpZiAoaG91ciA9PT0gMCkge1xuICAgIGhvdXIgPSAxMjtcbiAgfVxuXG4gIHJldHVybiBgJHtob3VyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfToke3RpbWVQYXJ0WzFdfSAke2FtUG19YDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVXZEYXRhKGVsZW1lbnROb2RlLCBkYXRhKSB7XG4gIGxldCB1dkNvbmRpdGlvbjtcbiAgY29uc3QgdXZJbmRleCA9IGVsZW1lbnROb2RlO1xuICBlbGVtZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwibG93XCIsIFwibW9kZXJhdGVcIiwgXCJoaWdoXCIsIFwidmVyeS1oaWdoXCIpO1xuICBpZiAoZGF0YSA8PSAyKSB7XG4gICAgdXZDb25kaXRpb24gPSBcIkxvd1wiO1xuICB9IGVsc2UgaWYgKGRhdGEgPiAyICYmIGRhdGEgPD0gNSkge1xuICAgIHV2Q29uZGl0aW9uID0gXCJNb2RlcmF0ZVwiO1xuICB9IGVsc2UgaWYgKGRhdGEgPiA1ICYmIGRhdGEgPD0gNykge1xuICAgIHV2Q29uZGl0aW9uID0gXCJIaWdoXCI7XG4gIH0gZWxzZSB7XG4gICAgdXZDb25kaXRpb24gPSBcIlZlcnkgSGlnaFwiO1xuICB9XG5cbiAgdXZJbmRleC50ZXh0Q29udGVudCA9IHV2Q29uZGl0aW9uO1xuXG4gIHN3aXRjaCAodXZDb25kaXRpb24pIHtcbiAgICBjYXNlIFwiTG93XCI6XG4gICAgICBlbGVtZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIk1vZGVyYXRlXCI6XG4gICAgICBlbGVtZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwibW9kZXJhdGVcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiSGlnaFwiOlxuICAgICAgZWxlbWVudE5vZGUuY2xhc3NMaXN0LmFkZChcImhpZ2hcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiVmVyeSBIaWdoXCI6XG4gICAgICBlbGVtZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwidmVyeS1oaWdoXCIpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW1lbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGVtcGVyYXR1cmUod2VhdGhlckRhdGEpIHtcbiAgaWYgKHRlbXBUb2dnbGUuY2hlY2tlZCkge1xuICAgIHRlbXBJbmZvLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZil9IMKwRmA7XG4gICAgZmVlbHNMaWtlSW5mby50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICl9IMKwRmA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGZvcmVjYXN0VGVtcHNbaV0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9mLFxuICAgICAgKX0gwrBGYDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGVtcEluZm8udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jKX0gwrBDYDtcbiAgICBmZWVsc0xpa2VJbmZvLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgKX0gwrBDYDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgZm9yZWNhc3RUZW1wc1tpXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5hdmd0ZW1wX2MsXG4gICAgICApfSDCsENgO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVEb20od2VhdGhlckRhdGEpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuICBjb25zdCBtb250aCA9IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdO1xuXG4gIGxvY2F0aW9uSW5mby50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9LCAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcblxuICBkYXRlLnRleHRDb250ZW50ID0gYCR7cmV0dXJuRGF5KHRvZGF5LmdldERheSgpKX0gJHt0b2RheS5nZXREYXRlKCl9ICR7XG4gICAgbW9udGhbdG9kYXkuZ2V0TW9udGgoKV1cbiAgfSAke3RvZGF5LmdldEZ1bGxZZWFyKCl9IHwgJHtleHRyYWN0VGltZSh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpfWA7XG5cbiAgd2VhdGhlckljb24uc3JjID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgc2t5SW5mby50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIHVwZGF0ZVRpbWUudGV4dENvbnRlbnQgPSBleHRyYWN0VGltZSh3ZWF0aGVyRGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZCk7XG4gIHdpbmRJbmZvLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaH0ga3BoYDtcbiAgdmlzaWJpbGl0eUluZm8udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnZpc19rbX0ga21gO1xuICBzdW5yaXNlSW5mby50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2U7XG4gIGh1bWlkaXR5SW5mby50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gIGNsb3VkSW5mby50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnQuY2xvdWR9JWA7XG4gIHJhaW5JbmZvLnRleHRDb250ZW50ID0gYCR7XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91clt0b2RheS5nZXRIb3VycygpXS5jaGFuY2Vfb2ZfcmFpblxuICB9JWA7XG4gIHN1bnNldEluZm8udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXQ7XG4gIGhhbmRsZVV2RGF0YSh1dkluZm8sIHdlYXRoZXJEYXRhLmN1cnJlbnQudXYpO1xuICBtb29uSW5mby50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLm1vb25fcGhhc2U7XG4gIGRheTIudGV4dENvbnRlbnQgPSBgJHtyZXR1cm5EYXkodG9kYXkuZ2V0RGF5KCkgKyAxKX1gO1xuICBkYXkzLnRleHRDb250ZW50ID0gYCR7cmV0dXJuRGF5KHRvZGF5LmdldERheSgpICsgMil9YDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgIGZvcmVjYXN0SWNvbnNbaV0uc3JjID1cbiAgICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICByYWluRm9yZWNhc3RzW1xuICAgICAgaVxuICAgIF0udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWA7XG4gICAgaGFuZGxlVXZEYXRhKHV2Rm9yZWNhc3RzW2ldLCB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkudXYpO1xuICB9XG4gIGhhbmRsZVRlbXBlcmF0dXJlKHdlYXRoZXJEYXRhKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlV2VhdGhlckRhdGEoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXF1ZXN0Q3VycmVudERhdGEocGxhY2UpO1xuICAgIHVwZGF0ZURvbSh3ZWF0aGVyRGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBsYWNlID0gc2VhcmNoQmFyLnZhbHVlO1xuICAgIGhhbmRsZVdlYXRoZXJEYXRhKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUZW1wVG9nZ2xlKCkge1xuICB0ZW1wVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBpZiAodGVtcFRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICBoYW5kbGVXZWF0aGVyRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVXZWF0aGVyRGF0YSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvbUhhbmRsZXIoKSB7XG4gIGhhbmRsZVdlYXRoZXJEYXRhKCk7XG4gIGhhbmRsZVNlYXJjaCgpO1xuICBoYW5kbGVUZW1wVG9nZ2xlKCk7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGRvbUhhbmRsZXIgZnJvbSBcIi4vZG9tXCI7XG5cbmRvbUhhbmRsZXIoKTtcbiIsIi8vIGFzeW5jIGZ1bmN0aW9uIGZvciByZXF1ZXN0aW5nIGRhdGEgdG8gdGhlIGFwaVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEN1cnJlbnREYXRhKGxvY2F0aW9uKSB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcIjZhZjM0NDY4ZjdhMDQ3ODBiNWM2MDkwODIzMjQwOFwiO1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zYDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7IC8vIFJldHVybiB0aGUgZGF0YVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9