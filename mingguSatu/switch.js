// Mendefinisikan variabel hari
let hari = "Senin";
let infoHari;

// Menggunakan struktur switch untuk memberikan informasi berdasarkan hari yang dipilih
switch (hari) {
  case "Senin":
  case "Selasa":
  case "Rabu":
  case "Kamis":
    infoHari = "Hari ini di tengah minggu"; // Jika hari Senin, Selasa, Rabu, atau Kamis
    break;
  case "Jumat":
    infoHari = "Hari ini hampir akhir minggu"; // Jika hari Jumat
    break;
  case "Sabtu":
    infoHari = "Hari ini adalah akhir minggu"; // Jika hari Sabtu
    break;
  case "Minggu":
    infoHari = "Hari ini adalah hari libur"; // Jika hari Minggu
    break;
  default:
    infoHari = "Hari tidak valid"; // Jika hari tidak cocok dengan kondisi di atas
    break;
}

// Menampilkan infoHari ke dalam konsol
console.log(infoHari);