<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  data() {
    return {
      content: "Lifecycle Hooks",
      title: "Vue",
    };
  },
  methods: {
    changeTitle() {
      this.title = "Vue JS";
    },
  },
  components: {
    NavBar,
  },
};
</script>
