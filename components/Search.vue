<template>
  <div class="GodoM">

    <div align="center" class="hidden-sm-and-down">
    <v-text-field placeholder="Search..."
                  append-icon="search"
                  @keyup.enter.native="search"
                  :append-icon-cb="search"
                  v-model="searchData"
                  color="black"
                  style="width: 130px;">
    </v-text-field>
    </div>
      <div align="center" class="  hidden-md-and-up">
        <v-text-field placeholder="Search..."
                      append-icon="search"
                      @keyup.enter.native="search"
                      :append-icon-cb="search"
                      v-model="searchData"
                      color="white"
                      dark
                      style="width: 150px; color: white;">
        </v-text-field>
      </div>

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
          window.location.href = '/search/'+this.searchData
        }
      }
    }
</script>

<style scoped>

</style>
