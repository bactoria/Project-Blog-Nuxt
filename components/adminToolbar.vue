<template>
  <div class="GodoB">

  <v-toolbar dark app v-if="this.$store.state.authenticated" fixed>
    <v-toolbar-side-icon
      @click.native.stop = "sideNav = !sideNav"></v-toolbar-side-icon>

    <v-toolbar-title >
      <a href="https://bactoria.me" class="GodoB" tag="span" style="cursor: pointer; color: #ffffff; text-decoration: none">Bactoria</a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title dark style="color: white;">
      <nuxt-link to="/admin/regist">글쓰기</nuxt-link>
    </v-toolbar-title>

    <v-toolbar-title dark style="color: white;">
      <nuxt-link to="/admin/modify">글수정</nuxt-link>
    </v-toolbar-title>

  </v-toolbar>
  </div>
</template>

<script>
    export default {
        name: "adminToolbar"
    }
</script>

<style scoped>

</style>
