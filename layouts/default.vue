<template>

  <v-app style="background: white;">


    <v-navigation-drawer app temporary v-model="sideNav" fixed style="background-color: #f92672;">
      <side-menu/>
    </v-navigation-drawer>

    <div id="fullpage">

      <!--First Page-->
      <section class="fp-section">
        <about-me/>
      </section>

      <!--Second Page-->
      <section class="fp-section main">
        <nuxt/>
      </section>

      <!--Left Menu-->
      <div class="leftMenu hidden-sm-and-down">
        <!--오예 앱솔루트 만세 fix로 하면 크롬이랑 익스때 위치가다름..-->
        <!--Second Page에 넣으니까.. 게시물을 내릴 때 leftMenu가 pix되지가 않음...-->
        <left-menu/>
      </div>

      <!--Toolbar-->
      <v-toolbar app class="hidden-md-and-up white" flat style="position: absolute; top:100vh; opacity: 0.6 ">
        <v-toolbar-side-icon app fixed
                             @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      </v-toolbar>

    </div>
  </v-app>
</template>


<!--      <admin-toolbar/>-->

<script>
  import Category from '~/components/Category'
  import LeftMenu from "../components/LeftMenu";
  import SideMenu from "../components/SideMenu";
  import Search from "../components/Search"
  import AdminToolbar from "../components/adminToolbar";
  import AboutMe from "../components/AboutMe"


  let fullPage;
  if (process.browser) {
    require('fullpage.js/vendors/scrolloverflow.min');
    fullPage = require('fullpage.js/dist/fullpage.min');
  }

  export default {
    data() {
      return {
        sideNav: false,
        isBlogUrl: false
      }
    },
    mounted() {

      new fullPage('#fullpage', { //! 헛!!!! fullpage 하니까 vue-fullpage 의 음...객체가 만들어졌었음ㅋㅋㅋㅋㅋㅋㅋㅋㅋ 모지????????......

        //LicenseKey
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',

        anchors: ['aboutMe', 'blog'],

        //Scroll
        sectionSelector: '.fp-section',
        scrollOverflow: true,
        scrollingSpeed: 1000,

        //Design
        controlArrows: true
      });

      // 'bactoria.me' 로 접속하면 메인페이지 띄우고, 그외에는 blog 페이지로 이동한다.
      if (this.$route.path !== '/') {
        fullpage_api.moveTo('blog', 1);
      }

    },
    components: {
      AdminToolbar,
      LeftMenu,
      Category,
      AboutMe,
      SideMenu,
      Search
    }
  }
</script>


<style lang="scss" scoped>

  $left-menu-width: 20vw;
  $mobile-size: 959px;

  .main {
    width: calc(100vw - #{$left-menu-width});

    position: relative;
    left: 20vw;
  }

  .leftMenu {
    width: $left-menu-width;
    height: 100vh;

    position: absolute;
    top: 100vh;
  }

  /*Mobile Env*/
  @media (max-width: $mobile-size) {
    .main {
      width: 100vw;

      position: relative;
      left: 0vw
    }
  }

</style>

