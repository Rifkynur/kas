import { ref, reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { useNotify } from "@/utils/utils";
import { useIsSumbitting } from "@/stores/submitting";

export const useHandleAuth = () => {
  const { role, setRole, handleIsLogin, closeModalLogout } = useAuthStore();
  const { startSubmiting, stopSubmitting, isSubmit } = useIsSumbitting();

  const showPassword = ref(false);
  const router = useRouter();

  const goBack = computed(() => {
    router.push("/");
  });
  const handleShowPassword = () => {
    showPassword.value = !showPassword.value;
  };

  const dataLogin = reactive({
    email: "",
    password: "",
  });

  const rules = computed(() => {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    };
  });

  const v$ = useVuelidate(rules, dataLogin);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const handleLogin = async () => {
    const result = await v$.value.$validate();
    startSubmiting();

    try {
      const response = await axios.post(`${baseURL}/auth/login`, dataLogin, {
        withCredentials: true,
      });

      const data = response.data;
      const roleName = data.userData.role.name;
      setRole(roleName);

      useNotify("Login berhasil", "success");
      stopSubmitting();
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      useNotify("Email/Password yang kamu masukan salah", "error");
      stopSubmitting();
    }
  };

  const getValidationMessage = (field) => {
    const fieldErrors = v$.value[field].$errors;
    if (!fieldErrors.length) return "";

    const error = fieldErrors[0];
    if (error.$validator === "required") {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} wajib diisi.`;
    }
    if (error.$validator === "email") {
      return "Format email tidak valid.";
    }
    if (error.$validator === "minLength") {
      return `Minimal ${field} adalah ${error.$params.min}.`;
    }

    return "Input tidak valid.";
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${baseURL}/auth/loguot`);
      handleIsLogin(false);
      closeModalLogout();

      useNotify("berhasil logout", "success");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      useNotify("uppss.. ada yang salah nih", "error");
      console.log(error.message);
    }
  };

  return {
    showPassword,
    dataLogin,
    goBack,
    handleShowPassword,
    v$,
    handleLogin,
    getValidationMessage,
    handleLogout,
  };
};
