<script setup>
import Pagination from "./Pagination.vue";
import CardCashFlow from "./CardCashFlow.vue";
import { onMounted } from "vue";

const props = defineProps({
  data: {
    type: Array,
  },
});

const name = "satu,dua,tiga,empat";
const dataName = name.split(",");
const auth = false;
onMounted(() => {
  console.log(dataName);
});
</script>
<template>
  <div class="overflow-auto mt-8 p-2 w-full">
    <table class="bg-white/20 rounded-md overflow-auto w-[670px] lg:w-full dark:bg-gray-700">
      <thead>
        <tr class="text-sm md:text-base text-slate-900 dark:text-white">
          <th class="p-2 text-start w-[5%]">No</th>
          <th class="p-2 text-start w-[10%]">Nama</th>
          <th class="p-2 text-start w-[15%]">tanggal</th>
          <th class="p-2 text-start w-[10%]">jumlah</th>
          <th class="p-2 text-start w-[35%]">keterangan</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-sm align-top text-slate-900 border-t md:text-base dark:bg-secondary dark:text-white">
          <td class="p-2 font-semibold">1</td>
          <td class="p-2 font-semibold flex flex-col">
            <ul class="flex flex-col gap-1">
              <li v-for="name in dataName" :key="`${name}-${index}`">
                {{ name }}
              </li>
            </ul>
          </td>
          <td class="p-2 font-semibold">12 Okt 2024</td>
          <td class="p-2 font-semibold">Rp.11.670.000</td>
          <td class="p-2 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quis laboriosam hic asperiores quam iste magni eius ipsa libero numquam?</td>
          <td v-if="auth" class="p-2">
            <div class="flex items-center gap-2">
              <button class="bg-yellow-400 font-semibold px-2 py-1 rounded-md dark:bg-yellow-600">edit</button>
              <button class="bg-red-400 font-semibold px-2 py-1 rounded-md dark:bg-red-600">delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <CardCashFlow />
  <Pagination />
</template>
