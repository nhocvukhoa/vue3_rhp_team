<template>
  <h1>Hello Vue Cli</h1>
  <base-page
    v-if="isShowModal"
    title="This is new title"
    content="This is content"
    theme="contact"
    @cancel="onToggleModal"
  />
  <button @click="onToggleModal">Toggle modal</button>
</template>

<script>
import BasePage from "./components/BaseModal.vue";

export default {
  name: "App",
  components: {
    BasePage,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    onToggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>
