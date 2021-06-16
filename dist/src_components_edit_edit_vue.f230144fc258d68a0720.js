(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_edit_edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/edit.vue?vue&type=script&lang=js& ***!
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

let converter = new showdown.Converter();
let ElPopoverHeader = () => __webpack_require__.e(/*! import() */ "src_components_edit_el-popover-header_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./el-popover-header.vue */ "./src/components/edit/el-popover-header.vue"));
let ElPopoverHelp = () => __webpack_require__.e(/*! import() */ "src_components_edit_el-popover-help_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./el-popover-help.vue */ "./src/components/edit/el-popover-help.vue"));
let ElDialogLink = () => __webpack_require__.e(/*! import() */ "src_components_edit_el-dialog-link_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./el-dialog-link.vue */ "./src/components/edit/el-dialog-link.vue"));
let ElDialogSubject = () => __webpack_require__.e(/*! import() */ "src_components_edit_el-dialog-subject_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./el-dialog-subject.vue */ "./src/components/edit/el-dialog-subject.vue"));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    components: {
        ElPopoverHeader,
        ElPopoverHelp,
        ElDialogLink,
        ElDialogSubject
    },
    data() {
        return {
            blog: {
                source: '',
                preHtml: '',
                title: ''
            },
            linkDialog: { //插入链接的Dialog
                title: '插入链接',
                text: '',
                href: '',
                visible: false,
                type: 'link'
            },
            subjectDialog: {
                title: '专题管理',
                visible: false
            },
            blogSubjects: [],
            intervarl: null
        };
    },
    async created() {
        if (this.$route.query.type === 'edit') {
            await this.getBlogById();
            await this.getSubjectByBlogId();
        };
        if (!this.intervarl) {
            this.intervarl = setInterval(() => {
                sessionStorage.setItem(this.$route.query.id, JSON.stringify(this.blog));
                let date = new Date();
                this.$notify({
                    title: date.toTimeString(),
                    message: '已为您自动保存',
                    type: 'success',
                    duration: 1000
                });
            }, 1000 * 10);
        }
    },
    mounted() {
        window.onbeforeunload = e => {
            console.log('dsdsd');
            alert('leave');
            return;
        };
    },
    methods: {
        setMarkdown() {
            this.blog.preHtml = converter.makeHtml(this.blog.source);
        },
        handleTextarea(insert) {
            let textarea = document.getElementById('content');
            let startPos = textarea.selectionStart;
            // let scrollTop=textarea.scrollTop;
            let value = textarea.value; //取出当前文本域内的值
            insert(textarea, startPos, value);
            // if(textarea.scrollTop>0)
            //     textarea.scrollTop=scrollTop;
            textarea.focus();
            this.blog.source = textarea.value; //更新content
            this.setMarkdown();
        },
        insertHeader(index) {
            let insert = new Array(index + 2).fill('#').join('');
            let method = (textarea, startPos, value) => {
                textarea.value = value.substring(0, startPos) + '\n' + insert + value.substring(startPos, value.length);
            };
            this.handleTextarea(method);
        },
        emphasis() {
            let method = (textarea, startPos, value) => {
                let endPos = textarea.selectionEnd;
                textarea.value = value.substring(0, startPos) + '**' + value.substring(startPos, endPos) + '**' + value.substring(endPos, value.length);
            };
            this.handleTextarea(method);
        },
        italics() {
            let method = (textarea, startPos, value) => {
                let endPos = textarea.selectionEnd;
                textarea.value = value.substring(0, startPos) + '*' + value.substring(startPos, endPos) + '*' + value.substring(endPos, value.length);
            };
            this.handleTextarea(method);
        },
        codeBlock() {
            let method = (textarea, startPos, value) => {
                let endPos = textarea.selectionEnd;
                textarea.value = value.substring(0, startPos) + '\n```\n' + value.substring(startPos, endPos) + '\n```\n' + value.substring(endPos, value.length);
            };
            this.handleTextarea(method);
        },
        showLinkDialog(type) {
            this.linkDialog.visible = true;
            this.linkDialog.type = type;
            this.linkDialog.title = type === 'link' ? '插入链接' : '插入图片';
        },
        orderedList() {
            let method = (textarea, startPos, value) => {
                textarea.value = value.substring(0, startPos) + '\n1. 第一项\n2. 第二项\n3. 第三项' + value.substring(startPos, value.length);
            };
            this.handleTextarea(method);
        },
        unorderedList() {
            let method = (textarea, startPos, value) => {
                textarea.value = value.substring(0, startPos) + '\n+ 第一项\n+ 第二项\n+ 第三项' + value.substring(startPos, value.length);
            };
            this.handleTextarea(method);
        },
        getBlogById() {
            let that = this;
            //根据id请求数据并渲染标题、文本域和预览
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/blogs/' + that.$route.query.id
            }).then(res => {
                that.blog.preHtml = res.data.html;
                that.blog.source = res.data.blog.content;
                that.blog.title = res.data.blog.title;
            });
        },
        updateBlog() {
            let that = this;
            //更新文章
            that.$axios({
                method: 'PUT',
                url: 'http://42.192.180.142:3000/blogs/' + that.$route.query.id,
                data: that.blog
            }).then(res => {
                //跳转到查看页面
                this.$router.push({ path: '/blogs/' + that.$route.query.id });
            });
        },
        getSubjectByBlogId() {
            let that = this;
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/subjects/' + that.$route.query.id
            }).then(res => {
                that.blogSubjects = res.data;
            });
        },
        addBlog() {
            let that = this;
            //新增文章
            that.$axios({
                method: 'POST',
                url: 'http://42.192.180.142:3000/blogs',
                data: that.blog
            }).then(res => {
                //跳转到查看页面
                this.$router.push({ path: '/blogs/' + res.data.id });
            });
        },
        launchBlog() {
            if (this.$route.query.type === 'edit') {
                this.updateBlog();
            } else {
                this.addBlog();
            }
        },
        enterKey(e) {
            let method = (textarea, startPos, value) => {
                textarea.value = value.substring(0, startPos) + '<br>\n' + value.substring(startPos, value.length);
            };
            switch (e.key) {
                case 'enter':
                    this.handleTextarea(method);
                    break;
            }
        },
        onscroll(e) {
            let text = e.target;
            let preview = document.getElementById('preview');
            preview.scrollTop = text.scrollTop / 2;
        }
    }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/edit/edit.css?vue&type=style&index=0&id=1ad43f8f&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/edit/edit.css?vue&type=style&index=0&id=1ad43f8f&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/edit/edit.vue":
