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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/projects.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/ProjectCard.tsx":
/*!************************************!*\
  !*** ./components/ProjectCard.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\pb\\nextjs-portfolio\\manishgupta-portfolio-nextjs\\components\\ProjectCard.tsx";





const ProjectCard = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs
  }
}) => {
  const {
    0: showDetail,
    1: setShowDetail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
      src: image_path,
      alt: name,
      className: "cursor-pointer",
      onClick: () => setShowDetail(true),
      layout: "responsive",
      height: "150",
      width: "300"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "my-2 text-center",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), showDetail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: image_path,
          alt: name,
          layout: "responsive",
          height: "150",
          width: "300"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-center my-4 space-x-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: github_url,
            className: "flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillGithub"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Github"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 34
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: deployed_url,
            className: "flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillProject"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 35
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "mb-3 text-xl font-medium md:text-2xl",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "mb-3 font-medium",
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-wrap mt-5 space-x-2 text-sm tracking-wider",
          children: key_techs.map(tech => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm",
            children: tech
          }, tech, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => setShowDetail(false),
        className: "absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdClose"], {
          size: 30
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ }),

/***/ "./components/ProjectsNavbar.tsx":
/*!***************************************!*\
  !*** ./components/ProjectsNavbar.tsx ***!
  \***************************************/
/*! exports provided: NavItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\pb\\nextjs-portfolio\\manishgupta-portfolio-nextjs\\components\\ProjectsNavbar.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const NavItem = ({
  value,
  handlerFilterCategory,
  active
}) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: className,
    onClick: () => handlerFilterCategory(value),
    children: value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

const ProjectsNavbar = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex px-3 py-2 space-x-3 overflow-x-auto list-none",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, _objectSpread({
      value: "all"
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, _objectSpread({
      value: "react"
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, _objectSpread({
      value: "mongo"
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, _objectSpread({
      value: "django"
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, _objectSpread({
      value: "node"
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectsNavbar);

/***/ }),

