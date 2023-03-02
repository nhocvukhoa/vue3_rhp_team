<template>
  <h1>Transaction page</h1>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
    <router-link
      :to="{
        name: 'transaction-detail-route',
        params: { id: transaction.id },
      }"
      >{{ transaction.name }}</router-link
    >
    <p>Giá: {{ transaction.price }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    // Fetch all data
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => (this.transactions = data));
  },
};
</script>
