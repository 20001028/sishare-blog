(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_main_article-list_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/article-list.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/article-list.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_main_article_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/main/article-list.css */ "./src/css/main/article-list.css");
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
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    created() {
        this.getArticleList();
    },
    data() {
        return {
            articleList: []
        };
    },
    methods: {
        getArticleList() {
            let that = this;
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/articles'
            }).then(res => {
                that.articleList = res.data;
                that.$axios({
                    method: 'GET',
                    url: 'http://42.192.180.142:3000/blog-subs'
                }).then(res => {
                    var res = res.data;
                    for (let i = 0; i < that.articleList.length; i++) {
                        let temp = res.filter(item => item.id === that.articleList[i].id);
                        if (temp.length > 0) {
                            that.$set(that.articleList, i, temp[0]);
                        }
                    }
                });
            });
        },
        goToArticle(id) {
            this.$router.push({ path: '/articles/' + id });
        },
        goToEdit(id) {
            this.$router.push({ path: '/write', query: { id: id, type: 'edit' } });
        },
        deleteArticle(id) {
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

/***/ "./src/css/main/article-list.css":
/*!***************************************!*\
  !*** ./src/css/main/article-list.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/article-list.vue":
/*!**********************************************!*\
  !*** ./src/components/main/article-list.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _article_list_vue_vue_type_template_id_023cbb6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-list.vue?vue&type=template&id=023cbb6a& */ "./src/components/main/article-list.vue?vue&type=template&id=023cbb6a&");
/* harmony import */ var _article_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-list.vue?vue&type=script&lang=js& */ "./src/components/main/article-list.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _article_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _article_list_vue_vue_type_template_id_023cbb6a___WEBPACK_IMPORTED_MODULE_0__.render,
  _article_list_vue_vue_type_template_id_023cbb6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/article-list.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/main/article-list.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/main/article-list.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_article_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./article-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/article-list.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_article_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/main/article-list.vue?vue&type=template&id=023cbb6a&":
