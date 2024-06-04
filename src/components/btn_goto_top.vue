<template>
  <button
    v-if="showButton"
    @click="backToTop"
    id="btn-back-to-top"
    title="위로 가기"
  >
    Top
  </button>
</template>

<script>
export default {
  name: "btn_goto_topCmt",
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    backToTop() {
      const position =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (position) {
        window.requestAnimationFrame(() => {
          window.scrollTo(0, position - position / 10);
          this.backToTop();
        });
      }
    },
    handleScroll() {
      this.showButton = window.scrollY > 200;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
#btn-back-to-top {
  position: fixed;
  bottom: 3rem;
  right: 3rem;

  z-index: 9999;
  border: none;
  outline: none;
  background-color: #ff6666;
  color: white;
  cursor: pointer;
  padding: 1.2rem;
  border-radius: 10px;
}

#btn-back-to-top:hover {
  background-color: #333;
}
</style>
