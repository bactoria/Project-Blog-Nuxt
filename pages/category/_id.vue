<template>
<div class="root" align="center">

  <section style="height: 20px;"> </section>

  <v-card class="card" v-for="post in posts" :key="post.id">
    <a class="none_" :href="'/post/'+post.id">
      <div class="GodoB title">
        {{post.title}}
      </div >
      <div align="right" class= "GodoM" style="padding-right: 10px;">
        {{post.createdDate.split('T')[0]}}
       </div>
     </a>
  </v-card>

</div>
</template>




<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    middleware: 'posts',
    components: {VueMarkdown},
    computed: {
      posts () { return this.$store.state.posts.content}
    },
    methods: {
      getPost (id) {
        this.$router.push('/post/'+id);
      }
    }
  }
</script>

<style lang="scss" scoped>

  .root {
    margin-left:10%;
    margin-right:10%;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px, rgba(0, 0, 0, 0.3) 0px 1px 4px;
    margin: 15px;

    padding-top: 20px;
    padding-bottom: 20px;

    transition: .15s all ease-in-out;
    background-image: url("/static/image/backboard.jpg");
    background-repeat: repeat;

    &:hover {
      transform: scale(1.07);
    }


    a {
      text-decoration: none;
      cursor:pointer;
      color: black;


      .title {
        padding-top: 1.5rem;
      }
    }
  }




</style>
