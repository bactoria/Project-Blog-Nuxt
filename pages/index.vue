<template>
  <div align="center" class="root" style="position: absolute; top:5vh; width: 100%;">

      <span class="GodoB" style="font-size: 2em; color: #2ac1bc;">전체 글</span>
    <div style="border-bottom: 0.2em solid #dddddd;border-radius: 2px; width: 60%; margin: 2vh 0 4vh 0;"></div>
    <post-list />

      <paginate subUrl="/posts"/>

  </div>

</template>

<script>
  import PostList from "../components/PostList";
  import Paginate from "../components/Paginate";

  export default {
    components: {PostList, Paginate},
    middleware: 'allPosts',
    head() {
      return {
        meta: [
          {property: 'og:type', content: 'website'},
          {property: 'og:title', content: 'bactoria 블로그'},
          {property: 'og:description', content: 'bactoria 블로그입니다.'},
          {property: 'og:image', content: 'https://avatars0.githubusercontent.com/u/25674959?s=460&v=4'},
          {property: 'og:url', content: 'https://bactoria.me'}
        ]
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
