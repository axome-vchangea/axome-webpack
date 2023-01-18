/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_dev/js/components/obfuscations.js":
/*!********************************************!*\
  !*** ./_dev/js/components/obfuscations.js ***!
  \********************************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', _ => {\n  const obflink = document.querySelectorAll('span[data-obflink]')\n  obflink.forEach(function (link) {\n    link.addEventListener('click', (event) => {\n      const encoded_link = link.dataset.obflink\n      if (event.ctrlKey) {\n        const newWindow = window.open(decodeURIComponent(escape(window.atob(encoded_link))), '_blank')\n        newWindow.focus()\n      } else {\n        document.location.href = decodeURIComponent(escape(window.atob(encoded_link)))\n      }\n    })\n  })\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L2pzL2NvbXBvbmVudHMvb2JmdXNjYXRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heG9tZS8uL19kZXYvanMvY29tcG9uZW50cy9vYmZ1c2NhdGlvbnMuanM/NjI4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgXyA9PiB7XG4gIGNvbnN0IG9iZmxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuW2RhdGEtb2JmbGlua10nKVxuICBvYmZsaW5rLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbmNvZGVkX2xpbmsgPSBsaW5rLmRhdGFzZXQub2JmbGlua1xuICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgY29uc3QgbmV3V2luZG93ID0gd2luZG93Lm9wZW4oZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh3aW5kb3cuYXRvYihlbmNvZGVkX2xpbmspKSksICdfYmxhbmsnKVxuICAgICAgICBuZXdXaW5kb3cuZm9jdXMoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUod2luZG93LmF0b2IoZW5jb2RlZF9saW5rKSkpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./_dev/js/components/obfuscations.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_dev/js/components/obfuscations.js"]();
/******/ 	
/******/ })()
;