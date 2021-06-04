(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_main_blog-list_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog-list.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog-list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    created() {
        this.getBlogList();
        this.getSubjectList();
    },
    data() {
        return {
            blogList: [],
            showBlogList: [],
            subjectList: [],
            recommandClass: 'selected'
        };
    },
    methods: {
        recommandBlogs() {
            this.showBlogList = this.blogList;
            this.recommandClass = 'selected';
            this.subjectList.forEach(item => {
                item.selected = 'not-selected';
            });
        },
        getSubjectList() {
            let that = this;
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/subjects'
            }).then(res => {
                that.subjectList = res.data;
                that.subjectList.forEach(item => {
                    that.$set(item, 'selected', 'not-selected');
                });
            });
        },
        getBlogsBySubjectId(id) {
            this.recommandClass = 'not-selected';
            this.subjectList.filter(item => item.id === id)[0].selected = 'selected';
            this.subjectList.filter(item => item.id !== id).forEach(item => item.selected = 'not-selected');
            this.showBlogList = this.blogList.filter(item => {
                if (item.subjects) {
                    return item.subjects.some(value => value.id === id);
                }
                return false;
            });
        },
        getBlogList() {
            let that = this;
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/articles'
            }).then(res => {
                that.blogList = res.data;
                that.$axios({
                    method: 'GET',
                    url: 'http://42.192.180.142:3000/blog-subs'
                }).then(res => {
                    var res = res.data;
                    for (let i = 0; i < that.blogList.length; i++) {
                        let temp = res.filter(item => item.id === that.blogList[i].id);
                        if (temp.length > 0) {
                            that.$set(that.blogList, i, temp[0]);
                        }
                    }
                    that.showBlogList = that.blogList;
                });
            });
        },
        toBlog(id) {
            this.$router.push({ path: '/blogs/' + id });
        },
        toEdit(id) {
            this.$router.push({ path: '/edit', query: { id: id, type: 'edit' } });
        },
        deleteBlog(id) {
            // let that=this;
            // that.$axios({
            //     method:'DELETE',
            //     url:'http://42.192.180.142:3000/articles/'+id
            // }).then((res)=>{
            //     console.log(res);
            //     that.getArticleList();
            // })
        }
    }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main/blog-list.css?vue&type=style&index=0&id=c2d640ba&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main/blog-list.css?vue&type=style&index=0&id=c2d640ba&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/blog-list.vue":
/*!*******************************************!*\
  !*** ./src/components/main/blog-list.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blog_list_vue_vue_type_template_id_c2d640ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-list.vue?vue&type=template&id=c2d640ba&scoped=true& */ "./src/components/main/blog-list.vue?vue&type=template&id=c2d640ba&scoped=true&");
