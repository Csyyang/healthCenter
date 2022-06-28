// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store/index';
import Vant from 'vant';
// import 'lib-flexible/flexible'

import 'vant/lib/index.less';
import '@/style/main.less'

Vue.use(Vant);

// import './core/api/config'
// require('./core/api/config');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
