import axios from '~/plugins/axios';

export default function ( {params, store} ) {

  return axios.get('/api/posts/categories/' +params.id)
  .then ((res) => {
    store.commit('add', res.data)
  });

}
