<template>
  <h1>{{ ip }}</h1>
</template>

<script>

  export default {
    async asyncData({ app }) {
      const ip = await app.$axios.$get('http://icanhazip.com')
      return { ip }
    }
  }
</script>
