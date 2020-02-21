import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify';
import favourites from './modules/favourites';
import searches from './modules/searches';

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    favourites,
    searches,
  }
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
