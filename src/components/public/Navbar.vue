<script setup>
import { Bars3Icon } from "@heroicons/vue/24/solid";
import { computed } from "vue";
import { useToggleSidebarStore } from "../../stores/toggleSidebar";
import { useRouter } from "vue-router";
// import {computed} from

const toggleSidebar = useToggleSidebarStore();
const handleSidebar = computed(() => {
  toggleSidebar.openSidebar();
});

const router = useRouter();
const login = computed(() => {
  router.push("login");
});
</script>

<template>
  <nav class="w-full bg-white/20 p-3 flex justify-between text-white shadow-md">
    <div class="flex items-center gap-2">
      <button @click="handleSidebar">
        <Bars3Icon class="size-6 md:hidden" />
      </button>
      <h1 class="text-xl font-bold capitalize">kas</h1>
    </div>
    <button class="bg-blue-500 px-3 py-1 font-semibold rounded-lg text-sm md:text-base" @click="login">login</button>
  </nav>
</template>
