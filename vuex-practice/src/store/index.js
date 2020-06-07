import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Store({
  modules: {
    moduleA: { state, getters, mutations, actions },
    moduleB: {
      state: {
        moduleB_key: 'moduleB_value',
      },
    },
  },
});

export default store;
