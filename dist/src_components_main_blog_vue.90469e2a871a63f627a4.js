(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_main_blog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
    props: ['id'],
    data() {
        return {
            blog: {
                title: '',
                content: ''
            },
            dirs: [],
            styles: [{
                fontSize: '1.2rem',
                marginLeft: '0%'
            }, {
                fontSize: '1.1rem',
                marginLeft: '12%'
            }, {
                fontSize: '1rem',
                marginLeft: '24%'
            }, {
                fontSize: '0.9rem',
                marginLeft: '36%'
            }, {
                fontSize: '0.8rem',
                marginLeft: '48%'
            }],
            baseUrl: 'http://42.192.180.142:3000/blogs/'
        };
    },
    created: function () {
        this.getBlogById(this.id);
    },
    methods: {
        getBlogById(id) {
            this.getRequest(this.baseUrl + id, {}, res => {
                this.blog = res.data;
            }, reason => {
                alert(reason);
            }).then(this.generateDirs);
        },
        generateDirs() {
            let headers = document.getElementsByClassName('blog-content')[0].children;
            for (let i = 0; i < headers.length; i++) {
                if (headers[i].tagName.indexOf('H') === -1) continue;
                let level = parseInt(headers[i].tagName[1]);
                console.log(level);
                this.dirs.push({
                    text: headers[i].textContent,
                    style: this.styles[level - 2],
                    node: headers[i]
                });
            }
            console.log(this.dirs);
        },
        getRequest(url, params, resolve, reject) {
            return this.$axios({
                url,
                params
            }).then(resolve, reject);
        },
        scrollControl(h) {
            window.scrollTo(0, h.node.offsetTop - 100);
        }
    }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main/blog.css?vue&type=style&index=0&id=37331258&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main/blog.css?vue&type=style&index=0&id=37331258&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/blog.vue":
/*!**************************************!*\
  !*** ./src/components/main/blog.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blog_vue_vue_type_template_id_37331258_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.vue?vue&type=template&id=37331258&scoped=true& */ "./src/components/main/blog.vue?vue&type=template&id=37331258&scoped=true&");
