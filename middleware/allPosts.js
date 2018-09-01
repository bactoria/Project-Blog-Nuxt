import axios from '~/plugins/axios';
import {POSTS} from "../store/mutation-types";


export default function ( {store} ) {

  return axios.get('/posts')
  .then ((res) => {
    store.commit(POSTS, res.data)
  });

}
