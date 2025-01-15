import { plugins, scales } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useToggleSidebarStore } from "../stores/toggleSidebar";
import { useDarkModeStore } from "../stores/darkmode";
import { computed, onMounted, watch, ref } from "vue";
import { data } from "autoprefixer";
import { useGetIncomePerRt } from "../hook/handleGetIncomePerRt";

export const getBarData = (incomePerRtPerYear) => {
  const rt09Data = ref(Array(12).fill(0));
  const rt10Data = ref(Array(12).fill(0));
  const rt11Data = ref(Array(12).fill(0));
  const darkmodeStore = useDarkModeStore();

  watch(
    incomePerRtPerYear,
    (newData) => {
      // Reset data agar tidak bertumpuk
      rt09Data.value = Array(12).fill(0);
      rt10Data.value = Array(12).fill(0);
      rt11Data.value = Array(12).fill(0);

      if (newData && newData.length) {
        newData.forEach((item) => {
          const monthIndex = item.month - 1; // Bulan dalam data dimulai dari 1
          if (item.rt === "rt09") rt09Data.value[monthIndex] += item.totalAmount;
          if (item.rt === "rt10") rt10Data.value[monthIndex] += item.totalAmount;
          if (item.rt === "rt11") rt11Data.value[monthIndex] += item.totalAmount;
        });
      }
    },
    { immediate: true }
  );

  const barData = computed(() => ({
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "RT 09",
        backgroundColor: darkmodeStore.isDark ? "#FB4141" : "#ff5a5f",
        data: rt09Data.value,
      },
      {
        label: "RT 10",
        backgroundColor: darkmodeStore.isDark ? "#1d4ed8" : "#39ff14",
        data: rt10Data.value,
      },
      {
        label: "RT 11",
        backgroundColor: darkmodeStore.isDark ? "#eab308" : "#36454f",
        data: rt11Data.value,
      },
    ],
  }));

  return { barData };
};

export const getBarOption = () => {
  const darkmodeStore = useDarkModeStore();
  const barOptions = computed(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: false,
      legend: {
        labels: {
          color: darkmodeStore.isDark ? "white" : "black", // Mengubah warna font label di legend
          font: {
            size: window.innerWidth < 768 ? 10 : 16,
            weight: "600",
          },
          padding: 22,
          usePointStyle: true, // Mengubah kotak menjadi lingkaran
          pointStyle: "circle", // Bentuk titik: 'circle', 'triangle', 'rect', 'cross', 'star', dll
          boxWidth: 10,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkmodeStore.isDark ? "white" : "black", // Warna label horizontal
          font: {
            size: window.innerWidth < 768 ? 8 : 12, // Ukuran font (opsional)
            family: "Poppins",
            weight: "600",
          },
        },
      },
      y: {
        ticks: {
          color: darkmodeStore.isDark ? "white" : "black", // Warna label vertikal
          font: {
            size: window.innerWidth < 768 ? 8 : 12,
            weight: "700",
          },
        },
      },
    },
  }));
  return { barOptions };
};

export const getPieData = (totalIncomePerRt) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const darkmodeStore = useDarkModeStore();
  // const { getIncomePerRt, incomePerRt } = useGetIncomePerRt();

  const pieData = computed(() => ({
    labels: totalIncomePerRt.value.map((item) => {
      if (item.rt === "rt09") {
        return "RT 09";
      } else if (item.rt === "rt10") {
        return "RT 10";
      } else {
        return "RT 11";
      }
    }),
    datasets: [
      {
        backgroundColor: darkmodeStore.isDark ? ["#FB4141", "#1d4ed8", "#eab308"] : ["#ff5a5f", "#39ff14", "#ECE852"],
        data: totalIncomePerRt.value.map((data) => data._sum.amount),
      },
    ],
  }));

  return { pieData };
};

export const getPieOptions = () => {
  const darkmodeStore = useDarkModeStore();

  const pieOptions = computed(() => ({
    responsive: true,
    maintainAspectRatio: false,
    borderWidth: 0,
    plugins: {
      legend: {
        labels: {
          color: darkmodeStore.isDark ? "white" : "black",
          borderWidth: 0,

          font: {
            size: window.innerWidth < 768 ? 10 : 16,
            weight: "600",
            decoration: "capitalize",
          },
          usePointStyle: true, // Mengubah kotak menjadi lingkaran
          pointStyle: "circle", // Bentuk titik: 'circle', 'triangle', 'rect', 'cross', 'star', dll
          boxWidth: 15,
        },
        tooltip: {
          enabled: false, // Menonaktifkan tooltip hover
        },
      },
      datalabels: {
        color: "black",
        weight: "bold",
        font: {
          weight: "bold",
          size: window.innerWidth < 768 ? 12 : 13,
        },
        formatter: (value) => {
          return `Rp.${value.toLocaleString("id-ID")}`; // Menampilkan nilai sektor secara langsung
        },
      },
    },
  }));
  return { pieOptions };
};

export const getLineData = (income) => {
  const incomePerQuarter = ref(income);
  const darkmodeStore = useDarkModeStore();

  const lineData = computed(() => {
    return {
      labels: incomePerQuarter.value.map((item) => {
        const date = new Date(item.date);
        return date.toLocaleDateString("default", { day: "numeric", month: "short" });
      }),
      datasets: [
        {
          label: "Pemasukan",
          borderColor: darkmodeStore.isDark ? "white" : "black",
          backgroundColor: darkmodeStore.isDark ? "red" : "#ff5a5f",
          data: incomePerQuarter.value.map((item) => {
            return item.amount;
          }),
          borderWidth: 1,
          pointRadius: window.innerWidth < 768 ? 3 : 5,
          pointBorderWidth: 1,
        },
      ],
    };
  });

  return { lineData };
};

export const getLineOptions = () => {
  const darkmodeStore = useDarkModeStore();
  const lineOptions = computed(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: darkmodeStore.isDark ? "white" : "black",
          borderWidth: 0,
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
            weight: "600",
          },
          usePointStyle: true, // Mengubah kotak menjadi lingkaran
          pointStyle: "circle", // Bentuk titik: 'circle', 'triangle', 'rect', 'cross', 'star', dll
          boxWidth: 15,
        },
      },
      datalabels: false,
    },
    scales: {
      x: {
        ticks: {
          color: darkmodeStore.isDark ? "white" : "black", // Warna label horizontal
          font: {
            size: window.innerWidth < 768 ? 8 : 12, // Ukuran font (opsional)
            family: "Poppins", // Font family (opsional)
            weight: "500",
          },
        },
        grid: {
          color: darkmodeStore.isDark ? "white" : "black", // Warna garis grid horizontal
          lineWidth: 0.3, // Ketebalan garis grid
        },
      },
      y: {
        ticks: {
          color: darkmodeStore.isDark ? "white" : "black", // Warna label vertikal
          font: {
            size: window.innerWidth < 768 ? 8 : 12, // Ukuran font label sumbu Y
            weight: "500",
          },
        },
        grid: {
          color: darkmodeStore.isDark ? "white" : "black", // Warna garis grid horizontal
          lineWidth: 0.3, // Ketebalan garis grid
        },
      },
    },
  }));
  return { lineOptions };
};
