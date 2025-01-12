import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers, numeric } from "@vuelidate/validators";
import { reactive, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useHandleExpense } from "./handleExpense";
import { useHandleIncome } from "./handleIncome";

export const useHandleCashFlow = () => {
  const route = useRoute();
  const currentRouteName = route.name;
  const idParams = route.params.id;

  const { addExpense, editExpense } = useHandleExpense();
  const { addIncome, editIncome } = useHandleIncome();

  const isValidRT = helpers.withMessage("RT harus salah satu dari: rt09, rt10, rt11", (value) => ["rt09", "rt10", "rt11"].includes(value));

  const dataInput = reactive({
    name: "",
    amount: "",
    date: "",
    desc: "",
  });

  watch(
    () => route.path,
    (newPath) => {
      if (newPath.includes("income")) {
        dataInput.rt = "";
      } else {
        delete dataInput.rt;
      }
    },
    { immediate: true }
  );

  const rules = computed(() => {
    const baseRules = {
      name: { required },
      amount: { required, numeric },
      date: { required },
      desc: { required },
    };

    if (route.path.includes("income")) {
      baseRules.rt = { required, isValidRT };
    }

    return baseRules;
  });

  const v$ = useVuelidate(rules, dataInput);

  const handleCashFlowSubmit = async () => {
    const result = await v$.value.$validate();
    // action untuk mengirim form
    if (result) {
      if (route.path.includes("expense")) {
        if (idParams) {
          editExpense(dataInput, idParams);
        } else {
          addExpense(dataInput);
        }
      } else {
        if (idParams) {
          editIncome(dataInput, idParams);
        } else {
          addIncome(dataInput);
        }
      }
    }
  };

  const getValidationMessage = (field) => {
    const fieldErrors = v$.value[field].$errors;
    if (!fieldErrors.length) return "";

    const error = fieldErrors[0];
    if (error.$validator === "required") {
      return `data wajib diisi.`;
    }
    if (error.$validator === "numeric") {
      return `format harus berupa angka`;
    }

    return "Input tidak valid.";
  };

  return {
    dataInput,
    v$,
    handleCashFlowSubmit,
    getValidationMessage,
  };
};
