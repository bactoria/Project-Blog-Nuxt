/* https://github.com/github1586/nuxt-bnhcp/blob/master/store/index.js
*  Quick Start Vue.js p490. B.3 저장소 기능 작성
*
* */

import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'

const state = {
  posts: [],
  categories: [],
  hasCategories: false,
  post: [],
  csr: [],
  searchedPosts: [],
  authenticated: false,
  counter: 0,
  tokenStr: '',
  markContent: 'markContent'
}

const store = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations
  })
}

export default store
