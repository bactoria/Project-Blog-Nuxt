<template>
  <div>
    <v-form ref="form" >
      <v-text-field v-model="title" :counter="20" label="Title" required></v-text-field>
      <v-text-field v-model="content" full-width="true" multi-line="true"></v-text-field>
      <v-select v-model="category" :items="categories" required>
      </v-select>

    </v-form>



    <!--   <textarea v-model="categoryId"></textarea>
       <textarea v-model="title"></textarea>
       <textarea v-model="content" id="summernote"></textarea>
   -->
    <v-btn @click="addToAPI">등록</v-btn>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'

  export default {
    data () {
      return {
        content: '',
        title: '',
        category: [],
        options: {},
      }
    },
    computed:
      mapGetters (['categories']),
    middleware: 'admin',
    methods: {
      addToAPI() {
        let post = {
          title: this.title,
          content: this.content,
          category: this.category
        }

        axios.post('http://127.0.0.1:8080/api/posts', post)
          .then((res) => {
            alert("전송완료");
          });

      }

    }
  }
</script>

<style scoped>

</style>
