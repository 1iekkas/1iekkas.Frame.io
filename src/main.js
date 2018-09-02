import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import 'vant/lib/vant-css/index.css';
import { Swipe, SwipeItem, Icon } from 'vant';
import 'vant/lib/vant-css/base.css';
import 'vant/lib/vant-css/button.css';
require('../src/common/mock/mock.js');

Vue.use(Swipe).use(SwipeItem).use(Icon);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
