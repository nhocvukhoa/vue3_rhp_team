<template>
  <h1>404 page</h1>
  <button @click="backHome">Về trang chủ</button>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push({ name: "home-route" });
    },
  },
};
</script>
