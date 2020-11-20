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
    vms: []
  },
  mutations: {
    createVm (state, payload) {
      state.vms.push(payload)
    },
    loadVms (state, payload) {
      state.vms = payload
    },
    updateVm (state, { name, task, owner, date, id }) {
      const vm = state.vms.find(x => {
        return x.id === id
      })
      vm.name = name
      vm.task = task
      vm.owner = owner
      vm.date = date
    },
    deleteVm (state, payload) {
      var index = state.vms.findIndex(vm => vm.id === payload)
      state.vms.splice(index, 1)
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
          getters.user.id,
          ''
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
        const vmsVal = await fb.database().ref('vms')
        vmsVal.on('value', snap => {
          const vms = snap.val()
          Object.keys(vms).forEach(uid => {
            const vm = vms[uid]
            resultVms.push(
              new Vm(
                vm.name,
                vm.task,
                vm.owner,
                vm.date,
                vm.ownerId,
                uid
              )
            )
            commit('loadVms', resultVms)
            commit('setLoading', false)
          })
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async updateVm ({ commit }, { name, task, owner, date, id }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        await fb.database().ref('vms').child(id).update({
          name,
          task,
          owner,
          date
        })
        commit('updateVm', {
          name,
          task,
          owner,
          date,
          id
        })
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async deleteVm ({ commit }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const deedRef = await fb.database().ref('vms')
        deedRef.limitToLast(1).once('value', (snapshot) => {
          snapshot.forEach((deedSnapshot) => {
            deedSnapshot.ref.remove()
          })
        })
        commit('deleteVm')
        commit('setLoading', false)
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
    myVms (state, getters) {
      // return state.vms
      return state.vms.filter(vm => {
        return vm.ownerId === getters.user.id
      })
    }
  }
}
