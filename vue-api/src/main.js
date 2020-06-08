import Vue from 'vue';
import App from './App.vue';

// 设置为false，以阻止vue在启动时生成生成生产提示
Vue.config.productionTip = false;

// 👇 $mount 和 el 两者写法没有区别，都是将Vue的实例挂在到真实的dom节点的有效方式

// new Vue({
//   render: h => h(App),
// }).$mount('#app');

/* 
  Vue 选项中的 render 函数若存在，
  则Vue构造函数不会从 template 选项或通过 el 选项指定的挂载元素中国呢提取出的HTML模版编译渲染函数；
*/
new Vue({
  el: '#app',
  /* 
    render 接收一个 createElement的函数作为第一个参数来创建 VNode；
    Vue cli 将这个函数命名为h，是取 hyperScript 的缩写；
    hyperScript 表示的是“生成HTML结构的脚本”，它是HTML的一部分；
  */
  render: h => h(App),
});
