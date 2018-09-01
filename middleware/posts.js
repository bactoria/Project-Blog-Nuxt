import axios from '~/plugins/axios';
import {POSTS} from "../store/mutation-types";

export default function ( {params, store} ) {

  return axios.get('/posts/categories/' +params.id)
  .then ((res) => {
    store.commit(POSTS, res.data)
  });

}
