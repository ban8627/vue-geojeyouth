import {
  createStore
} from 'vuex'
// vuex 는 데이터를 보관하고, 업데이트 하고, 참고한다.

export default createStore({
  // 데이터
  state: {},
  // 외부 json 및 서버연동axios 호출시점
  // mutations 을 commit 으로 호출하면서 데이터를 전달한다.
  actions: {},
  // actions 로 부터 데이터를 전송받고 state 를 업데이트
  mutations: {},
  // 외부 컴포넌트에서 state 를 참조할때 활용
  // state 가 바뀌면 즉시 반영을 위해 외부 컴포넌트는 computed 로 처리하는 것이 일반적
  getters: {}
})