<template>
  <h1>Transaction detail page</h1>
  <div class="detail" v-if="transaction">
    <p>ID: {{ id }}</p>
    <p>Name: {{ transaction.name }}</p>
    <p>Price: {{ transaction.price }}</p>
  </div>
  <div v-else>Loading transaction</div>
  <button @click="goEditPage">Edit</button>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      transaction: null,
    };
  },
  methods: {
    goEditPage() {
      this.$router.push({ name: "transaction-edit-route" });
    },
  },
  // Component Guards – Can thiệp vào từng component trong VueJS
  // Guard in component
  // Trước khi route link xuất hiện thì nó làm chi đấy
  // Được gọi trước khi mà điều hướng được xác nhận
  // Ở đây bạn không thể truy cập vào con trỏ this của Vue, vì nó được chạy trước khi mà component được khởi tạo.
  beforeRouteEnter(to, from, next) {
    console.log("Action route guard in component");
    next();
  },
  created() {
    // Fetch one
    fetch("http://localhost:3000/transactions/" + this.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data))
      .then(() => console.log(this.transaction));
  },
};
</script>
