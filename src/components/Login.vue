<template>
  <div>
    <NavBar />
    <section class="login">
      <div class="login_box">
        <div class="left">
          <div class="contact">
            <form @submit.prevent="handleSubmit">
              <h3>LOGIN</h3>
              <input type="text" v-model="username" placeholder="아이디" />
              <input
                type="password"
                v-model="password"
                placeholder="비밀번호"
              />

              <p v-if="loginError" class="error">{{ loginError }}</p>
              <div v-if="isHintshow">
                <p @click="toggleHint()" class="hint">힌트 보기</p>
                <p v-if="showHint" class="hintText">
                  아이디: 내 이름(한글)<br />비밀번호: 1234
                </p>
              </div>
              <button @click="login" type="submit" class="submit">
                LET'S GO
              </button>
            </form>
          </div>
        </div>
        <div class="right">
          <div class="right-text">
            <h2>Woong's Portfolio</h2>
            <h5>- 박선웅의 개발자 포트폴리오 -</h5>
          </div>
          <div class="right-inductor"><img src="" alt="" /></div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LoginCmt",
  components: {
    Footer,
    NavBar,
  },
  data() {
    return {
      username: "",
      password: "",
      showHint: false,
    };
  },
  computed: {
    ...mapGetters(["loginError"]),
    ...mapGetters(["isHintshow"]),
  },
  methods: {
    ...mapActions(["login"]),
    async handleSubmit() {
      const success = await this.login({
        username: this.username,
        password: this.password,
      });
      if (success) {
        this.$router.push("/");
      }
    },
    toggleHint() {
      this.showHint = !this.showHint;
    },
  },
};
</script>

<style scoped>
/* 스타일 추가 */
@import url("../CSS/AllColor.css");

img {
  width: 100%;
}
.login {
  height: 1000px;
  width: 100%;
  background: radial-gradient(#653d84, #332042);
  position: relative;
}
.login_box {
  width: 1050px;
  height: 600px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 4px 22px -8px #0004;
  display: flex;
  overflow: hidden;
}
.login_box .left {
  width: 41%;
  height: 100%;
  padding: 25px 25px;
}
.login_box .right {
  width: 59%;
  height: 100%;
}

.left .contact {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 100%;
  width: 73%;
  margin: auto;
}
.left h3 {
  text-align: center;
  margin-bottom: 40px;
}
.left input {
  border: none;
  width: 80%;
  margin: 15px 0px;
  border-bottom: 1px solid #4f30677d;
  padding: 7px 9px;
  width: 100%;
  overflow: hidden;
  background: transparent;
  font-weight: 600;
  font-size: 14px;
}
.left {
  background: linear-gradient(-45deg, #dcd7e0, #fff);
}
.submit {
  border: none;
  padding: 15px 70px;
  border-radius: 8px;
  display: block;
  margin: auto;
  margin-top: 40px;
  background: #583672;
  color: #fff;
  font-weight: bold;
  box-shadow: 0px 9px 15px -11px rgba(88, 54, 114, 1);
}

.submit:hover {
  background-color: #6f3b82;
  border-color: #6f3b82;
  box-shadow: 0px 9px 15px -11px rgba(111, 59, 130, 1);
}

.right {
  background: linear-gradient(
      212.38deg,
      rgba(242, 57, 127, 0.7) 0%,
      rgba(175, 70, 189, 0.71) 100%
    ),
    url("../assets/login-img.webp");
  color: #fff;
  position: relative;
}

.right .right-text {
  height: 100%;
  position: relative;
  transform: translate(0%, 30%);
}
.right-text h2 {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 500;
}
.right-text h5 {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: 400;
}

.right .right-inductor {
  position: absolute;
  width: 70px;
  height: 7px;
  background: #fff0;
  left: 50%;
  bottom: 70px;
  transform: translate(-50%, 0%);
}
.top_link img {
  width: 28px;
  padding-right: 7px;
  margin-top: -3px;
}
.error {
  color: red;
  text-align: center;
  margin-top: 20px;
}
.hint {
  color: var(--bs-primary);
  text-align: center;
  cursor: pointer;
}
.hint:hover {
  text-decoration: underline;
}
.hintText {
  color: var(--bs-primary);
  text-align: center;
}
</style>
