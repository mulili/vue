// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 统一样式

import "@style/reset.css";
// 解决移动端视网膜屏 1px border的问题
import "@style/border.css";
// 引入字体图标
import "@style/iconfont.css";

import Vue from "vue";
// 移动端点击后有300ms 延迟的问题（某些移动端用300ms等待来判断用户是否双击）
import fastClick from "fastclick";
import router from "./router";

import App from "./App";

Vue.config.productionTip = false;
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: "#root",
  router,
  components: {
    App
  },
  template: `
  <App/>
  `
});
