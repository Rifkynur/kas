<script setup>
import Card from "../components/dashboard/Card.vue";
import BarChart from "../components/dashboard/BarChart.vue";
import PieChart from "../components/dashboard/PieChart.vue";
import LineChartContainer from "@/components/dashboard/lineChart/LineChartContainer.vue";
import { useTotalData } from "@/hook/handleTotalData";
import { onMounted, watch } from "vue";
import { useYearIncomeStore } from "../stores/yearIncomeTotal.js";

const { getTotalData, totalData } = useTotalData();
const { selectYear } = useYearIncomeStore();
onMounted(() => {
  getTotalData();
});
</script>

<template>
  <section class="p-2 pb-10 min-h-screen md:p-6 w-full text-textLight dark:text-white">
    <h1 class="font-bold text-2xl py-6">Total Dana</h1>
    <div class="grid grid-cols-2 gap-2 md:gap-6 lg:grid-cols-3">
      <Card :cost="totalData?.totalDana" :title="'Total Saldo'" />
      <Card :color="'bg-blue-500 dark:bg-blue-600'" :cost="totalData?.totalIncome" :title="'Pemasukan'" />
      <Card :color="'bg-red-400 dark:bg-red-500'" :cost="totalData?.totalExpense" :title="'Pengeluaran'" />
    </div>
    <div>
      <div class="mt-4 flex gap-2 items-center">
        <label for="inputYear" class="font-semibold">Pemasukan Data tahun :</label>
        <select
          name=""
          id="inputYear"
          v-model="selectYear.year"
          class="text-sm bg-transparent border border-black p-1 text-white focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:border-white dark:focus:border-blue-500 lg:px-3 lg:text-base"
        >
          <option value="2025" class="bg-black">2025</option>
          <option value="2024" class="bg-black">2024</option>
          <option value="2023" class="bg-black">2023</option>
          <option value="2022" class="bg-black">2022</option>
        </select>
      </div>
      <div class="mt-3 flex flex-col justify-between gap-2 lg:flex-row">
        <BarChart />
        <PieChart />
      </div>
      <div>
        <LineChartContainer />
      </div>
    </div>
  </section>
</template>
