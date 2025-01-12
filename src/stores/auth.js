import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const isLogin = ref();
  const role = ref("");
  const modalLogoutIsOpen = ref(false);

  const openModalLogout = () => {
    modalLogoutIsOpen.value = true;
  };
  const closeModalLogout = () => {
    modalLogoutIsOpen.value = false;
  };

  const setRole = (roleName) => {
    sessionStorage.setItem("role", roleName);
    role.value = sessionStorage.getItem("role");
    isLogin.value = true;
  };

  const handleIsLogin = (auth) => {
    if (auth) {
      role.value = sessionStorage.getItem("role");
      isLogin.value = true;
    } else {
      sessionStorage.removeItem("role");
      isLogin.value = false;
      role.value = "";
    }
  };

  const checkLogin = () => {
    const saveAuth = sessionStorage.getItem("role");
    handleIsLogin(saveAuth);
  };

  return {
    role,
    isLogin,
    setRole,
    checkLogin,
    handleIsLogin,
    openModalLogout,
    closeModalLogout,
    modalLogoutIsOpen,
  };
});
