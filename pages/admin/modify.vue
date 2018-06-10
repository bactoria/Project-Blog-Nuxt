<template>
  <div>
    <v-btn color="primary" dark @click.native.stop="dialogAuth = true">Open Auth Dialog</v-btn>

    <v-dialog v-model="dialogAuth" max-width="500">
      <v-card>

        <v-text-field v-model="authUser" placeholder="user">

        </v-text-field>

        <v-text-field v-model="authPassword" placeholder="password">

        </v-text-field>

      </v-card>
      <v-btn @click.native="addTokenStr">
        확인
      </v-btn>

      <v-btn @click.native="dialog = false">
        취소
      </v-btn>
    </v-dialog>

    <v-text-field placeholder="Search..."
                  append-icon="search"
                  @keyup.enter.native="search"
                  :append-icon-cb="search"
                  v-model="searchPost"
                  style="width: 150px;">
    </v-text-field>

    <v-form ref="form">
      <v-text-field v-model="title" :counter="20" label="Title" required></v-text-field>
      <v-text-field v-model="content" full-width="true" multi-line="true"></v-text-field>
      <v-select v-model="category" :items="categories" required>
      </v-select>

    </v-form>

    <v-btn @click="modifyPost">수정</v-btn>
    <v-btn @click.native.stop="dialog = true">삭제</v-btn>

    <v-dialog v-model="dialog" max-width="30%">
      <v-card>
        <v-card-title>
          <div>정말 삭제하시겠습니까?</div>
        </v-card-title>
        <v-btn @click="deletePost">삭제</v-btn>
        <v-btn @click.native="dialog = false">취소</v-btn>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
  import axios from 'axios'
  import Input from "vuetify/es5/mixins/input";
  import {mapGetters} from 'vuex'

  var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}


  export default {
    data() {
      return {
        searchPost: '',
        title: '',
        content: '',
        category: '',
        postId: '',
        dialog: false,
        dialogAuth: true,
        authUser: '',
        authPassword: ''
      }
    },
    components: {Input},

    computed:
      mapGetters(['tokenStr']),
    methods: {
      addTokenStr() {
        this.dialogAuth = false
        this.$store.state.tokenStr = 'Basic ' + Base64.encode(this.authUser + ':' + this.authPassword)
      },

      search() {
        axios.get('http://bactoria.me:8080/api/posts/' + this.searchPost)
          .then((res) => {
            this.title = res.data.title
            this.content = res.data.content
            this.category = res.data.category
            this.postId = res.data.id
          });
      },

      modifyPost() {
        let put = {
          title: this.title,
          content: this.content,
          category: this.category
        };

        axios.put('http://bactoria.me:8080/api/posts/' + this.postId, put, {headers: {"Authorization": this.tokenStr}}
        )
          .then(() => {
            alert('수정완료')
          })
      },

      deletePost() {
        this.dialog = false;
        if (this.postId != '') {
          axios.delete('http://bactoria.me:8080/api/posts/' + this.postId, {headers: {"Authorization": this.tokenStr}}
          )
            .then(() => {
              alert('삭제완료')
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          alert("삭제 할 게시물을 선택하세요.");
        }
      }

    }
  }
</script>

<style scoped>

</style>
