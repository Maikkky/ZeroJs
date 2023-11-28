// Array berisi nama-nama provinsi di Indonesia
const provinsiIndonesia = [
    'Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Jambi', 'Sumatera Selatan',
    'Bengkulu', 'Lampung', 'Kepulauan Bangka Belitung', 'Kepulauan Riau', 'DKI Jakarta',
    'Jawa Barat', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur', 'Banten', 'Bali',
    'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Kalimantan Barat', 'Kalimantan Tengah',
    'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara', 'Sulawesi Utara',
    'Sulawesi Tengah', 'Sulawesi Selatan', 'Sulawesi Tenggara', 'Gorontalo', 'Sulawesi Barat',
    'Maluku', 'Maluku Utara', 'Papua Barat', 'Papua'
  ];
  
  // Menampilkan daftar provinsi di Indonesia
  console.log("Daftar Provinsi di Indonesia:");
  provinsiIndonesia.forEach((provinsi, index) => {
    const nomorUrut = index + 1;
    console.log(`${nomorUrut}. ${provinsi}`);
  });
  