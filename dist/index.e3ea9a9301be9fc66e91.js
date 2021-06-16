(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _components_app_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app.vue */ "./src/components/app.vue");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.js */ "./src/router.js");




//自动生成的index.html不会有根结点，这里为body添加一个节点用来挂载Vue实例
const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

//把axios挂载到Vue原型上，可以用Vue实例内调用
Vue.prototype.$axios = axios;
//自定义highlight指令，用于代码高亮
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});
//引用VueRouter插件
Vue.use(VueRouter);

//把Vue实例挂载到节点上
new Vue({
  el: '#app',
  router: _router_js__WEBPACK_IMPORTED_MODULE_2__.default,
  render: h => h(_components_app_vue__WEBPACK_IMPORTED_MODULE_1__.default)
});

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new VueRouter({
    mode: 'hash',
    routes: [{
        path: '/',
        redirect: '/blogs',
        component: () => __webpack_require__.e(/*! import() */ "src_components_common_index_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./components/common/index.vue */ "./src/components/common/index.vue")),
        children: [{
            path: 'blogs',
            component: () => __webpack_require__.e(/*! import() */ "src_components_main_blog-list_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/blog-list.vue */ "./src/components/main/blog-list.vue"))
        }, {
            path: 'blogs/:id',
            component: () => __webpack_require__.e(/*! import() */ "src_components_main_blog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/blog.vue */ "./src/components/main/blog.vue")),
            props: true
        }, {
            path: 'guide',
            component: () => __webpack_require__.e(/*! import() */ "src_components_guide_index_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./components/guide/index.vue */ "./src/components/guide/index.vue"))
        }]
    }, {
        path: '/edit',
        name: 'edit',
        component: () => __webpack_require__.e(/*! import() */ "src_components_edit_edit_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./components/edit/edit.vue */ "./src/components/edit/edit.vue"))
    }]
}));

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/app.vue":
/*!********************************!*\
  !*** ./src/components/app.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_vue_vue_type_template_id_6c0a0fc1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=6c0a0fc1& */ "./src/components/app.vue?vue&type=template&id=6c0a0fc1&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _app_vue_vue_type_template_id_6c0a0fc1___WEBPACK_IMPORTED_MODULE_0__.render,
  _app_vue_vue_type_template_id_6c0a0fc1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/app.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/app.vue?vue&type=template&id=6c0a0fc1&":
/*!***************************************************************!*\
  !*** ./src/components/app.vue?vue&type=template&id=6c0a0fc1& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6c0a0fc1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6c0a0fc1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6c0a0fc1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./app.vue?vue&type=template&id=6c0a0fc1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/app.vue?vue&type=template&id=6c0a0fc1&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/app.vue?vue&type=template&id=6c0a0fc1&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/app.vue?vue&type=template&id=6c0a0fc1& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app-container" }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY3NzL2luZGV4LmNzcz9lNTliIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2FwcC52dWUiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvYXBwLnZ1ZT84NzIzIiwid2VicGFjazovL015QmxvZy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiXSwibmFtZXMiOlsicm9vdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiVnVlIiwicHJvdG90eXBlIiwiJGF4aW9zIiwiYXhpb3MiLCJkaXJlY3RpdmUiLCJlbCIsImJsb2NrcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYmxvY2siLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siLCJ1c2UiLCJWdWVSb3V0ZXIiLCJyb3V0ZXIiLCJyZW5kZXIiLCJoIiwiQXBwIiwibW9kZSIsInJvdXRlcyIsInBhdGgiLCJyZWRpcmVjdCIsImNvbXBvbmVudCIsImNoaWxkcmVuIiwicHJvcHMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTUEsT0FBS0MsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0FGLEtBQUtHLEVBQUwsR0FBUSxLQUFSO0FBQ0FGLFNBQVNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsSUFBMUI7O0FBRUE7QUFDQU0sSUFBSUMsU0FBSixDQUFjQyxNQUFkLEdBQXFCQyxLQUFyQjtBQUNBO0FBQ0FILElBQUlJLFNBQUosQ0FBYyxXQUFkLEVBQTBCLFVBQVVDLEVBQVYsRUFBYztBQUN0QyxNQUFJQyxTQUFTRCxHQUFHRSxnQkFBSCxDQUFvQixVQUFwQixDQUFiO0FBQ0FELFNBQU9FLE9BQVAsQ0FBZ0JDLEtBQUQsSUFBUztBQUN0QkMsU0FBS0MsY0FBTCxDQUFvQkYsS0FBcEI7QUFDRCxHQUZEO0FBR0QsQ0FMRDtBQU1BO0FBQ0FULElBQUlZLEdBQUosQ0FBUUMsU0FBUjs7QUFFQTtBQUNBLElBQUliLEdBQUosQ0FBUTtBQUNOSyxNQUFHLE1BREc7QUFFTlMsUUFGTTtBQUdOQyxVQUFPQyxLQUFHQSxFQUFFQyx3REFBRjtBQUhKLENBQVIsRTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLGlFQUFlLElBQUlKLFNBQUosQ0FBYztBQUN6QkssVUFBSyxNQURvQjtBQUV6QkMsWUFBTyxDQUNIO0FBQ0lDLGNBQUssR0FEVDtBQUVJQyxrQkFBUyxRQUZiO0FBR0lDLG1CQUFVLE1BQU0sc01BSHBCO0FBSUlDLGtCQUFTLENBQ0w7QUFDSUgsa0JBQUssT0FEVDtBQUVJRSx1QkFBVSxNQUFNO0FBRnBCLFNBREssRUFLTDtBQUNJRixrQkFBSyxXQURUO0FBRUlFLHVCQUFVLE1BQUksNkxBRmxCO0FBR0lFLG1CQUFNO0FBSFYsU0FMSyxFQVVMO0FBQ0lKLGtCQUFLLE9BRFQ7QUFFSUUsdUJBQVUsTUFBSTtBQUZsQixTQVZLO0FBSmIsS0FERyxFQXFCSDtBQUNJRixjQUFLLE9BRFQ7QUFFSUssY0FBSyxNQUZUO0FBR0lILG1CQUFVLE1BQUk7QUFIbEIsS0FyQkc7QUFGa0IsQ0FBZCxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0Y7QUFDbEY7OztBQUdBO0FBQ0EsQ0FBMEY7QUFDMUYsZ0JBQWdCLG9HQUFVO0FBQzFCO0FBQ0EsRUFBRSwyRUFBTTtBQUNSLEVBQUUsb0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQkFBK0I7QUFDbkQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmUzZWE5YTkzMDFiZTlmYzY2ZTkxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Nzcy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAudnVlJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlci5qcyc7XHJcblxyXG4vL+iHquWKqOeUn+aIkOeahGluZGV4Lmh0bWzkuI3kvJrmnInmoLnnu5PngrnvvIzov5nph4zkuLpib2R55re75Yqg5LiA5Liq6IqC54K555So5p2l5oyC6L29VnVl5a6e5L6LXHJcbmNvbnN0IHJvb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnJvb3QuaWQ9J2FwcCc7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XHJcblxyXG4vL+aKimF4aW9z5oyC6L295YiwVnVl5Y6f5Z6L5LiK77yM5Y+v5Lul55SoVnVl5a6e5L6L5YaF6LCD55SoXHJcblZ1ZS5wcm90b3R5cGUuJGF4aW9zPWF4aW9zO1xyXG4vL+iHquWumuS5iWhpZ2hsaWdodOaMh+S7pO+8jOeUqOS6juS7o+eggemrmOS6rlxyXG5WdWUuZGlyZWN0aXZlKCdoaWdobGlnaHQnLGZ1bmN0aW9uIChlbCkge1xyXG4gIGxldCBibG9ja3MgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpO1xyXG4gIGJsb2Nrcy5mb3JFYWNoKChibG9jayk9PntcclxuICAgIGhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spXHJcbiAgfSlcclxufSk7XHJcbi8v5byV55SoVnVlUm91dGVy5o+S5Lu2XHJcblZ1ZS51c2UoVnVlUm91dGVyKTtcclxuXHJcbi8v5oqKVnVl5a6e5L6L5oyC6L295Yiw6IqC54K55LiKXHJcbm5ldyBWdWUoe1xyXG4gIGVsOicjYXBwJyxcclxuICByb3V0ZXIsXHJcbiAgcmVuZGVyOmg9PmgoQXBwKVxyXG59KTsiLCJleHBvcnQgZGVmYXVsdCBuZXcgVnVlUm91dGVyKHtcclxuICAgIG1vZGU6J2hhc2gnLFxyXG4gICAgcm91dGVzOltcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6Jy8nLFxyXG4gICAgICAgICAgICByZWRpcmVjdDonL2Jsb2dzJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OigpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL2NvbW1vbi9pbmRleC52dWUnKSxcclxuICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6J2Jsb2dzJyxcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6KCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvbWFpbi9ibG9nLWxpc3QudnVlJylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDonYmxvZ3MvOmlkJyxcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6KCk9PmltcG9ydCgnLi9jb21wb25lbnRzL21haW4vYmxvZy52dWUnKSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczp0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6J2d1aWRlJyxcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6KCk9PmltcG9ydCgnLi9jb21wb25lbnRzL2d1aWRlL2luZGV4LnZ1ZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDonL2VkaXQnLFxyXG4gICAgICAgICAgICBuYW1lOidlZGl0JyxcclxuICAgICAgICAgICAgY29tcG9uZW50OigpPT5pbXBvcnQoJy4vY29tcG9uZW50cy9lZGl0L2VkaXQudnVlJylcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjMGEwZmMxJlwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERlbGxcXFxcRGVza3RvcFxcXFxNeS1JZGVhXFxcXE15QmxvZ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YzBhMGZjMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YzBhMGZjMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YzBhMGZjMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzBhMGZjMSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2YzBhMGZjMScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvYXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcHAtY29udGFpbmVyXCIgfSwgW19jKFwicm91dGVyLXZpZXdcIildLCAxKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9