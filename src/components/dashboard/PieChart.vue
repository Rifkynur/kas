<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import * as chartConfig from "./chartConfig.js";
import { pieData, pieOptions } from "./chartConfig.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
</script>
<template>
  <div class="mt-4">
    <Pie :data="pieData" :options="pieOptions" />
  </div>
</template>
