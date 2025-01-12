import { useNotify } from "@/utils/utils";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

export const useHandleIncome = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const dataIncome = ref([]);
  const dataIncomeById = ref({});
  const isLoading = ref(true);

  const router = useRouter();
  const { handleIsLogin } = useAuthStore();

  const getIncome = async () => {
    try {
      const response = await axios.get(`${baseURL}/income`);
      const data = await response.data;
      dataIncome.value = data.data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      isLoading.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  const getIncomeById = async (id) => {
    try {
      const response = await axios.get(`${baseURL}/income/${id}`);
      const data = await response.data;
      dataIncomeById.value = data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const addIncome = async (incomeData) => {
    try {
      const response = await axios.post(`${baseURL}/income`, incomeData, {
        withCredentials: true,
      });
      const data = await response.data;
      useNotify("berhasil menambahkan data", "success");
      setTimeout(() => {
        router.push("/income");
      }, 1500);
    } catch (error) {
      if (error.response.status === 401) {
        useNotify("sesi kamu sudah habis nih", "error");
        setTimeout(() => {
          router.push("/");
          handleIsLogin(false);
        }, 1500);
      }
      useNotify(error.response.data.msg, "error");
    }
  };

  const editIncome = async (incomeData, id) => {
    try {
      const response = await axios.put(`${baseURL}/income/${id}`, incomeData, {
        withCredentials: true,
      });
      const data = await response.data;
      useNotify("berhasil menambahkan data", "success");
      setTimeout(() => {
        router.push("/income");
      }, 1500);
    } catch (error) {
      if (error.response.status === 401) {
        useNotify("sesi kamu sudah habis nih", "error");
        setTimeout(() => {
          router.push("/");
          handleIsLogin(false);
        }, 1500);
      }

      useNotify(error.response.data.msg, "error");
    }
  };

  const deleteIncome = async (id) => {
    try {
      const response = await axios.put(
        `${baseURL}/income/delete/${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      useNotify("berhasil menghapus data", "success");
    } catch (error) {
      useNotify("gagal menghapus data", "error");
      console.log(error);
    }
  };
  return {
    dataIncome,
    dataIncomeById,
    deleteIncome,
    getIncome,
    getIncomeById,
    isLoading,
    addIncome,
    editIncome,
  };
};
