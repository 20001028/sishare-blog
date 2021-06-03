(self["webpackChunkMyBlog"] = self["webpackChunkMyBlog"] || []).push([["src_components_write_new_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/write/new.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/write/new.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_new_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/new.css */ "./src/css/new.css");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    data() {
        return {
            top: '12px',
            content: '',
            preHtml: "",
            title: '',
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
            allSubjects: [],
            blogSubjects: []
        };
    },
    created() {
        let that = this;
        //判断是修改还是新文章
        if (that.$route.query.type === 'edit') {
            //根据id请求数据并渲染标题、文本域和预览
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/articles/' + that.$route.query.id
            }).then(res => {
                that.preHtml = res.data.html;
                that.content = res.data.article.content;
                that.title = res.data.article.title;
            });
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/subjects/' + that.$route.query.id
            }).then(res => {
                that.blogSubjects = res.data;
            });
        };
    },
    mounted() {
        //console.log(this.$route.query);
    },
    methods: {
        addSubToBlog(id) {
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
            }).then(res => {});
        },
        deleteSubFromBlog(id) {
            let that = this;
            that.blogSubjects = that.blogSubjects.filter(item => item.id !== id);
            that.$axios({
                method: 'DELETE',
                url: 'http://42.192.180.142:3000/subjects/' + that.$route.query.id + '/' + id
            }).then(res => {
                console.log(res);
            });
        },
        openSubjectDialog() {
            let that = this;
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/subjects'
            }).then(res => {
                that.allSubjects = res.data;
                that.subjectDialog.visible = true;
            });
            that.$axios({
                method: 'GET',
                url: 'http://42.192.180.142:3000/subjects/' + that.$route.query.id
            }).then(res => {
                that.blogSubjects = res.data;
                that.subjectDialog.visible = true;
            });
        },
        openLinkDialog(type) {
            this.linkDialog.type = type;
            this.linkDialog.title = type === 'img' ? '插入图片' : '插入链接';
            this.linkDialog.visible = true;
        },
        addLink() {
            //对话框“确定”按钮的监听函数
            //将alt和link插入到文本域中
            //获取文本域DOM节点
            let textarea = document.getElementById('content');
            //插入链接一般不管是否选中内容，我们都采用头插
            let pos = textarea.selectionStart;
            let value = textarea.value; //取出当前文本域内的值
            let type = this.linkDialog.type === 'link' ? '' : '!'; //判断是链接还是图片
            //插入链接格式
            textarea.value = value.substring(0, pos) + type + '[' + this.linkDialog.text + ']' + '(' + this.linkDialog.href + ')' + value.substring(pos, value.length);
            this.content = textarea.value; //更新content
            this.setMarkDown(); //渲染Markdown
            //关闭对话框
            this.linkDialog.visible = false;
            //将对话框内部内容清除，避免污染下次打开
            this.linkDialog.text = '';
            this.linkDialog.href = '';
        },
        handle(e) {
            //事件代理
            let index;
            for (let i = 0; i < e.target.parentNode.children.length; i++) {
                if (e.target.parentNode.children[i] === e.target) {
                    index = i;
                    break;
                }
            }
            let operations = ['h', 'b', 'i', 'code', 'link', 'quote', 'img', 'video', 'table', 'gongshi', 'ol', 'ul', 'line', 'help'];
            let text = document.getElementById('content');
            //开始和结束指针
            let startPos = text.selectionStart;
            let endPos = text.selectionEnd;
            let value = text.value;
            if ([0, 1, 2].includes(index) && startPos === endPos) return;
            //保存scrollTop
            let restoreTop = text.scrollTop;
            switch (index) {
                case 0:
                    text.value = value.substring(0, startPos) + '###' + text.value.substring(startPos, endPos) + text.value.substring(endPos, text.value.length);
                    break;
                case 1:
                    text.value = value.substring(0, startPos) + '**' + text.value.substring(startPos, endPos) + '**' + text.value.substring(endPos, text.value.length);
                    break;
                case 2:
                    text.value = value.substring(0, startPos) + '*' + text.value.substring(startPos, endPos) + '*' + text.value.substring(endPos, text.value.length);
                    break;
                case 3:
                    text.value = value.substring(0, startPos) + '\n```\n' + text.value.substring(startPos, endPos) + '\n```\n' + text.value.substring(endPos, text.value.length);
                    break;
                case 5:
                    text.value = value.substring(0, startPos) + '>' + text.value.substring(startPos, endPos) + '' + text.value.substring(endPos, text.value.length);
                    break;
                case 10:
                    text.value = value.substring(0, startPos) + '\n1. ' + text.value.substring(startPos, endPos) + '' + text.value.substring(endPos, text.value.length);
                    break;
                case 11:
                    text.value = value.substring(0, startPos) + '\n+ ' + text.value.substring(startPos, endPos) + '' + text.value.substring(endPos, text.value.length);
                    break;
            }
            //text.value = value.substring(0, startPos) + '**'+text.value.substring(startPos,endPos)+'**' + text.value.substring(endPos, text.value.length);
            if (restoreTop > 0) {
                text.scrollTop = restoreTop;
            }
            // text.focus();
            // text.selectionStart= startPos + myValue.length;
            // text.selectionEnd= startPos + myValue.length;
            this.content = text.value;
            this.setMarkDown();
        },
        setMarkDown() {
            this.preHtml = converter.makeHtml(this.content);
        },
        goToIndex() {
            this.$router.push({ path: '/' });
        },
        launch() {
            let that = this;
            if (that.$route.query.type === 'edit') {
                //更新文章
                that.$axios({
                    method: 'PUT',
                    url: 'http://42.192.180.142:3000/articles/' + that.$route.query.id,
                    data: {
                        html: that.preHtml, //存储在文件中
                        title: that.title,
                        content: that.content //存储在数据库中·
                    }
                }).then(res => {
                    //跳转到查看页面
                    this.$router.push({ path: '/articles/' + that.$route.query.id });
                });
            } else {
                //新增文章
                that.$axios({
                    method: 'POST',
                    url: 'http://42.192.180.142:3000/articles',
                    data: {
                        html: that.preHtml, //存储在文件中
                        title: that.title,
                        content: that.content //存储在数据库中·
                    }
                }).then(res => {
                    //跳转到查看页面
                    this.$router.push({ path: '/articles/' + res.data.id });
                });
            }
        },
        enter(e) {
            let text = e.target;
            let pos = text.selectionStart;
            console.log(e);
            switch (e.key) {
                case 'enter':
                    text.value = text.value.substring(0, pos) + '<br>\n' + text.substring(pos, text.value.length);
                    this.content = text.value;
                    this.setMarkDown();
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

/***/ "./src/css/new.css":
/*!*************************!*\
  !*** ./src/css/new.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/write/new.vue":
/*!**************************************!*\
  !*** ./src/components/write/new.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new_vue_vue_type_template_id_99f230e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new.vue?vue&type=template&id=99f230e0& */ "./src/components/write/new.vue?vue&type=template&id=99f230e0&");
/* harmony import */ var _new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new.vue?vue&type=script&lang=js& */ "./src/components/write/new.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _new_vue_vue_type_template_id_99f230e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _new_vue_vue_type_template_id_99f230e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/write/new.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/write/new.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/write/new.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/write/new.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_4_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/write/new.vue?vue&type=template&id=99f230e0&":
/*!*********************************************************************!*\
  !*** ./src/components/write/new.vue?vue&type=template&id=99f230e0& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_99f230e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_99f230e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_99f230e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new.vue?vue&type=template&id=99f230e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/write/new.vue?vue&type=template&id=99f230e0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/write/new.vue?vue&type=template&id=99f230e0&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/write/new.vue?vue&type=template&id=99f230e0& ***!
  \************************************************************************************************************************************************************************************************************/
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
    { staticClass: "write-article-container" },
    [
      _c("div", { staticClass: "write-head" }, [
        _c(
          "a",
          {
            staticClass: "iconfont icon-qianyitian",
            on: { click: _vm.goToIndex }
          },
          [_vm._v("\n            所有文章\n        ")]
        ),
        _vm._v(" "),
        _c("a", { on: { click: _vm.enter } }, [
          _vm._v("\n            写文章\n        ")
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "iconfont icon-fabu", on: { click: _vm.launch } },
          [_vm._v("\n            发布\n        ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "article-title" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.title,
              expression: "title"
            }
          ],
          attrs: { placeholder: "输入标题", type: "text" },
          domProps: { value: _vm.title },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.title = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "article-subjects" },
        [
          _vm._l(_vm.blogSubjects, function(sub) {
            return _c(
              "a",
              { key: sub.id, on: { click: _vm.openSubjectDialog } },
              [_vm._v(_vm._s(sub.name))]
            )
          }),
          _vm._v(" "),
          _c("a", { on: { click: _vm.openSubjectDialog } }, [
            _vm._v("添加专题")
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "editor-md-container" }, [
        _c(
          "div",
          { staticClass: "editor-controls", on: { click: _vm.handle } },
          [
            _c(
              "el-popover",
              { attrs: { placement: "right", width: "150", trigger: "hover" } },
              [
                _c("div", { staticClass: "head-group" }, [
                  _c("a", [_vm._v("一级标题")]),
                  _vm._v(" "),
                  _c("a", [_vm._v("二级标题")]),
                  _vm._v(" "),
                  _c("a", [_vm._v("三级标题")]),
                  _vm._v(" "),
                  _c("a", [_vm._v("四级标题")]),
                  _vm._v(" "),
                  _c("a", [_vm._v("五级标题")]),
                  _vm._v(" "),
                  _c("a", [_vm._v("六级标题")])
                ]),
                _vm._v(" "),
                _c("a", {
                  staticClass: "iconfont icon-biaoti",
                  attrs: { slot: "reference" },
                  slot: "reference"
                })
              ]
            ),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-jiacu",
              staticStyle: { "font-size": "14px" }
            }),
            _vm._v(" "),
            _c("a", { staticClass: "iconfont icon-xieti" }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-dashujukeshihuaico-",
              staticStyle: { "font-size": "18px" }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-link1",
              on: {
                click: function($event) {
                  return _vm.openLinkDialog("link")
                }
              }
            }),
            _vm._v(" "),
            _c("a", { staticClass: "iconfont icon-edui-for-blockquote" }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-tupian",
              staticStyle: { "font-size": "20px" },
              on: {
                click: function($event) {
                  return _vm.openLinkDialog("img")
                }
              }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-shipin",
              staticStyle: { "font-size": "14px" }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-biaoge",
              staticStyle: { "font-size": "18px" }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-gongshi",
              staticStyle: { "font-size": "26px" }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-youxuliebiao",
              staticStyle: { "font-size": "18px" }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-wuxuliebiao",
              staticStyle: { "font-size": "18px" },
              attrs: { title: "无序列表" }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-fengexian",
              staticStyle: { "font-size": "24px" },
              attrs: { title: "分割线" }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "iconfont icon-bangzhu",
              staticStyle: { "font-size": "20px" },
              attrs: { title: "帮助" }
            })
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
                value: _vm.content,
                expression: "content"
              }
            ],
            attrs: { id: "content", placeholder: "赶快开始你的学习吧" },
            domProps: { value: _vm.content },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.content = $event.target.value
                },
                _vm.setMarkDown
              ],
              keydown: _vm.enter,
              scroll: _vm.onscroll
            }
          })
        ]),
        _vm._v(" "),
        _c("div", {
          directives: [{ name: "highlight", rawName: "v-highlight" }],
          staticClass: "preview-container",
          attrs: { id: "preview" },
          domProps: { innerHTML: _vm._s(_vm.preHtml) }
        })
      ]),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: _vm.linkDialog.title,
            visible: _vm.linkDialog.visible,
            width: "50%"
          },
          on: {
            "update:visible": function($event) {
              return _vm.$set(_vm.linkDialog, "visible", $event)
            }
          }
        },
        [
          _c(
            "el-input",
            {
              attrs: { placeholder: "请输入内容" },
              model: {
                value: _vm.linkDialog.text,
                callback: function($$v) {
                  _vm.$set(_vm.linkDialog, "text", $$v)
                },
                expression: "linkDialog.text"
              }
            },
            [_c("template", { slot: "prepend" }, [_vm._v("alt")])],
            2
          ),
          _vm._v(" "),
          _c("p", { staticStyle: { height: "10px", visibility: "hidden" } }),
          _vm._v(" "),
          _c(
            "el-input",
            {
              attrs: { placeholder: "请输入链接地址" },
              model: {
                value: _vm.linkDialog.href,
                callback: function($$v) {
                  _vm.$set(_vm.linkDialog, "href", $$v)
                },
                expression: "linkDialog.href"
              }
            },
            [_c("template", { slot: "prepend" }, [_vm._v("link")])],
            2
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.linkDialog.visible = false
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.addLink } },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
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
                          return _vm.addSubToBlog(sub.id)
                        }
                      }
                    },
                    [_vm._v(_vm._s(sub.name))]
                  ),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "subject-delete iconfont icon-shanchu"
                  })
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
                        return _vm.deleteSubFromBlog(sub.id)
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvd3JpdGUvbmV3LnZ1ZSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY3NzL25ldy5jc3M/N2QwYiIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy93cml0ZS9uZXcudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL3dyaXRlL25ldy52dWU/ZGIzZSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy93cml0ZS9uZXcudnVlPzI4YTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHVCQUZBO0FBR0EsdUJBSEE7QUFJQSxxQkFKQTtBQUtBO0FBQ0EsNkJBREE7QUFFQSx3QkFGQTtBQUdBLHdCQUhBO0FBSUEsOEJBSkE7QUFLQTtBQUxBLGFBTEE7QUFZQTtBQUNBLDZCQURBO0FBRUE7QUFGQSxhQVpBO0FBZ0JBLDJCQWhCQTtBQWlCQTtBQWpCQTtBQW1CQSxLQXJCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBRkEsZUFHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQVBBO0FBUUE7QUFDQSw2QkFEQTtBQUVBO0FBRkEsZUFHQSxJQUhBLENBR0E7QUFDQTtBQUNBLGFBTEE7QUFNQTtBQUNBLEtBMUNBO0FBMkNBO0FBQ0E7QUFDQSxLQTdDQTtBQThDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FDQTtBQUNBO0FBQ0Esb0NBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSwyREFGQTtBQUdBO0FBQ0EsZ0RBREE7QUFFQTtBQUZB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aUJBQWlCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsa0JBQWtCLE9BQU8scUJBQXFCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixvQ0FBb0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhCQUE4QjtBQUM3QztBQUNBLGtDQUFrQyx1Q0FBdUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQSxrQ0FBa0MsdUNBQXVDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNyY19jb21wb25lbnRzX3dyaXRlX25ld192dWUuNThhYTc3ZDk2ZTU1OTZhNjNkY2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwid3JpdGUtYXJ0aWNsZS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JpdGUtaGVhZFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tcWlhbnlpdGlhblwiIEBjbGljaz1cImdvVG9JbmRleFwiPlxyXG4gICAgICAgICAgICAgICAg5omA5pyJ5paH56ugXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgdi1vbjpjbGljaz1cImVudGVyXCI+XHJcbiAgICAgICAgICAgICAgICDlhpnmlofnq6BcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1mYWJ1XCIgQGNsaWNrPVwibGF1bmNoXCIgPlxyXG4gICAgICAgICAgICAgICAg5Y+R5biDXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIui+k+WFpeagh+mimFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInRpdGxlXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlLXN1YmplY3RzXCI+XHJcbiAgICAgICAgICAgIDxhIEBjbGljaz1cIm9wZW5TdWJqZWN0RGlhbG9nXCIgdi1mb3I9XCJzdWIgaW4gYmxvZ1N1YmplY3RzXCIgOmtleT1cInN1Yi5pZFwiPnt7c3ViLm5hbWV9fTwvYT5cclxuICAgICAgICAgICAgPGEgQGNsaWNrPVwib3BlblN1YmplY3REaWFsb2dcIj7mt7vliqDkuJPpopg8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvci1tZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvci1jb250cm9sc1wiIEBjbGljaz1cImhhbmRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGVsLXBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuS4gOe6p+agh+mimDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+5LqM57qn5qCH6aKYPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7kuInnuqfmoIfpopg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuWbm+e6p+agh+mimDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+5LqU57qn5qCH6aKYPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7lha3nuqfmoIfpopg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgc2xvdD1cInJlZmVyZW5jZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1iaWFvdGlcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2VsLXBvcG92ZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWppYWN1XCIgc3R5bGU9XCJmb250LXNpemU6MTRweDtcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24teGlldGlcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tZGFzaHVqdWtlc2hpaHVhaWNvLVwiIHN0eWxlPVwiZm9udC1zaXplOjE4cHg7XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWxpbmsxXCIgQGNsaWNrPVwib3BlbkxpbmtEaWFsb2coJ2xpbmsnKVwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1lZHVpLWZvci1ibG9ja3F1b3RlXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLXR1cGlhblwiIHN0eWxlPVwiZm9udC1zaXplOjIwcHg7XCIgQGNsaWNrPVwib3BlbkxpbmtEaWFsb2coJ2ltZycpXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLXNoaXBpblwiIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWJpYW9nZVwiIHN0eWxlPVwiZm9udC1zaXplOjE4cHg7XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWdvbmdzaGlcIiBzdHlsZT1cImZvbnQtc2l6ZToyNnB4O1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi15b3V4dWxpZWJpYW9cIiBzdHlsZT1cImZvbnQtc2l6ZToxOHB4O1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi13dXh1bGllYmlhb1wiIHN0eWxlPVwiZm9udC1zaXplOjE4cHg7XCIgdGl0bGU9XCLml6Dluo/liJfooahcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tZmVuZ2V4aWFuXCIgc3R5bGU9XCJmb250LXNpemU6MjRweDtcIiB0aXRsZT1cIuWIhuWJsue6v1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1iYW5nemh1XCIgc3R5bGU9XCJmb250LXNpemU6MjBweDtcIiB0aXRsZT1cIuW4ruWKqVwiPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29udGVudFwiIHYtbW9kZWw9XCJjb250ZW50XCIgQGlucHV0PVwic2V0TWFya0Rvd25cIiBwbGFjZWhvbGRlcj1cIui1tuW/q+W8gOWni+S9oOeahOWtpuS5oOWQp1wiIEBrZXlkb3duPVwiZW50ZXJcIiBAc2Nyb2xsPVwib25zY3JvbGxcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInByZXZpZXdcIiBjbGFzcz1cInByZXZpZXctY29udGFpbmVyXCIgdi1odG1sPVwicHJlSHRtbFwiIHYtaGlnaGxpZ2h0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZWwtZGlhbG9nXHJcbiAgICAgICAgICAgIDp0aXRsZT1cImxpbmtEaWFsb2cudGl0bGVcIlxyXG4gICAgICAgICAgICA6dmlzaWJsZS5zeW5jPVwibGlua0RpYWxvZy52aXNpYmxlXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MCVcIj5cclxuICAgICAgICAgICAgPGVsLWlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5YaF5a65XCIgdi1tb2RlbD1cImxpbmtEaWFsb2cudGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJwcmVwZW5kXCI+YWx0PC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9lbC1pbnB1dD5cclxuICAgICAgICAgICAgPHAgc3R5bGU9XCJ3aWR0aD0zMHB4O2hlaWdodDoxMHB4O3Zpc2liaWxpdHk6aGlkZGVuO1wiPjwvcD5cclxuICAgICAgICAgICAgPGVsLWlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6ZO+5o6l5Zyw5Z2AXCIgdi1tb2RlbD1cImxpbmtEaWFsb2cuaHJlZlwiPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJwcmVwZW5kXCI+bGluazwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZWwtaW5wdXQ+XHJcbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJmb290ZXJcIiBjbGFzcz1cImRpYWxvZy1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxlbC1idXR0b24gQGNsaWNrPVwibGlua0RpYWxvZy52aXNpYmxlID0gZmFsc2VcIj7lj5Yg5raIPC9lbC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZWwtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiYWRkTGlua1wiPuehriDlrpo8L2VsLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZWwtZGlhbG9nPlxyXG4gICAgICAgIDxlbC1kaWFsb2dcclxuICAgICAgICAgICAgOnRpdGxlPVwic3ViamVjdERpYWxvZy50aXRsZVwiXHJcbiAgICAgICAgICAgIDp2aXNpYmxlLnN5bmM9XCJzdWJqZWN0RGlhbG9nLnZpc2libGVcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjUwJVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViamVjdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YT7miYDmnInkuJPpopg8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxsLXN1YmplY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cInN1YiBpbiBhbGxTdWJqZWN0c1wiIDprZXk9XCJzdWIuaWRcIiBjbGFzcz1cInN1Yi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cImFkZFN1YlRvQmxvZyhzdWIuaWQpXCI+e3tzdWIubmFtZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInN1YmplY3QtZGVsZXRlIGljb25mb250IGljb24tc2hhbmNodVwiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGE+5oiR55qE5LiT6aKYKOiHs+Wwkea3u+WKoOS4gOS4qik8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktc3ViamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwic3ViIGluIGJsb2dTdWJqZWN0c1wiIDprZXk9XCJzdWIuaWRcIiBjbGFzcz1cInN1Yi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt7c3ViLm5hbWV9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzdWJqZWN0LWRlbGV0ZSBpY29uZm9udCBpY29uLXNoYW5jaHVcIiBAY2xpY2s9XCJkZWxldGVTdWJGcm9tQmxvZyhzdWIuaWQpXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZWwtZGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgJy4uLy4uL2Nzcy9uZXcuY3NzJztcclxuXHJcbmxldCBjb252ZXJ0ZXIgPSBuZXcgc2hvd2Rvd24uQ29udmVydGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICB0b3A6JzEycHgnLFxyXG4gICAgICAgICAgICBjb250ZW50OicnLFxyXG4gICAgICAgICAgICBwcmVIdG1sOlwiXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOicnLFxyXG4gICAgICAgICAgICBsaW5rRGlhbG9nOnsvL+aPkuWFpemTvuaOpeeahERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+aPkuWFpemTvuaOpScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OicnLFxyXG4gICAgICAgICAgICAgICAgaHJlZjonJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOidsaW5rJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJqZWN0RGlhbG9nOntcclxuICAgICAgICAgICAgICAgIHRpdGxlOifkuJPpopjnrqHnkIYnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTpmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWxsU3ViamVjdHM6W10sXHJcbiAgICAgICAgICAgIGJsb2dTdWJqZWN0czpbXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCl7XHJcbiAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAvL+WIpOaWreaYr+S/ruaUuei/mOaYr+aWsOaWh+eroFxyXG4gICAgICAgIGlmKHRoYXQuJHJvdXRlLnF1ZXJ5LnR5cGU9PT0nZWRpdCcpe1xyXG4gICAgICAgICAgICAvL+agueaNrmlk6K+35rGC5pWw5o2u5bm25riy5p+T5qCH6aKY44CB5paH5pys5Z+f5ZKM6aKE6KeIXHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDonaHR0cDovLzQyLjE5Mi4xODAuMTQyOjMwMDAvYXJ0aWNsZXMvJyt0aGF0LiRyb3V0ZS5xdWVyeS5pZCxcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhhdC5wcmVIdG1sPXJlcy5kYXRhLmh0bWw7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmNvbnRlbnQ9cmVzLmRhdGEuYXJ0aWNsZS5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgdGhhdC50aXRsZT1yZXMuZGF0YS5hcnRpY2xlLnRpdGxlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9zdWJqZWN0cy8nK3RoYXQuJHJvdXRlLnF1ZXJ5LmlkXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHRoYXQuYmxvZ1N1YmplY3RzPXJlcy5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuJHJvdXRlLnF1ZXJ5KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgICBhZGRTdWJUb0Jsb2coaWQpe1xyXG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICBpZih0aGF0LmJsb2dTdWJqZWN0cy5sZW5ndGg+PTUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJzPXRoYXQuYmxvZ1N1YmplY3RzLmZpbHRlcihpdGVtPT5pdGVtLmlkPT09aWQpO1xyXG4gICAgICAgICAgICBpZihmaWx0ZXJzLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGF0LmJsb2dTdWJqZWN0cy5wdXNoKC4uLnRoYXQuYWxsU3ViamVjdHMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQ9PT1pZCkpO1xyXG4gICAgICAgICAgICB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9ibG9nLXN1YnMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvZ0lkOnRoYXQuJHJvdXRlLnF1ZXJ5LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YklkOmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZVN1YkZyb21CbG9nKGlkKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgdGhhdC5ibG9nU3ViamVjdHM9dGhhdC5ibG9nU3ViamVjdHMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQhPT1pZCk7XHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDonaHR0cDovLzQyLjE5Mi4xODAuMTQyOjMwMDAvc3ViamVjdHMvJyt0aGF0LiRyb3V0ZS5xdWVyeS5pZCsnLycraWQsXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3BlblN1YmplY3REaWFsb2coKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9zdWJqZWN0cydcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhhdC5hbGxTdWJqZWN0cz1yZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc3ViamVjdERpYWxvZy52aXNpYmxlPXRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL3N1YmplY3RzLycrdGhhdC4kcm91dGUucXVlcnkuaWRcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhhdC5ibG9nU3ViamVjdHM9cmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnN1YmplY3REaWFsb2cudmlzaWJsZT10cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wZW5MaW5rRGlhbG9nKHR5cGUpe1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtEaWFsb2cudHlwZT10eXBlO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtEaWFsb2cudGl0bGU9dHlwZT09PSdpbWcnID8gJ+aPkuWFpeWbvueJhycgOiAn5o+S5YWl6ZO+5o6lJztcclxuICAgICAgICAgICAgdGhpcy5saW5rRGlhbG9nLnZpc2libGU9dHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZExpbmsoKXtcclxuICAgICAgICAgICAgLy/lr7nor53moYbigJznoa7lrprigJ3mjInpkq7nmoTnm5HlkKzlh73mlbBcclxuICAgICAgICAgICAgLy/lsIZhbHTlkoxsaW5r5o+S5YWl5Yiw5paH5pys5Z+f5LitXHJcbiAgICAgICAgICAgIC8v6I635Y+W5paH5pys5Z+fRE9N6IqC54K5XHJcbiAgICAgICAgICAgIGxldCB0ZXh0YXJlYT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgICAgICAgICAvL+aPkuWFpemTvuaOpeS4gOiIrOS4jeeuoeaYr+WQpumAieS4reWGheWuue+8jOaIkeS7rOmDvemHh+eUqOWktOaPklxyXG4gICAgICAgICAgICBsZXQgcG9zPXRleHRhcmVhLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICBsZXQgdmFsdWU9dGV4dGFyZWEudmFsdWU7Ly/lj5blh7rlvZPliY3mlofmnKzln5/lhoXnmoTlgLxcclxuICAgICAgICAgICAgbGV0IHR5cGU9dGhpcy5saW5rRGlhbG9nLnR5cGU9PT0nbGluaycgPyAnJyA6ICchJzsvL+WIpOaWreaYr+mTvuaOpei/mOaYr+WbvueJh1xyXG4gICAgICAgICAgICAvL+aPkuWFpemTvuaOpeagvOW8j1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCxwb3MpK3R5cGUrJ1snK3RoaXMubGlua0RpYWxvZy50ZXh0KyddJ1xyXG4gICAgICAgICAgICAgICAgKycoJyt0aGlzLmxpbmtEaWFsb2cuaHJlZisnKScrdmFsdWUuc3Vic3RyaW5nKHBvcyx2YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQ9dGV4dGFyZWEudmFsdWU7Ly/mm7TmlrBjb250ZW50XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWFya0Rvd24oKTsvL+a4suafk01hcmtkb3duXHJcbiAgICAgICAgICAgIC8v5YWz6Zet5a+56K+d5qGGXHJcbiAgICAgICAgICAgIHRoaXMubGlua0RpYWxvZy52aXNpYmxlPWZhbHNlO1xyXG4gICAgICAgICAgICAvL+WwhuWvueivneahhuWGhemDqOWGheWuuea4hemZpO+8jOmBv+WFjeaxoeafk+S4i+asoeaJk+W8gFxyXG4gICAgICAgICAgICB0aGlzLmxpbmtEaWFsb2cudGV4dD0nJztcclxuICAgICAgICAgICAgdGhpcy5saW5rRGlhbG9nLmhyZWY9Jyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGUoZSl7Ly/kuovku7bku6PnkIZcclxuICAgICAgICAgICAgbGV0IGluZGV4O1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuW2ldPT09ZS50YXJnZXQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4PWk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG9wZXJhdGlvbnM9WydoJywnYicsJ2knLCdjb2RlJywnbGluaycsJ3F1b3RlJywnaW1nJywndmlkZW8nLCd0YWJsZScsJ2dvbmdzaGknLCdvbCcsJ3VsJywnbGluZScsJ2hlbHAnXTtcclxuICAgICAgICAgICAgbGV0IHRleHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgICAgICAgICAgLy/lvIDlp4vlkoznu5PmnZ/mjIfpkohcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zPXRleHQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3M9dGV4dC5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZT10ZXh0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZihbMCwxLDJdLmluY2x1ZGVzKGluZGV4KSYmc3RhcnRQb3M9PT1lbmRQb3MpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8v5L+d5a2Yc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgIGxldCByZXN0b3JlVG9wID0gdGV4dC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIHN3aXRjaChpbmRleCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpICsgJyMjIycrdGV4dC52YWx1ZS5zdWJzdHJpbmcoc3RhcnRQb3MsZW5kUG9zKSsgdGV4dC52YWx1ZS5zdWJzdHJpbmcoZW5kUG9zLCB0ZXh0LnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpICsgJyoqJyt0ZXh0LnZhbHVlLnN1YnN0cmluZyhzdGFydFBvcyxlbmRQb3MpKycqKicgKyB0ZXh0LnZhbHVlLnN1YnN0cmluZyhlbmRQb3MsIHRleHQudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcykgKyAnKicrdGV4dC52YWx1ZS5zdWJzdHJpbmcoc3RhcnRQb3MsZW5kUG9zKSsnKicgKyB0ZXh0LnZhbHVlLnN1YnN0cmluZyhlbmRQb3MsIHRleHQudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcykgKyAnXFxuYGBgXFxuJyt0ZXh0LnZhbHVlLnN1YnN0cmluZyhzdGFydFBvcyxlbmRQb3MpKydcXG5gYGBcXG4nICsgdGV4dC52YWx1ZS5zdWJzdHJpbmcoZW5kUG9zLCB0ZXh0LnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpICsgJz4nK3RleHQudmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLGVuZFBvcykrJycgKyB0ZXh0LnZhbHVlLnN1YnN0cmluZyhlbmRQb3MsIHRleHQudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC52YWx1ZT12YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpICsgJ1xcbjEuICcrdGV4dC52YWx1ZS5zdWJzdHJpbmcoc3RhcnRQb3MsZW5kUG9zKSsnJyArIHRleHQudmFsdWUuc3Vic3RyaW5nKGVuZFBvcywgdGV4dC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcykgKyAnXFxuKyAnK3RleHQudmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLGVuZFBvcykrJycgKyB0ZXh0LnZhbHVlLnN1YnN0cmluZyhlbmRQb3MsIHRleHQudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3RleHQudmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpICsgJyoqJyt0ZXh0LnZhbHVlLnN1YnN0cmluZyhzdGFydFBvcyxlbmRQb3MpKycqKicgKyB0ZXh0LnZhbHVlLnN1YnN0cmluZyhlbmRQb3MsIHRleHQudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3RvcmVUb3AgPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnNjcm9sbFRvcCA9IHJlc3RvcmVUb3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGV4dC5mb2N1cygpO1xyXG4gICAgICAgICAgICAvLyB0ZXh0LnNlbGVjdGlvblN0YXJ0PSBzdGFydFBvcyArIG15VmFsdWUubGVuZ3RoO1xyXG4gICAgICAgICAgICAvLyB0ZXh0LnNlbGVjdGlvbkVuZD0gc3RhcnRQb3MgKyBteVZhbHVlLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50PXRleHQudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWFya0Rvd24oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldE1hcmtEb3duKCl7XHJcbiAgICAgICAgICAgIHRoaXMucHJlSHRtbD1jb252ZXJ0ZXIubWFrZUh0bWwodGhpcy5jb250ZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvVG9JbmRleCgpe1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDonLyd9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGF1bmNoKCl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIGlmKHRoYXQuJHJvdXRlLnF1ZXJ5LnR5cGU9PT0nZWRpdCcpe1xyXG4gICAgICAgICAgICAgICAgLy/mm7TmlrDmlofnq6BcclxuICAgICAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6J1BVVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9hcnRpY2xlcy8nK3RoYXQuJHJvdXRlLnF1ZXJ5LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOnRoYXQucHJlSHRtbCwvL+WtmOWCqOWcqOaWh+S7tuS4rVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTp0aGF0LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoYXQuY29udGVudC8v5a2Y5YKo5Zyo5pWw5o2u5bqT5LitwrdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ot7PovazliLDmn6XnnIvpobXpnaJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDonL2FydGljbGVzLycrdGhhdC4kcm91dGUucXVlcnkuaWR9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL+aWsOWinuaWh+eroFxyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9hcnRpY2xlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6dGhhdC5wcmVIdG1sLC8v5a2Y5YKo5Zyo5paH5Lu25LitXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOnRoYXQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhhdC5jb250ZW50Ly/lrZjlgqjlnKjmlbDmja7lupPkuK3Ct1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICAvL+i3s+i9rOWIsOafpeeci+mhtemdolxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOicvYXJ0aWNsZXMvJytyZXMuZGF0YS5pZH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudGVyKGUpe1xyXG4gICAgICAgICAgICBsZXQgdGV4dD1lLnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IHBvcz10ZXh0LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgc3dpdGNoKGUua2V5KXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VudGVyJzpcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnZhbHVlPXRleHQudmFsdWUuc3Vic3RyaW5nKDAscG9zKSsnPGJyPlxcbicrdGV4dC5zdWJzdHJpbmcocG9zLHRleHQudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQ9dGV4dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1hcmtEb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25zY3JvbGwoZSl7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0PWUudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgcHJldmlldz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldycpO1xyXG4gICAgICAgICAgICBwcmV2aWV3LnNjcm9sbFRvcD10ZXh0LnNjcm9sbFRvcC8yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25ldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTlmMjMwZTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbmV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGVsbFxcXFxEZXNrdG9wXFxcXE15LUlkZWFcXFxcTXlCbG9nXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzk5ZjIzMGUwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk5ZjIzMGUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk5ZjIzMGUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9uZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk5ZjIzMGUwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzk5ZjIzMGUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy93cml0ZS9uZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIndyaXRlLWFydGljbGUtY29udGFpbmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndyaXRlLWhlYWRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tcWlhbnlpdGlhblwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5nb1RvSW5kZXggfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIOaJgOacieaWh+eroFxcbiAgICAgICAgXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImFcIiwgeyBvbjogeyBjbGljazogX3ZtLmVudGVyIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIOWGmeaWh+eroFxcbiAgICAgICAgXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1mYWJ1XCIsIG9uOiB7IGNsaWNrOiBfdm0ubGF1bmNoIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5Y+R5biDXFxuICAgICAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXJ0aWNsZS10aXRsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRpdGxlLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRpdGxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIui+k+WFpeagh+mimFwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udGl0bGUgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdm0udGl0bGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXJ0aWNsZS1zdWJqZWN0c1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX2woX3ZtLmJsb2dTdWJqZWN0cywgZnVuY3Rpb24oc3ViKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGtleTogc3ViLmlkLCBvbjogeyBjbGljazogX3ZtLm9wZW5TdWJqZWN0RGlhbG9nIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Moc3ViLm5hbWUpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IG9uOiB7IGNsaWNrOiBfdm0ub3BlblN1YmplY3REaWFsb2cgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLmt7vliqDkuJPpophcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZWRpdG9yLW1kLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVkaXRvci1jb250cm9sc1wiLCBvbjogeyBjbGljazogX3ZtLmhhbmRsZSB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZWwtcG9wb3ZlclwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHBsYWNlbWVudDogXCJyaWdodFwiLCB3aWR0aDogXCIxNTBcIiwgdHJpZ2dlcjogXCJob3ZlclwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwi5LiA57qn5qCH6aKYXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCLkuoznuqfmoIfpophcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIuS4iee6p+agh+mimFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwi5Zub57qn5qCH6aKYXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCLkupTnuqfmoIfpophcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIuWFree6p+agh+mimFwiKV0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1iaWFvdGlcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwicmVmZXJlbmNlXCIgfSxcbiAgICAgICAgICAgICAgICAgIHNsb3Q6IFwicmVmZXJlbmNlXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tamlhY3VcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxNHB4XCIgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi14aWV0aVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tZGFzaHVqdWtlc2hpaHVhaWNvLVwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE4cHhcIiB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWxpbmsxXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuTGlua0RpYWxvZyhcImxpbmtcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tZWR1aS1mb3ItYmxvY2txdW90ZVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tdHVwaWFuXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMjBweFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuTGlua0RpYWxvZyhcImltZ1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1zaGlwaW5cIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxNHB4XCIgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1iaWFvZ2VcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxOHB4XCIgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1nb25nc2hpXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMjZweFwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24teW91eHVsaWViaWFvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMThweFwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24td3V4dWxpZWJpYW9cIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxOHB4XCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5peg5bqP5YiX6KGoXCIgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1mZW5nZXhpYW5cIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIyNHB4XCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5YiG5Ymy57q/XCIgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1iYW5nemh1XCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMjBweFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuW4ruWKqVwiIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZWRpdC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb250ZW50LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29udGVudFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhdHRyczogeyBpZDogXCJjb250ZW50XCIsIHBsYWNlaG9sZGVyOiBcIui1tuW/q+W8gOWni+S9oOeahOWtpuS5oOWQp1wiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbnRlbnQgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uY29udGVudCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS5zZXRNYXJrRG93blxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBrZXlkb3duOiBfdm0uZW50ZXIsXG4gICAgICAgICAgICAgIHNjcm9sbDogX3ZtLm9uc2Nyb2xsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbeyBuYW1lOiBcImhpZ2hsaWdodFwiLCByYXdOYW1lOiBcInYtaGlnaGxpZ2h0XCIgfV0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJldmlldy1jb250YWluZXJcIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJwcmV2aWV3XCIgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucHJlSHRtbCkgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZWwtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IF92bS5saW5rRGlhbG9nLnRpdGxlLFxuICAgICAgICAgICAgdmlzaWJsZTogX3ZtLmxpbmtEaWFsb2cudmlzaWJsZSxcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJ1cGRhdGU6dmlzaWJsZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS5saW5rRGlhbG9nLCBcInZpc2libGVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJlbC1pbnB1dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCLor7fovpPlhaXlhoXlrrlcIiB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubGlua0RpYWxvZy50ZXh0LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5saW5rRGlhbG9nLCBcInRleHRcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsaW5rRGlhbG9nLnRleHRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInByZXBlbmRcIiB9LCBbX3ZtLl92KFwiYWx0XCIpXSldLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTBweFwiLCB2aXNpYmlsaXR5OiBcImhpZGRlblwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZWwtaW5wdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl6ZO+5o6l5Zyw5Z2AXCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxpbmtEaWFsb2cuaHJlZixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubGlua0RpYWxvZywgXCJocmVmXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibGlua0RpYWxvZy5ocmVmXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJwcmVwZW5kXCIgfSwgW192bS5fdihcImxpbmtcIildKV0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpYWxvZy1mb290ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJmb290ZXJcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcImZvb3RlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImVsLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubGlua0RpYWxvZy52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuWPliDmtohcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZWwtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcInByaW1hcnlcIiB9LCBvbjogeyBjbGljazogX3ZtLmFkZExpbmsgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnoa4g5a6aXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJlbC1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogX3ZtLnN1YmplY3REaWFsb2cudGl0bGUsXG4gICAgICAgICAgICB2aXNpYmxlOiBfdm0uc3ViamVjdERpYWxvZy52aXNpYmxlLFxuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInVwZGF0ZTp2aXNpYmxlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLnN1YmplY3REaWFsb2csIFwidmlzaWJsZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdWJqZWN0cy1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIuaJgOacieS4k+mimFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFsbC1zdWJqZWN0c1wiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uYWxsU3ViamVjdHMsIGZ1bmN0aW9uKHN1Yikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogc3ViLmlkLCBzdGF0aWNDbGFzczogXCJzdWItaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkU3ViVG9CbG9nKHN1Yi5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHN1Yi5uYW1lKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1YmplY3QtZGVsZXRlIGljb25mb250IGljb24tc2hhbmNodVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwi5oiR55qE5LiT6aKYKOiHs+Wwkea3u+WKoOS4gOS4qilcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJteS1zdWJqZWN0c1wiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uYmxvZ1N1YmplY3RzLCBmdW5jdGlvbihzdWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHN1Yi5pZCwgc3RhdGljQ2xhc3M6IFwic3ViLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihfdm0uX3Moc3ViLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1YmplY3QtZGVsZXRlIGljb25mb250IGljb24tc2hhbmNodVwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlU3ViRnJvbUJsb2coc3ViLmlkKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=