import axios from 'axios';

export default function ( {params, store} ) {

  return axios.get('http://localhost:8080/api/posts/'+params.id)
    .then ((res) => {
      store.commit('addPost', res.data)
    });

}
