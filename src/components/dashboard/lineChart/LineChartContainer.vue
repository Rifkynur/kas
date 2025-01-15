<script setup>
import { onMounted, ref } from "vue";
import SelectDetailIncome from "./SelectDetailIncome.vue";
import LineChart from "../LineChart.vue";
</script>
<template>
  <section class="w-full text-slate-900 dark:text-white">
    <div class="w-full h-full py-6 rounded-md">
      <SelectDetailIncome />
      <div class="w-full h-72 bg-black/20 p-2 rounded-md mt-3 dark:bg-slate-700">
        <LineChart />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
