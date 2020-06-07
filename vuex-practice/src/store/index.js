import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import incrementModule from './modules/increment';

Vue.use(Vuex);

const store = new Store({
  modules: {
    /* 
      设置严格模式
        1. 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，
          将会抛出错误，这能保证所有的状态变更都能被调试工具跟踪到；
        2. 不要在发布环境下启用严格模式！
          严格模式会深度监测状态树来检测不合规的状态变更，会造成性能损失
        3. 可以让构建工具来处理这种情况；
    */
    strict: process.env.NODE_ENV !== 'production',
    incrementModule,
    moduleB: {
      state: {
        moduleB_key: 'moduleB_value',
      },
    },
  },
});

export default store;
