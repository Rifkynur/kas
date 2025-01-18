import { useAuthStore } from "@/stores/auth";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useNotify } from "@/utils/utils";
import { useIsSumbitting } from "@/stores/submitting";

export const useHandleExpense = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const isLoading = ref(true);
  const dataExpense = ref([]);
  const dataExpenseById = ref({});

  const { handleIsLogin } = useAuthStore();
  const router = useRouter();

  const { startSubmiting, stopSubmitting } = useIsSumbitting();

  const getExpense = async () => {
    const response = await axios.get(`${baseURL}/expense`);
    const data = await response.data;
    dataExpense.value = data.data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    isLoading.value = false;
  };

  const getExpenseById = async (id) => {
    const response = await axios.get(`${baseURL}/expense/${id}`);
    const data = await response.data;
    dataExpenseById.value = data.data;
  };

  const addExpense = async (expenseData) => {
    startSubmiting();
    try {
      const response = await axios.post(`${baseURL}/expense`, expenseData, {
        withCredentials: true,
      });
      const data = await response.data;
      useNotify("berhasil menambahkan data", "success");
      setTimeout(() => {
        router.push("/expense");
        stopSubmitting();
      }, 1500);
    } catch (error) {
      if (error.response.status) {
        useNotify("sesi kamu sudah habis nih", "error");
        setTimeout(() => {
          router.push("/");
          handleIsLogin(false);
        }, 1500);
        stopSubmitting();
      }
    }
  };

  const editExpense = async (expenseData, id) => {
    startSubmiting();
    try {
      const response = await axios.put(`${baseURL}/expense/${id}`, expenseData, {
        withCredentials: true,
      });
      const data = await response.data;
      useNotify("berhasil mengedit data", "success");
      setTimeout(() => {
        router.push("/expense");
        stopSubmitting();
      }, 1500);
    } catch (error) {
      if (error.response.status) {
        useNotify("sesi kamu sudah habis nih", "error");
        setTimeout(() => {
          router.push("/");
          handleIsLogin(false);
        }, 1500);
        stopSubmitting();
      }
    }
    stopSubmitting();
  };

  const deleteExpense = async (id) => {
    try {
      const response = await axios.put(
        `${baseURL}/expense/delete/${id}`,
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
    dataExpense,
    getExpense,
    isLoading,
    dataExpenseById,
    getExpenseById,
    addExpense,
    deleteExpense,
    editExpense,
  };
};
