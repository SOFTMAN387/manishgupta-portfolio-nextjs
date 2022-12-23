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
    className: "flex items-center p-2 space-x-4 ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
      className: "w-12 h-12 text-green"
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
  name: "React Shopping-App",
  description: "This app shows a statistical Iphone Shopping carts.",
  image_path: "/images/iphone-shop-app.jpeg",
  deployed_url: "https://er-manishgupta-shopping-app.netlify.app/",
  github_url: "https://github.com/SOFTMAN387/react-shop-app",
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
} // {
//   name: "YouTube using YouTube ",
//   image_path: "/images/youtubeClone.png",
//   deployed_url: "https://not-utube.web.app/",
//   github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
//   category: ["express"],
//   description:
//     'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
//   key_techs: [
//     "React",
//     "Redux",
//     "Firebase Auth",
//     "YouTube API",
//     "Sass",
//     "Bootstrap",
//   ],
// },
// {
//   name: "Football App",
//   image_path: "/images/football.png",
//   deployed_url: "https://o-my-goal.web.app/",
//   github_url: "https://github.com/Dey-Sumit/football-app",
//   category: ["react"],
//   description:
//     "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
//   key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
// },
];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9ic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvbWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9yaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlNlcnZpY2VDYXJkIiwic2VydmljZSIsIkljb24iLCJ0aXRsZSIsImFib3V0IiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwic2VydmljZXMiLCJSaUNvbXB1dGVyTGluZSIsIkZhU2VydmVyIiwiQWlPdXRsaW5lQXBpIiwiTWREZXZlbG9wZXJNb2RlIiwiQWlPdXRsaW5lQW50RGVzaWduIiwibGFuZ3VhZ2VzIiwiQnNDaXJjbGVGaWxsIiwibmFtZSIsImxldmVsIiwidG9vbHMiLCJwcm9qZWN0cyIsImRlc2NyaXB0aW9uIiwiaW1hZ2VfcGF0aCIsImRlcGxveWVkX3VybCIsImdpdGh1Yl91cmwiLCJjYXRlZ29yeSIsImtleV90ZWNocyIsIkFib3V0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFD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O0FBQUEscUJBREQ7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTRCRCxDQS9CRCxDLENBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZXNCLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDdEVBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vdHlwZXMnXHJcbi8vIGltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcblxyXG5jb25zdCBTZXJ2aWNlQ2FyZDogRnVuY3Rpb25Db21wb25lbnQ8eyBzZXJ2aWNlOiBTZXJ2aWNlIH0+ID0gKHtcclxuICAgc2VydmljZTogeyBJY29uLCB0aXRsZSwgYWJvdXQgfSxcclxufSkgPT4ge1xyXG4gICAvL1hTUyBhdHRhY2sgOiggb24gb3VyIHBvcnRmb2xpbyBidHcsIGFzIGFuIGFsdGVybmF0ZSB1c2UgbnBtIGkgZG9tIHB1cmlmeVxyXG4gICBmdW5jdGlvbiBjcmVhdGVNYXJrdXAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgIF9faHRtbDogYWJvdXQsXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHAtMiBzcGFjZS14LTQgJz5cclxuICAgICAgICAgPEljb24gY2xhc3NOYW1lPSd3LTEyIGgtMTIgdGV4dC1ncmVlbicgLz5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3RpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtjcmVhdGVNYXJrdXAoKX0gLz5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VDYXJkXHJcbiIsImltcG9ydCB7IFJpQ29tcHV0ZXJMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCB7IEZhU2VydmVyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUFudERlc2lnbiwgQWlPdXRsaW5lQXBpIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IE1kRGV2ZWxvcGVyTW9kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBJUHJvamVjdCwgU2VydmljZSwgU2tpbGwgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHsgQnNDaXJjbGVGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZXM6IFNlcnZpY2VbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBSaUNvbXB1dGVyTGluZSxcclxuICAgIHRpdGxlOiBcIkZyb250ZW5kIERldmVsb3BtZW50XCIsXHJcbiAgICBhYm91dDpcclxuICAgICAgXCJJIGNhbiBzdXBwb3J0IHRvIGJ1aWxkIHVzZXIgSW50ZXJmYWNlIFVzaW5nIDxiPiBIVE1MPC9iPiw8Yj5DU1M8L2I+LDxiPkphdmEgU2NyaXB0PC9iPiw8Yj4gQm9vdHN0cmFwIDwvYj4sPGI+IFRhaWx3aW5kPC9iPiw8Yj4gUmVhY3QgLCBSZWR1eCA8L2I+IGFuZCA8Yj5OZXh0anM8L2I+IFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRmFTZXJ2ZXIsXHJcbiAgICB0aXRsZTogXCJCYWNrZW5kICBEZXZlbG9wbWVudFwiLFxyXG4gICAgYWJvdXQ6XHJcbiAgICAgIFwiaGFuZGxpbmcgZGF0YWJhc2UsIHNlcnZlciwgYXBpIHVzaW5nIDxiPkV4cHJlc3NKcyA8L2I+LDxiPk5vZGVKcyA8L2I+ICYgb3RoZXIgcG9wdWxhciBmcmFtZXdvcmtzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBBaU91dGxpbmVBcGksXHJcbiAgICB0aXRsZTogXCJBUEkgRGV2ZWxvcG1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIkkgY2FuIGRldmVsb3Agcm9idXN0ICBSRVNURnVsbCBBUElzIHVzaW5nIDxiPlBvc3RtYW48L2I+LDxiPkh0dHAgUmVxdWVzdDwvYj4gICYgPGI+Tm9kZSBBUEk8L2I+IFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogTWREZXZlbG9wZXJNb2RlLFxyXG4gICAgdGl0bGU6IFwiRGF0YSBCYXNlXCIsXHJcbiAgICBhYm91dDogXCJXb3JraW5nIHdpdGggTm9TcWwgZGF0YWJhc2UsSGF2aW5nIGtub3dsZWRnZSBhYm91dCBtb25nb2RiIGNvbXBhc3MsbW9uZ29EYiBhdGxhcyxtb25nb29zZS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEFpT3V0bGluZUFudERlc2lnbixcclxuICAgIHRpdGxlOiBcIkRlcGxveW1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIiBOZWxsaWZ5LFZlcmNlbCxHaXRIdWIuZXQuLiBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEFpT3V0bGluZUFudERlc2lnbixcclxuICAgIHRpdGxlOiBcIk90aGVyc1wiLFxyXG4gICAgYWJvdXQ6XHJcbiAgICAgIFwiR2l0LEdpdEh1Yixwb3N0bWFuLGNsb3VkaW5hcnksc3RyaXBcIixcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIEljb246IFJpQ29tcHV0ZXJMaW5lLFxyXG4gIC8vICAgdGl0bGU6IFwiV2hhdGV2ZXJcIixcclxuICAvLyAgIGFib3V0OlxyXG4gIC8vICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhpYyBxdWlzIG1pbmltYSBhdXRlbSFcIixcclxuICAvLyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlczogU2tpbGxbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkhUTUwvQ1NTXCIsXHJcbiAgICBsZXZlbDogXCI5MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJKYXZhIFNjcmlwdFwiLFxyXG4gICAgbGV2ZWw6IFwiNjBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiQm9vdHN0cmFwXCIsXHJcbiAgICBsZXZlbDogXCI4NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJSZWFjdC9SZWR1eFwiLFxyXG4gICAgbGV2ZWw6IFwiNzBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiTmV4dEpzXCIsXHJcbiAgICBsZXZlbDogXCI3NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJOb2RlSnNcIixcclxuICAgIGxldmVsOiBcIjgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkV4cHJlc3NKc1wiLFxyXG4gICAgbGV2ZWw6IFwiODBcIixcclxuICB9LFxyXG4gIFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvb2xzOiBTa2lsbFtdID0gW1xyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiY2xvdWRpbmFyeVwiLFxyXG4gICAgbGV2ZWw6IFwiODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwic3RyaXBlXCIsXHJcbiAgICBsZXZlbDogXCI0NVwiLFxyXG4gIH0sXHJcbiBcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0czogSVByb2plY3RbXSA9IFtcclxuICB7IFxyXG4gICAgbmFtZTogXCJSZWFjdCBTaG9wcGluZy1BcHBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgYXBwIHNob3dzIGEgc3RhdGlzdGljYWwgSXBob25lIFNob3BwaW5nIGNhcnRzLlwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2lwaG9uZS1zaG9wLWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS1zaG9wcGluZy1hcHAubmV0bGlmeS5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L3JlYWN0LXNob3AtYXBwXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJCb290c3RyYXBcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlBpenphIE9yZGVyaW5nIEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3BpenphLWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvcGl6emEtb3JkZXJpbmctYXBwLW5leHRqc1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9waXp6YS1vcmRlcmluZy1hcHAtbmV4dGpzXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJSZWFsIHRpbWUgb3JkZXJpbmcgeW91ciBwaXp6YSBhbmQgdHJhY2tpbmcgdGhyb3VnaCB5b3VyIG9yZGVyZWQgcGl6emEuLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJSZWFjdFwiLCBcIlJlZHV4XCIsIFwiTmV4dGpzXCIsXCJNb25nb1wiXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIldvcmxkLVJhbmtpbmctQXBwXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvd29ybGRyYW5rcy5wbmdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL3dvcmxkLXJhbmtzLW11LnZlcmNlbC5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L3dvcmxkLXJhbmtzXCIsXHJcbiAgICBjYXRlZ29yeTogWyBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQ2hlY2tpbmcgd29ybGQgcmFuayBieSBjb3VudHJ5Li4uXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcclxuICAgICAgXCJSZWFjdGpzXCIsXHJcbiAgICAgIFwiTmV4dGpzXCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICAgIFwidGFpbHdpbmRcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlBvcnRmb2xpb1wiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3BvcnQtYXBwLmpwZWdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL2VyLW1hbmlzaGd1cHRhLXBvcnRmb2xpby5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvcmVhY3QtcG9ydGZvbGlvXCIsXHJcbiAgICBjYXRlZ29yeTogWyBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICBcIk1ha2luZyB1c2VyJ3MgbGFuZGluZyBwYWdlIHBvcnRmb2xpby4uLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXHJcbiAgICAgIFwiUmVhY3RcIixcclxuICAgICAgXCJCb290c3RyYXBcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNvdmlkIFRyYWNraW5nIEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2NvdmlkLXRyYWNrLWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS1pbmRpYS1jb3ZpZDE5Lm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9jb3ZpZDE5LWluZGlhLWNhc2VzXCIsXHJcbiAgICBjYXRlZ29yeTogWyBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVHJhY2tpbmcgY292aWQtMTkgaW5kaWFuIGNhc2VzIGJ5IHN0YXRlcy4uLi5cIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJBcGlcIiwgXCJCb290c3RyYXBcIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJUb2RvIEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3RvZG8tYXBwLmpwZWdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL3NvZnRtYW4zODcuZ2l0aHViLmlvL3RvZG9fYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny90b2RvX2FwcFwiLFxyXG4gICAgY2F0ZWdvcnk6IFsgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFkZGluZyBzb21lIGxpc3Qgb2YgZGFpbHkgYmFzZWQuLi5hcyB3ZWxsIGFzIHJlbW92aW5nIC4uLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJqYXZhc2NyaXB0XCIsIFwiSHRtbFwiLFwiY3NzXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ2xvY2sgUmVtaW5kZXIgQXBwXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvY2xrLWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9zb2Z0bWFuMzg3LmdpdGh1Yi5pby9jbG9ja19yZW1pbmRlcl9hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L2Nsb2NrX3JlbWluZGVyX2FwcFwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiU2V0dGluZyB5b3VyIHRpbWUgZm9yIGJyZWFrLWZhc3QuLi5sdW5jaCBhcyB3ZWxsIGFzIGRpbm5lci4uLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJIVE1MXCIsIFwiQ3NzXCIsIFwiSmF2YVNjcmlwdFwiXSxcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIG5hbWU6IFwiWW91VHViZSB1c2luZyBZb3VUdWJlIFwiLFxyXG4gIC8vICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3lvdXR1YmVDbG9uZS5wbmdcIixcclxuICAvLyAgIGRlcGxveWVkX3VybDogXCJodHRwczovL25vdC11dHViZS53ZWIuYXBwL1wiLFxyXG4gIC8vICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L3lvdXR1YmUtY2xvbmUtdHV0b3JpYWwtdXBcIixcclxuICAvLyAgIGNhdGVnb3J5OiBbXCJleHByZXNzXCJdLFxyXG4gIC8vICAgZGVzY3JpcHRpb246XHJcbiAgLy8gICAgICdGdWxsKGFsbW9zdCkgRnVuY3Rpb25hbCBZb3VUdWJlIHJlcGxpY2Egd2hlcmUgb25lIGNhbiBsb2dpbiB3aXRoIGhpcy9oZXIgeW91dHViZSBhY2NvdW50IHRvIGVuam95IFwibm90LVlvdVR1YmVcIi5Vc2VyIGNhbiBsaWtlIGEgdmlkZW8sY29tbWVudCBvbiBhIHZpZGVvICYgTXVjaCBNb3JlICcsXHJcbiAgLy8gICBrZXlfdGVjaHM6IFtcclxuICAvLyAgICAgXCJSZWFjdFwiLFxyXG4gIC8vICAgICBcIlJlZHV4XCIsXHJcbiAgLy8gICAgIFwiRmlyZWJhc2UgQXV0aFwiLFxyXG4gIC8vICAgICBcIllvdVR1YmUgQVBJXCIsXHJcbiAgLy8gICAgIFwiU2Fzc1wiLFxyXG4gIC8vICAgICBcIkJvb3RzdHJhcFwiLFxyXG4gIC8vICAgXSxcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIG5hbWU6IFwiRm9vdGJhbGwgQXBwXCIsXHJcbiAgLy8gICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvZm9vdGJhbGwucG5nXCIsXHJcbiAgLy8gICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9vLW15LWdvYWwud2ViLmFwcC9cIixcclxuICAvLyAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC9mb290YmFsbC1hcHBcIixcclxuICAvLyAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAvLyAgIGRlc2NyaXB0aW9uOlxyXG4gIC8vICAgICBcIm8gbXkgZ29hbCByZXBsaWNhIHdoZXJlIGFuIHVzZXIgY2FuIGtlZXAgYW4gZXllIG9uIGhpcyBmYXZvcml0ZSBjbHViLlRoaXMgYXBwIHdpbGwga2VlcCBwcm92aWRpbmcgXFxuIGFsbCB0aGUgc3RhdGlzdGljcyBvZiB0aGF0IGNsdWIuYWxsIHRoZSBmYW5zIGNhbiBhbHNvIGNoYXQgXCIsXHJcbiAgLy8gICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJGaXJlYmFzZSBBdXRoXCIsIFwiQVBJXCIsIFwiU2Fzc1wiLCBcIkJvb3RzdHJhcFwiXSxcclxuIC8vIH0sXHJcbl07XHJcbiIsImltcG9ydCB7XHJcbiAgR2V0U2VydmVyU2lkZVByb3BzLFxyXG4gIEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQsXHJcbiAgR2V0U3RhdGljUHJvcHMsXHJcbiAgR2V0U3RhdGljUHJvcHNDb250ZXh0LFxyXG4gIE5leHRQYWdlLFxyXG59IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZFwiO1xyXG5pbXBvcnQgeyBzZXJ2aWNlcyB9IGZyb20gXCIuLi9kYXRhXCI7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IEFib3V0OiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhzZXJ2aWNlcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC1ncm93IHB4LTYgcHQtMSBcIj5cclxuICAgICAgPGg2IGNsYXNzTmFtZT1cIm15LTMgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgSSdtIElUIEVuZ2luZWVyaW5nIFN0dWRlbnQgb2YgTXV6YWZmYXJwdXIgSW5zdGl0dXRlIG9mIFRlY2hub2xvZ3ksTXV6YWZmYXJwdXIoMjAyMS0yMDI0KS5cclxuICAgICAgICBQYXNzIG91dCBEaXBsb21hIGluIENvbXB1dGVyIFNjaWVuY2UgYW5kIEVuZ2luZWVyaW5nICwgRnJvbSBnb3Z0LiBQb2x5dGVjaG5pYyBjb2xsZWdlLHBhdG5hLTcoMjAxOC0yMDIxKS5cclxuICAgICAgPC9oNj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwLTQgbXQtNSBiZy1ncmF5LTQwMCBkYXJrOmJnLWRhcmstMTAwIFwiXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMS41cmVtXCIsIG1hcmdpblJpZ2h0OiBcIi0xLjVyZW1cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15LTMgdGV4dC14bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVcIj5cclxuICAgICAgICAgIFdvcmtpbmcgV2l0aCBXZWIgVGVjaG5vbG9naWVzLlxyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNiBteS0zIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICB7LyogY2hpbGRyZW4ncyBpbml0aWFsIGFuZCBhbmltYXRlIHByb3BlcnR5IHNob3VsZCBiZSBzYW1lIGFzIHRoZSBwYXJlbnQgZHVyaW5nIGEgc3RhZ2dlciBlZmZlY3QgICovfVxyXG4gICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBwLTIgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBkYXJrOmJnLWRhcmstMjAwIG1kOmNvbC1zcGFuLTEgXCJcclxuICAgICAgICAgICAgICBrZXk9e3NlcnZpY2UudGl0bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U2VydmljZUNhcmQgc2VydmljZT17c2VydmljZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8hY2FsbGVkIGV2ZXJ5IHRpbWUgIHRoZSBwYWdlIHJlZnJlc2hlZFxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoXHJcbi8vICAgIGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRcclxuLy8gKSA9PiB7XHJcbi8vICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NlcnZpY2VzJylcclxuLy8gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICAgY29uc29sZS5sb2coZGF0YSlcclxuLy8gICAgcmV0dXJuIHsgcHJvcHM6IHsgc2VydmljZXM6IGRhdGEuc2VydmljZXMgfSB9XHJcbi8vIH1cclxuXHJcbi8vIWNhbGxlZCBvbmx5IGR1cmluZyB0aGUgYnVpbGQgb2YgdGhlIHByb2plY3RcclxuLy8/IG1ha2Ugc3VyZSB0aGUgc2VydmVyKGxvY2FsaG9zdDozMDAwKVt0aGlzIHdpbGwgcmVjZWl2ZSB0aGUgcmVxdWVzdCBkdXJpbmcgYnVpbGRdIGlzIHJ1bm5pbmcgb24gYSB0ZXJtaW5hbCBkdXJpbmcgdGhlIGJ1aWxkXHJcbi8vPyBhbHNvIG5lZWQgdG8gY2hhbmdlIHRoZSBsb2NhbGhvc3QgZHVyaW5nIHRoZSBkZXBsb3ltZW50IHwgc2VlIHRoZSB0b2RvXHJcbi8vIGh0dHBzOi8vYXVkZTUzLm1lZGl1bS5jb20vc2V0LWVudmlyb25tZW50LXZhcmlhYmxlcy13aXRoLW5leHQtanMtYW5kLXZlcmNlbC1lNTQ0YzA0NjBhNDhcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoXHJcbi8vICAgIGNvbnRleHQ6IEdldFN0YXRpY1Byb3BzQ29udGV4dFxyXG4vLyApID0+IHtcclxuLy8gICAgLy8gY29uc29sZS5sb2coY29udGV4dCk7XHJcblxyXG4vLyAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZXJ2aWNlcycpXHJcbi8vICAgIGNvbnN0IHsgc2VydmljZXMgfSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICAgY29uc29sZS5sb2coeyBzZXJ2aWNlcyB9KVxyXG4vLyAgICByZXR1cm4geyBwcm9wczogeyBzZXJ2aWNlczogc2VydmljZXMgfSB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==