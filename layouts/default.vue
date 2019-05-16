<template>

  <v-app style="background: ghostwhite;">

    <!--Mobile-->
    <mobile-toolbar/>
    <mobile-navigation/>

    <!--Desktop-->
    <left-menu class="leftMenu"/>

    <nuxt class="main"/>
  </v-app>
</template>


<!--      <admin-toolbar/>-->

<script>
  import Category from '~/components/Category'
  import LeftMenu from "../components/LeftMenu";
  import Search from "../components/Search"
  import AdminToolbar from "../components/adminToolbar";
  import MobileToolbar from "../components/MobileToolbar";
  import MobileNavigation from "../components/MobileNavigation";


  export default {
    data() {
      return {
        sideNav: false,
        isBlogUrl: false
      }
    },
    components: {
      MobileNavigation,
      MobileToolbar,
      AdminToolbar,
      LeftMenu,
      Category,
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

