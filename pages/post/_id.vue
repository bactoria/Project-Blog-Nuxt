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

      <div align="center">
        <a href="#" style="text-decoration: none">
          <v-icon style="right:0;
       font-size: 60px;">arrow_drop_up
          </v-icon>
        </a>
      </div>
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
  import MarkdownIt from 'markdown-it'
  import VueMarkdown from 'vue-markdown'



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

        title: this.post.title + ' :: Bactoria',
        meta: [
          { hid: 'description', name: 'description', content: this.post.content },
        ],
        script: [
          {src: 'https://bactoria.disqus.com/count.js', id: 'dsq-count-scr', body: true},
          {src: '/js/main.js'},
          {src: '/js/prism180830.js'},
          {src: '/js/facebookSDK.js'}
        ],
        link: [
          {rel: 'stylesheet', href: '/css/main.css'},
          {rel: 'stylesheet', href: '/css/prism180830.css'},
          {rel: 'stylesheet', href: '/css/prism-custom.css'}
        ]
      }
    },
    data() {
      return {
        //        result2: new MarkdownIt().render(this.$store.state.post.content),
        post: this.$store.state.post,

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
    components: {VueMarkdown}
  }
</script>


<style lang="scss" scoped>

  .root {

    margin-top: 3%;
    margin-left: 5%;
    margin-right: 5%;
    max-width: 100%;
  }

  .PostTitle {
    font-size: 2.3em;

    margin-top: 0.5em;
    margin-bottom: 1em;

  }

  .PostDate {
    float: right;
    margin-right: 1em;
    font-size: 1.2em;
    font-family: GodoM;
  }

  .markdown {
    max-width: 100%;
    font-size: 1.3em;
    text-align: left;

    //text가 div 벗어나는거 방지
    word-wrap: break-word;

    line-height: 1.3em;

    padding-left: 1%;
    padding-right: 1%;

    margin-top: 10%;
    margin-bottom: 15%;
  }

  #disqust_thread {
    margin-top: 20px;
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
      font-size: 0.9em;
    }
    @include respond-to('xs') {
      font-size: 0.7em;
    }
  }

</style>
