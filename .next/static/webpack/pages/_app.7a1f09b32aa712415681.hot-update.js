webpackHotUpdate_N_E("pages/_app",{

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");

var theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])({
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
        solid: function solid(props) {
          return {
            bg: props.colorMode === "dark" ? "red.300" : "red.500"
          };
        }
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUuanMiXSwibmFtZXMiOlsidGhlbWUiLCJleHRlbmRUaGVtZSIsInN0eWxlcyIsImdsb2JhbCIsImJvZHkiLCJoZWlnaHQiLCJiZyIsImNvbG9yIiwicGwiLCJwciIsInB0IiwibWFyZ2luIiwiYSIsIl9ob3ZlciIsInRleHREZWNvcmF0aW9uIiwicCIsImgxIiwiZm9udCIsImg1IiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsImJhc2VTdHlsZSIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJzaXplcyIsInhsIiwiaCIsImZvbnRTaXplIiwicHgiLCJ2YXJpYW50cyIsImJveFNoYWRvdyIsInNvbGlkIiwicHJvcHMiLCJjb2xvck1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG9FQUFXLENBQUM7QUFDdEJDLFFBQU0sRUFBRTtBQUNKQyxVQUFNLEVBQUU7QUFDTjtBQUNBQyxVQUFJLEVBQUU7QUFDSkMsY0FBTSxFQUFDLE9BREg7QUFFSkMsVUFBRSxFQUFFLDJGQUZBO0FBR0pDLGFBQUssRUFBRSxPQUhIO0FBSUpDLFVBQUUsRUFBQyxNQUpDO0FBS0pDLFVBQUUsRUFBQyxNQUxDO0FBTUpDLFVBQUUsRUFBQyxNQU5DO0FBT0pDLGNBQU0sRUFBRTtBQVBKLE9BRkE7QUFhTjtBQUNBQyxPQUFDLEVBQUU7QUFDREwsYUFBSyxFQUFFLFVBRE47QUFFRE0sY0FBTSxFQUFFO0FBQ05DLHdCQUFjLEVBQUU7QUFEVjtBQUZQLE9BZEc7QUFvQk5DLE9BQUMsRUFBQztBQUNBUixhQUFLLEVBQUM7QUFETixPQXBCSTtBQXVCTlMsUUFBRSxFQUFFO0FBQ0ZDLFlBQUksRUFBQyxzQ0FESDtBQUVGVixhQUFLLEVBQUM7QUFGSixPQXZCRTtBQTJCTlcsUUFBRSxFQUFDO0FBQ0RELFlBQUksRUFBQyxxQ0FESjtBQUVEVixhQUFLLEVBQUM7QUFGTDtBQTNCRztBQURKLEdBRGM7QUFtQ3hCWSxZQUFVLEVBQUU7QUFDVkMsVUFBTSxFQUFFO0FBQ047QUFDRUMsZUFBUyxFQUFFO0FBQ1hDLGtCQUFVLEVBQUUsTUFERDtBQUNTO0FBQ3BCQyxvQkFBWSxFQUFFLE1BRkg7QUFHWEMsY0FBTSxFQUFDO0FBSEksT0FGUDtBQU9OO0FBQ0FDLFdBQUssRUFBRTtBQUNMQyxVQUFFLEVBQUU7QUFDRkMsV0FBQyxFQUFFLE1BREQ7QUFFRkMsa0JBQVEsRUFBRSxJQUZSO0FBR0ZDLFlBQUUsRUFBRTtBQUhGO0FBREMsT0FSRDtBQWVOO0FBQ0FDLGNBQVEsRUFBRTtBQUNSLHVCQUFlO0FBQ2J4QixZQUFFLEVBQUUsU0FEUztBQUVieUIsbUJBQVMsRUFBRTtBQUZFLFNBRFA7QUFLUjtBQUNBQyxhQUFLLEVBQUUsZUFBQ0MsS0FBRDtBQUFBLGlCQUFZO0FBQ2pCM0IsY0FBRSxFQUFFMkIsS0FBSyxDQUFDQyxTQUFOLEtBQW9CLE1BQXBCLEdBQTZCLFNBQTdCLEdBQXlDO0FBRDVCLFdBQVo7QUFBQTtBQU5DO0FBaEJKO0FBREU7QUFuQ1ksQ0FBRCxDQUF6QjtBQWlFZWxDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2ExZjA5YjMyYWE3MTI0MTU2ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICAgIHN0eWxlczoge1xyXG4gICAgICAgIGdsb2JhbDoge1xyXG4gICAgICAgICAgLy8gc3R5bGVzIGZvciB0aGUgYGJvZHlgXHJcbiAgICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIGhlaWdodDpcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgIGJnOiBcInRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM2REQ1ODkgMCUsICMzQjhERDUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94XCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIHBsOlwiMTVweFwiLFxyXG4gICAgICAgICAgICBwcjpcIjE1cHhcIixcclxuICAgICAgICAgICAgcHQ6XCIzNXB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4XCJcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIHN0eWxlcyBmb3IgdGhlIGBhYFxyXG4gICAgICAgICAgYToge1xyXG4gICAgICAgICAgICBjb2xvcjogXCJ0ZWFsLjUwMFwiLFxyXG4gICAgICAgICAgICBfaG92ZXI6IHtcclxuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwOntcclxuICAgICAgICAgICAgY29sb3I6XCJCbGFja1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaDE6IHtcclxuICAgICAgICAgICAgZm9udDpcIm5vcm1hbCBub3JtYWwgYm9sZCAzNHB4LzUxcHggUG9wcGluc1wiLFxyXG4gICAgICAgICAgICBjb2xvcjpcIkJsYWNrXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoNTp7XHJcbiAgICAgICAgICAgIGZvbnQ6XCJub3JtYWwgbm9ybWFsIDMwMCAxNnB4LzI1cHggUG9wcGluc1wiLFxyXG4gICAgICAgICAgICBjb2xvcjpcIkJsYWNrXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEJ1dHRvbjoge1xyXG4gICAgICAvLyAxLiBXZSBjYW4gdXBkYXRlIHRoZSBiYXNlIHN0eWxlc1xyXG4gICAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCAvLyBOb3JtYWxseSwgaXQgaXMgXCJzZW1pYm9sZFwiXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjI4cHhcIixcclxuICAgICAgICBib3JkZXI6XCIycHhcIlxyXG4gICAgICB9LFxyXG4gICAgICAvLyAyLiBXZSBjYW4gYWRkIGEgbmV3IGJ1dHRvbiBzaXplIG9yIGV4dGVuZCBleGlzdGluZ1xyXG4gICAgICBzaXplczoge1xyXG4gICAgICAgIHhsOiB7XHJcbiAgICAgICAgICBoOiBcIjU2cHhcIixcclxuICAgICAgICAgIGZvbnRTaXplOiBcImxnXCIsXHJcbiAgICAgICAgICBweDogXCIzMnB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgLy8gMy4gV2UgY2FuIGFkZCBhIG5ldyB2aXN1YWwgdmFyaWFudFxyXG4gICAgICB2YXJpYW50czoge1xyXG4gICAgICAgIFwid2l0aC1zaGFkb3dcIjoge1xyXG4gICAgICAgICAgYmc6IFwicmVkLjQwMFwiLFxyXG4gICAgICAgICAgYm94U2hhZG93OiBcIjAgMCAycHggMnB4ICNlZmRmZGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIDQuIFdlIGNhbiBvdmVycmlkZSBleGlzdGluZyB2YXJpYW50c1xyXG4gICAgICAgIHNvbGlkOiAocHJvcHMpID0+ICh7XHJcbiAgICAgICAgICBiZzogcHJvcHMuY29sb3JNb2RlID09PSBcImRhcmtcIiA/IFwicmVkLjMwMFwiIDogXCJyZWQuNTAwXCIsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==