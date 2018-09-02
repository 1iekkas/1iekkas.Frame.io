import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Recommend from "./components/recommend/recommend.vue";
import Radioanchor from "./components/radioAnchor/radioAnchor.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect:'/recommend'
    },
    {
      path: "/recommend",
      name: "Recommend",
      component: Recommend
    },
    {
      path: "/radioanchor",
      name: "Radioanchor",
      component: Radioanchor
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
