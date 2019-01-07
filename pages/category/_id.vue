<template>
  <div align="center" class="root" style="position: absolute; top:5vh; width: 100%;">
    <div>
      <span class="GodoB" style="font-size: 2em; color: #2ac1bc;">{{category.name}}</span>
      <div style="border-bottom: 0.1em solid #dddddd;border-radius: 2px; width: 60%; margin: 2vh 0 4vh 0;"></div>
    </div>
    <post-list/>
    <paginate :subUrl="'/posts/categories/' + category.id"/>
  </div>
</template>

<script>
  import PostList from "../../components/PostList";
  import axios from '~/plugins/axios';
  import Paginate from "../../components/Paginate";

  export default {
    middleware: 'posts',
    components: {PostList, Paginate},
    asyncData({params, env}) {
      return axios.get('/categories/' + params.id)
        .then((res) => {
          return {category: res.data}
        });

    }
  }
</script>

<style lang="scss" scoped>

</style>
