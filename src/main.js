import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// jQuery
import $ from 'jquery'
// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// 掛載 jQuery
window.$ = $

Vue.use(ElementUI)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
