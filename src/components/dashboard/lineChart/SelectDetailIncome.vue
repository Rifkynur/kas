<script setup>
import { useYearIncomeStore } from "../../../stores/yearIncomeTotal.js";
import { useGetIncomePerRt } from "@/hook/handleGetIncomePerRt.js";
import { computed } from "vue";
import { getLineData } from "@/utils/chartConfig.js";

const { detailIncomePerQuarter } = useYearIncomeStore();

const { getIncomePerQuarter, incomeQuarter } = useGetIncomePerRt();

const fetchDataPerQuarter = () => {
  getIncomePerQuarter(detailIncomePerQuarter.rt, detailIncomePerQuarter.year, detailIncomePerQuarter.quarter);
  console.log("data pada select", incomeQuarter);
  getLineData(incomeQuarter);
};
</script>

<template>
  <div>
    <div class="mt-5 flex flex-col items-start gap-2 md:flex-row md:items-center">
      <select
        name=""
        id=""
        v-model="detailIncomePerQuarter.rt"
        class="text-sm bg-transparent border border-black p-1 text-black/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:text-white dark:border-white dark:focus:border-blue-500 lg:p-3 lg:text-base"
      >
        <option value="" class="bg-black text-white dark:text-black" disabled>Pilih RT</option>
        <option value="rt09" class="bg-black text-white dark:text-black" selected>Rt 09</option>
        <option value="rt10" class="bg-black text-white dark:text-black">Rt 10</option>
        <option value="rt11" class="bg-black text-white dark:text-black">Rt 11</option>
      </select>
      <div class="flex text-sm gap-2">
        <select
          name=""
          id=""
          v-model="detailIncomePerQuarter.year"
          class="text-sm bg-transparent border border-black p-1 text-black/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:text-white dark:border-white dark:focus:border-blue-500 lg:p-3 lg:text-base"
        >
          <option value="" class="bg-black text-white dark:text-black" disabled>Pilih Tahun</option>
          <option value="2025" class="bg-black text-white dark:text-black">2025</option>
          <option value="2024" class="bg-black text-white dark:text-black">2024</option>
          <option value="2023" class="bg-black text-white dark:text-black">2023</option>
          <option value="2022" class="bg-black text-white dark:text-black" selected>2022</option>
        </select>
        <select
          name=""
          id=""
          v-model="detailIncomePerQuarter.quarter"
          class="text-sm bg-transparent border border-black p-1 text-black/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:text-white dark:border-white dark:focus:border-blue-500 lg:p-3 lg:text-base"
        >
          <option value="" class="bg-black text-white dark:text-black" disabled>Pilih Bulan</option>
          <option value="1" class="bg-black text-white dark:text-black" selected>Januari - Maret</option>
          <option value="2" class="bg-black text-white dark:text-black">April - Juni</option>
          <option value="3" class="bg-black text-white dark:text-black">Juli - September</option>
          <option value="4" class="bg-black text-white dark:text-black">Oktober - Desember</option>
        </select>
        <button @click="fetchDataPerQuarter" class="font-semibold px-2 w-fit rounded-md shadow-lg bg-green-400 dark:bg-green-600 lg:text-base lg:px-4">cari</button>
      </div>
    </div>
  </div>
</template>
