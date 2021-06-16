(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_common_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
//
//
//

const Header = () => __webpack_require__.e(/*! import() */ "src_components_common_header_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./header.vue */ "./src/components/common/header.vue"));
const Footer = () => __webpack_require__.e(/*! import() */ "src_components_common_footer_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./footer.vue */ "./src/components/common/footer.vue"));

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
        Header,
        Footer
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/common/index.css?vue&type=style&index=0&id=6e5584be&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/common/index.css?vue&type=style&index=0&id=6e5584be&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/common/index.vue":
/*!*****************************************!*\
  !*** ./src/components/common/index.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_6e5584be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6e5584be&scoped=true& */ "./src/components/common/index.vue?vue&type=template&id=6e5584be&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/common/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _css_common_index_css_vue_type_style_index_0_id_6e5584be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/common/index.css?vue&type=style&index=0&id=6e5584be&scoped=true&lang=css& */ "./src/css/common/index.css?vue&type=style&index=0&id=6e5584be&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_6e5584be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_6e5584be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6e5584be",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/common/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/common/index.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/common/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/css/common/index.css?vue&type=style&index=0&id=6e5584be&scoped=true&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./src/css/common/index.css?vue&type=style&index=0&id=6e5584be&scoped=true&lang=css& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_index_css_vue_type_style_index_0_id_6e5584be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!./index.css?vue&type=style&index=0&id=6e5584be&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/common/index.css?vue&type=style&index=0&id=6e5584be&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/common/index.vue?vue&type=template&id=6e5584be&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/components/common/index.vue?vue&type=template&id=6e5584be&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e5584be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e5584be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e5584be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=6e5584be&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/index.vue?vue&type=template&id=6e5584be&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/index.vue?vue&type=template&id=6e5584be&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/common/index.vue?vue&type=template&id=6e5584be&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "header-container" },
        [_c("Header", { on: { login: _vm.showLoginForm } })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "router-container" }, [_c("router-view")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "footer-container" }, [_c("Footer")], 1),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvY29tbW9uL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY3NzL2NvbW1vbi9pbmRleC5jc3M/M2MwNSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9jb21tb24vaW5kZXgudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC52dWU/ZTA0ZSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9jb21tb24vaW5kZXgudnVlP2Q2ZTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDRCQUZBO0FBR0E7QUFIQTtBQURBO0FBT0EsS0FUQTtBQVVBO0FBQ0EsY0FEQTtBQUVBO0FBRkEsS0FWQTtBQWNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLHVEQUZBO0FBR0E7QUFDQSx1REFEQTtBQUVBO0FBRkEsaUJBSEE7QUFPQTtBQVBBLGVBUUEsSUFSQSxDQVFBO0FBQ0E7QUFDQSxhQVZBO0FBV0E7QUFqQkE7QUFkQSxHOzs7Ozs7Ozs7Ozs7QUN6Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdHO0FBQ3ZDO0FBQ0w7QUFDcEQsQ0FBd0c7OztBQUd4RztBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSx3RUFBTTtBQUNSLEVBQUUseUZBQU07QUFDUixFQUFFLGtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkN5TCxDQUFDLGlFQUFlLGlNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGlDQUFpQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxTQUFTLGtDQUFrQztBQUMzQyx1QkFBdUIsTUFBTSwyQkFBMkIsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0NBQWtDO0FBQ25EO0FBQ0EsaUJBQWlCLGtDQUFrQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0JBQXdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZSx1Q0FBdUMsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYiw2QkFBNkIsa0JBQWtCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRSwwQkFBMEIsa0JBQWtCO0FBQzVDLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19jb21tb25faW5kZXhfdnVlLmNjNmU0MzgyY2MxZTJjZTUyYjhlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImluZGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgQGxvZ2luPVwic2hvd0xvZ2luRm9ybVwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm91dGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGVsLWRpYWxvZ1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLnmbvlvZVcIlxyXG4gICAgICAgICAgICAgICAgOnZpc2libGUuc3luYz1cImxvZ2luRGlhbG9nLnZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgOm1vZGFsPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA6bG9jay1zY3JvbGw9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIDpzaG93LWNsb3NlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgOmNsb3NlLW9uLWNsaWNrLW1vZGFsPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgOmNsb3NlLW9uLXByZXNzLWVzY2FwZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIDpjZW50ZXI9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNTAlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZWwtaW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXnlKjmiLflkI1cIiB2LW1vZGVsPVwibG9naW5EaWFsb2cudXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInByZXBlbmRcIj51c2VybmFtZTwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L2VsLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJ3aWR0aD0zMHB4O2hlaWdodDoxMHB4O3Zpc2liaWxpdHk6aGlkZGVuO1wiPjwvcD5cclxuICAgICAgICAgICAgICAgIDxlbC1pbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWvhueggVwiIHYtbW9kZWw9XCJsb2dpbkRpYWxvZy5wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwicHJlcGVuZFwiPnBhc3N3b3JkPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvZWwtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzbG90PVwiZm9vdGVyXCIgY2xhc3M9XCJkaWFsb2ctZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVsLWJ1dHRvbiBAY2xpY2s9XCJsb2dpbkRpYWxvZy52aXNpYmxlID0gZmFsc2VcIj7lj5Yg5raIPC9lbC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVsLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImxvZ2luXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMwMDk2NWU7XCI+56GuIOWumjwvZWwtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZWwtZGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbiBcclxuPHNjcmlwdD5cclxuY29uc3QgSGVhZGVyPSgpPT5pbXBvcnQoJy4vaGVhZGVyLnZ1ZScpO1xyXG5jb25zdCBGb290ZXI9KCk9PmltcG9ydCgnLi9mb290ZXIudnVlJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsb2dpbkRpYWxvZzp7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6JycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDonJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOntcclxuICAgICAgICBIZWFkZXIsXHJcbiAgICAgICAgRm9vdGVyXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgc2hvd0xvZ2luRm9ybSgpe1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luRGlhbG9nLnZpc2libGU9dHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2luKCl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDonaHR0cDovLzQyLjE5Mi4xODAuMTQyOjMwMDAvbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTp0aGF0LmxvZ2luRGlhbG9nLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOnRoYXQubG9naW5EaWFsb2cucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6dHJ1ZVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICB0aGF0LmxvZ2luRGlhbG9nLnZpc2libGU9ZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuIFxyXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uLy4uL2Nzcy9jb21tb24vaW5kZXguY3NzXCI+XHJcblxyXG48L3N0eWxlPiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlNTU4NGJlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi8uLi9jc3MvY29tbW9uL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZlNTU4NGJlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2ZTU1ODRiZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERlbGxcXFxcRGVza3RvcFxcXFxNeS1JZGVhXFxcXE15QmxvZ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ZTU1ODRiZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZTU1ODRiZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZTU1ODRiZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlNTU4NGJlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZlNTU4NGJlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jb21tb24vaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJpbmRleC1jb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlYWRlci1jb250YWluZXJcIiB9LFxuICAgICAgICBbX2MoXCJIZWFkZXJcIiwgeyBvbjogeyBsb2dpbjogX3ZtLnNob3dMb2dpbkZvcm0gfSB9KV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3V0ZXItY29udGFpbmVyXCIgfSwgW19jKFwicm91dGVyLXZpZXdcIildLCAxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvb3Rlci1jb250YWluZXJcIiB9LCBbX2MoXCJGb290ZXJcIildLCAxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJlbC1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCLnmbvlvZVcIixcbiAgICAgICAgICAgIHZpc2libGU6IF92bS5sb2dpbkRpYWxvZy52aXNpYmxlLFxuICAgICAgICAgICAgbW9kYWw6IHRydWUsXG4gICAgICAgICAgICBcImxvY2stc2Nyb2xsXCI6IHRydWUsXG4gICAgICAgICAgICBcInNob3ctY2xvc2VcIjogZmFsc2UsXG4gICAgICAgICAgICBcImNsb3NlLW9uLWNsaWNrLW1vZGFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjbG9zZS1vbi1wcmVzcy1lc2NhcGVcIjogZmFsc2UsXG4gICAgICAgICAgICBjZW50ZXI6IHRydWUsXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwidXBkYXRlOnZpc2libGVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0ubG9naW5EaWFsb2csIFwidmlzaWJsZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImVsLWlucHV0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeeUqOaIt+WQjVwiIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2dpbkRpYWxvZy51c2VybmFtZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubG9naW5EaWFsb2csIFwidXNlcm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbkRpYWxvZy51c2VybmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwicHJlcGVuZFwiIH0sIFtfdm0uX3YoXCJ1c2VybmFtZVwiKV0pXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwcHhcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImVsLWlucHV0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeWvhueggVwiIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2dpbkRpYWxvZy5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubG9naW5EaWFsb2csIFwicGFzc3dvcmRcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbkRpYWxvZy5wYXNzd29yZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwicHJlcGVuZFwiIH0sIFtfdm0uX3YoXCJwYXNzd29yZFwiKV0pXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGlhbG9nLWZvb3RlclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiZm9vdGVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZWwtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2dpbkRpYWxvZy52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuWPliDmtohcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZWwtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzAwOTY1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dpbiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi56GuIOWumlwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=