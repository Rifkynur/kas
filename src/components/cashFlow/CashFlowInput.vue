<script setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useHandleCashFlow } from "../../hook/handleCashFlowHook.js";
import flatpickr from "flatpickr";
import { useHandleExpense } from "@/hook/handleExpense.js";
import { useHandleIncome } from "@/hook/handleIncome.js";
import { useIsSumbitting } from "@/stores/submitting.js";

const { dataInput, v$, handleCashFlowSubmit, getValidationMessage } = useHandleCashFlow();
const { getExpenseById, dataExpenseById } = useHandleExpense();
const { getIncomeById, dataIncomeById } = useHandleIncome();

const router = useRouter();
const route = useRoute();
const currentRouteName = route.name;
const idValue = route.params.id;

const submit = useIsSumbitting();

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
  if (currentRouteName === "edit-expense") {
    getExpenseById(idValue);
  } else if (currentRouteName === "edit-income") {
    getIncomeById(idValue);
  }
});

if (currentRouteName === "edit-expense") {
  watch(
    () => dataExpenseById.value,
    (newData) => {
      if (newData) {
        dataInput.name = newData.name || "";
        dataInput.amount = newData.amount || 0;
        dataInput.date = newData.date || "";
        dataInput.desc = newData.desc || "";
      }
    }
  );
} else {
  watch(
    () => dataIncomeById.value,
    (newData) => {
      if (newData) {
        dataInput.name = newData.name || "";
        dataInput.amount = newData.amount || 0;
        dataInput.date = newData.date || "";
        dataInput.desc = newData.desc || "";
        dataInput.rt = newData.rt || "";
      }
    }
  );
}
</script>
<template>
  <section class="w-full p-4">
    <div class="md:p-6 rounded-md h-full text-black dark:text-white">
      <h1 class="font-bold text-xl mb-8">{{ title }}</h1>
      <form @submit.prevent="handleCashFlowSubmit" class="flex flex-col gap-6 mt-4 w-9/12 mx-auto">
        <div class="flex flex-col gap-4 w-full">
          <label class="font-semibold">Penaggung Jawab</label>
          <input
            type="text"
            name="name"
            class="bg-transparent border border-black p-3 text-black focus:outline-none focus:border-blue-500 focus:border-2 rounded-md placeholder:text-black/50 dark:placeholder:text-white/50 dark:border-white dark:text-white"
            placeholder="Masukan Nama"
            v-model="dataInput.name"
            autocomplete="off"
          />
          <p v-if="v$.name.$error" class="text-red-500 text-sm font-semibold">
            {{ getValidationMessage("name") }}
          </p>
        </div>
        <div class="flex flex-col gap-4" v-if="route.path.includes('income')">
          <label class="font-semibold">Rt</label>
          <select
            name="rt"
            class="bg-transparent border border-black p-3 text-black focus:border-blue-500 focus:outline-none focus:border-2 rounded-md placeholder:text-black/50 dark:text-white dark:placeholder:text-white/50 dark:border-white"
            placeholder="Masukan Jumlah"
            v-model="dataInput.rt"
          >
            <option value="" disabled class="bg-black text-white">masukan Rt</option>
            <option value="rt09" class="bg-black text-white">RT 09</option>
            <option value="rt10" class="bg-black text-white">RT 10</option>
            <option value="rt11" class="bg-black text-white">RT 11</option>
          </select>
          <p v-if="v$.amount.$error" class="text-red-500 text-sm font-semibold">
            {{ getValidationMessage("amount") }}
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <label class="font-semibold">Jumlah</label>
          <input
            type="number"
            name="amount"
            min="0"
            class="bg-transparent border border-black p-3 text-black focus:outline-none focus:border-blue-500 focus:border-2 rounded-md placeholder:text-black/50 dark:border-white dark:text-white dark:placeholder:text-white/50"
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
            class="bg-transparent border border-black p-3 text-black focus:outline-none focus:border-blue-500 focus:border-2 rounded-md placeholder:text-black/50 dark:border-white dark:text-white dark:placeholder:text-white/50 flatpickr"
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
            class="bg-transparent border border-black p-3 text-black focus:outline-none focus:border-blue-500 focus:border-2 rounded-md placeholder:text-black/50 dark:border-white dark:text-white dark:placeholder:text-white/50"
            placeholder="Masukan Keterangan"
            v-model="dataInput.desc"
            autocomplete="off"
          />
          <p v-if="v$.desc.$error" class="text-red-500 text-sm font-semibold">
            {{ getValidationMessage("desc") }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <button type="submit" class="font-semibold w-fit px-3 py-1 rounded-md shadow-lg bg-green-400 dark:bg-green-600" :disabled="submit.isSubmit">{{ submit.isSubmit ? "Bentar ya ..." : "Kirim" }}</button>
          <button @click="goback" type="button" class="font-semibold w-fit px-3 py-1 rounded-md shadow-lg bg-red-400 dark:bg-red-600">Batal</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
