import { plugins, scales } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

export const barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      label: "RT 09",
      backgroundColor: "#FB4141",
      data: [80000, 73000, 52000, 64000, 65000, 65000, 70500, 100000, 42000, 59000, 75000, 68000],
    },
    {
      label: "RT 10",
      backgroundColor: "#1d4ed8",
      data: [64000, 60000, 58000, 69000, 70000, 80000, 60000, 70000, 47000, 65000, 68000, 60000],
    },
    {
      label: "RT 11",
      backgroundColor: "#eab308",
      data: [50000, 71000, 50000, 69000, 80000, 80000, 60000, 64000, 75000, 50000, 50000, 60000],
    },
  ],
};

export const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: false,
    legend: {
      labels: {
        color: "white", // Mengubah warna font label di legend
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
        color: "white", // Warna label horizontal
        font: {
          size: window.innerWidth < 768 ? 8 : 12, // Ukuran font (opsional)
          family: "Arial", // Font family (opsional)
          weight: "600",
        },
      },
    },
    y: {
      ticks: {
        color: "rgba(255, 255, 255, 0.8)", // Warna label vertikal
        font: {
          size: window.innerWidth < 768 ? 8 : 12, // Ukuran font label sumbu Y
        },
      },
    },
  },
};

export const pieData = {
  labels: ["RT 09", "RT 10", "RT 11"],
  datasets: [
    {
      backgroundColor: ["#FB4141", "#1d4ed8", "#eab308"],
      data: [3000000, 2400000, 2000000],
    },
  ],
};

export const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  borderWidth: 0,
  plugins: {
    legend: {
      labels: {
        color: "white",
        borderWidth: 0,
        font: {
          size: window.innerWidth < 768 ? 10 : 12,
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
        size: window.innerWidth < 768 ? 10 : 13,
      },
      formatter: (value) => {
        return `Rp.${value.toLocaleString("id-ID")}`; // Menampilkan nilai sektor secara langsung
      },
    },
  },
};

export const lineData = {
  labels: ["24 juni", "12 juli", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Des"],
  datasets: [
    {
      label: "Data One",
      borderColor: "white",
      backgroundColor: "red",
      data: [75000, 76000, 60000, 80000, 72000, 69000, 71000, 68000, 82000, 66000, 70000, 67000],
      borderWidth: 1,
      pointRadius: window.innerWidth < 768 ? 3 : 5,
      pointBorderWidth: 1,
    },
  ],
};
export const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "white",
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
        color: "white", // Warna label horizontal
        font: {
          size: window.innerWidth < 768 ? 8 : 12, // Ukuran font (opsional)
          family: "Arial", // Font family (opsional)
          weight: "600",
        },
      },
      grid: {
        color: "rgba(255,255,255,10)", // Warna garis grid horizontal
        lineWidth: 0.3, // Ketebalan garis grid
      },
    },
    y: {
      ticks: {
        color: "rgba(255, 255, 255, 0.8)", // Warna label vertikal
        font: {
          size: window.innerWidth < 768 ? 8 : 12, // Ukuran font label sumbu Y
        },
      },
      grid: {
        color: "rgba(255,255,255,10)", // Warna garis grid horizontal
        lineWidth: 0.3, // Ketebalan garis grid
      },
    },
  },
};
