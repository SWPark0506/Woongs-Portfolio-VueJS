<template>
  <div class="bg">
    <NavBar />
    <div align="center" class="container">
      <div class="title">
        <h1>이력서</h1>
        <hr size="" color="white" />
      </div>
      <div class="form">
        <p class="subtitle">1.기초 자료</p>
        <table border="1" width="50%">
          <tr>
            <td rowspan="6" class="image">
              <img src="../assets/my-img.jpg" alt="" />
            </td>
            <td bgcolor="#e3fcff">성 명</td>
            <td>박 선 웅</td>
            <td bgcolor="#e3fcff">영 문</td>
            <td>Park Seon Ung</td>
          </tr>
          <tr>
            <td bgcolor="#e3fcff">주민등록번호</td>
            <td colspan="3">000506-3XXXXXX</td>
          </tr>
          <tr>
            <td bgcolor="#e3fcff">E-mail</td>
            <td colspan="3">0169ok@gmail.com</td>
          </tr>
          <tr>
            <td bgcolor="#e3fcff">전화번호</td>
            <td>010-8640-0169</td>
            <td bgcolor="#e3fcff">휴대폰</td>
            <td>010-8640-0169</td>
          </tr>
          <tr>
            <td bgcolor="#e3fcff">우편번호</td>
            <td></td>
            <td bgcolor="#e3fcff">비상연락처</td>
            <td></td>
          </tr>
          <tr>
            <td bgcolor="#e3fcff">주소</td>
            <td colspan="3">경기도 성남시 태평동</td>
          </tr>
        </table>
        <p></p>
        <p class="subtitle">2.학력사항</p>
        <table border="1" width="50%">
          <tr>
            <th bgcolor="#e3fcff">기간</th>
            <th bgcolor="#e3fcff">상세내용</th>
            <th bgcolor="#e3fcff">비고</th>
          </tr>
          <tr>
            <td>초등학교</td>
            <td>학성초등학교</td>
            <td></td>
          </tr>
          <tr>
            <td>중학교</td>
            <td>태장중학교</td>
            <td></td>
          </tr>
          <tr>
            <td>고등학교</td>
            <td>진광고등학교</td>
            <td></td>
          </tr>
          <tr>
            <td>대학교</td>
            <td>가천대학교</td>
            <td></td>
          </tr>
        </table>
        <p></p>
        <p class="subtitle">3. 경력사항</p>
        <table border="1" width="50%">
          <tr>
            <th bgcolor="#e3fcff">기관</th>
            <th bgcolor="#e3fcff">기간</th>
            <th bgcolor="#e3fcff">관련</th>
          </tr>
          <tr>
            <td></td>
            <td>0000 ~ 0000</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>0000 ~ 0000</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>0000 ~ 0000</td>
            <td></td>
          </tr>
        </table>
        <p></p>
        <p class="subtitle">4. 개인능력 및 장단점</p>
        <table border="1" width="50%">
          <tr height="30">
            <td rowspan="3" bgcolor="#e3fcff">자격증</td>
            <td colspan="2">정보처리기사</td>
            <td colspan="1">리눅스 마스터 2급</td>
          </tr>
          <tr height="30">
            <td colspan="2">투자자산운용사</td>
            <td colspan="1">재무위험관리사</td>
          </tr>
          <tr height="30">
            <td colspan="2">재무설계사</td>
            <td colspan="1">SQLD</td>
          </tr>

          <tr height="30">
            <td rowspan="4" bgcolor="#e3fcff">컴퓨터능력</td>
            <td colspan="2">C/C++</td>
            <td bgcolor="#e3fcff">상/<b>중</b>/하</td>
          </tr>
          <tr height="30">
            <td colspan="2">Java</td>
            <td bgcolor="#e3fcff">상/<b>중</b>/하</td>
          </tr>
          <tr height="30">
            <td colspan="2">JavaScript</td>
            <td bgcolor="#e3fcff">상/<b>중</b>/하</td>
          </tr>
          <tr height="30">
            <td colspan="2">Python</td>
            <td bgcolor="#e3fcff">상/<b>중</b>/하</td>
          </tr>
          <tr height="30">
            <td bgcolor="#e3fcff">취미</td>
            <td>여행</td>
            <td bgcolor="#e3fcff">특기</td>
            <td>프로그래밍</td>
          </tr>
        </table>

        <div id="pledge">
          <br />위의 사실이 틀림이 없음을 서약합니다.<br />
          작성일 2024년 03월 22일<br />
          작성자 (인) 박선웅
        </div>
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
  name: "ResumeCmt",
  components: {
    Footer,
    NavBar,
    GotoTop,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Noto+Sans+KR:wght@100..900&family=Oswald:wght@200..700&family=Rubik+Glitch&display=swap");

a:link {
  text-decoration: none;
}
.bg {
  background-color: #529ac7;
}

.form {
  margin: 2rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  background-color: #fff;
  width: 50%;
  border-radius: 1rem;
  margin-bottom: 4rem;
}

.container > table {
  margin-top: 20px;
}
table {
  font-family: "Noto Sans KR", sans-serif;
  width: 80%;
  text-align: center;
}

.title {
  width: 40%;
  margin-top: 52px;
}

.title > h1 {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 3rem;
  color: #ffffff;
}

.subtitle {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.2em;
}

.image {
  width: 7em;
  text-align: center;
}

.image > img {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: auto;
}
</style>
