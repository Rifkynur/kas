<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";
import { barData, barOptions } from "../../utils/chartConfig.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
</script>
<template>
  <div class="w-full h-80 border rounded-md bg-slate-700 p-1">
    <Bar :data="barData" :options="barOptions" class="w-full text-white" />
  </div>
</template>
