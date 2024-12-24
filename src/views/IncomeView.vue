<script setup>
import TableCashFlowVue from "@/components/cashFlow/TableCashFlow.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const toAddIncome = () => {
  router.push("/income/add");
};
</script>
<template>
  <section class="text-white w-full p-2 md:p-4">
    <div class="w-full h-full py-6 rounded-md">
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-2xl">Pemasukan</h1>
        <button @click="toAddIncome" class="bg-green-600 px-2 py-1 text-sm md:text-base rounded-md font-semibold md:px-4 md:py-2">Tambah</button>
      </div>
      <TableCashFlowVue />
    </div>
  </section>
</template>

<style scoope></style>
