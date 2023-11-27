// Mendefinisikan variabel nilai
let nilai = 75;
let pesan;

// Mengevaluasi nilai dan menetapkan pesan berdasarkan rentang nilai
if (nilai >= 80) {
  pesan = "Nilai Anda sangat baik"; // Jika nilai lebih besar atau sama dengan 80
} else if (nilai >= 60 && nilai < 80) {
  pesan = "Nilai Anda cukup baik"; // Jika nilai antara 60 hingga kurang dari 80
} else {
  pesan = "Anda perlu meningkatkan prestasi"; // Jika nilai kurang dari 60
}

// Menampilkan pesan 
console.log(pesan);
