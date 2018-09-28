<template>
  <div align="center">

    <!--<div class="category GodoB">CATEGORY</div>-->
    <div>
      <div v-for="category in categories" :key="category.id" style=" width: 100%;">
        <div class="GodoB hover" style="align-items: center; margin: 1vh 0 1vh 0">
          <a class="categoryA" :href="'/category/' + category.id" style="color: #fec7da;">
            {{category.name}}
          </a>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {

    middleware: 'category',

    computed:
      mapGetters (['categories']),
    methods: {
      findPosts (category) {
        this.$router.push('/category/'+category.id);
      }
    }

  }
</script>

<style lang="scss" scoped>

  .hover {
    &:hover {
      transform: scale(1.15);
    }
  }

  .category {
    font-size: 2.3em;
    text-align: center;

  }

  .categoryA {

    text-decoration: none;
    font-size: 1.5em;
    text-align: center;
    cursor: pointer;

  }
</style>