/*!**************************************!*\
  !*** ./src/components/edit/edit.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_1ad43f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=1ad43f8f&scoped=true& */ "./src/components/edit/edit.vue?vue&type=template&id=1ad43f8f&scoped=true&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./src/components/edit/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _css_edit_edit_css_vue_type_style_index_0_id_1ad43f8f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/edit/edit.css?vue&type=style&index=0&id=1ad43f8f&scoped=true&lang=css& */ "./src/css/edit/edit.css?vue&type=style&index=0&id=1ad43f8f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _edit_vue_vue_type_template_id_1ad43f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_1ad43f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1ad43f8f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/edit/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/edit/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/edit/edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/css/edit/edit.css?vue&type=style&index=0&id=1ad43f8f&scoped=true&lang=css&":
/*!****************************************************************************************!*\
  !*** ./src/css/edit/edit.css?vue&type=style&index=0&id=1ad43f8f&scoped=true&lang=css& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_edit_css_vue_type_style_index_0_id_1ad43f8f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!./edit.css?vue&type=style&index=0&id=1ad43f8f&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/css/edit/edit.css?vue&type=style&index=0&id=1ad43f8f&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/edit/edit.vue?vue&type=template&id=1ad43f8f&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/components/edit/edit.vue?vue&type=template&id=1ad43f8f&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_1ad43f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_1ad43f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_1ad43f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=1ad43f8f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/edit.vue?vue&type=template&id=1ad43f8f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/edit.vue?vue&type=template&id=1ad43f8f&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/edit/edit.vue?vue&type=template&id=1ad43f8f&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "edit-blog-container" },
    [
      _c("div", { staticClass: "edit-head" }, [
        _c(
          "a",
          {
            staticClass: "iconfont icon-qianyitian",
            on: {
              click: function($event) {
                return _vm.$router.push({ path: "/" })
              }
            }
          },
          [_vm._v("\n            所有文章\n        ")]
        ),
        _vm._v(" "),
        _c("a", [_vm._v("\n            写文章\n        ")]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "iconfont icon-fabu", on: { click: _vm.launchBlog } },
          [_vm._v("\n            发布\n        ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "blog-title" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.blog.title,
              expression: "blog.title"
            }
          ],
          attrs: { placeholder: "输入标题", type: "text" },
          domProps: { value: _vm.blog.title },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.blog, "title", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "blog-subjects" },
        [
          _vm._l(_vm.blogSubjects, function(sub) {
            return _c(
              "a",
              {
                key: sub.id,
                on: {
                  click: function($event) {
                    _vm.subjectDialog.visible = true
                  }
                }
              },
              [_vm._v(_vm._s(sub.name))]
            )
          }),
          _vm._v(" "),
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  _vm.subjectDialog.visible = true
                }
              }
            },
            [_vm._v("添加专题")]
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "editor-md-container" }, [
        _c(
          "div",
          { staticClass: "editor-controls" },
          [
            _c("el-popover-header", {
              on: { "insert-header": _vm.insertHeader }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-jiacu",
              staticStyle: { "font-size": "14px" },
              on: { click: _vm.emphasis }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-xieti",
              on: { click: _vm.italics }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-dashujukeshihuaico-",
              staticStyle: { "font-size": "18px" },
              on: { click: _vm.codeBlock }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-link1",
              on: {
                click: function($event) {
                  return _vm.showLinkDialog("link")
                }
              }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-tupian",
              staticStyle: { "font-size": "20px" },
              on: {
                click: function($event) {
                  return _vm.showLinkDialog("img")
                }
              }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-youxuliebiao",
              staticStyle: { "font-size": "18px" },
              on: { click: _vm.orderedList }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-wuxuliebiao",
              staticStyle: { "font-size": "18px" },
              attrs: { title: "无序列表" },
              on: { click: _vm.unorderedList }
            }),
            _vm._v(" "),
            _c("el-popover-help")
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "edit-container" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.blog.source,
                expression: "blog.source"
              }
            ],
            attrs: { id: "content", placeholder: "赶快开始你的学习吧" },
            domProps: { value: _vm.blog.source },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.blog, "source", $event.target.value)
                },
                _vm.setMarkdown
              ],
              keydown: _vm.enterKey,
              scroll: _vm.onscroll
            }
          })
        ]),
        _vm._v(" "),
        _c("div", {
          directives: [{ name: "highlight", rawName: "v-highlight" }],
          staticClass: "preview-container",
          attrs: { id: "preview" },
          domProps: { innerHTML: _vm._s(_vm.blog.preHtml) }
        })
      ]),
      _vm._v(" "),
      _c("el-dialog-link", {
        attrs: {
          linkDialog: _vm.linkDialog,
          handleTextarea: _vm.handleTextarea
        }
      }),
      _vm._v(" "),
      _c("el-dialog-subject", {
        attrs: {
          subjectDialog: _vm.subjectDialog,
          blogSubjects: _vm.blogSubjects
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvZWRpdC9lZGl0LnZ1ZSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY3NzL2VkaXQvZWRpdC5jc3M/M2Y1NSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9lZGl0L2VkaXQudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2VkaXQvZWRpdC52dWU/MWE4MSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9lZGl0L2VkaXQudnVlPzVmZDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQURBO0FBRUEscUJBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsS0FEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsMkJBRkE7QUFHQTtBQUhBLGFBREE7QUFNQTtBQUNBLDZCQURBO0FBRUEsd0JBRkE7QUFHQSx3QkFIQTtBQUlBLDhCQUpBO0FBS0E7QUFMQSxhQU5BO0FBYUE7QUFDQSw2QkFEQTtBQUVBO0FBRkEsYUFiQTtBQWlCQSw0QkFqQkE7QUFrQkE7QUFsQkE7QUFvQkEsS0E1QkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FEQTtBQUVBLHNDQUZBO0FBR0EsbUNBSEE7QUFJQTtBQUpBO0FBTUEsYUFUQSxFQVNBLFNBVEE7QUFVQTtBQUVBLEtBL0NBO0FBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBO0FBS0EsS0F0REE7QUF1REE7QUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBSkEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENB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QVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNyY19jb21wb25lbnRzX2VkaXRfZWRpdF92dWUuZjIzMDE0NGZjMjU4ZDY4YTA3MjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZWRpdC1ibG9nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWhlYWRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLXFpYW55aXRpYW5cIiBAY2xpY2s9XCIkcm91dGVyLnB1c2goe3BhdGg6Jy8nfSlcIj5cclxuICAgICAgICAgICAgICAgIOaJgOacieaWh+eroFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAg5YaZ5paH56ugXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImljb25mb250IGljb24tZmFidVwiIEBjbGljaz1cImxhdW5jaEJsb2dcIiA+XHJcbiAgICAgICAgICAgICAgICDlj5HluINcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwi6L6T5YWl5qCH6aKYXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiYmxvZy50aXRsZVwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZy1zdWJqZWN0c1wiPlxyXG4gICAgICAgICAgICA8YSBAY2xpY2s9XCJzdWJqZWN0RGlhbG9nLnZpc2libGU9dHJ1ZTtcIlxyXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJzdWIgaW4gYmxvZ1N1YmplY3RzXCIgOmtleT1cInN1Yi5pZFwiPnt7c3ViLm5hbWV9fTwvYT5cclxuICAgICAgICAgICAgPGEgQGNsaWNrPVwic3ViamVjdERpYWxvZy52aXNpYmxlPXRydWU7XCI+5re75Yqg5LiT6aKYPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3ItbWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3ItY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgIDxlbC1wb3BvdmVyLWhlYWRlciBAaW5zZXJ0LWhlYWRlcj1cImluc2VydEhlYWRlclwiPjwvZWwtcG9wb3Zlci1oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tamlhY3VcIiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4O1wiIEBjbGljaz1cImVtcGhhc2lzXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLXhpZXRpXCIgQGNsaWNrPVwiaXRhbGljc1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1kYXNodWp1a2VzaGlodWFpY28tXCIgc3R5bGU9XCJmb250LXNpemU6MThweDtcIiBAY2xpY2s9XCJjb2RlQmxvY2tcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tbGluazFcIiBAY2xpY2s9XCJzaG93TGlua0RpYWxvZygnbGluaycpXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLXR1cGlhblwiIHN0eWxlPVwiZm9udC1zaXplOjIwcHg7XCIgQGNsaWNrPVwic2hvd0xpbmtEaWFsb2coJ2ltZycpXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLXlvdXh1bGllYmlhb1wiIHN0eWxlPVwiZm9udC1zaXplOjE4cHg7XCIgQGNsaWNrPVwib3JkZXJlZExpc3RcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24td3V4dWxpZWJpYW9cIiBzdHlsZT1cImZvbnQtc2l6ZToxOHB4O1wiIHRpdGxlPVwi5peg5bqP5YiX6KGoXCIgQGNsaWNrPVwidW5vcmRlcmVkTGlzdFwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxlbC1wb3BvdmVyLWhlbHA+PC9lbC1wb3BvdmVyLWhlbHA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImNvbnRlbnRcIiB2LW1vZGVsPVwiYmxvZy5zb3VyY2VcIiBcclxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJzZXRNYXJrZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLotbblv6vlvIDlp4vkvaDnmoTlrabkuaDlkKdcIiBAa2V5ZG93bj1cImVudGVyS2V5XCIgQHNjcm9sbD1cIm9uc2Nyb2xsXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcmV2aWV3XCIgY2xhc3M9XCJwcmV2aWV3LWNvbnRhaW5lclwiIHYtaHRtbD1cImJsb2cucHJlSHRtbFwiIHYtaGlnaGxpZ2h0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZWwtZGlhbG9nLWxpbmsgOmxpbmtEaWFsb2c9XCJsaW5rRGlhbG9nXCIgOmhhbmRsZVRleHRhcmVhPVwiaGFuZGxlVGV4dGFyZWFcIj48L2VsLWRpYWxvZy1saW5rPlxyXG4gICAgICAgIDxlbC1kaWFsb2ctc3ViamVjdCA6c3ViamVjdERpYWxvZz1cInN1YmplY3REaWFsb2dcIiA6YmxvZ1N1YmplY3RzPVwiYmxvZ1N1YmplY3RzXCI+PC9lbC1kaWFsb2ctc3ViamVjdD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxubGV0IGNvbnZlcnRlciA9IG5ldyBzaG93ZG93bi5Db252ZXJ0ZXIoKTtcclxubGV0IEVsUG9wb3ZlckhlYWRlcj0oKT0+aW1wb3J0KCcuL2VsLXBvcG92ZXItaGVhZGVyLnZ1ZScpO1xyXG5sZXQgRWxQb3BvdmVySGVscD0oKT0+aW1wb3J0KCcuL2VsLXBvcG92ZXItaGVscC52dWUnKTtcclxubGV0IEVsRGlhbG9nTGluaz0oKT0+aW1wb3J0KCcuL2VsLWRpYWxvZy1saW5rLnZ1ZScpO1xyXG5sZXQgRWxEaWFsb2dTdWJqZWN0PSgpPT5pbXBvcnQoJy4vZWwtZGlhbG9nLXN1YmplY3QudnVlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOntcclxuICAgICAgICBFbFBvcG92ZXJIZWFkZXIsXHJcbiAgICAgICAgRWxQb3BvdmVySGVscCxcclxuICAgICAgICBFbERpYWxvZ0xpbmssXHJcbiAgICAgICAgRWxEaWFsb2dTdWJqZWN0XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgYmxvZzp7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6JycsXHJcbiAgICAgICAgICAgICAgICBwcmVIdG1sOicnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6JydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlua0RpYWxvZzp7Ly/mj5LlhaXpk77mjqXnmoREaWFsb2dcclxuICAgICAgICAgICAgICAgIHRpdGxlOifmj5LlhaXpk77mjqUnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDonJyxcclxuICAgICAgICAgICAgICAgIGhyZWY6JycsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTonbGluaydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3ViamVjdERpYWxvZzp7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5LiT6aKY566h55CGJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJsb2dTdWJqZWN0czpbXSxcclxuICAgICAgICAgICAgaW50ZXJ2YXJsOm51bGxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgY3JlYXRlZCgpe1xyXG4gICAgICAgIGlmKHRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGU9PT0nZWRpdCcpe1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldEJsb2dCeUlkKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0U3ViamVjdEJ5QmxvZ0lkKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZighdGhpcy5pbnRlcnZhcmwpe1xyXG4gICAgICAgICAgICB0aGlzLmludGVydmFybD1zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiRyb3V0ZS5xdWVyeS5pZCxKU09OLnN0cmluZ2lmeSh0aGlzLmJsb2cpKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRlPW5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRlLnRvVGltZVN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICflt7LkuLrmgqjoh6rliqjkv53lrZgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjoxMDAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwxMDAwKjEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpe1xyXG4gICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZD1lPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkc2RzZCcpXHJcbiAgICAgICAgICAgIGFsZXJ0KCdsZWF2ZScpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgICBzZXRNYXJrZG93bigpe1xyXG4gICAgICAgICAgICB0aGlzLmJsb2cucHJlSHRtbD1jb252ZXJ0ZXIubWFrZUh0bWwodGhpcy5ibG9nLnNvdXJjZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVUZXh0YXJlYShpbnNlcnQpe1xyXG4gICAgICAgICAgICBsZXQgdGV4dGFyZWE9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zPXRleHRhcmVhLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICAvLyBsZXQgc2Nyb2xsVG9wPXRleHRhcmVhLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgbGV0IHZhbHVlPXRleHRhcmVhLnZhbHVlOy8v5Y+W5Ye65b2T5YmN5paH5pys5Z+f5YaF55qE5YC8XHJcbiAgICAgICAgICAgIGluc2VydCh0ZXh0YXJlYSxzdGFydFBvcyx2YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIGlmKHRleHRhcmVhLnNjcm9sbFRvcD4wKVxyXG4gICAgICAgICAgICAvLyAgICAgdGV4dGFyZWEuc2Nyb2xsVG9wPXNjcm9sbFRvcDtcclxuICAgICAgICAgICAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICAgICAgICAgICAgdGhpcy5ibG9nLnNvdXJjZT10ZXh0YXJlYS52YWx1ZTsvL+abtOaWsGNvbnRlbnRcclxuICAgICAgICAgICAgdGhpcy5zZXRNYXJrZG93bigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5zZXJ0SGVhZGVyKGluZGV4KXtcclxuICAgICAgICAgICAgbGV0IGluc2VydD1uZXcgQXJyYXkoaW5kZXgrMikuZmlsbCgnIycpLmpvaW4oJycpO1xyXG4gICAgICAgICAgICBsZXQgbWV0aG9kPSh0ZXh0YXJlYSxzdGFydFBvcyx2YWx1ZSk9PntcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLHN0YXJ0UG9zKSsnXFxuJ1xyXG4gICAgICAgICAgICAgICAgK2luc2VydCt2YWx1ZS5zdWJzdHJpbmcoc3RhcnRQb3MsdmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVUZXh0YXJlYShtZXRob2QpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1waGFzaXMoKXtcclxuICAgICAgICAgICAgbGV0IG1ldGhvZD0odGV4dGFyZWEsc3RhcnRQb3MsdmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zPXRleHRhcmVhLnNlbGVjdGlvbkVuZDtcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLHN0YXJ0UG9zKSsnKionK3ZhbHVlLnN1YnN0cmluZyhzdGFydFBvcyxlbmRQb3MpXHJcbiAgICAgICAgICAgICAgICArJyoqJyt2YWx1ZS5zdWJzdHJpbmcoZW5kUG9zLHZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVGV4dGFyZWEobWV0aG9kKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0YWxpY3MoKXtcclxuICAgICAgICAgICAgbGV0IG1ldGhvZD0odGV4dGFyZWEsc3RhcnRQb3MsdmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zPXRleHRhcmVhLnNlbGVjdGlvbkVuZDtcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLHN0YXJ0UG9zKSsnKicrdmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLGVuZFBvcylcclxuICAgICAgICAgICAgICAgICsnKicrdmFsdWUuc3Vic3RyaW5nKGVuZFBvcyx2YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRleHRhcmVhKG1ldGhvZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2RlQmxvY2soKXtcclxuICAgICAgICAgICAgbGV0IG1ldGhvZD0odGV4dGFyZWEsc3RhcnRQb3MsdmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zPXRleHRhcmVhLnNlbGVjdGlvbkVuZDtcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcylcclxuICAgICAgICAgICAgICAgICsgJ1xcbmBgYFxcbicrdmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLGVuZFBvcylcclxuICAgICAgICAgICAgICAgICsnXFxuYGBgXFxuJyArIHZhbHVlLnN1YnN0cmluZyhlbmRQb3MsIHZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVGV4dGFyZWEobWV0aG9kKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dMaW5rRGlhbG9nKHR5cGUpe1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtEaWFsb2cudmlzaWJsZT10cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtEaWFsb2cudHlwZT10eXBlO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtEaWFsb2cudGl0bGU9dHlwZT09PSdsaW5rJyA/ICfmj5LlhaXpk77mjqUnIDogJ+aPkuWFpeWbvueJhyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcmRlcmVkTGlzdCgpe1xyXG4gICAgICAgICAgICBsZXQgbWV0aG9kPSh0ZXh0YXJlYSxzdGFydFBvcyx2YWx1ZSk9PntcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcylcclxuICAgICAgICAgICAgICAgICsnXFxuMS4g56ys5LiA6aG5XFxuMi4g56ys5LqM6aG5XFxuMy4g56ys5LiJ6aG5JysgdmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLCB2YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVGV4dGFyZWEobWV0aG9kKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVub3JkZXJlZExpc3QoKXtcclxuICAgICAgICAgICAgbGV0IG1ldGhvZD0odGV4dGFyZWEsc3RhcnRQb3MsdmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpXHJcbiAgICAgICAgICAgICAgICArJ1xcbisg56ys5LiA6aG5XFxuKyDnrKzkuozpoblcXG4rIOesrOS4iemhuScrIHZhbHVlLnN1YnN0cmluZyhzdGFydFBvcywgdmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRleHRhcmVhKG1ldGhvZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRCbG9nQnlJZCgpe1xyXG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICAvL+agueaNrmlk6K+35rGC5pWw5o2u5bm25riy5p+T5qCH6aKY44CB5paH5pys5Z+f5ZKM6aKE6KeIXHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDonaHR0cDovLzQyLjE5Mi4xODAuMTQyOjMwMDAvYmxvZ3MvJyt0aGF0LiRyb3V0ZS5xdWVyeS5pZCxcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhhdC5ibG9nLnByZUh0bWw9cmVzLmRhdGEuaHRtbDtcclxuICAgICAgICAgICAgICAgIHRoYXQuYmxvZy5zb3VyY2U9cmVzLmRhdGEuYmxvZy5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5ibG9nLnRpdGxlPXJlcy5kYXRhLmJsb2cudGl0bGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlQmxvZygpe1xyXG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICAvL+abtOaWsOaWh+eroFxyXG4gICAgICAgICAgICB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BVVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2Jsb2dzLycrdGhhdC4kcm91dGUucXVlcnkuaWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOnRoYXQuYmxvZ1xyXG4gICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAvL+i3s+i9rOWIsOafpeeci+mhtemdolxyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6Jy9ibG9ncy8nK3RoYXQuJHJvdXRlLnF1ZXJ5LmlkfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U3ViamVjdEJ5QmxvZ0lkKCl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDonaHR0cDovLzQyLjE5Mi4xODAuMTQyOjMwMDAvc3ViamVjdHMvJyt0aGF0LiRyb3V0ZS5xdWVyeS5pZFxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICB0aGF0LmJsb2dTdWJqZWN0cz1yZXMuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRCbG9nKCl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIC8v5paw5aKe5paH56ugXHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2Jsb2dzJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6dGhhdC5ibG9nXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIC8v6Lez6L2s5Yiw5p+l55yL6aG16Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDonL2Jsb2dzLycrcmVzLmRhdGEuaWR9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYXVuY2hCbG9nKCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGU9PT0nZWRpdCcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCbG9nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQmxvZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnRlcktleShlKXtcclxuICAgICAgICAgICAgbGV0IG1ldGhvZD0odGV4dGFyZWEsc3RhcnRQb3MsdmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCxzdGFydFBvcykrJzxicj5cXG4nK3ZhbHVlLnN1YnN0cmluZyhzdGFydFBvcyx2YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN3aXRjaChlLmtleSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlbnRlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVUZXh0YXJlYShtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uc2Nyb2xsKGUpe1xyXG4gICAgICAgICAgICBsZXQgdGV4dD1lLnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IHByZXZpZXc9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXcnKTtcclxuICAgICAgICAgICAgcHJldmlldy5zY3JvbGxUb3A9dGV4dC5zY3JvbGxUb3AvMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uLy4uL2Nzcy9lZGl0L2VkaXQuY3NzXCI+XHJcblxyXG48L3N0eWxlPiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWFkNDNmOGYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi8uLi9jc3MvZWRpdC9lZGl0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhZDQzZjhmJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxYWQ0M2Y4ZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERlbGxcXFxcRGVza3RvcFxcXFxNeS1JZGVhXFxcXE15QmxvZ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYWQ0M2Y4ZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYWQ0M2Y4ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYWQ0M2Y4ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWFkNDNmOGYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWFkNDNmOGYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2VkaXQvZWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlZGl0LWJsb2ctY29udGFpbmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVkaXQtaGVhZFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1xaWFueWl0aWFuXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLnB1c2goeyBwYXRoOiBcIi9cIiB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5omA5pyJ5paH56ugXFxuICAgICAgICBcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5YaZ5paH56ugXFxuICAgICAgICBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tZmFidVwiLCBvbjogeyBjbGljazogX3ZtLmxhdW5jaEJsb2cgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDlj5HluINcXG4gICAgICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9nLXRpdGxlXCIgfSwgW1xuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uYmxvZy50aXRsZSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJibG9nLnRpdGxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIui+k+WFpeagh+mimFwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uYmxvZy50aXRsZSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5ibG9nLCBcInRpdGxlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy1zdWJqZWN0c1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX2woX3ZtLmJsb2dTdWJqZWN0cywgZnVuY3Rpb24oc3ViKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBzdWIuaWQsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnN1YmplY3REaWFsb2cudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHN1Yi5uYW1lKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zdWJqZWN0RGlhbG9nLnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIua3u+WKoOS4k+mimFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlZGl0b3ItbWQtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZWRpdG9yLWNvbnRyb2xzXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImVsLXBvcG92ZXItaGVhZGVyXCIsIHtcbiAgICAgICAgICAgICAgb246IHsgXCJpbnNlcnQtaGVhZGVyXCI6IF92bS5pbnNlcnRIZWFkZXIgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1qaWFjdVwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE0cHhcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmVtcGhhc2lzIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24teGlldGlcIixcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5pdGFsaWNzIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tZGFzaHVqdWtlc2hpaHVhaWNvLVwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE4cHhcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNvZGVCbG9jayB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWxpbmsxXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93TGlua0RpYWxvZyhcImxpbmtcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tdHVwaWFuXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMjBweFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93TGlua0RpYWxvZyhcImltZ1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi15b3V4dWxpZWJpYW9cIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxOHB4XCIgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcmRlcmVkTGlzdCB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLXd1eHVsaWViaWFvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMThweFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuaXoOW6j+WIl+ihqFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udW5vcmRlcmVkTGlzdCB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImVsLXBvcG92ZXItaGVscFwiKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVkaXQtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYmxvZy5zb3VyY2UsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJibG9nLnNvdXJjZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhdHRyczogeyBpZDogXCJjb250ZW50XCIsIHBsYWNlaG9sZGVyOiBcIui1tuW/q+W8gOWni+S9oOeahOWtpuS5oOWQp1wiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmJsb2cuc291cmNlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmJsb2csIFwic291cmNlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uc2V0TWFya2Rvd25cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAga2V5ZG93bjogX3ZtLmVudGVyS2V5LFxuICAgICAgICAgICAgICBzY3JvbGw6IF92bS5vbnNjcm9sbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW3sgbmFtZTogXCJoaWdobGlnaHRcIiwgcmF3TmFtZTogXCJ2LWhpZ2hsaWdodFwiIH1dLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByZXZpZXctY29udGFpbmVyXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicHJldmlld1wiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmJsb2cucHJlSHRtbCkgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJlbC1kaWFsb2ctbGlua1wiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGlua0RpYWxvZzogX3ZtLmxpbmtEaWFsb2csXG4gICAgICAgICAgaGFuZGxlVGV4dGFyZWE6IF92bS5oYW5kbGVUZXh0YXJlYVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImVsLWRpYWxvZy1zdWJqZWN0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBzdWJqZWN0RGlhbG9nOiBfdm0uc3ViamVjdERpYWxvZyxcbiAgICAgICAgICBibG9nU3ViamVjdHM6IF92bS5ibG9nU3ViamVjdHNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=