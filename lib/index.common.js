module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@sc/vue-ui-h5/lib/components/LoadingPanel.js");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@sc/vue-ui-h5/lib/components/FailPanel.js");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@sc/vue-ui-h5/lib/components/Loading.js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@sc/vue-ui-h5/lib/components/Alert.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@sc/vue-ui-h5/lib/components/Transition.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@sc/vue-ui-h5/lib/components/CollapseTransition.js");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@sc/vue-ui-h5/lib/components/Avator.js");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@sc/vue-ui-h5/lib/components/Number.js");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@sc/vue-ui-h5/lib/components/CallAppBanner.js");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("normalize-wheel");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@sc/vue-ui-h5/lib/components/LoadingPanel.js"
var LoadingPanel_js_ = __webpack_require__(1);
var LoadingPanel_js_default = /*#__PURE__*/__webpack_require__.n(LoadingPanel_js_);

// EXTERNAL MODULE: external "@sc/vue-ui-h5/lib/components/FailPanel.js"
var FailPanel_js_ = __webpack_require__(2);
var FailPanel_js_default = /*#__PURE__*/__webpack_require__.n(FailPanel_js_);

// EXTERNAL MODULE: external "@sc/vue-ui-h5/lib/components/Loading.js"
var Loading_js_ = __webpack_require__(3);
var Loading_js_default = /*#__PURE__*/__webpack_require__.n(Loading_js_);

// EXTERNAL MODULE: external "@sc/vue-ui-h5/lib/components/Alert.js"
var Alert_js_ = __webpack_require__(4);
var Alert_js_default = /*#__PURE__*/__webpack_require__.n(Alert_js_);

// EXTERNAL MODULE: external "@sc/vue-ui-h5/lib/components/Transition.js"
var Transition_js_ = __webpack_require__(5);
var Transition_js_default = /*#__PURE__*/__webpack_require__.n(Transition_js_);

// EXTERNAL MODULE: external "@sc/vue-ui-h5/lib/components/CollapseTransition.js"
var CollapseTransition_js_ = __webpack_require__(6);
var CollapseTransition_js_default = /*#__PURE__*/__webpack_require__.n(CollapseTransition_js_);

// EXTERNAL MODULE: external "@sc/vue-ui-h5/lib/components/Avator.js"
var Avator_js_ = __webpack_require__(7);
var Avator_js_default = /*#__PURE__*/__webpack_require__.n(Avator_js_);

// EXTERNAL MODULE: external "@sc/vue-ui-h5/lib/components/Number.js"
var Number_js_ = __webpack_require__(8);
var Number_js_default = /*#__PURE__*/__webpack_require__.n(Number_js_);

// EXTERNAL MODULE: external "@sc/vue-ui-h5/lib/components/CallAppBanner.js"
var CallAppBanner_js_ = __webpack_require__(9);
var CallAppBanner_js_default = /*#__PURE__*/__webpack_require__.n(CallAppBanner_js_);

// CONCATENATED MODULE: ./src/directives/avator.js
var defaultAvator = "data:image/png;base64,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";

var hasSrc = function hasSrc(el) {
  if (el instanceof Image && el.src) {
    return true;
  } else if (el.style.backgroundImage) {
    return true;
  }
  return false;
};

var setSrc = function setSrc(el, src) {
  if (el instanceof Image) {
    el.src = src;
  } else {
    el.style.backgroundImage = "url(" + src + ")";
  }
};

var loadAvator = function loadAvator(el, binding) {
  var src = binding.value;
  !hasSrc(el) && setSrc(el, defaultAvator);
  var image = new Image();
  image.onload = function () {
    setSrc(el, this.src);
    image = null;
  };
  image.src = src;
};

var directive = {
  inserted: loadAvator,
  update: loadAvator
};

