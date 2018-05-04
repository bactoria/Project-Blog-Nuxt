<template>
<div>
  asd
  <div>
    <

  </div>
  <v-form @submit.prevent="submit">
    <input v-model="search" autofocus />


  </v-form>

</div>

</template>

<script>

  export default {
    data () {
      return{
        search: ''
      }
    },
    methods: {
      submit () {

        this.$router.push('category/'+this.search);
      }
    }
  }
</script>
