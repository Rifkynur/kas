<script setup>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "vue-chartjs";
import { getLineData, getLineOptions } from "../../utils/chartConfig.js";
import { useGetIncomePerRt } from "@/hook/handleGetIncomePerRt.js";
import { onMounted, ref, watch } from "vue";
import { useYearIncomeStore } from "@/stores/yearIncomeTotal.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const { detailIncomePerQuarter } = useYearIncomeStore();
const { getIncomePerQuarter, incomeQuarter, loading } = useGetIncomePerRt();

onMounted(() => {
  getIncomePerQuarter();
});

watch(detailIncomePerQuarter, () => {
  getIncomePerQuarter(detailIncomePerQuarter.rt, detailIncomePerQuarter.year, detailIncomePerQuarter.quarter);
});

const { lineData } = getLineData(incomeQuarter);
const { lineOptions } = getLineOptions();
</script>
<template>
  <p v-if="loading" class="font-bold flex items-center justify-center">Sabar yaa...</p>
  <Line v-else :data="lineData" :options="lineOptions" />
</template>
