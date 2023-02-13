<template>
  <h1>Hello Vue Cli</h1>
  <base-modal
    v-if="isShowModal"
    title="This is new title"
    content="This is content"
    theme="contact"
    @cancel="onToggleModal"
  >
    <template v-slot:header>
      <h2>This is header</h2>
    </template>
    <label for="">Name</label>
    <input type="text" value="name" />
    <template v-slot:footer>
      <button @click="onToggleModal">Cancel</button>
    </template>
  </base-modal>
  <button @click="onToggleModal">Toggle modal</button>
</template>

<script>
import BaseModal from "./components/BaseModal.vue";

export default {
  name: "App",
  components: {
    BaseModal,
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
