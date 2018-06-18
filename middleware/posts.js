import axios from 'axios';

export default function ( {params, store} ) {

  return axios.get('http://bactoria.me:8080/api/posts/categories/' +params.id)
  .then ((res) => {
    store.commit('add', res.data)
  });

}