/* harmony default export */ var avator = (directive);
// CONCATENATED MODULE: ./src/directives/image.js
var defaultImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAGSBAMAAADKi8MBAAAAGFBMVEUzMzNPT09LS0s4ODg8PDxAQEBERERISEjhYOFkAAADa0lEQVR42u3YQVPaYBDG8W1D6PmJQK680NZrKqBXEGyv0Uk5g1a9gh3ar1/AgiSiMGMEDv/fTE7MwLLZPPuCAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAHYvtgPy1AzIe2eFwQWQHw6luB0PSwcywp0AHc6MKKnVUOZBqfB1540Op5pOq00thO9Wue9uLDxrZR0nBr6fmfHdl24uOBtOCZoLbrpl5zb6TjmwvhqpbR0s1zVVtL5zUHmrV8W1nT8njSao4rYpsOL32oaisinnTay8+KFTakRX3Nb+Xqp4q5ea7y2N+e5bSmmw1v5GdKattb/YtTGypeTUOt9lM4Zq5Ce3t/FlwJd3IazT7D6p+UrTFyJTMviklp8gbqzyt4r9SQfEWI6OBjZUxsBycKDTPLXp9oeo2KRNcKCOIckqweDXbS5tX9jOTC5Xy2no6vtZSsPkuBc8i76MGeZ2U0tqbOzlUStUug/wybMXkrL7pLoVWcOnyvfzi15dqWhjZ103Hh6NM/eHFWO0c4z32Fm9ftk60ofLYCs8XZW58lZ4SdZp8G8a9bifKGOV6jLztuq2+5rwncTbxAsuR57QUdIfxa2VPBcqoWp7OFD4sCmoXS6825rnA8jUMl1NT8mrRK43pOaX8bnSqlq+CG9kiypzqLz9K9UxIlq0YWt7OwuR849Ybzl4ppvdjww0sd+daqvv1Fxa8gtjGqWKcypY/bxj0rxetv4peWmLh+YbjZj688WjxiA9OPq97XevU7V0UatFTtMZr9+nzeir2TvzPveUshOtmqu4rI2jbe/Hd8jM6mfafzbuQ3kqlxtWNvR//V8tpZuCln9jTx8G2jp6Ekf/Z3lfh7m/NuYrXT9L36MaXBqmMib2J7Z53NX9oOgrcamPu7iLbuZabT9EPpe3iD8bI0grXWi/cQV8K/a4teb3HUpwyahv6kuNe+POz12g0ev17PbopKu2LNW03pvO66qtTbMPMuSGynWn2xyt5f6JKy2lF0E1sl7xxpXuqStKa/0RbVen+mES2W74Lkstwth7L16muJD/btnuth1nUfVLapG370byrPehJ2P+aRLZHzYu7+5pUqx3/SfqJAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJv8AkQuhtv1OE0AAAAAASUVORK5CYII="; // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="

var image_hasSrc = function hasSrc(el) {
  if (el instanceof Image && el.src) {
    return true;
  } else if (el.style.backgroundImage) {
    return true;
  }
  return false;
};

var image_setSrc = function setSrc(el, src) {
  if (el instanceof Image) {
    el.src = src;
  } else {
    el.style.backgroundImage = "url(" + src + ")";
  }
};

var loadImage = function loadImage(el, binding) {
  var src = binding.value;
  !image_hasSrc(el) && image_setSrc(el, defaultImage);
  var image = new Image();
  image.onload = function () {
    image_setSrc(el, this.src);
    image = null;
  };
  image.src = src;
};

var image_directive = {
  inserted: loadImage,
  update: loadImage
};

/* harmony default export */ var directives_image = (image_directive);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(10);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./src/directives/lazyload.js


var removeItem = function removeItem(arr, item) {
  if (!arr.length) return;
  var index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
    return arr;
  }
};

var init = {
  lazyLoad: false,
  default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="
};

var listeners = [];
var imageCache = [];

var onListen = function onListen(ele, bind) {
  if (bind) {
    ele.addEventListener("scroll", render);
  } else {
    init.lazyLoad = false;
    ele.removeEventListener("scroll", render);
  }
};

var render = external_lodash_default.a.throttle(function () {
  for (var i = 0; i < listeners.length; i++) {
    checkCanShow(listeners[i]);
  }
}, 100);

var setEleSrc = function setEleSrc(ele, imgSrc) {
  ele.src = imgSrc;
  ele.style.opacity = 1;
  // ele.nextElementSibling.style.display = "block"
  ele.setAttribute("load", "success");
};

var alreadyLoad = function alreadyLoad(ele, imgSrc) {
  if (imageCache.indexOf(imgSrc) > -1) {
    setEleSrc(ele, imgSrc);
    return true;
  }
  return false;
};

var checkCanShow = function checkCanShow(item) {
  var ele = item.ele;
  var top = ele.getBoundingClientRect().top;
  if (top + 10 < window.innerHeight) {
    loadImgAsync(item, function (ele, imgSrc) {
      setEleSrc(ele, imgSrc);
      imageCache.push(imgSrc);
    }, function (e) {});
    return true;
  }
  return false;
};

var loadImgAsync = function loadImgAsync(item, resolve, reject) {
  var img = new Image();
  img.src = item.imgSrc;
  img.onload = function () {
    resolve(item.ele, item.imgSrc);
    img = null;
  };
  img.onerror = function (e) {
    reject(e);
    img = null;
  };
  removeItem(listeners, item);
};

var addListener = function addListener(ele, binding) {
  var imgSrc = binding.value;
  // ele.nextElementSibling.style.display = "none"
  ele.setAttribute("load", "fail");
  if (alreadyLoad(ele, imgSrc)) {
    return false;
  }
  var item = {
    ele: ele,
    imgSrc: imgSrc
  };
  ele.src = init.default;

  if (checkCanShow(item)) {
    return false;
  }
  listeners.push(item);
  if (!init.lazyLoad) {
    init.lazyLoad = true;
    onListen(window, true);
  }
};

