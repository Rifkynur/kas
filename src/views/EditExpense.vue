<script setup>
import CashFlowInput from "../components/cashFlow/CashFlowInput.vue";
import { useRoute } from "vue-router";

const router = useRoute();
const { id } = router.params;
</script>

<template>
  <section class="w-full min-h-screen">
    <CashFlowInput :title="'Edit Pengeluaran'" />
  </section>
</template>