/* harmony import */ var _blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.vue?vue&type=script&lang=js& */ "./src/components/main/blog.vue?vue&type=script&lang=js&");
/* harmony import */ var _css_main_blog_css_vue_type_style_index_0_id_37331258_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/main/blog.css?vue&type=style&index=0&id=37331258&scoped=true&lang=css& */ "./src/css/main/blog.css?vue&type=style&index=0&id=37331258&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _blog_vue_vue_type_template_id_37331258_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _blog_vue_vue_type_template_id_37331258_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "37331258",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/blog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/main/blog.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/main/blog.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./blog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/css/main/blog.css?vue&type=style&index=0&id=37331258&scoped=true&lang=css&":
/*!****************************************************************************************!*\
  !*** ./src/css/main/blog.css?vue&type=style&index=0&id=37331258&scoped=true&lang=css& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_blog_css_vue_type_style_index_0_id_37331258_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!./blog.css?vue&type=style&index=0&id=37331258&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main/blog.css?vue&type=style&index=0&id=37331258&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/main/blog.vue?vue&type=template&id=37331258&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/components/main/blog.vue?vue&type=template&id=37331258&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_37331258_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_37331258_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_37331258_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./blog.vue?vue&type=template&id=37331258&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog.vue?vue&type=template&id=37331258&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog.vue?vue&type=template&id=37331258&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/blog.vue?vue&type=template&id=37331258&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "blog-container" }, [
    _c(
      "div",
      { staticClass: "blog-dirs" },
      _vm._l(_vm.dirs, function(h) {
        return _c(
          "a",
          {
            key: h.text,
            ref: "header",
            refInFor: true,
            style: {
              "font-size": h.style.fontSize,
              "margin-left": h.style.marginLeft
            },
            on: {
              click: function($event) {
                return _vm.scrollControl(h)
              }
            }
          },
          [_vm._v(_vm._s(h.text))]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "blog-show" }, [
      _c("h1", { staticClass: "blog-title" }, [
        _vm._v("\n            " + _vm._s(_vm.blog.title) + "\n        ")
      ]),
      _vm._v(" "),
      _c("div", {
        directives: [{ name: "highlight", rawName: "v-highlight" }],
        staticClass: "blog-content",
        domProps: { innerHTML: _vm._s(_vm.blog.preHtml) }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvbWFpbi9ibG9nLnZ1ZSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY3NzL21haW4vYmxvZy5jc3M/ZjQyYiIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9tYWluL2Jsb2cudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL21haW4vYmxvZy52dWU/N2EwOSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9tYWluL2Jsb2cudnVlPzE0NGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQSxpQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUE7QUFGQSxhQURBO0FBS0Esb0JBTEE7QUFNQSxxQkFDQTtBQUNBLGtDQURBO0FBRUE7QUFGQSxhQURBLEVBS0E7QUFDQSxrQ0FEQTtBQUVBO0FBRkEsYUFMQSxFQVNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBLGFBVEEsRUFhQTtBQUNBLGtDQURBO0FBRUE7QUFGQSxhQWJBLEVBaUJBO0FBQ0Esa0NBREE7QUFFQTtBQUZBLGFBakJBLENBTkE7QUE0QkE7QUE1QkE7QUE4QkEsS0FqQ0E7QUFrQ0E7QUFDQTtBQUNBLEtBcENBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQSxFQUVBO0FBQ0E7QUFDQSxhQUpBLEVBSUEsSUFKQSxDQUlBLGlCQUpBO0FBS0EsU0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBLDREQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBREE7QUFFQSxpREFGQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBQ0EsU0F0QkE7QUF1QkE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxlQUdBLElBSEEsQ0FHQSxPQUhBLEVBR0EsTUFIQTtBQUlBLFNBNUJBO0FBNkJBO0FBQ0E7QUFDQTtBQS9CQTtBQXJDQSxHOzs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStGO0FBQ3ZDO0FBQ0w7QUFDbkQsQ0FBcUc7OztBQUdyRztBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSx1RUFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkN3TCxDQUFDLGlFQUFlLGdNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EzTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBLE9BQU8sMkJBQTJCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJCQUEyQjtBQUMxQyxnQkFBZ0IsNEJBQTRCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRDQUE0QztBQUNsRTtBQUNBLG1CQUFtQjtBQUNuQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19tYWluX2Jsb2dfdnVlLjkwNDY5ZTJhODcxYTYzZjYyN2E0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2ctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctZGlyc1wiPlxyXG4gICAgICAgICAgICA8YSByZWY9XCJoZWFkZXJcIiA6c3R5bGU9XCJ7J2ZvbnQtc2l6ZSc6aC5zdHlsZS5mb250U2l6ZSwnbWFyZ2luLWxlZnQnOmguc3R5bGUubWFyZ2luTGVmdH1cIiBcclxuICAgICAgICAgICAgICAgIHYtZm9yPVwiaCBpbiBkaXJzXCIgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiaC50ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJzY3JvbGxDb250cm9sKGgpXCI+e3toLnRleHR9fTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZy1zaG93XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cImJsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHt7YmxvZy50aXRsZX19XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9nLWNvbnRlbnRcIiB2LWh0bWw9XCJibG9nLnByZUh0bWxcIiB2LWhpZ2hsaWdodD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOlsnaWQnXSxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIGJsb2c6e1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6JycsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OicnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpcnM6W10sXHJcbiAgICAgICAgICAgIHN0eWxlczpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6JzEuMnJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDonMCUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOicxLjFyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzEyJSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6JzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzI0JSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6JzAuOXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDonMzYlJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMC44cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0Oic0OCUnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJhc2VVcmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2Jsb2dzLydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZ2V0QmxvZ0J5SWQodGhpcy5pZCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgZ2V0QmxvZ0J5SWQoaWQpe1xyXG4gICAgICAgICAgICB0aGlzLmdldFJlcXVlc3QodGhpcy5iYXNlVXJsK2lkLHt9LChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2c9cmVzLmRhdGE7XHJcbiAgICAgICAgICAgIH0sKHJlYXNvbik9PntcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLnRoZW4odGhpcy5nZW5lcmF0ZURpcnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2VuZXJhdGVEaXJzKCl7XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXJzPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Jsb2ctY29udGVudCcpWzBdLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPGhlYWRlcnMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZihoZWFkZXJzW2ldLnRhZ05hbWUuaW5kZXhPZignSCcpPT09LTEpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWw9cGFyc2VJbnQoaGVhZGVyc1tpXS50YWdOYW1lWzFdKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxldmVsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6aGVhZGVyc1tpXS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZTp0aGlzLnN0eWxlc1tsZXZlbC0yXSxcclxuICAgICAgICAgICAgICAgICAgICBub2RlOmhlYWRlcnNbaV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlycylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlcXVlc3QodXJsLHBhcmFtcyxyZXNvbHZlLHJlamVjdCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXNcclxuICAgICAgICAgICAgfSkudGhlbihyZXNvbHZlLHJlamVjdCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JvbGxDb250cm9sKGgpe1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCxoLm5vZGUub2Zmc2V0VG9wLTEwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uLy4uL2Nzcy9tYWluL2Jsb2cuY3NzXCI+XHJcblxyXG48L3N0eWxlPiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYmxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzczMzEyNTgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYmxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Jsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi8uLi9jc3MvbWFpbi9ibG9nLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM3MzMxMjU4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzNzMzMTI1OFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERlbGxcXFxcRGVza3RvcFxcXFxNeS1JZGVhXFxcXE15QmxvZ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNzMzMTI1OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNzMzMTI1OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNzMzMTI1OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYmxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzczMzEyNTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzczMzEyNTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL21haW4vYmxvZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ibG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy1jb250YWluZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9nLWRpcnNcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5kaXJzLCBmdW5jdGlvbihoKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGgudGV4dCxcbiAgICAgICAgICAgIHJlZjogXCJoZWFkZXJcIixcbiAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogaC5zdHlsZS5mb250U2l6ZSxcbiAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBoLnN0eWxlLm1hcmdpbkxlZnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zY3JvbGxDb250cm9sKGgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGgudGV4dCkpXVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIDBcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9nLXNob3dcIiB9LCBbXG4gICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmJsb2cudGl0bGUpICsgXCJcXG4gICAgICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbeyBuYW1lOiBcImhpZ2hsaWdodFwiLCByYXdOYW1lOiBcInYtaGlnaGxpZ2h0XCIgfV0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJsb2ctY29udGVudFwiLFxuICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uYmxvZy5wcmVIdG1sKSB9XG4gICAgICB9KVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==