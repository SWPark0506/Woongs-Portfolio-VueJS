<template>
  <div class="bg">
    <NavBar />
    <main>
      <div class="container">
        <div class="title">
          <h1>프로젝트 1</h1>
          <hr size="" color="white" />
        </div>
        <div class="card">
          <div class="card-title">
            <h1>MyCamp</h1>
            <p>2024.02 ~ 2024.03 (1人 개인 프로젝트)</p>
          </div>
          <div class="imagebox">
            <img src="../assets/MyCamp_1.png" alt="Project Image" />
          </div>

          <div class="content">
            <div class="content-summary">
              <p>
                첫 번째 개인 프로젝트로, <span>Ejs</span>와
                <span>Bootstrap</span>을 활용하여 사용자 친화적인 UI와 UX를
                구현했습니다. <br /><br />
                <span>Node.js</span>와 <span>Express.js</span>를 기반으로하여
                <span>MongoDB</span>를 연동하여
                <b>캠핑장 정보를 등록하고 리뷰를 작성할 수 있는 웹 사이트</b>를
                만들었습니다. <br /><br />
                프론트엔드와 백엔드를 모두 개발하여 전체적인 웹 사이트를
                완성했으며, <span>mapbox API</span>를 통해 지도를 표시하여
                사용자에게 더 나은 서비스를 제공했습니다. <br /><br />
                또한, <span>passport</span> 패키지를 활용하여 로그인 기능을
                구현하여 사용자의 편의성을 높였습니다.
              </p>
            </div>

            <div class="content-info">
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ 주요 기능</b>
                </div>
                <div>
                  캠핑장 정보를 등록하고 수정할 수 있으며 고객이 캠핌장 정보를
                  얻거나 리뷰를 작성할 수 있다.
                </div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ GitHub</b>
                </div>
                <div>
                  <a href="https://github.com/SWPark0506/MyCamp"
                    >github.com/SWPark0506/MyCamp</a
                  >
                </div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ URL</b>
                </div>
                <div>
                  <a href="https://yelpcamp-bmfk.onrender.com"
                    >yelpcamp-bmfk.onrender.com</a
                  >
                </div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ Frontend</b>
                </div>
                <div>Ejs, Bootstrap CSS, JavaScript</div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ Backend</b>
                </div>
                <div>Node.js, Express.js</div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ Database</b>
                </div>
                <div>MongoDB</div>
              </div>
              <br />
              <div class="content-info-1">
                <div>
                  <b style="font-weight: 850">✔ Deployment</b>
                </div>
                <div>Render</div>
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
  name: "Project1Cmt",
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
