import axios from 'axios';

export default function ( {params, store} ) {

  return axios.get('http://bactoria.me:8080/api/categories/' +params.id + '/posts')
  .then ((res) => {
    store.commit('add', res.data)
  });

}
