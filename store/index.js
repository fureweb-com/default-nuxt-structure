import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    isLoggedIn: false,
    nickname: undefined,
    thumbnailImage: undefined,
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
      state.nickname = undefined
    },
    setNickname(state, payload) {
      state.nickname = payload
    },
    setThumbnailImage(state, payload) {
      state.thumbnailImage = payload
    }
  }
})

export default store
