import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/news",
    name: "news",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "news" */ "../views/NewsView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    children: [
      {
        path: "general",
        component: () => import("../views/AboutChildren/GeneralView.vue"),
      },
      {
        path: "general-definitions",
        component: () =>
          import("../views/AboutChildren/GeneralDefinitions.vue"),
      },
      {
        path: "schedule",
        component: () => import("../views/AboutChildren/Schedule.vue"),
      },
      {
        path: "pay",
        component: () => import("../views/AboutChildren/Pay.vue"),
      },
      {
        path: "rules-on-place",
        component: () => import("../views/AboutChildren/RulesOnPlace.vue"),
      },
      {
        path: "other",
        component: () => import("../views/AboutChildren/Other.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
