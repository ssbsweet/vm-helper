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
        // const test = await fb.database().ref('vms')
        // test.on('value', snap => console.log(snap.val()))
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
              vm.ownerId,
              key
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
    myVms (state) {
      return state.vms
      // return state.vms.filter(vm => {
      //   return vm.ownerId === getters.user.id
      // })
    }
  }
}
