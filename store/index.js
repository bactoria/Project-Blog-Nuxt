import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    posts: [],
    categories: [],
    hasCategories: false,
    post: [],
    csr: [],
    searchedPosts: []
  },
  mutations: {
    add (state, payload) {
      state.posts = payload;
    },
    addCategories (state, payload) {
      state.categories = payload;
    },
    addPost (state, payload) {
      state.post = payload;
    },
    addCSR (state, payload) {
      state.csr = payload;
    },
    addSearchedPosts (state, payload) {
      state.searchedPosts = payload;
    },
    changeHasCategories(state) {
      state.hasCategories = true
    }
  },

  getters: {
    categories (state) {
      return state.categories
    },
    post (state) {
      return state.post
    }
  }
})

export default store
