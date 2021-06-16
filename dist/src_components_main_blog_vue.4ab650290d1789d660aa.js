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
                fontSize: '1.3rem',
                marginLeft: '0%'
            }, {
                fontSize: '1.2rem',
                marginLeft: '16%'
            }, {
                fontSize: '1.1rem',
                marginLeft: '32%'
            }, {
                fontSize: '1rem',
                marginLeft: '48%'
            }, {
                fontSize: '0.9rem',
                marginLeft: '64%'
            }, {
                fontSize: '0.8rem',
                marginLeft: '80%'
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
                this.blog.content = res.data.html;
                this.blog.title = res.data.blog.title;
            }, reason => {
                alert(reason);
            }).then(this.generateDirs);
        },
        generateDirs() {
            let headers = document.getElementsByClassName('blog-content')[0].children;
            for (let i = 0; i < headers.length; i++) {
                if (headers[i].tagName.indexOf('H') === -1) continue;
                let level = parseInt(headers[i].tagName[1]);
                this.dirs.push({
                    text: headers[i].textContent,
                    style: this.styles[level - 1],
                    node: headers[i]
                });
            }
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
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._l(_vm.dirs, function(h) {
          return _c(
            "a",
            {
              key: h.text,
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
        })
      ],
      2
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
        domProps: { innerHTML: _vm._s(_vm.blog.content) }
      })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dir-head" }, [
      _c("a", [_c("i", [_vm._v("I")])]),
      _vm._v(" "),
      _c("a", [_c("i", [_vm._v("II")])]),
      _vm._v(" "),
      _c("a", [_c("i", [_vm._v("III")])]),
      _vm._v(" "),
      _c("a", [_c("i", [_vm._v("IV")])]),
      _vm._v(" "),
      _c("a", [_c("i", [_vm._v("V")])]),
      _vm._v(" "),
      _c("a", [_c("i", [_vm._v("VI")])])
    ])
  }
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvbWFpbi9ibG9nLnZ1ZSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY3NzL21haW4vYmxvZy5jc3M/ZjQyYiIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9tYWluL2Jsb2cudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL21haW4vYmxvZy52dWU/N2EwOSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9tYWluL2Jsb2cudnVlPzE0NGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQTtBQUZBLGFBREE7QUFLQSxvQkFMQTtBQU1BLHFCQUNBO0FBQ0Esa0NBREE7QUFFQTtBQUZBLGFBREEsRUFLQTtBQUNBLGtDQURBO0FBRUE7QUFGQSxhQUxBLEVBU0E7QUFDQSxrQ0FEQTtBQUVBO0FBRkEsYUFUQSxFQWFBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBLGFBYkEsRUFpQkE7QUFDQSxrQ0FEQTtBQUVBO0FBRkEsYUFqQkEsRUFxQkE7QUFDQSxrQ0FEQTtBQUVBO0FBRkEsYUFyQkEsQ0FOQTtBQWdDQTtBQWhDQTtBQWtDQSxLQXJDQTtBQXNDQTtBQUNBO0FBQ0EsS0F4Q0E7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsRUFHQTtBQUNBO0FBQ0EsYUFMQSxFQUtBLElBTEEsQ0FLQSxpQkFMQTtBQU1BLFNBUkE7QUFTQTtBQUNBO0FBQ0E7QUFDQSw0REFDQTtBQUNBO0FBQ0E7QUFDQSxnREFEQTtBQUVBLGlEQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0EsU0FyQkE7QUFzQkE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxlQUdBLElBSEEsQ0FHQSxPQUhBLEVBR0EsTUFIQTtBQUlBLFNBM0JBO0FBNEJBO0FBQ0E7QUFDQTtBQTlCQTtBQXpDQSxHOzs7Ozs7Ozs7Ozs7QUMzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStGO0FBQ3ZDO0FBQ0w7QUFDbkQsQ0FBcUc7OztBQUdyRztBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSx1RUFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkN3TCxDQUFDLGlFQUFlLGdNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EzTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBLE9BQU8sMkJBQTJCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQkFBMkI7QUFDMUMsZ0JBQWdCLDRCQUE0QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0Q0FBNEM7QUFDbEU7QUFDQSxtQkFBbUI7QUFDbkIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19tYWluX2Jsb2dfdnVlLjRhYjY1MDI5MGQxNzg5ZDY2MGFhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2ctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctZGlyc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlyLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgIDxhPjxpPkk8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGE+PGk+SUk8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGE+PGk+SUlJPC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhPjxpPklWPC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhPjxpPlY8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGE+PGk+Vkk8L2k+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGEgOnN0eWxlPVwieydmb250LXNpemUnOmguc3R5bGUuZm9udFNpemUsJ21hcmdpbi1sZWZ0JzpoLnN0eWxlLm1hcmdpbkxlZnR9XCIgXHJcbiAgICAgICAgICAgICAgICB2LWZvcj1cImggaW4gZGlyc1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImgudGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwic2Nyb2xsQ29udHJvbChoKVwiPnt7aC50ZXh0fX08L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctc2hvd1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJibG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICB7e2Jsb2cudGl0bGV9fVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZy1jb250ZW50XCIgdi1odG1sPVwiYmxvZy5jb250ZW50XCIgdi1oaWdobGlnaHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczpbJ2lkJ10sXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICBibG9nOntcclxuICAgICAgICAgICAgICAgIHRpdGxlOicnLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDonJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXJzOltdLFxyXG4gICAgICAgICAgICBzdHlsZXM6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOicxLjNyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzAlJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OicxNiUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOicxLjFyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzMyJSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6JzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzQ4JSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6JzAuOXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDonNjQlJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMC44cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0Oic4MCUnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJhc2VVcmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2Jsb2dzLydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZ2V0QmxvZ0J5SWQodGhpcy5pZCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgZ2V0QmxvZ0J5SWQoaWQpe1xyXG4gICAgICAgICAgICB0aGlzLmdldFJlcXVlc3QodGhpcy5iYXNlVXJsK2lkLHt9LChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2cuY29udGVudD1yZXMuZGF0YS5odG1sO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9nLnRpdGxlPXJlcy5kYXRhLmJsb2cudGl0bGU7XHJcbiAgICAgICAgICAgIH0sKHJlYXNvbik9PntcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLnRoZW4odGhpcy5nZW5lcmF0ZURpcnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2VuZXJhdGVEaXJzKCl7XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXJzPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Jsb2ctY29udGVudCcpWzBdLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPGhlYWRlcnMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZihoZWFkZXJzW2ldLnRhZ05hbWUuaW5kZXhPZignSCcpPT09LTEpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWw9cGFyc2VJbnQoaGVhZGVyc1tpXS50YWdOYW1lWzFdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OmhlYWRlcnNbaV0udGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6dGhpcy5zdHlsZXNbbGV2ZWwtMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTpoZWFkZXJzW2ldXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVxdWVzdCh1cmwscGFyYW1zLHJlc29sdmUscmVqZWN0KXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIHBhcmFtc1xyXG4gICAgICAgICAgICB9KS50aGVuKHJlc29sdmUscmVqZWN0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjcm9sbENvbnRyb2woaCl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLGgubm9kZS5vZmZzZXRUb3AtMTAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgc3JjPVwiLi4vLi4vY3NzL21haW4vYmxvZy5jc3NcIj5cclxuXHJcbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ibG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzMzMTI1OCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ibG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYmxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4uLy4uL2Nzcy9tYWluL2Jsb2cuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzczMzEyNTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM3MzMxMjU4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGVsbFxcXFxEZXNrdG9wXFxcXE15LUlkZWFcXFxcTXlCbG9nXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM3MzMxMjU4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM3MzMxMjU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM3MzMxMjU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ibG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzMzMTI1OCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNzMzMTI1OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvbWFpbi9ibG9nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ibG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9nLWNvbnRhaW5lclwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImJsb2ctZGlyc1wiIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5kaXJzLCBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogaC50ZXh0LFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IGguc3R5bGUuZm9udFNpemUsXG4gICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBoLnN0eWxlLm1hcmdpbkxlZnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNjcm9sbENvbnRyb2woaClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhoLnRleHQpKV1cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2ctc2hvd1wiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJibG9nLXRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uYmxvZy50aXRsZSkgKyBcIlxcbiAgICAgICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7IG5hbWU6IFwiaGlnaGxpZ2h0XCIsIHJhd05hbWU6IFwidi1oaWdobGlnaHRcIiB9XSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmxvZy1jb250ZW50XCIsXG4gICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5ibG9nLmNvbnRlbnQpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlyLWhlYWRcIiB9LCBbXG4gICAgICBfYyhcImFcIiwgW19jKFwiaVwiLCBbX3ZtLl92KFwiSVwiKV0pXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIFtfYyhcImlcIiwgW192bS5fdihcIklJXCIpXSldKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFcIiwgW19jKFwiaVwiLCBbX3ZtLl92KFwiSUlJXCIpXSldKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFcIiwgW19jKFwiaVwiLCBbX3ZtLl92KFwiSVZcIildKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCBbX2MoXCJpXCIsIFtfdm0uX3YoXCJWXCIpXSldKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFcIiwgW19jKFwiaVwiLCBbX3ZtLl92KFwiVklcIildKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9