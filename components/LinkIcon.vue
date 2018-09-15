<template>
  <div>
    <a class="SNS-icons" :href="icon.link" target="_blank" v-for="icon in icons">
      <img :src="icon.src" width="40px" class="scaleUp"/>
    </a>

  </div>
</template>

<script>
    export default {
      data() {
        return {
          icons: [{
            "name": "Github", "src": "/image/GithubIcon.png", "link": "https://github.com/bactoria"
          }, {
            "name": "Facebook",
            "src": "/image/FacebookIcon.png",
            "link": "https://www.facebook.com/profile.php?id=100003593517742"
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
      &:hover {
        transform: scale(1.1);

     }
    }
  }
</style>
