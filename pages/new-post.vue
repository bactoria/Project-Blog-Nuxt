<template>

  <div>
    <v-form ref="form" >
      <v-text-field v-model="title" :counter="20" label="Title" required></v-text-field>
      <textarea v-model="content" ></textarea>
      <v-select v-model="category" :items="categories" required>

      </v-select>

    </v-form>



 <!--   <textarea v-model="categoryId"></textarea>
    <textarea v-model="title"></textarea>
    <textarea v-model="content" id="summernote"></textarea>
-->
  <div @click="addToAPI">등록</div>

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

    head: {
      script: [
        { src: "http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js" },
        { src: "http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"},
        { src: "http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote.js"}
      ],
      link: [
        { rel: 'stylesheet', href: 'http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css' },
        { rel: 'stylesheet', href: 'http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote.css' }
      ]
    },

    mounted: () => {
      $('#summernote').summernote({
        placeholder: 'Hello stand alone ui',
        tabsize: 2,
        height: 500,
        lang: 'ko-KR'
      });
    },

    methods: {
      addToAPI () {
        let post = {
          title: this.title,
          content: this.content,
          categoryId: this.category.id
        }

        axios.post('http://127.0.0.1:8080/api/post',post)
          .then ((res) => {
            alert("전송완료");
          });

      }
    }
  }



</script>

<style scoped>

</style>
