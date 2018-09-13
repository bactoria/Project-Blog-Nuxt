<template>

  <div id="editSection"></div>

</template>


<script>

  if (process.browser) {
    var Editor = require('tui-editor');
  }

  export default {
    mounted: () => {
      var editor = new Editor({
        el: document.querySelector('#editSection'),
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '300px'
      })
    }
  }

</script>

<style lang="scss" scoped>

</style>
