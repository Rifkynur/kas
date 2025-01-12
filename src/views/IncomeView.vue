<script setup>
import TableCashFlow from "@/components/cashFlow/TableCashFlow.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useHandleIncome } from "../hook/handleIncome";
import Pagination from "@/components/cashFlow/Pagination.vue";
import { dataIncomeDummy } from "@/dummyData/dataIncome";
import { computed, watchEffect, onMounted, ref } from "vue";

const { role } = useAuthStore();
const router = useRouter();

const toAddIncome = () => {
  router.push("/income/add");
};
const toEditIncome = (id) => {
  router.push(`/income/edit/${id}`);
};

const visibleData = ref([]);
const itemsPerPage = ref(10);
const filterValue = ref("all");
const { dataIncome, getIncome, isLoading } = useHandleIncome();

// const dataIncome = ref(dataIncomeDummy);

const filteredData = computed(() => {
  if (filterValue.value === "all") {
    return dataIncome.value;
  }
  return dataIncome.value.filter((item) => item.rt === filterValue.value);
});
watchEffect(() => {
  if (dataIncome.value.length) {
    visibleData.value = filteredData.value.slice(0, itemsPerPage.value);
  }
});

const updateVisibleData = (data) => {
  visibleData.value = data;
};

onMounted(() => {
  getIncome();
});
</script>
<template>
  <section class="w-full min-h-screen p-2 md:p-4 text-slate-900 dark:text-white">
    <div class="w-full h-full py-6">
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-2xl">Pemasukan</h1>
        <button v-if="role" @click="toAddIncome" class="bg-green-400 px-2 py-1 text-sm md:text-base rounded-md font-semibold md:px-4 md:py-2 dark:bg-green-600">Tambah</button>
      </div>
      <div class="mt-4">
        <select
          v-model="filterValue"
          class="text-sm bg-transparent border border-black p-1 text-black/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:text-white dark:border-white dark:focus:border-blue-500 lg:p-3 lg:text-base"
        >
          <option value="all" class="bg-black text-white" selected>Semua RT</option>
          <option value="rt09" class="bg-black text-white">RT 09</option>
          <option value="rt10" class="bg-black text-white">RT 10</option>
          <option value="rt11" class="bg-black text-white">RT 11</option>
        </select>
      </div>
      <p v-if="isLoading" class="text-center py-8">Sabar yaa...</p>
      <TableCashFlow v-if="visibleData.length" :data="visibleData" :toEditCashFlow="toEditIncome" />
      <Pagination :data="filteredData" @update:visibleData="updateVisibleData" :itemsPerPage="itemsPerPage" />
    </div>
  </section>
</template>

<style scoope></style>
