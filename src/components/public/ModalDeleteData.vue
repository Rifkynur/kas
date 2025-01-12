<script setup>
import danger from "../../../public/warning.png";
import { useHandleExpense } from "@/hook/handleExpense";
import { useHandleIncome } from "@/hook/handleIncome";
import { useRoute, useRouter } from "vue-router";
import { useNotify } from "@/utils/utils";
const props = defineProps({
  isOpen: {
    type: Boolean,
    require: true,
  },
  id: {
    type: String,
  },
});

const { deleteExpense } = useHandleExpense();
const { deleteIncome } = useHandleIncome();
const route = useRoute();
const router = useRouter();

const emit = defineEmits(["close"]);
const closeModal = () => {
  emit("close");
};
const deleteData = () => {
  if (route.path.includes("expense")) {
    deleteExpense(props.id);
    closeModal();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  } else {
    deleteIncome(props.id);
    closeModal();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
};
</script>

<template>
  <teleport to="#modal">
    <div v-if="isOpen" class="fixed inset-0 bg-black/20 w-full h-screen z-50 flex items-center justify-center">
      <div class="p-4 bg-white/50 rounded-lg flex flex-col items-center justify-between gap-3 dark:bg-white/60 lg:p-8">
        <img :src="danger" alt="icon" class="size-14 lg:size-20" />
        <h1 class="font-bold">Yakin nih mau hapus data?</h1>

        <div class="flex items-center gap-4">
          <button @click="deleteData" class="px-2 py-1 bg-red-500 text-white rounded-md font-semibold lg:px-3 lg:py-2">Yakin dong</button>
          <button @click="closeModal" class="px-2 py-1 bg-slate-200 text-red-500 border border-red-500 rounded-md font-semibold lg:px-3 lg:py-2">Engga deh</button>
        </div>
      </div>
    </div>
  </teleport>
</template>
