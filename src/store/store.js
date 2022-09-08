import {
  createStore
} from 'vuex'
import axios from 'axios'

// vuex 는 데이터를 보관하고, 업데이트 하고, 참고한다.
export default createStore({
  // 데이터
  state: {
    menuDataArr: [],
    visualDataArr: [],
    infoDataArr:[],
    newsDataArr:[],
    galleryDataArr: [],
    movieData:{},
    bannerDataArr:[]
  },
  // 외부 json 및 서버연동axios 호출시점
  // mutations 을 commit 으로 호출하면서 데이터를 전달한다.
  actions: {
    fetchGetMenu({commit}) {
      axios.get('./data/menu.json')
        .then(res => {
          // console.log(res.data)
          commit('UPDATE_MENU_DATA',res.data)
        })
        .catch(err=>console.log(err))
    },
    fetchGetVisual({ commit }) {
      axios.get('./data/visual.json')
        .then(res => {
          console.log(res.data)
          commit('UPDATE_VISUAL_DATA',res.data)
        })
        .catch(err=>console.log(err))
    },
    fetchGetInfo({ commit }) { 
      axios.get('./data/info.json')
        .then(res =>
          commit('UPDATE_INFO_DATA',res.data)
      )
      .catch(err=>console.log(err))
    },
    fetchGetNews({ commit }) { 
      axios.get('./data/news.json')
        .then(res =>
          commit('UPDATE_NEWS_DATA',res.data)
      )
      .catch(err=>console.log(err))
    },
    fetchGetGallery({ commit }) {
      axios.get('./data/gallery.json')
        .then(res => {
        commit('UPDATE_GALLERY_DATA',res.data)
        })
        .catch(err=>console.log(err))
    },
    fetchGetMovie({ commit }) {
      axios.get('./data/movie.json')
        .then(res => {
        commit('UPDATE_MOVIE_DATA',res.data)
        })
        .catch(err=>console.log(err))
    },
    fetchGetBanner({ commit }) {
      axios.get('./data/banner.json')
        .then(res => {
        commit("UPDATE_BANNER_DATA",res.data)
        })
        .catch(err=>console.log(err))
    }
  },
  // actions 로 부터 데이터를 전송받고 state 를 업데이트
  mutations: {
    UPDATE_MENU_DATA(state,payload) {
      state.menuDataArr = payload
    },
    UPDATE_VISUAL_DATA(state, payload) {
      state.visualDataArr = payload
    },

    UPDATE_GALLERY_DATA(state, payload) {
      state.galleryDataArr = payload
    },
    UPDATE_INFO_DATA(state, payload) {
      state.infoDataArr = payload
    },
    UPDATE_NEWS_DATA(state, payload) {
      state.newsDataArr = payload
    },
    UPDATE_MOVIE_DATA(state, payload) {
      state.movieData = payload
    },
    UPDATE_BANNER_DATA(state, payload) {
      state.bannerDataArr = payload
    }
  },
  // 외부 컴포넌트에서 state 를 참조할때 활용
  // state 가 바뀌면 즉시 반영을 위해 외부 컴포넌트는 computed 로 처리하는 것이 일반적
  getters: {
    getMenuData(state) {
      return state.menuDataArr
    },
    getVisualData(state) {
      return state.visualDataArr
    },
    getInfoData(state){
      return state.infoDataArr
    },
    getNewsData(state){
      return state.newsDataArr
    },
    getGalleryData(state) {
      return state.galleryDataArr
    },
    getMovieData(state) {
      return state.movieData
    },
    getBannerData(state) {
      return state.bannerDataArr
    }
  }
})