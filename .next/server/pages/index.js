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
var _jsxFileName = "C:\\Users\\Oriana\\Documents\\Daniel\\todolist\\components\\Cards\\NewTaskCard.js";
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
var _jsxFileName = "C:\\Users\\Oriana\\Documents\\Daniel\\todolist\\components\\Cards\\TaskCard.js";
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
var _jsxFileName = "C:\\Users\\Oriana\\Documents\\Daniel\\todolist\\components\\SearchBar\\SearchBar.js";
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
var _jsxFileName = "C:\\Users\\Oriana\\Documents\\Daniel\\todolist\\components\\Spinner\\Spinner.js";
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
var _jsxFileName = "C:\\Users\\Oriana\\Documents\\Daniel\\todolist\\pages\\index.js";
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
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    width: "40%",
    justify: "space-between",
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
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Todas"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "black",
    background: "white",
    borderColor: "yellow.200",
    colorScheme: "yellow",
    onClick: () => {
      const arr = tasks.filter(arr => arr.status === false);
      setFiltered(arr);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, "Pendientes"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "black",
    background: "white",
    borderColor: "green.300",
    colorScheme: "green",
    onClick: () => {
      const arr = tasks.filter(arr => arr.status === true);
      setFiltered(arr);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy9OZXdUYXNrQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzL1Rhc2tDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwaW5uZXIvU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiIl0sIm5hbWVzIjpbIk5ld1Rhc2tDYXJkIiwicHJvcHMiLCJoYW5kbGVTdW1taXQiLCJzZXROZXdUYXNrIiwicXVlcnlUaXRsZSIsInNldFF1ZXJ5VGl0bGUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwiVGFza0NhcmQiLCJ0aXRsZSIsImlkIiwiaGFuZGxlVXBkYXRlIiwiaGFuZGxlRGVsZXRlIiwiaW5kZXgiLCJzdGF0dXMiLCJzZXRUYXNrcyIsInNldEZpbHRlcmVkIiwiZWRpdCIsInNldEVkaXQiLCJuZXdBcnIiLCJzdGF0ZSIsImFyciIsImhhbmRsZUNoZWNrIiwiZmlsdGVyZWQiLCJ0YXNrcyIsIlNlYXJjaEJhciIsInBlckZpbHRlcmVkIiwiU3Bpbm5lciIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiZGF0YSIsIm5ld1Rhc2siLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlYXJjaFBhcmFtIiwidGFza3NGaWx0ZXJlZCIsImxlbmd0aCIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIm1hdGNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJuZXdEYXRhIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm5ld1RpdGxlIiwic3BsaWNlIiwibWFwIiwiaXRlbSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBSUMsS0FBRCxJQUFXO0FBQzdCLFFBQU07QUFBRUMsZ0JBQUY7QUFBZ0JDO0FBQWhCLE1BQStCRixLQUFyQztBQUVBLFFBQU07QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsc0RBQVEsQ0FB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VUFBVSxDQUFDLElBQUQsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3REEsQ0FMRixDQUpBLENBREY7QUE0RUQsQ0F2TEQ7O0FBeUxPLGVBQWUyRCxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQsUUFBTUMsR0FBRyxHQUFHLE1BQU1sQixLQUFLLENBQUUsR0FBRWYsbUJBQW9CLEVBQXhCLENBQXZCO0FBQ0EsUUFBTUcsSUFBSSxHQUFHLE1BQU04QixHQUFHLENBQUNaLElBQUosRUFBbkI7O0FBRUEsTUFBSSxDQUFDbEIsSUFBTCxFQUFXO0FBQ1RzQixXQUFPLENBQUNDLEdBQVIsQ0FBWXZCLElBQVo7QUFDQSxXQUFPO0FBQ0wrQixjQUFRLEVBQUU7QUFDUkMsbUJBQVcsRUFBRSxHQURMO0FBRVJDLGlCQUFTLEVBQUU7QUFGSDtBQURMLEtBQVA7QUFNRDs7QUFDRCxTQUFPO0FBQ0xsRSxTQUFLLEVBQUU7QUFBRWlDO0FBQUY7QUFERixHQUFQO0FBR0Q7QUFFY2xCLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDcE5BLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG5jb25zdCBOZXdUYXNrQ2FyZCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VtbWl0LCBzZXROZXdUYXNrIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW3F1ZXJ5VGl0bGUsIHNldFF1ZXJ5VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gaGFuZGxlU3VtbWl0KHF1ZXJ5VGl0bGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTMgcC0zXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgbWItM1wiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUYXJlYVwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeVRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFzay1jYXJkLWJ1dHRvblwiPlxyXG4gICAgICAgIDxCdXR0b24gIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgIEFncmVnYXIgdGFyZWFcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE5ld1Rhc2soZmFsc2UpfT5cclxuICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Rhc2tDYXJkO1xyXG4iLCJpbXBvcnQgeyBGbGV4LCBDaGVja2JveCwgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWRDcmVhdGUsIE1kRGVsZXRlLCBNZERvbmUsIE1kQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmNvbnN0IFRhc2tDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUsXHJcbiAgICBpZCxcclxuICAgIGhhbmRsZVVwZGF0ZSxcclxuICAgIGhhbmRsZURlbGV0ZSxcclxuICAgIGluZGV4LFxyXG4gICAgc3RhdHVzLFxyXG4gICAgc2V0VGFza3MsXHJcbiAgICBzZXRGaWx0ZXJlZCxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtxdWVyeVRpdGxlLCBzZXRRdWVyeVRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcclxuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5ld0FyciA9IChzdGF0ZSwgaW5kZXgsIHN0YXR1cykgPT4ge1xyXG4gICAgbGV0IGFyciA9IHN0YXRlO1xyXG4gICAgYXJyW2luZGV4XS5zdGF0dXMgPSAhc3RhdHVzO1xyXG4gICAgcmV0dXJuIFsuLi5hcnJdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gKCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyZWQoKGZpbHRlcmVkKSA9PiBuZXdBcnIoZmlsdGVyZWQsIGluZGV4LCBzdGF0dXMpKTtcclxuICAgIHNldFRhc2tzKCh0YXNrcykgPT4gbmV3QXJyKHRhc2tzLCBpbmRleCwgc3RhdHVzKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHshZWRpdCAmJiAoXHJcbiAgICAgICAgPEZsZXggbWFyZ2luPVwiMTBweFwiPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICBjb2xvclNjaGVtZT1cImdyZWVuXCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXR1c31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoNT57dGl0bGV9PC9oNT5cclxuICAgICAgICAgIDxNZENyZWF0ZSBzaXplPVwiMjVweFwiIGNvbG9yPVwiIzZDNkM2Q1wiIG9uQ2xpY2s9eygpID0+IHNldEVkaXQodHJ1ZSl9IC8+XHJcbiAgICAgICAgICA8TWREZWxldGVcclxuICAgICAgICAgICAgc2l6ZT1cIjI1cHhcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIiM2QzZDNkNcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaWQsIGluZGV4KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2VkaXQgJiYgKFxyXG4gICAgICAgIDxGbGV4IG1hcmdpbj1cIjEwcHhcIj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgY29sb3I9XCJCbGFja1wiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRRdWVyeVRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxNZERvbmVcclxuICAgICAgICAgICAgICBzaXplPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCIjNkM2QzZDXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlVXBkYXRlKHRpdGxlLCBxdWVyeVRpdGxlLCBpZCwgaW5kZXgsIHNldEVkaXQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TWRDbG9zZVxyXG4gICAgICAgICAgICAgIHNpemU9XCIyNXB4XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cIiM2QzZDNkNcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXQoZmFsc2UpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICBcclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0NhcmQ7XHJcblxyXG4vKiBcclxuPGlucHV0XHJcbnR5cGU9XCJjaGVja2JveFwiXHJcbmNoZWNrZWQ9e3N0YXR1c31cclxub25DaGFuZ2U9e2hhbmRsZUNoZWNrfVxyXG4vPlxyXG4gKi8iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuY29uc3QgU2VhcmNoQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwZXJGaWx0ZXJlZCB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW5wdXRcclxuICAgICAgY29sb3I9XCJCbGFja1wiXHJcbiAgICAgIGJvcmRlclJhZGl1cz1cIjI4cHhcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciB0YXJlYVwiXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgIHBlckZpbHRlcmVkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU3Bpbm5lciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdUYXNrQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkcy9OZXdUYXNrQ2FyZFwiO1xyXG5pbXBvcnQgVGFza0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZHMvVGFza0NhcmRcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5jb25zdCB7IE5FWFRfUFVCTElDX0FQSV9VUkwgfSA9IHByb2Nlc3MuZW52O1xyXG5cclxuY29uc3QgaW5kZXggPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgY29uc3QgW25ld1Rhc2ssIHNldE5ld1Rhc2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgcGVyRmlsdGVyZWQgPSAoc2VhcmNoUGFyYW0pID0+IHtcclxuICAgIGxldCB0YXNrc0ZpbHRlcmVkID0gdGFza3M7XHJcbiAgICBpZiAoc2VhcmNoUGFyYW0ubGVuZ3RoID09IDApIHtcclxuICAgICAgc2V0RmlsdGVyZWQodGFza3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFza3NGaWx0ZXJlZCA9IHRhc2tzRmlsdGVyZWQuZmlsdGVyKChlKSA9PlxyXG4gICAgICAgIGUudGl0bGVcclxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAucmVwbGFjZSgvIC9nLCBcIlwiKVxyXG4gICAgICAgICAgLm1hdGNoKFxyXG4gICAgICAgICAgICBzZWFyY2hQYXJhbVxyXG4gICAgICAgICAgICAgID8gc2VhcmNoUGFyYW0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csIFwiXCIpLnJlcGxhY2UoLyMvZywgXCJcIilcclxuICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgc2V0RmlsdGVyZWQodGFza3NGaWx0ZXJlZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VtbWl0ID0gYXN5bmMgKHRpdGxlKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtORVhUX1BVQkxJQ19BUElfVVJMfWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBsZXQgbmV3RGF0YSA9IHRhc2tzO1xyXG5cclxuICAgICAgYXdhaXQgbmV3RGF0YS5wdXNoKGpzb24pO1xyXG5cclxuICAgICAgc2V0VGFza3MobmV3RGF0YSk7XHJcbiAgICAgIHNldEZpbHRlcmVkKG5ld0RhdGEpO1xyXG4gICAgICBzZXROZXdUYXNrKGZhbHNlKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jICh0aXRsZSwgbmV3VGl0bGUsIGlkLCBpbmRleCwgc2V0RWRpdCkgPT4ge1xyXG4gICAgaWYgKG5ld1RpdGxlICE9PSB0aXRsZSkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlkIDwgNiA/IChpZCA9IGlkKSA6IChpZCA9IDEpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke05FWFRfUFVCTElDX0FQSV9VUkx9LyR7aWR9YCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0aXRsZTogbmV3VGl0bGUsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGxldCBuZXdBcnIgPSB0YXNrcztcclxuICAgICAgICBuZXdBcnJbaW5kZXhdID0ganNvbjtcclxuXHJcbiAgICAgICAgc2V0VGFza3MobmV3QXJyKTtcclxuICAgICAgICBzZXRGaWx0ZXJlZChuZXdBcnIpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJubyBzZSBoYSBoZWNobyBuaW5ndW5hIG1vZGlmaWNhY2nDs25cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkLCBpbmRleCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlkIDwgNiA/IChpZCA9IGlkKSA6IChpZCA9IDEpO1xyXG5cclxuICAgICAgYXdhaXQgZmV0Y2goYCR7TkVYVF9QVUJMSUNfQVBJX1VSTH0vJHtpZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBuZXdBcnIgPSB0YXNrcztcclxuICAgICAgbmV3QXJyLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICBzZXRUYXNrcyhbLi4ubmV3QXJyXSk7XHJcbiAgICAgIHNldEZpbHRlcmVkKFsuLi5uZXdBcnJdKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBcclxuICAgIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XHJcbiAgICBhbGlnbj1cImNlbnRlclwiICAgIFxyXG4gICAgID5cclxuICAgIDxCb3ggXHJcbiAgICBiYWNrZ3JvdW5kPVwid2hpdGVcIiBcclxuICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgd2lkdGg9XCI3MCVcIlxyXG4gICAgPlxyXG4gICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxyXG4gICAgICBhbGlnbj17XCJjZW50ZXJcIn0gPlxyXG5cclxuICAgICAgPGgxPkxpc3RhIGRlIHRhcmVhczwvaDE+XHJcbiAgICAgIDxGbGV4IHByPXtcIjU1cHhcIn1cclxuICAgICAgcGw9e1wiNTVweFwifSBcclxuICAgICAgbWI9e1wiMjBweFwifSA+XHJcbiAgICAgIDxTZWFyY2hCYXIgcGVyRmlsdGVyZWQ9e3BlckZpbHRlcmVkfSAvPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIFxyXG5cclxuICAgICAgPEZsZXhcclxuICAgICAgd2lkdGg9XCI0MCVcIlxyXG4gICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiID5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmxhY2tcIiBiYWNrZ3JvdW5kPVwid2hpdGVcIiAgYm9yZGVyQ29sb3I9XCJjeWFuLjQwMFwiIGNvbG9yU2NoZW1lPVwiY3lhblwiIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcmVkKHRhc2tzKX0+XHJcbiAgICAgICAgICBUb2Rhc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJibGFja1wiIGJhY2tncm91bmQ9XCJ3aGl0ZVwiICBib3JkZXJDb2xvcj1cInllbGxvdy4yMDBcIiBjb2xvclNjaGVtZT1cInllbGxvd1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IHRhc2tzLmZpbHRlcigoYXJyKSA9PiBhcnIuc3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmVkKGFycik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgUGVuZGllbnRlc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmxhY2tcIiBiYWNrZ3JvdW5kPVwid2hpdGVcIiAgYm9yZGVyQ29sb3I9XCJncmVlbi4zMDBcIiBjb2xvclNjaGVtZT1cImdyZWVuXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXJyID0gdGFza3MuZmlsdGVyKChhcnIpID0+IGFyci5zdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZChhcnIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBSZWFsaXphZGFzXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAge25ld1Rhc2sgJiYgKFxyXG4gICAgICAgIDxOZXdUYXNrQ2FyZFxyXG4gICAgICAgICAgc2V0TmV3VGFzaz17c2V0TmV3VGFza31cclxuICAgICAgICAgIGhhbmRsZVN1bW1pdD17aGFuZGxlU3VtbWl0fVxyXG4gICAgICAgICAgc2V0TmV3VGFzaz17c2V0TmV3VGFza31cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblxyXG4gICAgICB7ZmlsdGVyZWQgJiZcclxuICAgICAgICBmaWx0ZXJlZC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8VGFza0NhcmRcclxuICAgICAgICAgICAga2V5PXtgJHtpdGVtfS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICBzdGF0dXM9e2l0ZW0uc3RhdHVzfVxyXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZD17c2V0RmlsdGVyZWR9XHJcbiAgICAgICAgICAgIHNldFRhc2tzPXtzZXRUYXNrc31cclxuICAgICAgICAgICAgdGFza3M9e3Rhc2tzfVxyXG4gICAgICAgICAgICBoYW5kbGVVcGRhdGU9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgaGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXROZXdUYXNrKHRydWUpfT5OdWV2YSB0YXJlYTwvQnV0dG9uPlxyXG48L0ZsZXg+XHJcbiAgICA8L0JveD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9QVUJMSUNfQVBJX1VSTH1gKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiL1wiLFxyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGF0YSB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL21kXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=