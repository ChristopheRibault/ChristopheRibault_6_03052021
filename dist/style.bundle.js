/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.sass":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.sass ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n*:focus {\\n  outline: none;\\n}\\n*:focus-visible {\\n  outline: 4px solid #901c1c;\\n}\\n\\nbody {\\n  width: 90%;\\n  max-width: 1440px;\\n  margin: auto;\\n  margin-top: 20px;\\n  font-family: \\\"DM Sans\\\";\\n}\\n\\nul {\\n  list-style-type: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\n.sr-only {\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n}\\n\\n.page-logo {\\n  min-width: 160px;\\n  color: #901c1c;\\n  font-size: 2.5em;\\n  font-weight: 600;\\n}\\n@media (max-width: 700px) {\\n  .page-logo {\\n    align-self: flex-start;\\n    font-size: 2em;\\n  }\\n}\\n\\n.category-tag {\\n  background-color: #fff;\\n  border: 1px #c4c4c4 solid;\\n  border-radius: 12px;\\n  color: #901c1c;\\n  margin: 5px;\\n  overflow: hidden;\\n}\\n.category-tag__label {\\n  padding: 2px 3px;\\n  cursor: pointer;\\n}\\n.category-tag__label:hover, .category-tag__label:focus {\\n  background-color: #901c1c;\\n  color: #fff;\\n}\\n.category-tag__checkbox {\\n  display: none;\\n}\\n.category-tag__checkbox:checked + .category-tag__label {\\n  background-color: #901c1c;\\n  color: #fff;\\n}\\n\\n.avatar-img {\\n  height: 150px;\\n  width: 150px;\\n  border-radius: 50%;\\n  object-fit: cover;\\n}\\n\\n.photographer-card {\\n  width: 300px;\\n  margin-top: 30px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.photographer-card__link {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.photographer-card__name {\\n  margin: 5px 0;\\n}\\n.photographer-card__info {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.photographer-card__info p {\\n  margin: 0;\\n  font-size: 0.8em;\\n}\\n.photographer-card__tags {\\n  margin: 0;\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: center;\\n}\\n\\n.photographer-name {\\n  color: #d3573c;\\n  font-weight: 400;\\n  font-size: 2em;\\n}\\n\\n.photographer-place {\\n  color: #901c1c;\\n}\\n\\n.photographer-price {\\n  color: #757575;\\n}\\n\\n.btn {\\n  background-color: #901c1c;\\n  color: #fff;\\n  padding: 20px 10px;\\n  border: none;\\n  border-radius: 5px;\\n  font-weight: 900;\\n  cursor: pointer;\\n}\\n.btn:hover, .btn:focus {\\n  background-color: #d3573c;\\n  color: #000;\\n}\\n\\n.photo-card {\\n  margin: 20px;\\n  display: grid;\\n  grid-template-columns: 2fr 1fr;\\n  grid-template-rows: 250px 50px;\\n}\\n@media (max-width: 700px) {\\n  .photo-card {\\n    margin: 20px 0;\\n  }\\n}\\n.photo-card__img {\\n  width: 300px;\\n  max-width: 100%;\\n  height: 250px;\\n  object-fit: cover;\\n  border-radius: 5px;\\n  grid-column: 1/span 2;\\n  cursor: pointer;\\n}\\n.photo-card__title {\\n  margin: 0;\\n  color: #901c1c;\\n  font-size: 1em;\\n  align-self: center;\\n  justify-self: left;\\n}\\n.photo-card__likes {\\n  display: flex;\\n  align-items: center;\\n  color: #901c1c;\\n  font-size: 0.8em;\\n  align-self: center;\\n  justify-self: right;\\n  cursor: pointer;\\n}\\n.photo-card__likes > img {\\n  transform: scale(0.7);\\n}\\n\\n.likes-tab {\\n  position: fixed;\\n  bottom: 0;\\n  right: 50px;\\n  background-color: #d3573c;\\n  color: #000;\\n  padding: 0.8em;\\n  border-radius: 5px 5px 0 0;\\n  font-size: 0.8em;\\n  font-weight: 900;\\n  display: flex;\\n  align-items: center;\\n}\\n.likes-tab__icon {\\n  margin-left: 5px;\\n  transform: scale(0.6);\\n}\\n.likes-tab__price {\\n  margin-left: 40px;\\n}\\n@media (max-width: 820px) {\\n  .likes-tab {\\n    display: none;\\n  }\\n}\\n\\n.listbox-area {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  align-items: baseline;\\n}\\n.listbox-area * :focus-visible {\\n  outline: 4px solid #d3573c;\\n}\\n\\n#exp_elem {\\n  font-weight: 900;\\n  margin-right: 1em;\\n}\\n\\n.exp_wrapper {\\n  position: relative;\\n  min-width: 120px;\\n}\\n.exp_wrapper > * {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n}\\n\\n#exp_button {\\n  text-align: left;\\n  font-size: 0.8em;\\n  background-color: #901c1c;\\n  color: #fff;\\n  font-weight: 900;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 1em;\\n  cursor: pointer;\\n  font-family: \\\"DM Sans\\\";\\n  position: relative;\\n}\\n#exp_button::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 1em;\\n  right: 1em;\\n  height: 10px;\\n  width: 10px;\\n  border-right: 2px solid #fff;\\n  border-bottom: 2px solid #fff;\\n  margin-left: 2em;\\n  transform: rotate(45deg);\\n}\\n\\n#exp_elem_list {\\n  background-color: #901c1c;\\n  color: #fff;\\n  border-radius: 5px;\\n  z-index: 1;\\n}\\n#exp_elem_list li {\\n  font-weight: 900;\\n  font-size: 0.8em;\\n  padding: 1em;\\n  cursor: pointer;\\n}\\n#exp_elem_list > .separation-line {\\n  z-index: 1;\\n  padding: 0;\\n  margin: 0 0.5em;\\n  border-bottom: 1px solid #fff;\\n}\\n\\n#exp_elem_popularity {\\n  position: relative;\\n}\\n#exp_elem_popularity::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 1em;\\n  right: 1em;\\n  height: 10px;\\n  width: 10px;\\n  border-right: 2px solid #fff;\\n  border-bottom: 2px solid #fff;\\n  margin-left: 2em;\\n  transform: translateY(50%) rotate(225deg);\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.skip-nav-btn {\\n  position: absolute;\\n  top: 10px;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  border: none;\\n  border-radius: 5px;\\n  background-color: #d3573c;\\n  font-weight: 900;\\n  font-size: 1em;\\n  padding: 0.6em 1em;\\n  z-index: 0;\\n  opacity: 0;\\n}\\n.skip-nav-btn:focus {\\n  opacity: 1;\\n}\\n\\n.main-header {\\n  height: 100px;\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: calc(100% - 250px);\\n}\\n@media (max-width: 820px) {\\n  .main-header {\\n    width: calc(100% - 150px);\\n  }\\n}\\n@media (max-width: 700px) {\\n  .main-header {\\n    flex-direction: column;\\n    width: 100%;\\n    height: 150px;\\n  }\\n}\\n\\n.nav-container ul {\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: center;\\n}\\n\\n.modal-bg {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  background-color: #fff;\\n  width: 100vw;\\n  height: 100vh;\\n  z-index: 1;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  display: none;\\n}\\n\\n.photo-modal {\\n  width: 95vw;\\n  height: 90vh;\\n  position: relative;\\n}\\n.photo-modal__photo-container > ul {\\n  position: relative;\\n}\\n.photo-modal__photo-container > ul > li {\\n  position: absolute;\\n  z-index: 0;\\n}\\n.photo-modal__photo {\\n  display: flex;\\n  align-items: center;\\n  opacity: 0;\\n  width: 75vw;\\n  height: 80vh;\\n  margin: 5vh 10vw;\\n  transition: all 1s ease-in-out;\\n}\\n.photo-modal__photo--active {\\n  z-index: 1;\\n  opacity: 1;\\n  transform: translateX(0) scale(1);\\n}\\n.photo-modal__photo--previous {\\n  transform: translateX(-150%) scale(0.5);\\n}\\n.photo-modal__photo--next {\\n  transform: translateX(150%) scale(0.5);\\n}\\n.photo-modal__container {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.photo-modal__img {\\n  max-width: 100%;\\n  max-height: 70vh;\\n  object-fit: contain;\\n}\\n.photo-modal__title {\\n  color: #901c1c;\\n  margin: 0;\\n  font-size: 0.8em;\\n  font-weight: 400;\\n}\\n.photo-modal__close {\\n  z-index: 1;\\n  position: absolute;\\n  height: 30px;\\n  width: 30px;\\n  top: 0;\\n  right: 0;\\n  cursor: pointer;\\n}\\n.photo-modal__close::after, .photo-modal__close::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 4px;\\n  height: 30px;\\n  background-color: #901c1c;\\n}\\n.photo-modal__close::before {\\n  transform: translateX(15px) rotate(45deg);\\n}\\n.photo-modal__close::after {\\n  transform: translateX(15px) rotate(-45deg);\\n}\\n.photo-modal__previous, .photo-modal__next {\\n  z-index: 1;\\n  position: absolute;\\n  top: 50%;\\n  cursor: pointer;\\n  width: 20px;\\n  height: 20px;\\n}\\n.photo-modal__previous::before, .photo-modal__previous::after, .photo-modal__next::before, .photo-modal__next::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 4px;\\n  height: 20px;\\n  background-color: #901c1c;\\n}\\n.photo-modal__previous {\\n  left: 0;\\n}\\n.photo-modal__previous::before, .photo-modal__previous::after {\\n  right: 0;\\n}\\n.photo-modal__previous::before {\\n  transform: rotate(45deg) translateX(-9px);\\n}\\n.photo-modal__previous::after {\\n  transform: rotate(-45deg) translateX(-9px);\\n}\\n.photo-modal__next {\\n  right: 0;\\n}\\n.photo-modal__next::before {\\n  transform: rotate(45deg) translateX(9px);\\n}\\n.photo-modal__next::after {\\n  transform: rotate(-45deg) translateX(9px);\\n}\\n\\n.form-modal-bg {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  background-color: rgba(255, 255, 255, 0.6);\\n  width: 100vw;\\n  height: 100vh;\\n  z-index: 1;\\n  display: none;\\n}\\n.form-modal-bg > div {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.error-message, .message-sent {\\n  display: none;\\n  background-color: #dc7b66;\\n  border: 0.15em solid #901c1c;\\n  border-radius: 11px;\\n  padding: 0.2em;\\n  margin-top: 0.2em;\\n}\\n\\n.form-modal {\\n  position: relative;\\n  width: 100%;\\n  max-width: 400px;\\n  display: flex;\\n  flex-direction: column;\\n  color: #000;\\n  background-color: #d3573c;\\n  padding: 1em;\\n}\\n.form-modal__title {\\n  color: #000;\\n  font-weight: 400;\\n  margin-top: 0;\\n}\\n.form-modal__label {\\n  color: #312E2E;\\n  font-size: 1.2em;\\n}\\n.form-modal__input, .form-modal__message {\\n  border: none;\\n  border-radius: 5px;\\n}\\n.form-modal__input {\\n  height: 3em;\\n}\\n.form-modal__message {\\n  height: 8em;\\n}\\n.form-modal__btn {\\n  width: 8em;\\n  background-color: #901c1c;\\n  color: #fff;\\n  font-weight: 900;\\n  cursor: pointer;\\n  margin-top: 2em;\\n}\\n.form-modal__close {\\n  position: absolute;\\n  top: 1em;\\n  right: 1em;\\n  width: 32px;\\n  height: 32px;\\n  cursor: pointer;\\n}\\n.form-modal__close::after, .form-modal__close::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  z-index: 1;\\n  background-color: #fff;\\n  width: 3px;\\n  height: 30px;\\n}\\n.form-modal__close::before {\\n  transform: translateX(14px) rotate(45deg);\\n}\\n.form-modal__close::after {\\n  transform: translateX(14px) rotate(-45deg);\\n}\\n\\n.home-title {\\n  height: 100px;\\n  width: 250px;\\n  margin: 0;\\n  font-size: 1.5em;\\n  color: #901c1c;\\n  font-weight: 400;\\n  position: absolute;\\n  top: 20px;\\n  right: 5%;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n}\\n@media (max-width: 820px) {\\n  .home-title {\\n    font-size: 1em;\\n    width: 150px;\\n  }\\n}\\n@media (max-width: 700px) {\\n  .home-title {\\n    align-items: flex-start;\\n    top: 35px;\\n    font-size: 0.8em;\\n  }\\n}\\n\\n.photographers-container > ul {\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: space-evenly;\\n  margin: 0;\\n  margin-bottom: 2em;\\n}\\n\\n.photographer {\\n  width: 100%;\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-between;\\n  background-color: #fafafa;\\n  padding: 50px;\\n}\\n@media (max-width: 820px) {\\n  .photographer {\\n    padding: 10px;\\n  }\\n}\\n\\n.photographer-info {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.photographer-info p {\\n  margin: 5px 0;\\n}\\n.photographer-info__name {\\n  margin: 0;\\n}\\n.photographer-info__tags > ul {\\n  display: flex;\\n  flex-flow: row wrap;\\n}\\n\\n@media (max-width: 700px) {\\n  .photographer-avatar {\\n    width: 80px;\\n    height: 80px;\\n  }\\n}\\n\\n@media (max-width: 820px) {\\n  .contact-btn {\\n    z-index: 1;\\n    position: fixed;\\n    bottom: 30px;\\n    left: 50%;\\n    transform: translateX(-50%);\\n  }\\n  .contact-btn > .btn {\\n    padding: 10px;\\n  }\\n}\\n\\n.photos {\\n  margin: 2em;\\n}\\n@media (max-width: 700px) {\\n  .photos {\\n    margin: 2em 0;\\n  }\\n}\\n\\n.photo-container > ul {\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: space-evenly;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://P6_Fisheye/./src/style/index.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://P6_Fisheye/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style/index.sass":
/*!******************************!*\
  !*** ./src/style/index.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.sass\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://P6_Fisheye/./src/style/index.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://P6_Fisheye/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/style/index.sass");
/******/ 	
/******/ })()
;