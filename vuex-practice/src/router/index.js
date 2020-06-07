import Vue from 'vue';
import Router from 'vue-router';

import Increment from '../components/Increment/Increment';

Vue.use(Router);

const routes = [{ path: '/', name: 'Increment', component: Increment }];

export default new Router({
  routes,
});
