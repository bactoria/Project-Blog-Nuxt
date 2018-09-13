<template>
  <paginate
    class="paginate"
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
    :no-li-surround="true"
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
        page: 1
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

<style lang="scss" scoped>



/*  왜 안먹혀..? 그래서 글로벌로 줘버렸음ㅠ

a.prev-link-item,
  a.page-link-item,
  a.next-link-item {
    padding: .5em;
    color: #66d9ef;

    &:hover {
      transform: scale(1.3);
      color: #000000;
    }
  }*/

</style>
