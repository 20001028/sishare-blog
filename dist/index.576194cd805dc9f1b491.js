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
let vm = new Vue({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY3NzL2luZGV4LmNzcz9lNTliIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2FwcC52dWUiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvYXBwLnZ1ZT84NzIzIiwid2VicGFjazovL015QmxvZy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiXSwibmFtZXMiOlsicm9vdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiVnVlIiwicHJvdG90eXBlIiwiJGF4aW9zIiwiYXhpb3MiLCJkaXJlY3RpdmUiLCJlbCIsImJsb2NrcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYmxvY2siLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siLCJ1c2UiLCJWdWVSb3V0ZXIiLCJ2bSIsInJvdXRlciIsInJlbmRlciIsImgiLCJBcHAiLCJtb2RlIiwicm91dGVzIiwicGF0aCIsInJlZGlyZWN0IiwiY29tcG9uZW50IiwiY2hpbGRyZW4iLCJwcm9wcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNQSxPQUFLQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQUYsS0FBS0csRUFBTCxHQUFRLEtBQVI7QUFDQUYsU0FBU0csSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxJQUExQjs7QUFFQTtBQUNBTSxJQUFJQyxTQUFKLENBQWNDLE1BQWQsR0FBcUJDLEtBQXJCO0FBQ0E7QUFDQUgsSUFBSUksU0FBSixDQUFjLFdBQWQsRUFBMEIsVUFBVUMsRUFBVixFQUFjO0FBQ3RDLE1BQUlDLFNBQVNELEdBQUdFLGdCQUFILENBQW9CLFVBQXBCLENBQWI7QUFDQUQsU0FBT0UsT0FBUCxDQUFnQkMsS0FBRCxJQUFTO0FBQ3RCQyxTQUFLQyxjQUFMLENBQW9CRixLQUFwQjtBQUNELEdBRkQ7QUFHRCxDQUxEO0FBTUE7QUFDQVQsSUFBSVksR0FBSixDQUFRQyxTQUFSOztBQUVBO0FBQ0EsSUFBSUMsS0FBRyxJQUFJZCxHQUFKLENBQVE7QUFDYkssTUFBRyxNQURVO0FBRWJVLFFBRmE7QUFHYkMsVUFBT0MsS0FBR0EsRUFBRUMsd0RBQUY7QUFIRyxDQUFSLENBQVAsQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLGlFQUFlLElBQUlMLFNBQUosQ0FBYztBQUN6Qk0sVUFBSyxNQURvQjtBQUV6QkMsWUFBTyxDQUNIO0FBQ0lDLGNBQUssR0FEVDtBQUVJQyxrQkFBUyxRQUZiO0FBR0lDLG1CQUFVLE1BQU0sc01BSHBCO0FBSUlDLGtCQUFTLENBQ0w7QUFDSUgsa0JBQUssT0FEVDtBQUVJRSx1QkFBVSxNQUFNO0FBRnBCLFNBREssRUFLTDtBQUNJRixrQkFBSyxXQURUO0FBRUlFLHVCQUFVLE1BQUksNkxBRmxCO0FBR0lFLG1CQUFNO0FBSFYsU0FMSyxFQVVMO0FBQ0lKLGtCQUFLLE9BRFQ7QUFFSUUsdUJBQVUsTUFBSTtBQUZsQixTQVZLO0FBSmIsS0FERyxFQXFCSDtBQUNJRixjQUFLLE9BRFQ7QUFFSUssY0FBSyxNQUZUO0FBR0lILG1CQUFVLE1BQUk7QUFIbEIsS0FyQkc7QUFGa0IsQ0FBZCxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0Y7QUFDbEY7OztBQUdBO0FBQ0EsQ0FBMEY7QUFDMUYsZ0JBQWdCLG9HQUFVO0FBQzFCO0FBQ0EsRUFBRSwyRUFBTTtBQUNSLEVBQUUsb0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQkFBK0I7QUFDbkQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LjU3NjE5NGNkODA1ZGM5ZjFiNDkxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Nzcy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAudnVlJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlci5qcyc7XHJcblxyXG4vL+iHquWKqOeUn+aIkOeahGluZGV4Lmh0bWzkuI3kvJrmnInmoLnnu5PngrnvvIzov5nph4zkuLpib2R55re75Yqg5LiA5Liq6IqC54K555So5p2l5oyC6L29VnVl5a6e5L6LXHJcbmNvbnN0IHJvb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnJvb3QuaWQ9J2FwcCc7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XHJcblxyXG4vL+aKimF4aW9z5oyC6L295YiwVnVl5Y6f5Z6L5LiK77yM5Y+v5Lul55SoVnVl5a6e5L6L5YaF6LCD55SoXHJcblZ1ZS5wcm90b3R5cGUuJGF4aW9zPWF4aW9zO1xyXG4vL+iHquWumuS5iWhpZ2hsaWdodOaMh+S7pO+8jOeUqOS6juS7o+eggemrmOS6rlxyXG5WdWUuZGlyZWN0aXZlKCdoaWdobGlnaHQnLGZ1bmN0aW9uIChlbCkge1xyXG4gIGxldCBibG9ja3MgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpO1xyXG4gIGJsb2Nrcy5mb3JFYWNoKChibG9jayk9PntcclxuICAgIGhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spXHJcbiAgfSlcclxufSk7XHJcbi8v5byV55SoVnVlUm91dGVy5o+S5Lu2XHJcblZ1ZS51c2UoVnVlUm91dGVyKTtcclxuXHJcbi8v5oqKVnVl5a6e5L6L5oyC6L295Yiw6IqC54K55LiKXHJcbmxldCB2bT1uZXcgVnVlKHtcclxuICBlbDonI2FwcCcsXHJcbiAgcm91dGVyLFxyXG4gIHJlbmRlcjpoPT5oKEFwcClcclxufSk7IiwiZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZVJvdXRlcih7XHJcbiAgICBtb2RlOidoYXNoJyxcclxuICAgIHJvdXRlczpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOicvJyxcclxuICAgICAgICAgICAgcmVkaXJlY3Q6Jy9ibG9ncycsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDooKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9jb21tb24vaW5kZXgudnVlJyksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOidibG9ncycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OigpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL21haW4vYmxvZy1saXN0LnZ1ZScpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6J2Jsb2dzLzppZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OigpPT5pbXBvcnQoJy4vY29tcG9uZW50cy9tYWluL2Jsb2cudnVlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOidndWlkZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OigpPT5pbXBvcnQoJy4vY29tcG9uZW50cy9ndWlkZS9pbmRleC52dWUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6Jy9lZGl0JyxcclxuICAgICAgICAgICAgbmFtZTonZWRpdCcsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDooKT0+aW1wb3J0KCcuL2NvbXBvbmVudHMvZWRpdC9lZGl0LnZ1ZScpXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzBhMGZjMSZcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEZWxsXFxcXERlc2t0b3BcXFxcTXktSWRlYVxcXFxNeUJsb2dcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmMwYTBmYzEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmMwYTBmYzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmMwYTBmYzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmMwYTBmYzEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmMwYTBmYzEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXBwLWNvbnRhaW5lclwiIH0sIFtfYyhcInJvdXRlci12aWV3XCIpXSwgMSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==