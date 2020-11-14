import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as fb from 'firebase/app'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyB6E-wkbsiXczCZMEVqvxxAhUiBgSrTAfI',
      authDomain: 'vmhelperlog.firebaseapp.com',
      databaseURL: 'https://vmhelperlog.firebaseio.com',
      projectId: 'vmhelperlog',
      storageBucket: 'vmhelperlog.appspot.com',
      messagingSenderId: '713947401210',
      appId: '1:713947401210:web:f2beaf3bb17314bdbcf243',
      measurementId: 'G-JXMYTYEFKN'
    }
    fb.initializeApp(firebaseConfig)
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchVms')
  }
}).$mount('#app')
