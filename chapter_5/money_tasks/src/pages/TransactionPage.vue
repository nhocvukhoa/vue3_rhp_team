<template>
  <h1>Transaction page</h1>
  <div v-if="transactions.length">
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
  </div>
  <div v-else>Loading transaction</div>
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
