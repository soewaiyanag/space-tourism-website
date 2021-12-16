/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bgLazyLoad.js":
/*!***************************!*\
  !*** ./src/bgLazyLoad.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgLazyLoad\": () => (/* binding */ bgLazyLoad)\n/* harmony export */ });\nfunction bgLazyLoad(element, classNames) {\n  var sm = 640;\n  var md = 768;\n  var lg = 1024;\n\n  var triggerClass = function triggerClass() {\n    if (window.innerWidth < sm && window.innerWidth > 0) {\n      element.classList.add(classNames[0]);\n    } else if (window.innerWidth < md && window.innerWidth > sm) {\n      element.classList.add(classNames[1]);\n    } else if (window.innerWidth < lg && window.innerWidth > md) {\n      element.classList.add(classNames[2]);\n    }\n  };\n\n  window.addEventListener(\"DOMContentLoaded\", function () {\n    triggerClass();\n  });\n  window.addEventListener(\"resize\", function () {\n    triggerClass();\n  });\n}\n\n//# sourceURL=webpack://space-tourism-website/./src/bgLazyLoad.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _shared_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared_script */ \"./src/shared_script.js\");\n/* harmony import */ var _shared_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _bgLazyLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bgLazyLoad */ \"./src/bgLazyLoad.js\");\n\n\n\n\n//# sourceURL=webpack://space-tourism-website/./src/home.js?");

/***/ }),

/***/ "./src/shared_script.js":
/*!******************************!*\
  !*** ./src/shared_script.js ***!
  \******************************/
/***/ (() => {

eval("var hamburger = document.getElementById(\"hamburger\");\nvar navList = document.getElementById(\"nav-list\");\n\nhamburger.onclick = function () {\n  navList.classList.toggle(\"hidden\");\n\n  if (navList.classList.contains(\"hidden\")) {\n    hamburger.src = \"./assets/shared/icon-hamburger.svg\";\n  } else {\n    hamburger.src = \"./assets/shared/icon-close.svg\";\n  }\n};\n\n//# sourceURL=webpack://space-tourism-website/./src/shared_script.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/destination/background-destination-mobile.jpg */ \"./src/assets/destination/background-destination-mobile.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/home/background-home-mobile.jpg */ \"./src/assets/home/background-home-mobile.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! assets/destination/background-destination-tablet.jpg */ \"./src/assets/destination/background-destination-tablet.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! assets/home/background-home-tablet.jpg */ \"./src/assets/home/background-home-tablet.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! assets/destination/background-destination-desktop.jpg */ \"./src/assets/destination/background-destination-desktop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! assets/home/background-home-desktop.jpg */ \"./src/assets/home/background-home-desktop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bellefair&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,500;1,400&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n! tailwindcss v3.0.2 | MIT License | https://tailwindcss.com\\n*/\\r\\n\\r\\n/*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\r\\n\\r\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: currentColor; /* 2 */\\n}\\r\\n\\r\\n::before,\\n::after {\\n  --tw-content: '';\\n}\\r\\n\\r\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n*/\\r\\n\\r\\nhtml {\\n  line-height: 1.5; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -moz-tab-size: 4; /* 3 */\\n  -o-tab-size: 4;\\n     tab-size: 4; /* 3 */\\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; /* 4 */\\n}\\r\\n\\r\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\r\\n\\r\\nbody {\\n  margin: 0; /* 1 */\\n  line-height: inherit; /* 2 */\\n}\\r\\n\\r\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\r\\n\\r\\nhr {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n  border-top-width: 1px; /* 3 */\\n}\\r\\n\\r\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\r\\n\\r\\nabbr[title] {\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted;\\n}\\r\\n\\r\\n/*\\nRemove the default font size and weight for headings.\\n*/\\r\\n\\r\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\r\\n\\r\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\r\\n\\r\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\r\\n\\r\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\r\\n\\r\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\r\\n\\r\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\r\\n\\r\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\r\\n\\r\\n/*\\nAdd the correct font size in all browsers.\\n*/\\r\\n\\r\\nsmall {\\n  font-size: 80%;\\n}\\r\\n\\r\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\r\\n\\r\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\r\\n\\r\\nsub {\\n  bottom: -0.25em;\\n}\\r\\n\\r\\nsup {\\n  top: -0.5em;\\n}\\r\\n\\r\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\r\\n\\r\\ntable {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n  border-collapse: collapse;  /* 3 */\\n}\\r\\n\\r\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\r\\n\\r\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: inherit; /* 1 */\\n  color: inherit; /* 1 */\\n  margin: 0; /* 2 */\\n  padding: 0; /* 3 */\\n}\\r\\n\\r\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\r\\n\\r\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\r\\n\\r\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\r\\n\\r\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button; /* 1 */\\n  background-color: transparent; /* 2 */\\n  background-image: none; /* 2 */\\n}\\r\\n\\r\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\r\\n\\r\\n:-moz-focusring {\\n  outline: auto;\\n}\\r\\n\\r\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\r\\n\\r\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\r\\n\\r\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\r\\n\\r\\nprogress {\\n  vertical-align: baseline;\\n}\\r\\n\\r\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\r\\n\\r\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\r\\n\\r\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\r\\n\\r\\n[type='search'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\r\\n\\r\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\r\\n\\r\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\r\\n\\r\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\r\\n\\r\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\r\\n\\r\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\r\\n\\r\\nsummary {\\n  display: list-item;\\n}\\r\\n\\r\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\r\\n\\r\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\r\\n\\r\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\r\\n\\r\\nlegend {\\n  padding: 0;\\n}\\r\\n\\r\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\r\\n\\r\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\r\\n\\r\\ntextarea {\\n  resize: vertical;\\n}\\r\\n\\r\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\r\\n\\r\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\n  opacity: 1;  /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\r\\n\\r\\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\\n  opacity: 1;  /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\r\\n\\r\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1;  /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\r\\n\\r\\n/*\\nSet the default cursor for buttons.\\n*/\\r\\n\\r\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\r\\n\\r\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\r\\n\\r\\n:disabled {\\n  cursor: default;\\n}\\r\\n\\r\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\r\\n\\r\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\r\\n\\r\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\r\\n\\r\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\r\\n\\r\\n/*\\nEnsure the default browser behavior of the `hidden` attribute.\\n*/\\r\\n\\r\\n[hidden] {\\n  display: none;\\n}\\r\\n\\r\\n*, ::before, ::after{\\n  --tw-border-opacity: 1;\\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\\n  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\\n  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\\n  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\\n  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\\n  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\\n  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\\n  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\\n  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\\n  --tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n}\\r\\n.container{\\n  width: 100%;\\n}\\r\\n@media (min-width: 640px){\\r\\n\\r\\n  .container{\\n    max-width: 640px;\\n  }\\n}\\r\\n@media (min-width: 768px){\\r\\n\\r\\n  .container{\\n    max-width: 768px;\\n  }\\n}\\r\\n@media (min-width: 1024px){\\r\\n\\r\\n  .container{\\n    max-width: 1024px;\\n  }\\n}\\r\\n@media (min-width: 1280px){\\r\\n\\r\\n  .container{\\n    max-width: 1280px;\\n  }\\n}\\r\\n@media (min-width: 1536px){\\r\\n\\r\\n  .container{\\n    max-width: 1536px;\\n  }\\n}\\r\\n.absolute{\\n  position: absolute;\\n}\\r\\n.relative{\\n  position: relative;\\n}\\r\\n.top-0{\\n  top: 0px;\\n}\\r\\n.right-0{\\n  right: 0px;\\n}\\r\\n.z-10{\\n  z-index: 10;\\n}\\r\\n.mx-auto{\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\r\\n.mx-4{\\n  margin-left: 1rem;\\n  margin-right: 1rem;\\n}\\r\\n.ml-5{\\n  margin-left: 1.25rem;\\n}\\r\\n.mr-4{\\n  margin-right: 1rem;\\n}\\r\\n.mr-5{\\n  margin-right: 1.25rem;\\n}\\r\\n.mb-8{\\n  margin-bottom: 2rem;\\n}\\r\\n.mr-2{\\n  margin-right: 0.5rem;\\n}\\r\\n.mt-10{\\n  margin-top: 2.5rem;\\n}\\r\\n.flex{\\n  display: flex;\\n}\\r\\n.grid{\\n  display: grid;\\n}\\r\\n.hidden{\\n  display: none;\\n}\\r\\n.aspect-square{\\n  aspect-ratio: 1 / 1;\\n}\\r\\n.h-20{\\n  height: 5rem;\\n}\\r\\n.h-screen{\\n  height: 100vh;\\n}\\r\\n.h-32{\\n  height: 8rem;\\n}\\r\\n.min-h-screen{\\n  min-height: 100vh;\\n}\\r\\n.w-9{\\n  width: 2.25rem;\\n}\\r\\n.w-7\\\\/12{\\n  width: 58.333333%;\\n}\\r\\n.w-56{\\n  width: 14rem;\\n}\\r\\n.cursor-pointer{\\n  cursor: pointer;\\n}\\r\\n.select-none{\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n}\\r\\n.flex-col{\\n  flex-direction: column;\\n}\\r\\n.place-items-center{\\n  align-items: center;\\n  justify-items: center;\\n  place-items: center;\\n}\\r\\n.items-center{\\n  align-items: center;\\n}\\r\\n.justify-center{\\n  justify-content: center;\\n}\\r\\n.justify-between{\\n  justify-content: space-between;\\n}\\r\\n.gap-6{\\n  gap: 1.5rem;\\n}\\r\\n.gap-8{\\n  gap: 2rem;\\n}\\r\\n.space-y-10 > :not([hidden]) ~ :not([hidden]){\\n  --tw-space-y-reverse: 0;\\n  margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\\n  margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));\\n}\\r\\n.space-y-8 > :not([hidden]) ~ :not([hidden]){\\n  --tw-space-y-reverse: 0;\\n  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\\n  margin-bottom: calc(2rem * var(--tw-space-y-reverse));\\n}\\r\\n.space-y-2 > :not([hidden]) ~ :not([hidden]){\\n  --tw-space-y-reverse: 0;\\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\\n}\\r\\n.space-y-12 > :not([hidden]) ~ :not([hidden]){\\n  --tw-space-y-reverse: 0;\\n  margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));\\n  margin-bottom: calc(3rem * var(--tw-space-y-reverse));\\n}\\r\\n.space-y-5 > :not([hidden]) ~ :not([hidden]){\\n  --tw-space-y-reverse: 0;\\n  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\\n  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\\n}\\r\\n.overflow-x-hidden{\\n  overflow-x: hidden;\\n}\\r\\n.rounded-full{\\n  border-radius: 9999px;\\n}\\r\\n.border-b-2{\\n  border-bottom-width: 2px;\\n}\\r\\n.border-t{\\n  border-top-width: 1px;\\n}\\r\\n.border-white{\\n  --tw-border-opacity: 1;\\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\\n}\\r\\n.border-secondary{\\n  --tw-border-opacity: 1;\\n  border-color: rgb(208 214 249 / var(--tw-border-opacity));\\n}\\r\\n.bg-black{\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\\n}\\r\\n.bg-white{\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\\n}\\r\\n.bg-opacity-10{\\n  --tw-bg-opacity: 0.1;\\n}\\r\\n.bg-destination-mobile{\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\r\\n.bg-home-mobile{\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\r\\n.bg-cover{\\n  background-size: cover;\\n}\\r\\n.bg-center{\\n  background-position: center;\\n}\\r\\n.bg-no-repeat{\\n  background-repeat: no-repeat;\\n}\\r\\n.px-5{\\n  padding-left: 1.25rem;\\n  padding-right: 1.25rem;\\n}\\r\\n.pt-28{\\n  padding-top: 7rem;\\n}\\r\\n.pt-8{\\n  padding-top: 2rem;\\n}\\r\\n.pb-16{\\n  padding-bottom: 4rem;\\n}\\r\\n.text-center{\\n  text-align: center;\\n}\\r\\n.font-barlow{\\n  font-family: Barlow, sans-serif;\\n}\\r\\n.font-bellefair{\\n  font-family: Bellefair, serif;\\n}\\r\\n.text-7xl{\\n  font-size: 4.5rem;\\n  line-height: 1;\\n}\\r\\n.text-sm{\\n  font-size: 0.875rem;\\n  line-height: 1.25rem;\\n}\\r\\n.text-3xl{\\n  font-size: 1.875rem;\\n  line-height: 2.25rem;\\n}\\r\\n.font-medium{\\n  font-weight: 500;\\n}\\r\\n.font-bold{\\n  font-weight: 700;\\n}\\r\\n.uppercase{\\n  text-transform: uppercase;\\n}\\r\\n.tracking-widest{\\n  letter-spacing: 0.1em;\\n}\\r\\n.tracking-wider{\\n  letter-spacing: 0.05em;\\n}\\r\\n.text-white{\\n  --tw-text-opacity: 1;\\n  color: rgb(255 255 255 / var(--tw-text-opacity));\\n}\\r\\n.text-gray-500{\\n  --tw-text-opacity: 1;\\n  color: rgb(107 114 128 / var(--tw-text-opacity));\\n}\\r\\n.text-secondary{\\n  --tw-text-opacity: 1;\\n  color: rgb(208 214 249 / var(--tw-text-opacity));\\n}\\r\\n.text-primary{\\n  --tw-text-opacity: 1;\\n  color: rgb(11 13 23 / var(--tw-text-opacity));\\n}\\r\\n.backdrop-blur-xl{\\n  --tw-backdrop-blur: blur(24px);\\n  -webkit-backdrop-filter: var(--tw-backdrop-filter);\\n          backdrop-filter: var(--tw-backdrop-filter);\\n}\\r\\n.transition-shadow{\\n  transition-property: box-shadow;\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  transition-duration: 150ms;\\n}\\r\\n.hover\\\\:shadow-xl-white:hover{\\n  --tw-shadow: 0px 0px 0px 34px rgba(255,255,255,0.21);\\n  --tw-shadow-colored: 0px 0px 0px 34px var(--tw-shadow-color);\\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\\n}\\r\\n@media (min-width: 640px){\\r\\n\\r\\n  .sm\\\\:bottom-0{\\n    bottom: 0px;\\n  }\\r\\n\\r\\n  .sm\\\\:flex{\\n    display: flex;\\n  }\\r\\n\\r\\n  .sm\\\\:hidden{\\n    display: none;\\n  }\\r\\n\\r\\n  .sm\\\\:h-auto{\\n    height: auto;\\n  }\\r\\n\\r\\n  .sm\\\\:h-full{\\n    height: 100%;\\n  }\\r\\n\\r\\n  .sm\\\\:h-40{\\n    height: 10rem;\\n  }\\r\\n\\r\\n  .sm\\\\:w-12{\\n    width: 3rem;\\n  }\\r\\n\\r\\n  .sm\\\\:flex-row{\\n    flex-direction: row;\\n  }\\r\\n\\r\\n  .sm\\\\:justify-center{\\n    justify-content: center;\\n  }\\r\\n\\r\\n  .sm\\\\:border-b-2{\\n    border-bottom-width: 2px;\\n  }\\r\\n\\r\\n  .sm\\\\:border-white{\\n    --tw-border-opacity: 1;\\n    border-color: rgb(255 255 255 / var(--tw-border-opacity));\\n  }\\r\\n\\r\\n  .sm\\\\:bg-destination-tablet{\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  }\\r\\n\\r\\n  .sm\\\\:bg-home-tablet{\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  }\\r\\n\\r\\n  .sm\\\\:pt-7{\\n    padding-top: 1.75rem;\\n  }\\r\\n\\r\\n  .sm\\\\:text-sm{\\n    font-size: 0.875rem;\\n    line-height: 1.25rem;\\n  }\\r\\n\\r\\n  .sm\\\\:font-normal{\\n    font-weight: 400;\\n  }\\n}\\r\\n@media (min-width: 768px){\\r\\n\\r\\n  .md\\\\:mr-1{\\n    margin-right: 0.25rem;\\n  }\\r\\n\\r\\n  .md\\\\:grid{\\n    display: grid;\\n  }\\r\\n\\r\\n  .md\\\\:h-48{\\n    height: 12rem;\\n  }\\r\\n\\r\\n  .md\\\\:grid-cols-2{\\n    grid-template-columns: repeat(2, minmax(0, 1fr));\\n  }\\r\\n\\r\\n  .md\\\\:items-end{\\n    align-items: flex-end;\\n  }\\r\\n\\r\\n  .md\\\\:justify-end{\\n    justify-content: flex-end;\\n  }\\r\\n\\r\\n  .md\\\\:space-y-40 > :not([hidden]) ~ :not([hidden]){\\n    --tw-space-y-reverse: 0;\\n    margin-top: calc(10rem * calc(1 - var(--tw-space-y-reverse)));\\n    margin-bottom: calc(10rem * var(--tw-space-y-reverse));\\n  }\\r\\n\\r\\n  .md\\\\:bg-destination-desktop{\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  }\\r\\n\\r\\n  .md\\\\:bg-home-desktop{\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  }\\r\\n\\r\\n  .md\\\\:text-left{\\n    text-align: left;\\n  }\\n}\\r\\n@media (min-width: 1024px){\\r\\n\\r\\n  .lg\\\\:inline{\\n    display: inline;\\n  }\\r\\n\\r\\n  .lg\\\\:gap-10{\\n    gap: 2.5rem;\\n  }\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://space-tourism-website/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://space-tourism-website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://space-tourism-website/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://space-tourism-website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://space-tourism-website/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://space-tourism-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://space-tourism-website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://space-tourism-website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://space-tourism-website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://space-tourism-website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://space-tourism-website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/destination/background-destination-desktop.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/destination/background-destination-desktop.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"468b922c69bf5499b4bc.jpg\";\n\n//# sourceURL=webpack://space-tourism-website/./src/assets/destination/background-destination-desktop.jpg?");

/***/ }),

/***/ "./src/assets/destination/background-destination-mobile.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/destination/background-destination-mobile.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e0131e27e751ead1a922.jpg\";\n\n//# sourceURL=webpack://space-tourism-website/./src/assets/destination/background-destination-mobile.jpg?");

/***/ }),

/***/ "./src/assets/destination/background-destination-tablet.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/destination/background-destination-tablet.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8f55d346d8b6cfd95ab7.jpg\";\n\n//# sourceURL=webpack://space-tourism-website/./src/assets/destination/background-destination-tablet.jpg?");

/***/ }),

/***/ "./src/assets/home/background-home-desktop.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/home/background-home-desktop.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cdf3864ecbfdf20e8c3b.jpg\";\n\n//# sourceURL=webpack://space-tourism-website/./src/assets/home/background-home-desktop.jpg?");

/***/ }),

/***/ "./src/assets/home/background-home-mobile.jpg":
/*!****************************************************!*\
  !*** ./src/assets/home/background-home-mobile.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"13f7adecbcb3c3f170d8.jpg\";\n\n//# sourceURL=webpack://space-tourism-website/./src/assets/home/background-home-mobile.jpg?");

/***/ }),

/***/ "./src/assets/home/background-home-tablet.jpg":
/*!****************************************************!*\
  !*** ./src/assets/home/background-home-tablet.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bc9efcc3281fa6801077.jpg\";\n\n//# sourceURL=webpack://space-tourism-website/./src/assets/home/background-home-tablet.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"home": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;