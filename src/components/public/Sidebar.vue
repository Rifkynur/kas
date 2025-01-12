<script setup>
import { RouterLink } from "vue-router";
import { HomeIcon, ChartPieIcon, WalletIcon, ShoppingCartIcon, UserIcon, ListBulletIcon } from "@heroicons/vue/24/solid";
import { useToggleSidebarStore } from "../../stores/toggleSidebar";
import { computed, onMounted, onBeforeUnmount, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import ModalLogout from "./ModalLogout.vue";

const sidebarRef = ref();

const authStore = useAuthStore();
const toggleSidebar = useToggleSidebarStore();

const isLogin = computed(() => authStore.isLogin);
const sidebarIsOpen = computed(() => {
  return toggleSidebar.sidebarOpen;
});

const handleClickOutside = (event) => {
  const buttonToggle = document.getElementById("button-toggle");

  if (sidebarRef.value && !sidebarRef.value.contains(event.target) && !buttonToggle.contains(event.target)) {
    toggleSidebar.closeSidebar();
  }
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
<template>
  <div
    ref="sidebarRef"
    class="p-6 bg-black bg-opacity-50 backdrop-blur-md w-fit border-r border-black/5 min-h-screen origin-left absolute transition-all duration-300 z-10 md:static dark:bg-secondary text-white/70"
    :class="sidebarIsOpen ? 'left-0' : '-left-full'"
  >
    <h2 class="text-xl font-bold mb-8 dark:text-white">Menu</h2>
    <ul class="flex flex-col gap-6">
      <li>
        <router-link to="/" active-class="text-slate-900 dark:text-blue-500" class="flex items-center gap-3">
          <HomeIcon class="size-5" />
          <p class="font-semibold">Dasboard</p>
        </router-link>
      </li>
      <li>
        <router-link to="/schedule" exact-active-class="text-slate-900 dark:text-blue-500" class="flex items-center gap-3">
          <ListBulletIcon class="size-5" />
          <p class="font-semibold">Jadwal</p>
        </router-link>
      </li>
      <li>
        <router-link to="/income" exact-active-class="text-slate-900 dark:text-blue-500" class="flex items-center gap-3">
          <WalletIcon class="size-5" />
          <p class="font-semibold">Pemasukan</p>
        </router-link>
      </li>
      <li>
        <router-link to="/expense" active-class="text-slate-900 dark:text-blue-500" class="flex items-center gap-3">
          <ShoppingCartIcon class="size-5" />
          <p class="font-semibold">Pengeluaran</p>
        </router-link>
      </li>
      <li>
        <router-link to="/recap" active-class="text-slate-900 dark:text-blue-500" class="flex items-center gap-3">
          <ChartPieIcon class="size-5" />
          <p class="font-semibold">Rekapitulasi</p>
        </router-link>
      </li>
      <li v-if="!isLogin">
        <router-link to="/login" active-class="text-slate-900 dark:text-blue-500" class="flex items-center gap-3">
          <UserIcon class="size-5" />
          <p class="font-semibold">Login</p>
        </router-link>
      </li>
      <li v-else @click="authStore.openModalLogout">
        <button class="flex items-center gap-3">
          <UserIcon class="size-5" />
          <p class="font-semibold">logout</p>
        </button>
        <ModalLogout :isOpen="authStore.modalLogoutIsOpen" @close="authStore.closeModalLogout" />
      </li>
    </ul>
  </div>
</template>
