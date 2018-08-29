import axios from '~/plugins/axios';

export default function ( {params, store} ) {

  return axios.get('/csr')
    .then ((res) => {
      store.commit('addCSR', res.data)
    });
}
