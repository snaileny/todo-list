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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n\\r\\n    box-sizing: border-box;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    text-decoration: none;\\r\\n\\r\\n}\\r\\n\\r\\nbody {\\r\\n\\r\\n    height: 100vh;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n\\r\\n}\\r\\n\\r\\n.app {\\r\\n\\r\\n    height: 100vh;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: flex-start;\\r\\n    overflow: hidden;\\r\\n\\r\\n}\\r\\n\\r\\n.app-projects {\\r\\n\\r\\n    width: 20%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: flex-start;\\r\\n    align-items: flex-start;\\r\\n    padding: 0 0 0 2rem;\\r\\n\\r\\n}\\r\\n\\r\\n.project-title {\\r\\n\\r\\n    width: 100%;\\r\\n    margin: 2rem 0 1rem 0;\\r\\n    font-size: 2.5rem;\\r\\n\\r\\n}\\r\\n\\r\\n.project-list {\\r\\n\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: flex-start;\\r\\n\\r\\n}\\r\\n\\r\\n.project {\\r\\n\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    margin: 0.2rem;\\r\\n    padding: 0.3rem;\\r\\n    background-color: white;\\r\\n    font-size: 2rem;\\r\\n    cursor: pointer;\\r\\n    user-select: none;\\r\\n\\r\\n}\\r\\n\\r\\n.project:hover {\\r\\n\\r\\n    filter: brightness(95%);\\r\\n\\r\\n}\\r\\n\\r\\n.add-project-button {\\r\\n\\r\\n    height: 2.5rem;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin: 1rem 0 0 0;\\r\\n    padding: 0.5rem;\\r\\n    font-size: 2rem;\\r\\n\\r\\n}\\r\\n\\r\\n.delete-project-button {\\r\\n\\r\\n    height: 2rem;\\r\\n    width: 2rem;\\r\\n    font-size: 1.5rem;\\r\\n\\r\\n}\\r\\n\\r\\n.app-tasks {\\r\\n\\r\\n    width: 80%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: flex-start;\\r\\n    align-items: center;\\r\\n\\r\\n}\\r\\n\\r\\n.task-settings {\\r\\n\\r\\n    height: 4.5rem;\\r\\n    width: 90%;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    padding: 0.8rem;\\r\\n    margin: 1rem 0 0 0;\\r\\n    border-bottom: 2px solid black;\\r\\n    font-size: 1.4rem;\\r\\n\\r\\n}\\r\\n\\r\\n.task-filter {\\r\\n\\r\\n    margin: 0 1.5rem 0 0.5rem;\\r\\n    padding: 0.5rem;\\r\\n    font-size: 1.4rem;\\r\\n\\r\\n}\\r\\n\\r\\n.clear-completed-button {\\r\\n\\r\\n    font-size: 1.4rem;\\r\\n    margin: 0 1rem 0 0;\\r\\n    padding: 0.5rem;\\r\\n\\r\\n}\\r\\n\\r\\n.clear-all-button {\\r\\n\\r\\n    font-size: 1.4rem;\\r\\n    padding: 0.5rem;\\r\\n\\r\\n}\\r\\n\\r\\n.task-list {\\r\\n\\r\\n    height: 70%;\\r\\n    width: 90%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: flex-start;\\r\\n    align-items: center;\\r\\n    overflow-y: auto;\\r\\n\\r\\n}\\r\\n\\r\\n.task {\\r\\n\\r\\n    height: 4.5rem;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    margin: 1rem 0 0 0;\\r\\n    padding: 1rem;\\r\\n    border: 2px solid black;\\r\\n    font-size: 2rem;\\r\\n    cursor: default;\\r\\n    user-select: none;\\r\\n\\r\\n}\\r\\n\\r\\n.task-content {\\r\\n\\r\\n    width: 90%;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    padding: 0 0.5rem 0 0.5rem;\\r\\n\\r\\n}\\r\\n\\r\\n.task-complete-checkbox {\\r\\n\\r\\n    height: 2rem;\\r\\n    width: 2rem;\\r\\n\\r\\n}\\r\\n\\r\\n.delete-task-button {\\r\\n\\r\\n    height: 2rem;\\r\\n    width: 2rem;\\r\\n    font-size: 1.5rem;\\r\\n\\r\\n}\\r\\n\\r\\n.task-template {\\r\\n\\r\\n    width: 90%;\\r\\n    position: sticky;\\r\\n    margin: 2rem 0 1rem 0;\\r\\n    padding: 1rem;\\r\\n    border: 1px solid black;\\r\\n    font-size: 2rem;\\r\\n\\r\\n}\\r\\n\\r\\n.task-template-content {\\r\\n\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n\\r\\n}\\r\\n\\r\\n.task-title-input {\\r\\n\\r\\n    width: 70%;\\r\\n    padding: 0.2rem;\\r\\n    font-size: 1.8rem;\\r\\n\\r\\n}\\r\\n\\r\\n.task-date-input {\\r\\n\\r\\n    width: 25%;\\r\\n    padding: 0.2rem;\\r\\n    font-size: 1.8rem;\\r\\n\\r\\n}\\r\\n\\r\\n.add-task-button {\\r\\n\\r\\n    height: 2.5rem;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin: 1rem 0 0 0;\\r\\n    padding: 0.5rem;\\r\\n    font-size: 2rem;\\r\\n\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app.js */ \"./src/modules/app.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n\r\n\r\n\r\nconst buttons = {\r\n\r\n    addTask: document.querySelector(\".add-task-button\"),\r\n    deleteTask: document.querySelector(\".delete-task-button\"),\r\n    addProject: document.querySelector(\".add-task-button\"),\r\n    deleteProject: document.querySelector(\".add-task-button\"),\r\n    clearAll: document.querySelector(\".clear-all-button\"),\r\n    clearCompleted: document.querySelector(\".clear-completed-button\"),\r\n\r\n}\r\n\r\nconst inputs = {\r\n\r\n    filterActive: document.querySelector(\"#task-active-filter\"),\r\n    filterDate: document.querySelector(\"#task-date-filter\"),\r\n    taskComplete: document.querySelector(\".task-complete-checkbox\"),\r\n    taskTitle: document.querySelector(\".task-title-input\"),\r\n    taskDate: document.querySelector(\".task-date-input\"),\r\n\r\n}\r\n\r\nconst elements = {\r\n\r\n    projectList: document.querySelector(\".project-list\"),\r\n    taskList: document.querySelector(\".task-list\"),\r\n\r\n}\r\n\r\nconst app = new _modules_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nfunction renderTasks() {\r\n\r\n    function checkFilterActive(filterActive, taskActive) {\r\n\r\n        if (filterActive === \"Active\" && taskActive === true) {\r\n\r\n            return true;\r\n\r\n        } else if (filterActive === \"Completed\" && taskActive === false) {\r\n\r\n            return true;\r\n\r\n        } else if (filterActive === \"All\") {\r\n\r\n            return true;\r\n\r\n        } else {\r\n\r\n            return false;\r\n            \r\n        }\r\n\r\n    }\r\n\r\n    /*function checkTaskDate(filterDate, taskDate) {\r\n\r\n        const TASK_DATE_SECONDS = Math.floor(taskDate / 1000);\r\n        const NOW_SECONDS =  Math.floor(Date.now() / 1000);\r\n        const WEEK_SECONDS = 604800;\r\n\r\n        if (filterDate === \"today\") {\r\n\r\n            if ((taskDate / 1000) === (Date.now() / 1000)) {\r\n\r\n                return true;\r\n\r\n            } else {\r\n\r\n                return false;\r\n\r\n            }\r\n\r\n        } else if (filterDate === \"week\") {\r\n\r\n\r\n\r\n        }\r\n\r\n    }*/\r\n\r\n    const filterActive = inputs.filterActive.options[filterActive.selectedIndex].value;\r\n    const filterDate = inputs.filterDate.options[filterDate.selectedIndex].value;\r\n    const selectedProject = \"Main\"; //for now!\r\n    const tasks = app.main.getTaskList();\r\n    const templates = ``;\r\n\r\n    for (const taskTitle in tasks) {\r\n\r\n        const task = tasks[taskTitle];\r\n        const taskProject = task.getProject();\r\n        const taskDate = task.getDate();\r\n        const taskActive = task.isActive();\r\n        const taskTemplate = `\r\n        <div class=\"task\" data-task-title=\"${taskTitle}\" data-task-project=\"${taskDate}\" data-task-active=\"${taskActive}\">\r\n            <input type=\"checkbox\" class=\"task-complete-checkbox\">\r\n            <div class=\"task-content\">\r\n                <p class=\"task-title\">${taskTitle}</p>\r\n                <p class=\"task-date\">${taskDate}</p>\r\n            </div>\r\n            <button type=\"button\" class=\"delete-task-button\">X</button>\r\n        </div>\r\n        `;\r\n\r\n        if (selectedProject === taskProject && checkFilterActive(filterActive)) {\r\n\r\n            templates += taskTemplate;\r\n\r\n        }\r\n\r\n    }\r\n\r\n    elements.taskList.innerHTML = templates;\r\n\r\n}\r\n\r\nfunction eventHandler(e) {\r\n\r\n    const taskTitle = inputs.taskTitle.value;\r\n    const taskDate = inputs.taskDate.valueAsNumber;\r\n    const selectedProject = \"main\";\r\n\r\n    if (e.target === buttons.addTask) {\r\n\r\n        app.addTask(taskTitle, taskDate, selectedProject);\r\n        renderTasks();\r\n\r\n    }\r\n\r\n}\r\n\r\ndocument.addEventListener(\"click\", eventHandler);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _tasklist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasklist.js */ \"./src/modules/tasklist.js\");\n\r\n\r\n\r\nclass App {\r\n\r\n    constructor() {\r\n\r\n        this.main = new _tasklist_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        this.projects = [\"main\"];\r\n\r\n    }\r\n\r\n    getProjects() {\r\n\r\n        return this.projects;\r\n\r\n    }\r\n\r\n    addTask(title, date, project) {\r\n        \r\n        const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, date);\r\n\r\n        if (this.projects.includes(project) && this.main.taskList.hasOwnProperty(title) === false) {\r\n\r\n            task.setProject(project);\r\n            this.main.addTask(task);\r\n\r\n        } else if (this.main.taskList.hasOwnProperty(title) === false) {\r\n\r\n            task.setProject(\"main\");\r\n            this.main.addTask(task);\r\n\r\n        }\r\n\r\n    }\r\n\r\n    editTask(title, text) {\r\n\r\n        if (this.main.taskList.hasOwnProperty(title) && text.length >= 48) {\r\n\r\n            this.main.taskList[title].setTitle(text);\r\n\r\n        } \r\n\r\n    }\r\n\r\n    removeTask(title) {\r\n\r\n        this.main.removeTask(title);\r\n\r\n    }\r\n\r\n    addProject(name) {\r\n\r\n        if (this.hasProject(name) === false && this.projects.length === 6) {\r\n\r\n            this.projects.push(name.toLowerCase());\r\n\r\n        }\r\n\r\n    }\r\n\r\n    hasProject(project) {\r\n\r\n        if (this.projects.includes(project.toLowerCase())) {\r\n\r\n            return true;\r\n\r\n        } else {\r\n\r\n            return false;\r\n\r\n        }\r\n\r\n    }\r\n\r\n    removeProject(project) {\r\n\r\n        if (this.hasProject(project)) {\r\n\r\n            const index = this.projects.indexOf(project);\r\n            this.projects.splice(index, 1);\r\n\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://todo-list/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\r\n\r\n    constructor(title, date) {\r\n\r\n        this.title = title;\r\n        this.date = date;\r\n        this.project = null;\r\n        this.active = true;\r\n\r\n    }\r\n\r\n    getTitle() {\r\n\r\n        return this.title;\r\n\r\n    }\r\n\r\n    getDate() {\r\n\r\n        return this.date;\r\n\r\n    }\r\n\r\n    getProject() {\r\n\r\n        return this.project;\r\n\r\n    }\r\n\r\n    setTitle(title) {\r\n\r\n        this.title = title;\r\n\r\n    }\r\n\r\n    setDate(date) {\r\n\r\n        this.date = date;\r\n\r\n    }\r\n\r\n    setProject(project) {\r\n\r\n        this.project = project;\r\n\r\n    }\r\n\r\n    isActive() {\r\n\r\n        return this.active;\r\n\r\n    }\r\n\r\n    toggleComplete() {\r\n\r\n        if (this.active === true) {\r\n\r\n            this.active === false;\r\n\r\n        } else {\r\n\r\n            this.active === true;\r\n\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/tasklist.js":
/*!*********************************!*\
  !*** ./src/modules/tasklist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TaskList {\r\n\r\n    constructor(name) {\r\n\r\n        this.taskList = {};\r\n\r\n    }\r\n\r\n    getTaskList() {\r\n\r\n        return this.taskList;\r\n\r\n    }\r\n\r\n    getTasksWithDate(date) {\r\n\r\n        const taskArr = [];\r\n\r\n        for (const task of this.taskList) {\r\n\r\n            if (task.getDate() === date) {\r\n\r\n                taskArr.push(task);\r\n\r\n            }\r\n\r\n        }\r\n\r\n        return taskArr;\r\n\r\n    }\r\n\r\n    addTask(task) {\r\n\r\n        this.taskList[task.getTitle()] = task;\r\n\r\n    }\r\n\r\n    removeTask(taskTitle) {\r\n\r\n        if (this.taskList.hasOwnProperty(taskTitle)) {\r\n\r\n            delete this.taskList[taskTitle];\r\n\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);\n\n//# sourceURL=webpack://todo-list/./src/modules/tasklist.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;