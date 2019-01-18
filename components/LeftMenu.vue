<template>
  <div class="root" align="center">

    <div style="padding: 1.5em 0 1em 0;">
      <a href="/" tag="span" class="bactoria GodoB" align="center">Bactoria</a>
    </div>

    <div>
      <img src="/image/me5.jpg" class="profileImage"/>
    </div>
    <category/>
    <search/>
    <link-icon pageName="blog"/>
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
    height: 100%;
    background-color: #f92672;
    font-size: 1.3vw;
  }

  .bactoria {
    font-size: 2.5em;
    cursor: pointer;
    color: black;
    text-decoration: none;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }

  }

  .profileImage{
    width:11vw;
    height: 11vw;

    border-radius: 50%;
    border: 2px solid #fec7da;
  }

</style>
