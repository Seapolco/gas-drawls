/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/domElements.js":
/*!************************************!*\
  !*** ./src/helpers/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dom = function documentQuerySelectors() {
  var hamIcon = function hamIcon() {
    return document.querySelector('.hamIcon');
  };
  var sidebarContainer = function sidebarContainer() {
    return document.querySelector('.sidebarContainer');
  };
  var closeIconContainer = function closeIconContainer() {
    return document.querySelector('.closeIconContainer');
  };

  // return {
  //     'hamIcon' : hamIcon, 
  //     'sidebarContainer' : sidebarContainer,
  //     'closeIconContainer' : closeIconContainer
  // }

  return {
    hamIcon: hamIcon,
    sidebarContainer: sidebarContainer,
    closeIconContainer: closeIconContainer
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

/***/ }),

/***/ "./src/helpers/elementFactory.js":
/*!***************************************!*\
  !*** ./src/helpers/elementFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var elFac = function elementFactory(type, attributes) {
  var el = document.createElement(type);
  if (attributes) {
    for (var key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
  }
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  if (children) {
    children.forEach(function (e) {
      if (typeof e === 'string') {
        el.appendChild(document.createTextNode(e));
      } else {
        el.appendChild(e);
      }
    });
  }
  return el;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elFac);

/***/ }),

/***/ "./src/helpers/eventListeners.js":
/*!***************************************!*\
  !*** ./src/helpers/eventListeners.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/helpers/domElements.js");

var domElements = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__["default"])();
var eventListeners = function allEventListeners() {
  var hamIcon = domElements.hamIcon();
  var sidebarContainer = domElements.sidebarContainer();
  var closeIcon = domElements.closeIconContainer();
  sidebarContainer.style.visibility;
  var hamLis = function hamLis() {
    return hamIcon.addEventListener('click', function (e) {
      // console.log(visibility)
      // if (sidebarContainer.style.visibility === 'hidden') {
      //     console.log('hamooooo')
      //     sidebarContainer.style.visibility = 'visible';
      // } else if (sidebarContainer.style.visibility === 'visibile') {
      //     sidebarContainer.style.visibility = 'hidden';
      //     console.log('hamwwwwwwwwwwwwwwwww')
      // }
      // console.log('ham')

      if (sidebarContainer.style.translate === '-100%') {
        sidebarContainer.style.translate = '0%';
      } else {
        sidebarContainer.style.translate = '-100%';
      }
    });
  };
  var closeLis = function closeLis() {
    return closeIcon.addEventListener('click', function (e) {
      sidebarContainer.style.translate = '-100%';
    });
  };
  return {
    hamLis: hamLis,
    closeLis: closeLis
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListeners);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementFactory */ "./src/helpers/elementFactory.js");

