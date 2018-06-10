import axios from 'axios';

export default function ( {store} ) {

  return axios.get('http://bactoria.me:8080/api/posts')
  .then ((res) => {
    store.commit('add', res.data)
  });


}