/*!*****************************************************************************!*\
  !*** ./src/components/main/article-list.vue?vue&type=template&id=023cbb6a& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_article_list_vue_vue_type_template_id_023cbb6a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_article_list_vue_vue_type_template_id_023cbb6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_article_list_vue_vue_type_template_id_023cbb6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./article-list.vue?vue&type=template&id=023cbb6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/article-list.vue?vue&type=template&id=023cbb6a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/article-list.vue?vue&type=template&id=023cbb6a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/article-list.vue?vue&type=template&id=023cbb6a& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "article-list-container" }, [
    _c(
      "div",
      { staticClass: "article-list" },
      _vm._l(_vm.articleList, function(article) {
        return _c(
          "div",
          { key: article.id, staticClass: "article-list-item" },
          [
            _c("div", { staticClass: "article-title" }, [
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      return _vm.goToArticle(article.id)
                    }
                  }
                },
                [_vm._v(_vm._s(article.title))]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "article-subjects" },
              _vm._l(article.subjects, function(sub) {
                return _c("div", { key: sub.id, staticClass: "sub-item" }, [
                  _c("a", [_vm._v(_vm._s(sub.name))])
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "article-detail" }, [
              _c("a", { staticClass: "article-time" }, [
                _c("a", {
                  staticClass: "iconfont icon-shijianshi",
                  staticStyle: { color: "yellow" }
                }),
                _vm._v(
                  "\n                    " +
                    _vm._s(article.time) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "article-reading" }, [
                _c("a", {
                  staticClass: "iconfont icon-liulan",
                  staticStyle: { "font-size": "14px" }
                }),
                _vm._v(
                  "\n                    " +
                    _vm._s(article.reading) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "article-edit",
                  staticStyle: { cursor: "pointer" },
                  on: {
                    click: function($event) {
                      return _vm.goToEdit(article.id)
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
                      return _vm.deleteArticle(article.id)
                    }
                  }
                },
                [
                  _c("a", { staticClass: "iconfont icon-bianji" }),
                  _vm._v("\n                    删除\n                ")
                ]
              )
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvbWFpbi9hcnRpY2xlLWxpc3QudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jc3MvbWFpbi9hcnRpY2xlLWxpc3QuY3NzPzM4MTMiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9hcnRpY2xlLWxpc3QudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL21haW4vYXJ0aWNsZS1saXN0LnZ1ZT9mNjUyIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL21haW4vYXJ0aWNsZS1saXN0LnZ1ZT9jNTlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUlBLEtBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUE7QUFGQSxlQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBO0FBRkEsbUJBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFYQTtBQVlBLGFBakJBO0FBa0JBLFNBckJBO0FBc0JBO0FBQ0E7QUFDQSxTQXhCQTtBQXlCQTtBQUNBO0FBQ0EsU0EzQkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQ0E7QUFWQSxHOzs7Ozs7Ozs7Ozs7QUMvQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkY7QUFDM0I7QUFDTDs7O0FBRzNEO0FBQ0EsQ0FBNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLG9GQUFNO0FBQ1IsRUFBRSw2RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDZ00sQ0FBQyxpRUFBZSx3TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FuTztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3Q0FBd0M7QUFDNUQ7QUFDQTtBQUNBLE9BQU8sOEJBQThCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0RBQW9EO0FBQy9EO0FBQ0EsdUJBQXVCLCtCQUErQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0NBQWtDO0FBQ2pEO0FBQ0Esa0NBQWtDLHVDQUF1QztBQUN6RTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQ0FBaUM7QUFDeEQ7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLDJCQUEyQixzQ0FBc0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLDJCQUEyQixzQ0FBc0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19tYWluX2FydGljbGUtbGlzdF92dWUuZTUxOWFhZTI0Yzc2ZmVhYTlhMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZS1saXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNsYXNzaWZ5LWxpc3RcIj5cclxuICAgICAgICAgICAgPGgzPuWIhuexuzwvaDM+XHJcbiAgICAgICAgICAgIDxhIHYtZm9yPVwiaXRlbSBpbiBjbGFzc0xpc3RcIiA6a2V5PVwiaXRlbS5pZFwiIDpjbGFzcz1cIlsnaWNvbmZvbnQnLGl0ZW0uaWNvbl1cIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbS5uYW1lfX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImNsYXNzLW5ldyBpY29uZm9udCBpY29uLXplbmdqaWF0aWFuamlheGluemVuZ2dlbmdkdW9cIj5cclxuICAgICAgICAgICAgICAgIOa3u+WKoOaWsOeahOWIhuexu1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlLWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cImFydGljbGUgaW4gYXJ0aWNsZUxpc3RcIiA6a2V5PVwiYXJ0aWNsZS5pZFwiIGNsYXNzPVwiYXJ0aWNsZS1saXN0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwiZ29Ub0FydGljbGUoYXJ0aWNsZS5pZClcIj57e2FydGljbGUudGl0bGV9fTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFydGljbGUtc3ViamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwic3ViIGluIGFydGljbGUuc3ViamVjdHNcIiA6a2V5PVwic3ViLmlkXCIgY2xhc3M9XCJzdWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57e3N1Yi5uYW1lfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXJ0aWNsZS10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1zaGlqaWFuc2hpXCIgc3R5bGU9XCJjb2xvcjp5ZWxsb3c7XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2FydGljbGUudGltZX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXJ0aWNsZS1yZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1saXVsYW5cIiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2FydGljbGUucmVhZGluZ319XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXJ0aWNsZS1lZGl0XCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtcIiBAY2xpY2s9XCJnb1RvRWRpdChhcnRpY2xlLmlkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tYmlhbmppXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnvJbovpFcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhcnRpY2xlLWRlbGV0ZVwiIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXI7XCIgQGNsaWNrPVwiZGVsZXRlQXJ0aWNsZShhcnRpY2xlLmlkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tYmlhbmppXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDliKDpmaRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCAnLi4vLi4vY3NzL21haW4vYXJ0aWNsZS1saXN0LmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjcmVhdGVkKCl7XHJcbiAgICAgICAgdGhpcy5nZXRBcnRpY2xlTGlzdCgpO1xyXG4gICAgfSxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhcnRpY2xlTGlzdDpbXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgZ2V0QXJ0aWNsZUxpc3QoKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9hcnRpY2xlcydcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhhdC5hcnRpY2xlTGlzdD1yZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9ibG9nLXN1YnMnXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcz1yZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoYXQuYXJ0aWNsZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wPXJlcy5maWx0ZXIoaXRlbT0+aXRlbS5pZD09PXRoYXQuYXJ0aWNsZUxpc3RbaV0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0ZW1wLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJHNldCh0aGF0LmFydGljbGVMaXN0LGksdGVtcFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvVG9BcnRpY2xlKGlkKXtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6Jy9hcnRpY2xlcy8nK2lkfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb1RvRWRpdChpZCl7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOicvd3JpdGUnLHF1ZXJ5OntpZDppZCx0eXBlOidlZGl0J319KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZUFydGljbGUoaWQpe1xyXG4gICAgICAgICAgICAvLyBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICAvLyB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgIC8vICAgICBtZXRob2Q6J0RFTEVURScsXHJcbiAgICAgICAgICAgIC8vICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2FydGljbGVzLycraWRcclxuICAgICAgICAgICAgLy8gfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoYXQuZ2V0QXJ0aWNsZUxpc3QoKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hcnRpY2xlLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyM2NiYjZhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FydGljbGUtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FydGljbGUtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERlbGxcXFxcRGVza3RvcFxcXFxNeS1JZGVhXFxcXE15QmxvZ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMjNjYmI2YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMjNjYmI2YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMjNjYmI2YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYXJ0aWNsZS1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMjNjYmI2YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMjNjYmI2YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvbWFpbi9hcnRpY2xlLWxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXJ0aWNsZS1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXJ0aWNsZS1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcnRpY2xlLWxpc3QtY29udGFpbmVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXJ0aWNsZS1saXN0XCIgfSxcbiAgICAgIF92bS5fbChfdm0uYXJ0aWNsZUxpc3QsIGZ1bmN0aW9uKGFydGljbGUpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBrZXk6IGFydGljbGUuaWQsIHN0YXRpY0NsYXNzOiBcImFydGljbGUtbGlzdC1pdGVtXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFydGljbGUtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvVG9BcnRpY2xlKGFydGljbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGFydGljbGUudGl0bGUpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXJ0aWNsZS1zdWJqZWN0c1wiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChhcnRpY2xlLnN1YmplY3RzLCBmdW5jdGlvbihzdWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHN1Yi5pZCwgc3RhdGljQ2xhc3M6IFwic3ViLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihfdm0uX3Moc3ViLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcnRpY2xlLWRldGFpbFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiYXJ0aWNsZS10aW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLXNoaWppYW5zaGlcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInllbGxvd1wiIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoYXJ0aWNsZS50aW1lKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiYXJ0aWNsZS1yZWFkaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWxpdWxhblwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxNHB4XCIgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhhcnRpY2xlLnJlYWRpbmcpICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhcnRpY2xlLWVkaXRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGN1cnNvcjogXCJwb2ludGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvVG9FZGl0KGFydGljbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tYmlhbmppXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOe8lui+kVxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFydGljbGUtZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjdXJzb3I6IFwicG9pbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVBcnRpY2xlKGFydGljbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tYmlhbmppXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWIoOmZpFxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIDBcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==