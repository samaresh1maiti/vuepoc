
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from '../src/router'
import i18n from './i18n'
import 'core-js/stable';
// optional but required for transforming generator fns.
import 'regenerator-runtime/runtime';
import { store } from '../src/store/store'
import Vuex from 'vuex'
Vue.use(Vuex)
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
// Transpiler for older browsers
import 'core-js/stable';
// optional but required for transforming generator fns.
import 'regenerator-runtime/runtime'; 
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()

// register VueFusionCharts component
Vue.use(VueFusionCharts,FusionCharts)


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})

new Vue({
  data: {
    total: ""
  },
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
