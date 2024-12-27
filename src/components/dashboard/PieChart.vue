<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
// import * as chartConfig from "./chartConfig.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getPieData, getPieOptions } from "../../utils/chartConfig.js";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const { pieData } = getPieData();
const { pieOptions } = getPieOptions();
</script>
<template>
  <div class="w-full h-80 rounded-md bg-white bg-opacity-20 p-1 lg:w-[35%] dark:bg-slate-700 dark:border-none">
    <Pie :data="pieData" :options="pieOptions" />
  </div>
</template>
