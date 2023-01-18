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

/***/ "./_dev/js/sections/slider.js":
/*!************************************!*\
  !*** ./_dev/js/sections/slider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Styles_sections_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Styles/sections/slider.scss */ \"./_dev/styles/sections/slider.scss\");\n/* harmony import */ var _components_swiper_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/swiper-element */ \"./_dev/js/components/swiper-element.js\");\n\n\n\n//Calcul hauteur de l'image si option \"adapté à la taille de l'écran\"\n// let sectionSlider = document.querySelector('[data-ax-section=\"slider\"]');\n\n// const calcFullHeight = () => {\n//     let img = sectionSlider.querySelectorAll('.swiper-slide:not(.mobile_content-outside) .media--display'),\n//         headerHeight = document.getElementById('shopify-section-header').offsetHeight,\n//         announcementBarHeight = document.getElementById('shopify-section-announcement-bar').offsetHeight,\n//         heightToRemove = headerHeight + announcementBarHeight + 'px';\n//     img.forEach(image => {\n//         image.style.height = `calc(100vh - ${heightToRemove})`;\n//     })\n// }\n//\n// if (sectionSlider.querySelectorAll('.media--display') !== undefined) {\n//     calcFullHeight();\n// }\n\n//Override Swiper\nclass AxSlider extends _components_swiper_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor() {\n        super();\n    }\n\n    init () {\n        let firstSlide = this.config.random_slide && this.config.loop ? Math.floor(Math.random() * this.config.slider_length) : 0;\n\n        this.swiperInstance = new window.Swiper(this.slider, {\n            loop: this.config.loop,\n            slidesPerView: this.config.slideInView,\n            slidesPerGroup: this.config.slidesToMove,\n            autoplay: this.config.autoplay,\n            speed: this.config.speed,\n            effect: this.config.effect,\n            freeMode: this.config.freemode_mobile,\n            initialSlide: firstSlide,\n            pagination: {\n                el: this.paginationEl,\n            },\n            navigation: {\n                prevEl: this.prevButtonEl,\n                nextEl: this.nextButtonEl,\n            },\n            breakpoints: {\n                1200: {\n                    grabCursor: this.config.grabCursor,\n                    freeMode: false,\n                }\n            }\n        });\n\n        //LazyLoad\n        this.swiperInstance.el.addEventListener('mouseenter', () => {\n            let otherSlides = JSON.parse(decodeURIComponent(escape(window.atob(this.swiperInstance.el.dataset.otherSlides))));\n            this.swiperInstance.appendSlide(otherSlides);\n            this.swiperInstance.el.removeAttribute('data-other-slides');\n        }, { once: true });\n    }\n}\n\ncustomElements.get('swiper-slider') || customElements.define('swiper-slider', AxSlider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L2pzL3NlY3Rpb25zL3NsaWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heG9tZS8uL19kZXYvanMvc2VjdGlvbnMvc2xpZGVyLmpzPzkxNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiU3R5bGVzL3NlY3Rpb25zL3NsaWRlci5zY3NzXCI7XG5pbXBvcnQgQXhTd2lwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3dpcGVyLWVsZW1lbnRcIjtcblxuLy9DYWxjdWwgaGF1dGV1ciBkZSBsJ2ltYWdlIHNpIG9wdGlvbiBcImFkYXB0w6kgw6AgbGEgdGFpbGxlIGRlIGwnw6ljcmFuXCJcbi8vIGxldCBzZWN0aW9uU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYXgtc2VjdGlvbj1cInNsaWRlclwiXScpO1xuXG4vLyBjb25zdCBjYWxjRnVsbEhlaWdodCA9ICgpID0+IHtcbi8vICAgICBsZXQgaW1nID0gc2VjdGlvblNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlOm5vdCgubW9iaWxlX2NvbnRlbnQtb3V0c2lkZSkgLm1lZGlhLS1kaXNwbGF5JyksXG4vLyAgICAgICAgIGhlYWRlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9waWZ5LXNlY3Rpb24taGVhZGVyJykub2Zmc2V0SGVpZ2h0LFxuLy8gICAgICAgICBhbm5vdW5jZW1lbnRCYXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcGlmeS1zZWN0aW9uLWFubm91bmNlbWVudC1iYXInKS5vZmZzZXRIZWlnaHQsXG4vLyAgICAgICAgIGhlaWdodFRvUmVtb3ZlID0gaGVhZGVySGVpZ2h0ICsgYW5ub3VuY2VtZW50QmFySGVpZ2h0ICsgJ3B4Jztcbi8vICAgICBpbWcuZm9yRWFjaChpbWFnZSA9PiB7XG4vLyAgICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IGBjYWxjKDEwMHZoIC0gJHtoZWlnaHRUb1JlbW92ZX0pYDtcbi8vICAgICB9KVxuLy8gfVxuLy9cbi8vIGlmIChzZWN0aW9uU2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZWRpYS0tZGlzcGxheScpICE9PSB1bmRlZmluZWQpIHtcbi8vICAgICBjYWxjRnVsbEhlaWdodCgpO1xuLy8gfVxuXG4vL092ZXJyaWRlIFN3aXBlclxuY2xhc3MgQXhTbGlkZXIgZXh0ZW5kcyBBeFN3aXBlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5pdCAoKSB7XG4gICAgICAgIGxldCBmaXJzdFNsaWRlID0gdGhpcy5jb25maWcucmFuZG9tX3NsaWRlICYmIHRoaXMuY29uZmlnLmxvb3AgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbmZpZy5zbGlkZXJfbGVuZ3RoKSA6IDA7XG5cbiAgICAgICAgdGhpcy5zd2lwZXJJbnN0YW5jZSA9IG5ldyB3aW5kb3cuU3dpcGVyKHRoaXMuc2xpZGVyLCB7XG4gICAgICAgICAgICBsb29wOiB0aGlzLmNvbmZpZy5sb29wLFxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogdGhpcy5jb25maWcuc2xpZGVJblZpZXcsXG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogdGhpcy5jb25maWcuc2xpZGVzVG9Nb3ZlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRoaXMuY29uZmlnLmF1dG9wbGF5LFxuICAgICAgICAgICAgc3BlZWQ6IHRoaXMuY29uZmlnLnNwZWVkLFxuICAgICAgICAgICAgZWZmZWN0OiB0aGlzLmNvbmZpZy5lZmZlY3QsXG4gICAgICAgICAgICBmcmVlTW9kZTogdGhpcy5jb25maWcuZnJlZW1vZGVfbW9iaWxlLFxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiBmaXJzdFNsaWRlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIGVsOiB0aGlzLnBhZ2luYXRpb25FbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgcHJldkVsOiB0aGlzLnByZXZCdXR0b25FbCxcbiAgICAgICAgICAgICAgICBuZXh0RWw6IHRoaXMubmV4dEJ1dHRvbkVsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgMTIwMDoge1xuICAgICAgICAgICAgICAgICAgICBncmFiQ3Vyc29yOiB0aGlzLmNvbmZpZy5ncmFiQ3Vyc29yLFxuICAgICAgICAgICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL0xhenlMb2FkXG4gICAgICAgIHRoaXMuc3dpcGVySW5zdGFuY2UuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBvdGhlclNsaWRlcyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh3aW5kb3cuYXRvYih0aGlzLnN3aXBlckluc3RhbmNlLmVsLmRhdGFzZXQub3RoZXJTbGlkZXMpKSkpO1xuICAgICAgICAgICAgdGhpcy5zd2lwZXJJbnN0YW5jZS5hcHBlbmRTbGlkZShvdGhlclNsaWRlcyk7XG4gICAgICAgICAgICB0aGlzLnN3aXBlckluc3RhbmNlLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1vdGhlci1zbGlkZXMnKTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZ2V0KCdzd2lwZXItc2xpZGVyJykgfHwgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzd2lwZXItc2xpZGVyJywgQXhTbGlkZXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./_dev/js/sections/slider.js\n");

/***/ }),

/***/ "./_dev/styles/sections/slider.scss":
/*!******************************************!*\
  !*** ./_dev/styles/sections/slider.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L3N0eWxlcy9zZWN0aW9ucy9zbGlkZXIuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heG9tZS8uL19kZXYvc3R5bGVzL3NlY3Rpb25zL3NsaWRlci5zY3NzP2ZlMWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./_dev/styles/sections/slider.scss\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./_dev/js/sections/slider.js");
/******/ 	
/******/ })()
;