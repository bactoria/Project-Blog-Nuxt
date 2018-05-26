<template>

  <div style="width: 100%;" class="root">

    <div class="table" align="center">

      <!-- 카테고리 -->
      <div align="center">
        <a class = "GodoB" style= "font-size: 1.3rem; text-decoration: none; color: #999999;" :href="'/category/'+post.category.id">{{post.category.name}}</a>
      </div>


      <!--<a href="#disqus_thread"></a>-->

      <div align="center">
      <!-- 제목 -->
        <span class="GodoB PostTitle">{{post.title}}</span>


        <!-- 제목 밑 선긋기 -->
        <div style="border-bottom: 7px solid #dddddd;border-radius: 2px; width: 10%; margin-top: 20px"> </div>

        <div class="PostDate"> {{post.createdDate.split("T")[0]}} </div>

        <!-- 날짜 -->
      </div>



    </div>

    <article>
      <!-- 내용 -->

      <vue-markdown style="text-align: left;" class="GodoM markdown" :watches="['show','html','breaks','linkify','emoji','typographer','toc']"
                    :source="post.content" :show="show" :html="html" :breaks="breaks" :linkify="linkify"
                    :emoji="emoji" :typographer="typographer"></vue-markdown>

      <div align="center">
      <a href="#" style="text-decoration: none"><v-icon style="right:0;
       font-size: 60px;">arrow_drop_up</v-icon></a>
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
      <a href="#disqus_thread"></a>
    <!-- <div id="fb-root"></div>
         <div class="fb-comments" data-href="http://localhost:3000" data-width="100%" data-numposts="5"></div>
    -->

    <!-- Disqus 댓글 -->
    <div id="disqus_thread"></div>
    <script>

    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://bactoria.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

  </div>
</template>



  <script>
  import MarkdownIt from 'markdown-it'
  import VueMarkdown from 'vue-markdown'

  export default {
    head: {
      script: [
        {src: 'https://bactoria.disqus.com/count.js', id: 'dsq-count-scr', body: true},
        {src: '/js/main.js'},
        {src: '/js/prism.js'},
        {src: '/js/facebookSDK.js'}
      ],
      link: [
        { rel: 'stylesheet', href: '/css/main.css' },
        { rel: 'stylesheet', href: '/css/prism.css' }
      ]
    },
    data () {
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
    padding-left: 5%;
    padding-right: 7%;
  }

  .PostTitle {
    font-size: 4rem;
  }
  .PostDate {
    float: right;
    margin-right: 15px;
    font-size: 15px;
    font-family: GodoM;
  }


  .markdown {
    max-width: 100%;
    font-size: 1.5rem;
    text-align: left;

    //text가 div 벗어나는거 방지
    word-wrap: break-word;

    line-height: 2.5rem;

    padding-left: 3%;
    padding-right: 3%;

    margin-top: 10%;
    margin-bottom: 15%;
  }

  .table {
    background-image: url("/static/image/backboard.jpg");
    background-repeat: repeat;

    border-radius: 20px;
    margin-top: 20px;
    padding-top: 40px;
    padding-bottom: 20px;
  }

  #disqust_thread {
    margin-top: 20px;
  }

</style>
