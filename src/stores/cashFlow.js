import { ref, computed, watchEffect } from "vue";
import { defineStore } from "pinia";

export const useCashFlowStore = defineStore("cashFlow", () => {
  const incomeData = ref([]);
  const expenseData = ref([]);
  const setIncomeData = (data) => {
    incomeData.value = data;
  };
  const setExpense = (data) => {
    expenseData.value = data;
  };

  return { incomeData, expenseData, setExpense, setIncomeData };
});
