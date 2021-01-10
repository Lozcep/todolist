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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Cards/NewTaskCard.js
var __jsx = external_react_default.a.createElement;


const NewTaskCard = props => {
  const {
    handleSummit,
    setNewTask
  } = props;
  const {
    0: queryTitle,
    1: setQueryTitle
  } = Object(external_react_["useState"])("");

  const handleClick = () => handleSummit(queryTitle);

  return __jsx("div", {
    className: "card mb-3 p-3"
  }, __jsx("input", {
    className: "form-control form-control-lg mb-3",
    placeholder: "Tarea",
    onChange: e => setQueryTitle(e.target.value)
  }), __jsx("div", {
    className: "task-card-button"
  }, __jsx("button", {
    className: "btn btn-primary",
    onClick: handleClick
  }, "Agregar tarea"), __jsx("button", {
    className: "btn btn-danger",
    onClick: () => setNewTask(false)
  }, "Cancelar")));
};

/* harmony default export */ var Cards_NewTaskCard = (NewTaskCard);
// CONCATENATED MODULE: ./components/Cards/TaskCard.js
var TaskCard_jsx = external_react_default.a.createElement;


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
  } = Object(external_react_["useState"])(title);
  const {
    0: edit,
    1: setEdit
  } = Object(external_react_["useState"])(false);

  const newArr = (state, index, status) => {
    let arr = state;
    arr[index].status = !status;
    return [...arr];
  };

  const handleCheck = () => {
    setFiltered(filtered => newArr(filtered, index, status));
    setTasks(tasks => newArr(tasks, index, status));
  };

  return TaskCard_jsx(external_react_default.a.Fragment, null, !edit && TaskCard_jsx("div", {
    className: "card mb-4 p-3"
  }, TaskCard_jsx("div", {
    className: "d-flex justify-content-between"
  }, TaskCard_jsx("h5", {
    className: "card-title"
  }, title), TaskCard_jsx("input", {
    className: "form-check-input",
    type: "checkbox",
    checked: status,
    onChange: handleCheck
  })), TaskCard_jsx("div", {
    className: "task-card-button"
  }, TaskCard_jsx("button", {
    className: "btn btn-primary",
    onClick: () => setEdit(true)
  }, "Editar"), TaskCard_jsx("button", {
    className: "btn btn-danger",
    onClick: () => handleDelete(id, index)
  }, "Eliminar"))), edit && TaskCard_jsx("div", {
    className: "card mb-3 p-3"
  }, TaskCard_jsx("input", {
    defaultValue: title,
    className: "form-control form-control-lg",
    onChange: e => {
      setQueryTitle(e.target.value);
    }
  }), TaskCard_jsx("div", {
    className: "task-card-button"
  }, TaskCard_jsx("button", {
    className: "btn btn-primary",
    onClick: () => handleUpdate(title, queryTitle, id, index, setEdit)
  }, "Actualizar"), TaskCard_jsx("button", {
    className: "btn btn-danger",
    onClick: () => setEdit(false)
  }, "Cancelar"))));
};

/* harmony default export */ var Cards_TaskCard = (TaskCard);
// CONCATENATED MODULE: ./components/SearchBar/SearchBar.js
var SearchBar_jsx = external_react_default.a.createElement;


const SearchBar = props => {
  const {
    perFiltered
  } = props;
  return SearchBar_jsx("input", {
    className: "form-control form-control-lg mb-3",
    placeholder: "Buscar tarea",
    onChange: e => {
      perFiltered(e.target.value);
    }
  });
};

/* harmony default export */ var SearchBar_SearchBar = (SearchBar);
// CONCATENATED MODULE: ./components/Spinner/Spinner.js
var Spinner_jsx = external_react_default.a.createElement;


const Spinner = () => {
  return Spinner_jsx("div", {
    className: "d-flex justify-content-center"
  }, Spinner_jsx("div", {
    className: "spinner-border text-primary"
  }));
};

/* harmony default export */ var Spinner_Spinner = (Spinner);
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;





const {
  NEXT_PUBLIC_API_URL
} = process.env;

const pages_index = ({
  data
}) => {
  const {
    0: tasks,
    1: setTasks
  } = Object(external_react_["useState"])(data);
  const {
    0: filtered,
    1: setFiltered
  } = Object(external_react_["useState"])(data);
  const {
    0: newTask,
    1: setNewTask
  } = Object(external_react_["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

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

  return pages_jsx("div", {
    className: "card p-3"
  }, pages_jsx("h1", {
    className: "d-flex justify-content-center"
  }, "Lista de Tareas"), pages_jsx(SearchBar_SearchBar, {
    perFiltered: perFiltered
  }), pages_jsx("div", {
    className: "btn-group mb-3"
  }, pages_jsx("button", {
    className: "btn btn-primary",
    onClick: () => setNewTask(true)
  }, "Nueva tarea"), pages_jsx("button", {
    className: "btn btn-info",
    onClick: () => setFiltered(tasks)
  }, "Todas"), pages_jsx("button", {
    className: "btn btn-warning",
    onClick: () => {
      const arr = tasks.filter(arr => arr.status === false);
      setFiltered(arr);
    }
  }, "Pendientes"), pages_jsx("button", {
    className: "btn btn-success",
    onClick: () => {
      const arr = tasks.filter(arr => arr.status === true);
      setFiltered(arr);
    }
  }, "Realizadas")), newTask && pages_jsx(Cards_NewTaskCard, {
    setNewTask: setNewTask,
    handleSummit: handleSummit,
    setNewTask: setNewTask
  }), loading && pages_jsx(Spinner_Spinner, null), filtered && filtered.map((item, index) => pages_jsx(Cards_TaskCard, {
    key: `${item}-${index}`,
    index: index,
    id: item.id,
    title: item.title,
    status: item.status,
    setFiltered: setFiltered,
    setTasks: setTasks,
    tasks: tasks,
    handleUpdate: handleUpdate,
    handleDelete: handleDelete
  })));
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
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_index);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });