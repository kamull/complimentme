/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("const cancelBtn = document.querySelector('.cancel');\n\ncancelBtn.onclick = function () {\n    var theImages = [{\n        src: \"http://images.zwani.com/graphics/compliments/images/018.gif\",\n        width: \"500\",\n        height: \"343\"\n    }, {\n        src: \"http://images.zwani.com/graphics/compliments/images/1.gif\",\n        width: \"500\",\n        height: \"343\"\n    }, {\n        src: \"http://images.zwani.com/graphics/compliments/images/106.gif\",\n        width: \"500\",\n        height: \"343\"\n    }, {\n        src: \"http://images.zwani.com/graphics/compliments/images/2.gif\",\n        width: \"500\",\n        height: \"343\"\n\n    }, {\n        src: \"http://images.zwani.com/graphics/compliments/images/8.gif\",\n        width: \"500\",\n        height: \"343\"\n\n    }, {\n        src: \"http://images.zwani.com/graphics/compliments/images/9.gif\",\n        width: \"500\",\n        height: \"343\"\n    }, {\n        src: \"http://images.zwani.com/graphics/compliments/images/asuperstar.gif\",\n        width: \"500\",\n        height: \"343\"\n    }, {\n        src: \"http://images.zwani.com/graphics/compliments/images/bagchips.gif\",\n        width: \"500\",\n        height: \"343\"\n    }, {\n        src: \"http://images.zwani.com/graphics/compliments/images/bearycool.gif\",\n        width: \"500\",\n        height: \"343\"\n    }];\n\n    var thePics = [];\n    for (var i = 0, j = theImages.length; i < j; i++) {\n        thePics[i] = new Image();\n        thePics[i].src = theImages[i].src;\n        thePics[i].width = theImages[i].width;\n        thePics[i].height = theImages[i].height;\n    }\n\n    // create random image number\n    function getRandomInt(min, max) {\n        //  return Math.floor(Math.random() * (max - min + 1)) + min;\n\n        var iMin = Math.floor(Math.random() * (max - min + 1)) + min;\n        return thePics[iMin];\n    }\n\n    // 0 is first image,   thePics.length - 1) is  last image\n\n    var newImage = getRandomInt(0, thePics.length - 1);\n\n    // remove the previous images\n    var images = document.getElementsByTagName('img');\n    var l = images.length;\n    for (var p = 0; p < l; p++) {\n        images[0].parentNode.removeChild(images[0]);\n    }\n    // display the image  \n    document.querySelector('.image').prepend(newImage);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XG5cbmNhbmNlbEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkgXG57XG4gICAgIHZhciB0aGVJbWFnZXMgPSBbe1xuICAgICAgICBzcmM6XCJodHRwOi8vaW1hZ2VzLnp3YW5pLmNvbS9ncmFwaGljcy9jb21wbGltZW50cy9pbWFnZXMvMDE4LmdpZlwiLFxuICAgICAgICB3aWR0aDogXCI1MDBcIixcbiAgICAgICAgaGVpZ2h0OiBcIjM0M1wiXG4gICAgfSwge1xuICAgICAgICBzcmM6IFwiaHR0cDovL2ltYWdlcy56d2FuaS5jb20vZ3JhcGhpY3MvY29tcGxpbWVudHMvaW1hZ2VzLzEuZ2lmXCIsXG4gICAgICAgIHdpZHRoOiBcIjUwMFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzQzXCJcbiAgICB9LCB7XG4gICAgICAgIHNyYzogXCJodHRwOi8vaW1hZ2VzLnp3YW5pLmNvbS9ncmFwaGljcy9jb21wbGltZW50cy9pbWFnZXMvMTA2LmdpZlwiLFxuICAgICAgICB3aWR0aDogXCI1MDBcIixcbiAgICAgICAgaGVpZ2h0OiBcIjM0M1wiXG4gICAgfSwge1xuICAgICAgICBzcmM6IFwiaHR0cDovL2ltYWdlcy56d2FuaS5jb20vZ3JhcGhpY3MvY29tcGxpbWVudHMvaW1hZ2VzLzIuZ2lmXCIsXG4gICAgICAgIHdpZHRoOiBcIjUwMFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzQzXCJcbiAgICAgICAgXG4gICAgfSwge1xuICAgICAgICBzcmM6IFwiaHR0cDovL2ltYWdlcy56d2FuaS5jb20vZ3JhcGhpY3MvY29tcGxpbWVudHMvaW1hZ2VzLzguZ2lmXCIsXG4gICAgICAgIHdpZHRoOiBcIjUwMFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzQzXCJcbiAgICAgICAgXG4gICAgfSwge1xuICAgICAgICBzcmM6IFwiaHR0cDovL2ltYWdlcy56d2FuaS5jb20vZ3JhcGhpY3MvY29tcGxpbWVudHMvaW1hZ2VzLzkuZ2lmXCIsXG4gICAgICAgIHdpZHRoOiBcIjUwMFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzQzXCJcbiAgICB9LCB7XG4gICAgICAgIHNyYzogXCJodHRwOi8vaW1hZ2VzLnp3YW5pLmNvbS9ncmFwaGljcy9jb21wbGltZW50cy9pbWFnZXMvYXN1cGVyc3Rhci5naWZcIixcbiAgICAgICAgd2lkdGg6IFwiNTAwXCIsXG4gICAgICAgIGhlaWdodDogXCIzNDNcIlxuICAgIH0sIHtcbiAgICAgICAgc3JjOiBcImh0dHA6Ly9pbWFnZXMuendhbmkuY29tL2dyYXBoaWNzL2NvbXBsaW1lbnRzL2ltYWdlcy9iYWdjaGlwcy5naWZcIixcbiAgICAgICAgd2lkdGg6IFwiNTAwXCIsXG4gICAgICAgIGhlaWdodDogXCIzNDNcIlxuICAgIH0sIHtcbiAgICAgICAgc3JjOiBcImh0dHA6Ly9pbWFnZXMuendhbmkuY29tL2dyYXBoaWNzL2NvbXBsaW1lbnRzL2ltYWdlcy9iZWFyeWNvb2wuZ2lmXCIsXG4gICAgICAgIHdpZHRoOiBcIjUwMFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzQzXCJcbiAgICB9XTtcbiAgICBcbiAgICB2YXIgdGhlUGljcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhlSW1hZ2VzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICB0aGVQaWNzW2ldID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoZVBpY3NbaV0uc3JjID0gdGhlSW1hZ2VzW2ldLnNyYztcbiAgICAgICAgdGhlUGljc1tpXS53aWR0aCA9IHRoZUltYWdlc1tpXS53aWR0aDtcbiAgICAgICAgdGhlUGljc1tpXS5oZWlnaHQgPSB0aGVJbWFnZXNbaV0uaGVpZ2h0O1xuICAgIH1cbiAgIFxuLy8gY3JlYXRlIHJhbmRvbSBpbWFnZSBudW1iZXJcbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbixtYXgpIFxuICAgIHtcbiAgICAgIC8vICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICBcbnZhciBpTWluID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICByZXR1cm4gdGhlUGljc1tpTWluXTtcbiAgICB9ICBcblxuLy8gMCBpcyBmaXJzdCBpbWFnZSwgICB0aGVQaWNzLmxlbmd0aCAtIDEpIGlzICBsYXN0IGltYWdlXG4gIFxudmFyIG5ld0ltYWdlID0gZ2V0UmFuZG9tSW50KDAsIHRoZVBpY3MubGVuZ3RoIC0gMSk7XG4gXG4vLyByZW1vdmUgdGhlIHByZXZpb3VzIGltYWdlc1xudmFyIGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcbnZhciBsID0gaW1hZ2VzLmxlbmd0aDtcbmZvciAodmFyIHAgPSAwOyBwIDwgbDsgcCsrKSB7XG4gICAgaW1hZ2VzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW1hZ2VzWzBdKTtcbn1cbi8vIGRpc3BsYXkgdGhlIGltYWdlICBcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZScpLnByZXBlbmQobmV3SW1hZ2UpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);