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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ServiceCard.tsx":
/*!************************************!*\
  !*** ./components/ServiceCard.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\pb\\nextjs-portfolio\\manishgupta-portfolio-nextjs\\components\\ServiceCard.tsx";

// import { motion } from 'framer-motion'
const ServiceCard = ({
  service: {
    Icon,
    title,
    about
  }
}) => {
  //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
  function createMarkup() {
    return {
      __html: about
    };
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center  ",
    style: {
      fontSize: "0.8rem"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
      className: "w-12 h-12 pr-2 text-green"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "font-bold",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        dangerouslySetInnerHTML: createMarkup()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceCard);

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ServiceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ServiceCard */ "./components/ServiceCard.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./data.ts");

var _jsxFileName = "D:\\pb\\nextjs-portfolio\\manishgupta-portfolio-nextjs\\pages\\index.tsx";



const About = () => {
  // console.log(services);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col flex-grow px-6 pt-1 ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
      className: "my-3 text-base font-medium",
      children: "I'm IT Engineering Student of Muzaffarpur Institute of Technology,Muzaffarpur(2021-2024). Pass out Diploma in Computer Science and Engineering , From govt. Polytechnic college,patna-7(2018-2021)."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 ",
      style: {
        marginLeft: "-1.5rem",
        marginRight: "-1.5rem"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: "my-3 text-xl font-semibold tracking-wide",
        children: "Working With Web Technologies."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid gap-6 my-3 md:grid-cols-2",
        children: _data__WEBPACK_IMPORTED_MODULE_2__["services"].map(service => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
            service: service
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, undefined)
        }, service.title, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
}; //!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }
//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48
// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);
//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }


