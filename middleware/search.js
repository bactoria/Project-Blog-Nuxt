import axios from '~/plugins/axios';

export default function ( {params, store} ) {

  //Issue (Solved) : params를 한글로 주거나, F5 할 때 에러났음.
  //encodeURI 로 에러 해결함..
  //escape 로도 안됬었음... 휴..
  //스프링부트에는 알아서 디코딩 된다.. 왜지?

  return axios.get('/posts/search/' + encodeURI(params.searchData))
        .then((res) => {
          store.commit('addSearchedPosts',res.data)
        });
}
