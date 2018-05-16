<template>
  <div class="root" align="center">
    <about-me/>
    <search/>
    <link-icon />
    <category/>
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
    margin-left:20%;
  }

</style>
