import Vue from 'vue';
import App from './App.vue';

// 设置为false，以阻止vue在启动时生成生成生产提示
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
