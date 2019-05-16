<template>
  <div class="root" align="center">

    <div class="category GodoB">BACTORIA</div>
    <div>
      <img src="/image/me5.jpg" class="profileImage"/>
    </div>
    <category/>
    <link-icon style="position: absolute; bottom: 5vh;"/>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import Category from "./Category";
  import LinkIcon from "./LinkIcon";

  export default {
    components: {Category, LinkIcon},
    middleware: 'category',
    computed:
      mapGetters(['categories']),
    methods: {
      findPosts(category) {
        this.$router.push('/category/' + category.id);
      }
    }

  }
</script>

<style lang="scss" scoped>
  .root {
    font-size: 1.5em;
  }

  .center {
    text-align: center;
  }

  .category {
    font-size: 2em;
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  .profileImage {
    width: 60%;

    border-radius: 50%;
    border: 2px solid #fec7da;
  }

</style>
