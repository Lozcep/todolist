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
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, title), __jsx("input", {
    className: "form-check-input",
    type: "checkbox",
    checked: status,
    onChange: handleCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "task-card-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return setEdit(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Editar"), __jsx("button", {
    className: "btn btn-danger",
    onClick: function onClick() {
      return handleDelete(id, index);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Eliminar"))), edit && __jsx("div", {
    className: "card mb-3 p-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
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
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "task-card-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return handleUpdate(title, queryTitle, id, index, setEdit);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Actualizar"), __jsx("button", {
    className: "btn btn-danger",
    onClick: function onClick() {
      return setEdit(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9UYXNrQ2FyZC5qcyJdLCJuYW1lcyI6WyJUYXNrQ2FyZCIsInByb3BzIiwidGl0bGUiLCJpZCIsImhhbmRsZVVwZGF0ZSIsImhhbmRsZURlbGV0ZSIsImluZGV4Iiwic3RhdHVzIiwic2V0VGFza3MiLCJzZXRGaWx0ZXJlZCIsInVzZVN0YXRlIiwicXVlcnlUaXRsZSIsInNldFF1ZXJ5VGl0bGUiLCJlZGl0Iiwic2V0RWRpdCIsIm5ld0FyciIsInN0YXRlIiwiYXJyIiwiaGFuZGxlQ2hlY2siLCJmaWx0ZXJlZCIsInRhc2tzIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUV4QkMsS0FGd0IsR0FVdEJELEtBVnNCLENBRXhCQyxLQUZ3QjtBQUFBLE1BR3hCQyxFQUh3QixHQVV0QkYsS0FWc0IsQ0FHeEJFLEVBSHdCO0FBQUEsTUFJeEJDLFlBSndCLEdBVXRCSCxLQVZzQixDQUl4QkcsWUFKd0I7QUFBQSxNQUt4QkMsWUFMd0IsR0FVdEJKLEtBVnNCLENBS3hCSSxZQUx3QjtBQUFBLE1BTXhCQyxLQU53QixHQVV0QkwsS0FWc0IsQ0FNeEJLLEtBTndCO0FBQUEsTUFPeEJDLE1BUHdCLEdBVXRCTixLQVZzQixDQU94Qk0sTUFQd0I7QUFBQSxNQVF4QkMsUUFSd0IsR0FVdEJQLEtBVnNCLENBUXhCTyxRQVJ3QjtBQUFBLE1BU3hCQyxXQVR3QixHQVV0QlIsS0FWc0IsQ0FTeEJRLFdBVHdCOztBQUFBLGtCQVlVQyxzREFBUSxDQUFDUixLQUFELENBWmxCO0FBQUEsTUFZbkJTLFVBWm1CO0FBQUEsTUFZUEMsYUFaTzs7QUFBQSxtQkFhRkYsc0RBQVEsQ0FBQyxLQUFELENBYk47QUFBQSxNQWFuQkcsSUFibUI7QUFBQSxNQWFiQyxP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LCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjkwNDY2NjIxOTk1OTMxNTg2NWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGFza0NhcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIGlkLFxyXG4gICAgaGFuZGxlVXBkYXRlLFxyXG4gICAgaGFuZGxlRGVsZXRlLFxyXG4gICAgaW5kZXgsXHJcbiAgICBzdGF0dXMsXHJcbiAgICBzZXRUYXNrcyxcclxuICAgIHNldEZpbHRlcmVkLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW3F1ZXJ5VGl0bGUsIHNldFF1ZXJ5VGl0bGVdID0gdXNlU3RhdGUodGl0bGUpO1xyXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbmV3QXJyID0gKHN0YXRlLCBpbmRleCwgc3RhdHVzKSA9PiB7XHJcbiAgICBsZXQgYXJyID0gc3RhdGU7XHJcbiAgICBhcnJbaW5kZXhdLnN0YXR1cyA9ICFzdGF0dXM7XHJcbiAgICByZXR1cm4gWy4uLmFycl07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJlZCgoZmlsdGVyZWQpID0+IG5ld0FycihmaWx0ZXJlZCwgaW5kZXgsIHN0YXR1cykpO1xyXG4gICAgc2V0VGFza3MoKHRhc2tzKSA9PiBuZXdBcnIodGFza3MsIGluZGV4LCBzdGF0dXMpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgeyFlZGl0ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItNCBwLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3RpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdHVzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrLWNhcmQtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0RWRpdCh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgRWRpdGFyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaWQsIGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEVsaW1pbmFyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7ZWRpdCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTMgcC0zXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFF1ZXJ5VGl0bGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFzay1jYXJkLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlVXBkYXRlKHRpdGxlLCBxdWVyeVRpdGxlLCBpZCwgaW5kZXgsIHNldEVkaXQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWN0dWFsaXphclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXQoZmFsc2UpfT5cclxuICAgICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9