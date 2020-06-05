import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/home/Home";
import City from "../pages/city/City";

Vue.use(Router);
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/city", name: "city", component: City }
];

export default new Router({
  routes
});
