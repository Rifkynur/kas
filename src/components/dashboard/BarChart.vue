<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";
import { getBarData, getBarOption } from "../../utils/chartConfig.js";
import { watch, ref } from "vue";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const { barData } = getBarData();
const { barOptions } = getBarOption();
</script>
<template>
  <div class="w-full h-80 rounded-md bg-white bg-opacity-20 dark:bg-slate-700 p-1 dark:border-none">
    <Bar :data="barData" :options="barOptions" class="w-full text-white" />
  </div>
</template>
