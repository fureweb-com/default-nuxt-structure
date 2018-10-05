import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    isLoggedIn: false,
    nickname: undefined
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true
    },
    logout (state) {
      state.isLoggedIn = false
      state.nickname = undefined
    },
    setNickname (state, payload) {
      state.nickname = payload
    }
  }
})

export default store
