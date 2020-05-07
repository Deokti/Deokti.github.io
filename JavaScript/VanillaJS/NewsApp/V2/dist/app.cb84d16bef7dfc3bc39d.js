/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Api-working-methods/Api-working-methods.js":
/*!*******************************************************!*\
  !*** ./js/Api-working-methods/Api-working-methods.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _https_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../https-service */ \"./js/https-service/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./js/config/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n // Деструктуриация\n\nvar url = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].NEWS_URL,\n    apiKey = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY;\n\nvar ApiWorkingMethods = /*#__PURE__*/function () {\n  function ApiWorkingMethods(NEWS_URL, API_KEY) {\n    _classCallCheck(this, ApiWorkingMethods);\n\n    this.NEWS_URL = NEWS_URL;\n    this.API_KEY = API_KEY;\n  }\n\n  _createClass(ApiWorkingMethods, [{\n    key: \"TopHeadlines\",\n    value: function () {\n      var _TopHeadlines = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var category,\n            getDataFromServer,\n            _args = arguments;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                category = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'general';\n                _context.next = 3;\n                return _https_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(this.NEWS_URL, \"/top-headlines?country=ru&category=\").concat(category, \"&pageSize=100&apiKey=\").concat(this.API_KEY));\n\n              case 3:\n                getDataFromServer = _context.sent;\n                return _context.abrupt(\"return\", getDataFromServer);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function TopHeadlines() {\n        return _TopHeadlines.apply(this, arguments);\n      }\n\n      return TopHeadlines;\n    }()\n  }, {\n    key: \"Everything\",\n    value: function () {\n      var _Everything = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(query) {\n        var responseQuery;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _https_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(this.NEWS_URL, \"/everything?q=\").concat(query, \"&apiKey=\").concat(this.API_KEY));\n\n              case 2:\n                responseQuery = _context2.sent;\n                return _context2.abrupt(\"return\", responseQuery);\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function Everything(_x) {\n        return _Everything.apply(this, arguments);\n      }\n\n      return Everything;\n    }()\n  }]);\n\n  return ApiWorkingMethods;\n}();\n\nvar apiWorkingMethods = new ApiWorkingMethods(url, apiKey);\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiWorkingMethods);\n\n//# sourceURL=webpack:///./js/Api-working-methods/Api-working-methods.js?");

/***/ }),

/***/ "./js/Api-working-methods/index.js":
/*!*****************************************!*\
  !*** ./js/Api-working-methods/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Api_working_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api-working-methods */ \"./js/Api-working-methods/Api-working-methods.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Api_working_methods__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/Api-working-methods/index.js?");

/***/ }),

/***/ "./js/config/config.js":
/*!*****************************!*\
  !*** ./js/config/config.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar config = {\n  NEWS_URL: 'http://newsapi.org/v2',\n  API_KEY: '7b49a3a1f5dd40cdbd91ece9d0c9b625'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./js/config/config.js?");

/***/ }),

/***/ "./js/config/index.js":
/*!****************************!*\
  !*** ./js/config/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./js/config/config.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/config/index.js?");

/***/ }),

/***/ "./js/convertion-date/convertion-date.js":
/*!***********************************************!*\
  !*** ./js/convertion-date/convertion-date.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar convertionDate = function convertionDate(desiredDate) {\n  var monthBase = [\"Январь\", \"Февраль\", \"Март\", \"Апрель\", \"Май\", \"Июнь\", \"Июль\", \"Август\", \"Сентябрь\", \"Октябрь\", \"Ноябрь\", \"Декабрь\"]; // +1\n\n  var createDate = new Date(desiredDate);\n  var year = createDate.getFullYear();\n  var month = createDate.getMonth();\n  var day = createDate.getDate();\n  var dateString = \"\".concat(monthBase[month], \" \").concat(day, \", \").concat(year);\n  return dateString;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (convertionDate);\n\n//# sourceURL=webpack:///./js/convertion-date/convertion-date.js?");

/***/ }),

/***/ "./js/convertion-date/index.js":
/*!*************************************!*\
  !*** ./js/convertion-date/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _convertion_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertion-date */ \"./js/convertion-date/convertion-date.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_convertion_date__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/convertion-date/index.js?");

/***/ }),

