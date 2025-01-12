<script setup>
const props = defineProps({
  week: {
    type: String,
  },
  names: {
    type: Array,
  },
});
</script>
<template>
  <div class="w-full text-center bg-white/30 p-2 rounded-md lg:pb-4">
    <h2 class="mb-2 bg-cyan-500 font-bold py-1 lg:py-2 dark:bg-blue-600">{{ week }}</h2>
    <ul v-for="name in names" :key="name" class="flex flex-col gap-3 font-semibold">
      <li class="capitalize">{{ name }}</li>
    </ul>
  </div>
</template>
