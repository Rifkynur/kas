<script setup>
import { EyeIcon, EyeSlashIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";
import { useHandleAuth } from "@/hook/handleAuth";
import Logo from "../../public/letter-s (1).png";

const { showPassword, goBack, handleShowPassword, v$, handleLogin, getValidationMessage, dataLogin } = useHandleAuth();
</script>

<template>
  <div class="w-full flex px-4 flex-col justify-center items-center h-screen">
    <div class="bg-[#D2E0FB] p-3 w-full rounded-md text-slate-900 shadow-lg dark:bg-white/20 dark:text-white lg:w-[400px]">
      <img :src="Logo" alt="logo" class="size-20 mx-auto" />
      <h1 class="font-semibold text-center pt-2">Login Form</h1>
      <div class="p-8">
        <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
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
            <button class="bg-blue-500 py-1 font-semibold" type="submit">Login</button>
          </div>
          <p class="text-center text-[8px] capitalize lg:text-[10px]">&copy; sedyo utomo</p>
        </form>
      </div>
    </div>
  </div>
</template>
