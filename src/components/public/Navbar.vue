<script setup>
import { Bars3Icon } from "@heroicons/vue/24/solid";
import { computed } from "vue";
import { useToggleSidebarStore } from "../../stores/toggleSidebar";

const toggleSidebar = useToggleSidebarStore();
const handleSidebar = computed(() => {
  toggleSidebar.openSidebar();
});
</script>

<template>
  <nav class="w-full bg-white/20 p-3 flex justify-between text-white shadow-md">
    <div class="flex items-center gap-2">
      <button @click="handleSidebar">
        <Bars3Icon class="size-6 md:hidden" />
      </button>
      <h1 class="text-base font-bold capitalize lg:text-xl">Jimpitan Desa Pesu</h1>
    </div>
  </nav>
</template>
