<template>
  <paginate
    v-model="page"
    :page-count="pageCount"
    :margin-pages="0"
    :page-range="5"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :page-link-class="'page-link-item'"
    :prev-class="'ignore prev-item'"
    :prev-link-class="'prev-link-item'"
    :next-class="'ignore next-item'"
    :next-link-class="'next-link-item'"
    :disabled-class="'ignore disabled'"
    :click-handler="clickCallback"
  ></paginate>
</template>

<script>
  import axios from '~/plugins/axios';
  import {POSTS} from "../store/mutation-types";
  import {mapGetters} from 'vuex';


  if (process.browser) {
    var Paginate = require('vuejs-paginate');
  }

  export default {
    data() {
      return {
        page: 0
      }
    },
    components: {Paginate},
    computed:
      mapGetters (['pageCount']),
    props: ['subUrl'],
    methods: {
      clickCallback() {
        console.log(this.subUrl)
        const url = this.subUrl + '?page=' + (this.page-1)
        axios.get(url)
          .then((res) => {
            this.$store.commit(POSTS,res.data)
          })
      }
    }
    }
</script>

<style scoped>

</style>
