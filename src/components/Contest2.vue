<template>
  <div class="bg">
    <NavBar />
    <main>
      <div class="container">
        <div class="title">
          <h1>공모전 2</h1>
          <hr size="" color="white" />
        </div>
        <div class="card">
          <div class="card-title">
            <h1>공공데이터 활용 창업경진대회</h1>
            <p>
              2023.09 ~ 2023.10 <br />
              ※ 다른 사람의 공모전, 나중에 나의 공모전로 채울것임 ※
            </p>
          </div>
          <div class="content">
            <div class="imagebox">
              <img src="../assets/contest2.png" alt="Project Image" />
            </div>
            <div class="description">
              <div>
                <fieldset>
                  <legend>공모전 개요</legend>
                  <ul>
                    <li>
                      서울시 열린데이터광장과 공공데이터포털 공공데이터를 활용한
                      아이디어 기획안 또는 개발 결과물(앱스토어/웹 서비스 URL)을
                      평가
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>공모전 주제</legend>
                  <ul>
                    <li>
                      자유주제(열린데이터광장에서 제공하는 공공데이터를 활용)
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>공모전 활동내용</legend>
                  <ul class="multi-li">
                    <li>
                      프로젝트 팀원으로 참가하여 서울시 열린데이터광장에서
                      제공하는 지하철 실시간 도착 정보를 활용한 앱을
                      기획하였습니다.
                    </li>
                    <li>
                      React Native와 Axios를 활용하여 앱의 프론트엔드 및
                      백엔드를 개발하였습니다.
                    </li>
                    <li>
                      사용자 인터페이스(UI)와 사용자 경험(UX)을 개선하고자
                      노력하여 직관적이고 효율적인 앱을 제작하였습니다.
                    </li>
                  </ul>
                </fieldset>
              </div>
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
  name: "Contest2Cmt",
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
  background-color: #ead8c0;
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

.content {
  display: flex;
  justify-content: center;
}

.imagebox {
  width: 40%;
  margin-bottom: 4em;
  margin-right: 2em;
}

.imagebox > img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.description {
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 2em;
}

.description > div > fieldset {
  margin-bottom: 1rem;
}

fieldset li {
  list-style: none;
}

.description ul {
  padding-left: 10px;
}

.multi-li > li {
  margin-bottom: 0.5em;
}
</style>
