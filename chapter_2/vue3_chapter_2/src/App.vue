<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" />
  <header-page ref="header" />
  <button @click="onChangeMe">On change me</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HeaderPage from "./components/HeaderPage.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeaderPage,
  },
  methods: {
    onChangeMe() {
      console.log("running here");
      console.log(this.$refs.hello.onTesting());
      console.log(this.$refs.header);
    },
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
