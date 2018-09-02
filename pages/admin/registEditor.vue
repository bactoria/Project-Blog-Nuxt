<template>
  <div>
    <v-btn color="primary" dark @click.native.stop="dialog = true">Open Auth Dialog</v-btn>

    <v-dialog v-model="dialog" max-width="500">
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



    <v-form ref="form">

      <!--Title-->
      <v-text-field v-model="title" :counter="20" label="Title" required></v-text-field>

      <!--Category-->
      <v-select label="Category" v-model="category" :items="categories" item-text="name" required></v-select>

      <!--Content-->
      <div id="editSection"></div>

    </v-form>

    <!--<tui-editor/>-->

    <v-btn @click="addToAPI">등록</v-btn>

  </div>
</template>


<script>
  import {mapGetters} from 'vuex'
  import axios from '~/plugins/axios'
  import TuiEditor from '../../components/TuiEditor'
  import Base64 from '~/static/js/Base64'

  if (process.browser) {
    var Editor = require('tui-editor');
    var editor
  }
  export default {
    components: {TuiEditor},
    mounted: () => {
      editor = new Editor({
        el: document.querySelector('#editSection'),
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '300px'
      })
    },
    data() {
      return {
        content: '',
        title: '',
        category: [],
        options: {},
        dialog: true,
        authUser: '',
        authPassword: ''
      }
    },
    computed: mapGetters({
        categories : 'categories',
        tokenStr : 'tokenStr',
        markContent: 'markContent'
    }),
    methods: {
      addTokenStr() {
        this.dialog = false
        this.$store.state.tokenStr = 'Basic ' + Base64.encode(this.authUser + ':' + this.authPassword)
      },

      addToAPI() {

        let post = {
          title: this.title,
          content: editor.getMarkdown(),
          category: this.category,
        }

        let tokenStr = this.tokenStr;

        console.log(tokenStr)

        axios.post('/posts', post, {headers: {"Authorization": tokenStr}}
        )
          .then((res) => {
            alert("전송완료");
          })
      }

    }
  }
</script>

<style scoped>

</style>
