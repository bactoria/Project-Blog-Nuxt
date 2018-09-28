<template>
  <div align="center">

    <div class="category GodoB">CATEGORY</div>

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

  .center {
    text-align: center;
  }

  .category {
    font-size: 2.2em;
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

</style>
