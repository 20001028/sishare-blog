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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUJsb2cvc3JjL2NvbXBvbmVudHMvZWRpdC9lZGl0LnZ1ZSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY3NzL2VkaXQvZWRpdC5jc3M/M2Y1NSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9lZGl0L2VkaXQudnVlIiwid2VicGFjazovL015QmxvZy8uL3NyYy9jb21wb25lbnRzL2VkaXQvZWRpdC52dWU/MWE4MSIsIndlYnBhY2s6Ly9NeUJsb2cvLi9zcmMvY29tcG9uZW50cy9lZGl0L2VkaXQudnVlPzVmZDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHVCQUZBO0FBR0EsdUJBSEE7QUFJQSxxQkFKQTtBQUtBO0FBQ0EsNkJBREE7QUFFQSx3QkFGQTtBQUdBLHdCQUhBO0FBSUEsOEJBSkE7QUFLQTtBQUxBLGFBTEE7QUFZQTtBQUNBLDZCQURBO0FBRUE7QUFGQSxhQVpBO0FBZ0JBLDJCQWhCQTtBQWlCQTtBQWpCQTtBQW1CQSxLQXJCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBRkEsZUFHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQVBBO0FBUUE7QUFDQSw2QkFEQTtBQUVBO0FBRkEsZUFHQSxJQUhBLENBR0E7QUFDQTtBQUNBLGFBTEE7QUFNQTtBQUNBLEtBMUNBO0FBMkNBO0FBQ0E7QUFDQSxLQTdDQTtBQThDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FDQTtBQUNBO0FBQ0Esb0NBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSwyREFGQTtBQUdBO0FBQ0EsZ0RBREE7QUFFQTtB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QTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsa0JBQWtCLE9BQU8scUJBQXFCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixvQ0FBb0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhCQUE4QjtBQUM3QztBQUNBLGtDQUFrQyx1Q0FBdUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQSxrQ0FBa0MsdUNBQXVDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNyY19jb21wb25lbnRzX2VkaXRfZWRpdF92dWUuZjEyMTZmNTM3Y2NkMzc1YzEzOWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwid3JpdGUtYXJ0aWNsZS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JpdGUtaGVhZFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tcWlhbnlpdGlhblwiIEBjbGljaz1cImdvVG9JbmRleFwiPlxyXG4gICAgICAgICAgICAgICAg5omA5pyJ5paH56ugXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgdi1vbjpjbGljaz1cImVudGVyXCI+XHJcbiAgICAgICAgICAgICAgICDlhpnmlofnq6BcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1mYWJ1XCIgQGNsaWNrPVwibGF1bmNoXCIgPlxyXG4gICAgICAgICAgICAgICAg5Y+R5biDXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIui+k+WFpeagh+mimFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInRpdGxlXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlLXN1YmplY3RzXCI+XHJcbiAgICAgICAgICAgIDxhIEBjbGljaz1cIm9wZW5TdWJqZWN0RGlhbG9nXCIgdi1mb3I9XCJzdWIgaW4gYmxvZ1N1YmplY3RzXCIgOmtleT1cInN1Yi5pZFwiPnt7c3ViLm5hbWV9fTwvYT5cclxuICAgICAgICAgICAgPGEgQGNsaWNrPVwib3BlblN1YmplY3REaWFsb2dcIj7mt7vliqDkuJPpopg8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvci1tZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvci1jb250cm9sc1wiIEBjbGljaz1cImhhbmRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGVsLXBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuS4gOe6p+agh+mimDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+5LqM57qn5qCH6aKYPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7kuInnuqfmoIfpopg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuWbm+e6p+agh+mimDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+5LqU57qn5qCH6aKYPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7lha3nuqfmoIfpopg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgc2xvdD1cInJlZmVyZW5jZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1iaWFvdGlcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2VsLXBvcG92ZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWppYWN1XCIgc3R5bGU9XCJmb250LXNpemU6MTRweDtcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24teGlldGlcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tZGFzaHVqdWtlc2hpaHVhaWNvLVwiIHN0eWxlPVwiZm9udC1zaXplOjE4cHg7XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWxpbmsxXCIgQGNsaWNrPVwib3BlbkxpbmtEaWFsb2coJ2xpbmsnKVwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1lZHVpLWZvci1ibG9ja3F1b3RlXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLXR1cGlhblwiIHN0eWxlPVwiZm9udC1zaXplOjIwcHg7XCIgQGNsaWNrPVwib3BlbkxpbmtEaWFsb2coJ2ltZycpXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLXNoaXBpblwiIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWJpYW9nZVwiIHN0eWxlPVwiZm9udC1zaXplOjE4cHg7XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uZm9udCBpY29uLWdvbmdzaGlcIiBzdHlsZT1cImZvbnQtc2l6ZToyNnB4O1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi15b3V4dWxpZWJpYW9cIiBzdHlsZT1cImZvbnQtc2l6ZToxOHB4O1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi13dXh1bGllYmlhb1wiIHN0eWxlPVwiZm9udC1zaXplOjE4cHg7XCIgdGl0bGU9XCLml6Dluo/liJfooahcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb25mb250IGljb24tZmVuZ2V4aWFuXCIgc3R5bGU9XCJmb250LXNpemU6MjRweDtcIiB0aXRsZT1cIuWIhuWJsue6v1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1iYW5nemh1XCIgc3R5bGU9XCJmb250LXNpemU6MjBweDtcIiB0aXRsZT1cIuW4ruWKqVwiPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29udGVudFwiIHYtbW9kZWw9XCJjb250ZW50XCIgQGlucHV0PVwic2V0TWFya0Rvd25cIiBwbGFjZWhvbGRlcj1cIui1tuW/q+W8gOWni+S9oOeahOWtpuS5oOWQp1wiIEBrZXlkb3duPVwiZW50ZXJcIiBAc2Nyb2xsPVwib25zY3JvbGxcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInByZXZpZXdcIiBjbGFzcz1cInByZXZpZXctY29udGFpbmVyXCIgdi1odG1sPVwicHJlSHRtbFwiIHYtaGlnaGxpZ2h0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZWwtZGlhbG9nXHJcbiAgICAgICAgICAgIDp0aXRsZT1cImxpbmtEaWFsb2cudGl0bGVcIlxyXG4gICAgICAgICAgICA6dmlzaWJsZS5zeW5jPVwibGlua0RpYWxvZy52aXNpYmxlXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MCVcIj5cclxuICAgICAgICAgICAgPGVsLWlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5YaF5a65XCIgdi1tb2RlbD1cImxpbmtEaWFsb2cudGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJwcmVwZW5kXCI+YWx0PC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9lbC1pbnB1dD5cclxuICAgICAgICAgICAgPHAgc3R5bGU9XCJ3aWR0aD0zMHB4O2hlaWdodDoxMHB4O3Zpc2liaWxpdHk6aGlkZGVuO1wiPjwvcD5cclxuICAgICAgICAgICAgPGVsLWlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6ZO+5o6l5Zyw5Z2AXCIgdi1tb2RlbD1cImxpbmtEaWFsb2cuaHJlZlwiPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJwcmVwZW5kXCI+bGluazwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZWwtaW5wdXQ+XHJcbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJmb290ZXJcIiBjbGFzcz1cImRpYWxvZy1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxlbC1idXR0b24gQGNsaWNrPVwibGlua0RpYWxvZy52aXNpYmxlID0gZmFsc2VcIj7lj5Yg5raIPC9lbC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZWwtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiYWRkTGlua1wiPuehriDlrpo8L2VsLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZWwtZGlhbG9nPlxyXG4gICAgICAgIDxlbC1kaWFsb2dcclxuICAgICAgICAgICAgOnRpdGxlPVwic3ViamVjdERpYWxvZy50aXRsZVwiXHJcbiAgICAgICAgICAgIDp2aXNpYmxlLnN5bmM9XCJzdWJqZWN0RGlhbG9nLnZpc2libGVcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjUwJVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViamVjdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YT7miYDmnInkuJPpopg8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxsLXN1YmplY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cInN1YiBpbiBhbGxTdWJqZWN0c1wiIDprZXk9XCJzdWIuaWRcIiBjbGFzcz1cInN1Yi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cImFkZFN1YlRvQmxvZyhzdWIuaWQpXCI+e3tzdWIubmFtZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInN1YmplY3QtZGVsZXRlIGljb25mb250IGljb24tc2hhbmNodVwiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGE+5oiR55qE5LiT6aKYKOiHs+Wwkea3u+WKoOS4gOS4qik8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktc3ViamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwic3ViIGluIGJsb2dTdWJqZWN0c1wiIDprZXk9XCJzdWIuaWRcIiBjbGFzcz1cInN1Yi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt7c3ViLm5hbWV9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzdWJqZWN0LWRlbGV0ZSBpY29uZm9udCBpY29uLXNoYW5jaHVcIiBAY2xpY2s9XCJkZWxldGVTdWJGcm9tQmxvZyhzdWIuaWQpXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZWwtZGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uLy4uL2Nzcy9lZGl0L2VkaXQuY3NzXCI+XHJcblxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxubGV0IGNvbnZlcnRlciA9IG5ldyBzaG93ZG93bi5Db252ZXJ0ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIHRvcDonMTJweCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6JycsXHJcbiAgICAgICAgICAgIHByZUh0bWw6XCJcIixcclxuICAgICAgICAgICAgdGl0bGU6JycsXHJcbiAgICAgICAgICAgIGxpbmtEaWFsb2c6ey8v5o+S5YWl6ZO+5o6l55qERGlhbG9nXHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5o+S5YWl6ZO+5o6lJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6JycsXHJcbiAgICAgICAgICAgICAgICBocmVmOicnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6J2xpbmsnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1YmplY3REaWFsb2c6e1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+S4k+mimOeuoeeQhicsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbGxTdWJqZWN0czpbXSxcclxuICAgICAgICAgICAgYmxvZ1N1YmplY3RzOltdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKXtcclxuICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgIC8v5Yik5pat5piv5L+u5pS56L+Y5piv5paw5paH56ugXHJcbiAgICAgICAgaWYodGhhdC4kcm91dGUucXVlcnkudHlwZT09PSdlZGl0Jyl7XHJcbiAgICAgICAgICAgIC8v5qC55o2uaWTor7fmsYLmlbDmja7lubbmuLLmn5PmoIfpopjjgIHmlofmnKzln5/lkozpooTop4hcclxuICAgICAgICAgICAgdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9hcnRpY2xlcy8nK3RoYXQuJHJvdXRlLnF1ZXJ5LmlkLFxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICB0aGF0LnByZUh0bWw9cmVzLmRhdGEuaHRtbDtcclxuICAgICAgICAgICAgICAgIHRoYXQuY29udGVudD1yZXMuZGF0YS5hcnRpY2xlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnRpdGxlPXJlcy5kYXRhLmFydGljbGUudGl0bGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL3N1YmplY3RzLycrdGhhdC4kcm91dGUucXVlcnkuaWRcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhhdC5ibG9nU3ViamVjdHM9cmVzLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy4kcm91dGUucXVlcnkpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIGFkZFN1YlRvQmxvZyhpZCl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIGlmKHRoYXQuYmxvZ1N1YmplY3RzLmxlbmd0aD49NSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcnM9dGhhdC5ibG9nU3ViamVjdHMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQ9PT1pZCk7XHJcbiAgICAgICAgICAgIGlmKGZpbHRlcnMubGVuZ3RoPjApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRoYXQuYmxvZ1N1YmplY3RzLnB1c2goLi4udGhhdC5hbGxTdWJqZWN0cy5maWx0ZXIoaXRlbT0+aXRlbS5pZD09PWlkKSk7XHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2Jsb2ctc3VicycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBibG9nSWQ6dGhhdC4kcm91dGUucXVlcnkuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViSWQ6aWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlU3ViRnJvbUJsb2coaWQpe1xyXG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICB0aGF0LmJsb2dTdWJqZWN0cz10aGF0LmJsb2dTdWJqZWN0cy5maWx0ZXIoaXRlbT0+aXRlbS5pZCE9PWlkKTtcclxuICAgICAgICAgICAgdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwOi8vNDIuMTkyLjE4MC4xNDI6MzAwMC9zdWJqZWN0cy8nK3RoYXQuJHJvdXRlLnF1ZXJ5LmlkKycvJytpZCxcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGVuU3ViamVjdERpYWxvZygpe1xyXG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL3N1YmplY3RzJ1xyXG4gICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICB0aGF0LmFsbFN1YmplY3RzPXJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zdWJqZWN0RGlhbG9nLnZpc2libGU9dHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoYXQuJGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDonaHR0cDovLzQyLjE5Mi4xODAuMTQyOjMwMDAvc3ViamVjdHMvJyt0aGF0LiRyb3V0ZS5xdWVyeS5pZFxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICB0aGF0LmJsb2dTdWJqZWN0cz1yZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc3ViamVjdERpYWxvZy52aXNpYmxlPXRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3BlbkxpbmtEaWFsb2codHlwZSl7XHJcbiAgICAgICAgICAgIHRoaXMubGlua0RpYWxvZy50eXBlPXR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubGlua0RpYWxvZy50aXRsZT10eXBlPT09J2ltZycgPyAn5o+S5YWl5Zu+54mHJyA6ICfmj5LlhaXpk77mjqUnO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtEaWFsb2cudmlzaWJsZT10cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkTGluaygpe1xyXG4gICAgICAgICAgICAvL+WvueivneahhuKAnOehruWumuKAneaMiemSrueahOebkeWQrOWHveaVsFxyXG4gICAgICAgICAgICAvL+WwhmFsdOWSjGxpbmvmj5LlhaXliLDmlofmnKzln5/kuK1cclxuICAgICAgICAgICAgLy/ojrflj5bmlofmnKzln59ET03oioLngrlcclxuICAgICAgICAgICAgbGV0IHRleHRhcmVhPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAgICAgICAgIC8v5o+S5YWl6ZO+5o6l5LiA6Iis5LiN566h5piv5ZCm6YCJ5Lit5YaF5a6577yM5oiR5Lus6YO96YeH55So5aS05o+SXHJcbiAgICAgICAgICAgIGxldCBwb3M9dGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZT10ZXh0YXJlYS52YWx1ZTsvL+WPluWHuuW9k+WJjeaWh+acrOWfn+WGheeahOWAvFxyXG4gICAgICAgICAgICBsZXQgdHlwZT10aGlzLmxpbmtEaWFsb2cudHlwZT09PSdsaW5rJyA/ICcnIDogJyEnOy8v5Yik5pat5piv6ZO+5o6l6L+Y5piv5Zu+54mHXHJcbiAgICAgICAgICAgIC8v5o+S5YWl6ZO+5o6l5qC85byPXHJcbiAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLHBvcykrdHlwZSsnWycrdGhpcy5saW5rRGlhbG9nLnRleHQrJ10nXHJcbiAgICAgICAgICAgICAgICArJygnK3RoaXMubGlua0RpYWxvZy5ocmVmKycpJyt2YWx1ZS5zdWJzdHJpbmcocG9zLHZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudD10ZXh0YXJlYS52YWx1ZTsvL+abtOaWsGNvbnRlbnRcclxuICAgICAgICAgICAgdGhpcy5zZXRNYXJrRG93bigpOy8v5riy5p+TTWFya2Rvd25cclxuICAgICAgICAgICAgLy/lhbPpl63lr7nor53moYZcclxuICAgICAgICAgICAgdGhpcy5saW5rRGlhbG9nLnZpc2libGU9ZmFsc2U7XHJcbiAgICAgICAgICAgIC8v5bCG5a+56K+d5qGG5YaF6YOo5YaF5a655riF6Zmk77yM6YG/5YWN5rGh5p+T5LiL5qyh5omT5byAXHJcbiAgICAgICAgICAgIHRoaXMubGlua0RpYWxvZy50ZXh0PScnO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtEaWFsb2cuaHJlZj0nJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZShlKXsvL+S6i+S7tuS7o+eQhlxyXG4gICAgICAgICAgICBsZXQgaW5kZXg7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8ZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5baV09PT1lLnRhcmdldCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9aTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgb3BlcmF0aW9ucz1bJ2gnLCdiJywnaScsJ2NvZGUnLCdsaW5rJywncXVvdGUnLCdpbWcnLCd2aWRlbycsJ3RhYmxlJywnZ29uZ3NoaScsJ29sJywndWwnLCdsaW5lJywnaGVscCddO1xyXG4gICAgICAgICAgICBsZXQgdGV4dD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgICAgICAgICAvL+W8gOWni+WSjOe7k+adn+aMh+mSiFxyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3M9dGV4dC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICAgICAgbGV0IGVuZFBvcz10ZXh0LnNlbGVjdGlvbkVuZDtcclxuICAgICAgICAgICAgbGV0IHZhbHVlPXRleHQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmKFswLDEsMl0uaW5jbHVkZXMoaW5kZXgpJiZzdGFydFBvcz09PWVuZFBvcylcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy/kv53lrZhzY3JvbGxUb3BcclxuICAgICAgICAgICAgbGV0IHJlc3RvcmVUb3AgPSB0ZXh0LnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgc3dpdGNoKGluZGV4KXtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcykgKyAnIyMjJyt0ZXh0LnZhbHVlLnN1YnN0cmluZyhzdGFydFBvcyxlbmRQb3MpKyB0ZXh0LnZhbHVlLnN1YnN0cmluZyhlbmRQb3MsIHRleHQudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcykgKyAnKionK3RleHQudmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLGVuZFBvcykrJyoqJyArIHRleHQudmFsdWUuc3Vic3RyaW5nKGVuZFBvcywgdGV4dC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQudmFsdWU9dmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKSArICcqJyt0ZXh0LnZhbHVlLnN1YnN0cmluZyhzdGFydFBvcyxlbmRQb3MpKycqJyArIHRleHQudmFsdWUuc3Vic3RyaW5nKGVuZFBvcywgdGV4dC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQudmFsdWU9dmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKSArICdcXG5gYGBcXG4nK3RleHQudmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLGVuZFBvcykrJ1xcbmBgYFxcbicgKyB0ZXh0LnZhbHVlLnN1YnN0cmluZyhlbmRQb3MsIHRleHQudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcykgKyAnPicrdGV4dC52YWx1ZS5zdWJzdHJpbmcoc3RhcnRQb3MsZW5kUG9zKSsnJyArIHRleHQudmFsdWUuc3Vic3RyaW5nKGVuZFBvcywgdGV4dC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnZhbHVlPXZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcykgKyAnXFxuMS4gJyt0ZXh0LnZhbHVlLnN1YnN0cmluZyhzdGFydFBvcyxlbmRQb3MpKycnICsgdGV4dC52YWx1ZS5zdWJzdHJpbmcoZW5kUG9zLCB0ZXh0LnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQudmFsdWU9dmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKSArICdcXG4rICcrdGV4dC52YWx1ZS5zdWJzdHJpbmcoc3RhcnRQb3MsZW5kUG9zKSsnJyArIHRleHQudmFsdWUuc3Vic3RyaW5nKGVuZFBvcywgdGV4dC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vdGV4dC52YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcykgKyAnKionK3RleHQudmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLGVuZFBvcykrJyoqJyArIHRleHQudmFsdWUuc3Vic3RyaW5nKGVuZFBvcywgdGV4dC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdG9yZVRvcCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQuc2Nyb2xsVG9wID0gcmVzdG9yZVRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0ZXh0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIC8vIHRleHQuc2VsZWN0aW9uU3RhcnQ9IHN0YXJ0UG9zICsgbXlWYWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vIHRleHQuc2VsZWN0aW9uRW5kPSBzdGFydFBvcyArIG15VmFsdWUubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQ9dGV4dC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRNYXJrRG93bigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TWFya0Rvd24oKXtcclxuICAgICAgICAgICAgdGhpcy5wcmVIdG1sPWNvbnZlcnRlci5tYWtlSHRtbCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ29Ub0luZGV4KCl7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOicvJ30pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYXVuY2goKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgaWYodGhhdC4kcm91dGUucXVlcnkudHlwZT09PSdlZGl0Jyl7XHJcbiAgICAgICAgICAgICAgICAvL+abtOaWsOaWh+eroFxyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDonUFVUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2FydGljbGVzLycrdGhhdC4kcm91dGUucXVlcnkuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6dGhhdC5wcmVIdG1sLC8v5a2Y5YKo5Zyo5paH5Lu25LitXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOnRoYXQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhhdC5jb250ZW50Ly/lrZjlgqjlnKjmlbDmja7lupPkuK3Ct1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICAvL+i3s+i9rOWIsOafpeeci+mhtemdolxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOicvYXJ0aWNsZXMvJyt0aGF0LiRyb3V0ZS5xdWVyeS5pZH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIC8v5paw5aKe5paH56ugXHJcbiAgICAgICAgICAgICAgICB0aGF0LiRheGlvcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly80Mi4xOTIuMTgwLjE0MjozMDAwL2FydGljbGVzJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDp0aGF0LnByZUh0bWwsLy/lrZjlgqjlnKjmlofku7bkuK1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6dGhhdC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGF0LmNvbnRlbnQvL+WtmOWCqOWcqOaVsOaNruW6k+S4rcK3XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6Lez6L2s5Yiw5p+l55yL6aG16Z2iXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6Jy9hcnRpY2xlcy8nK3Jlcy5kYXRhLmlkfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW50ZXIoZSl7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0PWUudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgcG9zPXRleHQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICBzd2l0Y2goZS5rZXkpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZW50ZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQudmFsdWU9dGV4dC52YWx1ZS5zdWJzdHJpbmcoMCxwb3MpKyc8YnI+XFxuJyt0ZXh0LnN1YnN0cmluZyhwb3MsdGV4dC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudD10ZXh0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFya0Rvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbnNjcm9sbChlKXtcclxuICAgICAgICAgICAgbGV0IHRleHQ9ZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aWV3PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3Jyk7XHJcbiAgICAgICAgICAgIHByZXZpZXcuc2Nyb2xsVG9wPXRleHQuc2Nyb2xsVG9wLzI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWFkNDNmOGYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi8uLi9jc3MvZWRpdC9lZGl0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhZDQzZjhmJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxYWQ0M2Y4ZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERlbGxcXFxcRGVza3RvcFxcXFxNeS1JZGVhXFxcXE15QmxvZ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYWQ0M2Y4ZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYWQ0M2Y4ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYWQ0M2Y4ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWFkNDNmOGYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWFkNDNmOGYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2VkaXQvZWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ3cml0ZS1hcnRpY2xlLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3cml0ZS1oZWFkXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLXFpYW55aXRpYW5cIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZ29Ub0luZGV4IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDmiYDmnInmlofnq6BcXG4gICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJhXCIsIHsgb246IHsgY2xpY2s6IF92bS5lbnRlciB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICDlhpnmlofnq6BcXG4gICAgICAgIFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tZmFidVwiLCBvbjogeyBjbGljazogX3ZtLmxhdW5jaCB9IH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIOWPkeW4g1xcbiAgICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFydGljbGUtdGl0bGVcIiB9LCBbXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS50aXRsZSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0aXRsZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCLovpPlhaXmoIfpophcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRpdGxlIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLnRpdGxlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFydGljbGUtc3ViamVjdHNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5ibG9nU3ViamVjdHMsIGZ1bmN0aW9uKHN1Yikge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgeyBrZXk6IHN1Yi5pZCwgb246IHsgY2xpY2s6IF92bS5vcGVuU3ViamVjdERpYWxvZyB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHN1Yi5uYW1lKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBvbjogeyBjbGljazogX3ZtLm9wZW5TdWJqZWN0RGlhbG9nIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi5re75Yqg5LiT6aKYXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVkaXRvci1tZC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlZGl0b3ItY29udHJvbHNcIiwgb246IHsgY2xpY2s6IF92bS5oYW5kbGUgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImVsLXBvcG92ZXJcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBwbGFjZW1lbnQ6IFwicmlnaHRcIiwgd2lkdGg6IFwiMTUwXCIsIHRyaWdnZXI6IFwiaG92ZXJcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWQtZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIuS4gOe6p+agh+mimFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwi5LqM57qn5qCH6aKYXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCLkuInnuqfmoIfpophcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIuWbm+e6p+agh+mimFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwi5LqU57qn5qCH6aKYXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCLlha3nuqfmoIfpophcIildKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tYmlhb3RpXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcInJlZmVyZW5jZVwiIH0sXG4gICAgICAgICAgICAgICAgICBzbG90OiBcInJlZmVyZW5jZVwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWppYWN1XCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMTRweFwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24teGlldGlcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWRhc2h1anVrZXNoaWh1YWljby1cIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxOHB4XCIgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbmZvbnQgaWNvbi1saW5rMVwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlbkxpbmtEaWFsb2coXCJsaW5rXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLWVkdWktZm9yLWJsb2NrcXVvdGVcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLXR1cGlhblwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlbkxpbmtEaWFsb2coXCJpbWdcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tc2hpcGluXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMTRweFwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tYmlhb2dlXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMThweFwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tZ29uZ3NoaVwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjI2cHhcIiB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLXlvdXh1bGllYmlhb1wiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE4cHhcIiB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uZm9udCBpY29uLXd1eHVsaWViaWFvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMThweFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuaXoOW6j+WIl+ihqFwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tZmVuZ2V4aWFuXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMjRweFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuWIhuWJsue6v1wiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25mb250IGljb24tYmFuZ3podVwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCLluK7liqlcIiB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVkaXQtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29udGVudCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbnRlbnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY29udGVudFwiLCBwbGFjZWhvbGRlcjogXCLotbblv6vlvIDlp4vkvaDnmoTlrabkuaDlkKdcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb250ZW50IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLmNvbnRlbnQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uc2V0TWFya0Rvd25cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAga2V5ZG93bjogX3ZtLmVudGVyLFxuICAgICAgICAgICAgICBzY3JvbGw6IF92bS5vbnNjcm9sbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW3sgbmFtZTogXCJoaWdobGlnaHRcIiwgcmF3TmFtZTogXCJ2LWhpZ2hsaWdodFwiIH1dLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByZXZpZXctY29udGFpbmVyXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicHJldmlld1wiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnByZUh0bWwpIH1cbiAgICAgICAgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImVsLWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBfdm0ubGlua0RpYWxvZy50aXRsZSxcbiAgICAgICAgICAgIHZpc2libGU6IF92bS5saW5rRGlhbG9nLnZpc2libGUsXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwidXBkYXRlOnZpc2libGVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0ubGlua0RpYWxvZywgXCJ2aXNpYmxlXCIsICRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZWwtaW5wdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl5YaF5a65XCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxpbmtEaWFsb2cudGV4dCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubGlua0RpYWxvZywgXCJ0ZXh0XCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibGlua0RpYWxvZy50ZXh0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJwcmVwZW5kXCIgfSwgW192bS5fdihcImFsdFwiKV0pXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwcHhcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImVsLWlucHV0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpemTvuaOpeWcsOWdgFwiIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5saW5rRGlhbG9nLmhyZWYsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmxpbmtEaWFsb2csIFwiaHJlZlwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxpbmtEaWFsb2cuaHJlZlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwicHJlcGVuZFwiIH0sIFtfdm0uX3YoXCJsaW5rXCIpXSldLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaWFsb2ctZm9vdGVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiZm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJmb290ZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJlbC1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpbmtEaWFsb2cudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlj5Yg5raIXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImVsLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJwcmltYXJ5XCIgfSwgb246IHsgY2xpY2s6IF92bS5hZGRMaW5rIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi56GuIOWumlwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZWwtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IF92bS5zdWJqZWN0RGlhbG9nLnRpdGxlLFxuICAgICAgICAgICAgdmlzaWJsZTogX3ZtLnN1YmplY3REaWFsb2cudmlzaWJsZSxcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJ1cGRhdGU6dmlzaWJsZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS5zdWJqZWN0RGlhbG9nLCBcInZpc2libGVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3ViamVjdHMtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCLmiYDmnInkuJPpophcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhbGwtc3ViamVjdHNcIiB9LFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmFsbFN1YmplY3RzLCBmdW5jdGlvbihzdWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHN1Yi5pZCwgc3RhdGljQ2xhc3M6IFwic3ViLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZFN1YlRvQmxvZyhzdWIuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhzdWIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJqZWN0LWRlbGV0ZSBpY29uZm9udCBpY29uLXNoYW5jaHVcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIuaIkeeahOS4k+mimCjoh7PlsJHmt7vliqDkuIDkuKopXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXktc3ViamVjdHNcIiB9LFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmJsb2dTdWJqZWN0cywgZnVuY3Rpb24oc3ViKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBzdWIuaWQsIHN0YXRpY0NsYXNzOiBcInN1Yi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKHN1Yi5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJqZWN0LWRlbGV0ZSBpY29uZm9udCBpY29uLXNoYW5jaHVcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZVN1YkZyb21CbG9nKHN1Yi5pZClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9