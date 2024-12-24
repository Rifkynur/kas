<script setup>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers, numeric } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";

const greaterThanZero = (value) => value > 0;
const dataIncome = reactive({
  name: "",
  amount: "",
  date: "",
  desc: "",
});
const rules = computed(() => {
  return {
    name: { required },
    amount: { required, greaterThanZero, numeric },
    date: { required },
    desc: { required },
  };
});

const v$ = useVuelidate(rules, dataIncome);

const handleSubmit = async () => {
  const result = await v$.value.$validate();
  console.log(dataIncome);

  if (result) {
    alert("berhasil");
    console.log(JSON.stringify(dataIncome));
  } else {
    alert("gagal");
  }
};
const getValidationMessage = (field) => {
  const fieldErrors = v$.value[field].$errors;
  if (!fieldErrors.length) return "";

  const error = fieldErrors[0];
  if (error.$validator === "required") {
    return `${field.charAt(0).toUpperCase() + field.slice(1)} wajib diisi.`;
  }
  if (error.$validator === "numeric") {
    return `format harus berupa angka`;
  }
  if (error.$validator === "greaterThanZero") {
    return `Harus diisi lebih dari 0`;
  }

  return "Input tidak valid.";
};

const router = useRouter();
const goback = computed(() => {
  router.back();
});
</script>
<template>
  <section class="w-full p-4">
    <div class="p-6 rounded-md h-full text-white">
      <h1 class="font-bold text-xl mb-8">Tambah Pemasukan</h1>
      <div>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-6 mt-4 w-9/12 mx-auto">
          <div class="flex flex-col gap-4">
            <label class="font-semibold">Penaggung Jawab</label>
            <input type="text" name="name" class="bg-transparent border p-3 text-white/90 focus:outline-none focus:border-blue-500 focus:border-2 rounded-md" placeholder="Masukan Nama" v-model="dataIncome.name" autocomplete="off" />
            <p v-if="v$.name.$error" class="text-red-500 text-sm font-semibold">
              {{ getValidationMessage("name") }}
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <label class="font-semibold">Jumlah</label>
            <input type="number" name="amount" min="0" class="bg-transparent border p-3 text-white/90 focus:outline-none focus:border-blue-500 focus:border-2 rounded-md" placeholder="Masukan Jumlah" v-model="dataIncome.amount" />
            <p v-if="v$.amount.$error" class="text-red-500 text-sm font-semibold">
              {{ getValidationMessage("amount") }}
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <label class="font-semibold">Tanggal</label>
            <input type="date" name="date" class="bg-transparent border p-3 text-white/90 focus:outline-none focus:border-blue-500 focus:border-2 rounded-md" placeholder="Masukan Tanggal" v-model="dataIncome.date" />
            <p v-if="v$.date.$error" class="text-red-500 text-sm font-semibold">
              {{ getValidationMessage("date") }}
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <label class="font-semibold">Keterangan</label>
            <input type="text" name="desc" class="bg-transparent border p-3 text-white/90 focus:outline-none focus:border-blue-500 focus:border-2 rounded-md" placeholder="Masukan Keterangan" v-model="dataIncome.desc" autocomplete="off" />
            <p v-if="v$.desc.$error" class="text-red-500 text-sm font-semibold">
              {{ getValidationMessage("desc") }}
            </p>
          </div>
          <div class="flex items-center gap-3">
            <button type="submit" class="bg-green-600 font-semibold w-fit px-3 py-1 rounded-md shadow-lg">Kirim</button>
            <button @click="goback" type="button" class="bg-red-600 font-semibold w-fit px-3 py-1 rounded-md shadow-lg">Batal</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
