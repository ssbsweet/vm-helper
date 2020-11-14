import * as fb from 'firebase'

class Vm {
  constructor (name, task, owner, date, ownerId, id = null) {
    this.name = name
    this.task = task
    this.owner = owner
    this.date = date
    this.ownerId = ownerId
    this.id = id
  }
}

export default {
  state: {
    vms: [
      // {
      //   id: '1',
      //   name: 'vm1',
      //   task: 'web-4550',
      //   owner: 'Артур',
      //   date: '08.11.2020'
      // },
      // {
      //   id: '2',
      //   name: 'vm2',
      //   task: 'apk-760',
      //   owner: 'Никита',
      //   date: '08.11.2020'
      // },
      // {
      //   id: '3',
      //   name: 'vm3',
      //   task: 'mob-721',
      //   owner: 'Мишаня',
      //   date: '08.11.2020'
      // }
    ]
  },
  mutations: {
    createVm (state, payload) {
      state.vms.push(payload)
    },
    loadVms (state, payload) {
      state.vms = payload
    }
  },
  actions: {
    async createVm ({ commit, getters }, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const newVm = new Vm(
          payload.name,
          payload.task,
          payload.owner,
          payload.date,
          '',
          getters.user.id
        )
        const vm = await fb.database().ref('vms').push(newVm)
        // console.log(vm)
        commit('setLoading', false)
        commit('createVm', {
          ...newVm,
          id: vm.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchVms ({ commit }) {
      commit('clearError')
      commit('setLoading', true)
      const resultVms = []
      try {
        const vmsVal = await fb.database().ref('vms').once('value')
        const vms = vmsVal.val()
        Object.keys(vms).forEach(key => {
          const vm = vms[key]
          resultVms.push(
            new Vm(
              vm.name,
              vm.task,
              vm.owner,
              vm.date,
              vm.ownerId
            )
          )
          commit('loadVms', resultVms)
          commit('setLoading', false)
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    vms (state) {
      return state.vms
    },
    myVms (state) {
      return state.vms
      // return state.vms.filter(vm => {
      //   return vm.ownerId === getters.user.id
      // })
    }
  }
}
