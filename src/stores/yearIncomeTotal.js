import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useYearIncomeStore = defineStore("yearIncomePerMonthPerRt", () => {
  const selectYear = reactive({
    year: "2022",
  });

  const detailIncomePerQuarter = reactive({
    rt: "rt09",
    year: "2022",
    quarter: "1",
  });

  return { selectYear, detailIncomePerQuarter };
});
