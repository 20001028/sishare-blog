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
    async created() {
        await this.getSubjectList();
        await this.getBlogList();
    },
    data() {
        return {
            blogList: [],
            subjectList: [],
            recommandClass: ['selected']
        };
    },
    methods: {
        //点击推荐按钮时
        async recommandBlogs() {
            await this.getBlogList();
            // 修改其他subject的样式
            this.subjectList.forEach(item => {
                item.selected = 'not-selected';
            });
            // 修改推荐的样式
            this.recommandClass = ['selected'];
        },
        getSubjectList() {
            let that = this;
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/subjects'
            }).then(res => {
                that.subjectList = res.data;
                that.subjectList.forEach(item => {
                    // 为item添加selected属性方便切换样式
                    that.$set(item, 'selected', 'not-selected');
                });
            });
        },
        // 根据subjectId获取Blog
        async getBlogsBySubjectId(id) {
            // this.showBlogList=this.blogList.filter(item=>{
            //     if(item.subjects){
            //         return item.subjects.some(value=>value.id===id);
            //     }
            //     return false;
            // });
            let res = await this.getBlogList();
            console.log(this.blogList);
            this.blogList = res.filter(item => item.subjects.some(sub => sub.id === id));
            console.log(this.blogList);
            this.recommandClass = ['not-selected'];
            this.subjectList.filter(item => item.id === id)[0].selected = 'selected';
            this.subjectList.filter(item => item.id !== id).forEach(item => item.selected = 'not-selected');
        },
        //获取所有Blog
        getBlogList() {
            let that = this;
            return that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/blogs'
            }).then(res => {
                that.blogList = res.data;
                return that.blogList;
            });
        },
        toBlog(id) {
            //跳往某篇文章
            this.$router.push({ path: '/blogs/' + id });
        },
        toEdit(id) {
            //修改某篇文章
            this.$router.push({ path: '/edit', query: { id: id, type: 'edit' } });
        },
        deleteBlog(id) {
            //删除某篇文章
            //这里要注意，filter方法并不会响应式，因此我们采用splice方法
            // 先找到下标
            let index = this.blogList.find(item => item.id === id);
            if (!index) {
                this.$message.error('请不要重复删除');
                return;
            }
            this.blogList.splice(index, 1); //删除该Blog
            console.log(this.blogList);
            let that = this;
            that.$axios({
                method: 'DELETE',
                url: 'http://42.192.180.142:3000/blogs/' + id
            }).then(res => {
                //
            });
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
            class: ["recommand-blogs"].concat(_vm.recommandClass),
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
      _vm._l(_vm.blogList, function(blog) {
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
                staticClass: "blog-delete",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvbWFpbi9ibG9nLWxpc3QudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jc3MvbWFpbi9ibG9nLWxpc3QuY3NzP2M0ODEiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9ibG9nLWxpc3QudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL21haW4vYmxvZy1saXN0LnZ1ZT85OWRiIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL21haW4vYmxvZy1saXN0LnZ1ZT85NTBhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSwyQkFGQTtBQUdBO0FBSEE7QUFLQSxLQVhBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBO0FBR0E7QUFDQTtBQUNBLFNBVkE7QUFXQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBRkEsZUFHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUhBO0FBSUEsYUFUQTtBQVVBLFNBdkJBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBdkNBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQTtBQUZBLGVBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBLGFBTkE7QUFPQSxTQWxEQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQSxTQXREQTtBQXVEQTtBQUFBO0FBQ0E7QUFDQSxTQXpEQTtBQTBEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FSQSxDQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBLGVBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQSxhQUxBO0FBTUE7QUEzRUE7QUFaQSxHOzs7Ozs7Ozs7Ozs7QUM1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9HO0FBQ3ZDO0FBQ0w7QUFDeEQsQ0FBMEc7OztBQUcxRztBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkM2TCxDQUFDLGlFQUFlLHFNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FoTztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQ0FBcUM7QUFDekQ7QUFDQTtBQUNBLE9BQU8sOEJBQThCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSwwQkFBMEIsOENBQThDO0FBQ3hFLHFCQUFxQiw0QkFBNEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtCQUErQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRCxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19tYWluX2Jsb2ctbGlzdF92dWUuNmI3Yzc4Mjg1MWRhNGQ0OWJkZTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvZy1saXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWJqZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgPGEgOmNsYXNzPVwiWydyZWNvbW1hbmQtYmxvZ3MnLC4uLnJlY29tbWFuZENsYXNzXVwiIEBjbGljaz1cInJlY29tbWFuZEJsb2dzXCI+5o6o6I2QPC9hPlxyXG4gICAgICAgICAgICA8YSA6Y2xhc3M9XCJbc3ViLnNlbGVjdGVkXVwiIHYtZm9yPVwic3ViIGluIHN1YmplY3RMaXN0XCIgOmtleT1cInN1Yi5pZFwiIEBjbGljaz1cImdldEJsb2dzQnlTdWJqZWN0SWQoc3ViLmlkKVwiPlxyXG4gICAgICAgICAgICAgICAge3tzdWIubmFtZX19XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJtb3JlLXN1YlwiPuafpeeci+abtOWkmjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJibG9nIGluIGJsb2dMaXN0XCIgOmtleT1cImJsb2cuaWRcIiBjbGFzcz1cImJsb2ctbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cInRvQmxvZyhibG9nLmlkKVwiPnt7YmxvZy50aXRsZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZy1zdWJqZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic3ViLWl0ZW1cIiB2LWZvcj1cInN1YiBpbiBibG9nLnN1YmplY3RzXCIgOmtleT1cInN1Yi5pZFwiIEBjbGljaz1cImdldEJsb2dzQnlTdWJqZWN0SWQoc3ViLmlkKVwiPnt7c3ViLm5hbWV9fTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJibG9nLXRpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLXNoaWppYW5zaGlcIiBzdHlsZT1cImNvbG9yOnllbGxvdztcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7YmxvZy50aW1lfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJibG9nLXJlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWxpdWxhblwiIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7YmxvZy5yZWFkaW5nfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJibG9nLWVkaXRcIiBzdHlsZT1cImN1cnNvcjpwb2ludGVyO1wiIEBjbGljaz1cInRvRWRpdChibG9nLmlkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tYmlhbmppXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnvJbovpFcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJibG9nLWRlbGV0ZVwiIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXI7XCIgQGNsaWNrPVwiZGVsZXRlQmxvZyhibG9nLmlkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tYmlhbmppXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDliKDpmaRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQgc3JjPVwiLi4vLi4vY3NzL21haW4vYmxvZy1saXN0LmNzc1wiPlxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgYXN5bmMgY3JlYXRlZCgpe1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0U3ViamVjdExpc3QoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmdldEJsb2dMaXN0KCk7XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJsb2dMaXN0OltdLFxyXG4gICAgICAgICAgICBzdWJqZWN0TGlzdDpbXSxcclxuICAgICAgICAgICAgcmVjb21tYW5kQ2xhc3M6WydzZWxlY3RlZCddXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIC8v54K55Ye75o6o6I2Q5oyJ6ZKu5pe2XHJcbiAgICAgICAgYXN5bmMgcmVjb21tYW5kQmxvZ3MoKXtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRCbG9nTGlzdCgpO1xyXG4gICAgICAgICAgICAvLyDkv67mlLnlhbbku5ZzdWJqZWN055qE5qC35byPXHJcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdExpc3QuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgICAgICBpdGVtLnNlbGVjdGVkPSdub3Qtc2VsZWN0ZWQnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8g5L+u5pS55o6o6I2Q55qE5qC35byPXHJcbiAgICAgICAgICAgIHRoaXMucmVjb21tYW5kQ2xhc3M9WydzZWxlY3RlZCddO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U3ViamVjdExpc3QoKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9zdWJqZWN0cydcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zdWJqZWN0TGlzdD1yZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc3ViamVjdExpc3QuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Li6aXRlbea3u+WKoHNlbGVjdGVk5bGe5oCn5pa55L6/5YiH5o2i5qC35byPXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2V0KGl0ZW0sJ3NlbGVjdGVkJywnbm90LXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOagueaNrnN1YmplY3RJZOiOt+WPlkJsb2dcclxuICAgICAgICBhc3luYyBnZXRCbG9nc0J5U3ViamVjdElkKGlkKXtcclxuICAgICAgICAgICAgLy8gdGhpcy5zaG93QmxvZ0xpc3Q9dGhpcy5ibG9nTGlzdC5maWx0ZXIoaXRlbT0+e1xyXG4gICAgICAgICAgICAvLyAgICAgaWYoaXRlbS5zdWJqZWN0cyl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIGl0ZW0uc3ViamVjdHMuc29tZSh2YWx1ZT0+dmFsdWUuaWQ9PT1pZCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBsZXQgcmVzPWF3YWl0IHRoaXMuZ2V0QmxvZ0xpc3QoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ibG9nTGlzdClcclxuICAgICAgICAgICAgdGhpcy5ibG9nTGlzdD1yZXMuZmlsdGVyKGl0ZW09Pml0ZW0uc3ViamVjdHMuc29tZShzdWI9PnN1Yi5pZD09PWlkKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmxvZ0xpc3QpXHJcbiAgICAgICAgICAgIHRoaXMucmVjb21tYW5kQ2xhc3M9Wydub3Qtc2VsZWN0ZWQnXTtcclxuICAgICAgICAgICAgdGhpcy5zdWJqZWN0TGlzdC5maWx0ZXIoaXRlbT0+aXRlbS5pZD09PWlkKVswXS5zZWxlY3RlZD0nc2VsZWN0ZWQnO1xyXG4gICAgICAgICAgICB0aGlzLnN1YmplY3RMaXN0LmZpbHRlcihpdGVtPT5pdGVtLmlkIT09aWQpLmZvckVhY2goaXRlbT0+aXRlbS5zZWxlY3RlZD0nbm90LXNlbGVjdGVkJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v6I635Y+W5omA5pyJQmxvZ1xyXG4gICAgICAgIGdldEJsb2dMaXN0KCl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2Jsb2dzJ1xyXG4gICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICB0aGF0LmJsb2dMaXN0PXJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuYmxvZ0xpc3Q7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9CbG9nKGlkKXtcclxuICAgICAgICAgICAgLy/ot7PlvoDmn5Dnr4fmlofnq6BcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6Jy9ibG9ncy8nK2lkfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b0VkaXQoaWQpey8v5L+u5pS55p+Q56+H5paH56ugXHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOicvZWRpdCcscXVlcnk6e2lkOmlkLHR5cGU6J2VkaXQnfX0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlQmxvZyhpZCl7Ly/liKDpmaTmn5Dnr4fmlofnq6BcclxuICAgICAgICAgICAgLy/ov5nph4zopoHms6jmhI/vvIxmaWx0ZXLmlrnms5XlubbkuI3kvJrlk43lupTlvI/vvIzlm6DmraTmiJHku6zph4fnlKhzcGxpY2Xmlrnms5VcclxuICAgICAgICAgICAgLy8g5YWI5om+5Yiw5LiL5qCHXHJcbiAgICAgICAgICAgIGxldCBpbmRleD10aGlzLmJsb2dMaXN0LmZpbmQoaXRlbT0+aXRlbS5pZD09PWlkKTtcclxuICAgICAgICAgICAgaWYoIWluZGV4KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG1lc3NhZ2UuZXJyb3IoJ+ivt+S4jeimgemHjeWkjeWIoOmZpCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmxvZ0xpc3Quc3BsaWNlKGluZGV4LDEpOy8v5Yig6Zmk6K+lQmxvZ1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJsb2dMaXN0KTtcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9ibG9ncy8nK2lkXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Jsb2ctbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzJkNjQwYmEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYmxvZy1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYmxvZy1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi4vLi4vY3NzL21haW4vYmxvZy1saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyZDY0MGJhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjMmQ2NDBiYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERlbGxcXFxcRGVza3RvcFxcXFxNeS1JZGVhXFxcXE15QmxvZ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMmQ2NDBiYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMmQ2NDBiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMmQ2NDBiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYmxvZy1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMmQ2NDBiYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjMmQ2NDBiYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvbWFpbi9ibG9nLWxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmxvZy1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmxvZy1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9nLWxpc3QtY29udGFpbmVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3ViamVjdC1saXN0XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3M6IFtcInJlY29tbWFuZC1ibG9nc1wiXS5jb25jYXQoX3ZtLnJlY29tbWFuZENsYXNzKSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucmVjb21tYW5kQmxvZ3MgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuaOqOiNkFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5zdWJqZWN0TGlzdCwgZnVuY3Rpb24oc3ViKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogc3ViLmlkLFxuICAgICAgICAgICAgICBjbGFzczogW3N1Yi5zZWxlY3RlZF0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRCbG9nc0J5U3ViamVjdElkKHN1Yi5pZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3Moc3ViLm5hbWUpICsgXCJcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJtb3JlLXN1YlwiIH0sIFtfdm0uX3YoXCLmn6XnnIvmm7TlpJpcIildKVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9nLWxpc3RcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5ibG9nTGlzdCwgZnVuY3Rpb24oYmxvZykge1xuICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGJsb2cuaWQsIHN0YXRpY0NsYXNzOiBcImJsb2ctbGlzdC1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9CbG9nKGJsb2cuaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhibG9nLnRpdGxlKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsb2ctc3ViamVjdHNcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKGJsb2cuc3ViamVjdHMsIGZ1bmN0aW9uKHN1Yikge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBzdWIuaWQsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWItaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0QmxvZ3NCeVN1YmplY3RJZChzdWIuaWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHN1Yi5uYW1lKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2ctZGV0YWlsXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy10aW1lXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tc2hpamlhbnNoaVwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInllbGxvd1wiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKGJsb2cudGltZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy1yZWFkaW5nXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tbGl1bGFuXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxNHB4XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoYmxvZy5yZWFkaW5nKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJibG9nLWVkaXRcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjdXJzb3I6IFwicG9pbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b0VkaXQoYmxvZy5pZClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWJpYW5qaVwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg57yW6L6RXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJsb2ctZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlQmxvZyhibG9nLmlkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tYmlhbmppXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDliKDpmaRcXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=