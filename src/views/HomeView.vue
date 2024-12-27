<script setup>
import Card from "../components/dashboard/Card.vue";
import BarChart from "../components/dashboard/BarChart.vue";
import PieChart from "../components/dashboard/PieChart.vue";
</script>

<template>
  <section class="p-2 pb-10 md:p-6 w-full text-textLight dark:text-white">
    <h1 class="font-bold text-2xl py-6">Dashboard</h1>
    <div class="grid grid-cols-2 gap-2 md:gap-6 lg:grid-cols-3">
      <Card :cost="1000000" :title="'Total Saldo'" />
      <Card :color="'bg-white bg-opacity-20 dark:bg-red-500'" :cost="200000" :title="'Pemasukan'" />
      <Card :color="'bg-white bg-opacity-20 dark:bg-blue-600'" :cost="400000" :title="'Pengeluaran'" />
    </div>
    <div class="mt-6 flex flex-col justify-between gap-2 lg:flex-row">
      <BarChart />
      <PieChart />
    </div>
  </section>
</template>
