<template>
  <NavBar />
  <main>
    <section class="index-section">
      <div class="container">
        <div class="index-content">
          <h1>- 박선웅 - <br />백엔드 개발자 포트폴리오</h1>
          <hr size="5" color="#ff7f0e" />
          <p>
            안녕하세요 <br />
            공부가 취미인 백엔드 개발자입니다 <br />
            매우 꼼꼼한 성격, 그리고 엄청난 열정이 저의 장점입니다
          </p>
          <router-link to="/Project1" class="btn">더 알아보기</router-link>
        </div>
      </div>
    </section>
    <section class="aboutmewrapper">
      <div class="aboutme">
        <div class="aboutme-h1">
          <h1>ABOUT ME</h1>
          <div class="line"></div>
        </div>
        <div class="aboutme-content">
          <div class="aboutme-content-box-1">
            <div class="aboutme-content-box-2">
              <div class="aboutme-icon-wrapper">
                <img
                  class="aboutme-icon-img"
                  src="../assets/person-fill.svg"
                  alt="이미지"
                />
              </div>
              <div class="aboutme-field">
                <div class="aboutme-field-label">이름</div>
                <div class="aboutme-field-value">박선웅</div>
              </div>
            </div>
          </div>
          <div class="aboutme-content-box-1">
            <div class="aboutme-content-box-2">
              <div class="aboutme-icon-wrapper">
                <img
                  class="aboutme-icon-img"
                  src="../assets/calendar-fill.svg"
                  alt="이미지"
                />
              </div>
              <div class="aboutme-field">
                <div class="aboutme-field-label">생년월일</div>
                <div class="aboutme-field-value">00.05.06</div>
              </div>
            </div>
          </div>
          <div class="aboutme-content-box-1">
            <div class="aboutme-content-box-2">
              <div class="aboutme-icon-wrapper">
                <img
                  class="aboutme-icon-img"
                  src="../assets/geo-alt-fill.svg"
                  alt="이미지"
                />
              </div>
              <div class="aboutme-field">
                <div class="aboutme-field-label">주소지</div>
                <div class="aboutme-field-value">경기도 성남시</div>
              </div>
            </div>
          </div>
          <div class="aboutme-content-box-1">
            <div class="aboutme-content-box-2">
              <div class="aboutme-icon-wrapper">
                <img
                  class="aboutme-icon-img"
                  src="../assets/telephone-fill.svg"
                  alt="이미지"
                />
              </div>
              <div class="aboutme-field">
                <div class="aboutme-field-label">연락처</div>
                <div class="aboutme-field-value">010-8640-0169</div>
              </div>
            </div>
          </div>
          <div class="aboutme-content-box-1">
            <div class="aboutme-content-box-2">
              <div class="aboutme-icon-wrapper">
                <img
                  class="aboutme-icon-img"
                  src="../assets/envelope-fill.svg"
                  alt="이미지"
                />
              </div>
              <div class="aboutme-field">
                <div class="aboutme-field-label">이메일</div>
                <div class="aboutme-field-value">0169ok@gmail.com</div>
              </div>
            </div>
          </div>
          <div class="aboutme-content-box-1">
            <div class="aboutme-content-box-2">
              <div class="aboutme-icon-wrapper">
                <img
                  class="aboutme-icon-img"
                  src="../assets/pencil-fill.svg"
                  alt="이미지"
                />
              </div>
              <div class="aboutme-field">
                <div class="aboutme-field-label">학력</div>
                <div class="aboutme-field-value">가천대학교(글로벌)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="skillswrapper">
      <div class="skills-content">
        <div class="skills-content-titlewrapper">
          <div class="skills-content-title">SKILLS</div>
        </div>
        <div class="skills-content-stackswrapper">
          <div class="skills-content-stacks">
            <div class="stack-category">Frontend</div>
            <img class="stack-img" src="../assets/html-css-js.png" alt="사진" />
            <img class="stack-img" src="../assets//bootstrap.png" alt="사진" />
            <img class="stack-img" src="../assets/jquery.png" alt="사진" />
            <img class="stack-img" src="../assets/react.png" alt="사진" />
            <img class="stack-img" src="../assets/react-query.png" alt="사진" />
            <img
              class="stack-img"
              src="../assets/react-hook-form.png"
              alt="사진"
            />
          </div>

          <div class="skills-content-stacks">
            <div class="stack-category">Backend</div>
            <div class="row">
              <img class="stack-img" src="../assets/c.png" alt="" />
              <img class="stack-img" src="../assets/c++.png" alt="" />
            </div>

            <img
              class="stack-img"
              src="../assets/java.png"
              alt=""
              style="width: 70%; height: auto; margin-left: 2rem"
            />
            <img
              class="stack-img"
              src="../assets/py.jpg"
              alt=""
              style="margin-top: 10px"
            />
            <img
              class="stack-img"
              src="../assets/nodejs2.png"
              alt=""
              style="margin-bottom: 10px; margin-left: 1rem"
            />
            <img
              class="stack-img"
              src="../assets/express2.png"
              alt=""
              style="margin-left: 1rem"
            />
            <img class="stack-img" src="../assets/mongodb2.png" alt="" />
            <img
              class="stack-img"
              src="../assets/mysql.jpg"
              alt=""
              style="width: 60%; margin-left: 3rem"
            />
          </div>
          <div class="skills-content-stacks">
            <div class="stack-category">Mobile App</div>
            <img class="stack-img" src="../assets/react-native.png" alt="" />
          </div>

          <div class="skills-content-stacks">
            <div class="stack-category">Deployment</div>
            <img class="stack-img" src="../assets/netlify.png" alt="" />
          </div>
          <div class="skills-content-stacks">
            <div class="stack-category">Version</div>
            <img class="stack-img" src="../assets/git-github.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <GotoTop />
  </main>
  <Footer />
