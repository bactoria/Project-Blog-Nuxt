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
      <v-toolbar-title>
        <a href="https://bactoria.me" class="GodoB" tag="span" style="cursor: pointer; color: #ffffff; text-decoration: none">Bactoria</a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <search />
    </v-toolbar>
    <!-- <v-progress-linear :indeterminate="true"></v-progress-linear>-->

    <div style="background-color: #f92672; width: 20%; height: 100vh; position: fixed" class="hidden-sm-and-down">
      <!-- 왼쪽 메뉴 -->
      <left-menu/>
    </div>

    <main>
      <v-content style="width: 20%; float: left;">
      </v-content>

      <v-content style="width: 80%; float: right;">
        <!-- 본문 -->
            <v-flex>
               <nuxt />
            </v-flex>

      </v-content>

    </main>

    <admin-toolbar/>

    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
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

  .pa-3 {
    margin-top : 10%
  }

</style>
