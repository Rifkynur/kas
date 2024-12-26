<script setup>
import Pagination from "./Pagination.vue";
import CardCashFlow from "./CardCashFlow.vue";

const props = defineProps({
  data: {
    type: Array,
  },
});
</script>
<template>
  <div class="overflow-auto mt-8 p-2 w-full">
    <table class="bg-gray-700 rounded-md overflow-auto w-[670px] lg:w-full">
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
          <td class="p-2">Nama 1</td>
          <td class="p-2">12 Oktober 2024</td>
          <td class="p-2">Rp.67.000</td>
          <td class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quis laboriosam hic asperiores quam iste magni eius ipsa libero numquam?</td>
          <td class="p-2">
            <div class="flex items-center gap-2">
              <button class="bg-yellow-600 px-2 py-1 rounded-md">edit</button>
              <button class="bg-red-600 px-2 py-1 rounded-md">delete</button>
            </div>
          </td>
        </tr>
        <tr class="text-xs align-top bg-secondary border-t md:text-base">
          <td class="p-2">2</td>
          <td class="p-2">Nama 2</td>
          <td class="p-2">12 juni 2024</td>
          <td class="p-2">Rp.70.000</td>
          <td class="p-2">Jmpitan mingguan</td>
          <td class="p-2">
            <div class="flex items-center gap-2">
              <button class="bg-yellow-600 px-2 py-1 rounded-md">edit</button>
              <button class="bg-red-600 px-2 py-1 rounded-md">delete</button>
            </div>
          </td>
        </tr>
        <tr class="text-xs align-top bg-secondary border-t md:text-base">
          <td class="p-2">3</td>
          <td class="p-2">Nama 3</td>
          <td class="p-2">12 juni 2024</td>
          <td class="p-2">Rp.55.000</td>
          <td class="p-2">Jmpitan mingguan</td>
          <td class="p-2">
            <div class="flex items-center gap-2">
              <button class="bg-yellow-600 px-2 py-1 rounded-md">edit</button>
              <button class="bg-red-600 px-2 py-1 rounded-md">delete</button>
            </div>
          </td>
        </tr>
        <tr class="text-xs align-top bg-secondary border-t md:text-base">
          <td class="p-2">4</td>
          <td class="p-2">Nama 4</td>
          <td class="p-2">12 juni 2024</td>
          <td class="p-2">Rp.77.000</td>
          <td class="p-2">Jmpitan mingguan</td>
          <td class="p-2">
            <div class="flex items-center gap-2">
              <button class="bg-yellow-600 px-2 py-1 rounded-md">edit</button>
              <button class="bg-red-600 px-2 py-1 rounded-md">delete</button>
            </div>
          </td>
        </tr>
        <tr class="text-xs align-top bg-secondary border-t md:text-base">
          <td class="p-2">5</td>
          <td class="p-2">Nama 5</td>
          <td class="p-2">12 juni 2024</td>
          <td class="p-2">Rp.23.000</td>
          <td class="p-2">Jmpitan mingguan</td>
          <td class="p-2">
            <div class="flex items-center gap-2">
              <button class="bg-yellow-600 px-2 py-1 rounded-md">edit</button>
              <button class="bg-red-600 px-2 py-1 rounded-md">delete</button>
            </div>
          </td>
        </tr>
        <tr class="text-xs align-top bg-secondary border-t md:text-base">
          <td class="p-2">6</td>
          <td class="p-2">Nama 6</td>
          <td class="p-2">12 juni 2024</td>
          <td class="p-2">Rp.65.000</td>
          <td class="p-2">Jmpitan mingguan</td>
          <td class="p-2">
            <div class="flex items-center gap-2">
              <button class="bg-yellow-600 px-2 py-1 rounded-md">edit</button>
              <button class="bg-red-600 px-2 py-1 rounded-md">delete</button>
            </div>
          </td>
        </tr>
        <tr class="text-xs align-top bg-secondary border-t md:text-base">
          <td class="p-2">7</td>
          <td class="p-2">Nama 7</td>
          <td class="p-2">12 juni 2024</td>
          <td class="p-2">Rp.45.000</td>
          <td class="p-2">Jmpitan mingguan</td>
          <td class="p-2">
            <div class="flex items-center gap-2">
              <button class="bg-yellow-600 px-2 py-1 rounded-md">edit</button>
              <button class="bg-red-600 px-2 py-1 rounded-md">delete</button>
            </div>
          </td>
        </tr>
        <tr class="text-xs align-top bg-secondary border-t md:text-base">
          <td class="p-2">8</td>
          <td class="p-2">Nama 8</td>
          <td class="p-2">12 juni 2024</td>
          <td class="p-2">Rp.56.000</td>
          <td class="p-2">Jmpitan mingguan</td>
          <td class="p-2">
            <div class="flex items-center gap-2">
              <button class="bg-yellow-600 px-2 py-1 rounded-md">edit</button>
              <button class="bg-red-600 px-2 py-1 rounded-md">delete</button>
            </div>
          </td>
        </tr>
        <tr class="text-xs align-top bg-secondary border-t md:text-base">
          <td class="p-2">9</td>
          <td class="p-2">Nama 9</td>
          <td class="p-2">23 juni 2024</td>
          <td class="p-2">Rp.67.000</td>
          <td class="p-2">Jmpitan mingguan</td>
          <td class="p-2">
            <div class="flex items-center gap-2">
              <button class="bg-yellow-600 px-2 py-1 rounded-md">edit</button>
              <button class="bg-red-600 px-2 py-1 rounded-md">delete</button>
            </div>
          </td>
        </tr>
        <tr class="text-xs align-top bg-secondary border-t md:text-base">
          <td class="p-2">10</td>
          <td class="p-2">Nama 10</td>
          <td class="p-2">12 juni 2024</td>
          <td class="p-2">Rp.45.000</td>
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
  <CardCashFlow />
  <Pagination />
</template>
