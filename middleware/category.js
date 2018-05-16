import axios from 'axios';

export default function ( {params, store} ) {

  //최초 1회 방문시에만 실행함.
  if(store.state.categories == '')
    return axios.get('http://127.0.0.1:8080/api/category')
    .then ((res) => {
      store.commit('addCategories', res.data)
    });


  //다음부터는 그냥 리턴.
   else return;
}
