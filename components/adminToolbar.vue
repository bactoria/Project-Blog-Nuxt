<template>
  <div class="GodoB">

  <v-toolbar dark app v-if="this.$store.state.authenticated">

    <v-spacer></v-spacer>
    <v-toolbar-title dark style="color: white;">
      <nuxt-link to="/admin/registEditor">글쓰기Editor</nuxt-link>
    </v-toolbar-title>

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
