<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import Sidebar from "./components/public/Sidebar.vue";
import { computed } from "vue";
import Navbar from "./components/public/Navbar.vue";

const route = useRoute();
const hideSidebar = computed(() => ["/login", "/register"].includes(route.path));
</script>

<template>
  <main class="min-h-screen font-poppins bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-primary dark:to-primary">
    <Navbar />
    <div class="relative flex">
      <Sidebar />
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
