import axios from '~/plugins/axios';
import {CATEGORIES,HAS_CATEGORIES} from "../store/mutation-types";

export default function ( {params, store} ) {

  if(!store.state.hasCategories) {
  //최초 1회 방문시에만 실행함. -> ssr 진행도면 초기화됨.. 서버에 요청하면 store이 초기화 되는거같음.. 그래서 이게 의미가 없다 아직..
    return axios.get('/categories')
    .then ((res) => {
      store.commit(CATEGORIES, res.data)
      store.commit(HAS_CATEGORIES)
    });
  }
}
