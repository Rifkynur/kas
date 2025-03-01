import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useToggleSidebarStore = defineStore("sidebarToggle", () => {
  const sidebarOpen = ref(false);
  const openSidebar = () => (sidebarOpen.value = !sidebarOpen.value);
  const closeSidebar = () => (sidebarOpen.value = false);

  return { sidebarOpen, openSidebar, closeSidebar };
});
