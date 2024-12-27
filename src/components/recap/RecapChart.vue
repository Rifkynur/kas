<script setup>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "vue-chartjs";
import { getLineData, getLineOptions } from "../../utils/chartConfig.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const { lineData } = getLineData();
const { lineOptions } = getLineOptions();
</script>
<template>
  <Line :data="lineData" :options="lineOptions" />
</template>
