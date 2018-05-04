
import axios from 'axios'

export default function ({params, store}) {

  return axios.get('https://api.myjson.com/bins/ac4lu')
    .then((res) => {
      store.commit('add', res.data);
    });

}
