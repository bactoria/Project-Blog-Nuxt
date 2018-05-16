import axios from 'axios';

export default function ( {params, store} ) {

  return axios.get('http://127.0.0.1:8080/api/csr')
    .then ((res) => {
      store.commit('addCSR', res.data)
    });
}
