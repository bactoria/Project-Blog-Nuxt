<template>
  <div align="center" class="root" style="position: absolute; top:5vh; width: 100%;">

    <div>
      <span class="GodoB" style="font-size: 2em; color: #2ac1bc;">전체 글</span>
      <post-list />

      <paginate subUrl="/posts"/>

    </div>
  </div>

</template>

<script>
  import PostList from "../components/PostList";
  import Paginate from "../components/Paginate";

  export default {
    components: {PostList, Paginate},
    middleware: 'allPosts',
    head() {
      return {
        meta: [
          {property: 'og:type', content: 'website'},
          {property: 'og:title', content: 'bactoria 블로그'},
          {property: 'og:description', content: 'bactoria 블로그입니다.'},
          {property: 'og:image', content: 'https://avatars0.githubusercontent.com/u/25674959?s=460&v=4'},
          {property: 'og:url', content: 'https://bactoria.me'}
        ]
      }
    }
  }

</script>

<style lang="scss" scoped>


  //https://vuetifyjs.com/ko/layout/breakpoints 의 규격에 맞춤.
  $breakpoints: (
    'xs': (max-width: 599px),
    'sm': (max-width: 959px),
    'md': (max-width: 1263px)
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
