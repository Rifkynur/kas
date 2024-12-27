import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDarkModeStore = defineStore("darkmode", () => {
  const isDark = ref(false);

  const handleDarkMode = (theme) => {
    const html = document.documentElement;

    if (theme) {
      localStorage.setItem("theme", "dark");
      isDark.value = true;
      html.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      isDark.value = false;
      html.classList.remove("dark");
    }
  };

  const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    handleDarkMode(savedTheme);
  };

  return { isDark, handleDarkMode, loadTheme };
});