/* harmony default export */ __webpack_exports__["default"] = (About);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9ic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvbWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9yaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlNlcnZpY2VDYXJkIiwic2VydmljZSIsIkljb24iLCJ0aXRsZSIsImFib3V0IiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwiZm9udFNpemUiLCJzZXJ2aWNlcyIsIlJpQ29tcHV0ZXJMaW5lIiwiRmFTZXJ2ZXIiLCJBaU91dGxpbmVBcGkiLCJNZERldmVsb3Blck1vZGUiLCJBaU91dGxpbmVBbnREZXNpZ24iLCJsYW5ndWFnZXMiLCJCc0NpcmNsZUZpbGwiLCJuYW1lIiwibGV2ZWwiLCJ0b29scyIsInByb2plY3RzIiwiZGVzY3JpcHRpb24iLCJpbWFnZV9wYXRoIiwiZGVwbG95ZWRfdXJsIiwiZ2l0aHViX3VybCIsImNhdGVnb3J5Iiwia2V5X3RlY2hzIiwiQWJvdXQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVldUIsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUN0RUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi90eXBlcydcclxuLy8gaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuXHJcbmNvbnN0IFNlcnZpY2VDYXJkOiBGdW5jdGlvbkNvbXBvbmVudDx7IHNlcnZpY2U6IFNlcnZpY2UgfT4gPSAoe1xyXG4gICBzZXJ2aWNlOiB7IEljb24sIHRpdGxlLCBhYm91dCB9LFxyXG59KSA9PiB7XHJcbiAgIC8vWFNTIGF0dGFjayA6KCBvbiBvdXIgcG9ydGZvbGlvIGJ0dywgYXMgYW4gYWx0ZXJuYXRlIHVzZSBucG0gaSBkb20gcHVyaWZ5XHJcbiAgIGZ1bmN0aW9uIGNyZWF0ZU1hcmt1cCgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgX19odG1sOiBhYm91dCxcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgICcgc3R5bGU9e3tmb250U2l6ZTpcIjAuOHJlbVwifX0+XHJcbiAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0ndy0xMiBoLTEyIHByLTIgdGV4dC1ncmVlbicgLz5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3RpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtjcmVhdGVNYXJrdXAoKX0gLz5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VDYXJkXHJcbiIsImltcG9ydCB7IFJpQ29tcHV0ZXJMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCB7IEZhU2VydmVyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUFudERlc2lnbiwgQWlPdXRsaW5lQXBpIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IE1kRGV2ZWxvcGVyTW9kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBJUHJvamVjdCwgU2VydmljZSwgU2tpbGwgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHsgQnNDaXJjbGVGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZXM6IFNlcnZpY2VbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBSaUNvbXB1dGVyTGluZSxcclxuICAgIHRpdGxlOiBcIkZyb250ZW5kIERldmVsb3BtZW50XCIsXHJcbiAgICBhYm91dDpcclxuICAgICAgXCJJIGNhbiBzdXBwb3J0IHRvIGJ1aWxkIHVzZXIgSW50ZXJmYWNlIFVzaW5nIDxiPiBIVE1MPC9iPiw8Yj5DU1M8L2I+LDxiPkphdmEgU2NyaXB0PC9iPiw8Yj4gQm9vdHN0cmFwIDwvYj4sPGI+IFRhaWx3aW5kPC9iPiw8Yj4gUmVhY3QgLCBSZWR1eCA8L2I+IGFuZCA8Yj5OZXh0anM8L2I+IFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRmFTZXJ2ZXIsXHJcbiAgICB0aXRsZTogXCJCYWNrZW5kICBEZXZlbG9wbWVudFwiLFxyXG4gICAgYWJvdXQ6XHJcbiAgICAgIFwiaGFuZGxpbmcgZGF0YWJhc2UsIHNlcnZlciwgYXBpIHVzaW5nIDxiPkV4cHJlc3NKcyA8L2I+LDxiPk5vZGVKcyA8L2I+ICYgb3RoZXIgcG9wdWxhciBmcmFtZXdvcmtzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBBaU91dGxpbmVBcGksXHJcbiAgICB0aXRsZTogXCJBUEkgRGV2ZWxvcG1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIkkgY2FuIGRldmVsb3Agcm9idXN0ICBSRVNURnVsbCBBUElzIHVzaW5nIDxiPlBvc3RtYW48L2I+LDxiPkh0dHAgUmVxdWVzdDwvYj4gICYgPGI+Tm9kZSBBUEk8L2I+IFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogTWREZXZlbG9wZXJNb2RlLFxyXG4gICAgdGl0bGU6IFwiRGF0YSBCYXNlXCIsXHJcbiAgICBhYm91dDogXCJXb3JraW5nIHdpdGggTm9TcWwgZGF0YWJhc2UsSGF2aW5nIGtub3dsZWRnZSBhYm91dCBtb25nb2RiIGNvbXBhc3MsbW9uZ29EYiBhdGxhcyxtb25nb29zZS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEFpT3V0bGluZUFudERlc2lnbixcclxuICAgIHRpdGxlOiBcIkRlcGxveW1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIiBOZWxsaWZ5LFZlcmNlbCxHaXRIdWIuZXQuLiBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEFpT3V0bGluZUFudERlc2lnbixcclxuICAgIHRpdGxlOiBcIk90aGVyc1wiLFxyXG4gICAgYWJvdXQ6XHJcbiAgICAgIFwiR2l0LEdpdEh1Yixwb3N0bWFuLGNsb3VkaW5hcnksc3RyaXBcIixcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIEljb246IFJpQ29tcHV0ZXJMaW5lLFxyXG4gIC8vICAgdGl0bGU6IFwiV2hhdGV2ZXJcIixcclxuICAvLyAgIGFib3V0OlxyXG4gIC8vICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhpYyBxdWlzIG1pbmltYSBhdXRlbSFcIixcclxuICAvLyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlczogU2tpbGxbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkhUTUwvQ1NTXCIsXHJcbiAgICBsZXZlbDogXCI5MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJKYXZhIFNjcmlwdFwiLFxyXG4gICAgbGV2ZWw6IFwiNjBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiQm9vdHN0cmFwXCIsXHJcbiAgICBsZXZlbDogXCI4NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJSZWFjdC9SZWR1eFwiLFxyXG4gICAgbGV2ZWw6IFwiNzBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiTmV4dEpzXCIsXHJcbiAgICBsZXZlbDogXCI3NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJOb2RlSnNcIixcclxuICAgIGxldmVsOiBcIjgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkV4cHJlc3NKc1wiLFxyXG4gICAgbGV2ZWw6IFwiODBcIixcclxuICB9LFxyXG4gIFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvb2xzOiBTa2lsbFtdID0gW1xyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiY2xvdWRpbmFyeVwiLFxyXG4gICAgbGV2ZWw6IFwiODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwic3RyaXBlXCIsXHJcbiAgICBsZXZlbDogXCI0NVwiLFxyXG4gIH0sXHJcbiBcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0czogSVByb2plY3RbXSA9IFtcclxuICB7IFxyXG4gICAgbmFtZTogXCJlLUNvbW1lcmNlIFNob3BwaW5nLUFwcFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGhpcyBhcHAgc2hvd3MgYSBkeW5hbWljIGZ1cm5pdHVyZSBTaG9wcGluZyBjYXJ0cy5cIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9lY29tbWFwcC5wbmdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL2VyLW1hbmlzaGd1cHRhLWUtY29tbWVyY2UubmV0bGlmeS5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L2UtY29tbWVyY2UtcmVhY3QtdWlcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIkJvb3RzdHJhcFwiXSxcclxuICB9LFxyXG4gIHsgXHJcbiAgICBuYW1lOiBcIm1vdmllcy1hcHBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgYXBwIHNob3dzIG9ubGluZSBtb3ZpZSB3YXRjaGluZyBvciBkb3dubG9hZGluZy5cIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9tb3ZpZWFwcC5qcGdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL2VyLW1hbmlzaGd1cHRhLW1vdmllcy5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvbW92aWVzLWFwcFwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCJdLFxyXG4gICAga2V5X3RlY2hzOiBbXCJSZWFjdFwiLCBcIlJlZHV4XCIsIFwiQm9vdHN0cmFwXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQaXp6YSBPcmRlcmluZyBBcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9waXp6YS1hcHAuanBlZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L3BpenphLW9yZGVyaW5nLWFwcC1uZXh0anNcIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvcGl6emEtb3JkZXJpbmctYXBwLW5leHRqc1wiLFxyXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUmVhbCB0aW1lIG9yZGVyaW5nIHlvdXIgcGl6emEgYW5kIHRyYWNraW5nIHRocm91Z2ggeW91ciBvcmRlcmVkIHBpenphLi5cIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIk5leHRqc1wiLFwiTW9uZ29cIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJXb3JsZC1SYW5raW5nLUFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3dvcmxkcmFua3MucG5nXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly93b3JsZC1yYW5rcy1tdS52ZXJjZWwuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny93b3JsZC1yYW5rc1wiLFxyXG4gICAgY2F0ZWdvcnk6IFsgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkNoZWNraW5nIHdvcmxkIHJhbmsgYnkgY291bnRyeS4uLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXHJcbiAgICAgIFwiUmVhY3Rqc1wiLFxyXG4gICAgICBcIk5leHRqc1wiLFxyXG4gICAgICBcIkJvb3RzdHJhcFwiLFxyXG4gICAgICBcInRhaWx3aW5kXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDaGF0dGluZy1BcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jaGF0dC1hcHAucG5nXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS1jaGF0dGluZy5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvY2hhdHRpbmctYXBwXCIsXHJcbiAgICBjYXRlZ29yeTogWyBcInJlYWN0XCIsJ21vbmdvJ10sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJSZWFsIFRpbWUgQ2hhdHRpbmcgV2l0aCBVc2Vyc1wiLFxyXG4gICAga2V5X3RlY2hzOiBbXHJcbiAgICAgIFwiUmVhY3Rqc1wiLFxyXG4gICAgICBcIkZpcmViYXNlXCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICAgIFwiU2Nzc1wiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVhY3QgZWNvbW1lcmNlLUFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2lwaG9uZS1zaG9wLWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS1zaG9wcGluZy1hcHAubmV0bGlmeS5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L3JlYWN0LXNob3AtYXBwXCIsXHJcbiAgICBjYXRlZ29yeTogWyBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUmVhY3QgbW9iaWxlIHNob3AgYXBwLi4uXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcclxuICAgICAgXCJSZWFjdGpzXCIsXHJcbiAgICAgIFwiUmVkdXhcIixcclxuICAgICAgXCJCb290c3RyYXBcIixcclxuICAgICBcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlBvcnRmb2xpb1wiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3BvcnQtYXBwLmpwZWdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL2VyLW1hbmlzaGd1cHRhLXBvcnRmb2xpby5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvcmVhY3QtcG9ydGZvbGlvXCIsXHJcbiAgICBjYXRlZ29yeTogWyBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICBcIk1ha2luZyB1c2VyJ3MgbGFuZGluZyBwYWdlIHBvcnRmb2xpby4uLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXHJcbiAgICAgIFwiUmVhY3RcIixcclxuICAgICAgXCJCb290c3RyYXBcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNvdmlkIFRyYWNraW5nIEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2NvdmlkLXRyYWNrLWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS1pbmRpYS1jb3ZpZDE5Lm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9jb3ZpZDE5LWluZGlhLWNhc2VzXCIsXHJcbiAgICBjYXRlZ29yeTogWyBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVHJhY2tpbmcgY292aWQtMTkgaW5kaWFuIGNhc2VzIGJ5IHN0YXRlcy4uLi5cIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJBcGlcIiwgXCJCb290c3RyYXBcIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJUb2RvIEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3RvZG8tYXBwLmpwZWdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL3NvZnRtYW4zODcuZ2l0aHViLmlvL3RvZG9fYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny90b2RvX2FwcFwiLFxyXG4gICAgY2F0ZWdvcnk6IFsgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFkZGluZyBzb21lIGxpc3Qgb2YgZGFpbHkgYmFzZWQuLi5hcyB3ZWxsIGFzIHJlbW92aW5nIC4uLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJqYXZhc2NyaXB0XCIsIFwiSHRtbFwiLFwiY3NzXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ2xvY2sgUmVtaW5kZXIgQXBwXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvY2xrLWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9zb2Z0bWFuMzg3LmdpdGh1Yi5pby9jbG9ja19yZW1pbmRlcl9hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L2Nsb2NrX3JlbWluZGVyX2FwcFwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiU2V0dGluZyB5b3VyIHRpbWUgZm9yIGJyZWFrLWZhc3QuLi5sdW5jaCBhcyB3ZWxsIGFzIGRpbm5lci4uLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJIVE1MXCIsIFwiQ3NzXCIsIFwiSmF2YVNjcmlwdFwiXSxcclxuICB9LFxyXG4gIFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVGljVGFjVG9lLUdhbWVcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy90aWN0YWN0b2UtZ2FtZS5wbmdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL2VyLW1hbmlzaGd1cHRhLXRpY3RhY3RvZS1nYW1lLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny90aWN0YWN0b2UtZ2FtZVwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUGxheWluZyBUaWMgVGFjIFRvZSBHYW1lIHdpdGggb25lIHBsYXllci4uLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJIVE1MXCIsIFwiQ3NzXCIsIFwiSmF2YVNjcmlwdFwiXSxcclxuICB9LFxyXG4gIFxyXG5dO1xyXG4iLCJpbXBvcnQge1xyXG4gIEdldFNlcnZlclNpZGVQcm9wcyxcclxuICBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0LFxyXG4gIEdldFN0YXRpY1Byb3BzLFxyXG4gIEdldFN0YXRpY1Byb3BzQ29udGV4dCxcclxuICBOZXh0UGFnZSxcclxufSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgU2VydmljZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VydmljZUNhcmRcIjtcclxuaW1wb3J0IHsgc2VydmljZXMgfSBmcm9tIFwiLi4vZGF0YVwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5jb25zdCBBYm91dDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coc2VydmljZXMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBweC02IHB0LTEgXCI+XHJcbiAgICAgIDxoNiBjbGFzc05hbWU9XCJteS0zIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgIEknbSBJVCBFbmdpbmVlcmluZyBTdHVkZW50IG9mIE11emFmZmFycHVyIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LE11emFmZmFycHVyKDIwMjEtMjAyNCkuXHJcbiAgICAgICAgUGFzcyBvdXQgRGlwbG9tYSBpbiBDb21wdXRlciBTY2llbmNlIGFuZCBFbmdpbmVlcmluZyAsIEZyb20gZ292dC4gUG9seXRlY2huaWMgY29sbGVnZSxwYXRuYS03KDIwMTgtMjAyMSkuXHJcbiAgICAgIDwvaDY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcC00IG10LTUgYmctZ3JheS00MDAgZGFyazpiZy1kYXJrLTEwMCBcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiLTEuNXJlbVwiLCBtYXJnaW5SaWdodDogXCItMS41cmVtXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJteS0zIHRleHQteGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlXCI+XHJcbiAgICAgICAgICBXb3JraW5nIFdpdGggV2ViIFRlY2hub2xvZ2llcy5cclxuICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTYgbXktMyBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgey8qIGNoaWxkcmVuJ3MgaW5pdGlhbCBhbmQgYW5pbWF0ZSBwcm9wZXJ0eSBzaG91bGQgYmUgc2FtZSBhcyB0aGUgcGFyZW50IGR1cmluZyBhIHN0YWdnZXIgZWZmZWN0ICAqL31cclxuICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgcC0yIGJnLWdyYXktMjAwIHJvdW5kZWQtbGcgZGFyazpiZy1kYXJrLTIwMCBtZDpjb2wtc3Bhbi0xIFwiXHJcbiAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlLnRpdGxlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFNlcnZpY2VDYXJkIHNlcnZpY2U9e3NlcnZpY2V9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIWNhbGxlZCBldmVyeSB0aW1lICB0aGUgcGFnZSByZWZyZXNoZWRcclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKFxyXG4vLyAgICBjb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0XHJcbi8vICkgPT4ge1xyXG4vLyAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZXJ2aWNlcycpXHJcbi8vICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbi8vICAgIHJldHVybiB7IHByb3BzOiB7IHNlcnZpY2VzOiBkYXRhLnNlcnZpY2VzIH0gfVxyXG4vLyB9XHJcblxyXG4vLyFjYWxsZWQgb25seSBkdXJpbmcgdGhlIGJ1aWxkIG9mIHRoZSBwcm9qZWN0XHJcbi8vPyBtYWtlIHN1cmUgdGhlIHNlcnZlcihsb2NhbGhvc3Q6MzAwMClbdGhpcyB3aWxsIHJlY2VpdmUgdGhlIHJlcXVlc3QgZHVyaW5nIGJ1aWxkXSBpcyBydW5uaW5nIG9uIGEgdGVybWluYWwgZHVyaW5nIHRoZSBidWlsZFxyXG4vLz8gYWxzbyBuZWVkIHRvIGNoYW5nZSB0aGUgbG9jYWxob3N0IGR1cmluZyB0aGUgZGVwbG95bWVudCB8IHNlZSB0aGUgdG9kb1xyXG4vLyBodHRwczovL2F1ZGU1My5tZWRpdW0uY29tL3NldC1lbnZpcm9ubWVudC12YXJpYWJsZXMtd2l0aC1uZXh0LWpzLWFuZC12ZXJjZWwtZTU0NGMwNDYwYTQ4XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKFxyXG4vLyAgICBjb250ZXh0OiBHZXRTdGF0aWNQcm9wc0NvbnRleHRcclxuLy8gKSA9PiB7XHJcbi8vICAgIC8vIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG5cclxuLy8gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2VydmljZXMnKVxyXG4vLyAgICBjb25zdCB7IHNlcnZpY2VzIH0gPSBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgIGNvbnNvbGUubG9nKHsgc2VydmljZXMgfSlcclxuLy8gICAgcmV0dXJuIHsgcHJvcHM6IHsgc2VydmljZXM6IHNlcnZpY2VzIH0gfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvbWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvcmlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=