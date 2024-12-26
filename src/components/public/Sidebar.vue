<script setup>
import { RouterLink } from "vue-router";
import { HomeIcon, ChartPieIcon, WalletIcon, ShoppingCartIcon, UserIcon } from "@heroicons/vue/24/solid";
import { useToggleSidebarStore } from "../../stores/toggleSidebar";
import { computed } from "vue";

const toggleSidebar = useToggleSidebarStore();
const sidebarIsOpen = computed(() => {
  return toggleSidebar.sidebarOpen;
});
</script>
<template>
  <div class="text-white/70 p-6 w-fit min-h-screen bg-secondary origin-left absolute transition-all duration-300 md:static" :class="sidebarIsOpen ? 'left-0' : '-left-full'">
    <h2 class="text-xl font-bold mb-8 text-white">Menu</h2>
    <ul class="flex flex-col gap-6">
      <li>
        <router-link to="/" active-class="text-blue-500" class="flex items-center gap-3">
          <HomeIcon class="size-5" />
          <p class="font-semibold">Dasboard</p>
        </router-link>
      </li>
      <li>
        <router-link to="/income" exact-active-class="text-blue-500" class="flex items-center gap-3">
          <WalletIcon class="size-5" />
          <p class="font-semibold">Pemasukan</p>
        </router-link>
      </li>
      <li>
        <router-link to="/outcome" active-class="text-blue-500" class="flex items-center gap-3">
          <ShoppingCartIcon class="size-5" />
          <p class="font-semibold">Pengeluaran</p>
        </router-link>
      </li>
      <li>
        <router-link to="/recap" active-class="text-blue-500" class="flex items-center gap-3">
          <ChartPieIcon class="size-5" />
          <p class="font-semibold">Rekapitulasi</p>
        </router-link>
      </li>
      <li>
        <router-link to="/login" active-class="text-blue-500" class="flex items-center gap-3">
          <UserIcon class="size-5" />
          <p class="font-semibold">Login</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
