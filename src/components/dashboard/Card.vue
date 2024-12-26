<script setup>
import { CircleStackIcon, ScaleIcon, ChartBarIcon } from "@heroicons/vue/24/solid";
import { formatRupiah } from "../../utils/utils.js";
const props = defineProps({
  color: {
    type: String,
    default: "bg-green-600",
  },
  cost: {
    type: Number,
    default: 50000,
  },
  title: {
    type: String,
  },
});
</script>
<template>
  <div :class="['flex items-center gap-3 justify-between py-4 px-3 rounded-md', color]">
    <div class="flex items-center justify-center">
      <CircleStackIcon v-if="title === 'Total Saldo'" class="size-6 md:size-14" />
      <ScaleIcon v-else-if="title === 'Pemasukan'" class="size-6 md:size-14" />
      <ChartBarIcon v-else-if="title === 'Pengeluaran'" class="size-6 md:size-14" />
    </div>
    <div class="w-full h-full flex flex-col gap-2 items-end">
      <h2 class="font-bold text-base md:text-xl">{{ formatRupiah(cost) }}</h2>
      <span class="block w-full h-[1px] bg-white"></span>
      <p class="font-semibold text-base md:text-lg">{{ title }}</p>
    </div>
  </div>
</template>
