import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Mekaverse',
    component: () =>
      import(/* webpackChunkName: "mekaverse" */ '../views/Mekaverse.vue'),
  },
];

export default new VueRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history',
  routes,
});
