<template>
  <div>
      <v-text-field placeholder="Search..."
                    append-icon="search"
                    @keyup.enter.native="search"
                    :append-icon-cb="search"
                    v-model="searchPost"
                    style="width: 150px;">
      </v-text-field>

    <v-form ref="form" >
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
        <v-btn @click.native = "dialog = false">취소</v-btn>
      </v-card>
    </v-dialog>

    </div>
</template>

<script>
  import axios from 'axios'
  import Input from "vuetify/es5/mixins/input";

  export default {
      data () {
        return {
          searchPost: '',
          title: '',
          content: '',
          category: '',
          postId: '',
          dialog: false
        }
      },
      components: {Input},
      middleware: 'admin',
      methods: {
        search () {
          axios.get('http://bactoria.me:8080/api/posts/'+this.searchPost)
            .then((res) => {
              this.title = res.data.title
              this.content = res.data.content
              this.category = res.data.category
              this.postId = res.data.id
            });
        },

        modifyPost () {
          let post = {
            title: this.title,
            content: this.content,
            category: this.category
          }
          axios.post('http://bactoria.me:8080/api/posts/'+this.postId,post)
            .then( () => {
            alert('수정완료')
          })
        },

        deletePost () {
          this.dialog = false;
          if(this.postId != ''){
            alert('삭제요청')
            axios.delete('http://bactoria.me:8080/api/posts/'+this.postId)
              .then( () => {
                alert('삭제완료')
              })
          }else {
            alert("삭제 할 게시물을 선택하세요.");
          }
        }

      }
    }
</script>

<style scoped>

</style>
