import Sidebar from "@/components/public/Sidebar.vue";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#272a37",
        secondary: "#323644",
        darkGreen1: "#008548",
        darkGreen2: "#00a65a",
        light: "#f4f6f9 ",
        lightGold: "#ecb984 ",
        lightGreen: "#00c39a",
        navbarLight: "#AEDFF7 ",
        SidebarLight: "#343a40 ",
        blueLight: "#4CC9FE",
        redLight: "#E82561",
        greenLight: "#5CB338",
        textLight: "#131010",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
