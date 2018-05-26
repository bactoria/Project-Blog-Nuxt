<template>

  <v-app style="background: white;">

   <!-- 네비 -->
    <v-navigation-drawer app fixed temporary v-model="sideNav">
      <side-menu/>
    </v-navigation-drawer>

    <!-- 툴바 -->
    <v-toolbar dark app class="hidden-md-and-up black" fixed>
      <v-toolbar-side-icon
        @click.native.stop = "sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title >
        <a href="https://bactoria.me" class="GodoB" tag="span" style="cursor: pointer; color: #ffffff; text-decoration: none">Bactoria</a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <search />
    </v-toolbar>
    <admin-toolbar/>
    <!-- <v-progress-linear :indeterminate="true"></v-progress-linear>-->
    <main app>
      <v-content>

          <v-layout row wrap class="blank" style="background: white">
            <div class="blank hidden-md-and-up"></div>

            <!-- 공백 -->

            <!-- 왼쪽 -->
            <v-flex md3 class="hidden-sm-and-down" >

              <!-- 왼쪽 메뉴 -->
              <left-menu/>

            </v-flex>

            <!-- 본문 -->
            <v-flex xs12 md9>

              <!-- 라우팅 -->
              <nuxt />

            </v-flex>


          </v-layout>
      </v-content>

    </main>

  </v-app>
</template>

<script>
import Category from '~/components/Category'
import AboutMe from '~/components/AboutMe'
import LeftMenu from "../components/LeftMenu";
import SideMenu from "../components/SideMenu";
import Search from "../components/Search"
import AdminToolbar from "../components/adminToolbar";

  export default {
    data () {
      return {
        sideNav: false,
        smile: false,
        checked: 'asd',
        iid: '4',
        unchecked: 'qwe',
        itsreal: 'real'
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

  .blank {
    padding-top: 40px;
  }

</style>
