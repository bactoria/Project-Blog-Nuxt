<template>

  <div class="root">

    <div class="table" align="center">

      <!-- 카테고리 -->
      <div align="center">
        <a class="GodoB" style="font-size: 1.5em; text-decoration: none; color: #2ac1bc;"
           :href="'/category/'+post.category.id">{{post.category.name}}</a>
      </div>


      <!--<a href="#disqus_thread"></a>-->

      <div align="center">
        <!-- 제목 -->
        <div class="GodoB PostTitle">{{post.title}}</div>


        <div style="border-bottom: 0.1em solid #dddddd;border-radius: 2px; width: 100%;"></div>

        <span class="PostDate"> {{post.createdDate.split("T")[0]}} </span>

        <!-- 날짜 -->
      </div>


    </div>

    <article>
      <!-- 내용 -->

      <vue-markdown style="text-align: left;" class="GodoM markdown"
                    :watches="['show','html','breaks','linkify','emoji','typographer','toc']"
                    :source="post.content" :show="show" :html="html" :breaks="breaks" :linkify="linkify"
                    :emoji="emoji" :typographer="typographer"></vue-markdown>

    </article>
    <!-- Facebook 좋아요 --> <!--Docs- https://developers.facebook.com/docs/plugins/like-button -->
    <div class="fb-like"
         :data-href="'https://bactoria.me/post/'+post.id"
         data-layout="standard"
         data-action="like"
         data-show-faces="true"
         data-share="true">
    </div>


    <!-- Facebook 댓글 --> <!--Docs- https://developers.facebook.com/docs/plugins/comments/-->
    <!-- <div id="fb-root"></div>
         <div class="fb-comments" data-href="http://localhost:3000" data-width="100%" data-numposts="5"></div>
    -->

    <!--이건모지-->
    <a href="#disqus_thread"></a>

    <!-- Disqus 댓글 -->
    <div id="disqus_thread"></div>


    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by
      Disqus.</a></noscript>

  </div>
</template>


<script>
  import VueMarkdown from 'vue-markdown'
  import { mapGetters } from 'vuex'


  export default {
    mounted: () => {
      /**
       *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
       *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
      /*
      var disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      */
      (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://bactoria.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();

    },
    head() {
      return {

        title: '['+ this.post.category.name + '] ' + this.post.title + ' :: Bactoria',
        meta: [
          { hid: 'description', name: 'description', content: this.post.content },
          { property: 'og:type', content:'website'},
          { property: 'og:title', content:this.post.title},
          { property: 'og:description', content:this.post.content},
          { property: 'og:image', content:'https://avatars0.githubusercontent.com/u/25674959?s=460&v=4'},
          { property: 'og:url', content:'https://bactoria.me/post/'+this.$route.params.id}
        ],
        script: [
          {src: 'https://bactoria.disqus.com/count.js', id: 'dsq-count-scr', body: true},
          {src: '/js/prism190117.js'},
          {src: '/js/facebookSDK.js'}
        ],
        link: [
          {rel: 'stylesheet', href: '/css/prism190117.css'},
          {rel: 'stylesheet', href: '/css/prism-custom.css'}
        ]
      }
    },
    data() {
      return {
        /*Markdown*/
        show: true,
        html: false,
        breaks: true,
        linkify: false,
        emoji: true,
        typographer: true,
        toc: false
      }
    },
    middleware: 'post',
    components: {VueMarkdown},
    computed : mapGetters({
      post : 'post'
    })
  }
</script>


<style lang="scss" scoped>

  .root {
    padding: 3% 5% calc(10% + 20em) 5%;
    max-width: 100%;
  }

  .PostTitle {
    font-size: 2.3em;

    margin-top: 0.5em;
    margin-bottom: 1em;

  }

  .PostDate {
    float: right;

    margin: 1em 1em 0em 0em;
    font-size: 1.2em;
    font-family: GodoM;
  }

  .markdown {
    max-width: 100%;
    font-size: 1.3em;
    text-align: left;
    line-height: 2.5em;

    //text가 div 벗어나는거 방지
    word-wrap: break-word;


    padding-left: 1%;
    padding-right: 1%;

    margin-top: 7em;
    margin-bottom: 15%;

  }

  #disqust_thread {
    margin-top: 20px;
  }



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
