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

.forecast-data-container {
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

.loading svg {
  width: 5rem;
  position: relative;
  top: -5rem;
}

.error-msg {
  font-size: 1.5rem;
  color: var(--white);
  background-color: var(--dark-blue);
  padding-left: 1rem;
  padding-right: 1rem;
  width: fit-content;
  border-radius: 5rem;
}

.error-section {
  display: flex;
  justify-content: center;
}

.hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: logoFont;\n  src: url(\"./assets/fonts/logo.ttf\");\n}\n\n@font-face {\n  font-family: handFont;\n  src: url(\"./assets/fonts/hand.ttf\");\n}\n\n@font-face {\n  font-family: sideBarFont;\n  src: url(\"./assets/fonts/sideBar.ttf\");\n}\n\n@font-face {\n  font-family: bodyFont;\n  src: url(\"./assets/fonts/Nunito-VariableFont_wght.ttf\");\n}\n\n:root {\n  --blue: #184f77;\n  --light-blue: #178bad;\n  --dark-blue: #0e2d44;\n  --background: #178bad;\n  --white: #ffffff;\n  --transparent-white: rgba(255, 255, 255, 0.5);\n  --warning-low: #7eb356;\n  --warning-moderate: #f9c74f;\n  --warning-high: #ed8607;\n  --warning-veryhigh: #f94144;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--blue);\n  background: var(--blue);\n  background: -webkit-linear-gradient(top, var(--light-blue), var(--blue));\n  background: -moz-linear-gradient(top, var(--light-blue), var(--blue));\n  background: linear-gradient(to bottom, var(--light-blue), var(--blue));\n  font-size: 16px;\n  height: 105vh;\n  box-sizing: border-box;\n  font-family: bodyFont;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.nav-bar {\n  padding: 1.7rem 3.5rem 1.7rem 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.logo {\n  align-items: center;\n  font-family: bodyFont;\n}\n\n.logo > a {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: var(--white);\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n.logo svg {\n  width: 3rem;\n  fill: var(--white);\n  display: flex;\n  vertical-align: middle;\n}\n\n.logo-txt {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: bodyFont;\n}\n\n.search-bar {\n  margin-left: 2.8rem;\n  height: 2.5rem;\n  width: 22rem;\n  border: none;\n  border-radius: 20px;\n  font-size: 1.3rem;\n  padding: 0.5rem 3.32rem 0.5rem 1rem;\n  background-color: var(--dark-blue);\n  color: var(--white);\n}\n\n.search-bar:active,\n.search-bar:focus {\n  outline: none;\n  border: 2px solid white;\n  border-color: var(--white);\n}\n\n.search-btn {\n  position: relative;\n  right: 3.3rem;\n  top: 0.5rem;\n  border-radius: 0px 20px 20px 0px;\n  padding-right: 0.5rem;\n  height: 2.3rem;\n  width: 3rem;\n  outline: none;\n  background-color: transparent;\n  border: none;\n}\n\n.search-btn > svg {\n  height: auto;\n  width: 1.9rem;\n  fill: var(--white);\n}\n\n.temp-toggle {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.celsius,\n.fahrenheit {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--white);\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--dark-blue);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: var(--transparent-white);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px var(--transparent-white);\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.current-data {\n  display: flex;\n  gap: 1.5rem;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  color: var(--white);\n  user-select: none;\n}\n\n.location-hero {\n  display: flex;\n  flex-direction: column;\n}\n\n.location {\n  font-size: 2.5rem;\n  font-weight: 700;\n}\n\n.date {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--transparent-white);\n}\n\n.weather-info {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n}\n.weather-info-left {\n  display: flex;\n  flex-direction: column;\n}\n\n.temp-info {\n  display: flex;\n  align-items: center;\n}\n\n.temp-info img {\n  width: 6rem;\n  pointer-events: none;\n}\n\n.temperature {\n  font-size: 4rem;\n  font-weight: 800;\n}\n\n.more-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.sky-info {\n  font-size: 1.7rem;\n  font-weight: 700;\n}\n\n.feels-like,\n.update-time {\n  font-size: 1.3rem;\n  color: var(--transparent-white);\n  font-weight: 700;\n}\n\n.weather-info-right {\n  display: flex;\n  gap: 3rem;\n}\n\n.info-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2.5rem;\n}\n\n.info-header {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--transparent-white);\n}\n\n.info {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.info > img {\n  width: 2rem;\n}\n\n.uv > .info,\n.uv-forecast-data {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-radius: 5rem;\n}\n\n.rain-chance img {\n  width: 1.5rem;\n}\n\n.sunset img,\n.sunrise img {\n  width: 2.5rem;\n}\n\n.forecast-data-container {\n  display: flex;\n  gap: 1.2rem;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast-header {\n  padding-top: 2rem;\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: var(--white);\n}\n\ntable {\n  border-collapse: collapse;\n  letter-spacing: 1px;\n  font-size: 1.3rem;\n  font-weight: 600;\n  min-width: 30rem;\n  color: var(--white);\n}\n\ntr {\n  border-bottom: 2px solid var(--white);\n}\n\ntr:nth-last-child(1) {\n  border-bottom: none;\n}\n\ntd {\n  text-align: center;\n  padding: 1.5rem;\n}\n\n.forecast-info img {\n  width: 3rem;\n}\n\ntd img {\n  width: 1.2rem;\n  vertical-align: middle;\n}\n\n.forecast-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.forecast-day {\n  font-size: 1.6rem;\n}\n\n.low {\n  background-color: var(--warning-low);\n}\n\n.moderate {\n  background-color: var(--warning-moderate);\n}\n\n.high {\n  background-color: var(--warning-high);\n}\n\n.very-high {\n  background-color: var(--warning-veryhigh);\n}\n\n.loading svg {\n  width: 5rem;\n  position: relative;\n  top: -5rem;\n}\n\n.error-msg {\n  font-size: 1.5rem;\n  color: var(--white);\n  background-color: var(--dark-blue);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: fit-content;\n  border-radius: 5rem;\n}\n\n.error-section {\n  display: flex;\n  justify-content: center;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
const loading = document.querySelector(".loading");
const errorSection = document.querySelector(".error-section");
const errorMsg = document.querySelector(".error-msg");
const currentContainer = document.querySelector(".current-data");
const forecastContainer = document.querySelector(".forecast-data-container");
const tempToggle = document.querySelector(".temp-checkbox");
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
    currentContainer.classList.add("hidden");
    forecastContainer.classList.add("hidden");
    loading.classList.remove("hidden");
    errorSection.classList.add("hidden");
    const weatherData = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__["default"])(place);
    updateDom(weatherData);
    loading.classList.add("hidden");
    currentContainer.classList.remove("hidden");
    forecastContainer.classList.remove("hidden");
  } catch (error) {
    loading.classList.add("hidden");
    errorSection.classList.remove("hidden");
    errorMsg.textContent = error.message;
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
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3`;

  const response = await fetch(url, { mode: "cors" });
  if (!response.ok) {
    if (response.status === 400) {
      throw new Error("No such location found !");
    }
  }

  const weatherData = await response.json();
  return weatherData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDRDQUE0QyxtS0FBOEQ7QUFDMUcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFh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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzT3FCO0FBQ1U7O0FBRS9CLGdEQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNIVjtBQUNlO0FBQ2Y7QUFDQSxpRUFBaUUsUUFBUSxLQUFLLFNBQVM7O0FBRXZGLHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvbG9nby50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9oYW5kLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL3NpZGVCYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvTnVuaXRvLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBsb2dvRm9udDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogaGFuZEZvbnQ7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHNpZGVCYXJGb250O1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbjpyb290IHtcbiAgLS1ibHVlOiAjMTg0Zjc3O1xuICAtLWxpZ2h0LWJsdWU6ICMxNzhiYWQ7XG4gIC0tZGFyay1ibHVlOiAjMGUyZDQ0O1xuICAtLWJhY2tncm91bmQ6ICMxNzhiYWQ7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG4gIC0tdHJhbnNwYXJlbnQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgLS13YXJuaW5nLWxvdzogIzdlYjM1NjtcbiAgLS13YXJuaW5nLW1vZGVyYXRlOiAjZjljNzRmO1xuICAtLXdhcm5pbmctaGlnaDogI2VkODYwNztcbiAgLS13YXJuaW5nLXZlcnloaWdoOiAjZjk0MTQ0O1xufVxuaHRtbCxcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLWJsdWUpKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tYmx1ZSkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tYmx1ZSkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMTA1dmg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xufVxuXG4ubmF2LWJhciB7XG4gIHBhZGRpbmc6IDEuN3JlbSAzLjVyZW0gMS43cmVtIDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxvZ28ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogYm9keUZvbnQ7XG59XG5cbi5sb2dvID4gYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nbyBzdmcge1xuICB3aWR0aDogM3JlbTtcbiAgZmlsbDogdmFyKC0td2hpdGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9nby10eHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogYm9keUZvbnQ7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDIuOHJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHdpZHRoOiAyMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgcGFkZGluZzogMC41cmVtIDMuMzJyZW0gMC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5zZWFyY2gtYmFyOmFjdGl2ZSxcbi5zZWFyY2gtYmFyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uc2VhcmNoLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDMuM3JlbTtcbiAgdG9wOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIGhlaWdodDogMi4zcmVtO1xuICB3aWR0aDogM3JlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNlYXJjaC1idG4gPiBzdmcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxLjlyZW07XG4gIGZpbGw6IHZhcigtLXdoaXRlKTtcbn1cblxuLnRlbXAtdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uY2Vsc2l1cyxcbi5mYWhyZW5oZWl0IHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmN1cnJlbnQtZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubG9jYXRpb24taGVybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUpO1xufVxuXG4ud2VhdGhlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbn1cbi53ZWF0aGVyLWluZm8tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50ZW1wLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGVtcC1pbmZvIGltZyB7XG4gIHdpZHRoOiA2cmVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnRlbXBlcmF0dXJlIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNreS1pbmZvIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mZWVscy1saWtlLFxuLnVwZGF0ZS10aW1lIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi53ZWF0aGVyLWluZm8tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNyZW07XG59XG5cbi5pbmZvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMi41cmVtO1xufVxuXG4uaW5mby1oZWFkZXIge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcbn1cblxuLmluZm8ge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uaW5mbyA+IGltZyB7XG4gIHdpZHRoOiAycmVtO1xufVxuXG4udXYgPiAuaW5mbyxcbi51di1mb3JlY2FzdC1kYXRhIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xufVxuXG4ucmFpbi1jaGFuY2UgaW1nIHtcbiAgd2lkdGg6IDEuNXJlbTtcbn1cblxuLnN1bnNldCBpbWcsXG4uc3VucmlzZSBpbWcge1xuICB3aWR0aDogMi41cmVtO1xufVxuXG4uZm9yZWNhc3QtZGF0YS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuMnJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcmVjYXN0LWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLXdpZHRoOiAzMHJlbTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxudHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xufVxuXG50cjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5mb3JlY2FzdC1pbmZvIGltZyB7XG4gIHdpZHRoOiAzcmVtO1xufVxuXG50ZCBpbWcge1xuICB3aWR0aDogMS4ycmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZm9yZWNhc3QtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uZm9yZWNhc3QtZGF5IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5sb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nLWxvdyk7XG59XG5cbi5tb2RlcmF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctbW9kZXJhdGUpO1xufVxuXG4uaGlnaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctaGlnaCk7XG59XG5cbi52ZXJ5LWhpZ2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nLXZlcnloaWdoKTtcbn1cblxuLmxvYWRpbmcgc3ZnIHtcbiAgd2lkdGg6IDVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNXJlbTtcbn1cblxuLmVycm9yLW1zZyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbn1cblxuLmVycm9yLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQW1DO0FBQ3JDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiw2Q0FBNkM7RUFDN0Msc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCO0FBQ0E7O0VBRUUsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsd0VBQXdFO0VBQ3hFLHFFQUFxRTtFQUNyRSxzRUFBc0U7RUFDdEUsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNu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Q3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBsb2dvRm9udDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9sb2dvLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBoYW5kRm9udDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9oYW5kLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzaWRlQmFyRm9udDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9zaWRlQmFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9OdW5pdG8tVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmx1ZTogIzE4NGY3NztcXG4gIC0tbGlnaHQtYmx1ZTogIzE3OGJhZDtcXG4gIC0tZGFyay1ibHVlOiAjMGUyZDQ0O1xcbiAgLS1iYWNrZ3JvdW5kOiAjMTc4YmFkO1xcbiAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gIC0tdHJhbnNwYXJlbnQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIC0td2FybmluZy1sb3c6ICM3ZWIzNTY7XFxuICAtLXdhcm5pbmctbW9kZXJhdGU6ICNmOWM3NGY7XFxuICAtLXdhcm5pbmctaGlnaDogI2VkODYwNztcXG4gIC0td2FybmluZy12ZXJ5aGlnaDogI2Y5NDE0NDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLWJsdWUpKTtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLWJsdWUpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1ibHVlKSk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBoZWlnaHQ6IDEwNXZoO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBwYWRkaW5nOiAxLjdyZW0gMy41cmVtIDEuN3JlbSAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sb2dvIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogYm9keUZvbnQ7XFxufVxcblxcbi5sb2dvID4gYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubG9nbyBzdmcge1xcbiAgd2lkdGg6IDNyZW07XFxuICBmaWxsOiB2YXIoLS13aGl0ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmxvZ28tdHh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcXG59XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgbWFyZ2luLWxlZnQ6IDIuOHJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IDIycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDMuMzJyZW0gMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnNlYXJjaC1iYXI6YWN0aXZlLFxcbi5zZWFyY2gtYmFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICByaWdodDogMy4zcmVtO1xcbiAgdG9wOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGhlaWdodDogMi4zcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtYnRuID4gc3ZnIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxLjlyZW07XFxuICBmaWxsOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50ZW1wLXRvZ2dsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNlbHNpdXMsXFxuLmZhaHJlbmhlaXQge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgd2lkdGg6IDI2cHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uY3VycmVudC1kYXRhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubG9jYXRpb24taGVybyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRhdGUge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcXG59XFxuXFxuLndlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG4ud2VhdGhlci1pbmZvLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50ZW1wLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZW1wLWluZm8gaW1nIHtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4ubW9yZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNreS1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmZlZWxzLWxpa2UsXFxuLnVwZGF0ZS10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi53ZWF0aGVyLWluZm8tcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuLmluZm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMi41cmVtO1xcbn1cXG5cXG4uaW5mby1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcXG59XFxuXFxuLmluZm8ge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmluZm8gPiBpbWcge1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi51diA+IC5pbmZvLFxcbi51di1mb3JlY2FzdC1kYXRhIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbn1cXG5cXG4ucmFpbi1jaGFuY2UgaW1nIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi5zdW5zZXQgaW1nLFxcbi5zdW5yaXNlIGltZyB7XFxuICB3aWR0aDogMi41cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF0YS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS4ycmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdC1oZWFkZXIge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1pbi13aWR0aDogMzByZW07XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG50ciB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbn1cXG5cXG50cjpudGgtbGFzdC1jaGlsZCgxKSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG50ZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5mb3JlY2FzdC1pbmZvIGltZyB7XFxuICB3aWR0aDogM3JlbTtcXG59XFxuXFxudGQgaW1nIHtcXG4gIHdpZHRoOiAxLjJyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZm9yZWNhc3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4ubG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctbG93KTtcXG59XFxuXFxuLm1vZGVyYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctbW9kZXJhdGUpO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nLWhpZ2gpO1xcbn1cXG5cXG4udmVyeS1oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctdmVyeWhpZ2gpO1xcbn1cXG5cXG4ubG9hZGluZyBzdmcge1xcbiAgd2lkdGg6IDVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC01cmVtO1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLmVycm9yLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHJlcXVlc3RDdXJyZW50RGF0YSBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xuXG4vLyBEZWZhdWx0IHBsYWNlIG9uIGxvYWRcbmxldCBwbGFjZSA9IFwiS2F0aG1hbmR1XCI7XG5cbi8vIERPTSBFbGVtZW50c1xuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYmFyXCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnRuXCIpO1xuY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZ1wiKTtcbmNvbnN0IGVycm9yU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3Itc2VjdGlvblwiKTtcbmNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvci1tc2dcIik7XG5jb25zdCBjdXJyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWRhdGFcIik7XG5jb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3QtZGF0YS1jb250YWluZXJcIik7XG5jb25zdCB0ZW1wVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWNoZWNrYm94XCIpO1xuY29uc3QgbG9jYXRpb25JbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG5jb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1pY29uXCIpO1xuY29uc3QgdGVtcEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpO1xuY29uc3Qgc2t5SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2t5LWluZm9cIik7XG5jb25zdCBmZWVsc0xpa2VJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVscy1saWtlLWRhdGFcIik7XG5jb25zdCB1cGRhdGVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGRhdGUtdGltZS1kYXRhXCIpO1xuY29uc3Qgd2luZEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtZGF0YVwiKTtcbmNvbnN0IHZpc2liaWxpdHlJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNpYmlsaXR5LWRhdGFcIik7XG5jb25zdCBzdW5yaXNlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VucmlzZS1kYXRhXCIpO1xuY29uc3QgaHVtaWRpdHlJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eS1kYXRhXCIpO1xuY29uc3QgY2xvdWRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG91ZC1kYXRhXCIpO1xuY29uc3Qgc3Vuc2V0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Vuc2V0LWRhdGFcIik7XG5jb25zdCB1dkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnV2LWRhdGFcIik7XG5jb25zdCByYWluSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFpbi1kYXRhXCIpO1xuY29uc3QgbW9vbkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vb24tZGF0YVwiKTtcbmNvbnN0IGRheTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheTJcIik7XG5jb25zdCBkYXkzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXkzXCIpO1xuY29uc3QgZm9yZWNhc3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QtaWNvblwiKTtcbmNvbnN0IGZvcmVjYXN0VGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0LXRlbXBcIik7XG5jb25zdCByYWluRm9yZWNhc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYWluLWZvcmVjYXN0LWRhdGFcIik7XG5jb25zdCB1dkZvcmVjYXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXYtZm9yZWNhc3QtZGF0YVwiKTtcblxuZnVuY3Rpb24gcmV0dXJuRGF5KGRheVZhbHVlKSB7XG4gIGxldCBkYXk7XG4gIHN3aXRjaCAoZGF5VmFsdWUpIHtcbiAgICBjYXNlIDA6XG4gICAgY2FzZSA3OlxuICAgICAgZGF5ID0gXCJTdW5kYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICBjYXNlIDg6XG4gICAgICBkYXkgPSBcIk1vbmRheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgZGF5ID0gXCJUdWVzZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBkYXkgPSBcIldlZG5lc2RheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgZGF5ID0gXCJUaHVyc2RheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1OlxuICAgICAgZGF5ID0gXCJGcmlkYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjpcbiAgICAgIGRheSA9IFwiU2F0dXJkYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBkYXkgPSB1bmRlZmluZWQ7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gZGF5O1xufVxuXG5mdW5jdGlvbiBleHRyYWN0VGltZShmdWxsVGltZSkge1xuICBjb25zdCBwYXJ0cyA9IGZ1bGxUaW1lLnNwbGl0KFwiIFwiKTtcbiAgY29uc3QgdGltZVBhcnQgPSBwYXJ0c1sxXS5zcGxpdChcIjpcIik7XG4gIGxldCBob3VyID0gcGFyc2VJbnQodGltZVBhcnRbMF0sIDEwKTtcblxuICBjb25zdCBhbVBtID0gaG91ciA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIjtcblxuICBpZiAoaG91ciA+IDEyKSB7XG4gICAgaG91ciAtPSAxMjtcbiAgfSBlbHNlIGlmIChob3VyID09PSAwKSB7XG4gICAgaG91ciA9IDEyO1xuICB9XG5cbiAgcmV0dXJuIGAke2hvdXIudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7dGltZVBhcnRbMV19ICR7YW1QbX1gO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVVdkRhdGEoZWxlbWVudE5vZGUsIGRhdGEpIHtcbiAgbGV0IHV2Q29uZGl0aW9uO1xuICBjb25zdCB1dkluZGV4ID0gZWxlbWVudE5vZGU7XG4gIGVsZW1lbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb3dcIiwgXCJtb2RlcmF0ZVwiLCBcImhpZ2hcIiwgXCJ2ZXJ5LWhpZ2hcIik7XG4gIGlmIChkYXRhIDw9IDIpIHtcbiAgICB1dkNvbmRpdGlvbiA9IFwiTG93XCI7XG4gIH0gZWxzZSBpZiAoZGF0YSA+IDIgJiYgZGF0YSA8PSA1KSB7XG4gICAgdXZDb25kaXRpb24gPSBcIk1vZGVyYXRlXCI7XG4gIH0gZWxzZSBpZiAoZGF0YSA+IDUgJiYgZGF0YSA8PSA3KSB7XG4gICAgdXZDb25kaXRpb24gPSBcIkhpZ2hcIjtcbiAgfSBlbHNlIHtcbiAgICB1dkNvbmRpdGlvbiA9IFwiVmVyeSBIaWdoXCI7XG4gIH1cblxuICB1dkluZGV4LnRleHRDb250ZW50ID0gdXZDb25kaXRpb247XG5cbiAgc3dpdGNoICh1dkNvbmRpdGlvbikge1xuICAgIGNhc2UgXCJMb3dcIjpcbiAgICAgIGVsZW1lbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJsb3dcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiTW9kZXJhdGVcIjpcbiAgICAgIGVsZW1lbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJtb2RlcmF0ZVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJIaWdoXCI6XG4gICAgICBlbGVtZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJWZXJ5IEhpZ2hcIjpcbiAgICAgIGVsZW1lbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ5LWhpZ2hcIik7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZWxlbWVudE5vZGUuY2xhc3NMaXN0LmFkZChcIlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUZW1wZXJhdHVyZSh3ZWF0aGVyRGF0YSkge1xuICBpZiAodGVtcFRvZ2dsZS5jaGVja2VkKSB7XG4gICAgdGVtcEluZm8udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mKX0gwrBGYDtcbiAgICBmZWVsc0xpa2VJbmZvLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gICAgKX0gwrBGYDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgZm9yZWNhc3RUZW1wc1tpXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5hdmd0ZW1wX2YsXG4gICAgICApfSDCsEZgO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0ZW1wSW5mby50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2MpfSDCsENgO1xuICAgIGZlZWxzTGlrZUluZm8udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICApfSDCsENgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBmb3JlY2FzdFRlbXBzW2ldLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfYyxcbiAgICAgICl9IMKwQ2A7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURvbSh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSk7XG4gIGNvbnN0IG1vbnRoID0gW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF07XG5cbiAgbG9jYXRpb25JbmZvLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubG9jYXRpb24ubmFtZX0sICR7d2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeX1gO1xuXG4gIGRhdGUudGV4dENvbnRlbnQgPSBgJHtyZXR1cm5EYXkodG9kYXkuZ2V0RGF5KCkpfSAke3RvZGF5LmdldERhdGUoKX0gJHtcbiAgICBtb250aFt0b2RheS5nZXRNb250aCgpXVxuICB9ICR7dG9kYXkuZ2V0RnVsbFllYXIoKX0gfCAke2V4dHJhY3RUaW1lKHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSl9YDtcblxuICB3ZWF0aGVySWNvbi5zcmMgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICBza3lJbmZvLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgdXBkYXRlVGltZS50ZXh0Q29udGVudCA9IGV4dHJhY3RUaW1lKHdlYXRoZXJEYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkKTtcbiAgd2luZEluZm8udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BofSBrcGhgO1xuICB2aXNpYmlsaXR5SW5mby50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnQudmlzX2ttfSBrbWA7XG4gIHN1bnJpc2VJbmZvLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcbiAgaHVtaWRpdHlJbmZvLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgY2xvdWRJbmZvLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudC5jbG91ZH0lYDtcbiAgcmFpbkluZm8udGV4dENvbnRlbnQgPSBgJHtcbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW3RvZGF5LmdldEhvdXJzKCldLmNoYW5jZV9vZl9yYWluXG4gIH0lYDtcbiAgc3Vuc2V0SW5mby50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldDtcbiAgaGFuZGxlVXZEYXRhKHV2SW5mbywgd2VhdGhlckRhdGEuY3VycmVudC51dik7XG4gIG1vb25JbmZvLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8ubW9vbl9waGFzZTtcbiAgZGF5Mi50ZXh0Q29udGVudCA9IGAke3JldHVybkRheSh0b2RheS5nZXREYXkoKSArIDEpfWA7XG4gIGRheTMudGV4dENvbnRlbnQgPSBgJHtyZXR1cm5EYXkodG9kYXkuZ2V0RGF5KCkgKyAyKX1gO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgZm9yZWNhc3RJY29uc1tpXS5zcmMgPVxuICAgICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIHJhaW5Gb3JlY2FzdHNbXG4gICAgICBpXG4gICAgXS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYDtcbiAgICBoYW5kbGVVdkRhdGEodXZGb3JlY2FzdHNbaV0sIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS51dik7XG4gIH1cbiAgaGFuZGxlVGVtcGVyYXR1cmUod2VhdGhlckRhdGEpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVXZWF0aGVyRGF0YSgpIHtcbiAgdHJ5IHtcbiAgICBjdXJyZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgZm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBsb2FkaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZXJyb3JTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXF1ZXN0Q3VycmVudERhdGEocGxhY2UpO1xuICAgIHVwZGF0ZURvbSh3ZWF0aGVyRGF0YSk7XG4gICAgbG9hZGluZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGN1cnJlbnRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBmb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvYWRpbmcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBlcnJvclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9IGVycm9yLm1lc3NhZ2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBsYWNlID0gc2VhcmNoQmFyLnZhbHVlO1xuICAgIGhhbmRsZVdlYXRoZXJEYXRhKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUZW1wVG9nZ2xlKCkge1xuICB0ZW1wVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBpZiAodGVtcFRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICBoYW5kbGVXZWF0aGVyRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVXZWF0aGVyRGF0YSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvbUhhbmRsZXIoKSB7XG4gIGhhbmRsZVdlYXRoZXJEYXRhKCk7XG4gIGhhbmRsZVNlYXJjaCgpO1xuICBoYW5kbGVUZW1wVG9nZ2xlKCk7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGRvbUhhbmRsZXIgZnJvbSBcIi4vZG9tXCI7XG5cbmRvbUhhbmRsZXIoKTtcbiIsIi8vIGFzeW5jIGZ1bmN0aW9uIGZvciByZXF1ZXN0aW5nIGRhdGEgdG8gdGhlIGFwaVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEN1cnJlbnREYXRhKGxvY2F0aW9uKSB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcIjZhZjM0NDY4ZjdhMDQ3ODBiNWM2MDkwODIzMjQwOFwiO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb259JmRheXM9M2A7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggbG9jYXRpb24gZm91bmQgIVwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9