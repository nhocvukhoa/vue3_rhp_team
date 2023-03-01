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
      transactions: [
        {
          id: 1,
          name: "Đi siêu thị ngày 1",
          price: 200000,
        },
        {
          id: 2,
          name: "Thanh toán tiền nhà",
          price: 300000,
        },
        {
          id: 3,
          name: "Thanh toán tiền học phí",
          price: 500000,
        },
      ],
    };
  },
};
</script>
