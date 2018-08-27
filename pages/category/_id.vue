<template>
  <div align="center" class="root">
    <div>
      <span class="GodoB" style="font-size: 3em;">{{categoryName}}
</span>
      <post-list />
    </div>
  </div>
</template>

<script>
  import PostList from "../../components/PostList";
  import axios from '~/plugins/axios';

  export default {
    middleware: 'posts',
    components: {PostList},
    asyncData ({params, env}) {
      return axios.get('/api/categories/'+params.id)
        .then ((res) => {
          return {categoryName : res.data.name}
        });

    }

  }
</script>

<style lang="scss" scoped>

</style>
