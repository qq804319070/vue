import Vue from 'vue'
import Router from 'vue-router'
import Home from "page/Home.vue"
import List from "page/List.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/list',
      component:List
    }
  ]
})
