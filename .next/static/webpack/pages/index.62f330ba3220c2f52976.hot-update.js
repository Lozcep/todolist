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
    setTasks(function (tasks) {
      return newArr(tasks, index, status);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9UYXNrQ2FyZC5qcyJdLCJuYW1lcyI6WyJUYXNrQ2FyZCIsInByb3BzIiwidGl0bGUiLCJpZCIsImhhbmRsZVVwZGF0ZSIsImhhbmRsZURlbGV0ZSIsImluZGV4Iiwic3RhdHVzIiwic2V0VGFza3MiLCJzZXRGaWx0ZXJlZCIsInRhc2tzIiwidXNlU3RhdGUiLCJxdWVyeVRpdGxlIiwic2V0UXVlcnlUaXRsZSIsImVkaXQiLCJzZXRFZGl0IiwibmV3QXJyIiwic3RhdGUiLCJhcnIiLCJoYW5kbGVDaGVjayIsImZpbHRlcmVkIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUVoQkMsS0FGZ0IsR0FFdUVELEtBRnZFLENBRWhCQyxLQUZnQjtBQUFBLE1BRVJDLEVBRlEsR0FFdUVGLEtBRnZFLENBRVJFLEVBRlE7QUFBQSxNQUVKQyxZQUZJLEdBRXVFSCxLQUZ2RSxDQUVKRyxZQUZJO0FBQUEsTUFFVUMsWUFGVixHQUV1RUosS0FGdkUsQ0FFVUksWUFGVjtBQUFBLE1BRXdCQyxLQUZ4QixHQUV1RUwsS0FGdkUsQ0FFd0JLLEtBRnhCO0FBQUEsTUFFK0JDLE1BRi9CLEdBRXVFTixLQUZ2RSxDQUUrQk0sTUFGL0I7QUFBQSxNQUV1Q0MsUUFGdkMsR0FFdUVQLEtBRnZFLENBRXVDTyxRQUZ2QztBQUFBLE1BRWlEQyxXQUZqRCxHQUV1RVIsS0FGdkUsQ0FFaURRLFdBRmpEO0FBQUEsTUFFOERDLEtBRjlELEdBRXVFVCxLQUZ2RSxDQUU4RFMsS0FGOUQ7O0FBQUEsa0JBSVlDLHNEQUFRLENBQUNULEtBQUQsQ0FKcEI7QUFBQSxNQUlqQlUsVUFKaUI7QUFBQSxNQUlMQyxhQUpLOztBQUFBLG1CQUtBRixzREFBUSxDQUFDLEtBQUQsQ0FM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TWYsUTs7S0FBQUEsUTtBQTJFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjJmMzMwYmEzMjIwYzJmNTI5NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVGFza0NhcmQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHRpdGxlICwgaWQsIGhhbmRsZVVwZGF0ZSwgaGFuZGxlRGVsZXRlLCBpbmRleCwgc3RhdHVzLCBzZXRUYXNrcywgc2V0RmlsdGVyZWQsIHRhc2tzfSA9IHByb3BzXHJcblxyXG4gICAgY29uc3QgW3F1ZXJ5VGl0bGUsIHNldFF1ZXJ5VGl0bGVdID0gdXNlU3RhdGUodGl0bGUpXHJcbiAgICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBuZXdBcnIgPSAoc3RhdGUsIGluZGV4LCBzdGF0dXMpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGFyciA9IHN0YXRlO1xyXG4gICAgICAgIGFycltpbmRleF0uc3RhdHVzPSAhc3RhdHVzO1xyXG4gICAgICAgIHJldHVybiBbLi4uYXJyXVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZCggKGZpbHRlcmVkKSA9PiBuZXdBcnIoZmlsdGVyZWQsIGluZGV4LCBzdGF0dXMpKVxyXG4gICAgICAgICAgICBzZXRUYXNrcyggKHRhc2tzKSA9PiBuZXdBcnIodGFza3MsIGluZGV4LCBzdGF0dXMpICkgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHshZWRpdCAmJiAoIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi00IHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiID57dGl0bGV9PC9oNT4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD0ge3N0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPSB7IGhhbmRsZUNoZWNrfSAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrLWNhcmQtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdCh0cnVlKSB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9IHsoKSA9PiBoYW5kbGVEZWxldGUoaWQsIGluZGV4KSB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGltaW5hclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG5cclxuICAgICAgICAgICAgICAgIHsgZWRpdCAmJiAoIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi0zIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRRdWVyeVRpdGxlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrLWNhcmQtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVXBkYXRlKHRpdGxlLCBxdWVyeVRpdGxlLCBpZCwgaW5kZXgsIHNldEVkaXQpIH1cclxuICAgICAgICAgICAgICAgID5BY3R1YWxpemFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICBzZXRFZGl0KGZhbHNlKSB9XHJcbiAgICAgICAgICAgICAgICA+Q2FuY2VsYXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrQ2FyZFxyXG4iXSwic291cmNlUm9vdCI6IiJ9