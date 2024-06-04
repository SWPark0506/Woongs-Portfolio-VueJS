<template>
  <div class="bg">
    <NavBar />
    <main>
      <div class="container">
        <div class="title">
          <h1>공모전 1</h1>
          <hr size="" color="white" />
        </div>
        <div class="card">
          <div class="card-title">
            <h1>All-in 코딩 공모전</h1>
            <p>
              2024.02 ~ 2024.03 <br />
              ※ 다른 사람의 공모전, 나중에 나의 공모전로 채울것임 ※
            </p>
          </div>
          <div class="content">
            <div class="imagebox">
              <img src="../assets/contest1.png" alt="Project Image" />
            </div>
            <div class="description">
              <div>
                <fieldset>
                  <legend>공모전 개요</legend>
                  <ul>
                    <li>
                      ‘크래프톤 정글’과 ‘스파르타코딩클럽’이 공동으로 주최하는
                      대학생 IT 공모전입니다. 도전 정신을 지닌 대학생들이
                      한가지에 “몰입”하는 경험을 할 수 있도록 지원하고자
                      준비하였습니다.
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>공모전 주제</legend>
                  <ul>
                    <li>
                      대학 생활 중 겪은 불편함을 해결할 수 있는 웹사이트 혹은 앱
                      개발
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>공모전 활동내용</legend>
                  <ul class="multi-li">
                    <li>
                      팀원들과 함께 대학생들이 겪는 학사 관리의 불편함을 해결할
                      수 있는 솔루션을 개발하기로 결정했습니다.
                    </li>
                    <li>
                      React 및 Firebase를 활용하여 통합 학사 관리 시스템을
                      설계하고 개발했습니다.
                    </li>
                    <li>
                      학사 일정 관리, 성적 조회, 학교 공지사항 확인 등의 기능을
                      구현하여 학생들의 편의를 높이고자 노력했습니다.
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
  name: "Contest1Cmt",
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
