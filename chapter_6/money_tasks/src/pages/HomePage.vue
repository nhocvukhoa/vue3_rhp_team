<template>
  <div>
    <h1>Home Page</h1>
    <p>{{ firstName }}</p>
    <button @click="onChangeSomeThing">Change something</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const firstName = ref("Khoa");

    function onChangeSomeThing() {
      firstName.value = "Anh Khoa";
    }

    return {
      firstName,
      onChangeSomeThing,
    };
  },
};
</script>
