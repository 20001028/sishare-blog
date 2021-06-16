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
    provide: function () {
        return {
            blog: this.blog
        };
    },
    data() {
        return {
            blog: {
                id: '',
                preHtml: '',
                reading: 0,
                source: '',
                visible: true,
                subjects: [],
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
            intervarl: null
        };
    },
    async created() {
        if (this.$route.query.type === 'edit') {
            this.blog = await this.getBlogById();
            this.$set(this.blog, 'subjects', (await this.getSubjectByBlogId()));
            console.log(this.blog);
            //创建定时器，定时保存，会在destroyed时销毁
            if (!this.intervarl) {
                this.intervarl = setInterval(() => {
                    this.updateBlog();
                    let date = new Date();
                    this.$notify({
                        title: date.toTimeString(),
                        message: '已为您自动保存',
                        type: 'success',
                        duration: 1000
                    });
                }, 1000 * 60);
            }
        } else {
            this.blog.id = this.getId();
            if (!this.intervarl) {
                this.intervarl = setInterval(() => {
                    sessionStorage.setItem(this.blog.id, JSON.stringify(this.blog));
                    let date = new Date();
                    this.$notify({
                        title: date.toTimeString(),
                        message: '已为您自动保存',
                        type: 'success',
                        duration: 1000
                    });
                }, 1000 * 10);
            }
        }
    },
    mounted() {},
    methods: {
        // 把源代码转换为markdown格式
        setMarkdown() {
            this.blog.preHtml = converter.makeHtml(this.blog.source);
        },
        // 生成一个唯一id
        getId() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : r & 0x3 | 0x8;
                return v.toString(16);
            });
        },
        // 处理markdown编辑器
        // 传入一个处理函数
        handleTextarea(insert) {
            let textarea = document.getElementById('content');
            let startPos = textarea.selectionStart;
            let value = textarea.value; //取出当前文本域内的值
            insert(textarea, startPos, value);
            textarea.focus();
            this.blog.source = textarea.value; //更新content
            this.setMarkdown();
        },
        // 标题h2-h5
        insertHeader(index) {
            let insert = new Array(index + 2).fill('#').join('');
            let method = (textarea, startPos, value) => {
                textarea.value = value.substring(0, startPos) + '\n' + insert + value.substring(startPos, value.length);
            };
            this.handleTextarea(method);
        },
        // 加粗
        emphasis() {
            let method = (textarea, startPos, value) => {
                let endPos = textarea.selectionEnd;
                textarea.value = value.substring(0, startPos) + '**' + value.substring(startPos, endPos) + '**' + value.substring(endPos, value.length);
            };
            this.handleTextarea(method);
        },
        // 斜体
        italics() {
            let method = (textarea, startPos, value) => {
                let endPos = textarea.selectionEnd;
                textarea.value = value.substring(0, startPos) + '*' + value.substring(startPos, endPos) + '*' + value.substring(endPos, value.length);
            };
            this.handleTextarea(method);
        },
        // 代码块
        codeBlock() {
            let method = (textarea, startPos, value) => {
                let endPos = textarea.selectionEnd;
                textarea.value = value.substring(0, startPos) + '\n```\n' + value.substring(startPos, endPos) + '\n```\n' + value.substring(endPos, value.length);
            };
            this.handleTextarea(method);
        },
        // 打开链接对话框
        showLinkDialog(type) {
            this.linkDialog.visible = true;
            this.linkDialog.type = type;
            this.linkDialog.title = type === 'link' ? '插入链接' : '插入图片';
        },
        // 有序列表
        orderedList() {
            let method = (textarea, startPos, value) => {
                textarea.value = value.substring(0, startPos) + '\n1. 第一项\n2. 第二项\n3. 第三项' + value.substring(startPos, value.length);
            };
            this.handleTextarea(method);
        },
        // 无序列表
        unorderedList() {
            let method = (textarea, startPos, value) => {
                textarea.value = value.substring(0, startPos) + '\n+ 第一项\n+ 第二项\n+ 第三项' + value.substring(startPos, value.length);
            };
            this.handleTextarea(method);
        },
        // 根据ID获取blog
        getBlogById() {
            let that = this;
            //根据id请求数据并渲染标题、文本域和预览
            return that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/blogs/' + that.$route.query.id
            }).then(res => {
                return res.data;
            });
        },
        updateBlog() {
            let that = this;
            //更新文章
            that.$axios({
                method: 'PUT',
                url: 'http://42.192.180.142:3000/blogs/' + that.blog.id,
                data: that.blog
            }).then(res => {
                //跳转到查看页面
                //this.$router.push({path:'/blogs/'+that.blog.id});
            });
        },
        getSubjectByBlogId() {
            let that = this;
            return that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/subjects/' + that.$route.query.id
            }).then(res => {
                return res.data;
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

            });
        },
        async launchBlog() {
            console.log('ok');
            if (this.blog.title.trim() === '') {
                document.getElementById('blog-title').focus();
                this.$message.error('不能缺少标题');
                return;
            }
            if (this.blog.subjects.length < 1) {
                this.$message.error('请至少为您的Blog添加一个专题');
                setTimeout(() => {
                    this.subjectDialog.visible = true;
                }, 1000);
                return;
            }
            if (this.$route.query.type === 'edit') {
                this.updateBlog();
            } else {
                this.addBlog();
            }
            setTimeout(() => {
                this.$router.push({ path: '/blogs/' + this.blog.id });
            }, 100);
            //this.$router.push({path:'/blogs/'+this.blog.id});
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
    },
    beforeDestroy() {
        if (this.intervarl) clearInterval(this.intervarl);
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
          attrs: { id: "blog-title", placeholder: "输入标题", type: "text" },
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
          _vm._l(_vm.blog.subjects, function(sub) {
            return _c(
              "a",
              {
                key: sub.id,
                ref: "subject",
                refInFor: true,
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
        ref: "link",
        attrs: {
          linkDialog: _vm.linkDialog,
          handleTextarea: _vm.handleTextarea,
          blog: _vm.blog
        },
        on: { click: _vm.test }
      }),
      _vm._v(" "),
      _c("el-dialog-subject", {
        attrs: {
          subjectDialog: _vm.subjectDialog,
          blogSubjects: _vm.blog.subjects
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvZWRpdC9lZGl0LnZ1ZSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY3NzL2VkaXQvZWRpdC5jc3M/M2Y1NSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9lZGl0L2VkaXQudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2VkaXQvZWRpdC52dWU/MWE4MSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9lZGl0L2VkaXQudnVlPzVmZDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQURBO0FBRUEscUJBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsS0FEQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0EsS0FYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsMkJBRkE7QUFHQSwwQkFIQTtBQUlBLDBCQUpBO0FBS0EsNkJBTEE7QUFNQSw0QkFOQTtBQU9BO0FBUEEsYUFEQTtBQVVBO0FBQ0EsNkJBREE7QUFFQSx3QkFGQTtBQUdBLHdCQUhBO0FBSUEsOEJBSkE7QUFLQTtBQUxBLGFBVkE7QUFpQkE7QUFDQSw2QkFEQTtBQUVBO0FBRkEsYUFqQkE7QUFxQkE7QUFyQkE7QUF1QkEsS0FwQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQURBO0FBRUEsMENBRkE7QUFHQSx1Q0FIQTtBQUlBO0FBSkE7QUFNQSxpQkFUQSxFQVNBLFNBVEE7QUFVQTtBQUNBLFNBakJBLE1BaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBREE7QUFFQSwwQ0FGQTtBQUdBLHVDQUhB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c0I7QUFDbEQsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xELG1CQUFtQjtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMENBQTBDO0FBQzlELHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQyxxQkFBcUI7QUFDckIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNyY19jb21wb25lbnRzX2VkaXRfZWRpdF92dWUuYzM0ZmVkMGFkNTQ2YTgyYTZiOWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZWRpdC1ibG9nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWhlYWRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLXFpYW55aXRpYW5cIiBAY2xpY2s9XCIkcm91dGVyLnB1c2goe3BhdGg6Jy8nfSlcIj5cclxuICAgICAgICAgICAgICAgIOaJgOacieaWh+eroFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAg5YaZ5paH56ugXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImljb25mb250IGljb24tZmFidVwiIEBjbGljaz1cImxhdW5jaEJsb2dcIiA+XHJcbiAgICAgICAgICAgICAgICDlj5HluINcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwiYmxvZy10aXRsZVwiIHBsYWNlaG9sZGVyPVwi6L6T5YWl5qCH6aKYXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiYmxvZy50aXRsZVwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZy1zdWJqZWN0c1wiPlxyXG4gICAgICAgICAgICA8YSByZWY9XCJzdWJqZWN0XCIgQGNsaWNrPVwic3ViamVjdERpYWxvZy52aXNpYmxlPXRydWU7XCJcclxuICAgICAgICAgICAgICAgIHYtZm9yPVwic3ViIGluIGJsb2cuc3ViamVjdHNcIiA6a2V5PVwic3ViLmlkXCI+e3tzdWIubmFtZX19PC9hPlxyXG4gICAgICAgICAgICA8YSBAY2xpY2s9XCJzdWJqZWN0RGlhbG9nLnZpc2libGU9dHJ1ZTtcIj7mt7vliqDkuJPpopg8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvci1tZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvci1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgPGVsLXBvcG92ZXItaGVhZGVyIEBpbnNlcnQtaGVhZGVyPVwiaW5zZXJ0SGVhZGVyXCI+PC9lbC1wb3BvdmVyLWhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1qaWFjdVwiIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7XCIgQGNsaWNrPVwiZW1waGFzaXNcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24teGlldGlcIiBAY2xpY2s9XCJpdGFsaWNzXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWRhc2h1anVrZXNoaWh1YWljby1cIiBzdHlsZT1cImZvbnQtc2l6ZToxOHB4O1wiIEBjbGljaz1cImNvZGVCbG9ja1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1saW5rMVwiIEBjbGljaz1cInNob3dMaW5rRGlhbG9nKCdsaW5rJylcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tdHVwaWFuXCIgc3R5bGU9XCJmb250LXNpemU6MjBweDtcIiBAY2xpY2s9XCJzaG93TGlua0RpYWxvZygnaW1nJylcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24teW91eHVsaWViaWFvXCIgc3R5bGU9XCJmb250LXNpemU6MThweDtcIiBAY2xpY2s9XCJvcmRlcmVkTGlzdFwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi13dXh1bGllYmlhb1wiIHN0eWxlPVwiZm9udC1zaXplOjE4cHg7XCIgQGNsaWNrPVwidW5vcmRlcmVkTGlzdFwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxlbC1wb3BvdmVyLWhlbHA+PC9lbC1wb3BvdmVyLWhlbHA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImNvbnRlbnRcIiB2LW1vZGVsPVwiYmxvZy5zb3VyY2VcIiBcclxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJzZXRNYXJrZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLotbblv6vlvIDlp4vkvaDnmoTlrabkuaDlkKdcIiBAa2V5ZG93bj1cImVudGVyS2V5XCIgQHNjcm9sbD1cIm9uc2Nyb2xsXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcmV2aWV3XCIgY2xhc3M9XCJwcmV2aWV3LWNvbnRhaW5lclwiIHYtaHRtbD1cImJsb2cucHJlSHRtbFwiIHYtaGlnaGxpZ2h0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZWwtZGlhbG9nLWxpbmsgcmVmPVwibGlua1wiIDpsaW5rRGlhbG9nPVwibGlua0RpYWxvZ1wiIDpoYW5kbGVUZXh0YXJlYT1cImhhbmRsZVRleHRhcmVhXCIgQGNsaWNrPVwidGVzdFwiIDpibG9nPVwiYmxvZ1wiPjwvZWwtZGlhbG9nLWxpbms+XHJcbiAgICAgICAgPGVsLWRpYWxvZy1zdWJqZWN0IDpzdWJqZWN0RGlhbG9nPVwic3ViamVjdERpYWxvZ1wiIDpibG9nU3ViamVjdHM9XCJibG9nLnN1YmplY3RzXCI+PC9lbC1kaWFsb2ctc3ViamVjdD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxubGV0IGNvbnZlcnRlciA9IG5ldyBzaG93ZG93bi5Db252ZXJ0ZXIoKTtcclxubGV0IEVsUG9wb3ZlckhlYWRlcj0oKT0+aW1wb3J0KCcuL2VsLXBvcG92ZXItaGVhZGVyLnZ1ZScpO1xyXG5sZXQgRWxQb3BvdmVySGVscD0oKT0+aW1wb3J0KCcuL2VsLXBvcG92ZXItaGVscC52dWUnKTtcclxubGV0IEVsRGlhbG9nTGluaz0oKT0+aW1wb3J0KCcuL2VsLWRpYWxvZy1saW5rLnZ1ZScpO1xyXG5sZXQgRWxEaWFsb2dTdWJqZWN0PSgpPT5pbXBvcnQoJy4vZWwtZGlhbG9nLXN1YmplY3QudnVlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOntcclxuICAgICAgICBFbFBvcG92ZXJIZWFkZXIsXHJcbiAgICAgICAgRWxQb3BvdmVySGVscCxcclxuICAgICAgICBFbERpYWxvZ0xpbmssXHJcbiAgICAgICAgRWxEaWFsb2dTdWJqZWN0XHJcbiAgICB9LFxyXG4gICAgcHJvdmlkZTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgYmxvZzp0aGlzLmJsb2dcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgYmxvZzp7XHJcbiAgICAgICAgICAgICAgICBpZDonJyxcclxuICAgICAgICAgICAgICAgIHByZUh0bWw6JycsXHJcbiAgICAgICAgICAgICAgICByZWFkaW5nOjAsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6JycsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOnRydWUsXHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0czpbXSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOicnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpbmtEaWFsb2c6ey8v5o+S5YWl6ZO+5o6l55qERGlhbG9nXHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5o+S5YWl6ZO+5o6lJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6JycsXHJcbiAgICAgICAgICAgICAgICBocmVmOicnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6J2xpbmsnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1YmplY3REaWFsb2c6e1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+S4k+mimOeuoeeQhicsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnRlcnZhcmw6bnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBjcmVhdGVkKCl7XHJcbiAgICAgICAgaWYodGhpcy4kcm91dGUucXVlcnkudHlwZT09PSdlZGl0Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvZz1hd2FpdCB0aGlzLmdldEJsb2dCeUlkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmJsb2csJ3N1YmplY3RzJyxhd2FpdCB0aGlzLmdldFN1YmplY3RCeUJsb2dJZCgpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ibG9nKVxyXG4gICAgICAgICAgICAvL+WIm+W7uuWumuaXtuWZqO+8jOWumuaXtuS/neWtmO+8jOS8muWcqGRlc3Ryb3llZOaXtumUgOavgVxyXG4gICAgICAgICAgICBpZighdGhpcy5pbnRlcnZhcmwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcnZhcmw9c2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJsb2coKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZT1uZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRlLnRvVGltZVN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5bey5Li65oKo6Ieq5Yqo5L+d5a2YJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjoxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LDEwMDAqNjApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvZy5pZD10aGlzLmdldElkKCk7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmludGVydmFybCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludGVydmFybD1zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGhpcy5ibG9nLmlkLEpTT04uc3RyaW5naWZ5KHRoaXMuYmxvZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRlPW5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGUudG9UaW1lU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICflt7LkuLrmgqjoh6rliqjkv53lrZgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOjEwMDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sMTAwMCoxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpe1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIC8vIOaKiua6kOS7o+eggei9rOaNouS4um1hcmtkb3du5qC85byPXHJcbiAgICAgICAgc2V0TWFya2Rvd24oKXtcclxuICAgICAgICAgICAgdGhpcy5ibG9nLnByZUh0bWw9Y29udmVydGVyLm1ha2VIdG1sKHRoaXMuYmxvZy5zb3VyY2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g55Sf5oiQ5LiA5Liq5ZSv5LiAaWRcclxuICAgICAgICBnZXRJZCgpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLFxyXG4gICAgICAgICAgICAgICAgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlpITnkIZtYXJrZG93bue8lui+keWZqFxyXG4gICAgICAgIC8vIOS8oOWFpeS4gOS4quWkhOeQhuWHveaVsFxyXG4gICAgICAgIGhhbmRsZVRleHRhcmVhKGluc2VydCl7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0YXJlYT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3M9dGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZT10ZXh0YXJlYS52YWx1ZTsvL+WPluWHuuW9k+WJjeaWh+acrOWfn+WGheeahOWAvFxyXG4gICAgICAgICAgICBpbnNlcnQodGV4dGFyZWEsc3RhcnRQb3MsdmFsdWUpO1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS5mb2N1cygpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2cuc291cmNlPXRleHRhcmVhLnZhbHVlOy8v5pu05pawY29udGVudFxyXG4gICAgICAgICAgICB0aGlzLnNldE1hcmtkb3duKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmoIfpophoMi1oNVxyXG4gICAgICAgIGluc2VydEhlYWRlcihpbmRleCl7XHJcbiAgICAgICAgICAgIGxldCBpbnNlcnQ9bmV3IEFycmF5KGluZGV4KzIpLmZpbGwoJyMnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgbGV0IG1ldGhvZD0odGV4dGFyZWEsc3RhcnRQb3MsdmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCxzdGFydFBvcykrJ1xcbidcclxuICAgICAgICAgICAgICAgICtpbnNlcnQrdmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLHZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVGV4dGFyZWEobWV0aG9kKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOWKoOeyl1xyXG4gICAgICAgIGVtcGhhc2lzKCl7XHJcbiAgICAgICAgICAgIGxldCBtZXRob2Q9KHRleHRhcmVhLHN0YXJ0UG9zLHZhbHVlKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZFBvcz10ZXh0YXJlYS5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCxzdGFydFBvcykrJyoqJyt2YWx1ZS5zdWJzdHJpbmcoc3RhcnRQb3MsZW5kUG9zKVxyXG4gICAgICAgICAgICAgICAgKycqKicrdmFsdWUuc3Vic3RyaW5nKGVuZFBvcyx2YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRleHRhcmVhKG1ldGhvZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmlpzkvZNcclxuICAgICAgICBpdGFsaWNzKCl7XHJcbiAgICAgICAgICAgIGxldCBtZXRob2Q9KHRleHRhcmVhLHN0YXJ0UG9zLHZhbHVlKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZFBvcz10ZXh0YXJlYS5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCxzdGFydFBvcykrJyonK3ZhbHVlLnN1YnN0cmluZyhzdGFydFBvcyxlbmRQb3MpXHJcbiAgICAgICAgICAgICAgICArJyonK3ZhbHVlLnN1YnN0cmluZyhlbmRQb3MsdmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVUZXh0YXJlYShtZXRob2QpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5Luj56CB5Z2XXHJcbiAgICAgICAgY29kZUJsb2NrKCl7XHJcbiAgICAgICAgICAgIGxldCBtZXRob2Q9KHRleHRhcmVhLHN0YXJ0UG9zLHZhbHVlKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZFBvcz10ZXh0YXJlYS5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpXHJcbiAgICAgICAgICAgICAgICArICdcXG5gYGBcXG4nK3ZhbHVlLnN1YnN0cmluZyhzdGFydFBvcyxlbmRQb3MpXHJcbiAgICAgICAgICAgICAgICArJ1xcbmBgYFxcbicgKyB2YWx1ZS5zdWJzdHJpbmcoZW5kUG9zLCB2YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRleHRhcmVhKG1ldGhvZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmiZPlvIDpk77mjqXlr7nor53moYZcclxuICAgICAgICBzaG93TGlua0RpYWxvZyh0eXBlKXtcclxuICAgICAgICAgICAgdGhpcy5saW5rRGlhbG9nLnZpc2libGU9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saW5rRGlhbG9nLnR5cGU9dHlwZTtcclxuICAgICAgICAgICAgdGhpcy5saW5rRGlhbG9nLnRpdGxlPXR5cGU9PT0nbGluaycgPyAn5o+S5YWl6ZO+5o6lJyA6ICfmj5LlhaXlm77niYcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5pyJ5bqP5YiX6KGoXHJcbiAgICAgICAgb3JkZXJlZExpc3QoKXtcclxuICAgICAgICAgICAgbGV0IG1ldGhvZD0odGV4dGFyZWEsc3RhcnRQb3MsdmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpXHJcbiAgICAgICAgICAgICAgICArJ1xcbjEuIOesrOS4gOmhuVxcbjIuIOesrOS6jOmhuVxcbjMuIOesrOS4iemhuScrIHZhbHVlLnN1YnN0cmluZyhzdGFydFBvcywgdmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRleHRhcmVhKG1ldGhvZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDml6Dluo/liJfooahcclxuICAgICAgICB1bm9yZGVyZWRMaXN0KCl7XHJcbiAgICAgICAgICAgIGxldCBtZXRob2Q9KHRleHRhcmVhLHN0YXJ0UG9zLHZhbHVlKT0+e1xyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEudmFsdWU9dmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKVxyXG4gICAgICAgICAgICAgICAgKydcXG4rIOesrOS4gOmhuVxcbisg56ys5LqM6aG5XFxuKyDnrKzkuInpobknKyB2YWx1ZS5zdWJzdHJpbmcoc3RhcnRQb3MsIHZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVUZXh0YXJlYShtZXRob2QpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5qC55o2uSUTojrflj5ZibG9nXHJcbiAgICAgICAgZ2V0QmxvZ0J5SWQoKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgLy/moLnmja5pZOivt+axguaVsOaNruW5tua4suafk+agh+mimOOAgeaWh+acrOWfn+WSjOmihOiniFxyXG4gICAgICAgICAgICByZXR1cm4gdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9ibG9ncy8nK3RoYXQuJHJvdXRlLnF1ZXJ5LmlkLFxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlQmxvZygpe1xyXG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICAvL+abtOaWsOaWh+eroFxyXG4gICAgICAgICAgICB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BVVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2Jsb2dzLycrdGhhdC5ibG9nLmlkLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp0aGF0LmJsb2dcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgLy/ot7PovazliLDmn6XnnIvpobXpnaJcclxuICAgICAgICAgICAgICAgIC8vdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6Jy9ibG9ncy8nK3RoYXQuYmxvZy5pZH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN1YmplY3RCeUJsb2dJZCgpe1xyXG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9zdWJqZWN0cy8nK3RoYXQuJHJvdXRlLnF1ZXJ5LmlkXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRCbG9nKCl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIC8v5paw5aKe5paH56ugXHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2Jsb2dzJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6dGhhdC5ibG9nXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIC8v6Lez6L2s5Yiw5p+l55yL6aG16Z2iXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBsYXVuY2hCbG9nKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvaycpXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYmxvZy50aXRsZS50cmltKCk9PT0nJyl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvZy10aXRsZScpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRtZXNzYWdlLmVycm9yKCfkuI3og73nvLrlsJHmoIfpopgnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLmJsb2cuc3ViamVjdHMubGVuZ3RoPDEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZS5lcnJvcign6K+36Iez5bCR5Li65oKo55qEQmxvZ+a3u+WKoOS4gOS4quS4k+mimCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdERpYWxvZy52aXNpYmxlPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9LDEwMDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGU9PT0nZWRpdCcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCbG9nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQmxvZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOicvYmxvZ3MvJyt0aGlzLmJsb2cuaWR9KTtcclxuICAgICAgICAgICAgfSwxMDApO1xyXG4gICAgICAgICAgICAvL3RoaXMuJHJvdXRlci5wdXNoKHtwYXRoOicvYmxvZ3MvJyt0aGlzLmJsb2cuaWR9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudGVyS2V5KGUpe1xyXG4gICAgICAgICAgICBsZXQgbWV0aG9kPSh0ZXh0YXJlYSxzdGFydFBvcyx2YWx1ZSk9PntcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLHN0YXJ0UG9zKSsnPGJyPlxcbicrdmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLHZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3dpdGNoKGUua2V5KXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VudGVyJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRleHRhcmVhKG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25zY3JvbGwoZSl7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0PWUudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgcHJldmlldz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldycpO1xyXG4gICAgICAgICAgICBwcmV2aWV3LnNjcm9sbFRvcD10ZXh0LnNjcm9sbFRvcC8yO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiZWZvcmVEZXN0cm95KCl7XHJcbiAgICAgICAgaWYodGhpcy5pbnRlcnZhcmwpXHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhcmwpO1xyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi8uLi9jc3MvZWRpdC9lZGl0LmNzc1wiPlxyXG5cclxuPC9zdHlsZT4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhZDQzZjhmJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9lZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi4vLi4vY3NzL2VkaXQvZWRpdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYWQ0M2Y4ZiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWFkNDNmOGZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEZWxsXFxcXERlc2t0b3BcXFxcTXktSWRlYVxcXFxNeUJsb2dcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWFkNDNmOGYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWFkNDNmOGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWFkNDNmOGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhZDQzZjhmJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFhZDQzZjhmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9lZGl0L2VkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZWRpdC1ibG9nLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlZGl0LWhlYWRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tcWlhbnlpdGlhblwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKHsgcGF0aDogXCIvXCIgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIOaJgOacieaWh+eroFxcbiAgICAgICAgXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIlxcbiAgICAgICAgICAgIOWGmeaWh+eroFxcbiAgICAgICAgXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWZhYnVcIiwgb246IHsgY2xpY2s6IF92bS5sYXVuY2hCbG9nIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5Y+R5biDXFxuICAgICAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy10aXRsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJsb2cudGl0bGUsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYmxvZy50aXRsZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJibG9nLXRpdGxlXCIsIHBsYWNlaG9sZGVyOiBcIui+k+WFpeagh+mimFwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uYmxvZy50aXRsZSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5ibG9nLCBcInRpdGxlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmxvZy1zdWJqZWN0c1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX2woX3ZtLmJsb2cuc3ViamVjdHMsIGZ1bmN0aW9uKHN1Yikge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogc3ViLmlkLFxuICAgICAgICAgICAgICAgIHJlZjogXCJzdWJqZWN0XCIsXG4gICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnN1YmplY3REaWFsb2cudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHN1Yi5uYW1lKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zdWJqZWN0RGlhbG9nLnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIua3u+WKoOS4k+mimFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlZGl0b3ItbWQtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZWRpdG9yLWNvbnRyb2xzXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImVsLXBvcG92ZXItaGVhZGVyXCIsIHtcbiAgICAgICAgICAgICAgb246IHsgXCJpbnNlcnQtaGVhZGVyXCI6IF92bS5pbnNlcnRIZWFkZXIgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1qaWFjdVwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE0cHhcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmVtcGhhc2lzIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24teGlldGlcIixcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5pdGFsaWNzIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tZGFzaHVqdWtlc2hpaHVhaWNvLVwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE4cHhcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNvZGVCbG9jayB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWxpbmsxXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93TGlua0RpYWxvZyhcImxpbmtcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tdHVwaWFuXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMjBweFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93TGlua0RpYWxvZyhcImltZ1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi15b3V4dWxpZWJpYW9cIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxOHB4XCIgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcmRlcmVkTGlzdCB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLXd1eHVsaWViaWFvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMThweFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udW5vcmRlcmVkTGlzdCB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImVsLXBvcG92ZXItaGVscFwiKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVkaXQtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYmxvZy5zb3VyY2UsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJibG9nLnNvdXJjZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhdHRyczogeyBpZDogXCJjb250ZW50XCIsIHBsYWNlaG9sZGVyOiBcIui1tuW/q+W8gOWni+S9oOeahOWtpuS5oOWQp1wiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmJsb2cuc291cmNlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmJsb2csIFwic291cmNlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uc2V0TWFya2Rvd25cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAga2V5ZG93bjogX3ZtLmVudGVyS2V5LFxuICAgICAgICAgICAgICBzY3JvbGw6IF92bS5vbnNjcm9sbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW3sgbmFtZTogXCJoaWdobGlnaHRcIiwgcmF3TmFtZTogXCJ2LWhpZ2hsaWdodFwiIH1dLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByZXZpZXctY29udGFpbmVyXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicHJldmlld1wiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmJsb2cucHJlSHRtbCkgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJlbC1kaWFsb2ctbGlua1wiLCB7XG4gICAgICAgIHJlZjogXCJsaW5rXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGlua0RpYWxvZzogX3ZtLmxpbmtEaWFsb2csXG4gICAgICAgICAgaGFuZGxlVGV4dGFyZWE6IF92bS5oYW5kbGVUZXh0YXJlYSxcbiAgICAgICAgICBibG9nOiBfdm0uYmxvZ1xuICAgICAgICB9LFxuICAgICAgICBvbjogeyBjbGljazogX3ZtLnRlc3QgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJlbC1kaWFsb2ctc3ViamVjdFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgc3ViamVjdERpYWxvZzogX3ZtLnN1YmplY3REaWFsb2csXG4gICAgICAgICAgYmxvZ1N1YmplY3RzOiBfdm0uYmxvZy5zdWJqZWN0c1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==