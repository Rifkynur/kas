<script setup>
import { computed, ref, onMounted } from "vue";
const post = ref();
const isLoading = ref(true);
const itemPerPage = ref(3);
const currentPage = ref(1);
const totalPage = ref(19);
// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();

//   post.value = data;
//   isLoading.value = false;
// };

const visiblePost = computed(() => {
  if (isLoading.value || post.value.length === 0) {
    alert("kosong");
    return [];
  }

  const startPage = (currentPage.value - 1) * itemPerPage.value;
  const endPage = startPage + itemPerPage.value;
  return post.value.slice(startPage, endPage);
});

const visiblePageNumber = computed(() => {
  let pageNumber = [];
  if (totalPage.value <= 7) {
    for (let i = 1; i < totalPage.value; i++) {
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
  if (currentPage.value >= 1 && page <= totalPage.value) {
    currentPage.value = page;
  }
};
const filteredPageNumbers = computed(() =>
  visiblePageNumber.value.map((number) => ({
    isPlaceholder: number === "....",
    value: number,
  }))
);

// onMounted(() => {
//   getData();
// });
</script>
<template>
  <div class="w-full flex items-center justify-center mt-3">
    <ul class="flex gap-3">
      <li>
        <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">previous</button>
      </li>
      <li v-for="item in filteredPageNumbers" :key="item">
        <button v-if="!item.isPlaceholder" :class="{ active: currentPage === item.value }" @click="changePage(item.value)">
          {{ item.value }}
        </button>
        <span v-else>{{ item.value }}</span>
      </li>
      <li>
        <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPage.value">Next</button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.active {
  background: black;
}
</style>
