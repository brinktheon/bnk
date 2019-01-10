// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueResourse from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import "vue-material-design-icons/styles.css"
import VueCookie from 'vue-cookie'

Vue.use(VueResourse);
Vue.use(BootstrapVue);
Vue.use(VueCookie);

Vue.config.productionTip = false

export const serverBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
