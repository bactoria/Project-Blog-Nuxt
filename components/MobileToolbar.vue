<template>
  <v-toolbar app flat scroll-toolbar-off-screen class="hidden-md-and-up vToolbar">
    <v-toolbar-side-icon app fixed @click.native.stop="toggleSideNav"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
    export default {
      name: "MobileToolbar",
      methods: {
          toggleSideNav() {
            console.log("toggle")
            this.$bus.$emit('toggleSideNav')
          }
      }
    }
</script>

<style scoped>
  .vToolbar {
    position: fixed;
    opacity: 0.2;
    z-index: 999;
  }
</style>
