import axios from "axios";
import { ref } from "vue";

export const useTotalData = () => {
  const totalData = ref();
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const getTotalData = async () => {
    const response = await axios.get(`${baseURL}/alldata`);
    const res = await response.data;
    totalData.value = res.data;
  };

  return { getTotalData, totalData };
};
