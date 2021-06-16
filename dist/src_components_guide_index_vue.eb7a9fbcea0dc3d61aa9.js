(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_guide_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/guide/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/guide/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_guide_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/guide/index.css */ "./src/css/guide/index.css");
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
    data() {
        return {
            itemList: [{
                id: 1,
                title: '搭建开发环境',
                display: 'none',
                icon: 'icon-xiangyou-copy',
                articles: [{
                    id: '',
                    title: ''
                }]
            }, {
                id: 2,
                title: '搭建开发环境',
                display: 'none',
                icon: 'icon-xiangyou-copy',
                articles: [{
                    id: '',
                    title: ''
                }]
            }, {
                id: 3,
                title: '搭建开发环境',
                display: 'none',
                icon: 'icon-xiangyou-copy',
                articles: [{
                    id: '',
                    title: ''
                }]
            }],
            article: {
                title: '',
                content: ''
            }
        };
    },
    created: function () {
        let that = this;
        that.$axios({
            method: 'GET',
            url: 'http://42.192.180.142:3000/articles/' + '1497ba4b-9d9c-4792-9b82-f6a649a50257'
        }).then(res => {
            that.article.content = res.data.html;
            that.article.title = res.data.article.title;
        });
        // that.timer=setInterval(()=>{
        //     if(document.readyState==='complete'){
        //         that.loading=false;
        //         clearInterval(that.timer);
        //     }
        // },1000);
    },
    methods: {
        show(id) {
            this.itemList.forEach(item => {
                if (item.id === id) {
                    if (item.display === 'none') {
                        item.display = 'block';
                        item.icon = 'icon-down2';
                    } else {
                        item.display = 'none';
                        item.icon = 'icon-xiangyou-copy';
                    }
                }
            });
        }
    }
});

/***/ }),

/***/ "./src/css/guide/index.css":
/*!*********************************!*\
  !*** ./src/css/guide/index.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/guide/index.vue":
/*!****************************************!*\
  !*** ./src/components/guide/index.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_67ef2ac2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=67ef2ac2& */ "./src/components/guide/index.vue?vue&type=template&id=67ef2ac2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/guide/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_67ef2ac2___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_67ef2ac2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/guide/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/guide/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/guide/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/guide/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/guide/index.vue?vue&type=template&id=67ef2ac2&":
