(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_common_header_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/header.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//
//
//
//
//
//

const NavBar = () => __webpack_require__.e(/*! import() */ "src_components_common_nav-bar_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./nav-bar.vue */ "./src/components/common/nav-bar.vue"));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    data() {
        return {
            loginDialog: {
                visible: false,
                username: '',
                password: ''
            }
        };
    },
    components: {
        NavBar
    },
    methods: {
        showLoginForm() {
            this.loginDialog.visible = true;
        },
        login() {
            let that = this;
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/login',
                params: {
                    username: that.loginDialog.username,
                    password: that.loginDialog.password
                },
                withCredentials: true
            }).then(res => {
                that.loginDialog.visible = false;
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/common/header.css?vue&type=style&index=0&id=af5d225e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/common/header.css?vue&type=style&index=0&id=af5d225e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/common/header.vue":
/*!******************************************!*\
  !*** ./src/components/common/header.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_vue_vue_type_template_id_af5d225e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=af5d225e&scoped=true& */ "./src/components/common/header.vue?vue&type=template&id=af5d225e&scoped=true&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./src/components/common/header.vue?vue&type=script&lang=js&");
/* harmony import */ var _css_common_header_css_vue_type_style_index_0_id_af5d225e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/common/header.css?vue&type=style&index=0&id=af5d225e&scoped=true&lang=css& */ "./src/css/common/header.css?vue&type=style&index=0&id=af5d225e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _header_vue_vue_type_template_id_af5d225e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _header_vue_vue_type_template_id_af5d225e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "af5d225e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/common/header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/common/header.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/common/header.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/css/common/header.css?vue&type=style&index=0&id=af5d225e&scoped=true&lang=css&":
/*!********************************************************************************************!*\
  !*** ./src/css/common/header.css?vue&type=style&index=0&id=af5d225e&scoped=true&lang=css& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_header_css_vue_type_style_index_0_id_af5d225e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!./header.css?vue&type=style&index=0&id=af5d225e&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/common/header.css?vue&type=style&index=0&id=af5d225e&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/common/header.vue?vue&type=template&id=af5d225e&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/components/common/header.vue?vue&type=template&id=af5d225e&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_af5d225e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_af5d225e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_af5d225e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=template&id=af5d225e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/header.vue?vue&type=template&id=af5d225e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/header.vue?vue&type=template&id=af5d225e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/header.vue?vue&type=template&id=af5d225e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "index-container" },
    [
      _c(
        "div",
        { staticClass: "nav-container" },
        [_c("NavBar", { on: { login: _vm.showLoginForm } })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "router-container" }, [_c("router-view")], 1),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "登录",
            visible: _vm.loginDialog.visible,
            modal: true,
            "lock-scroll": true,
            "show-close": false,
            "close-on-click-modal": false,
            "close-on-press-escape": false,
            center: true,
            width: "50%"
          },
          on: {
            "update:visible": function($event) {
              return _vm.$set(_vm.loginDialog, "visible", $event)
            }
          }
        },
        [
          _c(
            "el-input",
            {
              attrs: { placeholder: "请输入用户名" },
              model: {
                value: _vm.loginDialog.username,
                callback: function($$v) {
                  _vm.$set(_vm.loginDialog, "username", $$v)
                },
                expression: "loginDialog.username"
              }
            },
            [_c("template", { slot: "prepend" }, [_vm._v("username")])],
            2
          ),
          _vm._v(" "),
          _c("p", { staticStyle: { height: "10px", visibility: "hidden" } }),
          _vm._v(" "),
          _c(
            "el-input",
            {
              attrs: { placeholder: "请输入密码" },
              model: {
                value: _vm.loginDialog.password,
                callback: function($$v) {
                  _vm.$set(_vm.loginDialog, "password", $$v)
                },
                expression: "loginDialog.password"
              }
            },
            [_c("template", { slot: "prepend" }, [_vm._v("password")])],
            2
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.loginDialog.visible = false
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  staticStyle: { "background-color": "#00965e" },
                  attrs: { type: "primary" },
                  on: { click: _vm.login }
                },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlci52dWUiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2Nzcy9jb21tb24vaGVhZGVyLmNzcz9iMzJkIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIudnVlP2MwNWEiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlci52dWU/ZWUwZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDRCQUZBO0FBR0E7QUFIQTtBQURBO0FBT0EsS0FUQTtBQVVBO0FBQ0E7QUFEQSxLQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsdURBRkE7QUFHQTtBQUNBLHVEQURBO0FBRUE7QUFGQSxpQkFIQTtBQU9BO0FBUEEsZUFRQSxJQVJBLENBUUE7QUFDQTtBQUNBLGFBVkE7QUFXQTtBQWpCQTtBQWJBLEc7Ozs7Ozs7Ozs7OztBQ3JDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaUc7QUFDdkM7QUFDTDtBQUNyRCxDQUF5Rzs7O0FBR3pHO0FBQzZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLHlFQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzBMLENBQUMsaUVBQWUsa01BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssaUNBQWlDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsK0JBQStCO0FBQ3hDLHVCQUF1QixNQUFNLDJCQUEyQixFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQ0FBa0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLDZCQUE2QixrQkFBa0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWUsdUNBQXVDLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQ0FBZ0M7QUFDaEUsMEJBQTBCLGtCQUFrQjtBQUM1Qyx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY29tbW9uX2hlYWRlcl92dWUuMjMyZjYzNzBmMjM4OWFhN2Q4ZGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5kZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPE5hdkJhciBAbG9naW49XCJzaG93TG9naW5Gb3JtXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3V0ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxlbC1kaWFsb2dcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi55m75b2VXCJcclxuICAgICAgICAgICAgICAgIDp2aXNpYmxlLnN5bmM9XCJsb2dpbkRpYWxvZy52aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgIDptb2RhbD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgOmxvY2stc2Nyb2xsPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA6c2hvdy1jbG9zZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIDpjbG9zZS1vbi1jbGljay1tb2RhbD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIDpjbG9zZS1vbi1wcmVzcy1lc2NhcGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICA6Y2VudGVyPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjUwJVwiPlxyXG4gICAgICAgICAgICAgICAgPGVsLWlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl55So5oi35ZCNXCIgdi1tb2RlbD1cImxvZ2luRGlhbG9nLnVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJwcmVwZW5kXCI+dXNlcm5hbWU8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9lbC1pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwid2lkdGg9MzBweDtoZWlnaHQ6MTBweDt2aXNpYmlsaXR5OmhpZGRlbjtcIj48L3A+XHJcbiAgICAgICAgICAgICAgICA8ZWwtaW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlr4bnoIFcIiB2LW1vZGVsPVwibG9naW5EaWFsb2cucGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInByZXBlbmRcIj5wYXNzd29yZDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L2VsLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc2xvdD1cImZvb3RlclwiIGNsYXNzPVwiZGlhbG9nLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbC1idXR0b24gQGNsaWNrPVwibG9naW5EaWFsb2cudmlzaWJsZSA9IGZhbHNlXCI+5Y+WIOa2iDwvZWwtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbC1idXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJsb2dpblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojMDA5NjVlO1wiPuehriDlrpo8L2VsLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2VsLWRpYWxvZz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG4gXHJcbjxzY3JpcHQ+XHJcbmNvbnN0IE5hdkJhcj0oKT0+aW1wb3J0KCcuL25hdi1iYXIudnVlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG9naW5EaWFsb2c6e1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOicnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6JycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgTmF2QmFyXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgc2hvd0xvZ2luRm9ybSgpe1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luRGlhbG9nLnZpc2libGU9dHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2luKCl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDonaHR0cDovLzQyLjE5Mi4xODAuMTQyOjMwMDAvbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTp0aGF0LmxvZ2luRGlhbG9nLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOnRoYXQubG9naW5EaWFsb2cucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6dHJ1ZVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICB0aGF0LmxvZ2luRGlhbG9nLnZpc2libGU9ZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuIFxyXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uLy4uL2Nzcy9jb21tb24vaGVhZGVyLmNzc1wiPlxyXG5cclxuPC9zdHlsZT4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2hlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWY1ZDIyNWUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi4vLi4vY3NzL2NvbW1vbi9oZWFkZXIuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWY1ZDIyNWUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImFmNWQyMjVlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGVsbFxcXFxEZXNrdG9wXFxcXE15LUlkZWFcXFxcTXlCbG9nXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2FmNWQyMjVlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2FmNWQyMjVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2FmNWQyMjVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFmNWQyMjVlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2FmNWQyMjVlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jb21tb24vaGVhZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJpbmRleC1jb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi1jb250YWluZXJcIiB9LFxuICAgICAgICBbX2MoXCJOYXZCYXJcIiwgeyBvbjogeyBsb2dpbjogX3ZtLnNob3dMb2dpbkZvcm0gfSB9KV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3V0ZXItY29udGFpbmVyXCIgfSwgW19jKFwicm91dGVyLXZpZXdcIildLCAxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJlbC1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCLnmbvlvZVcIixcbiAgICAgICAgICAgIHZpc2libGU6IF92bS5sb2dpbkRpYWxvZy52aXNpYmxlLFxuICAgICAgICAgICAgbW9kYWw6IHRydWUsXG4gICAgICAgICAgICBcImxvY2stc2Nyb2xsXCI6IHRydWUsXG4gICAgICAgICAgICBcInNob3ctY2xvc2VcIjogZmFsc2UsXG4gICAgICAgICAgICBcImNsb3NlLW9uLWNsaWNrLW1vZGFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjbG9zZS1vbi1wcmVzcy1lc2NhcGVcIjogZmFsc2UsXG4gICAgICAgICAgICBjZW50ZXI6IHRydWUsXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwidXBkYXRlOnZpc2libGVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0ubG9naW5EaWFsb2csIFwidmlzaWJsZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImVsLWlucHV0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeeUqOaIt+WQjVwiIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2dpbkRpYWxvZy51c2VybmFtZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubG9naW5EaWFsb2csIFwidXNlcm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbkRpYWxvZy51c2VybmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwicHJlcGVuZFwiIH0sIFtfdm0uX3YoXCJ1c2VybmFtZVwiKV0pXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwcHhcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImVsLWlucHV0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeWvhueggVwiIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2dpbkRpYWxvZy5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubG9naW5EaWFsb2csIFwicGFzc3dvcmRcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbkRpYWxvZy5wYXNzd29yZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwicHJlcGVuZFwiIH0sIFtfdm0uX3YoXCJwYXNzd29yZFwiKV0pXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGlhbG9nLWZvb3RlclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiZm9vdGVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZWwtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2dpbkRpYWxvZy52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuWPliDmtohcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZWwtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzAwOTY1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dpbiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi56GuIOWumlwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=