</template>

<script>
import Footer from "./Footer.vue";
import NavBar from "./NavBar.vue";
import GotoTop from "./btn_goto_top.vue";

export default {
  name: "HomeCmt",
  components: {
    Footer,
    NavBar,
    GotoTop,
  },
};
</script>

<style scoped>
/* Index Section */
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Black+Han+Sans&family=Noto+Sans+KR:wght@100..900&family=Oswald:wght@200..700&family=Rubik+Glitch&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Noto+Sans+KR:wght@100..900&family=Oswald:wght@200..700&family=Rubik+Glitch&display=swap");
@import url("../CSS/AllColor.css");

.index-section {
  background-image: url("../assets/index\ \(2\).jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 50px 0 100px 0;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #ced3dc;
}

.index-content {
  max-width: 600px;
  margin-top: -20px;
}

.index-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.index-content p {
  font-size: 20px;
  margin-bottom: 30px;
  opacity: 0.7;
}

.btn {
  background-color: #ff7f0e;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #e65a00;
}

.aboutmewrapper {
  margin: 0;
  width: 100%;
  height: auto;
  background-color: #fff;
  padding-top: 60px;
  padding-bottom: 45px;
  /* background-color: #CED3DC; */
}

.aboutmewrapper > .aboutme {
  text-align: center;
  justify-content: center;
}

.aboutme > .aboutme-h1 {
  width: 50%;
  height: auto;
  font-family: "Black Han Sans", sans-serif;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.line {
  width: 25%;
  border-top: 1px solid #cccccc;
  margin-bottom: 3.5rem;
}

.aboutme-h1 > h1 {
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.5;
  margin: 0;
}

.aboutme-content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  -webkit-box-pack: justify;
  width: 57%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.aboutme-content-box-1 {
  margin-bottom: 2rem;
  width: 33.3333%;
}

.aboutme-content-box-2 {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 14rem;
  margin: 0 auto;
  opacity: 0.8;
}

.aboutme-icon-wrapper {
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  margin-top: 0.2rem;
  margin-right: 2rem;
}

.aboutme-icon-img {
  width: 100%;
  vertical-align: middle;
}

.aboutme-field {
  text-align: left;
  font-family: "Noto Sans KR", sans-serif;
}

.aboutme-field-label {
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
}

.aboutme-field-value {
  font-weight: 400;
  font-size: 1rem;
}

.skillswrapper {
  background-color: #f9c51d;
  width: 100%;
  height: auto;
}

.skills-content {
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
  height: 52rem;
}

.skills-content-titlewrapper {
  display: table;
  position: relative;
  margin: 0 auto 3rem;
}

.skills-content-stackswrapper {
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  height: 800px;
}

.skills-content-title {
  color: #000000;
  border-bottom-color: #000000;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  font-family: Black Han Sans, sans-serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.5;
}

.skills-content-stacks {
  flex-shrink: 0;
  width: 17rem;
  padding: 1.5rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.skills-content-stacks:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(5px);
}

.stack-category {
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
}

.stack-img {
  display: block;
  width: 90%;
}

.row {
  display: flex;
  justify-content: space-between;
}

.row > img:nth-child(1) {
  margin-left: 2em;
  width: 30%;
}

.row > img:nth-child(2) {
  margin-right: 2em;
  width: 30%;
}
</style>
