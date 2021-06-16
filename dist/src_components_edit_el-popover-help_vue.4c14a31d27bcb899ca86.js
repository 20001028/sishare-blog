(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_edit_el-popover-help_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-help.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-help.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    data: function () {
        return {
            helpers: [{
                name: '加粗',
                text: '**你的内容**'
            }, {
                name: '斜体',
                text: '*你的内容*'
            }, {
                name: '标题',
                text: '默认为h1,#开头'
            }, {
                name: 'h2-h5',
                text: '#*{1-5}'
            }, {
                name: '代码块',
                text: '```你的内容```'
            }, {
                name: '链接',
                text: '[显示内容](链接url)'
            }, {
                name: '图片',
                text: '![alt](图片url)'
            }, {
                name: '有序列表',
                text: '1. \\n2. \\n3. '
            }, {
                name: '无序列表',
                text: '+ \\n+ \\n+ '
            }]
        };
    },
    methods: {
        //事件代理
        eventProxy(e, dom) {
            let children = dom.children;
            for (let i = 0; i < children.length; i++) {
                if (children[i] === e.target) return i;
            }
            return -1;
        },
        copy(name, text) {
            console.log(name, text);
            let clipboard = new ClipboardJS('.' + name, {
                text: () => {
                    return text;
                }
            });
            clipboard.on('success', function (e) {
                console.log('复制成功');
            });
            clipboard.on('error', function (e) {
                console.log(e);
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-help.vue?vue&type=style&index=0&id=2c20c9da&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-help.vue?vue&type=style&index=0&id=2c20c9da&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/edit/el-popover-help.vue":
/*!*************************************************!*\
  !*** ./src/components/edit/el-popover-help.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _el_popover_help_vue_vue_type_template_id_2c20c9da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el-popover-help.vue?vue&type=template&id=2c20c9da&scoped=true& */ "./src/components/edit/el-popover-help.vue?vue&type=template&id=2c20c9da&scoped=true&");
/* harmony import */ var _el_popover_help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./el-popover-help.vue?vue&type=script&lang=js& */ "./src/components/edit/el-popover-help.vue?vue&type=script&lang=js&");
/* harmony import */ var _el_popover_help_vue_vue_type_style_index_0_id_2c20c9da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./el-popover-help.vue?vue&type=style&index=0&id=2c20c9da&scoped=true&lang=css& */ "./src/components/edit/el-popover-help.vue?vue&type=style&index=0&id=2c20c9da&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _el_popover_help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _el_popover_help_vue_vue_type_template_id_2c20c9da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _el_popover_help_vue_vue_type_template_id_2c20c9da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c20c9da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/edit/el-popover-help.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/edit/el-popover-help.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/components/edit/el-popover-help.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./el-popover-help.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-help.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/edit/el-popover-help.vue?vue&type=style&index=0&id=2c20c9da&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./src/components/edit/el-popover-help.vue?vue&type=style&index=0&id=2c20c9da&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_help_vue_vue_type_style_index_0_id_2c20c9da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./el-popover-help.vue?vue&type=style&index=0&id=2c20c9da&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-help.vue?vue&type=style&index=0&id=2c20c9da&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/edit/el-popover-help.vue?vue&type=template&id=2c20c9da&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/components/edit/el-popover-help.vue?vue&type=template&id=2c20c9da&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_help_vue_vue_type_template_id_2c20c9da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_help_vue_vue_type_template_id_2c20c9da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_help_vue_vue_type_template_id_2c20c9da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./el-popover-help.vue?vue&type=template&id=2c20c9da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-help.vue?vue&type=template&id=2c20c9da&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-help.vue?vue&type=template&id=2c20c9da&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-help.vue?vue&type=template&id=2c20c9da&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "el-popover-help" },
    [
      _c(
        "el-popover",
        { attrs: { placement: "right", width: "300", trigger: "hover" } },
        [
          _c(
            "div",
            { staticClass: "help-group" },
            _vm._l(_vm.helpers, function(helper) {
              return _c("div", { key: helper.name, staticClass: "help-item" }, [
                _c("a", [_vm._v(_vm._s(helper.name))]),
                _vm._v(" "),
                _c("a", [_vm._v(_vm._s(helper.text))]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    class: helper.name,
                    attrs: { "data-clipboard-action": "copy" },
                    on: {
                      click: function($event) {
                        return _vm.copy(helper.name, helper.text)
                      }
                    }
                  },
                  [_vm._v("复制")]
                )
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("a", {
            staticClass: "iconfont icon-bangzhu",
            attrs: { slot: "reference" },
            slot: "reference"
          })
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvZWRpdC9lbC1wb3BvdmVyLWhlbHAudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2VkaXQvZWwtcG9wb3Zlci1oZWxwLnZ1ZT82MDA5Iiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2VkaXQvZWwtcG9wb3Zlci1oZWxwLnZ1ZT8yN2U3Iiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2VkaXQvZWwtcG9wb3Zlci1oZWxwLnZ1ZT8wZDkzIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2VkaXQvZWwtcG9wb3Zlci1oZWxwLnZ1ZT8zODBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBLHNCQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUZBLGFBREEsRUFLQTtBQUNBLDBCQURBO0FBRUE7QUFGQSxhQUxBLEVBU0E7QUFDQSwwQkFEQTtBQUVBO0FBRkEsYUFUQSxFQVlBO0FBQ0EsNkJBREE7QUFFQTtBQUZBLGFBWkEsRUFnQkE7QUFDQSwyQkFEQTtBQUVBO0FBRkEsYUFoQkEsRUFvQkE7QUFDQSwwQkFEQTtBQUVBO0FBRkEsYUFwQkEsRUF3QkE7QUFDQSwwQkFEQTtBQUVBO0FBRkEsYUF4QkEsRUE0QkE7QUFDQSw0QkFEQTtBQUVBO0FBRkEsYUE1QkEsRUFnQ0E7QUFDQSw0QkFEQTtBQUVBO0FBRkEsYUFoQ0E7QUFEQTtBQXVDQSxLQXpDQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBLGFBRkE7QUFHQTtBQUNBO0FBQ0EsYUFGQTtBQUdBO0FBdkJBO0FBMUNBLEc7Ozs7Ozs7Ozs7OztBQ25CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEc7QUFDdkM7QUFDTDtBQUM5RCxDQUFtRzs7O0FBR25HO0FBQzZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q21NLENBQUMsaUVBQWUsMk1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXRPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssaUNBQWlDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxxREFBcUQsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QztBQUNBLGdDQUFnQyw2Q0FBNkM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQ0FBa0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19lZGl0X2VsLXBvcG92ZXItaGVscF92dWUuNGMxNGEzMWQyN2JjYjg5OWNhODYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZWwtcG9wb3Zlci1oZWxwXCI+XHJcbiAgICAgICAgPGVsLXBvcG92ZXJcclxuICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtaXRlbVwiIHYtZm9yPVwiaGVscGVyIGluIGhlbHBlcnNcIiA6a2V5PVwiaGVscGVyLm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT57e2hlbHBlci5uYW1lfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+e3toZWxwZXIudGV4dH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1jbGlwYm9hcmQtYWN0aW9uPVwiY29weVwiIDpjbGFzcz1cImhlbHBlci5uYW1lXCIgQGNsaWNrPVwiY29weShoZWxwZXIubmFtZSxoZWxwZXIudGV4dClcIj7lpI3liLY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGEgc2xvdD1cInJlZmVyZW5jZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1iYW5nemh1XCI+PC9hPlxyXG4gICAgICAgIDwvZWwtcG9wb3Zlcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgaGVscGVyczpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTon5Yqg57KXJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OicqKuS9oOeahOWGheWuuSoqJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOifmlpzkvZMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6JyrkvaDnmoTlhoXlrrkqJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOifmoIfpopgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6J+m7mOiupOS4umgxLCPlvIDlpLQnXHJcbiAgICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOidoMi1oNScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDonIyp7MS01fSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTon5Luj56CB5Z2XJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OidgYGDkvaDnmoTlhoXlrrlgYGAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6J+mTvuaOpScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDonW+aYvuekuuWGheWuuV0o6ZO+5o6ldXJsKSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTon5Zu+54mHJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OichW2FsdF0o5Zu+54mHdXJsKSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTon5pyJ5bqP5YiX6KGoJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OicxLiBcXFxcbjIuIFxcXFxuMy4gJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOifml6Dluo/liJfooagnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6JysgXFxcXG4rIFxcXFxuKyAnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgLy/kuovku7bku6PnkIZcclxuICAgICAgICBldmVudFByb3h5KGUsZG9tKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuPWRvbS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxjaGlsZHJlbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldPT09ZS50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29weShuYW1lLHRleHQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lLHRleHQpXHJcbiAgICAgICAgICAgIGxldCBjbGlwYm9hcmQ9bmV3IENsaXBib2FyZEpTKCcuJytuYW1lLHtcclxuICAgICAgICAgICAgICAgIHRleHQ6KCk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNsaXBib2FyZC5vbignc3VjY2VzcycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5aSN5Yi25oiQ5YqfJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNsaXBib2FyZC5vbignZXJyb3InLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmVsLXBvcG92ZXItaGVscHtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWxwLWdyb3Vwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5oZWxwLWl0ZW17XHJcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5oZWxwLWl0ZW0gYTpmaXJzdC1jaGlsZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaGVscC1pdGVtIGE6bnRoLWNoaWxkKDIpe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmhlbHAtaXRlbSBidXR0b257XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmhlbHAtaXRlbSBidXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogIzAwYzk3ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuPC9zdHlsZT4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2VsLXBvcG92ZXItaGVscC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmMyMGM5ZGEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZWwtcG9wb3Zlci1oZWxwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZWwtcG9wb3Zlci1oZWxwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9lbC1wb3BvdmVyLWhlbHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmMyMGM5ZGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJjMjBjOWRhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGVsbFxcXFxEZXNrdG9wXFxcXE15LUlkZWFcXFxcTXlCbG9nXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJjMjBjOWRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJjMjBjOWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJjMjBjOWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9lbC1wb3BvdmVyLWhlbHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjMjBjOWRhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJjMjBjOWRhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9lZGl0L2VsLXBvcG92ZXItaGVscC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lbC1wb3BvdmVyLWhlbHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lbC1wb3BvdmVyLWhlbHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZWwtcG9wb3Zlci1oZWxwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJlbC1wb3BvdmVyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgcGxhY2VtZW50OiBcInJpZ2h0XCIsIHdpZHRoOiBcIjMwMFwiLCB0cmlnZ2VyOiBcImhvdmVyXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoZWxwLWdyb3VwXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uaGVscGVycywgZnVuY3Rpb24oaGVscGVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaGVscGVyLm5hbWUsIHN0YXRpY0NsYXNzOiBcImhlbHAtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihfdm0uX3MoaGVscGVyLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKGhlbHBlci50ZXh0KSldKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGhlbHBlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtY2xpcGJvYXJkLWFjdGlvblwiOiBcImNvcHlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY29weShoZWxwZXIubmFtZSwgaGVscGVyLnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWkjeWItlwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tYmFuZ3podVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJyZWZlcmVuY2VcIiB9LFxuICAgICAgICAgICAgc2xvdDogXCJyZWZlcmVuY2VcIlxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=