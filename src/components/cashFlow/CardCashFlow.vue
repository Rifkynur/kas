<script setup></script>

<template>
  <div class="md:hidden">
    <ul class="flex flex-col gap-3 px-2">
      <li>
        <div class="bg-white/20 text-slate-900 px-4 py-2 flex flex-col gap-3 rounded-md shadow-lg dark:text-white">
          <div class="flex items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-4">
              <span class="font-bold text-green-700 dark:text-blue-500">#1</span>
              <p class="font-semibold dark:text-white/80">12 Juni 2021</p>
            </div>
            <h2 class="tracking-wide uppercase font-semibold">Nama</h2>
          </div>
          <p class="font-semibold dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eius.</p>
          <div class="flex justify-between">
            <h3 class="font-semibold text-sm">Rp.28.000</h3>
            <div class="flex gap-2 text-sm">
              <button class="px-2 py-1 bg-yellow-300 dark:bg-yellow-600 rounded-lg">edit</button>
              <button class="px-2 py-1 bg-red-500 dark:bg-red-600 rounded-lg">delete</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
