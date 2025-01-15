<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";
import { getBarData, getBarOption } from "../../utils/chartConfig.js";
import { onMounted, watch } from "vue";
import { useGetIncomePerRt } from "@/hook/handleGetIncomePerRt.js";
import { useYearIncomeStore } from "../../stores/yearIncomeTotal.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const { loading, incomePerRtPerYear, getIncomePerRtPerYear } = useGetIncomePerRt();
const { barOptions } = getBarOption();
const { barData, inputIncome } = getBarData(incomePerRtPerYear);
const { selectYear } = useYearIncomeStore();

onMounted(() => {
  if (selectYear) {
    getIncomePerRtPerYear(selectYear.year);
  } else {
    getIncomePerRtPerYear();
  }
});

const onloadIncome = (newYear) => {
  getIncomePerRtPerYear(newYear);
};

watch(selectYear, (newYear) => {
  onloadIncome(newYear.year);
});
</script>
<template>
  <div class="w-full h-80 rounded-md bg-black/20 dark:bg-slate-700 p-1 dark:border-none">
    <p v-if="loading" class="font-bold capitalize flex justify-center items-center py-8">sabar yaa...</p>
    <Bar v-else :data="barData" :options="barOptions" class="w-full text-white" />
  </div>
</template>
