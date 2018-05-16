<template>
<div>


<div>asdasd</div>
<div id="content">adad</div>


</div>

</template>


<script>

  export default {
    head: {
      script: [
        {src: 'https://cdn.jsdelivr.net/npm/marked/marked.min.js'}
      ]
    },
    mounted: function() {
        document.getElementById('content').innerHTML =
        marked('\n' +
          '![](assets/markdown-img-paste-20180514234455857.png)\n' +
          '\n' +
          '![](assets/markdown-img-paste-20180514234626225.png)\n' +
          '\n' +
          '![](assets/markdown-img-paste-20180514234646880.png)\n' +
          '\n' +
          '권한이 없다뜸.\n' +
          '\n' +
          '이러면 블로그에서 사진 불러오고싶어도 사진이 안나온다.\n' +
          '\n' +
          '<img src="https://s3.ap-northeast-2.amazonaws.com/bactoria.me.post.image/image/spring.jpg" width="20%" />\n' +
          '\n' +
          '![](assets/markdown-img-paste-20180514234626225.png)\n' +
          '\n' +
          '![](assets/markdown-img-paste-20180514234942806.png)\n' +
          '\n' +
          '\n' +
          '<img src = \'assets/markdown-img-paste-20180514234942806.png\' style=\'width:30%\'>\n' +
          '\n' +
          '잘뜸.ㅎㅎ\n' +
          '\n' +
          '근데 다른사진 추가하면 또 안뜸..\n' +
          '\n' +
          '결국 하나의 사진에만 적용된거임\n' +
          '\n' +
          '다 적용 시키기 위해서는\n' +
          '```java\n' +
          'String main () {\n' +
          '\n' +
          '  String a = "123123";\n' +
          '\n' +
          '  return a;\n' +
          '}\n' +
          '```');
    }
  }
</script>

<style lang="scss" scoped>

</style>
