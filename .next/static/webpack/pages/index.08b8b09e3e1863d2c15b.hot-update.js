webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Cards/TaskCard.js":
/*!**************************************!*\
  !*** ./components/Cards/TaskCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Oriana\\Documents\\Daniel\\infocasas\\infocasas-frontend-challenge\\components\\Cards\\TaskCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var TaskCard = function TaskCard(props) {
  _s();

  var title = props.title,
      id = props.id,
      handleUpdate = props.handleUpdate,
      handleDelete = props.handleDelete,
      index = props.index,
      status = props.status,
      setTasks = props.setTasks,
      setFiltered = props.setFiltered;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(title),
      queryTitle = _useState[0],
      setQueryTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      edit = _useState2[0],
      setEdit = _useState2[1];

  var newArr = function newArr(state, index, status) {
    var arr = state;
    arr[index].status = !status;
    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
  };

  var handleCheck = function handleCheck() {
    setFiltered(function (filtered) {
      return newArr(filtered, index, status);
    });
    setTasks(function (tasks) {
      return newArr(tasks, index, status);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !edit && __jsx("div", {
    className: "card mb-4 p-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, title), __jsx("input", {
    className: "form-check-input",
    type: "checkbox",
    checked: status,
    onChange: handleCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "task-card-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return setEdit(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, "Editar"), __jsx("button", {
    className: "btn btn-danger",
    onClick: function onClick() {
      return handleDelete(id, index);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, "Eliminar"))), edit && __jsx("div", {
    className: "card mb-3 p-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx("input", {
    defaultValue: title,
    className: "form-control form-control-lg",
    onChange: function onChange(e) {
      setQueryTitle(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "task-card-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return handleUpdate(title, queryTitle, id, index, setEdit);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "Actualizar"), __jsx("button", {
    className: "btn btn-danger",
    onClick: function onClick() {
      return setEdit(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Cancelar"))));
};

_s(TaskCard, "F9sRmK//wQT9uR6O78uTlW3GXBU=");

_c = TaskCard;
/* harmony default export */ __webpack_exports__["default"] = (TaskCard);

var _c;

