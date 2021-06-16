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
        async recommandBlogs() {
            await this.subjectList.forEach(item => {
                item.selected = 'not-selected';
            });
            this.showBlogList = this.blogList;
            this.recommandClass = 'selected';
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
            this.showBlogList = this.blogList.filter(item => {
                if (item.subjects) {
                    return item.subjects.some(value => value.id === id);
                }
                return false;
            });
            this.recommandClass = 'not-selected';
            this.subjectList.filter(item => item.id === id)[0].selected = 'selected';
            this.subjectList.filter(item => item.id !== id).forEach(item => item.selected = 'not-selected');
        },
        getBlogList() {
            let that = this;
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/blogs'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvbWFpbi9ibG9nLWxpc3QudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jc3MvbWFpbi9ibG9nLWxpc3QuY3NzP2M0ODEiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9ibG9nLWxpc3QudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL21haW4vYmxvZy1saXN0LnZ1ZT85OWRiIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL21haW4vYmxvZy1saXN0LnZ1ZT85NTBhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSw0QkFGQTtBQUdBLDJCQUhBO0FBSUE7QUFKQTtBQU1BLEtBWkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkE7QUFHQTtBQUNBO0FBQ0EsU0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUE7QUFGQSxlQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUZBO0FBR0EsYUFSQTtBQVNBLFNBbkJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQSxTQTlCQTtBQStCQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBRkEsZUFHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQTtBQUZBLG1CQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFaQTtBQWFBLGFBbEJBO0FBbUJBLFNBcERBO0FBcURBO0FBQ0E7QUFDQSxTQXZEQTtBQXdEQTtBQUNBO0FBQ0EsU0ExREE7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwRUE7QUFiQSxHOzs7Ozs7Ozs7Ozs7QUM1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9HO0FBQ3ZDO0FBQ0w7QUFDeEQsQ0FBMEc7OztBQUcxRztBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkM2TCxDQUFDLGlFQUFlLHFNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FoTztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQ0FBcUM7QUFDekQ7QUFDQTtBQUNBLE9BQU8sOEJBQThCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSwwQkFBMEIsOENBQThDO0FBQ3hFLHFCQUFxQiw0QkFBNEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtCQUErQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRCxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19tYWluX2Jsb2ctbGlzdF92dWUuOGEwY2VmNTMyMzkyZTMyYjY0YTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvZy1saXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWJqZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgPGEgOmNsYXNzPVwiWydyZWNvbW1hbmQtYmxvZ3MnLHJlY29tbWFuZENsYXNzXVwiIEBjbGljaz1cInJlY29tbWFuZEJsb2dzXCI+5o6o6I2QPC9hPlxyXG4gICAgICAgICAgICA8YSA6Y2xhc3M9XCJbc3ViLnNlbGVjdGVkXVwiIHYtZm9yPVwic3ViIGluIHN1YmplY3RMaXN0XCIgOmtleT1cInN1Yi5pZFwiIEBjbGljaz1cImdldEJsb2dzQnlTdWJqZWN0SWQoc3ViLmlkKVwiPlxyXG4gICAgICAgICAgICAgICAge3tzdWIubmFtZX19XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJtb3JlLXN1YlwiPuafpeeci+abtOWkmjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJibG9nIGluIHNob3dCbG9nTGlzdFwiIDprZXk9XCJibG9nLmlkXCIgY2xhc3M9XCJibG9nLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJ0b0Jsb2coYmxvZy5pZClcIj57e2Jsb2cudGl0bGV9fTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctc3ViamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInN1Yi1pdGVtXCIgdi1mb3I9XCJzdWIgaW4gYmxvZy5zdWJqZWN0c1wiIDprZXk9XCJzdWIuaWRcIiBAY2xpY2s9XCJnZXRCbG9nc0J5U3ViamVjdElkKHN1Yi5pZClcIj57e3N1Yi5uYW1lfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9nLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYmxvZy10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1zaGlqaWFuc2hpXCIgc3R5bGU9XCJjb2xvcjp5ZWxsb3c7XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2Jsb2cudGltZX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYmxvZy1yZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1saXVsYW5cIiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2Jsb2cucmVhZGluZ319XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYmxvZy1lZGl0XCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtcIiBAY2xpY2s9XCJ0b0VkaXQoYmxvZy5pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWJpYW5qaVwiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg57yW6L6RXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXJ0aWNsZS1kZWxldGVcIiBzdHlsZT1cImN1cnNvcjpwb2ludGVyO1wiIEBjbGljaz1cImRlbGV0ZUJsb2coYmxvZy5pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWJpYW5qaVwiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Yig6ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uLy4uL2Nzcy9tYWluL2Jsb2ctbGlzdC5jc3NcIj5cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNyZWF0ZWQoKXtcclxuICAgICAgICB0aGlzLmdldEJsb2dMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRTdWJqZWN0TGlzdCgpO1xyXG4gICAgfSxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBibG9nTGlzdDpbXSxcclxuICAgICAgICAgICAgc2hvd0Jsb2dMaXN0OltdLFxyXG4gICAgICAgICAgICBzdWJqZWN0TGlzdDpbXSxcclxuICAgICAgICAgICAgcmVjb21tYW5kQ2xhc3M6J3NlbGVjdGVkJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgICBhc3luYyByZWNvbW1hbmRCbG9ncygpe1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN1YmplY3RMaXN0LmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZWxlY3RlZD0nbm90LXNlbGVjdGVkJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Jsb2dMaXN0PXRoaXMuYmxvZ0xpc3Q7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb21tYW5kQ2xhc3M9J3NlbGVjdGVkJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN1YmplY3RMaXN0KCl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDonaHR0cDovLzQyLjE5Mi4xODAuMTQyOjMwMDAvc3ViamVjdHMnXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHRoYXQuc3ViamVjdExpc3Q9cmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnN1YmplY3RMaXN0LmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJHNldChpdGVtLCdzZWxlY3RlZCcsJ25vdC1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRCbG9nc0J5U3ViamVjdElkKGlkKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93QmxvZ0xpc3Q9dGhpcy5ibG9nTGlzdC5maWx0ZXIoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5zdWJqZWN0cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc3ViamVjdHMuc29tZSh2YWx1ZT0+dmFsdWUuaWQ9PT1pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnJlY29tbWFuZENsYXNzPSdub3Qtc2VsZWN0ZWQnO1xyXG4gICAgICAgICAgICB0aGlzLnN1YmplY3RMaXN0LmZpbHRlcihpdGVtPT5pdGVtLmlkPT09aWQpWzBdLnNlbGVjdGVkPSdzZWxlY3RlZCc7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdExpc3QuZmlsdGVyKGl0ZW09Pml0ZW0uaWQhPT1pZCkuZm9yRWFjaChpdGVtPT5pdGVtLnNlbGVjdGVkPSdub3Qtc2VsZWN0ZWQnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QmxvZ0xpc3QoKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9ibG9ncydcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhhdC5ibG9nTGlzdD1yZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9ibG9nLXN1YnMnXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcz1yZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoYXQuYmxvZ0xpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wPXJlcy5maWx0ZXIoaXRlbT0+aXRlbS5pZD09PXRoYXQuYmxvZ0xpc3RbaV0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0ZW1wLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJHNldCh0aGF0LmJsb2dMaXN0LGksdGVtcFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93QmxvZ0xpc3Q9dGhhdC5ibG9nTGlzdDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9CbG9nKGlkKXtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6Jy9ibG9ncy8nK2lkfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b0VkaXQoaWQpe1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDonL2VkaXQnLHF1ZXJ5OntpZDppZCx0eXBlOidlZGl0J319KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZUJsb2coaWQpe1xyXG4gICAgICAgICAgICAvLyBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICAvLyB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgIC8vICAgICBtZXRob2Q6J0RFTEVURScsXHJcbiAgICAgICAgICAgIC8vICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2FydGljbGVzLycraWRcclxuICAgICAgICAgICAgLy8gfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoYXQuZ2V0QXJ0aWNsZUxpc3QoKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ibG9nLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyZDY0MGJhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Jsb2ctbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Jsb2ctbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4uLy4uL2Nzcy9tYWluL2Jsb2ctbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMmQ2NDBiYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzJkNjQwYmFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEZWxsXFxcXERlc2t0b3BcXFxcTXktSWRlYVxcXFxNeUJsb2dcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzJkNjQwYmEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzJkNjQwYmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzJkNjQwYmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Jsb2ctbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzJkNjQwYmEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzJkNjQwYmEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL21haW4vYmxvZy1saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jsb2ctbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jsb2ctbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy1saXN0LWNvbnRhaW5lclwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInN1YmplY3QtbGlzdFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzOiBbXCJyZWNvbW1hbmQtYmxvZ3NcIiwgX3ZtLnJlY29tbWFuZENsYXNzXSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucmVjb21tYW5kQmxvZ3MgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuaOqOiNkFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5zdWJqZWN0TGlzdCwgZnVuY3Rpb24oc3ViKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogc3ViLmlkLFxuICAgICAgICAgICAgICBjbGFzczogW3N1Yi5zZWxlY3RlZF0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRCbG9nc0J5U3ViamVjdElkKHN1Yi5pZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3Moc3ViLm5hbWUpICsgXCJcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJtb3JlLXN1YlwiIH0sIFtfdm0uX3YoXCLmn6XnnIvmm7TlpJpcIildKVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9nLWxpc3RcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5zaG93QmxvZ0xpc3QsIGZ1bmN0aW9uKGJsb2cpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBibG9nLmlkLCBzdGF0aWNDbGFzczogXCJibG9nLWxpc3QtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2ctdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvQmxvZyhibG9nLmlkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoYmxvZy50aXRsZSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9nLXN1YmplY3RzXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChibG9nLnN1YmplY3RzLCBmdW5jdGlvbihzdWIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogc3ViLmlkLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3ViLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldEJsb2dzQnlTdWJqZWN0SWQoc3ViLmlkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhzdWIubmFtZSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9nLWRldGFpbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2ctdGltZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLXNoaWppYW5zaGlcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJ5ZWxsb3dcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhibG9nLnRpbWUpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2ctcmVhZGluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWxpdWxhblwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMTRweFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKGJsb2cucmVhZGluZykgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmxvZy1lZGl0XCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9FZGl0KGJsb2cuaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1iaWFuamlcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOe8lui+kVxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhcnRpY2xlLWRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGN1cnNvcjogXCJwb2ludGVyXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZUJsb2coYmxvZy5pZClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWJpYW5qaVwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5Yig6ZmkXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH0pLFxuICAgICAgMFxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9