<template>
  <div>
    <h1>Home Page</h1>
    <p>{{ firstName }}</p>
    <button @click="onChangeSomeThing">Change something</button>
  </div>
</template>

<script>
export default {
  setup() {
    const firstName = "Khoa";

    function onChangeSomeThing() {
      console.log("onChangeSomeThing");
    }

    return {
      firstName,
      onChangeSomeThing,
    };
  },
};
</script>
