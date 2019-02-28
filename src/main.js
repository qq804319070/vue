import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

import "./css/default.css"

new Vue({
  el: '#app',
  router,
  ...App
});
