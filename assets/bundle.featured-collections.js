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

/***/ }),

/***/ "./_dev/js/sections/featured-collections.js":
/*!**************************************************!*\
  !*** ./_dev/js/sections/featured-collections.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Styles_sections_featured_collections_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Styles/sections/featured-collections.scss */ \"./_dev/styles/sections/featured-collections.scss\");\n/* harmony import */ var _components_swiper_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/swiper-element */ \"./_dev/js/components/swiper-element.js\");\n\n\n\n//Override Swiper\nclass AxFeaturedCollection extends _components_swiper_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor() {\n        super();\n    }\n\n    init() {\n        this.swiperInstance = new window.Swiper(this.slider, {\n            loop: this.config.loop,\n            spaceBetween: 0,\n            slidesPerGroup: this.config.slidesToMove,\n            autoplay: this.config.autoplay,\n            speed: this.config.speed,\n            effect: this.config.effect,\n            freeMode: this.config.freemode_mobile,\n            breakpoints: {\n                0: {\n                    slidesPerView: 1.2,\n                    navigation: false,\n                },\n                768: {\n                    slidesPerView: 2.35,\n                    navigation: false\n                },\n                1200: {\n                    grabCursor: this.config.grabCursor,\n                    freeMode: false,\n                    slidesPerView: this.config.slideInView,\n                    navigation: {\n                        prevEl: this.prevButtonEl,\n                        nextEl: this.nextButtonEl,\n                    },\n                }\n            }\n        });\n        if (this.classList.contains('ax-load-swiper')) this.classList.remove('ax-load-swiper')\n    }\n}\n\ncustomElements.get('featured-collection') || customElements.define('featured-collection', AxFeaturedCollection);\n\nlet collectionsHeadings = document.querySelectorAll('.collections-multiple .featured-collections__headings_container .featured-collections__heading');\nlet collectionsTabs = document.querySelectorAll('.collections-multiple featured-collection');\n\nfor (let i = 0; i < collectionsHeadings.length; i++) {\n    let title = collectionsHeadings[i];\n    title.addEventListener('click', _ => {\n        let tab = collectionsTabs[i];\n        if (tab.classList.contains('encoded')) {\n            let encodedSlide = tab.querySelectorAll('.swiper-slide');\n            encodedSlide.forEach(slide => {\n                slide.innerHTML = decodeURIComponent(escape(window.atob(slide.innerHTML)));\n            })\n            tab.classList.remove('encoded');\n        }\n        closeOtherTabs();\n        tab.classList.add('visible');\n        title.classList.add('visible')\n    })\n}\n\nfunction closeOtherTabs() {\n    collectionsTabs.forEach((slide) => {\n        slide.classList.contains(\"visible\") && slide.classList.remove(\"visible\");\n    });\n    collectionsHeadings.forEach((title) => {\n        title.classList.contains(\"visible\") && title.classList.remove(\"visible\");\n    });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L2pzL3NlY3Rpb25zL2ZlYXR1cmVkLWNvbGxlY3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F4b21lLy4vX2Rldi9qcy9zZWN0aW9ucy9mZWF0dXJlZC1jb2xsZWN0aW9ucy5qcz8yNDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIlN0eWxlcy9zZWN0aW9ucy9mZWF0dXJlZC1jb2xsZWN0aW9ucy5zY3NzXCI7XG5pbXBvcnQgQXhTd2lwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3dpcGVyLWVsZW1lbnRcIjtcblxuLy9PdmVycmlkZSBTd2lwZXJcbmNsYXNzIEF4RmVhdHVyZWRDb2xsZWN0aW9uIGV4dGVuZHMgQXhTd2lwZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3dpcGVySW5zdGFuY2UgPSBuZXcgd2luZG93LlN3aXBlcih0aGlzLnNsaWRlciwge1xuICAgICAgICAgICAgbG9vcDogdGhpcy5jb25maWcubG9vcCxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiB0aGlzLmNvbmZpZy5zbGlkZXNUb01vdmUsXG4gICAgICAgICAgICBhdXRvcGxheTogdGhpcy5jb25maWcuYXV0b3BsYXksXG4gICAgICAgICAgICBzcGVlZDogdGhpcy5jb25maWcuc3BlZWQsXG4gICAgICAgICAgICBlZmZlY3Q6IHRoaXMuY29uZmlnLmVmZmVjdCxcbiAgICAgICAgICAgIGZyZWVNb2RlOiB0aGlzLmNvbmZpZy5mcmVlbW9kZV9tb2JpbGUsXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMS4yLFxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjM1LFxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMTIwMDoge1xuICAgICAgICAgICAgICAgICAgICBncmFiQ3Vyc29yOiB0aGlzLmNvbmZpZy5ncmFiQ3Vyc29yLFxuICAgICAgICAgICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IHRoaXMuY29uZmlnLnNsaWRlSW5WaWV3LFxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6IHRoaXMucHJldkJ1dHRvbkVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiB0aGlzLm5leHRCdXR0b25FbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2F4LWxvYWQtc3dpcGVyJykpIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYXgtbG9hZC1zd2lwZXInKVxuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZ2V0KCdmZWF0dXJlZC1jb2xsZWN0aW9uJykgfHwgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdmZWF0dXJlZC1jb2xsZWN0aW9uJywgQXhGZWF0dXJlZENvbGxlY3Rpb24pO1xuXG5sZXQgY29sbGVjdGlvbnNIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9ucy1tdWx0aXBsZSAuZmVhdHVyZWQtY29sbGVjdGlvbnNfX2hlYWRpbmdzX2NvbnRhaW5lciAuZmVhdHVyZWQtY29sbGVjdGlvbnNfX2hlYWRpbmcnKTtcbmxldCBjb2xsZWN0aW9uc1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnMtbXVsdGlwbGUgZmVhdHVyZWQtY29sbGVjdGlvbicpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zSGVhZGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGl0bGUgPSBjb2xsZWN0aW9uc0hlYWRpbmdzW2ldO1xuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XG4gICAgICAgIGxldCB0YWIgPSBjb2xsZWN0aW9uc1RhYnNbaV07XG4gICAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmNvZGVkJykpIHtcbiAgICAgICAgICAgIGxldCBlbmNvZGVkU2xpZGUgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpO1xuICAgICAgICAgICAgZW5jb2RlZFNsaWRlLmZvckVhY2goc2xpZGUgPT4ge1xuICAgICAgICAgICAgICAgIHNsaWRlLmlubmVySFRNTCA9IGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUod2luZG93LmF0b2Ioc2xpZGUuaW5uZXJIVE1MKSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdlbmNvZGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2xvc2VPdGhlclRhYnMoKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2xvc2VPdGhlclRhYnMoKSB7XG4gICAgY29sbGVjdGlvbnNUYWJzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIHNsaWRlLmNsYXNzTGlzdC5jb250YWlucyhcInZpc2libGVcIikgJiYgc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgfSk7XG4gICAgY29sbGVjdGlvbnNIZWFkaW5ncy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmxlXCIpICYmIHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./_dev/js/sections/featured-collections.js\n");

/***/ }),

/***/ "./_dev/styles/sections/featured-collections.scss":
/*!********************************************************!*\
  !*** ./_dev/styles/sections/featured-collections.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L3N0eWxlcy9zZWN0aW9ucy9mZWF0dXJlZC1jb2xsZWN0aW9ucy5zY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F4b21lLy4vX2Rldi9zdHlsZXMvc2VjdGlvbnMvZmVhdHVyZWQtY29sbGVjdGlvbnMuc2Nzcz80Njk0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./_dev/styles/sections/featured-collections.scss\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./_dev/js/sections/featured-collections.js");
/******/ 	
/******/ })()
;