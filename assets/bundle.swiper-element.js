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

/***/ "./_dev/js/components/swiper-element.js":
/*!**********************************************!*\
  !*** ./_dev/js/components/swiper-element.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst AxSwiper = class extends HTMLElement {\n    constructor() {\n        super();\n        this.slider = this.querySelector('[id^=\"Swiper-\"]');\n        this.slides = this.querySelectorAll('.swiper-slide');\n        this.sliderLength = this.slides.length;\n        this.prevButtonEl = this.querySelector(\".swiper-button-prev\");\n        this.nextButtonEl = this.querySelector(\".swiper-button-next\");\n        this.paginationEl = this.querySelector(\".swiper-pagination\");\n        this.config = JSON.parse(this.slider.dataset.options);\n        this.swiperInstance = null;\n        this.init();\n    }\n\n    init () {\n        this.swiperInstance = new window.Swiper(this.slider, {\n            loop: this.config.loop,\n            effect: this.config.effect,\n            grabCursor: this.config.grabCursor,\n            speed: this.config.speed,\n            pagination: {\n                el: this.paginationEl,\n            },\n            breakpoints: {\n                0: {\n                    slidesPerView: 1.5,\n                    slidesPerGroup: 1,\n                    navigation: false,\n                },\n                768: {\n                    slidesPerView: 2,\n                    navigation: false\n                },\n                1200: {\n                    slidesPerView: this.config.slideInView,\n                    slidesPerGroup: this.config.slidesToMove,\n                    navigation: {\n                        prevEl: this.prevButtonEl,\n                        nextEl: this.nextButtonEl,\n                    },\n                },\n                2000: {\n                    slidesPerView: this.config.slideInView === 4 || this.config.slideInView === 3 ? this.sliderLength >= 5 ? this.config.slideInView + 1 : this.sliderLength : this.config.slideInView,\n                    slidesPerGroup: this.config.slidesToMove,\n                    navigation: {\n                        prevEl: this.prevButtonEl,\n                        nextEl: this.nextButtonEl,\n                    }\n                }\n            }\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxSwiper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L2pzL2NvbXBvbmVudHMvc3dpcGVyLWVsZW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXhvbWUvLi9fZGV2L2pzL2NvbXBvbmVudHMvc3dpcGVyLWVsZW1lbnQuanM/ZTY4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBeFN3aXBlciA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNsaWRlciA9IHRoaXMucXVlcnlTZWxlY3RvcignW2lkXj1cIlN3aXBlci1cIl0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKTtcbiAgICAgICAgdGhpcy5zbGlkZXJMZW5ndGggPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMucHJldkJ1dHRvbkVsID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLnN3aXBlci1idXR0b24tcHJldlwiKTtcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIpO1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25FbCA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi5zd2lwZXItcGFnaW5hdGlvblwiKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBKU09OLnBhcnNlKHRoaXMuc2xpZGVyLmRhdGFzZXQub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3dpcGVySW5zdGFuY2UgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0ICgpIHtcbiAgICAgICAgdGhpcy5zd2lwZXJJbnN0YW5jZSA9IG5ldyB3aW5kb3cuU3dpcGVyKHRoaXMuc2xpZGVyLCB7XG4gICAgICAgICAgICBsb29wOiB0aGlzLmNvbmZpZy5sb29wLFxuICAgICAgICAgICAgZWZmZWN0OiB0aGlzLmNvbmZpZy5lZmZlY3QsXG4gICAgICAgICAgICBncmFiQ3Vyc29yOiB0aGlzLmNvbmZpZy5ncmFiQ3Vyc29yLFxuICAgICAgICAgICAgc3BlZWQ6IHRoaXMuY29uZmlnLnNwZWVkLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIGVsOiB0aGlzLnBhZ2luYXRpb25FbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogdGhpcy5jb25maWcuc2xpZGVJblZpZXcsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiB0aGlzLmNvbmZpZy5zbGlkZXNUb01vdmUsXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogdGhpcy5wcmV2QnV0dG9uRWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RWw6IHRoaXMubmV4dEJ1dHRvbkVsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMjAwMDoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiB0aGlzLmNvbmZpZy5zbGlkZUluVmlldyA9PT0gNCB8fCB0aGlzLmNvbmZpZy5zbGlkZUluVmlldyA9PT0gMyA/IHRoaXMuc2xpZGVyTGVuZ3RoID49IDUgPyB0aGlzLmNvbmZpZy5zbGlkZUluVmlldyArIDEgOiB0aGlzLnNsaWRlckxlbmd0aCA6IHRoaXMuY29uZmlnLnNsaWRlSW5WaWV3LFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogdGhpcy5jb25maWcuc2xpZGVzVG9Nb3ZlLFxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6IHRoaXMucHJldkJ1dHRvbkVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiB0aGlzLm5leHRCdXR0b25FbCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBeFN3aXBlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./_dev/js/components/swiper-element.js\n");

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
/******/ 	__webpack_modules__["./_dev/js/components/swiper-element.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;