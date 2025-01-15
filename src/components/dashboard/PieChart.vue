<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getPieData, getPieOptions } from "../../utils/chartConfig.js";
import { useGetIncomePerRt } from "@/hook/handleGetIncomePerRt.js";
import { useYearIncomeStore } from "../../stores/yearIncomeTotal.js";
import { watch, onMounted } from "vue";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const { incomePerRt, getIncomePerRt, loading } = useGetIncomePerRt();
const { pieData } = getPieData(incomePerRt);
const { pieOptions } = getPieOptions();
const { selectYear } = useYearIncomeStore();

onMounted(() => {
  if (selectYear) {
    getIncomePerRt(selectYear.year);
  } else {
    getIncomePerRt();
  }
});

const onloadIncome = (newYear) => {
  getIncomePerRt(newYear);
};

watch(selectYear, (newyear) => {
  onloadIncome(newyear.year);
});
</script>
<template>
  <div class="w-full h-80 rounded-md bg-black/20 p-1 lg:w-[35%] dark:bg-slate-700 dark:border-none">
    <p v-if="loading" class="font-bold capitalize flex justify-center items-center py-8">sabar yaa...</p>
    <Pie v-else :data="pieData" :options="pieOptions" />
  </div>
</template>
