import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify';
import favourites from './modules/favourites';
import searches from './modules/searches';
import common from './modules/common';

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    favourites,
    searches,
    common,
  }
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
