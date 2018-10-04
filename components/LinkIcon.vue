<template>
  <div style="width: 100%">
    <a class="SNS-icons" :href="icon.link" target="_blank" v-for="icon in icons">
      <img :src="icon.src"  style="width:20%;"/>
    </a>

  </div>
</template>

<script>
    export default {
      data() {
        return {
          icons: [{
            "name": "Github",
            "src": "/image/GithubIcon.png",
            "link": "https://github.com/bactoria"
          }, {
            "name": "Facebook",
            "src": "/image/FacebookIcon.png",
            "link": "https://www.facebook.com/profile.php?id=100003593517742"
          }, {
            "name": "rss",
            "src": "/image/RssIcon.png",
            "link": "https://bactoria.me/api/feed"
          }

          ]
        }
      }
    }
</script>

<style lang="scss" scoped>

  .SNS-icons{

    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;


    img {
      opacity: 0.4;

      &:hover {
        transform: scale(1.05);
        opacity: 1;
     }
    }
  }
</style>
