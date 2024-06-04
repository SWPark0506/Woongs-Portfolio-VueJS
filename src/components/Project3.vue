<template>
  <div class="bg">
    <NavBar />
    <main>
      <div class="container">
        <div class="title">
          <h1>프로젝트 3</h1>
          <hr size="" color="white" />
        </div>
        <div class="card">
          <div class="card-title">
            <h1>똑똑하게 N빵하기</h1>
            <p>
              2023.10 (1人 개인 프로젝트) <br />※ 다른 사람의 프로젝트, 나중에
              나의 프로젝트로 채울것임 ※
            </p>
          </div>
          <div class="imagebox">
            <img src="../assets/smart_dutchpay.png" alt="Project Image" />
          </div>

          <div class="content">
            <div class="content-summary">
              <p>
                이 모바일 앱 프로젝트는
                <b
                  >참석자의 이름, 부담, 금액, 비중을 입력받아 최소한으로
                  이체하는 방법을 계산하는 기능</b
                >을 제공합니다. <br /><br />
                그리고 <span>React Native</span>와 <span>TypeScript</span>를
                기반으로 구현되었습니다. 또한, <span>Recoil</span>을 활용하여
                상태 관리를 효과적으로 처리하였습니다. <br />
                <br />앱은 참석자의 정보를 입력받아 최소한으로 이체하는 방법을
                계산하여 비용 분담을 용이하게 해줍니다.
              </p>
            </div>

            <div class="content-info">
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ 주요 기능</b>
                </div>
                <div>
                  이 앱은 참석자의 이름, 부담, 금액, 비중을 입력받아 최소한으로
                  이체하는 방법을 계산하여 비용을 공평하게 분담합니다.
                </div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ GitHub</b>
                </div>
                <div>
                  <a href="#">github.com/SWPark0506/smart-dutchpay</a>
                </div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ URL</b>
                </div>
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.dutch_pay_calculator_rn"
                    >play.google.com/store/apps/details?id=com.dutch_pay_calculator_rn</a
                  >
                </div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ Mobile</b>
                </div>
                <div>React Native, TypeScript, Recoil</div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ Deployment</b>
                </div>
                <div>Expo</div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "Project3Cmt",
  components: {
    Footer,
    NavBar,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Noto+Sans+KR:wght@100..900&family=Oswald:wght@200..700&family=Rubik+Glitch&display=swap");

a:link {
  text-decoration: none;
}

.bg {
  background-color: #ffa447;
  /* background-color: #FF9D1B; */
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.title {
  text-align: center;
  width: 40%;
}

.title > h1 {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 3rem;
  color: #ffffff;
}

.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 57%;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  margin-top: 1.5rem;
  padding: 20px;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  font-family: "Noto Sans KR", sans-serif;
}

.card-title {
  text-align: center;
  margin-bottom: 20px;
}

.card-title > h1 {
  font-weight: 1000;
}

.card-title > p {
  opacity: 0.5;
}

.card .imagebox {
  width: 80%;
  height: auto;
  text-align: center;
  margin-bottom: 2.5rem;
}

.imagebox > img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
}

.content > .content-summary {
  width: 40%;
  padding-right: 1em;
  border-right: solid 1px #ccc;
  font-size: 1.1em;
}
.content-summary > p {
  margin: 0;
}

.content > .content-info {
  width: 40%;
  padding-left: 1.5em;
  display: flex;
  flex-direction: column;
}

.content-info-1 {
  display: flex;
}

.content-info-1 > div:nth-child(1) {
  width: 35%;
  padding-top: 0;
}

.content-info-1 > div:nth-child(2) {
  width: 65%;
  height: auto;
  word-wrap: break-word;
}

.content-info-1 a {
  color: #258ddb;
  cursor: pointer;
  text-decoration: none;
}

.content-info-1 a:hover {
  text-decoration: underline;
}

.content-summary span {
  color: #ed3770;
}
</style>
