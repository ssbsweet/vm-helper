import store from '../store/index'

// export default function (to, from, next) {
//   if (store.getters.user) {
//     next()
//   } else {
//     next('/?loginError=true')
//   }
// }

export default function (to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.user) {
      next()
    } else {
      next('/?loginError=true')
    }
  } else {
    next()
  }
}
