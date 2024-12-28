<script setup>
import RecapChart from "../components/recap/RecapChart.vue";
import flatpickr from "flatpickr";
import { onMounted, ref } from "vue";

const startDate = ref();
const endDate = ref();
onMounted(() => {
  flatpickr(".flatpickr", {});
});
</script>
<template>
  <section class="w-full p-2 md:p-4 text-slate-900 dark:text-white">
    <div class="w-full h-full py-6 rounded-md">
      <h1 class="font-bold text-2xl">Rekapitulasi</h1>
      <div>
        <div class="mt-5 flex items-center gap-2">
          <select name="" id="" class="bg-transparent border p-3 text-white/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:focus:border-blue-500 flatpickr">
            <option value="" class="bg-transparent" selected disabled>Pilih RT</option>
            <option value="" class="bg-transparent">Rt 09</option>
            <option value="" class="bg-transparent">Rt 10</option>
            <option value="" class="bg-transparent">Rt 11</option>
          </select>
          <input
            type="date"
            class="bg-transparent border p-3 text-white/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:focus:border-blue-500 flatpickr"
            placeholder="tanggal awal"
          />
          <input
            type="date"
            class="bg-transparent border p-3 text-white/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:focus:border-blue-500 flatpickr"
            placeholder="tanggal akhir"
          />
          <button class="font-semibold w-fit rounded-md shadow-lg bg-green-400 dark:bg-green-600">cari</button>
        </div>
      </div>
      <div class="w-full h-72 bg-white/10 p-2 rounded-md mt-3">
        <RecapChart />
      </div>
    </div>
  </section>
</template>
<style scoped>
option {
  @apply bg-black text-white dark:bg-gray-300 dark:text-slate-900;
}
</style>
