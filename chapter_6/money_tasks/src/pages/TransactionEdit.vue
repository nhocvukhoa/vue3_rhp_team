<template>
  <h1>Edit page</h1>
  <button @click="backToHome">Back to home</button>
</template>

<script>
export default {
  data() {
    return {
      status: true,
    };
  },
  methods: {
    backToHome() {
      this.$router.push({ name: "home-route" });
    },
  },
  // beforeRouteLeave: Được gọi trước khi mà chúng ra chuyển hướng ra khỏi component tới một Route khác.
  beforeRouteLeave(to, from, next) {
    if (confirm("Are you exit? All data is delete!")) {
      next();
    } else {
      next(false);
    }
  },
};
</script>
