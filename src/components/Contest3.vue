<template>
  <div class="bg">
    <NavBar />
    <main>
      <div class="container">
        <div class="title">
          <h1>공모전 3</h1>
          <hr size="" color="white" />
        </div>
        <div class="card">
          <div class="card-title">
            <h1>CRUSH ON AI 해커톤</h1>
            <p>
              2024.01 ~ 2024.02 <br />
              ※ 다른 사람의 공모전, 나중에 나의 공모전로 채울것임 ※
            </p>
          </div>
          <div class="content">
            <div class="imagebox">
              <img src="../assets/contest3.png" alt="Project Image" />
            </div>
            <div class="description">
              <div>
                <fieldset>
                  <legend>공모전 개요</legend>
                  <ul>
                    <li>
                      1주차 Guided 프로젝트 : 소규모 프로젝트를 강사님과 함께
                      교육 받으며 직접 프로그래밍 경험 <br />
                      2~4주차 Hackathon 프로젝트 : 온라인 출석 확인 후 팀별 자율
                      활동
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>공모전 주제</legend>
                  <ul>
                    <li>CJ 현업자들과 함께 실무 기반 프로젝트를 진행</li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>공모전 활동내용</legend>
                  <ul class="multi-li">
                    <li>
                      1주차 Guided 프로젝트: <br />
                      교육 받으며 소규모 프로젝트를 진행했습니다. <br />
                      AI 기술을 활용한 온라인 출석 시스템의 기본 개념과 구현
                      방법에 대해 학습하였습니다.
                    </li>
                    <li>
                      2~4주차 Hackathon 프로젝트: <br />
                      팀원들과 협력하여 AI를 기반으로 한 출석 시스템의 프로토
                      타입을 개발하고 테스트했습니다. <br />
                      CJ 현업자들과 협업하여 실무 기반 프로젝트를
                      진행하였습니다.
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
  name: "Contest3Cmt",
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
