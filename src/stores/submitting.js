import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useIsSumbitting = defineStore("isSumitting", () => {
  const isSubmit = ref(false);
  const startSubmiting = () => {
    isSubmit.value = true;
    console.log(isSubmit.value);
  };
  const stopSubmitting = () => {
    isSubmit.value = false;
  };

  return { startSubmiting, stopSubmitting, isSubmit };
});
