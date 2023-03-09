<template>
  <nav class="nav">
    <router-link :to="{ name: 'home-route' }">Dashboard</router-link>
    <router-link :to="{ name: 'transaction-route' }">Transaction</router-link>
    <router-link to="/">Budget</router-link>
    <router-link to="/">Report</router-link>
    <router-link to="/">Setting</router-link>
  </nav>
</template>
