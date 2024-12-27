<script setup>
import { EyeIcon, EyeSlashIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";
import { ref, reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { useRouter } from "vue-router";
const showPassword = ref(false);
const router = useRouter();

const goBack = computed(() => {
  router.push("/");
});
const handleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const dataLogin = reactive({
  email: "",
  password: "",
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  };
});
const v$ = useVuelidate(rules, dataLogin);

const handleSubmit = async () => {
  const result = await v$.value.$validate();

  if (result) {
    alert("success");
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
  if (error.$validator === "email") {
    return "Format email tidak valid.";
  }
  if (error.$validator === "minLength") {
    return `Minimal ${field} adalah ${error.$params.min}.`;
  }

  return "Input tidak valid.";
};
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center h-screen">
    <div class="bg-white/20 p-3 rounded-md text-slate-900 dark:text-white">
      <h1 class="font-semibold text-center">LOGIN FORM</h1>
      <div class="p-8">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
          <div class="w-full flex gap-3 border-b border-black justify-between py-2 dark:border-white">
            <input
              v-model="dataLogin.email"
              type="text"
              name="email"
              id="email"
              class="bg-transparent focus:ring-none outline-none placeholder:font-medium placeholder:text-slate-700 dark:placeholder:text-white/75"
              placeholder="Email"
              autocomplete="off"
            />
            <EnvelopeIcon class="size-6" />
          </div>
          <p v-if="v$.email.$error" class="text-red-500 text-sm font-semibold">
            {{ getValidationMessage("email") }}
          </p>
          <div class="w-full flex gap-3 border-b border-black justify-between py-2 dark:border-white">
            <input
              v-model="dataLogin.password"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              id="password"
              class="bg-transparent focus:ring-none outline-none placeholder:font-medium placeholder:text-slate-700 dark:placeholder:text-white/75"
              placeholder="Password"
              autocomplete="off"
            />
            <EyeIcon v-if="showPassword" class="size-6 cursor-pointer" @click="handleShowPassword" />
            <EyeSlashIcon v-else class="size-6 cursor-pointer" @click="handleShowPassword" />
          </div>
          <p v-if="v$.password.$error" class="text-red-500 text-sm font-semibold">
            {{ getValidationMessage("password") }}
          </p>
          <div class="flex flex-col gap-2">
            <button class="bg-[#4DA1A9] rounded-full py-1 font-semibold dark:bg-blue-500" type="submit">Login</button>
            <button @click="goBack" class="bg-[#F72C5B] rounded-full py-1 font-semibold dark:bg-red-500" type="button">Back</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
