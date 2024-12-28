import { plugins, scales } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useToggleSidebarStore } from "../stores/toggleSidebar";
import { useDarkModeStore } from "../stores/darkmode";
import { computed } from "vue";

export const getBarData = () => {
  const darkmodeStore = useDarkModeStore();

  const barData = computed(() => ({
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "RT 09",
        backgroundColor: darkmodeStore.isDark ? "#FB4141" : "#ff5a5f",
        data: [80000, 73000, 52000, 64000, 65000, 65000, 70500, 100000, 42000, 59000, 75000, 68000],
      },
      {
        label: "RT 10",
        backgroundColor: darkmodeStore.isDark ? "#1d4ed8" : "#39ff14",
        data: [64000, 60000, 58000, 69000, 70000, 80000, 60000, 70000, 47000, 65000, 68000, 60000],
      },
      {
        label: "RT 11",
        backgroundColor: darkmodeStore.isDark ? "#eab308" : "#36454f",
        data: [50000, 71000, 50000, 69000, 80000, 80000, 60000, 64000, 75000, 50000, 50000, 60000],
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

export const getPieData = () => {
  const darkmodeStore = useDarkModeStore();

  const pieData = computed(() => ({
    labels: ["RT 09", "RT 10", "RT 11"],
    datasets: [
      {
        backgroundColor: darkmodeStore.isDark ? ["#FB4141", "#1d4ed8", "#eab308"] : ["#ff5a5f", "#39ff14", "#ECE852"],
        data: [30000000, 24000000, 20000000],
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

export const getLineData = () => {
  const darkmodeStore = useDarkModeStore();
  const lineData = computed(() => ({
    labels: ["20 jul", "23 jul", "30 jul", "1 agu", "8 agu", "16 agu", "July", "Aug", "Sep", "Oct", "Nov", "Des"],
    datasets: [
      {
        label: "Data One",
        borderColor: darkmodeStore.isDark ? "white" : "black",
        backgroundColor: darkmodeStore.isDark ? "red" : "#ff5a5f",
        data: [75000, 76000, 60000, 80000, 72000, 69000, 71000, 68000, 82000, 66000, 70000, 67000],
        borderWidth: 1,
        pointRadius: window.innerWidth < 768 ? 3 : 5,
        pointBorderWidth: 1,
      },
    ],
  }));
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
