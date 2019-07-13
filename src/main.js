import Vue from 'vue';
import router from './router';
import store from './store';

//import './plugins/vuetify';
//import './plugins/axios';

//import './registerServiceWorker';

import App from './App.vue';

import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.http.options.root = 'http://api.iqube.org.in/';
