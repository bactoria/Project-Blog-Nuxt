<template>
  <div class="root" align="center">
    <about-me/>
    <category/>
    <search/>
    <link-icon />
  </div>
</template>

<script>
  import Category from "./Category";
  import AboutMe from "./AboutMe";
  import Search from "./Search";
  import LinkIcon from "./LinkIcon"
  export default {
      components: {Category, AboutMe, Search, LinkIcon}
    }
</script>

<style lang="scss" scoped>
  .root {
    padding-left:10%;
    padding-right:10%;
  }
</style>
