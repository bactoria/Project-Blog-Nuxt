<template>
<div>
  123
 {{$route.params.id}}
  {{posts}}
</div>
</template>

<script>
  export default {
    middleware: 'search'
  }
</script>

<style scoped>

</style>