/***/ "./data.ts":
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/*! exports provided: services, languages, tools, projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);





const services = [{
  Icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_0__["RiComputerLine"],
  title: "Frontend Development",
  about: "I can support to build user Interface Using <b> HTML</b>,<b>CSS</b>,<b>Java Script</b>,<b> Bootstrap </b>,<b> Tailwind</b>,<b> React , Redux </b> and <b>Nextjs</b> "
}, {
  Icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaServer"],
  title: "Backend  Development",
  about: "handling database, server, api using <b>ExpressJs </b>,<b>NodeJs </b> & other popular frameworks"
}, {
  Icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineApi"],
  title: "API Development",
  about: "I can develop robust  RESTFull APIs using <b>Postman</b>,<b>Http Request</b>  & <b>Node API</b> "
}, {
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdDeveloperMode"],
  title: "Data Base",
  about: "Working with NoSql database,Having knowledge about mongodb compass,mongoDb atlas,mongoose."
}, {
  Icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineAntDesign"],
  title: "Deployment",
  about: " Nellify,Vercel,GitHub.et.. "
}, {
  Icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineAntDesign"],
  title: "Others",
  about: "Git,GitHub,postman,cloudinary,strip"
} // {
//   Icon: RiComputerLine,
//   title: "Whatever",
//   about:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
// },
];
const languages = [{
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "HTML/CSS",
  level: "90"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Java Script",
  level: "60"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Bootstrap",
  level: "85"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "React/Redux",
  level: "70"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "NextJs",
  level: "75"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "NodeJs",
  level: "80"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "ExpressJs",
  level: "80"
}];
const tools = [{
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "cloudinary",
  level: "80"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "stripe",
  level: "45"
}];
const projects = [{
  name: "e-Commerce Shopping-App",
  description: "This app shows a dynamic furniture Shopping carts.",
  image_path: "/images/ecommapp.png",
  deployed_url: "https://er-manishgupta-e-commerce.netlify.app/",
  github_url: "https://github.com/SOFTMAN387/e-commerce-react-ui",
  category: ["react"],
  key_techs: ["React", "Redux", "Bootstrap"]
}, {
  name: "movies-app",
  description: "This app shows online movie watching or downloading.",
  image_path: "/images/movieapp.jpg",
  deployed_url: "https://er-manishgupta-movies.netlify.app/",
  github_url: "https://github.com/SOFTMAN387/movies-app",
  category: ["react"],
  key_techs: ["React", "Redux", "Bootstrap"]
}, {
  name: "Pizza Ordering App",
  image_path: "/images/pizza-app.jpeg",
  deployed_url: "https://github.com/SOFTMAN387/pizza-ordering-app-nextjs",
  github_url: "https://github.com/SOFTMAN387/pizza-ordering-app-nextjs",
  category: ["react"],
  description: "Real time ordering your pizza and tracking through your ordered pizza..",
  key_techs: ["React", "Redux", "Nextjs", "Mongo"]
}, {
  name: "World-Ranking-App",
  image_path: "/images/worldranks.png",
  deployed_url: "https://world-ranks-mu.vercel.app/",
  github_url: "https://github.com/SOFTMAN387/world-ranks",
  category: ["react"],
  description: "Checking world rank by country...",
  key_techs: ["Reactjs", "Nextjs", "Bootstrap", "tailwind"]
}, {
  name: "Chatting-App",
  image_path: "/images/chatt-app.png",
  deployed_url: "https://er-manishgupta-chatting.netlify.app/",
  github_url: "https://github.com/SOFTMAN387/chatting-app",
  category: ["react", 'mongo'],
  description: "Real Time Chatting With Users",
  key_techs: ["Reactjs", "Firebase", "Bootstrap", "Scss"]
}, {
  name: "React ecommerce-App",
  image_path: "/images/iphone-shop-app.jpeg",
  deployed_url: "https://er-manishgupta-shopping-app.netlify.app/",
  github_url: "https://github.com/SOFTMAN387/react-shop-app",
  category: ["react"],
  description: "React mobile shop app...",
  key_techs: ["Reactjs", "Redux", "Bootstrap"]
}, {
  name: "Portfolio",
  image_path: "/images/port-app.jpeg",
  deployed_url: "https://er-manishgupta-portfolio.netlify.app/",
  github_url: "https://github.com/SOFTMAN387/react-portfolio",
  category: ["react"],
  description: "Making user's landing page portfolio...",
  key_techs: ["React", "Bootstrap"]
}, {
  name: "Covid Tracking App",
  image_path: "/images/covid-track-app.jpeg",
  deployed_url: "https://er-manishgupta-india-covid19.netlify.app/",
  github_url: "https://github.com/SOFTMAN387/covid19-india-cases",
  category: ["react"],
  description: "Tracking covid-19 indian cases by states....",
  key_techs: ["React", "Api", "Bootstrap"]
}, {
  name: "Todo App",
  image_path: "/images/todo-app.jpeg",
  deployed_url: "https://softman387.github.io/todo_app/",
  github_url: "https://github.com/SOFTMAN387/todo_app",
  category: ["react"],
  description: "Adding some list of daily based...as well as removing ...",
  key_techs: ["javascript", "Html", "css"]
}, {
  name: "Clock Reminder App",
  image_path: "/images/clk-app.jpeg",
  deployed_url: "https://softman387.github.io/clock_reminder_app/",
  github_url: "https://github.com/SOFTMAN387/clock_reminder_app",
  category: ["react"],
  description: "Setting your time for break-fast...lunch as well as dinner...",
  key_techs: ["HTML", "Css", "JavaScript"]
}, {
  name: "TicTacToe-Game",
  image_path: "/images/tictactoe-game.png",
  deployed_url: "https://er-manishgupta-tictactoe-game.netlify.app/",
  github_url: "https://github.com/SOFTMAN387/tictactoe-game",
  category: ["react"],
  description: "Playing Tic Tac Toe Game with one player...",
  key_techs: ["HTML", "Css", "JavaScript"]
}];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["sumitdey.netlify.app"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProjectCard */ "./components/ProjectCard.tsx");
/* harmony import */ var _components_ProjectsNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectsNavbar */ "./components/ProjectsNavbar.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./data.ts");

