import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/home/Home";
import City from "../pages/city/City";
import Detail from "../pages/detail/Detail";

Vue.use(Router);
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/city", name: "city", component: City },
  { path: "/detail/:id", name: "detail", component: Detail, props: true }
];

export default new Router({
  routes
});
