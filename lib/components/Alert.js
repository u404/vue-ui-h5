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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/张光辉/.fie/node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/张光辉/.fie/node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/components/Alert/main.vue?vue&type=template&id=29c03abc&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "h5-alert", on: { click: _vm.close } },
    [
      _c("transition", { attrs: { name: "h5-fade", appear: "" } }, [
        _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "h5-alert-mask"
        })
      ]),
      _c("transition", { attrs: { name: "h5-slideUp", appear: "" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.visible,
                expression: "visible"
              }
            ],
            staticClass: "h5-alert-body"
          },
          [
            _vm._t("default", [
              _c(
                "div",
                { staticClass: "h5-alert-msg", attrs: { role: "alert" } },
                [_vm._v(_vm._s(_vm.msg))]
              )
            ])
          ],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/Alert/main.vue?vue&type=template&id=29c03abc&

// CONCATENATED MODULE: C:/Users/张光辉/.fie/node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--0!C:/Users/张光辉/.fie/node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/components/Alert/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'h5-alert',
  props: {},

  data: function data() {
    return {
      timer: null,
      visible: false,
      msg: ""
    };
  },


  methods: {
    show: function show(msg, _ref) {
      var _this = this;

      var _ref$autoClose = _ref.autoClose,
          autoClose = _ref$autoClose === undefined ? 3000 : _ref$autoClose;

      this.msg = msg;
      this.timer && clearTimeout(this.timer);
      this.visible = true;
      if (autoClose) {
        this.timer = setTimeout(function () {
          return _this.close();
        }, autoClose);
      }
    },
    close: function close() {
      this.timer && clearTimeout(this.timer);
      this.timer = null;
      this.visible = false;
      this.$emit("close");
      console.log("close");
    }
  }

});
// CONCATENATED MODULE: ./src/components/Alert/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var Alert_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/Users/张光辉/.fie/node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/Alert/main.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Alert_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Alert/main.vue"
/* harmony default export */ var main = (component.exports);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/components/Alert/function.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var Constructor = external_vue_default.a.extend(main);

var instance = void 0;

var function_func = function func(msg) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  if ((typeof msg === "undefined" ? "undefined" : _typeof(msg)) === "object") {
    options = msg;
    msg = options.msg || options.message || "";
  }

  var parent = options.parent || document.body;

  if (!instance) {
    instance = new Constructor({
      el: document.createElement("div"),
      data: {
        parent: parent
      }
    });
    parent.appendChild(instance.$el);
  } else {
    if (parent !== instance.parent) {
      parent.appendChild(instance.$el);
    }
  }

  external_vue_default.a.nextTick(function () {
    instance.show(msg, options);
  });

  return instance;
};

function_func.close = function () {
  instance && instance.close();
};

/* harmony default export */ var Alert_function = (function_func);
// CONCATENATED MODULE: ./src/components/Alert/index.js



/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
  Vue.prototype.$alert = Alert_function;
};

main.function = Alert_function;

/* harmony default export */ var Alert = __webpack_exports__["default"] = (main);

/***/ })
/******/ ]);