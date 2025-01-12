<script setup>
import { onMounted, ref } from "vue";
import SelectDetailIncome from "./SelectDetailIncome.vue";
import LineChart from "../LineChart.vue";
</script>
<template>
  <section class="w-full text-slate-900 dark:text-white">
    <div class="w-full h-full py-6 rounded-md">
      <SelectDetailIncome />
      <div class="w-full h-72 bg-white/10 p-2 rounded-md mt-3">
        <LineChart />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
