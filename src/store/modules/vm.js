// import * as fb from 'firebase'

// class newvm {
//   constructor (name, task, user, date, id = null) {
//     this.name = name
//     this.user = user
//     this.date = date
//     this.id = id
//   }
// }

// export default {
//   state: {
//     newVm: []
//   },
//   mutations: {
//     createNewVm (state, payload) {
//       state.vm.push(payload)
//     },
//     loadVm (state, payload) {
//       state.vm = payload
//     },
//     updateVm (state, { name, id }) {
//       const vm = state.vm.find(a => {
//         return a.id === id
//       })
//       vm.name = name
//     }
//   },
//   actions: {
//     async createNewVm ({ commit, getters }, payload) {
//       commit('clearError')
//       commit('setLoading', true)
//       try {
//         const newVm = new Vm(
//           payload.name,
//           payload.task,
//           payload.user,
//           payload.date,
//           getters.user.id,
//           '')
//         const vm = await fb.database().ref('vms').push(newvm)
//         // console.log(vm)
//         commit('setLoading', false)
//         commit('createProduct', {
//           ...newVm,
//           id: vm.key
//         })
//       } catch (error) {
//         commit('setError', error.message)
//         commit('setLoading', false)
//         throw error
//       }
//     },
//     async fetchProducts ({ commit }) {
//       commit('clearError')
//       commit('setLoading', true)
//       const resultVm = []
//       try {
//         const vmsVal = await fb.database().ref('vms').once('value')
//         const vms = vmsVal.val()
//         Object.keys(vms).forEach(key => {
//           const vm = vms[key]
//           resultVms.push(
//             new Vm(
//               vm.name,
//               vm.task,
//               vm.user,
//               vm.date,
//               key
//             )
//           )
//           commit('loadVms', resultVms)
//           commit('setLoading', false)
//         })
//       } catch (error) {
//         commit('setError', error.message)
//         commit('setLoading', false)
//         throw error
//       }
//     },
//     async updateVm ({ commit }, { name, id }) {
//       commit('clearError')
//       commit('setLoading', true)
//       try {
//         await fb.database().ref('vms').child(id).update({ name })
//         commit('updateVm', {
//           name,
//           id
//         })
//         commit('setLoading', false)
//       } catch (error) {
//         commit('setError', error.message)
//         commit('setLoading', false)
//         throw error
//       }
//     }
//   },
//   getters: {
//     vms (state) {
//       return state.vms
//     },
//     myVms (state, getters) {
//       return state.vms.filter(vm => {
//         return vm.ownerId === getters.user.id
//       })
//     },
//     pvmById (state) {
//       return vmId => {
//         return state.vms.find(vm => vm.id === vmId)
//       }
//     }
//   }
// }
