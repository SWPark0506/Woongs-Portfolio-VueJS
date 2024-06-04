<template>
  <div class="bg">
    <NavBar />
    <main>
      <div class="container">
        <div class="title">
          <h1>프로젝트 2</h1>
          <hr size="" color="white" />
        </div>
        <div class="card">
          <div class="card-title">
            <h1>나의 포트폴리오 웹사이트</h1>
            <p>2024.04 ~ 2024.06 (1人 개인 프로젝트) <br /></p>
          </div>
          <div class="imagebox">
            <img src="../assets/MyPortfolio.png" alt="Project Image" />
          </div>

          <div class="content">
            <div class="content-summary">
              <p>
                이 프로젝트는 개인 웹 프론트엔드 프로젝트로,
                대학교 대체과제로 만들어 본
                <b>개인 포트폴리오 웹사이트입니다.</b>
                <br />
                <br />
                <span>Vue</span>와 <span>Vue Router</span>를 사용하여
                개발되었으며, <span>CSS</span>를 활용하여 스타일을 더욱 빛나게
                했습니다. <br /><br />
                사용자들은 이 웹사이트를 통해 저의 개발자 포트폴리오를 구경할 수
                있습니다.<br /><br />
                <span>VueX</span>를 통해 <b>로그인 기능</b> 또한 구현하였고
                <b>로그인 인증</b>을 받아야 제 개인 정보에 접근 가능하도록
                하였습니다.
              </p>
            </div>

            <div class="content-info">
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ 주요 기능</b>
                </div>
                <div>저의 개발자 포트폴리오을 구경할 수 있습니다.</div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ GitHub</b>
                </div>
                <div>
                  <a href="#">github.com/SWPark0506/weather--react</a>
                </div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ URL</b>
                </div>
                <div>
                  <a href="https://savinpark.github.io/weather--react"
                    >savinpark.github.io/weather--react/</a
                  >
                </div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ Frontend</b>
                </div>
                <div>Vue, Vue Router, VueX</div>
              </div>
              <br />

              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ Deployment</b>
                </div>
                <div>GitHub Pages</div>
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
  name: "Project2Cmt",
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
