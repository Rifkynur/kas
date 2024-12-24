<script setup>
import Pagination from "./Pagination.vue";

const props = defineProps({
  data: {
    type: Array,
  },
});
</script>
<template>
  <div class="overflow-auto mt-8 p-2">
    <table class="bg-gray-700 rounded-md w-full">
      <thead>
        <tr class="text-sm md:text-base">
          <th class="p-2 text-start w-[5%]">No</th>
          <th class="p-2 text-start">Nama</th>
          <th class="p-2 text-start">tanggal</th>
          <th class="p-2 text-start">jumlah</th>
          <th class="p-2 text-start w-[35%]">keterangan</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-xs align-top bg-secondary border-t md:text-base">
          <td class="p-2">1</td>
          <td class="p-2">saya</td>
          <td class="p-2">12 juni 2024</td>
          <td class="p-2">Rp.2000.000</td>
          <td class="p-2">Jmpitan mingguan</td>
          <td class="p-2">
            <div class="flex items-center gap-2">
              <button class="bg-yellow-600 px-2 py-1 rounded-md">edit</button>
              <button class="bg-red-600 px-2 py-1 rounded-md">delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Pagination />
</template>
