import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    posts: []
  },
  mutations: {
    add (state, payload) {
      state.posts = payload;
    }
  }
})

export default createStore