/***/ "./js/create-template/create-template.js":
/*!***********************************************!*\
  !*** ./js/create-template/create-template.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _convertion_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../convertion-date */ \"./js/convertion-date/index.js\");\n\n\nvar createTemplate = function createTemplate(_ref) {\n  var author = _ref.author,\n      title = _ref.title,\n      description = _ref.description,\n      url = _ref.url,\n      urlToImage = _ref.urlToImage,\n      source = _ref.source,\n      publishedAt = _ref.publishedAt;\n  if (title.includes('Ð')) return '';\n  if (title.includes('�')) return '';\n  var limitTitle = title ? \"\".concat(title.substring(0, 55), \"...\") : '';\n  var checkTitle = limitTitle.includes('Ð', '�') ? '' : limitTitle;\n  var limitDescription = description ? \"\".concat(description.substring(0, 115), \"...\") : '';\n  var checkDescription = limitDescription.includes('Ð') ? '' : limitDescription;\n  var checkDescriptionMark = checkDescription.includes('�') ? '' : checkDescription;\n  var limitAuthor = author ? author.substring(0, 25) : 'Неизвестно';\n  var lititSource = source.name.substring(0, 15);\n  var toogleImg = urlToImage || '../../img/news-img.jpg';\n  return \"\\n        <!-- \\u0421\\u0442\\u0440\\u0443\\u043A\\u0442\\u0443\\u0440\\u0430 \\u043E\\u0434\\u043D\\u043E\\u0439 \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0438 -->\\n        <li class=\\\"news-item\\\">\\n            <img src=\\\"\".concat(toogleImg, \"\\\" alt=\\\"img\\\" class=\\\"news-item__img\\\">\\n            <div class=\\\"news-item__template\\\">\\n                <!-- \\u0414\\u0430\\u0442\\u0430 \\u043D\\u0430\\u043F\\u0438\\u0441\\u0430\\u043D\\u0438\\u044F \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0438 \\u0438 \\u0438\\u043C\\u044F \\u0447\\u0435\\u043B\\u043E\\u0432\\u0435\\u043A\\u0430, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0439 \\u0435\\u0451 \\u043D\\u0430\\u043F\\u0438\\u0441\\u0430\\u043B -->\\n                <ul class=\\\"news-item__information ul-none d-flex\\\">\\n                    <li class=\\\"news-item__person news-item__date\\\">\").concat(Object(_convertion_date__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(publishedAt), \"</li>\\n                    <li class=\\\"news-item__person news-item__user\\\">\").concat(limitAuthor || lititSource, \"</li>\\n                </ul>\\n\\n                <!-- \\u0418\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u044F \\u043E \\u0441\\u0430\\u043C\\u043E\\u0439 \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0438 \\u0438 \\u0435\\u0451 \\u043F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u043E\\u0441\\u0442\\u0438 -->\\n                <div class=\\\"news-item__detailed\\\">\\n                    <!-- \\u0417\\u0430\\u0433\\u043E\\u043B\\u043E\\u0432\\u043E\\u043A-\\u0441\\u0441\\u044B\\u043B\\u043A\\u0430 -->\\n                    <h2 class=\\\"news-item__title\\\"><a class=\\\"news-item__link\\\" href=\\\"\").concat(url, \"\\\" target=\\\"_blank\\\">\").concat(checkTitle, \"</a></h2>\\n                    <!-- \\u041F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u043E\\u0441\\u0442\\u0438 -->\\n                    <p class=\\\"news-item__description\\\">\").concat(checkDescriptionMark, \"</p>\\n                </div>\\n            </div>\\n        </li>\\n        <!-- \\u041A\\u043E\\u043D\\u0435\\u0446 \\u0441\\u0442\\u0440\\u0443\\u043A\\u0442\\u0443\\u0440\\u044B -->\\n    \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createTemplate);\n\n//# sourceURL=webpack:///./js/create-template/create-template.js?");

/***/ }),

/***/ "./js/create-template/index.js":
/*!*************************************!*\
  !*** ./js/create-template/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-template */ \"./js/create-template/create-template.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_create_template__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/create-template/index.js?");

/***/ }),

/***/ "./js/get-category/get-category.js":
/*!*****************************************!*\
  !*** ./js/get-category/get-category.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _response_processing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../response-processing */ \"./js/response-processing/index.js\");\n // Действует при выборе категорий\n\nfunction getCategory(event) {\n  event.preventDefault();\n  var categoryElements = document.querySelectorAll('.nav-link');\n  var onCategory = event.target;\n  var category = event.target.getAttribute('data-category');\n  Object(_response_processing__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('TopHeadlines', category);\n  categoryElements.forEach(function (element) {\n    return element.classList.remove('nav-link-active');\n  });\n  onCategory.classList.add('nav-link-active');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCategory);\n\n//# sourceURL=webpack:///./js/get-category/get-category.js?");

/***/ }),

/***/ "./js/get-category/index.js":
/*!**********************************!*\
  !*** ./js/get-category/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-category */ \"./js/get-category/get-category.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_get_category__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/get-category/index.js?");

/***/ }),

/***/ "./js/https-service/https-service.js":
/*!*******************************************!*\
  !*** ./js/https-service/https-service.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar httpService = function httpService() {\n  return {\n    get: function get(url) {\n      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return fetch(url);\n\n              case 3:\n                response = _context.sent;\n                _context.next = 6;\n                return response.json();\n\n              case 6:\n                return _context.abrupt(\"return\", _context.sent);\n\n              case 9:\n                _context.prev = 9;\n                _context.t0 = _context[\"catch\"](0);\n                console.log(_context.t0);\n                return _context.abrupt(\"return\", Promise.reject(_context.t0));\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 9]]);\n      }))();\n    }\n  };\n};\n\nvar http = httpService();\n/* harmony default export */ __webpack_exports__[\"default\"] = (http);\n\n//# sourceURL=webpack:///./js/https-service/https-service.js?");

