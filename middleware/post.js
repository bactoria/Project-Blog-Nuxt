import axios from '~/plugins/axios';

export default function ( {params, store} ) {

  return axios.get('/posts/'+params.id)
    .then ((res) => {
      store.commit('addPost', res.data)
    });

}
