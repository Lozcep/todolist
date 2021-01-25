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
    _jsxFileName = "C:\\Users\\Oriana\\Documents\\Daniel\\todolist\\pages\\index.js",
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
    color: "black",
    background: "white",
    borderColor: "cyan.400",
    colorScheme: "cyan",
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
    color: "black",
    background: "white",
    borderColor: "yellow.200",
    colorScheme: "yellow",
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
    color: "black",
    background: "white",
    borderColor: "green.300",
    colorScheme: "green",
    onClick: function onClick() {
      var arr = tasks.filter(function (arr) {
        return arr.status === true;
      });
      setFiltered(arr);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, "Realizadas")), newTask && __jsx(_components_Cards_NewTaskCard__WEBPACK_IMPORTED_MODULE_5__["default"], (_jsx = {
    setNewTask: setNewTask,
    handleSummit: handleSummit
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "setNewTask", setNewTask), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 9
  }), _jsx)), loading && __jsx(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
        lineNumber: 172,
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
      lineNumber: 186,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInByb2Nlc3MiLCJpbmRleCIsImRhdGEiLCJ1c2VTdGF0ZSIsInRhc2tzIiwic2V0VGFza3MiLCJmaWx0ZXJlZCIsInNldEZpbHRlcmVkIiwibmV3VGFzayIsInNldE5ld1Rhc2siLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBlckZpbHRlcmVkIiwic2VhcmNoUGFyYW0iLCJ0YXNrc0ZpbHRlcmVkIiwibGVuZ3RoIiwiZmlsdGVyIiwiZSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibWF0Y2giLCJoYW5kbGVTdW1taXQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsIm5ld0RhdGEiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVVwZGF0ZSIsIm5ld1RpdGxlIiwiaWQiLCJzZXRFZGl0IiwibmV3QXJyIiwiaGFuZGxlRGVsZXRlIiwic3BsaWNlIiwiYXJyIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxtQixHQUF3QkMsMkQ7O0FBRWhDLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUNELElBQUQsQ0FEUjtBQUFBLE1BQ25CRSxLQURtQjtBQUFBLE1BQ1pDLFFBRFk7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUNELElBQUQsQ0FGZDtBQUFBLE1BRW5CSSxRQUZtQjtBQUFBLE1BRVRDLFdBRlM7O0FBQUEsbUJBR0lKLHNEQUFRLENBQUMsS0FBRCxDQUhaO0FBQUEsTUFHbkJL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QUE7QUFBQSxJQXpDWixFQTJDQ0osUUFBUSxJQUNQQSxRQUFRLENBQUNzQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPNUMsS0FBUDtBQUFBLFdBQ1gsTUFBQyxrRUFBRDtBQUNFLFNBQUcsWUFBSzRDLElBQUwsY0FBYTVDLEtBQWIsQ0FETDtBQUVFLFdBQUssRUFBRUEsS0FGVDtBQUdFLFFBQUUsRUFBRTRDLElBQUksQ0FBQ1AsRUFIWDtBQUlFLFdBQUssRUFBRU8sSUFBSSxDQUFDM0IsS0FKZDtBQUtFLFlBQU0sRUFBRTJCLElBQUksQ0FBQ2pCLE1BTGY7QUFNRSxpQkFBVyxFQUFFckIsV0FOZjtBQU9FLGNBQVEsRUFBRUYsUUFQWjtBQVFFLFdBQUssRUFBRUQsS0FSVDtBQVNFLGtCQUFZLEVBQUVnQyxZQVRoQjtBQVVFLGtCQUFZLEVBQUVLLFlBVmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEVztBQUFBLEdBQWIsQ0E1Q0YsRUEyREEsTUFBQyx1REFBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1oQyxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0RBLENBTEYsQ0FKQSxDQURGO0FBMEVELENBckxEOztHQUFNUixLOzs7QUF5TVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQyOWU1ZGFhM2MyNjBmYWRkZGM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5ld1Rhc2tDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRzL05ld1Rhc2tDYXJkXCI7XHJcbmltcG9ydCBUYXNrQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkcy9UYXNrQ2FyZFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmNvbnN0IHsgTkVYVF9QVUJMSUNfQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG5jb25zdCBpbmRleCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkLCBzZXRGaWx0ZXJlZF0gPSB1c2VTdGF0ZShkYXRhKTtcclxuICBjb25zdCBbbmV3VGFzaywgc2V0TmV3VGFza10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBwZXJGaWx0ZXJlZCA9IChzZWFyY2hQYXJhbSkgPT4ge1xyXG4gICAgbGV0IHRhc2tzRmlsdGVyZWQgPSB0YXNrcztcclxuICAgIGlmIChzZWFyY2hQYXJhbS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBzZXRGaWx0ZXJlZCh0YXNrcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXNrc0ZpbHRlcmVkID0gdGFza3NGaWx0ZXJlZC5maWx0ZXIoKGUpID0+XHJcbiAgICAgICAgZS50aXRsZVxyXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgIC5yZXBsYWNlKC8gL2csIFwiXCIpXHJcbiAgICAgICAgICAubWF0Y2goXHJcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtXHJcbiAgICAgICAgICAgICAgPyBzZWFyY2hQYXJhbS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgXCJcIikucmVwbGFjZSgvIy9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBzZXRGaWx0ZXJlZCh0YXNrc0ZpbHRlcmVkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdW1taXQgPSBhc3luYyAodGl0bGUpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke05FWFRfUFVCTElDX0FQSV9VUkx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGxldCBuZXdEYXRhID0gdGFza3M7XHJcblxyXG4gICAgICBhd2FpdCBuZXdEYXRhLnB1c2goanNvbik7XHJcblxyXG4gICAgICBzZXRUYXNrcyhuZXdEYXRhKTtcclxuICAgICAgc2V0RmlsdGVyZWQobmV3RGF0YSk7XHJcbiAgICAgIHNldE5ld1Rhc2soZmFsc2UpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKHRpdGxlLCBuZXdUaXRsZSwgaWQsIGluZGV4LCBzZXRFZGl0KSA9PiB7XHJcbiAgICBpZiAobmV3VGl0bGUgIT09IHRpdGxlKSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWQgPCA2ID8gKGlkID0gaWQpIDogKGlkID0gMSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9QVUJMSUNfQVBJX1VSTH0vJHtpZH1gLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBuZXdUaXRsZSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgbGV0IG5ld0FyciA9IHRhc2tzO1xyXG4gICAgICAgIG5ld0FycltpbmRleF0gPSBqc29uO1xyXG5cclxuICAgICAgICBzZXRUYXNrcyhuZXdBcnIpO1xyXG4gICAgICAgIHNldEZpbHRlcmVkKG5ld0Fycik7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vIHNlIGhhIGhlY2hvIG5pbmd1bmEgbW9kaWZpY2FjacOzblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWQgPCA2ID8gKGlkID0gaWQpIDogKGlkID0gMSk7XHJcblxyXG4gICAgICBhd2FpdCBmZXRjaChgJHtORVhUX1BVQkxJQ19BUElfVVJMfS8ke2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5ld0FyciA9IHRhc2tzO1xyXG4gICAgICBuZXdBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgIHNldFRhc2tzKFsuLi5uZXdBcnJdKTtcclxuICAgICAgc2V0RmlsdGVyZWQoWy4uLm5ld0Fycl0pO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IFxyXG4gICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cclxuICAgIGFsaWduPVwiY2VudGVyXCIgICAgXHJcbiAgICAgPlxyXG4gICAgPEJveCBcclxuICAgIGJhY2tncm91bmQ9XCJ3aGl0ZVwiIFxyXG4gICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICB3aWR0aD1cIjcwJVwiXHJcbiAgICA+XHJcbiAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XHJcbiAgICAgIGFsaWduPXtcImNlbnRlclwifSA+XHJcblxyXG4gICAgICA8aDE+TGlzdGEgZGUgdGFyZWFzPC9oMT5cclxuICAgICAgPEZsZXggcHI9e1wiNTVweFwifVxyXG4gICAgICBwbD17XCI1NXB4XCJ9IFxyXG4gICAgICBtYj17XCIyMHB4XCJ9ID5cclxuICAgICAgPFNlYXJjaEJhciBwZXJGaWx0ZXJlZD17cGVyRmlsdGVyZWR9IC8+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgXHJcblxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmxhY2tcIiBiYWNrZ3JvdW5kPVwid2hpdGVcIiAgYm9yZGVyQ29sb3I9XCJjeWFuLjQwMFwiIGNvbG9yU2NoZW1lPVwiY3lhblwiIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcmVkKHRhc2tzKX0+XHJcbiAgICAgICAgICBUb2Rhc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJibGFja1wiIGJhY2tncm91bmQ9XCJ3aGl0ZVwiICBib3JkZXJDb2xvcj1cInllbGxvdy4yMDBcIiBjb2xvclNjaGVtZT1cInllbGxvd1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IHRhc2tzLmZpbHRlcigoYXJyKSA9PiBhcnIuc3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmVkKGFycik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgUGVuZGllbnRlc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmxhY2tcIiBiYWNrZ3JvdW5kPVwid2hpdGVcIiAgYm9yZGVyQ29sb3I9XCJncmVlbi4zMDBcIiBjb2xvclNjaGVtZT1cImdyZWVuXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXJyID0gdGFza3MuZmlsdGVyKChhcnIpID0+IGFyci5zdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZChhcnIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBSZWFsaXphZGFzXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7bmV3VGFzayAmJiAoXHJcbiAgICAgICAgPE5ld1Rhc2tDYXJkXHJcbiAgICAgICAgICBzZXROZXdUYXNrPXtzZXROZXdUYXNrfVxyXG4gICAgICAgICAgaGFuZGxlU3VtbWl0PXtoYW5kbGVTdW1taXR9XHJcbiAgICAgICAgICBzZXROZXdUYXNrPXtzZXROZXdUYXNrfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cclxuXHJcbiAgICAgIHtmaWx0ZXJlZCAmJlxyXG4gICAgICAgIGZpbHRlcmVkLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxUYXNrQ2FyZFxyXG4gICAgICAgICAgICBrZXk9e2Ake2l0ZW19LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIHN0YXR1cz17aXRlbS5zdGF0dXN9XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmVkPXtzZXRGaWx0ZXJlZH1cclxuICAgICAgICAgICAgc2V0VGFza3M9e3NldFRhc2tzfVxyXG4gICAgICAgICAgICB0YXNrcz17dGFza3N9XHJcbiAgICAgICAgICAgIGhhbmRsZVVwZGF0ZT17aGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBoYW5kbGVEZWxldGU9e2hhbmRsZURlbGV0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE5ld1Rhc2sodHJ1ZSl9Pk51ZXZhIHRhcmVhPC9CdXR0b24+XHJcbjwvRmxleD5cclxuICAgIDwvQm94PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1BVQkxJQ19BUElfVVJMfWApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogXCIvXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=