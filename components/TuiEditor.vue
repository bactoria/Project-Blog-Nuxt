<template>

  <div id="editSection"></div>

</template>


<script>

  if (process.browser) {
    var Editor = require('tui-editor');
  }

  export default {
    head: {
      css: [
        /*for tui-editor*/
/* \\이\\거안대자나 스방
        'codemirror/lib/codemirror.css',
        'tui-editor/dist/tui-editor.css',
        'tui-editor/dist/tui-editor-contents.css',
        'highlight.js/styles/github.css'
*/
      ],
    },
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
