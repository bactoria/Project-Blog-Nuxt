<template>
  <div align="center" class="root">
    <div>
      <span class="GodoB" style="font-size: 3em;">{{category.name}}
</span>
      <post-list />
      <paginate :subUrl="'/posts/categories/' + category.id" />
    </div>
  </div>
</template>

<script>
  import PostList from "../../components/PostList";
  import axios from '~/plugins/axios';
  import Paginate from "../../components/Paginate";

  export default {
    middleware: 'posts',
    components: {PostList, Paginate},
    asyncData ({params, env}) {
      return axios.get('/categories/'+params.id)
        .then ((res) => {
          return {category : res.data}
        });

    }
  }
</script>

<style lang="scss" scoped>

</style>
