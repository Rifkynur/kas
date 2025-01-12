<script setup>
import flatpickr from "flatpickr";
import { onMounted, ref } from "vue";

const startDate = ref();
const endDate = ref();

onMounted(() => {
  flatpickr(".flatpickr", {
    dateFormat: "d M Y",
    disableMobile: true,
    locale: {
      firstDayOfWeek: 1, // Mulai minggu dari Senin
      weekdays: {
        shorthand: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
        longhand: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
        longhand: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
      },
    },
  });
});
</script>
<template>
  <section class="w-full min-h-screen p-2 md:p-4 text-slate-900 dark:text-white">
    <div class="w-full h-full py-6 rounded-md">
      <h1 class="font-bold text-2xl">Rekapitulasi</h1>
      <div>
        <div class="mt-5 flex flex-col items-start gap-2 md:flex-row md:items-center">
          <select
            name=""
            id=""
            class="text-sm bg-transparent border border-black p-1 text-black/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-white/90 dark:placeholder:text-white/50 dark:text-white dark:border-white dark:focus:border-blue-500 lg:p-3 lg:text-base"
          >
            <option value="" class="bg-transparent" selected disabled>Pilih RT</option>
            <option value="" class="bg-transparent">Rt 09</option>
            <option value="" class="bg-transparent">Rt 10</option>
            <option value="" class="bg-transparent">Rt 11</option>
          </select>
          <div class="flex text-sm gap-2">
            <input
              type="text"
              class="bg-transparent w-[35%] border p-1 border-black text-black/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-black dark:placeholder:text-white/50 dark:border-white dark:focus:border-blue-500 flatpickr lg:p-3 lg:text-base"
              placeholder="tanggal awal"
            />
            <input
              type="text"
              class="bg-transparent w-[35%] border p-1 border-black text-black/90 focus:outline-none focus:border-black focus:border-2 rounded-md placeholder:text-black dark:placeholder:text-white/50 dark:border-white dark:focus:border-blue-500 flatpickr lg:p-3 lg:text-base"
              placeholder="tanggal akhir"
            />
            <button class="font-semibold px-2 w-fit rounded-md shadow-lg bg-green-400 dark:bg-green-600 lg:text-base lg:px-4">cari</button>
          </div>
        </div>
      </div>
      <div class="w-full h-72 bg-white/10 p-2 rounded-md mt-3"></div>
    </div>
  </section>
</template>
<style scoped></style>