/***/ }),

/***/ "./js/https-service/index.js":
/*!***********************************!*\
  !*** ./js/https-service/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _https_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./https-service */ \"./js/https-service/https-service.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_https_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/https-service/index.js?");

/***/ }),

/***/ "./js/old-news-remove/index.js":
/*!*************************************!*\
  !*** ./js/old-news-remove/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _old_news_remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./old-news-remove */ \"./js/old-news-remove/old-news-remove.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_old_news_remove__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/old-news-remove/index.js?");

/***/ }),

/***/ "./js/old-news-remove/old-news-remove.js":
/*!***********************************************!*\
  !*** ./js/old-news-remove/old-news-remove.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Очищаем контейнер при выборе другой категории\nfunction oldNewsRemove(container) {\n  var child = container.lastElementChild;\n\n  while (child) {\n    container.removeChild(child);\n    child = container.lastElementChild;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (oldNewsRemove);\n\n//# sourceURL=webpack:///./js/old-news-remove/old-news-remove.js?");

/***/ }),

/***/ "./js/response-processing/index.js":
/*!*****************************************!*\
  !*** ./js/response-processing/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _response_processing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./response-processing */ \"./js/response-processing/response-processing.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_response_processing__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/response-processing/index.js?");

/***/ }),

/***/ "./js/response-processing/response-processing.js":
/*!*******************************************************!*\
  !*** ./js/response-processing/response-processing.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Api_working_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api-working-methods */ \"./js/Api-working-methods/index.js\");\n/* harmony import */ var _old_news_remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../old-news-remove */ \"./js/old-news-remove/index.js\");\n/* harmony import */ var _create_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-template */ \"./js/create-template/index.js\");\n\n\n\n\nfunction responseProcessing(currentMethod, act) {\n  _Api_working_methods__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currentMethod](act).then(function (item) {\n    var container = document.querySelector('.news .news__wrapper');\n    Object(_old_news_remove__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(container);\n    var fragment = '';\n    item.articles.map(function (news) {\n      var template = Object(_create_template__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(news);\n      fragment += template;\n    });\n    container.insertAdjacentHTML('afterbegin', fragment);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (responseProcessing);\n\n//# sourceURL=webpack:///./js/response-processing/response-processing.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-category */ \"./js/get-category/index.js\");\n/* harmony import */ var _search_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-form */ \"./js/search-form/index.js\");\n/* harmony import */ var _response_processing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./response-processing */ \"./js/response-processing/index.js\");\n// Импорт файлов\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  document.querySelector('.nav-list').addEventListener('click', _get_category__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  Object(_response_processing__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('TopHeadlines');\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/search-form/index.js":
/*!*********************************!*\
  !*** ./js/search-form/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-form */ \"./js/search-form/search-form.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_search_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/search-form/index.js?");

/***/ }),

/***/ "./js/search-form/search-form.js":
/*!***************************************!*\
  !*** ./js/search-form/search-form.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_toggle_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-toggle-state */ \"./js/search-toggle-state/index.js\");\n/* harmony import */ var _response_processing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../response-processing */ \"./js/response-processing/index.js\");\n\n\nvar form = document.forms.search;\nvar searchInput = form.elements['search-input'];\nform.addEventListener('submit', function (event) {\n  event.preventDefault();\n  var searchInputValue = searchInput.value;\n  if (searchInputValue.length === 0) return false;\n  Object(_response_processing__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Everything', searchInputValue);\n  form.reset();\n});\n\n//# sourceURL=webpack:///./js/search-form/search-form.js?");

/***/ }),

/***/ "./js/search-toggle-state/index.js":
/*!*****************************************!*\
  !*** ./js/search-toggle-state/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_toggle_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-toggle-state */ \"./js/search-toggle-state/search-toggle-state.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_search_toggle_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/search-toggle-state/index.js?");

/***/ }),

/***/ "./js/search-toggle-state/search-toggle-state.js":
/*!*******************************************************!*\
  !*** ./js/search-toggle-state/search-toggle-state.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction searchToggleState(openSearchSelector, searchSelector, classActive) {\n  var openSearch = document.querySelector(openSearchSelector);\n  var search = document.querySelector(searchSelector);\n  openSearch.addEventListener('click', function () {\n    return search.classList.toggle(classActive);\n  });\n}\n\nsearchToggleState('.open-search', '.search', 'search-show');\nsearchToggleState('.search-cross', '.search', 'search-show');\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchToggleState);\n\n//# sourceURL=webpack:///./js/search-toggle-state/search-toggle-state.js?");

/***/ })

/******/ });