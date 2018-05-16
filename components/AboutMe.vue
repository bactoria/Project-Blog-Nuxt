<template>
 <div align="center">
   <div  class="hidden-sm-and-down">
     <a href="/" tag="span" class="myName GodoB" align="center">Bactoria</a>
<!--     <div style="font-size: 25px">개발 블로그</div>-->
   </div>
   <div class="hidden-md-and-up GodoB myName2">Bactoria</div>
   <img src="/image/me2.jpg" width="200px" class="hidden-sm-and-down"/>
   <img src="/image/me2.jpg" width="130px" class="hidden-md-and-up "/>


   <!--<div class="aboutMe" @click="aboutMe"> ABOUT ME </div> <br/>-->
 </div>
</template>

<script>
    export default {

      methods: {
        aboutMe() {
          this.$router.push('/about-me')
        }
      }
    }
</script>

<style lang="scss" scoped>



  .aboutMe {
    max-width: 30%;
    margin: 12px;
    transition: .15s all ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    font-size: 25px;
  }

  .myName {
    font-size: 60px;
    cursor: pointer;
    color: black;
    text-decoration: none;

    &:hover {
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      border-radius: 10px;
    }
  }
  .myName2 {
    font-size: 30px;
    margin-top: 50px;
    margin-bottom: 5px;
  }

  .asdasd {

    border-bottom: 2px solid #b4e7f8;
    box-shadow: inset 0 -7px 0 #b4e7f8;
    transition: background .15s cubic-bezier(.33,.66,.66,1);

    display: inline;
    color: inherit;
    cursor: pointer;
  }

  .scaleUp {
    &:hover {
      transform: scale(1.15);
    }
  }
</style>
