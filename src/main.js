import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './assets/scss/app.scss'
import vueScrollto from 'vue-scrollto'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faFileDownload, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import AOS from "aos"
import "aos/dist/aos.css"

library.add(faWhatsapp, faFileDownload, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(vueScrollto)

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app')
