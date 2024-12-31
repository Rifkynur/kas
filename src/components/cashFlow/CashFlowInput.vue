<script setup>
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useHandleCashFlow } from "../../hook/handleCashFlowHook.js";
import flatpickr from "flatpickr";

const { dataInput, v$, handleAddIncomeSubmit, getValidationMessage } = useHandleCashFlow();
const router = useRouter();
const goback = computed(() => {
  router.back();
});
const props = defineProps({
  title: {
    type: String,
  },
});
onMounted(() => {
  flatpickr(".flatpickr", { dateFormat: "d M Y", disableMobile: true });
});
</script>
<template>
  <section class="w-full p-4">
    <div class="md:p-6 rounded-md h-full text-white">
      <h1 class="font-bold text-xl mb-8">Tambah {{ title }}</h1>
      <form @submit.prevent="handleAddIncomeSubmit" class="flex flex-col gap-6 mt-4 w-9/12 mx-auto">
        <div class="flex flex-col gap-4 w-full">
          <label class="font-semibold">Penaggung Jawab</label>
          <input
            type="text"
            name="name"
            class="bg-transparent border p-3 text-white/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:focus:border-blue-500"
            placeholder="Masukan Nama"
            v-model="dataInput.name"
            autocomplete="off"
          />
          <p v-if="v$.name.$error" class="text-red-500 text-sm font-semibold">
            {{ getValidationMessage("name") }}
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <label class="font-semibold">Jumlah</label>
          <input
            type="number"
            name="amount"
            min="0"
            class="bg-transparent border p-3 text-white/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:focus:border-blue-500"
            placeholder="Masukan Jumlah"
            v-model="dataInput.amount"
          />
          <p v-if="v$.amount.$error" class="text-red-500 text-sm font-semibold">
            {{ getValidationMessage("amount") }}
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <label class="font-semibold">Tanggal</label>
          <input
            type="text"
            name="date"
            class="bg-transparent border p-3 text-white/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:focus:border-blue-500 flatpickr"
            placeholder="Masukan Tanggal"
            v-model="dataInput.date"
          />
          <p v-if="v$.date.$error" class="text-red-500 text-sm font-semibold">
            {{ getValidationMessage("date") }}
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <label class="font-semibold">Keterangan</label>
          <input
            type="text"
            name="desc"
            class="bg-transparent border p-3 text-white/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:focus:border-blue-500"
            placeholder="Masukan Keterangan"
            v-model="dataInput.desc"
            autocomplete="off"
          />
          <p v-if="v$.desc.$error" class="text-red-500 text-sm font-semibold">
            {{ getValidationMessage("desc") }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <button type="submit" class="font-semibold w-fit px-3 py-1 rounded-md shadow-lg bg-green-400 dark:bg-green-600">Kirim</button>
          <button @click="goback" type="button" class="font-semibold w-fit px-3 py-1 rounded-md shadow-lg bg-red-400 dark:bg-red-600">Batal</button>
        </div>
      </form>
    </div>
    <p>{{ dataInput.name }}</p>
  </section>
</template>

<style scoped></style>
