export default {

  categories (state) {
    return state.categories
  },
  post (state) {
    return state.post
  },
  posts (state) {
    return state.posts.content
  },
  authentiti (status) {
    return status.authenticated
  },
  tokenStr (status) {
    return status.tokenStr
  },
  markContent (status) {
    return status.markContent
  },
  searchedPosts (status) {
    return status.searchedPosts
  },
  pageCount (status) {
    return status.posts.totalPages
  }
}
