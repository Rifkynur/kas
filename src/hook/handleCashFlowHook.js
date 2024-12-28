import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers, numeric } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";

export const useHandleCashFlow = () => {
  const greaterThanZero = (value) => value > 0;

  const dataInput = reactive({
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

  const v$ = useVuelidate(rules, dataInput);

  const handleAddIncomeSubmit = async () => {
    const result = await v$.value.$validate();
    console.log(dataInput);

    if (result) {
      alert("berhasil");
      console.log(JSON.stringify(dataInput));
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

  return {
    dataInput,
    v$,
    handleAddIncomeSubmit,
    getValidationMessage,
  };
};
