<template>
  <div class="root">
    <!-- post
    [0] : id
    [1] : categoryId
    [2] : title
    [3] : subTitle
    [4] : createdDate
    -->

    <a v-for="post in posts" :key="post[0]" class="card" :href="'/post/'+post[0]">
      <div class="GodoB title">
          {{post[2]}}
      </div>
      <div class="GodoM sub-title">
        {{post[3]}}
      </div>
      <div class="GodoM" style="font-size: 0.8em; position: absolute; right: 2%; bottom: 1%;">
        {{toDate(post[4])}}
      </div>

    </a>

  </div>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters({
      posts: 'posts'
    }),
    methods: {
      toDate(s) {
        return s.split("T")[0].replace ("-","/").replace ("-","/")
      }
    }
  }

</script>

<style lang="scss" scoped>

  $mobile-size: 959px;

  .root {
    width: 50%;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px, rgba(0, 0, 0, 0.3) 0px 1px 4px;
    margin: 15px;

    height: 12vh;

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

    }

    .title {
      width: 100%;
      font-size: 1.4em;
      position: relative;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .sub-title {
      width: 100%;
      font-size: 1.1em;
      position: relative;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: darkgrey;
    }
  }

  /*Mobile Env*/
  @media (max-width: $mobile-size) {

    .root {
      width: 90%;
      font-size: 0.6em;
    }

  }
</style>
