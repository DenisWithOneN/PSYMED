import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
    key: '',
  },
})

createApp(App).mount('#app')
 