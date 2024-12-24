<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import Sidebar from "./components/public/Sidebar.vue";
import { computed } from "vue";
import Navbar from "./components/public/Navbar.vue";

const route = useRoute();
const hideSidebar = computed(() => ["/login", "/register"].includes(route.path));
console.log(hideSidebar);
</script>

<template>
  <main class="bg-primary min-h-screen font-poppins">
    <Navbar />
    <div class="relative flex">
      <Sidebar v-if="!hideSidebar" />
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
