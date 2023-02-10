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
  deployed_url: "https://er-manishgupta-e-commerce.netlify.app/",
  github_url: "https://github.com/SOFTMAN387/e-commerce-react-ui",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9ic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvbWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9yaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlNlcnZpY2VDYXJkIiwic2VydmljZSIsIkljb24iLCJ0aXRsZSIsImFib3V0IiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwic2VydmljZXMiLCJSaUNvbXB1dGVyTGluZSIsIkZhU2VydmVyIiwiQWlPdXRsaW5lQXBpIiwiTWREZXZlbG9wZXJNb2RlIiwiQWlPdXRsaW5lQW50RGVzaWduIiwibGFuZ3VhZ2VzIiwiQnNDaXJjbGVGaWxsIiwibmFtZSIsImxldmVsIiwidG9vbHMiLCJwcm9qZWN0cyIsImRlc2NyaXB0aW9uIiwiaW1hZ2VfcGF0aCIsImRlcGxveWVkX3VybCIsImdpdGh1Yl91cmwiLCJjYXRlZ29yeSIsImtleV90ZWNocyIsIkFib3V0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBRUEsTUFBTUEsV0FBb0QsR0FBRyxDQUFDO0FBQzNEQyxTQUFPLEVBQUU7QUFBRUMsUUFBRjtBQUFRQyxTQUFSO0FBQWVDO0FBQWY7QUFEa0QsQ0FBRCxLQUV2RDtBQUNIO0FBQ0EsV0FBU0MsWUFBVCxHQUF3QjtBQUNyQixXQUFPO0FBQ0pDLFlBQU0sRUFBRUY7QUFESixLQUFQO0FBR0Y7O0FBRUQsc0JBQ0c7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQSw0QkFDRyxxRUFBQyxJQUFEO0FBQU0sZUFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZUFFRztBQUFLLGVBQVMsRUFBQyxFQUFmO0FBQUEsOEJBQ0c7QUFBSSxpQkFBUyxFQUFDLFdBQWQ7QUFBQSxrQkFBMkJEO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsZUFFRztBQUFHLCtCQUF1QixFQUFFRSxZQUFZO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURIO0FBU0YsQ0FuQkQ7O0FBcUJlTCwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVPLE1BQU1PLFFBQW1CLEdBQUcsQ0FDakM7QUFDRUwsTUFBSSxFQUFFTSw2REFEUjtBQUVFTCxPQUFLLEVBQUUsc0JBRlQ7QUFHRUMsT0FBSyxFQUNIO0FBSkosQ0FEaUMsRUFPakM7QUFDRUYsTUFBSSxFQUFFTyx1REFEUjtBQUVFTixPQUFLLEVBQUUsc0JBRlQ7QUFHRUMsT0FBSyxFQUNIO0FBSkosQ0FQaUMsRUFhakM7QUFDRUYsTUFBSSxFQUFFUSwyREFEUjtBQUVFUCxPQUFLLEVBQUUsaUJBRlQ7QUFHRUMsT0FBSyxFQUNIO0FBSkosQ0FiaUMsRUFtQmpDO0FBQ0VGLE1BQUksRUFBRVMsOERBRFI7QUFFRVIsT0FBSyxFQUFFLFdBRlQ7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FuQmlDLEVBd0JqQztBQUNFRixNQUFJLEVBQUVVLGlFQURSO0FBRUVULE9BQUssRUFBRSxZQUZUO0FBR0VDLE9BQUssRUFDSDtBQUpKLENBeEJpQyxFQThCakM7QUFDRUYsTUFBSSxFQUFFVSxpRUFEUjtBQUVFVCxPQUFLLEVBQUUsUUFGVDtBQUdFQyxPQUFLLEVBQ0g7QUFKSixDQTlCaUMsQ0FvQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpDaUMsQ0FBNUI7QUE0Q0EsTUFBTVMsU0FBa0IsR0FBRyxDQUNoQztBQUNFWCxNQUFJLEVBQUVZLDJEQURSO0FBRUVDLE1BQUksRUFBRSxVQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBRGdDLEVBTWhDO0FBQ0VkLE1BQUksRUFBRVksMkRBRFI7QUFFRUMsTUFBSSxFQUFFLGFBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FOZ0MsRUFXaEM7QUFDRWQsTUFBSSxFQUFFWSwyREFEUjtBQUVFQyxNQUFJLEVBQUUsV0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQVhnQyxFQWdCaEM7QUFDRWQsTUFBSSxFQUFFWSwyREFEUjtBQUVFQyxNQUFJLEVBQUUsYUFGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQWhCZ0MsRUFxQmhDO0FBQ0VkLE1BQUksRUFBRVksMkRBRFI7QUFFRUMsTUFBSSxFQUFFLFFBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FyQmdDLEVBMEJoQztBQUNFZCxNQUFJLEVBQUVZLDJEQURSO0FBRUVDLE1BQUksRUFBRSxRQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBMUJnQyxFQStCaEM7QUFDRWQsTUFBSSxFQUFFWSwyREFEUjtBQUVFQyxNQUFJLEVBQUUsV0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQS9CZ0MsQ0FBM0I7QUF1Q0EsTUFBTUMsS0FBYyxHQUFHLENBQzVCO0FBQ0VmLE1BQUksRUFBRVksMkRBRFI7QUFFRUMsTUFBSSxFQUFFLFlBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FENEIsRUFNNUI7QUFDRWQsTUFBSSxFQUFFWSwyREFEUjtBQUVFQyxNQUFJLEVBQUUsUUFGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQU40QixDQUF2QjtBQWNBLE1BQU1FLFFBQW9CLEdBQUcsQ0FDbEM7QUFDRUgsTUFBSSxFQUFFLHlCQURSO0FBRUVJLGFBQVcsRUFDVCxvREFISjtBQUlFQyxZQUFVLEVBQUUsc0JBSmQ7QUFLRUMsY0FBWSxFQUFFLGdEQUxoQjtBQU1FQyxZQUFVLEVBQUUsbURBTmQ7QUFPRUMsVUFBUSxFQUFFLENBQUMsT0FBRCxDQVBaO0FBUUVDLFdBQVMsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFdBQW5CO0FBUmIsQ0FEa0MsRUFXbEM7QUFDRVQsTUFBSSxFQUFFLFlBRFI7QUFFRUksYUFBVyxFQUNULHNEQUhKO0FBSUVDLFlBQVUsRUFBRSxzQkFKZDtBQUtFQyxjQUFZLEVBQUUsZ0RBTGhCO0FBTUVDLFlBQVUsRUFBRSxtREFOZDtBQU9FQyxVQUFRLEVBQUUsQ0FBQyxPQUFELENBUFo7QUFRRUMsV0FBUyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsV0FBbkI7QUFSYixDQVhrQyxFQXFCbEM7QUFDRVQsTUFBSSxFQUFFLG9CQURSO0FBRUVLLFlBQVUsRUFBRSx3QkFGZDtBQUdFQyxjQUFZLEVBQUUseURBSGhCO0FBSUVDLFlBQVUsRUFBRSx5REFKZDtBQUtFQyxVQUFRLEVBQUUsQ0FBQyxPQUFELENBTFo7QUFNRUosYUFBVyxFQUNULHlFQVBKO0FBUUVLLFdBQVMsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFFBQW5CLEVBQTRCLE9BQTVCO0FBUmIsQ0FyQmtDLEVBZ0NsQztBQUNFVCxNQUFJLEVBQUUsbUJBRFI7QUFFRUssWUFBVSxFQUFFLHdCQUZkO0FBR0VDLGNBQVksRUFBRSxvQ0FIaEI7QUFJRUMsWUFBVSxFQUFFLDJDQUpkO0FBS0VDLFVBQVEsRUFBRSxDQUFFLE9BQUYsQ0FMWjtBQU1FSixhQUFXLEVBQ1QsbUNBUEo7QUFRRUssV0FBUyxFQUFFLENBQ1QsU0FEUyxFQUVULFFBRlMsRUFHVCxXQUhTLEVBSVQsVUFKUztBQVJiLENBaENrQyxFQStDbEM7QUFDRVQsTUFBSSxFQUFFLHFCQURSO0FBRUVLLFlBQVUsRUFBRSw4QkFGZDtBQUdFQyxjQUFZLEVBQUUsa0RBSGhCO0FBSUVDLFlBQVUsRUFBRSw4Q0FKZDtBQUtFQyxVQUFRLEVBQUUsQ0FBRSxPQUFGLENBTFo7QUFNRUosYUFBVyxFQUNULDBCQVBKO0FBUUVLLFdBQVMsRUFBRSxDQUNULFNBRFMsRUFFVCxPQUZTLEVBR1QsV0FIUztBQVJiLENBL0NrQyxFQThEbEM7QUFDRVQsTUFBSSxFQUFFLFdBRFI7QUFFRUssWUFBVSxFQUFFLHVCQUZkO0FBR0VDLGNBQVksRUFBRSwrQ0FIaEI7QUFJRUMsWUFBVSxFQUFFLCtDQUpkO0FBS0VDLFVBQVEsRUFBRSxDQUFFLE9BQUYsQ0FMWjtBQU1FSixhQUFXLEVBQ1gseUNBUEY7QUFRRUssV0FBUyxFQUFFLENBQ1QsT0FEUyxFQUVULFdBRlM7QUFSYixDQTlEa0MsRUEyRWxDO0FBQ0VULE1BQUksRUFBRSxvQkFEUjtBQUVFSyxZQUFVLEVBQUUsOEJBRmQ7QUFHRUMsY0FBWSxFQUFFLG1EQUhoQjtBQUlFQyxZQUFVLEVBQUUsbURBSmQ7QUFLRUMsVUFBUSxFQUFFLENBQUUsT0FBRixDQUxaO0FBTUVKLGFBQVcsRUFDVCw4Q0FQSjtBQVFFSyxXQUFTLEVBQUUsQ0FBQyxPQUFELEVBQVUsS0FBVixFQUFpQixXQUFqQjtBQVJiLENBM0VrQyxFQXNGbEM7QUFDRVQsTUFBSSxFQUFFLFVBRFI7QUFFRUssWUFBVSxFQUFFLHVCQUZkO0FBR0VDLGNBQVksRUFBRSx3Q0FIaEI7QUFJRUMsWUFBVSxFQUFFLHdDQUpkO0FBS0VDLFVBQVEsRUFBRSxDQUFFLE9BQUYsQ0FMWjtBQU1FSixhQUFXLEVBQ1QsMkRBUEo7QUFRRUssV0FBUyxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBc0IsS0FBdEI7QUFSYixDQXRGa0MsRUFpR2xDO0FBQ0VULE1BQUksRUFBRSxvQkFEUjtBQUVFSyxZQUFVLEVBQUUsc0JBRmQ7QUFHRUMsY0FBWSxFQUFFLGtEQUhoQjtBQUlFQyxZQUFVLEVBQUUsa0RBSmQ7QUFLRUMsVUFBUSxFQUFFLENBQUMsT0FBRCxDQUxaO0FBTUVKLGFBQVcsRUFDVCwrREFQSjtBQVFFSyxXQUFTLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixZQUFoQjtBQVJiLENBakdrQyxDQTJHbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBckltQyxDQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdQO0FBQ0E7O0FBR0EsTUFBTUMsS0FBZSxHQUFHLE1BQU07QUFDNUI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLDRCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0U7QUFDRSxlQUFTLEVBQUMsa0RBRFo7QUFFRSxXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRSxTQUFkO0FBQXlCQyxtQkFBVyxFQUFFO0FBQXRDLE9BRlQ7QUFBQSw4QkFJRTtBQUFJLGlCQUFTLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFRRTtBQUFLLGlCQUFTLEVBQUMsZ0NBQWY7QUFBQSxrQkFFR3BCLDhDQUFRLENBQUNxQixHQUFULENBQWMzQixPQUFELGlCQUNaO0FBQ0UsbUJBQVMsRUFBQyx1RUFEWjtBQUFBLGlDQUlFLHFFQUFDLCtEQUFEO0FBQWEsbUJBQU8sRUFBRUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLFdBRU9BLE9BQU8sQ0FBQ0UsS0FGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE0QkQsQ0EvQkQsQyxDQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWVzQixvRUFBZixFOzs7Ozs7Ozs7OztBQ3RFQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3R5cGVzJ1xyXG4vLyBpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5cclxuY29uc3QgU2VydmljZUNhcmQ6IEZ1bmN0aW9uQ29tcG9uZW50PHsgc2VydmljZTogU2VydmljZSB9PiA9ICh7XHJcbiAgIHNlcnZpY2U6IHsgSWNvbiwgdGl0bGUsIGFib3V0IH0sXHJcbn0pID0+IHtcclxuICAgLy9YU1MgYXR0YWNrIDooIG9uIG91ciBwb3J0Zm9saW8gYnR3LCBhcyBhbiBhbHRlcm5hdGUgdXNlIG5wbSBpIGRvbSBwdXJpZnlcclxuICAgZnVuY3Rpb24gY3JlYXRlTWFya3VwKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICBfX2h0bWw6IGFib3V0LFxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBwLTIgc3BhY2UteC00ICc+XHJcbiAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0ndy0xMiBoLTEyIHRleHQtZ3JlZW4nIC8+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdmb250LWJvbGQnPnt0aXRsZX08L2g2PlxyXG4gICAgICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17Y3JlYXRlTWFya3VwKCl9IC8+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlQ2FyZFxyXG4iLCJpbXBvcnQgeyBSaUNvbXB1dGVyTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyBGYVNlcnZlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVBbnREZXNpZ24sIEFpT3V0bGluZUFwaSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyBNZERldmVsb3Blck1vZGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHsgSVByb2plY3QsIFNlcnZpY2UsIFNraWxsIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IEJzQ2lyY2xlRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzOiBTZXJ2aWNlW10gPSBbXHJcbiAge1xyXG4gICAgSWNvbjogUmlDb21wdXRlckxpbmUsXHJcbiAgICB0aXRsZTogXCJGcm9udGVuZCBEZXZlbG9wbWVudFwiLFxyXG4gICAgYWJvdXQ6XHJcbiAgICAgIFwiSSBjYW4gc3VwcG9ydCB0byBidWlsZCB1c2VyIEludGVyZmFjZSBVc2luZyA8Yj4gSFRNTDwvYj4sPGI+Q1NTPC9iPiw8Yj5KYXZhIFNjcmlwdDwvYj4sPGI+IEJvb3RzdHJhcCA8L2I+LDxiPiBUYWlsd2luZDwvYj4sPGI+IFJlYWN0ICwgUmVkdXggPC9iPiBhbmQgPGI+TmV4dGpzPC9iPiBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEZhU2VydmVyLFxyXG4gICAgdGl0bGU6IFwiQmFja2VuZCAgRGV2ZWxvcG1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcImhhbmRsaW5nIGRhdGFiYXNlLCBzZXJ2ZXIsIGFwaSB1c2luZyA8Yj5FeHByZXNzSnMgPC9iPiw8Yj5Ob2RlSnMgPC9iPiAmIG90aGVyIHBvcHVsYXIgZnJhbWV3b3Jrc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQWlPdXRsaW5lQXBpLFxyXG4gICAgdGl0bGU6IFwiQVBJIERldmVsb3BtZW50XCIsXHJcbiAgICBhYm91dDpcclxuICAgICAgXCJJIGNhbiBkZXZlbG9wIHJvYnVzdCAgUkVTVEZ1bGwgQVBJcyB1c2luZyA8Yj5Qb3N0bWFuPC9iPiw8Yj5IdHRwIFJlcXVlc3Q8L2I+ICAmIDxiPk5vZGUgQVBJPC9iPiBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IE1kRGV2ZWxvcGVyTW9kZSxcclxuICAgIHRpdGxlOiBcIkRhdGEgQmFzZVwiLFxyXG4gICAgYWJvdXQ6IFwiV29ya2luZyB3aXRoIE5vU3FsIGRhdGFiYXNlLEhhdmluZyBrbm93bGVkZ2UgYWJvdXQgbW9uZ29kYiBjb21wYXNzLG1vbmdvRGIgYXRsYXMsbW9uZ29vc2UuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBBaU91dGxpbmVBbnREZXNpZ24sXHJcbiAgICB0aXRsZTogXCJEZXBsb3ltZW50XCIsXHJcbiAgICBhYm91dDpcclxuICAgICAgXCIgTmVsbGlmeSxWZXJjZWwsR2l0SHViLmV0Li4gXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBBaU91dGxpbmVBbnREZXNpZ24sXHJcbiAgICB0aXRsZTogXCJPdGhlcnNcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIkdpdCxHaXRIdWIscG9zdG1hbixjbG91ZGluYXJ5LHN0cmlwXCIsXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICBJY29uOiBSaUNvbXB1dGVyTGluZSxcclxuICAvLyAgIHRpdGxlOiBcIldoYXRldmVyXCIsXHJcbiAgLy8gICBhYm91dDpcclxuICAvLyAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIaWMgcXVpcyBtaW5pbWEgYXV0ZW0hXCIsXHJcbiAgLy8gfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYW5ndWFnZXM6IFNraWxsW10gPSBbXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJIVE1ML0NTU1wiLFxyXG4gICAgbGV2ZWw6IFwiOTBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiSmF2YSBTY3JpcHRcIixcclxuICAgIGxldmVsOiBcIjYwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkJvb3RzdHJhcFwiLFxyXG4gICAgbGV2ZWw6IFwiODVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiUmVhY3QvUmVkdXhcIixcclxuICAgIGxldmVsOiBcIjcwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIk5leHRKc1wiLFxyXG4gICAgbGV2ZWw6IFwiNzVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiTm9kZUpzXCIsXHJcbiAgICBsZXZlbDogXCI4MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJFeHByZXNzSnNcIixcclxuICAgIGxldmVsOiBcIjgwXCIsXHJcbiAgfSxcclxuICBcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b29sczogU2tpbGxbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcImNsb3VkaW5hcnlcIixcclxuICAgIGxldmVsOiBcIjgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcInN0cmlwZVwiLFxyXG4gICAgbGV2ZWw6IFwiNDVcIixcclxuICB9LFxyXG4gXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHM6IElQcm9qZWN0W10gPSBbXHJcbiAgeyBcclxuICAgIG5hbWU6IFwiZS1Db21tZXJjZSBTaG9wcGluZy1BcHBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgYXBwIHNob3dzIGEgZHluYW1pYyBmdXJuaXR1cmUgU2hvcHBpbmcgY2FydHMuXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvZWNvbW1hcHAucG5nXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS1lLWNvbW1lcmNlLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9lLWNvbW1lcmNlLXJlYWN0LXVpXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJCb290c3RyYXBcIl0sXHJcbiAgfSxcclxuICB7IFxyXG4gICAgbmFtZTogXCJtb3ZpZXMtYXBwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGlzIGFwcCBzaG93cyBvbmxpbmUgbW92aWUgd2F0Y2hpbmcgb3IgZG93bmxvYWRpbmcuXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvbW92aWVhcHAuanBnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS1lLWNvbW1lcmNlLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9lLWNvbW1lcmNlLXJlYWN0LXVpXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJCb290c3RyYXBcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlBpenphIE9yZGVyaW5nIEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3BpenphLWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvcGl6emEtb3JkZXJpbmctYXBwLW5leHRqc1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9waXp6YS1vcmRlcmluZy1hcHAtbmV4dGpzXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJSZWFsIHRpbWUgb3JkZXJpbmcgeW91ciBwaXp6YSBhbmQgdHJhY2tpbmcgdGhyb3VnaCB5b3VyIG9yZGVyZWQgcGl6emEuLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJSZWFjdFwiLCBcIlJlZHV4XCIsIFwiTmV4dGpzXCIsXCJNb25nb1wiXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIldvcmxkLVJhbmtpbmctQXBwXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvd29ybGRyYW5rcy5wbmdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL3dvcmxkLXJhbmtzLW11LnZlcmNlbC5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L3dvcmxkLXJhbmtzXCIsXHJcbiAgICBjYXRlZ29yeTogWyBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQ2hlY2tpbmcgd29ybGQgcmFuayBieSBjb3VudHJ5Li4uXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcclxuICAgICAgXCJSZWFjdGpzXCIsXHJcbiAgICAgIFwiTmV4dGpzXCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICAgIFwidGFpbHdpbmRcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlYWN0IGVjb21tZXJjZS1BcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9pcGhvbmUtc2hvcC1hcHAuanBlZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vZXItbWFuaXNoZ3VwdGEtc2hvcHBpbmctYXBwLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9yZWFjdC1zaG9wLWFwcFwiLFxyXG4gICAgY2F0ZWdvcnk6IFsgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlJlYWN0IG1vYmlsZSBzaG9wIGFwcC4uLlwiLFxyXG4gICAga2V5X3RlY2hzOiBbXHJcbiAgICAgIFwiUmVhY3Rqc1wiLFxyXG4gICAgICBcIlJlZHV4XCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICAgXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQb3J0Zm9saW9cIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9wb3J0LWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9lci1tYW5pc2hndXB0YS1wb3J0Zm9saW8ubmV0bGlmeS5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TT0ZUTUFOMzg3L3JlYWN0LXBvcnRmb2xpb1wiLFxyXG4gICAgY2F0ZWdvcnk6IFsgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgXCJNYWtpbmcgdXNlcidzIGxhbmRpbmcgcGFnZSBwb3J0Zm9saW8uLi5cIixcclxuICAgIGtleV90ZWNoczogW1xyXG4gICAgICBcIlJlYWN0XCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb3ZpZCBUcmFja2luZyBBcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jb3ZpZC10cmFjay1hcHAuanBlZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vZXItbWFuaXNoZ3VwdGEtaW5kaWEtY292aWQxOS5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvY292aWQxOS1pbmRpYS1jYXNlc1wiLFxyXG4gICAgY2F0ZWdvcnk6IFsgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRyYWNraW5nIGNvdmlkLTE5IGluZGlhbiBjYXNlcyBieSBzdGF0ZXMuLi4uXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiQXBpXCIsIFwiQm9vdHN0cmFwXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiVG9kbyBBcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy90b2RvLWFwcC5qcGVnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9zb2Z0bWFuMzg3LmdpdGh1Yi5pby90b2RvX2FwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1NPRlRNQU4zODcvdG9kb19hcHBcIixcclxuICAgIGNhdGVnb3J5OiBbIFwicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBZGRpbmcgc29tZSBsaXN0IG9mIGRhaWx5IGJhc2VkLi4uYXMgd2VsbCBhcyByZW1vdmluZyAuLi5cIixcclxuICAgIGtleV90ZWNoczogW1wiamF2YXNjcmlwdFwiLCBcIkh0bWxcIixcImNzc1wiXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIkNsb2NrIFJlbWluZGVyIEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2Nsay1hcHAuanBlZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vc29mdG1hbjM4Ny5naXRodWIuaW8vY2xvY2tfcmVtaW5kZXJfYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU09GVE1BTjM4Ny9jbG9ja19yZW1pbmRlcl9hcHBcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNldHRpbmcgeW91ciB0aW1lIGZvciBicmVhay1mYXN0Li4ubHVuY2ggYXMgd2VsbCBhcyBkaW5uZXIuLi5cIixcclxuICAgIGtleV90ZWNoczogW1wiSFRNTFwiLCBcIkNzc1wiLCBcIkphdmFTY3JpcHRcIl0sXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICBuYW1lOiBcIllvdVR1YmUgdXNpbmcgWW91VHViZSBcIixcclxuICAvLyAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy95b3V0dWJlQ2xvbmUucG5nXCIsXHJcbiAgLy8gICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9ub3QtdXR1YmUud2ViLmFwcC9cIixcclxuICAvLyAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC95b3V0dWJlLWNsb25lLXR1dG9yaWFsLXVwXCIsXHJcbiAgLy8gICBjYXRlZ29yeTogW1wiZXhwcmVzc1wiXSxcclxuICAvLyAgIGRlc2NyaXB0aW9uOlxyXG4gIC8vICAgICAnRnVsbChhbG1vc3QpIEZ1bmN0aW9uYWwgWW91VHViZSByZXBsaWNhIHdoZXJlIG9uZSBjYW4gbG9naW4gd2l0aCBoaXMvaGVyIHlvdXR1YmUgYWNjb3VudCB0byBlbmpveSBcIm5vdC1Zb3VUdWJlXCIuVXNlciBjYW4gbGlrZSBhIHZpZGVvLGNvbW1lbnQgb24gYSB2aWRlbyAmIE11Y2ggTW9yZSAnLFxyXG4gIC8vICAga2V5X3RlY2hzOiBbXHJcbiAgLy8gICAgIFwiUmVhY3RcIixcclxuICAvLyAgICAgXCJSZWR1eFwiLFxyXG4gIC8vICAgICBcIkZpcmViYXNlIEF1dGhcIixcclxuICAvLyAgICAgXCJZb3VUdWJlIEFQSVwiLFxyXG4gIC8vICAgICBcIlNhc3NcIixcclxuICAvLyAgICAgXCJCb290c3RyYXBcIixcclxuICAvLyAgIF0sXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBuYW1lOiBcIkZvb3RiYWxsIEFwcFwiLFxyXG4gIC8vICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2Zvb3RiYWxsLnBuZ1wiLFxyXG4gIC8vICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vby1teS1nb2FsLndlYi5hcHAvXCIsXHJcbiAgLy8gICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvZm9vdGJhbGwtYXBwXCIsXHJcbiAgLy8gICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgLy8gICBkZXNjcmlwdGlvbjpcclxuICAvLyAgICAgXCJvIG15IGdvYWwgcmVwbGljYSB3aGVyZSBhbiB1c2VyIGNhbiBrZWVwIGFuIGV5ZSBvbiBoaXMgZmF2b3JpdGUgY2x1Yi5UaGlzIGFwcCB3aWxsIGtlZXAgcHJvdmlkaW5nIFxcbiBhbGwgdGhlIHN0YXRpc3RpY3Mgb2YgdGhhdCBjbHViLmFsbCB0aGUgZmFucyBjYW4gYWxzbyBjaGF0IFwiLFxyXG4gIC8vICAga2V5X3RlY2hzOiBbXCJSZWFjdFwiLCBcIlJlZHV4XCIsIFwiRmlyZWJhc2UgQXV0aFwiLCBcIkFQSVwiLCBcIlNhc3NcIiwgXCJCb290c3RyYXBcIl0sXHJcbiAvLyB9LFxyXG5dO1xyXG4iLCJpbXBvcnQge1xyXG4gIEdldFNlcnZlclNpZGVQcm9wcyxcclxuICBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0LFxyXG4gIEdldFN0YXRpY1Byb3BzLFxyXG4gIEdldFN0YXRpY1Byb3BzQ29udGV4dCxcclxuICBOZXh0UGFnZSxcclxufSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgU2VydmljZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VydmljZUNhcmRcIjtcclxuaW1wb3J0IHsgc2VydmljZXMgfSBmcm9tIFwiLi4vZGF0YVwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5jb25zdCBBYm91dDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coc2VydmljZXMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBweC02IHB0LTEgXCI+XHJcbiAgICAgIDxoNiBjbGFzc05hbWU9XCJteS0zIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgIEknbSBJVCBFbmdpbmVlcmluZyBTdHVkZW50IG9mIE11emFmZmFycHVyIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LE11emFmZmFycHVyKDIwMjEtMjAyNCkuXHJcbiAgICAgICAgUGFzcyBvdXQgRGlwbG9tYSBpbiBDb21wdXRlciBTY2llbmNlIGFuZCBFbmdpbmVlcmluZyAsIEZyb20gZ292dC4gUG9seXRlY2huaWMgY29sbGVnZSxwYXRuYS03KDIwMTgtMjAyMSkuXHJcbiAgICAgIDwvaDY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcC00IG10LTUgYmctZ3JheS00MDAgZGFyazpiZy1kYXJrLTEwMCBcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiLTEuNXJlbVwiLCBtYXJnaW5SaWdodDogXCItMS41cmVtXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJteS0zIHRleHQteGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlXCI+XHJcbiAgICAgICAgICBXb3JraW5nIFdpdGggV2ViIFRlY2hub2xvZ2llcy5cclxuICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTYgbXktMyBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgey8qIGNoaWxkcmVuJ3MgaW5pdGlhbCBhbmQgYW5pbWF0ZSBwcm9wZXJ0eSBzaG91bGQgYmUgc2FtZSBhcyB0aGUgcGFyZW50IGR1cmluZyBhIHN0YWdnZXIgZWZmZWN0ICAqL31cclxuICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgcC0yIGJnLWdyYXktMjAwIHJvdW5kZWQtbGcgZGFyazpiZy1kYXJrLTIwMCBtZDpjb2wtc3Bhbi0xIFwiXHJcbiAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlLnRpdGxlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFNlcnZpY2VDYXJkIHNlcnZpY2U9e3NlcnZpY2V9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIWNhbGxlZCBldmVyeSB0aW1lICB0aGUgcGFnZSByZWZyZXNoZWRcclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKFxyXG4vLyAgICBjb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0XHJcbi8vICkgPT4ge1xyXG4vLyAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZXJ2aWNlcycpXHJcbi8vICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbi8vICAgIHJldHVybiB7IHByb3BzOiB7IHNlcnZpY2VzOiBkYXRhLnNlcnZpY2VzIH0gfVxyXG4vLyB9XHJcblxyXG4vLyFjYWxsZWQgb25seSBkdXJpbmcgdGhlIGJ1aWxkIG9mIHRoZSBwcm9qZWN0XHJcbi8vPyBtYWtlIHN1cmUgdGhlIHNlcnZlcihsb2NhbGhvc3Q6MzAwMClbdGhpcyB3aWxsIHJlY2VpdmUgdGhlIHJlcXVlc3QgZHVyaW5nIGJ1aWxkXSBpcyBydW5uaW5nIG9uIGEgdGVybWluYWwgZHVyaW5nIHRoZSBidWlsZFxyXG4vLz8gYWxzbyBuZWVkIHRvIGNoYW5nZSB0aGUgbG9jYWxob3N0IGR1cmluZyB0aGUgZGVwbG95bWVudCB8IHNlZSB0aGUgdG9kb1xyXG4vLyBodHRwczovL2F1ZGU1My5tZWRpdW0uY29tL3NldC1lbnZpcm9ubWVudC12YXJpYWJsZXMtd2l0aC1uZXh0LWpzLWFuZC12ZXJjZWwtZTU0NGMwNDYwYTQ4XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKFxyXG4vLyAgICBjb250ZXh0OiBHZXRTdGF0aWNQcm9wc0NvbnRleHRcclxuLy8gKSA9PiB7XHJcbi8vICAgIC8vIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG5cclxuLy8gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2VydmljZXMnKVxyXG4vLyAgICBjb25zdCB7IHNlcnZpY2VzIH0gPSBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgIGNvbnNvbGUubG9nKHsgc2VydmljZXMgfSlcclxuLy8gICAgcmV0dXJuIHsgcHJvcHM6IHsgc2VydmljZXM6IHNlcnZpY2VzIH0gfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvbWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvcmlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=