import { toast } from "vue3-toastify";

export const useNotify = (msg, type) => {
  toast(msg, {
    autoClose: 2000,
    theme: "colored",
    type,
    hideProgressBar: true,
    transition: "bounce",
  });
};

export function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Tidak ada angka desimal
  }).format(number);
}

export const formatDate = (tanggal) => {
  const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

  const date = new Date(tanggal);
  const hari = date.getDate();
  const bulanNama = bulan[date.getMonth()];
  const tahun = date.getFullYear();

  return `${hari} ${bulanNama} ${tahun}`;
};

export const spreadName = (names) => {
  if (!names || typeof names !== "string") return [];
  return names.includes(",") ? names.split(",") : [names];
};
