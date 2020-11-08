import Vue from 'vue'
import Vuex from 'vuex'
import vm from './modules/vm'
import user from './modules/user'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vm,
    user,
    common
  }
})