$RefreshReg$(_c, "TaskCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9UYXNrQ2FyZC5qcyJdLCJuYW1lcyI6WyJUYXNrQ2FyZCIsInByb3BzIiwidGl0bGUiLCJpZCIsImhhbmRsZVVwZGF0ZSIsImhhbmRsZURlbGV0ZSIsImluZGV4Iiwic3RhdHVzIiwic2V0VGFza3MiLCJzZXRGaWx0ZXJlZCIsInVzZVN0YXRlIiwicXVlcnlUaXRsZSIsInNldFF1ZXJ5VGl0bGUiLCJlZGl0Iiwic2V0RWRpdCIsIm5ld0FyciIsInN0YXRlIiwiYXJyIiwiaGFuZGxlQ2hlY2siLCJmaWx0ZXJlZCIsInRhc2tzIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUVoQkMsS0FGZ0IsR0FFZ0VELEtBRmhFLENBRWhCQyxLQUZnQjtBQUFBLE1BRVJDLEVBRlEsR0FFZ0VGLEtBRmhFLENBRVJFLEVBRlE7QUFBQSxNQUVKQyxZQUZJLEdBRWdFSCxLQUZoRSxDQUVKRyxZQUZJO0FBQUEsTUFFVUMsWUFGVixHQUVnRUosS0FGaEUsQ0FFVUksWUFGVjtBQUFBLE1BRXdCQyxLQUZ4QixHQUVnRUwsS0FGaEUsQ0FFd0JLLEtBRnhCO0FBQUEsTUFFK0JDLE1BRi9CLEdBRWdFTixLQUZoRSxDQUUrQk0sTUFGL0I7QUFBQSxNQUV1Q0MsUUFGdkMsR0FFZ0VQLEtBRmhFLENBRXVDTyxRQUZ2QztBQUFBLE1BRWlEQyxXQUZqRCxHQUVnRVIsS0FGaEUsQ0FFaURRLFdBRmpEOztBQUFBLGtCQUlZQyxzREFBUSxDQUFDUixLQUFELENBSnBCO0FBQUEsTUFJakJTLFVBSmlCO0FBQUEsTUFJTEMsYUFKSzs7QUFBQSxtQkFLQUYsc0RBQVEsQ0FBQyxLQUFELENBTFI7QUFBQSxNQUtqQkcsSUFMaUI7QUFBQSxNQUtYQyxPQUxXOztBQU94QixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVFWLEtBQVIsRUFBZUMsTUFBZixFQUEwQjtBQUNyQyxRQUFJVSxHQUFHLEdBQUdELEtBQVY7QUFDQUMsT0FBRyxDQUFDWCxLQUFELENBQUgsQ0FBV0MsTUFBWCxHQUFtQixDQUFDQSxNQUFwQjtBQUNBLHdHQUFXVSxHQUFYO0FBQ0gsR0FKRDs7QUFNQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ2xCVCxlQUFXLENBQUUsVUFBQ1UsUUFBRDtBQUFBLGFBQWNKLE1BQU0sQ0FBQ0ksUUFBRCxFQUFXYixLQUFYLEVBQWtCQyxNQUFsQixDQUFwQjtBQUFBLEtBQUYsQ0FBWDtBQUNBQyxZQUFRLENBQUUsVUFBQ1ksS0FBRDtBQUFBLGFBQVdMLE1BQU0sQ0FBQ0ssS0FBRCxFQUFRZCxLQUFSLEVBQWVDLE1BQWYsQ0FBakI7QUFBQSxLQUFGLENBQVI7QUFDUCxHQUhEOztBQUtBLFNBQ0ksbUVBRUMsQ0FBQ00sSUFBRCxJQUFXO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkJYLEtBQTdCLENBRFIsRUFFUTtBQUNBLGFBQVMsRUFBQyxrQkFEVjtBQUVBLFFBQUksRUFBQyxVQUZMO0FBR0EsV0FBTyxFQUFHSyxNQUhWO0FBSUEsWUFBUSxFQUFJVyxXQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGUixDQURBLEVBVUE7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRO0FBQ0EsYUFBUyxFQUFDLGlCQURWO0FBRUEsV0FBTyxFQUFFO0FBQUEsYUFBTUosT0FBTyxDQUFDLElBQUQsQ0FBYjtBQUFBLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURSLEVBT1E7QUFDQSxhQUFTLEVBQUMsZ0JBRFY7QUFFQSxXQUFPLEVBQUc7QUFBQSxhQUFNVCxZQUFZLENBQUNGLEVBQUQsRUFBS0csS0FBTCxDQUFsQjtBQUFBLEtBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQUixDQVZBLENBRlosRUEyQlVPLElBQUksSUFBTTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDWjtBQUNBLGdCQUFZLEVBQUVYLEtBRGQ7QUFFQSxhQUFTLEVBQUMsOEJBRlY7QUFHQSxZQUFRLEVBQUUsa0JBQUNtQixDQUFELEVBQU87QUFDYlQsbUJBQWEsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNILEtBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURZLEVBUVo7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQ0EsYUFBUyxFQUFDLGlCQURWO0FBRUEsV0FBTyxFQUFFO0FBQUEsYUFBTW5CLFlBQVksQ0FBQ0YsS0FBRCxFQUFRUyxVQUFSLEVBQW9CUixFQUFwQixFQUF3QkcsS0FBeEIsRUFBK0JRLE9BQS9CLENBQWxCO0FBQUEsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLEVBTUE7QUFDQSxhQUFTLEVBQUMsZ0JBRFY7QUFFQSxXQUFPLEVBQUU7QUFBQSxhQUFPQSxPQUFPLENBQUMsS0FBRCxDQUFkO0FBQUEsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5BLENBUlksQ0EzQnBCLENBREo7QUFvREgsQ0F0RUQ7O0dBQU1kLFE7O0tBQUFBLFE7QUF3RVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA4YjhiMDllM2UxODYzZDJjMTViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFRhc2tDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyB0aXRsZSAsIGlkLCBoYW5kbGVVcGRhdGUsIGhhbmRsZURlbGV0ZSwgaW5kZXgsIHN0YXR1cywgc2V0VGFza3MsIHNldEZpbHRlcmVkfSA9IHByb3BzXHJcblxyXG4gICAgY29uc3QgW3F1ZXJ5VGl0bGUsIHNldFF1ZXJ5VGl0bGVdID0gdXNlU3RhdGUodGl0bGUpXHJcbiAgICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBuZXdBcnIgPSAoc3RhdGUsIGluZGV4LCBzdGF0dXMpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gc3RhdGU7XHJcbiAgICAgICAgYXJyW2luZGV4XS5zdGF0dXM9ICFzdGF0dXM7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5hcnJdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmVkKCAoZmlsdGVyZWQpID0+IG5ld0FycihmaWx0ZXJlZCwgaW5kZXgsIHN0YXR1cykpXHJcbiAgICAgICAgICAgIHNldFRhc2tzKCAodGFza3MpID0+IG5ld0Fycih0YXNrcywgaW5kZXgsIHN0YXR1cykgKSAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgeyFlZGl0ICYmICggPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTQgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCIgPnt0aXRsZX08L2g1PiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPSB7c3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9IHsgaGFuZGxlQ2hlY2t9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2stY2FyZC1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KHRydWUpIH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz0geygpID0+IGhhbmRsZURlbGV0ZShpZCwgaW5kZXgpIH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgICAgICAgICAgICAgeyBlZGl0ICYmICggPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTMgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFF1ZXJ5VGl0bGUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2stY2FyZC1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGRhdGUodGl0bGUsIHF1ZXJ5VGl0bGUsIGlkLCBpbmRleCwgc2V0RWRpdCkgfVxyXG4gICAgICAgICAgICAgICAgPkFjdHVhbGl6YXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gIHNldEVkaXQoZmFsc2UpIH1cclxuICAgICAgICAgICAgICAgID5DYW5jZWxhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tDYXJkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=