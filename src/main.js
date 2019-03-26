import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './assets/scss/app.scss'
import vueScrollto from 'vue-scrollto'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faWhatsapp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(vueScrollto)

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
