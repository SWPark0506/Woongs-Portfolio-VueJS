// src/store/index.js
import { createStore } from 'vuex';

const userDB = {
  username: '박선웅',
  password: '1234'
};

export default createStore({
  state: {
    username: '',
    password: '',
    loginError: '',
    isLoggedIn: false,
    isHintshow: false
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setLoginError(state, message) {
      state.loginError = message;
    },
    clearLoginError(state) {
      state.loginError = '';
    },
    setIsLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    setisHintshow(state, value) {
      state.isHintshow = value;
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      if (username === userDB.username && password === userDB.password) {
        commit('setUsername', username);
        commit('setPassword', password);
        commit('setLoginError', '');
        commit('setIsLoggedIn', true); // 로그인 성공 시 isLoggedIn을 true로 설정
        alert("로그인 성공");
        return true;
      } else {
        commit('setLoginError', '아이디 또는 비밀번호가 잘못되었습니다.');
        commit('setIsLoggedIn', false); // 로그인 실패 시 isLoggedIn을 false로 설정
        commit('setisHintshow',true)
        return false;
      }
    },
    clearLoginError({ commit }) {
      commit('clearLoginError');
    },
    logout({ commit }){
      commit('setIsLoggedIn',false);
      alert("로그아웃 성공");
    }
  },

  getters: {
    username: state => state.username,
    password: state => state.password,
    loginError: state => state.loginError,
    isLoggedIn: state => state.isLoggedIn, 
    isHintshow: state => state.isHintshow 
    
  }
}
);
