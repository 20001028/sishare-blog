(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_edit_el-dialog-link_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-link.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-link.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    props: ['linkDialog', 'handleTextarea'],
    created() {},
    data: function () {
        return {};
    },
    methods: {
        cancelInsert() {
            this.linkDialog.text = '';
            this.linkDialog.href = '';
            this.linkDialog.visible = false;
        },
        insertLink() {
            let type = this.linkDialog.type === 'link' ? '' : '!'; //判断是链接还是图片
            let method = (textarea, startPos, value) => {
                textarea.value = value.substring(0, startPos) + type + '[' + this.linkDialog.text + ']' + '(' + this.linkDialog.href + ')' + value.substring(startPos, value.length);
            };
            this.handleTextarea(method);
            //关闭对话框
            this.linkDialog.visible = false;
            //将对话框内部内容清除，避免污染下次打开
            this.linkDialog.text = '';
            this.linkDialog.href = '';
        }
    }
});

/***/ }),

/***/ "./src/components/edit/el-dialog-link.vue":
/*!************************************************!*\
  !*** ./src/components/edit/el-dialog-link.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _el_dialog_link_vue_vue_type_template_id_6e8eca04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el-dialog-link.vue?vue&type=template&id=6e8eca04& */ "./src/components/edit/el-dialog-link.vue?vue&type=template&id=6e8eca04&");
/* harmony import */ var _el_dialog_link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./el-dialog-link.vue?vue&type=script&lang=js& */ "./src/components/edit/el-dialog-link.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _el_dialog_link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _el_dialog_link_vue_vue_type_template_id_6e8eca04___WEBPACK_IMPORTED_MODULE_0__.render,
  _el_dialog_link_vue_vue_type_template_id_6e8eca04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/edit/el-dialog-link.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/edit/el-dialog-link.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/edit/el-dialog-link.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_el_dialog_link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./el-dialog-link.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-link.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_el_dialog_link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/edit/el-dialog-link.vue?vue&type=template&id=6e8eca04&":