/*!***********************************************************************!*\
  !*** ./src/components/guide/index.vue?vue&type=template&id=67ef2ac2& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_67ef2ac2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_67ef2ac2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_67ef2ac2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=67ef2ac2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/guide/index.vue?vue&type=template&id=67ef2ac2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/guide/index.vue?vue&type=template&id=67ef2ac2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/guide/index.vue?vue&type=template&id=67ef2ac2& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "guide-container" }, [
    _c(
      "div",
      { staticClass: "left-list" },
      _vm._l(_vm.itemList, function(item) {
        return _c("div", { key: item.id, staticClass: "left-list-item" }, [
          _c(
            "div",
            {
              staticClass: "item-head",
              on: {
                click: function($event) {
                  return _vm.show(item.id)
                }
              }
            },
            [
              _c("a", { staticClass: "iconfont icon-gengduo" }),
              _vm._v(" "),
              _c("a", {}, [_vm._v(_vm._s(item.title))]),
              _vm._v(" "),
              _c("a", { class: ["iconfont", item.icon] })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item-articles", style: { display: item.display } },
            [
              _c("a", { staticClass: "iconfont icon-xuhao" }),
              _vm._v(" "),
              _c("a", { staticStyle: { "margin-left": "0.2rem" } }, [
                _vm._v("WebCaching")
              ])
            ]
          )
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "article-container" }, [
      _c("h1", { staticClass: "article-title" }, [
        _vm._v("\n            " + _vm._s(_vm.article.title) + "\n        ")
      ]),
      _vm._v(" "),
      _c("div", {
        directives: [{ name: "highlight", rawName: "v-highlight" }],
        staticClass: "article-content",
        domProps: { innerHTML: _vm._s(_vm.article.content) }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvZ3VpZGUvaW5kZXgudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jc3MvZ3VpZGUvaW5kZXguY3NzPzQwYjEiLCJ3ZWJwYWNrOi8vTXlCbG9nLy4vc3JjL2NvbXBvbmVudHMvZ3VpZGUvaW5kZXgudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2d1aWRlL2luZGV4LnZ1ZT84MzI3Iiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2d1aWRlL2luZGV4LnZ1ZT9kYTk0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFDQTtBQUNBLHFCQURBO0FBRUEsK0JBRkE7QUFHQSwrQkFIQTtBQUlBLDBDQUpBO0FBS0EsMkJBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBRkEsaUJBREE7QUFMQSxhQURBLEVBYUE7QUFDQSxxQkFEQTtBQUVBLCtCQUZBO0FBR0EsK0JBSEE7QUFJQSwwQ0FKQTtBQUtBLDJCQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUZBLGlCQURBO0FBTEEsYUFiQSxFQXlCQTtBQUNBLHFCQURBO0FBRUEsK0JBRkE7QUFHQSwrQkFIQTtBQUlBLDBDQUpBO0FBS0EsMkJBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBRkEsaUJBREE7QUFMQSxhQXpCQSxDQURBO0FBdUNBO0FBQ0EseUJBREE7QUFFQTtBQUZBO0FBdkNBO0FBNENBLEtBOUNBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUE7QUFGQSxXQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQSxTQU5BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E5REE7QUErREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQVZBO0FBV0E7QUFiQTtBQS9EQSxHOzs7Ozs7Ozs7Ozs7QUMzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ0EsQ0FBNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsd0VBQU07QUFDUixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxzRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDeUwsQ0FBQyxpRUFBZSxpTUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1TjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQ0FBaUM7QUFDckQ7QUFDQTtBQUNBLE9BQU8sMkJBQTJCO0FBQ2xDO0FBQ0EsMEJBQTBCLDhDQUE4QztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSx1QkFBdUIsdUNBQXVDO0FBQzlEO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1Q0FBdUMsd0JBQXdCLEVBQUU7QUFDOUU7QUFDQSx1QkFBdUIscUNBQXFDO0FBQzVEO0FBQ0EsdUJBQXVCLGVBQWUsMEJBQTBCLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRCxnQkFBZ0IsK0JBQStCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRDQUE0QztBQUNsRTtBQUNBLG1CQUFtQjtBQUNuQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19ndWlkZV9pbmRleF92dWUuZWI3YTlmYmNlYTBkYzNkNjFhYTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ3VpZGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtbGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1saXN0LWl0ZW1cIiB2LWZvcj1cIml0ZW0gaW4gaXRlbUxpc3RcIiA6a2V5PVwiaXRlbS5pZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0taGVhZFwiICBAY2xpY2s9XCJzaG93KGl0ZW0uaWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWdlbmdkdW9cIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJcIj57e2l0ZW0udGl0bGV9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSA6Y2xhc3M9XCJbJ2ljb25mb250JyxpdGVtLmljb25dXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1hcnRpY2xlc1wiIDpzdHlsZT1cIntkaXNwbGF5Oml0ZW0uZGlzcGxheX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24teHVoYW9cIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9XCJtYXJnaW4tbGVmdDowLjJyZW07XCI+V2ViQ2FjaGluZzwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiYXJ0aWNsZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAge3thcnRpY2xlLnRpdGxlfX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFydGljbGUtY29udGVudFwiIHYtaHRtbD1cImFydGljbGUuY29udGVudFwiIHYtaGlnaGxpZ2h0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi8uLi9jc3MvZ3VpZGUvaW5kZXguY3NzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0OltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOifmkK3lu7rlvIDlj5Hnjq/looMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6J25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246J2ljb24teGlhbmd5b3UtY29weScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOicnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOjIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6J+aQreW7uuW8gOWPkeeOr+WigycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTonbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjonaWNvbi14aWFuZ3lvdS1jb3B5JyxcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6MyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTon5pCt5bu65byA5Y+R546v5aKDJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Oidub25lJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOidpY29uLXhpYW5neW91LWNvcHknLFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGVzOltcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTonJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBhcnRpY2xlOntcclxuICAgICAgICAgICAgICAgIHRpdGxlOicnLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDonJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6ZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2FydGljbGVzLycrJzE0OTdiYTRiLTlkOWMtNDc5Mi05YjgyLWY2YTY0OWE1MDI1NycsXHJcbiAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICB0aGF0LmFydGljbGUuY29udGVudD1yZXMuZGF0YS5odG1sO1xyXG4gICAgICAgICAgICB0aGF0LmFydGljbGUudGl0bGU9cmVzLmRhdGEuYXJ0aWNsZS50aXRsZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGF0LnRpbWVyPXNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgLy8gICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGU9PT0nY29tcGxldGUnKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoYXQubG9hZGluZz1mYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhhdC50aW1lcik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LDEwMDApO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIHNob3coaWQpe1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5pZD09PWlkKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmRpc3BsYXk9PT0nbm9uZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRpc3BsYXk9J2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pY29uPSdpY29uLWRvd24yJztcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXNwbGF5PSdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pY29uPSdpY29uLXhpYW5neW91LWNvcHknO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdlZjJhYzImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERlbGxcXFxcRGVza3RvcFxcXFxNeS1JZGVhXFxcXE15QmxvZ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2N2VmMmFjMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2N2VmMmFjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2N2VmMmFjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3ZWYyYWMyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3ZWYyYWMyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9ndWlkZS9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJndWlkZS1jb250YWluZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJsZWZ0LWxpc3RcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5pdGVtTGlzdCwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGl0ZW0uaWQsIHN0YXRpY0NsYXNzOiBcImxlZnQtbGlzdC1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1oZWFkXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93KGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWdlbmdkdW9cIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHt9LCBbX3ZtLl92KF92bS5fcyhpdGVtLnRpdGxlKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgY2xhc3M6IFtcImljb25mb250XCIsIGl0ZW0uaWNvbl0gfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpdGVtLWFydGljbGVzXCIsIHN0eWxlOiB7IGRpc3BsYXk6IGl0ZW0uZGlzcGxheSB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24teHVoYW9cIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcIjAuMnJlbVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIldlYkNhY2hpbmdcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICB9KSxcbiAgICAgIDBcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcnRpY2xlLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJhcnRpY2xlLXRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uYXJ0aWNsZS50aXRsZSkgKyBcIlxcbiAgICAgICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7IG5hbWU6IFwiaGlnaGxpZ2h0XCIsIHJhd05hbWU6IFwidi1oaWdobGlnaHRcIiB9XSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXJ0aWNsZS1jb250ZW50XCIsXG4gICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5hcnRpY2xlLmNvbnRlbnQpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9