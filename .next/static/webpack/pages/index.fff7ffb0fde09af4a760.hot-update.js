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





var _this = undefined,
    _jsxFileName = "C:\\Users\\Oriana\\Documents\\Daniel\\infocasas\\infocasas-frontend-challenge\\pages\\index.js",
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

  return __jsx("div", {
    className: "card p-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "d-flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, "Lista de Tareas"), __jsx(_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    perFiltered: perFiltered,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "btn-group mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return setNewTask(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Nueva tarea"), __jsx("button", {
    className: "btn btn-info",
    onClick: function onClick() {
      return setFiltered(tasks);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, "Todas"), __jsx("button", {
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
      lineNumber: 129,
      columnNumber: 9
    }
  }, "Pendientes"), __jsx("button", {
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
      lineNumber: 139,
      columnNumber: 9
    }
  }, "Realizadas")), newTask && __jsx(_components_Cards_NewTaskCard__WEBPACK_IMPORTED_MODULE_5__["default"], (_jsx = {
    setNewTask: setNewTask,
    handleSummit: handleSummit
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "setNewTask", setNewTask), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 9
  }), _jsx)), loading && __jsx(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
        lineNumber: 161,
        columnNumber: 11
      }
    });
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInByb2Nlc3MiLCJpbmRleCIsImRhdGEiLCJ1c2VTdGF0ZSIsInRhc2tzIiwic2V0VGFza3MiLCJmaWx0ZXJlZCIsInNldEZpbHRlcmVkIiwibmV3VGFzayIsInNldE5ld1Rhc2siLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBlckZpbHRlcmVkIiwic2VhcmNoUGFyYW0iLCJ0YXNrc0ZpbHRlcmVkIiwibGVuZ3RoIiwiZmlsdGVyIiwiZSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibWF0Y2giLCJoYW5kbGVTdW1taXQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsIm5ld0RhdGEiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVVwZGF0ZSIsIm5ld1RpdGxlIiwiaWQiLCJzZXRFZGl0IiwibmV3QXJyIiwiaGFuZGxlRGVsZXRlIiwic3BsaWNlIiwiYXJyIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxtQixHQUF3QkMsMkQ7O0FBRWhDLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUNELElBQUQsQ0FEUjtBQUFBLE1BQ25CRSxLQURtQjtBQUFBLE1BQ1pDLFFBRFk7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUNELElBQUQsQ0FGZDtBQUFBLE1BRW5CSSxRQUZtQjtBQUFBLE1BRVRDLFdBRlM7O0FBQUEsbUJBR0lKLHNEQUFRLENBQUMsS0FBRCxDQUhaO0FBQUEsTUFHbkJLLE9BSG1CO0FBQUEsTUFHVkMsVUFIVTs7QUFBQSxtQkFJSU4sc0RBQVEsQ0FBQyxLQUFELENBSlo7QUFBQSxNQUluQk8sT0FKbUI7QUFBQSxNQUlWQyxVQUpVOztBQU0xQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxXQUFELEVBQWlCO0FBQ25DLFFBQUlDLGFBQWEsR0FBR1YsS0FBcEI7O0FBQ0EsUUFBSVMsV0FBVyxDQUFDRSxNQUFaLElBQXNCLENBQTFCLEVBQTZCO0FBQzNCUixpQkFBVyxDQUFDSCxLQUFELENBQVg7QUFDRCxLQUZELE1BRU87QUFDTFUsbUJBQWEsR0FBR0EsYUFBYSxDQUFDRSxNQUFkLENBQXFCLFVBQUNDLENBQUQ7QUFBQSxlQUNuQ0EsQ0FBQyxDQUFDQyxLQUFGLENBQ0dDLFdBREgsR0FFR0MsT0FGSCxDQUVXLElBRlgsRUFFaUIsRUFGakIsRUFHR0MsS0FISCxDQUlJUixXQUFXLEdBQ1BBLFdBQVcsQ0FBQ00sV0FBWixHQUEwQkMsT0FBMUIsQ0FBa0MsSUFBbEMsRUFBd0MsRUFBeEMsRUFBNENBLE9BQTVDLENBQW9ELElBQXBELEVBQTBELEVBQTFELENBRE8sR0FFUCxFQU5SLENBRG1DO0FBQUEsT0FBckIsQ0FBaEI7QUFVQWIsaUJBQVcsQ0FBQ08sYUFBRCxDQUFYO0FBQ0Q7QUFDRixHQWpCRDs7QUFtQkEsTUFBTVEsWUFBWTtBQUFBLGlNQUFHLGlCQUFPSixLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQlAsd0JBQVUsQ0FBQyxJQUFELENBQVY7QUFEbUI7QUFBQTtBQUFBLHFCQUdNWSxLQUFLLFdBQUl4QixtQkFBSixHQUEyQjtBQUNyRHlCLHNCQUFNLEVBQUUsTUFENkM7QUFFckRDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CVCx1QkFBSyxFQUFFQSxLQURZO0FBRW5CVSx3QkFBTSxFQUFFO0FBRlcsaUJBQWYsQ0FGK0M7QUFNckRDLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVDtBQU40QyxlQUEzQixDQUhYOztBQUFBO0FBR1hDLHNCQUhXO0FBQUE7QUFBQSxxQkFhQUEsUUFBUSxDQUFDQyxJQUFULEVBYkE7O0FBQUE7QUFhYkEsa0JBYmE7QUFjYkMscUJBZGEsR0FjSDVCLEtBZEc7QUFBQTtBQUFBLHFCQWdCWDRCLE9BQU8sQ0FBQ0MsSUFBUixDQUFhRixJQUFiLENBaEJXOztBQUFBO0FBa0JqQjFCLHNCQUFRLENBQUMyQixPQUFELENBQVI7QUFDQXpCLHlCQUFXLENBQUN5QixPQUFELENBQVg7QUFDQXZCLHdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FFLHdCQUFVLENBQUMsS0FBRCxDQUFWO0FBckJpQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXVCakJ1QixxQkFBTyxDQUFDQyxHQUFSO0FBQ0F4Qix3QkFBVSxDQUFDLEtBQUQsQ0FBVjs7QUF4QmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpXLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBNEJBLE1BQU1jLFlBQVk7QUFBQSxpTUFBRyxrQkFBT2xCLEtBQVAsRUFBY21CLFFBQWQsRUFBd0JDLEVBQXhCLEVBQTRCckMsS0FBNUIsRUFBbUNzQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDZkYsUUFBUSxLQUFLbkIsS0FERTtBQUFBO0FBQUE7QUFBQTs7QUFFakJQLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBRmlCO0FBSWYyQixnQkFBRSxHQUFHLENBQUwsR0FBVUEsRUFBRSxHQUFHQSxFQUFmLEdBQXNCQSxFQUFFLEdBQUcsQ0FBM0I7QUFKZTtBQUFBLHFCQU1RZixLQUFLLFdBQUl4QixtQkFBSixjQUEyQnVDLEVBQTNCLEdBQWlDO0FBQzNEZCxzQkFBTSxFQUFFLEtBRG1EO0FBRTNEQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlQsdUJBQUssRUFBRW1CO0FBRFksaUJBQWYsQ0FGcUQ7QUFLM0RSLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVDtBQUxrRCxlQUFqQyxDQU5iOztBQUFBO0FBTVRDLHNCQU5TO0FBQUE7QUFBQSxxQkFnQklBLFFBQVEsQ0FBQ0MsSUFBVCxFQWhCSjs7QUFBQTtBQWdCVEEsa0JBaEJTO0FBaUJYUyxvQkFqQlcsR0FpQkZwQyxLQWpCRTtBQWtCZm9DLG9CQUFNLENBQUN2QyxLQUFELENBQU4sR0FBZ0I4QixJQUFoQjtBQUVBMUIsc0JBQVEsQ0FBQ21DLE1BQUQsQ0FBUjtBQUNBakMseUJBQVcsQ0FBQ2lDLE1BQUQsQ0FBWDtBQUNBN0Isd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQTRCLHFCQUFPLENBQUMsS0FBRCxDQUFQO0FBdkJlO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBeUJmTCxxQkFBTyxDQUFDQyxHQUFSO0FBQ0F4Qix3QkFBVSxDQUFDLEtBQUQsQ0FBVjs7QUExQmU7QUFBQTtBQUFBOztBQUFBO0FBNkJqQnVCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBWjs7QUE3QmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpDLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBaUNBLE1BQU1LLFlBQVk7QUFBQSxpTUFBRyxrQkFBT0gsRUFBUCxFQUFXckMsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJVLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBRG1CO0FBR2pCMkIsZ0JBQUUsR0FBRyxDQUFMLEdBQVVBLEVBQUUsR0FBR0EsRUFBZixHQUFzQkEsRUFBRSxHQUFHLENBQTNCO0FBSGlCO0FBQUEscUJBS1hmLEtBQUssV0FBSXhCLG1CQUFKLGNBQTJCdUMsRUFBM0IsR0FBaUM7QUFDMUNkLHNCQUFNLEVBQUU7QUFEa0MsZUFBakMsQ0FMTTs7QUFBQTtBQVNiZ0Isb0JBVGEsR0FTSnBDLEtBVEk7QUFVakJvQyxvQkFBTSxDQUFDRSxNQUFQLENBQWN6QyxLQUFkLEVBQXFCLENBQXJCO0FBRUFJLHNCQUFRLENBQUMsNkZBQUltQyxNQUFMLEVBQVI7QUFDQWpDLHlCQUFXLENBQUMsNkZBQUlpQyxNQUFMLEVBQVg7QUFDQTdCLHdCQUFVLENBQUMsS0FBRCxDQUFWO0FBZGlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0JqQnVCLHFCQUFPLENBQUNDLEdBQVI7QUFDQXhCLHdCQUFVLENBQUMsS0FBRCxDQUFWOztBQWpCaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWjhCLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBcUJBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsK0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFLE1BQUMsdUVBQUQ7QUFBVyxlQUFXLEVBQUU3QixXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFJRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFdBQU8sRUFBRTtBQUFBLGFBQU1ILFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUtFO0FBQVEsYUFBUyxFQUFDLGNBQWxCO0FBQWlDLFdBQU8sRUFBRTtBQUFBLGFBQU1GLFdBQVcsQ0FBQ0gsS0FBRCxDQUFqQjtBQUFBLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixFQVFFO0FBQ0UsYUFBUyxFQUFDLGlCQURaO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2IsVUFBTXVDLEdBQUcsR0FBR3ZDLEtBQUssQ0FBQ1ksTUFBTixDQUFhLFVBQUMyQixHQUFEO0FBQUEsZUFBU0EsR0FBRyxDQUFDZixNQUFKLEtBQWUsS0FBeEI7QUFBQSxPQUFiLENBQVo7QUFDQXJCLGlCQUFXLENBQUNvQyxHQUFELENBQVg7QUFDRCxLQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkYsRUFrQkU7QUFDRSxhQUFTLEVBQUMsaUJBRFo7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYixVQUFNQSxHQUFHLEdBQUd2QyxLQUFLLENBQUNZLE1BQU4sQ0FBYSxVQUFDMkIsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ2YsTUFBSixLQUFlLElBQXhCO0FBQUEsT0FBYixDQUFaO0FBQ0FyQixpQkFBVyxDQUFDb0MsR0FBRCxDQUFYO0FBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxCRixDQUpGLEVBZ0NHbkMsT0FBTyxJQUNOLE1BQUMscUVBQUQ7QUFDRSxjQUFVLEVBQUVDLFVBRGQ7QUFFRSxnQkFBWSxFQUFFYTtBQUZoQixtSEFHY2IsVUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakNKLEVBd0NHQyxPQUFPLElBQUksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeENkLEVBMENHSixRQUFRLElBQ1BBLFFBQVEsQ0FBQ3NDLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU81QyxLQUFQO0FBQUEsV0FDWCxNQUFDLGtFQUFEO0FBQ0UsU0FBRyxZQUFLNEMsSUFBTCxjQUFhNUMsS0FBYixDQURMO0FBRUUsV0FBSyxFQUFFQSxLQUZUO0FBR0UsUUFBRSxFQUFFNEMsSUFBSSxDQUFDUCxFQUhYO0FBSUUsV0FBSyxFQUFFTyxJQUFJLENBQUMzQixLQUpkO0FBS0UsWUFBTSxFQUFFMkIsSUFBSSxDQUFDakIsTUFMZjtBQU1FLGlCQUFXLEVBQUVyQixXQU5mO0FBT0UsY0FBUSxFQUFFRixRQVBaO0FBUUUsV0FBSyxFQUFFRCxLQVJUO0FBU0Usa0JBQVksRUFBRWdDLFlBVGhCO0FBVUUsa0JBQVksRUFBRUssWUFWaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURXO0FBQUEsR0FBYixDQTNDSixDQURGO0FBNERELENBdktEOztHQUFNeEMsSzs7O0FBMkxTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZmY3ZmZiMGZkZTA5YWY0YTc2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdUYXNrQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkcy9OZXdUYXNrQ2FyZFwiO1xyXG5pbXBvcnQgVGFza0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZHMvVGFza0NhcmRcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG5cclxuY29uc3QgeyBORVhUX1BVQkxJQ19BUElfVVJMIH0gPSBwcm9jZXNzLmVudjtcclxuXHJcbmNvbnN0IGluZGV4ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShkYXRhKTtcclxuICBjb25zdCBbZmlsdGVyZWQsIHNldEZpbHRlcmVkXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG4gIGNvbnN0IFtuZXdUYXNrLCBzZXROZXdUYXNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHBlckZpbHRlcmVkID0gKHNlYXJjaFBhcmFtKSA9PiB7XHJcbiAgICBsZXQgdGFza3NGaWx0ZXJlZCA9IHRhc2tzO1xyXG4gICAgaWYgKHNlYXJjaFBhcmFtLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHNldEZpbHRlcmVkKHRhc2tzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhc2tzRmlsdGVyZWQgPSB0YXNrc0ZpbHRlcmVkLmZpbHRlcigoZSkgPT5cclxuICAgICAgICBlLnRpdGxlXHJcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgLnJlcGxhY2UoLyAvZywgXCJcIilcclxuICAgICAgICAgIC5tYXRjaChcclxuICAgICAgICAgICAgc2VhcmNoUGFyYW1cclxuICAgICAgICAgICAgICA/IHNlYXJjaFBhcmFtLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCBcIlwiKS5yZXBsYWNlKC8jL2csIFwiXCIpXHJcbiAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHNldEZpbHRlcmVkKHRhc2tzRmlsdGVyZWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1bW1pdCA9IGFzeW5jICh0aXRsZSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9QVUJMSUNfQVBJX1VSTH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgbGV0IG5ld0RhdGEgPSB0YXNrcztcclxuXHJcbiAgICAgIGF3YWl0IG5ld0RhdGEucHVzaChqc29uKTtcclxuXHJcbiAgICAgIHNldFRhc2tzKG5ld0RhdGEpO1xyXG4gICAgICBzZXRGaWx0ZXJlZChuZXdEYXRhKTtcclxuICAgICAgc2V0TmV3VGFzayhmYWxzZSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAodGl0bGUsIG5ld1RpdGxlLCBpZCwgaW5kZXgsIHNldEVkaXQpID0+IHtcclxuICAgIGlmIChuZXdUaXRsZSAhPT0gdGl0bGUpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZCA8IDYgPyAoaWQgPSBpZCkgOiAoaWQgPSAxKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtORVhUX1BVQkxJQ19BUElfVVJMfS8ke2lkfWAsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdGl0bGU6IG5ld1RpdGxlLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBsZXQgbmV3QXJyID0gdGFza3M7XHJcbiAgICAgICAgbmV3QXJyW2luZGV4XSA9IGpzb247XHJcblxyXG4gICAgICAgIHNldFRhc2tzKG5ld0Fycik7XHJcbiAgICAgICAgc2V0RmlsdGVyZWQobmV3QXJyKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRFZGl0KGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibm8gc2UgaGEgaGVjaG8gbmluZ3VuYSBtb2RpZmljYWNpw7NuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCwgaW5kZXgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZCA8IDYgPyAoaWQgPSBpZCkgOiAoaWQgPSAxKTtcclxuXHJcbiAgICAgIGF3YWl0IGZldGNoKGAke05FWFRfUFVCTElDX0FQSV9VUkx9LyR7aWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgbmV3QXJyID0gdGFza3M7XHJcbiAgICAgIG5ld0Fyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgc2V0VGFza3MoWy4uLm5ld0Fycl0pO1xyXG4gICAgICBzZXRGaWx0ZXJlZChbLi4ubmV3QXJyXSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHAtM1wiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5MaXN0YSBkZSBUYXJlYXM8L2gxPlxyXG4gICAgICA8U2VhcmNoQmFyIHBlckZpbHRlcmVkPXtwZXJGaWx0ZXJlZH0gLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIG1iLTNcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNldE5ld1Rhc2sodHJ1ZSl9PlxyXG4gICAgICAgICAgTnVldmEgdGFyZWFcclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXJlZCh0YXNrcyl9PlxyXG4gICAgICAgICAgVG9kYXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhcnIgPSB0YXNrcy5maWx0ZXIoKGFycikgPT4gYXJyLnN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZChhcnIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQZW5kaWVudGVzXHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IHRhc2tzLmZpbHRlcigoYXJyKSA9PiBhcnIuc3RhdHVzID09PSB0cnVlKTtcclxuICAgICAgICAgICAgc2V0RmlsdGVyZWQoYXJyKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVhbGl6YWRhc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge25ld1Rhc2sgJiYgKFxyXG4gICAgICAgIDxOZXdUYXNrQ2FyZFxyXG4gICAgICAgICAgc2V0TmV3VGFzaz17c2V0TmV3VGFza31cclxuICAgICAgICAgIGhhbmRsZVN1bW1pdD17aGFuZGxlU3VtbWl0fVxyXG4gICAgICAgICAgc2V0TmV3VGFzaz17c2V0TmV3VGFza31cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblxyXG4gICAgICB7ZmlsdGVyZWQgJiZcclxuICAgICAgICBmaWx0ZXJlZC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8VGFza0NhcmRcclxuICAgICAgICAgICAga2V5PXtgJHtpdGVtfS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICBzdGF0dXM9e2l0ZW0uc3RhdHVzfVxyXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZD17c2V0RmlsdGVyZWR9XHJcbiAgICAgICAgICAgIHNldFRhc2tzPXtzZXRUYXNrc31cclxuICAgICAgICAgICAgdGFza3M9e3Rhc2tzfVxyXG4gICAgICAgICAgICBoYW5kbGVVcGRhdGU9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgaGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfUFVCTElDX0FQSV9VUkx9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9cIixcclxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRhdGEgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==