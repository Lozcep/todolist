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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cards/NewTaskCard.js":
/*!*****************************************!*\
  !*** ./components/Cards/NewTaskCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Hostienda PC\\Documents\\ToDoApp\\components\\Cards\\NewTaskCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NewTaskCard = props => {
  const {
    handleSummit,
    setNewTask
  } = props;
  const {
    0: queryTitle,
    1: setQueryTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleClick = () => handleSummit(queryTitle);

  return __jsx("div", {
    className: "card mb-3 p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("input", {
    className: "form-control form-control-lg mb-3",
    placeholder: "Tarea",
    onChange: e => setQueryTitle(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "task-card-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Agregar tarea"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setNewTask(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Cancelar")));
};

/* harmony default export */ __webpack_exports__["default"] = (NewTaskCard);

/***/ }),

/***/ "./components/Cards/TaskCard.js":
/*!**************************************!*\
  !*** ./components/Cards/TaskCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Hostienda PC\\Documents\\ToDoApp\\components\\Cards\\TaskCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const TaskCard = props => {
  const {
    title,
    id,
    handleUpdate,
    handleDelete,
    index,
    status,
    setTasks,
    setFiltered
  } = props;
  const {
    0: queryTitle,
    1: setQueryTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(title);
  const {
    0: edit,
    1: setEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const newArr = (state, index, status) => {
    let arr = state;
    arr[index].status = !status;
    return [...arr];
  };

  const handleCheck = () => {
    setFiltered(filtered => newArr(filtered, index, status));
    setTasks(tasks => newArr(tasks, index, status));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !edit && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    margin: "10px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], {
    colorScheme: "green",
    checked: status,
    onChange: handleCheck,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, title), __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdCreate"], {
    size: "25px",
    color: "#6C6C6C",
    onClick: () => setEdit(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdDelete"], {
    size: "25px",
    color: "#6C6C6C",
    onClick: () => handleDelete(id, index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), edit && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    margin: "10px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    color: "Black",
    defaultValue: title,
    className: "form-control form-control-lg",
    onChange: e => {
      setQueryTitle(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdDone"], {
    size: "25px",
    color: "#6C6C6C",
    onClick: () => handleUpdate(title, queryTitle, id, index, setEdit),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdClose"], {
    size: "25px",
    color: "#6C6C6C",
    onClick: () => setEdit(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskCard);
/* 
<input
type="checkbox"
checked={status}
onChange={handleCheck}
/>
 */

/***/ }),

/***/ "./components/SearchBar/SearchBar.js":
/*!*******************************************!*\
  !*** ./components/SearchBar/SearchBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Hostienda PC\\Documents\\ToDoApp\\components\\SearchBar\\SearchBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SearchBar = props => {
  const {
    perFiltered
  } = props;
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    color: "Black",
    borderRadius: "28px",
    placeholder: "Buscar tarea",
    onChange: e => {
      perFiltered(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./components/Spinner/Spinner.js":
/*!***************************************!*\
  !*** ./components/Spinner/Spinner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Hostienda PC\\Documents\\ToDoApp\\components\\Spinner\\Spinner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Spinner = () => {
  return __jsx("div", {
    className: "d-flex justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "spinner-border text-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Cards_NewTaskCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Cards/NewTaskCard */ "./components/Cards/NewTaskCard.js");
/* harmony import */ var _components_Cards_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cards/TaskCard */ "./components/Cards/TaskCard.js");
/* harmony import */ var _components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBar/SearchBar */ "./components/SearchBar/SearchBar.js");
/* harmony import */ var _components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Spinner/Spinner */ "./components/Spinner/Spinner.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Hostienda PC\\Documents\\ToDoApp\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  NEXT_PUBLIC_API_URL
} = process.env;

