import axios from "axios";
import { ref } from "vue";
import { getLineData } from "@/utils/chartConfig";

export const useGetIncomePerRt = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const incomePerRt = ref([]);
  const incomePerRtPerYear = ref([]);
  const incomeQuarter = ref([]);
  const loading = ref(true);

  const getIncomePerRt = async (year = 2022) => {
    try {
      const response = await axios.get(`${baseURL}/allIncomePerRt`, {
        params: { year },
      });
      const res = await response.data;
      incomePerRt.value = res.data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  const getIncomePerRtPerYear = async (year = 2022) => {
    try {
      const response = await axios.get(`${baseURL}/incomePerMonth`, {
        params: { year },
      });
      const res = await response.data;
      incomePerRtPerYear.value = res.data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  const getIncomePerQuarter = async (rt, year, quarter) => {
    try {
      const response = await axios.get(`${baseURL}/incomePerQuarter`, {
        params: { year, rt, quarter },
      });
      const res = await response.data;
      incomeQuarter.value = res.income;
      // getLineData(incomeQuarter.value);
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  return { incomePerRt, getIncomePerRt, getIncomePerRtPerYear, incomePerRtPerYear, getIncomePerQuarter, incomeQuarter, loading };
};
