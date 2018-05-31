import axios from 'axios';

export default function ( {params, store} ) {

  return axios.get('http://localhost:8080/api/categories/'+params.id)
  .then ((res) => {
    store.commit('add', res.data)
  });

}
