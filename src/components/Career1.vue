<template>
  <div class="bg">
    <NavBar />
    <main>
      <div class="container">
        <div class="title">
          <h1>아르바이트 및 인턴</h1>
          <hr size="" color="white" />
        </div>
        <div class="card">
          <h1>아르바이트</h1>
          <ul class="card-content">
            <li>✔ 준코노래방</li>
            <li>✔ 오션월드</li>
            <li>✔ 쿠팡 (계약직)</li>
            <li>✔ CU편의점</li>
            <li>✔ PC방</li>
          </ul>
        </div>
        <div class="card">
          <h1>인턴</h1>
          <ul class="card-content">
            <li>✔ 경험없음</li>
          </ul>
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
  name: "Career1Cmt",
  components: {
    Footer,
    NavBar,
  },
};
</script>

<style scoped>
a:link {
  text-decoration: none;
}

@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Noto+Sans+KR:wght@100..900&family=Oswald:wght@200..700&family=Rubik+Glitch&display=swap");

.bg {
  background-color: #529ac7;
}
a:link {
  text-decoration: none;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #fff;
  width: 40%;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  padding: 2rem 5rem 3rem 5rem;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(5px);
}

.card > h1 {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2em;
  width: 90%;
  margin-bottom: 30px;
  margin-left: 20px;
  padding-bottom: 10px;
  border-bottom: 4px solid black;
  margin-left: 2.5rem;
}

.card > .card-content {
  margin-top: 0;
  padding-top: 0;
  font-size: 1rem;
  list-style: none;
}
.card li {
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 0.8rem;
}

.title {
  text-align: center;
  width: 40%;
  margin-top: 20px;
}

.title > h1 {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 3rem;
  color: #ffffff;
}
</style>
