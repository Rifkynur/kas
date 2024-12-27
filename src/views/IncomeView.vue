<script setup>
import TableCashFlow from "@/components/cashFlow/TableCashFlow.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const toAddIncome = () => {
  router.push("/income/add");
};
</script>
<template>
  <section class="w-full p-2 md:p-4 text-slate-900 dark:text-white">
    <div class="w-full h-full py-6">
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-2xl">Pemasukan</h1>
        <button @click="toAddIncome" class="bg-green-400 px-2 py-1 text-sm md:text-base rounded-md font-semibold md:px-4 md:py-2 dark:bg-green-600">Tambah</button>
      </div>
      <TableCashFlow />
    </div>
  </section>
</template>

<style scoope></style>
