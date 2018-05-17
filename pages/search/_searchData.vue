<template>

  <!-- post
[0] : id
[1] : categoryId
[2] : title
[3] : createdDate
-->

  <div class="root">

    <div class="searchResult GodoB">
      <span style="font-size: 20px;">'{{searchData}}'</span> 에 대한 검색결과 {{searchedPostsLen}} 건
    </div>
    <v-card class="card" v-for="post in searchedPosts" :key="post[0]">
       <a class="none_" :href="'/post/'+post[0]">
         <div class="GodoB title">
           {{post[2]}}
         </div >
         <div align="right" class= "GodoM" style="padding-right: 10px;">
           {{post[3]}}
         </div>
       </a>
     </v-card>
  </div>

</template>

<script>
  export default {
    middleware: 'search',
    data () {
      return {
        searchedPosts: this.$store.state.searchedPosts,
        searchData: this.$route.params.searchData,
        searchedPostsLen: ''
        //searchedPosts2: this.searchedPosts <- 이거는 '' 로 나옴... 왜지..
      }
    },
    created () {
      this.searchedPostsLen= this.searchedPosts.length
    }
  }
</script>

<style lang="scss" scoped>
  .root {
    margin-left:7%;
    margin-right:7%;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px, rgba(0, 0, 0, 0.3) 0px 1px 4px;
    margin: 15px;

    padding-top: 20px;
    padding-bottom: 20px;

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
