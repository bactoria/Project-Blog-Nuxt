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
        <div class="GodoB" style="font-size: 1.3em; padding-top: 1em;">
          {{post[2]}}
        </div>
        <div align="right" class="GodoM" style="padding-right: 10px; font-size: 0.8em;">
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

    padding-top: 1em;
    padding-bottom: 1em;

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
  }



  $breakpoints: (
    'xs': (max-width: 768px),
    'sm': (max-width: 992px),
    'md': (max-width: 1200px)
  ) !default;

  /* responsive scss */

  @mixin respond-to($breakpoint) {
    // If the key exists in the map
    @if map-has-key($breakpoints, $breakpoint) {
      // Prints a media query based on the value
      @media #{inspect(map-get($breakpoints, $breakpoint))} {
        @content;
      }
    }
      // If the key doesn't exist in the map
    @else {
      @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "
        + "Available breakpoints are: #{map-keys($breakpoints)}.";
    }
  }

  .root {

    @include respond-to('md') {
      font-size: 1em;
    }
    @include respond-to('sm') {
      font-size: 0.8em;
    }
    @include respond-to('xs') {
      font-size: 0.5em;
    }
  }

</style>
