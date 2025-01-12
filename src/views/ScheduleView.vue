<script setup>
import TableSchedule from "@/components/schedule/TableSchedule.vue";
import { schedule } from "../dummyData/schedule";
</script>
<template>
  <section class="p-2 pb-10 min-h-screen md:p-6 w-full text-textLight dark:text-white">
    <h1 class="text-center py-2 font-bold">Jadwal Pengambilan Jimpitan</h1>
    <div class="mt-3 flex flex-col gap-4">
      <div>
        <p class="bg-blue-600 inline-block p-2 text-white font-semibold rounded-lg">Rt 09</p>
        <div class="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
          <TableSchedule v-for="item in schedule.rt09" :key="item.id" :week="item.week" :names="item.names" />
        </div>
      </div>
      <div>
        <p class="bg-blue-600 inline-block p-2 text-white font-semibold rounded-lg">Rt 10</p>
        <div class="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
          <TableSchedule v-for="item in schedule.rt10" :key="item.id" :week="item.week" :names="item.names" />
        </div>
      </div>
      <div>
        <p class="bg-blue-600 inline-block p-2 text-white font-semibold rounded-lg">Rt 11</p>
        <div class="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
          <TableSchedule v-for="item in schedule.rt11" :key="item.id" :week="item.week" :names="item.names" />
        </div>
      </div>
    </div>
    <p class="mt-4 text-sm lg:text-base">
      jika tidak bisa mengambil jimpitan harap hubungi <a href="https://wa.me/628978083790?text=mas, izin hari ini gabisa ikut ambil jimpitan" target="_blank" class="text-blue-800 underline font-bold dark:text-blue-400">Prastomo</a>
    </p>
  </section>
</template>
