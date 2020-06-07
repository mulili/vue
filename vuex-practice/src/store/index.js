import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

const store = new Store({
  state: {
    count: 1,
    greeting: 'hello',
  },
  mutations: {
    increment(state, value) {
      state.count += value;
    },
  },
});

export default store;
