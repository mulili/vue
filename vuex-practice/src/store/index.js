import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import incrementModule from './modules/increment';

Vue.use(Vuex);

const store = new Store({
  modules: {
    incrementModule,
    moduleB: {
      state: {
        moduleB_key: 'moduleB_value',
      },
    },
  },
});

export default store;
