<template>
  <div class="root" align="center">
    <!-- post
    [0] : id
    [1] : categoryId
    [2] : title
    [3] : createdDate
    -->

    <v-card class="card" v-for="post in posts" :key="post[0]">
      <a class="none_" :href="'/post/'+post[0]">
        <div class="GodoB title">
          {{post[2]}}
        </div>
        <div align="right" class="GodoM" style="padding-right: 10px;">
          {{post[3].split("T")[0]}}
        </div>
      </a>
    </v-card>

  </div>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters({
      posts : 'posts'
    })

    /*, ...?
    methods: {
      getPost(id) {
        this.$router.push('/post/' + id);
      }
    }*/

  }
</script>

<style lang="scss" scoped>

  .root {
    margin-left: 7%;
    margin-right: 7%;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px, rgba(0, 0, 0, 0.3) 0px 1px 4px;
    margin: 15px;

    padding-top: 1.5em;
    padding-bottom: 1.5em;

    transition: .15s all ease-in-out;
    background-image: url("/static/image/backboard.jpg");
    background-repeat: repeat;

    &:hover {
      transform: scale(1.07);
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: black;

      .title {
        padding-top: 1.5rem;
      }
    }
  }

</style>