/*!*******************************************************************************!*\
  !*** ./src/components/edit/el-dialog-link.vue?vue&type=template&id=6e8eca04& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_dialog_link_vue_vue_type_template_id_6e8eca04___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_dialog_link_vue_vue_type_template_id_6e8eca04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_dialog_link_vue_vue_type_template_id_6e8eca04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./el-dialog-link.vue?vue&type=template&id=6e8eca04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-link.vue?vue&type=template&id=6e8eca04&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-link.vue?vue&type=template&id=6e8eca04&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-link.vue?vue&type=template&id=6e8eca04& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "el-dialog",
    {
      attrs: {
        title: _vm.linkDialog.title,
        visible: _vm.linkDialog.visible,
        width: "50%"
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.linkDialog, "visible", $event)
        }
      }
    },
    [
      _c(
        "el-input",
        {
          attrs: { placeholder: "请输入内容" },
          model: {
            value: _vm.linkDialog.text,
            callback: function($$v) {
              _vm.$set(_vm.linkDialog, "text", $$v)
            },
            expression: "linkDialog.text"
          }
        },
        [_c("template", { slot: "prepend" }, [_vm._v("alt")])],
        2
      ),
      _vm._v(" "),
      _c("p", { staticStyle: { height: "10px", visibility: "hidden" } }),
      _vm._v(" "),
      _c(
        "el-input",
        {
          staticStyle: { "margin-bottom": "20px" },
          attrs: { placeholder: "请输入链接地址" },
          model: {
            value: _vm.linkDialog.href,
            callback: function($$v) {
              _vm.$set(_vm.linkDialog, "href", $$v)
            },
            expression: "linkDialog.href"
          }
        },
        [_c("template", { slot: "prepend" }, [_vm._v("link")])],
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
          _c("el-button", { on: { click: _vm.cancelInsert } }, [
            _vm._v("取 消")
          ]),
          _vm._v(" "),
          _c(
            "el-button",
            { attrs: { type: "primary" }, on: { click: _vm.insertLink } },
            [_vm._v("确 定")]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvZWRpdC9lbC1kaWFsb2ctbGluay52dWUiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvZWRpdC9lbC1kaWFsb2ctbGluay52dWUiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvZWRpdC9lbC1kaWFsb2ctbGluay52dWU/YzgwMiIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9lZGl0L2VsLWRpYWxvZy1saW5rLnZ1ZT9kN2Q5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0EsMkNBREE7QUFFQSxlQUVBLENBSkE7QUFLQTtBQUNBO0FBRUEsS0FSQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUxBO0FBTUE7QUFDQSxrRUFEQSxDQUNBO0FBQ0E7QUFDQSwwR0FDQSxHQURBLEdBQ0Esb0JBREEsR0FDQSxHQURBLEdBQ0EsdUNBREE7QUFFQSxhQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFUQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQzZGO0FBQzNCO0FBQ0w7OztBQUc3RDtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2tNLENBQUMsaUVBQWUsME1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBck87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNULHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlLHVDQUF1QyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRCxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QseUJBQXlCLGtCQUFrQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwyQkFBMkIsTUFBTSwwQkFBMEIsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLGtCQUFrQixPQUFPLHdCQUF3QixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZWRpdF9lbC1kaWFsb2ctbGlua192dWUuZjJmMzY5YzVlOTExNDFhM2I0NmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZWwtZGlhbG9nXHJcbiAgICAgICAgOnRpdGxlPVwibGlua0RpYWxvZy50aXRsZVwiXHJcbiAgICAgICAgOnZpc2libGUuc3luYz1cImxpbmtEaWFsb2cudmlzaWJsZVwiXHJcbiAgICAgICAgd2lkdGg9XCI1MCVcIj5cclxuICAgICAgICA8ZWwtaW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlhoXlrrlcIiB2LW1vZGVsPVwibGlua0RpYWxvZy50ZXh0XCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwicHJlcGVuZFwiPmFsdDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC9lbC1pbnB1dD5cclxuICAgICAgICA8cCBzdHlsZT1cIndpZHRoPTMwcHg7aGVpZ2h0OjEwcHg7dmlzaWJpbGl0eTpoaWRkZW47XCI+PC9wPlxyXG4gICAgICAgIDxlbC1pbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpemTvuaOpeWcsOWdgFwiIHYtbW9kZWw9XCJsaW5rRGlhbG9nLmhyZWZcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MjBweDtcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJwcmVwZW5kXCI+bGluazwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC9lbC1pbnB1dD5cclxuICAgICAgICA8IS0tIDxlbC11cGxvYWRcclxuICAgICAgICAgICAgdi1pZj1cImxpbmtEaWFsb2cudHlwZT09PSdpbWcnXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJ1cGxvYWQtZGVtb1wiXHJcbiAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9cIlxyXG4gICAgICAgICAgICA6b24tcHJldmlldz1cImhhbmRsZVByZXZpZXdcIlxyXG4gICAgICAgICAgICA6b24tcmVtb3ZlPVwiaGFuZGxlUmVtb3ZlXCJcclxuICAgICAgICAgICAgOmJlZm9yZS1yZW1vdmU9XCJiZWZvcmVSZW1vdmVcIlxyXG4gICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICA6bGltaXQ9XCIzXCJcclxuICAgICAgICAgICAgOm9uLWV4Y2VlZD1cImhhbmRsZUV4Y2VlZFwiXHJcbiAgICAgICAgICAgIDpmaWxlLWxpc3Q9XCJmaWxlTGlzdFwiPlxyXG4gICAgICAgICAgICA8ZWwtYnV0dG9uIHNpemU9XCJzbWFsbFwiIHR5cGU9XCJwcmltYXJ5XCI+54K55Ye75LiK5LygPC9lbC1idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgc2xvdD1cInRpcFwiIGNsYXNzPVwiZWwtdXBsb2FkX190aXBcIj7lj6rog73kuIrkvKBqcGcvcG5n5paH5Lu277yM5LiU5LiN6LaF6L+HNTAwa2I8L2Rpdj5cclxuICAgICAgICA8L2VsLXVwbG9hZD4gLS0+XHJcbiAgICAgICAgPHNwYW4gc2xvdD1cImZvb3RlclwiIGNsYXNzPVwiZGlhbG9nLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZWwtYnV0dG9uIEBjbGljaz1cImNhbmNlbEluc2VydFwiPuWPliDmtog8L2VsLWJ1dHRvbj5cclxuICAgICAgICAgICAgPGVsLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImluc2VydExpbmtcIj7noa4g5a6aPC9lbC1idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9lbC1kaWFsb2c+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczpbJ2xpbmtEaWFsb2cnLCdoYW5kbGVUZXh0YXJlYSddLFxyXG4gICAgY3JlYXRlZCgpe1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIGRhdGE6ZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIGNhbmNlbEluc2VydCgpe1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtEaWFsb2cudGV4dD0nJztcclxuICAgICAgICAgICAgdGhpcy5saW5rRGlhbG9nLmhyZWY9Jyc7XHJcbiAgICAgICAgICAgIHRoaXMubGlua0RpYWxvZy52aXNpYmxlPWZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5zZXJ0TGluaygpe1xyXG4gICAgICAgICAgICBsZXQgdHlwZT10aGlzLmxpbmtEaWFsb2cudHlwZT09PSdsaW5rJyA/ICcnIDogJyEnOy8v5Yik5pat5piv6ZO+5o6l6L+Y5piv5Zu+54mHXHJcbiAgICAgICAgICAgIGxldCBtZXRob2Q9KHRleHRhcmVhLHN0YXJ0UG9zLHZhbHVlKT0+e1xyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEudmFsdWU9dmFsdWUuc3Vic3RyaW5nKDAsc3RhcnRQb3MpK3R5cGUrJ1snK3RoaXMubGlua0RpYWxvZy50ZXh0KyddJ1xyXG4gICAgICAgICAgICAgICAgKycoJyt0aGlzLmxpbmtEaWFsb2cuaHJlZisnKScrdmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLHZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVUZXh0YXJlYShtZXRob2QpO1xyXG4gICAgICAgICAgICAvL+WFs+mXreWvueivneahhlxyXG4gICAgICAgICAgICB0aGlzLmxpbmtEaWFsb2cudmlzaWJsZT1mYWxzZTtcclxuICAgICAgICAgICAgLy/lsIblr7nor53moYblhoXpg6jlhoXlrrnmuIXpmaTvvIzpgb/lhY3msaHmn5PkuIvmrKHmiZPlvIBcclxuICAgICAgICAgICAgdGhpcy5saW5rRGlhbG9nLnRleHQ9Jyc7XHJcbiAgICAgICAgICAgIHRoaXMubGlua0RpYWxvZy5ocmVmPScnO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9lbC1kaWFsb2ctbGluay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmU4ZWNhMDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZWwtZGlhbG9nLWxpbmsudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9lbC1kaWFsb2ctbGluay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERlbGxcXFxcRGVza3RvcFxcXFxNeS1JZGVhXFxcXE15QmxvZ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ZThlY2EwNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZThlY2EwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZThlY2EwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZWwtZGlhbG9nLWxpbmsudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlOGVjYTA0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZlOGVjYTA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9lZGl0L2VsLWRpYWxvZy1saW5rLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VsLWRpYWxvZy1saW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZWwtZGlhbG9nLWxpbmsudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImVsLWRpYWxvZ1wiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHRpdGxlOiBfdm0ubGlua0RpYWxvZy50aXRsZSxcbiAgICAgICAgdmlzaWJsZTogX3ZtLmxpbmtEaWFsb2cudmlzaWJsZSxcbiAgICAgICAgd2lkdGg6IFwiNTAlXCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcInVwZGF0ZTp2aXNpYmxlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0ubGlua0RpYWxvZywgXCJ2aXNpYmxlXCIsICRldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZWwtaW5wdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeWGheWuuVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubGlua0RpYWxvZy50ZXh0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubGlua0RpYWxvZywgXCJ0ZXh0XCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImxpbmtEaWFsb2cudGV4dFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwicHJlcGVuZFwiIH0sIFtfdm0uX3YoXCJhbHRcIildKV0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwcHhcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImVsLWlucHV0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCIyMHB4XCIgfSxcbiAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCLor7fovpPlhaXpk77mjqXlnLDlnYBcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmxpbmtEaWFsb2cuaHJlZixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmxpbmtEaWFsb2csIFwiaHJlZlwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsaW5rRGlhbG9nLmhyZWZcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInByZXBlbmRcIiB9LCBbX3ZtLl92KFwibGlua1wiKV0pXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaWFsb2ctZm9vdGVyXCIsXG4gICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJmb290ZXJcIiB9LFxuICAgICAgICAgIHNsb3Q6IFwiZm9vdGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZWwtYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS5jYW5jZWxJbnNlcnQgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLlj5Yg5raIXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZWwtYnV0dG9uXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwicHJpbWFyeVwiIH0sIG9uOiB7IGNsaWNrOiBfdm0uaW5zZXJ0TGluayB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi56GuIOWumlwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=