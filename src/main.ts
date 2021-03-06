import Vue from 'vue'
import App from './App.lit'
import router from './router'
import store from './store'

import 'typeface-raleway'
import 'bulma/css/bulma.css'
import '@/assets/sass/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // Prevent blank screen in Electron builds
    this.$router.push('/')
  },
}).$mount('#app')
