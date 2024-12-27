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
        light: "#FAF7F0 ",
        navbarLight: "#D9D7D1 ",
        SidebarLight: "#F4F0E6 ",
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
