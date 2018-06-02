import Vuex from 'vuex'

const store = () => new Vuex.Store ({

  state: {
    posts: [],
    categories: [],
    hasCategories: false,
    post: [],
    csr: [],
    searchedPosts: [],
    authenticated: false,
    counter: 0,
    tokenStr: ''
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
    },
    authentify(state) {
      state.authenticated = true
    }
  },

  getters: {
    categories (state) {
      return state.categories
    },
    post (state) {
      return state.post
    },
    authentiti (status) {
      return status.authenticated
    },
    tokenStr (status) {
      return status.tokenStr
    }

  }
})

export default store
