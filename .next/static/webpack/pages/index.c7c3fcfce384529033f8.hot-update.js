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
      setFiltered = props.setFiltered,
      tasks = props.tasks;

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
    setTasks(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newArr));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !edit && __jsx("div", {
    className: "card mb-4 p-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "task-card-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
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
      lineNumber: 44,
      columnNumber: 29
    }
  }, "Eliminar"))), edit && __jsx("div", {
    className: "card mb-3 p-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "task-card-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 61,
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
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9UYXNrQ2FyZC5qcyJdLCJuYW1lcyI6WyJUYXNrQ2FyZCIsInByb3BzIiwidGl0bGUiLCJpZCIsImhhbmRsZVVwZGF0ZSIsImhhbmRsZURlbGV0ZSIsImluZGV4Iiwic3RhdHVzIiwic2V0VGFza3MiLCJzZXRGaWx0ZXJlZCIsInRhc2tzIiwidXNlU3RhdGUiLCJxdWVyeVRpdGxlIiwic2V0UXVlcnlUaXRsZSIsImVkaXQiLCJzZXRFZGl0IiwibmV3QXJyIiwic3RhdGUiLCJhcnIiLCJoYW5kbGVDaGVjayIsImZpbHRlcmVkIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUVoQkMsS0FGZ0IsR0FFdUVELEtBRnZFLENBRWhCQyxLQUZnQjtBQUFBLE1BRVJDLEVBRlEsR0FFdUVGLEtBRnZFLENBRVJFLEVBRlE7QUFBQSxNQUVKQyxZQUZJLEdBRXVFSCxLQUZ2RSxDQUVKRyxZQUZJO0FBQUEsTUFFVUMsWUFGVixHQUV1RUosS0FGdkUsQ0FFVUksWUFGVjtBQUFBLE1BRXdCQyxLQUZ4QixHQUV1RUwsS0FGdkUsQ0FFd0JLLEtBRnhCO0FBQUEsTUFFK0JDLE1BRi9CLEdBRXVFTixLQUZ2RSxDQUUrQk0sTUFGL0I7QUFBQSxNQUV1Q0MsUUFGdkMsR0FFdUVQLEtBRnZFLENBRXVDTyxRQUZ2QztBQUFBLE1BRWlEQyxXQUZqRCxHQUV1RVIsS0FGdkUsQ0FFaURRLFdBRmpEO0FBQUEsTUFFOERDLEtBRjlELEdBRXVFVCxLQUZ2RSxDQUU4RFMsS0FGOUQ7O0FBQUEsa0JBSVlDLHNEQUFRLENBQUNULEtBQUQsQ0FKcEI7QUFBQSxNQUlqQlUsVUFKaUI7QUFBQSxNQUlMQyxhQUpLOztBQUFBLG1CQUtBRixzREFBUSxDQUFDLEtBQUQsQ0FM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N2MzZmNmY2UzODQ1MjkwMzNmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBUYXNrQ2FyZCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUgLCBpZCwgaGFuZGxlVXBkYXRlLCBoYW5kbGVEZWxldGUsIGluZGV4LCBzdGF0dXMsIHNldFRhc2tzLCBzZXRGaWx0ZXJlZCwgdGFza3N9ID0gcHJvcHNcclxuXHJcbiAgICBjb25zdCBbcXVlcnlUaXRsZSwgc2V0UXVlcnlUaXRsZV0gPSB1c2VTdGF0ZSh0aXRsZSlcclxuICAgIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IG5ld0FyciA9IChzdGF0ZSwgaW5kZXgsIHN0YXR1cykgPT4ge1xyXG5cclxuICAgICAgICBsZXQgYXJyID0gc3RhdGU7XHJcbiAgICAgICAgYXJyW2luZGV4XS5zdGF0dXM9ICFzdGF0dXM7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5hcnJdXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGVjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldEZpbHRlcmVkKCAoZmlsdGVyZWQpID0+IG5ld0FycihmaWx0ZXJlZCwgaW5kZXgsIHN0YXR1cykpXHJcbiAgICAgICAgICAgIHNldFRhc2tzKFsuLi5uZXdBcnIgXSApICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICBcclxuICAgICAgICB7IWVkaXQgJiYgKCA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItNCBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIiA+e3RpdGxlfTwvaDU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9IHtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT0geyBoYW5kbGVDaGVja30gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFzay1jYXJkLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXQodHJ1ZSkgfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPSB7KCkgPT4gaGFuZGxlRGVsZXRlKGlkLCBpbmRleCkgfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxpbWluYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcbiAgICAgICAgICAgICAgICB7IGVkaXQgJiYgKCA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItMyBwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnlUaXRsZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFzay1jYXJkLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVwZGF0ZSh0aXRsZSwgcXVlcnlUaXRsZSwgaWQsIGluZGV4LCBzZXRFZGl0KSB9XHJcbiAgICAgICAgICAgICAgICA+QWN0dWFsaXphclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAgc2V0RWRpdChmYWxzZSkgfVxyXG4gICAgICAgICAgICAgICAgPkNhbmNlbGFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4pfVxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0NhcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==