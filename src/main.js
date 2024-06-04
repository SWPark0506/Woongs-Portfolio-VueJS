// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import store from './store'; // store/index.js 파일에서 Vuex 스토어를 가져옵니다

const app = createApp(App);

app.use(router); // 라우터를 사용하도록 설정
app.use(store);  // Vuex 스토어를 사용하도록 설정

app.mount('#app');
