<template>
  <div class="root">

    <!--흰색 도화지-->
    <div class="background">
      <div class="background-main">
      </div>
      <div class="background-triangle"></div>
    </div>

    <!--Text-->
    <div class="GodoB info_fp">

      <!--Title-->
      <div class="title_fp">Bactoria <span style="font-size: .5em;">(황준오)</span></div>

      <!--Content-->
      <div style="margin-left: 1.5vw;">

        <!--Image-->
        <div class="image">
          <img src="/image/me4.jpg" height="100%"/>
        </div>

        <!--Info-->
        <div class="info_text">부경대학교<br/>컴퓨터공학과 4학년<br/>bactoria@gmail.com<br/>1993.05.08</div>

        <link-icon class="link-icon"/>

      </div>
    </div>
  </div>
</template>

<script>
  import LinkIcon from './LinkIcon';


  export default {
    components: {LinkIcon}
  }
</script>

<style lang="scss" scoped>

  $background-opacity: 0.55;
  $background-color: white;
  $mobile-size: 959px;
  $background-height: 100vh;

  /*Web Env*/
  .root {
    font-size: 1.5vw;
    width: 100vw;
    height: $background-height;
    background-image: url("/static/image/background.jpeg");
    background-position-y: 20%;
    background-position-x: 40%;
  }

  .info_text {
    margin: 1em 0 1em 0;

    line-height: 1.5em;
  }

  .info_fp {
    margin-left: 3vw;
    position: absolute;
    top: 0;
    width: 30vw;
    height: $background-height;
  }

  .title_fp {
    font-size: 2.7em;
    margin: .7em 0 .7em 0;
  }

  .background-main {
    background-color: $background-color;
    width: 20vw;
    height: $background-height;
    float: left;
    opacity: $background-opacity;
  }

  .background-triangle {
    width: 0;
    height: 0;
    border-bottom: $background-height solid transparent;
    border-left: 10vw solid $background-color;

    opacity: $background-opacity;
    float: left;
  }

  .image {
    height: 15vw;
    margin: 2vh 0vw 2vh 0vw;
  }

  .title_fp {
    font-size: 2.7em;
    margin: .7em 0 .7em 0;
  }

  /*Mobile Env*/
  @media (max-width: $mobile-size) {
    .link-icon {
      width: 50vw;
      height: 20vh;
    }

    .background-main {
      background-color: $background-color;
      opacity: $background-opacity;
      width: 50vw;
      height: $background-height;
      float: left;
    }

    .background-triangle {
      width: 0;
      height: 0;
      border-bottom: $background-height solid transparent;
      border-left: 30vw solid $background-color;

      opacity: $background-opacity;
      float: left;
    }

    .info_fp {
      font-size: 4vw;
      line-height: 9vh;
      margin-left: 3vw;
      position: absolute;
      top: 0;
      width: 70vw;
      height: $background-height;
    }

    .image {
      height: 30vh;
      margin: 2vh 0vw 2vh 0vw;
    }

    .title_fp {
      font-size: 10vw;
      margin: 2vh 0 1vh 0;
    }

  }

</style>
