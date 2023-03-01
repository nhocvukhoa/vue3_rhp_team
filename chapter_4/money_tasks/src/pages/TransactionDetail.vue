<template>
  <h1>Transaction detail page</h1>
  <p>{{ id }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
