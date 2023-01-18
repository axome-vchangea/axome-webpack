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

/***/ "./_dev/js/components/observer.js":
/*!****************************************!*\
  !*** ./_dev/js/components/observer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checkIfIncluded = (file) => {\n    let links = document.getElementsByTagName(\"link\");\n    for(let i = 0; i < links.length; i++) {\n        if (links[i].href.substr(-file.length) === file) return true;\n    }\n\n    let scripts = document.getElementsByTagName(\"script\");\n    for(let k = 0; k < scripts.length; k++) {\n        if (scripts[k].src.substr(-file.length) === file) return true;\n    }\n\n    return false;\n}\n\nconst SectionObserver = class {\n    constructor(target, threshold) {\n        this.target = target;\n        this.threshold = threshold;\n        this.observer();\n    }\n\n    observer () {\n        let options = {\n            rootMargin: '50% 0px',\n            threshold: this.threshold\n        }\n\n        let observer = new IntersectionObserver((entries) => {\n            entries.forEach((entry) => {\n                if (entry.isIntersecting) {\n                    let section = entry.target\n                    let sectionName = section.dataset.axSection;\n\n                    let styleSrc;\n                    window.assetsUrl.css.forEach(css => {\n                        if (css.hasOwnProperty(sectionName)) {\n                            styleSrc = css[sectionName];\n                        }\n                    });\n\n                    let styleTag = document.createElement(\"link\");\n                    styleTag.type = \"text/css\";\n                    styleTag.rel = \"stylesheet\";\n                    styleTag.href = styleSrc;\n\n                    let scriptSrc;\n                    window.assetsUrl.js.forEach(js => {\n                        if (js.hasOwnProperty(sectionName)) {\n                            scriptSrc = js[sectionName];\n                        }\n                    });\n\n                    let scriptTag = document.createElement(\"script\");\n                    scriptTag.type=\"text/javascript\";\n                    scriptTag.src=scriptSrc;\n\n                    let checkingCss = checkIfIncluded(styleTag.href),\n                        checkingJs = checkIfIncluded(scriptTag.src);\n\n                    (!checkingCss && typeof styleSrc !== 'undefined') && document.getElementsByTagName('head')[0].appendChild(styleTag);\n                    (!checkingJs && typeof scriptSrc !== 'undefined') && document.getElementsByTagName('head')[0].appendChild(scriptTag);\n                    observer.unobserve(section);\n                }\n            })\n        }, options)\n\n        let target = document.querySelectorAll(this.target);\n        target.forEach(function (section) {\n            observer.observe(section);\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionObserver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L2pzL2NvbXBvbmVudHMvb2JzZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heG9tZS8uL19kZXYvanMvY29tcG9uZW50cy9vYnNlcnZlci5qcz9kN2M0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoZWNrSWZJbmNsdWRlZCA9IChmaWxlKSA9PiB7XG4gICAgbGV0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGlua3NbaV0uaHJlZi5zdWJzdHIoLWZpbGUubGVuZ3RoKSA9PT0gZmlsZSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgbGV0IHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgc2NyaXB0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICBpZiAoc2NyaXB0c1trXS5zcmMuc3Vic3RyKC1maWxlLmxlbmd0aCkgPT09IGZpbGUpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgU2VjdGlvbk9ic2VydmVyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgdGhyZXNob2xkKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgICAgICAgdGhpcy5vYnNlcnZlcigpO1xuICAgIH1cblxuICAgIG9ic2VydmVyICgpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290TWFyZ2luOiAnNTAlIDBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IHRoaXMudGhyZXNob2xkXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlY3Rpb24gPSBlbnRyeS50YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlY3Rpb25OYW1lID0gc2VjdGlvbi5kYXRhc2V0LmF4U2VjdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc3R5bGVTcmM7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hc3NldHNVcmwuY3NzLmZvckVhY2goY3NzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjc3MuaGFzT3duUHJvcGVydHkoc2VjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTcmMgPSBjc3Nbc2VjdGlvbk5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc3R5bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFnLmhyZWYgPSBzdHlsZVNyYztcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NyaXB0U3JjO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXNzZXRzVXJsLmpzLmZvckVhY2goanMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpzLmhhc093blByb3BlcnR5KHNlY3Rpb25OYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdFNyYyA9IGpzW3NlY3Rpb25OYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcmlwdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdFRhZy50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdFRhZy5zcmM9c2NyaXB0U3JjO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2luZ0NzcyA9IGNoZWNrSWZJbmNsdWRlZChzdHlsZVRhZy5ocmVmKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNraW5nSnMgPSBjaGVja0lmSW5jbHVkZWQoc2NyaXB0VGFnLnNyYyk7XG5cbiAgICAgICAgICAgICAgICAgICAgKCFjaGVja2luZ0NzcyAmJiB0eXBlb2Ygc3R5bGVTcmMgIT09ICd1bmRlZmluZWQnKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlVGFnKTtcbiAgICAgICAgICAgICAgICAgICAgKCFjaGVja2luZ0pzICYmIHR5cGVvZiBzY3JpcHRTcmMgIT09ICd1bmRlZmluZWQnKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShzZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCBvcHRpb25zKVxuXG4gICAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKHNlY3Rpb24pIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uT2JzZXJ2ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./_dev/js/components/observer.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_dev/js/components/observer.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;