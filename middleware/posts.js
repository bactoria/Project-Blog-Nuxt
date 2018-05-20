import axios from 'axios';

export default function ( {params, store} ) {

  return axios.get('http://localhost:8080/api/category/'+params.id)
  .then ((res) => {
    store.commit('add', res.data)
  });

}
