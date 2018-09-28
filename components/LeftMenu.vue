<template>
  <div class="root" align="center">
    <category/>
    <search/>
    <link-icon />
  </div>
</template>

<script>
  import Category from "./Category";
  import Search from "./Search";
  import LinkIcon from "./LinkIcon"
  export default {
    components: {Category, Search, LinkIcon}
  }
</script>

<style lang="scss" scoped>
  .root {
    padding-left:10%;
    padding-right:10%;
  }
</style>
