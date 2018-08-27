import axios from '~/plugins/axios';

export default function ( {store} ) {

  return axios.get('/api/posts')
  .then ((res) => {
    store.commit('add', res.data)
  });


}
