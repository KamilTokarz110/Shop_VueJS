<template>
  <div id="app">
    <SideBar />
    <Home />
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import Home from "./components/Home";
export default {
  name: "App",
  components: {
    SideBar,
    Home,
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
