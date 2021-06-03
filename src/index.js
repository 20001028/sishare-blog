import './css/index.css';
import App from './components/app.vue';
import router from './router.js';

//自动生成的index.html不会有根结点，这里为body添加一个节点用来挂载Vue实例
const root=document.createElement('div');
root.id='app';
document.body.appendChild(root);

//把axios挂载到Vue原型上，可以用Vue实例内调用
Vue.prototype.$axios=axios;
//自定义highlight指令，用于代码高亮
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
});
//引用VueRouter插件
Vue.use(VueRouter);

//把Vue实例挂载到节点上
new Vue({
  el:'#app',
  router,
  render:h=>h(App)
});