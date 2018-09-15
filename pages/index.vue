<template>
  <div align="center" class="root">

    <div>
      <span class="GodoB" style="font-size: 2em; color: #2ac1bc;">전체 글</span>
      <post-list />

      <paginate subUrl="/posts"/>

    </div>
  </div>

</template>

<script>
  import PostList from "../components/PostList";
  import Paginate from "../components/Paginate";

  export default {
    components: {PostList, Paginate},
    middleware: 'allPosts'
  }

</script>

<style lang="scss" scoped>



</style>
