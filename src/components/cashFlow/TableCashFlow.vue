<script setup>
import CardCashFlow from "./CardCashFlow.vue";
import { useAuthStore } from "@/stores/auth.js";
import { formatRupiah, formatDate, spreadName } from "@/utils/utils";
import ModalDeleteData from "../public/ModalDeleteData.vue";
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const isModalOpen = ref(false);
const currentPath = ref("");
const selectedId = ref("");

const handleModalOpen = (id) => {
  isModalOpen.value = true;
  selectedId.value = id;
};
const closeModal = () => {
  isModalOpen.value = false;
};

const { role } = useAuthStore();

const props = defineProps({
  data: {
    type: Array,
  },
  toEditCashFlow: {
    type: Function,
  },
});
const route = useRoute();
const router = useRouter();

const pathName = () => {
  if (route.path.includes("income")) {
    currentPath.value = "income";
  } else {
    currentPath.value = "expense";
  }
};

onMounted(() => {
  pathName();
});
</script>
<template>
  <div class="overflow-auto mt-8 w-full">
    <table class="bg-black/20 rounded-md overflow-auto w-[670px] lg:w-full dark:bg-gray-700">
      <thead>
        <tr class="text-sm md:text-base text-slate-900 dark:text-white">
          <th class="p-2 text-start w-[5%]">No</th>
          <th class="p-2 text-start w-[10%]">Nama</th>
          <th class="p-2 text-start w-[20%]">Tanggal</th>
          <th class="p-2 text-start w-[10%]">Jumlah</th>
          <th class="p-2 text-start w-[35%]">Keterangan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="item?.id" class="text-sm align-top odd:bg-slate-200 even:bg-slate-300 border-t border-black md:text-base dark:border-white dark:even:bg-secondary dark:odd:bg-white/10 dark:text-white">
          <td class="p-2 font-semibold lg:py-5 lg:px-3">{{ index + 1 }}</td>
          <td class="p-2 font-semibold lg:py-5 lg:px-3 flex flex-col capitalize">
            <ul class="flex flex-col gap-1">
              <li v-for="name in spreadName(item.name)" :key="name">
                {{ name }}
              </li>
            </ul>
          </td>
          <td class="p-2 font-semibold lg:py-5 lg:px-3">{{ formatDate(item?.date) }}</td>
          <td class="p-2 font-semibold lg:py-5 lg:px-3">{{ formatRupiah(item?.amount) }}</td>
          <td class="p-2 font-semibold lg:py-5 lg:px-3">{{ item?.desc }}</td>
          <td v-if="role" class="p-2">
            <div class="flex items-center gap-2">
              <button v-if="currentPath === 'income' && (role === item.rt || role === 'superAdmin' || role === 'leader')" @click="toEditCashFlow(item.id)" class="bg-yellow-400 font-semibold px-2 py-1 rounded-md dark:bg-yellow-600">
                edit
              </button>
              <button v-if="currentPath === 'expense' && (role === 'superAdmin' || role === 'leader')" @click="toEditCashFlow(item.id)" class="bg-yellow-400 font-semibold px-2 py-1 rounded-md dark:bg-yellow-600">edit</button>
              <button v-if="role === item.rt || role === 'superAdmin' || role === 'leader'" @click="handleModalOpen(item.id)" class="bg-red-400 font-semibold px-2 py-1 rounded-md dark:bg-red-600">delete</button>
              <ModalDeleteData :isOpen="isModalOpen" @close="closeModal" :id="selectedId" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <CardCashFlow /> -->
  </div>
</template>
