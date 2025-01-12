<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import Sidebar from "./components/public/Sidebar.vue";
import { computed, onMounted } from "vue";
import Navbar from "./components/public/Navbar.vue";
import { useAuthStore } from "./stores/auth";
const route = useRoute();
const hideSidebar = computed(() => ["/login", "/register"].includes(route.path));
const { checkLogin } = useAuthStore();
onMounted(() => {
  checkLogin();
});
</script>

<template>
  <main class="min-h-screen font-poppins bg-light dark:bg-primary">
    <Navbar />
    <div class="relative flex">
      <Sidebar />
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
