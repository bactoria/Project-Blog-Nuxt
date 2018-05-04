import axios from 'axios';

export default function ( {params, store} ) {
  return axios.get('https://api.myjson.com/bins/7z91u')
  .then ((res) => {
    store.commit('add', res.data.results)
  });

}
