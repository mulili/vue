import { selfLocalStorage } from "@utils";

const { setItem } = selfLocalStorage;

const mutations = {
  changeCity(state, city) {
    state.city = city;
    setItem("city", city);
  }
};

export default mutations;
