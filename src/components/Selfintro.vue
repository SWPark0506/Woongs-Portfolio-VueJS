<template>
  <div class="bg">
    <NavBar />
    <div class="container">
      <div class="title">
        <h1>자기소개서</h1>
        <hr size="" color="white" />
      </div>
      <div class="card">
        <h1>성장 과정 및 가치관</h1>
        <p>
          저의 성장 과정은 단순한 시간 순서가 아니라, 가치관과 성격의 형성에
          영향을 주는 경험들에 의해 구성되어 있습니다. 부모님과 형제자매와 함께
          보낸 시간은 저에게 존중, 협력, 그리고 책임감 같은 중요한 가치들을
          심어주었습니다. 이러한 가치들은 제 성장과정에서 뿐만 아니라 평생을
          걸쳐서도 저의 행동과 태도를 지배합니다. 어린 시절부터 호기심과 열정을
          통해 새로운 것을 배우고 도전하는 것을 즐겼습니다. 실패를 두려워하지
          않고 도전하는 과정에서 성장할 수 있는 것을 믿었기 때문입니다. 이러한
          자세는 제게 문제 해결능력과 유연성을 키우는 데 큰 도움이 되었습니다.
          가족과의 소통과 협력을 통해 사회적 책임감과 배려심을 배우며
          성장했습니다. 남들과의 관계에서 소중한 것은 상호 존중과 배려라고
          믿습니다. 이러한 가치들은 제가 팀에서 협력하고 소통하는 데 중요한
          역할을 합니다.
        </p>
      </div>
      <div class="card">
        <h1>취미와 특기</h1>
        <p>
          저의 취미는 수영과 농구입니다. 이러한 활동은 개인적인 즐거움 뿐만
          아니라 팀워크와 협력을 발휘할 수 있는 좋은 기회를 제공합니다. 농구를
          통해 팀원들과의 협력과 리더십을 발휘하는 경험을 쌓았으며, 수영을 통해
          규칙적인 운동으로 건강을 유지하고 스트레스를 해소하는 방법을
          배웠습니다. 또한, 열정이라는 제 특기는 제가 어떠한 일을 할 때 항상
          열정적으로 임하는 것을 의미합니다. 열정을 통해 어려운 일에도 도전하고
          지속적인 성장을 이루고자 합니다. 이러한 열정은 새로운 프로젝트나
          도전에 대한 의욕을 부여하고, 팀원들에게 긍정적인 영향을 줄 수
          있습니다.
        </p>
      </div>
      <div class="card">
        <h1>입사지원동기</h1>
        <p>
          금융권의 IT 부서에서 일하고 싶은 이유는, 금융 시장의 동향을 파악하고
          데이터를 기반으로 한 분석을 통해 비즈니스에 가치를 제공하는 것이 저의
          열정입니다. 회사의 뛰어난 경영 철학과 미래 비전에 큰 관심을 가지고
          있으며, 금융 IT 개발 및 데이터 분석 분야에서의 경력을 통해 전문성을
          키우고 싶습니다.
        </p>
      </div>
      <div class="card">
        <h1>포부 및 장래계획</h1>
        <p>
          금융회사의 IT 부서에 입사하여, 우수한 기술과 전문지식을 바탕으로
          회사의 정보기술 시스템을 혁신하고 개선하는 데에 기여하고자 합니다.
          우선적으로는 금융분야에 특화된 IT 기술과 프로세스에 대한 깊은 이해를
          쌓으며, 회사의 시스템에 대한 전반적인 이해도를 높이는 데 주력할
          것입니다. 또한, 신기술 및 트렌드를 적극적으로 연구하고 도입하여 회사의
          경쟁력을 강화하는데 기여할 것입니다. 이를 통해 회사의 IT 인프라를
          현대화하고 보안성을 강화하여 금융업무의 효율성과 안전성을 높이는 것이
          목표입니다. 장기적으로는 회사의 IT 전략 수립과 실행에 핵심적인 역할을
          수행하여, 금융 IT 부문에서의 선도적인 위치를 확보하고 글로벌
          시장에서의 경쟁력을 강화하는 것을 목표로 삼고 있습니다.
        </p>
      </div>
    </div>
    <Footer />
    <GotoTop />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import NavBar from "./NavBar.vue";
import GotoTop from "./btn_goto_top.vue";

export default {
  name: "SelfintroCmt",
  components: {
    Footer,
    NavBar,
    GotoTop,
  },
};
</script>

<style scoped>
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
  /* height: 100vh;  */
  margin-bottom: 2rem;
  /* padding: 20px; */
  padding-bottom: 1.5em;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #fff;
  width: 40%;
  height: auto;
  margin-top: 2rem;
  border-radius: 1rem;
  padding: 2rem 5rem 3rem 5rem;
  margin-bottom: 1rem;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(5px);
}

.card > h1 {
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
}

.card > p {
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
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
