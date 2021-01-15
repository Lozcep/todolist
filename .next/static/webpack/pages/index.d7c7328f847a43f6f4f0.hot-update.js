webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Cards_NewTaskCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Cards/NewTaskCard */ "./components/Cards/NewTaskCard.js");
/* harmony import */ var _components_Cards_TaskCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Cards/TaskCard */ "./components/Cards/TaskCard.js");
/* harmony import */ var _components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SearchBar/SearchBar */ "./components/SearchBar/SearchBar.js");
/* harmony import */ var _components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Spinner/Spinner */ "./components/Spinner/Spinner.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");





var _this = undefined,
    _jsxFileName = "C:\\Users\\Hostienda PC\\Documents\\ToDoApp\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






var NEXT_PUBLIC_API_URL = "https://my-json-server.typicode.com/lozcep/infotest/posts";

var index = function index(_ref) {
  _s();

  var _jsx;

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(data),
      tasks = _useState[0],
      setTasks = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(data),
      filtered = _useState2[0],
      setFiltered = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      newTask = _useState3[0],
      setNewTask = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var perFiltered = function perFiltered(searchParam) {
    var tasksFiltered = tasks;

    if (searchParam.length == 0) {
      setFiltered(tasks);
    } else {
      tasksFiltered = tasksFiltered.filter(function (e) {
        return e.title.toLowerCase().replace(/ /g, "").match(searchParam ? searchParam.toLowerCase().replace(/ /g, "").replace(/#/g, "") : "");
      });
      setFiltered(tasksFiltered);
    }
  };

  var handleSummit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(title) {
      var response, json, newData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return fetch("".concat(NEXT_PUBLIC_API_URL), {
                method: "POST",
                body: JSON.stringify({
                  title: title,
                  status: false
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              json = _context.sent;
              newData = tasks;
              _context.next = 11;
              return newData.push(json);

            case 11:
              setTasks(newData);
              setFiltered(newData);
              setNewTask(false);
              setLoading(false);
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              setLoading(false);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 17]]);
    }));

    return function handleSummit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleUpdate = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(title, newTitle, id, index, setEdit) {
      var response, json, newArr;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(newTitle !== title)) {
                _context2.next = 24;
                break;
              }

              setLoading(true);
              _context2.prev = 2;
              id < 6 ? id = id : id = 1;
              _context2.next = 6;
              return fetch("".concat(NEXT_PUBLIC_API_URL, "/").concat(id), {
                method: "PUT",
                body: JSON.stringify({
                  title: newTitle
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              });

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              json = _context2.sent;
              newArr = tasks;
              newArr[index] = json;
              setTasks(newArr);
              setFiltered(newArr);
              setLoading(false);
              setEdit(false);
              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);
              setLoading(false);

            case 22:
              _context2.next = 25;
              break;

            case 24:
              console.log("no se ha hecho ninguna modificación");

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 18]]);
    }));

    return function handleUpdate(_x2, _x3, _x4, _x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleDelete = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(id, index) {
      var newArr;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setLoading(true);
              _context3.prev = 1;
              id < 6 ? id = id : id = 1;
              _context3.next = 5;
              return fetch("".concat(NEXT_PUBLIC_API_URL, "/").concat(id), {
                method: "DELETE"
              });

            case 5:
              newArr = tasks;
              newArr.splice(index, 1);
              setTasks(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(newArr));
              setFiltered(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(newArr));
              setLoading(false);
              _context3.next = 16;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](1);
              console.log(_context3.t0);
              setLoading(false);

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 12]]);
    }));

    return function handleDelete(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();

  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
    flexDirection: "column",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Box"], {
    background: "white",
    height: "100%",
    width: "70%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
    flexDirection: "column",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "Lista de tareas"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
    pr: "55px",
    pl: "55px",
    mb: "20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    perFiltered: perFiltered,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    borderColor: "blue",
    colorScheme: "blue",
    onClick: function onClick() {
      return setFiltered(tasks);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, "Todas"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "btn btn-warning",
    onClick: function onClick() {
      var arr = tasks.filter(function (arr) {
        return arr.status === false;
      });
      setFiltered(arr);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, "Pendientes"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "btn btn-success",
    onClick: function onClick() {
      var arr = tasks.filter(function (arr) {
        return arr.status === true;
      });
      setFiltered(arr);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, "Realizadas")), newTask && __jsx(_components_Cards_NewTaskCard__WEBPACK_IMPORTED_MODULE_5__["default"], (_jsx = {
    setNewTask: setNewTask,
    handleSummit: handleSummit
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "setNewTask", setNewTask), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 9
  }), _jsx)), loading && __jsx(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 19
    }
  }), filtered && filtered.map(function (item, index) {
    return __jsx(_components_Cards_TaskCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "".concat(item, "-").concat(index),
      index: index,
      id: item.id,
      title: item.title,
      status: item.status,
      setFiltered: setFiltered,
      setTasks: setTasks,
      tasks: tasks,
      handleUpdate: handleUpdate,
      handleDelete: handleDelete,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 11
      }
    });
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    onClick: function onClick() {
      return setNewTask(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, "Nueva tarea"))));
};

