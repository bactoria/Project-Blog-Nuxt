import axios from '~/plugins/axios';

export default function ( {params, store} ) {

  return axios.get('/api/csr')
    .then ((res) => {
      store.commit('addCSR', res.data)
    });
}
