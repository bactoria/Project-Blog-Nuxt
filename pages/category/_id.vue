<template>
  <post-list>

  </post-list>
</template>

<script>
  import PostList from "../../components/PostList";

  export default {
    middleware: 'posts',
    components: {PostList},
  }
</script>

<style lang="scss" scoped>

</style>
