module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme.js */ "./theme.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Hostienda PC\\Documents\\ToDoApp\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ChakraProvider"], {
    theme: _theme_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  })));
}

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])({
  styles: {
    global: {
      // styles for the `body`
      body: {
        height: "100vh",
        bg: "transparent linear-gradient(120deg, #6DD589 0%, #3B8DD5 100%) 0% 0% no-repeat padding-box",
        color: "white",
        pl: "15px",
        pr: "15px",
        pt: "35px",
        margin: "10px"
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline"
        }
      },
      p: {
        color: "Black"
      },
      h1: {
        font: "normal normal bold 34px/51px Poppins",
        color: "Black"
      },
      h5: {
        font: "normal normal 300 16px/25px Poppins",
        color: "Black"
      }
    }
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold",
        // Normally, it is "semibold"
        borderRadius: "28px",
        border: "2px"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px"
        }
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde"
        },
        // 4. We can override existing variants
        solid: props => ({
          bg: props.colorMode === "dark" ? "red.300" : "red.500"
        })
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwiZXh0ZW5kVGhlbWUiLCJzdHlsZXMiLCJnbG9iYWwiLCJib2R5IiwiaGVpZ2h0IiwiYmciLCJjb2xvciIsInBsIiwicHIiLCJwdCIsIm1hcmdpbiIsImEiLCJfaG92ZXIiLCJ0ZXh0RGVjb3JhdGlvbiIsInAiLCJoMSIsImZvbnQiLCJoNSIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJiYXNlU3R5bGUiLCJmb250V2VpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwic2l6ZXMiLCJ4bCIsImgiLCJmb250U2l6ZSIsInB4IiwidmFyaWFudHMiLCJib3hTaGFkb3ciLCJzb2xpZCIsInByb3BzIiwiY29sb3JNb2RlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFLZSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFFdEQsU0FDRSxNQUFDLCtEQUFEO0FBQWdCLFNBQUssRUFBRUMsaURBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQU1ELEM7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQUE7QUFBQTtBQUFBO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxvRUFBVyxDQUFDO0FBQ3RCQyxRQUFNLEVBQUU7QUFDSkMsVUFBTSxFQUFFO0FBQ047QUFDQUMsVUFBSSxFQUFFO0FBQ0pDLGNBQU0sRUFBQyxPQURIO0FBRUpDLFVBQUUsRUFBRSwyRkFGQTtBQUdKQyxhQUFLLEVBQUUsT0FISDtBQUlKQyxVQUFFLEVBQUMsTUFKQztBQUtKQyxVQUFFLEVBQUMsTUFMQztBQU1KQyxVQUFFLEVBQUMsTUFOQztBQU9KQyxjQUFNLEVBQUU7QUFQSixPQUZBO0FBYU47QUFDQUMsT0FBQyxFQUFFO0FBQ0RMLGFBQUssRUFBRSxVQUROO0FBRURNLGNBQU0sRUFBRTtBQUNOQyx3QkFBYyxFQUFFO0FBRFY7QUFGUCxPQWRHO0FBb0JOQyxPQUFDLEVBQUM7QUFDQVIsYUFBSyxFQUFDO0FBRE4sT0FwQkk7QUF1Qk5TLFFBQUUsRUFBRTtBQUNGQyxZQUFJLEVBQUMsc0NBREg7QUFFRlYsYUFBSyxFQUFDO0FBRkosT0F2QkU7QUEyQk5XLFFBQUUsRUFBQztBQUNERCxZQUFJLEVBQUMscUNBREo7QUFFRFYsYUFBSyxFQUFDO0FBRkw7QUEzQkc7QUFESixHQURjO0FBbUN4QlksWUFBVSxFQUFFO0FBQ1ZDLFVBQU0sRUFBRTtBQUNOO0FBQ0VDLGVBQVMsRUFBRTtBQUNYQyxrQkFBVSxFQUFFLE1BREQ7QUFDUztBQUNwQkMsb0JBQVksRUFBRSxNQUZIO0FBR1hDLGNBQU0sRUFBQztBQUhJLE9BRlA7QUFPTjtBQUNBQyxXQUFLLEVBQUU7QUFDTEMsVUFBRSxFQUFFO0FBQ0ZDLFdBQUMsRUFBRSxNQUREO0FBRUZDLGtCQUFRLEVBQUUsSUFGUjtBQUdGQyxZQUFFLEVBQUU7QUFIRjtBQURDLE9BUkQ7QUFlTjtBQUNBQyxjQUFRLEVBQUU7QUFDUix1QkFBZTtBQUNieEIsWUFBRSxFQUFFLFNBRFM7QUFFYnlCLG1CQUFTLEVBQUU7QUFGRSxTQURQO0FBS1I7QUFDQUMsYUFBSyxFQUFHQyxLQUFELEtBQVk7QUFDakIzQixZQUFFLEVBQUUyQixLQUFLLENBQUNDLFNBQU4sS0FBb0IsTUFBcEIsR0FBNkIsU0FBN0IsR0FBeUM7QUFENUIsU0FBWjtBQU5DO0FBaEJKO0FBREU7QUFuQ1ksQ0FBRCxDQUF6QjtBQWlFZWxDLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4uL3RoZW1lLmpzJ1xyXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lLmpzJ1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcblxyXG4gIHJldHVybiggXHJcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApXHJcblxyXG59IiwiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gICAgc3R5bGVzOiB7XHJcbiAgICAgICAgZ2xvYmFsOiB7XHJcbiAgICAgICAgICAvLyBzdHlsZXMgZm9yIHRoZSBgYm9keWBcclxuICAgICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgaGVpZ2h0OlwiMTAwdmhcIixcclxuICAgICAgICAgICAgYmc6IFwidHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzZERDU4OSAwJSwgIzNCOERENSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3hcIixcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgcGw6XCIxNXB4XCIsXHJcbiAgICAgICAgICAgIHByOlwiMTVweFwiLFxyXG4gICAgICAgICAgICBwdDpcIjM1cHhcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHhcIlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy8gc3R5bGVzIGZvciB0aGUgYGFgXHJcbiAgICAgICAgICBhOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcInRlYWwuNTAwXCIsXHJcbiAgICAgICAgICAgIF9ob3Zlcjoge1xyXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHA6e1xyXG4gICAgICAgICAgICBjb2xvcjpcIkJsYWNrXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoMToge1xyXG4gICAgICAgICAgICBmb250Olwibm9ybWFsIG5vcm1hbCBib2xkIDM0cHgvNTFweCBQb3BwaW5zXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOlwiQmxhY2tcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGg1OntcclxuICAgICAgICAgICAgZm9udDpcIm5vcm1hbCBub3JtYWwgMzAwIDE2cHgvMjVweCBQb3BwaW5zXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOlwiQmxhY2tcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQnV0dG9uOiB7XHJcbiAgICAgIC8vIDEuIFdlIGNhbiB1cGRhdGUgdGhlIGJhc2Ugc3R5bGVzXHJcbiAgICAgICAgYmFzZVN0eWxlOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsIC8vIE5vcm1hbGx5LCBpdCBpcyBcInNlbWlib2xkXCJcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjhweFwiLFxyXG4gICAgICAgIGJvcmRlcjpcIjJweFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIDIuIFdlIGNhbiBhZGQgYSBuZXcgYnV0dG9uIHNpemUgb3IgZXh0ZW5kIGV4aXN0aW5nXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgeGw6IHtcclxuICAgICAgICAgIGg6IFwiNTZweFwiLFxyXG4gICAgICAgICAgZm9udFNpemU6IFwibGdcIixcclxuICAgICAgICAgIHB4OiBcIjMycHhcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAvLyAzLiBXZSBjYW4gYWRkIGEgbmV3IHZpc3VhbCB2YXJpYW50XHJcbiAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgXCJ3aXRoLXNoYWRvd1wiOiB7XHJcbiAgICAgICAgICBiZzogXCJyZWQuNDAwXCIsXHJcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMCAwIDJweCAycHggI2VmZGZkZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gNC4gV2UgY2FuIG92ZXJyaWRlIGV4aXN0aW5nIHZhcmlhbnRzXHJcbiAgICAgICAgc29saWQ6IChwcm9wcykgPT4gKHtcclxuICAgICAgICAgIGJnOiBwcm9wcy5jb2xvck1vZGUgPT09IFwiZGFya1wiID8gXCJyZWQuMzAwXCIgOiBcInJlZC41MDBcIixcclxuICAgICAgICB9KSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=