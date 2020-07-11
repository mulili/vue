import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routes = [
  { path: "/", name: "home", component: () => import("@/pages/home/Home") },
  { path: "/city", name: "city", component: () => import("@/pages/city/City") },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("@/pages/detail/Detail")
  }
];

export default new Router({
  routes,
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior() {
    /*
      第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用；
      返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样（记住页面位置）；

      return {x:0,y:0},对于所有路由导航，简单地让页面滚动到顶部；
    */
    return {
      x: 0,
      y: 0
    };
  }
});
