import { createWebHistory, createRouter } from "vue-router";
import store from '@/store';


import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Resume from "../components/Resume.vue";
import Selfintro from "../components/Selfintro.vue";
import Project1 from "../components/Project1.vue";
import Project2 from "../components/Project2.vue";
import Project3 from "../components/Project3.vue";
import Contest1 from "../components/Contest1.vue";
import Contest2 from "../components/Contest2.vue";
import Contest3 from "../components/Contest3.vue";
import Career1 from "../components/Career1.vue";
import Career2 from "../components/Career2.vue";
import Career3 from "../components/Career3.vue";




const routes = [    // 라우터 설정
{
  path: "/", 
  component: Home,
},
{
  path: "/Login", 
  component: Login,
},
{
  path: "/Resume", 
  component: Resume,
  meta: { requiresAuth: true }, // 로그인이 필요한 페이지
},
{
  path: "/Selfintro", 
  component: Selfintro,
  meta: { requiresAuth: true }, // 로그인이 필요한 페이지
},
{
  path: "/Project1", 
  component: Project1,
},
{
  path: "/Project2", 
  component: Project2,
},
{
  path: "/Project3", 
  component: Project3,
},
{
  path: "/Contest1", 
  component: Contest1,
},
{
  path: "/Contest2", 
  component: Contest2,
},
{
  path: "/Contest3", 
  component: Contest3,
},
{
  path: "/Career1", 
  component: Career1,
},
{
  path: "/Career2", 
  component: Career2,
},
{
  path: "/Career3", 
  component: Career3,
},
];

const router = createRouter({  // 라우트 생성
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // 해당 라우트가 인증이 필요한지 확인
      if (!store.getters.isLoggedIn && to.path !== '/Login') {
        // 인증되지 않은 경우 로그인 페이지로 리다이렉트
        store.commit('setLoginError', '로그인이 필요한 페이지입니다.');
        store.commit('setisHintshow',false)
        next('/Login');
      } else {
        next(); // 인증된 경우 계속 진행
      }
    } else {
      if(from.path === '/Login'){
        store.commit('clearLoginError')
        store.commit('setisHintshow',false)
        
      }
      next(); // 인증이 필요하지 않은 페이지

    }
  });
  
  export default router;
  