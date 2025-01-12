<script setup>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "vue-chartjs";
import { getLineData, getLineOptions } from "../../utils/chartConfig.js";
import { useGetIncomePerRt } from "@/hook/handleGetIncomePerRt.js";
import { onMounted } from "vue";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const { getIncomePerQuarter, incomeQuarter, loading } = useGetIncomePerRt();

onMounted(() => {
  getIncomePerQuarter();
});
const { lineData } = getLineData(incomeQuarter);
const { lineOptions } = getLineOptions();
</script>
<template>
  <p v-if="loading">Sabar yaa...</p>
  <Line v-else :data="lineData" :options="lineOptions" />
</template>
