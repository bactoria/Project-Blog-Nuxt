/* https://github.com/github1586/nuxt-bnhcp/blob/master/store/mutations.js
*  Quick Start Vue.js p490. B.3 저장소 기능 작성
*
* */

import {
  POSTS,
  CATEGORIES,
  POST,
  CSR,
  SEARCH_POSTS,
  HAS_CATEGORIES,
  AUTHENTIFY,
  MARK_CONTENT

} from './mutation-types.js'


export default {

  [POSTS] (state, payload) {
    state.posts = payload;
  },

  [CATEGORIES] (state, payload) {
    state.categories = payload;
  },

  [POST] (state, payload) {
    state.post = payload;
  },

  [CSR] (state, payload) {
    state.csr = payload;
  },

  [SEARCH_POSTS] (state, payload) {
    state.searchedPosts = payload;
  },

  [HAS_CATEGORIES] (state) {
    state.hasCategories = true
  },

  [AUTHENTIFY] (state) {
    state.authenticated = true
  },

  [MARK_CONTENT] (state, payload) {
    state.markContent = payload;
  }

}
