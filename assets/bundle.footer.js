/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_dev/js/components/accordion.js":
/*!*****************************************!*\
  !*** ./_dev/js/components/accordion.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Accordion = class {\n    constructor(parent, title, content) {\n        this.parent = parent;\n        this.title = title;\n        this.content = content;\n        this.accordions = document.querySelectorAll(this.parent);\n        this.init();\n    }\n\n    closeOtherAccordions() {\n        this.accordions.forEach((accordion) => {\n            let toggleTitle = accordion.querySelector(this.title);\n            let toggleContent = accordion.querySelector(this.content);\n            toggleContent.classList.contains(\"active\") && toggleContent.classList.remove(\"active\");\n            toggleTitle.classList.contains(\"active\") && toggleTitle.classList.remove(\"active\");\n        });\n    }\n\n    init() {\n        this.accordions.forEach((accordion) => {\n            let toggleTitle = accordion.querySelector(this.title);\n            let toggleContent = accordion.querySelector(this.content);\n\n            toggleTitle.addEventListener(\"click\", () => {\n                !toggleContent.classList.contains(\"active\") && this.closeOtherAccordions();\n                toggleContent.classList.toggle(\"active\");\n                toggleTitle.classList.toggle(\"active\");\n            });\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heG9tZS8uL19kZXYvanMvY29tcG9uZW50cy9hY2NvcmRpb24uanM/Yzc3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBY2NvcmRpb24gPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0aXRsZSwgY29udGVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLmFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMucGFyZW50KTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgY2xvc2VPdGhlckFjY29yZGlvbnMoKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9ucy5mb3JFYWNoKChhY2NvcmRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCB0b2dnbGVUaXRsZSA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yKHRoaXMudGl0bGUpO1xuICAgICAgICAgICAgbGV0IHRvZ2dsZUNvbnRlbnQgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgdG9nZ2xlQ29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgJiYgdG9nZ2xlQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgdG9nZ2xlVGl0bGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmIHRvZ2dsZVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9ucy5mb3JFYWNoKChhY2NvcmRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCB0b2dnbGVUaXRsZSA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yKHRoaXMudGl0bGUpO1xuICAgICAgICAgICAgbGV0IHRvZ2dsZUNvbnRlbnQgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICB0b2dnbGVUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICF0b2dnbGVDb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJiB0aGlzLmNsb3NlT3RoZXJBY2NvcmRpb25zKCk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZVRpdGxlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./_dev/js/components/accordion.js\n");

/***/ }),

/***/ "./_dev/js/sections/footer.js":
/*!************************************!*\
  !*** ./_dev/js/sections/footer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Styles_sections_footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Styles/sections/footer.scss */ \"./_dev/styles/sections/footer.scss\");\n/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/accordion */ \"./_dev/js/components/accordion.js\");\n\n\n\nnew _components_accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.footer-block.footer-block--menu', '.footer-block__heading', '.footer-block__details-content');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L2pzL3NlY3Rpb25zL2Zvb3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F4b21lLy4vX2Rldi9qcy9zZWN0aW9ucy9mb290ZXIuanM/YmM0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJTdHlsZXMvc2VjdGlvbnMvZm9vdGVyLnNjc3NcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWNjb3JkaW9uXCI7XG5cbm5ldyBBY2NvcmRpb24oJy5mb290ZXItYmxvY2suZm9vdGVyLWJsb2NrLS1tZW51JywgJy5mb290ZXItYmxvY2tfX2hlYWRpbmcnLCAnLmZvb3Rlci1ibG9ja19fZGV0YWlscy1jb250ZW50Jyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./_dev/js/sections/footer.js\n");

/***/ }),

/***/ "./_dev/styles/sections/footer.scss":
/*!******************************************!*\
  !*** ./_dev/styles/sections/footer.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L3N0eWxlcy9zZWN0aW9ucy9mb290ZXIuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heG9tZS8uL19kZXYvc3R5bGVzL3NlY3Rpb25zL2Zvb3Rlci5zY3NzP2ZiNzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./_dev/styles/sections/footer.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./_dev/js/sections/footer.js");
/******/ 	
/******/ })()
;