import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import qs from "qs";

import ElementUI from 'element-ui';
import mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
Vue.use(mint);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
// 引入路由模块
import router from "./configs/router.js";


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
