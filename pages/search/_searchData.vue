<template>
  <div class="root" align="center">

  <!-- post
[0] : id
[1] : categoryId
[2] : title
[3] : createdDate
-->


  <div class="searchResult GodoB">
      <span style="font-size: 20px;">'{{searchData}}'</span> 에 대한 검색결과 {{searchedPostsCount}} 건
  </div>

    <post-list />

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import PostList from "../../components/PostList";

  export default {
    components: {PostList},
    middleware: 'search',
    data () {
      return {
        searchData: this.$route.params.searchData
      }
    },
    created () {
      this.searchedPostsCount= this.searchedPosts.length
    },
    computed : mapGetters({
      searchedPosts : 'searchedPosts'
    })

  }
</script>

<style lang="scss" scoped>

  .root {
    margin-left: 7%;
    margin-right: 7%;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px, rgba(0, 0, 0, 0.3) 0px 1px 4px;
    margin: 15px;

    padding-top: 1.5em;
    padding-bottom: 1.5em;

    transition: .15s all ease-in-out;
    background-image: url("/static/image/backboard.jpg");
    background-repeat: repeat;

    &:hover {
      transform: scale(1.07);
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: black;

      .title {
        padding-top: 1.5rem;
      }
    }
  }

  .searchResult {
    padding: 10px;
    font-size: 15px;
  }
</style>
