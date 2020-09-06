import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router/router'
import './assets/style.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  render: h => h(App), store, router
}).$mount('#app')
