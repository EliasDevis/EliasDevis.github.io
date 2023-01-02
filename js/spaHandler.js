/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/spaHandler.js":
/*!*******************************!*\
  !*** ./src/app/spaHandler.js ***!
  \*******************************/
/***/ (() => {

eval("\n// From https://github.com/rafgraph/spa-github-pages\n\nlet pathSegmentsToKeep = 0;\nlet l = window.location;\n\nl.replace(\n    l.protocol +\n        \"//\" +\n        l.hostname +\n        (l.port ? \":\" + l.port : \"\") +\n        l.pathname\n            .split(\"/\")\n            .slice(0, 1 + pathSegmentsToKeep)\n            .join(\"/\") +\n        \"/?/\" +\n        l.pathname\n            .slice(1)\n            .split(\"/\")\n            .slice(pathSegmentsToKeep)\n            .join(\"/\")\n            .replace(/&/g, \"~and~\") +\n        (l.search\n            ? \"&\" + l.search.slice(1).replace(/&/g, \"~and~\")\n            : \"\") +\n        l.hash\n);\n\n//# sourceURL=webpack://portfolio/./src/app/spaHandler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app/spaHandler.js"]();
/******/ 	
/******/ })()
;