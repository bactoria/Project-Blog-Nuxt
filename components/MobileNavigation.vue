<template>
    <v-navigation-drawer app temporary v-model="sideNav" fixed style="background-color: #f92672;">
      <side-menu/>
    </v-navigation-drawer>
</template>

<script>

  import SideMenu from "./SideMenu";

  export default {
    name: "MobileNavigation",
    components: {SideMenu},
    data() {
      return {
        sideNav: false
      }
    },
    mounted() {
      this.$bus.$on('toggleSideNav', _ => {
          this.sideNav = !this.sideNav
          console.log(this.sideNav)
        }
      )
    },
  }
</script>

<style scoped>

</style>
