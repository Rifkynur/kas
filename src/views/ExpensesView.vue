<script setup>
import TableCashFlow from "../components/cashFlow/TableCashFlow.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useHandleExpense } from "@/hook/handleExpense";
import { computed, watchEffect, onMounted, ref } from "vue";
import { useCashFlowStore } from "@/stores/cashFlow";
import Pagination from "@/components/cashFlow/Pagination.vue";

const visibleData = ref([]);
const itemsPerPage = ref(10);

const router = useRouter();
const { isLogin, role } = useAuthStore();
const { isLoading, dataExpense, getExpense } = useHandleExpense();

watchEffect(() => {
  if (dataExpense.value.length) {
    visibleData.value = dataExpense.value.slice(0, itemsPerPage.value);
  }
});

const toAddExpense = () => {
  router.push("/expense/add");
};
const toEditExpense = (id) => {
  router.push(`/expense/edit/${id}`);
};
const updateVisibleData = (data) => {
  visibleData.value = data;
};
onMounted(() => {
  getExpense();
});
</script>

<template>
  <section class="w-full min-h-screen p-2 md:p-4 text-slate-900 dark:text-white">
    <div class="w-full h-full py-6">
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-2xl">Pengeluaran</h1>
        <button v-if="isLogin && (role === 'leader' || role === 'superAdmin')" @click="toAddExpense" class="bg-green-400 px-2 py-1 text-sm md:text-base rounded-md font-semibold md:px-4 md:py-2 dark:bg-green-600">Tambah</button>
      </div>
      <div class="mt-4 flex gap-2 items-center">
        <label class="font-semibold">Data perTabel</label>
        <select
          name="itemPerpage"
          v-model="itemsPerPage"
          class="text-sm bg-transparent border p-1 text-white/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:focus:border-blue-500 lg:px-3 lg:text-base"
        >
          <option :value="5" class="bg-black">5</option>
          <option :value="10" class="bg-black" selected>10</option>
          <option :value="15" class="bg-black">15</option>
          <option :value="20" class="bg-black">20</option>
        </select>
      </div>
      <p v-if="isLoading" class="text-center py-8">Sabar yaa...</p>
      <TableCashFlow v-if="visibleData.length" :data="visibleData" :toEditCashFlow="toEditExpense" />
      <Pagination :data="dataExpense" @update:visibleData="updateVisibleData" :itemsPerPage="itemsPerPage" />
    </div>
  </section>
</template>
