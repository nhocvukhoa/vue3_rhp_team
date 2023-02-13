<template>
  <h1>Hello Vue Cli</h1>
  <base-page
    title="This is new title"
    content="This is content"
    theme="contact"
  />
</template>

<script>
import BasePage from "./components/BaseModal.vue";

export default {
  name: "App",
  components: {
    BasePage,
  },
};
</script>