const index = ({
  data
}) => {
  const {
    0: tasks,
    1: setTasks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data);
  const {
    0: filtered,
    1: setFiltered
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data);
  const {
    0: newTask,
    1: setNewTask
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const perFiltered = searchParam => {
    let tasksFiltered = tasks;

    if (searchParam.length == 0) {
      setFiltered(tasks);
    } else {
      tasksFiltered = tasksFiltered.filter(e => e.title.toLowerCase().replace(/ /g, "").match(searchParam ? searchParam.toLowerCase().replace(/ /g, "").replace(/#/g, "") : ""));
      setFiltered(tasksFiltered);
    }
  };

  const handleSummit = async title => {
    setLoading(true);

    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        body: JSON.stringify({
          title: title,
          status: false
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      let json = await response.json();
      let newData = tasks;
      await newData.push(json);
      setTasks(newData);
      setFiltered(newData);
      setNewTask(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleUpdate = async (title, newTitle, id, index, setEdit) => {
    if (newTitle !== title) {
      setLoading(true);

      try {
        id < 6 ? id = id : id = 1;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            title: newTitle
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
        const json = await response.json();
        let newArr = tasks;
        newArr[index] = json;
        setTasks(newArr);
        setFiltered(newArr);
        setLoading(false);
        setEdit(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      console.log("no se ha hecho ninguna modificación");
    }
  };

  const handleDelete = async (id, index) => {
    setLoading(true);

    try {
      id < 6 ? id = id : id = 1;
      await fetch(`${NEXT_PUBLIC_API_URL}/${id}`, {
        method: "DELETE"
      });
      let newArr = tasks;
      newArr.splice(index, 1);
      setTasks([...newArr]);
      setFiltered([...newArr]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: "column",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    background: "white",
    height: "100%",
    width: "70%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: "column",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "Lista de tareas"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    pr: "55px",
    pl: "55px",
    mb: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    perFiltered: perFiltered,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "black",
    background: "white",
    borderColor: "cyan.400",
    colorScheme: "cyan",
    onClick: () => setFiltered(tasks),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, "Todas"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: "btn btn-warning",
    onClick: () => {
      const arr = tasks.filter(arr => arr.status === false);
      setFiltered(arr);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, "Pendientes"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: "btn btn-success",
    onClick: () => {
      const arr = tasks.filter(arr => arr.status === true);
      setFiltered(arr);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, "Realizadas")), newTask && __jsx(_components_Cards_NewTaskCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setNewTask: setNewTask,
    handleSummit: handleSummit,
    setNewTask: setNewTask,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }), loading && __jsx(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 19
    }
  }), filtered && filtered.map((item, index) => __jsx(_components_Cards_TaskCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: `${item}-${index}`,
    index: index,
    id: item.id,
    title: item.title,
    status: item.status,
    setFiltered: setFiltered,
    setTasks: setTasks,
    tasks: tasks,
    handleUpdate: handleUpdate,
    handleDelete: handleDelete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: () => setNewTask(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, "Nueva tarea"))));
};

async function getServerSideProps(context) {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}`);
  const data = await res.json();

  if (!data) {
    console.log(data);
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: {
      data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (index);

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

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy9OZXdUYXNrQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzL1Rhc2tDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwaW5uZXIvU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiIl0sIm5hbWVzIjpbIk5ld1Rhc2tDYXJkIiwicHJvcHMiLCJoYW5kbGVTdW1taXQiLCJzZXROZXdUYXNrIiwicXVlcnlUaXRsZSIsInNldFF1ZXJ5VGl0bGUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwiVGFza0NhcmQiLCJ0aXRsZSIsImlkIiwiaGFuZGxlVXBkYXRlIiwiaGFuZGxlRGVsZXRlIiwiaW5kZXgiLCJzdGF0dXMiLCJzZXRUYXNrcyIsInNldEZpbHRlcmVkIiwiZWRpdCIsInNldEVkaXQiLCJuZXdBcnIiLCJzdGF0ZSIsImFyciIsImhhbmRsZUNoZWNrIiwiZmlsdGVyZWQiLCJ0YXNrcyIsIlNlYXJjaEJhciIsInBlckZpbHRlcmVkIiwiU3Bpbm5lciIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiZGF0YSIsIm5ld1Rhc2siLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlYXJjaFBhcmFtIiwidGFza3NGaWx0ZXJlZCIsImxlbmd0aCIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIm1hdGNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJuZXdEYXRhIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm5ld1RpdGxlIiwic3BsaWNlIiwibWFwIiwiaXRlbSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBSUMsS0FBRCxJQUFXO0FBQzdCLFFBQU07QUFBRUMsZ0JBQUY7QUFBZ0JDO0FBQWhCLE1BQStCRixLQUFyQztBQUVBLFFBQU07QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsc0RBQVEsQ0FB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RUFBeEIsQ0FBdkI7QUFDQSxRQUFNRyxJQUFJLEdBQUcsTUFBTThCLEdBQUcsQ0FBQ1osSUFBSixFQUFuQjs7QUFFQSxNQUFJLENBQUNsQixJQUFMLEVBQVc7QUFDVHNCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsSUFBWjtBQUNBLFdBQU87QUFDTCtCLGNBQVEsRUFBRTtBQUNSQyxtQkFBVyxFQUFFLEdBREw7QUFFUkMsaUJBQVMsRUFBRTtBQUZIO0FBREwsS0FBUDtBQU1EOztBQUNELFNBQU87QUFDTGxFLFNBQUssRUFBRTtBQUFFaUM7QUFBRjtBQURGLEdBQVA7QUFHRDtBQUVjbEIsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNwTkEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuXHJcbmNvbnN0IE5ld1Rhc2tDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGVTdW1taXQsIHNldE5ld1Rhc2sgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbcXVlcnlUaXRsZSwgc2V0UXVlcnlUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiBoYW5kbGVTdW1taXQocXVlcnlUaXRsZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItMyBwLTNcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZyBtYi0zXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlRhcmVhXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrLWNhcmQtYnV0dG9uXCI+XHJcbiAgICAgICAgPEJ1dHRvbiAgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgQWdyZWdhciB0YXJlYVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0TmV3VGFzayhmYWxzZSl9PlxyXG4gICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3VGFza0NhcmQ7XHJcbiIsImltcG9ydCB7IEZsZXgsIENoZWNrYm94LCBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZENyZWF0ZSwgTWREZWxldGUsIE1kRG9uZSwgTWRDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuY29uc3QgVGFza0NhcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIGlkLFxyXG4gICAgaGFuZGxlVXBkYXRlLFxyXG4gICAgaGFuZGxlRGVsZXRlLFxyXG4gICAgaW5kZXgsXHJcbiAgICBzdGF0dXMsXHJcbiAgICBzZXRUYXNrcyxcclxuICAgIHNldEZpbHRlcmVkLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW3F1ZXJ5VGl0bGUsIHNldFF1ZXJ5VGl0bGVdID0gdXNlU3RhdGUodGl0bGUpO1xyXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbmV3QXJyID0gKHN0YXRlLCBpbmRleCwgc3RhdHVzKSA9PiB7XHJcbiAgICBsZXQgYXJyID0gc3RhdGU7XHJcbiAgICBhcnJbaW5kZXhdLnN0YXR1cyA9ICFzdGF0dXM7XHJcbiAgICByZXR1cm4gWy4uLmFycl07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJlZCgoZmlsdGVyZWQpID0+IG5ld0FycihmaWx0ZXJlZCwgaW5kZXgsIHN0YXR1cykpO1xyXG4gICAgc2V0VGFza3MoKHRhc2tzKSA9PiBuZXdBcnIodGFza3MsIGluZGV4LCBzdGF0dXMpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgeyFlZGl0ICYmIChcclxuICAgICAgICA8RmxleCBtYXJnaW49XCIxMHB4XCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hlY2tlZD17c3RhdHVzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hlY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGg1Pnt0aXRsZX08L2g1PlxyXG4gICAgICAgICAgPE1kQ3JlYXRlIHNpemU9XCIyNXB4XCIgY29sb3I9XCIjNkM2QzZDXCIgb25DbGljaz17KCkgPT4gc2V0RWRpdCh0cnVlKX0gLz5cclxuICAgICAgICAgIDxNZERlbGV0ZVxyXG4gICAgICAgICAgICBzaXplPVwiMjVweFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwiIzZDNkM2Q1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpZCwgaW5kZXgpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7ZWRpdCAmJiAoXHJcbiAgICAgICAgPEZsZXggbWFyZ2luPVwiMTBweFwiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBjb2xvcj1cIkJsYWNrXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFF1ZXJ5VGl0bGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPE1kRG9uZVxyXG4gICAgICAgICAgICAgIHNpemU9XCIyNXB4XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cIiM2QzZDNkNcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVVcGRhdGUodGl0bGUsIHF1ZXJ5VGl0bGUsIGlkLCBpbmRleCwgc2V0RWRpdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxNZENsb3NlXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiIzZDNkM2Q1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdChmYWxzZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrQ2FyZDtcclxuXHJcbi8qIFxyXG48aW5wdXRcclxudHlwZT1cImNoZWNrYm94XCJcclxuY2hlY2tlZD17c3RhdHVzfVxyXG5vbkNoYW5nZT17aGFuZGxlQ2hlY2t9XHJcbi8+XHJcbiAqLyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5jb25zdCBTZWFyY2hCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHBlckZpbHRlcmVkIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dFxyXG4gICAgICBjb2xvcj1cIkJsYWNrXCJcclxuICAgICAgYm9yZGVyUmFkaXVzPVwiMjhweFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIHRhcmVhXCJcclxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgcGVyRmlsdGVyZWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTcGlubmVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5ld1Rhc2tDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRzL05ld1Rhc2tDYXJkXCI7XHJcbmltcG9ydCBUYXNrQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkcy9UYXNrQ2FyZFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmNvbnN0IHsgTkVYVF9QVUJMSUNfQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG5jb25zdCBpbmRleCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkLCBzZXRGaWx0ZXJlZF0gPSB1c2VTdGF0ZShkYXRhKTtcclxuICBjb25zdCBbbmV3VGFzaywgc2V0TmV3VGFza10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBwZXJGaWx0ZXJlZCA9IChzZWFyY2hQYXJhbSkgPT4ge1xyXG4gICAgbGV0IHRhc2tzRmlsdGVyZWQgPSB0YXNrcztcclxuICAgIGlmIChzZWFyY2hQYXJhbS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBzZXRGaWx0ZXJlZCh0YXNrcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXNrc0ZpbHRlcmVkID0gdGFza3NGaWx0ZXJlZC5maWx0ZXIoKGUpID0+XHJcbiAgICAgICAgZS50aXRsZVxyXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgIC5yZXBsYWNlKC8gL2csIFwiXCIpXHJcbiAgICAgICAgICAubWF0Y2goXHJcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtXHJcbiAgICAgICAgICAgICAgPyBzZWFyY2hQYXJhbS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgXCJcIikucmVwbGFjZSgvIy9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBzZXRGaWx0ZXJlZCh0YXNrc0ZpbHRlcmVkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdW1taXQgPSBhc3luYyAodGl0bGUpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke05FWFRfUFVCTElDX0FQSV9VUkx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGxldCBuZXdEYXRhID0gdGFza3M7XHJcblxyXG4gICAgICBhd2FpdCBuZXdEYXRhLnB1c2goanNvbik7XHJcblxyXG4gICAgICBzZXRUYXNrcyhuZXdEYXRhKTtcclxuICAgICAgc2V0RmlsdGVyZWQobmV3RGF0YSk7XHJcbiAgICAgIHNldE5ld1Rhc2soZmFsc2UpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKHRpdGxlLCBuZXdUaXRsZSwgaWQsIGluZGV4LCBzZXRFZGl0KSA9PiB7XHJcbiAgICBpZiAobmV3VGl0bGUgIT09IHRpdGxlKSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWQgPCA2ID8gKGlkID0gaWQpIDogKGlkID0gMSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9QVUJMSUNfQVBJX1VSTH0vJHtpZH1gLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBuZXdUaXRsZSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgbGV0IG5ld0FyciA9IHRhc2tzO1xyXG4gICAgICAgIG5ld0FycltpbmRleF0gPSBqc29uO1xyXG5cclxuICAgICAgICBzZXRUYXNrcyhuZXdBcnIpO1xyXG4gICAgICAgIHNldEZpbHRlcmVkKG5ld0Fycik7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vIHNlIGhhIGhlY2hvIG5pbmd1bmEgbW9kaWZpY2FjacOzblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWQgPCA2ID8gKGlkID0gaWQpIDogKGlkID0gMSk7XHJcblxyXG4gICAgICBhd2FpdCBmZXRjaChgJHtORVhUX1BVQkxJQ19BUElfVVJMfS8ke2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5ld0FyciA9IHRhc2tzO1xyXG4gICAgICBuZXdBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgIHNldFRhc2tzKFsuLi5uZXdBcnJdKTtcclxuICAgICAgc2V0RmlsdGVyZWQoWy4uLm5ld0Fycl0pO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IFxyXG4gICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cclxuICAgIGFsaWduPVwiY2VudGVyXCIgICAgXHJcbiAgICAgPlxyXG4gICAgPEJveCBcclxuICAgIGJhY2tncm91bmQ9XCJ3aGl0ZVwiIFxyXG4gICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICB3aWR0aD1cIjcwJVwiXHJcbiAgICA+XHJcbiAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XHJcbiAgICAgIGFsaWduPXtcImNlbnRlclwifSA+XHJcblxyXG4gICAgICA8aDE+TGlzdGEgZGUgdGFyZWFzPC9oMT5cclxuICAgICAgPEZsZXggcHI9e1wiNTVweFwifVxyXG4gICAgICBwbD17XCI1NXB4XCJ9IFxyXG4gICAgICBtYj17XCIyMHB4XCJ9ID5cclxuICAgICAgPFNlYXJjaEJhciBwZXJGaWx0ZXJlZD17cGVyRmlsdGVyZWR9IC8+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgXHJcblxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmxhY2tcIiBiYWNrZ3JvdW5kPVwid2hpdGVcIiAgYm9yZGVyQ29sb3I9XCJjeWFuLjQwMFwiIGNvbG9yU2NoZW1lPVwiY3lhblwiIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcmVkKHRhc2tzKX0+XHJcbiAgICAgICAgICBUb2Rhc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IHRhc2tzLmZpbHRlcigoYXJyKSA9PiBhcnIuc3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmVkKGFycik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgUGVuZGllbnRlc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhcnIgPSB0YXNrcy5maWx0ZXIoKGFycikgPT4gYXJyLnN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmVkKGFycik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlYWxpemFkYXNcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtuZXdUYXNrICYmIChcclxuICAgICAgICA8TmV3VGFza0NhcmRcclxuICAgICAgICAgIHNldE5ld1Rhc2s9e3NldE5ld1Rhc2t9XHJcbiAgICAgICAgICBoYW5kbGVTdW1taXQ9e2hhbmRsZVN1bW1pdH1cclxuICAgICAgICAgIHNldE5ld1Rhc2s9e3NldE5ld1Rhc2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cclxuICAgICAge2ZpbHRlcmVkICYmXHJcbiAgICAgICAgZmlsdGVyZWQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFRhc2tDYXJkXHJcbiAgICAgICAgICAgIGtleT17YCR7aXRlbX0tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgc3RhdHVzPXtpdGVtLnN0YXR1c31cclxuICAgICAgICAgICAgc2V0RmlsdGVyZWQ9e3NldEZpbHRlcmVkfVxyXG4gICAgICAgICAgICBzZXRUYXNrcz17c2V0VGFza3N9XHJcbiAgICAgICAgICAgIHRhc2tzPXt0YXNrc31cclxuICAgICAgICAgICAgaGFuZGxlVXBkYXRlPXtoYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0TmV3VGFzayh0cnVlKX0+TnVldmEgdGFyZWE8L0J1dHRvbj5cclxuPC9GbGV4PlxyXG4gICAgPC9Cb3g+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfUFVCTElDX0FQSV9VUkx9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9cIixcclxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRhdGEgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9