var _jsxFileName = "D:\\pb\\nextjs-portfolio\\manishgupta-portfolio-nextjs\\pages\\projects.tsx";





const Projects = () => {
  const {
    0: projects,
    1: setProjects
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_4__["projects"]);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("all");

  const handlerFilterCategory = category => {
    if (category === "all") {
      setProjects(_data__WEBPACK_IMPORTED_MODULE_4__["projects"]);
      setActive(category);
      return;
    }

    const newArray = _data__WEBPACK_IMPORTED_MODULE_4__["projects"].filter(project => project.category.includes(category));
    setProjects(newArray);
    setActive(category);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "px-5 py-2 overflow-y-scroll",
    style: {
      height: "65vh"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProjectsNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handlerFilterCategory: handlerFilterCategory,
      active: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative grid grid-cols-12 gap-4 my-3",
      children: projects.map(project => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          project: project
        }, project.name, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9kYXRhLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL3JpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJwcm9qZWN0IiwibmFtZSIsImltYWdlX3BhdGgiLCJjYXRlZ29yeSIsImRlcGxveWVkX3VybCIsImRlc2NyaXB0aW9uIiwiZ2l0aHViX3VybCIsImtleV90ZWNocyIsInNob3dEZXRhaWwiLCJzZXRTaG93RGV0YWlsIiwidXNlU3RhdGUiLCJtYXAiLCJ0ZWNoIiwiTmF2SXRlbSIsInZhbHVlIiwiaGFuZGxlckZpbHRlckNhdGVnb3J5IiwiYWN0aXZlIiwiY2xhc3NOYW1lIiwiUHJvamVjdHNOYXZiYXIiLCJwcm9wcyIsInNlcnZpY2VzIiwiSWNvbiIsIlJpQ29tcHV0ZXJMaW5lIiwidGl0bGUiLCJhYm91dCIsIkZhU2VydmVyIiwiQWlPdXRsaW5lQXBpIiwiTWREZXZlbG9wZXJNb2RlIiwiQWlPdXRsaW5lQW50RGVzaWduIiwibGFuZ3VhZ2VzIiwiQnNDaXJjbGVGaWxsIiwibGV2ZWwiLCJ0b29scyIsInByb2plY3RzIiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwibGF5b3V0Iiwid2lkdGhzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJzcmNTZXQiLCJzaXplcyIsImdldFdpZHRocyIsImxhc3QiLCJzcmMiLCJpIiwicGFyc2VJbnQiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImxvYWRpbmciLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwiaGVpZ2h0IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwib3ZlcmZsb3ciLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInF1YWxpdHkiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uc29sZSIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwic2V0UmVmIiwiZWwiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwib3B0aW9ucyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiY2FsbGJhY2siLCJQcm9qZWN0cyIsInNldFByb2plY3RzIiwicHJvamVjdHNEYXRhIiwic2V0QWN0aXZlIiwibmV3QXJyYXkiLCJmaWx0ZXIiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLDhEOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBR0E7O0FBRUEsTUFBTUEsV0FFSixHQUFHLENBQUM7QUFDSkMsU0FBTyxFQUFFO0FBQ1BDLFFBRE87QUFFUEMsY0FGTztBQUdQQyxZQUhPO0FBSVBDLGdCQUpPO0FBS1BDLGVBTE87QUFNUEMsY0FOTztBQU9QQztBQVBPO0FBREwsQ0FBRCxLQVVDO0FBQ0osUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFi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R0E2SSxlQUFXLENBQUNHLFFBQUQsQ0FBWDtBQUNBRCxhQUFTLENBQUMvSSxRQUFELENBQVQ7QUFDRCxHQVpEOztBQWNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQTZDLFNBQUssRUFBRTtBQUFFMEYsWUFBTSxFQUFFO0FBQVYsS0FBcEQ7QUFBQSw0QkFDRSxxRUFBQyxrRUFBRDtBQUNFLDJCQUFxQixFQUFFOUUscUJBRHpCO0FBRUUsWUFBTSxFQUFFQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRTtBQUFLLGVBQVMsRUFBQyx1Q0FBZjtBQUFBLGdCQUNHaUIsUUFBUSxDQUFDdEIsR0FBVCxDQUFjWCxPQUFELGlCQUNaO0FBQUssaUJBQVMsRUFBQyxxRkFBZjtBQUFBLCtCQUNFLHFFQUFDLCtEQUFEO0FBQWEsaUJBQU8sRUFBRUE7QUFBdEIsV0FBb0NBLE9BQU8sQ0FBQ0MsSUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0JELENBbENEOztBQW9DZThJLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDMUNBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wcm9qZWN0cy50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBaUZpbGxHaXRodWIsIEFpRmlsbFByb2plY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgTWRDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBJUHJvamVjdCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBQcm9qZWN0Q2FyZDogRnVuY3Rpb25Db21wb25lbnQ8e1xyXG4gIHByb2plY3Q6IElQcm9qZWN0O1xyXG59PiA9ICh7XHJcbiAgcHJvamVjdDoge1xyXG4gICAgbmFtZSxcclxuICAgIGltYWdlX3BhdGgsXHJcbiAgICBjYXRlZ29yeSxcclxuICAgIGRlcGxveWVkX3VybCxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZ2l0aHViX3VybCxcclxuICAgIGtleV90ZWNocyxcclxuICB9LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPXtpbWFnZV9wYXRofVxyXG4gICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0RldGFpbCh0cnVlKX1cclxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxNTBcIlxyXG4gICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgLz5cclxuICAgICAgey8qIDxpbWdcclxuICAgICAgICBzcmM9e2ltYWdlX3BhdGh9XHJcbiAgICAgICAgYWx0PXtuYW1lfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGV0YWlsKHRydWUpfVxyXG4gICAgICAvPiAqL31cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibXktMiB0ZXh0LWNlbnRlclwiPntuYW1lfTwvcD5cclxuXHJcbiAgICAgIHtzaG93RGV0YWlsICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB6LTEwIGdyaWQgdy1mdWxsIGgtYXV0byBwLTIgdGV4dC1ibGFjayBiZy1ncmF5LTEwMCBtZDpncmlkLWNvbHMtMiBnYXAteC0xMiBkYXJrOnRleHQtd2hpdGUgZGFyazpiZy1kYXJrLTEwMFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtpbWFnZV9wYXRofSBhbHQ9e25hbWV9IC8+ICovfVxyXG5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZV9wYXRofVxyXG4gICAgICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNTBcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG15LTQgc3BhY2UteC0zXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e2dpdGh1Yl91cmx9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgc3BhY2UteC0zIHRleHQtbGcgYmctZ3JheS0yMDAgZGFyazpiZy1kYXJrLTIwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbEdpdGh1YiAvPiA8c3Bhbj5HaXRodWI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPXtkZXBsb3llZF91cmx9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgc3BhY2UteC0zIHRleHQtbGcgYmctZ3JheS0yMDAgZGFyazpiZy1kYXJrLTIwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbFByb2plY3QgLz4gPHNwYW4+UHJvamVjdDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC14bCBmb250LW1lZGl1bSBtZDp0ZXh0LTJ4bFwiPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zIGZvbnQtbWVkaXVtXCI+e2Rlc2NyaXB0aW9ufTwvaDM+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG10LTUgc3BhY2UteC0yIHRleHQtc20gdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICAgICAgICB7a2V5X3RlY2hzLm1hcCgodGVjaCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAga2V5PXt0ZWNofVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgbXktMSBiZy1ncmF5LTIwMCBkYXJrOmJnLWRhcmstMjAwIHJvdW5kZS1zbVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0ZWNofVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0RldGFpbChmYWxzZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHAtMSBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgdG9wLTMgcmlnaHQtMyBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazpiZy1kYXJrLTIwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZENsb3NlIHNpemU9ezMwfSAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XHJcbiIsImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2SXRlbTogRnVuY3Rpb25Db21wb25lbnQ8e1xyXG4gIHZhbHVlOiBDYXRlZ29yeSB8IFwiYWxsXCI7XHJcbiAgaGFuZGxlckZpbHRlckNhdGVnb3J5OiBGdW5jdGlvbjtcclxuICBhY3RpdmU6IHN0cmluZztcclxufT4gPSAoeyB2YWx1ZSwgaGFuZGxlckZpbHRlckNhdGVnb3J5LCBhY3RpdmUgfSkgPT4ge1xyXG4gIGxldCBjbGFzc05hbWUgPSBcImNhcGl0YWxpemUgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ncmVlblwiO1xyXG4gIGlmIChhY3RpdmUgPT09IHZhbHVlKSBjbGFzc05hbWUgKz0gXCIgdGV4dC1ncmVlblwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVyRmlsdGVyQ2F0ZWdvcnkodmFsdWUpfT5cclxuICAgICAge3ZhbHVlfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJvamVjdHNOYXZiYXI6IEZ1bmN0aW9uQ29tcG9uZW50PHtcclxuICBoYW5kbGVyRmlsdGVyQ2F0ZWdvcnk6IEZ1bmN0aW9uO1xyXG4gIGFjdGl2ZTogc3RyaW5nO1xyXG59PiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHgtMyBweS0yIHNwYWNlLXgtMyBvdmVyZmxvdy14LWF1dG8gbGlzdC1ub25lXCI+XHJcbiAgICAgIDxOYXZJdGVtIHZhbHVlPVwiYWxsXCIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8TmF2SXRlbSB2YWx1ZT1cInJlYWN0XCIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8TmF2SXRlbSB2YWx1ZT1cIm1vbmdvXCIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8TmF2SXRlbSB2YWx1ZT1cImRqYW5nb1wiIHsuLi5wcm9wc30gLz5cclxuICAgICAgPE5hdkl0ZW0gdmFsdWU9XCJub2RlXCIgey4uLnByb3BzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzTmF2YmFyO1xyXG4iLCJpbXBvcnQgeyBSaUNvbXB1dGVyTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyBGYVNlcnZlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVBbnREZXNpZ24sIEFpT3V0bGluZUFwaSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyBNZERldmVsb3Blck1vZGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHsgSVByb2plY3QsIFNlcnZpY2UsIFNraWxsIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IEJzQ2lyY2xlRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzOiBTZXJ2aWNlW10gPSBbXHJcbiAge1xyXG4gICAgSWNvbjogUmlDb21wdXRlckxpbmUsXHJcbiAgICB0aXRsZTogXCJGcm9udGVuZCBEZXZlbG9wbWVudFwiLFxyXG4gICAgYWJvdXQ6XHJcbiAgICAgIFwiSSBjYW4gc3VwcG9ydCB0byBidWlsZCB1c2VyIEludGVyZmFjZSBVc2luZyA8Yj4gSFRNTDwvYj4sPGI+Q1NTPC9iPiw8Yj5KYXZhIFNjcmlwdDwvYj4sPGI+IEJvb3RzdHJhcCA8L2I+LDxiPiBUYWlsd2luZDwvYj4sPGI+IFJlYWN0ICwgUmVkdXggPC9iPiBhbmQgPGI+TmV4dGpzPC9iPiBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEZhU2VydmVyLFxyXG4gICAgdGl0bGU6IFwiQmFja2VuZCAgRGV2ZWxvcG1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcImhhbmRsaW5nIGRhdGFiYXNlLCBzZXJ2ZXIsIGFwaSB1c2luZyA8Yj5FeHByZXNzSnMgPC9iPiw8Yj5Ob2RlSnMgPC9iPiAmIG90aGVyIHBvcHVsYXIgZnJhbWV3b3Jrc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQWlPdXRsaW5lQXBpLFxyXG4gICAgdGl0bGU6IFwiQVBJIERldmVsb3BtZW50XCIsXHJcbiAgICBhYm91dDpcclxuICAgICAgXCJJIGNhbiBkZXZlbG9wIHJvYnVzdCAgUkVTVEZ1bGwgQVBJcyB1c2luZyA8Yj5Qb3N0bWFuPC9iPiw8Yj5IdHRwIFJlcXVlc3Q8L2I+ICAmIDxiPk5vZGUgQVBJPC9iPiBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IE1kRGV2ZWxvcGVyTW9kZSxcclxuICAgIHRpdGxlOiBcIkRhdGEgQmFzZVwiLFxyXG4gICAgYWJvdXQ6IFwiV29ya2luZyB3aXRoIE5vU3FsIGRhdGFiYXNlLEhhdmluZyBrbm93bGVkZ2UgYWJvdXQgbW9uZ29kYiBjb21wYXNzLG1vbmdvRGIgYXRsYXMsbW9uZ29vc2UuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBBaU91dGxpbmVBbnREZXNpZ24sXHJcbiAgICB0aXRsZTogXCJEZXBsb3ltZW50XCIsXHJcbiAgICBhYm91dDpcclxuICAgICAgXCIgTmVsbGlmeSxWZXJjZWwsR2l0SHViLmV0Li4gXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBBaU91dGxpbmVBbnREZXNpZ24sXHJcbiAgICB0aXRsZTogXCJPdGhlcnNcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIkdpdCxHaXRIdWIscG9zdG1hbixjbG91ZGluYXJ5LHN0cmlwXCIsXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICBJY29uOiBSaUNvbXB1dGVyTGluZSxcclxuICAvLyAgIHRpdGxlOiBcIldoYXRldmVyXCIsXHJcbiAgLy8gICBhYm91dDpcclxuICAvLyAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIaWMgcXVpcyBtaW5pbWEgYXV0ZW0hXCIsXHJcbiAgLy8gfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYW5ndWFnZXM6IFNraWxsW10gPSBbXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJIVE1ML0NTU1wiLFxyXG4gICAgbGV2ZWw6IFwiOTBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiSmF2YSBTY3JpcHRcIixcclxuICAgIGxldmVsOiBcIjYwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkJvb3RzdHJhcFwiLFxyXG4gICAgbGV2ZWw6IFwiODVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiUmVhY3QvUmVkdXhcIixcclxuICAgIGxldmVsOiBcIjcwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIk5leHRKc1wiLFxyXG4gICAgbGV2ZWw6IFwiNzVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiTm9kZUpzXCIsXHJcbiAgICBsZXZlbDogXCI4MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJFeHByZXNzSnNcIixcclxuICAgIGxldmVsOiBcIjgwXCIsXHJcbiAgfSxcclxuICBcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b29sczogU2tpbGxbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcImNsb3VkaW5hcnlcIixcclxuICAgIGxldmVsOiBcIjgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcInN0cmlwZVwiLFxyXG4gICAgbGV2ZWw6IFwiNDVcIixcclxuICB9LFxyXG4gXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHM6IElQcm9qZWN0W10gPSBbXHJcbiAgeyBcclxuICAgIG5hbWU6IFwiZS1Db21tZXJjZSBTaG9wcGluZy1BcHBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgYXBwIHNob3dzIGEgZHluYW1pYyBmdXJuaXR1cmUgU2hvcHBpbmcgY2FydHMuXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvZWNvbW1hcHAucG5nXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS1lLWNvbW1lcmNlLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9lLWNvbW1lcmNlLXJlYWN0LXVpXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJCb290c3RyYXBcIl0sXHJcbiAgfSxcclxuICB7IFxyXG4gICAgbmFtZTogXCJtb3ZpZXMtYXBwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGlzIGFwcCBzaG93cyBvbmxpbmUgbW92aWUgd2F0Y2hpbmcgb3IgZG93bmxvYWRpbmcuXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvbW92aWVhcHAuanBnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS1tb3ZpZXMubmV0bGlmeS5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L21vdmllcy1hcHBcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIkJvb3RzdHJhcFwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUGl6emEgT3JkZXJpbmcgQXBwXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvcGl6emEtYXBwLmpwZWdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9waXp6YS1vcmRlcmluZy1hcHAtbmV4dGpzXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L3BpenphLW9yZGVyaW5nLWFwcC1uZXh0anNcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlJlYWwgdGltZSBvcmRlcmluZyB5b3VyIHBpenphIGFuZCB0cmFja2luZyB0aHJvdWdoIHlvdXIgb3JkZXJlZCBwaXp6YS4uXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJOZXh0anNcIixcIk1vbmdvXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiV29ybGQtUmFua2luZy1BcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy93b3JsZHJhbmtzLnBuZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vd29ybGQtcmFua3MtbXUudmVyY2VsLmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvd29ybGQtcmFua3NcIixcclxuICAgIGNhdGVnb3J5OiBbIFwicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJDaGVja2luZyB3b3JsZCByYW5rIGJ5IGNvdW50cnkuLi5cIixcclxuICAgIGtleV90ZWNoczogW1xyXG4gICAgICBcIlJlYWN0anNcIixcclxuICAgICAgXCJOZXh0anNcIixcclxuICAgICAgXCJCb290c3RyYXBcIixcclxuICAgICAgXCJ0YWlsd2luZFwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ2hhdHRpbmctQXBwXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvY2hhdHQtYXBwLnBuZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vZXItbWFuaXNoZ3VwdGEtY2hhdHRpbmcubmV0bGlmeS5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L2NoYXR0aW5nLWFwcFwiLFxyXG4gICAgY2F0ZWdvcnk6IFsgXCJyZWFjdFwiLCdtb25nbyddLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUmVhbCBUaW1lIENoYXR0aW5nIFdpdGggVXNlcnNcIixcclxuICAgIGtleV90ZWNoczogW1xyXG4gICAgICBcIlJlYWN0anNcIixcclxuICAgICAgXCJGaXJlYmFzZVwiLFxyXG4gICAgICBcIkJvb3RzdHJhcFwiLFxyXG4gICAgICBcIlNjc3NcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlYWN0IGVjb21tZXJjZS1BcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9pcGhvbmUtc2hvcC1hcHAuanBlZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vZXItbWFuaXNoZ3VwdGEtc2hvcHBpbmctYXBwLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9yZWFjdC1zaG9wLWFwcFwiLFxyXG4gICAgY2F0ZWdvcnk6IFsgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlJlYWN0IG1vYmlsZSBzaG9wIGFwcC4uLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXHJcbiAgICAgIFwiUmVhY3Rqc1wiLFxyXG4gICAgICBcIlJlZHV4XCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICAgXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQb3J0Zm9saW9cIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9wb3J0LWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS1wb3J0Zm9saW8ubmV0bGlmeS5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L3JlYWN0LXBvcnRmb2xpb1wiLFxyXG4gICAgY2F0ZWdvcnk6IFsgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgXCJNYWtpbmcgdXNlcidzIGxhbmRpbmcgcGFnZSBwb3J0Zm9saW8uLi5cIixcclxuICAgIGtleV90ZWNoczogW1xyXG4gICAgICBcIlJlYWN0XCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb3ZpZCBUcmFja2luZyBBcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jb3ZpZC10cmFjay1hcHAuanBlZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vZXItbWFuaXNoZ3VwdGEtaW5kaWEtY292aWQxOS5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvY292aWQxOS1pbmRpYS1jYXNlc1wiLFxyXG4gICAgY2F0ZWdvcnk6IFsgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRyYWNraW5nIGNvdmlkLTE5IGluZGlhbiBjYXNlcyBieSBzdGF0ZXMuLi4uXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiQXBpXCIsIFwiQm9vdHN0cmFwXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiVG9kbyBBcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy90b2RvLWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9zb2Z0bWFuMzg3LmdpdGh1Yi5pby90b2RvX2FwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvdG9kb19hcHBcIixcclxuICAgIGNhdGVnb3J5OiBbIFwicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBZGRpbmcgc29tZSBsaXN0IG9mIGRhaWx5IGJhc2VkLi4uYXMgd2VsbCBhcyByZW1vdmluZyAuLi5cIixcclxuICAgIGtleV90ZWNoczogW1wiamF2YXNjcmlwdFwiLCBcIkh0bWxcIixcImNzc1wiXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIkNsb2NrIFJlbWluZGVyIEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2Nsay1hcHAuanBlZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vc29mdG1hbjM4Ny5naXRodWIuaW8vY2xvY2tfcmVtaW5kZXJfYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9jbG9ja19yZW1pbmRlcl9hcHBcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNldHRpbmcgeW91ciB0aW1lIGZvciBicmVhay1mYXN0Li4ubHVuY2ggYXMgd2VsbCBhcyBkaW5uZXIuLi5cIixcclxuICAgIGtleV90ZWNoczogW1wiSFRNTFwiLCBcIkNzc1wiLCBcIkphdmFTY3JpcHRcIl0sXHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICBuYW1lOiBcIlRpY1RhY1RvZS1HYW1lXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvdGljdGFjdG9lLWdhbWUucG5nXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS10aWN0YWN0b2UtZ2FtZS5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvdGljdGFjdG9lLWdhbWVcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlBsYXlpbmcgVGljIFRhYyBUb2UgR2FtZSB3aXRoIG9uZSBwbGF5ZXIuLi5cIixcclxuICAgIGtleV90ZWNoczogW1wiSFRNTFwiLCBcIkNzc1wiLCBcIkphdmFTY3JpcHRcIl0sXHJcbiAgfSxcclxuICBcclxuXTtcclxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gJ2luaGVyaXQnIDogJ2hpZGRlbicsXG5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdElkbGVDYWxsYmFja1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdENhcmRcIjtcclxuaW1wb3J0IFByb2plY3RzTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RzTmF2YmFyXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIGFzIHByb2plY3RzRGF0YSB9IGZyb20gXCIuLi9kYXRhXCI7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKHByb2plY3RzRGF0YSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVyRmlsdGVyQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IENhdGVnb3J5IHwgXCJhbGxcIikgPT4ge1xyXG4gICAgaWYgKGNhdGVnb3J5ID09PSBcImFsbFwiKSB7XHJcbiAgICAgIHNldFByb2plY3RzKHByb2plY3RzRGF0YSk7XHJcbiAgICAgIHNldEFjdGl2ZShjYXRlZ29yeSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdBcnJheSA9IHByb2plY3RzRGF0YS5maWx0ZXIoKHByb2plY3QpID0+XHJcbiAgICAgIHByb2plY3QuY2F0ZWdvcnkuaW5jbHVkZXMoY2F0ZWdvcnkpXHJcbiAgICApO1xyXG4gICAgc2V0UHJvamVjdHMobmV3QXJyYXkpO1xyXG4gICAgc2V0QWN0aXZlKGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTIgb3ZlcmZsb3cteS1zY3JvbGxcIiBzdHlsZT17eyBoZWlnaHQ6IFwiNjV2aFwiIH19PlxyXG4gICAgICA8UHJvamVjdHNOYXZiYXJcclxuICAgICAgICBoYW5kbGVyRmlsdGVyQ2F0ZWdvcnk9e2hhbmRsZXJGaWx0ZXJDYXRlZ29yeX1cclxuICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgbXktM1wiPlxyXG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgcC0yIGJnLWdyYXktMjAwIHJvdW5kZWQtbGcgc206Y29sLXNwYW4tNiBsZzpjb2wtc3Bhbi00IGRhcms6YmctZGFyay0yMDBcIj5cclxuICAgICAgICAgICAgPFByb2plY3RDYXJkIHByb2plY3Q9e3Byb2plY3R9IGtleT17cHJvamVjdC5uYW1lfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==