<script setup>
import { useHandleAuth } from "@/hook/handleAuth";
import danger from "../../../public/warning.png";
const props = defineProps({
  isOpen: {
    type: Boolean,
    require: true,
  },
});

const { handleLogout } = useHandleAuth();

const emit = defineEmits(["close"]);
const closeModal = () => {
  emit("close");
};
</script>
<template>
  <teleport to="#modal">
    <div v-if="isOpen" class="fixed inset-0 bg-black/90 w-full h-screen z-50 flex items-center justify-center">
      <div class="p-4 bg-white/80 rounded-lg flex flex-col items-center justify-between gap-3 dark:bg-white/60">
        <img :src="danger" alt="icon" class="size-14 lg:size-20" />
        <h1 class="font-bold capitalize">Yakin nih mau logout?</h1>
        <div class="flex items-center gap-4">
          <button @click="handleLogout" class="px-2 py-1 bg-red-500 text-white rounded-md font-semibold lg:px-3 lg:py-2">Yakin dong</button>
          <button @click="closeModal" class="px-2 py-1 bg-slate-200 text-red-500 border border-red-500 rounded-md font-semibold lg:px-3 lg:py-2">Engga deh</button>
        </div>
      </div>
    </div>
  </teleport>
</template>
