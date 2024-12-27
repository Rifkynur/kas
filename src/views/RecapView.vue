<script setup>
import RecapChart from "../components/recap/RecapChart.vue";
</script>
<template>
  <section class="w-full p-2 md:p-4 text-slate-900 dark:text-white">
    <div class="w-full h-full py-6 rounded-md">
      <h1 class="font-bold text-2xl">Rekapitulasi</h1>
      <div>
        <div class="mt-5 flex items-center gap-2">
          <label for="">Pilih RT</label>
          <select name="" id="" class="bg-transparent border px-4 py-2 rounded-md focus:bg-transparent appearance-none border-black dark:border-white focus:outline-none">
            <option value="" class="bg-transparent">Rt 09</option>
            <option value="" class="bg-transparent" selected>Rt 10</option>
            <option value="" class="bg-transparent">Rt 11</option>
          </select>
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
