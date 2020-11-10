import Vue from 'vue'
import Vuex from 'vuex'
import vms from './modules/vm'
import user from './modules/user'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vms,
    user,
    common
  }
})