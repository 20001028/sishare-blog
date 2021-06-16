(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_edit_el-dialog-subject_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-subject.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-subject.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    props: ['subjectDialog', 'blogSubjects'],
    async created() {
        await this.getAllSubjects();
    },
    data() {
        return {
            allSubjects: []
        };
    },
    methods: {
        getAllSubjects() {
            let that = this;
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/subjects'
            }).then(res => {
                that.allSubjects = res.data;
            });
        },
        addSubjectToBlog(id) {
            let that = this;
            if (that.blogSubjects.length >= 5) return;
            let filters = that.blogSubjects.filter(item => item.id === id);
            if (filters.length > 0) return;
            that.blogSubjects.push(...that.allSubjects.filter(item => item.id === id));
            that.$axios({
                method: 'POST',
                url: 'http://42.192.180.142:3000/blog-subs',
                data: {
                    blogId: that.$route.query.id,
                    subId: id
                }
            }).then(res => {
                console.log(res);
            });
        },
        deleteSubjectFromBlog(id) {
            let that = this;
            let index = 0;
            that.blogSubjects.map((item, i) => {
                if (item.id === id) index = i;
            });
            that.blogSubjects.splice(index, 1);
            that.$axios({
                method: 'DELETE',
                url: 'http://42.192.180.142:3000/subjects/' + that.$route.query.id + '/' + id
            }).then(res => {
                console.log(res);
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-subject.vue?vue&type=style&index=0&id=eb847650&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-subject.vue?vue&type=style&index=0&id=eb847650&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/edit/el-dialog-subject.vue":
/*!***************************************************!*\
  !*** ./src/components/edit/el-dialog-subject.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _el_dialog_subject_vue_vue_type_template_id_eb847650_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el-dialog-subject.vue?vue&type=template&id=eb847650&scoped=true& */ "./src/components/edit/el-dialog-subject.vue?vue&type=template&id=eb847650&scoped=true&");
/* harmony import */ var _el_dialog_subject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./el-dialog-subject.vue?vue&type=script&lang=js& */ "./src/components/edit/el-dialog-subject.vue?vue&type=script&lang=js&");
/* harmony import */ var _el_dialog_subject_vue_vue_type_style_index_0_id_eb847650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./el-dialog-subject.vue?vue&type=style&index=0&id=eb847650&scoped=true&lang=css& */ "./src/components/edit/el-dialog-subject.vue?vue&type=style&index=0&id=eb847650&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _el_dialog_subject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _el_dialog_subject_vue_vue_type_template_id_eb847650_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _el_dialog_subject_vue_vue_type_template_id_eb847650_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "eb847650",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/edit/el-dialog-subject.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/edit/el-dialog-subject.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/edit/el-dialog-subject.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_el_dialog_subject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./el-dialog-subject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-subject.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_el_dialog_subject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/edit/el-dialog-subject.vue?vue&type=style&index=0&id=eb847650&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./src/components/edit/el-dialog-subject.vue?vue&type=style&index=0&id=eb847650&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_el_dialog_subject_vue_vue_type_style_index_0_id_eb847650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./el-dialog-subject.vue?vue&type=style&index=0&id=eb847650&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-subject.vue?vue&type=style&index=0&id=eb847650&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/edit/el-dialog-subject.vue?vue&type=template&id=eb847650&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/edit/el-dialog-subject.vue?vue&type=template&id=eb847650&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_dialog_subject_vue_vue_type_template_id_eb847650_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_dialog_subject_vue_vue_type_template_id_eb847650_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_el_dialog_subject_vue_vue_type_template_id_eb847650_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./el-dialog-subject.vue?vue&type=template&id=eb847650&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-subject.vue?vue&type=template&id=eb847650&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-subject.vue?vue&type=template&id=eb847650&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/el-dialog-subject.vue?vue&type=template&id=eb847650&scoped=true& ***!
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
    "el-dialog",
    {
      attrs: {
        title: _vm.subjectDialog.title,
        visible: _vm.subjectDialog.visible,
        width: "50%"
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.subjectDialog, "visible", $event)
        }
      }
    },
    [
      _c("div", { staticClass: "subjects-container" }, [
        _c("a", [_vm._v("所有专题")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "all-subjects" },
          _vm._l(_vm.allSubjects, function(sub) {
            return _c("div", { key: sub.id, staticClass: "sub-item" }, [
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      return _vm.addSubjectToBlog(sub.id)
                    }
                  }
                },
                [_vm._v(_vm._s(sub.name))]
              ),
              _vm._v(" "),
              _c("a", { staticClass: "subject-delete iconfont icon-shanchu" })
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c("a", [_vm._v("我的专题(至少添加一个)")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "my-subjects" },
          _vm._l(_vm.blogSubjects, function(sub) {
            return _c("div", { key: sub.id, staticClass: "sub-item" }, [
              _c("a", [_vm._v(_vm._s(sub.name))]),
              _vm._v(" "),
              _c("a", {
                staticClass: "subject-delete iconfont icon-shanchu",
                on: {
                  click: function($event) {
                    return _vm.deleteSubjectFromBlog(sub.id)
                  }
                }
              })
            ])
          }),
          0
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvZWRpdC9lbC1kaWFsb2ctc3ViamVjdC52dWUiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvZWRpdC9lbC1kaWFsb2ctc3ViamVjdC52dWU/ZDc3MCIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9lZGl0L2VsLWRpYWxvZy1zdWJqZWN0LnZ1ZT80ZGExIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2VkaXQvZWwtZGlhbG9nLXN1YmplY3QudnVlPzE0ZGIiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvZWRpdC9lbC1kaWFsb2ctc3ViamVjdC52dWU/OTEwYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBLDRDQURBO0FBRUE7QUFDQTtBQUNBLEtBSkE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEtBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUE7QUFGQSxlQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0EsYUFMQTtBQU1BLFNBVEE7QUFVQTtBQUNBO0FBQ0EsK0NBQ0E7QUFDQTtBQUNBLG9DQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsMkRBRkE7QUFHQTtBQUNBLGdEQURBO0FBRUE7QUFGQTtBQUhBLGVBT0EsSUFQQSxDQU9BO0FBQ0E7QUFDQSxhQVRBO0FBVUEsU0E1QkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FDQTtBQUNBLGFBSEE7QUFJQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBLGVBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQSxhQUxBO0FBTUE7QUEzQ0E7QUFWQSxHOzs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRHO0FBQ3ZDO0FBQ0w7QUFDaEUsQ0FBcUc7OztBQUdyRztBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUscUdBQU07QUFDUixFQUFFLDhHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNxTSxDQUFDLGlFQUFlLDZNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F4TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIsb0NBQW9DO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekM7QUFDQSw4QkFBOEIsdUNBQXVDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFzRDtBQUM3RTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkJBQTZCO0FBQ3hDO0FBQ0EsOEJBQThCLHVDQUF1QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19lZGl0X2VsLWRpYWxvZy1zdWJqZWN0X3Z1ZS5jZDcwN2I3NzU4NDEwM2U0ZWEyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxlbC1kaWFsb2dcclxuICAgICAgICA6dGl0bGU9XCJzdWJqZWN0RGlhbG9nLnRpdGxlXCJcclxuICAgICAgICA6dmlzaWJsZS5zeW5jPVwic3ViamVjdERpYWxvZy52aXNpYmxlXCJcclxuICAgICAgICB3aWR0aD1cIjUwJVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWJqZWN0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGE+5omA5pyJ5LiT6aKYPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxsLXN1YmplY3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwic3ViIGluIGFsbFN1YmplY3RzXCIgOmtleT1cInN1Yi5pZFwiIGNsYXNzPVwic3ViLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJhZGRTdWJqZWN0VG9CbG9nKHN1Yi5pZClcIj57e3N1Yi5uYW1lfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzdWJqZWN0LWRlbGV0ZSBpY29uZm9udCBpY29uLXNoYW5jaHVcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxhPuaIkeeahOS4k+mimCjoh7PlsJHmt7vliqDkuIDkuKopPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktc3ViamVjdHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJzdWIgaW4gYmxvZ1N1YmplY3RzXCIgOmtleT1cInN1Yi5pZFwiIGNsYXNzPVwic3ViLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT57e3N1Yi5uYW1lfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzdWJqZWN0LWRlbGV0ZSBpY29uZm9udCBpY29uLXNoYW5jaHVcIiBAY2xpY2s9XCJkZWxldGVTdWJqZWN0RnJvbUJsb2coc3ViLmlkKVwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZWwtZGlhbG9nPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6WydzdWJqZWN0RGlhbG9nJywnYmxvZ1N1YmplY3RzJ10sXHJcbiAgICBhc3luYyBjcmVhdGVkKCl7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRBbGxTdWJqZWN0cygpO1xyXG4gICAgfSxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIGFsbFN1YmplY3RzOltdLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgICBnZXRBbGxTdWJqZWN0cygpe1xyXG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL3N1YmplY3RzJ1xyXG4gICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICB0aGF0LmFsbFN1YmplY3RzPXJlcy5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZFN1YmplY3RUb0Jsb2coaWQpe1xyXG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICBpZih0aGF0LmJsb2dTdWJqZWN0cy5sZW5ndGg+PTUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJzPXRoYXQuYmxvZ1N1YmplY3RzLmZpbHRlcihpdGVtPT5pdGVtLmlkPT09aWQpO1xyXG4gICAgICAgICAgICBpZihmaWx0ZXJzLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGF0LmJsb2dTdWJqZWN0cy5wdXNoKC4uLnRoYXQuYWxsU3ViamVjdHMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQ9PT1pZCkpO1xyXG4gICAgICAgICAgICB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9ibG9nLXN1YnMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvZ0lkOnRoYXQuJHJvdXRlLnF1ZXJ5LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YklkOmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlU3ViamVjdEZyb21CbG9nKGlkKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgbGV0IGluZGV4PTA7XHJcbiAgICAgICAgICAgIHRoYXQuYmxvZ1N1YmplY3RzLm1hcCgoaXRlbSxpKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5pZD09PWlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4PWk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGF0LmJsb2dTdWJqZWN0cy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDonaHR0cDovLzQyLjE5Mi4xODAuMTQyOjMwMDAvc3ViamVjdHMvJyt0aGF0LiRyb3V0ZS5xdWVyeS5pZCsnLycraWQsXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uc3ViamVjdHMtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIGNvbG9yOiAjMDBjOTdlO1xyXG59XHJcblxyXG4uc3ViamVjdHMtY29udGFpbmVyID4gYXtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGNvbG9yOiAjMDA0YTJlO1xyXG59XHJcblxyXG4ubXktc3ViamVjdHMsLmFsbC1zdWJqZWN0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uc3ViLWl0ZW17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMSwgMjEzLCAyMTMpO1xyXG4gICAgcGFkZGluZzogMCUgMC41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnN1YmplY3RzLWNvbnRhaW5lciAuc3ViLWl0ZW06aG92ZXIgLnN1YmplY3QtZGVsZXRle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zdWItaXRlbSBhOmZpcnN0LWNoaWxke1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItaXRlbSAuc3ViamVjdC1kZWxldGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMCUgMC4yNXJlbTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9lbC1kaWFsb2ctc3ViamVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWI4NDc2NTAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZWwtZGlhbG9nLXN1YmplY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9lbC1kaWFsb2ctc3ViamVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZWwtZGlhbG9nLXN1YmplY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWI4NDc2NTAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImViODQ3NjUwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGVsbFxcXFxEZXNrdG9wXFxcXE15LUlkZWFcXFxcTXlCbG9nXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ViODQ3NjUwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ViODQ3NjUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ViODQ3NjUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9lbC1kaWFsb2ctc3ViamVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWI4NDc2NTAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWI4NDc2NTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2VkaXQvZWwtZGlhbG9nLXN1YmplY3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZWwtZGlhbG9nLXN1YmplY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lbC1kaWFsb2ctc3ViamVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZWwtZGlhbG9nXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdGl0bGU6IF92bS5zdWJqZWN0RGlhbG9nLnRpdGxlLFxuICAgICAgICB2aXNpYmxlOiBfdm0uc3ViamVjdERpYWxvZy52aXNpYmxlLFxuICAgICAgICB3aWR0aDogXCI1MCVcIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwidXBkYXRlOnZpc2libGVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS5zdWJqZWN0RGlhbG9nLCBcInZpc2libGVcIiwgJGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1YmplY3RzLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCLmiYDmnInkuJPpophcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFsbC1zdWJqZWN0c1wiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5hbGxTdWJqZWN0cywgZnVuY3Rpb24oc3ViKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHN1Yi5pZCwgc3RhdGljQ2xhc3M6IFwic3ViLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZFN1YmplY3RUb0Jsb2coc3ViLmlkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhzdWIubmFtZSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJzdWJqZWN0LWRlbGV0ZSBpY29uZm9udCBpY29uLXNoYW5jaHVcIiB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwi5oiR55qE5LiT6aKYKOiHs+Wwkea3u+WKoOS4gOS4qilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm15LXN1YmplY3RzXCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmJsb2dTdWJqZWN0cywgZnVuY3Rpb24oc3ViKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHN1Yi5pZCwgc3RhdGljQ2xhc3M6IFwic3ViLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KF92bS5fcyhzdWIubmFtZSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3ViamVjdC1kZWxldGUgaWNvbmZvbnQgaWNvbi1zaGFuY2h1XCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVTdWJqZWN0RnJvbUJsb2coc3ViLmlkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=