<script setup>
import { computed, ref, watch, onMounted } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { data } from "autoprefixer";

const props = defineProps({
  data: {
    type: Array,
  },
  itemsPerPage: {
    type: Number,
    default: 5,
  },
});

const emit = defineEmits(["update:visibleData"]);
const currentPage = ref(1);
const totalPage = computed(() => Math.ceil(props.data.length / props.itemsPerPage));

const visibleData = computed(() => {
  const startPage = (currentPage.value - 1) * props.itemsPerPage;
  const endPage = startPage + props.itemsPerPage;
  return props.data.slice(startPage, endPage);
});
onMounted(() => {
  emit("update:visibleData", visibleData.value); // Emit data untuk halaman pertama
});

const visiblePageNumber = computed(() => {
  let pageNumber = [];
  if (totalPage.value <= 7) {
    for (let i = 1; i <= totalPage.value; i++) {
      pageNumber.push(i);
    }
  } else {
    if (currentPage.value <= 4) {
      pageNumber = [1, 2, 3, 4, 5, ".....", totalPage.value];
    } else if (currentPage.value >= totalPage.value - 3) {
      pageNumber = [1, "....", totalPage.value - 4, totalPage.value - 3, totalPage.value - 2, totalPage.value - 1, totalPage.value];
    } else {
      pageNumber = [1, "....", currentPage.value - 1, currentPage.value, currentPage.value + 1, "....", totalPage.value];
    }
  }
  return pageNumber;
});
const changePage = (page) => {
  if (typeof page === "number" && currentPage.value >= 1 && page <= totalPage.value) {
    currentPage.value = page;
    emit("update:visibleData", visibleData.value);
  }
};
const filteredPageNumbers = computed(() =>
  visiblePageNumber.value.map((number) => ({
    isPlaceholder: number === "....",
    value: number,
  }))
);
</script>
<template>
  <div class="w-full flex items-center justify-center mt-3">
    <ul class="flex gap-2 items-center md:gap-4">
      <li class="p-1 text-xs rounded-full flex items-center justify-center">
        <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
          <ChevronLeftIcon class="size-3 md:size-5 text-black dark:text-white" />
        </button>
      </li>
      <li
        v-for="item in filteredPageNumbers"
        :key="item"
        :class="{ active: currentPage === item.value }"
        @click="changePage(item.value)"
        class="p-1 text-xs flex items-center justify-center font-semibold size-6 rounded-full md:text-lg md:size-8 text-black dark:text-white"
      >
        <button v-if="!item.isPlaceholder">
          {{ item.value }}
        </button>
        <span v-else>{{ item.value }}</span>
      </li>
      <li class="p-1 text-xs rounded-full flex items-center justify-center">
        <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPage.value">
          <ChevronRightIcon class="size-3 md:size-5 text-black dark:text-white" />
        </button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.active {
  @apply bg-[#FB4141] dark:bg-blue-600;
}
</style>
