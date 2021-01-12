<template>
  <div id="app">
    <!-- <SideBar />
    <Home />
    <Subscribe />
    <Footer />
    <Newsletter />
    <Item /> -->
    <ul>
      <li><router-link to="/">Home</router-link></li>
    </ul>
    <Header />

    <router-view />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import SideBar from "./components/SideBar";
// import Home from "./components/Home";
// import Subscribe from "./components/Subscribe";
// import Footer from "./components/Footer";
// import Newsletter from "./components/Newsletter";
// import Item from "./components/Item";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
    // SideBar,
    // Home,
    // Subscribe,
    // Footer,
    // Newsletter,
    // Item,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