var homePage = function theHomePage() {
  var rootContainer = document.querySelector('body');
  var hOne = (0,_helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', {}, 'GAS DRAWLS');
  rootContainer.appendChild(hOne);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    box-sizing: border-box;\r\n    font-family: 'Barlow','Roboto Condensed', sans-serif;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n\r\n.rootContainer {\r\n    position: relative;\r\n    display:grid;\r\n}\r\n\r\n/* ----------------------------------------TOP NAV ------------------------------------------- */\r\n\r\n.topNavBar {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    height: 81px;\r\n    padding: 0 5px 0 5px;\r\n    border-bottom: solid 1px rgba(220, 221, 221, 0.247);\r\n}\r\n\r\n.hamIcon {\r\n    /* border: solid 2px black; */\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    height: 25px;\r\n    width: 25px;\r\n    gap:5px;\r\n    padding-top: 3px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.topline, .midline, .botline {\r\n    background-color: slategrey;\r\n    /* align-self: center; */\r\n    height: 2px;\r\n    border-radius: 2px;\r\n    width: 100%;\r\n}\r\n.topline{\r\n    align-self: end;\r\n}\r\n\r\n\r\n.midline {\r\n    align-self: center;\r\n    width: 85%;\r\n}\r\n.botline {\r\n    align-self: start;\r\n}\r\n.tnStart {\r\n    display: grid;\r\n    place-items: center;\r\n    grid-column: 1/2;\r\n    padding-right: 35px;\r\n}\r\n\r\n\r\n\r\n.tnMiddle {\r\n    display: grid;\r\n    place-items:center;\r\n    grid-column: 2/3;\r\n}\r\n\r\n.doomLogo {\r\n    aspect-ratio: 1/1;\r\n    height: 61px;\r\n}\r\n\r\n.tnEnd {\r\n    display: grid;\r\n    place-items: center;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column: 3/4;\r\n}\r\n\r\n.sIconContainer, .bIconContainer {\r\n    position:relative;\r\n    /* border:solid black 2px; */\r\n    display: grid;\r\n    place-items:center;\r\n    width: 45px;\r\n    height: 45px;\r\n}\r\n\r\n/* ----------------------------------------TOP ICONS ---------------------*/\r\n\r\n.searchIcon, .basketIcon {\r\n    display: grid;\r\n    align-items:center;\r\n    position:relative;\r\n    /* border: solid black 2px; */\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.sLens {\r\n    position:relative;\r\n    z-index: 2;\r\n    width: 19px;\r\n    height: 19px;\r\n    border-radius: 9.5px;\r\n    border: solid black 1px;\r\n    background-color: white;\r\n    left: 2px;\r\n}\r\n\r\n.sHandle {\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 10px;\r\n    height: 1px;\r\n    background-color: black;\r\n    rotate: 45deg;\r\n    left: 16px;\r\n    bottom: 4px;\r\n}\r\n\r\n.basketIcon {\r\n    display:grid;\r\n    place-items:center;\r\n    position:relative;\r\n}\r\n\r\n.outerbag {\r\n    display:grid;\r\n    place-items:center;\r\n    position:relative;\r\n    padding-top:2px;\r\n    border-bottom: 21px solid black;\r\n    border-left: 2px solid transparent;\r\n    border-right:2px solid transparent;\r\n    height: 0;\r\n    width: 21px;\r\n}\r\n\r\n.innerbag {\r\n    display:grid;\r\n    place-items:center;\r\n    position:relative;\r\n    z-index:3;\r\n    border-bottom: 19px solid white;\r\n    border-left: 1px solid transparent;\r\n    border-right:1px solid transparent;\r\n    height: 0;\r\n    width: 19px;\r\n    top: 1px;\r\n    left: -1px;\r\n}\r\n\r\n.handle {\r\n    position: absolute;\r\n    z-index: 4;\r\n    height: 70%;\r\n    width: 30%;\r\n    border:solid black 1px;\r\n    top:1px;\r\n    left: 11px;\r\n    border-radius: 40%;\r\n}\r\n\r\n.handlecutter {\r\n    position:absolute;\r\n    z-index:5;\r\n    width: 40%;\r\n    height: 40%;\r\n    background-color: white ;\r\n    top: 10px;\r\n}\r\n\r\n/*---------------------------------------- SIDE NAV ------------------------------*/\r\n\r\n\r\n.sidebarContainer {\r\n    /* visibility: hidden; */\r\n    position:absolute;\r\n    z-index: 2;\r\n    background-color: #ededed;\r\n    width: 75%;\r\n    height: 100%;\r\n    translate: -100%;\r\n    transition: all cubic-bezier(.165,.84,.44,1) 0.25s;\r\n    /* border: solid black 1px; */\r\n}\r\n\r\n/* cubic-bezier(.165,.84,.44,1) */\r\n\r\n/* .sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n} */\r\n\r\n.sidebarNav {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    \r\n}\r\n\r\n.sidebarNavItem {\r\n    font-weight: bolder;\r\n    border-bottom: 1px solid #504121cb;\r\n    padding: 15px;\r\n}\r\n\r\n.sidebarHeaderContainer {\r\n    padding: 12px 15px 0px 15px;\r\n    \r\n}\r\n.sidebarHeader {\r\n    display: flex;\r\n    justify-content: end;\r\n    border-bottom: 1px solid #504121cb;\r\n}\r\n\r\n.sideBar {\r\n    position:relative;\r\n    z-index: -3;\r\n}\r\n\r\n.sideBarTransition {\r\n    width: 100%;\r\n    height: 100%;\r\n    position:relative;\r\n    border: solid red 2px;\r\n    background-color: red;\r\n    z-index:7;\r\n\r\n}\r\n\r\n\r\n/* ----------------------------------------SIDE ICONS -----------------------------------*/\r\n\r\n.closeIconContainer {\r\n    display: grid;\r\n    place-items: center;\r\n    /* border: solid black 1px; */\r\n    height: 58px;\r\n    width: 46px;\r\n}\r\n.closeIcon {\r\n    display:grid;\r\n    place-items: center;\r\n    position: relative;\r\n    height: 28px;\r\n    width: 28px;\r\n    /* border: solid black 1px; */\r\n    padding: 2px 2px 3px 2px;\r\n}\r\n\r\n.closeLineOne, .closeLineTwo {\r\n    position: relative;\r\n    width: 70%;\r\n    height: 1px;\r\n    background-color: black;\r\n\r\n}\r\n\r\n.closeLineOne {\r\n    rotate: 45deg;\r\n    top: 7px;\r\n    right: -1px;\r\n}\r\n\r\n.closeLineTwo {\r\n    rotate: -45deg;\r\n    top: -4.5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*-------------------------------------- MAIN CONTENT -----------------------------*/\r\n\r\n.mainContent {\r\n\r\n    padding: 0 17px 0 17px;\r\n    z-index: 1;\r\n}\r\n\r\n.card {\r\n    display:grid;\r\n    place-items: center;\r\n    width: auto;\r\n    height: auto;\r\n}\r\n\r\n.mainTitle {\r\n    font-size: 28px;\r\n    font-weight: 900;\r\n    text-align: center;\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n    letter-spacing:2px;\r\n}\r\n.collectionSection {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\r\n    gap: 17px\r\n}\r\n\r\n.albumcover {\r\n    aspect-ratio: 1/1;\r\n    height: 171px;\r\n    width: 171px; \r\n    object-fit: contain;\r\n}\r\n\r\n/* .productMeta {\r\n\r\n} */\r\n\r\n.albumTitle {\r\n    font-weight: 800;\r\n    letter-spacing: 2px;\r\n    font-size: 13px;\r\n    text-align: center;\r\n}\r\n\r\n.albumPrice {\r\n    font-size: 15px;\r\n    font-weight: light;\r\n    text-align:center;\r\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,oDAAoD;AACxD;;AAEA;IACI,SAAS;AACb;;;AAGA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA,gGAAgG;;AAEhG;IACI,aAAa;IACb,kCAAkC;IAClC,YAAY;IACZ,oBAAoB;IACpB,mDAAmD;AACvD;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,+BAA+B;IAC/B,YAAY;IACZ,WAAW;IACX,OAAO;IACP,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,wBAAwB;IACxB,WAAW;IACX,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,eAAe;AACnB;;;AAGA;IACI,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;AACvB;;;;AAIA;IACI,aAAa;IACb,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA,2EAA2E;;AAE3E;IACI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;IAC7B,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,uBAAuB;IACvB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,UAAU;IACV,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,+BAA+B;IAC/B,kCAAkC;IAClC,kCAAkC;IAClC,SAAS;IACT,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;IACT,+BAA+B;IAC/B,kCAAkC;IAClC,kCAAkC;IAClC,SAAS;IACT,WAAW;IACX,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,UAAU;IACV,sBAAsB;IACtB,OAAO;IACP,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,SAAS;IACT,UAAU;IACV,WAAW;IACX,wBAAwB;IACxB,SAAS;AACb;;AAEA,mFAAmF;;;AAGnF;IACI,wBAAwB;IACxB,iBAAiB;IACjB,UAAU;IACV,yBAAyB;IACzB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,kDAAkD;IAClD,6BAA6B;AACjC;;AAEA,iCAAiC;;AAEjC;;;;GAIG;;AAEH;IACI,gBAAgB;IAChB,UAAU;IACV,SAAS;IACT,eAAe;IACf,mBAAmB;;AAEvB;;AAEA;IACI,mBAAmB;IACnB,kCAAkC;IAClC,aAAa;AACjB;;AAEA;IACI,2BAA2B;;AAE/B;AACA;IACI,aAAa;IACb,oBAAoB;IACpB,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IACrB,SAAS;;AAEb;;;AAGA,0FAA0F;;AAE1F;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,YAAY;IACZ,WAAW;AACf;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,6BAA6B;IAC7B,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,uBAAuB;;AAE3B;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;;;;;;;;;;;;;;;;;;;;;AAsBA,oFAAoF;;AAEpF;;IAEI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,4DAA4D;IAC5D;AACJ;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;;GAEG;;AAEH;IACI,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    font-family: 'Barlow','Roboto Condensed', sans-serif;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n\r\n.rootContainer {\r\n    position: relative;\r\n    display:grid;\r\n}\r\n\r\n/* ----------------------------------------TOP NAV ------------------------------------------- */\r\n\r\n.topNavBar {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    height: 81px;\r\n    padding: 0 5px 0 5px;\r\n    border-bottom: solid 1px rgba(220, 221, 221, 0.247);\r\n}\r\n\r\n.hamIcon {\r\n    /* border: solid 2px black; */\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    height: 25px;\r\n    width: 25px;\r\n    gap:5px;\r\n    padding-top: 3px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.topline, .midline, .botline {\r\n    background-color: slategrey;\r\n    /* align-self: center; */\r\n    height: 2px;\r\n    border-radius: 2px;\r\n    width: 100%;\r\n}\r\n.topline{\r\n    align-self: end;\r\n}\r\n\r\n\r\n.midline {\r\n    align-self: center;\r\n    width: 85%;\r\n}\r\n.botline {\r\n    align-self: start;\r\n}\r\n.tnStart {\r\n    display: grid;\r\n    place-items: center;\r\n    grid-column: 1/2;\r\n    padding-right: 35px;\r\n}\r\n\r\n\r\n\r\n.tnMiddle {\r\n    display: grid;\r\n    place-items:center;\r\n    grid-column: 2/3;\r\n}\r\n\r\n.doomLogo {\r\n    aspect-ratio: 1/1;\r\n    height: 61px;\r\n}\r\n\r\n.tnEnd {\r\n    display: grid;\r\n    place-items: center;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column: 3/4;\r\n}\r\n\r\n.sIconContainer, .bIconContainer {\r\n    position:relative;\r\n    /* border:solid black 2px; */\r\n    display: grid;\r\n    place-items:center;\r\n    width: 45px;\r\n    height: 45px;\r\n}\r\n\r\n/* ----------------------------------------TOP ICONS ---------------------*/\r\n\r\n.searchIcon, .basketIcon {\r\n    display: grid;\r\n    align-items:center;\r\n    position:relative;\r\n    /* border: solid black 2px; */\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.sLens {\r\n    position:relative;\r\n    z-index: 2;\r\n    width: 19px;\r\n    height: 19px;\r\n    border-radius: 9.5px;\r\n    border: solid black 1px;\r\n    background-color: white;\r\n    left: 2px;\r\n}\r\n\r\n.sHandle {\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 10px;\r\n    height: 1px;\r\n    background-color: black;\r\n    rotate: 45deg;\r\n    left: 16px;\r\n    bottom: 4px;\r\n}\r\n\r\n.basketIcon {\r\n    display:grid;\r\n    place-items:center;\r\n    position:relative;\r\n}\r\n\r\n.outerbag {\r\n    display:grid;\r\n    place-items:center;\r\n    position:relative;\r\n    padding-top:2px;\r\n    border-bottom: 21px solid black;\r\n    border-left: 2px solid transparent;\r\n    border-right:2px solid transparent;\r\n    height: 0;\r\n    width: 21px;\r\n}\r\n\r\n.innerbag {\r\n    display:grid;\r\n    place-items:center;\r\n    position:relative;\r\n    z-index:3;\r\n    border-bottom: 19px solid white;\r\n    border-left: 1px solid transparent;\r\n    border-right:1px solid transparent;\r\n    height: 0;\r\n    width: 19px;\r\n    top: 1px;\r\n    left: -1px;\r\n}\r\n\r\n.handle {\r\n    position: absolute;\r\n    z-index: 4;\r\n    height: 70%;\r\n    width: 30%;\r\n    border:solid black 1px;\r\n    top:1px;\r\n    left: 11px;\r\n    border-radius: 40%;\r\n}\r\n\r\n.handlecutter {\r\n    position:absolute;\r\n    z-index:5;\r\n    width: 40%;\r\n    height: 40%;\r\n    background-color: white ;\r\n    top: 10px;\r\n}\r\n\r\n/*---------------------------------------- SIDE NAV ------------------------------*/\r\n\r\n\r\n.sidebarContainer {\r\n    /* visibility: hidden; */\r\n    position:absolute;\r\n    z-index: 2;\r\n    background-color: #ededed;\r\n    width: 75%;\r\n    height: 100%;\r\n    translate: -100%;\r\n    transition: all cubic-bezier(.165,.84,.44,1) 0.25s;\r\n    /* border: solid black 1px; */\r\n}\r\n\r\n/* cubic-bezier(.165,.84,.44,1) */\r\n\r\n/* .sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n} */\r\n\r\n.sidebarNav {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    \r\n}\r\n\r\n.sidebarNavItem {\r\n    font-weight: bolder;\r\n    border-bottom: 1px solid #504121cb;\r\n    padding: 15px;\r\n}\r\n\r\n.sidebarHeaderContainer {\r\n    padding: 12px 15px 0px 15px;\r\n    \r\n}\r\n.sidebarHeader {\r\n    display: flex;\r\n    justify-content: end;\r\n    border-bottom: 1px solid #504121cb;\r\n}\r\n\r\n.sideBar {\r\n    position:relative;\r\n    z-index: -3;\r\n}\r\n\r\n.sideBarTransition {\r\n    width: 100%;\r\n    height: 100%;\r\n    position:relative;\r\n    border: solid red 2px;\r\n    background-color: red;\r\n    z-index:7;\r\n\r\n}\r\n\r\n\r\n/* ----------------------------------------SIDE ICONS -----------------------------------*/\r\n\r\n.closeIconContainer {\r\n    display: grid;\r\n    place-items: center;\r\n    /* border: solid black 1px; */\r\n    height: 58px;\r\n    width: 46px;\r\n}\r\n.closeIcon {\r\n    display:grid;\r\n    place-items: center;\r\n    position: relative;\r\n    height: 28px;\r\n    width: 28px;\r\n    /* border: solid black 1px; */\r\n    padding: 2px 2px 3px 2px;\r\n}\r\n\r\n.closeLineOne, .closeLineTwo {\r\n    position: relative;\r\n    width: 70%;\r\n    height: 1px;\r\n    background-color: black;\r\n\r\n}\r\n\r\n.closeLineOne {\r\n    rotate: 45deg;\r\n    top: 7px;\r\n    right: -1px;\r\n}\r\n\r\n.closeLineTwo {\r\n    rotate: -45deg;\r\n    top: -4.5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*-------------------------------------- MAIN CONTENT -----------------------------*/\r\n\r\n.mainContent {\r\n\r\n    padding: 0 17px 0 17px;\r\n    z-index: 1;\r\n}\r\n\r\n.card {\r\n    display:grid;\r\n    place-items: center;\r\n    width: auto;\r\n    height: auto;\r\n}\r\n\r\n.mainTitle {\r\n    font-size: 28px;\r\n    font-weight: 900;\r\n    text-align: center;\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n    letter-spacing:2px;\r\n}\r\n.collectionSection {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\r\n    gap: 17px\r\n}\r\n\r\n.albumcover {\r\n    aspect-ratio: 1/1;\r\n    height: 171px;\r\n    width: 171px; \r\n    object-fit: contain;\r\n}\r\n\r\n/* .productMeta {\r\n\r\n} */\r\n\r\n.albumTitle {\r\n    font-weight: 800;\r\n    letter-spacing: 2px;\r\n    font-size: 13px;\r\n    text-align: center;\r\n}\r\n\r\n.albumPrice {\r\n    font-size: 15px;\r\n    font-weight: light;\r\n    text-align:center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _helpers_eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/eventListeners */ "./src/helpers/eventListeners.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");


// import dom from './helpers/domElements';

var eventLis = (0,_helpers_eventListeners__WEBPACK_IMPORTED_MODULE_1__["default"])();
console.log('hi');

var hamListener = eventLis.hamLis();
var closeListener = eventLis.closeLis();
console.log(hamListener);

// hamListener();
// closeListener();

//homePage();

// const domElements = dom();

// console.log(sidebarContainer)

// const domElements = dom();

// let hamIcon = domElements.hamIcon();

// console.log(hamIcon)

// const hamLis = function hamIconListener(args) {

//     hamIcon.addEventListener('click', (e) => {
//         console.log('hamm');
//     })

// }

// hamLis(elements);
})();

/******/ })()
;
//# sourceMappingURL=todoBundle0a95fb0c04de49416a11.js.map