import axios from '~/plugins/axios';
import {POST} from "../store/mutation-types";

export default function ( {params, store} ) {

  return axios.get('/posts/'+params.id)
    .then ((res) => {
      store.commit(POST, res.data)
    });

}
