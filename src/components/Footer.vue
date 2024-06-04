<template>
  <footer class="footer">
    <div class="footer-icons">
      <div class="footer-icon-wrapper footer-bg-white" title="GitHub">
        <a href="https://github.com/SWPark0506"
          ><img class="footer-icon" src="../assets/git-hub-footer.png" alt=""
        /></a>
      </div>
      <div class="footer-icon-wrapper" title="Tistory">
        <img class="footer-icon" src="../assets/tistory(1).png" alt="" />
      </div>
      <div class="footer-icon-wrapper" title="Instagram">
        <img class="footer-icon" src="../assets/instagram.png" alt="" />
      </div>
      <div class="footer-icon-wrapper footer-bg-white" title="Facebook">
        <img class="footer-icon" src="../assets/facebook.png" alt="" />
      </div>
    </div>
    <div class="footer-copyright">
      © 2024. Park Seon Ung. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterCmt",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../CSS/AllColor.css");
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Noto+Sans+KR:wght@100..900&family=Oswald:wght@200..700&family=Rubik+Glitch&display=swap");

.footer {
  height: 11rem;
  padding-top: 3rem;
  background-color: #222;
  text-align: center;
}

footer {
  display: block;
  unicode-bidi: isolate;
  font-family: Noto Sans KR, sans-serif;
  line-height: normal;
  box-sizing: border-box;
}

.footer .footer-icons {
  margin-bottom: 1rem;
}

.footer .footer-icons .footer-icon-wrapper.footer-bg-white {
  background-color: #fff;
}

.footer .footer-icons .footer-icon-wrapper {
  position: static;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  padding: 2px;
  margin: 0 0.5rem;
  border-radius: 2rem;
  cursor: pointer;
}

.footer .footer-icons .footer-icon-wrapper .footer-icon {
  width: 100%;
}

img,
svg {
  vertical-align: middle;
}

img {
  overflow-clip-margin: content-box;
  overflow: clip;
}

.footer-icon {
  max-width: 3em;
}

.footer .footer-copyright {
  font-weight: 400;
  font-size: 0.9rem;
  color: #f5f5f5;
}
</style>
