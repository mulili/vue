import Vuex from "vuex";

import state from "./state";
import mutations from "./mutations";

const store = Vuex.createStore({
  state,
  mutations
});
export default store;
