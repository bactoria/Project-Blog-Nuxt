<template>

  <v-app style="background: white;">

    <!--Toolbar-->
    <v-toolbar app class="hidden-md-and-up white" flat style="position: fixed; top:0vh; opacity: 0.6 ">
      <v-toolbar-side-icon app fixed
                           @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer app temporary v-model="sideNav" fixed style="background-color: #f92672;">
      <side-menu/>
    </v-navigation-drawer>




    <!--Left Menu-->
    <div class="leftMenu hidden-sm-and-down">
      <!--오예 앱솔루트 만세 fix로 하면 크롬이랑 익스때 위치가다름..-->
      <left-menu/>
    </div>

    <div class=main>
      <nuxt/>
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


  export default {
    data() {
      return {
        sideNav: false,
        isBlogUrl: false
      }
    },
    components: {
      AdminToolbar,
      LeftMenu,
      Category,
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

    position: fixed;
    top: 0vh;
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