/* harmony default export */ var lazyload = ({
  inserted: addListener,
  update: addListener
});
// EXTERNAL MODULE: external "normalize-wheel"
var external_normalize_wheel_ = __webpack_require__(11);
var external_normalize_wheel_default = /*#__PURE__*/__webpack_require__.n(external_normalize_wheel_);

// CONCATENATED MODULE: ./src/directives/mousewheel.js


var isFirefox = typeof navigator !== "undefined" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

var mousewheel_mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? "DOMMouseScroll" : "mousewheel", function (event) {
      var normalized = external_normalize_wheel_default()(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

var mousewheel_directive = {
  name: "mousewheel",
  bind: function bind(el, binding) {
    mousewheel_mousewheel(el, binding.value);
  }
};

/* harmony default export */ var directives_mousewheel = (mousewheel_directive);
// CONCATENATED MODULE: ./src/filters/fixPhone.js
/* harmony default export */ var fixPhone = (function (value) {
  return value ? (value + "").replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : "";
});
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "deepmerge"
var external_deepmerge_ = __webpack_require__(12);
var external_deepmerge_default = /*#__PURE__*/__webpack_require__.n(external_deepmerge_);

// CONCATENATED MODULE: ./src/locale/lang/zh_CN.js
/* harmony default export */ var zh_CN = ({
  confirm: {
    confirm: "确定",
    clear: "清空"
  }
});
// CONCATENATED MODULE: ./src/locale/format.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasOwn = function hasOwn(obj, key) {
  Object.prototype.hasOwnProperty.call(obj, key);
};

var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

/* harmony default export */ var format = (function () {
  function template(string) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (args.length === 1 && _typeof(args[0]) === "object") {
      args = args[0];
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    return string.replace(RE_NARGS, function (match, prefix, i, index) {
      var result = void 0;

      if (string[index - 1] === "{" && string[index + match.length] === "}") {
        return i;
      }
      result = hasOwn(args, i) ? args[i] : null;
      if (result === null || result === undefined) {
        return "";
      }

      return result;
    });
  }

  return template;
});
// CONCATENATED MODULE: ./src/locale/index.js





var locale_format = format(external_vue_default.a);
var lang = zh_CN;
var merged = false;
var locale_i18nHandler = function i18nHandler() {
  var vuei18n = Object.getPrototypeOf(this || external_vue_default.a).$t;
  if (typeof vuei18n === "function" && !!external_vue_default.a.locale) {
    if (!merged) {
      merged = true;
      external_vue_default.a.locale(external_vue_default.a.config.lang, external_deepmerge_default()(lang, external_vue_default.a.locale(external_vue_default.a.config.lang) || {}, { clone: true }));
    }
    return vuei18n.apply(this, arguments);
  }
};

var t = function t(path, options) {
  var value = locale_i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;

  var array = path.split(".");
  var current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    value = current[property];
    if (i === j - 1) return locale_format(value, options);
    if (!value) return "";
    current = value;
  }
  return "";
};

var use = function use(l) {
  lang = l || lang;
};

var i18n = function i18n(fn) {
  locale_i18nHandler = fn || locale_i18nHandler;
};

/* harmony default export */ var locale = ({ use: use, t: t, i18n: i18n });
// CONCATENATED MODULE: ./src/index.js
















var components = [LoadingPanel_js_default.a, FailPanel_js_default.a, Loading_js_default.a, Alert_js_default.a, Transition_js_default.a, CollapseTransition_js_default.a, Avator_js_default.a, Number_js_default.a, CallAppBanner_js_default.a];

var directives = {
  avator: avator,
  image: directives_image,
  lazyload: lazyload,
  mousewheel: directives_mousewheel
};

var filters = {
  fixPhone: fixPhone
};

var src_install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(function (component) {
    Vue.use(component);
  });

  Object.keys(directives).forEach(function (key) {
    Vue.directive(directives[key].name || key, directives[key]);
  });

  Object.keys(filters).forEach(function (key) {
    Vue.filter(key, filters[key]);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  src_install(window.Vue);
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  version: '0.3.4',
  locale: locale.use,
  i18n: locale.i18n,
  install: src_install,
  directives: directives,
  filters: filters,
  LoadingPanel: LoadingPanel_js_default.a,
  FailPanel: FailPanel_js_default.a,
  Loading: Loading_js_default.a,
  Alert: Alert_js_default.a,
  Transition: Transition_js_default.a,
  CollapseTransition: CollapseTransition_js_default.a,
  Avator: Avator_js_default.a,
  Number: Number_js_default.a,
  CallAppBanner: CallAppBanner_js_default.a
});

/***/ })
/******/ ])["default"];