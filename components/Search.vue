<template>
  <div align="center">
    <v-text-field placeholder="Search..."
                  append-icon="search"
                  @keyup.enter.native="search"
                  :append-icon-cb="search"
                  v-model="searchData"
                  color="black"
                  style="width: 170px;">
    </v-text-field>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          searchData: ''
        }
      },
      methods : {
        search () {
          alert("Searched");
          this.$router.push('/');
        }
      }
    }
</script>

<style scoped>

</style>
