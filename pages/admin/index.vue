<template>

  <div>

    <div class="fb-login-button"
         data-max-rows="1"
         data-size="large"
         data-button-type="continue_with"
         data-show-faces="false"
         data-auto-logout-link="false"
         data-use-continue-as="false"></div>

    <div>
      <v-btn @click="ccc">인증하기</v-btn>
    </div>

  </div>
</template>

<script>
  import {AUTHENTIFY} from "~/store/mutation-types";

  //var promise = require('es6-promise').Promise; 아래와 같음..?
  import {Promise} from 'es6-promise';

    export default {
      head: {
        script: [
          {src: "/js/facebookSDK.js"}
        ]
      },
      methods: {
        bbb() {
          return new Promise( function (resolve, reject) {
            FB.api('/me',function (response) {
              resolve(response);
            });
          });
        },

        ccc() {
          this.bbb().then( (data) => {
            if (data.id == '1514492868680482') {
              this.$store.commit(AUTHENTIFY)
            }
          });
        }
      }
    }
</script>

<style scoped>

</style>
