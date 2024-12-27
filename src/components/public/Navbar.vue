<script setup>
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/vue/24/solid";
import { computed } from "vue";
import { useToggleSidebarStore } from "../../stores/toggleSidebar";
import { useDarkModeStore } from "@/stores/darkmode";
import { ref, onMounted } from "vue";

const toggleSidebar = useToggleSidebarStore();
const isDark = ref(false);
const darkModeStore = useDarkModeStore();

const handleSidebar = computed(() => {
  toggleSidebar.openSidebar();
});

onMounted(() => {
  darkModeStore.loadTheme();
});
</script>

<template>
  <nav class="w-full bg-[#2a2a2a] bg-opacity-40 backdrop-blur-md p-3 flex justify-between items-center shadow-md dark:text-white dark:bg-white/20">
    <div class="flex items-center gap-2">
      <button @click="handleSidebar">
        <Bars3Icon class="size-6 md:hidden" />
      </button>
      <h1 class="text-base font-bold capitalize lg:text-xl text-white">Jimpitan Desa Pesu</h1>
    </div>
    <div @click="darkModeStore.handleDarkMode(!darkModeStore.isDark)" class="w-12 border-2 border-black h-6 relative rounded-full cursor-pointer transition-all duration-300 md:w-14 md:h-7 dark:border-white">
      <div class="size-4 rounded-full absolute top-1/2 -translate-y-1/2 transition-all duration-300" :class="darkModeStore.isDark ? 'right-1 text-yellow-500' : 'left-1 '">
        <SunIcon v-if="darkModeStore.isDark" />
        <MoonIcon v-else />
      </div>
    </div>
  </nav>
</template>
