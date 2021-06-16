(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_edit_el-popover-header_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-header.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-header.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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
        return {};
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
        emit(e) {
            let dom = document.getElementsByClassName('head-group')[0];
            let index = this.eventProxy(e, dom);
            this.$emit('insert-header', index);
        }
    }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-header.vue?vue&type=style&index=0&id=13203ae6&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-header.vue?vue&type=style&index=0&id=13203ae6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/edit/el-popover-header.vue":
/*!***************************************************!*\
  !*** ./src/components/edit/el-popover-header.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _el_popover_header_vue_vue_type_template_id_13203ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el-popover-header.vue?vue&type=template&id=13203ae6&scoped=true& */ "./src/components/edit/el-popover-header.vue?vue&type=template&id=13203ae6&scoped=true&");
/* harmony import */ var _el_popover_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./el-popover-header.vue?vue&type=script&lang=js& */ "./src/components/edit/el-popover-header.vue?vue&type=script&lang=js&");
/* harmony import */ var _el_popover_header_vue_vue_type_style_index_0_id_13203ae6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./el-popover-header.vue?vue&type=style&index=0&id=13203ae6&scoped=true&lang=css& */ "./src/components/edit/el-popover-header.vue?vue&type=style&index=0&id=13203ae6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _el_popover_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _el_popover_header_vue_vue_type_template_id_13203ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _el_popover_header_vue_vue_type_template_id_13203ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "13203ae6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/edit/el-popover-header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/edit/el-popover-header.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/edit/el-popover-header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./el-popover-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/edit/el-popover-header.vue?vue&type=style&index=0&id=13203ae6&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./src/components/edit/el-popover-header.vue?vue&type=style&index=0&id=13203ae6&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_header_vue_vue_type_style_index_0_id_13203ae6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./el-popover-header.vue?vue&type=style&index=0&id=13203ae6&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-header.vue?vue&type=style&index=0&id=13203ae6&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/edit/el-popover-header.vue?vue&type=template&id=13203ae6&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/edit/el-popover-header.vue?vue&type=template&id=13203ae6&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_header_vue_vue_type_template_id_13203ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_header_vue_vue_type_template_id_13203ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_popover_header_vue_vue_type_template_id_13203ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./el-popover-header.vue?vue&type=template&id=13203ae6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-header.vue?vue&type=template&id=13203ae6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-header.vue?vue&type=template&id=13203ae6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-popover-header.vue?vue&type=template&id=13203ae6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "el-popover-header" },
    [
      _c(
        "el-popover",
        { attrs: { placement: "right", width: "150", trigger: "hover" } },
        [
          _c("div", { staticClass: "head-group", on: { click: _vm.emit } }, [
            _c("a", [_vm._v("二级标题")]),
            _vm._v(" "),
            _c("a", [_vm._v("三级标题")]),
            _vm._v(" "),
            _c("a", [_vm._v("四级标题")]),
            _vm._v(" "),
            _c("a", [_vm._v("五级标题")]),
            _vm._v(" "),
            _c("a", [_vm._v("六级标题")])
          ]),
          _vm._v(" "),
          _c("a", {
            staticClass: "iconfont icon-biaoti",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvZWRpdC9lbC1wb3BvdmVyLWhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvZWRpdC9lbC1wb3BvdmVyLWhlYWRlci52dWU/ZWU0YSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9lZGl0L2VsLXBvcG92ZXItaGVhZGVyLnZ1ZT85NmE0Iiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2VkaXQvZWwtcG9wb3Zlci1oZWFkZXIudnVlP2I2MjUiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvZWRpdC9lbC1wb3BvdmVyLWhlYWRlci52dWU/ZDliYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFFQSxLQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUNBO0FBQ0E7QUFDQTtBQUNBLFNBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFMQSxHOzs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRHO0FBQ3ZDO0FBQ0w7QUFDaEUsQ0FBcUc7OztBQUdyRztBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUscUdBQU07QUFDUixFQUFFLDhHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNxTSxDQUFDLGlFQUFlLDZNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F4TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLG1DQUFtQztBQUN4QztBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMscURBQXFELEVBQUU7QUFDekU7QUFDQSxxQkFBcUIsaUNBQWlDLGtCQUFrQixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNyY19jb21wb25lbnRzX2VkaXRfZWwtcG9wb3Zlci1oZWFkZXJfdnVlLjUwZWRkMmMzZmU4MjM2NTliMTE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImVsLXBvcG92ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgPGVsLXBvcG92ZXJcclxuICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjE1MFwiXHJcbiAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZC1ncm91cFwiIEBjbGljaz1cImVtaXRcIj5cclxuICAgICAgICAgICAgICAgIDxhPuS6jOe6p+agh+mimDwvYT5cclxuICAgICAgICAgICAgICAgIDxhPuS4iee6p+agh+mimDwvYT5cclxuICAgICAgICAgICAgICAgIDxhPuWbm+e6p+agh+mimDwvYT5cclxuICAgICAgICAgICAgICAgIDxhPuS6lOe6p+agh+mimDwvYT5cclxuICAgICAgICAgICAgICAgIDxhPuWFree6p+agh+mimDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxhIHNsb3Q9XCJyZWZlcmVuY2VcIiBjbGFzcz1cImljb25mb250IGljb24tYmlhb3RpXCI+PC9hPlxyXG4gICAgICAgIDwvZWwtcG9wb3Zlcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgLy/kuovku7bku6PnkIZcclxuICAgICAgICBldmVudFByb3h5KGUsZG9tKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuPWRvbS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxjaGlsZHJlbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldPT09ZS50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1pdChlKXtcclxuICAgICAgICAgICAgbGV0IGRvbT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkLWdyb3VwJylbMF07XHJcbiAgICAgICAgICAgIGxldCBpbmRleD10aGlzLmV2ZW50UHJveHkoZSxkb20pO1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnNlcnQtaGVhZGVyJyxpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmVsLXBvcG92ZXItaGVhZGVye1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlYWQtZ3JvdXAgYXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5oZWFkLWdyb3VwIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzAwYzk3ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG48L3N0eWxlPiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZWwtcG9wb3Zlci1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzMjAzYWU2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2VsLXBvcG92ZXItaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZWwtcG9wb3Zlci1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2VsLXBvcG92ZXItaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzMjAzYWU2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxMzIwM2FlNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERlbGxcXFxcRGVza3RvcFxcXFxNeS1JZGVhXFxcXE15QmxvZ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxMzIwM2FlNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxMzIwM2FlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxMzIwM2FlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZWwtcG9wb3Zlci1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzMjAzYWU2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzEzMjAzYWU2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9lZGl0L2VsLXBvcG92ZXItaGVhZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VsLXBvcG92ZXItaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZWwtcG9wb3Zlci1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZWwtcG9wb3Zlci1oZWFkZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImVsLXBvcG92ZXJcIixcbiAgICAgICAgeyBhdHRyczogeyBwbGFjZW1lbnQ6IFwicmlnaHRcIiwgd2lkdGg6IFwiMTUwXCIsIHRyaWdnZXI6IFwiaG92ZXJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWQtZ3JvdXBcIiwgb246IHsgY2xpY2s6IF92bS5lbWl0IH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCLkuoznuqfmoIfpophcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIuS4iee6p+agh+mimFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwi5Zub57qn5qCH6aKYXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCLkupTnuqfmoIfpophcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIuWFree6p+agh+mimFwiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1iaWFvdGlcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwicmVmZXJlbmNlXCIgfSxcbiAgICAgICAgICAgIHNsb3Q6IFwicmVmZXJlbmNlXCJcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9