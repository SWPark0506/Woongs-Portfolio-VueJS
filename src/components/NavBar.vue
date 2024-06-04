<template>
  <header>
    <nav class="navbar">
      <div>
        <div class="logo">
          <router-link to="/">Woong's Portfolio</router-link>
        </div>
        <ul class="nav-links">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/Selfintro">About</router-link>
            <ul class="sub-menu">
              <li v-if="!isLoggedIn">
                <router-link to="/Login">Login</router-link>
              </li>
              <li v-else>
                <router-link @click="logout" to="/">Logout</router-link>
              </li>
              <li>
                <router-link to="/Resume">Resume</router-link>
              </li>
              <li>
                <router-link to="/Selfintro">Selfintro</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/Project1">Project</router-link>
            <ul class="sub-menu">
              <li><router-link to="/Project1">Project1</router-link></li>
              <li><router-link to="/Project2">Project2</router-link></li>
              <li><router-link to="/Project3">Project3</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/Contest1">Contest</router-link>
            <ul class="sub-menu">
              <li><router-link to="/Contest1">Contest1</router-link></li>
              <li><router-link to="/Contest2">Contest2</router-link></li>
              <li><router-link to="/Contest3">Contest3</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/Career1">Career</router-link>
            <ul class="sub-menu">
              <li><router-link to="/Career1">Career1</router-link></li>
              <li><router-link to="/Career2">Career2</router-link></li>
              <li><router-link to="/Career3">Career3</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBarCmt",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style scoped>
/* Navbar */
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Noto+Sans+KR:wght@100..900&family=Oswald:wght@200..700&family=Rubik+Glitch&display=swap");

body {
  margin: 0;
}

.navbar {
  background-color: #121212;
  color: #fff;
  padding: 10px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid #fff;
}

.navbar > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

.logo a {
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  font-weight: 700;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  padding-right: 40px;
  position: relative;
  font-weight: 700;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  position: relative;
}

.nav-links > li > ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0%;
  background-color: #121212;
  padding: 10px 0;
  width: 200px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.nav-links > li:hover > ul {
  display: block;
}

.nav-links > li > ul > li {
  display: block;
  text-align: center;
  padding: 8px 0;
}

.nav-links > li > ul > li:hover {
  background-color: #555;
}

.nav-links > li > ul > li:hover > ul > li {
  background-color: #555;
}
</style>
