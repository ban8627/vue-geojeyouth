import { createApp } from 'vue'
import App from './App.vue'
// vue pg 가 실행되면 자동으로 시작되는 .js
// Entry Point (진입시점)
// 확장자 .js 는 생략이 가능하다
import router from './router/index'
import store from './store/store'

createApp(App).use(router).use(store).mount('#app')
