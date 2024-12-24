<script setup>
import Card from "../components/dashboard/Card.vue";
</script>

<template>
  <section class="text-white p-2 md:p-6 w-full">
    <h1 class="font-bold text-2xl py-6">Dashboard</h1>
    <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6">
      <Card :cost="1000000" :title="'Total Saldo'" />
      <Card :color="'bg-red-500'" :cost="200000" :title="'Pemasukan'" />
      <Card :color="'bg-blue-600'" :cost="400000" :title="'Pengeluaran'" />
    </div>
  </section>
</template>