_s(index, "gmrXPduEcevKeTCBZbG7tlXCrOo=");

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (index);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInByb2Nlc3MiLCJpbmRleCIsImRhdGEiLCJ1c2VTdGF0ZSIsInRhc2tzIiwic2V0VGFza3MiLCJmaWx0ZXJlZCIsInNldEZpbHRlcmVkIiwibmV3VGFzayIsInNldE5ld1Rhc2siLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBlckZpbHRlcmVkIiwic2VhcmNoUGFyYW0iLCJ0YXNrc0ZpbHRlcmVkIiwibGVuZ3RoIiwiZmlsdGVyIiwiZSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibWF0Y2giLCJoYW5kbGVTdW1taXQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsIm5ld0RhdGEiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVVwZGF0ZSIsIm5ld1RpdGxlIiwiaWQiLCJzZXRFZGl0IiwibmV3QXJyIiwiaGFuZGxlRGVsZXRlIiwic3BsaWNlIiwiYXJyIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxtQixHQUF3QkMsMkQ7O0FBRWhDLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUNELElBQUQsQ0FEUjtBQUFBLE1BQ25CRSxLQURtQjtBQUFBLE1BQ1pDLFFBRFk7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUNELElBQUQsQ0FGZDtBQUFBLE1BRW5CSSxRQUZtQjtBQUFBLE1BRVRDLFdBRlM7O0FBQUEsbUJBR0lKLHNEQUFRLENBQUMsS0FBRCxDQUhaO0FBQUEsTUFHbkJL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QyxJQUFJLENBQUNQLEVBSFg7QUFJRSxXQUFLLEVBQUVPLElBQUksQ0FBQzNCLEtBSmQ7QUFLRSxZQUFNLEVBQUUyQixJQUFJLENBQUNqQixNQUxmO0FBTUUsaUJBQVcsRUFBRXJCLFdBTmY7QUFPRSxjQUFRLEVBQUVGLFFBUFo7QUFRRSxXQUFLLEVBQUVELEtBUlQ7QUFTRSxrQkFBWSxFQUFFZ0MsWUFUaEI7QUFVRSxrQkFBWSxFQUFFSyxZQVZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFc7QUFBQSxHQUFiLENBOUNGLEVBNkRBLE1BQUMsdURBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNaEMsVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdEQSxDQUxGLENBSkEsQ0FERjtBQTRFRCxDQXZMRDs7R0FBTVIsSzs7O0FBMk1TQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kN2M3MzI4Zjg0N2E0M2Y2ZjRmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdUYXNrQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkcy9OZXdUYXNrQ2FyZFwiO1xyXG5pbXBvcnQgVGFza0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZHMvVGFza0NhcmRcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5jb25zdCB7IE5FWFRfUFVCTElDX0FQSV9VUkwgfSA9IHByb2Nlc3MuZW52O1xyXG5cclxuY29uc3QgaW5kZXggPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgY29uc3QgW25ld1Rhc2ssIHNldE5ld1Rhc2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgcGVyRmlsdGVyZWQgPSAoc2VhcmNoUGFyYW0pID0+IHtcclxuICAgIGxldCB0YXNrc0ZpbHRlcmVkID0gdGFza3M7XHJcbiAgICBpZiAoc2VhcmNoUGFyYW0ubGVuZ3RoID09IDApIHtcclxuICAgICAgc2V0RmlsdGVyZWQodGFza3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFza3NGaWx0ZXJlZCA9IHRhc2tzRmlsdGVyZWQuZmlsdGVyKChlKSA9PlxyXG4gICAgICAgIGUudGl0bGVcclxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAucmVwbGFjZSgvIC9nLCBcIlwiKVxyXG4gICAgICAgICAgLm1hdGNoKFxyXG4gICAgICAgICAgICBzZWFyY2hQYXJhbVxyXG4gICAgICAgICAgICAgID8gc2VhcmNoUGFyYW0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csIFwiXCIpLnJlcGxhY2UoLyMvZywgXCJcIilcclxuICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgc2V0RmlsdGVyZWQodGFza3NGaWx0ZXJlZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VtbWl0ID0gYXN5bmMgKHRpdGxlKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtORVhUX1BVQkxJQ19BUElfVVJMfWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBsZXQgbmV3RGF0YSA9IHRhc2tzO1xyXG5cclxuICAgICAgYXdhaXQgbmV3RGF0YS5wdXNoKGpzb24pO1xyXG5cclxuICAgICAgc2V0VGFza3MobmV3RGF0YSk7XHJcbiAgICAgIHNldEZpbHRlcmVkKG5ld0RhdGEpO1xyXG4gICAgICBzZXROZXdUYXNrKGZhbHNlKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jICh0aXRsZSwgbmV3VGl0bGUsIGlkLCBpbmRleCwgc2V0RWRpdCkgPT4ge1xyXG4gICAgaWYgKG5ld1RpdGxlICE9PSB0aXRsZSkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlkIDwgNiA/IChpZCA9IGlkKSA6IChpZCA9IDEpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke05FWFRfUFVCTElDX0FQSV9VUkx9LyR7aWR9YCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0aXRsZTogbmV3VGl0bGUsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGxldCBuZXdBcnIgPSB0YXNrcztcclxuICAgICAgICBuZXdBcnJbaW5kZXhdID0ganNvbjtcclxuXHJcbiAgICAgICAgc2V0VGFza3MobmV3QXJyKTtcclxuICAgICAgICBzZXRGaWx0ZXJlZChuZXdBcnIpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJubyBzZSBoYSBoZWNobyBuaW5ndW5hIG1vZGlmaWNhY2nDs25cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkLCBpbmRleCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlkIDwgNiA/IChpZCA9IGlkKSA6IChpZCA9IDEpO1xyXG5cclxuICAgICAgYXdhaXQgZmV0Y2goYCR7TkVYVF9QVUJMSUNfQVBJX1VSTH0vJHtpZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBuZXdBcnIgPSB0YXNrcztcclxuICAgICAgbmV3QXJyLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICBzZXRUYXNrcyhbLi4ubmV3QXJyXSk7XHJcbiAgICAgIHNldEZpbHRlcmVkKFsuLi5uZXdBcnJdKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBcclxuICAgIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XHJcbiAgICBhbGlnbj1cImNlbnRlclwiICAgIFxyXG4gICAgID5cclxuICAgIDxCb3ggXHJcbiAgICBiYWNrZ3JvdW5kPVwid2hpdGVcIiBcclxuICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgd2lkdGg9XCI3MCVcIlxyXG4gICAgPlxyXG4gICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxyXG4gICAgICBhbGlnbj17XCJjZW50ZXJcIn0gPlxyXG5cclxuICAgICAgPGgxPkxpc3RhIGRlIHRhcmVhczwvaDE+XHJcbiAgICAgIDxGbGV4IHByPXtcIjU1cHhcIn1cclxuICAgICAgcGw9e1wiNTVweFwifSBcclxuICAgICAgbWI9e1wiMjBweFwifSA+XHJcbiAgICAgIDxTZWFyY2hCYXIgcGVyRmlsdGVyZWQ9e3BlckZpbHRlcmVkfSAvPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIFxyXG5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgPEJ1dHRvbiBib3JkZXJDb2xvcj1cImJsdWVcIiBjb2xvclNjaGVtZT1cImJsdWVcIiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXJlZCh0YXNrcyl9PlxyXG4gICAgICAgICAgVG9kYXNcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhcnIgPSB0YXNrcy5maWx0ZXIoKGFycikgPT4gYXJyLnN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZChhcnIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgIFBlbmRpZW50ZXNcclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXJyID0gdGFza3MuZmlsdGVyKChhcnIpID0+IGFyci5zdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZChhcnIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBSZWFsaXphZGFzXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7bmV3VGFzayAmJiAoXHJcbiAgICAgICAgPE5ld1Rhc2tDYXJkXHJcbiAgICAgICAgICBzZXROZXdUYXNrPXtzZXROZXdUYXNrfVxyXG4gICAgICAgICAgaGFuZGxlU3VtbWl0PXtoYW5kbGVTdW1taXR9XHJcbiAgICAgICAgICBzZXROZXdUYXNrPXtzZXROZXdUYXNrfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cclxuXHJcbiAgICAgIHtmaWx0ZXJlZCAmJlxyXG4gICAgICAgIGZpbHRlcmVkLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxUYXNrQ2FyZFxyXG4gICAgICAgICAgICBrZXk9e2Ake2l0ZW19LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIHN0YXR1cz17aXRlbS5zdGF0dXN9XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmVkPXtzZXRGaWx0ZXJlZH1cclxuICAgICAgICAgICAgc2V0VGFza3M9e3NldFRhc2tzfVxyXG4gICAgICAgICAgICB0YXNrcz17dGFza3N9XHJcbiAgICAgICAgICAgIGhhbmRsZVVwZGF0ZT17aGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBoYW5kbGVEZWxldGU9e2hhbmRsZURlbGV0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE5ld1Rhc2sodHJ1ZSl9Pk51ZXZhIHRhcmVhPC9CdXR0b24+XHJcbjwvRmxleD5cclxuICAgIDwvQm94PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1BVQkxJQ19BUElfVVJMfWApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogXCIvXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=