/* harmony import */ var _blog_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-list.vue?vue&type=script&lang=js& */ "./src/components/main/blog-list.vue?vue&type=script&lang=js&");
/* harmony import */ var _css_main_blog_list_css_vue_type_style_index_0_id_c2d640ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/main/blog-list.css?vue&type=style&index=0&id=c2d640ba&scoped=true&lang=css& */ "./src/css/main/blog-list.css?vue&type=style&index=0&id=c2d640ba&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _blog_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _blog_list_vue_vue_type_template_id_c2d640ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _blog_list_vue_vue_type_template_id_c2d640ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c2d640ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/blog-list.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/main/blog-list.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/main/blog-list.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./blog-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog-list.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/css/main/blog-list.css?vue&type=style&index=0&id=c2d640ba&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./src/css/main/blog-list.css?vue&type=style&index=0&id=c2d640ba&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_blog_list_css_vue_type_style_index_0_id_c2d640ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!./blog-list.css?vue&type=style&index=0&id=c2d640ba&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main/blog-list.css?vue&type=style&index=0&id=c2d640ba&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/main/blog-list.vue?vue&type=template&id=c2d640ba&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./src/components/main/blog-list.vue?vue&type=template&id=c2d640ba&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_list_vue_vue_type_template_id_c2d640ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_list_vue_vue_type_template_id_c2d640ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_list_vue_vue_type_template_id_c2d640ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./blog-list.vue?vue&type=template&id=c2d640ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog-list.vue?vue&type=template&id=c2d640ba&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog-list.vue?vue&type=template&id=c2d640ba&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog-list.vue?vue&type=template&id=c2d640ba&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "blog-list-container" }, [
    _c(
      "div",
      { staticClass: "subject-list" },
      [
        _c(
          "a",
          {
            class: ["recommand-blogs", _vm.recommandClass],
            on: { click: _vm.recommandBlogs }
          },
          [_vm._v("推荐")]
        ),
        _vm._v(" "),
        _vm._l(_vm.subjectList, function(sub) {
          return _c(
            "a",
            {
              key: sub.id,
              class: [sub.selected],
              on: {
                click: function($event) {
                  return _vm.getBlogsBySubjectId(sub.id)
                }
              }
            },
            [_vm._v("\n            " + _vm._s(sub.name) + "\n        ")]
          )
        }),
        _vm._v(" "),
        _c("a", { staticClass: "more-sub" }, [_vm._v("查看更多")])
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "blog-list" },
      _vm._l(_vm.showBlogList, function(blog) {
        return _c("div", { key: blog.id, staticClass: "blog-list-item" }, [
          _c("div", { staticClass: "blog-title" }, [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.toBlog(blog.id)
                  }
                }
              },
              [_vm._v(_vm._s(blog.title))]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "blog-subjects" },
            _vm._l(blog.subjects, function(sub) {
              return _c(
                "a",
                {
                  key: sub.id,
                  staticClass: "sub-item",
                  on: {
                    click: function($event) {
                      return _vm.getBlogsBySubjectId(sub.id)
                    }
                  }
                },
                [_vm._v(_vm._s(sub.name))]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "blog-detail" }, [
            _c("a", { staticClass: "blog-time" }, [
              _c("a", {
                staticClass: "iconfont icon-shijianshi",
                staticStyle: { color: "yellow" }
              }),
              _vm._v(
                "\n                    " +
                  _vm._s(blog.time) +
                  "\n                "
              )
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "blog-reading" }, [
              _c("a", {
                staticClass: "iconfont icon-liulan",
                staticStyle: { "font-size": "14px" }
              }),
              _vm._v(
                "\n                    " +
                  _vm._s(blog.reading) +
                  "\n                "
              )
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "blog-edit",
                staticStyle: { cursor: "pointer" },
                on: {
                  click: function($event) {
                    return _vm.toEdit(blog.id)
                  }
                }
              },
              [
                _c("a", { staticClass: "iconfont icon-bianji" }),
                _vm._v("\n                    编辑\n                ")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "article-delete",
                staticStyle: { cursor: "pointer" },
                on: {
                  click: function($event) {
                    return _vm.deleteBlog(blog.id)
                  }
                }
              },
              [
                _c("a", { staticClass: "iconfont icon-bianji" }),
                _vm._v("\n                    删除\n                ")
              ]
            )
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvbWFpbi9ibG9nLWxpc3QudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jc3MvbWFpbi9ibG9nLWxpc3QuY3NzP2M0ODEiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9ibG9nLWxpc3QudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL21haW4vYmxvZy1saXN0LnZ1ZT85OWRiIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL21haW4vYmxvZy1saXN0LnZ1ZT85NTBhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSw0QkFGQTtBQUdBLDJCQUhBO0FBSUE7QUFKQTtBQU1BLEtBWkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBO0FBR0EsU0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUE7QUFGQSxlQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUZBO0FBR0EsYUFSQTtBQVNBLFNBbkJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBTEE7QUFNQSxTQTlCQTtBQStCQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBRkEsZUFHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQTtBQUZBLG1CQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFaQTtBQWFBLGFBbEJBO0FBbUJBLFNBcERBO0FBcURBO0FBQ0E7QUFDQSxTQXZEQTtBQXdEQTtBQUNBO0FBQ0EsU0ExREE7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwRUE7QUFiQSxHOzs7Ozs7Ozs7Ozs7QUM1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9HO0FBQ3ZDO0FBQ0w7QUFDeEQsQ0FBMEc7OztBQUcxRztBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkM2TCxDQUFDLGlFQUFlLHFNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FoTztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQ0FBcUM7QUFDekQ7QUFDQTtBQUNBLE9BQU8sOEJBQThCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSwwQkFBMEIsOENBQThDO0FBQ3hFLHFCQUFxQiw0QkFBNEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtCQUErQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRCxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19tYWluX2Jsb2ctbGlzdF92dWUuYTZhNWZkNWMwZWFlMjljMWE3YmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvZy1saXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWJqZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgPGEgOmNsYXNzPVwiWydyZWNvbW1hbmQtYmxvZ3MnLHJlY29tbWFuZENsYXNzXVwiIEBjbGljaz1cInJlY29tbWFuZEJsb2dzXCI+5o6o6I2QPC9hPlxyXG4gICAgICAgICAgICA8YSA6Y2xhc3M9XCJbc3ViLnNlbGVjdGVkXVwiIHYtZm9yPVwic3ViIGluIHN1YmplY3RMaXN0XCIgOmtleT1cInN1Yi5pZFwiIEBjbGljaz1cImdldEJsb2dzQnlTdWJqZWN0SWQoc3ViLmlkKVwiPlxyXG4gICAgICAgICAgICAgICAge3tzdWIubmFtZX19XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJtb3JlLXN1YlwiPuafpeeci+abtOWkmjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJibG9nIGluIHNob3dCbG9nTGlzdFwiIDprZXk9XCJibG9nLmlkXCIgY2xhc3M9XCJibG9nLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJ0b0Jsb2coYmxvZy5pZClcIj57e2Jsb2cudGl0bGV9fTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctc3ViamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInN1Yi1pdGVtXCIgdi1mb3I9XCJzdWIgaW4gYmxvZy5zdWJqZWN0c1wiIDprZXk9XCJzdWIuaWRcIiBAY2xpY2s9XCJnZXRCbG9nc0J5U3ViamVjdElkKHN1Yi5pZClcIj57e3N1Yi5uYW1lfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9nLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYmxvZy10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1zaGlqaWFuc2hpXCIgc3R5bGU9XCJjb2xvcjp5ZWxsb3c7XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2Jsb2cudGltZX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYmxvZy1yZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1saXVsYW5cIiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2Jsb2cucmVhZGluZ319XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYmxvZy1lZGl0XCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtcIiBAY2xpY2s9XCJ0b0VkaXQoYmxvZy5pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWJpYW5qaVwiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg57yW6L6RXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXJ0aWNsZS1kZWxldGVcIiBzdHlsZT1cImN1cnNvcjpwb2ludGVyO1wiIEBjbGljaz1cImRlbGV0ZUJsb2coYmxvZy5pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWJpYW5qaVwiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Yig6ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uLy4uL2Nzcy9tYWluL2Jsb2ctbGlzdC5jc3NcIj5cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNyZWF0ZWQoKXtcclxuICAgICAgICB0aGlzLmdldEJsb2dMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRTdWJqZWN0TGlzdCgpO1xyXG4gICAgfSxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBibG9nTGlzdDpbXSxcclxuICAgICAgICAgICAgc2hvd0Jsb2dMaXN0OltdLFxyXG4gICAgICAgICAgICBzdWJqZWN0TGlzdDpbXSxcclxuICAgICAgICAgICAgcmVjb21tYW5kQ2xhc3M6J3NlbGVjdGVkJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgICByZWNvbW1hbmRCbG9ncygpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dCbG9nTGlzdD10aGlzLmJsb2dMaXN0O1xyXG4gICAgICAgICAgICB0aGlzLnJlY29tbWFuZENsYXNzPSdzZWxlY3RlZCc7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdExpc3QuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgICAgICBpdGVtLnNlbGVjdGVkPSdub3Qtc2VsZWN0ZWQnO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U3ViamVjdExpc3QoKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9zdWJqZWN0cydcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zdWJqZWN0TGlzdD1yZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc3ViamVjdExpc3QuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2V0KGl0ZW0sJ3NlbGVjdGVkJywnbm90LXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEJsb2dzQnlTdWJqZWN0SWQoaWQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlY29tbWFuZENsYXNzPSdub3Qtc2VsZWN0ZWQnO1xyXG4gICAgICAgICAgICB0aGlzLnN1YmplY3RMaXN0LmZpbHRlcihpdGVtPT5pdGVtLmlkPT09aWQpWzBdLnNlbGVjdGVkPSdzZWxlY3RlZCc7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdExpc3QuZmlsdGVyKGl0ZW09Pml0ZW0uaWQhPT1pZCkuZm9yRWFjaChpdGVtPT5pdGVtLnNlbGVjdGVkPSdub3Qtc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICB0aGlzLnNob3dCbG9nTGlzdD10aGlzLmJsb2dMaXN0LmZpbHRlcihpdGVtPT57XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnN1YmplY3RzKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5zdWJqZWN0cy5zb21lKHZhbHVlPT52YWx1ZS5pZD09PWlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEJsb2dMaXN0KCl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDonaHR0cDovLzQyLjE5Mi4xODAuMTQyOjMwMDAvYXJ0aWNsZXMnXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHRoYXQuYmxvZ0xpc3Q9cmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDonaHR0cDovLzQyLjE5Mi4xODAuMTQyOjMwMDAvYmxvZy1zdWJzJ1xyXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXM9cmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGF0LmJsb2dMaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcD1yZXMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQ9PT10aGF0LmJsb2dMaXN0W2ldLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVtcC5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZXQodGhhdC5ibG9nTGlzdCxpLHRlbXBbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd0Jsb2dMaXN0PXRoYXQuYmxvZ0xpc3Q7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvQmxvZyhpZCl7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOicvYmxvZ3MvJytpZH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9FZGl0KGlkKXtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6Jy9lZGl0JyxxdWVyeTp7aWQ6aWQsdHlwZTonZWRpdCd9fSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVCbG9nKGlkKXtcclxuICAgICAgICAgICAgLy8gbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgLy8gdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAvLyAgICAgbWV0aG9kOidERUxFVEUnLFxyXG4gICAgICAgICAgICAvLyAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9hcnRpY2xlcy8nK2lkXHJcbiAgICAgICAgICAgIC8vIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGF0LmdldEFydGljbGVMaXN0KCk7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYmxvZy1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMmQ2NDBiYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ibG9nLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ibG9nLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi8uLi9jc3MvbWFpbi9ibG9nLWxpc3QuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzJkNjQwYmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImMyZDY0MGJhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGVsbFxcXFxEZXNrdG9wXFxcXE15LUlkZWFcXFxcTXlCbG9nXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MyZDY0MGJhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MyZDY0MGJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MyZDY0MGJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ibG9nLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyZDY0MGJhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyZDY0MGJhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9tYWluL2Jsb2ctbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ibG9nLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ibG9nLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2ctbGlzdC1jb250YWluZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzdWJqZWN0LWxpc3RcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzczogW1wicmVjb21tYW5kLWJsb2dzXCIsIF92bS5yZWNvbW1hbmRDbGFzc10sXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnJlY29tbWFuZEJsb2dzIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLmjqjojZBcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uc3ViamVjdExpc3QsIGZ1bmN0aW9uKHN1Yikge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IHN1Yi5pZCxcbiAgICAgICAgICAgICAgY2xhc3M6IFtzdWIuc2VsZWN0ZWRdLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0QmxvZ3NCeVN1YmplY3RJZChzdWIuaWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKHN1Yi5uYW1lKSArIFwiXFxuICAgICAgICBcIildXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9yZS1zdWJcIiB9LCBbX3ZtLl92KFwi5p+l55yL5pu05aSaXCIpXSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy1saXN0XCIgfSxcbiAgICAgIF92bS5fbChfdm0uc2hvd0Jsb2dMaXN0LCBmdW5jdGlvbihibG9nKSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogYmxvZy5pZCwgc3RhdGljQ2xhc3M6IFwiYmxvZy1saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9nLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b0Jsb2coYmxvZy5pZClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGJsb2cudGl0bGUpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy1zdWJqZWN0c1wiIH0sXG4gICAgICAgICAgICBfdm0uX2woYmxvZy5zdWJqZWN0cywgZnVuY3Rpb24oc3ViKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHN1Yi5pZCxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1Yi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRCbG9nc0J5U3ViamVjdElkKHN1Yi5pZClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Moc3ViLm5hbWUpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy1kZXRhaWxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJibG9nLXRpbWVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1zaGlqaWFuc2hpXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwieWVsbG93XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoYmxvZy50aW1lKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJibG9nLXJlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1saXVsYW5cIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE0cHhcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhibG9nLnJlYWRpbmcpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJsb2ctZWRpdFwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGN1cnNvcjogXCJwb2ludGVyXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvRWRpdChibG9nLmlkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tYmlhbmppXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDnvJbovpFcXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXJ0aWNsZS1kZWxldGVcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjdXJzb3I6IFwicG9pbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVCbG9nKGJsb2cuaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1iaWFuamlcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWIoOmZpFxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICB9KSxcbiAgICAgIDBcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==