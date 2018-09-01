import axios from '~/plugins/axios';
import {CSR} from "../store/mutation-types";

export default function ( {params, store} ) {

  return axios.get('/csr')
    .then ((res) => {
      store.commit(CSR, res.data)
    });
}
