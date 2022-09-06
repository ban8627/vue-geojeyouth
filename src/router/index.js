import { createRouter, createWebHistory } from 'vue-router'
// Router 는 화면의 일부, 즉 RouterView 라는 컴포넌트에 다른 컴포넌트를 보여주는 역할
// HTML 의 <a href="#ID"></a> 와 같음.  클릭 이벤트로 인한 주소창 # 표현을 안함
// createWebHistory 를 사용하여 관리 createWebHistory는 Browser 객체와 연관
const router = createRouter(
  {
    history: createWebHistory(),
    // routes:[{path:'/페이지명',name:'별칭',component:'RouterView 에 보여줄컴포넌트'}]
    routes: [
      {
        path: '/',
        name: 'Home',
        component:''
      }
    ]
  }
);
export default router;